"""
Monitor — RSS Scraper Agent
Polls all RSS/Atom feeds. Zero blocking risk. Runs every 2 hours.
"""
import asyncio
import time
from datetime import datetime, timezone
from typing import Optional
import feedparser
import httpx
import structlog
from tenacity import retry, stop_after_attempt, wait_exponential

log = structlog.get_logger()

HEADERS = {
    "User-Agent": "Monitor/1.0 (Private commodity intelligence tool; contact owner)",
    "Accept": "application/rss+xml, application/atom+xml, text/xml, */*",
}

RELEVANCE_KEYWORDS = {
    "arabica": ["arabica", "coffee", "brazil coffee", "colombia coffee", "ethiopia coffee",
                "minas gerais", "coffee harvest", "coffee export", "ice new york coffee",
                "frost coffee", "coffee production", "coffee price"],
    "robusta": ["robusta", "conilon", "vietnam coffee", "indonesia coffee", "uganda coffee",
                "ice london coffee", "soluble coffee", "instant coffee", "liffe coffee",
                "coffee vietnam", "dak lak", "espiritu santo coffee"],
    "pepper": ["black pepper", "pepper export", "pepper price", "vpsa", "dak lak pepper",
               "kerala pepper", "pepper harvest", "pepper supply", "piperine", "pepper india",
               "pepper vietnam", "pepper indonesia", "spice price"],
    "cashew": ["cashew", "raw cashew nut", "rcn", "w320", "cashew export", "cashew price",
               "tanzania cashew", "ivory coast cashew", "cote d'ivoire cashew", "cashew harvest",
               "cashew vietnam", "bascfa", "cashew india"],
    "almond": ["almond", "almond price", "almond export", "almond board", "california almond",
               "almond harvest", "almond supply", "nonpareil", "almond australia",
               "tree nuts", "almond crop"],
}

ALL_KEYWORDS = set()
for kws in RELEVANCE_KEYWORDS.values():
    ALL_KEYWORDS.update(kw.lower() for kw in kws)


def is_relevant(text: str) -> tuple[bool, list[str]]:
    """Check if text is relevant to any monitored commodity. Returns (relevant, matched_commodities)."""
    text_lower = text.lower()
    matched = []
    for commodity, keywords in RELEVANCE_KEYWORDS.items():
        if any(kw in text_lower for kw in keywords):
            matched.append(commodity)
    return len(matched) > 0, matched


def clean_text(entry: feedparser.FeedParserDict) -> str:
    """Extract clean text from a feed entry."""
    parts = []
    if hasattr(entry, "title") and entry.title:
        parts.append(entry.title)
    if hasattr(entry, "summary") and entry.summary:
        # Strip basic HTML
        import re
        summary = re.sub(r"<[^>]+>", " ", entry.summary)
        summary = re.sub(r"\s+", " ", summary).strip()
        parts.append(summary[:1000])  # cap at 1000 chars
    if hasattr(entry, "link") and entry.link:
        parts.append(f"Source: {entry.link}")
    return "\n".join(parts)


def parse_published(entry) -> Optional[datetime]:
    """Parse publication date from feed entry."""
    for attr in ["published_parsed", "updated_parsed", "created_parsed"]:
        val = getattr(entry, attr, None)
        if val:
            try:
                import calendar
                return datetime.fromtimestamp(calendar.timegm(val), tz=timezone.utc)
            except Exception:
                pass
    return None


@retry(stop=stop_after_attempt(3), wait=wait_exponential(multiplier=1, min=2, max=10))
async def fetch_feed(client: httpx.AsyncClient, feed_config: dict) -> list[dict]:
    """Fetch and parse a single RSS feed. Returns list of signal dicts."""
    signals = []
    url = feed_config["url"]
    name = feed_config["name"]

    try:
        response = await client.get(url, timeout=15.0)
        response.raise_for_status()
        feed = feedparser.parse(response.text)

        for entry in feed.entries[:20]:  # cap at 20 newest entries per feed
            text = clean_text(entry)
            if len(text) < 30:
                continue

            relevant, matched_commodities = is_relevant(text)
            if not relevant:
                continue

            signals.append({
                "source_name": name,
                "source_url": getattr(entry, "link", url),
                "source_type": "rss",
                "raw_text": text,
                "published_at": parse_published(entry),
                "matched_commodities": matched_commodities,
            })

        log.info("rss.fetched", source=name, count=len(signals))
    except Exception as e:
        log.warning("rss.error", source=name, error=str(e))
        raise  # let tenacity retry

    return signals


async def run_rss_scraper(db_session_factory, feeds: list[dict]) -> int:
    """Run all RSS scrapers. Returns total new signals inserted."""
    from db.database import insert_raw_signal
    t0 = time.time()
    total_new = 0

    async with httpx.AsyncClient(headers=HEADERS, follow_redirects=True) as client:
        tasks = [fetch_feed(client, feed) for feed in feeds]
        results = await asyncio.gather(*tasks, return_exceptions=True)

    async with db_session_factory() as db:
        for signals_or_exc in results:
            if isinstance(signals_or_exc, Exception):
                continue
            for signal in signals_or_exc:
                signal_id = await insert_raw_signal(
                    db,
                    source_name=signal["source_name"],
                    source_url=signal["source_url"],
                    source_type=signal["source_type"],
                    raw_text=signal["raw_text"],
                    published_at=signal["published_at"],
                )
                if signal_id:
                    total_new += 1

    elapsed = int((time.time() - t0) * 1000)
    log.info("rss_scraper.complete", new_signals=total_new, duration_ms=elapsed)
    return total_new
