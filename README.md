# Yurii Myronov — Portfolio

Personal portfolio site built with [Nuxt 4](https://nuxt.com/) and [Nuxt UI 4](https://ui.nuxt.com/).
Live at **[meizuno.github.io](https://meizuno.github.io)**.

The same Vue components are used to render both the interactive site and a print-ready CV PDF, so the two never drift out of sync.

## Tech stack

- Nuxt 4 + Vue 3 + TypeScript
- Nuxt UI 4 + Tailwind CSS (custom CSS variables for theming, light/dark mode)
- `@nuxt/image` for optimized images
- `@nuxtjs/sitemap` for sitemap generation
- Puppeteer for headless PDF rendering of the `/pdf` page

## Development

Install dependencies:

```bash
yarn install
```

Start the dev server on `http://localhost:3000`:

```bash
yarn dev
```

## Build

```bash
yarn build        # production build
yarn generate     # static site (used for GitHub Pages)
yarn preview      # preview the production build locally
```

## Regenerate the CV PDF

The CV at [public/yurii-myronov.pdf](public/yurii-myronov.pdf) is generated from the `/pdf` route.

1. Start the dev server: `yarn dev`
2. In another terminal: `yarn pdf`

The script ([scripts/generate-pdf.mjs](scripts/generate-pdf.mjs)) drives Puppeteer against `http://localhost:3000/pdf` and writes the PDF back to `public/`.

## Project structure

```
app/
  components/app/   Page sections (about, experience, projects, …)
  layouts/          default + blank (used by /pdf)
  pages/            index.vue (site) and pdf.vue (PDF view)
  utils/            date helpers, contacts list
  assets/css/       Tailwind + custom theme variables
public/             static assets, generated PDF
scripts/            PDF generation script (ignored by Nuxt)
```
