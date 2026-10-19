# Repository guidance

## Purpose and boundaries

This is the canonical Graffiticode marketing site at graffiticode.org. It is a
single page, aimed at API and product owners, with exactly one hero message:

> Keep APIs safe. Make agents smarter. Trace every request.

The hero contains that headline, one paragraph of supporting subtext, and an
illustrative static animation placeholder.
Do not add navigation, a logo, supporting sections, CTAs, embeds, or a footer
without a new user request. Do not restore the former artifact-first tool catalog.
The older `artcompiler/artcompiler-graffiticode` repository is not this site's source.

## Architecture

- Next.js 15 App Router, React 19, TypeScript, Tailwind v4.
- `src/app/page.tsx` renders the single hero. `src/app/layout.tsx` provides metadata,
  the main landmark, and optional Plausible pageview analytics.
- `src/components/AnimationPreview.tsx` is a server-rendered HTML/CSS storyboard.
  It depicts Agent → Graffiticode → API, without a visible preview label.
  Graffiticode encloses micro-agent code generation, capability based authorization, and visible result.
  Keep semantic reading order
  and static presentation until a real animation is requested.
- `data/contract.ts` owns headline, subtext, storyboard, technical definition, and endpoint
  facts. Metadata and discovery prose use that contract. Legacy pricing data is
  retained but has no public page; this redesign does not change billing.
- `data/languages.json` is a local catalog snapshot, not a live availability promise.
- `scripts/generate-discovery.ts` generates `public/llms.txt` and
  `public/.well-known/mcp.json`. Never hand-edit those committed outputs. Generation
  must stay offline because it runs in prebuild. Language sync remains on demand.
- `next.config.mjs` permanently redirects `/agents`, `/languages`, `/languages/*`,
  and `/pricing` to `/`. The sitemap contains only `/`.
- `src/middleware.ts` permanently redirects alternate domains to the canonical apex,
  preserving path and query. Keep discovery endpoints and static assets reachable.

## Copy and design

Dark is the default. Keep both palettes in the shared tokens in globals.css.
The hidden Shift+D shortcut toggles themes without adding visible UI. Explicit
`?theme=light` and `?theme=dark` URLs override the saved browser preference.
`src/lib/theme.ts` initializes before paint; `ThemeToggle.tsx` persists keyboard
changes, ignores editing fields, and keeps explicit theme URLs synchronized.
Storage failures must leave the toggle functional. Avoid automatic OS-theme
selection; new visitors should see dark. The light palette retains ivory canvas
(#FAF7F2), charcoal text (#2B2528), white cards, plum accents (#8A2C78), and blush
(#F5E8F0). Keep text contrast readable and do not add a visible theme control.
The hero must remain readable on mobile and at browser zoom; allow vertical scroll.
The storyboard is illustrative, not a live execution or a product guarantee.
Technical claims describe only shipped checks. Compiler validity does not prove
semantic correctness; restoring design-time history does not undo external writes.
Do not claim numeric reliability or registry coverage without published evidence.
MCP provides access; domain languages bound capabilities; the compiler checks
modeled constraints. Free-plan access requires no Authorization header. Never
publish credentials in discovery or instructions.

## Commands and verification

```bash
npm run dev            # regenerate discovery, start local development
npm run build          # regenerate discovery, build and type-check
npm run generate       # regenerate discovery offline
npm run sync:languages # optional networked catalog refresh
npm run check:links    # check generated discovery URLs against BASE_URL
```

There is no test runner. For production verification, start with
`PORT=4319 npm run start`, then run
`BASE_URL=http://localhost:4319 npm run check:links`. CI does the same after build.
Verify redirects, a one-entry sitemap, matching metadata, and desktop/mobile layouts.
The existing `npm run lint` uses the legacy Next lint command; build includes the
configured Next.js checks. Do not add dependencies or a test framework for copy.

## Deployment

Cloud Run service `www`, project `graffiticode-app`, region `us-central1`.
`npm run gcp:build` uses Cloud Build to build, push, **and deploy**. The alternate
`npm run gcp:deploy` also deploys. Run either only when deployment is requested.
Keep `output: 'standalone'`; the Dockerfile relies on it.
`SITE_URL` controls absolute URLs; it defaults to https://graffiticode.org.
