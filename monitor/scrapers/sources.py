"""
Monitor — Source Registry
All 60+ data sources defined with metadata.
Each scraper pulls from one or more sources in its category.
"""

# ─────────────────────────────────────────────
# RSS / ATOM FEEDS (no blocking risk, high reliability)
# ─────────────────────────────────────────────
RSS_FEEDS = [
    # Coffee — trade press
    {"name": "daily_coffee_news",       "url": "https://dailycoffeenews.com/feed/",               "commodities": ["arabica", "robusta"], "reliability": 85},
    {"name": "perfect_daily_grind",     "url": "https://perfectdailygrind.com/feed/",              "commodities": ["arabica", "robusta"], "reliability": 80},
    {"name": "coffee_intelligence",     "url": "https://www.coffeeintelligence.com/feed/",         "commodities": ["arabica", "robusta"], "reliability": 75},
    {"name": "sprudge",                 "url": "https://sprudge.com/feed",                         "commodities": ["arabica"],            "reliability": 65},
    {"name": "ico_news",                "url": "https://www.ico.org/rss.asp",                      "commodities": ["arabica", "robusta"], "reliability": 95},

    # Nuts & spices
    {"name": "nutsandspices_intl",      "url": "https://www.nutsandspicesinternational.com/feed/", "commodities": ["cashew", "almond", "pepper"], "reliability": 80},
    {"name": "spiceboard_india",        "url": "https://www.spicesboard.gov.in/rss.xml",           "commodities": ["pepper"],             "reliability": 90},
    {"name": "freshfruitportal",        "url": "https://www.freshfruitportal.com/feed/",           "commodities": ["almond", "cashew"],   "reliability": 75},
    {"name": "tridge_insights",         "url": "https://www.tridge.com/rss/insights",              "commodities": ["cashew", "almond", "pepper", "arabica", "robusta"], "reliability": 80},

    # General agri commodities
    {"name": "agrimoney",               "url": "https://www.agrimoney.com/feed",                   "commodities": ["arabica", "robusta", "pepper", "cashew", "almond"], "reliability": 80},
    {"name": "helgi_library",           "url": "https://helgilibrary.com/rss",                     "commodities": ["arabica", "robusta"], "reliability": 70},
    {"name": "commodafrica",            "url": "https://commodafrica.com/feed",                    "commodities": ["cashew", "robusta"],  "reliability": 75},
    {"name": "the_loadstar",            "url": "https://theloadstar.com/feed/",                    "commodities": ["arabica", "robusta", "pepper", "cashew", "almond"], "reliability": 80},
    {"name": "port_technology",         "url": "https://www.porttechnology.org/news/feed/",        "commodities": ["arabica", "robusta", "pepper", "cashew", "almond"], "reliability": 75},

    # Weather / climate
    {"name": "noaa_climate_news",       "url": "https://www.climate.gov/feeds/news-features.rss", "commodities": ["arabica", "robusta", "pepper", "cashew", "almond"], "reliability": 95},
    {"name": "copernicus_news",         "url": "https://climate.copernicus.eu/rss.xml",            "commodities": ["arabica", "robusta", "pepper", "cashew", "almond"], "reliability": 90},

    # Turkey / MENA context
    {"name": "hurriyet_daily_news",     "url": "https://www.hurriyetdailynews.com/rss",            "commodities": ["arabica", "robusta", "pepper", "cashew", "almond"], "reliability": 70},
    {"name": "daily_sabah_economy",     "url": "https://www.dailysabah.com/economy/rss",           "commodities": ["arabica", "robusta", "pepper", "cashew", "almond"], "reliability": 70},

    # Freight / shipping
    {"name": "freightwaves",            "url": "https://www.freightwaves.com/news/feed",           "commodities": ["arabica", "robusta", "pepper", "cashew", "almond"], "reliability": 85},
    {"name": "lloyds_list",             "url": "https://www.lloydslist.com/rss/news.xml",          "commodities": ["arabica", "robusta", "pepper", "cashew", "almond"], "reliability": 85},
]

# ─────────────────────────────────────────────
# SCRAPED PAGES (direct HTTP + BeautifulSoup)
# ─────────────────────────────────────────────
SCRAPE_TARGETS = [
    # Official stats & reports
    {"name": "usda_fas_coffee",
     "url": "https://www.fas.usda.gov/data/coffee-world-markets-and-trade",
     "commodities": ["arabica", "robusta"], "reliability": 95, "cadence": "6h"},

    {"name": "usda_fas_pepper",
     "url": "https://www.fas.usda.gov/data/spices",
     "commodities": ["pepper"], "reliability": 95, "cadence": "6h"},

    {"name": "usda_fas_tree_nuts",
     "url": "https://www.fas.usda.gov/data/tree-nuts-world-markets-and-trade",
     "commodities": ["almond", "cashew"], "reliability": 95, "cadence": "6h"},

    {"name": "ico_market_report",
     "url": "https://www.ico.org/coffee_report.asp",
     "commodities": ["arabica", "robusta"], "reliability": 95, "cadence": "24h"},

    {"name": "conab_coffee",
     "url": "https://www.conab.gov.br/info-agro/safras/cafe",
     "commodities": ["arabica", "robusta"], "reliability": 90, "cadence": "24h"},

    {"name": "cecafe_exports",
     "url": "https://www.cecafe.com.br/en/publications/",
     "commodities": ["arabica", "robusta"], "reliability": 88, "cadence": "24h"},

    {"name": "almond_board_california",
     "url": "https://www.almonds.com/our-community/industry-news",
     "commodities": ["almond"], "reliability": 90, "cadence": "24h"},

    {"name": "almond_board_position_report",
     "url": "https://www.almonds.com/industry-data/position-report",
     "commodities": ["almond"], "reliability": 95, "cadence": "24h"},

    # Vietnam pepper & robusta
    {"name": "vpsa_pepper",
     "url": "http://www.vpsa.com.vn/en/news",
     "commodities": ["pepper"], "reliability": 85, "cadence": "12h"},

    {"name": "vicofa_coffee",
     "url": "https://vicofa.org.vn/en/",
     "commodities": ["robusta"], "reliability": 85, "cadence": "12h"},

    {"name": "viet_mard_coffee",
     "url": "https://www.mard.gov.vn/en/Pages/news.aspx",
     "commodities": ["robusta", "pepper"], "reliability": 88, "cadence": "12h"},

    # India
    {"name": "spices_board_india",
     "url": "https://www.indianspices.com/media-&-publications/trade-statistics",
     "commodities": ["pepper"], "reliability": 88, "cadence": "24h"},

    {"name": "cashew_export_promo_india",
     "url": "https://www.cepci.org.in/statistics",
     "commodities": ["cashew"], "reliability": 85, "cadence": "24h"},

    {"name": "coffee_board_india",
     "url": "https://www.indiacoffee.org/statistics.html",
     "commodities": ["arabica", "robusta"], "reliability": 85, "cadence": "24h"},

    # East Africa (cashew)
    {"name": "bascfa_tanzania",
     "url": "https://www.bascfa.go.tz/news",
     "commodities": ["cashew"], "reliability": 75, "cadence": "24h"},

    {"name": "interafrica_cashew",
     "url": "https://interafrica-cashew.com/news/",
     "commodities": ["cashew"], "reliability": 78, "cadence": "24h"},

    # Indonesia
    {"name": "aeki_indonesia_coffee",
     "url": "https://www.aeki-aice.org/page/statistic/id",
     "commodities": ["robusta"], "reliability": 80, "cadence": "24h"},

    # Rabobank (public articles only)
    {"name": "rabobank_agri",
     "url": "https://www.rabobank.com/knowledge/food-agribusiness",
     "commodities": ["arabica", "robusta", "pepper", "cashew", "almond"], "reliability": 90, "cadence": "6h"},

    # Port of Santos shipping data
    {"name": "porto_santos",
     "url": "https://www.portodesantos.com.br/en/press-room/news/",
     "commodities": ["arabica", "robusta"], "reliability": 80, "cadence": "6h"},

    # IndexMundi commodity prices
    {"name": "indexmundi_arabica",
     "url": "https://www.indexmundi.com/commodities/?commodity=coffee-arabica&months=12",
     "commodities": ["arabica"], "reliability": 85, "cadence": "1h"},

    {"name": "indexmundi_robusta",
     "url": "https://www.indexmundi.com/commodities/?commodity=coffee-robusta&months=12",
     "commodities": ["robusta"], "reliability": 85, "cadence": "1h"},

    {"name": "indexmundi_pepper",
     "url": "https://www.indexmundi.com/commodities/?commodity=pepper&months=12",
     "commodities": ["pepper"], "reliability": 85, "cadence": "1h"},

    {"name": "indexmundi_cashew",
     "url": "https://www.indexmundi.com/commodities/?commodity=cashew-nuts&months=12",
     "commodities": ["cashew"], "reliability": 85, "cadence": "1h"},

    {"name": "indexmundi_almond",
     "url": "https://www.indexmundi.com/commodities/?commodity=almonds&months=12",
     "commodities": ["almond"], "reliability": 85, "cadence": "1h"},
]

# ─────────────────────────────────────────────
# WEATHER API TARGETS (open APIs, no auth needed)
# ─────────────────────────────────────────────
WEATHER_TARGETS = [
    # Arabica origins
    {"name": "weather_minas_gerais",    "lat": -19.92, "lon": -43.94, "label": "Minas Gerais, Brazil",       "commodities": ["arabica"]},
    {"name": "weather_sao_paulo_sp",    "lat": -23.55, "lon": -46.63, "label": "São Paulo state, Brazil",    "commodities": ["arabica"]},
    {"name": "weather_huila_colombia",  "lat": 2.53,   "lon": -75.53, "label": "Huila, Colombia",            "commodities": ["arabica"]},
    {"name": "weather_jimma_ethiopia",  "lat": 7.67,   "lon": 36.83,  "label": "Jimma, Ethiopia",            "commodities": ["arabica"]},
    # Robusta origins
    {"name": "weather_dak_lak_vn",      "lat": 12.66,  "lon": 108.05, "label": "Dak Lak, Vietnam",           "commodities": ["robusta", "pepper"]},
    {"name": "weather_espirito_santo",  "lat": -20.31, "lon": -40.31, "label": "Espírito Santo, Brazil",     "commodities": ["robusta"]},
    {"name": "weather_lampung_indo",    "lat": -5.45,  "lon": 105.26, "label": "Lampung, Indonesia",         "commodities": ["robusta", "pepper"]},
    {"name": "weather_masaka_uganda",   "lat": -0.34,  "lon": 31.74,  "label": "Masaka, Uganda",             "commodities": ["robusta"]},
    # Pepper origins
    {"name": "weather_kerala_india",    "lat": 10.85,  "lon": 76.27,  "label": "Kerala, India",              "commodities": ["pepper"]},
    # Cashew origins
    {"name": "weather_mtwara_tanzania", "lat": -10.27, "lon": 40.18,  "label": "Mtwara, Tanzania",           "commodities": ["cashew"]},
    {"name": "weather_abidjan_ci",      "lat": 5.35,   "lon": -4.00,  "label": "Abidjan, Côte d'Ivoire",     "commodities": ["cashew"]},
    # Almond origins
    {"name": "weather_fresno_ca",       "lat": 36.74,  "lon": -119.77,"label": "Fresno, California",         "commodities": ["almond"]},
    {"name": "weather_adelaide_aus",    "lat": -34.93, "lon": 138.60, "label": "Adelaide, Australia",        "commodities": ["almond"]},
]

# ─────────────────────────────────────────────
# COMMODITY METADATA
# ─────────────────────────────────────────────
COMMODITY_META = {
    "arabica": {
        "full_name": "Arabica Coffee",
        "exchange": "ICE New York (KCc1)",
        "unit": "per lb (USc)",
        "top_origins": ["Brazil", "Colombia", "Ethiopia", "Honduras", "Guatemala"],
        "turkey_import_relevance": "critical",  # major consumer
        "substitutability": "low",  # robusta is partial sub only
    },
    "robusta": {
        "full_name": "Robusta Coffee",
        "exchange": "ICE London (LRCc1)",
        "unit": "per tonne (USD)",
        "top_origins": ["Vietnam", "Indonesia", "Uganda", "Brazil", "India"],
        "turkey_import_relevance": "high",
        "substitutability": "medium",
    },
    "pepper": {
        "full_name": "Black Pepper",
        "exchange": "IPSTA (spot)",
        "unit": "per tonne (USD)",
        "top_origins": ["Vietnam", "Indonesia", "India", "Brazil", "Sri Lanka"],
        "turkey_import_relevance": "high",
        "substitutability": "medium",
    },
    "cashew": {
        "full_name": "Cashew (W320)",
        "exchange": "Spot (USD/MT)",
        "unit": "per tonne (USD)",
        "top_origins": ["Vietnam", "Ivory Coast", "India", "Tanzania", "Mozambique"],
        "turkey_import_relevance": "medium",
        "substitutability": "low",
    },
    "almond": {
        "full_name": "Almond (Nonpareil)",
        "exchange": "Blue Diamond spot",
        "unit": "per lb (USD)",
        "top_origins": ["USA (California)", "Australia", "Spain", "Iran"],
        "turkey_import_relevance": "high",
        "substitutability": "medium",
    },
}
