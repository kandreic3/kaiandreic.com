---
name: Kai Andreic — Product Designer
description: An editorial, print-inspired portfolio that lets project imagery carry all the color while the chrome stays quiet.
colors:
  paper-cream: "#fdfaf5"
  ink-black: "#1a1714"
  ink-black-alt: "#1a1a1a"
  warm-taupe: "#7a6e63"
  soft-charcoal: "#2d2d2d"
typography:
  display:
    fontFamily: "'PP Editorial Old', 'PPEditorialOld', Georgia, serif"
    fontSize: "clamp(2.97rem, 5.5vw, 4.1rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.05em"
  body:
    fontFamily: "'PP Neue Montreal', 'PPNouveauMontreal', sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: "150%"
    letterSpacing: "normal"
  label:
    fontFamily: "'PP Neue Montreal', 'PPNouveauMontreal', sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "16.8px"
    letterSpacing: "normal"
  signature:
    fontFamily: "'Jalnan2', 'PP Neue Montreal', sans-serif"
    fontSize: "clamp(28px, 3vw, 34px)"
    fontWeight: 800
    letterSpacing: "-0.02em"
  cta:
    fontFamily: "'PP Editorial Old', 'PPEditorialOld', Georgia, serif"
    fontSize: "clamp(37.625px, 7.5vw, 51.2px)"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "-0.05em"
  quote:
    fontFamily: "'PP Editorial Old', 'PPEditorialOld', Georgia, serif"
    fontSize: "clamp(2rem, 4.5vw, 3.4rem)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.03em"
rounded:
  none: "0px"
  pill: "9999px"
spacing:
  gutter: "20px"
  section: "60px"
components:
  nav-link:
    textColor: "{colors.ink-black}"
    typography: "{typography.label}"
  nav-link-hover:
    textColor: "{colors.ink-black}"
  cta-link:
    textColor: "{colors.ink-black}"
    typography: "{typography.cta}"
  cta-link-hover:
    textColor: "{colors.ink-black}"
---

# Design System: Kai Andreic — Product Designer

## Overview

**Creative North Star: "Ink on Paper"**

The site reads like a printed editorial spread that happens to live in a browser: a warm, uncoated-paper cream field (`#fdfaf5`), near-black ink for every word and rule (`#1a1714`), and almost nothing else. There is no accent color in the chrome — hue only enters the page through the case-study photography and prototypes themselves, which sit on the paper the way tipped-in plates sit in a monograph. The display face, PP Editorial Old, is a real serif with a name that gives away the intent; body and UI text run in PP Neue Montreal, a clean grotesque that stays out of the way. Layout runs on a strict 12-column grid with a 20px gutter, corners are square almost everywhere, shadows are absent from the site's own chrome, and the interactive language is built entirely from underlines: a hairline appears under a link on hover, and (in the one place the emphasis is inverted) a heavy rule sits under the primary CTA until hover removes it. Confirmed rejections: no drop shadows, no rounded cards, no secondary accent color anywhere in the navigation, footer, or hero chrome.

**Key Characteristics:**
- Warm paper-cream ground with near-black ink — no third chrome color
- PP Editorial Old (serif, display) paired with PP Neue Montreal (grotesque, body/UI)
- Square corners by default; `rounded-full` reserved for dots and status pips only
- No box-shadow anywhere in site chrome; flatness is the material
- Underline-reveal is the only interactive affordance for links and nav
- Strict 12-column grid, 20px gutter, generous 60px+ section rhythm

## Colors

Effectively monochrome by design: one warm neutral for the ground, one near-black for everything printed on it, plus a muted taupe for de-emphasized text. Color as expression is delegated entirely to project imagery.

### Primary
- **Ink Black** (`#1a1714`, alt `#1a1a1a` in a few loader/route-transition spots — treat as the same ink): all text, rules, underlines, hamburger bars, and the loader dots. Used at ~100% opacity for text, `/70` and `/10` opacity steps for de-emphasized labels and hairline dividers.

### Neutral
- **Paper Cream** (`#fdfaf5`): the site's only background — page body, navbar, mobile menu overlay, loader screen, footer. Never swap in pure white; the warmth is load-bearing.
- **Warm Taupe** (`#7a6e63`): secondary/muted text (e.g. loader captions, de-emphasized labels) where full ink weight would be too heavy.
- **Soft Charcoal** (`#2d2d2d`): a slightly softer near-black used sparingly as an alternate to Ink Black in isolated spots; do not introduce it as a new third text color.

### Named Rules
**The One Ink Rule.** The site's own chrome — nav, hero copy, footer, buttons — never introduces a hue beyond paper cream and ink black. Any color on the page must come from a project screenshot, video, or prototype, never from a new chrome token.

## Typography

**Display Font:** PP Editorial Old (with Georgia, serif fallback)
**Body/UI Font:** PP Neue Montreal (with sans-serif fallback)
**Signature Font:** Jalnan2 (center wordmark only, with PP Neue Montreal fallback)

**Character:** A restrained editorial pairing — a classic serif with real ligature and discretionary-ligature support for headline moments, set against a neutral, almost invisible grotesque for every UI label, nav item, and line of body copy.

### Hierarchy
- **Display** (400, `47.5px` → `65.6px` at `md`, leading matches size, tracking `-2.375px` → `-3.28px`): section headlines ("Take a deep dive into my projects") and the closing brand lockup. Always PP Editorial Old, always tight negative tracking (~-5% of size).
- **CTA** (400, `37.625px` → `51.2px` at `md`, leading `45.15px`/`61.44px`, tracking `-1.88px`/`-2.56px`): the one-step-smaller Display variant reserved for the two primary text-CTAs ("Get in Touch," "Learn More About Me"). Same face and tracking ratio as Display, one deliberate size down.
- **Label** (400, `14px`/`16.8px` line-height): nav links, footer column headers ("Menu /", "Socials /", "Contact /"), section eyebrows, and project-card tier tags ("Professional /", "Academic /").
- **Body** (400, `18px`/150% line-height, from the `--body-1-*` tokens): case-study prose and long-form paragraphs.
- **Quote** (400, `clamp(2rem, 4.5vw, 3.4rem)`, leading `1.15`, tracking `-0.03em`): a single standout personal-statement moment per page (the About page's philosophy line). Rendered hollow — see The Hollow Word Rule.
- **Signature** (800, `28px` → `34px` at `md`, tracking `-0.02em`): the center-nav wordmark only. Jalnan2, the one place a third typeface appears.

### Named Rules
**The Tight Line Rule.** Display type always carries negative letter-spacing proportional to its size (roughly -5%) and a leading that equals or nearly equals the font size — headlines sit close and dense, never airy.
**The Hollow Word Rule.** Exactly one statement per page may be rendered as outline-only type (`-webkit-text-stroke: 1.5px` Ink Black, transparent fill, plain Ink Black as the non-webkit fallback). It marks the single most personal line on a page — a philosophy or point of view, never body copy, navigation, or more than one moment per page.

## Layout

A strict 12-column grid (`grid-cols-[repeat(12,minmax(0px,1fr))]`) with a `gap-x-5` (20px) gutter and `px-5` page margins on mobile, widening at `md`. Section rhythm runs in multiples of the `60px` unit (`gap-y-[60px]`, `py-[60px]`, `mt-[90px]` before the footer). Project showcases use horizontal-scrolling rows (`overflow-x-auto`, `hide-scrollbar`) rather than wrapping grids — the visitor pages through work the way they'd flip a portfolio, not scroll a masonry wall. The container center-clamps at `1400px` (`2xl` breakpoint) per the Tailwind config, though most of the home page runs full-bleed within its own padding rather than a boxed container. Scroll-linked "focus" states (`section-active`, `has-focused-section`) dim sibling sections as one project section crosses ~52% viewport visibility — the grid stays static, but focus is directed via opacity, not layout shift.

## Elevation & Depth

Flat by design: there is no `box-shadow` anywhere in the site's own chrome (nav, hero, footer, buttons). Depth, where it exists at all, is conveyed through opacity and z-index layering (blurred/dimmed inactive sections, a `z-50` fixed nav) rather than shadow or lift. Shadows that do appear inside individual case-study pages (OceanWatch, Chimu) belong to the *content* — they're part of screenshotted product UI being presented as evidence, not part of the portfolio's own design language, and should not be read as license to add shadows to the wrapper site.

### Named Rules
**The Flat Chrome Rule.** The portfolio's own frame (nav, hero, footer) never uses box-shadow. If a shadow is needed to distinguish a project artifact from the page, it belongs inside that case study's content, not the shared chrome.

## Shapes

Square corners are the default: buttons, links, and containers carry no border-radius. `rounded-full` is reserved for small circular elements only — the animated loader dots and status pips. `rounded-md` appears exactly once in the codebase and should be treated as an outlier, not a pattern to extend. Borders are used as underlines, not boxes: `border-b-2` (or `border-b-4`/`border-b-[6px]` for the display-scale CTA) transitioning between `border-transparent` and `border-black` is the site's one recurring border treatment. Full-perimeter borders on cards or buttons don't appear in the chrome and shouldn't be introduced.

## Components

### Buttons / CTAs
- **Shape:** no radius; the "button" is typographic, not a filled shape.
- **Nav links & footer links:** PP Neue Montreal, `14px`, `border-b-2 border-solid border-transparent`, transitioning to `border-black` on hover/focus over `200ms`. This is the reveal direction — the underline appears on interaction.
- **Primary CTA ("Get in Touch"):** set in the Display face at `37.625px`→`51.2px`, with a heavy `border-b-4`/`border-b-[6px]` underline present by default, transitioning to `border-transparent` on hover. This is the one place the underline logic inverts — the CTA is under-lined at rest and loses the rule on hover, which is what marks it as the primary action versus every secondary underline-on-hover link.
- **Disabled state:** plain text at `text-black/70` with `cursor-not-allowed`, no strike-through or graying beyond the opacity step (see "Burke Museum" — UNDER CONSTRUCTION card).

### Cards / Project Tiles
- **Corner Style:** square, no radius.
- **Background:** none — the card is the image itself (`object-cover`, cropped to a fixed aspect ratio) plus a caption stack below it.
- **Shadow Strategy:** none (see Elevation & Depth).
- **Border:** none on the card; only the caption link underneath carries the underline-on-hover treatment.
- **Motion:** `img-zoom` class scales the image slightly on hover; cards enter via the `img-reveal` keyframe (scale 1.08→1, opacity 0→1) and section content via `fade-in`/`reveal` scroll-triggered classes.

### Navigation
- **Style:** fixed, full-width, `z-50`, transparent until scrolled (`nav-scrolled` class swaps in the paper-cream ground). Three-column grid: logo mark (left), center wordmark in Jalnan2 (center), nav links (right).
- **Desktop links:** `14px` label type, underline-on-hover.
- **Mobile:** hamburger → full-screen paper-cream overlay (`mobile-menu-enter`), links set in Display type at `32px`, staggered slide-up entrance (`animate-slide-up-menu`, 0.07s delay steps), each row divided by a `border-black/10` hairline rather than a card boundary.

### Footer
- **Style:** three label-led columns ("Menu /", "Socials /", "Contact /") on a 12-col sub-grid, each column header using **The Slash Label Rule** below, followed by a stack of underline-on-hover links. Closes with an oversized Display-type brand lockup ("Kai Andreic" / "Product Designer") as the final full-bleed statement before the page ends.

### Named Rules
**The Slash Label Rule.** Any column or section eyebrow label is written as `Word /` (a trailing space-slash), never a colon, never all-caps-with-no-punctuation. It's the site's one recurring typographic flourish outside the two type families.
**The Underline Reveal Rule.** Every ordinary link is invisible-bordered by default and gains a solid underline on hover/focus (`border-transparent` → `border-black`, `200ms`). The single exception is the primary CTA, which runs this rule in reverse (see Buttons).

## Do's and Don'ts

### Do:
- **Do** keep the page background at Paper Cream (`#fdfaf5`) everywhere, including loaders, overlays, and route-transition screens — never drop to pure white.
- **Do** use PP Editorial Old only for headline-scale moments (section titles, the CTA, the closing brand lockup) and keep everything else — nav, labels, body — in PP Neue Montreal.
- **Do** implement new interactive text as an underline-reveal (`border-transparent` → `border-black`) rather than a color change, background fill, or shadow.
- **Do** write new section/column eyebrows in the `Word /` format established by the footer.
- **Do** let case-study content carry its own color and shadow vocabulary without pulling it into the shared chrome.

### Don't:
- **Don't** add a shadow to any nav, hero, footer, or button element — flatness is the material, not a placeholder for "add polish later."
- **Don't** introduce a new accent color into the site chrome. If a project needs a functional color (status, category tag), keep it scoped to that case study's own content, not the shared nav/footer/hero.
- **Don't** round the corners of cards, buttons, or containers; `rounded-full` is reserved for small dot/pip elements only.
- **Don't** swap PP Editorial Old's tight negative tracking for default/loose tracking at display sizes — the dense, close-set headline is intentional.
- **Don't** blur the evidentiary distinction between the two academic case studies (Burke Museum, OceanWatch) and the two professional ones (RecognizeApp, Chimu) through visual treatment — that split is a product truth (see `PRODUCT.md`), not a styling choice, but it means case-study section headers should stay honest about status rather than being visually equalized.
