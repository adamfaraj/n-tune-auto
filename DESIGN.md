---
name: N-Tune Automotive
description: A family-run Durham auto shop's homepage, styled as an official stamped service record.
colors:
  paper: "#f2ece0"
  paper-raised: "#f8f4ea"
  paper-line: "#d8cfb8"
  ink: "#221f1a"
  ink-soft: "#55503f"
  ink-faint: "#5c5644"
  steel: "#4c5a5f"
  steel-line: "#c7bfa8"
  stamp-teal: "#0e4b5e"
  stamp-teal-dark: "#0a3541"
  stamp-teal-light: "#4fa3bd"
  stamp-red: "#a83729"
  stamp-red-dark: "#832a1f"
  kuruma-blue: "#2663eb"
  dark-ground: "#1c1915"
  dark-paper-line: "#3a3527"
  dark-text: "#f2ece0"
  dark-text-soft: "#c7bea3"
typography:
  display:
    fontFamily: "Big Shoulders, sans-serif"
    fontSize: "clamp(2.75rem, 6.4vw, 4.6rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Big Shoulders, sans-serif"
    fontSize: "clamp(2rem, 4.2vw, 2.9rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Big Shoulders, sans-serif"
    fontSize: "1.35rem"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Libre Franklin, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Courier Prime, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    letterSpacing: "0.14em"
rounded:
  sm: "4px"
  md: "6px"
  lg: "8px"
  full: "50%"
spacing:
  gutter: "clamp(1.25rem, 4vw, 3rem)"
  section: "clamp(4rem, 9vw, 7.5rem)"
components:
  button-kuruma:
    backgroundColor: "{colors.kuruma-blue}"
    textColor: "#ffffff"
    rounded: "{rounded.sm}"
    padding: "0.65rem 1.3rem"
  button-kuruma-hover:
    backgroundColor: "#ffffff"
    textColor: "{colors.kuruma-blue}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.stamp-teal}"
    rounded: "{rounded.sm}"
    padding: "0.95rem 1.6rem"
  button-secondary-hover:
    backgroundColor: "{colors.stamp-teal}"
    textColor: "{colors.paper}"
---

# Design System: N-Tune Automotive

## Overview

**Creative North Star: "The Service Record"**

The site presents every credibility claim as an official stamped service record rather than a marketing promise. Trust is proven the way a real shop proves it: dated ledger entries, inked seals, ring-stamped badges, a typewriter ticket face for dates and labels. The world deliberately refuses both auto-shop defaults: no checkered-flag/racing-stripe motifs, and no sterile tech-startup gloss. Color is almost entirely achromatic (warm paper, ink, steel); the two stamp-ink colors carry nearly all of the site's chroma, sourced from the shop's own logo mark rather than a generic palette choice.

The brand teal (`#0e4b5e`) is sampled directly from the shop's logo (`public/logo.jpg`, measured average ~#0e4b5e, per PRODUCT.md's Brand Commitments), not an invented accent. Its reach is deliberately wider than a pure "mark-only" ink: beyond stamp/seal/badge rings, it also colors the header's "AUTOMOTIVE" subline, the secondary "Call" button, the circle/scallop service-badge icon fills, and link hovers on dark surfaces (footer, visit card), so the shop's own brand color reads as a recognizable identity thread, not a rare accent, while still never becoming a background fill or large field. The one confirmed exception is `.btn-kuruma`, the KurumaWorks booking button, which uses KurumaWorks blue (`#2663eb`), a standing cross-site brand requirement from the reusable KurumaWorks template (PRODUCT.md > Brand Commitments), not a local palette choice. It is intentionally excluded from the brand-teal system so the booking action reads identically across every business site on the template.

**Key Characteristics:**
- Warm paper/ink/steel palette, with stamp teal (sampled from the shop's own logo) and stamp red as the system's only chroma
- Big Shoulders for display numerals and headlines only; Libre Franklin for all body/UI; Courier Prime confined to micro-labels and dates
- Hairline-rule section dividers, never shadow-card chrome
- A shared SVG ink-edge filter (feTurbulence + feDisplacementMap) textures every stamp, seal, and badge ring identically
- Ledger entries accumulate into view with an exponential ease-out, never a bounce

## Colors

The palette is restrained by design: warm neutrals carry nearly the entire page, and the shop's own logo-matched teal now threads through a defined set of brand-carrying details in addition to stamp/seal/badge marks.

### Primary
- **Stamp Teal** (`#0e4b5e`): the shop's own logo color, measured directly from `public/logo.jpg`. Used for stamp/seal rings, ledger stamp borders, service-badge rings (circle/scallop variants), focus outlines, text-selection background, the header's "AUTOMOTIVE" subline (`.brand__name-sub`), the `.btn-secondary` ("Call") button fill/border/text, and circle/scallop service-icon fills (`.service-panel__icon`, via `--stamp-teal-dark`). Never a background fill or large field.
- **Stamp Teal Light** (`#4fa3bd`): a lightened variant of the brand teal, used only where the base teal would fail contrast against the dark footer/visit-card background (`.site-footer__contact a:hover`, `.visit__fact a:hover`).

### Secondary
- **Stamp Red** (`#a83729`): the second stamp-ink color, used only for the hero "TRUSTED" stamp and the octagon service-badge ring/icon (`--stamp-red-dark`). Same mark-only restriction as teal, never a field color.

### Tertiary
- **KurumaWorks Blue** (`#2663eb`): reserved exclusively for `.btn-kuruma`, the KurumaWorks booking CTA (header, hero, mobile sticky bar). A documented cross-site exception, not part of this site's own accent system; do not reuse it for any other element and do not apply this site's brand-teal rule to it.

### Neutral
- **Paper** (`#f2ece0`): base page background.
- **Paper Raised** (`#f8f4ea`): header, ledger section, visit section, mobile sticky bar; a slightly lighter panel tone used for alternating section rhythm, not for shadow-card elevation.
- **Paper Line** (`#d8cfb8`): hairline dividers on light sections (header border, hero border, ledger rules, mobile-bar border).
- **Ink** (`#221f1a`): primary text color and the skip-link background.
- **Ink Soft** (`#55503f`): body copy on light sections (section ledes, hero body, panel text).
- **Ink Faint** (`#5c5644`): secondary/meta text (phone label, hours, hero meta line).
- **Steel** (`#4c5a5f`): structural chrome, declared but sparingly used.
- **Steel Line** (`#c7bfa8`): fine rule strokes inside the seal SVG.
- **Dark Ground** (`#1c1915`): the "Visit the Shop" card and footer background, the one deliberately dark surface on the page.
- **Dark Text** / **Dark Text Soft** (`#f2ece0` / `#c7bea3`): text on dark-ground surfaces.

### Named Rules
**The Logo-Teal Rule.** Stamp teal is the shop's own measured logo color, not an invented accent. It appears in stamp/seal/badge marks and in a defined, closed set of brand-carrying UI details (header subline, secondary button, service icon fills, dark-surface link hovers via its light variant). It never fills a background, a large field, or an element outside that set.

**The KurumaWorks Exception.** `.btn-kuruma` is the standing exception to the Logo-Teal Rule: it always uses KurumaWorks blue, sourced from the cross-site booking template, regardless of the host site's own palette.

## Typography

**Display Font:** Big Shoulders (variable, with sans-serif fallback)
**Body Font:** Libre Franklin (with sans-serif fallback)
**Label/Mono Font:** Courier Prime (with monospace fallback)

**Character:** An industrial permit/signage face (Big Shoulders) paired with a plain civic grotesk (Libre Franklin) and a typewriter-ledger accent (Courier Prime). Each face is confined to one role; none doubles as another's job.

### Hierarchy
- **Display** (800, `clamp(2.75rem, 6.4vw, 4.6rem)`, line-height 0.98): the hero headline only.
- **Headline** (800, `clamp(2rem, 4.2vw, 2.9rem)`, line-height 1.05): section headings (`.section-heading`).
- **Title** (700, 1.35 to 1.4rem, tight tracking): ledger entry titles, service-panel titles, visit-card fact values.
- **Body** (400, 1rem, line-height 1.6): all paragraph copy (Libre Franklin); section ledes run larger at 1.1rem, max 58ch.
- **Label** (400, 0.7 to 0.85rem, letter-spacing 0.08 to 0.25em, Courier Prime): phone label, hours, hero meta line, seal ring text/tag, visit-card `dt` labels, brand sub-line ("AUTOMOTIVE"). Always micro-labels or dates, never paragraphs or headlines.

### Named Rules
**The Three-Tier Rule.** Big Shoulders is for display/numerals only, Libre Franklin is for all body and UI text, and Courier Prime is for micro-labels and dates only. No face crosses into another's role anywhere on the page.

## Layout

Content is capped at a 1280px max-width container (780px for the narrower ledger column), centered, with a fluid gutter of `clamp(1.25rem, 4vw, 3rem)`. Section vertical rhythm uses a single `--section-pad` token (`clamp(4rem, 9vw, 7.5rem)`), and light/raised paper tones (`--paper` / `--paper-raised`) alternate section-to-section instead of using card chrome to separate them. The hero and services grids collapse to one column below 960px/760px respectively; the header sheds secondary content (hours, then the wordmark subline, then the full brand name) at 899px, 559px, and 339px so the phone number and booking CTA stay visible at every width down to 320px, per PRODUCT.md's "reachable at a glance" constraint. Below 640px a fixed mobile sticky bar (call + KurumaWorks button) replaces the header's contact cluster as the primary action surface.

## Elevation & Depth

Flat by default: sections are separated by 1px hairline rules (`--paper-line`, `--dark-paper-line`), never drop-shadow cards. The only two shadows in the system are functional, not decorative: a soft shadow under the sticky header once scrolled (`.site-header--scrolled`) and a lift under the fixed mobile sticky bar, both signaling "this element floats above content," not surface elevation on cards or panels.

### Shadow Vocabulary
- **Header scroll shadow** (`box-shadow: 0 6px 18px -12px rgba(34, 31, 26, 0.35)`): appears only once the page has scrolled past the top, confirming the sticky header now floats over content.
- **Mobile bar shadow** (`box-shadow: 0 -8px 20px -14px rgba(34, 31, 26, 0.45)`): permanent, since the mobile bar is always fixed above content.

### Named Rules
**The No-Card-Shadow Rule.** No shadow-card chrome appears on any content panel, ledger entry, or service panel. Shadows are reserved for elements that are literally fixed/sticky above the page (header once scrolled, mobile bar).

## Shapes

Corners are modest and functional: 4px on buttons, 6px on the one dark card (`--radius`), full circles for stamps, badges, and brand marks. Stamp and seal edges are never geometrically clean: every stamp, ledger stamp, and service-badge ring runs through the shared `#ink-edge` SVG filter (feTurbulence + feDisplacementMap) to read as hand-inked rather than vector-perfect. The hero stamp additionally carries a fixed rotation (-11deg) and `mix-blend-mode: multiply` to sit into the paper like real ink; ledger stamps rotate -6deg at rest and settle to 0deg when revealed.

## Components

### Buttons
- **Shape:** 4px radius, 2px border, no shadow.
- **KurumaWorks CTA (`.btn-kuruma`):** solid KurumaWorks blue (`#2663eb`) fill, white text, 2px matching border; every "Book Now" instance across header, hero, and mobile bar. This is the one component whose color is not drawn from this site's own palette (see Named Rules above).
- **Hover / Focus:** inverts to white background with KurumaWorks-blue text/border, 150ms ease.
- **Secondary (`.btn-secondary`):** transparent with a 2px stamp-teal border and stamp-teal text (used for the hero and mobile-bar "Call" link, replacing the plain-ink treatment of the previous palette); hover/focus inverts to solid stamp-teal background with paper text.

### Cards / Containers
- **Corner Style:** 6px radius on the single dark "Visit the Shop" card; everything else is corner-free (full-bleed sections).
- **Background:** paper / paper-raised on light sections; dark-ground on the visit card and footer.
- **Shadow Strategy:** none, see Elevation & Depth. Sections separate via hairline rules, not card chrome.
- **Border:** 1px hairline dividers between sections; no borders on the dark card itself.

### Navigation
- **Style:** sticky header, paper-raised background, 1px bottom hairline. Logo + wordmark left (the "AUTOMOTIVE" subline set in stamp teal), phone number + hours right-aligned before the booking CTA. No hover-underline nav links are used; the header is contact/CTA-first rather than a link menu.
- **Mobile treatment:** header sheds secondary text progressively by breakpoint; a separate fixed mobile sticky bar (call + KurumaWorks CTA) takes over as the primary action surface below 640px.

### Ledger Entries (signature component)
A vertical list of dated trust-record entries (`.ledger__entry`), each pairing a circular ink-stamped date badge (`.ledger__stamp`, ink-edge filtered, stamp-teal border, -6deg rotation at rest) with a title/body pair. Entries start invisible, offset, scaled down 3%, and rotated -1.5deg; they reveal via IntersectionObserver (with a scroll-based safety net so nothing stays permanently hidden under an instant/fast scroll) and settle to their resting state over 480ms with `cubic-bezier(0.16, 1, 0.3, 1)`, an exponential ease-out, never a bounce or elastic curve. This is the page's one signature interaction and the visual expression of "history accumulates, every earlier mark stays visible."

### Service Badges
Three ink-edge-filtered SVG badge shapes (circle, octagon, scallop) ringed in stamp teal (circle/scallop) or stamp red (octagon), each holding a centered icon filled in the matching dark ink variant (`--stamp-teal-dark` for circle/scallop, `--stamp-red-dark` for octagon). On desktop the circle and scallop panels offset vertically (`translateY(-6px)` / `translateY(10px)`) to read as unevenly stamped rather than grid-perfect.

## Do's and Don'ts

### Do:
- **Do** confine Big Shoulders to display/numeral roles, Libre Franklin to body/UI, and Courier Prime to micro-labels/dates; never mix roles.
- **Do** keep stamp teal and stamp red inside stamp/seal/badge marks, plus the closed set of brand-carrying details named in the Logo-Teal Rule (header subline, secondary button, service icon fills, dark-surface link hovers).
- **Do** use the shared `#ink-edge` filter for any new stamp, seal, or badge element so the ink-textured edge stays consistent.
- **Do** use hairline rules (`--paper-line` / `--dark-paper-line`) to separate sections.
- **Do** use `cubic-bezier(0.16, 1, 0.3, 1)` exponential ease-out for reveal/settle motion; pair any IntersectionObserver reveal with a scroll-based fallback so content isn't permanently hidden on fast/instant scroll.

### Don't:
- **Don't** wash stamp teal or stamp red across a background, large field, or component outside the defined mark and brand-detail set.
- **Don't** recolor `.btn-kuruma` to match this site's local palette; it is a fixed cross-site brand exception.
- **Don't** add shadow-card chrome to panels, ledger entries, or service badges; shadows are reserved for genuinely fixed/sticky elements.
- **Don't** use bounce or elastic easing anywhere; motion settles, it doesn't overshoot.
- **Don't** introduce kickers/eyebrows, hard-offset neobrutalist shadows, glyph icon fonts, or system display faces; none exist in the shipped build, and none fit this restrained, ink-stamped world.
