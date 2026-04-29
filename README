# Evolve Psychological Services — Web

Next.js 14 (App Router) + Tailwind CSS. Deploys to Vercel out of the box.

## Pages in this first pass

- `/` — Homepage / index
- `/individual-therapy`
- `/testing`
- `/presentations`
- `/contact`

## Brand

Pulled directly from Dr. King's business card:

- **Background:** deep forest / teal — `#1a2620`
- **Accent:** brushed gold — `#b08c2e` → `#cba844`
- **Cream/text:** `#f5efe1`
- **Earth tones:** sage `#a8b89a`, bark `#5a3d2b`
- **Display type:** Cormorant Garamond (Google Fonts)
- **Body type:** Inter Tight

The logo mark is reproduced as inline SVG (`components/Logo.tsx`) — replace with the official asset when available.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel

1. Push this directory to a GitHub repo (e.g. `evolve-psychological-services`).
2. In Vercel: **Add New → Project → Import** the repo.
3. Framework preset auto-detects as **Next.js** — no config required.
4. Click **Deploy**.

Custom domain: in Vercel project settings → **Domains** → add `evolutionpsych.com` and `www.evolutionpsych.com` and follow the DNS instructions.

## Replacing placeholder content

- **Photos:** drop into `/public/` and reference from pages (e.g., a portrait on the homepage hero, an office photo on `/contact`).
- **Logo:** replace `components/Logo.tsx` with the production SVG/PNG export.
- **Booking link:** the Schedule button currently points at `https://sagan-king.clientsecure.me/`. Update if the practice moves portals.

## Notes for v2

- Add a real contact form (Vercel Form / Resend / Formspree).
- Add insurance and fees content once finalized.
- Add an FAQ section pulling from the directory listings (Psychology Today, Monarch).
- Swap the inline business-card SVG on the homepage for an actual photo of the printed card.
