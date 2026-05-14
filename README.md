# DocuVault — Marketing Site

Landing page for **[DocuVault](https://www.appdocuvault.com)** — an iOS document
vault app with a built-in scanner, AI executive summarization and natural-language
search. AES-256 encrypted, Face ID protected.

- **Live:** [www.appdocuvault.com](https://www.appdocuvault.com)
- **App Store (TR):** [DocuVault — Belge Kasası](https://apps.apple.com/tr/app/docuvault-belge-kasasi/id6762083376)

## Stack

| Layer        | Choice                                         |
|--------------|------------------------------------------------|
| Framework    | Next.js 16 (App Router, Turbopack)             |
| UI           | React 19 + Tailwind CSS v4                     |
| Animation    | framer-motion v12                              |
| i18n         | next-intl v4 (TR default, EN at `/en`)         |
| Icons        | lucide-react                                   |
| Analytics    | Vercel Analytics + Speed Insights              |
| Hosting      | Vercel (auto-deploy from `main`)               |

## Brand — "Vault Meridiem"

Warm parchment background, olive primary (`#4A5C3F`), copper amber secondary
(`#9C6B3C`). Typography: Inter + JetBrains Mono. Phone mockups follow the
App Store Connect screenshot template (titanium frame on cream).

## Folder structure

```
app/
├── [locale]/             # /tr (default, no prefix) and /en
│   ├── layout.tsx        # html lang, fonts, NextIntlClientProvider, JSON-LD
│   ├── page.tsx          # homepage (Hero, Features, …, FAQ, FinalCTA)
│   ├── privacy/          # /privacy + /en/privacy
│   └── terms/            # /terms + /en/terms
├── layout.tsx            # minimal root (passes children through)
├── globals.css           # Tailwind v4 tokens + Vault Meridiem palette
├── sitemap.ts            # 6 entries × hreflang alternates
├── robots.ts
├── manifest.ts           # PWA manifest
├── icon.tsx              # dynamic 32×32 favicon
├── apple-icon.tsx        # dynamic 180×180 apple touch icon
└── opengraph-image.tsx   # 1200×630 brand OG (bilingual)

components/                # 14 React components — all "use client" except Footer
i18n/                      # routing.ts, navigation.ts, request.ts (next-intl)
messages/                  # tr.json + en.json (full UI copy)
content/                   # legal.ts (terms + privacy long-form content TR+EN)
middleware.ts              # next-intl locale matching
public/
├── logo.{webp,png}
└── phone/{tr,en}/         # 12 screenshots from ASC marketing template,
                           # cropped to phone-only (titanium frame + cream margin)
```

## Local development

```bash
npm install
npm run dev          # → http://localhost:3001
```

## Build

```bash
npm run build        # turbopack production build
npm run start        # serve built output
npm run lint
```

## Deployment

Pushes to `main` auto-deploy to production. Pull request branches get
**preview deploys** automatically (URL appears as a Vercel comment on the PR).

Direct CLI deploys:

```bash
# install Vercel CLI once
npm i -g vercel

vercel              # preview
vercel --prod       # production
```

Vercel project: `prj_uxus9hCXzZogtu3r6mBkP73mLwaJ` (in `.vercel/project.json`).

## Adding / updating translations

1. Edit `messages/tr.json` and `messages/en.json` (same key shape).
2. Use translations in components:

```tsx
"use client";
import { useTranslations } from "next-intl";

export default function Example() {
  const t = useTranslations("section");
  return <h2>{t("title")}</h2>;
}
```

3. For static long-form content (legal pages), edit `content/legal.ts`.

The default locale is `tr` and renders at `/`. English renders at `/en`. Both
are statically generated at build time. `localeDetection` is **off** so URLs are
predictable for SEO.

## Pricing notes

- Turkish UI shows TRY (₺999,99/mo, ₺10.999/yr).
- English UI shows approximate USD ($21.99/mo, $241.99/yr) with a disclaimer.
- App Store performs the actual currency conversion at purchase time. Update
  amounts in `messages/{tr,en}.json` under the `pricing` namespace if Apple
  pricing tiers change.

## Updating phone screenshots

Phone screenshots in `public/phone/{tr,en}/` are cropped from the App Store
Connect marketing template in
`~/Downloads/PRODUCT PAGE İÇİN GÖRSELLER/output/`. To regenerate after a UI
change:

1. Re-run the ASC screenshot generator (Python script in `build/`).
2. Crop the marketing canvases to phone-only:

```bash
node - <<'EOF'
const sharp = require('sharp');
const SRC = '/Users/soykanbayraktar/Downloads/PRODUCT PAGE İÇİN GÖRSELLER/output';
const CROP = { left: 130, top: 700, width: 1030, height: 1940 };
const FRAMES = ['01-vault','02-scanner','03-collections','04-ai-summary','05-ai-search','06-security'];
const MAP = {'01-vault':'ss_01_hero','02-scanner':'ss_02_add','03-collections':'ss_03_collections','04-ai-summary':'ss_04_ai','05-ai-search':'ss_05_search','06-security':'ss_06_security'};
(async () => {
  for (const locale of ['tr','en']) {
    for (const id of FRAMES) {
      await sharp(`${SRC}/${MAP[id]}_${locale}.png`)
        .extract(CROP).resize({width:720,fit:'inside'})
        .webp({quality:88}).toFile(`public/phone/${locale}/${id}.webp`);
    }
  }
})();
EOF
```

The crop excludes the ASC marketing headline and footer feature line so the
website's own copy doesn't conflict with text in the phone frame.

## SEO highlights

- Sitemap with full hreflang (`tr`, `en`, `x-default`).
- JSON-LD on the homepage: `MobileApplication`, `Organization`, `WebSite`, `FAQPage`.
- Dynamic OG image at `/opengraph-image` (1200×630, bilingual).
- Security headers via `next.config.ts`.

## License

Private project. © 2026 DocuVault.
