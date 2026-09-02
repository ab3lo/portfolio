# AGENTS.md

Nuxt 4 portfolio (Vue 3 + Nuxt UI + Tailwind), based on Hugo Richard's Nuxt Canvas theme. Statically prerendered and deployed to GitHub Pages at `https://ab3lo.github.io/portfolio/` (base path `/portfolio/`).

## Commands
- `npm run dev` — dev server. `npm run generate` — prerender to `.output/public` (**the deploy step; do not use `build`**). `npm run typecheck` — `tsc --noEmit` (uses generated `.nuxt/*` tsconfigs).
- CI/verify locally with `npm ci && npm run generate` before pushing; the GitHub Actions `deploy.yml` runs exactly this and fails the build on any syntax/TS error.

## Deploy & git flow
- Deploy is **push-driven**: every push to `main` triggers `deploy.yml` → `generate` → publish `publish_dir: .output/public` to the `gh-pages` branch.
- The user pushes commits to `main` from outside this session. Always `git fetch origin main` before committing; if `git push` is rejected, rebase onto `origin/main` (`GIT_EDITOR=true git rebase origin/main`) rather than force-pushing.
- `deploy.yml` uses `npm ci`, so **`package-lock.json` is the lockfile of record** even though `packageManager` declares pnpm. Keep `package-lock.json` in sync; do not add a `pnpm-lock.yaml`.
- `.output`, `.nuxt`, `dist` are generated/gitignored. `dist` is a symlink to `.output/public` — never edit it or commit build output.

## Icons (easy to get wrong)
- `custom:<name>` maps to a file `app/assets/icons/<name>.svg`. Every `custom:` icon used in `app/data/portfolio.ts` **must** have a matching SVG file; a missing/invalid name (e.g. a `/` in the name) breaks the whole icon client bundle and fails the build.
- Do NOT install `@iconify-json/*` sets. `provider: 'iconify'` fetches remote sets (e.g. `simple-icons:shadcnui`) at build/prerender time — an offline build can miss them. Verify a remote icon exists via `https://api.iconify.design/<prefix>:<name>.svg` before using it.
- Icons render as CSS `background-image` data URIs at prerender (URL-encoded `fill`). To brand-color a logo, add `fill="<hex>"` to the SVG's `<path>`.

## Content & structure
- Social links, profile, and SEO live in `app/app.config.ts` (profile/socials/seo) and `app/data/portfolio.ts` (projects, stack, experiences, faq). SEO metadata (`og:*`, `twitter:card`, `og.webp`) is set in `app/app.vue` via `useSeoMeta`.
- `app/pages/*.vue` build sections inline (tech stack is a CSS grid with min 3 columns; keep it that way).
- Dark mode only (`colorMode.preference: 'dark'`) — colors are tuned for a dark background.
- `upwork-bio.md` is a personal draft and gitignored — never commit it. `README.md` (also AI-authored) is tracked.