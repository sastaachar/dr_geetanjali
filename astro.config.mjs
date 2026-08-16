import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://drgeetanjali.com",
  integrations: [
    sitemap({
      // The homepage is the page we most want crawled; treatment pages are the
      // next tier, then blog posts. No lastmod — a build-time date on every URL
      // is a freshness signal we haven't earned.
      serialize(item) {
        const path = new URL(item.url).pathname;
        if (path === "/") {
          return { ...item, changefreq: "weekly", priority: 1.0 };
        }
        if (path.startsWith("/treatments/")) {
          return { ...item, changefreq: "monthly", priority: 0.8 };
        }
        return { ...item, changefreq: "monthly", priority: 0.6 };
      },
    }),
  ],
});
