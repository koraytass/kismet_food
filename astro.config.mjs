// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.kismetfoods.com',

  // NOTE: Under-construction redirects live only in vercel.json (with a
  // cookie-conditional bypass — `kismet_bypass=1`). Local `astro dev`
  // navigates the full site freely; the production gate is the edge layer.

  // SYNC: locale list must match src/i18n/locales.ts
  i18n: {
    defaultLocale: 'tr',
    locales: ['tr', 'en', 'ar'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'tr',
        locales: {
          tr: 'tr-TR',
          en: 'en-US',
          ar: 'ar-SA',
        },
      },
    }),
  ],
});
