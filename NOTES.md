# Project notes

Context that isn't obvious from the code. Written 24 Aug 2026.

## What this is

A marketing site for GetHyped, built to match an existing reference design —
a full-page screenshot of the live site, supplied by the client. The brand is
the client's own, so matching it closely is intended.

## Where the design system lives

- **Source:** `design/*.dc.html` — four artboards (Foundations, Buttons &
  badges, Cards & blocks, Grid/space/motion) plus `design/canvas.json`.
- **Published canvas:** https://claude.ai/code/artifact/62f4f5e4-6652-4be7-b6df-923f78aef75c
  (opens from any machine signed into the same Claude account).
- **To change it:** edit the `.dc.html` files, then re-seed and republish. In
  Claude Code, run `/design` — it re-extracts the helper and explains the
  re-seed. Don't hand-edit `design/gethyped-design-system.html`; it's generated.
- `src/styles/tokens.css` is a hand-compiled copy of the canvas values. **If
  you change a token, change it in both places** — nothing syncs them.

## Decisions, and why

- **Buttons are rounded rectangles, not pills** (8px). First draft had stadium
  pills; the client corrected it against the reference.
- **The arrow chip inside a button is also rectangular** (6px), same
  correction. Standalone circular buttons — the video play buttons and the
  arrow next to "Get to know us" — were left circular on purpose, because
  that's how they read in the reference. **Open question:** never explicitly
  confirmed. Worth checking.
- **Header CTA is pink, not orange.** In the reference the top-right button is
  clearly paler than the orange one in the closing block. Also unconfirmed.
- **Nav is plain text links.** An early draft wrapped them in a pill
  container; the reference doesn't.
- **Expertise card headings run near hero scale** (up to ~68px). They look
  small at the documented display-m step; the reference is much bigger.
- **The logo strip is a marquee.** Logos bleed off both edges in the
  reference, which is why.
- **Fonts are substitutes.** Archivo (display) + Instrument Sans (text) are
  the closest Google Fonts match. The real site uses a licensed grotesk that
  couldn't be identified from a screenshot. If the brand licenses one,
  self-host it and change `--gh-font-display` / `--gh-font-text`.
- **Colours were sampled from the screenshot**, not from brand values. If a
  brand guide exists, check them.
- **Mobile nav is an addition.** The reference is desktop-only, so the
  disclosure menu below 900px is invented, not matched.

## Reference vs. draft copy

Only the **homepage** copy is transcribed from the reference (and then
translated to English — the original is Dutch).

Everything on `/about`, `/contact`, the four service detail pages and the four
case studies is **a first draft**, written to fill the site out. It is
plausible agency copy, not the client's voice. Rewrite before launch.

## ⚠️ The case-study figures are invented

`src/data/cases.ts` contains numbers like "2.4M organic views", "−61% cost per
hire", "Sold out opening weekend". **These are placeholders shaped like real
metrics. None of them are real.** Publishing them would be making unsupported
claims about client results. Replace with verified figures or remove the
results blocks.

Same for `[CLIENT NAME]`, `[NAME]` and `[ROLE]` — deliberately not guessed at.

## Still outstanding

- All photography and case videos (every slot renders a labelled placeholder)
- Client logos (currently plain text in `src/content.ts`)
- Contact details, social URLs, COC/VAT numbers (marked in orange on the page)
- Contact form has no backend — set `FORM_ENDPOINT` in `src/pages/Contact.tsx`
- Two of the six logo cells are `[CLIENT 5]` / `[CLIENT 6]`; the reference
  strip was cut off

## Deployment

Routing is client-side. **The host must rewrite unknown paths to
`index.html`**, or `/work/soft-in-taste` 404s on a hard refresh. Netlify:
`/* /index.html 200`. Vercel: a rewrite. nginx: `try_files $uri /index.html;`.

## Not in this repo

`~/repos/fairtrade-africa-tracker/` — an unrelated Fairtrade Africa project
file that was found sitting in this site's `public/` folder, where it would
have been committed here *and* copied into every production build. Moved out
on 24 Aug 2026, never committed. It exists only on the laptop it was found on.
