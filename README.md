# Dibs — Landing

Landing page for **Dibs**, the shared chore chart iPhone app (the `HouseholdTasks` Xcode
project). Built with Next.js (App Router), React 19, Tailwind CSS v4 and shadcn/ui, using
the same template as the Would You Rather landing site.

App Store metadata (name, subtitle, keywords, description, screenshot captions, Spanish
localizations) lives in [`ASO.md`](ASO.md).

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Set the production domain with
`NEXT_PUBLIC_SITE_URL=https://your-domain npm run build`.

## Scripts

| Script          | Description                  |
| --------------- | ---------------------------- |
| `npm run dev`   | Start the development server |
| `npm run build` | Create a production build    |
| `npm run start` | Serve the production build   |
| `npm run lint`  | Run ESLint                   |

## Structure

```
src/
  app/
    page.tsx              Home page, composes the sections below
    privacy/page.tsx      Privacy policy (iCloud, voice, no analytics)
    llms.txt/ llms-full.txt/  Plain-text briefs for AI assistants, built from site config
    opengraph-image.tsx   1200x630 share image (twitter-image re-exports it)
    sitemap.ts robots.ts manifest.ts icon.png apple-icon.png favicon.ico
    globals.css           Brand tokens, fonts and utilities
  components/
    navigation.tsx        Sticky nav with scroll + active-section tracking
    hero.tsx              Headline, CTAs and the playable phone
    task-demo.tsx         Interactive task list: call dibs, tick off, stamp card, mic (client)
    features.tsx          Feature grid
    voice.tsx             Voice examples
    categories.tsx        Kitchen, Bathroom, Laundry… with typical chores
    rewards.tsx           Points, stamp cards, rewards, awards, thanks
    made-for.tsx          Couples / Roommates / Families (#couples, #roommates, #families)
    how-it-works.tsx      Three steps
    faq.tsx               FAQ + FAQPage structured data
    download-cta.tsx      Dark call-to-action with stats
    footer.tsx            Footer
    phone-frame.tsx       Reusable phone bezel
    ui/                   shadcn/ui primitives
  lib/
    site.ts               Name, title, description, keywords, App Store URL/ID, facts
    seo.ts                Metadata + JSON-LD (Organization, WebSite, MobileApplication)
    faq.ts                FAQ answers (also used by llms-full.txt)
    llms.ts               llms.txt content
    demo.ts               Sample household for the hero demo
```

## SEO built in

- Keyword-led `<title>`, meta description, canonical, Open Graph + Twitter cards
- JSON-LD: Organization, WebSite, MobileApplication (`HomeApplication`), FAQPage
- `sitemap.xml`, `robots.txt` (AI crawlers allowed), `manifest.webmanifest`
- `llms.txt` / `llms-full.txt` generated from `site.ts`, so facts never drift
- Smart App Banner (`apple-itunes-app`) once `site.appStoreId` is set

## Placeholders to replace before launch

- `site.url` fallback (`https://getdibs.app`) — or set `NEXT_PUBLIC_SITE_URL`
- `site.appStoreUrl` and `site.appStoreId` once the listing is live
- `site.price` — the copy says "free" everywhere; change it if the app is paid
- `site.company` / `site.supportEmail` — currently Lulo and the Would You Rather address
- Add `aggregateRating` to the MobileApplication JSON-LD once there are real App Store ratings
- `src/app/privacy/page.tsx` needs a legal review

## Design tokens

Brand colors live in `@theme inline` in `src/app/globals.css`, drawn from the hand-drawn
house icon:

- `ink` — text, outlines and dark sections
- `paper` — warm background
- `sage` — done ticks, primary fills
- `butter` — points, stamps, highlights
- `tomato` — the "Dibs" button and CTAs
- `sky`, `lilac` — extra category accents

Fonts: Bricolage Grotesque (display), Inter (body), Caveat (handwritten notes).
