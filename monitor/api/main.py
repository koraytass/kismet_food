"""
Monitor — FastAPI Backend
All API routes. Password-protected (simple Bearer token for private use).
"""
import asyncio
import secrets
from datetime import datetime, timezone
from typing import Optional
from fastapi import FastAPI, Depends, HTTPException, status, BackgroundTasks
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from pydantic import BaseModel
import anthropic
import structlog

from config import get_settings
from db.database import (
    init_db, AsyncSessionLocal,
    get_all_commodity_states, get_commodity_state,
    get_recent_intelligence, get_price_history,
    get_scraper_health, get_alerts, mark_alerts_seen,
    insert_raw_signal,
)
from scheduler.jobs import setup_scheduler, run_initial_pipeline

log = structlog.get_logger()
settings = get_settings()

app = FastAPI(title="Monitor — Agricultural Intelligence", docs_url=None, redoc_url=None)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ─────────────────────────────────────────────
# Auth (simple token for private use)
# ─────────────────────────────────────────────
security = HTTPBearer(auto_error=False)

def verify_token(credentials: Optional[HTTPAuthorizationCredentials] = Depends(security)):
    if not credentials:
        raise HTTPException(status_code=401, detail="Authentication required")
    if not secrets.compare_digest(credentials.credentials, settings.dashboard_password):
        raise HTTPException(status_code=401, detail="Invalid token")
    return True


# ─────────────────────────────────────────────
# Startup / Shutdown
# ─────────────────────────────────────────────

@app.on_event("startup")
async def startup():
    await init_db()
    scheduler = setup_scheduler()
    scheduler.start()
    # Run initial pipeline in background (don't block startup)
    asyncio.create_task(run_initial_pipeline())
    log.info("app.started")


@app.on_event("shutdown")
async def shutdown():
    from scheduler.jobs import scheduler
    scheduler.shutdown(wait=False)
    log.info("app.shutdown")


# ─────────────────────────────────────────────
# Auth endpoint
# ─────────────────────────────────────────────

class LoginRequest(BaseModel):
    password: str

@app.post("/api/auth/login")
async def login(req: LoginRequest):
    if not secrets.compare_digest(req.password, settings.dashboard_password):
        raise HTTPException(status_code=401, detail="Invalid password")
    return {"token": settings.dashboard_password, "ok": True}


# ─────────────────────────────────────────────
# Dashboard endpoints
# ─────────────────────────────────────────────

@app.get("/api/dashboard")
async def get_dashboard(_: bool = Depends(verify_token)):
    """Main dashboard data — commodity states + alerts."""
    async with AsyncSessionLocal() as db:
        states_raw = await get_all_commodity_states(db)
        alerts_raw = await get_alerts(db, unseen_only=False, limit=10)
        health_raw = await get_scraper_health(db)

    states = []
    for row in states_raw:
        d = dict(row._mapping)
        import json
        if isinstance(d.get("primary_drivers"), str):
            try:
                d["primary_drivers"] = json.loads(d["primary_drivers"])
            except:
                d["primary_drivers"] = []
        # Convert datetimes to ISO strings
        for k, v in d.items():
            if isinstance(v, datetime):
                d[k] = v.isoformat()
        states.append(d)

    alerts = [dict(row._mapping) for row in alerts_raw]
    for a in alerts:
        for k, v in a.items():
            if isinstance(v, datetime):
                a[k] = v.isoformat()
            if isinstance(v, object) and hasattr(v, '__class__') and v.__class__.__name__ == 'UUID':
                a[k] = str(v)

    health = []
    for row in health_raw:
        h = dict(row._mapping)
        for k, v in h.items():
            if isinstance(v, datetime):
                h[k] = v.isoformat()
        health.append(h)

    unseen_count = sum(1 for a in alerts if not a.get("seen", True))

    return {
        "commodities": states,
        "alerts": alerts,
        "scraper_health": health,
        "unseen_alerts": unseen_count,
        "generated_at": datetime.now(timezone.utc).isoformat(),
    }


@app.get("/api/commodity/{commodity}")
async def get_commodity_detail(commodity: str, _: bool = Depends(verify_token)):
    """Full detail for one commodity including recent signals and price history."""
    if commodity not in ["arabica", "robusta", "pepper", "cashew", "almond"]:
        raise HTTPException(status_code=404, detail="Unknown commodity")

    async with AsyncSessionLocal() as db:
        state_row = await get_commodity_state(db, commodity)
        signals_raw = await get_recent_intelligence(db, commodity, hours=72)
        prices_raw = await get_price_history(db, commodity, days=30)

    state = dict(state_row._mapping) if state_row else {}
    for k, v in state.items():
        if isinstance(v, datetime):
            state[k] = v.isoformat()

    signals = []
    for row in signals_raw:
        s = dict(row._mapping)
        for k, v in s.items():
            if isinstance(v, datetime):
                s[k] = v.isoformat()
        signals.append(s)

    prices = []
    for row in prices_raw:
        p = dict(row._mapping)
        for k, v in p.items():
            if isinstance(v, datetime):
                p[k] = v.isoformat()
        prices.append(p)

    return {
        "state": state,
        "recent_signals": signals[:30],
        "price_history": prices,
    }


@app.post("/api/alerts/seen")
async def mark_seen(_: bool = Depends(verify_token)):
    async with AsyncSessionLocal() as db:
        await mark_alerts_seen(db)
    return {"ok": True}


# ─────────────────────────────────────────────
# Manual signal injection
# ─────────────────────────────────────────────

class ManualSignal(BaseModel):
    text: str
    source: Optional[str] = "manual"

@app.post("/api/signals/inject")
async def inject_signal(req: ManualSignal, background_tasks: BackgroundTasks,
                        _: bool = Depends(verify_token)):
    """Manually inject a signal (e.g. from rumor, WhatsApp, personal observation)."""
    async with AsyncSessionLocal() as db:
        signal_id = await insert_raw_signal(
            db,
            source_name=f"manual:{req.source}",
            source_url="manual",
            source_type="manual",
            raw_text=req.text,
            published_at=datetime.now(timezone.utc),
        )

    if signal_id:
        background_tasks.add_task(_process_single_signal)
        return {"ok": True, "signal_id": signal_id, "message": "Signal queued for processing"}
    return {"ok": False, "message": "Duplicate signal (already processed)"}


async def _process_single_signal():
    from intelligence.classifier import run_classifier
    from intelligence.dis_engine import run_dis_engine
    await run_classifier(AsyncSessionLocal)
    await run_dis_engine(AsyncSessionLocal)


# ─────────────────────────────────────────────
# AI Chat ("Ask Monitor")
# ─────────────────────────────────────────────

class ChatRequest(BaseModel):
    question: str
    commodity: Optional[str] = None

@app.post("/api/ask")
async def ask_monitor(req: ChatRequest, _: bool = Depends(verify_token)):
    """Ask Monitor a question. Answers from your own data."""
    client = anthropic.AsyncAnthropic(api_key=settings.anthropic_api_key)

    # Build context from current intelligence
    context_parts = []

    async with AsyncSessionLocal() as db:
        states = await get_all_commodity_states(db)
        for state_row in states:
            state = dict(state_row._mapping)
            commodity = state["commodity"]
            if req.commodity and commodity != req.commodity:
                continue
            signals_raw = await get_recent_intelligence(db, commodity, hours=48)
            signals = [dict(row._mapping) for row in signals_raw] if signals_raw else []
            headlines = [s.get("headline", "") for s in signals[:5]]
            context_parts.append(
                f"{commodity.upper()}: DIS={state['dis_score']}/100 ({state['impact_level']})\n"
                f"Brief: {state.get('rolling_brief', 'No brief available')[:400]}\n"
                f"Action: {state.get('procurement_action', 'N/A')}\n"
                f"Recent signals: {'; '.join(headlines[:3])}"
            )

    context = "\n\n".join(context_parts) if context_parts else "No intelligence data available yet."

    system = f"""You are Monitor's AI analyst, answering questions about agricultural commodity intelligence for an experienced Turkish importer.

CURRENT INTELLIGENCE DATA:
{context}

Answer the user's question using ONLY the data above. Be specific, direct, and trader-grade in your language. If the data doesn't contain what you need to answer, say so explicitly. Do not make up data or prices."""

    try:
        response = await client.messages.create(
            model=settings.synthesis_model,
            max_tokens=500,
            system=system,
            messages=[{"role": "user", "content": req.question}]
        )
        return {"answer": response.content[0].text.strip()}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"AI error: {str(e)}")


# ─────────────────────────────────────────────
# Force run jobs (admin endpoints)
# ─────────────────────────────────────────────

@app.post("/api/admin/run/{job}")
async def run_job(job: str, background_tasks: BackgroundTasks, _: bool = Depends(verify_token)):
    """Manually trigger a job."""
    from scheduler.jobs import job_rss, job_web, job_weather, job_classify, job_dis, job_synthesize

    job_map = {
        "rss": job_rss,
        "web": job_web,
        "weather": job_weather,
        "classify": job_classify,
        "dis": job_dis,
        "synthesize": job_synthesize,
    }
    if job not in job_map:
        raise HTTPException(status_code=404, detail=f"Unknown job: {job}")

    background_tasks.add_task(job_map[job])
    return {"ok": True, "message": f"Job '{job}' triggered"}


# ─────────────────────────────────────────────
# Serve frontend
# ─────────────────────────────────────────────

@app.get("/")
async def serve_frontend():
    return FileResponse("frontend/dist/index.html")

# Mount static files if frontend is built
import os
if os.path.exists("frontend/dist"):
    app.mount("/assets", StaticFiles(directory="frontend/dist/assets"), name="assets")
