# inobil.com

Portfolio website for [Inobil](https://www.inobil.com). A static site built with [Astro](https://astro.build); all content lives in Markdown and a single data file, so updates are plain git commits.

## Stack

- **Astro** — static site generator, zero client-side JavaScript by default
- **Markdown content collections** — one file per project in `src/content/projects/`
- **GitHub Pages** — deployed by `.github/workflows/deploy.yml` on every push to `main`

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # serves dist/
```

## Editing content

| What | Where |
| --- | --- |
| Hero, services, about, contact | `src/data/site.ts` |
| Projects | `src/content/projects/<slug>.md` |
| Project screenshots | `src/assets/projects/` |
| Theme colours and type | `src/styles/global.css` |

### Adding a project

1. Drop a screenshot into `src/assets/projects/` (16:10 works best).
2. Create `src/content/projects/<slug>.md`:

```md
---
title: Project name
client: Client name
country: Country
summary: One or two sentences shown on the card.
tags: [Tag one, Tag two]
cover: ../../assets/projects/<file>.png
url: https://example.com   # reference only, not rendered
order: 100                 # lower appears first
---

Longer description shown on /work/<slug>/.
```

3. Commit and push. GitHub Actions builds and deploys.

## Domain

`public/CNAME` pins the site to `www.inobil.com`. DNS needs a `CNAME` record for `www` pointing to `ugurozsahin.github.io` and `A`/`AAAA` records on the apex pointing to GitHub Pages; GitHub then redirects `inobil.com` to `www.inobil.com`.
