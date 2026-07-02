# Dr. Geetanjali’s Dental Care · Implantology

Website for Dr. Geetanjali’s Dental Care, Wanwadi, Pune — built with [Astro](https://astro.build) (static output, zero client JS besides a small call-link fallback).

## Develop

```sh
npm install
npm run dev      # local dev server
npm run build    # static build to dist/
```

Clinic details (phone, address, hours, services, reviews) live in `src/data/clinic.ts`.
Deploys to GitHub Pages automatically on push to `main` (see `.github/workflows/deploy.yml`).
