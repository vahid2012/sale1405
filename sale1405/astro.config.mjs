// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://sale1405.ir',
  output: 'static',
  adapter: vercel({}),
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'fa',
        locales: { fa: 'fa-IR' },
      },
    }),
  ],
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
});
