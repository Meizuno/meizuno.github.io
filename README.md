# Yurii Myronov — Portfolio

Personal portfolio site built with [Nuxt 4](https://nuxt.com/) and [Nuxt UI 4](https://ui.nuxt.com/).
Live at **[meizuno.github.io](https://meizuno.github.io)**.

All CV content lives in a single source of truth — [`app/data/cv.json`](app/data/cv.json) — and powers both the interactive portfolio and a print-ready ATS-friendly CV PDF.

## Routes

| Route   | Purpose |
|---------|---------|
| `/`     | Interactive portfolio (sidebar + main column) |
| `/cv`   | Plain single-column ATS-friendly CV (also rendered to PDF) |

## Tech stack

- Nuxt 4 + Vue 3 + TypeScript
- Nuxt UI 4 + Tailwind CSS v4 (custom CSS variables for theming, light/dark mode)
- `@nuxt/image` for optimized images
- `@nuxtjs/sitemap` for sitemap generation
- Puppeteer for headless PDF rendering of the `/cv` page

## Development

```bash
yarn install
yarn dev          # http://localhost:3000
```

## Build

```bash
yarn generate     # static site → dist/  (used for deploys)
yarn preview      # preview the built site locally
```

## Regenerate the CV PDF

The CV at [`public/yurii-myronov.pdf`](public/yurii-myronov.pdf) is rendered from the `/cv` route by Puppeteer.

```bash
yarn dev          # in one terminal
yarn cv           # in another — writes public/yurii-myronov.pdf
```

The script ([`scripts/generate-cv.mjs`](scripts/generate-cv.mjs)) drives Puppeteer against `http://localhost:3000/cv` at A4 size.

In CI the same step runs automatically on every push to `main` (see [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)), so the deployed PDF is always in sync with [`cv.json`](app/data/cv.json).

## Updating the CV

Everything is in [`app/data/cv.json`](app/data/cv.json):

| Field | Used in |
|-------|---------|
| `user`         | header (name, role, company) |
| `about`        | About / Summary section |
| `profile`      | location, timezone, availability, GitHub username, `lastUpdated` |
| `stack`        | Tech Stack (Backend, Frontend, API, Databases, DevOps, Testing) |
| `languages`    | Languages section |
| `experiences`  | Experience section (companies → roles) |
| `educations`   | Education section |
| `projects`     | Project repos (GitHub repo cards) |
| `applications` | Applications (live apps + GitHub repos) |
| `contacts`     | Contacts buttons (GitHub, LinkedIn, Email, Profile) |

When you make a meaningful update, bump `profile.lastUpdated` so the CV footer reflects it.

## Project structure

```
app/
  components/app/   Page sections (about, experience, projects, languages, ...)
  layouts/          default + blank (used by /cv)
  pages/            index.vue (site) and cv.vue (ATS CV → PDF source)
  data/cv.json      Single source of truth for all CV content
  utils/date.ts     Date helpers (formatDate, getDuration)
  assets/css/       Tailwind + custom theme variables
public/             Static assets, generated PDF, app icons
scripts/            generate-cv.mjs (Puppeteer → PDF)
                    generate-icon.mjs (Puppeteer → app icon webps)
.github/workflows/
  deploy.yml        Build → generate PDF → deploy to GitHub Pages
```

## Deployment

GitHub Pages via the official `actions/deploy-pages` workflow. Source: `main` branch → Pages source set to "GitHub Actions" in repo Settings.

Every push to `main` triggers:

1. `yarn install`
2. Start dev server in background
3. Run `yarn cv` (generates fresh `public/yurii-myronov.pdf`)
4. `yarn generate` (static build, includes the fresh PDF)
5. Upload artifact and deploy
