/**
 * origin-stories — Kahve/Kakao/Kuruyemiş için kullanıcıya gösterilen menşe
 * hikayeleri. 3 ayrı harita component'i (postcard / constellation / route)
 * aynı veri üzerinden beslenir; tasarımlar bağımsız ama içerik tek kaynak.
 */

export type Commodity = 'coffee' | 'cocoa' | 'nuts';

export interface OriginStory {
  id: string;
  city: string;
  country: string;
  flag: string;
  commodity: Commodity;
  /** Eski hasat tarihi / ürün adı kısa açıklaması — chip içeriği */
  product: string;
  /** Equirectangular projection için: -180..180 lng, -90..90 lat */
  lat: number;
  lng: number;
  /** Hikaye gövdesi — hover/tıklamada görünür */
  story: string;
  /** Mini key/value list (örn. Boy, İşlem, Sezon) */
  facts: { label: string; value: string }[];
  /** Açık unsplash fotosu */
  photo: string;
}

export const ORIGIN_STORIES: OriginStory[] = [
  // ─────────────── KAHVE ───────────────
  {
    id: 'yirgacheffe',
    city: 'Yirgacheffe', country: 'Etiyopya', flag: '🇪🇹',
    commodity: 'coffee', product: 'Specialty Arabica',
    lat: 6.16, lng: 38.20,
    story: 'Gedeo bölgesinin 1.900 metre yükseklikteki teraslarında yetişen heirloom Arabica. Yıkanmış istasyonlarda işlenen çekirdeklerin fincana çiçeksi-narenciye notalar getirir. Kasım-Ocak hasat penceresi.',
    facts: [
      { label: 'Rakım', value: '1.700–2.200 m' },
      { label: 'Proses', value: 'Washed / Natural' },
      { label: 'Cup score', value: '85–92 SCA' },
      { label: 'Sezon', value: 'Ekim–Ocak' },
    ],
    photo: 'https://images.unsplash.com/photo-1559525839-d9acfd1011c4?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'huila',
    city: 'Huila', country: 'Kolombiya', flag: '🇨🇴',
    commodity: 'coffee', product: 'Washed Arabica',
    lat: 2.93, lng: -75.30,
    story: 'And eteklerinden, Kolombiya specialty üretiminin %18\'i. Karamel, çikolata ve narenciye dengeli profil. Çift hasat sayesinde yıl boyu sevkiyat: Main Sep-Dec, Mitaca Mar-Jun.',
    facts: [
      { label: 'Rakım', value: '1.400–2.000 m' },
      { label: 'Çeşit', value: 'Caturra, Castillo' },
      { label: 'Cup score', value: '84–88 SCA' },
      { label: 'Sezon', value: 'Çift hasat' },
    ],
    photo: 'https://images.unsplash.com/photo-1495774856032-8b90bbb32b32?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'dak-lak',
    city: 'Dak Lak', country: 'Vietnam', flag: '🇻🇳',
    commodity: 'coffee', product: 'Robusta',
    lat: 12.71, lng: 108.24,
    story: 'Central Highlands\'in volkanik bazalt platosunda 500-800 m\'de yetişen Robusta. Espresso harmanlarının omurgası: kafein %2-4, yoğun gövde, düşük asidite. Vietnam dünya robustasının %40+\'sı.',
    facts: [
      { label: 'Rakım', value: '500–800 m' },
      { label: 'Çeşit', value: 'Robusta G1/G2' },
      { label: 'Kafein', value: '%2–4' },
      { label: 'Sezon', value: 'Ekim–Şubat' },
    ],
    photo: 'https://images.unsplash.com/photo-1510130387422-82bed34b37e9?auto=format&fit=crop&w=1200&q=80',
  },

  // ─────────────── KAKAO ───────────────
  {
    id: 'ashanti',
    city: 'Ashanti', country: 'Gana', flag: '🇬🇭',
    commodity: 'cocoa', product: 'Forastero',
    lat: 6.69, lng: -1.62,
    story: 'COCOBOD denetiminde çıkan Forastero kakao çekirdeği; %52-56 yağ. Klasik koyu çikolata notaları, düşük asidite. EU EUDR uyumlu CMS sistemiyle farmer-ID düzeyinde izlenebilir.',
    facts: [
      { label: 'Yağ', value: '%52–56' },
      { label: 'Çeşit', value: 'Forastero' },
      { label: 'Sınıf', value: 'Grade I (COCOBOD)' },
      { label: 'Sezon', value: 'Ekim–Mart' },
    ],
    photo: 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'daloa',
    city: 'Daloa', country: 'Fildişi Sahili', flag: '🇨🇮',
    commodity: 'cocoa', product: 'Bulk Cocoa',
    lat: 6.88, lng: -6.45,
    story: 'Dünyanın en büyük kakao üreticisi (%40+ küresel pay). Daloa hattından kooperatif kaynaklı bulk cocoa; çikolata sanayisinin temel hammaddesi. San Pedro limanından sevkiyat.',
    facts: [
      { label: 'Pay', value: '%40+ küresel' },
      { label: 'Liman', value: 'San Pedro' },
      { label: 'Sertifika', value: 'Rainforest Alliance' },
      { label: 'Sezon', value: 'Ekim–Mart' },
    ],
    photo: 'https://images.unsplash.com/photo-1542843137-1ea7be0d0b29?auto=format&fit=crop&w=1200&q=80',
  },

  // ─────────────── KURUYEMIŞ ───────────────
  {
    id: 'antep',
    city: 'Gaziantep', country: 'Türkiye', flag: '🇹🇷',
    commodity: 'nuts', product: 'Antep Fıstığı (PDO)',
    lat: 37.07, lng: 37.38,
    story: 'AB Coğrafi İşaretli (PDO 2021) Antep fıstığı. Barak ve Uzun çeşitlerinden seçilen mor zarlı, derin yeşil iç. 3.500 yıldır bu platoda. Açılmış kabuk oranı %85+, iç oranı %48-52.',
    facts: [
      { label: 'Status', value: 'EU PDO 2021' },
      { label: 'Boy', value: '18–22+ mm' },
      { label: 'İç oranı', value: '%48–52' },
      { label: 'Sezon', value: 'Eylül–Ekim' },
    ],
    photo: 'https://images.unsplash.com/photo-1601898640176-92eb16a45d57?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'giresun',
    city: 'Giresun', country: 'Türkiye', flag: '🇹🇷',
    commodity: 'nuts', product: 'Tombul Fındık (PDO)',
    lat: 40.92, lng: 38.39,
    story: 'Karadeniz kıyısının yüksek yağ oranlı (%62-65), ince kabuklu Tombul fındığı. AB PDO statüsünde. Lindt, Tobler, Caffarel gibi Avrupa çikolata sanayisinin altın standardı 1850\'den beri.',
    facts: [
      { label: 'Status', value: 'EU PDO' },
      { label: 'Yağ', value: '%62–65' },
      { label: 'Kalibre', value: '11–15 mm' },
      { label: 'Sezon', value: 'Ağustos–Eylül' },
    ],
    photo: 'https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'malatya',
    city: 'Malatya', country: 'Türkiye', flag: '🇹🇷',
    commodity: 'nuts', product: 'Hacıhaliloğlu Kayısı',
    lat: 38.35, lng: 38.32,
    story: 'Dünyanın 1. kuru kayısı üreticisi. Hacıhaliloğlu çeşidi; doğal güneş kurutması ile SO₂ veya organik (kükürtsüz) hat. No1-4 boyutlama; ihracatın %75\'i Avrupa\'ya.',
    facts: [
      { label: 'Pay', value: '%75+ dünya' },
      { label: 'Hat', value: 'SO₂ / Organic' },
      { label: 'Boy', value: 'No1–No4' },
      { label: 'Sezon', value: 'Temmuz–Ağustos' },
    ],
    photo: 'https://images.unsplash.com/photo-1606043835291-0c5e9da82b89?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'phan-rang',
    city: 'Phan Rang', country: 'Vietnam', flag: '🇻🇳',
    commodity: 'nuts', product: 'W320 Kaju',
    lat: 11.57, lng: 108.99,
    story: 'Ninh Thuan eyaletinden AFI/CEPCI sınıflandırma. W180 (premium) → W320 (en yaygın endüstriyel) → W450. Vakum 22.68 kg karton ambalaj. Vietnam dünya kaju ihracatının %50+\'sını yapar.',
    facts: [
      { label: 'Pay', value: '%50+ dünya' },
      { label: 'Sınıf', value: 'W180–W500 + LP' },
      { label: 'Nem', value: '<%5' },
      { label: 'Sezon', value: 'Şubat–Mayıs' },
    ],
    photo: 'https://images.unsplash.com/photo-1568569350062-ebfa3cb195df?auto=format&fit=crop&w=1200&q=80',
  },
];

export const COMMODITY_LABEL: Record<Commodity, string> = {
  coffee: 'Kahve',
  cocoa: 'Kakao',
  nuts: 'Kuruyemiş',
};

/** Marka paletindeki yumuşak commodity renkleri */
export const COMMODITY_COLOR: Record<Commodity, { hex: string; soft: string }> = {
  coffee: { hex: '#7d3f20', soft: '#c9874e' },
  cocoa: { hex: '#4b3027', soft: '#8b5e3c' },
  nuts: { hex: '#c2410c', soft: '#f68b5c' },
};
