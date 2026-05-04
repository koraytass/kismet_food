/**
 * KISMET FOODS - Centralized Brand Configuration
 * ================================================
 * Single source of truth for all brand-related values.
 * Based on Kurumsal Kimlik Rehberi v5 (2026).
 *
 * This file feeds into:
 * - Tailwind CSS (@theme in global.css)
 * - JSON-LD structured data (schema.ts)
 * - Components (Layout, SEO, etc.)
 * - OG image generation (if needed)
 *
 * When updating brand values, update THIS file first,
 * then sync global.css @theme block if colors/fonts change.
 */

/**
 * Social media links. Add entries as they become available.
 * These feed into JSON-LD sameAs and footer components.
 */
const social: Record<string, string> = {};

export const brand = {
  name: 'Kismet Foods',
  legalName: 'Kismet Foods Gıda Tedarik Yönetimi A.Ş.',
  url: 'https://www.kismetfoods.com',
  email: null as string | null,
  phone: null as string | null,

  address: {
    street: 'Caddebostan Mah. Dr. Abdülkadir Noyan Sk No: 12/9',
    district: 'Kadıköy',
    city: 'İstanbul',
    postalCode: '34728',
    country: 'TR',
    countryName: 'Turkey',
  },

  social,

  categories: [
    { key: 'coffee', icon: 'coffee' },
    { key: 'nuts', icon: 'nuts' },
    { key: 'spices', icon: 'spices' },
    { key: 'ingredients', icon: 'ingredients' },
  ],
} as const;

/**
 * Brand Colors
 * CMYK values in comments for print reference.
 *
 * IMPORTANT: If you change these values, also update
 * the @theme block in src/styles/global.css to keep
 * Tailwind utility classes in sync.
 *
 * For opacity variants, use Tailwind modifiers in templates:
 *   bg-teal/70  bg-teal/40  bg-teal/20
 *   bg-orange/70  text-red/40  etc.
 */
export const colors = {
  teal: '#00acaf', // C:77 M:8 Y:35 K:0  | RGB: 0, 172, 175  | RAL: 160 70 50
  orange: '#f68b5c', // C:0 M:56 Y:68 K:0   | RGB: 246, 139, 92 | RAL: 1007
  red: '#ca2030', // C:14 M:100 Y:90 K:4  | RGB: 202, 32, 48  | RAL: 3027
  body: '#1a1a1a',
  surface: '#ffffff',
} as const;

/**
 * Brand Typography — REFERENCE ONLY.
 *
 * SINGLE SOURCE OF TRUTH = src/styles/global.css `@theme` block.
 * Components MUST consume fonts via the CSS variables / Tailwind classes:
 *   font-family: var(--font-sans)   →  font-sans  (Source Sans 3)
 *   font-family: var(--font-serif)  →  font-serif (Source Serif 4)
 *   Arabic auto-applied via [dir='rtl'] body in global.css
 *
 * The literal strings below are duplicated for any non-CSS context
 * (e.g. JSON-LD typography metadata, brand-guideline export).
 * Do NOT inline font-family strings inside components — use the tokens.
 *
 * Self-hosted via @fontsource-variable packages. See BaseLayout.astro.
 */
export const typography = {
  serif: "'Source Serif 4 Variable', 'Source Serif 4', 'Georgia', serif",
  sans: "'Source Sans 3 Variable', 'Source Sans 3', 'Helvetica Neue', 'Arial', sans-serif",
  arabic: "'Noto Sans Arabic Variable', 'Noto Sans Arabic', 'Source Sans 3 Variable', sans-serif",
} as const;

export type BrandColor = keyof typeof colors;
