# N-Tune Automotive

Marketing website for N-Tune Automotive, a family-owned auto repair shop in Durham, NC (serving
Durham and Orange Counties since 1999). Built with plain HTML/CSS/JS on Vite, deployed to AWS
Amplify Hosting.

## Local development

```bash
npm install
npm run dev      # start the Vite dev server
npm run build     # production build to dist/
npm run preview   # serve the production build locally
```

## Project structure

- `src/index.html`, `src/css/`, `src/js/`: Vite root and source.
- `public/`: static assets (logo, favicons) copied as-is to the output root.
- `dist/`: production build output (git-ignored).
- `PRODUCT.md`: durable product context (Impeccable skill).
- `.impeccable/`: Impeccable design-system config and surface briefs.

## AWS Amplify deployment

Amplify build settings live in `amplify.yml` at the repo root:

- **preBuild:** `npm ci`
- **build:** `npm run build`
- **artifacts base directory:** `dist`

Connect the repo in the Amplify console and it will pick up `amplify.yml` automatically, no
manual build settings needed.

## KurumaWorks booking

Every "Book Now" button routes through a single constant in `src/js/main.js`:

```js
const KURUMA_SHOP_ID = "PLACEHOLDER_SHOP_ID";
```

Once N-Tune Automotive's real KurumaWorks shop id is available, replace that one value: every
booking link on the site (header, hero, visit section, mobile sticky bar) updates automatically.

## Google Analytics

The gtag.js snippet in `src/index.html`'s `<head>` is wired to measurement ID `G-HBXLVWXC4Y`.

## Domain

Intended production domain: `ntuneauto.com`.
