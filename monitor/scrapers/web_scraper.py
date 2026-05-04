"""
Monitor — Web Scraper Agent
Scrapes static HTML pages: official reports, cooperative sites, price pages.
Uses httpx + BeautifulSoup. Playwright used only as fallback for JS-heavy pages.
"""
import asyncio
import time
import re
from datetime import datetime, timezone
from typing import Optional
import httpx
from bs4 import BeautifulSoup
import structlog
from tenacity import retry, stop_after_attempt, wait_exponential

log = structlog.get_logger()

HEADERS = {
    "User-Agent": "Mozilla/5.0 (compatible; Monitor-Bot/1.0; private research tool)",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.5",
}

# ─────────────────────────────────────────────
# Site-specific extractors
# ─────────────────────────────────────────────

def extract_generic(html: str, url: str, max_chars: int = 3000) -> str:
    """Generic extractor: grabs article/main content text."""
    soup = BeautifulSoup(html, "lxml")

    # Remove noise
    for tag in soup(["script", "style", "nav", "footer", "header", "aside",
                     "form", "button", "meta", "noscript"]):
        tag.decompose()

    # Try semantic containers first
    for selector in ["article", "main", ".content", ".article-body",
                     ".entry-content", ".post-content", "#content", ".news-content"]:
        container = soup.select_one(selector)
        if container:
            text = container.get_text(separator=" ", strip=True)
            if len(text) > 100:
                return text[:max_chars]

    # Fallback: body text
    body = soup.find("body")
    if body:
        return body.get_text(separator=" ", strip=True)[:max_chars]

    return soup.get_text(separator=" ", strip=True)[:max_chars]


def extract_usda_fas(html: str, url: str) -> str:
    """USDA FAS page extractor — targets their report listing structure."""
    soup = BeautifulSoup(html, "lxml")
    texts = []

    # Grab report titles and dates
    for item in soup.select(".views-row, .report-item, article, .field-content")[:10]:
        title = item.find(["h2", "h3", "a"])
        if title:
            texts.append(title.get_text(strip=True))

    # Also grab any summary text
    for p in soup.select("p")[:5]:
        t = p.get_text(strip=True)
        if len(t) > 50:
            texts.append(t)

    return "\n".join(texts)[:3000] if texts else extract_generic(html, url)


def extract_indexmundi(html: str, url: str) -> str:
    """IndexMundi commodity price page — extract price table."""
    soup = BeautifulSoup(html, "lxml")
    texts = []

    # Try to get the data table
    table = soup.find("table")
    if table:
        for row in table.find_all("tr")[-6:]:  # last 6 months
            cells = [c.get_text(strip=True) for c in row.find_all(["td", "th"])]
            if cells:
                texts.append(" | ".join(cells))

    # Get any headline price
    for el in soup.select("h1, h2, .price, .current-price"):
        t = el.get_text(strip=True)
        if t:
            texts.insert(0, t)

    return "\n".join(texts)[:2000] if texts else extract_generic(html, url)


EXTRACTOR_MAP = {
    "usda_fas": extract_usda_fas,
    "indexmundi": extract_indexmundi,
}


def get_extractor(name: str):
    for key, fn in EXTRACTOR_MAP.items():
        if key in name:
            return fn
    return extract_generic


# ─────────────────────────────────────────────
# Relevance filtering (same as RSS scraper)
# ─────────────────────────────────────────────
RELEVANCE_KEYWORDS = {
    "arabica": ["arabica", "coffee", "minas gerais", "coffee harvest", "coffee export",
                "coffee production", "coffee price", "espresso", "specialty coffee"],
    "robusta": ["robusta", "conilon", "vietnam coffee", "indonesia coffee", "soluble coffee",
                "instant coffee", "dak lak", "coffee vietnam"],
    "pepper": ["black pepper", "pepper export", "pepper price", "piper nigrum",
               "kerala pepper", "pepper harvest", "pepper supply", "pepper indonesia",
               "pepper vietnam", "dak lak pepper"],
    "cashew": ["cashew", "raw cashew", "rcn", "w320", "cashew export", "cashew price",
               "cashew harvest", "cashew tanzania", "cashew ivory coast", "cashew india"],
    "almond": ["almond", "almond price", "almond export", "california almond",
               "almond harvest", "almond supply", "nonpareil", "tree nuts california"],
}


def is_relevant(text: str) -> tuple[bool, list[str]]:
    text_lower = text.lower()
    matched = []
    for commodity, keywords in RELEVANCE_KEYWORDS.items():
        if any(kw in text_lower for kw in keywords):
            matched.append(commodity)
    return len(matched) > 0, matched


# ─────────────────────────────────────────────
# Core scraper
# ─────────────────────────────────────────────

@retry(stop=stop_after_attempt(2), wait=wait_exponential(multiplier=2, min=3, max=20))
async def scrape_page(client: httpx.AsyncClient, target: dict) -> Optional[dict]:
    """Scrape a single target page. Returns signal dict or None."""
    url = target["url"]
    name = target["name"]

    try:
        response = await client.get(url, timeout=20.0)
        response.raise_for_status()

        extractor = get_extractor(name)
        text = extractor(response.text, url)

        if len(text) < 50:
            log.warning("web_scraper.empty", source=name)
            return None

        relevant, matched = is_relevant(text)
        if not relevant:
            # Still store it — the AI might find signal we keyword-missed
            # but flag it lower reliability
            pass

        label = f"[{target['commodities']}] {name.replace('_', ' ').title()}\n{text}"

        return {
            "source_name": name,
            "source_url": url,
            "source_type": "scrape",
            "raw_text": label,
            "published_at": datetime.now(timezone.utc),
        }

    except httpx.HTTPStatusError as e:
        log.warning("web_scraper.http_error", source=name, status=e.response.status_code)
        if e.response.status_code in [403, 429, 503]:
            raise  # retry
        return None
    except Exception as e:
        log.warning("web_scraper.error", source=name, error=str(e))
        raise


async def run_web_scraper(db_session_factory, targets: list[dict]) -> int:
    """Run all web scrapers. Returns total new signals inserted."""
    from db.database import insert_raw_signal, log_scraper_run
    t0 = time.time()
    total_new = 0

    # Batch into groups of 5 to avoid hammering sites
    async with httpx.AsyncClient(headers=HEADERS, follow_redirects=True) as client:
        for i in range(0, len(targets), 5):
            batch = targets[i:i+5]
            tasks = [scrape_page(client, t) for t in batch]
            results = await asyncio.gather(*tasks, return_exceptions=True)

            async with db_session_factory() as db:
                for result in results:
                    if isinstance(result, Exception) or result is None:
                        continue
                    signal_id = await insert_raw_signal(
                        db,
                        source_name=result["source_name"],
                        source_url=result["source_url"],
                        source_type=result["source_type"],
                        raw_text=result["raw_text"],
                        published_at=result["published_at"],
                    )
                    if signal_id:
                        total_new += 1

            await asyncio.sleep(2)  # polite delay between batches

    elapsed = int((time.time() - t0) * 1000)
    log.info("web_scraper.complete", new_signals=total_new, duration_ms=elapsed)
    return total_new
