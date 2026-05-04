export const defaultLocale = 'tr' as const;
export const locales = ['tr', 'en', 'ar'] as const;
export type Locale = (typeof locales)[number];

export const localeConfig: Record<Locale, { label: string; dir: 'ltr' | 'rtl'; hreflang: string }> =
  {
    tr: { label: 'Türkçe', dir: 'ltr', hreflang: 'tr-TR' },
    en: { label: 'English', dir: 'ltr', hreflang: 'en-US' },
    ar: { label: 'العربية', dir: 'rtl', hreflang: 'ar-SA' },
  };

/**
 * Extract the locale from a URL pathname.
 * e.g. "/en/about" → "en", "/tr/" → "tr", "/" → "tr"
 */
export function getLocaleFromPath(pathname: string): Locale {
  const segment = pathname.split('/').filter(Boolean)[0];
  if (segment && locales.includes(segment as Locale)) {
    return segment as Locale;
  }
  return defaultLocale;
}

/**
 * Build a localized path.
 * e.g. localePath('/about', 'en') → "/en/about"
 */
export function localePath(path: string, locale: Locale): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `/${locale}${cleanPath}`;
}

/**
 * Get alternate locale paths for hreflang tags.
 */
export function getAlternateLinks(path: string): { locale: Locale; href: string }[] {
  // Strip locale prefix to get the base path
  const segments = path.split('/').filter(Boolean);
  const basePath =
    segments.length > 0 && locales.includes(segments[0] as Locale)
      ? '/' + segments.slice(1).join('/')
      : path;

  return locales.map((locale) => ({
    locale,
    href: localePath(basePath, locale),
  }));
}
