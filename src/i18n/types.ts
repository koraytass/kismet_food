/**
 * Translation shape definition.
 * All locale files (tr.ts, en.ts, ar.ts) must satisfy this interface.
 * Adding a key here forces all locales to implement it — compile-time safety.
 */
export interface TranslationSchema {
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
  common: {
    languageName: string;
    comingSoon: string;
    underConstruction: string;
    underConstructionDesc: string;
    contactUs: string;
    address: string;
    phone: string;
    email: string;
    categories: string;
  };
  /* The five official Kismet product categories.
     Order is canonical: Coffee · Cocoa · Nuts · Spices · Industrial Food Ingredients.
     `ingredients` key kept for backward compatibility — same as `industrialIngredients`. */
  categories: {
    coffee: string;
    cocoa: string;
    nuts: string;
    spices: string;
    industrialIngredients: string;
    /** @deprecated alias of `industrialIngredients` */
    ingredients: string;
  };
  company: {
    name: string;
    tagline: string;
  };
  nav: {
    about: string;
    products: string;
    origins: string;
    supply: string;
    sustainability: string;
    insights: string;
    careers: string;
    contact: string;
    heritage: string;
    language: string;
    requestQuote: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    scroll: string;
  };
  portfolio: {
    eyebrow: string;
    headline: string;
    viewAll: string;
    coffee: {
      title: string;
      body: string;
      badge: string;
      cta: string;
    };
    cocoa: {
      title: string;
      body: string;
      badge: string;
      cta: string;
    };
    nuts: {
      title: string;
      body: string;
      badge: string;
      cta: string;
    };
    spices: {
      title: string;
      body: string;
      badge: string;
      cta: string;
    };
    industrialIngredients: {
      title: string;
      body: string;
      badge: string;
      cta: string;
    };
  };
  supply: {
    eyebrow: string;
    headline: string;
    body: string;
    statValue: string;
    statLabel: string;
    statNote: string;
    point1Title: string;
    point1Body: string;
    point2Title: string;
    point2Body: string;
  };
  sustainability: {
    eyebrow: string;
    headline: string;
    body: string;
    stat1Value: string;
    stat1Label: string;
    stat2Value: string;
    stat2Label: string;
    quote: string;
    quoteName: string;
    quoteRole: string;
  };
  quote: {
    headline: string;
    body: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    commodityLabel: string;
    quantityLabel: string;
    quantityPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submit: string;
  };
  footer: {
    tagline: string;
    quickLinksTitle: string;
    companyTitle: string;
    connectTitle: string;
    quickLinkOrigins: string;
    quickLinkCatalog: string;
    quickLinkQuality: string;
    quickLinkPartner: string;
    companyLinkSustainability: string;
    companyLinkCompliance: string;
    companyLinkPrivacy: string;
    companyLinkTerms: string;
    certBadge: string;
    copyright: string;
  };
}
