# Evolve Psychological Services — evolutionpsych.com

Marketing site for Evolve Psychological Services (Dr. Sagan King, Psy.D.,
Cincinnati, OH), built with Next.js 15, React 19, TypeScript, and Tailwind CSS.
Designed for zero-config deployment on Vercel and structured so a CRM can be
added behind it without reworking the public site.

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS 3** with a custom parchment/forest/gold design system
- `next/font` (Fraunces + Inter), JSON-LD structured data, sitemap + robots

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Deploying to Vercel

1. Import this repository in Vercel (framework preset: **Next.js** — detected
   automatically; no extra configuration needed).
2. Optionally set the `CRM_WEBHOOK_URL` environment variable (see below).
3. Point the `evolutionpsych.com` domain at the Vercel project.

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Home — hero, services, approach, logistics |
| `/about` | Dr. King's background and approach |
| `/services/individual-therapy` | Therapy concerns, orientations, populations |
| `/services/psychological-testing` | Evaluation types and assessment process |
| `/services/consulting-speaking` | Presentations, audiences, forensic expertise |
| `/fees-insurance` | Insurance, session logistics, FAQ |
| `/contact` | Contact details + lead-capture form |

Redirects preserve the previous site's URLs (`/individual-therapy`,
`/testing`, `/presentations`).

## CRM readiness

The site already captures leads; the CRM plugs into one seam:

- **`components/ContactForm.tsx`** posts submissions to `POST /api/leads`
  (validated, honeypot-protected).
- **`app/api/leads/route.ts`** normalizes the payload into a typed `Lead`.
- **`lib/crm.ts`** is the adapter. Today it logs each lead (visible in
  Vercel function logs) and, when `CRM_WEBHOOK_URL` is set, forwards the JSON
  payload to that endpoint (Zapier, Make, HubSpot, or a custom collector).

To build the real CRM later: add a database (Vercel Postgres / Supabase /
Prisma), replace the body of `submitLead()` in `lib/crm.ts` with a write to
it, and build the admin surface under a protected route group — the public
site and form never need to change.

`lib/site.ts` is the single source of truth for practice details (address,
phone, hours, insurance, nav) used across pages, footer, and structured data.
