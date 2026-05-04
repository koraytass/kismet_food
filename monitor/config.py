"""
Monitor — Configuration
All settings loaded from environment variables (.env file locally, Railway env in prod)
"""
from pydantic_settings import BaseSettings
from functools import lru_cache


class Settings(BaseSettings):
    # Database
    database_url: str = "postgresql+asyncpg://user:pass@localhost/monitor"

    # Anthropic
    anthropic_api_key: str = ""

    # App
    app_secret_key: str = "change-this-in-production"
    dashboard_password: str = "monitor2024"  # simple auth for private use
    debug: bool = False

    # Scraper intervals (minutes)
    interval_prices: int = 15
    interval_weather: int = 60
    interval_news: int = 120
    interval_reports: int = 360
    interval_official: int = 360
    interval_synthesis: int = 360  # full AI brief per commodity

    # Intelligence thresholds
    alert_threshold_dis: int = 55   # DIS score that triggers an alert
    critical_threshold_dis: int = 75

    # Models
    classifier_model: str = "claude-haiku-4-5-20251001"   # fast, cheap — classify each signal
    synthesis_model: str = "claude-sonnet-4-6"             # rich — write the rolling brief

    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"


@lru_cache()
def get_settings() -> Settings:
    return Settings()
