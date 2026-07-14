# Dr. Geetanjali’s Dental Care · Implantology

Website for Dr. Geetanjali’s Dental Care, Wanwadi, Pune — built with [Astro](https://astro.build) (static output, zero client JS besides a small call-link fallback).

**Live site:** https://sastaachar.github.io/dr_geetanjali/

## Develop

```sh
npm install
npm run dev      # local dev server
npm run build    # static build to dist/
```

Clinic details (phone, address, hours, services, reviews) live in `src/data/clinic.ts`.
Deploys to GitHub Pages automatically on push to `main` (see `.github/workflows/deploy.yml`).

## Book an appointment form

The "Book an appointment" section includes a form backed by a Vercel serverless
function at `api/book-appointment.js`. On submit, it forwards the request as a
JSON payload to a notification webhook (e.g. a Slack incoming webhook) configured
via the `APPOINTMENTS_WEBHOOK_URL` environment variable — copy `.env.example` to
`.env` and set it for local testing with `vercel dev`.

Note: GitHub Pages only serves static files, so the API route only works when
this project is deployed on Vercel (`vercel.json` configures the static build
output). The GitHub Pages workflow keeps working for the static site, but the
form will show a network error there since there's no serverless runtime.
