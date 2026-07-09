# Diane Pačes-Wiles, LCSW — Astro site

This is your site rebuilt in [Astro](https://astro.build) with [Tailwind CSS](https://tailwindcss.com), preserving the original palette, fonts, and layout — just built on a more robust styling system. It builds to plain static HTML/CSS, so it deploys the same way your old site did (GitHub Pages, Netlify, etc.).

## The styling system

All colors, fonts are defined once as design tokens in `src/styles/global.css`:

```css
@theme {
  --color-purple-dim: #72668a;
  --color-blue-dark: #154a6b;
  --font-heading: "IBM Plex Sans SemiBold", sans-serif;
  --font-serif: "PT Serif", serif;
  /* ... */
}
```

Tailwind automatically turns these into utility classes (`bg-purple-dim`,
`text-blue-dark`, `font-heading`, etc.) usable anywhere in the project — no
more duplicating hex codes or guessing which CSS file has the right class.

Body text pulled from Markdown (paragraphs, headings, links) is styled
automatically by the `@tailwindcss/typography` plugin via the `.prose-site`
class in `Layout.astro`, instead of hand-styling every `h3`/`h4`/`p`/`a`
combination like the old CSS did.

### What got fixed along the way

A few brittle spots in the original CSS were cleaned up:

- **The logo** used to be absolutely positioned and overlap into the page
  content below it, requiring a `margin-top: 90px` hack on every page to
  compensate. It's now a normal flex item — no magic numbers needed.
- **The bottom nav** used to be `position: fixed`, which could overlap page
  content on desktop since nothing reserved space for it. It's now a normal
  footer at the end of the page flow.
- **The homepage intro** used a float + `clear: left` + a manual "indent the
  list 40% on desktop, 0% on mobile" media query to wrap text around the
  portrait photo. It's now a simple flex row that reflows naturally at any
  screen width.

Everything else (colors, type, spacing, card layout) matches the original.

## What's different from the old version

Instead of one big HTML file per page, each page's editable text now lives in
a small Markdown file under `src/content/`:

```
src/content/
  pages/       → Approach, Individual, Coaching, Family, Get Started, Home
  services/    → the 6 cards on the Services grid (3 text + 3 photo)
  faqs/        → the 3 FAQ question/answer entries
```

Edit any `.md` file in there and the matching page updates — no HTML editing
needed. This structure is also what makes it possible to bolt on a CMS (like
Decap CMS or Tina) later, so a non-technical person can edit these same files
through a simple web form instead of a text editor.

Shared stuff that used to be copy-pasted on every page (nav links, phone,
email, address) now lives in one place: `src/consts.ts`.

## ⚠️ Things you need to add before this looks right

Your upload didn't include these files, so the site currently references
them but they don't exist yet:

- **`public/images/logo.png`** and **`logoicon.png`** — site logo / favicon
- **`public/images/branch.jpg`** — the page background image
- **`public/images/service1.png`**, **`service2.png`**, **`service3.png`** — the 3 photo cards on Services
- **`public/images/npp.png`**, **`npp2.png`** — images on the Coaching page
- **`public/images/CommonGroundRes_Final.png`** — image on the Family page
- **`public/fonts/IBMPlexSans-Text.woff2`**, **`-SemiBold.woff2`**, **`-Medium.woff2`** — the site's fonts

Drop each file at the path listed above (create the folders if needed) and
they'll show up automatically — no code changes required.

Also: **the original `index.html` (homepage) wasn't in your upload**, so
`src/content/pages/home.md` is a placeholder. Replace it with the real
welcome text whenever you have it.

## Running it locally

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs static site to dist/
```

## Next step: making it editable for a non-technical person

This project is structured (Markdown content collections) so that Decap CMS
or Tina CMS can be added on top — giving your family member a simple web
form to edit these same files without touching code. Ask me when you're
ready to wire that up.
