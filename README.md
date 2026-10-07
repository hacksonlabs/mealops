# MealOps website

The marketing site for [www.mealops.ai](https://www.mealops.ai). It's plain HTML and CSS: each page is a
folder with its own `index.html`, there's no framework, and only one stylesheet (`css/main.css`) is built.

## Preview locally

```bash
npm run preview
```

Then open `http://localhost:4173/`. You can also open any `index.html` straight from Finder; when a page is
opened from disk, `js/shared-layout.js` points folder links like `contact/` at `contact/index.html` so
navigation still works.

## What's where

| Path | What it is |
| --- | --- |
| `index.html` | The Company (home) page |
| `phantom/`, `coachimhungry/`, `contact/` | The product and contact pages |
| `blog/` | The blog index, with one folder per post |
| `privacy-policy/`, `terms/`, `client-terms/`, `developer-terms/`, `restaurant-terms/` | Legal pages, styled by `css/legal.css` |
| `consent/`, `sms-opt-in/`, `sms-proof/` | SMS program pages; standalone (no shared nav) and set to `noindex` |
| `js/shared-layout.js` | Draws the nav and footer into `<div data-shared-nav>` and `<div data-shared-footer>` on every page |
| `css/shared-layout.css` | Nav, footer, and other styles shared across pages |
| `css/tailwind.css` → `css/main.css` | Tailwind source and its built output |
| `images/` | Logos, photos, and the school logos in CoachImHungry's "Trusted by" strip |
| `favicon.ico`, `favicon.png`, `apple-touch-icon.png` | Browser tab and iPhone home-screen icons |
| `CNAME` | The custom domain |

Most page-specific styling lives in a `<style>` block at the top of each page.

The logo originals are kept next to the web versions made from them: `MealOps.png` (nav logo),
`MealOps_logo_final.jpg` (tab icons), `images/MealOps_green.png` (footer logo), and
`images/white_green_logo.png` (the white figure in the homepage diagrams).

## Conventions

- **Relative paths.** Link files with `./`, `../`, or `../../` like the existing pages do, so a page works
  both on the server and when opened from disk.
- **Shared nav and footer.** Each page sets `data-root` to the relative path back to the site root and
  `data-active` to the nav item to highlight (`company`, `phantom`, `coach`, `blog`, or `contact`).

## Rebuilding the CSS

Only needed after adding Tailwind utility classes to a page:

```bash
npm install
npm run build:css
```

`npm run dev` rebuilds on every save instead.
