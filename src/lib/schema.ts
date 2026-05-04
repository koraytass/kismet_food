/**
 * Structured Data (JSON-LD) helpers — optimized for:
 *   1. Search-engine understanding (Google rich results)
 *   2. LLM / AI answer-engine citation (ChatGPT, Perplexity, Claude)
 *
 * Expertise positioning is baked in: foundingDate, numberOfEmployees,
 * knowsAbout, areaServed, award, hasOfferCatalog — all signal
 * authority + longevity.
 *
 * Every page should include at minimum:
 *   - organizationSchema (identity)
 *   - webSiteSchema (site-level)
 *   - One page-type schema (WebPage, AboutPage, Product, Article, etc.)
 *   - breadcrumbSchema (navigation trail)
 */
import type { Locale } from '@/i18n';
import { t, locales, localeConfig } from '@/i18n';
import { brand } from './brand';

const languageNames: Record<Locale, string> = {
  tr: 'Turkish',
  en: 'English',
  ar: 'Arabic',
};

type JsonLd = Record<string, unknown>;

/**
 * Organization schema — used on every page.
 * Key expertise signals: foundingDate, knowsAbout, award, areaServed.
 */
export function organizationSchema(locale: Locale): JsonLd {
  const translations = t(locale);
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${brand.url}#organization`,
    name: translations.company.name,
    legalName: brand.legalName,
    url: brand.url,
    logo: `${brand.url}/logos/logo-full.svg`,
    image: `${brand.url}/logos/logo-teal.svg`,
    description: translations.meta.description,
    foundingDate: '2019',
    foundingLocation: {
      '@type': 'Place',
      name: 'İstanbul, Türkiye',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: brand.address.street,
      addressLocality: brand.address.district,
      addressRegion: brand.address.city,
      postalCode: brand.address.postalCode,
      addressCountry: brand.address.country,
    },
    areaServed: [
      { '@type': 'Place', name: 'European Union' },
      { '@type': 'Place', name: 'Middle East and North Africa' },
      { '@type': 'Place', name: 'North America' },
      { '@type': 'Place', name: 'Asia Pacific' },
    ],
    knowsAbout: [
      'Coffee sourcing',
      'Cocoa trading',
      'Tree nut supply',
      'Dried fruit export',
      'Spice and herb commodities',
      'Global food ingredient logistics',
      'Sustainable agriculture procurement',
      'Origin-direct sourcing',
      'Cold-chain and dry-bulk maritime shipping',
      'Fair Trade and organic certification',
    ],
    award: [
      'Member, Global Food Security Initiative',
      'ISO 9001 Quality Management',
      'Fair Trade Certified Partner',
    ],
    ...(Object.keys(brand.social).length > 0 && {
      sameAs: Object.values(brand.social),
    }),
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: 'trade@kismetfoods.com',
        availableLanguage: locales.map((l) => languageNames[l]),
        areaServed: 'Worldwide',
      },
      {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        availableLanguage: locales.map((l) => languageNames[l]),
      },
    ],
  };
}

/**
 * LocalBusiness — stronger for local SEO in Istanbul/Turkey queries.
 */
export function localBusinessSchema(locale: Locale): JsonLd {
  const translations = t(locale);
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${brand.url}#localbusiness`,
    name: translations.company.name,
    image: `${brand.url}/logos/logo-full.svg`,
    url: brand.url,
    address: {
      '@type': 'PostalAddress',
      streetAddress: brand.address.street,
      addressLocality: brand.address.district,
      addressRegion: brand.address.city,
      postalCode: brand.address.postalCode,
      addressCountry: brand.address.country,
    },
    priceRange: '$$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  };
}

/**
 * WebSite schema — enables Sitelinks Search Box in Google.
 */
export function webSiteSchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${brand.url}#website`,
    name: brand.name,
    url: brand.url,
    publisher: { '@id': `${brand.url}#organization` },
    inLanguage: locales.map((l) => localeConfig[l].hreflang),
  };
}

/**
 * WebPage schema — attach to every page with primary topic keywords.
 */
export function webPageSchema(params: {
  locale: Locale;
  url: string;
  title: string;
  description: string;
  keywords?: string[];
}): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${brand.url}${params.url}#webpage`,
    url: `${brand.url}${params.url}`,
    name: params.title,
    description: params.description,
    inLanguage: localeConfig[params.locale].hreflang,
    isPartOf: { '@id': `${brand.url}#website` },
    about: { '@id': `${brand.url}#organization` },
    ...(params.keywords && { keywords: params.keywords.join(', ') }),
  };
}

/**
 * AboutPage — for /about (signals to search engines this is the canonical company profile).
 */
export function aboutPageSchema(params: {
  locale: Locale;
  url: string;
  title: string;
  description: string;
}): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': `${brand.url}${params.url}#aboutpage`,
    url: `${brand.url}${params.url}`,
    name: params.title,
    description: params.description,
    mainEntity: { '@id': `${brand.url}#organization` },
    inLanguage: localeConfig[params.locale].hreflang,
  };
}

/**
 * CollectionPage — for catalog/products/origins index pages.
 */
export function collectionPageSchema(params: {
  locale: Locale;
  url: string;
  title: string;
  description: string;
  hasPart?: { name: string; url: string; image?: string }[];
}): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${brand.url}${params.url}#collectionpage`,
    url: `${brand.url}${params.url}`,
    name: params.title,
    description: params.description,
    inLanguage: localeConfig[params.locale].hreflang,
    ...(params.hasPart && {
      hasPart: params.hasPart.map((p) => ({
        '@type': 'WebPage',
        name: p.name,
        url: `${brand.url}${p.url}`,
        ...(p.image && { image: p.image }),
      })),
    }),
  };
}

/**
 * Product / category — use for individual commodity pages (Coffee, Cocoa, Nuts).
 */
export function productCategorySchema(params: {
  name: string;
  description: string;
  url: string;
  image?: string;
  category?: string;
  brandName?: string;
  origin?: string[];
}): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: params.name,
    description: params.description,
    url: `${brand.url}${params.url}`,
    ...(params.image && { image: params.image.startsWith('http') ? params.image : `${brand.url}${params.image}` }),
    ...(params.category && { category: params.category }),
    brand: {
      '@type': 'Brand',
      name: params.brandName ?? brand.name,
    },
    manufacturer: { '@id': `${brand.url}#organization` },
    ...(params.origin && {
      isRelatedTo: params.origin.map((o) => ({
        '@type': 'Place',
        name: o,
      })),
    }),
  };
}

/**
 * Article — for Insights blog posts / origin stories.
 */
export function articleSchema(params: {
  locale: Locale;
  url: string;
  headline: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  keywords?: string[];
  articleSection?: string;
}): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${brand.url}${params.url}#article`,
    mainEntityOfPage: { '@id': `${brand.url}${params.url}#webpage` },
    headline: params.headline,
    description: params.description,
    inLanguage: localeConfig[params.locale].hreflang,
    ...(params.image && { image: params.image.startsWith('http') ? params.image : `${brand.url}${params.image}` }),
    datePublished: params.datePublished,
    dateModified: params.dateModified ?? params.datePublished,
    author: {
      '@type': params.author ? 'Person' : 'Organization',
      name: params.author ?? brand.name,
    },
    publisher: { '@id': `${brand.url}#organization` },
    ...(params.keywords && { keywords: params.keywords.join(', ') }),
    ...(params.articleSection && { articleSection: params.articleSection }),
  };
}

/**
 * FAQPage — questions/answers render as rich results in Google.
 */
export function faqPageSchema(faqs: { question: string; answer: string }[]): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };
}

/**
 * BreadcrumbList — for page navigation trail.
 */
export function breadcrumbSchema(items: { name: string; url: string }[]): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${brand.url}${item.url}`,
    })),
  };
}

/**
 * ContactPage — signals to search engines contact info page.
 */
export function contactPageSchema(params: {
  locale: Locale;
  url: string;
  title: string;
  description: string;
}): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${brand.url}${params.url}#contactpage`,
    url: `${brand.url}${params.url}`,
    name: params.title,
    description: params.description,
    inLanguage: localeConfig[params.locale].hreflang,
    mainEntity: { '@id': `${brand.url}#organization` },
  };
}

/**
 * Service schema — position Kismet's business lines explicitly.
 */
export function serviceSchema(params: {
  name: string;
  description: string;
  url: string;
  serviceType: string;
  areaServed?: string[];
}): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: params.name,
    description: params.description,
    url: `${brand.url}${params.url}`,
    serviceType: params.serviceType,
    provider: { '@id': `${brand.url}#organization` },
    ...(params.areaServed && {
      areaServed: params.areaServed.map((a) => ({ '@type': 'Place', name: a })),
    }),
  };
}
