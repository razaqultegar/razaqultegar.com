# razaqultegar.com

Razaqul Tegar's personal profile site — built with Next.js App Router, Tailwind CSS v4, and TypeScript.

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
  page.tsx           # Homepage
  layout.tsx         # Root layout & metadata
  globals.css        # Design tokens & global styles
  jurnal/            # Journal list & detail pages

components/
  sections/          # Homepage sections (Hero, UdahKelar, etc.)
  InlineLink.tsx     # Regular link (rust color)
  HeaderLink.tsx     # Link inside bio paragraphs (dotted border-bottom)
  ExternalLink.tsx   # Outbound link (target _blank)

data/
  clients.ts         # DOTS. client list
  gallery.ts         # Gallery photo placeholders
  journal/*.md       # Journal entries (markdown + frontmatter)

lib/
  journal.ts         # Reads & parses journal markdown files
```

## Running Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command                | What it does                     |
| ---------------------- | -------------------------------- |
| `npm run dev`          | Start the dev server             |
| `npm run build`        | Build for production             |
| `npm run start`        | Run the production build         |
| `npm run lint`         | Lint with ESLint                 |
| `npm run format`       | Format all files with Prettier   |
| `npm run format:check` | Check formatting without writing |

## Build

```bash
npm run build
npm run start
```

`npm run build` produces an optimized production build in `.next/`.
`npm run start` serves that build locally so you can verify it before deploying.

## Deployment

This repository is deployed on [Vercel](https://vercel.com). Pushing to the main branch triggers an automatic production deployment.
