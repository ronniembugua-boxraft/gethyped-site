# GetHyped

Marketing site, built from the design system in [`design/`](design/).

## Run

```bash
npm install
npm run dev
```

`npm run build` type-checks and bundles to `dist/`.

## How it's put together

| Path | What's in it |
| --- | --- |
| `src/styles/tokens.css` | Every colour, type step, space, radius and easing. **Change values here, not in components.** |
| `src/styles/global.css` | Base styles, the component primitives (`.gh-btn`, `.gh-badge`, `.gh-media`), then one block per section. |
| `src/content.ts` | All copy, in one file, so nothing is hard-coded in JSX. |
| `src/components/` | Shared UI — `Button`, `Badge`, `MediaWell`, `Reveal`, `Icons`, `Header`, `Footer`, plus the homepage sections. |
| `src/pages/` | One file per route. |
| `src/data/expertise.ts` | The four services, including everything the detail pages render. |
| `src/data/cases.ts` | Case studies, including everything the case pages render. |

## Routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/expertise` | All four services |
| `/expertise/:slug` | Service detail — driven by `src/data/expertise.ts` |
| `/work` | Case archive |
| `/work/:slug` | Case detail — driven by `src/data/cases.ts` |
| `/about` | About |
| `/contact` | Contact form and details |
| anything else | 404 |

Routing is client-side (`react-router-dom`). Vite's dev server handles deep
links already; **in production the host must rewrite unknown paths to
`index.html`**, or `/work/soft-in-taste` will 404 on a hard refresh. On Netlify
that is a `_redirects` file with `/* /index.html 200`; on Vercel a rewrite; on
nginx a `try_files $uri /index.html;`.

The tokens are a direct compilation of the design canvas — the same palette,
type scale, 8px control radius, 6px chip radius and 4px-based space scale.

## Before this goes live

Everything below is a marked placeholder, not a guess:

- **Photography and case videos.** Every image slot renders a striped
  `MediaWell` with a label saying what belongs there. Pass a real `src` to
  swap one in:
  ```tsx
  <MediaWell src="/img/team.jpg" alt="Our team" note="Portrait — team member" />
  ```
- **Client logos** — `logos.items` in `src/content.ts` is plain text. Replace
  each with the real SVG mark.
- **Contact details** — `[EMAIL ADDRESS]`, `[PHONE NUMBER]`, `[ADDRESS]`,
  `[COC NUMBER]`, `[BTW NUMBER]` and the social URLs. These render with an
  orange highlight (`.gh-todo`) so they're impossible to miss in the footer.
- **Fonts.** Archivo + Instrument Sans are loaded from Google Fonts as the
  closest match to the reference. If the brand licenses a specific grotesk,
  self-host it and change `--gh-font-display` / `--gh-font-text`.

## Notes

- Section reveals, the logo marquee and the contact stamp all respect
  `prefers-reduced-motion`.
- The nav collapses to a disclosure menu below 900px — the reference is
  desktop-only, so that pattern is an addition, not a match.
