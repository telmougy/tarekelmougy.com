# tarekelmougy.com

Personal site for Tarek Elmougy — Senior SDET / QA Automation Engineer.

Built with Next.js 16, React 19, TypeScript, Tailwind CSS v4, framer-motion, and next-themes.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build
npm run start
```

## Lint

```bash
npm run lint
```

## Updating content

All CV-driven content (experience, skills, stats, profile, certifications) lives in a single typed source of truth:

- [`src/data/cv.ts`](src/data/cv.ts)

The downloadable CV is served from [`public/tarek-elmougy-cv.pdf`](public/tarek-elmougy-cv.pdf) — replace that file to update the download link.

## Deploy

Push to GitHub, import the repo into [Vercel](https://vercel.com/new), and add the custom domain (`tarekelmougy.com`). No environment variables required.
