"""
Monitor — Weather Scraper Agent
Uses Open-Meteo (free, no API key needed) to monitor agricultural weather
conditions at key commodity origin locations.

Flags anomalies: frost, drought, extreme heat, flooding conditions.
"""
import asyncio
import time
from datetime import datetime, timezone
import httpx
import structlog

log = structlog.get_logger()

OPEN_METEO_URL = "https://api.open-meteo.com/v1/forecast"

# Agricultural thresholds for anomaly detection
THRESHOLDS = {
    "frost":         {"param": "temperature_2m_min", "op": "lt", "value": 2.0,  "severity": "critical"},
    "severe_frost":  {"param": "temperature_2m_min", "op": "lt", "value": -2.0, "severity": "critical"},
    "extreme_heat":  {"param": "temperature_2m_max", "op": "gt", "value": 38.0, "severity": "high"},
    "drought_risk":  {"param": "precipitation_sum",  "op": "lt", "value": 2.0,  "severity": "medium"},  # mm over 7 days
    "heavy_rain":    {"param": "precipitation_sum",  "op": "gt", "value": 80.0, "severity": "medium"},
    "flood_risk":    {"param": "precipitation_sum",  "op": "gt", "value": 150.0,"severity": "high"},
}


async def fetch_weather(client: httpx.AsyncClient, target: dict) -> dict:
    """Fetch 7-day forecast + current conditions for a location."""
    params = {
        "latitude": target["lat"],
        "longitude": target["lon"],
        "daily": [
            "temperature_2m_max",
            "temperature_2m_min",
            "precipitation_sum",
            "et0_fao_evapotranspiration",
            "windspeed_10m_max",
        ],
        "current_weather": True,
        "timezone": "auto",
        "forecast_days": 7,
    }

    try:
        response = await client.get(OPEN_METEO_URL, params=params, timeout=15.0)
        response.raise_for_status()
        return response.json()
    except Exception as e:
        log.warning("weather.fetch_error", location=target["label"], error=str(e))
        return {}


def detect_anomalies(weather_data: dict, target: dict) -> list[dict]:
    """Analyze weather data for agricultural anomalies."""
    anomalies = []
    if not weather_data or "daily" not in weather_data:
        return anomalies

    daily = weather_data["daily"]
    label = target["label"]
    commodities = target["commodities"]

    # Build 7-day aggregates
    temps_max = daily.get("temperature_2m_max", [])
    temps_min = daily.get("temperature_2m_min", [])
    precip = daily.get("precipitation_sum", [])
    dates = daily.get("time", [])

    # Check each day
    for i, date in enumerate(dates):
        day_anomalies = []

        tmax = temps_max[i] if i < len(temps_max) else None
        tmin = temps_min[i] if i < len(temps_min) else None
        rain = precip[i] if i < len(precip) else None

        if tmin is not None and tmin <= 2.0:
            severity = "critical" if tmin <= -2.0 else "high"
            day_anomalies.append(f"FROST RISK: {tmin:.1f}°C minimum temperature on {date}")

        if tmax is not None and tmax >= 38.0:
            day_anomalies.append(f"EXTREME HEAT: {tmax:.1f}°C maximum temperature on {date}")

        if rain is not None and rain >= 80.0:
            severity = "high" if rain >= 150 else "medium"
            day_anomalies.append(f"HEAVY RAINFALL: {rain:.1f}mm precipitation on {date}")

        if day_anomalies:
            for anomaly in day_anomalies:
                anomalies.append({
                    "date": date,
                    "text": anomaly,
                    "location": label,
                    "commodities": commodities,
                })

    # Check 7-day drought: total precip < 5mm
    total_precip = sum(p for p in precip if p is not None)
    if total_precip < 5.0 and len(precip) >= 7:
        anomalies.append({
            "date": dates[0] if dates else "this week",
            "text": f"DROUGHT SIGNAL: Only {total_precip:.1f}mm total rainfall over 7 days",
            "location": label,
            "commodities": commodities,
        })

    return anomalies


def format_weather_signal(target: dict, weather_data: dict, anomalies: list) -> str:
    """Format weather data into a signal text for the intelligence pipeline."""
    label = target["label"]
    commodities = ", ".join(target["commodities"])
    daily = weather_data.get("daily", {})
    current = weather_data.get("current_weather", {})

    lines = [f"WEATHER REPORT — {label} (relevant to: {commodities})"]

    if current:
        lines.append(f"Current: {current.get('temperature', 'N/A')}°C, "
                    f"windspeed {current.get('windspeed', 'N/A')} km/h")

    if daily.get("temperature_2m_max"):
        avg_max = sum(daily["temperature_2m_max"]) / len(daily["temperature_2m_max"])
        avg_min = sum(daily["temperature_2m_min"]) / len(daily["temperature_2m_min"])
        total_rain = sum(daily.get("precipitation_sum", [0]))
        lines.append(f"7-day avg: {avg_max:.1f}°C max / {avg_min:.1f}°C min, "
                    f"{total_rain:.1f}mm total precipitation")

    if anomalies:
        lines.append(f"\nANOMALIES DETECTED ({len(anomalies)}):")
        for a in anomalies:
            lines.append(f"  - {a['text']}")
    else:
        lines.append("\nNo agricultural weather anomalies detected.")

    return "\n".join(lines)


async def run_weather_scraper(db_session_factory, targets: list[dict]) -> int:
    """Fetch weather for all origin locations. Returns count of new signals."""
    from db.database import insert_raw_signal
    t0 = time.time()
    total_new = 0

    async with httpx.AsyncClient() as client:
        tasks = [fetch_weather(client, t) for t in targets]
        results = await asyncio.gather(*tasks, return_exceptions=True)

    async with db_session_factory() as db:
        for target, weather_data in zip(targets, results):
            if isinstance(weather_data, Exception) or not weather_data:
                continue

            anomalies = detect_anomalies(weather_data, target)

            # Always store weather signals so AI can track trends
            # Only flag anomaly ones with higher importance via text content
            signal_text = format_weather_signal(target, weather_data, anomalies)

            signal_id = await insert_raw_signal(
                db,
                source_name=f"weather_{target['name']}",
                source_url=f"https://api.open-meteo.com (lat:{target['lat']},lon:{target['lon']})",
                source_type="weather",
                raw_text=signal_text,
                published_at=datetime.now(timezone.utc),
            )
            if signal_id:
                total_new += 1

    elapsed = int((time.time() - t0) * 1000)
    log.info("weather_scraper.complete", new_signals=total_new, duration_ms=elapsed)
    return total_new
