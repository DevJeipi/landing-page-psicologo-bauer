import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { site } from './src/data/site';

export default defineConfig({
  site: site.url,
  integrations: [tailwind({
    applyBaseStyles: false,
  })],
});
