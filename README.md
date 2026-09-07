# EpiVerse Website

Marketing site for EpiVerse, built with Next.js (App Router) + TypeScript. Ported from the original static `epiverse-website.html` + SCSS build.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
src/
  app/                  Routing, metadata, root layout, global styles
    layout.tsx          Fonts, <head> metadata, JSON-LD, wraps every page in SiteProvider + chrome
    page.tsx            Assembles the homepage from components/sections
    globals.scss        Design tokens + all component styles (ported from scss/style.scss)

  components/
    layout/             Site chrome present on every page: Nav, MobileNav, Footer, WhatsAppButton, StickyCta
    modals/             DemoModal (the "book a demo" dialog)
    sections/           One file per homepage section, in page order (HeroSection, Faq, Pricing, ...)
    ui/                 Small reusable primitives: DemoButton, Reveal (scroll-in animation), CountUp,
                         FlipCard, icons.tsx (shared inline SVG icons)

  providers/
    SiteProvider.tsx    Client-side context for mobile menu + demo modal open/close/submit state

  data/                 Plain content — copy, lists, pricing, JSON-LD — kept separate from markup.
                         Edit these files to change site text without touching component code.
    nav.ts, contact.ts, faq.ts, pricing.ts, features.ts, india.ts, philosophy.ts,
    integrations.ts, footer.ts, howItWorks.ts, flipCards.ts, verticals.ts, demoModal.ts,
    schema.ts           JSON-LD structured data — the FAQPage schema is generated from data/faq.ts
                         so the structured data can never drift from what's visibly on the page.

public/
  assets/               Images (logo, hero/testimonial/CTA photos, favicon)
```

### Conventions

- **Barrel exports**: `components/layout`, `components/sections`, `components/ui`, and `components/modals`
  each have an `index.ts` re-exporting their contents, so pages import like
  `import { HeroSection, Faq } from '@/components/sections'`.
- **Server vs client components**: most section components are plain server components. Only the pieces
  that need interactivity or browser APIs are marked `'use client'` — `SiteProvider`, `Reveal`, `DemoButton`,
  `Nav`, `HeroSection` (Three.js), `PlatformEcosystem` (canvas), `SolutionsVerticals` and `ProblemsSolutions`
  (tab/flip state), `PricingSection` (monthly/yearly toggle).
- **Content vs presentation**: genuinely editable copy (FAQ, pricing, nav links, feature bullets, contact
  info) lives in `data/`. Bespoke decorative mockups (the Cloud POS screenshot, inventory panel, per-vertical
  visual cards) stay inline in their section component since they're illustrative UI, not prose.
- **Pricing is built but not rendered** — `components/sections/PricingSection.tsx` is complete (with the
  monthly/yearly toggle) but commented out in `app/page.tsx`, matching the original site where pricing was
  disabled. Uncomment the import and `<PricingSection />` to turn it back on.

## Scripts

- `npm run dev` — start the dev server (Turbopack)
- `npm run build` — production build (also type-checks)
- `npm run lint` — ESLint
