# razaqultegar.com

Razaqul Tegar's personal profile site, built with Next.js App Router, Tailwind CSS v4, and TypeScript.

## Tech Stack

- [TypeScript](https://www.typescriptlang.org/)
- [Next.js 16](https://nextjs.org)
- [React 19](https://react.dev)
- [Tailwind CSS v4](https://tailwindcss.com)
- [gray-matter](https://github.com/jonschlinkert/gray-matter)
- [remark](https://github.com/remarkjs/remark)

## Project Structure

```
app/
  page.tsx                # Homepage
  layout.tsx              # Root layout & metadata
  globals.css             # Design tokens & global styles
  icon.png                # Favicon (cropped from profile photo)
  apple-icon.png          # Apple touch icon
  sitemap.ts              # Generated sitemap.xml
  robots.ts               # Generated robots.txt
  jurnal/                 # Journal list & detail pages

components/
  sections/               # Homepage sections (Hero, UdahKelar, etc.)
  InlineLink.tsx          # Regular link (rust color)
  HeaderLink.tsx          # Link inside bio paragraphs (dotted border-bottom)
  ExternalLink.tsx        # Outbound link (target _blank)
  GitHubContributions.tsx # GitHub contribution graph
  GalleryGrid.tsx         # Gallery grid & lightbox
  CopyCodeButtons.tsx     # Copy buttons for journal code blocks

data/
  clients.ts              # DOTS. client list
  gallery.ts              # Gallery photo metadata (title, description, location)
  journal/*.md            # Journal entries (markdown + frontmatter)

lib/
  journal.ts              # Reads & parses journal markdown files
  gallery.ts              # Reads photos from public/gallery
  github.ts               # Fetches GitHub contributions (revalidated daily)
  site.ts                 # Shared site constants

public/
  clients/                # DOTS. client logos
  gallery/                # Gallery photos, picked up automatically
  journal/                # Images embedded in journal entries
```

## Adding Content

- **Journal entry:** add `data/journal/<slug>.md` with `title` and `date` frontmatter. Images go in `public/journal/` and are referenced as `/journal/<file>`.
- **Gallery photo:** drop the image into `public/gallery/`. Files are sorted by name, so prefix them with numbers (`01-`, `02-`) to control the order. Add a title, description, and location in `data/gallery.ts`, keyed by filename.

## Running Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command          | What it does                   |
| ---------------- | ------------------------------ |
| `npm run dev`    | Start the dev server           |
| `npm run build`  | Build for production           |
| `npm run start`  | Run the production build       |
| `npm run lint`   | Lint with ESLint               |
| `npm run format` | Format all files with Prettier |

## Build

```bash
npm run build
npm run start
```

`npm run build` produces an optimized production build in `.next/`.
`npm run start` serves that build locally so you can verify it before deploying.

## Deployment

This repository is deployed on [Vercel](https://vercel.com). Pushing to the main branch triggers an automatic production deployment.
