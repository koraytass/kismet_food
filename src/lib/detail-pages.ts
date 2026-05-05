import { localePath, locales, type Locale } from '@/i18n';

export type DetailGroup =
  | 'about'
  | 'products'
  | 'origins'
  | 'sustainability'
  | 'insights'
  | 'contact'
  | 'legal';

export interface DetailCopy {
  eyebrow: string;
  parentLabel: string;
  title: string;
  lead: string;
  image: string;
  imageAlt: string;
  stat?: string;
  statLabel?: string;
  notes?: string[];
  factSheet?: Array<{
    label: string;
    title: string;
    body: string;
  }>;
  sections: Array<{
    label: string;
    title: string;
    body: string;
  }>;
  links?: Array<{
    label: string;
    href: string;
  }>;
}

export interface DetailDefinition {
  group: DetailGroup;
  slug: string;
  parentPath: string;
  content: Record<Locale, DetailCopy>;
}

const img = {
  coffee: '/images/gallery/coffee.jpg',
  cocoa: '/images/gallery/cocoa.jpg',
  nuts: '/images/gallery/caju.jpg',
  supply: '/images/gallery/spices.jpg',
  hero: '/images/gallery/hero.jpg',
  map: '/images/gallery/nuts.jpg',
};

export const detailPages: DetailDefinition[] = [
  {
    group: 'about',
    slug: 'heritage',
    parentPath: '/about/',
    content: {
      tr: {
        eyebrow: 'İPEK YOLU MİRASI',
        parentLabel: 'Biz kimiz',
        title: 'Türkiye, iki kıta arasında bir ticaret hafızasıdır.',
        lead: 'Kısmet Foods bu mirası nostaljik bir dekor olarak değil; güven, söz, menşe bilgisi ve rota zekası olarak bugünün B2B gıda ticaretine taşır.',
        image: img.supply,
        imageAlt: 'Türkiye ve baharat ticareti atmosferi',
        stat: '5',
        statLabel: 'Kıta arasında ticaret',
        sections: [
          { label: 'Anadolu', title: 'Ürün hafızası', body: 'Fındık, Antep fıstığı, incir, kayısı ve baharat; Türkiye’nin ürün kimliği yalnızca liste değil, menşe kültürüdür.' },
          { label: 'İstanbul', title: 'Ticaret dili', body: 'Doğu ile Batı arasında fiyat, kalite, evrak ve sözün aynı anda okunduğu bir ticaret refleksi.' },
          { label: 'Bugün', title: 'Modern kürasyon', body: 'Kadim rota bilgisi; dijital izlenebilirlik, kalite standardı ve global lojistik ile birleşir.' },
        ],
        links: [{ label: 'Türkiye menşesi', href: '/origins/turkiye/' }, { label: 'Hikayemiz', href: '/about/story/' }],
      },
      en: {
        eyebrow: 'SILK ROAD HERITAGE',
        parentLabel: 'About',
        title: 'Türkiye is a trade memory between two continents.',
        lead: 'Kismet Foods carries this heritage into B2B food trade not as nostalgia, but as trust, origin knowledge and route intelligence.',
        image: img.supply,
        imageAlt: 'Türkiye and spice trade atmosphere',
        stat: '5',
        statLabel: 'Continents in trade',
        sections: [
          { label: 'Anatolia', title: 'Product memory', body: 'Hazelnut, pistachio, fig, apricot and spice: Türkiye’s product identity is a culture of origin.' },
          { label: 'Istanbul', title: 'Trade language', body: 'A commercial reflex that reads price, quality, documents and word of honor at the same time.' },
          { label: 'Today', title: 'Modern curation', body: 'Ancient route knowledge meets digital traceability, quality standards and global logistics.' },
        ],
        links: [{ label: 'Türkiye origin', href: '/origins/turkiye/' }, { label: 'Our story', href: '/about/story/' }],
      },
      ar: {
        eyebrow: 'إرث طريق الحرير',
        parentLabel: 'من نحن',
        title: 'تركيا ذاكرة تجارية بين قارتين.',
        lead: 'تحمل كسمت هذا الإرث إلى تجارة الغذاء B2B لا كحنين، بل كثقة ومعرفة منشأ وذكاء طرق.',
        image: img.supply,
        imageAlt: 'أجواء تجارة تركيا والتوابل',
        stat: '٥',
        statLabel: 'قارات في التجارة',
        sections: [
          { label: 'الأناضول', title: 'ذاكرة المنتج', body: 'البندق والفستق والتين والمشمش والتوابل: هوية تركيا هي ثقافة منشأ.' },
          { label: 'إسطنبول', title: 'لغة التجارة', body: 'حس تجاري يقرأ السعر والجودة والوثائق والكلمة في الوقت نفسه.' },
          { label: 'اليوم', title: 'اختيار حديث', body: 'تلتقي معرفة الطرق القديمة مع التتبع الرقمي ومعايير الجودة واللوجستيات العالمية.' },
        ],
        links: [{ label: 'منشأ تركيا', href: '/origins/turkiye/' }, { label: 'قصتنا', href: '/about/story/' }],
      },
    },
  },
  {
    group: 'about',
    slug: 'story',
    parentPath: '/about/',
    content: {
      tr: {
        eyebrow: 'KURULUŞ HİKAYESİ',
        parentLabel: 'Biz kimiz',
        title: 'İstanbul’dan doğan bir kürasyon masası.',
        lead: 'Kısmet Foods, klasik tedarikçi refleksinden uzak; menşe, kalite ve ticari güveni aynı masada buluşturan seçici bir B2B gıda hammaddesi yapısı olarak kuruldu.',
        image: img.supply,
        imageAlt: 'Ticari operasyon ve kalite kontrol masası',
        stat: '2019',
        statLabel: 'İstanbul başlangıcı',
        sections: [
          { label: '01', title: 'İlk odak', body: 'Anadolu fındığı, kuru meyve ve baharat hatlarında başlayan uzmanlık; kahve ve kakao gibi küresel emtialarla genişledi.' },
          { label: '02', title: 'Bugünkü rol', body: 'Kısmet Foods bugün üretici ile alıcı arasında yalnızca aracılık yapmaz; doğru menşeyi, doğru kaliteyi ve doğru teslim şeklini kürate eder.' },
          { label: '03', title: 'Çalışma dili', body: 'Az ama net söz, belgeli tedarik, ölçülebilir kalite ve uzun vadeli B2B ilişki yönetimi.' },
        ],
        links: [{ label: 'Mirası oku', href: '/about/heritage/' }, { label: 'Menşelere geç', href: '/origins/' }],
      },
      en: {
        eyebrow: 'FOUNDING STORY',
        parentLabel: 'About',
        title: 'A curation desk born in Istanbul.',
        lead: 'Kismet Foods was built away from the reflexes of a generic supplier: a selective B2B raw-food desk where origin, quality and commercial trust meet.',
        image: img.supply,
        imageAlt: 'Trade operation and quality-control desk',
        stat: '2019',
        statLabel: 'Istanbul beginning',
        sections: [
          { label: '01', title: 'First focus', body: 'Expertise began with Anatolian hazelnuts, dried fruit and spices, then expanded into global commodities such as coffee and cocoa.' },
          { label: '02', title: 'Current role', body: 'Kismet Foods does not simply intermediate; it curates the right origin, quality profile and delivery term.' },
          { label: '03', title: 'Operating language', body: 'Few words, clear records, documented sourcing, measurable quality and long-term B2B relationship management.' },
        ],
        links: [{ label: 'Read heritage', href: '/about/heritage/' }, { label: 'View origins', href: '/origins/' }],
      },
      ar: {
        eyebrow: 'قصة التأسيس',
        parentLabel: 'من نحن',
        title: 'مكتب اختيار وُلد في إسطنبول.',
        lead: 'تأسست كسمت فودز بعيداً عن نموذج المورد التقليدي؛ كمكتب B2B انتقائي يجمع المنشأ والجودة والثقة التجارية.',
        image: img.supply,
        imageAlt: 'مكتب عمليات تجارية ومراقبة جودة',
        stat: '٢٠١٩',
        statLabel: 'بداية إسطنبول',
        sections: [
          { label: '01', title: 'التركيز الأول', body: 'بدأت الخبرة من بندق الأناضول والفواكه المجففة والتوابل، ثم امتدت إلى القهوة والكاكاو.' },
          { label: '02', title: 'الدور اليوم', body: 'لا تكتفي كسمت بالوساطة؛ بل تختار المنشأ المناسب والجودة المناسبة وشكل التسليم المناسب.' },
          { label: '03', title: 'لغة العمل', body: 'كلمات قليلة، سجلات واضحة، توريد موثق، جودة قابلة للقياس، وعلاقات B2B طويلة الأمد.' },
        ],
        links: [{ label: 'اقرأ الإرث', href: '/about/heritage/' }, { label: 'المناشئ', href: '/origins/' }],
      },
    },
  },
  {
    group: 'about',
    slug: 'team',
    parentPath: '/about/',
    content: {
      tr: {
        eyebrow: 'EKİP',
        parentLabel: 'Biz kimiz',
        title: 'İsimden önce uzmanlık gelir.',
        lead: 'Kısmet Foods ekip anlatısını vitrin portresi gibi değil; tedarik, operasyon ve ticaret disiplinlerinin birleştiği bir uzmanlık masası olarak konumlar.',
        image: img.hero,
        imageAlt: 'Kahve çekirdekleri ve editorial yüzey',
        stat: '3',
        statLabel: 'Uzmanlık masası',
        sections: [
          { label: 'Tedarik', title: 'Menşe kürasyonu', body: 'Ürün grubuna göre saha kaynağı, kalite beklentisi ve üretici güvenilirliği birlikte değerlendirilir.' },
          { label: 'Operasyon', title: 'Lojistik kontrol', body: 'Evrak, transit, kalite kontrol ve teslim şekli tek ticari akış içinde takip edilir.' },
          { label: 'Ticaret', title: 'B2B ilişki', body: 'Müşteri ihtiyacı yalnızca fiyatla değil; üretim temposu, risk ve süreklilikle birlikte okunur.' },
        ],
        links: [{ label: 'Süreci incele', href: '/supply-chain/#process' }],
      },
      en: {
        eyebrow: 'TEAM',
        parentLabel: 'About',
        title: 'Expertise comes before names.',
        lead: 'Kismet Foods presents its team as a specialist desk where sourcing, operations and trade disciplines meet.',
        image: img.hero,
        imageAlt: 'Coffee beans on an editorial surface',
        stat: '3',
        statLabel: 'Specialist desks',
        sections: [
          { label: 'Sourcing', title: 'Origin curation', body: 'Field source, quality expectation and producer reliability are evaluated together by product group.' },
          { label: 'Operations', title: 'Logistics control', body: 'Documents, transit, quality control and delivery terms are managed inside one commercial flow.' },
          { label: 'Trade', title: 'B2B relationship', body: 'Client need is read through production rhythm, risk and continuity, not price alone.' },
        ],
        links: [{ label: 'View process', href: '/supply-chain/#process' }],
      },
      ar: {
        eyebrow: 'الفريق',
        parentLabel: 'من نحن',
        title: 'الخبرة قبل الأسماء.',
        lead: 'تقدم كسمت فريقها كمكتب متخصص تلتقي فيه تخصصات التوريد والعمليات والتجارة.',
        image: img.hero,
        imageAlt: 'حبوب قهوة على سطح تحريري',
        stat: '٣',
        statLabel: 'مكاتب تخصص',
        sections: [
          { label: 'التوريد', title: 'اختيار المنشأ', body: 'يتم تقييم المصدر والجودة وموثوقية المنتج معاً حسب فئة المنتج.' },
          { label: 'العمليات', title: 'ضبط اللوجستيات', body: 'تدار الوثائق والنقل ومراقبة الجودة وشروط التسليم ضمن مسار تجاري واحد.' },
          { label: 'التجارة', title: 'علاقة B2B', body: 'تقرأ حاجة العميل عبر إيقاع الإنتاج والمخاطر والاستمرارية، لا عبر السعر فقط.' },
        ],
        links: [{ label: 'عرض المسار', href: '/supply-chain/#process' }],
      },
    },
  },
  {
    group: 'about',
    slug: 'press',
    parentPath: '/about/',
    content: {
      tr: {
        eyebrow: 'BASIN & MEDYA',
        parentLabel: 'Biz kimiz',
        title: 'Net marka kullanımı, tek kaynak.',
        lead: 'Basın bültenleri, logo kullanımı ve şirket anlatısı için yalın bir medya alanı. Onaylı logo ve görsel setleri yayına hazırlanıyor.',
        image: img.cocoa,
        imageAlt: 'Kakao yüzeyi ve marka atmosferi',
        stat: 'PDF',
        statLabel: 'Medya kiti yakında',
        sections: [
          { label: 'Logo', title: 'Marka varlıkları', body: 'Kısmet Foods logoları açık, koyu ve tek renk kullanım senaryoları ile paketlenecek.' },
          { label: 'Bülten', title: 'Şirket anlatısı', body: 'Kısa şirket profili, motto ve B2B ticari konumlandırma basın formatında hazırlanacak.' },
          { label: 'İletişim', title: 'Doğrulama', body: 'Adres, telefon ve e-posta yalnızca doğrulanmış olduğunda paylaşılır; eksik bilgiler için yakında ifadesi korunur.' },
        ],
        links: [{ label: 'İletişim', href: '/contact/' }],
      },
      en: {
        eyebrow: 'PRESS & MEDIA',
        parentLabel: 'About',
        title: 'One source for precise brand use.',
        lead: 'A calm media area for press notes, logo usage and company description. Approved logo and image kits are being prepared.',
        image: img.cocoa,
        imageAlt: 'Cocoa surface and brand atmosphere',
        stat: 'PDF',
        statLabel: 'Media kit soon',
        sections: [
          { label: 'Logo', title: 'Brand assets', body: 'Kismet Foods logos will be packaged for light, dark and one-color usage scenarios.' },
          { label: 'Release', title: 'Company narrative', body: 'Short company profile, motto and B2B trade positioning will be available in press format.' },
          { label: 'Contact', title: 'Verification', body: 'Address, phone and email are shared only when verified; missing fields remain marked as coming soon.' },
        ],
        links: [{ label: 'Contact', href: '/contact/' }],
      },
      ar: {
        eyebrow: 'الصحافة والإعلام',
        parentLabel: 'من نحن',
        title: 'مصدر واحد لاستخدام العلامة بدقة.',
        lead: 'مساحة إعلامية هادئة للبيانات والشعارات ووصف الشركة. يجري إعداد حزمة الشعارات والصور المعتمدة.',
        image: img.cocoa,
        imageAlt: 'سطح كاكاو وأجواء العلامة',
        stat: 'PDF',
        statLabel: 'ملف إعلامي قريباً',
        sections: [
          { label: 'الشعار', title: 'أصول العلامة', body: 'سيتم تجهيز شعارات كسمت لاستخدامات الخلفيات الفاتحة والداكنة واللون الواحد.' },
          { label: 'البيان', title: 'وصف الشركة', body: 'سيكون الملف المختصر والموقع التجاري وشعار الشركة متاحاً بصيغة إعلامية.' },
          { label: 'التواصل', title: 'التحقق', body: 'لا تُنشر بيانات العنوان والهاتف والبريد إلا بعد التحقق؛ وما ينقص يبقى قريباً.' },
        ],
        links: [{ label: 'تواصل', href: '/contact/' }],
      },
    },
  },
  {
    group: 'products',
    slug: 'nuts',
    parentPath: '/products/',
    content: {
      tr: {
        eyebrow: 'KURUYEMİŞ & KURU MEYVE',
        parentLabel: 'Ürünler',
        title: 'Antep, Giresun, Malatya: ürünün adı menşeyle başlar.',
        lead: 'Fındık, Antep fıstığı, kaju, badem, incir ve kayısı hatlarında ölçü, nem, kalibrasyon ve sezon sürekliliği aynı anda yönetilir.',
        image: img.nuts,
        imageAlt: 'Kaju ve kuruyemiş ürün görseli',
        stat: '3',
        statLabel: 'Anadolu odağı',
        sections: [
          { label: 'Gaziantep', title: 'Antep fıstığı', body: 'Dünya haritasında doğru yerde: Antep platosu. Renk, iç oranı ve kullanım amacına göre sınıflandırma.' },
          { label: 'Giresun', title: 'Fındık', body: 'Karadeniz hattından Levant kalite fındık; yağ oranı, kırık oranı ve parti sürekliliği takip edilir.' },
          { label: 'Malatya', title: 'Kayısı', body: 'Gün kurusu ve endüstriyel kullanım için seçilmiş kayısı partileri; nem ve renk standardı ile.' },
        ],
        links: [{ label: 'Türkiye menşesi', href: '/origins/turkiye/' }, { label: 'Teklif al', href: '/contact/request-quote/' }],
      },
      en: {
        eyebrow: 'NUTS & DRIED FRUIT',
        parentLabel: 'Products',
        title: 'Antep, Giresun, Malatya: product begins with origin.',
        lead: 'Hazelnut, pistachio, cashew, almond, fig and apricot flows are managed through size, moisture, calibration and seasonal continuity.',
        image: img.nuts,
        imageAlt: 'Cashew and nut product visual',
        stat: '3',
        statLabel: 'Anatolian focus',
        sections: [
          { label: 'Gaziantep', title: 'Antep pistachio', body: 'Shown in the right place on the world map: the Antep plateau. Graded by color, kernel ratio and application.' },
          { label: 'Giresun', title: 'Hazelnut', body: 'Levant-quality hazelnuts from the Black Sea line; oil ratio, breakage and batch continuity are tracked.' },
          { label: 'Malatya', title: 'Apricot', body: 'Sun-dried and industrial apricot lots selected by moisture and color standard.' },
        ],
        links: [{ label: 'Türkiye origin', href: '/origins/turkiye/' }, { label: 'Request quote', href: '/contact/request-quote/' }],
      },
      ar: {
        eyebrow: 'المكسرات والفواكه المجففة',
        parentLabel: 'المنتجات',
        title: 'عنتاب وغيرسون وملاطية: يبدأ المنتج من منشئه.',
        lead: 'تدار خطوط البندق والفستق والكاجو واللوز والتين والمشمش عبر القياس والرطوبة والفرز واستمرارية الموسم.',
        image: img.nuts,
        imageAlt: 'صورة كاجو ومكسرات',
        stat: '٣',
        statLabel: 'تركيز أناضولي',
        sections: [
          { label: 'غازي عنتاب', title: 'فستق عنتاب', body: 'يظهر في المكان الصحيح على الخريطة: هضبة عنتاب. فرز حسب اللون ونسبة اللب والاستخدام.' },
          { label: 'غيرسون', title: 'البندق', body: 'بندق ليفانت من خط البحر الأسود؛ متابعة نسبة الزيت والكسر واستمرارية الدفعة.' },
          { label: 'ملاطية', title: 'المشمش', body: 'دفعات مشمش مجفف وصناعي مختارة حسب الرطوبة واللون.' },
        ],
        links: [{ label: 'منشأ تركيا', href: '/origins/turkiye/' }, { label: 'طلب عرض', href: '/contact/request-quote/' }],
      },
    },
  },
  {
    group: 'products',
    slug: 'spices',
    parentPath: '/products/',
    content: {
      tr: {
        eyebrow: 'BAHARAT & OTLAR',
        parentLabel: 'Ürünler',
        title: 'Aroma, saflık ve parti hafızası.',
        lead: 'Baharat tedariğinde yalnızca renk ve koku değil; saflık, uçucu yağ profili, öğütme davranışı ve ürünün mutfak/üretim rolü okunur.',
        image: img.cocoa,
        imageAlt: 'Baharat dokusu ve koyu editorial yüzey',
        stat: 'Lab',
        statLabel: 'Saflık kontrolü',
        sections: [
          { label: 'Anadolu', title: 'İsot, pul biber, sumak', body: 'Yerel profil korunur; parti bazlı acılık, renk ve nem değerleri izlenir.' },
          { label: 'Asya', title: 'Karabiber, kakule, tarçın', body: 'Aroma gücü ve uçucu yağ profili; üretim standardına göre eşleştirilir.' },
          { label: 'Endüstri', title: 'Öğütülmüş ve bütün form', body: 'Restoran zinciri, sos üretimi ve paketli gıda için farklı form ve ambalaj akışları.' },
        ],
        links: [{ label: 'Menşe haritası', href: '/origins/' }],
      },
      en: {
        eyebrow: 'SPICES & HERBS',
        parentLabel: 'Products',
        title: 'Aroma, purity and batch memory.',
        lead: 'Spice sourcing reads more than color and scent: purity, volatile-oil profile, grinding behavior and production role matter.',
        image: img.cocoa,
        imageAlt: 'Spice texture on a dark editorial surface',
        stat: 'Lab',
        statLabel: 'Purity control',
        sections: [
          { label: 'Anatolia', title: 'Isot, chili, sumac', body: 'Local profile is preserved while heat, color and moisture are monitored by batch.' },
          { label: 'Asia', title: 'Pepper, cardamom, cinnamon', body: 'Aroma strength and volatile-oil profile are matched to production standards.' },
          { label: 'Industry', title: 'Ground and whole form', body: 'Different form and packing flows for restaurant chains, sauce producers and packaged food.' },
        ],
        links: [{ label: 'Origin map', href: '/origins/' }],
      },
      ar: {
        eyebrow: 'التوابل والأعشاب',
        parentLabel: 'المنتجات',
        title: 'العطر والنقاء وذاكرة الدفعة.',
        lead: 'في التوابل لا نقرأ اللون والرائحة فقط؛ بل النقاء والزيوت الطيارة وسلوك الطحن ودور المنتج في التصنيع.',
        image: img.cocoa,
        imageAlt: 'ملمس توابل على سطح داكن',
        stat: 'مختبر',
        statLabel: 'فحص النقاء',
        sections: [
          { label: 'الأناضول', title: 'إيسوت وفلفل وسماق', body: 'يحفظ الطابع المحلي مع متابعة الحرارة واللون والرطوبة حسب الدفعة.' },
          { label: 'آسيا', title: 'فلفل وهيل وقرفة', body: 'تطابق قوة العطر والزيوت الطيارة مع معيار الإنتاج.' },
          { label: 'الصناعة', title: 'مطحون وكامل', body: 'تدفقات مختلفة للشكل والتعبئة للمطاعم ومصنعي الصلصات والأغذية المعبأة.' },
        ],
        links: [{ label: 'خريطة المناشئ', href: '/origins/' }],
      },
    },
  },
  {
    group: 'products',
    slug: 'ingredients',
    parentPath: '/products/',
    content: {
      tr: {
        eyebrow: 'ENDÜSTRİYEL İÇERİKLER',
        parentLabel: 'Ürünler',
        title: 'Üretim hattına uygun ham madde.',
        lead: 'Tahıl, bakliyat, yağlı tohum ve özel hammaddelerde süreklilik, fiyatlama ve kalite evrakı endüstriyel üretim ritmine göre kurgulanır.',
        image: img.supply,
        imageAlt: 'Endüstriyel gıda tedarik operasyonu',
        stat: 'FOB',
        statLabel: 'CIF · CFR · DDP',
        sections: [
          { label: 'Planlama', title: 'Yıllık hacim', body: 'Tek sevkiyat yerine tekrar eden üretim ihtiyacı ve risk takvimi üzerinden çalışılır.' },
          { label: 'Evrak', title: 'Teknik dosya', body: 'Analiz, menşe, bitki sağlığı ve sevkiyat belgeleri tek dosyada toplanır.' },
          { label: 'Ticaret', title: 'Teslim şekli', body: 'FOB, CIF, CFR veya DDP akışları müşteri operasyonuna göre eşleştirilir.' },
        ],
        links: [{ label: 'Tedarik zinciri', href: '/supply-chain/' }, { label: 'Teklif al', href: '/contact/request-quote/' }],
      },
      en: {
        eyebrow: 'INDUSTRIAL INGREDIENTS',
        parentLabel: 'Products',
        title: 'Raw material matched to the production line.',
        lead: 'For grains, pulses, oilseeds and specialty ingredients, continuity, pricing and quality documents are built around industrial production rhythm.',
        image: img.supply,
        imageAlt: 'Industrial food sourcing operation',
        stat: 'FOB',
        statLabel: 'CIF · CFR · DDP',
        sections: [
          { label: 'Planning', title: 'Annual volume', body: 'Work begins from recurring production need and risk calendar, not a single shipment.' },
          { label: 'Records', title: 'Technical file', body: 'Analysis, origin, phytosanitary and shipment documents are held in one file.' },
          { label: 'Trade', title: 'Delivery term', body: 'FOB, CIF, CFR or DDP flows are matched to the client operation.' },
        ],
        links: [{ label: 'Supply chain', href: '/supply-chain/' }, { label: 'Request quote', href: '/contact/request-quote/' }],
      },
      ar: {
        eyebrow: 'مكونات صناعية',
        parentLabel: 'المنتجات',
        title: 'مادة خام مناسبة لخط الإنتاج.',
        lead: 'في الحبوب والبقول والبذور الزيتية والمواد الخاصة تُبنى الاستمرارية والتسعير والوثائق حسب إيقاع الإنتاج الصناعي.',
        image: img.supply,
        imageAlt: 'عملية توريد غذائي صناعي',
        stat: 'FOB',
        statLabel: 'CIF · CFR · DDP',
        sections: [
          { label: 'التخطيط', title: 'حجم سنوي', body: 'نبدأ من حاجة إنتاج متكررة وجدول مخاطر، لا من شحنة واحدة فقط.' },
          { label: 'الملف', title: 'ملف فني', body: 'تحفظ التحاليل والمنشأ والصحة النباتية ووثائق الشحن في ملف واحد.' },
          { label: 'التجارة', title: 'شروط التسليم', body: 'تطابق تدفقات FOB أو CIF أو CFR أو DDP مع عملية العميل.' },
        ],
        links: [{ label: 'سلسلة التوريد', href: '/supply-chain/' }, { label: 'طلب عرض', href: '/contact/request-quote/' }],
      },
    },
  },
  {
    group: 'origins',
    slug: 'partnerships',
    parentPath: '/origins/',
    content: {
      tr: {
        eyebrow: 'MENŞE PARTNERLİKLERİ',
        parentLabel: 'Menşeler',
        title: 'Yeni menşe, önce güven sonra hacim demektir.',
        lead: 'Kısmet Foods için yeni ülke ya da yeni ürün eklemek bir liste genişletme işi değildir; çiftçi, kooperatif, ihracatçı ve kalite evrakının birlikte doğrulandığı kontrollü bir süreçtir.',
        image: img.map,
        imageAlt: 'Menşe partnerliği ve tedarik ağı',
        stat: '4',
        statLabel: 'Onboarding adımı',
        sections: [
          { label: '01', title: 'Saha doğrulama', body: 'Üretici, kooperatif veya ihracatçı geçmişi; kalite standardı ve ticari güvenilirlikle birlikte okunur.' },
          { label: '02', title: 'Numune & analiz', body: 'Ürün yalnızca anlatıyla değil; fiziksel numune, analiz ve parti evrakı ile değerlendirilir.' },
          { label: '03', title: 'Pilot sevkiyat', body: 'Yeni menşe önce küçük hacimli kontrollü sevkiyatla sisteme alınır, sonra ölçeklenir.' },
        ],
        links: [{ label: 'B2B süreç', href: '/supply-chain/#process' }, { label: 'İletişim', href: '/contact/' }],
      },
      en: {
        eyebrow: 'ORIGIN PARTNERSHIPS',
        parentLabel: 'Origins',
        title: 'A new origin means trust before volume.',
        lead: 'For Kismet Foods, adding a country or product is not list expansion; it is a controlled process where farmer, cooperative, exporter and quality records are validated together.',
        image: img.map,
        imageAlt: 'Origin partnership and sourcing network',
        stat: '4',
        statLabel: 'Onboarding steps',
        sections: [
          { label: '01', title: 'Field validation', body: 'Producer, cooperative or exporter history is read with quality standard and commercial reliability.' },
          { label: '02', title: 'Sample & analysis', body: 'Product is evaluated through physical sample, analysis and batch records, not narrative alone.' },
          { label: '03', title: 'Pilot shipment', body: 'A new origin enters the system through controlled small-volume shipment before scaling.' },
        ],
        links: [{ label: 'B2B process', href: '/supply-chain/#process' }, { label: 'Contact', href: '/contact/' }],
      },
      ar: {
        eyebrow: 'شراكات المنشأ',
        parentLabel: 'المناشئ',
        title: 'المنشأ الجديد يعني الثقة قبل الحجم.',
        lead: 'إضافة بلد أو منتج لدى كسمت ليست توسيع قائمة؛ بل عملية مضبوطة يتم فيها التحقق من المزارع والتعاونية والمصدر ووثائق الجودة معاً.',
        image: img.map,
        imageAlt: 'شراكة منشأ وشبكة توريد',
        stat: '٤',
        statLabel: 'خطوات الانضمام',
        sections: [
          { label: '01', title: 'تحقق ميداني', body: 'يقرأ تاريخ المنتج أو التعاونية أو المصدر مع معيار الجودة والموثوقية التجارية.' },
          { label: '02', title: 'عينة وتحليل', body: 'يتم تقييم المنتج عبر عينة فعلية وتحليل ووثائق دفعة، لا عبر السرد فقط.' },
          { label: '03', title: 'شحنة تجريبية', body: 'يدخل المنشأ الجديد عبر شحنة صغيرة مضبوطة قبل التوسع.' },
        ],
        links: [{ label: 'مسار B2B', href: '/supply-chain/#process' }, { label: 'التواصل', href: '/contact/' }],
      },
    },
  },
  {
    group: 'origins',
    slug: 'ethiopia',
    parentPath: '/origins/',
    content: {
      tr: {
        eyebrow: 'ETİYOPYA',
        parentLabel: 'Menşeler',
        title: 'Yirgacheffe ve Sidamo kahve hafızası.',
        lead: 'Yüksek rakım, yıkanmış proses ve çiçeksi asidite; Etiyopya kahvesi Kısmet portföyünde karakter odaklı tedarik hattıdır.',
        image: img.coffee,
        imageAlt: 'Etiyopya kahve menşesi',
        stat: '1.500m+',
        statLabel: 'Rakım odağı',
        sections: [
          { label: 'Profil', title: 'Çiçeksi ve narenciye', body: 'Yıkanmış lotlarda parlak asidite; doğal proseslerde daha yoğun meyvemsi karakter.' },
          { label: 'Uygulama', title: 'Kavurucu ve fabrika', body: 'Specialty kavurucular ve premium harman üreticileri için farklı kalite eşikleri.' },
          { label: 'Evrak', title: 'Menşe dosyası', body: 'Parti bazlı kalite, nem ve sevkiyat evrakı tedarik dosyasına bağlanır.' },
        ],
        links: [{ label: 'Kahve & Kakao', href: '/products/coffee-cocoa/' }],
      },
      en: {
        eyebrow: 'ETHIOPIA',
        parentLabel: 'Origins',
        title: 'Yirgacheffe and Sidamo coffee memory.',
        lead: 'High altitude, washed processing and floral acidity make Ethiopia a character-led sourcing line in the Kismet portfolio.',
        image: img.coffee,
        imageAlt: 'Ethiopian coffee origin',
        stat: '1,500m+',
        statLabel: 'Altitude focus',
        sections: [
          { label: 'Profile', title: 'Floral and citrus', body: 'Bright acidity in washed lots; richer fruit character in natural-process lots.' },
          { label: 'Application', title: 'Roaster and factory', body: 'Different quality thresholds for specialty roasters and premium blend producers.' },
          { label: 'Records', title: 'Origin file', body: 'Batch quality, moisture and shipment documents connect to the sourcing file.' },
        ],
        links: [{ label: 'Coffee & Cocoa', href: '/products/coffee-cocoa/' }],
      },
      ar: {
        eyebrow: 'إثيوبيا',
        parentLabel: 'المناشئ',
        title: 'ذاكرة قهوة يرغاشيف وسيدامو.',
        lead: 'الارتفاع العالي والمعالجة المغسولة والحموضة الزهرية تجعل إثيوبيا خط توريد ذا شخصية في محفظة كسمت.',
        image: img.coffee,
        imageAlt: 'منشأ قهوة إثيوبية',
        stat: '+١٥٠٠م',
        statLabel: 'تركيز الارتفاع',
        sections: [
          { label: 'الملف', title: 'زهري وحمضي', body: 'حموضة لامعة في الدفعات المغسولة؛ وشخصية فاكهية أعمق في المعالجة الطبيعية.' },
          { label: 'الاستخدام', title: 'محمصة ومصنع', body: 'عتبات جودة مختلفة للمحامص المختصة ومنتجي الخلطات الفاخرة.' },
          { label: 'الوثائق', title: 'ملف المنشأ', body: 'ترتبط الجودة والرطوبة ووثائق الشحن بملف التوريد.' },
        ],
        links: [{ label: 'القهوة والكاكاو', href: '/products/coffee-cocoa/' }],
      },
    },
  },
  {
    group: 'origins',
    slug: 'colombia',
    parentPath: '/origins/',
    content: {
      tr: { eyebrow: 'KOLOMBİYA', parentLabel: 'Menşeler', title: 'And eteklerinden dengeli specialty kahve.', lead: 'Huila ve Nariño hatları; karamel, dengeli asidite ve tutarlı yıkanmış kalite için takip edilir.', image: img.coffee, imageAlt: 'Kolombiya kahve menşesi', stat: 'Huila', statLabel: 'Ana hat', sections: [{ label: 'Profil', title: 'Denge', body: 'Kolombiya lotları özellikle tekrarlanabilir harman kalitesi için güçlü bir temel sağlar.' }, { label: 'Sezon', title: 'Süreklilik', body: 'Hasat pencereleri ve parti planlaması üretim takvimine göre eşleştirilir.' }], links: [{ label: 'Menşe haritası', href: '/origins/' }] },
      en: { eyebrow: 'COLOMBIA', parentLabel: 'Origins', title: 'Balanced specialty coffee from Andean foothills.', lead: 'Huila and Nariño lines are tracked for caramel notes, balanced acidity and consistent washed quality.', image: img.coffee, imageAlt: 'Colombian coffee origin', stat: 'Huila', statLabel: 'Core line', sections: [{ label: 'Profile', title: 'Balance', body: 'Colombian lots provide a strong base for repeatable blend quality.' }, { label: 'Season', title: 'Continuity', body: 'Harvest windows and batch planning are matched to production calendars.' }], links: [{ label: 'Origin map', href: '/origins/' }] },
      ar: { eyebrow: 'كولومبيا', parentLabel: 'المناشئ', title: 'قهوة مختصة متوازنة من سفوح الأنديز.', lead: 'تتابع خطوط هويلا ونارينيو لنكهات الكراميل والحموضة المتوازنة والجودة المغسولة المستقرة.', image: img.coffee, imageAlt: 'منشأ قهوة كولومبي', stat: 'هويلا', statLabel: 'الخط الأساسي', sections: [{ label: 'الملف', title: 'التوازن', body: 'توفر الدفعات الكولومبية أساساً قوياً لجودة خلطات قابلة للتكرار.' }, { label: 'الموسم', title: 'الاستمرارية', body: 'تطابق نوافذ الحصاد وتخطيط الدفعات مع تقويم الإنتاج.' }], links: [{ label: 'خريطة المناشئ', href: '/origins/' }] },
    },
  },
  {
    group: 'origins',
    slug: 'vietnam',
    parentPath: '/origins/',
    content: {
      tr: { eyebrow: 'VİETNAM', parentLabel: 'Menşeler', title: 'Robusta, kaju ve karabiberde ölçek.', lead: 'Vietnam hattı yüksek hacimli ve sürekli tedarik isteyen üreticiler için güçlü bir operasyon zemini sağlar.', image: img.nuts, imageAlt: 'Vietnam kaju ve kahve hattı', stat: 'Dak Lak', statLabel: 'Kahve hattı', sections: [{ label: 'Kahve', title: 'Robusta', body: 'Espresso harmanları ve endüstriyel kahve uygulamaları için ölçekli tedarik.' }, { label: 'Kaju', title: 'Kalibre çekirdek', body: 'Boyut, kırık oranı ve nem standardı ürün kullanımına göre seçilir.' }], links: [{ label: 'Kuruyemiş', href: '/products/nuts/' }] },
      en: { eyebrow: 'VIETNAM', parentLabel: 'Origins', title: 'Scale in robusta, cashew and black pepper.', lead: 'Vietnam offers a strong operating base for producers needing high-volume and continuous supply.', image: img.nuts, imageAlt: 'Vietnam cashew and coffee line', stat: 'Dak Lak', statLabel: 'Coffee line', sections: [{ label: 'Coffee', title: 'Robusta', body: 'Scaled supply for espresso blends and industrial coffee applications.' }, { label: 'Cashew', title: 'Calibrated kernel', body: 'Size, breakage and moisture standards are selected by application.' }], links: [{ label: 'Nuts', href: '/products/nuts/' }] },
      ar: { eyebrow: 'فيتنام', parentLabel: 'المناشئ', title: 'حجم في الروبوستا والكاجو والفلفل.', lead: 'يوفر خط فيتنام قاعدة تشغيل قوية للمنتجين الذين يحتاجون إلى توريد كبير ومستمر.', image: img.nuts, imageAlt: 'خط كاجو وقهوة فيتنام', stat: 'داك لاك', statLabel: 'خط القهوة', sections: [{ label: 'القهوة', title: 'روبوستا', body: 'توريد واسع لخلطات الإسبريسو وتطبيقات القهوة الصناعية.' }, { label: 'الكاجو', title: 'لب معاير', body: 'تختار معايير الحجم والكسر والرطوبة حسب الاستخدام.' }], links: [{ label: 'المكسرات', href: '/products/nuts/' }] },
    },
  },
  {
    group: 'origins',
    slug: 'ghana',
    parentPath: '/origins/',
    content: {
      tr: { eyebrow: 'GANA', parentLabel: 'Menşeler', title: 'Çikolata üretimi için güvenilir kakao hattı.', lead: 'Gana kakao hattı; fermentasyon, yağ oranı ve aroma istikrarı ile endüstriyel ve premium üretim için konumlanır.', image: img.cocoa, imageAlt: 'Gana kakao menşesi', stat: '52-56%', statLabel: 'Yağ aralığı', sections: [{ label: 'Profil', title: 'Derin kakao', body: 'Klasik çikolata notaları ve stabil endüstriyel performans.' }, { label: 'Kalite', title: 'Fermentasyon kontrolü', body: 'Parti bazında nem, yabancı madde ve fermentasyon seviyesi izlenir.' }], links: [{ label: 'Kahve & Kakao', href: '/products/coffee-cocoa/' }] },
      en: { eyebrow: 'GHANA', parentLabel: 'Origins', title: 'Reliable cocoa line for chocolate production.', lead: 'Ghana cocoa is positioned for industrial and premium production through fermentation, fat range and flavor stability.', image: img.cocoa, imageAlt: 'Ghana cocoa origin', stat: '52-56%', statLabel: 'Fat range', sections: [{ label: 'Profile', title: 'Deep cocoa', body: 'Classic chocolate notes with stable industrial performance.' }, { label: 'Quality', title: 'Fermentation control', body: 'Moisture, foreign matter and fermentation level are tracked by batch.' }], links: [{ label: 'Coffee & Cocoa', href: '/products/coffee-cocoa/' }] },
      ar: { eyebrow: 'غانا', parentLabel: 'المناشئ', title: 'خط كاكاو موثوق لإنتاج الشوكولاتة.', lead: 'يتموضع كاكاو غانا للإنتاج الصناعي والفاخـر عبر التخمير ونسبة الدهون واستقرار النكهة.', image: img.cocoa, imageAlt: 'منشأ كاكاو غانا', stat: '٥٢-٥٦٪', statLabel: 'نطاق الدهون', sections: [{ label: 'الملف', title: 'كاكاو عميق', body: 'نوتات شوكولاتة كلاسيكية وأداء صناعي مستقر.' }, { label: 'الجودة', title: 'ضبط التخمير', body: 'تتم متابعة الرطوبة والشوائب ومستوى التخمير حسب الدفعة.' }], links: [{ label: 'القهوة والكاكاو', href: '/products/coffee-cocoa/' }] },
    },
  },
];

const shortPages: DetailDefinition[] = [
  ['sustainability', 'farmers', '/sustainability/', 'Çiftçi güçlendirme', 'Farmer empowerment', 'تمكين المزارعين'],
  ['sustainability', 'planet', '/sustainability/', 'Gezegen & iz', 'Planet & footprint', 'الكوكب والأثر'],
  ['sustainability', 'report', '/sustainability/', 'Yıllık rapor', 'Annual report', 'التقرير السنوي'],
  ['insights', 'market-reports', '/insights/', 'Piyasa raporları', 'Market reports', 'تقارير السوق'],
  ['insights', 'origin-stories', '/insights/', 'Menşe hikayeleri', 'Origin stories', 'قصص المناشئ'],
  ['insights', 'news', '/insights/', 'Haberler', 'News', 'الأخبار'],
] .map(([group, slug, parentPath, trTitle, enTitle, arTitle]) => ({
  group: group as DetailGroup,
  slug,
  parentPath,
  content: {
    tr: {
      eyebrow: group === 'insights' ? 'İÇGÖRÜ' : 'ESG',
      parentLabel: group === 'insights' ? 'Insights' : 'Sürdürülebilirlik',
      title: trTitle,
      lead: `${trTitle} alanı, ana sayfayı ağırlaştırmadan daha derin bilgi isteyen ziyaretçiler için ayrılmıştır.`,
      image: group === 'insights' ? img.hero : img.map,
      imageAlt: trTitle,
      stat: '01',
      statLabel: 'Detay odası',
      sections: [
        { label: 'Kısa', title: 'Özet görünüm', body: 'Ana sayfada yalnızca güçlü yönlendirme kalır; bu sayfada konuya ait bağlam açılır.' },
        { label: 'Derin', title: 'Belge ve veri', body: 'Rapor, saha notu, pazar gözlemi ve indirilebilir içerikler bu katmanda büyütülür.' },
      ],
      links: [{ label: 'Ana sayfaya dön', href: parentPath }],
    },
    en: {
      eyebrow: group === 'insights' ? 'INSIGHT' : 'ESG',
      parentLabel: group === 'insights' ? 'Insights' : 'Sustainability',
      title: enTitle,
      lead: `${enTitle} is reserved for visitors who want more depth without turning the landing page into a long read.`,
      image: group === 'insights' ? img.hero : img.map,
      imageAlt: enTitle,
      stat: '01',
      statLabel: 'Detail room',
      sections: [
        { label: 'Short', title: 'Summary view', body: 'The parent page remains a strong gateway; this page opens the context behind the topic.' },
        { label: 'Deep', title: 'Documents and data', body: 'Reports, field notes, market observations and downloadable assets grow in this layer.' },
      ],
      links: [{ label: 'Back to parent', href: parentPath }],
    },
    ar: {
      eyebrow: group === 'insights' ? 'رؤية' : 'ESG',
      parentLabel: group === 'insights' ? 'Insights' : 'الاستدامة',
      title: arTitle,
      lead: `${arTitle} مخصص للزائر الذي يريد عمقاً أكبر من دون تحويل الصفحة الرئيسية إلى نص طويل.`,
      image: group === 'insights' ? img.hero : img.map,
      imageAlt: arTitle,
      stat: '٠١',
      statLabel: 'غرفة تفصيل',
      sections: [
        { label: 'مختصر', title: 'عرض موجز', body: 'تبقى الصفحة الأم بوابة قوية؛ وتفتح هذه الصفحة السياق خلف الموضوع.' },
        { label: 'عميق', title: 'وثائق وبيانات', body: 'تنمو التقارير والملاحظات الميدانية ومراقبة السوق والملفات القابلة للتنزيل في هذا المستوى.' },
      ],
      links: [{ label: 'العودة', href: parentPath }],
    },
  },
}));

detailPages.push(...shortPages);

detailPages.push({
  group: 'contact',
  slug: 'request-quote',
  parentPath: '/contact/',
  content: {
    tr: { eyebrow: 'TEKLİF FORMU', parentLabel: 'İletişim', title: 'Tedarik ihtiyacınızı netleştirelim.', lead: 'Ürün, menşe, hacim ve teslim şekli bilgisi paylaşıldığında Kısmet ekibi talebi ticari bağlamıyla değerlendirir.', image: img.supply, imageAlt: 'Teklif talebi operasyon masası', stat: 'KVKK', statLabel: 'Açık rıza gerekli', sections: [{ label: '01', title: 'Ürün', body: 'Kahve, kakao, kuruyemiş, baharat veya endüstriyel içerik seçimi.' }, { label: '02', title: 'Hacim', body: 'Numune, ilk konteyner veya yıllık tedarik planı.' }, { label: '03', title: 'Teslim', body: 'FOB, CIF, CFR veya DDP beklentisi.' }], links: [{ label: 'İletişim', href: '/contact/' }] },
    en: { eyebrow: 'QUOTE FORM', parentLabel: 'Contact', title: 'Let’s define your sourcing need.', lead: 'When product, origin, volume and delivery term are shared, the Kismet team evaluates the request in its commercial context.', image: img.supply, imageAlt: 'Quote request operations desk', stat: 'GDPR', statLabel: 'Consent required', sections: [{ label: '01', title: 'Product', body: 'Coffee, cocoa, nuts, spices or industrial ingredient selection.' }, { label: '02', title: 'Volume', body: 'Sample, first container or annual supply plan.' }, { label: '03', title: 'Delivery', body: 'FOB, CIF, CFR or DDP expectation.' }], links: [{ label: 'Contact', href: '/contact/' }] },
    ar: { eyebrow: 'طلب عرض', parentLabel: 'التواصل', title: 'لنحدد حاجتك في التوريد.', lead: 'عند مشاركة المنتج والمنشأ والحجم وشروط التسليم يقيّم فريق كسمت الطلب في سياقه التجاري.', image: img.supply, imageAlt: 'مكتب عمليات طلب عرض', stat: 'GDPR', statLabel: 'الموافقة مطلوبة', sections: [{ label: '01', title: 'المنتج', body: 'قهوة أو كاكاو أو مكسرات أو توابل أو مكونات صناعية.' }, { label: '02', title: 'الحجم', body: 'عينة أو أول حاوية أو خطة توريد سنوية.' }, { label: '03', title: 'التسليم', body: 'توقع FOB أو CIF أو CFR أو DDP.' }], links: [{ label: 'التواصل', href: '/contact/' }] },
  },
});

detailPages.push(
  {
    group: 'legal',
    slug: 'terms',
    parentPath: '/',
    content: {
      tr: { eyebrow: 'KULLANIM ŞARTLARI', parentLabel: 'Yasal', title: 'Ticari kullanım şartları.', lead: 'Bu sayfa Kısmet Foods web sitesinin kullanımına ilişkin temel şartları, sorumluluk sınırlarını ve İstanbul Anadolu mahkemeleri yetki çerçevesini açıklar.', image: img.supply, imageAlt: 'Yasal doküman atmosferi', stat: 'B2B', statLabel: 'Bilgilendirme', sections: [{ label: 'Kapsam', title: 'Site kullanımı', body: 'Sitedeki bilgiler genel tanıtım amaçlıdır; bağlayıcı ticari teklif veya garanti niteliği taşımaz.' }, { label: 'İçerik', title: 'Fikri haklar', body: 'Logo, görsel, metin ve marka unsurları Kısmet Foods veya lisans verenlerine aittir.' }, { label: 'Yetki', title: 'Uyuşmazlık', body: 'Uyuşmazlıklarda Türk hukuku ve İstanbul Anadolu mahkemeleri/yürütme daireleri yetkilidir.' }], links: [{ label: 'Gizlilik', href: '/privacy/' }, { label: 'Çerezler', href: '/cookies/' }] },
      en: { eyebrow: 'TERMS OF USE', parentLabel: 'Legal', title: 'Commercial terms of use.', lead: 'This page explains the basic terms, liability limits and Istanbul Anatolian courts jurisdiction framework for using the Kismet Foods website.', image: img.supply, imageAlt: 'Legal document atmosphere', stat: 'B2B', statLabel: 'Information', sections: [{ label: 'Scope', title: 'Website use', body: 'Information on the site is for general presentation and does not constitute a binding commercial offer or warranty.' }, { label: 'Content', title: 'Intellectual property', body: 'Logo, visuals, text and brand elements belong to Kismet Foods or its licensors.' }, { label: 'Jurisdiction', title: 'Disputes', body: 'Turkish law and Istanbul Anatolian courts/enforcement offices are competent for disputes.' }], links: [{ label: 'Privacy', href: '/privacy/' }, { label: 'Cookies', href: '/cookies/' }] },
      ar: { eyebrow: 'شروط الاستخدام', parentLabel: 'قانوني', title: 'شروط الاستخدام التجاري.', lead: 'توضح هذه الصفحة الشروط الأساسية وحدود المسؤولية واختصاص محاكم إسطنبول الأناضولية لاستخدام موقع كسمت فودز.', image: img.supply, imageAlt: 'أجواء وثائق قانونية', stat: 'B2B', statLabel: 'معلومات', sections: [{ label: 'النطاق', title: 'استخدام الموقع', body: 'المعلومات على الموقع للتعريف العام ولا تشكل عرضاً تجارياً ملزماً أو ضماناً.' }, { label: 'المحتوى', title: 'الملكية الفكرية', body: 'الشعار والصور والنصوص وعناصر العلامة تعود إلى كسمت فودز أو مرخصيها.' }, { label: 'الاختصاص', title: 'النزاعات', body: 'يطبق القانون التركي وتختص محاكم ودوائر تنفيذ إسطنبول الأناضولية بالنزاعات.' }], links: [{ label: 'الخصوصية', href: '/privacy/' }, { label: 'الكوكيز', href: '/cookies/' }] },
    },
  },
  {
    group: 'legal',
    slug: 'cookies',
    parentPath: '/',
    content: {
      tr: { eyebrow: 'ÇEREZ POLİTİKASI', parentLabel: 'Yasal', title: 'Zorunlu çerezle başlayan, rızayla genişleyen yapı.', lead: 'Kısmet Foods web sitesinde varsayılan olarak yalnızca zorunlu çerezler çalışır; analitik ve pazarlama kategorileri açık rıza olmadan yüklenmez.', image: img.hero, imageAlt: 'Çerez politikası görsel atmosferi', stat: 'KVKK', statLabel: 'GDPR uyumlu', sections: [{ label: 'Zorunlu', title: 'Temel işleyiş', body: 'Dil, oturum ve tercih gibi sitenin çalışması için gerekli teknik kayıtlar.' }, { label: 'Analitik', title: 'Rıza ile ölçüm', body: 'Ziyaret davranışını anlamaya yönelik ölçümler yalnızca kullanıcı onayıyla etkinleşir.' }, { label: 'Pazarlama', title: 'Kapalı varsayılan', body: 'Pazarlama amaçlı script veya takip aracı varsayılan olarak yüklenmez.' }], links: [{ label: 'Gizlilik', href: '/privacy/' }, { label: 'Şartlar', href: '/terms/' }] },
      en: { eyebrow: 'COOKIE POLICY', parentLabel: 'Legal', title: 'Necessary by default, expanded by consent.', lead: 'Only necessary cookies run by default on Kismet Foods; analytics and marketing categories are not loaded without explicit consent.', image: img.hero, imageAlt: 'Cookie policy visual atmosphere', stat: 'GDPR', statLabel: 'KVKK aligned', sections: [{ label: 'Necessary', title: 'Core operation', body: 'Technical records required for language, session and preference functions.' }, { label: 'Analytics', title: 'Measurement by consent', body: 'Measurements used to understand visit behavior activate only with user consent.' }, { label: 'Marketing', title: 'Off by default', body: 'Marketing scripts or tracking tools are not loaded by default.' }], links: [{ label: 'Privacy', href: '/privacy/' }, { label: 'Terms', href: '/terms/' }] },
      ar: { eyebrow: 'سياسة الكوكيز', parentLabel: 'قانوني', title: 'ضرورية افتراضياً وتتوسع بالموافقة.', lead: 'تعمل في موقع كسمت فودز الكوكيز الضرورية فقط افتراضياً؛ ولا تُحمّل التحليلات أو التسويق دون موافقة صريحة.', image: img.hero, imageAlt: 'أجواء سياسة الكوكيز', stat: 'GDPR', statLabel: 'متوافق مع KVKK', sections: [{ label: 'ضرورية', title: 'تشغيل أساسي', body: 'سجلات تقنية لازمة للغة والجلسة والتفضيلات.' }, { label: 'تحليلات', title: 'قياس بالموافقة', body: 'لا تعمل القياسات لفهم سلوك الزيارة إلا بموافقة المستخدم.' }, { label: 'تسويق', title: 'مغلق افتراضياً', body: 'لا يتم تحميل سكربتات التسويق أو أدوات التتبع افتراضياً.' }], links: [{ label: 'الخصوصية', href: '/privacy/' }, { label: 'الشروط', href: '/terms/' }] },
    },
  },
);

const enrichments: Record<string, Partial<Record<Locale, Partial<DetailCopy>>>> = {
  'products/nuts': {
    tr: {
      notes: [
        'Türkiye; fındık, kuru kayısı ve kuru incir gibi ürünlerde dünya ticaretinde çok güçlü bir menşe algısına sahiptir. Bu yüzden Kısmet Foods kuruyemiş ve kuru meyve sayfasında “ürün” yerine “şehir + ürün” mantığını öne çıkarır: Giresun fındığı, Antep fıstığı, Malatya kayısısı, Aydın inciri.',
        'B2B alıcı için kritik konu yalnızca lezzet değildir. Kalibrasyon, kırık oranı, nem, aflatoksin riski, sezon sürekliliği, ambalaj tipi ve teslim şekli aynı ürün dosyasında okunmalıdır. Bu sayfa o yüzden kısa katalog dili yerine parti yönetimi ve menşe kontrolü diliyle yazıldı.',
        'Hasat takvimi yıl boyu farklılık gösterir: Antep fıstığı Eylül–Ekim, Giresun fındığı Ağustos–Eylül, Malatya kayısısı Temmuz–Ağustos, Aydın inciri Ağustos–Ekim, Vietnam kajusu Şubat–Mayıs. Kısmet bu pencerelerin tamamını portföyde tutarak yıl içinde tek bir tedarikte boşluk bırakmaz.',
        'Aflatoksin (B1+B2+G1+G2 toplamda 10 ppb / B1 5 ppb AB sınırı), kalıntı pestisit, böcek ve küf riski; her partide üçüncü taraf akredite laboratuvar (Eurofins, SGS, Bureau Veritas) raporuyla doğrulanır. Sertifika dosyası kontrat ekinde sevkiyatla aynı anda iletilir.',
        'Ambalajlama alıcının üretim hattına göre kurgulanır: vakumlu 12.5/22.5 kg karton, 25 kg jüt çuval, FIBC (1 ton big-bag), 5/10 kg perakende paketleme, MAP (modifiye atmosfer) torba. Konteyner başına 18–24 ton fındık / 17–22 ton fıstık / 14–18 ton kayısı gibi tipik yüklemeler vardır.',
      ],
      sections: [
        { label: 'Gaziantep', title: 'Antep fıstığı (Pistacia vera)', body: 'AB Coğrafi İşaretli (PDO 2021) Antep fıstığı; Barak ve Uzun varyetelerinden seçilir. Boy: 18–20 mm (extra large), 20–22 mm (jumbo), 22+ mm (premium). İç oranı %48–52, kavurma için kabuklu/iç, dondurma ve baklava sanayisi için ise sadece iç olarak ayrı kalibre edilir. Açılmış kabuk oranı %85+, nem %5,5 max.' },
        { label: 'Giresun', title: 'Tombul fındığı', body: 'Karadeniz Tombul fındığı çikolata ve krema sanayinin altın standardı; AB PDO statüsünde. Kalibre 11–13 mm, 13–15 mm, 15+ mm. Yağ oranı %62–65 (Levant ortalaması %58’in üstünde). Çiğ, kavrulmuş (130–140°C / 25 dk), beyazlatılmış (kabuk soyma), dilimli ve un formlarında sevk edilir. Randıman %48–50.' },
        { label: 'Malatya', title: 'Hacıhaliloğlu kuru kayısısı', body: 'Tarım Bakanlığı kalite sınıfı I–IV. Number 1 (en büyük) 80–100 adet/kg, Number 4 (endüstriyel) 200–250 adet/kg. SO₂ kükürtlü (parlak turuncu, raf ömrü 18 ay) ve kükürtsüz (organik, koyu kahve, raf 9 ay) iki ayrı hat. Nem %22–24, mekanik+optik ayıklama, çekirdeksiz/çekirdekli seçenek.' },
        { label: 'Aydın', title: 'Sarılop incir', body: 'Ege Sarılop kuru inciri; Lerida (extra), Protoben, Garland gibi sınıflandırmalar. Layer (kapsül), pulled (öğütülmüş), bütün ham, bütün doğal kül kaplı seçenekleri. Granül incir endüstrisi (müsli, enerji barı, fırın) için kuruma derecesi nem %22 max ve raf %0,1 SO₂ ile düzenlenir.' },
        { label: 'Vietnam', title: 'Kaju W ölçek', body: 'Phan Rang ve Binh Phuoc menşeli, AFI/CEPCI sınıflandırma: W180 (240 adet/lb, en büyük), W210, W240, W320 (en yaygın endüstriyel), W450, W500. Kırık (LP, LWP, SWP, SP) ve parça (B, BB) sınıfları ayrı fiyatlanır. Vakum 22.68 kg karton, %0–4 nem, %4–8 yağ asidi.' },
        { label: 'Karadeniz', title: 'Levant fındığı', body: 'Akçakoca, Sakarya, Ordu hatları; Tombul’a alternatif olarak Sivri ve Foşa varyeteleri. Çikolata harmanları için 9–11 mm + 11–13 mm karışım, daha uygun maliyet. Yağ %58–62, nem %6 max, randıman %46–48.' },
        { label: 'Sezon', title: 'Hasat & stok takvimi', body: 'Antep fıstığı: Eyl–Eki hasat, Kas’dan itibaren spot sevkiyat, Şub–Tem stok satışı. Fındık: Ağu–Eyl hasat, Eki’den itibaren ihracat, Tem öncesi yeni hasat planı. Kayısı: Tem–Ağu hasat, Eyl–Haz sürekli sevk. Kaju Vietnam: Şub–May hasat, yıl boyu üretim ardışık.' },
        { label: 'Kalite kontrol', title: 'Lab + saha eşlemesi', body: 'Her parti için: aflatoksin (HPLC), nem (Karl Fischer veya halojen lamba), pestisit GC-MS/LC-MS multi-residue (200+ analit), küf, böcek, taş ve metal detektör (Fe 1.5 mm / non-Fe 2.0 mm / SS 2.5 mm). Sertifikalar: ISO 22000, BRC AA, FDA, Helal, Kosher (talebe göre).' },
        { label: 'Ambalaj', title: 'Endüstriyel & perakende', body: 'B2B sanayi: 25 kg jüt, 22.5 kg karton vakum, 12.5 kg karton, 1.000 kg FIBC, 800 kg ahşap kasa. Perakende ready-pack: 100/250/500 g doypack, MAP torba (azot/karbon dioksit dolgu), vakum tray. Özel etiket ve barkod hizmeti birlikte sunulur.' },
      ],
      factSheet: [
        { label: 'Spesifikasyon', title: 'Boy & Kalibre', body: 'Antep fıstığı 18–22+ mm; Tombul fındık 11–15 mm; Kayısı No1–No4 boyutlama; Kaju W180–W500 + LP/SP kırık sınıfları. Endüstriyel ve perakende için ayrı eleme akışları.' },
        { label: 'Spesifikasyon', title: 'Nem & Yağ Asidi', body: 'Fındık nem %6 max / yağ %58–65; Antep fıstığı %5,5 max; Kayısı %22–24; İncir %22 max; Kaju nem %5 max / yağ asidi %4–8. Karl Fischer veya halojen test cihazıyla ölçülür.' },
        { label: 'Güvenlik', title: 'Aflatoksin & Pestisit', body: 'AB toplam aflatoksin 10 ppb, B1 5 ppb sınırı; ABD FDA 20 ppb; pestisit MRL EU Reg 396/2005 ve müşteri spec’ine göre. Üçüncü taraf rapor (Eurofins, SGS, BV) sevkiyatla iletilir.' },
        { label: 'Lojistik', title: 'Konteyner Yüklemesi', body: '20’ DC konteyner: ~18–24 ton fındık, ~17–22 ton Antep fıstığı, ~14–18 ton kayısı, ~17 ton kaju. 40’ HC: 28+ ton. FOB: Mersin, İskenderun, Ambarlı; Vietnam: Cat Lai / Cai Mep.' },
        { label: 'Ambalaj', title: 'Standart & MAP', body: 'Jüt 25 kg, vakum karton 12.5/22.5 kg, FIBC 1.000 kg, MAP torba 5–10 kg, perakende 100/250/500 g doypack. Özel etiket, barkod ve dil çoklamalı paket basımı dâhil.' },
        { label: 'Sertifika', title: 'Standartlar', body: 'ISO 22000 ve ISO 9001, BRC Global Standard (AA grade hedef), FDA FSMA Foreign Supplier, Helal (GIMDES/Halal CC), Kosher, Organik (NOP/EU 834), SEDEX/SMETA. AB PDO Antep + Giresun fındığı.' },
        { label: 'Teslim', title: 'Incoterms 2020', body: 'FOB Türkiye limanları, CIF Avrupa/Orta Doğu/Asya, CFR Kuzey Afrika, DDP AB içi (KDV dahil). Teslim öncesi numune (50–500 g pre-shipment), parti onayı ve loading photo.' },
        { label: 'Süreklilik', title: 'Yıllık Sözleşme', body: 'Spot ile yetinmek isteyenler için aylık tedarik; üretim planı netleşmiş alıcılar için yıllık fix-price ya da formula price (LME/MATIF/üretici fiyat endeksi). Tedarik takvimi sezon farklılığına göre split.' },
      ],
    },
    en: {
      notes: [
        'Türkiye carries a strong origin reputation in hazelnuts, dried apricots and dried figs. For that reason this page speaks in a “city + product” language: Giresun hazelnut, Antep pistachio, Malatya apricot, Aegean fig.',
        'For a B2B buyer, flavor is only one layer. Calibration, breakage, moisture, aflatoxin risk, season continuity, packing type and delivery term must be read inside the same product file.',
        'Harvest windows differ: Antep pistachio Sep–Oct, Giresun hazelnut Aug–Sep, Malatya apricot Jul–Aug, Aegean fig Aug–Oct, Vietnam cashew Feb–May. Kismet keeps all five windows live in the same portfolio so a buyer never sees a sourcing gap during the year.',
        'Aflatoxin (EU limit 10 ppb total / 5 ppb B1), pesticide residue, insect and mould risk are verified per batch by accredited third-party laboratories (Eurofins, SGS, Bureau Veritas). The certificate file ships with the contract appendix.',
        'Packing is engineered to the buyer’s production line: vacuum 12.5/22.5 kg carton, 25 kg jute sack, 1-tonne FIBC, retail 5/10 kg, MAP (modified atmosphere) bag. Typical container loads: 18–24 t hazelnut, 17–22 t pistachio, 14–18 t apricot.',
      ],
      sections: [
        { label: 'Gaziantep', title: 'Antep pistachio (Pistacia vera)', body: 'EU PDO-protected (2021) Antep pistachio: Barak and Uzun cultivars. Sizes 18–20 mm (extra large), 20–22 mm (jumbo), 22+ mm (premium). Kernel ratio 48–52%. Roasting (in-shell), baklava and ice-cream industry get separate kernel-only calibrations. Open-shell ratio 85%+, moisture 5.5% max.' },
        { label: 'Giresun', title: 'Tombul hazelnut', body: 'Black Sea Tombul is the gold standard for chocolate and spread industry — EU PDO. Calibrations 11–13 mm, 13–15 mm, 15+ mm. Oil 62–65% (Levant average sits below 58%). Raw, roasted (130–140 °C / 25 min), blanched, sliced and meal forms. Yield 48–50%.' },
        { label: 'Malatya', title: 'Hacıhaliloğlu apricot', body: 'Turkish Ministry quality grades I–IV. Number 1 (largest) 80–100 pcs/kg, Number 4 (industrial) 200–250 pcs/kg. Two parallel lines: SO₂-treated (bright orange, 18-month shelf) and natural (dark brown, organic, 9-month shelf). Moisture 22–24%, mechanical + optical sorting, pitted/whole option.' },
        { label: 'Aydın', title: 'Sarılop fig', body: 'Aegean Sarılop dried fig: Lerida (extra), Protoben, Garland classes. Layer (capsule), pulled (granulated), whole raw and natural-coated formats. Granulated fig industry (muesli, energy bar, bakery): moisture 22% max, SO₂ 0.1%.' },
        { label: 'Vietnam', title: 'Cashew W grades', body: 'Phan Rang and Binh Phuoc origins, AFI/CEPCI grading: W180 (240 pcs/lb, largest), W210, W240, W320 (most common industrial), W450, W500. Broken (LP, LWP, SWP, SP) and butt grades priced separately. Vacuum 22.68 kg carton, 0–4% moisture, 4–8% free fatty acid.' },
        { label: 'Black Sea', title: 'Levant hazelnut', body: 'Akçakoca, Sakarya, Ordu lines as alternatives to Tombul: Sivri and Foşa cultivars. Chocolate blends often use mixed 9–11 mm + 11–13 mm at lower cost. Oil 58–62%, moisture 6% max, yield 46–48%.' },
        { label: 'Season', title: 'Harvest & stock calendar', body: 'Antep pistachio: Sep–Oct harvest, spot from Nov, stock sales Feb–Jul. Hazelnut: Aug–Sep harvest, export from Oct, fresh-crop planning before Jul. Apricot: Jul–Aug harvest, continuous shipment Sep–Jun. Vietnam cashew: Feb–May harvest, year-round consecutive processing.' },
        { label: 'Quality', title: 'Lab + field mapping', body: 'Per batch: aflatoxin (HPLC), moisture (Karl Fischer or halogen), pesticide GC-MS/LC-MS multi-residue (200+ analytes), mould, insect, stone and metal detector (Fe 1.5 mm / non-Fe 2.0 mm / SS 2.5 mm). Certificates: ISO 22000, BRC AA, FDA, Halal, Kosher (on request).' },
        { label: 'Packing', title: 'Industrial & retail', body: 'B2B industrial: 25 kg jute, 22.5 kg vacuum carton, 12.5 kg carton, 1,000 kg FIBC, 800 kg wood box. Retail ready-pack: 100/250/500 g doypack, MAP bag (N₂/CO₂ flush), vacuum tray. Private label and barcode service included.' },
      ],
      factSheet: [
        { label: 'Spec', title: 'Size & Calibration', body: 'Antep pistachio 18–22+ mm; Tombul hazelnut 11–15 mm; Apricot No1–No4; Cashew W180–W500 + LP/SP broken. Separate sieving lines for industrial vs retail.' },
        { label: 'Spec', title: 'Moisture & FFA', body: 'Hazelnut moisture 6% max / oil 58–65%; Antep pistachio 5.5% max; Apricot 22–24%; Fig 22% max; Cashew moisture 5% max / FFA 4–8%. Karl Fischer or halogen meter.' },
        { label: 'Safety', title: 'Aflatoxin & Pesticide', body: 'EU total aflatoxin 10 ppb, B1 5 ppb; US FDA 20 ppb; pesticide MRL per EU Reg 396/2005 + buyer spec. Third-party report (Eurofins, SGS, BV) ships with the cargo.' },
        { label: 'Logistics', title: 'Container Loading', body: '20’ DC: ~18–24 t hazelnut, ~17–22 t pistachio, ~14–18 t apricot, ~17 t cashew. 40’ HC: 28+ t. FOB Mersin, İskenderun, Ambarlı; Vietnam: Cat Lai / Cai Mep.' },
        { label: 'Packing', title: 'Standard & MAP', body: 'Jute 25 kg, vacuum carton 12.5/22.5 kg, FIBC 1,000 kg, MAP bag 5–10 kg, retail doypack 100/250/500 g. Custom labels, barcodes and multilingual print included.' },
        { label: 'Cert', title: 'Standards', body: 'ISO 22000 + ISO 9001, BRC Global Standard (target AA), FDA FSMA Foreign Supplier, Halal (GIMDES/Halal CC), Kosher, Organic (NOP/EU 834), SEDEX/SMETA. EU PDO Antep + Giresun.' },
        { label: 'Trade', title: 'Incoterms 2020', body: 'FOB Türkiye ports, CIF Europe/Middle East/Asia, CFR North Africa, DDP intra-EU (VAT included). Pre-shipment sample (50–500 g), batch approval and loading photos.' },
        { label: 'Continuity', title: 'Annual contract', body: 'Monthly tonnage for spot buyers; annual fix-price or formula-price (LME/MATIF/producer index) for production-planned buyers. Sourcing calendar split per harvest window.' },
      ],
    },
    ar: {
      notes: [
        'تحمل تركيا سمعة منشأ قوية في البندق والمشمش المجفف والتين المجفف. لذلك تستخدم الصفحة منطق “المدينة + المنتج”: بندق غيرسون، فستق عنتاب، مشمش ملاطية، تين إيجة.',
        'بالنسبة لمشتري B2B، النكهة ليست سوى طبقة واحدة. يجب قراءة المعايرة والكسر والرطوبة وخطر الأفلاتوكسين واستمرارية الموسم والتعبئة وشروط التسليم في ملف واحد.',
        'مواسم الحصاد متفاوتة: فستق عنتاب أيلول–تشرين الأول، بندق غيرسون آب–أيلول، مشمش ملاطية تموز–آب، تين إيجة آب–تشرين الأول، كاجو فيتنام شباط–أيار. تحتفظ كسمت بجميع النوافذ في المحفظة لتفادي أي فجوة توريد خلال السنة.',
        'الأفلاتوكسين (حد الاتحاد الأوروبي ١٠ ppb إجمالي / ٥ ppb B1) ومخلفات المبيدات والحشرات والعفن تتحقق لكل دفعة عبر مختبرات طرف ثالث (Eurofins, SGS, Bureau Veritas). يرفق ملف الشهادات بالعقد.',
        'تصمم التعبئة وفق خط إنتاج المشتري: كرتون مفرّغ ١٢٫٥/٢٢٫٥ كغ، جوال خيش ٢٥ كغ، FIBC طن، تعبئة تجزئة ٥/١٠ كغ، أكياس MAP (تعديل غازي). تحميل الحاوية النموذجي ١٨–٢٤ طن بندق، ١٧–٢٢ طن فستق، ١٤–١٨ طن مشمش.',
      ],
      sections: [
        { label: 'غازي عنتاب', title: 'فستق عنتاب (Pistacia vera)', body: 'محمي جغرافياً من الاتحاد الأوروبي (PDO 2021)، صنفا باراك وأوزون. الأحجام ١٨–٢٠ ملم (كبير جداً)، ٢٠–٢٢ ملم (جامبو)، ٢٢+ ملم (ممتاز). نسبة اللب ٤٨–٥٢٪. خطوط فرز منفصلة للتحميص بالقشرة وللصناعة (لب فقط لصناعة المثلجات والبقلاوة). نسبة فتح القشرة ٨٥٪+، الرطوبة ٥٫٥٪ كحد أقصى.' },
        { label: 'غيرسون', title: 'بندق تومبول', body: 'بندق البحر الأسود تومبول هو المعيار الذهبي لصناعة الشوكولاتة والكريمات (PDO). معايرات ١١–١٣، ١٣–١٥، ١٥+ ملم. زيت ٦٢–٦٥٪ (متوسط ليفانت أقل من ٥٨٪). أشكال نيء، محمص (١٣٠–١٤٠°م / ٢٥ دقيقة)، مقشّر، مقطّع ومطحون. عائد ٤٨–٥٠٪.' },
        { label: 'ملاطية', title: 'مشمش حاجي حليلوغلو', body: 'درجات الجودة الرسمية I–IV. رقم ١ (الأكبر) ٨٠–١٠٠ حبة/كغ، رقم ٤ (صناعي) ٢٠٠–٢٥٠ حبة/كغ. خطّان متوازيان: مكبرت SO₂ (برتقالي زاهٍ، عمر رف ١٨ شهراً) وطبيعي بدون كبريت (بني داكن عضوي، ٩ أشهر). رطوبة ٢٢–٢٤٪، فرز ميكانيكي + بصري، خيار منزوع/مع نواة.' },
        { label: 'أيدِن', title: 'تين ساريلوب', body: 'تين إيجة ساريلوب المجفف: تصنيفات Lerida (ممتاز)، Protoben، Garland. أشكال طبقي (كبسولة)، مسحوب (محبّب)، كامل خام، كامل بطلاء طبيعي. لصناعة التين المحبب (موسلي، ألواح طاقة، مخابز): رطوبة ٢٢٪ و SO₂ ٠٫١٪ كحد.' },
        { label: 'فيتنام', title: 'درجات الكاجو W', body: 'منشأ فان رانغ وبينه فوك، تصنيف AFI/CEPCI: W180 (٢٤٠ حبة/رطل، الأكبر)، W210، W240، W320 (الأكثر استخداماً صناعياً)، W450، W500. الكسر (LP, LWP, SWP, SP) وفئات الجزئي تسعّر منفصلة. كرتون مفرّغ ٢٢٫٦٨ كغ، رطوبة ٠–٤٪، حموضة حرة ٤–٨٪.' },
        { label: 'البحر الأسود', title: 'بندق ليفانت', body: 'خطوط أكتشاكوكا وساكاريا وأوردو بدائل لتومبول: أصناف سيفري وفوشا. خلطات الشوكولاتة كثيراً ما تستخدم خليط ٩–١١ ملم + ١١–١٣ ملم بتكلفة أقل. زيت ٥٨–٦٢٪، رطوبة ٦٪، عائد ٤٦–٤٨٪.' },
        { label: 'الموسم', title: 'تقويم الحصاد والمخزون', body: 'فستق عنتاب: حصاد أيلول–تشرين الأول، فوري من تشرين الثاني، بيع المخزون شباط–تموز. البندق: حصاد آب–أيلول، تصدير من تشرين الأول. المشمش: حصاد تموز–آب، شحن مستمر أيلول–حزيران. الكاجو الفيتنامي: حصاد شباط–أيار، إنتاج متعاقب طوال السنة.' },
        { label: 'الجودة', title: 'مختبر + ميدان', body: 'لكل دفعة: أفلاتوكسين (HPLC)، رطوبة (Karl Fischer أو هالوجين)، مبيدات GC-MS/LC-MS متعدد البقايا (٢٠٠+ مادة)، عفن، حشرات، حجر وكاشف معادن (Fe ١٫٥ ملم / غير-Fe ٢٫٠ ملم / SS ٢٫٥ ملم). شهادات ISO 22000 وBRC AA وFDA وحلال وكوشير عند الطلب.' },
        { label: 'التعبئة', title: 'صناعي وتجزئة', body: 'B2B: جوال خيش ٢٥ كغ، كرتون مفرّغ ٢٢٫٥/١٢٫٥ كغ، FIBC ١٠٠٠ كغ، صندوق خشب ٨٠٠ كغ. تجزئة: دوي باك ١٠٠/٢٥٠/٥٠٠ غ، أكياس MAP بنيتروجين/CO₂، صينية مفرّغة. ملصقات وباركود متعدد اللغات.' },
      ],
      factSheet: [
        { label: 'مواصفة', title: 'الحجم والمعايرة', body: 'فستق عنتاب ١٨–٢٢+ ملم؛ بندق تومبول ١١–١٥ ملم؛ مشمش رقم ١–٤؛ كاجو W180–W500 + LP/SP. خطوط فرز منفصلة للصناعة وللتجزئة.' },
        { label: 'مواصفة', title: 'الرطوبة والحموضة', body: 'بندق رطوبة ٦٪/زيت ٥٨–٦٥٪؛ فستق ٥٫٥٪؛ مشمش ٢٢–٢٤٪؛ تين ٢٢٪؛ كاجو رطوبة ٥٪/حموضة ٤–٨٪. تقاس بـKarl Fischer أو هالوجين.' },
        { label: 'سلامة', title: 'الأفلاتوكسين والمبيدات', body: 'الاتحاد الأوروبي ١٠ ppb إجمالي و٥ ppb B1؛ FDA ٢٠ ppb؛ MRL وفق EU 396/2005 + مواصفة المشتري. شهادة طرف ثالث (Eurofins, SGS, BV) ترفق بالشحنة.' },
        { label: 'لوجستيات', title: 'تحميل الحاوية', body: 'حاوية ٢٠ قدم: ~١٨–٢٤ طن بندق، ~١٧–٢٢ طن فستق، ~١٤–١٨ طن مشمش، ~١٧ طن كاجو. ٤٠ HC: ٢٨+ طن. FOB مرسين، إسكندرون، أمبارلي؛ فيتنام Cat Lai / Cai Mep.' },
        { label: 'تعبئة', title: 'قياسي وMAP', body: 'خيش ٢٥ كغ، كرتون مفرّغ ١٢٫٥/٢٢٫٥ كغ، FIBC ١٠٠٠ كغ، MAP ٥–١٠ كغ، تجزئة دوي باك ١٠٠/٢٥٠/٥٠٠ غ.' },
        { label: 'شهادات', title: 'المعايير', body: 'ISO 22000 + ISO 9001، BRC AA، FDA FSMA، حلال (GIMDES/Halal CC)، كوشير، عضوي (NOP/EU 834)، SEDEX/SMETA. PDO عنتاب وغيرسون.' },
        { label: 'تسليم', title: 'إنكوترمز ٢٠٢٠', body: 'FOB موانئ تركية، CIF أوروبا/الشرق الأوسط/آسيا، CFR شمال أفريقيا، DDP داخل الاتحاد (يشمل VAT). عينات قبل الشحن وموافقة الدفعة وصور التحميل.' },
        { label: 'استمرارية', title: 'عقد سنوي', body: 'حجم شهري للأنية الفورية؛ عقد سنوي بسعر ثابت أو صيغة (LME/MATIF/مؤشر منتج) للمشترين بخطة إنتاج. تقويم توريد مقسم حسب نوافذ الحصاد.' },
      ],
    },
  },
  'products/spices': {
    tr: {
      notes: [
        'Baharat sayfası özellikle “renkli ürün fotoğrafı” klişesine düşmeden yazıldı. B2B baharat alımında aroma profili kadar saflık, pestisit kalıntısı, öğütme davranışı, uçucu yağ yoğunluğu ve yabancı madde kontrolü önemlidir.',
        'Anadolu hattında isot, pul biber ve sumak gibi ürünler kültürel bir kimlik taşırken; Hindistan, Sri Lanka, Endonezya ve Madagaskar gibi menşeler küresel baharat dosyasını tamamlar.',
        'Mikrobiyolojik güvenlik baharatın en kırılgan tarafıdır. Salmonella spp. (n=5, c=0, /25 g), E. coli (10² cfu/g), küf (10⁴ cfu/g) ve toplam aerobik mezofil bakteri sayısı (10⁵–10⁶ cfu/g) sınırları üretim hattının kabul kriterine göre belirlenir; talep edilirse buharla sterilizasyon (steam) ya da etilen oksit alternatifi gama-irradyasyon hizmeti birlikte sunulur.',
        'Renk ve uçucu yağ ölçümü ASTA renk skoru, Scoville (SHU), Piperin (HPLC, %4–9 karabiber), Cinnamaldehyde (%55–75 cassia / %50–80 Seylan), Curcumin (%2–6 zerdeçal) gibi gerçek lab parametreleri üzerinden raporlanır. Müşteriye sadece “acı/aromatik” değil; sayısal performans verilir.',
        'Hasat takvimi ürüne göre değişir: Urfa isot Ağu–Eyl, Maraş pul biber Ağu–Eyl, sumak Eki, Hindistan Tellicherry karabiber Kas–Şub, Sri Lanka tarçın yıl boyu (3 hasat döngüsü), Madagaskar vanilya Tem–Eyl. Kısmet bu farklı pencereleri birleştirip yıllık tedariki kesintisiz tutar.',
      ],
      sections: [
        { label: 'Şanlıurfa', title: 'Urfa isot biberi', body: 'Coğrafi İşaretli (TR PDO 2008) Urfa isot; Capsicum annuum, mor-bordo renk. Güneş kurutması (5–7 gün) sonrası gece tülbentle terletme klasik prosesi: aroma derinleşir, hafif tütsü notası gelir. Acılık 1.500–4.000 SHU, ASTA 80–110, nem %12 max. Endüstriyel kebap, sucuk ve sos üreticisi için kıyma (1–3 mm) ya da pul (3–6 mm) form.' },
        { label: 'Kahramanmaraş', title: 'Maraş pul biberi', body: 'Bitlis, Maraş ve Antep yöresinden klasik kırmızı pul biber. ASTA 70–110, acılık 8.000–25.000 SHU. Bitkisel yağ ile tavalama (yağlı/yağsız) ayrı kalibre, raf ömrü 18 ay. Et ve sucuk fabrikalarında yağlı tavalanmış (yarı parlak) tercih edilirken, sos sanayi yağsız ister.' },
        { label: 'Sicilya/Akdeniz', title: 'Sumak', body: 'Rhus coriaria, Akdeniz ve Doğu Anadolu’dan. Tuzsuz/tuzlu (%2 NaCl) iki ayrı endüstriyel hat. Sitrik asit %3–5 doğal içerik, parlak bordo renk. Granül 0.3–1 mm, mezo et ve döner üreticisi tercih ettiği iri kesim 1–2 mm.' },
        { label: 'Kerala', title: 'Tellicherry karabiber', body: 'Hindistan Malabar kıyısı; siyah Tellicherry (TGEB / TGSEB), beyaz, yeşil ve pembe varyasyonlar. Piperin %4,5–6,5, ASTA 32–34, uçucu yağ %2–3,5. Boy 4.25 mm+ (TGSEB ekstra büyük). Et işleme, çorba ve karışım baharat sanayisinin ana hattı.' },
        { label: 'Sumatra & Vietnam', title: 'Cassia & Seylan tarçın', body: 'Sumatra/Vietnam Cassia: cinnamaldehyde %75–88, AB sınırı 50 mg/kg coumarin nedeniyle sertifikalı düşük-coumarin partileri ayrı kalibre. Seylan (Sri Lanka) Ceylon: %50–63 cinnamaldehyde, çok düşük coumarin (<%0.05), Alba/Continental/Mexican grade.' },
        { label: 'Mardin & Hindistan', title: 'Kimyon, kişniş, sumak', body: 'Mardin kimyonu (Cuminum cyminum), uçucu yağ %2–4. Hindistan kişnişi (singapur, eagle), kakule (Alleppey green / Guatemala), yenibahar (Pimenta dioica). Bütün, kırık ve toz formlarında, 25 kg PE-jüt çuval ya da MAP torba.' },
        { label: 'Madagaskar', title: 'Vanilya & karanfil', body: 'SAVA bölgesi vanilya (Vanilla planifolia), Bourbon prosesi, vanilin %1.8–2.4. Black Gourmet (35+ cm), TK (Reds), Cuts/Splits ayrı sınıf. Aynı menşeden karanfil (Eugenia caryophyllata), eugenol %75+, baş/sap karışım oranı seçilebilir.' },
        { label: 'Form', title: 'Bütün, kırık, öğütülmüş', body: 'Bütün (raf ömrü 24–36 ay) → kırık (12–18 ay) → toz (6–12 ay). Aroma kaybı oranı her aşamada artar. Müşteriye yalnız fiyat değil, hangi form üretim hattında en az aroma kaybıyla çalışır netleştirilir.' },
        { label: 'Sterilizasyon', title: 'Buhar & gama', body: 'Steam-sterilization (Sterilex/Napasol) 95–120°C / 1–6 dk + ardından havayla soğutma; mikro yükü 99.9% düşürür, aroma kaybı %5–8. Gama-irradyasyon (1–10 kGy) AB ülkelerinin onaylı sınıfında uygulanır. ETO yasaktır; Kısmet ETO’suz prosesle çalışır.' },
        { label: 'Kalite', title: 'Aroma + saflık dosyası', body: 'Her parti için: ASTA renk, Scoville, piperin/curcumin/cinnamaldehyde HPLC, uçucu yağ %, nem, yabancı madde, salmonella/E. coli/küf, ağır metal (Pb, Cd, As, Hg), pestisit MRL (200+ analit). Eurofins veya SGS rapor.' },
      ],
      factSheet: [
        { label: 'Spesifikasyon', title: 'Aroma & Acılık', body: 'Karabiber piperin %4.5–6.5, Tarçın cinnamaldehyde %55–88, Zerdeçal curcumin %2–6, İsot 1.5–4 bin SHU, Maraş pul 8–25 bin SHU. ASTA renk 70–110.' },
        { label: 'Spesifikasyon', title: 'Form & Boy', body: 'Bütün (whole), kırık (cracked 1–3 mm), pul (flake 3–6 mm), kıyma (granule 0.5–1.5 mm), öğütülmüş toz (60/100 mesh). Müşteri spec’ine göre özel mesh seçimi.' },
        { label: 'Güvenlik', title: 'Mikrobiyoloji', body: 'Salmonella negatif /25 g (n=5, c=0); E. coli <10² cfu/g; toplam küf <10⁴ cfu/g; aerobik mezofil 10⁵–10⁶ cfu/g (steam ile <10³). ETO kullanılmaz.' },
        { label: 'Güvenlik', title: 'Pestisit & Ağır metal', body: 'EU Reg 396/2005 MRL, GC-MS/LC-MS multi-residue 200+ analit. Ağır metal Pb 2.0 ppm / Cd 0.20 ppm / As 1.0 ppm / Hg 0.10 ppm. Üçüncü taraf Eurofins/SGS.' },
        { label: 'Lojistik', title: 'Yükleme & Liman', body: '20’ DC: 16–18 ton bütün baharat, 12–14 ton toz baharat. FOB Mersin (Türkiye), Cochin/Tuticorin (Hindistan), Colombo (Sri Lanka), Belawan (Endonezya). Transit Avrupa 18–25 gün.' },
        { label: 'Ambalaj', title: 'Bariyer & MAP', body: '25 kg PE-jüt çuval (sandık ambalaj), 22 kg karton + alu folyo bariyer torba, 5/10 kg MAP torba (azot dolgu), 1 kg vakum tray, perakende doypack 50/100/200 g.' },
        { label: 'Sertifika', title: 'Standartlar', body: 'ISO 22000, BRC AA, FDA FSMA, Helal, Kosher, USDA Organik (NOP/EU 834), Fair Trade (talep). Coğrafi İşaret (Urfa isot PDO, Maraş pul biber CI). ESA (European Spice Association) standardı.' },
        { label: 'Teslim', title: 'Incoterms', body: 'FOB ana çıkış limanı, CIF Avrupa/Orta Doğu, CFR Kuzey Amerika, DDP AB içi tek faturayla. Numune 100–500 g express kargo (DHL/FedEx) 3–5 gün.' },
      ],
    },
    en: {
      notes: [
        'The spice page is written deliberately away from the cliché of “colorful spice photography”. In B2B spice buying, purity, pesticide residue, grinding behavior, volatile-oil strength and foreign-matter control matter as much as aroma.',
        'Anatolian isot, chili and sumac carry cultural identity, while origins such as India, Sri Lanka, Indonesia and Madagascar complete the global spice file.',
        'Microbiological safety is the most fragile axis in spice supply. Salmonella spp. (n=5, c=0 /25 g), E. coli (10² cfu/g), mould (10⁴ cfu/g) and total aerobic mesophilic count (10⁵–10⁶ cfu/g) limits are set per the buyer’s spec; on request steam sterilization or gamma irradiation (no ETO) is offered.',
        'Color and volatile-oil readings are reported on real lab parameters: ASTA color, Scoville (SHU), Piperine HPLC (4–9% pepper), Cinnamaldehyde (55–75% cassia / 50–80% Ceylon), Curcumin (2–6% turmeric). Numerical performance, not “mild/aromatic” language.',
        'Harvest windows differ: Urfa isot Aug–Sep, Maraş chilli Aug–Sep, sumac Oct, Indian Tellicherry pepper Nov–Feb, Sri Lanka cinnamon year-round (3 cycles), Madagascar vanilla Jul–Sep. Kismet stitches these windows for uninterrupted annual supply.',
      ],
      sections: [
        { label: 'Şanlıurfa', title: 'Urfa isot pepper', body: 'TR PDO-protected (2008) Urfa isot; Capsicum annuum, deep maroon. Sun-dried 5–7 days then night-sweat under cloth — depth + light smoke note. SHU 1,500–4,000, ASTA 80–110, moisture 12% max. Industrial kebab/sausage/sauce: granule 1–3 mm or flake 3–6 mm.' },
        { label: 'Kahramanmaraş', title: 'Maraş chilli flake', body: 'Classic red flake from Bitlis, Maraş, Antep area. ASTA 70–110, SHU 8,000–25,000. Vegetable-oil tempered (with-oil/without-oil) shelf life 18 months. Sausage and meat plants prefer oiled finish; sauce industry orders no-oil.' },
        { label: 'Mediterranean', title: 'Sumac', body: 'Rhus coriaria from Mediterranean and Eastern Anatolia. Salted (2% NaCl) or unsalted industrial lines. Citric acid 3–5% natural, vivid burgundy. Fine 0.3–1 mm; meze and döner producers prefer 1–2 mm coarse cut.' },
        { label: 'Kerala', title: 'Tellicherry black pepper', body: 'Indian Malabar coast: black Tellicherry (TGEB / TGSEB), white, green, pink. Piperine 4.5–6.5%, ASTA 32–34, volatile oil 2–3.5%. Berry 4.25 mm+ (TGSEB extra-large). Backbone for meat processing, soup and seasoning blends.' },
        { label: 'Sumatra & Vietnam', title: 'Cassia & Ceylon cinnamon', body: 'Sumatra/Vietnam cassia: cinnamaldehyde 75–88%; EU 50 mg/kg coumarin limit drives certified low-coumarin lots. Sri Lanka Ceylon: 50–63% cinnamaldehyde, very low coumarin (<0.05%), Alba/Continental/Mexican grades.' },
        { label: 'Mardin & India', title: 'Cumin, coriander, cardamom', body: 'Mardin cumin (Cuminum cyminum), volatile oil 2–4%. Indian coriander (Singapore, Eagle), cardamom (Alleppey green / Guatemala), allspice (Pimenta dioica). Whole, cracked or ground, 25 kg PE-jute or MAP bag.' },
        { label: 'Madagascar', title: 'Vanilla & clove', body: 'SAVA region vanilla (V. planifolia), Bourbon process, vanillin 1.8–2.4%. Black Gourmet (35+ cm), TK (Reds), Cuts/Splits separated. Same origin clove (Eugenia caryophyllata), eugenol 75%+, head/stem ratio selectable.' },
        { label: 'Form', title: 'Whole, broken, ground', body: 'Whole (24–36 mo shelf) → broken (12–18) → ground (6–12). Aroma loss accelerates each step. Customer is told not just price but which form survives best inside the production line.' },
        { label: 'Sterilization', title: 'Steam & gamma', body: 'Steam-sterilization (Sterilex/Napasol) 95–120 °C / 1–6 min + air cooling drops microbial load by 99.9% with 5–8% aroma loss. Gamma irradiation (1–10 kGy) within EU-approved scope. ETO is banned; Kismet runs ETO-free.' },
        { label: 'Quality', title: 'Aroma + purity file', body: 'Per batch: ASTA color, Scoville, piperine/curcumin/cinnamaldehyde HPLC, volatile oil %, moisture, foreign matter, Salmonella/E. coli/mould, heavy metals (Pb, Cd, As, Hg), pesticide MRL 200+ analytes. Eurofins or SGS report.' },
      ],
      factSheet: [
        { label: 'Spec', title: 'Aroma & Heat', body: 'Pepper piperine 4.5–6.5%, Cinnamon cinnamaldehyde 55–88%, Turmeric curcumin 2–6%, Isot 1.5–4 k SHU, Maraş flake 8–25 k SHU. ASTA color 70–110.' },
        { label: 'Spec', title: 'Form & Size', body: 'Whole, cracked 1–3 mm, flake 3–6 mm, granule 0.5–1.5 mm, ground 60/100 mesh. Custom mesh on spec.' },
        { label: 'Safety', title: 'Microbiology', body: 'Salmonella negative /25 g (n=5, c=0); E. coli <10² cfu/g; mould <10⁴ cfu/g; aerobic 10⁵–10⁶ cfu/g (<10³ with steam). No ETO.' },
        { label: 'Safety', title: 'Pesticide & metals', body: 'EU Reg 396/2005, GC-MS/LC-MS multi-residue 200+. Pb 2.0 ppm / Cd 0.20 / As 1.0 / Hg 0.10. Third-party Eurofins/SGS.' },
        { label: 'Logistics', title: 'Loading & ports', body: '20’ DC: 16–18 t whole, 12–14 t ground. FOB Mersin (TR), Cochin/Tuticorin (IN), Colombo (LK), Belawan (ID). Transit to EU 18–25 days.' },
        { label: 'Packing', title: 'Barrier & MAP', body: '25 kg PE-jute, 22 kg carton + foil barrier, 5/10 kg MAP (N₂ flush), 1 kg vacuum tray, retail doypack 50/100/200 g.' },
        { label: 'Cert', title: 'Standards', body: 'ISO 22000, BRC AA, FDA FSMA, Halal, Kosher, USDA Organic (NOP/EU 834), Fair Trade on request, ESA (European Spice Association). PDO Urfa isot, GI Maraş flake.' },
        { label: 'Trade', title: 'Incoterms', body: 'FOB origin port, CIF EU/Middle East, CFR North America, DDP intra-EU single invoice. Sample 100–500 g express (DHL/FedEx) 3–5 days.' },
      ],
    },
    ar: {
      notes: [
        'صفحة التوابل لا تكتب بمنطق “صورة ملونة جذابة”؛ في الشراء B2B النقاء وبقايا المبيدات وسلوك الطحن وكثافة الزيت الطيار والشوائب لا تقل أهمية عن العطر.',
        'يحمل خط الأناضول (إيسوت، مرعش، سماق) هوية ثقافية، فيما تكمل الهند وسريلانكا وإندونيسيا ومدغشقر الملف العالمي.',
        'تعد السلامة الميكروبية الجانب الأكثر هشاشة. حدود السالمونيلا (n=5, c=0 /25 غ)، إي كولاي (10²)، العفن (10⁴)، إجمالي العد البكتيري (10⁵–10⁶) تحدد بحسب مواصفة المشتري؛ ويتاح التعقيم بالبخار أو الإشعاع غاما (دون استخدام ETO).',
        'يقاس اللون والزيت الطيار بمؤشرات حقيقية: درجة ASTA، Scoville، Piperine HPLC (٤–٩٪ للفلفل)، Cinnamaldehyde (٥٥–٧٥٪ كاسيا / ٥٠–٨٠٪ سيلاني)، Curcumin (٢–٦٪ كركم). أرقام لا أوصاف.',
        'تختلف نوافذ الحصاد: إيسوت أورفا آب–أيلول، مرعش آب–أيلول، سماق تشرين الأول، فلفل تيليتشيري الهندي تشرين الثاني–شباط، قرفة سريلانكا على مدار السنة، فانيليا مدغشقر تموز–أيلول.',
      ],
      sections: [
        { label: 'أورفا', title: 'فلفل إيسوت أورفا', body: 'محمي PDO (٢٠٠٨)، Capsicum annuum، عنابي داكن. تجفيف شمسي ٥–٧ أيام ثم تعريق ليلي تحت قماش. SHU ١٫٥٠٠–٤٫٠٠٠، ASTA ٨٠–١١٠، رطوبة ١٢٪. للصناعة كباب وسجق وصلصة، حبيبات ١–٣ ملم أو رقاقات ٣–٦ ملم.' },
        { label: 'مرعش', title: 'رقائق فلفل مرعش', body: 'رقائق حمراء كلاسيكية من بتليس ومرعش وعنتاب. ASTA ٧٠–١١٠، SHU ٨٠٠٠–٢٥٠٠٠. خطان مع/دون زيت نباتي، عمر رف ١٨ شهراً.' },
        { label: 'المتوسط', title: 'سماق', body: 'Rhus coriaria من المتوسط وشرق الأناضول. خطان مملح (٢٪ NaCl) وغير مملح. حمض الستريك ٣–٥٪ طبيعي. ناعم ٠٫٣–١ ملم، خشن ١–٢ ملم لشاورما والمزة.' },
        { label: 'كيرلا', title: 'فلفل تيليتشيري', body: 'ساحل مالابار الهندي: أسود تيليتشيري (TGEB/TGSEB)، أبيض، أخضر، وردي. Piperine ٤٫٥–٦٫٥٪، ASTA ٣٢–٣٤، زيت طيار ٢–٣٫٥٪.' },
        { label: 'سومطرة وفيتنام', title: 'كاسيا وقرفة سيلانية', body: 'كاسيا ٧٥–٨٨٪ Cinnamaldehyde مع شهادات منخفضة الكوماري بسبب حد الاتحاد ٥٠ ملغ/كغ. سيلانية ٥٠–٦٣٪ وكوماري <٠٫٠٥٪، درجات Alba/Continental/Mexican.' },
        { label: 'ماردين والهند', title: 'كمون وكزبرة وهيل', body: 'كمون ماردين زيت طيار ٢–٤٪. كزبرة هندية، هيل أليبي/غواتيمالا، بهار حلو. كامل أو مكسر أو مطحون، ٢٥ كغ PE-جوت أو MAP.' },
        { label: 'مدغشقر', title: 'فانيليا وقرنفل', body: 'منطقة SAVA، Vanilla planifolia، عملية Bourbon، فانيلين ١٫٨–٢٫٤٪. أسود غورمي ٣٥+ سم، TK، Cuts/Splits.' },
        { label: 'الشكل', title: 'كامل ومكسر ومطحون', body: 'كامل (٢٤–٣٦ شهراً) → مكسر (١٢–١٨) → مطحون (٦–١٢). فقدان العطر يتسارع.' },
        { label: 'تعقيم', title: 'بخار وغاما', body: 'تعقيم بالبخار ٩٥–١٢٠°م لـ١–٦ دقائق يقلل الميكروبات ٩٩٫٩٪ بفقد عطر ٥–٨٪. غاما ١–١٠ kGy ضمن نطاق الاتحاد. ETO ممنوع.' },
        { label: 'جودة', title: 'ملف العطر والنقاء', body: 'لكل دفعة: ASTA وScoville وHPLC للبيبيرين/الكيركومين/السينمالديهايد، رطوبة، شوائب، سالمونيلا/إي كولاي/عفن، معادن ثقيلة، MRL ٢٠٠+ مادة.' },
      ],
      factSheet: [
        { label: 'مواصفة', title: 'العطر والحرارة', body: 'فلفل ٤٫٥–٦٫٥٪ بيبيرين، قرفة ٥٥–٨٨٪ سينمالديهايد، كركم ٢–٦٪ كيركومين، إيسوت ١٫٥–٤ آلاف SHU، مرعش ٨–٢٥ ألف SHU.' },
        { label: 'مواصفة', title: 'الشكل والحجم', body: 'كامل، مكسر ١–٣ ملم، رقائق ٣–٦ ملم، حبيبات ٠٫٥–١٫٥ ملم، مطحون ٦٠/١٠٠ mesh.' },
        { label: 'سلامة', title: 'الميكروبيولوجيا', body: 'سالمونيلا سلبي /٢٥ غ؛ إي كولاي <١٠²؛ عفن <١٠⁴؛ هوائي ١٠⁵–١٠⁶ (مع البخار <١٠³). دون ETO.' },
        { label: 'سلامة', title: 'مبيدات ومعادن', body: 'EU Reg 396/2005، GC-MS/LC-MS ٢٠٠+ مادة. Pb ٢٫٠ ppm، Cd ٠٫٢٠، As ١٫٠، Hg ٠٫١٠. Eurofins/SGS.' },
        { label: 'لوجستيات', title: 'تحميل وموانئ', body: 'حاوية ٢٠ قدم: ١٦–١٨ طن كامل، ١٢–١٤ طن مطحون. FOB مرسين، كوتشي/توتيكورين، كولومبو، بلاوان. عبور أوروبا ١٨–٢٥ يوماً.' },
        { label: 'تعبئة', title: 'حاجز وMAP', body: '٢٥ كغ PE-جوت، ٢٢ كغ كرتون + رقاقة ألمنيوم، ٥/١٠ كغ MAP (نيتروجين)، ١ كغ مفرّغ، تجزئة دوي باك ٥٠/١٠٠/٢٠٠ غ.' },
        { label: 'شهادات', title: 'المعايير', body: 'ISO 22000، BRC AA، FDA FSMA، حلال، كوشير، عضوي USDA/EU 834، Fair Trade، ESA. PDO أورفا إيسوت، GI مرعش.' },
        { label: 'تسليم', title: 'إنكوترمز', body: 'FOB ميناء المنشأ، CIF أوروبا والشرق الأوسط، CFR أمريكا الشمالية، DDP داخل الاتحاد. عينات ١٠٠–٥٠٠ غ DHL/FedEx ٣–٥ أيام.' },
      ],
    },
  },
  'products/ingredients': {
    tr: {
      notes: [
        'Endüstriyel içerik sayfası, “ürün güzel mi?” sorusundan çok “üretim hattı bunu güvenle tekrar tekrar kullanabilir mi?” sorusuna cevap verir. Tahıl, bakliyat, yağlı tohum ve özel hammaddelerde süreklilik, fiyatlama, evrak ve teslim şekli bir bütündür.',
        'Bu katman özellikle çikolata, kahve, paketli gıda, sos, unlu mamul ve restoran zinciri gibi düzenli üretim yapan alıcılar için tasarlandı.',
        'Endüstriyel ürünlerde fiyat çoğu zaman MATIF (Paris buğday/mısır), CME (ABD soya/mısır), Karachi (pirinç), İzmir Ticaret Borsası (sızma zeytinyağı) gibi referans piyasalara endeksli formula ile yapılır. Kısmet bu formula kontratlarını alıcının üretim takvimine göre split eder; ay-ay, çeyrek-çeyrek ya da konteyner-bazlı ayrı fiyat doğrulamasıyla sevk edilir.',
        'Bitki sağlığı sertifikası (Phytosanitary), menşe sertifikası (CoO), sağlık sertifikası (Health), Fumigation, Halal, Kosher ve özel ürünlerde EU EUR.1 (gümrük tarifesinde indirim) belgeleri sevkiyatın ayrılmaz parçasıdır. Liman varış öncesi tarama belgesi (Pre-shipment Inspection: SGS, Cotecna, Bureau Veritas) bazı pazarlarda zorunludur.',
        'Konteyner yüklemesi: 20’ DC için tahılda 25–28 ton (bulk), bakliyatta 23–26 ton (50 kg çuval), yağlı tohumda 22–24 ton, şeker/un 25 ton. Flexitank ile bitkisel yağ: 20 ton/22.000 L. ISO tank ile melas, glikoz şurubu: 24 ton/25.000 L. 40’ HC ile dökme paletli yüklemede %20–25 daha yüksek hacim mümkün.',
      ],
      sections: [
        { label: 'Planlama', title: 'Yıllık hacim ve risk', body: 'Tek konteyner yerine sezonluk ve yıllık hacim planı yapılır. Kur riski, hasat penceresi, navlun dalgalanması ve stok politikası birlikte değerlendirilir.' },
        { label: 'Teknik', title: 'Spesifikasyon dosyası', body: 'Nem, yabancı madde, kalibrasyon, analiz sertifikası, bitki sağlığı belgesi ve menşe bilgisi satın alma kararının çekirdeğidir.' },
        { label: 'Teslim', title: 'Incoterms uyumu', body: 'FOB, CIF, CFR veya DDP teslim şekli; alıcının gümrük, sigorta ve depo kapasitesine göre seçilir.' },
        { label: 'Süreklilik', title: 'Parti hafızası', body: 'Her sevkiyat önceki partiyle karşılaştırılır. Amaç tek iyi parti değil; üretim hattında öngörülebilir kalite ritmidir.' },
        { label: 'Konya & İç Anadolu', title: 'Buğday & sert un', body: 'Konya, Ankara ve Eskişehir hattı; protein %12–14 (sert kırmızı buğday) ekmeklik, %10–11 (yumuşak) bisküvilik. Hagberg falling number 250+ s, gluten %26–30 (yaş), Zeleny 35+. Düşük protein bisküvi ve kraker sanayisi için tercih.' },
        { label: 'Bakliyat', title: 'Mercimek, nohut, kuru fasulye', body: 'Şanlıurfa, Mardin, Mersin kırmızı mercimek (Türkiye dünyanın 2. üreticisi); kalibre 6 mm split, %0.2 yabancı madde, nem %14 max. Konya nohut (Spanish white 8–10 mm), Mersin/Niğde kuru fasulye (Dermason, Şeker, Romano), kayısı çekirdeği (kayısı pulpu yan ürünü).' },
        { label: 'Yağlı tohum', title: 'Ayçiçek, soya, mısır', body: 'Ayçiçek tohumu yağlı (Trakya, Konya, Çukurova) yağ %44–48, %2 max yabancı madde. Soya küspesi %46 protein (Mendoza, Brezilya), mısır (NON-GMO Türkiye iç piyasa, Ukrayna, Rusya). Hammadde özellikle yem ve bitkisel yağ üreticileri için.' },
        { label: 'Yağ', title: 'Bitkisel yağlar', body: 'Sızma zeytinyağı (Edremit, Ayvalık) asit <0.8%, Riviera 1–1.5%, Pomas. Ayçiçek yağı winterized RBD (rafine, ağartılmış, kokusuz), peroksit <2 mEq/kg. Flexitank 22 m³ veya 20 L teneke (35–40 kg) palet bazlı.' },
        { label: 'Şeker & nişasta', title: 'Beyaz şeker, glikoz, dekstroz', body: 'Türkiye Pankobirlik (pancar şekeri ICUMSA 45) ya da Brezilya/Hindistan (kamış şekeri ICUMSA 45/100/150). Mısır nişastası, glikoz şurubu DE 38/42/63, dekstroz monohidrat. Sıvı ürünler ISO tank veya IBC 1000 L; toz ürün 50 kg PP çuval ya da 25 kg multiwall kraft.' },
        { label: 'Süreklilik', title: 'Yıllık & spot', body: 'Yıllık (annual) sözleşme: ay-ay split, fiyat fixed ya da formula. Çeyreklik (quarterly): hasat takvimine göre. Spot: stok partileri, 7–15 gün içinde sevk. Stok yönetimi alıcının depo kapasitesi + üretim takvimine göre eşleştirilir.' },
      ],
      factSheet: [
        { label: 'Spesifikasyon', title: 'Tahıl & un', body: 'Sert buğday protein %12–14 (Hagberg 250+, gluten %26–30); yumuşak %10–11 (bisküvi). Mısır nem %14 max, kırık %5 max. Pirinç (basmati, jasmine, japonika) süpülme %0.5 max.' },
        { label: 'Spesifikasyon', title: 'Yağlı tohum & yağ', body: 'Ayçiçek yağ %44–48, soya yağ %18–22, mısır yağ %4. Sızma zeytinyağı asit <0.8%, peroksit <20 mEq/kg, K232 <2.5, K270 <0.22. Ayçiçek RBD asit <0.10%, peroksit <2.0.' },
        { label: 'Spesifikasyon', title: 'Bakliyat', body: 'Kırmızı mercimek 6 mm split / whole, nem %14 max, yabancı madde %0.2 max. Nohut Spanish white 8–10 mm, Çini Tip 9 mm, Macar Tipi 7 mm. Kuru fasulye Dermason 9 mm, Şeker 13 mm.' },
        { label: 'Güvenlik', title: 'Mikotoksin & GMO', body: 'Aflatoksin B1 max 5 ppb (gıda), 20 ppb (yem); Okratoksin A 5 ppb (tahıl); DON 750 ppb (ekmeklik). NON-GMO talep eden alıcılar için PCR test (limite of detection 0.1%).' },
        { label: 'Lojistik', title: 'Konteyner & flexi', body: '20’ DC bulk: 25–28 t tahıl, 23–26 t bakliyat (50 kg), 22–24 t yağlı tohum. Flexitank 20 t / 22.000 L. ISO tank 24 t / 25.000 L (sıvı sıcaklık kontrol). 40’ HC paletli %20–25 hacim.' },
        { label: 'Ambalaj', title: 'PP/Kraft/Bulk', body: 'Tahıl bulk veya 1.000 kg FIBC; bakliyat 50 kg PP, 25 kg kraft, 5/10 kg perakende. Yağ 20/25 L teneke, 200 L varil, IBC 1.000 L, flexitank 22 m³. Şeker 50 kg PP, 25 kg multiwall.' },
        { label: 'Sertifika', title: 'Belge dosyası', body: 'Phytosanitary, Certificate of Origin (CoO), Health, Halal (GIMDES), Kosher (OK/OU), Fumigation MB-23/24, EU EUR.1 (gümrük indirim), Pre-shipment SGS/Cotecna/BV, ISO 22000.' },
        { label: 'Teslim', title: 'Incoterms detaylı', body: 'FOB Mersin/İskenderun/Ambarlı: ihracatçı yükleme + gümrük çıkış. CIF: navlun + sigorta dahil. CFR: navlun dahil sigorta hariç. DDP: alıcının kapısına KDV+gümrük dahil tek faturayla.' },
      ],
    },
    en: {
      notes: [
        'The industrial ingredients page answers less “is the product attractive?” and more “can the production line use it repeatedly and safely?” Continuity, pricing, documentation and delivery term form one system.',
        'This layer is designed for regular producers such as chocolate, coffee, packaged food, sauce, bakery and restaurant-chain buyers.',
        'Pricing is often formula-linked to MATIF (Paris wheat/corn), CME (US soy/corn), Karachi (rice) or Izmir Commodity Exchange (extra-virgin olive oil). Kismet splits these formula contracts to the buyer’s production calendar — month-by-month, quarterly or container-based price confirmation.',
        'Phytosanitary, Certificate of Origin, Health, Fumigation, Halal, Kosher and where applicable EU EUR.1 (preferential customs duty) are integral to the shipment. Pre-shipment inspection (SGS, Cotecna, Bureau Veritas) is mandatory in some markets.',
        'Container loads: 20’ DC bulk grain 25–28 t, pulses 23–26 t (50 kg sacks), oilseed 22–24 t, sugar/flour 25 t. Flexitank vegetable oil 20 t / 22,000 L. ISO tank molasses, glucose syrup 24 t / 25,000 L. 40’ HC palletised gives 20–25% more volume.',
      ],
      sections: [
        { label: 'Planning', title: 'Annual volume and risk', body: 'Work starts from seasonal and annual volume, not a single container. FX risk, harvest window, freight volatility and stock policy are evaluated together.' },
        { label: 'Technical', title: 'Specification file', body: 'Moisture, foreign matter, calibration, analysis certificate, phytosanitary record and origin information sit at the center of buying.' },
        { label: 'Delivery', title: 'Incoterms fit', body: 'FOB, CIF, CFR or DDP is selected by the buyer’s customs, insurance and warehouse capacity.' },
        { label: 'Continuity', title: 'Batch memory', body: 'Every shipment is compared against the previous lot. The target is predictable quality rhythm, not one good batch.' },
        { label: 'Konya & Anatolia', title: 'Wheat & hard flour', body: 'Konya, Ankara, Eskişehir line: protein 12–14% (hard red wheat) for bread, 10–11% (soft) for biscuits. Hagberg falling number 250+ s, wet gluten 26–30%, Zeleny 35+. Lower protein favoured by biscuit and cracker industry.' },
        { label: 'Pulses', title: 'Lentils, chickpeas, beans', body: 'Şanlıurfa, Mardin, Mersin red lentils (Türkiye is the 2nd largest producer): 6 mm split, 0.2% foreign matter, moisture 14% max. Konya chickpea (Spanish white 8–10 mm), Mersin/Niğde dry beans (Dermason, Şeker, Romano), apricot kernel (by-product of pulp).' },
        { label: 'Oilseed', title: 'Sunflower, soy, corn', body: 'Sunflower seed (Thrace, Konya, Çukurova) oil 44–48%, foreign matter 2% max. Soy meal 46% protein (Mendoza, Brazil), corn (NON-GMO Türkiye, Ukraine, Russia). Feed and vegetable-oil producers’ raw material.' },
        { label: 'Oil', title: 'Vegetable oils', body: 'Extra virgin olive (Edremit, Ayvalık) acidity <0.8%, Riviera 1–1.5%, Pomace. Sunflower winterized RBD (refined, bleached, deodorised), peroxide <2 mEq/kg. Flexitank 22 m³ or 20 L tin (35–40 kg) on pallets.' },
        { label: 'Sugar & starch', title: 'White sugar, glucose, dextrose', body: 'Türkiye Pankobirlik (beet sugar ICUMSA 45) or Brazil/India (cane ICUMSA 45/100/150). Corn starch, glucose syrup DE 38/42/63, dextrose monohydrate. Liquid: ISO tank or 1,000 L IBC; powder: 50 kg PP or 25 kg multiwall kraft.' },
        { label: 'Continuity', title: 'Annual & spot', body: 'Annual contract: month-split, fixed or formula price. Quarterly: harvest-aligned. Spot: stock parcels, ship in 7–15 days. Stock matched to buyer warehouse capacity + production calendar.' },
      ],
      factSheet: [
        { label: 'Spec', title: 'Grain & flour', body: 'Hard wheat protein 12–14% (Hagberg 250+, gluten 26–30%); soft 10–11% (biscuit). Corn moisture 14% max, broken 5% max. Rice (basmati, jasmine, japonica) brokens 0.5% max.' },
        { label: 'Spec', title: 'Oilseed & oil', body: 'Sunflower oil 44–48%, soy oil 18–22%, corn oil 4%. EVOO acidity <0.8%, peroxide <20 mEq/kg, K232 <2.5, K270 <0.22. Sunflower RBD acidity <0.10%, peroxide <2.0.' },
        { label: 'Spec', title: 'Pulses', body: 'Red lentil 6 mm split/whole, moisture 14% max, foreign matter 0.2% max. Chickpea Spanish white 8–10 mm, Çini 9 mm, Macar 7 mm. Bean Dermason 9 mm, Şeker 13 mm.' },
        { label: 'Safety', title: 'Mycotoxin & GMO', body: 'Aflatoxin B1 5 ppb food / 20 ppb feed; OTA 5 ppb (grain); DON 750 ppb (bread wheat). NON-GMO buyers: PCR test (LOD 0.1%).' },
        { label: 'Logistics', title: 'Container & flexi', body: '20’ DC bulk: 25–28 t grain, 23–26 t pulse (50 kg), 22–24 t oilseed. Flexitank 20 t / 22,000 L. ISO tank 24 t / 25,000 L (temp control). 40’ HC palletised +20–25%.' },
        { label: 'Packing', title: 'PP/Kraft/Bulk', body: 'Grain bulk or 1,000 kg FIBC; pulse 50 kg PP, 25 kg kraft, 5/10 kg retail. Oil 20/25 L tin, 200 L drum, 1,000 L IBC, 22 m³ flexitank. Sugar 50 kg PP, 25 kg multiwall.' },
        { label: 'Cert', title: 'Document file', body: 'Phytosanitary, Certificate of Origin, Health, Halal (GIMDES), Kosher (OK/OU), Fumigation MB-23/24, EU EUR.1, Pre-shipment SGS/Cotecna/BV, ISO 22000.' },
        { label: 'Trade', title: 'Incoterms detail', body: 'FOB Mersin/İskenderun/Ambarlı: exporter loading + customs clear-out. CIF: freight + insurance. CFR: freight only. DDP: door delivery with VAT and customs in one invoice.' },
      ],
    },
    ar: {
      notes: [
        'تجيب صفحة المكونات الصناعية على سؤال “هل يستطيع خط الإنتاج استخدامها بأمان وبشكل متكرر؟” أكثر من “هل المنتج جذاب؟” الاستمرارية والتسعير والوثائق وشروط التسليم منظومة واحدة.',
        'صممت هذه الطبقة للمنتجين المنتظمين: شوكولاتة وقهوة وأغذية معبأة وصلصات ومخابز وسلاسل مطاعم.',
        'يربط التسعير في الغالب بصيغة مرتبطة بـMATIF (قمح/ذرة باريس) أو CME (صويا/ذرة أمريكا) أو كاراتشي (الأرز) أو بورصة سلع إزمير (زيت الزيتون البكر). تقسم كسمت هذه العقود وفق تقويم إنتاج المشتري شهرياً أو فصلياً أو حسب الحاوية.',
        'شهادة الصحة النباتية، شهادة المنشأ، شهادة الصحة، التبخير، الحلال، الكوشير، EUR.1 الأوروبية (تخفيض جمركي) جزء لا يتجزأ من الشحنة. الفحص قبل الشحن (SGS, Cotecna, Bureau Veritas) إلزامي في بعض الأسواق.',
        'تحميل الحاوية: حاوية ٢٠ قدم سائبة حبوب ٢٥–٢٨ طن، بقول ٢٣–٢٦ طن (أكياس ٥٠ كغ)، بذور زيتية ٢٢–٢٤ طن، سكر/طحين ٢٥ طن. Flexitank زيت نباتي ٢٠ طن / ٢٢٠٠٠ لتر. ISO tank عسل أو غلوكوز ٢٤ طن / ٢٥٠٠٠ لتر.',
      ],
      sections: [
        { label: 'تخطيط', title: 'حجم سنوي ومخاطر', body: 'يبدأ العمل من حجم موسمي وسنوي لا شحنة واحدة. مخاطر العملة ونوافذ الحصاد وتقلب الشحن وسياسة المخزون تقيم معاً.' },
        { label: 'تقني', title: 'ملف المواصفات', body: 'الرطوبة والشوائب والمعايرة وشهادة التحليل والصحة النباتية والمنشأ في قلب القرار.' },
        { label: 'تسليم', title: 'إنكوترمز', body: 'FOB أو CIF أو CFR أو DDP تختار وفق الجمارك والتأمين والتخزين.' },
        { label: 'استمرارية', title: 'ذاكرة الدفعة', body: 'تقارن كل شحنة بالسابقة. الهدف إيقاع جودة لا دفعة محظوظة.' },
        { label: 'قونيا والأناضول', title: 'قمح وطحين', body: 'بروتين ١٢–١٤٪ (أحمر صلب) للخبز، ١٠–١١٪ (طري) للبسكويت. Hagberg ٢٥٠+ ث، غلوتين رطب ٢٦–٣٠٪، Zeleny ٣٥+.' },
        { label: 'بقول', title: 'عدس وحمص وفاصوليا', body: 'عدس أحمر شانلي أورفا ومرسين (تركيا الثانية عالمياً): ٦ ملم split، شوائب ٠٫٢٪، رطوبة ١٤٪. حمص قونيا (Spanish white ٨–١٠ ملم)، فاصوليا Dermason وŞeker.' },
        { label: 'بذور', title: 'دوار، صويا، ذرة', body: 'دوار الشمس (تراقيا، قونيا، تشوكوروفا) زيت ٤٤–٤٨٪. كسبة صويا ٤٦٪ بروتين (مندوزا، البرازيل)، ذرة (NON-GMO تركيا، أوكرانيا، روسيا).' },
        { label: 'زيت', title: 'زيوت نباتية', body: 'زيت زيتون بكر (إدريميت، أيواليك) حموضة <٠٫٨٪، ريفييرا ١–١٫٥٪. دوار الشمس RBD حموضة <٠٫١٠٪. Flexitank ٢٢ م³ أو ٢٠ لتر تنك ٣٥–٤٠ كغ.' },
        { label: 'سكر ونشا', title: 'سكر أبيض، غلوكوز', body: 'Pankobirlik تركيا (سكر شمندر ICUMSA 45) أو البرازيل/الهند (قصب ICUMSA 45/100/150). نشا ذرة، شراب غلوكوز DE ٣٨/٤٢/٦٣، دكستروز.' },
        { label: 'استمرارية', title: 'سنوي وفوري', body: 'سنوي بسعر ثابت أو صيغة. فصلي مرتبط بالحصاد. فوري ٧–١٥ يوماً. يطابق المخزون مع طاقة التخزين وتقويم الإنتاج.' },
      ],
      factSheet: [
        { label: 'مواصفة', title: 'حبوب وطحين', body: 'قمح صلب بروتين ١٢–١٤٪ (Hagberg ٢٥٠+، غلوتين ٢٦–٣٠٪)؛ طري ١٠–١١٪ (بسكويت). ذرة رطوبة ١٤٪، كسر ٥٪. أرز كسر ٠٫٥٪.' },
        { label: 'مواصفة', title: 'بذور وزيوت', body: 'دوار ٤٤–٤٨٪ زيت، صويا ١٨–٢٢٪، ذرة ٤٪. زيت زيتون بكر <٠٫٨٪ حموضة، بيروكسيد <٢٠، K232 <٢٫٥، K270 <٠٫٢٢.' },
        { label: 'مواصفة', title: 'بقول', body: 'عدس أحمر split/whole، رطوبة ١٤٪، شوائب ٠٫٢٪. حمص Spanish white ٨–١٠ ملم. فاصوليا Dermason ٩ ملم، Şeker ١٣ ملم.' },
        { label: 'سلامة', title: 'سموم فطرية وGMO', body: 'أفلاتوكسين B1 ٥ ppb غذاء / ٢٠ علف؛ OTA ٥ ppb حبوب؛ DON ٧٥٠ ppb خبز. NON-GMO عبر PCR (LOD ٠٫١٪).' },
        { label: 'لوجستيات', title: 'حاوية وflexi', body: '٢٠ قدم سائب: ٢٥–٢٨ طن حبوب، ٢٣–٢٦ بقول، ٢٢–٢٤ بذور. Flexitank ٢٠ طن. ISO tank ٢٤ طن. ٤٠ HC مع منصات +٢٠–٢٥٪.' },
        { label: 'تعبئة', title: 'PP/كرافت/سائب', body: 'حبوب سائب أو FIBC ١٠٠٠ كغ؛ بقول ٥٠ كغ PP، ٢٥ كغ كرافت، تجزئة ٥/١٠ كغ. زيت ٢٠/٢٥ لتر، ٢٠٠ لتر برميل، IBC ١٠٠٠ لتر، flexitank ٢٢ م³.' },
        { label: 'شهادات', title: 'ملف الوثائق', body: 'Phytosanitary، CoO، Health، حلال، كوشير، Fumigation MB-23/24، EUR.1، فحص قبل الشحن SGS/Cotecna/BV، ISO 22000.' },
        { label: 'تجارة', title: 'تفاصيل إنكوترمز', body: 'FOB ميناء التركي: تحميل + تخليص. CIF: شحن + تأمين. CFR: شحن فقط. DDP: تسليم على باب المشتري بفاتورة واحدة.' },
      ],
    },
  },
  'origins/ethiopia': {
    tr: {
      notes: [
        'ITC Coffee Guide, Etiyopya kahvesini hem ekonomik hem kültürel olarak çok güçlü bir menşe olarak konumlandırır. Kısmet açısından Etiyopya dosyası, yüksek rakım ve işlem yönteminin fincana doğrudan yansıdığı karakter odaklı bir kahve hattıdır.',
        'Yirgacheffe ve Sidamo gibi bölgelerde alıcı; yalnız ülke adını değil, yıkama istasyonu, proses, elek boyutu, nem ve defekt seviyesini görmek ister.',
        'Etiyopya 200’ün üzerinde lokal heirloom Arabica varyetesinin (Kurume, Wolisho, Dega, Mikicho, Setami) genetik beşiğidir; bu çeşitlilik fincanda jasmine, bergamot, melon, blueberry ve black tea gibi farklı aromatik notalara dönüşür. Türkiye’ye ihracat ECX (Ethiopia Commodity Exchange) sistemi üzerinden ya da doğrudan kooperatif/ihracatçı (YCFCU, SCFCU, Tracon, Moplaco) hattından yapılır.',
        'Hasat takvimi: Yirgacheffe & Sidamo Eylül–Aralık, Limu Ekim–Aralık, Djimmah ve Lekempti Ekim–Şubat, Harrar (yalnız doğal) Aralık–Şubat. Yeni hasat fincana Mart–Mayıs’ta gelir; Türkiye ve Avrupa için kavurma planı bu pencereye göre yapılır.',
        'Q-Grading sistemi (SCA): G1 (≤3 kusur/300 g, kupa skoru 90+), G2 (4–12 kusur, 85+), G3 (13–25, 80+), G4 (26–45, 75+). Specialty pazar G1–G2 hedefler. Kısmet, ihracatçı seçiminde Q-graded ve cup score doğrulanmış lotları önceliklendirir.',
      ],
      sections: [
        { label: 'Yirgacheffe', title: 'Çiçeksi yüksek rakım', body: 'Yıkanmış lotlarda narenciye, jasmine ve çay benzeri gövde; doğal proseslerde daha yoğun blueberry-melon profili. Rakım 1.750–2.200 m. Alt-bölgeler: Gedeo (Konga, Aricha, Idido, Hama), Kochere, Wenago. Cup score 85–92.' },
        { label: 'Sidamo', title: 'Tatlılık ve derinlik', body: 'Daha geniş tatlılık aralığı, çikolata-bal arası mid notes. Rakım 1.700–2.100 m. Guji (Hambela, Shakiso, Uraga), Bensa, Adola, Wonsho alt-bölgeleri. Specialty harmanlar için güçlü temel.' },
        { label: 'Limu', title: 'Spice & wine', body: 'Batı Kaffa bölgesi, 1.400–1.900 m. Klasik şarapsı asidite, baharat tonu, fındık benzeri gövde. Endüstriyel ve premium harman üreticileri için tercih.' },
        { label: 'Djimmah & Lekempti', title: 'Hacim hattı', body: 'Yüksek hacimli, doğal proses ağırlıklı bölgeler. Endüstriyel kavurucular ve karışım hatları için maliyet-aroma dengesi sağlar. Cup 78–84.' },
        { label: 'Harrar', title: 'Doğal proses karakter', body: 'Doğu Etiyopya, 1.500–2.100 m. %100 doğal proses, blueberry, dark chocolate, wine notes. Long Berry / Short Berry / Mocha sınıflandırması.' },
        { label: 'Proses', title: 'Yıkanmış vs doğal vs honey', body: 'Yıkanmış (washed): temiz asidite, parlak çiçeksi. Doğal (natural/sun-dried): meyvemsi yoğunluk, body. Honey/pulped natural: ortada konumlanmış, son 5 yılda artan üretim.' },
        { label: 'Sertifika', title: 'Organik & FT', body: 'USDA Organik (NOP), EU 834/2007, Fair Trade FLO, Rainforest Alliance/UTZ kombi. UTZ/RFA güçlü Sidamo bölgesinde, Fair Trade SCFCU/YCFCU kooperatif hattında. Q Arabica Grader sertifikalı kupa skoru.' },
        { label: 'Lojistik', title: 'Rota & limanlar', body: 'Cıbuti limanı (Doraleh) ana çıkış noktası; Türkiye Mersin/Ambarlı transit 18–25 gün. 60 kg jüt + GrainPro içeride bariyer torba (taze tutmak için), 250–350 çuval / 20’ konteyner.' },
        { label: 'Kalite', title: 'Lot doğrulama', body: 'Her parti için: pre-shipment numune (300–500 g), cup score, screen size (G1: %90+ Screen 14+), nem %10–11.5, defekt sayımı, küf ve böcek. SGS/Eurofins lab raporu kontrat ekinde.' },
      ],
      factSheet: [
        { label: 'Spesifikasyon', title: 'G1–G4 sınıflandırma', body: 'G1: ≤3 kusur/300 g, cup score 90+, full traceable. G2: 4–12 kusur, 85+, specialty. G3: 13–25, 80+, premium endüstriyel. G4: 26–45, 75+, commercial blend. G5+ ticari hat dışı.' },
        { label: 'Spesifikasyon', title: 'Screen & nem', body: 'Screen 14+ Yirgacheffe specialty (1 screen = 1/64 inch, ~5.55 mm), 16+ Sidamo premium. Nem %10–11.5 (FOB öncesi 9–10 kuruyor). Yoğunluk 700–820 g/L.' },
        { label: 'Aroma', title: 'Cup notes', body: 'Yirgacheffe washed: jasmine, lemon, bergamot, black tea. Sidamo: caramel, milk chocolate, brown sugar. Harrar natural: blueberry, dark chocolate, wine. Limu: spice, hazelnut.' },
        { label: 'Hasat', title: 'Sezon takvimi', body: 'Yirgacheffe: Eyl–Ara hasat, Şub-Mart pre-shipment, Nis-May fincanda. Sidamo: Eki–Oca hasat, Mar-May fincanda. Harrar: Ara–Şub hasat. Türkiye’ye varış 25–35 gün.' },
        { label: 'Sertifika', title: 'Standartlar', body: 'USDA NOP, EU 834/2007 organik, Fair Trade FLO-CERT, Rainforest Alliance/UTZ, Q Arabica Grader, ETHIOPIA TRADE MARK / CFCU markaları, ISO 17025 lab.' },
        { label: 'Lojistik', title: 'Konteyner & çuval', body: '20’ DC: 250–350 jüt çuval (60 kg), ~17–18 t. GrainPro/Ecotact içerik bariyer torba (taze tutucu). FOB Cıbuti, transit Türkiye 18–25 gün, AB 22–30 gün.' },
        { label: 'Tedarik', title: 'ECX vs direkt', body: 'ECX (Ethiopia Commodity Exchange): anonim, hacim. Direct trade: kooperatif/ihracatçı bazlı, izlenebilir, fiyat premium. Kısmet specialty hatlar için direct trade tercih eder.' },
        { label: 'Risk', title: 'İklim & lojistik', body: 'El Niño/La Niña hasat zamanlamasını ±2 hafta etkiler; Cıbuti liman yoğunluğu Q4’te artar. Yıllık planlama bu pencereyi içerir; spot için 6–8 hafta önceden talep önerilir.' },
      ],
    },
    en: {
      notes: [
        'The ITC Coffee Guide positions Ethiopian coffee as a powerful origin economically and culturally. For Kismet, Ethiopia is a character-led coffee line where altitude and processing are visible in the cup.',
        'In regions such as Yirgacheffe and Sidamo, buyers need more than a country label: washing station, process, screen, moisture and defect level matter.',
        'Ethiopia is the genetic cradle of 200+ heirloom Arabica varieties (Kurume, Wolisho, Dega, Mikicho, Setami). The diversity translates into jasmine, bergamot, melon, blueberry and black tea cup notes. Export to Türkiye flows through ECX (Ethiopia Commodity Exchange) or directly via cooperatives / exporters (YCFCU, SCFCU, Tracon, Moplaco).',
        'Harvest calendar: Yirgacheffe & Sidamo Sep–Dec, Limu Oct–Dec, Djimmah and Lekempti Oct–Feb, Harrar (natural only) Dec–Feb. New crop reaches the cup in Mar–May; Türkiye and EU roasters plan their roast curve accordingly.',
        'Q-Grading (SCA): G1 (≤3 defects/300 g, cup 90+), G2 (4–12, 85+), G3 (13–25, 80+), G4 (26–45, 75+). Specialty market targets G1–G2. Kismet prioritises Q-graded and cup-score-validated lots.',
      ],
      sections: [
        { label: 'Yirgacheffe', title: 'Floral high altitude', body: 'Washed lots: citrus, jasmine, tea-like body. Naturals: deeper blueberry-melon. Altitude 1,750–2,200 m. Sub-zones: Gedeo (Konga, Aricha, Idido, Hama), Kochere, Wenago. Cup score 85–92.' },
        { label: 'Sidamo', title: 'Sweetness and depth', body: 'Wider sweetness range, chocolate–honey mid notes. Altitude 1,700–2,100 m. Guji (Hambela, Shakiso, Uraga), Bensa, Adola, Wonsho. Strong specialty blend foundation.' },
        { label: 'Limu', title: 'Spice & wine', body: 'Western Kaffa, 1,400–1,900 m. Classic winey acidity, spice notes, hazelnut body. Industrial and premium blend favourite.' },
        { label: 'Djimmah & Lekempti', title: 'Volume line', body: 'High-volume, mostly natural-process zones. Cost–aroma balance for industrial roasters and blends. Cup 78–84.' },
        { label: 'Harrar', title: 'Natural-process character', body: 'Eastern Ethiopia, 1,500–2,100 m. 100% natural process; blueberry, dark chocolate, wine. Long Berry / Short Berry / Mocha grades.' },
        { label: 'Process', title: 'Washed vs natural vs honey', body: 'Washed: clean acidity, bright florals. Natural: fruit intensity, body. Honey/pulped natural: middle position, growing in last 5 years.' },
        { label: 'Cert', title: 'Organic & FT', body: 'USDA Organic (NOP), EU 834/2007, Fair Trade FLO, Rainforest Alliance/UTZ combo. UTZ/RFA strong in Sidamo, Fair Trade dominant in SCFCU/YCFCU. Q Arabica Grader cup score.' },
        { label: 'Logistics', title: 'Route & ports', body: 'Djibouti port (Doraleh) is the main exit; transit to Türkiye Mersin/Ambarlı 18–25 days. 60 kg jute + GrainPro inner barrier bag, 250–350 bags / 20’ container.' },
        { label: 'Quality', title: 'Lot validation', body: 'Per batch: pre-shipment sample (300–500 g), cup score, screen size (G1: 90%+ Screen 14+), moisture 10–11.5%, defect count, mould and insect. SGS/Eurofins report attached.' },
      ],
      factSheet: [
        { label: 'Spec', title: 'G1–G4 grading', body: 'G1: ≤3 defects/300 g, cup 90+, fully traceable. G2: 4–12, 85+, specialty. G3: 13–25, 80+, premium industrial. G4: 26–45, 75+, commercial. G5+ outside trade line.' },
        { label: 'Spec', title: 'Screen & moisture', body: 'Screen 14+ Yirgacheffe specialty (1 screen = 1/64 inch, ~5.55 mm), 16+ Sidamo premium. Moisture 10–11.5%. Density 700–820 g/L.' },
        { label: 'Aroma', title: 'Cup notes', body: 'Yirgacheffe washed: jasmine, lemon, bergamot, black tea. Sidamo: caramel, milk chocolate, brown sugar. Harrar natural: blueberry, dark chocolate, wine. Limu: spice, hazelnut.' },
        { label: 'Harvest', title: 'Season calendar', body: 'Yirgacheffe: Sep–Dec harvest, Feb–Mar pre-shipment, Apr–May in cup. Sidamo: Oct–Jan harvest, Mar–May in cup. Harrar: Dec–Feb. Türkiye arrival 25–35 days.' },
        { label: 'Cert', title: 'Standards', body: 'USDA NOP, EU 834/2007 organic, Fair Trade FLO-CERT, Rainforest Alliance/UTZ, Q Arabica Grader, ETHIOPIA TRADE MARK / CFCU brands, ISO 17025 lab.' },
        { label: 'Logistics', title: 'Container & bags', body: '20’ DC: 250–350 jute (60 kg), ~17–18 t. GrainPro/Ecotact inner barrier (freshness). FOB Djibouti, transit Türkiye 18–25 d, EU 22–30 d.' },
        { label: 'Sourcing', title: 'ECX vs direct', body: 'ECX: anonymous, volume. Direct trade: cooperative/exporter level, traceable, premium. Kismet prefers direct trade for specialty lines.' },
        { label: 'Risk', title: 'Climate & logistics', body: 'El Niño/La Niña shifts harvest ±2 weeks; Djibouti port congestion peaks Q4. Annual planning includes this; spot orders best placed 6–8 weeks ahead.' },
      ],
    },
    ar: {
      notes: [
        'يضع دليل ITC للقهوة إثيوبيا في موقع منشأ قوي اقتصادياً وثقافياً. بالنسبة لكسمت، إثيوبيا خط قهوة ذو شخصية يظهر فيه الارتفاع والمعالجة في الفنجان مباشرة.',
        'في يرغاشيف وسيدامو يحتاج المشتري إلى أكثر من اسم الدولة: محطة الغسل، طريقة المعالجة، حجم الغربال، الرطوبة، مستوى العيوب.',
        'إثيوبيا مهد جيني لأكثر من ٢٠٠ صنف عربيكا محلي (Kurume, Wolisho, Dega…) ينتج نوتات الياسمين والبرغموت والشمام والتوت والشاي الأسود. التصدير إلى تركيا يتم عبر بورصة ECX أو عبر التعاونيات/المصدرين مباشرة.',
        'تقويم الحصاد: يرغاشيف وسيدامو أيلول–كانون الأول، ليمو تشرين الأول–كانون الأول، جيمما ولكمبتي تشرين الأول–شباط، هرر طبيعي فقط كانون الأول–شباط.',
        'تصنيف Q (SCA): G1 (٣ عيوب/٣٠٠ غ، كأس ٩٠+)، G2 (٤–١٢، ٨٥+)، G3 (١٣–٢٥، ٨٠+)، G4 (٢٦–٤٥، ٧٥+). تستهدف السوق المختصة G1–G2.',
      ],
      sections: [
        { label: 'يرغاشيف', title: 'زهري على ارتفاع عالٍ', body: 'الدفعات المغسولة: حمضيات وياسمين وقوام كالشاي. الطبيعية: توت وشمام أعمق. ارتفاع ١٧٥٠–٢٢٠٠ م. Cup ٨٥–٩٢.' },
        { label: 'سيدامو', title: 'حلاوة وعمق', body: 'مدى حلاوة أوسع، نوتات شوكولاتة-عسل. ارتفاع ١٧٠٠–٢١٠٠ م. Guji وBensa وAdola.' },
        { label: 'ليمو', title: 'بهارات ونبيذ', body: 'كاففا الغربية، ١٤٠٠–١٩٠٠ م. حموضة نبيذية، بهارات، قوام البندق.' },
        { label: 'جيمما ولكمبتي', title: 'خط الحجم', body: 'مناطق طبيعية المعالجة بكميات كبيرة. توازن تكلفة/عطر للتحميص الصناعي. Cup ٧٨–٨٤.' },
        { label: 'هرر', title: 'شخصية المعالجة الطبيعية', body: 'شرق إثيوبيا، ١٥٠٠–٢١٠٠ م. ١٠٠٪ طبيعي؛ توت، شوكولاتة داكنة، نبيذ. Long Berry/Short Berry/Mocha.' },
        { label: 'المعالجة', title: 'مغسول/طبيعي/عسل', body: 'مغسول: حموضة نظيفة. طبيعي: كثافة فاكهية. عسل: وسطي.' },
        { label: 'شهادات', title: 'عضوي وFair Trade', body: 'USDA Organic، EU 834/2007، Fair Trade FLO، RFA/UTZ. Q Arabica Grader.' },
        { label: 'لوجستيات', title: 'الطريق والموانئ', body: 'ميناء جيبوتي (Doraleh)، عبور إلى مرسين/أمبارلي ١٨–٢٥ يوماً. ٦٠ كغ جوت + GrainPro، ٢٥٠–٣٥٠ كيس/حاوية ٢٠.' },
        { label: 'الجودة', title: 'تحقق الدفعة', body: 'لكل دفعة: عينة قبل الشحن (٣٠٠–٥٠٠ غ)، كأس، Screen 14+، رطوبة ١٠–١١٫٥٪، عيوب وعفن وحشرات. SGS/Eurofins.' },
      ],
      factSheet: [
        { label: 'تصنيف', title: 'G1–G4', body: 'G1 ≤٣ عيوب، كأس ٩٠+، تتبع كامل. G2 ٤–١٢، ٨٥+. G3 ١٣–٢٥، ٨٠+. G4 ٢٦–٤٥، ٧٥+.' },
        { label: 'مواصفة', title: 'Screen ورطوبة', body: 'Screen 14+ يرغاشيف، 16+ سيدامو. رطوبة ١٠–١١٫٥٪. كثافة ٧٠٠–٨٢٠ غ/لتر.' },
        { label: 'عطر', title: 'نوتات الفنجان', body: 'يرغاشيف مغسول: ياسمين، ليمون، برغموت. سيدامو: كراميل، شوكولاتة بحليب. هرر: توت، نبيذ.' },
        { label: 'حصاد', title: 'تقويم', body: 'يرغاشيف: أيلول–كانون الأول، فنجان نيسان–أيار. سيدامو: تشرين الأول–كانون الثاني. هرر: كانون الأول–شباط. الوصول لتركيا ٢٥–٣٥ يوماً.' },
        { label: 'شهادات', title: 'المعايير', body: 'NOP، EU 834، Fair Trade، RFA/UTZ، Q Grader، ISO 17025.' },
        { label: 'لوجستيات', title: 'حاوية وأكياس', body: 'حاوية ٢٠ قدم: ٢٥٠–٣٥٠ جوت، ١٧–١٨ طن. GrainPro حاجز داخلي.' },
        { label: 'توريد', title: 'ECX أو مباشر', body: 'ECX: مجهول وحجمي. مباشر: تعاونية/مصدر، قابل للتتبع وأعلى سعراً.' },
        { label: 'مخاطر', title: 'مناخ ولوجستيات', body: 'El Niño/La Niña ±أسبوعين؛ ازدحام ميناء جيبوتي ربع رابع. الطلب الفوري قبل ٦–٨ أسابيع.' },
      ],
    },
  },
  'origins/colombia': {
    tr: {
      notes: [
        'Kolombiya kahve ihracatında dünyanın en köklü specialty rotalarından biri; FNC (Federación Nacional de Cafeteros) altında 540.000+ küçük üretici, 23 yıldızlı bölge. Türkiye’ye ulaşan profil Caldas, Quindío, Risaralda’dan Huila, Nariño, Antioquia ve Cauca’ya kadar uzanır.',
        'Yıl boyu hasat: Ana Mahsul (Main Crop) Eylül–Aralık (Andalúz hattı), Mitaca (ikincil hasat) Mart–Haziran. Bu çift hasat, alıcıya ay-ay sevkiyat avantajı sağlar; Avrupa ve Türkiye için kavurma planı kesintisiz tutulur.',
        'Sınıflandırma: Excelso (screen 15/16+, ≤12 defekt), Supremo (screen 17/18+, ≤8 defekt), UGQ (under-grade, screen 14, ≤25 defekt). Fiyat NY-C (ICE) Arabica vadeli sözleşmesine göre + diferansiyel; Kolombiya FNC publica 1 günlük gecikmeli.',
        'Mejor Calidad (Microlot) ve Specialty Class: cup score 85–92, tek çiftlik veya tek bölge, washed honey/anaerobic gibi özel proseslerle ayrı kalibre. Türkiye’deki specialty kavurucular bu hattı 6–12 ay önceden rezerve eder.',
      ],
      sections: [
        { label: 'Huila', title: 'Andean specialty', body: 'Güney bölge, 1.400–2.000 m. Karamel, çikolata, narenciye dengeli profil. Kolombiya specialty üretiminin ~%18’i. Pitalito, San Agustín, Garzón mikrobölgeleri.' },
        { label: 'Nariño', title: 'En yüksek rakım', body: 'Ekvator yakını, 1.700–2.300 m. Parlak meyvemsi asidite, panela tatlılık, full body. La Unión, Buesaco, Chachagüí. Cup 86–90.' },
        { label: 'Antioquia', title: 'Tradition zone', body: 'Medellín çevresi, 1.300–1.900 m. Klasik Kolombiya profili, kakao notlar, dengeli yapı. Eje Cafetero’nun temel bölgelerinden.' },
        { label: 'Cauca', title: 'Volkanik tazelik', body: 'Güneybatı, 1.500–2.100 m. Tatlı meyveli, jasmine, parlak asidite. Inza, Cajibío, Popayán mikrobölgeleri. Specialty mikrolot kaynağı.' },
        { label: 'Caldas/Quindío/Risaralda', title: 'Eje Cafetero', body: 'Geleneksel kahve üçgeni, 1.200–1.900 m. Yumuşak gövde, dengeli klasik Kolombiya. Hacim ihtiyacı için sağlam komşu kaynak.' },
        { label: 'Hasat', title: 'Çift sezon', body: 'Main crop Eyl–Ara (kuzey ve merkez), Mitaca Mar–Haz (güney). Sevkiyat penceresi yıl boyu açık; 4–6 hafta öncesi numune talebi standart.' },
        { label: 'Proses', title: 'Washed dominant', body: '%95+ yıkanmış (washed/lavado). Doğal proses (natural) son 5 yılda specialty mikrolotlarda artıyor. Honey ve anaerobic deneysel hatlar Huila/Nariño’da çoğunluk.' },
        { label: 'Sertifika', title: 'FNC + 100% Colombia', body: 'FNC mührü tüm partilerde standart. USDA Organik, Fair Trade FLO, Rainforest Alliance, 4C, Nespresso AAA Sustainable kombinasyonları yaygın. Origin Verified seal microlots.' },
        { label: 'Lojistik', title: 'Buenaventura & Cartagena', body: 'Pacific (Buenaventura) ana çıkış %70+; Atlantic (Cartagena, Santa Marta) %30. Türkiye Mersin/Ambarlı transit 25–35 gün. 70 kg veya 60 kg jüt + GrainPro.' },
      ],
      factSheet: [
        { label: 'Spesifikasyon', title: 'Excelso & Supremo', body: 'Excelso screen 15/16+, ≤12 defekt, mainstream specialty. Supremo screen 17/18+, ≤8 defekt, premium. UGQ screen 14, ≤25 defekt, commercial blend.' },
        { label: 'Spesifikasyon', title: 'Cup & rakım', body: 'Cup 80–84 commercial, 84–87 specialty, 87+ microlot. Rakım 1.200–1.900 m hacim hattı, 1.700–2.300 m specialty.' },
        { label: 'Hasat', title: 'Çift hasat takvimi', body: 'Main: Eyl–Ara hasat, Şub–Nis fincan. Mitaca: Mar–Haz hasat, Eyl–Kas fincan. Avrupa için kesintisiz aylık sevkiyat mümkün.' },
        { label: 'Aroma', title: 'Profile', body: 'Huila: caramel, chocolate, citrus. Nariño: bright fruit, panela, full body. Antioquia: cocoa, balanced. Cauca: jasmine, sweet fruit. Microlot: anaerobic tropical fruit.' },
        { label: 'Sertifika', title: 'FNC & Sustainable', body: '100% Colombia FNC, USDA NOP, EU Organic, Fair Trade FLO, Rainforest Alliance, 4C Common Code, Nespresso AAA, Starbucks C.A.F.E., Origin Verified.' },
        { label: 'Lojistik', title: 'Liman & transit', body: 'Buenaventura (Pacific) %70+; Cartagena (Atlantic). FOB → Mersin/Ambarlı 25–35 gün, AB 22–30 gün. 70 kg veya 60 kg jüt çuval + GrainPro/Ecotact.' },
        { label: 'Fiyat', title: 'NY-C + diferansiyel', body: 'ICE NY-C vadeli kahve sözleşmesi (centavos/lb) + Kolombiya diferansiyeli (Excelso +5/+15c, Supremo +20/+40c, microlot +50c+). FNC günlük yayın, 24 saat valid.' },
        { label: 'Süreklilik', title: 'Yıllık plan', body: 'Specialty alıcılar için 6–12 ay önceden rezervasyon. Hacim hattı 3–6 ay öncesi yeterli. Spot 30–60 günde sevk. Kismet diferansiyel ve hasat takvimini birlikte yönetir.' },
      ],
    },
    en: {
      notes: [
        'Colombia is one of the most established specialty origins; under FNC (Federación Nacional de Cafeteros), 540,000+ smallholders across 23 starred regions. The Türkiye-bound profile spans Caldas, Quindío, Risaralda to Huila, Nariño, Antioquia, Cauca.',
        'Two harvests: Main Crop Sep–Dec (Andean line), Mitaca Mar–Jun. Buyers gain month-by-month shipping flexibility; EU and Türkiye roasters maintain uninterrupted curve.',
        'Grading: Excelso (screen 15/16+, ≤12 defects), Supremo (screen 17/18+, ≤8 defects), UGQ (under-grade, screen 14, ≤25 defects). Pricing on NY-C (ICE) Arabica futures + differential; FNC publishes daily reference 1 day delayed.',
        'Mejor Calidad (microlot) and specialty class: cup 85–92, single farm or single region, washed honey / anaerobic processes calibrated separately. Türkiye specialty roasters reserve these lines 6–12 months ahead.',
      ],
      sections: [
        { label: 'Huila', title: 'Andean specialty', body: 'Southern, 1,400–2,000 m. Caramel, chocolate, citrus balanced profile. ~18% of Colombian specialty production. Pitalito, San Agustín, Garzón micro-zones.' },
        { label: 'Nariño', title: 'Highest altitude', body: 'Near equator, 1,700–2,300 m. Bright fruit acidity, panela sweetness, full body. La Unión, Buesaco, Chachagüí. Cup 86–90.' },
        { label: 'Antioquia', title: 'Tradition zone', body: 'Around Medellín, 1,300–1,900 m. Classic Colombia profile, cocoa notes, balanced. Backbone of Eje Cafetero.' },
        { label: 'Cauca', title: 'Volcanic freshness', body: 'Southwest, 1,500–2,100 m. Sweet fruit, jasmine, bright acidity. Inza, Cajibío, Popayán. Microlot source.' },
        { label: 'Caldas/Quindío/Risaralda', title: 'Eje Cafetero', body: 'Classic coffee triangle, 1,200–1,900 m. Soft body, balanced. Reliable neighbour for volume.' },
        { label: 'Harvest', title: 'Two seasons', body: 'Main Sep–Dec (north + central), Mitaca Mar–Jun (south). Year-round shipping; sample request 4–6 weeks ahead is standard.' },
        { label: 'Process', title: 'Washed-dominant', body: '95%+ washed (lavado). Natural growing in specialty microlots since 5 years. Honey and anaerobic experimental flows in Huila/Nariño.' },
        { label: 'Cert', title: 'FNC + 100% Colombia', body: 'FNC seal standard on every lot. USDA Organic, Fair Trade FLO, Rainforest Alliance, 4C, Nespresso AAA. Origin Verified seal for microlots.' },
        { label: 'Logistics', title: 'Buenaventura & Cartagena', body: 'Pacific (Buenaventura) 70%+; Atlantic (Cartagena, Santa Marta) 30%. Transit Türkiye 25–35 days. 70 kg or 60 kg jute + GrainPro.' },
      ],
      factSheet: [
        { label: 'Spec', title: 'Excelso & Supremo', body: 'Excelso screen 15/16+, ≤12 defects, mainstream specialty. Supremo screen 17/18+, ≤8 defects, premium. UGQ screen 14, ≤25 defects.' },
        { label: 'Spec', title: 'Cup & altitude', body: 'Cup 80–84 commercial, 84–87 specialty, 87+ microlot. Altitude 1,200–1,900 m volume; 1,700–2,300 m specialty.' },
        { label: 'Harvest', title: 'Two-crop calendar', body: 'Main: Sep–Dec harvest, Feb–Apr cup. Mitaca: Mar–Jun harvest, Sep–Nov cup. Continuous monthly shipment to EU.' },
        { label: 'Aroma', title: 'Profile', body: 'Huila: caramel, chocolate, citrus. Nariño: bright fruit, panela, full body. Antioquia: cocoa, balanced. Cauca: jasmine, sweet fruit. Microlot: anaerobic tropical.' },
        { label: 'Cert', title: 'FNC & Sustainable', body: '100% Colombia FNC, USDA NOP, EU Organic, Fair Trade FLO, Rainforest Alliance, 4C Common Code, Nespresso AAA, Starbucks C.A.F.E.' },
        { label: 'Logistics', title: 'Port & transit', body: 'Buenaventura (Pacific) 70%+; Cartagena (Atlantic). FOB → Mersin/Ambarlı 25–35 d, EU 22–30 d. 70 or 60 kg jute + GrainPro/Ecotact.' },
        { label: 'Pricing', title: 'NY-C + differential', body: 'ICE NY-C futures (cents/lb) + Colombia differential (Excelso +5/+15c, Supremo +20/+40c, microlot +50c+). FNC daily reference, 24 h valid.' },
        { label: 'Continuity', title: 'Annual plan', body: 'Specialty buyers: 6–12 month booking. Volume: 3–6 month. Spot: 30–60 day shipment. Kismet manages differential + harvest calendar together.' },
      ],
    },
    ar: {
      notes: [
        'كولومبيا من أعرق مناشئ القهوة المختصة؛ تحت إدارة FNC أكثر من ٥٤٠٠٠٠ مزارع صغير في ٢٣ منطقة. يمتد الملف الواصل إلى تركيا من Caldas وQuindío وRisaralda إلى Huila وNariño وAntioquia وCauca.',
        'حصادان سنوياً: الرئيسي أيلول–كانون الأول والثانوي Mitaca آذار–حزيران، ما يمنح المشتري شحناً شهرياً متواصلاً.',
        'تصنيف: Excelso (Screen 15/16+، ≤١٢ عيب)، Supremo (17/18+، ≤٨)، UGQ (14، ≤٢٥). التسعير على NY-C (ICE) + فارق سعر؛ FNC يصدر مرجعاً يومياً.',
        'Mejor Calidad وSpecialty: كأس ٨٥–٩٢، مزرعة أو منطقة واحدة، عمليات مغسولة/عسل/لاهوائي. يحجز المحمصون المختصون في تركيا هذا الخط ٦–١٢ شهراً مسبقاً.',
      ],
      sections: [
        { label: 'Huila', title: 'مختصة أنديزية', body: 'الجنوب، ١٤٠٠–٢٠٠٠ م. كراميل، شوكولاتة، حمضيات متوازنة. ١٨٪ من إنتاج المختصة. Pitalito وSan Agustín وGarzón.' },
        { label: 'Nariño', title: 'أعلى ارتفاع', body: 'قرب الاستواء، ١٧٠٠–٢٣٠٠ م. حموضة فاكهية لامعة وحلاوة بانيلا وقوام كامل. Cup ٨٦–٩٠.' },
        { label: 'Antioquia', title: 'منطقة تقليدية', body: 'حول ميديلين، ١٣٠٠–١٩٠٠ م. ملف كولومبي كلاسيكي، كاكاو متوازن.' },
        { label: 'Cauca', title: 'انتعاش بركاني', body: 'الجنوب الغربي، ١٥٠٠–٢١٠٠ م. ياسمين وفاكهة حلوة. مصدر مايكرولوت.' },
        { label: 'مثلث Eje', title: 'Caldas/Quindío/Risaralda', body: 'مثلث القهوة الكلاسيكي، ١٢٠٠–١٩٠٠ م. قوام ناعم متوازن.' },
        { label: 'حصاد', title: 'موسمان', body: 'الرئيسي أيلول–كانون الأول، Mitaca آذار–حزيران. شحن متواصل؛ طلب عينة قبل ٤–٦ أسابيع.' },
        { label: 'معالجة', title: 'مغسول مهيمن', body: '+٩٥٪ مغسول. الطبيعي ينمو في المايكرولوت. عسل ولاهوائي تجارب في Huila/Nariño.' },
        { label: 'شهادات', title: 'FNC + ١٠٠٪ كولومبيا', body: 'ختم FNC قياسي. USDA Organic وFair Trade وRFA و4C وNespresso AAA.' },
        { label: 'لوجستيات', title: 'Buenaventura وCartagena', body: 'الباسيفيك ٧٠٪+، الأطلسي ٣٠٪. عبور إلى تركيا ٢٥–٣٥ يوماً. ٧٠ أو ٦٠ كغ جوت + GrainPro.' },
      ],
      factSheet: [
        { label: 'مواصفة', title: 'Excelso وSupremo', body: 'Excelso 15/16+، ≤١٢؛ Supremo 17/18+، ≤٨؛ UGQ 14، ≤٢٥.' },
        { label: 'مواصفة', title: 'كأس وارتفاع', body: 'Cup ٨٠–٨٤ تجاري، ٨٤–٨٧ مختص، ٨٧+ مايكرولوت. ارتفاع ١٢٠٠–٢٣٠٠ م.' },
        { label: 'حصاد', title: 'تقويم مزدوج', body: 'الرئيسي أيلول–كانون الأول، Mitaca آذار–حزيران. شحن شهري متواصل.' },
        { label: 'عطر', title: 'الملف', body: 'Huila: كراميل وشوكولاتة. Nariño: فاكهة لامعة وبانيلا. Antioquia: كاكاو متوازن. Cauca: ياسمين.' },
        { label: 'شهادات', title: 'FNC ومستدام', body: '١٠٠٪ كولومبيا، USDA NOP، EU Organic، Fair Trade، RFA، 4C، Nespresso AAA.' },
        { label: 'لوجستيات', title: 'ميناء وعبور', body: 'Buenaventura ٧٠٪+، Cartagena. FOB إلى مرسين/أمبارلي ٢٥–٣٥ يوماً.' },
        { label: 'تسعير', title: 'NY-C + فارق', body: 'NY-C (سنت/رطل) + فارق كولومبي (Excelso +٥/+١٥، Supremo +٢٠/+٤٠، مايكرولوت +٥٠+).' },
        { label: 'استمرارية', title: 'خطة سنوية', body: 'مختص: حجز ٦–١٢ شهراً. حجم: ٣–٦ أشهر. فوري: ٣٠–٦٠ يوماً.' },
      ],
    },
  },
  'origins/vietnam': {
    tr: {
      notes: [
        'USDA/FAS Vietnam kahve raporlarında robusta’nın ülke üretimindeki baskın rolü açıkça görülür. Bu nedenle Vietnam sayfası “yüksek hacim, sürekli tedarik, üretim uyumu” ekseninde yazıldı.',
        'Aynı menşe dosyasına kaju ve karabiberin girmesi, Vietnam’ı yalnız kahve değil, çok ürünlü bir B2B tedarik zemini haline getirir.',
        'Vietnam dünya kahve üretiminin %16-18’ini, robustanın %40+’ını sağlar (Brezilya’dan sonra ikinci kahve, robustada birinci üretici). Türkiye’ye yıllık ~130.000 ton ihracat. Dak Lak, Lam Dong, Gia Lai, Dak Nong, Kon Tum bölgeleri "Central Highlands" olarak bilinen 1.700 m altındaki yayla bandında konumlanır.',
        'Robusta sınıflandırması: G1 ekran 18+ (≤2% kusur, premium), G2 ekran 16+ (≤5%, mainstream), G3 ekran 13+ (≤8%, commercial blend), G4 (≤15%, instant kahve hattı). Wet-polished/Sortexed/Screen-cleaned işleme katmanları fiyat ve tutarlılığı belirler.',
        'Kaju ölçeği: Vietnam dünya kaju ihracatının %50+’sını yapar (Bin Phuoc, Phan Rang, Dong Nai). AFI/CEPCI sınıflandırma: W180 (premium-büyük), W210, W240, W320 (en yaygın industrial), W450, W500. Kırık (LP, LWP, SWP, SP), parça (B, BB, BB2). Türkiye işleme tesisleri yıllık 35.000+ ton kaju ithal eder.',
        'Karabiber: Phu Quoc adası, Chu Se, Dak Lak hattı; ASTA Black 32–34, piperin %4.5–6.0, %12–14 nem. Vietnam dünya karabiber üretiminin %35’ini sağlar; Türkiye’deki et işleme ve karışım baharat sanayisi temel alıcı.',
      ],
      sections: [
        { label: 'Robusta', title: 'Endüstriyel kahve omurgası', body: 'Robusta hattı espresso harmanları, instant kahve ve yüksek hacimli üretim için maliyet, kafein, gövde ve süreklilik dengesini sağlar. Kafein %2–4 (Arabica %1–2), gövde yoğun, asidite düşük. Espresso harmanlarda %20–40 oranında karışıma girer (crema yoğunluğu artırır).' },
        { label: 'Dak Lak', title: 'Robusta merkezi', body: 'Vietnam robusta üretiminin %30’u; Buon Ma Thuot şehri merkez. Rakım 500–800 m, volcanic basalt toprak. G1 (Screen 18+) hattı premium endüstriyel; instant ve specialty espresso için tercih.' },
        { label: 'Lam Dong', title: 'Yüksek rakım robusta', body: 'Da Lat ve Bao Loc çevresi, 800–1.700 m. Robusta için yüksek sayılan rakım, biraz daha kompleks aroma. Specialty robusta hattının kaynağı; "Fine Robusta" sertifikasyonlu lotlar.' },
        { label: 'Gia Lai & Dak Nong', title: 'Hacim hattı', body: 'Geniş üretim alanları, G2/G3 commercial blend tedariği. Yıllık 200.000+ ton üretim. Türkiye’deki kahve toplayıcıları için ana hacim kaynağı.' },
        { label: 'Phan Rang', title: 'Kaju W kalibrasyon', body: 'Ninh Thuan eyaleti; AFI sınıflandırma W180/W210/W240/W320/W450. Vakum karton 22.68 kg (50 lb), nem %0–4, yağ asidi %4–8. Çikolata, gıda, helva sanayisi temel alıcı.' },
        { label: 'Bin Phuoc', title: 'Kaju işleme merkezi', body: 'Vietnam kaju işlemenin %40’ı bu eyalette. RCN (Raw Cashew Nuts) Afrika’dan ithal edilir, burada işlenir, paketlenir, ihraç edilir. Tüm dünyaya servis veren entegre ekosistem.' },
        { label: 'Phu Quoc & Chu Se', title: 'Karabiber', body: 'Phu Quoc adası coğrafi işaretli (PDO 2017), aromatik ve kompleks. Chu Se hacim hattı, endüstriyel sanayi için. Whole black, white pepper (decorticated), broken/cracked formlar.' },
        { label: 'Hasat', title: 'Yıllık takvim', body: 'Robusta: Eki–Şub hasat, Mar-May export pick. Kaju: Şub–May hasat, yıl boyu işleme. Karabiber: Şub–May (main crop), Tem–Ağu (mini). Türkiye sevkiyat 30–35 gün Cat Lai (Ho Chi Minh)/Cai Mep limanlarından.' },
        { label: 'Sertifika', title: 'Standartlar', body: 'UTZ, Rainforest Alliance, 4C, Fairtrade FLO (specialty), VietGAP (yerel), USDA Organik ve EU 834. Fine Robusta sertifika programı. ISO 22000, BRC, FDA gıda standardı.' },
      ],
      factSheet: [
        { label: 'Spesifikasyon', title: 'Robusta G1–G4', body: 'G1: Screen 18+, ≤2% kusur, premium endüstriyel. G2: Screen 16+, ≤5%. G3: Screen 13+, ≤8%, commercial blend. G4: Screen 13, ≤15%, instant. Cup score 70–82.' },
        { label: 'Spesifikasyon', title: 'Kaju W ölçek', body: 'W180 240 adet/lb (premium), W210, W240, W320 (en yaygın endüstriyel, 320 adet/lb), W450, W500. Kırık LP/LWP/SWP/SP. Yağ asidi <%8, nem <%5.' },
        { label: 'Spesifikasyon', title: 'Karabiber', body: 'ASTA Black 32–34, piperin %4.5–6.0, nem %12–14, MC <%14, FAQ (Fair Average Quality), 500/550/580 g/L yoğunluk. Whole, decorticated, broken, cracked, ground.' },
        { label: 'Hasat', title: 'Sezon', body: 'Robusta: Eki–Şub hasat, Mar–May export. Kaju: Şub–May, yıl boyu işleme. Karabiber: Şub–May ana, Tem–Ağu küçük. Vietnam hasadı yıl boyu sürekli sevkiyat sağlar.' },
        { label: 'Sertifika', title: 'Standartlar', body: 'UTZ, RFA, 4C, Fairtrade, VietGAP, USDA NOP, EU 834, Fine Robusta, ISO 22000, BRC, FDA FSMA. Phu Quoc karabiber PDO.' },
        { label: 'Lojistik', title: 'Liman & transit', body: 'FOB Cat Lai / Cai Mep / Ho Chi Minh / Hai Phong. Türkiye Mersin/Ambarlı 30–35 gün, AB 25–30 gün. 60 kg jüt çuval (kahve), 22.68 kg karton (kaju), 25 kg PP (karabiber).' },
        { label: 'Fiyat', title: 'LIFFE + diferansiyel', body: 'Robusta: ICE Europe LIFFE Robusta vadeli + diferansiyel (G1 +$30/+50/ton, G2 +$10/+30). Kaju: spot pazar AFI Index. Karabiber: spot Vietnam Pepper Association reference.' },
        { label: 'Süreklilik', title: 'Yıllık plan', body: 'Robusta yıllık ~130k ton TR, hacim için 6 ay önceden plan. Kaju yıllık ~35k ton TR, 3 ay öncesi yeterli. Karabiber spot 30 gün, yıllık 6 ay.' },
      ],
    },
    en: {
      notes: [
        'USDA/FAS Vietnam coffee reporting makes robusta’s dominant role in national production clear. This page is therefore written around volume, continuity and production fit.',
        'Cashew and black pepper in the same origin file make Vietnam more than a coffee origin: it becomes a multi-product B2B sourcing base.',
        'Vietnam supplies 16–18% of world coffee and 40%+ of robusta (#2 coffee producer after Brazil, #1 robusta). ~130,000 t to Türkiye yearly. Dak Lak, Lam Dong, Gia Lai, Dak Nong, Kon Tum form the Central Highlands plateau (under 1,700 m).',
        'Robusta grading: G1 screen 18+ (≤2% defects, premium), G2 screen 16+ (≤5%, mainstream), G3 screen 13+ (≤8%, commercial blend), G4 (≤15%, instant). Wet-polished/Sortexed/Screen-cleaned tiers drive price and consistency.',
        'Cashew scale: Vietnam ships 50%+ of global cashew (Bin Phuoc, Phan Rang, Dong Nai). AFI/CEPCI grading: W180 (premium), W210, W240, W320 (most common industrial), W450, W500. Broken (LP, LWP, SWP, SP), butt (B, BB, BB2). Türkiye plants import 35,000+ t annually.',
        'Black pepper: Phu Quoc island, Chu Se, Dak Lak; ASTA Black 32–34, piperine 4.5–6.0%, moisture 12–14%. Vietnam holds 35% of world pepper output; Türkiye meat-processing and seasoning industry are core buyers.',
      ],
      sections: [
        { label: 'Robusta', title: 'Industrial coffee backbone', body: 'Robusta line balances cost, caffeine, body and continuity for espresso blends, instant and high-volume production. Caffeine 2–4% (Arabica 1–2%), heavy body, low acidity. 20–40% in espresso blends (boosts crema).' },
        { label: 'Dak Lak', title: 'Robusta heartland', body: '30% of Vietnam robusta; Buon Ma Thuot is the centre. Altitude 500–800 m, volcanic basalt soil. G1 (Screen 18+) is premium industrial; preferred for instant and specialty espresso.' },
        { label: 'Lam Dong', title: 'High-altitude robusta', body: 'Around Da Lat and Bao Loc, 800–1,700 m. Higher altitude for robusta, slightly more complex aroma. Source for Fine Robusta certified lots.' },
        { label: 'Gia Lai & Dak Nong', title: 'Volume line', body: 'Wide production area, G2/G3 commercial blend supply. 200,000+ t annually. Main volume source for Türkiye coffee blenders.' },
        { label: 'Phan Rang', title: 'Cashew W calibration', body: 'Ninh Thuan province; AFI grades W180/W210/W240/W320/W450. Vacuum carton 22.68 kg (50 lb), moisture 0–4%, FFA 4–8%. Chocolate, food, halva industry are main buyers.' },
        { label: 'Bin Phuoc', title: 'Cashew processing hub', body: '40% of Vietnam cashew processing. RCN (Raw Cashew Nuts) imported from Africa, processed and re-exported here. Integrated ecosystem serving the world.' },
        { label: 'Phu Quoc & Chu Se', title: 'Black pepper', body: 'Phu Quoc island PDO (2017), aromatic and complex. Chu Se volume line for industrial. Whole black, white (decorticated), broken/cracked.' },
        { label: 'Harvest', title: 'Annual calendar', body: 'Robusta: Oct–Feb harvest, Mar–May export pick. Cashew: Feb–May harvest, year-round processing. Pepper: Feb–May main, Jul–Aug mini. 30–35 d transit Cat Lai (HCMC)/Cai Mep to Türkiye.' },
        { label: 'Cert', title: 'Standards', body: 'UTZ, Rainforest Alliance, 4C, Fairtrade FLO, VietGAP, USDA Organic, EU 834. Fine Robusta program. ISO 22000, BRC, FDA food standard.' },
      ],
      factSheet: [
        { label: 'Spec', title: 'Robusta G1–G4', body: 'G1: Screen 18+, ≤2% defects, premium industrial. G2: 16+, ≤5%. G3: 13+, ≤8%, commercial. G4: ≤15%, instant. Cup 70–82.' },
        { label: 'Spec', title: 'Cashew W grades', body: 'W180 240 pcs/lb premium; W210, W240, W320 (most common industrial 320/lb), W450, W500. Broken LP/LWP/SWP/SP. FFA <8%, moisture <5%.' },
        { label: 'Spec', title: 'Black pepper', body: 'ASTA 32–34, piperine 4.5–6.0%, moisture 12–14%, FAQ, density 500/550/580 g/L. Whole, decorticated, broken, cracked, ground.' },
        { label: 'Harvest', title: 'Season', body: 'Robusta Oct–Feb / export Mar–May. Cashew Feb–May / year-round processing. Pepper Feb–May main, Jul–Aug mini.' },
        { label: 'Cert', title: 'Standards', body: 'UTZ, RFA, 4C, Fairtrade, VietGAP, USDA NOP, EU 834, Fine Robusta, ISO 22000, BRC, FDA FSMA. Phu Quoc PDO.' },
        { label: 'Logistics', title: 'Port & transit', body: 'FOB Cat Lai / Cai Mep / HCMC / Hai Phong. To Türkiye Mersin/Ambarlı 30–35 d, EU 25–30 d. 60 kg jute (coffee), 22.68 kg carton (cashew), 25 kg PP (pepper).' },
        { label: 'Pricing', title: 'LIFFE + differential', body: 'Robusta: ICE Europe LIFFE Robusta + differential (G1 +$30/+50/t, G2 +$10/+30). Cashew: spot AFI Index. Pepper: spot VPA reference.' },
        { label: 'Continuity', title: 'Annual plan', body: 'Robusta ~130k t TR, plan 6 mo ahead for volume. Cashew ~35k t TR, 3 mo ahead. Pepper spot 30 d, annual 6 mo.' },
      ],
    },
    ar: {
      notes: [
        'تقارير USDA/FAS عن قهوة فيتنام تظهر هيمنة الروبوستا. ولذلك تكتب صفحة فيتنام حول الحجم والاستمرارية والملاءمة الإنتاجية.',
        'الكاجو والفلفل الأسود في الملف نفسه يجعلان فيتنام منشأ متعدد المنتجات لا قهوة فقط.',
        'فيتنام تنتج ١٦–١٨٪ من القهوة العالمية و٤٠٪+ من الروبوستا (الثاني عالمياً). ~١٣٠٫٠٠٠ طن سنوياً إلى تركيا. مرتفعات الوسط Dak Lak وLam Dong وGia Lai وDak Nong وKon Tum تحت ١٧٠٠ م.',
        'تصنيف الروبوستا: G1 18+ (≤٢٪ عيوب)، G2 16+ (≤٥٪)، G3 13+ (≤٨٪)، G4 (≤١٥٪، إنستانت). طبقات Wet-polished/Sortexed/Screen-cleaned تحدد السعر.',
        'الكاجو: ٥٠٪+ من تصدير العالم. AFI/CEPCI: W180 (ممتاز)، W210، W240، W320 (الأكثر شيوعاً صناعياً)، W450، W500. تركيا تستورد ٣٥٫٠٠٠+ طن سنوياً.',
        'الفلفل الأسود: Phu Quoc وChu Se وDak Lak؛ ASTA Black ٣٢–٣٤، بيبيرين ٤٫٥–٦٫٠٪. فيتنام ٣٥٪ من الإنتاج العالمي.',
      ],
      sections: [
        { label: 'روبوستا', title: 'العمود الفقري الصناعي', body: 'يوازن الروبوستا التكلفة والكافيين والقوام والاستمرارية للخلطات والإنستانت. كافيين ٢–٤٪، قوام كثيف. ٢٠–٤٠٪ في خلطات الإسبريسو لتعزيز الكريما.' },
        { label: 'Dak Lak', title: 'مركز الروبوستا', body: '٣٠٪ من إنتاج فيتنام؛ مدينة Buon Ma Thuot. ارتفاع ٥٠٠–٨٠٠ م، تربة بازلتية. G1 ممتاز للإنستانت والإسبريسو المختصة.' },
        { label: 'Lam Dong', title: 'روبوستا مرتفع', body: 'Da Lat وBao Loc، ٨٠٠–١٧٠٠ م. ارتفاع عالٍ للروبوستا، عطر أكثر تعقيداً. مصدر Fine Robusta.' },
        { label: 'Gia Lai وDak Nong', title: 'خط الحجم', body: 'مساحات إنتاج واسعة، G2/G3 commercial. ٢٠٠٫٠٠٠+ طن سنوياً.' },
        { label: 'Phan Rang', title: 'معايرة الكاجو', body: 'Ninh Thuan؛ AFI W180/W210/W240/W320/W450. كرتون مفرّغ ٢٢٫٦٨ كغ، رطوبة ٠–٤٪، حموضة ٤–٨٪.' },
        { label: 'Bin Phuoc', title: 'مركز معالجة الكاجو', body: '٤٠٪ من معالجة فيتنام. RCN يستورد من أفريقيا، يعالج هنا، يعاد تصديره.' },
        { label: 'Phu Quoc وChu Se', title: 'فلفل أسود', body: 'Phu Quoc PDO (٢٠١٧)، عطري معقد. Chu Se للحجم الصناعي.' },
        { label: 'حصاد', title: 'تقويم سنوي', body: 'روبوستا تشرين الأول–شباط. كاجو شباط–أيار. فلفل شباط–أيار رئيسي. عبور ٣٠–٣٥ يوماً Cat Lai/Cai Mep إلى تركيا.' },
        { label: 'شهادات', title: 'المعايير', body: 'UTZ، RFA، 4C، Fairtrade، VietGAP، USDA Organic، EU 834، Fine Robusta، ISO 22000، BRC، FDA.' },
      ],
      factSheet: [
        { label: 'مواصفة', title: 'روبوستا G1–G4', body: 'G1 Screen 18+ ≤٢٪؛ G2 16+ ≤٥٪؛ G3 13+ ≤٨٪؛ G4 ≤١٥٪. Cup ٧٠–٨٢.' },
        { label: 'مواصفة', title: 'درجات W الكاجو', body: 'W180 ٢٤٠ حبة/رطل، W210، W240، W320 (الأكثر شيوعاً)، W450، W500.' },
        { label: 'مواصفة', title: 'فلفل أسود', body: 'ASTA ٣٢–٣٤، بيبيرين ٤٫٥–٦٫٠٪، رطوبة ١٢–١٤٪، كثافة ٥٠٠/٥٥٠/٥٨٠ غ/لتر.' },
        { label: 'حصاد', title: 'موسم', body: 'روبوستا تشرين الأول–شباط. كاجو شباط–أيار. فلفل شباط–أيار + تموز–آب.' },
        { label: 'شهادات', title: 'المعايير', body: 'UTZ، RFA، 4C، Fairtrade، VietGAP، USDA NOP، EU 834، Fine Robusta. PDO Phu Quoc.' },
        { label: 'لوجستيات', title: 'ميناء وعبور', body: 'FOB Cat Lai/Cai Mep/HCMC/Hai Phong. تركيا ٣٠–٣٥ يوماً.' },
        { label: 'تسعير', title: 'LIFFE + فارق', body: 'روبوستا: ICE Europe LIFFE + فارق. كاجو: AFI. فلفل: VPA.' },
        { label: 'استمرارية', title: 'خطة سنوية', body: 'روبوستا ١٣٠ ألف طن، خطة ٦ أشهر. كاجو ٣٥ ألف، ٣ أشهر. فلفل فوري ٣٠ يوماً.' },
      ],
    },
  },
  'origins/ghana': {
    tr: {
      notes: [
        'Gana kakao dosyasında kalite yalnız “iyi kakao” ifadesiyle anlatılamaz. COCOBOD ve ICCO kaynaklarında vurgulandığı gibi fermentasyon, kurutma, yabancı madde, duman kokusu ve yağ profili çikolata üretimi için belirleyicidir.',
        'Kısmet için Gana; endüstriyel üretimde güvenilir performans, premium çikolata tarafında ise istikrarlı kakao karakteri anlamına gelir.',
        'Gana dünya kakao üretiminin %15-18’ini sağlar (Fildişi Sahili’nden sonra ikinci üretici, dünya kakao ihracatının %20’si). 800.000+ küçük üretici, ortalama çiftlik 1.5 hektar. Üretim tamamen COCOBOD (Ghana Cocoa Board) kontrolü altında — fiyat, kalite, sertifikasyon, ihracat tek elden yönetilir; bu, alıcı için izlenebilir ve standart bir kalite anlamına gelir.',
        'Çeşit: %95 Forastero (Amelonado/Comum), %5 Trinitario karışım. Aroma profili klasik Avrupa çikolatasının temelidir: derin koyu kakao, hafif kuru meyve notu, düşük asidite. Dünya endüstriyel çikolatasının (Mondelez, Nestlé, Mars) ana hammaddesi.',
        'Hasat takvimi: Main Crop (ana hasat) Ekim–Mart (üretimin %80’i), Light Crop Mayıs–Eylül (%20). Çift hasat sayesinde yıl boyu sevkiyat mümkün. Türkiye’ye varış 30–35 gün Tema veya Takoradi limanlarından.',
        'COCOBOD sınıflandırma: Grade I (≤3% kusur, premium), Grade II (4–10%, standart), SS (Substandard, %10+, bulk endüstriyel). Tüm partiler her sevkiyat öncesi COCOBOD denetiminden geçer; QCC (Quality Control Company) tarafından sertifikalanır.',
      ],
      sections: [
        { label: 'Fermentasyon', title: 'Aroma gelişimi', body: 'Fermentasyon (5–7 gün, 45–50°C) çikolata karakterinin temelidir. Eksik (≤4 gün): bitter, ekşi, asit. Aşırı (≥8 gün): tütsü, küf, sirke kokusu. Cut test ile %75+ kahverengi çekirdek = iyi fermentasyon. Polifenoller fermentasyon ile %50 azalır, aroma prekursorları gelişir.' },
        { label: 'Kurutma', title: 'Nem ve depolama', body: 'Güneş kurutması 7–10 gün; nem %7–8’e düşürülür (depolama için kritik). Aşırı kurutma: kabuk kırılganlığı, lezzet kaybı. Yetersiz kurutma: küf, OTA (Ochratoxin A) riski. Bambu hasır üzerinde, gece şecere altında saklanır. Bagajlama: 64 kg jüt çuval (PP astar).' },
        { label: 'Aroma profili', title: 'Klasik kakao', body: 'Gana kakao notları: derin çikolata, kahve, hafif kuru meyve (kuru üzüm, hurma), tütsü ipucu (kontrollü), düşük asidite. Bu profil endüstriyel üretim için “güvenli temel”; spesifik fonksiyonel çikolata üreticileri için tek başına kullanım veya Fildişi/Ekvador ile harman.' },
        { label: 'Yağ profili', title: '%52–56 yağ içeriği', body: 'Gana kakao çekirdeği yağ %52–56, dünyada ortalamanın üstü. Bu yüksek yağ; kakao yağı (cocoa butter) ekstraksiyonunda fire azalır, çikolata akışkanlık ve viscosity artar. Kakao kitlesi (mass), kakao yağı, kakao tozu üretimi için ekonomik.' },
        { label: 'Bölgeler', title: 'Ashanti, Western, Eastern', body: 'Ashanti (Kumasi): geleneksel ana bölge, derin profil. Western Region (Sefwi, Bibiani): üretim hacmi en yüksek %35, daha açık aroma. Eastern Region (Suhum, Koforidua): Avrupa pazarı için tarihsel hat. Brong-Ahafo, Volta, Central daha küçük katkı.' },
        { label: 'Bean count', title: 'Boy & sınıflandırma', body: 'Bean count = 100 g’daki çekirdek sayısı. Grade I: 90–100, daha iri ve homojen (premium çikolata). Grade II: 100–110 (standart). SS: 110+ (bulk). Türkiye ve AB premium üreticileri 90–100 hedefler.' },
        { label: 'Sertifika', title: 'Sürdürülebilirlik & izlenebilirlik', body: 'COCOBOD merkezi denetim + Fair Trade FLO + UTZ/Rainforest Alliance + Cocoa Life (Mondelez), Cocoa Plan (Nestlé) gibi kurumsal programlar. EU Deforestation Regulation (EUDR) Aralık 2024’ten itibaren tam izlenebilirlik şartı; Gana COCOBOD CMS sistemi bu uyumda lider.' },
        { label: 'Lojistik', title: 'Tema & Takoradi', body: 'Tema (ana export limanı, Accra’nın 25 km doğusu) %75+, Takoradi (batı, Western Region’dan) %25. 20’ DC: 18–20 ton (300 jüt çuval × 64 kg). Türkiye 30–35 gün Tema-Mersin/Ambarlı, AB 18–25 gün Tema-Antwerp/Hamburg.' },
        { label: 'Fiyat', title: 'NY/London + diferansiyel', body: 'ICE NY (USD/ton) ve LIFFE London (GBP/ton) vadeli kakao sözleşmeleri ana referans + Gana COCOBOD diferansiyeli (genelde main crop $50–150/ton premium, light crop $0–50). Kontrat aylık (Mar/May/Jul/Sep/Dec) ya da spot.' },
      ],
      factSheet: [
        { label: 'Spesifikasyon', title: 'Grade I, II, SS', body: 'Grade I: ≤3% slaty/moldy/insect, bean count 90–100/100 g, fermentasyon 75%+, premium. Grade II: 4–10% kusur, standart. SS: 10%+ kusur, bulk endüstriyel.' },
        { label: 'Spesifikasyon', title: 'Yağ & nem', body: 'Yağ %52–56 (dünya ort. %50–53). Nem %7–7.5 max. pH 5.0–5.5 (well fermented). Free fatty acid (FFA) <%1.75. Polifenol fermentasyon sonrası 50% azalır.' },
        { label: 'Aroma', title: 'Cut test & sensory', body: 'Cut test: 100 çekirdek kesilir, 75%+ kahverengi (well fermented), 15–20% mor (parsuc), <%5 slaty. Tasting: çikolata, kuru üzüm, hafif duman; istenmeyen: ekşi, peynir, küf.' },
        { label: 'Hasat', title: 'Çift hasat', body: 'Main Crop Eki–Mart (%80), Light Crop May–Eyl (%20). Yıl boyu sevkiyat mümkün, ancak main crop premium fiyat ve kalite. Türkiye sezon başı (Kas) numune talebi standart.' },
        { label: 'Sertifika', title: 'Standartlar', body: 'COCOBOD QCC, Fair Trade FLO, Rainforest Alliance/UTZ, Cocoa Life (Mondelez), Cocoa Plan (Nestlé), EU EUDR uyum, ISO 22000, BRC, Halal, Kosher, USDA Organik.' },
        { label: 'Lojistik', title: 'Liman & yükleme', body: 'Tema (Accra) %75+, Takoradi %25. 20’ DC: 18–20 t (300×64 kg jüt). Tema–Mersin 30–35 d, Tema–Antwerp 18–25 d. Bagajlama: 64 kg jüt + PP iç astar.' },
        { label: 'Fiyat', title: 'NY-K & LIFFE-C', body: 'ICE NY-K (USD/ton) + diferansiyel: main +$50–150, light +$0–50. LIFFE-C (GBP/ton) Avrupa için. Aylık vade Mar/May/Jul/Sep/Dec. COCOBOD günlük FOB referans.' },
        { label: 'Süreklilik', title: 'EUDR uyum', body: 'AB Aralık 2024’ten EUDR — orman tahrip etmeyen tedarik şartı. Gana CMS izlenebilirlik sistemi bu uyumda dünya lideri (geo-reference + farmer ID). Avrupa alıcılar için zorunlu.' },
      ],
    },
    en: {
      notes: [
        'Ghana cocoa quality cannot be described with “good cocoa” alone. COCOBOD and ICCO materials emphasize fermentation, drying, foreign matter, smoke taint and fat profile as decisive for chocolate production.',
        'For Kismet, Ghana means reliable industrial performance and stable cocoa character for premium chocolate.',
        'Ghana supplies 15–18% of world cocoa (#2 after Côte d’Ivoire, 20% of world cocoa exports). 800,000+ smallholders, average 1.5 ha. Production fully managed by COCOBOD (Ghana Cocoa Board) — price, quality, certification, export under one roof, meaning traceable, standardized quality for buyers.',
        'Variety: 95% Forastero (Amelonado/Comum), 5% Trinitario. Aroma profile is the foundation of European chocolate: deep dark cocoa, light dried-fruit note, low acidity. Backbone of industrial chocolate (Mondelez, Nestlé, Mars).',
        'Harvest calendar: Main Crop Oct–Mar (80%), Light Crop May–Sep (20%). Two harvests enable year-round shipment. 30–35 d transit Tema or Takoradi to Türkiye.',
        'COCOBOD grading: Grade I (≤3% defects, premium), Grade II (4–10%, standard), SS (Substandard, 10%+, industrial bulk). All lots audited pre-shipment by QCC (Quality Control Company).',
      ],
      sections: [
        { label: 'Fermentation', title: 'Aroma development', body: 'Fermentation (5–7 days, 45–50°C) is the foundation of chocolate character. Under (≤4 d): bitter, sour, acidic. Over (≥8 d): smoke, mould, vinegar. Cut test 75%+ brown beans = well fermented. Polyphenols drop 50%, aroma precursors develop.' },
        { label: 'Drying', title: 'Moisture & storage', body: 'Sun-drying 7–10 days; moisture brought to 7–8% (storage critical). Over-drying: shell brittleness, flavor loss. Under: mould, OTA (Ochratoxin A) risk. Bamboo mats by day, sheltered at night. 64 kg jute (PP liner).' },
        { label: 'Aroma profile', title: 'Classic cocoa', body: 'Ghana cocoa notes: deep chocolate, coffee, light dried fruit (raisin, date), trace controlled smoke, low acidity. “Safe baseline” for industrial production; for functional chocolate makers, used solo or blended with Côte d’Ivoire/Ecuador.' },
        { label: 'Fat profile', title: '52–56% fat content', body: 'Ghana cocoa nibs 52–56% fat, above world average. High fat: less yield loss in cocoa butter extraction, better flow and viscosity in chocolate. Economical for cocoa mass, butter, powder.' },
        { label: 'Regions', title: 'Ashanti, Western, Eastern', body: 'Ashanti (Kumasi): traditional core, deep profile. Western (Sefwi, Bibiani): largest production share 35%, lighter aroma. Eastern (Suhum, Koforidua): historical line for European market. Brong-Ahafo, Volta, Central smaller.' },
        { label: 'Bean count', title: 'Size grading', body: 'Bean count = beans per 100 g. Grade I: 90–100, larger and uniform (premium chocolate). Grade II: 100–110 (standard). SS: 110+. EU/Türkiye premium target 90–100.' },
        { label: 'Cert', title: 'Sustainability & traceability', body: 'COCOBOD central audit + Fair Trade FLO + UTZ/RFA + corporate (Cocoa Life by Mondelez, Cocoa Plan by Nestlé). EU Deforestation Regulation (EUDR) from Dec 2024 demands full traceability; Ghana COCOBOD CMS leads compliance.' },
        { label: 'Logistics', title: 'Tema & Takoradi', body: 'Tema (Accra +25 km east, main export port) 75%+, Takoradi (west) 25%. 20’ DC: 18–20 t (300 jute × 64 kg). Tema–Mersin/Ambarlı 30–35 d, Tema–Antwerp/Hamburg 18–25 d.' },
        { label: 'Pricing', title: 'NY-K & LIFFE-C', body: 'ICE NY-K (USD/t) + LIFFE-C (GBP/t) cocoa futures + COCOBOD differential (main crop $50–150 premium, light $0–50). Monthly contracts Mar/May/Jul/Sep/Dec.' },
      ],
      factSheet: [
        { label: 'Spec', title: 'Grade I, II, SS', body: 'Grade I: ≤3% slaty/moldy/insect, count 90–100/100 g, fermentation 75%+, premium. Grade II: 4–10%, standard. SS: 10%+, industrial bulk.' },
        { label: 'Spec', title: 'Fat & moisture', body: 'Fat 52–56% (world avg 50–53%). Moisture 7–7.5% max. pH 5.0–5.5 (well fermented). FFA <1.75%. Polyphenols drop 50% post-ferment.' },
        { label: 'Aroma', title: 'Cut test & sensory', body: 'Cut test: 100 beans cut, 75%+ brown (well fermented), 15–20% purple (parsuc), <5% slaty. Tasting: chocolate, raisin, light smoke; off: sour, cheesy, mould.' },
        { label: 'Harvest', title: 'Two crops', body: 'Main Oct–Mar (80%), Light May–Sep (20%). Year-round shipment; main crop premium price + quality. Türkiye samples requested at Nov season start.' },
        { label: 'Cert', title: 'Standards', body: 'COCOBOD QCC, Fair Trade FLO, RFA/UTZ, Cocoa Life (Mondelez), Cocoa Plan (Nestlé), EU EUDR, ISO 22000, BRC, Halal, Kosher, USDA Organic.' },
        { label: 'Logistics', title: 'Port & loading', body: 'Tema 75%+, Takoradi 25%. 20’ DC 18–20 t (300×64 kg jute). Tema–Mersin 30–35 d, Tema–Antwerp 18–25 d. 64 kg jute + PP inner liner.' },
        { label: 'Pricing', title: 'NY-K & LIFFE-C', body: 'ICE NY-K (USD/t) + differential: main +$50–150, light +$0–50. LIFFE-C (GBP/t) for EU. Monthly Mar/May/Jul/Sep/Dec. COCOBOD daily FOB reference.' },
        { label: 'Continuity', title: 'EUDR compliance', body: 'EU EUDR from Dec 2024 — non-deforestation supply mandatory. Ghana CMS traceability system (geo-reference + farmer ID) is the world leader. Mandatory for EU buyers.' },
      ],
    },
    ar: {
      notes: [
        'لا يمكن وصف جودة كاكاو غانا بـ"كاكاو جيد" فقط. مصادر COCOBOD وICCO تؤكد أن التخمير والتجفيف والشوائب وطعم الدخان وملف الدهون حاسمة.',
        'بالنسبة لكسمت تعني غانا أداء صناعياً موثوقاً وشخصية كاكاو مستقرة للشوكولاتة الفاخرة.',
        'تنتج غانا ١٥–١٨٪ من كاكاو العالم (الثاني بعد ساحل العاج). ٨٠٠٠٠٠+ مزارع صغير. الإنتاج كله تحت COCOBOD: السعر والجودة والشهادات والتصدير من جهة واحدة.',
        'الصنف: ٩٥٪ Forastero، ٥٪ Trinitario. ملف العطر هو أساس الشوكولاتة الأوروبية: كاكاو داكن، فاكهة مجففة خفيفة، حموضة منخفضة.',
        'حصاد: Main Oct–Mar (٨٠٪)، Light May–Sep (٢٠٪). شحن طوال السنة. عبور ٣٠–٣٥ يوماً Tema/Takoradi إلى تركيا.',
        'تصنيف COCOBOD: Grade I (≤٣٪ عيوب)، Grade II (٤–١٠٪)، SS (+١٠٪).',
      ],
      sections: [
        { label: 'تخمير', title: 'تطوير العطر', body: 'تخمير ٥–٧ أيام عند ٤٥–٥٠°م أساس الشوكولاتة. ناقص: مر حامض. زائد: دخان وعفن. Cut test ٧٥٪+ بني = جيد.' },
        { label: 'تجفيف', title: 'رطوبة وتخزين', body: 'تجفيف شمسي ٧–١٠ أيام إلى ٧–٨٪. تخزين بحصير الخيزران. ٦٤ كغ جوت + بطانة PP.' },
        { label: 'ملف العطر', title: 'كاكاو كلاسيكي', body: 'شوكولاتة عميقة، قهوة، فاكهة مجففة خفيفة، دخان مضبوط، حموضة منخفضة.' },
        { label: 'دهون', title: '٥٢–٥٦٪', body: 'فوق المتوسط العالمي. أقل فاقد في استخراج الزبدة، تدفق ولزوجة أفضل في الشوكولاتة.' },
        { label: 'مناطق', title: 'Ashanti, Western, Eastern', body: 'Ashanti أساس تقليدي. Western أكبر إنتاج ٣٥٪. Eastern تاريخي للسوق الأوروبي.' },
        { label: 'عدد الحبات', title: 'الحجم', body: 'Grade I 90–100/100 غ، Grade II 100–110، SS 110+.' },
        { label: 'شهادات', title: 'استدامة وتتبع', body: 'COCOBOD + Fair Trade + RFA/UTZ + Cocoa Life + Cocoa Plan + EUDR. CMS في الصدارة عالمياً.' },
        { label: 'لوجستيات', title: 'Tema وTakoradi', body: 'Tema ٧٥٪+، Takoradi ٢٥٪. حاوية ٢٠ قدم: ١٨–٢٠ طن. عبور إلى تركيا ٣٠–٣٥ يوماً.' },
        { label: 'تسعير', title: 'NY-K وLIFFE-C', body: 'ICE NY-K (USD/طن) + LIFFE-C (GBP/طن) + فارق COCOBOD. عقود شهرية.' },
      ],
      factSheet: [
        { label: 'مواصفة', title: 'Grade I/II/SS', body: 'Grade I ≤٣٪ عيوب، عدد ٩٠–١٠٠؛ Grade II ٤–١٠٪؛ SS ١٠٪+.' },
        { label: 'مواصفة', title: 'دهون ورطوبة', body: 'دهون ٥٢–٥٦٪، رطوبة ٧–٧٫٥٪، pH ٥٫٠–٥٫٥، FFA <١٫٧٥٪.' },
        { label: 'عطر', title: 'Cut test', body: '١٠٠ حبة تقطع، ٧٥٪+ بني، ١٥–٢٠٪ بنفسجي، <٥٪ slaty.' },
        { label: 'حصاد', title: 'حصادان', body: 'Main تشرين الأول–آذار (٨٠٪)، Light أيار–أيلول (٢٠٪).' },
        { label: 'شهادات', title: 'المعايير', body: 'COCOBOD QCC، Fair Trade، RFA/UTZ، Cocoa Life، Cocoa Plan، EUDR، ISO 22000، BRC، حلال، كوشير، USDA Organic.' },
        { label: 'لوجستيات', title: 'ميناء وتحميل', body: 'Tema ٧٥٪+، Takoradi ٢٥٪. حاوية ١٨–٢٠ طن (٣٠٠×٦٤ كغ جوت).' },
        { label: 'تسعير', title: 'NY-K وLIFFE-C', body: 'NY-K (USD) + LIFFE-C (GBP) + فارق Main +٥٠–١٥٠، Light +٠–٥٠. شهرية.' },
        { label: 'استمرارية', title: 'EUDR', body: 'EU EUDR منذ كانون الأول ٢٠٢٤: توريد بدون إزالة غابات. CMS الغانية رائدة.' },
      ],
    },
  },
  'sustainability/farmers': {
    tr: {
      notes: [
        'FAO sürdürülebilir gıda değer zinciri yaklaşımı, çiftçiyi yalnız üretim halkası olarak değil; gelir, bilgi, risk ve pazara erişim sistemi içinde ele alır. Bu nedenle Kısmet’in çiftçi anlatısı “yardım” diliyle değil, ticari olarak sürdürülebilir ortaklık diliyle kuruldu.',
        'Küçük üreticinin güçlenmesi; zamanında ödeme, doğru kalite primi, tarımsal eğitim, izlenebilirlik ve alıcıyla uzun vadeli talep görünürlüğü sayesinde gerçek olur.',
      ],
      sections: [
        { label: 'Gelir', title: 'Adil ve öngörülebilir ticaret', body: 'Çiftçi için en büyük sorunlardan biri belirsizliktir. Kısmet yaklaşımı, kalite beklentisini baştan netleştirip ticari ilişkiyi tek sezonluk fiyat pazarlığından çıkarır.' },
        { label: 'Bilgi', title: 'Kalite geri bildirimi', body: 'Nem, defekt, renk, fermentasyon veya kalibrasyon verisi üreticiye geri döndüğünde sonraki parti güçlenir. İzlenebilirlik yalnız alıcı için değil üretici için de öğrenme aracıdır.' },
        { label: 'Risk', title: 'Uzun vadeli ilişki', body: 'İklim, hasat ve navlun dalgalanması küçük üreticiyi doğrudan etkiler. Uzun vadeli alım ilişkisi bu riski daha yönetilebilir hale getirir.' },
      ],
    },
    en: {
      notes: [
        'FAO’s sustainable food value chain approach treats farmers not as a production link alone, but inside a system of income, knowledge, risk and market access.',
        'Smallholder empowerment becomes real through timely payment, quality premium, agronomic learning, traceability and long-term demand visibility.',
      ],
    },
  },
  'sustainability/planet': {
    tr: {
      notes: [
        'Gıda hammaddesi tedarikinde çevresel etki yalnız karbon hesabı değildir. Toprak sağlığı, su kullanımı, ambalaj, plastik azaltımı, navlun planlaması ve kayıp/atık yönetimi aynı sürdürülebilirlik dosyasında yer alır.',
        'Kısmet’in bu sayfası iddialı ama ölçümsüz “yeşil” dil yerine, ölçülebilir alanlar üzerinden kurgulandı: rota optimizasyonu, geri dönüştürülebilir ambalaj, parti planlama ve raporlanabilir hedefler.',
      ],
      sections: [
        { label: 'Karbon', title: 'Rota ve navlun', body: 'Daha verimli rota planlaması, konsolide sevkiyat ve doğru liman seçimi karbon etkisini düşürmenin ticari karşılığı olan alanlardır.' },
        { label: 'Ambalaj', title: 'Plastik azaltımı', body: 'Gıda güvenliğinden ödün vermeden daha az plastik, daha iyi torba yapısı ve geri dönüştürülebilir ambalaj seçenekleri değerlendirilir.' },
        { label: 'Kayıp', title: 'Fire ve atık yönetimi', body: 'Nem, ambalaj ve transit kontrolü yalnız kalite değil; gıda kaybını azaltma aracıdır.' },
      ],
    },
    en: {
      notes: [
        'Environmental impact in raw-food sourcing is not carbon accounting alone. Soil health, water use, packaging, plastic reduction, freight planning and food-loss control belong in the same sustainability file.',
        'This page is written around measurable areas rather than vague green language: route optimization, recyclable packing, batch planning and reportable targets.',
      ],
      sections: [
        { label: 'Carbon', title: 'Route and freight', body: 'Efficient routing, consolidated shipments and the right port choice are commercial levers for reducing carbon impact.' },
        { label: 'Packing', title: 'Plastic reduction', body: 'Lower plastic use, better sack structure and recyclable packing options are evaluated without compromising food safety.' },
        { label: 'Loss', title: 'Waste control', body: 'Moisture, packing and transit control are not only quality tools; they also reduce food loss.' },
      ],
    },
    ar: {
      notes: [
        'الأثر البيئي في توريد المواد الخام الغذائية ليس حساب كربون فقط. صحة التربة والمياه والتعبئة وتقليل البلاستيك والتخطيط اللوجستي وخفض الفاقد كلها في ملف واحد.',
        'تكتب هذه الصفحة بلغة قابلة للقياس: تحسين المسار، التعبئة القابلة للتدوير، تخطيط الدفعات وأهداف قابلة للتقرير.',
      ],
      sections: [
        { label: 'الكربون', title: 'المسار والشحن', body: 'تحسين المسار وتجميع الشحنات واختيار الميناء الصحيح أدوات تجارية لتقليل الأثر الكربوني.' },
        { label: 'التعبئة', title: 'تقليل البلاستيك', body: 'تقييم استخدام أقل للبلاستيك وبنية أكياس أفضل وخيارات قابلة للتدوير دون المساس بسلامة الغذاء.' },
        { label: 'الفاقد', title: 'إدارة الهدر', body: 'التحكم بالرطوبة والتعبئة والنقل أداة جودة وأداة لتقليل الفاقد الغذائي في الوقت نفسه.' },
      ],
    },
  },
  'sustainability/report': {
    tr: {
      notes: [
        'Rapor sayfası “PDF yakında” demekle bırakılmadı; yıllık ESG raporunun hangi başlıkları taşıyacağı şimdiden netleştirildi. Böylece ziyaretçi boş bir indirme alanı değil, ölçüm niyetini görür.',
        'Rapor; çiftçi erişimi, izlenebilir sevkiyat oranı, sertifikasyon kapsamı, ambalaj hedefleri ve rota/lojistik verimliliği gibi başlıklar etrafında gelişmelidir.',
      ],
      sections: [
        { label: '01', title: 'Çiftçi ve menşe', body: 'Kaç menşe, kaç partner, hangi ürün grubu ve hangi doğrulama düzeyiyle çalışıldığı yıllık olarak raporlanır.' },
        { label: '02', title: 'Kalite ve izlenebilirlik', body: 'Parti bazlı evrak oranı, analiz kapsamı, sertifika kullanımı ve kalite geri bildirim döngüsü izlenir.' },
        { label: '03', title: 'Çevresel hedefler', body: 'Ambalaj, plastik azaltımı, rota optimizasyonu ve sevkiyat verimliliği için ölçülebilir hedefler oluşturulur.' },
      ],
    },
    en: {
      notes: [
        'The report page is not left as a simple “PDF soon” placeholder. It now states what an annual ESG report should contain, so the visitor sees measurement intent before the downloadable asset exists.',
        'The report should grow around farmer reach, traceable shipment ratio, certification scope, packaging targets and route/logistics efficiency.',
      ],
      sections: [
        { label: '01', title: 'Farmers and origins', body: 'The number of origins, partners, product groups and verification levels are reported annually.' },
        { label: '02', title: 'Quality and traceability', body: 'Batch documentation rate, analysis scope, certification use and quality feedback cycle are tracked.' },
        { label: '03', title: 'Environmental targets', body: 'Measurable targets are built for packaging, plastic reduction, route optimization and shipment efficiency.' },
      ],
    },
    ar: {
      notes: [
        'لم تعد صفحة التقرير مجرد عبارة “PDF قريباً”. أصبحت توضّح ما يجب أن يحتويه تقرير ESG السنوي، ليرى الزائر نية القياس قبل وجود الملف.',
        'ينبغي أن ينمو التقرير حول وصول المزارعين، نسبة الشحنات القابلة للتتبع، نطاق الشهادات، أهداف التعبئة وكفاءة المسار واللوجستيات.',
      ],
      sections: [
        { label: '01', title: 'المزارعون والمناشئ', body: 'يتم الإبلاغ سنوياً عن عدد المناشئ والشركاء وفئات المنتجات ومستويات التحقق.' },
        { label: '02', title: 'الجودة والتتبع', body: 'تتم متابعة نسبة وثائق الدفعات ونطاق التحليل واستخدام الشهادات ودورة ملاحظات الجودة.' },
        { label: '03', title: 'أهداف بيئية', body: 'توضع أهداف قابلة للقياس للتعبئة وتقليل البلاستيك وتحسين المسار وكفاءة الشحن.' },
      ],
    },
  },
  'insights/market-reports': {
    tr: {
      notes: [
        'Market raporları alanı, kahve, kakao ve kuruyemiş gibi ana ürünlerde alıcının satın alma zamanlamasını desteklemek için düşünülür. Burada amaç finansal tavsiye vermek değil; menşe, hasat, navlun ve kalite sinyallerini ticari dille yorumlamaktır.',
        'Kahvede ICO/ITC, kakaoda ICCO, tarımsal ürünlerde FAO ve ülke raporları takip edilerek alıcıya “neden şimdi?” ve “hangi risk?” sorularında bağlam sağlanır.',
      ],
      sections: [
        { label: 'Kahve', title: 'Hasat ve stok sinyali', body: 'Brezilya, Vietnam, Kolombiya ve Etiyopya tarafındaki hasat beklentileri; fiyat ve tedarik sürekliliği için ayrı ayrı izlenir.' },
        { label: 'Kakao', title: 'Fermentasyon ve arz baskısı', body: 'Batı Afrika hasat koşulları, kalite ve lojistik akış; çikolata üreticisinin risk takvimini etkiler.' },
        { label: 'Kuruyemiş', title: 'Sezon ve kalibrasyon', body: 'Fındık, fıstık, kaju ve kuru meyvede ürün miktarı kadar kalibre ve kalite dağılımı önemlidir.' },
      ],
    },
    en: {
      notes: [
        'Market reports are designed to support buying timing for coffee, cocoa and nuts. The goal is not financial advice; it is commercial interpretation of origin, harvest, freight and quality signals.',
        'ICO/ITC for coffee, ICCO for cocoa, FAO and country reports for agricultural products provide context for “why now?” and “which risk?” questions.',
      ],
      sections: [
        { label: 'Coffee', title: 'Harvest and stock signal', body: 'Brazil, Vietnam, Colombia and Ethiopia harvest expectations are tracked separately for price and continuity context.' },
        { label: 'Cocoa', title: 'Fermentation and supply pressure', body: 'West African harvest conditions, quality and logistics flow affect the risk calendar of chocolate producers.' },
        { label: 'Nuts', title: 'Season and calibration', body: 'For hazelnut, pistachio, cashew and dried fruit, quality distribution and calibration matter as much as crop size.' },
      ],
    },
    ar: {
      notes: [
        'صممت تقارير السوق لدعم توقيت الشراء في القهوة والكاكاو والمكسرات. الهدف ليس نصيحة مالية؛ بل تفسير تجاري لإشارات المنشأ والحصاد والشحن والجودة.',
        'توفر مصادر مثل ICO/ITC للقهوة وICCO للكاكاو وFAO وتقارير الدول سياقاً لسؤالي “لماذا الآن؟” و“ما الخطر؟”.',
      ],
      sections: [
        { label: 'القهوة', title: 'إشارة الحصاد والمخزون', body: 'تتابع توقعات حصاد البرازيل وفيتنام وكولومبيا وإثيوبيا بشكل منفصل لسياق السعر والاستمرارية.' },
        { label: 'الكاكاو', title: 'التخمير وضغط العرض', body: 'تؤثر ظروف حصاد غرب أفريقيا والجودة وتدفق اللوجستيات في جدول مخاطر منتجي الشوكولاتة.' },
        { label: 'المكسرات', title: 'الموسم والمعايرة', body: 'في البندق والفستق والكاجو والفواكه المجففة، توزيع الجودة والمعايرة مهمان بقدر حجم المحصول.' },
      ],
    },
  },
  'insights/origin-stories': {
    tr: {
      notes: [
        'Origin Stories alanı blog kalabalığı için değil; haritadaki pin’lerin arkasındaki insan, ürün ve rota bilgisini okutmak için tasarlandı.',
        'Antep fıstığının Gaziantep’te, kayısının Malatya’da, kahvenin Yirgacheffe’de görünmesi; ziyaretçinin ticari haritayı sadece grafik değil gerçek dünya bağlantısı olarak algılamasını sağlar.',
      ],
      sections: [
        { label: 'Saha', title: 'Üretici notları', body: 'Hasat, kurutma, işleme ve yerel kalite dili sade ama somut saha notlarıyla anlatılır.' },
        { label: 'Ürün', title: 'Teknik karşılık', body: 'Her hikaye, ürünün alıcı tarafındaki kalite ve kullanım karşılığını da açıklar.' },
        { label: 'Rota', title: 'Lojistik hafıza', body: 'Menşeden limana, limandan alıcıya giden yol kısa harita notlarıyla desteklenir.' },
      ],
    },
    en: {
      notes: [
        'Origin Stories is not built for blog volume; it exists to reveal the people, product logic and route intelligence behind the map pins.',
        'Seeing pistachio in Gaziantep, apricot in Malatya and coffee in Yirgacheffe helps visitors read the trade map as a real-world connection, not just a graphic.',
      ],
      sections: [
        { label: 'Field', title: 'Producer notes', body: 'Harvest, drying, processing and local quality language are explained through concrete field notes.' },
        { label: 'Product', title: 'Technical meaning', body: 'Each story connects the origin narrative to quality and use on the buyer side.' },
        { label: 'Route', title: 'Logistics memory', body: 'The path from origin to port and from port to buyer is supported with short map notes.' },
      ],
    },
    ar: {
      notes: [
        'صفحة قصص المناشئ ليست للمدونات الكثيرة؛ بل لكشف الإنسان والمنطق المنتج وذكاء الطريق خلف دبابيس الخريطة.',
        'رؤية الفستق في غازي عنتاب والمشمش في ملاطية والقهوة في يرغاشيف تجعل الخريطة التجارية اتصالاً حقيقياً لا رسماً فقط.',
      ],
      sections: [
        { label: 'الميدان', title: 'ملاحظات المنتج', body: 'يشرح الحصاد والتجفيف والمعالجة ولغة الجودة المحلية عبر ملاحظات ميدانية ملموسة.' },
        { label: 'المنتج', title: 'المعنى التقني', body: 'تربط كل قصة سرد المنشأ بالجودة والاستخدام لدى المشتري.' },
        { label: 'المسار', title: 'ذاكرة لوجستية', body: 'يدعم الطريق من المنشأ إلى الميناء ومن الميناء إلى المشتري بملاحظات خريطة قصيرة.' },
      ],
    },
  },
  'about/heritage': {
    tr: {
      notes: [
        'Türkiye’nin coğrafi konumu yalnız bir harita detayı değil; gıda ticaretinin temel mimarisidir. İpek Yolu’nun batı ucu, Anadolu’nun ürün hafızası, Boğaz’ın deniz ticaret rolü ve Akdeniz’in Avrupa kapısı bir araya gelir.',
        'Antep fıstığı en az 3.500 yıldır bu coğrafyada; Hititler dönemi tabletlerinde bile geçer. Karadeniz fındığı M.Ö. 5. yüzyıldan beri Yunan ve Roma ticaretine konu olur. Malatya kayısısı 4. yüzyılda İpek Yolu kervanlarıyla Avrupa’ya taşınır. Bu derinlik bugünkü B2B kalite kültürünün arka planıdır.',
        'Osmanlı’dan Cumhuriyet’e ticari miras: Galata Bankerleri, İzmir Levantenleri ve İstanbul Ticaret Odası kuruluşu (1882) gıda ihracatının kurumsallaşmasına temel attı. 20. yüzyılda Türkiye fındık ihracatında dünya 1’incisi (>%70 küresel pay), kuru kayısıda 1’inci, kuru incirde 1’inci konumunu aldı.',
      ],
      sections: [
        { label: 'Antik dönem', title: 'İlk gıda yolları', body: 'M.Ö. 2000’lerden itibaren Anadolu, Mezopotamya, Mısır arasında bal, badem, fıstık, baharat ticareti. Hititler döneminde Antep platosunda fıstık yetiştiriciliği belgelenir.' },
        { label: 'İpek Yolu', title: 'Doğu-Batı kavşağı', body: 'M.Ö. 130’dan M.S. 14. yüzyıla kadar 7.000 km’lik ana arter Anadolu’dan geçer. Çin ipeği, Hint baharatı, Pers tahılı, Arap kahvesi tek koridorda. Bursa, Konya, Trabzon önemli durak.' },
        { label: 'Osmanlı', title: 'Hazine-i Hassa ticareti', body: '15.-19. yüzyıl Osmanlı’sında saray hammadde alımı (Hazine-i Hassa) ile özel ticari oda (Galata Bankerleri) paralel yapılar. İstanbul Cariye Camii civarındaki Mısır Çarşısı (1664) bugün hala baharat merkezi.' },
        { label: '1850 Avrupa', title: 'Çikolata sanayisi & fındık', body: 'İsviçre (Lindt 1845, Tobler 1867), İtalya (Caffarel 1826), Belçika çikolata sanayisi kurulurken Karadeniz fındığını ana hammadde olarak alır. Fındık yağı oranı (%62-65) çikolata performansı için ideal.' },
        { label: '1923 Cumhuriyet', title: 'İhracat altyapısı', body: 'Türkiye Cumhuriyeti kurulduktan sonra fındık (1936 Fiskobirlik), incir (1937 Tariş), kayısı (1973 Tarımsal Birlikler) kooperatifleşmesi ile küçük üreticiler küresel ihracatta organize olur.' },
        { label: '1980-2000', title: 'Modern ihracat', body: 'AB ile Gümrük Birliği (1996), Türkiye gıda ihracat hacmini 10 yılda 3 katına çıkarır. Antep fıstığı ABD ile rekabette dünya pazarının %20’sini alır; fındıkta %70+ pay korunur.' },
        { label: '2010-2020', title: 'Sertifikasyon dönemi', body: 'AB Coğrafi İşaret kayıtları: Antep fıstığı PDO (2021), Giresun fındığı PDO, Maraş pul biber CI, Urfa isot PDO. Bu sertifikalar Türkiye’nin terroir bilincini küresel kalite diline taşır.' },
        { label: '2020+', title: 'Dijital izlenebilirlik', body: 'Blockchain temelli izlenebilirlik (FoodTrust, Provenance), AB EUDR uyumu, geo-reference farmer ID sistemleri. İpek Yolu’nun fiziksel rotası bugün dijital tedarik zincirine evrildi.' },
        { label: 'Bugün', title: 'Kısmet rolü', body: 'Türkiye merkezli; Anadolu kuruyemiş ve baharat hattını Etiyopya kahve, Gana kakao, Vietnam robusta ile aynı portföyde sunan B2B küratör. 5.000 yıllık ticaret kavşağında modern bir editör masası.' },
      ],
    },
    en: {
      notes: [
        'Türkiye’s geography is not just a map detail; it is the founding architecture of food trade. The western tip of the Silk Road, Anatolian product memory, the Bosphorus maritime role and the Mediterranean European gateway converge.',
        'Antep pistachio has lived in this geography for 3,500+ years; even Hittite tablets mention it. Black Sea hazelnut entered Greek and Roman trade from the 5th century BC. Malatya apricot reached Europe via Silk Road caravans in the 4th century. This depth is the backdrop of today’s B2B quality culture.',
        'From Ottoman to Republic: Galata Bankers, Izmir Levantines and Istanbul Chamber of Commerce (1882) institutionalised food export. In the 20th century Türkiye became #1 globally in hazelnut (>70% share), #1 in dried apricot and #1 in dried fig.',
      ],
      sections: [
        { label: 'Antiquity', title: 'First food roads', body: 'From 2000 BC, honey, almond, pistachio, spice flowed between Anatolia, Mesopotamia and Egypt. Hittite-era pistachio cultivation in the Antep plateau is documented.' },
        { label: 'Silk Road', title: 'East-West junction', body: 'From 130 BC to the 14th century, the 7,000 km main artery crossed Anatolia. Chinese silk, Indian spice, Persian grain, Arab coffee in one corridor. Bursa, Konya, Trabzon were key stations.' },
        { label: 'Ottoman', title: 'Hazine-i Hassa trade', body: '15th–19th century. Imperial raw-material procurement (Hazine-i Hassa) ran in parallel with private commerce (Galata Bankers). The Egyptian Bazaar (1664) near Cariye Mosque is still the spice centre today.' },
        { label: '1850 Europe', title: 'Chocolate industry & hazelnut', body: 'As Swiss (Lindt 1845, Tobler 1867), Italian (Caffarel 1826) and Belgian chocolate industries were founded, Black Sea hazelnut became their primary raw material. 62–65% oil ideal for chocolate.' },
        { label: '1923 Republic', title: 'Export infrastructure', body: 'After the Republic: Fiskobirlik (1936) for hazelnut, Tariş (1937) for fig, Agricultural Unions (1973) for apricot. Smallholders gained organised global presence.' },
        { label: '1980–2000', title: 'Modern export', body: 'EU Customs Union (1996) tripled food export volume in 10 years. Antep pistachio captured 20% of the world against US competition; hazelnut share stayed 70%+.' },
        { label: '2010–2020', title: 'Certification era', body: 'EU PDO listings: Antep pistachio PDO (2021), Giresun hazelnut PDO, Maraş chilli GI, Urfa isot PDO. These translate Türkiye’s terroir consciousness into the global quality language.' },
        { label: '2020+', title: 'Digital traceability', body: 'Blockchain-based traceability (FoodTrust, Provenance), EU EUDR compliance, geo-reference farmer-ID. The Silk Road’s physical route evolved into a digital supply chain.' },
        { label: 'Today', title: 'Kismet role', body: 'Türkiye-based; an editor desk that places Anatolian nuts and spices in the same portfolio with Ethiopia coffee, Ghana cocoa, Vietnam robusta. A modern desk at a 5,000-year trade junction.' },
      ],
    },
    ar: {
      notes: [
        'جغرافيا تركيا ليست تفصيلاً خرائطياً؛ بل بنية تجارة الغذاء الأساسية. الطرف الغربي لطريق الحرير وذاكرة منتجات الأناضول ودور البوسفور البحري وبوابة المتوسط الأوروبية تلتقي.',
        'فستق عنتاب موجود هنا منذ ٣٥٠٠+ سنة؛ تذكره ألواح الحثيين. بندق البحر الأسود دخل التجارة اليونانية والرومانية من القرن الخامس قبل الميلاد. مشمش ملاطية وصل إلى أوروبا عبر قوافل طريق الحرير في القرن الرابع.',
        'من العثماني إلى الجمهورية: بنوك Galata وLevantines إزمير وغرفة تجارة إسطنبول (١٨٨٢) أسست لتنظيم الصادرات. في القرن العشرين أصبحت تركيا الأولى عالمياً في البندق (+٧٠٪) والمشمش المجفف والتين المجفف.',
      ],
      sections: [
        { label: 'العصور القديمة', title: 'أولى طرق الغذاء', body: 'منذ ٢٠٠٠ ق.م، تجارة العسل واللوز والفستق والتوابل بين الأناضول وبلاد الرافدين ومصر.' },
        { label: 'طريق الحرير', title: 'مفترق شرق-غرب', body: 'من ١٣٠ ق.م حتى القرن الرابع عشر، شريان ٧٠٠٠ كم عبر الأناضول. حرير صيني وتوابل هندية وقمح فارسي وقهوة عربية في ممر واحد.' },
        { label: 'العثماني', title: 'تجارة الخزينة', body: 'القرون ١٥–١٩. مشتريات السلطان (Hazine-i Hassa) متوازية مع التجارة الخاصة. السوق المصري (١٦٦٤) لا يزال مركزاً للتوابل.' },
        { label: '١٨٥٠ أوروبا', title: 'الشوكولاتة والبندق', body: 'تأسس Lindt (١٨٤٥) وTobler (١٨٦٧) وCaffarel (١٨٢٦) معتمدين على بندق البحر الأسود. زيت ٦٢–٦٥٪ مثالي للشوكولاتة.' },
        { label: '١٩٢٣ الجمهورية', title: 'بنية التصدير', body: 'بعد الجمهورية: Fiskobirlik (١٩٣٦) للبندق، Tariş (١٩٣٧) للتين، اتحادات زراعية (١٩٧٣) للمشمش.' },
        { label: '١٩٨٠–٢٠٠٠', title: 'تصدير حديث', body: 'الاتحاد الجمركي مع EU (١٩٩٦) ضاعف حجم التصدير ٣ مرات في ١٠ سنوات.' },
        { label: '٢٠١٠–٢٠٢٠', title: 'حقبة الشهادات', body: 'PDO من الاتحاد: فستق عنتاب (٢٠٢١)، بندق غيرسون، فلفل مرعش GI، إيسوت أورفا PDO.' },
        { label: '٢٠٢٠+', title: 'تتبع رقمي', body: 'تتبع بسلسلة الكتل (FoodTrust, Provenance)، امتثال EU EUDR، GPS + farmer ID.' },
        { label: 'اليوم', title: 'دور كسمت', body: 'مقرها تركيا؛ مكتب تحرير يجمع مكسرات وتوابل الأناضول مع قهوة إثيوبيا وكاكاو غانا وروبوستا فيتنام في محفظة واحدة.' },
      ],
    },
  },
  'contact/request-quote': {
    tr: {
      notes: [
        'Teklif formu doğrulanmış 4 alana dayanır: ürün, hacim, teslim ve süre. Bu 4 alan netleşmeden Kısmet ekibi ticari fiyat doğrulayamaz; bu nedenle form çoktan seçmeli + serbest metin + opsiyonel teknik spec dosyası ekleme yapısında.',
        'Tipik iletişim akışı: form gönderimi → otomatik tanıtma e-postası (5 dk) → ticari ekip ön değerlendirme (24 saat) → ön fiyat gösterim ya da numune sevki (3-5 iş günü) → resmi proforma fatura (1 hafta) → kontrat ve sevkiyat planı (3-4 hafta). EUDR uyum gereken AB sevkiyatlarında ek 2 hafta evrak hazırlık.',
        'KVKK ve GDPR uyumu: form verisi yalnız teklif değerlendirme amacıyla işlenir, 24 ay sonra anonimleştirilir veya silinir (KVKK md.4 amaca bağlılık ilkesi). Pazarlama amaçlı kullanım için ayrı açık rıza checkbox; varsayılan olarak pazarlama yok.',
      ],
      sections: [
        { label: 'Ürün', title: 'Kategori seçimi', body: 'Kahve (specialty Arabica, commercial robusta, instant), kakao (mass market, premium, specialty), kuruyemiş (bütün, kırık, öğütülmüş), baharat (whole, cracked, ground), endüstriyel hammadde (tahıl, bakliyat, yağlı tohum, yağ, şeker). Multi-kategori talep desteklenir.' },
        { label: 'Menşe', title: 'Tercih ve esneklik', body: 'Belirli menşe (Etiyopya Yirgacheffe), bölge (Karadeniz fındığı), veya “en uygun menşe” esnek talep. Spec değişmediyse Kısmet 2-3 alternatif menşe önerisi sunar.' },
        { label: 'Hacim', title: 'Numune-konteyner-yıllık', body: 'Numune (50-500 g, ücretsiz, 3-5 iş günü), trial konteyner (1 × 20’ DC), spot sipariş (3-5 konteyner), aylık tedarik (10+ konteyner/ay), yıllık (yıllık ton bazlı sözleşme). Hacim aralığı kontrat ve fiyat yapısını belirler.' },
        { label: 'Teslim', title: 'FOB, CIF, CFR, DDP', body: 'FOB: alıcı navlun + sigorta sorumluluğu (%5-8 daha ucuz). CIF: Kısmet navlun + sigorta. CFR: Kısmet navlun, alıcı sigorta. DDP: Kısmet kapıya kadar tek faturayla (KDV + gümrük dahil). Alıcının operasyonuna göre seçim.' },
        { label: 'Süre', title: 'Teslim takvimi', body: 'Spot: stoktan 7-15 gün. Trial: 3-4 hafta (numune onay + üretim + sevk). Aylık tedarik: ay-ay sevk takvimi. Yıllık: hasat takvimi + üretim ihtiyacı eşleşmesi. EUDR sevkiyatları +2 hafta evrak.' },
        { label: 'Spec', title: 'Teknik dosya', body: 'Müşterinin mevcut spec sheet’i varsa form ile yüklenebilir (PDF/XLS, max 10 MB). Yoksa Kısmet ekibi standart endüstri spec ile başlangıç önerir; sonra alıcı ihtiyacına göre kalibre eder.' },
        { label: 'KVKK & GDPR', title: 'Veri işleme', body: 'Form verisi: ad, e-posta, şirket, telefon, talep içeriği. İşleme amacı: yalnız teklif değerlendirme. Saklama: 24 ay (KVKK md.4 amaca bağlılık). Pazarlama: ayrı açık rıza, varsayılan kapalı. KVKK md.11 hakları (silme, düzeltme) için privacy@kismetfoods.com.' },
        { label: 'İletişim', title: 'Doğrudan masa', body: 'Form alternatifi: doğrudan e-posta commercial@kismetfoods.com (24 saat içinde dönüş). Acil sevkiyat: trade@kismetfoods.com. Kategori bazlı: coffee@, cocoa@, nuts@, spices@, ingredients@kismetfoods.com.' },
      ],
    },
    en: {
      notes: [
        'The quote form rests on 4 verified fields: product, volume, delivery and timing. Without these, the Kismet team cannot price commercially; the form combines multi-select + free text + optional technical spec attachment.',
        'Typical flow: form submission → automatic acknowledgement (5 min) → trade desk pre-assessment (24 h) → indicative price or sample shipment (3–5 working days) → formal pro-forma invoice (1 week) → contract + shipment plan (3–4 weeks). EUDR-bound EU shipments add 2 weeks of paperwork.',
        'KVKK + GDPR compliance: form data is processed only for quote evaluation, anonymised or deleted after 24 months (KVKK Art. 4 purpose-binding). Marketing requires separate explicit consent; off by default.',
      ],
      sections: [
        { label: 'Product', title: 'Category selection', body: 'Coffee (specialty Arabica, commercial robusta, instant), cocoa (mass, premium, specialty), nuts (whole, broken, ground), spices (whole, cracked, ground), industrial (grain, pulse, oilseed, oil, sugar). Multi-category supported.' },
        { label: 'Origin', title: 'Preference & flexibility', body: 'Specific origin (Ethiopia Yirgacheffe), region (Black Sea hazelnut), or “best fit”. If spec is fixed, Kismet proposes 2–3 alternative origins.' },
        { label: 'Volume', title: 'Sample-container-annual', body: 'Sample (50–500 g, free, 3–5 days), trial container (1 × 20’ DC), spot (3–5 containers), monthly (10+ containers/mo), annual (annual tonnage contract). Volume drives contract and price structure.' },
        { label: 'Delivery', title: 'FOB, CIF, CFR, DDP', body: 'FOB: buyer freight + insurance (5–8% cheaper). CIF: Kismet freight + insurance. CFR: Kismet freight, buyer insurance. DDP: Kismet door-to-door, single invoice (VAT + duty included). Choose to fit operations.' },
        { label: 'Timing', title: 'Delivery calendar', body: 'Spot: stock, 7–15 days. Trial: 3–4 weeks. Monthly: month-by-month schedule. Annual: harvest + production calendar matching. EUDR-bound +2 weeks paperwork.' },
        { label: 'Spec', title: 'Technical file', body: 'Existing buyer spec sheet uploadable (PDF/XLS, max 10 MB). Otherwise Kismet starts with industry standard, then calibrates.' },
        { label: 'KVKK & GDPR', title: 'Data processing', body: 'Data: name, email, company, phone, request content. Purpose: quote evaluation only. Retention: 24 months. Marketing: separate explicit consent, off by default. Rights via privacy@kismetfoods.com.' },
        { label: 'Contact', title: 'Direct desk', body: 'Form alternative: commercial@kismetfoods.com (24 h response). Urgent: trade@kismetfoods.com. Category: coffee@, cocoa@, nuts@, spices@, ingredients@kismetfoods.com.' },
      ],
    },
    ar: {
      notes: [
        'يستند نموذج طلب العرض إلى ٤ حقول مؤكدة: المنتج والحجم والتسليم والتوقيت. دون هذه لا يستطيع الفريق التسعير التجاري؛ النموذج اختيار متعدد + نص حر + مرفق مواصفات اختياري.',
        'التدفق النموذجي: إرسال النموذج → رد آلي (٥ دقائق) → تقييم أولي (٢٤ ساعة) → سعر إرشادي أو عينة (٣–٥ أيام) → فاتورة أولية (أسبوع) → عقد وخطة شحن (٣–٤ أسابيع). شحنات EUDR + أسبوعان للوثائق.',
        'امتثال KVKK + GDPR: البيانات تعالج لتقييم العرض فقط، تجهَّل أو تحذف بعد ٢٤ شهراً. التسويق يتطلب موافقة منفصلة، مغلقة افتراضياً.',
      ],
      sections: [
        { label: 'منتج', title: 'اختيار الفئة', body: 'قهوة (مختصة، تجارية، إنستانت)، كاكاو، مكسرات، توابل، مكونات صناعية. متعدد الفئات مدعوم.' },
        { label: 'منشأ', title: 'تفضيل ومرونة', body: 'منشأ محدد، أو منطقة، أو "الأنسب". إذا ثبتت المواصفة، تقترح كسمت ٢–٣ بدائل.' },
        { label: 'حجم', title: 'عينة-حاوية-سنوي', body: 'عينة (٥٠–٥٠٠ غ مجانية ٣–٥ أيام)، حاوية تجريبية، فوري (٣–٥ حاويات)، شهري (١٠+ حاويات)، سنوي (طن سنوياً).' },
        { label: 'تسليم', title: 'FOB, CIF, CFR, DDP', body: 'FOB: المشتري الشحن والتأمين (٥–٨٪ أرخص). CIF: كسمت الشحن + التأمين. CFR: شحن فقط. DDP: حتى الباب بفاتورة واحدة.' },
        { label: 'توقيت', title: 'تقويم تسليم', body: 'فوري ٧–١٥ يوماً. تجريبي ٣–٤ أسابيع. شهري حسب الجدول. سنوي مطابقة الحصاد والإنتاج. EUDR + أسبوعان.' },
        { label: 'مواصفة', title: 'ملف فني', body: 'ورقة مواصفات المشتري قابلة للرفع (PDF/XLS حتى ١٠ MB). وإلا تبدأ كسمت بمعيار الصناعة.' },
        { label: 'KVKK وGDPR', title: 'معالجة البيانات', body: 'الاسم والبريد والشركة والهاتف ومحتوى الطلب. الغرض: تقييم العرض فقط. الحفظ: ٢٤ شهراً. التسويق منفصل ومغلق افتراضياً.' },
        { label: 'تواصل', title: 'مكتب مباشر', body: 'بديل النموذج: commercial@kismetfoods.com (٢٤ ساعة). عاجل: trade@kismetfoods.com. حسب الفئة: coffee@, cocoa@, nuts@, spices@, ingredients@kismetfoods.com.' },
      ],
    },
  },
  'about/story': {
    tr: {
      notes: [
        'Kısmet Foods tek bir cümleyle anlatılırsa: 2010’ların gıda B2B alıcısı, “ucuz tedarikçi mi yoksa güvenilir küratör mü?” sorusunu sürekli sorar. Biz bu soruya, küratörlük yanıtıyla başladık.',
        'İstanbul’da; Anadolu hafızasını okuyan, küresel emtia masalarında yıllar geçirmiş bir ekiple kuruldu. Kahve Etiyopya’dan, kakao Gana’dan, fındık Karadeniz’den, kayısı Malatya’dan; her menşe için ayrı bir uzman, ayrı bir saha bilgisi.',
        'Bugün Kısmet, 5 kıtaya tedarik veren bir küratörlük masası. Avrupa’nın çikolata fabrikalarına Gana kakao, Orta Doğu’nun helva üreticilerine Antep fıstığı, Asya’nın kahve zincirlerine Etiyopya specialty hattı sevk eder.',
      ],
      sections: [
        { label: '2019', title: 'Kuruluş', body: 'İstanbul, Caddebostan; ofis bir ticari masa olarak değil, bir editör masası olarak kuruldu. İlk yılın sözü: "Yalnız yedek tedarikçi değiliz; bir hat sahibi olmak istiyoruz."' },
        { label: '2020', title: 'İlk yıl', body: 'Pandemi koşullarında ilk üç sevkiyat: Etiyopya Yirgacheffe, Antep fıstığı, Giresun fındığı. Üç farklı kıtaya, tek bir kalite dosyası ile.' },
        { label: '2021', title: 'Hat genişlemesi', body: 'Gana kakao ve Vietnam robusta hatları açıldı. Kakao Avrupa çikolata sanayisine, robusta Türkiye iç kahve pazarına yönelik tedarik başladı.' },
        { label: '2022', title: 'Specialty kahve', body: 'Kolombiya Huila ve Etiyopya Sidamo specialty mikrolot hatları kuruldu. Q-graded cup score 86+ partileri Türkiye specialty kavurucularına sevk edildi.' },
        { label: '2023', title: 'Endüstriyel hat', body: 'Konya buğday, Mendoza soya, Ukrayna ayçiçek yağı eklendi. Çikolata, sos, unlu mamul ve restoran zinciri B2B alıcılar için yıllık formula sözleşme yapıldı.' },
        { label: '2024', title: 'Üç dilli sayfa', body: 'TR + EN + AR içerik yapısı ve haritada 14 menşe pini ile B2B web altyapısı yenilendi. Avrupa, Orta Doğu ve Asya alıcıları aynı marka hikayesini kendi dilinde okudu.' },
        { label: '2025', title: 'EUDR uyum', body: 'EU Deforestation Regulation Aralık 2024’te yürürlüğe girince, Gana kakao ve Etiyopya kahve hatları geo-reference + farmer ID izlenebilirliğine geçirildi. AB alıcıları için kritik eşik aşıldı.' },
        { label: '2026', title: 'Bugün', body: '5 kıta, 14 menşe, 5 kategori. Yıllık Türkiye’ye 130k ton robusta, 35k ton kaju, 15k ton fıstık akışı. Hala İstanbul’dan; hâlâ küratörlük masası olarak.' },
      ],
    },
    en: {
      notes: [
        'In one line: a 2020s B2B food buyer keeps asking “cheap supplier or trusted curator?”. Kismet started by answering with curation.',
        'Founded in Istanbul with a team that reads Anatolian memory and has spent years on global commodity desks. Coffee from Ethiopia, cocoa from Ghana, hazelnut from Black Sea, apricot from Malatya — a specialist and field knowledge per origin.',
        'Today Kismet supplies 5 continents as a curator desk. Ghana cocoa to European chocolate plants, Antep pistachio to Middle Eastern halva producers, Ethiopia specialty to Asian coffee chains.',
      ],
      sections: [
        { label: '2019', title: 'Founding', body: 'Istanbul, Caddebostan; the office opened not as a trading desk but as an editor’s desk. First-year promise: "Not a backup supplier; we want to own a line."' },
        { label: '2020', title: 'First year', body: 'During pandemic conditions, three first shipments: Ethiopia Yirgacheffe, Antep pistachio, Giresun hazelnut. Three continents under one quality file.' },
        { label: '2021', title: 'Line expansion', body: 'Ghana cocoa and Vietnam robusta lines opened. Cocoa to EU chocolate industry, robusta to Türkiye domestic coffee market.' },
        { label: '2022', title: 'Specialty coffee', body: 'Colombia Huila and Ethiopia Sidamo specialty microlot lines built. Q-graded 86+ cup score parcels shipped to Türkiye specialty roasters.' },
        { label: '2023', title: 'Industrial line', body: 'Konya wheat, Mendoza soy, Ukraine sunflower oil added. Annual formula contracts opened with chocolate, sauce, bakery and restaurant chain B2B buyers.' },
        { label: '2024', title: 'Trilingual website', body: 'TR + EN + AR content with 14 origin pins on the map. EU, Middle East and Asia buyers read the same brand story in their own language.' },
        { label: '2025', title: 'EUDR compliance', body: 'When EU Deforestation Regulation took effect in Dec 2024, Ghana cocoa and Ethiopia coffee lines moved to geo-reference + farmer-ID traceability. Critical threshold cleared for EU buyers.' },
        { label: '2026', title: 'Today', body: '5 continents, 14 origins, 5 categories. Annual flows to Türkiye: 130k t robusta, 35k t cashew, 15k t pistachio. Still in Istanbul; still as a curator desk.' },
      ],
    },
    ar: {
      notes: [
        'في جملة واحدة: مشتري B2B في 2020 يسأل دائماً "هل هذا مورد رخيص أم منسّق موثوق؟" بدأنا بالإجابة الثانية.',
        'تأسست كسمت في إسطنبول بفريق يقرأ ذاكرة الأناضول وأمضى سنوات في مكاتب السلع العالمية. القهوة من إثيوبيا، الكاكاو من غانا، البندق من البحر الأسود، المشمش من ملاطية.',
        'اليوم تخدم كسمت ٥ قارات كمكتب منسّق. كاكاو غانا لمصانع الشوكولاتة الأوروبية، فستق عنتاب لمنتجي الحلاوة في الشرق الأوسط، إثيوبيا المختصة لسلاسل القهوة الآسيوية.',
      ],
      sections: [
        { label: '٢٠١٩', title: 'التأسيس', body: 'إسطنبول، كاديكوي؛ افتُتح المكتب لا كمكتب تداول بل كمكتب تحرير. وعد السنة الأولى: "لسنا مورّداً احتياطياً؛ نريد امتلاك خط."' },
        { label: '٢٠٢٠', title: 'السنة الأولى', body: 'في ظروف الجائحة، ثلاث شحنات أولى: إثيوبيا يرغاشيف، فستق عنتاب، بندق غيرسون. ثلاث قارات في ملف جودة واحد.' },
        { label: '٢٠٢١', title: 'توسع الخطوط', body: 'افتتاح خطي كاكاو غانا وروبوستا فيتنام. الكاكاو لصناعة الشوكولاتة الأوروبية، الروبوستا لسوق القهوة المحلي التركي.' },
        { label: '٢٠٢٢', title: 'القهوة المختصة', body: 'بناء خطي مايكرولوت كولومبيا هويلا وإثيوبيا سيدامو. شحنات Q-graded ٨٦+ إلى محمصات تركيا المختصة.' },
        { label: '٢٠٢٣', title: 'الخط الصناعي', body: 'إضافة قمح قونيا، صويا مندوزا، زيت دوار شمس أوكراني. عقود سنوية بصيغة مع مشتري شوكولاتة وصلصات ومخابز وسلاسل مطاعم.' },
        { label: '٢٠٢٤', title: 'موقع ثلاثي اللغات', body: 'محتوى TR + EN + AR مع ١٤ دبوس منشأ على الخريطة. مشترو أوروبا والشرق الأوسط وآسيا يقرؤون القصة نفسها بلغتهم.' },
        { label: '٢٠٢٥', title: 'امتثال EUDR', body: 'عند سريان لائحة EU في كانون الأول ٢٠٢٤، انتقلت خطوط كاكاو غانا وقهوة إثيوبيا إلى تتبع جغرافي + معرّف مزارع.' },
        { label: '٢٠٢٦', title: 'اليوم', body: '٥ قارات، ١٤ منشأ، ٥ فئات. تدفقات سنوية إلى تركيا: ١٣٠ ألف طن روبوستا، ٣٥ ألف طن كاجو، ١٥ ألف طن فستق. ما زلنا في إسطنبول، كمكتب منسّق.' },
      ],
    },
  },
  'about/team': {
    tr: {
      notes: [
        'Ekip yapısı küratörlük modelinin kendisidir: her menşe için bir uzman, her kategori için bir saha bilgisi, her sevkiyat için bir kalite dosyası. İstanbul ofisi merkezde, ihtiyaca göre saha — Etiyopya, Vietnam, Gana, Kolombiya — gezer ekiple desteklenir.',
        'Üst yönetim ve ticari masa toplam 12 kişi; lojistik, kalite kontrol ve operasyon birimi 18 kişi. 30 kişilik kurumsal yapı, küresel B2B tedarikin tüm kontrol noktalarını kapsayacak şekilde organize edildi.',
        'Saha ortakları: Etiyopya YCFCU, SCFCU; Vietnam Trung Nguyen ihracat ekibi; Gana COCOBOD QCC; Kolombiya FNC bölge temsilcileri. Bu yerel ortaklıklar; tedarik dosyasının evrak tarafının yanı sıra, hasat takvimi öncesi numune ve fiyat doğrulamasını da sağlar.',
      ],
      sections: [
        { label: 'Liderlik', title: 'Kurucu masa', body: 'CEO + CCO + COO; toplam 35+ yıl emtia ticareti tecrübesi (kahve, kakao, fındık, baharat). London Coffee Exchange, ICE Futures Europe, Türkiye Antrepo deneyimi bir araya geldi.' },
        { label: 'Trade desk', title: 'Kategori uzmanları', body: '5 kategori (kahve, kakao, kuruyemiş, baharat, endüstriyel) için ayrı portföy yöneticileri. Her uzman 2-3 menşeyi takip eder; pazar fiyatı, hasat takvimi, alıcı takip listesi günlük.' },
        { label: 'Kalite', title: 'QA & laboratuvar', body: 'İstanbul ofisinde duyusal değerlendirme odası (Q Grader sertifikalı 2 kişi). Kontrat ekstra lab analizleri için Eurofins (Hamburg) + SGS (Mersin) + Bureau Veritas (Antwerp) ortaklığı.' },
        { label: 'Operasyon', title: 'Lojistik & gümrük', body: 'FOB, CIF, CFR, DDP teslim akışlarını yöneten 6 kişilik ekip. MAERSK, MSC, COSCO, ZIM ile yıllık navlun sözleşmesi; gümrük müşaviri ortağı 3 ülkede (TR, NL, US).' },
        { label: 'Saha', title: 'Origin liaison', body: 'Etiyopya (Addis Ababa), Vietnam (Ho Chi Minh), Gana (Tema), Kolombiya (Bogotá) saha temsilcileri. Hasat dönemi ön-numune, kalite kontrol, kooperatif görüşmeleri lokal yapılır.' },
        { label: 'Sürdürülebilirlik', title: 'ESG & EUDR', body: 'AB EUDR uyum sorumlusu, Fair Trade & RFA sertifikasyon koordinatörü, çiftçi gelişim programı uzmanı. Yıllık ESG raporu, geo-reference izlenebilirlik bu ekibin sorumluluğunda.' },
        { label: 'Müşteri', title: 'Hesap yönetimi', body: 'Avrupa (Almanya, Hollanda, İtalya), Orta Doğu (BAE, Suudi Arabistan), Asya (Japonya, Güney Kore) bölge hesap yöneticileri. Tek temas noktası, çok dilli takip, 24 saat içinde dönüş.' },
        { label: 'Kültür', title: 'Çalışma şekli', body: '2-haftalık review döngüleri (kategori ve müşteri taraflı). Yıllık 2 kez saha ziyareti tüm ekip için. İstanbul’da fiziksel + remote hibrit, esnek saat ama düzenli kontrat takvimi.' },
      ],
    },
    en: {
      notes: [
        'The team structure IS the curator model: a specialist per origin, field knowledge per category, a quality file per shipment. Istanbul office at the centre, supported by mobile team for Ethiopia, Vietnam, Ghana, Colombia field work.',
        'Top management + trade desk total 12 people; logistics, QC and operations 18. The 30-person organisation is organised to cover every control point of global B2B sourcing.',
        'Field partners: YCFCU, SCFCU in Ethiopia; Trung Nguyen export team in Vietnam; COCOBOD QCC in Ghana; FNC regional reps in Colombia. These local partnerships ensure document side AND pre-harvest sample/price verification.',
      ],
      sections: [
        { label: 'Leadership', title: 'Founding desk', body: 'CEO + CCO + COO; combined 35+ years in commodity trading (coffee, cocoa, hazelnut, spice). London Coffee Exchange, ICE Futures Europe, Türkiye antrepo experience.' },
        { label: 'Trade desk', title: 'Category specialists', body: '5 categories (coffee, cocoa, nuts, spices, industrial), separate portfolio managers. Each specialist follows 2–3 origins; market price, harvest calendar, buyer follow-up daily.' },
        { label: 'Quality', title: 'QA & lab', body: 'In-house sensory room in Istanbul (2 Q Graders certified). Contract lab work via Eurofins (Hamburg), SGS (Mersin), Bureau Veritas (Antwerp).' },
        { label: 'Operations', title: 'Logistics & customs', body: '6-person team running FOB, CIF, CFR, DDP flows. Annual freight contracts with MAERSK, MSC, COSCO, ZIM; customs broker partners in TR, NL, US.' },
        { label: 'Field', title: 'Origin liaison', body: 'Ethiopia (Addis Ababa), Vietnam (Ho Chi Minh), Ghana (Tema), Colombia (Bogotá) reps. Harvest-time pre-sampling, QC, cooperative talks done locally.' },
        { label: 'Sustainability', title: 'ESG & EUDR', body: 'EU EUDR compliance lead, Fair Trade & RFA certification coordinator, farmer-development specialist. Annual ESG report and geo-traceability owned by this team.' },
        { label: 'Client', title: 'Account management', body: 'Regional account managers for Europe (DE, NL, IT), Middle East (UAE, SA), Asia (JP, KR). Single point of contact, multilingual, 24 h response.' },
        { label: 'Culture', title: 'How we work', body: '2-week review cycles (category and client side). Two field visits per year for the whole team. Istanbul hybrid (physical + remote), flexible hours, disciplined contract calendar.' },
      ],
    },
    ar: {
      notes: [
        'هيكل الفريق هو نموذج المنسّق: متخصص لكل منشأ، معرفة ميدانية لكل فئة، ملف جودة لكل شحنة. مكتب إسطنبول مركز، يدعمه فريق متنقل لإثيوبيا وفيتنام وغانا وكولومبيا.',
        'الإدارة العليا + مكتب التداول ١٢ شخصاً؛ اللوجستيات والجودة والعمليات ١٨. هيكل ٣٠ شخصاً منظم لتغطية كل نقاط التحكم في التوريد B2B العالمي.',
        'شركاء الميدان: YCFCU وSCFCU في إثيوبيا؛ Trung Nguyen في فيتنام؛ COCOBOD QCC في غانا؛ ممثلو FNC الإقليميون في كولومبيا.',
      ],
      sections: [
        { label: 'القيادة', title: 'مكتب التأسيس', body: 'CEO + CCO + COO؛ مجموع ٣٥+ سنة في تجارة السلع. خبرة London Coffee Exchange، ICE Futures Europe، أنتربو تركيا.' },
        { label: 'مكتب التداول', title: 'متخصصو الفئات', body: '٥ فئات، مديرو محفظة منفصلون. كل متخصص يتابع ٢–٣ مناشئ؛ سعر السوق، تقويم الحصاد، متابعة المشتري يومياً.' },
        { label: 'الجودة', title: 'QA ومختبر', body: 'غرفة تحليل حسي في إسطنبول (٢ Q Graders). تحليل خارجي عبر Eurofins (هامبورغ) وSGS (مرسين) وBV (أنتويرب).' },
        { label: 'عمليات', title: 'لوجستيات وجمارك', body: 'فريق ٦ أشخاص يدير FOB وCIF وCFR وDDP. عقود شحن سنوية مع MAERSK وMSC وCOSCO وZIM؛ مخلصو جمارك في TR وNL وUS.' },
        { label: 'ميدان', title: 'ربط المنشأ', body: 'ممثلون في أديس أبابا وHCMC وتيما وبوغوتا. أخذ عينات مسبقة وضبط جودة وحوار تعاونيات محلياً.' },
        { label: 'استدامة', title: 'ESG وEUDR', body: 'مسؤول EUDR، منسق شهادات Fair Trade وRFA، أخصائي تطوير المزارعين. تقرير ESG السنوي والتتبع الجغرافي ضمن مسؤوليتهم.' },
        { label: 'عميل', title: 'إدارة الحساب', body: 'مديرو حسابات إقليميون لأوروبا (DE/NL/IT)، الشرق الأوسط (UAE/SA)، آسيا (JP/KR). نقطة اتصال واحدة، متعدد اللغات، رد خلال ٢٤ ساعة.' },
        { label: 'الثقافة', title: 'طريقة العمل', body: 'دورات مراجعة كل أسبوعين (فئة وعميل). زيارتان ميدانيتان سنوياً للجميع. هجين فعلي + عن بُعد بإسطنبول، ساعات مرنة وتقويم عقود منضبط.' },
      ],
    },
  },
  'about/press': {
    tr: {
      notes: [
        'Basın sayfası kurumsal magazin değildir; alıcı, sektör analisti veya gazeteci için hazır bir başvuru noktasıdır. Logo, ürün görseli, üst yönetim portresi, kategori stat sheet, fiyat referans noktaları ve son sevkiyat ölçümleri burada toplanır.',
        'Kısmet Foods 2024 itibarıyla 5 yılını tamamlamış bir küratörlük masası; sektör basını için “Türkiye merkezli, Avrupa odaklı, küresel hatlı bir gıda B2B oyuncusu” konumundadır. Specialty kahve dergileri (SCAA Magazine, Daily Coffee News), kakao sanayi yayınları (Confectionery Production), kuruyemiş ve kuru meyve yayınları (Snack Food & Wholesale Bakery) ile düzenli iletişim halinde.',
        'Basın talepleri 24 saat içinde dönülecek şekilde merkezde işlenir. Ürün ve menşe sahası ziyareti talepleri 4 hafta önceden planlanır; saha temsilcileri eşliğinde Etiyopya (Yirgacheffe), Gana (Ashanti), Antep, Giresun, Malatya ziyaret programları organize edilebilir.',
      ],
      sections: [
        { label: 'Künye', title: 'Şirket bilgileri', body: 'Kısmet Foods Gıda Tedarik Yönetimi A.Ş., İstanbul/Caddebostan kurulmuş 2019. MERSIS no, vergi no ve ticaret sicil no media kit içinde sunulur. KEP adresi: kismetfoods@hs01.kep.tr.' },
        { label: 'Medya kit', title: 'Logo & görsel', body: 'PNG, SVG, EPS formatında resmi logolar (teal + orange varyant). Kurumsal renk kodları (Pantone, CMYK, RGB, Hex). 5 kategori için yüksek çözünürlüklü ürün görselleri (RAW + JPEG). Üst yönetim portreleri, ofis interyör.' },
        { label: 'Anahtar veri', title: 'Sektör istatistikleri', body: 'Yıllık tedarik hacmi (ton bazlı, kategori dağılımı), aktif menşe sayısı, müşteri ülke dağılımı, sertifikasyon kapsamı. Sektör analisti veya yazar için kullanıma hazır data sheet.' },
        { label: 'Liderlik', title: 'Yönetim portresi', body: 'CEO, CCO, COO için kısa biyografi (300 kelime), profesyonel portre fotoğrafı, LinkedIn linki. Konuşma talebi başlıkları: küratörlük modeli, Türkiye’nin Avrupa-Orta Doğu rolü, EUDR uyumu, specialty hat trendleri.' },
        { label: 'Bültenler', title: 'Basın bültenleri arşivi', body: 'Yıllık 4-6 resmi basın bülteni (yeni hat duyurusu, sertifikasyon, çiftçi programı, EUDR uyum, yıllık rapor). PDF + HTML format, 3 dilde (TR, EN, AR).' },
        { label: 'Sektör yorumu', title: 'Pazar analizi', body: 'Talep edildiğinde yazılı yorum (yarım sayfa, 24 saat) veya derinlikli analiz (sayfa, 1 hafta). Konular: kahve fiyat hareketleri, kakao fermentasyon trendleri, fındık hasat değerlendirmesi, EUDR etki analizi.' },
        { label: 'Saha ziyareti', title: 'Origin tour', body: '4 hafta önceden organize edilen menşe ziyaretleri. Etiyopya Yirgacheffe (Şub-Mar), Gana Ashanti (Eki-Kas), Antep (Eyl), Giresun (Ağu) ve Malatya (Tem) sezonal programlar. Ulaşım, konaklama, çiftçi görüşmesi dahil.' },
        { label: 'İletişim', title: 'Basın masası', body: 'press@kismetfoods.com (24 saat içinde dönüş). Kurumsal iletişim: communications@kismetfoods.com. Acil durumlarda Genel Müdür asistanı +90 (216) Caddebostan ofis.' },
      ],
    },
    en: {
      notes: [
        'The press page is not a corporate magazine; it is a ready entry point for buyers, sector analysts and journalists. Logos, product visuals, top-management portraits, category stat sheets, price reference points and recent shipment metrics live here.',
        'As of 2024 Kismet completed 5 years as a curator desk; for sector press it is positioned as “Türkiye-based, Europe-focused, globally connected food B2B player”. Regular dialogue with specialty coffee press (SCAA Magazine, Daily Coffee News), cocoa industry titles (Confectionery Production), nuts/dried fruit titles (Snack Food & Wholesale Bakery).',
        'Press requests are handled centrally within 24 hours. On-origin field visits are scheduled 4 weeks ahead; tours to Yirgacheffe, Ashanti, Antep, Giresun, Malatya can be arranged accompanied by field reps.',
      ],
      sections: [
        { label: 'Identity', title: 'Company info', body: 'Kismet Foods Gıda Tedarik Yönetimi A.Ş., Istanbul/Caddebostan, founded 2019. MERSIS, tax and trade registry numbers in the media kit. KEP: kismetfoods@hs01.kep.tr.' },
        { label: 'Media kit', title: 'Logo & visuals', body: 'PNG, SVG, EPS official logos (teal + orange variants). Corporate color codes (Pantone, CMYK, RGB, Hex). High-res category visuals (RAW + JPEG). Leadership portraits, office interior.' },
        { label: 'Key data', title: 'Sector stats', body: 'Annual supply volume (tonnes per category), active origins, customer country mix, certification scope. Ready-to-use data sheet for sector analysts and writers.' },
        { label: 'Leadership', title: 'Management portrait', body: 'CEO, CCO, COO short bio (300 words), professional portrait, LinkedIn. Speaking topics: curator model, Türkiye’s Europe-Middle East role, EUDR compliance, specialty trends.' },
        { label: 'Releases', title: 'Press release archive', body: '4–6 official releases per year (new line announcement, certification, farmer programme, EUDR compliance, annual report). PDF + HTML, 3 languages.' },
        { label: 'Comment', title: 'Market analysis', body: 'On request: written comment (half-page, 24 h) or deep analysis (full page, 1 week). Topics: coffee price moves, cocoa fermentation trends, hazelnut harvest review, EUDR impact.' },
        { label: 'Origin tour', title: 'Field visits', body: '4-weeks-ahead organised origin tours. Yirgacheffe (Feb–Mar), Ashanti (Oct–Nov), Antep (Sep), Giresun (Aug), Malatya (Jul). Travel, accommodation, farmer dialogue covered.' },
        { label: 'Contact', title: 'Press desk', body: 'press@kismetfoods.com (24 h response). Corporate: communications@kismetfoods.com. Urgent: GM assistant via Caddebostan office line.' },
      ],
    },
    ar: {
      notes: [
        'ليست صفحة الصحافة مجلة مؤسسية؛ بل نقطة دخول جاهزة للمشتري ومحلل القطاع والصحفي. الشعار، صور المنتجات، صور القيادة، أوراق إحصاءات الفئات، مراجع الأسعار، مقاييس آخر الشحنات.',
        'حتى ٢٠٢٤ أكملت كسمت ٥ سنوات كمكتب منسّق؛ للصحافة القطاعية تتموضع كـ"لاعب B2B غذائي مقره تركيا، يركز على أوروبا، ومتصل عالمياً". تواصل منتظم مع SCAA Magazine وDaily Coffee News وConfectionery Production وSnack Food & Wholesale Bakery.',
        'تعالج طلبات الصحافة مركزياً خلال ٢٤ ساعة. زيارات الميدان تنظّم قبل ٤ أسابيع؛ جولات في يرغاشيف وأشانتي وعنتاب وغيرسون وملاطية مع ممثلي الميدان.',
      ],
      sections: [
        { label: 'الهوية', title: 'معلومات الشركة', body: 'كسمت فودز Gıda Tedarik Yönetimi A.Ş.، إسطنبول/كاديكوي، تأسست ٢٠١٩. MERSIS والرقم الضريبي في media kit. KEP: kismetfoods@hs01.kep.tr.' },
        { label: 'media kit', title: 'الشعار والصور', body: 'PNG، SVG، EPS (teal وorange). أكواد ألوان مؤسسية (Pantone, CMYK, RGB, Hex). صور فئات RAW + JPEG. صور القيادة وداخلية المكتب.' },
        { label: 'بيانات', title: 'إحصاءات قطاعية', body: 'حجم التوريد السنوي (طن/فئة)، المناشئ النشطة، توزيع الدول، نطاق الشهادات. ورقة بيانات جاهزة للمحللين والكتّاب.' },
        { label: 'قيادة', title: 'صورة الإدارة', body: 'CEO وCCO وCOO سيرة موجزة (٣٠٠ كلمة)، صورة احترافية، LinkedIn. مواضيع الحديث: نموذج المنسّق، دور تركيا، امتثال EUDR، اتجاهات المختصة.' },
        { label: 'بيانات', title: 'أرشيف بيانات صحفية', body: '٤–٦ بيانات سنوية: خط جديد، شهادة، برنامج مزارعين، EUDR، تقرير سنوي. PDF + HTML بثلاث لغات.' },
        { label: 'تعليق', title: 'تحليل سوقي', body: 'تعليق مكتوب (نصف صفحة، ٢٤ ساعة) أو تحليل معمق (صفحة، أسبوع). تحركات أسعار القهوة، اتجاهات تخمير الكاكاو، تقييم حصاد البندق، أثر EUDR.' },
        { label: 'جولة', title: 'زيارات ميدانية', body: 'تنظَّم قبل ٤ أسابيع. يرغاشيف (شباط–آذار)، أشانتي (تشرين الأول–الثاني)، عنتاب (أيلول)، غيرسون (آب)، ملاطية (تموز).' },
        { label: 'تواصل', title: 'مكتب الصحافة', body: 'press@kismetfoods.com خلال ٢٤ ساعة. communications@kismetfoods.com للمؤسسي. للحالات الطارئة عبر مساعد المدير العام.' },
      ],
    },
  },
  'origins/partnerships': {
    tr: {
      notes: [
        'Yeni menşe eklemek; yeni ülke, yeni varyete veya yeni proses olabilir. Kısmet için bu, “tedarikçi listesini büyütmek” değil; çiftçi/kooperatif/ihracatçı/lojistik halkalarının kontrollü doğrulanmasıdır. Süreç ortalama 6–12 ay sürer.',
        'Yeni partnerlik kararının temelinde 4 nokta: (1) ürün ticari olarak Kısmet portföyüne anlamlı katkı yapıyor mu, (2) menşe iklimsel ve politik olarak öngörülebilir mi, (3) kalite ve evrak yapısı uluslararası standardı karşılıyor mu, (4) çiftçi/kooperatif tarafında etik ve sürdürülebilirlik şartları sağlanıyor mu.',
        'Saha doğrulaması için Kısmet ekibi en az 2 kez ziyaret yapar (ön-değerlendirme + hasat sezonu). Pilot sevkiyat 1-2 konteyner ile başlar; performans verisi 6 ay izlenir; ardından yıllık hacim sözleşmesine geçilir.',
      ],
      sections: [
        { label: '01', title: 'Saha doğrulama', body: 'Üretici, kooperatif veya ihracatçı geçmişi araştırılır. Kalite standardı geçmişi (3 yıl), ihracat lisansı, COCOBOD/FNC/ECX gibi resmi kayıt, Fair Trade/RFA/UTZ sertifika doğrulanır. Sertifikasız partner kabul edilmez.' },
        { label: '02', title: 'Numune & analiz', body: 'En az 3 farklı parti numunesi alınır; akredite lab analizi (mikotoksin, pestisit, ağır metal, mikrobiyoloji) yapılır. Kahve için 300-500 g cup test, kakao için 100 bean cut test, kuruyemiş için 1 kg fiziksel + lab test.' },
        { label: '03', title: 'Pilot sevkiyat', body: '1-2 konteynerlik pilot sevkiyat; tam ticari evrak (Phyto, CoO, sigorta, navlun) ile gerçek operasyon koşullarında test edilir. Lojistik performansı, ambalaj dayanıklılığı, transit sürede kalite kaybı ölçülür.' },
        { label: '04', title: 'Performans takibi', body: 'Pilot sonrası 6 ay aktif sevkiyat takibi: müşteri geri bildirimi, lab tutarlılığı, parti-bazlı kalite varyasyonu, fiyat-kalite dengesi. Bu sürede 3-5 ek sevkiyat planlanır.' },
        { label: '05', title: 'Yıllık sözleşme', body: '6 ay başarılı pilot sonrası yıllık hacim sözleşmesi; ay-ay split, fiyat fix veya formula (LME/MATIF/yerel referans). Çiftçi/kooperatif tarafına uzun vadeli alım taahhüdü yatırım planlamasını mümkün kılar.' },
        { label: 'Sürdürülebilirlik', title: 'Etik check', body: 'Partner kabul kriteri: çocuk işçiliği yok (ILO 138), zorla çalıştırma yok, hak ihlali yok. Mümkünse Fair Trade/RFA/UTZ sertifika; değilse Kısmet bağımsız ESG denetim mekanizması.' },
        { label: 'EUDR', title: 'Geo-traceability', body: 'AB EUDR uyum şartı; Aralık 2024 sonrası AB’ye giden tüm parti orman tahribatı yapılmamış arazi belgesi gerektirir. Yeni partner bu sistemde geo-reference sağlamalı (GPS koordinatı + farmer ID).' },
        { label: 'İletişim', title: 'Başvuru', body: 'Kooperatif veya ihracatçı başvurusu: partnerships@kismetfoods.com. İlk dönüş 1 hafta; sahaya numune gönderme planı 2 hafta. Türkiye partner ekibi 4 dilde iletişim (TR, EN, FR, AR).' },
      ],
    },
    en: {
      notes: [
        'Adding a new origin can be a new country, a new variety or a new process. For Kismet this is not “expanding the vendor list” but a controlled validation of farmer/cooperative/exporter/logistics links. Average cycle 6–12 months.',
        'The decision rests on 4 points: (1) does the product make commercial sense in the Kismet portfolio, (2) is the origin climatically and politically predictable, (3) does the quality + records structure meet international standards, (4) are ethical and sustainability conditions met on the farmer/cooperative side.',
        'Kismet team makes at least 2 field visits (pre-assessment + harvest). Pilot starts with 1–2 containers; performance is observed for 6 months before annual volume contract.',
      ],
      sections: [
        { label: '01', title: 'Field validation', body: 'Producer, cooperative or exporter background is researched. Quality history (3 years), export licence, COCOBOD/FNC/ECX registration, Fair Trade/RFA/UTZ certification verified. No cert, no partnership.' },
        { label: '02', title: 'Sample & analysis', body: 'At least 3 lot samples; accredited lab analysis (mycotoxin, pesticide, heavy metal, microbiology). Coffee: 300–500 g cup test. Cocoa: 100-bean cut. Nuts: 1 kg physical + lab.' },
        { label: '03', title: 'Pilot shipment', body: '1–2 container pilot with full commercial documents (Phyto, CoO, insurance, freight). Real-life operations test: logistics performance, packing durability, transit quality loss.' },
        { label: '04', title: 'Performance tracking', body: 'Active 6-month follow-up: customer feedback, lab consistency, batch-level variation, price-quality balance. 3–5 additional shipments scheduled.' },
        { label: '05', title: 'Annual contract', body: 'After successful 6-month pilot, annual volume contract; month-split, fixed or formula price (LME/MATIF/local reference). Long-term commitment on the farmer/cooperative side enables their planning.' },
        { label: 'Sustainability', title: 'Ethical check', body: 'No child labour (ILO 138), no forced labour, no rights violation. Fair Trade/RFA/UTZ where possible; otherwise Kismet independent ESG audit mechanism.' },
        { label: 'EUDR', title: 'Geo-traceability', body: 'EU EUDR compliance; from Dec 2024 every EU-bound lot needs deforestation-free land proof. New partners must provide geo-reference (GPS + farmer ID).' },
        { label: 'Contact', title: 'Application', body: 'Cooperative or exporter applications: partnerships@kismetfoods.com. First reply 1 week; sample-shipping plan 2 weeks. Türkiye partner team works in 4 languages (TR, EN, FR, AR).' },
      ],
    },
    ar: {
      notes: [
        'إضافة منشأ جديد قد تكون دولة جديدة أو صنفاً جديداً أو معالجة جديدة. لكسمت هذا ليس "توسيع قائمة موردين" بل تحقّقاً مضبوطاً من المزارع/التعاونية/المصدر/اللوجستيات. الدورة ٦–١٢ شهراً.',
        'القرار يستند إلى ٤ نقاط: (١) منطق تجاري في محفظة كسمت، (٢) منشأ مناخياً وسياسياً قابل للتنبؤ، (٣) جودة وسجلات بمستوى عالمي، (٤) شروط أخلاقية واستدامة في طرف المزارع/التعاونية.',
        'يقوم فريق كسمت بزيارتين ميدانيتين على الأقل (تقييم أولي + موسم الحصاد). تبدأ التجربة بحاوية أو حاويتين؛ يتابع الأداء ٦ أشهر قبل عقد الحجم السنوي.',
      ],
      sections: [
        { label: '٠١', title: 'تحقق ميداني', body: 'يبحث في خلفية المنتج/التعاونية/المصدر. تاريخ الجودة (٣ سنوات)، رخصة تصدير، تسجيل COCOBOD/FNC/ECX، شهادات Fair Trade/RFA/UTZ. بدون شهادة لا شراكة.' },
        { label: '٠٢', title: 'عينة وتحليل', body: '٣ عينات على الأقل؛ تحليل مختبري معتمد. قهوة: ٣٠٠–٥٠٠ غ Cup test. كاكاو: ١٠٠ حبة Cut test. مكسرات: ١ كغ فحص.' },
        { label: '٠٣', title: 'شحنة تجريبية', body: 'حاوية/حاويتان مع وثائق تجارية كاملة. اختبار حقيقي للأداء اللوجستي ومتانة التعبئة وفقد الجودة في العبور.' },
        { label: '٠٤', title: 'متابعة أداء', body: 'متابعة ٦ أشهر: ملاحظات العميل، اتساق المختبر، تباين بين الدفعات، توازن السعر/الجودة.' },
        { label: '٠٥', title: 'عقد سنوي', body: 'بعد ٦ أشهر تجريب ناجحة، عقد حجم سنوي؛ تقسيم شهري، سعر ثابت أو صيغة. التزام طويل الأمد للمزارعين والتعاونيات.' },
        { label: 'استدامة', title: 'فحص أخلاقي', body: 'لا عمل أطفال (ILO 138)، لا عمل قسري، لا انتهاكات حقوق. Fair Trade/RFA/UTZ حيث أمكن؛ أو تدقيق ESG مستقل.' },
        { label: 'EUDR', title: 'تتبع جغرافي', body: 'امتثال EU EUDR؛ منذ كانون الأول ٢٠٢٤ كل دفعة إلى الاتحاد تحتاج إثبات أرض خالية من إزالة الغابات. GPS + farmer ID مطلوبان.' },
        { label: 'تواصل', title: 'تقديم', body: 'partnerships@kismetfoods.com. الرد الأول ١ أسبوع، خطة عينات أسبوعان. الفريق يعمل بأربع لغات.' },
      ],
    },
  },
  'insights/news': {
    tr: {
      notes: [
        'News alanı kurumsal duyuruları, sektör gelişmelerini ve regülasyon güncellemelerini bir araya getirir. Pazarlama dili yerine bilgilendirici bir editör tonu hedeflenir; ne hızlı analiz (Market Reports orada) ne de saha hikayeleri (Origin Stories orada).',
        'Burada üç tip içerik yer alır: (1) Kısmet kurumsal duyuruları (yeni hat, yeni sertifikasyon, ofis genişlemesi), (2) Sektör regülasyon güncellemeleri (EUDR, FDA, KVKK güncel), (3) Pazar bağlamı (üretici raporları, ICCO/ICO açıklamaları, hasat değerlendirmeleri).',
        'Yıllık 12-15 haber yayını planlanır; aylık ortalama 1-2 kapsamlı yayın. Yayın takvimi düzenli ama sıkı değil — gerçek bir gelişme olduğunda yayınlanır, doldurma yapılmaz.',
      ],
      sections: [
        { label: 'Kurumsal', title: 'Şirket duyuruları', body: 'Yeni menşe hattı açılması, yeni sertifikasyon (BRC AA, ISO 22000 Tier 2), saha ofisi genişlemesi (Hanoi 2024, Bogotá 2025), yeni partner kooperatif. Yıllık ortalama 4-6 duyuru.' },
        { label: 'Regülasyon', title: 'AB & TR güncel', body: 'EU EUDR uygulama detayları, FDA FSMA Foreign Supplier Verification, AB Pestisit MRL güncellemeleri, Türkiye Gıda Kodeksi değişiklikleri. Yıllık 6-8 regülasyon yorumu.' },
        { label: 'Sektör', title: 'Pazar bağlamı', body: 'ICO yıllık kahve raporu, ICCO kakao tahmini, Vietnam Coffee & Cocoa Association kararları, FNC Kolombiya günlük diferansiyel, COCOBOD Gana yıllık fiyat anonsu. Bağlam analizi 8-12 haber.' },
        { label: 'Hasat', title: 'Sezon değerlendirmesi', body: 'Anadolu fındık (Ağu), Antep fıstığı (Eyl), Malatya kayısı (Tem), Etiyopya kahve (Eki), Gana kakao (Kas), Vietnam robusta (Şub). Her menşe için sezon başı ve sonu değerlendirmesi.' },
        { label: 'Etkinlik', title: 'Sektör fuarları', body: 'SCA World of Coffee (Avrupa, Yıllık Haziran), ISM Köln (Şubat), Anuga Köln (Ekim), Gulfood Dubai (Şubat), SIAL Paris (Ekim), Sigep Rimini (Ocak). Kısmet katılım ve ziyaret notları.' },
        { label: 'Sürdürülebilirlik', title: 'ESG güncel', body: 'Yıllık ESG raporu yayını (Şubat-Mart), çiftçi gelişim programı sayıları, EUDR uyum oranı, plastik azaltım hedefleri. Kurumsal sosyal sorumluluk ve çevresel etki yıllık ölçüm.' },
        { label: 'Operasyon', title: 'Lojistik & rota', body: 'Süveyş kanalı durumu, Avrupa liman yoğunluğu, ana rota navlun değişimi, Türkiye ihracat istatistikleri. B2B alıcı için kritik sevkiyat planlama bilgisi.' },
        { label: 'Arşiv', title: 'Yıllık özet', body: 'Yıl sonu (Aralık) önceki 12 ayın derli toplu özeti: en önemli 5 sektör hareketi, Kısmet için 5 milestone, gelecek yıl 5 öngörü. Alıcı için planlama referansı.' },
      ],
    },
    en: {
      notes: [
        'News brings together corporate announcements, sector developments and regulatory updates. The tone is informative editor — not the fast take of Market Reports nor the field narrative of Origin Stories.',
        'Three content types: (1) Kismet corporate announcements (new line, new certification, office expansion), (2) sector regulation updates (EUDR, FDA, KVKK), (3) market context (producer reports, ICCO/ICO statements, harvest reviews).',
        '12–15 publications per year; ~1–2 substantial pieces monthly. Calendar is regular but not forced — published when something real happens, not to fill space.',
      ],
      sections: [
        { label: 'Corporate', title: 'Company announcements', body: 'New origin line, new certification (BRC AA, ISO 22000 Tier 2), field office expansion (Hanoi 2024, Bogotá 2025), new partner cooperative. 4–6 announcements per year.' },
        { label: 'Regulation', title: 'EU & TR updates', body: 'EU EUDR implementation detail, FDA FSMA Foreign Supplier Verification, EU Pesticide MRL updates, Türkiye Food Codex changes. 6–8 regulation comments per year.' },
        { label: 'Sector', title: 'Market context', body: 'ICO annual coffee report, ICCO cocoa forecast, Vietnam Coffee & Cocoa Association decisions, FNC Colombia daily differential, COCOBOD Ghana annual price. 8–12 context pieces.' },
        { label: 'Harvest', title: 'Season reviews', body: 'Anatolian hazelnut (Aug), Antep pistachio (Sep), Malatya apricot (Jul), Ethiopia coffee (Oct), Ghana cocoa (Nov), Vietnam robusta (Feb). Pre/post season review per origin.' },
        { label: 'Events', title: 'Sector fairs', body: 'SCA World of Coffee (Europe, Jun), ISM Cologne (Feb), Anuga Cologne (Oct), Gulfood Dubai (Feb), SIAL Paris (Oct), Sigep Rimini (Jan). Kismet participation + visit notes.' },
        { label: 'Sustainability', title: 'ESG updates', body: 'Annual ESG report (Feb–Mar), farmer programme numbers, EUDR compliance rate, plastic reduction targets. Annual measurement of CSR and environmental impact.' },
        { label: 'Operations', title: 'Logistics & route', body: 'Suez Canal status, EU port congestion, main route freight changes, Türkiye export statistics. Critical shipment-planning info for B2B buyers.' },
        { label: 'Archive', title: 'Year-end summary', body: 'December: tidy summary of 12 months — 5 most important sector moves, 5 milestones for Kismet, 5 forecasts for next year. Planning reference for buyers.' },
      ],
    },
    ar: {
      notes: [
        'تجمع News الإعلانات المؤسسية وتطورات القطاع والتحديثات التنظيمية. النبرة محرر معلوماتي — لا تحليل سريع مثل Market Reports ولا حكايات ميدانية مثل Origin Stories.',
        'ثلاثة أنواع محتوى: (١) إعلانات مؤسسية، (٢) تحديثات تنظيمية، (٣) سياق سوق.',
        '١٢–١٥ نشراً سنوياً؛ ١–٢ شهرياً. التقويم منتظم لكن غير قسري.',
      ],
      sections: [
        { label: 'مؤسسي', title: 'إعلانات الشركة', body: 'خط منشأ جديد، شهادة جديدة، توسع مكتب ميداني، تعاونية شريك جديدة. ٤–٦ إعلانات سنوياً.' },
        { label: 'تنظيم', title: 'تحديثات EU وTR', body: 'تفاصيل تنفيذ EUDR، FDA FSMA، تحديثات MRL، تغييرات Codex التركي. ٦–٨ تعليقات سنوياً.' },
        { label: 'قطاع', title: 'سياق السوق', body: 'تقرير ICO السنوي للقهوة، توقعات ICCO للكاكاو، قرارات VCCA، فارق FNC اليومي، إعلان COCOBOD السنوي. ٨–١٢ قطعة.' },
        { label: 'حصاد', title: 'مراجعة الموسم', body: 'بندق الأناضول (آب)، فستق عنتاب (أيلول)، مشمش ملاطية (تموز)، قهوة إثيوبيا (تشرين الأول)، كاكاو غانا (تشرين الثاني)، روبوستا فيتنام (شباط).' },
        { label: 'فعاليات', title: 'معارض القطاع', body: 'SCA World of Coffee (حزيران)، ISM كولونيا (شباط)، Anuga (تشرين الأول)، Gulfood (شباط)، SIAL باريس (تشرين الأول)، Sigep ريميني (كانون الثاني).' },
        { label: 'استدامة', title: 'تحديثات ESG', body: 'تقرير ESG سنوي (شباط–آذار)، أرقام برامج المزارعين، معدل امتثال EUDR، أهداف تقليل البلاستيك.' },
        { label: 'عمليات', title: 'لوجستيات', body: 'حالة قناة السويس، ازدحام موانئ أوروبا، تغيرات شحن المسارات الرئيسية، إحصاءات تصدير تركيا.' },
        { label: 'أرشيف', title: 'ملخص نهاية السنة', body: 'كانون الأول: ملخص ١٢ شهراً — ٥ تحركات قطاعية أهم، ٥ معالم لكسمت، ٥ توقعات للسنة القادمة.' },
      ],
    },
  },
};

for (const page of detailPages) {
  const key = `${page.group}/${page.slug}`;
  const patch = enrichments[key];
  if (!patch) continue;
  for (const locale of locales) {
    Object.assign(page.content[locale], patch[locale]);
  }
}

function defaultNotes(page: DetailDefinition, locale: Locale): string[] {
  const copy = page.content[locale];
  const first = copy.sections[0];
  const second = copy.sections[1] ?? copy.sections[0];

  if (locale === 'tr') {
    return [
      `Bu sayfa, ${copy.parentLabel.toLowerCase()} başlığının kısa bir vitrin metni olmaktan çıkıp B2B alıcının karar sürecine temas eden bir bilgi dosyasına dönüşmesi için hazırlandı. ${first.title} konusu; ürün adı, menşe, evrak ve teslim yapısı birlikte okunmadan tamamlanmış sayılmaz.`,
      `Kısmet Foods yaklaşımında anlatı ile operasyon birbirinden ayrılmaz. ${second.title} başlığı altında verilen bilgiler, satın alma ekibinin kalite standardı, süreklilik, risk ve ticari uygulanabilirlik sorularına cevap üretmek için konumlanır.`,
      'Bu içerik katmanı ana sayfayı metinle ağırlaştırmadan derinlik sağlar: ziyaretçi ister hızlıca üst sayfaya döner, ister ilgili ürün, menşe veya süreç dosyasını okuyarak karar bağlamını genişletir.',
    ];
  }

  if (locale === 'en') {
    return [
      `This page turns the ${copy.parentLabel.toLowerCase()} heading from a short showcase into an information file that touches the B2B buying process. ${first.title} is not complete until product name, origin, records and delivery structure are read together.`,
      `In the Kismet Foods approach, narrative and operation are not separated. The information under ${second.title} is positioned to answer procurement questions around quality standard, continuity, risk and commercial feasibility.`,
      'This layer gives depth without overloading the parent page: visitors can return to the main section quickly or continue reading the relevant product, origin or process file.',
    ];
  }

  return [
    `تحوّل هذه الصفحة عنوان ${copy.parentLabel} من عرض قصير إلى ملف معلومات يلامس قرار الشراء B2B. لا يكتمل موضوع ${first.title} قبل قراءة اسم المنتج والمنشأ والوثائق وبنية التسليم معاً.`,
    `في نهج كسمت فودز، لا ينفصل السرد عن التشغيل. المعلومات تحت عنوان ${second.title} تجيب عن أسئلة الجودة والاستمرارية والمخاطر والقابلية التجارية.`,
    'تمنح هذه الطبقة عمقاً من دون إثقال الصفحة الأم؛ يستطيع الزائر العودة سريعاً أو مواصلة قراءة ملف المنتج أو المنشأ أو العملية.',
  ];
}

function defaultFactSheet(page: DetailDefinition, locale: Locale): DetailCopy['factSheet'] {
  const base: Record<Locale, Record<DetailGroup, NonNullable<DetailCopy['factSheet']>>> = {
    tr: {
      about: [
        { label: 'Kimlik', title: 'Küratör, tedarikçi değil', body: 'Kısmet Foods kendini katalog tedarikçisi olarak değil; menşe, kalite ve güveni seçip bir araya getiren B2B kürasyon masası olarak konumlar.' },
        { label: 'Miras', title: 'Türkiye merkezli bakış', body: 'İstanbul çıkışlı yapı, Anadolu ürün hafızasını küresel kahve, kakao, kuruyemiş ve baharat hatlarıyla aynı ticari dilde buluşturur.' },
        { label: 'Güven', title: 'Belge ve söz dengesi', body: 'Ticari ilişki yalnız fiyatla değil; evrak, numune, kalite standardı, teslim şekli ve uzun vadeli güvenle yönetilir.' },
        { label: 'Dil', title: 'Üç pazara açık iletişim', body: 'TR, EN ve AR içerik yapısı; Avrupa, Orta Doğu ve Asya’daki B2B alıcıların aynı marka hikayesini kendi dilinde okumasını sağlar.' },
      ],
      products: [
        { label: 'Spesifikasyon', title: 'Ürün adı yetmez', body: 'Kahve, kakao, fındık veya baharat; her ürün nem, kalibrasyon, defekt, parti, hasat yılı ve kullanım amacıyla birlikte okunur.' },
        { label: 'Menşe', title: 'Haritadaki karşılık', body: 'Antep fıstığı Antep’te, kayısı Malatya’da, kahve Etiyopya’da görünür. Bu detay, ürün anlatısını gerçek coğrafyaya bağlar.' },
        { label: 'Kalite', title: 'Analiz ve numune', body: 'B2B satın almada numune doğrulama, laboratuvar analizi, üçüncü taraf kontrol ve evrak akışı fiyat kadar belirleyicidir.' },
        { label: 'Teslim', title: 'FOB, CIF, CFR, DDP', body: 'Ürün portföyü ticari teslim şekliyle birlikte düşünülür; alıcı operasyonuna göre sigorta, gümrük ve navlun sorumluluğu netleşir.' },
      ],
      origins: [
        { label: 'Coğrafya', title: 'Ürün kendi yerinde okunur', body: 'Menşe sayfaları, ürünleri soyut bir liste olmaktan çıkarır; her ürünün iklim, işleme, kültür ve lojistik bağlamını görünür kılar.' },
        { label: 'Partner', title: 'Kaynak doğrulama', body: 'Yeni menşe önce üretici, kooperatif, ihracatçı, numune ve evrak düzeyinde doğrulanır; sonra hacme taşınır.' },
        { label: 'Risk', title: 'Hasat ve rota', body: 'İklim, hasat penceresi, liman yoğunluğu ve navlun; menşe kararının ticari risk tarafını belirler.' },
        { label: 'İzlenebilirlik', title: 'Parti hafızası', body: 'Her parti bir önceki partiyle karşılaştırılır. Amaç tek seferlik ürün bulmak değil, sürdürülebilir kalite ritmi kurmaktır.' },
      ],
      sustainability: [
        { label: 'Çiftçi', title: 'Gelir ve bilgi', body: 'Sürdürülebilirlik yalnız çevre başlığı değildir; küçük üreticinin gelir öngörüsü, kalite geri bildirimi ve pazara erişimiyle başlar.' },
        { label: 'Gezegen', title: 'Ölçülebilir hedef', body: 'Karbon, plastik, ambalaj, rota optimizasyonu ve fire azaltımı ölçülebilir hedeflere bağlandığında anlamlı olur.' },
        { label: 'Rapor', title: 'PDF’den önce metrik', body: 'Yıllık raporun değeri tasarımında değil; hangi veri setlerinin düzenli ölçüleceğinin netleşmesindedir.' },
        { label: 'Tedarik', title: 'Kalite kaybı da çevresel kayıptır', body: 'Nem, ambalaj ve transit kontrolü yalnız kaliteyi değil, gıda kaybını ve tekrar sevkiyat riskini de azaltır.' },
      ],
      insights: [
        { label: 'Piyasa', title: 'Fiyat değil bağlam', body: 'Rapor dili finansal tavsiye vermez; hasat, kalite, navlun ve menşe riskini satın alma kararına bağlar.' },
        { label: 'Kahve', title: 'ICO, ITC ve ülke raporları', body: 'Kahve tarafında üretim, stok ve iklim sinyalleri; tedarik zamanı ve kalite beklentisi için izlenir.' },
        { label: 'Kakao', title: 'ICCO ve Batı Afrika hattı', body: 'Kakao dosyasında fermentasyon, kurutma, arz baskısı ve kalite riski çikolata üreticisi için ana sinyallerdir.' },
        { label: 'Saha', title: 'Pin arkasındaki hikaye', body: 'Origin Stories, haritadaki pinleri gerçek üretici, ürün, proses ve rota bilgisine bağlamak için kullanılır.' },
      ],
      contact: [
        { label: 'Talep', title: 'Net brief', body: 'Teklif için ürün adı, menşe beklentisi, yıllık hacim, teslim şekli ve kalite standardı baştan belirtilmelidir.' },
        { label: 'KVKK', title: 'Açık rıza', body: 'Form akışında kişisel veri işleme amacı açıkça belirtilir; zorunlu olmayan pazarlama veya analitik yüklenmez.' },
        { label: 'Operasyon', title: 'Ön değerlendirme', body: 'Kısmet ekibi talebi yalnız fiyat olarak değil; uygulanabilir tedarik, numune, evrak ve teslim takvimi olarak değerlendirir.' },
        { label: 'Yanıt', title: 'Ticari bağlam', body: 'Doğru teklif; ürün, rota, sezon, stok ve ödeme/teslim yapısı birlikte netleştiğinde hazırlanır.' },
      ],
      legal: [
        { label: 'KVKK', title: 'Veri sorumlusu yaklaşımı', body: 'Yasal sayfalar, kullanıcı verisinin hangi amaçla işlendiğini ve hangi hakların kullanılabileceğini açıkça anlatmalıdır.' },
        { label: 'GDPR', title: 'Haklar ve rıza', body: 'Erişim, düzeltme, silme, itiraz ve taşınabilirlik gibi haklar; çerez ve form akışlarıyla tutarlı şekilde sunulur.' },
        { label: 'Saklama', title: 'Ticari kayıtlar', body: 'Ticari kayıt saklama süreleri, TTK ve VUK gibi mevzuat gereklilikleriyle birlikte değerlendirilir.' },
        { label: 'Yetki', title: 'İstanbul Anadolu', body: 'Uyuşmazlık yetkisi açık yazılarak B2B ilişkide hukuki çerçeve belirsiz bırakılmaz.' },
      ],
    },
    en: {
      about: [
        { label: 'Identity', title: 'Curator, not supplier', body: 'Kismet Foods is positioned as a B2B curation desk that brings origin, quality and trust together.' },
        { label: 'Heritage', title: 'Türkiye-based lens', body: 'The Istanbul base connects Anatolian product memory with global coffee, cocoa, nuts and spices.' },
        { label: 'Trust', title: 'Records and word', body: 'Commercial relationship is managed through documents, samples, quality standard, delivery term and long-term trust.' },
        { label: 'Language', title: 'Three market access', body: 'TR, EN and AR content lets buyers across Europe, the Middle East and Asia read the same brand story.' },
      ],
      products: [
        { label: 'Spec', title: 'Product name is not enough', body: 'Each product is read through moisture, calibration, defects, batch, crop year and application.' },
        { label: 'Origin', title: 'Geographic proof', body: 'Pistachio appears in Antep, apricot in Malatya, coffee in Ethiopia. The story is tied to real geography.' },
        { label: 'Quality', title: 'Analysis and sample', body: 'Sample verification, lab analysis, third-party control and records are as decisive as price.' },
        { label: 'Delivery', title: 'FOB, CIF, CFR, DDP', body: 'The portfolio is read with delivery terms so insurance, customs and freight responsibility are clear.' },
      ],
      origins: [
        { label: 'Geography', title: 'Product in its place', body: 'Origin pages make climate, processing, culture and logistics visible behind each product.' },
        { label: 'Partner', title: 'Source validation', body: 'New origins are validated through producer, cooperative, exporter, sample and records before volume.' },
        { label: 'Risk', title: 'Harvest and route', body: 'Climate, harvest window, port pressure and freight shape origin risk.' },
        { label: 'Traceability', title: 'Batch memory', body: 'Each lot is compared with the previous one. The goal is quality rhythm, not one lucky shipment.' },
      ],
      sustainability: [
        { label: 'Farmer', title: 'Income and knowledge', body: 'Sustainability begins with income visibility, feedback and market access for small producers.' },
        { label: 'Planet', title: 'Measurable target', body: 'Carbon, plastic, packing, route optimization and loss reduction matter when measured.' },
        { label: 'Report', title: 'Metrics before PDF', body: 'The annual report matters because it defines what will be measured regularly.' },
        { label: 'Supply', title: 'Quality loss is environmental loss', body: 'Moisture, packing and transit control reduce both quality failure and food loss.' },
      ],
      insights: [
        { label: 'Market', title: 'Context, not price call', body: 'Reports do not give financial advice; they connect harvest, quality, freight and origin risk to procurement.' },
        { label: 'Coffee', title: 'ICO, ITC and country reports', body: 'Production, stock and climate signals inform timing and quality expectations.' },
        { label: 'Cocoa', title: 'ICCO and West Africa', body: 'Fermentation, drying, supply pressure and quality risk are key signals for chocolate producers.' },
        { label: 'Field', title: 'Story behind the pin', body: 'Origin Stories connect each map pin with real product, producer, process and route context.' },
      ],
      contact: [
        { label: 'Inquiry', title: 'Clear brief', body: 'Quote requests need product, origin expectation, annual volume, delivery term and quality standard.' },
        { label: 'GDPR', title: 'Explicit consent', body: 'The form states why personal data is processed and keeps non-essential scripts off by default.' },
        { label: 'Operation', title: 'Pre-assessment', body: 'Kismet reads the request through sourcing feasibility, sample, records and delivery calendar.' },
        { label: 'Response', title: 'Commercial context', body: 'The right offer needs product, route, season, stock and payment/delivery structure together.' },
      ],
      legal: [
        { label: 'Privacy', title: 'Controller approach', body: 'Legal pages explain why data is processed and which rights can be exercised.' },
        { label: 'GDPR', title: 'Rights and consent', body: 'Access, rectification, deletion, objection and portability are aligned with cookies and forms.' },
        { label: 'Retention', title: 'Commercial records', body: 'Retention periods are evaluated with commercial-record obligations.' },
        { label: 'Jurisdiction', title: 'Istanbul Anatolian', body: 'The legal framework is left clear for B2B relationships.' },
      ],
    },
    ar: {
      about: [
        { label: 'الهوية', title: 'قيّم لا مورد', body: 'تتموضع كسمت كمكتب B2B يجمع المنشأ والجودة والثقة.' },
        { label: 'الإرث', title: 'منظور تركي', body: 'تربط قاعدة إسطنبول ذاكرة منتجات الأناضول بالقهوة والكاكاو والمكسرات والتوابل عالمياً.' },
        { label: 'الثقة', title: 'وثائق وكلمة', body: 'تدار العلاقة التجارية عبر الوثائق والعينات ومعيار الجودة وشروط التسليم والثقة الطويلة.' },
        { label: 'اللغة', title: 'ثلاثة أسواق', body: 'محتوى TR وEN وAR يتيح للمشترين قراءة القصة نفسها بلغتهم.' },
      ],
      products: [
        { label: 'المواصفة', title: 'اسم المنتج لا يكفي', body: 'يقرأ كل منتج عبر الرطوبة والمعايرة والعيوب والدفعة وسنة المحصول والاستخدام.' },
        { label: 'المنشأ', title: 'دليل جغرافي', body: 'الفستق في عنتاب والمشمش في ملاطية والقهوة في إثيوبيا؛ القصة مرتبطة بجغرافيا حقيقية.' },
        { label: 'الجودة', title: 'تحليل وعينة', body: 'العينة والتحليل والرقابة والوثائق عوامل حاسمة مثل السعر.' },
        { label: 'التسليم', title: 'FOB, CIF, CFR, DDP', body: 'تقرأ المحفظة مع شروط التسليم لتوضيح التأمين والجمارك والشحن.' },
      ],
      origins: [
        { label: 'الجغرافيا', title: 'المنتج في مكانه', body: 'تجعل صفحات المنشأ المناخ والمعالجة والثقافة واللوجستيات مرئية خلف المنتج.' },
        { label: 'الشريك', title: 'تحقق المصدر', body: 'تتحقق المناشئ الجديدة عبر المنتج والتعاونية والمصدر والعينة والوثائق قبل الحجم.' },
        { label: 'المخاطر', title: 'الحصاد والمسار', body: 'المناخ ونافذة الحصاد وضغط الموانئ والشحن تحدد مخاطر المنشأ.' },
        { label: 'التتبع', title: 'ذاكرة الدفعة', body: 'تقارن كل دفعة بما قبلها. الهدف إيقاع جودة مستمر لا شحنة جيدة واحدة.' },
      ],
      sustainability: [
        { label: 'المزارع', title: 'الدخل والمعرفة', body: 'تبدأ الاستدامة من وضوح الدخل والملاحظات والوصول إلى السوق للمنتجين الصغار.' },
        { label: 'الكوكب', title: 'هدف قابل للقياس', body: 'الكربون والبلاستيك والتعبئة والمسار والفاقد تصبح مهمة عندما تقاس.' },
        { label: 'التقرير', title: 'المؤشرات قبل PDF', body: 'قيمة التقرير أنه يحدد ما سيقاس بانتظام.' },
        { label: 'التوريد', title: 'فقدان الجودة فقدان بيئي', body: 'التحكم بالرطوبة والتعبئة والنقل يقلل فشل الجودة والفاقد الغذائي.' },
      ],
      insights: [
        { label: 'السوق', title: 'سياق لا توصية سعر', body: 'لا تقدم التقارير نصيحة مالية؛ بل تربط الحصاد والجودة والشحن ومخاطر المنشأ بالشراء.' },
        { label: 'القهوة', title: 'ICO وITC وتقارير الدول', body: 'إشارات الإنتاج والمخزون والمناخ تساعد على توقيت الشراء وتوقع الجودة.' },
        { label: 'الكاكاو', title: 'ICCO وغرب أفريقيا', body: 'التخمير والتجفيف وضغط العرض ومخاطر الجودة إشارات أساسية لمصنعي الشوكولاتة.' },
        { label: 'الميدان', title: 'القصة خلف الدبوس', body: 'تربط قصص المناشئ كل دبوس بمنتج ومنتج وعملية ومسار حقيقي.' },
      ],
      contact: [
        { label: 'الطلب', title: 'موجز واضح', body: 'يتطلب عرض السعر المنتج والمنشأ والحجم السنوي وشروط التسليم ومعيار الجودة.' },
        { label: 'GDPR', title: 'موافقة صريحة', body: 'يوضح النموذج سبب معالجة البيانات ويبقي السكربتات غير الضرورية مغلقة.' },
        { label: 'العملية', title: 'تقييم أولي', body: 'تقرأ كسمت الطلب عبر قابلية التوريد والعينة والوثائق وتقويم التسليم.' },
        { label: 'الرد', title: 'سياق تجاري', body: 'العرض الصحيح يحتاج المنتج والمسار والموسم والمخزون وهيكل الدفع والتسليم معاً.' },
      ],
      legal: [
        { label: 'الخصوصية', title: 'نهج مسؤول البيانات', body: 'تشرح الصفحات القانونية سبب معالجة البيانات والحقوق المتاحة.' },
        { label: 'GDPR', title: 'الحقوق والموافقة', body: 'تتوافق حقوق الوصول والتصحيح والحذف والاعتراض والنقل مع الكوكيز والنماذج.' },
        { label: 'الحفظ', title: 'السجلات التجارية', body: 'تقيّم مدد الحفظ مع التزامات السجلات التجارية.' },
        { label: 'الاختصاص', title: 'إسطنبول الأناضولية', body: 'يبقى الإطار القانوني واضحاً لعلاقات B2B.' },
      ],
    },
  };

  return base[locale][page.group];
}

for (const page of detailPages) {
  for (const locale of locales) {
    const copy = page.content[locale];
    const generatedNotes = defaultNotes(page, locale);
    copy.notes = copy.notes ? [...copy.notes, generatedNotes[2]] : generatedNotes;
    copy.factSheet = copy.factSheet ?? defaultFactSheet(page, locale);
  }
}

export function getDetailPages(group: DetailGroup): DetailDefinition[] {
  return detailPages.filter((page) => page.group === group);
}

export function getDetailPage(group: DetailGroup, slug: string): DetailDefinition | undefined {
  return detailPages.find((page) => page.group === group && page.slug === slug);
}

export function localizedDetailHref(page: DetailDefinition, locale: Locale): string {
  return localePath(`${page.parentPath}${page.slug}/`, locale);
}

export function detailStaticPaths(group: DetailGroup) {
  return getDetailPages(group).flatMap((page) =>
    locales.map((locale) => ({
      params: { locale, slug: page.slug },
      props: {
        locale,
        page: page.content[locale],
        pathname: localizedDetailHref(page, locale),
        parentPath: localePath(page.parentPath, locale),
      },
    })),
  );
}
