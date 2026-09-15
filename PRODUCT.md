# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Plain HTML/CSS/JS (no framework) built with Vite. src/ as the Vite root (src/index.html, src/css/, src/js/), public/ for static assets (logo, favicons) copied to the output root, dist/ as the build output. Deploys to AWS Amplify Hosting via amplify.yml (npm ci → npm run build → publish dist/).

## Users

Vehicle owners in Durham and Orange County, NC who need a trustworthy local repair shop for routine maintenance, diagnostics, and repair work, and who are shopping for a mechanic they can return to long-term rather than a one-off transaction.

## Product Purpose

A marketing/local-presence website for N-Tune Automotive, a family-owned general auto repair shop in Durham, NC. The site's job is to get real contact info and trust signals in front of a visitor fast and drive them to book a service appointment through KurumaWorks.

## Positioning

Family owned and operated, serving Durham and Orange Counties since 1999. Built on a "friend-mechanic" relationship rather than a transactional one — customers are treated like family, told exactly what to expect, and the shop aims to exceed that expectation rather than over-promise and under-deliver. Longevity (25+ years serving the same counties) is the credibility anchor, not price or speed.

## Operating Context

Single physical shop location; customers visit in person for service and can book ahead via KurumaWorks online booking.

## Capabilities and Constraints

- Services offered: general repair & maintenance (oil changes, brakes, tune-ups), diagnostics & check engine light / electrical troubleshooting, engine & transmission repair.
- Booking is handled entirely through KurumaWorks (external booking flow), not a custom form.
- KurumaWorks shop id is not yet available — booking links use a placeholder wired through a single JS constant until the real id is provided.

## Brand Commitments

- Name: N-Tune Automotive.
- Existing logo: public/logo.jpg (wrench-and-gear mark in a dark teal, "N-Tune AUTOMOTIVE" wordmark) — treat as a binding brand asset, not a placeholder to redesign.
- Voice: warm, straightforward, "friend-mechanic" — not slick or upsell-y.
- KurumaWorks booking CTA (`.btn-kuruma`): solid KurumaWorks blue (#2663eb) fill with white text at rest, inverting to a white background with a KurumaWorks-blue border/text on hover. This is a standing, cross-site requirement from the reusable KurumaWorks-booking template this project follows (`~/Personal/KURUMA_SITE_PROMPT.md`), not a per-project design choice: it keeps the KurumaWorks booking action visually consistent and recognizable across every business site built on the template, deliberately distinct from each business's own brand/accent colors. It is an intentional exception to this surface's own accent-color rule (see the direction contract) and should not be recolored to match a site's local palette.

## Evidence on Hand

- Address: 411 Erwin Rd, Durham, NC 27707
- Phone: (919) 401-2612
- Hours: Mon–Fri 8 AM–5 PM
- About copy (from the business's own Facebook page, source of truth for positioning language): family-owned since 1999, serving Durham and Orange Counties, "friend-mechanic" relationship, trust and expectation-setting as the top priority.
- No testimonials, reviews, pricing, certifications, or team bios have been provided — none of these may be fabricated; flag as missing rather than inventing.
- Google Analytics measurement ID: G-HBXLVWXC4Y
- Domain: ntuneauto.com

## Product Principles

1. Trust is the product — every design and copy decision should reinforce the 25-year, family-run, friend-mechanic positioning over generic "professional" auto-shop tropes.
2. Real contact info must be reachable within one glance at every viewport (phone, address, hours) — never buried behind navigation.
3. Never fabricate content: no stock imagery standing in as this shop's own people/vehicles/space, no invented testimonials, reviews, pricing, or credentials.
4. Booking friction should be minimal — KurumaWorks is the single, consistent path to action across the site.

## Accessibility & Inclusion

No product-specific requirement beyond standard WCAG best practice.
