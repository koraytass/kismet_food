"""
Monitor — Database layer
Async PostgreSQL via asyncpg + SQLAlchemy core
"""
import hashlib
from datetime import datetime, timezone
from typing import Optional
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession, async_sessionmaker
from sqlalchemy import text
from config import get_settings
import structlog

log = structlog.get_logger()
settings = get_settings()

engine = create_async_engine(
    settings.database_url,
    pool_size=5,
    max_overflow=10,
    echo=settings.debug,
)

AsyncSessionLocal = async_sessionmaker(engine, expire_on_commit=False)


async def get_db():
    async with AsyncSessionLocal() as session:
        yield session


async def init_db():
    """Run schema.sql on startup if tables don't exist."""
    import os
    schema_path = os.path.join(os.path.dirname(__file__), "db", "schema.sql")
    with open(schema_path) as f:
        schema = f.read()
    async with engine.begin() as conn:
        await conn.execute(text(schema))
    log.info("database.initialized")


def make_checksum(text_content: str) -> str:
    return hashlib.md5(text_content.encode()).hexdigest()


# ─────────────────────────────────────────────
# Signal operations
# ─────────────────────────────────────────────

async def insert_raw_signal(
    db: AsyncSession,
    source_name: str,
    source_url: str,
    source_type: str,
    raw_text: str,
    published_at: Optional[datetime] = None,
) -> Optional[str]:
    """Insert a raw signal. Returns UUID if new, None if duplicate."""
    checksum = make_checksum(raw_text)
    result = await db.execute(
        text("""
            INSERT INTO raw_signals (source_name, source_url, source_type, raw_text, published_at, checksum)
            VALUES (:source_name, :source_url, :source_type, :raw_text, :published_at, :checksum)
            ON CONFLICT (checksum) DO NOTHING
            RETURNING id
        """),
        {
            "source_name": source_name,
            "source_url": source_url,
            "source_type": source_type,
            "raw_text": raw_text,
            "published_at": published_at,
            "checksum": checksum,
        }
    )
    await db.commit()
    row = result.fetchone()
    return str(row[0]) if row else None


async def get_unprocessed_signals(db: AsyncSession, limit: int = 50):
    result = await db.execute(
        text("""
            SELECT id, source_name, source_url, raw_text, published_at, fetched_at
            FROM raw_signals
            WHERE processed = FALSE
            ORDER BY fetched_at DESC
            LIMIT :limit
        """),
        {"limit": limit}
    )
    return result.fetchall()


async def mark_signal_processed(db: AsyncSession, signal_id: str):
    await db.execute(
        text("UPDATE raw_signals SET processed = TRUE WHERE id = :id"),
        {"id": signal_id}
    )
    await db.commit()


async def insert_intelligence(db: AsyncSession, data: dict) -> str:
    result = await db.execute(
        text("""
            INSERT INTO intelligence_signals
            (raw_signal_id, commodity, category, impact_level, duration,
             origin_regions, dis_contribution, headline, detail, source_reliability)
            VALUES
            (:raw_signal_id, :commodity, :category, :impact_level, :duration,
             :origin_regions, :dis_contribution, :headline, :detail, :source_reliability)
            RETURNING id
        """),
        data
    )
    await db.commit()
    return str(result.fetchone()[0])


async def get_recent_intelligence(db: AsyncSession, commodity: str, hours: int = 48):
    result = await db.execute(
        text("""
            SELECT headline, category, impact_level, duration, origin_regions,
                   dis_contribution, detail, created_at
            FROM intelligence_signals
            WHERE commodity = :commodity
              AND created_at > NOW() - INTERVAL ':hours hours'
            ORDER BY dis_contribution DESC, created_at DESC
            LIMIT 30
        """.replace(":hours hours", f"{hours} hours")),
        {"commodity": commodity}
    )
    return result.fetchall()


# ─────────────────────────────────────────────
# Commodity state
# ─────────────────────────────────────────────

async def update_commodity_state(db: AsyncSession, commodity: str, updates: dict):
    updates["commodity"] = commodity
    updates["updated_at"] = datetime.now(timezone.utc)
    set_clause = ", ".join(f"{k} = :{k}" for k in updates if k != "commodity")
    await db.execute(
        text(f"UPDATE commodity_state SET {set_clause} WHERE commodity = :commodity"),
        updates
    )
    await db.commit()


async def get_all_commodity_states(db: AsyncSession):
    result = await db.execute(
        text("SELECT * FROM commodity_state ORDER BY dis_score DESC")
    )
    return result.fetchall()


async def get_commodity_state(db: AsyncSession, commodity: str):
    result = await db.execute(
        text("SELECT * FROM commodity_state WHERE commodity = :c"),
        {"c": commodity}
    )
    return result.fetchone()


# ─────────────────────────────────────────────
# Price history
# ─────────────────────────────────────────────

async def insert_price(db: AsyncSession, commodity: str, price: float, unit: str, source: str):
    await db.execute(
        text("""
            INSERT INTO price_history (commodity, price_usd, price_unit, source)
            VALUES (:commodity, :price, :unit, :source)
        """),
        {"commodity": commodity, "price": price, "unit": unit, "source": source}
    )
    await db.commit()


async def get_price_history(db: AsyncSession, commodity: str, days: int = 30):
    result = await db.execute(
        text("""
            SELECT price_usd, price_unit, source, recorded_at
            FROM price_history
            WHERE commodity = :c AND recorded_at > NOW() - INTERVAL ':d days'
            ORDER BY recorded_at ASC
        """.replace(":d days", f"{days} days")),
        {"c": commodity}
    )
    return result.fetchall()


# ─────────────────────────────────────────────
# Scraper health
# ─────────────────────────────────────────────

async def log_scraper_run(db: AsyncSession, name: str, status: str,
                           signals: int = 0, error: str = None, duration_ms: int = 0):
    await db.execute(
        text("""
            INSERT INTO scraper_health (scraper_name, status, signals_fetched, error_message, duration_ms)
            VALUES (:name, :status, :signals, :error, :duration)
        """),
        {"name": name, "status": status, "signals": signals, "error": error, "duration": duration_ms}
    )
    await db.commit()


async def get_scraper_health(db: AsyncSession):
    result = await db.execute(
        text("""
            SELECT DISTINCT ON (scraper_name)
                scraper_name, status, signals_fetched, error_message, ran_at
            FROM scraper_health
            ORDER BY scraper_name, ran_at DESC
        """)
    )
    return result.fetchall()


# ─────────────────────────────────────────────
# Alerts
# ─────────────────────────────────────────────

async def create_alert(db: AsyncSession, commodity: str, dis: int,
                        level: str, headline: str, body: str):
    await db.execute(
        text("""
            INSERT INTO alerts (commodity, dis_score, impact_level, headline, body)
            VALUES (:commodity, :dis, :level, :headline, :body)
        """),
        {"commodity": commodity, "dis": dis, "level": level, "headline": headline, "body": body}
    )
    await db.commit()


async def get_alerts(db: AsyncSession, unseen_only: bool = False, limit: int = 20):
    where = "WHERE seen = FALSE" if unseen_only else ""
    result = await db.execute(
        text(f"""
            SELECT id, commodity, dis_score, impact_level, headline, body, seen, created_at
            FROM alerts {where}
            ORDER BY created_at DESC
            LIMIT :limit
        """),
        {"limit": limit}
    )
    return result.fetchall()


async def mark_alerts_seen(db: AsyncSession):
    await db.execute(text("UPDATE alerts SET seen = TRUE WHERE seen = FALSE"))
    await db.commit()
