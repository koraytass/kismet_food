-- Monitor: Global Agricultural Intelligence System
-- PostgreSQL schema

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ─────────────────────────────────────────────
-- RAW SIGNALS (append-only, never deleted)
-- ─────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS raw_signals (
    id              UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    source_name     TEXT NOT NULL,
    source_url      TEXT,
    source_type     TEXT NOT NULL, -- 'rss', 'scrape', 'api', 'weather'
    raw_text        TEXT NOT NULL,
    published_at    TIMESTAMPTZ,
    fetched_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    checksum        TEXT UNIQUE, -- md5 of raw_text to prevent duplicates
    processed       BOOLEAN DEFAULT FALSE
);

CREATE INDEX IF NOT EXISTS idx_raw_signals_processed ON raw_signals(processed, fetched_at DESC);
CREATE INDEX IF NOT EXISTS idx_raw_signals_source ON raw_signals(source_name, fetched_at DESC);

-- ─────────────────────────────────────────────
-- PROCESSED INTELLIGENCE (classified signals)
-- ─────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS intelligence_signals (
    id              UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    raw_signal_id   UUID REFERENCES raw_signals(id),
    commodity       TEXT NOT NULL, -- 'arabica', 'robusta', 'pepper', 'cashew', 'almond'
    category        TEXT NOT NULL, -- 'weather', 'logistics', 'political', 'disease', 'price', 'supply', 'demand'
    impact_level    TEXT NOT NULL, -- 'low', 'medium', 'high', 'critical'
    duration        TEXT NOT NULL, -- 'short', 'medium', 'long'
    origin_regions  TEXT[],        -- e.g. ['brazil', 'minas_gerais']
    dis_contribution INTEGER,      -- 0–40, this signal's raw contribution to DIS
    headline        TEXT NOT NULL, -- one-line summary
    detail          TEXT,          -- full AI-generated analysis
    source_reliability INTEGER DEFAULT 50, -- 0-100
    created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_intel_commodity ON intelligence_signals(commodity, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_intel_impact ON intelligence_signals(impact_level, created_at DESC);

-- ─────────────────────────────────────────────
-- COMMODITY STATE (one row per commodity, living document)
-- ─────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS commodity_state (
    commodity           TEXT PRIMARY KEY,
    dis_score           INTEGER NOT NULL DEFAULT 0,
    dis_trend           TEXT DEFAULT 'stable', -- 'rising', 'falling', 'stable'
    dis_7d_ago          INTEGER DEFAULT 0,
    impact_level        TEXT NOT NULL DEFAULT 'low',
    primary_drivers     JSONB DEFAULT '[]',
    rolling_brief       TEXT,  -- AI-synthesized narrative, updated every 6h
    procurement_action  TEXT,  -- current recommended action
    price_usd           NUMERIC(10,4), -- latest spot price
    price_unit          TEXT DEFAULT 'per lb',
    price_change_pct    NUMERIC(6,2),
    last_briefed_at     TIMESTAMPTZ,
    updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Initialize commodity rows
INSERT INTO commodity_state (commodity, dis_score, impact_level) VALUES
    ('arabica', 0, 'low'),
    ('robusta', 0, 'low'),
    ('pepper',  0, 'low'),
    ('cashew',  0, 'low'),
    ('almond',  0, 'low')
ON CONFLICT (commodity) DO NOTHING;

-- ─────────────────────────────────────────────
-- PRICE HISTORY
-- ─────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS price_history (
    id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    commodity   TEXT NOT NULL,
    price_usd   NUMERIC(10,4) NOT NULL,
    price_unit  TEXT DEFAULT 'per lb',
    source      TEXT,
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_price_commodity ON price_history(commodity, recorded_at DESC);

-- ─────────────────────────────────────────────
-- SCRAPER HEALTH (monitoring)
-- ─────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS scraper_health (
    id              UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    scraper_name    TEXT NOT NULL,
    status          TEXT NOT NULL, -- 'ok', 'error', 'timeout'
    signals_fetched INTEGER DEFAULT 0,
    error_message   TEXT,
    duration_ms     INTEGER,
    ran_at          TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_health_scraper ON scraper_health(scraper_name, ran_at DESC);

-- ─────────────────────────────────────────────
-- ALERTS LOG
-- ─────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS alerts (
    id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    commodity   TEXT NOT NULL,
    dis_score   INTEGER NOT NULL,
    impact_level TEXT NOT NULL,
    headline    TEXT NOT NULL,
    body        TEXT,
    seen        BOOLEAN DEFAULT FALSE,
    created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_alerts_seen ON alerts(seen, created_at DESC);
