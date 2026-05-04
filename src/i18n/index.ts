import type { TranslationSchema } from './types';
import type { Locale } from './locales';
import tr from './tr';
import en from './en';
import ar from './ar';

const translations: Record<Locale, TranslationSchema> = { tr, en, ar };

/**
 * Get translation object for a given locale.
 */
export function t(locale: Locale): TranslationSchema {
  return translations[locale];
}

export type { TranslationSchema } from './types';
export {
  defaultLocale,
  locales,
  localeConfig,
  getLocaleFromPath,
  localePath,
  getAlternateLinks,
} from './locales';
export type { Locale } from './locales';
