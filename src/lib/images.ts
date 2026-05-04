/**
 * Landing-page image catalog.
 *
 * Points at the Stitch-designed home-page imagery (downloaded at build time
 * into /public/images/kismet/stitch/<hash>.webp). All resolution happens
 * through the shared `stitchSrc()` helper so WebP optimization flows through.
 *
 * Swap individual entries for owned photography when available — keep the
 * 3-language `alt` object for accessibility parity.
 */
import { stitchSrc } from './stitch';

type ImageEntry = {
  src: string;
  alt: {
    tr: string;
    en: string;
    ar: string;
  };
};

export const stockImages = {
  /** Hero — original landing page flat-lay macro (coffee + cocoa + nuts).
   * Sourced from Stitch `kismet_foods_landing_page` (not the newer `kismet_foods_home`). */
  hero: {
    src: stitchSrc(
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBF-jDHC7eTgWTMgeVA47zF0rcbOLMQbEX49wjyRMWXkRNvgIE1nqKgStidmuTI03VgAnQqbWA1JzUqzAl5p6uuC3y6IGJ_y-ixxynOfiT15EsAU7oqlSKmofRnZaBeKE1WD4e4RdzaZZ5sBoJX1aIgCTAWzRcJaSJ1JvunM7zReN0qRmpnCmxHDF5LnXQXhJPK_WyLcA2VhVbE50mVD40Fo33uablitz4HTXwQcnIV1FuRmPGmxUzzkLBAxhGQ1kvwjpY0tlyXAn0',
    ),
    alt: {
      tr: 'Rustik taş zemin üzerinde çeşitli ham kahve çekirdekleri, kakao kapsülleri ve macadamia fıstıkları — yumuşak yan ışıklandırma',
      en: 'High-quality flat lay of various raw coffee beans, cocoa pods, and macadamia nuts on a textured rustic stone surface with soft side lighting',
      ar: 'لقطة علوية لحبوب قهوة خام متنوعة وكبسولات كاكاو ومكسرات مكاداميا على سطح حجري خشن بإضاءة جانبية ناعمة',
    },
  },

  /** Coffee card — harvested cherries in hands */
  coffee: {
    src: stitchSrc(
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAQxefQyfAF-mMNBoboyRyifEvyt2GVNpPExZmu-OlfqEufygKJr0tZpzUevZQaq9qRJde2RVAqmHUyijhsxKzsL7Nho40Qna57U0stE2fC3aKcrqeMHSYp-vfssQK5OT0kOnve0jSTtqO97oUSIltpfrJJMdnrYGdioqFRWkbHExwxBo17PCSi7Kyx0R9GH3GUueGufcvo684lxuAceLOiyJb3ltKH7IlpQMdDBtsDNYhKM_0vn4EvH2-MpMiES-SMNPolt8TSikM',
    ),
    alt: {
      tr: 'Güneş ışığının tropikal yapraklardan süzüldüğü, hasır sepet içinde yeni hasat edilmiş kahve kirazları',
      en: 'Artistic low-angle photo of freshly harvested coffee cherries in a wicker basket with sunlight filtering through tropical leaves',
      ar: 'لقطة فنية من زاوية منخفضة لكرز قهوة طازج في سلة خيزران مع أشعة شمس تتسلل عبر أوراق استوائية',
    },
  },

  /** Cocoa card — fermentation on banana leaves */
  cocoa: {
    src: stitchSrc(
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDUQF1S5zmJn28ZRUnM7mNtBKv6HINF_R1FvAiq2UtsuZpdk7PcbvnHZ50kD3TnlnyEVGShkoaaN1IscHStfLfj4b4AKJBcs6EBeYpIENupWvc2H4rqW8n-Eg5RORvXTJw2Etv4kKsov2kNDlNd19M0AZCicJte9A_cJwQn-rwgt4qtnNGITYUw8nENQkzurTRQ3Y4z2iD7CkPU3HseX2eXA9DLBmEziB8P-WHrdsfZWp8dlV_Aec6Mou6h5WZ3d4CE3P3rGoiLUmc',
    ),
    alt: {
      tr: 'Muz yaprakları üzerinde ham kakao çekirdekleri fermantasyon süreci — toprak tonları ve yumuşak sabah ışığı',
      en: 'Close-up of raw cocoa beans during fermentation on banana leaves with earthy brown tones and soft morning light',
      ar: 'لقطة قريبة لحبوب كاكاو خام أثناء التخمير على أوراق الموز بألوان ترابية وإضاءة صباحية ناعمة',
    },
  },

  /** Nuts card — mixed tree nuts in ceramic bowls */
  nuts: {
    src: stitchSrc(
      'https://lh3.googleusercontent.com/aida-public/AB6AXuATkmfE_PNJ_FJTL0uJUS48eBIGWLfa_fToegCf52GFMaLNwMJ6k0XX4AVV5yLXV0zF3PlGZ9wyMK91cEgT3hMp7jaH0R64BWi4mfhX2x2fB5SXlSVN0F2s1jCoM8G5SVDSWdCeDg8V8gTmO3ekQ3U4nQhmxMWOXX-smMusyk-ZBBfcsT3GcTPrGVllDckb73EZVAwFTJTGoQEHYwjM0meQKenaVf8Az1YTjqE6NpCCrOPW5MPvwAk9zz_zeUYgfDAXJcGerb9com0',
    ),
    alt: {
      tr: 'Açık taş yüzey üzerinde minimalist seramik kaselerde yüksek kaliteli karma kuruyemiş — fındık ve ceviz',
      en: 'Flat lay of mixed high-quality nuts including hazelnuts and walnuts in minimalist ceramic bowls on a light stone surface',
      ar: 'تشكيلة مكسرات فاخرة تشمل البندق والجوز في أوعية سيراميك بسيطة على سطح حجري فاتح',
    },
  },

  /** Spices card (kept for non-home pages that may reference it) */
  spices: {
    src: stitchSrc(
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDUQF1S5zmJn28ZRUnM7mNtBKv6HINF_R1FvAiq2UtsuZpdk7PcbvnHZ50kD3TnlnyEVGShkoaaN1IscHStfLfj4b4AKJBcs6EBeYpIENupWvc2H4rqW8n-Eg5RORvXTJw2Etv4kKsov2kNDlNd19M0AZCicJte9A_cJwQn-rwgt4qtnNGITYUw8nENQkzurTRQ3Y4z2iD7CkPU3HseX2eXA9DLBmEziB8P-WHrdsfZWp8dlV_Aec6Mou6h5WZ3d4CE3P3rGoiLUmc',
    ),
    alt: {
      tr: 'Ahşap kaşıklar üzerinde kurutulmuş baharatların canlı renkleri',
      en: 'Vibrant colors of dried spices arranged on wooden spoons',
      ar: 'ألوان زاهية لتوابل مجففة مرتبة على ملاعق خشبية',
    },
  },

  /** Supply map / logistics visual (reused from home design) */
  supply: {
    src: stitchSrc(
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCYibQZM-I5km1MfFVnLuEZYN-LTdoagwIXwq6GTIm747VpwKJxM8wYkgrE1ifFcieUGBn0TMqGx6agUyaz5k830Mj1SJiEsZtZjCw95weZkuQR1KotRD23mPNQjvGnM1DNgYHymywLryQSQPZIfetFfN0Vg7TElg_iTOJ1acG-K3TyQhVY8BfnJVRaXphfZzdUvTVQJh8zQNpvv15KSjxMPbvDrCAw6MUs5N3_fa0MXfbjkHoLDC8aC1uaPUCxWu2yQfRrmOCgwX4',
    ),
    alt: {
      tr: 'Yeşil tarla gün batımında avuçlarında zengin toprak tutan sürdürülebilir tarım işçisi — geniş açı',
      en: 'Wide-angle shot of a sustainable farm worker holding a handful of rich soil in a green field at sunset',
      ar: 'لقطة بزاوية واسعة لعامل مزرعة مستدامة يحمل تربة خصبة في حقل أخضر عند غروب الشمس',
    },
  },

  /** Plantation / sustainability hero (reused) */
  plantation: {
    src: stitchSrc(
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCYibQZM-I5km1MfFVnLuEZYN-LTdoagwIXwq6GTIm747VpwKJxM8wYkgrE1ifFcieUGBn0TMqGx6agUyaz5k830Mj1SJiEsZtZjCw95weZkuQR1KotRD23mPNQjvGnM1DNgYHymywLryQSQPZIfetFfN0Vg7TElg_iTOJ1acG-K3TyQhVY8BfnJVRaXphfZzdUvTVQJh8zQNpvv15KSjxMPbvDrCAw6MUs5N3_fa0MXfbjkHoLDC8aC1uaPUCxWu2yQfRrmOCgwX4',
    ),
    alt: {
      tr: 'Yemyeşil sürdürülebilir tarla üzerinde sabah güneş ışınları',
      en: 'Lush sustainable plantation canopy pierced by morning sun rays',
      ar: 'مظلة مزرعة مستدامة مع أشعة شمس صباحية',
    },
  },

  /** Farmer portrait (reused) */
  farmer: {
    src: stitchSrc(
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCYibQZM-I5km1MfFVnLuEZYN-LTdoagwIXwq6GTIm747VpwKJxM8wYkgrE1ifFcieUGBn0TMqGx6agUyaz5k830Mj1SJiEsZtZjCw95weZkuQR1KotRD23mPNQjvGnM1DNgYHymywLryQSQPZIfetFfN0Vg7TElg_iTOJ1acG-K3TyQhVY8BfnJVRaXphfZzdUvTVQJh8zQNpvv15KSjxMPbvDrCAw6MUs5N3_fa0MXfbjkHoLDC8aC1uaPUCxWu2yQfRrmOCgwX4',
    ),
    alt: {
      tr: 'Yemyeşil tepelerin önünde üçüncü nesil çiftçi portresi',
      en: 'Portrait of a third-generation farmer against lush hills',
      ar: 'صورة لمزارع من الجيل الثالث أمام تلال خضراء',
    },
  },
} as const satisfies Record<string, ImageEntry>;

export type StockImageKey = keyof typeof stockImages;
