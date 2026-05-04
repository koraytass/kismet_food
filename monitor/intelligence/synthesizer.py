"""
Monitor — Intelligence Layer: Stage 2 Synthesis Engine
Uses Claude Sonnet to write rich, trader-grade rolling intelligence briefs.
Runs every 6 hours per commodity. This is the core intelligence output.
"""
import asyncio
from datetime import datetime, timezone
import anthropic
import structlog
from config import get_settings

log = structlog.get_logger()
settings = get_settings()

COMMODITY_CONTEXT = {
    "arabica": {
        "full_name": "Arabica Coffee",
        "key_origins": "Brazil (Minas Gerais, São Paulo, Bahia), Colombia (Huila, Nariño), Ethiopia (Yirgacheffe, Sidama), Honduras, Guatemala",
        "exchange": "ICE New York (KCc1), currently quoted in USc/lb",
        "key_seasonality": "Brazil: harvest Apr-Sep (biennial cycle). Colombia: two harvests (Apr-Jun, Oct-Dec). Ethiopia: harvest Oct-Feb.",
        "turkey_context": "Turkey is a major arabica consumer (Turkish coffee culture). Price sensitivity high. MENA re-export hub.",
        "substitutes": "Robusta (partial, max 20-30% blend), Arabica from alternative origins",
    },
    "robusta": {
        "full_name": "Robusta Coffee (Coffea canephora)",
        "key_origins": "Vietnam (Dak Lak, Dak Nong), Indonesia (Sumatra, Lampung), Uganda (Masaka, Kasese), Brazil (Espírito Santo, Bahia), India (Chikkamagaluru)",
        "exchange": "ICE London (LRCc1), quoted in USD/tonne",
        "key_seasonality": "Vietnam: harvest Nov-Feb. Indonesia: May-Sep. Uganda: Oct-Feb and Jun-Aug.",
        "turkey_context": "Used heavily in soluble coffee manufacturing. Growing Turkish instant coffee market. Industrial buyers.",
        "substitutes": "Limited — Arabica too expensive for most industrial uses. Vietnam-to-Indonesia shift common.",
    },
    "pepper": {
        "full_name": "Black Pepper (Piper nigrum)",
        "key_origins": "Vietnam (Dak Lak, Gia Lai, Binh Phuoc), Indonesia (Lampung, Bangka), India (Kerala, Karnataka), Brazil (Espírito Santo), Sri Lanka",
        "exchange": "IPSTA spot, MCC (India), ICE (USD/tonne)",
        "key_seasonality": "Vietnam: harvest Jan-Mar. India: Nov-Feb. Indonesia: Jun-Sep.",
        "turkey_context": "Turkey is major pepper importer (cuisine + re-export). High price sensitivity. Competing with EU buyers.",
        "substitutes": "White pepper (partial), regional quality grades",
    },
    "cashew": {
        "full_name": "Cashew Kernel (W320 grade)",
        "key_origins": "Vietnam (Long An, Binh Phuoc), Ivory Coast (Abidjan), India (Goa, Maharashtra, Kerala), Tanzania (Mtwara, Lindi), Mozambique",
        "exchange": "Spot USD/MT (W320 grade). No standardized futures exchange.",
        "key_seasonality": "West Africa: Feb-May. East Africa: Mar-Jun. Vietnam: Feb-Jun. India: Feb-May.",
        "turkey_context": "Strong Turkish snack market. Growing food manufacturing demand. Competing with EU and Gulf buyers.",
        "substitutes": "Almonds, pistachios (partial substitutes in snack segment)",
    },
    "almond": {
        "full_name": "Almond (Nonpareil variety)",
        "key_origins": "California USA (San Joaquin Valley, Fresno), Australia (South Australia, Victoria), Spain (Alicante, Murcia)",
        "exchange": "Blue Diamond spot price, USD/lb",
        "key_seasonality": "California: harvest Aug-Oct (dominant, ~80% world supply). Australia: Feb-Mar.",
        "turkey_context": "Turkey processes almonds for confectionery and snack markets. Price-sensitive industrial buyers. Also domestic Aegean almond production.",
        "substitutes": "Hazelnuts (Turkey grows these), pistachios, cashews",
    },
}

SYNTHESIS_SYSTEM = """You are the senior intelligence analyst for Monitor, a private agricultural commodity intelligence system for an experienced Turkish coffee and commodities importer with deep trade knowledge.

Your task: write a sharp, trader-grade intelligence brief for one commodity based on the provided signals.

TONE: Like a senior commodity analyst at a hedge fund briefing a sophisticated client. Direct. No filler. No hedging language. Specific numbers where available. Acknowledge uncertainty honestly.

STRUCTURE — write in flowing prose, no bullet points:
1. SITUATION (2-3 sentences): What is the current supply-demand picture for this commodity right now? What's changed since last week?
2. KEY RISKS (2-3 sentences): What are the 2-3 most important signals driving risk? Be specific about origins, timing, and magnitude.
3. PRICE DYNAMICS (1-2 sentences): What are prices doing and why? Any basis/spread developments?
4. PROCUREMENT INTELLIGENCE (2-3 sentences): What should a Turkish importer DO right now? Be specific: which origins to favor, what tenor to buy, what to avoid, when to act.
5. WATCH LIST (1-2 sentences): What should be monitored in the next 2-4 weeks that could change the picture?

IMPORTANT:
- If signals are sparse or contradictory, say so honestly
- Do not invent data. If you don't have price data, say "price data unavailable in current signals"
- Distinguish between confirmed events and developing situations
- Reference specific regions (not just countries) when data supports it
- Write from the perspective of someone who understands Turkish coffee market dynamics, MENA trade flows, and Türkiye's role as regional hub"""


async def synthesize_commodity(
    client: anthropic.AsyncAnthropic,
    commodity: str,
    signals: list,
    current_state: dict,
) -> str:
    """Generate a rolling intelligence brief for one commodity."""
    meta = COMMODITY_CONTEXT.get(commodity, {})
    now = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M UTC")

    # Build signal digest
    signal_digest = []
    for i, signal in enumerate(signals[:20], 1):  # top 20 signals
        signal_digest.append(
            f"{i}. [{signal.get('category','?').upper()}] [{signal.get('impact_level','?').upper()}] "
            f"DIS+{signal.get('dis_contribution',0)} — {signal.get('headline','')}\n"
            f"   {signal.get('detail','')}\n"
            f"   Origins: {', '.join(signal.get('origin_regions') or [])}"
        )

    signals_text = "\n\n".join(signal_digest) if signal_digest else "No signals in the past 48 hours."

    user_message = f"""INTELLIGENCE BRIEF REQUEST
Generated: {now}
Commodity: {meta.get('full_name', commodity.title())}
Current DIS Score: {current_state.get('dis_score', 0)}/100 ({current_state.get('impact_level', 'unknown')} risk)
DIS Trend: {current_state.get('dis_trend', 'unknown')}

COMMODITY CONTEXT:
- Key origins: {meta.get('key_origins', 'N/A')}
- Exchange: {meta.get('exchange', 'N/A')}
- Seasonality: {meta.get('key_seasonality', 'N/A')}
- Turkey market: {meta.get('turkey_context', 'N/A')}
- Substitutes: {meta.get('substitutes', 'N/A')}

RECENT INTELLIGENCE SIGNALS (past 48h, sorted by DIS contribution):
{signals_text}

Write the intelligence brief now."""

    try:
        response = await client.messages.create(
            model=settings.synthesis_model,
            max_tokens=1000,
            system=SYNTHESIS_SYSTEM,
            messages=[{"role": "user", "content": user_message}]
        )
        brief = response.content[0].text.strip()
        log.info("synthesis.complete", commodity=commodity, length=len(brief))
        return brief

    except Exception as e:
        log.error("synthesis.error", commodity=commodity, error=str(e))
        return f"Intelligence brief unavailable — synthesis error: {str(e)}"


async def generate_procurement_action(
    client: anthropic.AsyncAnthropic,
    commodity: str,
    dis: int,
    brief: str,
) -> str:
    """Generate a sharp one-paragraph procurement action from the brief."""
    meta = COMMODITY_CONTEXT.get(commodity, {})

    try:
        response = await client.messages.create(
            model=settings.classifier_model,  # Haiku — quick summary task
            max_tokens=200,
            messages=[{
                "role": "user",
                "content": f"""Based on this intelligence brief for {meta.get('full_name', commodity)} (DIS: {dis}/100):

{brief}

Write ONE precise procurement action sentence for a Turkish importer. Format: "[ACTION VERB] [specific what, from where, by when, and why]". Be direct. No hedging.

Examples of good format:
- "Secure Q3 forward contracts for Ethiopian arabica at spot +15 before Santos logistics normalize."
- "Hold current pepper positions — Vietnamese harvest pressure should ease within 6 weeks."
- "Accelerate Vietnam robusta purchases immediately; London certified stocks at 6-year lows."
"""
            }]
        )
        return response.content[0].text.strip()
    except Exception as e:
        log.error("procurement_action.error", commodity=commodity, error=str(e))
        return "Review current positions and consult latest ICO data."


async def run_synthesis_engine(db_session_factory):
    """Run synthesis for all commodities. Core intelligence output."""
    from db.database import (
        get_recent_intelligence, get_commodity_state,
        update_commodity_state, AsyncSessionLocal
    )

    client = anthropic.AsyncAnthropic(api_key=settings.anthropic_api_key)
    log.info("synthesis_engine.start")

    for commodity in ["arabica", "robusta", "pepper", "cashew", "almond"]:
        try:
            async with db_session_factory() as db:
                raw_signals = await get_recent_intelligence(db, commodity, hours=48)
                signals = [dict(row._mapping) for row in raw_signals] if raw_signals else []
                state_row = await get_commodity_state(db, commodity)
                state = dict(state_row._mapping) if state_row else {}

            brief = await synthesize_commodity(client, commodity, signals, state)
            action = await generate_procurement_action(client, commodity, state.get("dis_score", 0), brief)

            async with db_session_factory() as db:
                await update_commodity_state(db, commodity, {
                    "rolling_brief": brief,
                    "procurement_action": action,
                    "last_briefed_at": datetime.now(timezone.utc),
                })

            log.info("synthesis_engine.briefed", commodity=commodity)

            # Rate limit between commodities
            await asyncio.sleep(2)

        except Exception as e:
            log.error("synthesis_engine.error", commodity=commodity, error=str(e))

    log.info("synthesis_engine.complete")
