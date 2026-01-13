import { defineConfig } from 'astro/config';
// import preact from '@astrojs/preact'; // Only add when needed

// https://astro.build/config
export default defineConfig({
  // integrations: [preact()], // Only uncomment if you need Preact
  site: 'https://yoursite.com',
  output: 'static',
  build: {
    format: 'directory',
  },
});
