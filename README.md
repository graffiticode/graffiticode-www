# graffiticode.org (`www`)

The single-page Graffiticode marketing site.

> Keep your API keys safe. Make your agents smarter. See every step.

The page speaks to people using agents with their own SaaS accounts. An
illustrative storyboard shows Your agent → Graffiticode → Your SaaS accounts.
**Start making** jumps to the example prompts, and **Connect your agent** jumps
to setup instructions. Three starting prompts cover
Learnosity assessments, spreadsheets, and charts, with **Try in ChatGPT.com** and
**Copy prompt** actions.
Prompts explicitly request Graffiticode; visitors need to connect it in ChatGPT.
ChatGPT links include the selected prompt. The connection
section includes a copyable endpoint, optional JSON configuration, the
create → render → refine workflow, discovery links, and free-session retention.
The layout adapts to small screens; both themes use shared color tokens.
Page copy speaks to people connecting their own accounts to the assistants they
use. Technical tool-call instructions are labeled for their AI assistant.

Dark mode is the default. Press **Shift+D** to switch between dark and light;
there is no visible toggle. The browser remembers the selected theme. For mobile
or comparison links, open `/?theme=light` or `/?theme=dark`. Explicit URLs override
the saved choice, and keyboard toggles update an existing theme parameter.
The light palette retains the ivory background, charcoal text, white cards, plum
accents, and soft blush Graffiticode boundary.

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

- `data/contract.ts` owns the headline, subtext, storyboard copy, creation paths,
  MCP setup and workflow, endpoint, tools, and free-plan facts.
  `data/languages.json` holds the current curated catalog snapshot and example prompts.
- `src/components/AnimationPreview.tsx` isolates the static storyboard so a future
  animation can replace it within the same hero. It is illustrative, not live evidence.
- `src/lib/theme.ts` initializes the saved theme before paint;
  `src/components/ThemeToggle.tsx` handles the hidden keyboard shortcut.
- `scripts/generate-discovery.ts` generates `public/llms.txt` and
  `public/.well-known/mcp.json` offline on dev/build. Never hand-edit those files.
  Discovery includes setup and creation instructions and uses MCP tools for current
  capability details, without retired page URLs.
- CTA clicks and prompt/config copies use the optional Plausible event helper.
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
