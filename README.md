# graffiticode.org (`www`)

The single-page Graffiticode marketing site.

> Keep APIs safe. Make agents smarter. Trace every request.

The page contains only this headline and a static **Animation preview** storyboard:
Agent request → Graffiticode → Checked work → Authorized action → Visible result.
There is no header, navigation, CTA, demo, or footer. The storyboard runs horizontally
on desktop and vertically on small screens, where the page may scroll.

## Develop and verify

```bash
npm install
npm run dev
npm run build
```

To check discovery links against a production build, run `PORT=4319 npm run start`
in one terminal and `BASE_URL=http://localhost:4319 npm run check:links` in another.
CI builds and performs this check on each PR and push to main.

## Content and routing

- `data/contract.ts` owns the headline, storyboard copy, MCP endpoint, tools, and
  free-plan facts. `data/languages.json` retains the local catalog snapshot.
- `src/components/AnimationPreview.tsx` isolates the static storyboard so a future
  animation can replace it within the same hero. It is illustrative, not live evidence.
- `scripts/generate-discovery.ts` generates `public/llms.txt` and
  `public/.well-known/mcp.json` offline on dev/build. Never hand-edit those files.
  Discovery uses MCP tools for current capability details, without retired page URLs.
- `/agents`, `/languages`, `/languages/*`, and `/pricing` permanently redirect to `/`.
  The sitemap lists only the homepage. Alternate hosts still redirect to graffiticode.org.
- `SITE_URL` controls absolute metadata and discovery URLs, defaulting to
  `https://graffiticode.org`. Optional Plausible pageview analytics remain supported.

## Deploy

The existing Cloud Run deployment targets service `www`, project `graffiticode-app`.
`npm run gcp:build` builds **and deploys** through Cloud Build.
`npm run gcp:deploy` is the alternative source deployment.
Only run deployment when requested. Keep Next.js `output: 'standalone'` for Docker.

Next.js 15 · React 19 · TypeScript · Tailwind v4.
