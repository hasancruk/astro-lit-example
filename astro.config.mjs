import { defineConfig } from 'astro/config';
import lit from "@astrojs/lit";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [lit(), react()]
});