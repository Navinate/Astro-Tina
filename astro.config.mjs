import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
// import preact from '@astrojs/preact'; // Only add when needed

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  // integrations: [mdx(), preact()], // Add preact() only if needed
  site: 'https://yoursite.com',
  output: 'static',
  build: {
    format: 'directory',
  },
});
