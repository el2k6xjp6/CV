# Deron Kao - Senior Software Engineer Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-16.1.4-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC)](https://tailwindcss.com/)

A minimalist, single-page portfolio and CV for Deron Kao, Senior Software Engineer.

## Features

- **Next.js 16** (App Router), statically rendered
- **Dark / light mode** with next-themes
- **Export PDF**: a header button opens the print dialog with a plain, text-selectable CV layout
- **Offline support** via a service worker (pages network-first, build assets cache-first)
- **Subtle animations** with Framer Motion
- **Single source of truth**: all CV content lives in `src/data/portfolio.ts`

## Tech Stack

Next.js 16 · React 19 · TypeScript 5 · Tailwind CSS 4 · Framer Motion · Lucide React · next-themes · pnpm

## Quick Start

Prerequisites: Node.js 24 (see `.nvmrc`; run `nvm use`), pnpm.

```bash
git clone https://github.com/el2k6xjp6/CV.git
cd CV
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `pnpm dev` - start the development server
- `pnpm build` - build for production
- `pnpm start` - serve the production build
- `pnpm lint` - run ESLint

## Project Structure

```
app/
  globals.css          # theme tokens and print styles
  layout.tsx           # root layout and metadata
  page.tsx             # the single page
  error.tsx, not-found.tsx
src/
  components/
    CardParts.tsx      # shared card shell, tech tags, bullet list
    ExperienceCard.tsx
    ProjectCard.tsx
    ResumePrint.tsx    # plain layout used for Export PDF
    ExportPdfButton.tsx
    Section.tsx
    SkillsGrid.tsx
    NavLinks.tsx
    ThemeToggle.tsx
    PwaRegister.tsx
  data/portfolio.ts    # all CV content
  lib/format.ts
  types/index.ts
public/
  manifest.json, sw.js, icons
```

## Updating the CV

Edit `src/data/portfolio.ts`. The page and the PDF export both read from it.

## Deployment

Hosted on Cloudflare Pages with build command `pnpm build`.
