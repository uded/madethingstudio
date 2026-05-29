# madeathing.studio

Launch site for **Made A Thing Studio** — independent hardware-widget software.
First product: **Grafana for Stream Deck**.

Built with [Astro](https://astro.build/) + [Tailwind CSS v4](https://tailwindcss.com/) + shadcn-style React primitives.

## Develop

```sh
pnpm install
pnpm dev      # http://localhost:4321
pnpm build    # → dist/
pnpm preview
```

## Project layout

```
src/
├── pages/                  # routes
│   ├── index.astro         # landing page
│   └── privacy.astro       # /privacy
├── layouts/
│   └── Layout.astro        # shared <head>, meta tags, body chrome
├── components/             # page sections (.astro) + shadcn primitives (.tsx)
│   ├── Hero.astro
│   ├── AudienceCards.astro
│   ├── Capabilities.astro
│   ├── TierComparison.astro
│   ├── PrivacyCallout.astro
│   ├── SetupSteps.astro
│   ├── FAQ.astro
│   ├── Topbar.astro
│   ├── Footer.astro
│   ├── SectionLabel.astro
│   └── ui/                 # shadcn-style primitives
│       ├── button.tsx
│       ├── card.tsx
│       └── badge.tsx
├── lib/
│   └── utils.ts            # cn() helper (clsx + tailwind-merge)
└── styles/
    └── globals.css         # Tailwind v4 import + @theme tokens

public/
└── assets/                 # SVG placeholders, swap with real screenshots
```

## Design system

Everything tunable lives in CSS variables under `@theme inline { ... }` in
`src/styles/globals.css`. Dark-first, restrained, Grafana-orange accent on
primary CTAs, amber on Pro. To change Pro pricing in one place: edit the
literal in `TierComparison.astro`.

## Deploy — Cloudflare Pages (GitHub-connected)

1. Cloudflare → Pages → **Connect to Git** → select `uded/madethingstudio`, branch `main`.
2. Build command: `pnpm install && pnpm build`
3. Output directory: `dist`
4. Add custom domains `madeathing.studio` + `www.madeathing.studio` (CF auto-issues SSL).
5. Email Routing (separate sidebar) → enable, route `support@madeathing.studio` to your inbox.

Push to `main` → auto-deploy. Branch previews on PRs out of the box.

## Pre-launch checklist

- [ ] Replace placeholder SVG keys in `public/assets/` with real screenshots from hardware UAT
- [ ] Wire `[data-marketplace="free"]` and `[data-marketplace="pro"]` links to real Elgato URLs in `TierComparison.astro`
- [ ] Add a real `og:image` PNG once the marketing assets exist
- [ ] Confirm `support@madeathing.studio` reaches the right inbox
