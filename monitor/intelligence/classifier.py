"""
Monitor — Intelligence Layer: Stage 1 Classifier
Classifies each raw signal using Claude Haiku (fast, cheap).
Runs after every ingestion batch on unprocessed signals.
"""
import json
import asyncio
import structlog
import anthropic
from config import get_settings

log = structlog.get_logger()
settings = get_settings()

COMMODITIES = ["arabica", "robusta", "pepper", "cashew", "almond"]

SYSTEM_PROMPT = """You are the signal classification engine for Monitor, a private agricultural commodity intelligence system used by an experienced Turkish coffee and commodities importer.

Your job: classify incoming raw signals from news, official reports, weather data, and trade sources.

RESPOND ONLY WITH VALID JSON. No other text. No markdown fences.

Response schema:
{
  "relevant": true/false,
  "commodity": "arabica" | "robusta" | "pepper" | "cashew" | "almond" | "multiple" | "none",
  "commodities": ["arabica", "robusta"],  // all commodities affected, even if just one
  "category": "weather" | "logistics" | "political" | "disease" | "price" | "supply" | "demand" | "currency" | "policy",
  "impact_level": "low" | "medium" | "high" | "critical",
  "duration": "short" | "medium" | "long",  // short=<2mo, medium=3-6mo, long=6mo+
  "origin_regions": ["brazil", "minas_gerais"],  // lowercase, specific
  "dis_contribution": <integer 0-40>,  // this signal's raw score toward DIS
  "headline": "<one precise sentence summarizing the signal>",
  "detail": "<2-3 sentences: what happened, why it matters, what it means for supply/price>"
}

DIS CONTRIBUTION GUIDE (0–40):
- 35-40: Confirmed crop-destroying frost / major drought / disease outbreak / port closure
- 25-34: Significant weather anomaly / export ban / major currency collapse / confirmed harvest failure
- 15-24: Concerning trend / harvest revision / logistics delays / political tension near origins
- 8-14: Minor weather / small revision / soft demand signal / currency pressure
- 1-7:  Background noise / market commentary / minor price movement
- 0:    Irrelevant to the 5 monitored commodities

SOURCE RELIABILITY ADJUSTMENT:
- USDA, ICO, FAO, CONAB → weight × 1.3 (authoritative)
- Trade press (Daily Coffee News, Spice Board) → weight × 1.0
- General news → weight × 0.8
- Social/blog → weight × 0.6

For weather data: read temperature and precipitation values literally. Frost below 2°C = critical for arabica. Drought (<5mm/7d) = high risk for coffee. Heat >38°C = high risk.

Be a calibrated analyst. Not every storm is critical. Not every price move is actionable. Assign scores honestly."""


async def classify_signal(client: anthropic.AsyncAnthropic, signal: dict) -> dict:
    """Classify a single raw signal. Returns classification dict."""
    source_name = signal.get("source_name", "unknown")
    raw_text = signal.get("raw_text", "")

    # Truncate very long texts
    if len(raw_text) > 4000:
        raw_text = raw_text[:4000] + "... [truncated]"

    user_message = f"""SOURCE: {source_name}
SIGNAL TEXT:
{raw_text}

Classify this signal for the Monitor intelligence system."""

    try:
        response = await client.messages.create(
            model=settings.classifier_model,
            max_tokens=600,
            system=SYSTEM_PROMPT,
            messages=[{"role": "user", "content": user_message}]
        )

        raw_json = response.content[0].text.strip()
        # Strip any accidental markdown
        raw_json = raw_json.replace("```json", "").replace("```", "").strip()
        result = json.loads(raw_json)
        return result

    except json.JSONDecodeError as e:
        log.warning("classifier.json_error", source=source_name, error=str(e))
        return {"relevant": False, "dis_contribution": 0}
    except Exception as e:
        log.error("classifier.error", source=source_name, error=str(e))
        return {"relevant": False, "dis_contribution": 0}


async def run_classifier(db_session_factory) -> int:
    """Process all unprocessed signals. Returns count classified."""
    from db.database import (
        get_unprocessed_signals, mark_signal_processed,
        insert_intelligence, AsyncSessionLocal
    )

    client = anthropic.AsyncAnthropic(api_key=settings.anthropic_api_key)
    total_classified = 0

    async with db_session_factory() as db:
        signals = await get_unprocessed_signals(db, limit=50)

    if not signals:
        log.info("classifier.no_signals")
        return 0

    log.info("classifier.start", count=len(signals))

    # Process in batches of 5 (rate limit friendly)
    for i in range(0, len(signals), 5):
        batch = signals[i:i+5]
        tasks = [
            classify_signal(client, {
                "source_name": s[1],
                "source_url": s[2],
                "raw_text": s[3],
                "published_at": s[4],
                "fetched_at": s[5],
            })
            for s in batch
        ]
        results = await asyncio.gather(*tasks, return_exceptions=True)

        async with db_session_factory() as db:
            for signal_row, classification in zip(batch, results):
                signal_id = str(signal_row[0])

                # Always mark processed
                await mark_signal_processed(db, signal_id)

                if isinstance(classification, Exception):
                    continue
                if not classification.get("relevant", False):
                    continue
                if classification.get("dis_contribution", 0) < 2:
                    continue  # filter true noise

                # Insert intelligence record for each commodity
                commodities = classification.get("commodities", [])
                if not commodities:
                    commodity = classification.get("commodity", "none")
                    commodities = [commodity] if commodity not in ["none", "multiple"] else []

                for commodity in commodities:
                    if commodity not in COMMODITIES:
                        continue
                    await insert_intelligence(db, {
                        "raw_signal_id": signal_id,
                        "commodity": commodity,
                        "category": classification.get("category", "unknown"),
                        "impact_level": classification.get("impact_level", "low"),
                        "duration": classification.get("duration", "short"),
                        "origin_regions": classification.get("origin_regions", []),
                        "dis_contribution": classification.get("dis_contribution", 0),
                        "headline": classification.get("headline", "Signal detected"),
                        "detail": classification.get("detail", ""),
                        "source_reliability": _source_reliability(signal_row[1]),
                    })

                total_classified += 1

        # Polite rate limiting
        await asyncio.sleep(0.5)

    log.info("classifier.complete", classified=total_classified)
    return total_classified


def _source_reliability(source_name: str) -> int:
    """Return reliability score 0-100 based on source name."""
    name = source_name.lower()
    if any(x in name for x in ["usda", "ico", "fao", "conab", "spices_board", "coffee_board"]):
        return 92
    if any(x in name for x in ["cecafe", "vicofa", "vpsa", "bascfa", "almond_board"]):
        return 85
    if any(x in name for x in ["rabobank", "daily_coffee", "perfect_daily", "freightwaves"]):
        return 80
    if any(x in name for x in ["weather_", "noaa", "copernicus"]):
        return 88
    return 65
