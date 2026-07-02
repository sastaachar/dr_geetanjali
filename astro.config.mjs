import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// GitHub Pages project site; adjust `site`/`base` when moving to a custom domain.
export default defineConfig({
  site: "https://sastaachar.github.io",
  base: "/dr_geetanjali",
  integrations: [sitemap()],
});
