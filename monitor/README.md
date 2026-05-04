# Monitor

Canlı tarım emtia istihbarat paneli — arabica, robusta, karabiber, kaju, badem için.

## İçerik

- `frontend/monitor_public_page.html` — siteye ekleyeceğin sayfa (tek dosya, bağımsız)
- `api/`, `scrapers/`, `intelligence/`, `scheduler/`, `db/` — Python backend
- `main.py`, `config.py`, `requirements.txt`, `railway.toml` — deploy dosyaları

## Backend

FastAPI + PostgreSQL + APScheduler. 60+ kaynaktan scraping (ICO, USDA FAS, CONAB,
CECAFE, VICOFA, VPSA, TURKSTAT, ITC Trade Map, Open-Meteo, ExchangeRate-API vs.).
Anthropic API ile iki kademeli sınıflandırma ve sentez (Haiku + Sonnet).

Önerilen stack: Railway + Neon PostgreSQL free tier + Anthropic API.
Aylık maliyet ~15-20 USD.

## Frontend ile Backend'i Bağlamak

`monitor_public_page.html` içinde, script bölümünün başında iki satır var:

```
const API   = 'https://your-railway-app.up.railway.app';
const TOKEN = 'your-dashboard-password';
```

Bunları deploy ettiğin backend URL'i ve şifre ile değiştir.

## Backend Env Variables

```
DATABASE_URL        = postgresql+asyncpg://...
ANTHROPIC_API_KEY   = sk-ant-...
DASHBOARD_PASSWORD  = (frontend'deki TOKEN ile aynı)
APP_SECRET_KEY      = random 32-char
```

## Notlar

- Tasarım CSS değişkenleri `:root` içinde toplu, site kimliğine uyarlamak kolay
- Site şu an sadece İngilizce, Türkçe versiyon eklemek faydalı olur
- Hedef kitle: %90 Türkiye/Batı Asya ithalatçıları, kalanı origin ihracatçıları + brokerlar
- Scraper kaynak listesi `scrapers/sources.py` içinde, yeni kaynak eklemek tek satırlık iş
