"""
Monitor — DIS (Deficit Impact Score) Engine
Aggregates intelligence signals into per-commodity scores.
Runs after classifier. Updates commodity_state table.
"""
import asyncio
import json
from datetime import datetime, timezone
import structlog

log = structlog.get_logger()

COMMODITIES = ["arabica", "robusta", "pepper", "cashew", "almond"]

# How quickly signals decay in relevance (days)
DECAY_WEIGHTS = {
    "short":  {"1d": 1.0, "3d": 0.9, "7d": 0.75, "14d": 0.5,  "30d": 0.2},
    "medium": {"1d": 1.0, "3d": 0.95,"7d": 0.9,  "14d": 0.8,  "30d": 0.6},
    "long":   {"1d": 1.0, "3d": 1.0, "7d": 0.95, "14d": 0.9,  "30d": 0.8},
}

# Source reliability multiplier
RELIABILITY_MULTIPLIER = {
    (80, 100): 1.2,
    (60, 79):  1.0,
    (40, 59):  0.8,
    (0, 39):   0.6,
}

# Turkey market sensitivity per commodity
TURKEY_WEIGHT = {
    "arabica": 1.25,  # Major Turkish coffee market
    "robusta": 1.15,
    "pepper":  1.10,
    "cashew":  1.05,
    "almond":  1.10,
}

# Substitutability discount (if high, price shock is partly absorbed)
SUBSTITUTABILITY = {
    "arabica": 0.90,  # Low — Robusta only partial sub
    "robusta": 0.85,
    "pepper":  0.85,
    "cashew":  0.90,
    "almond":  0.85,
}


def get_reliability_multiplier(reliability: int) -> float:
    for (lo, hi), mult in RELIABILITY_MULTIPLIER.items():
        if lo <= reliability <= hi:
            return mult
    return 1.0


def get_age_decay(signal_age_days: float, duration: str) -> float:
    """Decay factor based on signal age and event duration."""
    weights = DECAY_WEIGHTS.get(duration, DECAY_WEIGHTS["short"])
    if signal_age_days <= 1:
        return weights["1d"]
    elif signal_age_days <= 3:
        return weights["3d"]
    elif signal_age_days <= 7:
        return weights["7d"]
    elif signal_age_days <= 14:
        return weights["14d"]
    else:
        return weights["30d"]


def corroboration_bonus(signal_count: int) -> float:
    """Multiple signals confirming same event → bonus."""
    if signal_count >= 5:
        return 1.25
    elif signal_count >= 3:
        return 1.15
    elif signal_count >= 2:
        return 1.08
    return 1.0


def compute_dis(signals: list) -> tuple[int, list]:
    """
    Compute DIS score (0-100) for a commodity from its intelligence signals.

    Algorithm:
    1. Weight each signal by: contribution × reliability_mult × age_decay
    2. Group by event category — corroboration bonus per category
    3. Sum weighted contributions, cap at 100
    4. Apply Turkey sensitivity weight
    5. Apply substitutability discount

    Returns (dis_score, top_drivers)
    """
    if not signals:
        return 0, []

    now = datetime.now(timezone.utc)

    # Group signals by category for corroboration
    by_category: dict[str, list] = {}
    for signal in signals:
        cat = signal.get("category", "unknown")
        by_category.setdefault(cat, []).append(signal)

    weighted_contributions = []
    driver_scores = {}  # category -> weighted score

    for category, cat_signals in by_category.items():
        cat_score = 0
        for signal in cat_signals:
            # Parse age
            created_at = signal.get("created_at")
            if created_at and hasattr(created_at, "replace"):
                if created_at.tzinfo is None:
                    created_at = created_at.replace(tzinfo=timezone.utc)
                age_days = (now - created_at).total_seconds() / 86400
            else:
                age_days = 1.0

            raw_contrib = signal.get("dis_contribution", 0)
            reliability = signal.get("source_reliability", 65)
            duration = signal.get("duration", "short")

            weight = (
                get_reliability_multiplier(reliability) *
                get_age_decay(age_days, duration)
            )
            weighted = raw_contrib * weight
            cat_score += weighted

        # Apply corroboration bonus for this category
        bonus = corroboration_bonus(len(cat_signals))
        cat_score_final = cat_score * bonus

        driver_scores[category] = round(cat_score_final, 1)
        weighted_contributions.append(cat_score_final)

    # Sum all weighted contributions
    total = sum(weighted_contributions)

    # Apply commodity-specific adjustments
    # (Turkey sensitivity + substitutability built into meta, applied at commodity level)
    # These are applied by the synthesis engine, not here — DIS stays comparable across commodities

    # Cap at 100
    dis = min(100, round(total))

    # Build top drivers list (sorted by contribution)
    top_drivers = sorted(
        [{"category": cat, "score": score} for cat, score in driver_scores.items()],
        key=lambda x: x["score"],
        reverse=True
    )[:5]

    return dis, top_drivers


def dis_to_level(dis: int) -> str:
    if dis >= 75:
        return "critical"
    elif dis >= 55:
        return "high"
    elif dis >= 35:
        return "medium"
    else:
        return "low"


def dis_trend(current: int, previous: int) -> str:
    delta = current - previous
    if delta >= 5:
        return "rising"
    elif delta <= -5:
        return "falling"
    return "stable"


async def run_dis_engine(db_session_factory):
    """Compute DIS for all commodities and update commodity_state."""
    from db.database import (
        get_recent_intelligence, get_commodity_state,
        update_commodity_state, create_alert, AsyncSessionLocal
    )
    from config import get_settings
    settings = get_settings()

    log.info("dis_engine.start")

    for commodity in COMMODITIES:
        try:
            async with db_session_factory() as db:
                # Get signals from last 30 days
                raw_signals = await get_recent_intelligence(db, commodity, hours=720)
                signals = [dict(row._mapping) for row in raw_signals] if raw_signals else []

                # Get previous DIS for trend calculation
                prev_state = await get_commodity_state(db, commodity)
                prev_dis = prev_state["dis_score"] if prev_state and prev_state["dis_score"] else 0

            dis, drivers = compute_dis(signals)
            level = dis_to_level(dis)
            trend = dis_trend(dis, prev_dis)

            # Format driver names nicely
            primary_drivers = [
                f"{d['category'].title()} signals (score: {d['score']:.0f})"
                for d in drivers[:3]
            ]

            async with db_session_factory() as db:
                await update_commodity_state(db, commodity, {
                    "dis_score": dis,
                    "dis_trend": trend,
                    "dis_7d_ago": prev_dis,
                    "impact_level": level,
                    "primary_drivers": json.dumps(primary_drivers),
                })

                # Create alert if threshold crossed
                if dis >= settings.alert_threshold_dis and prev_dis < settings.alert_threshold_dis:
                    await create_alert(
                        db, commodity, dis, level,
                        headline=f"{commodity.title()} DIS crossed alert threshold ({dis}/100)",
                        body=f"Trend: {trend}. Top drivers: {', '.join(primary_drivers)}"
                    )
                elif dis >= settings.critical_threshold_dis and prev_dis < settings.critical_threshold_dis:
                    await create_alert(
                        db, commodity, dis, "critical",
                        headline=f"CRITICAL: {commodity.title()} DIS at {dis}/100",
                        body=f"Immediate procurement review recommended. Drivers: {', '.join(primary_drivers)}"
                    )

            log.info("dis_engine.updated",
                     commodity=commodity, dis=dis, level=level, trend=trend,
                     signal_count=len(signals))

        except Exception as e:
            log.error("dis_engine.error", commodity=commodity, error=str(e))

    log.info("dis_engine.complete")
