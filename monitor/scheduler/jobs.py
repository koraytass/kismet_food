"""
Monitor — Scheduler
Orchestrates all scraping and intelligence jobs using APScheduler.
Runs inside the FastAPI process — no separate worker needed.
"""
import asyncio
import time
from datetime import datetime
from apscheduler.schedulers.asyncio import AsyncIOScheduler
from apscheduler.triggers.interval import IntervalTrigger
import structlog

from config import get_settings
from db.database import AsyncSessionLocal, log_scraper_run
from scrapers.sources import RSS_FEEDS, SCRAPE_TARGETS, WEATHER_TARGETS
from scrapers.rss_scraper import run_rss_scraper
from scrapers.web_scraper import run_web_scraper
from scrapers.weather_scraper import run_weather_scraper
from intelligence.classifier import run_classifier
from intelligence.dis_engine import run_dis_engine
from intelligence.synthesizer import run_synthesis_engine

log = structlog.get_logger()
settings = get_settings()

scheduler = AsyncIOScheduler()


# ─────────────────────────────────────────────
# Job wrappers (with error isolation + health logging)
# ─────────────────────────────────────────────

async def job_rss():
    t0 = time.time()
    try:
        count = await run_rss_scraper(AsyncSessionLocal, RSS_FEEDS)
        async with AsyncSessionLocal() as db:
            await log_scraper_run(db, "rss_scraper", "ok", signals=count,
                                  duration_ms=int((time.time()-t0)*1000))
        log.info("job.rss.ok", new_signals=count)
    except Exception as e:
        async with AsyncSessionLocal() as db:
            await log_scraper_run(db, "rss_scraper", "error", error=str(e),
                                  duration_ms=int((time.time()-t0)*1000))
        log.error("job.rss.error", error=str(e))


async def job_web():
    t0 = time.time()
    try:
        count = await run_web_scraper(AsyncSessionLocal, SCRAPE_TARGETS)
        async with AsyncSessionLocal() as db:
            await log_scraper_run(db, "web_scraper", "ok", signals=count,
                                  duration_ms=int((time.time()-t0)*1000))
        log.info("job.web.ok", new_signals=count)
    except Exception as e:
        async with AsyncSessionLocal() as db:
            await log_scraper_run(db, "web_scraper", "error", error=str(e),
                                  duration_ms=int((time.time()-t0)*1000))
        log.error("job.web.error", error=str(e))


async def job_weather():
    t0 = time.time()
    try:
        count = await run_weather_scraper(AsyncSessionLocal, WEATHER_TARGETS)
        async with AsyncSessionLocal() as db:
            await log_scraper_run(db, "weather_scraper", "ok", signals=count,
                                  duration_ms=int((time.time()-t0)*1000))
        log.info("job.weather.ok", new_signals=count)
    except Exception as e:
        async with AsyncSessionLocal() as db:
            await log_scraper_run(db, "weather_scraper", "error", error=str(e),
                                  duration_ms=int((time.time()-t0)*1000))
        log.error("job.weather.error", error=str(e))


async def job_classify():
    """Run after scrapers — classify unprocessed signals."""
    t0 = time.time()
    try:
        count = await run_classifier(AsyncSessionLocal)
        async with AsyncSessionLocal() as db:
            await log_scraper_run(db, "classifier", "ok", signals=count,
                                  duration_ms=int((time.time()-t0)*1000))
        log.info("job.classify.ok", classified=count)
    except Exception as e:
        async with AsyncSessionLocal() as db:
            await log_scraper_run(db, "classifier", "error", error=str(e),
                                  duration_ms=int((time.time()-t0)*1000))
        log.error("job.classify.error", error=str(e))


async def job_dis():
    """Recompute DIS scores after classification."""
    try:
        await run_dis_engine(AsyncSessionLocal)
        log.info("job.dis.ok")
    except Exception as e:
        log.error("job.dis.error", error=str(e))


async def job_synthesize():
    """Generate rolling intelligence briefs every 6 hours."""
    try:
        await run_synthesis_engine(AsyncSessionLocal)
        log.info("job.synthesize.ok")
    except Exception as e:
        log.error("job.synthesize.error", error=str(e))


async def full_pipeline():
    """Full pipeline: scrape → classify → DIS → synthesize."""
    log.info("pipeline.start")
    await job_rss()
    await job_web()
    await job_weather()
    await asyncio.sleep(5)  # Let DB writes settle
    await job_classify()
    await asyncio.sleep(2)
    await job_dis()
    log.info("pipeline.complete")


# ─────────────────────────────────────────────
# Scheduler setup
# ─────────────────────────────────────────────

def setup_scheduler():
    """Register all jobs with their intervals."""

    # RSS feeds every 2 hours
    scheduler.add_job(
        job_rss,
        IntervalTrigger(minutes=settings.interval_news),
        id="rss",
        name="RSS Feed Scraper",
        replace_existing=True,
        misfire_grace_time=300,
    )

    # Web scraping every 6 hours (polite to servers)
    scheduler.add_job(
        job_web,
        IntervalTrigger(minutes=settings.interval_reports),
        id="web",
        name="Web Page Scraper",
        replace_existing=True,
        misfire_grace_time=600,
    )

    # Weather every 1 hour
    scheduler.add_job(
        job_weather,
        IntervalTrigger(minutes=settings.interval_weather),
        id="weather",
        name="Weather Monitor",
        replace_existing=True,
        misfire_grace_time=300,
    )

    # Classifier runs 30 min after each scrape cycle
    scheduler.add_job(
        job_classify,
        IntervalTrigger(minutes=settings.interval_news + 30),
        id="classify",
        name="Signal Classifier",
        replace_existing=True,
        misfire_grace_time=300,
    )

    # DIS recomputation every 3 hours
    scheduler.add_job(
        job_dis,
        IntervalTrigger(minutes=180),
        id="dis",
        name="DIS Engine",
        replace_existing=True,
        misfire_grace_time=300,
    )

    # Full synthesis brief every 6 hours
    scheduler.add_job(
        job_synthesize,
        IntervalTrigger(minutes=settings.interval_synthesis),
        id="synthesize",
        name="Intelligence Synthesizer",
        replace_existing=True,
        misfire_grace_time=600,
    )

    log.info("scheduler.setup_complete", job_count=len(scheduler.get_jobs()))
    return scheduler


async def run_initial_pipeline():
    """Run a full pipeline pass immediately on startup."""
    log.info("startup_pipeline.begin")
    await asyncio.sleep(3)  # Let FastAPI finish starting
    await full_pipeline()
    await job_synthesize()
    log.info("startup_pipeline.complete")
