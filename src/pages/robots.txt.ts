import type { APIRoute } from "astro";

// Generated rather than kept in public/ so the sitemap URL always matches the
// `site` value in astro.config.mjs instead of drifting out of sync with it.
export const GET: APIRoute = ({ site }) => {
  const sitemap = new URL("sitemap-index.xml", site).href;

  const body = `# Dr. Geetanjali's Dental Care, Wanowrie (Wanwadi), Pune
# Everything on this site is public and meant to be indexed — including by the
# AI assistants people increasingly use to find a dentist.

User-agent: *
Allow: /

# Build output that search engines must be able to fetch to render pages.
Allow: /_astro/

# Astro's dev-only and build artefacts are never deployed, so nothing is
# disallowed here. Add rules above this line if that ever changes.

Sitemap: ${sitemap}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
