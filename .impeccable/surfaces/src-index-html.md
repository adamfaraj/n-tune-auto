---
version: 1
slug: "src-index-html"
primary_target: "src/index.html"
related_targets: []
---

# Homepage surface brief

Scope: N-Tune Automotive marketing homepage (src/index.html). Visitor mode: Persuade.

Audience: Vehicle owners in Durham/Orange County, NC deciding whether to trust N-Tune Automotive with their car. Job: recognize this as a real, established, honest neighborhood shop and book a service appointment via KurumaWorks. Proof/content available: real address/phone/hours, the shop's own logo, its Facebook-sourced "friend-mechanic since 1999" positioning copy, and the three confirmed service categories. No testimonials, pricing, certifications, or team photos exist — none may be invented.

Constraints: no fabricated reviews/testimonials/pricing/credentials/stock people. Real contact info visible at a glance on every viewport (sticky header, mobile sticky bar). Booking always routes to KurumaWorks via a single JS constant (placeholder shop id for now). Must avoid reading as a generic slick tech startup, corporate/chain-like, or cold/impersonal (explicit anti-goals from the client).

## Direction contract

THESIS: Every credibility claim on the page reads like an official stamped service record, not a marketing promise — refusing both the checkered-flag/racing-stripe auto-shop default and the sterile tech-startup opposite. Raises won against the dealt challengers: hairline-rule section dividers instead of shadow-card chrome (raised from the dark-first-console challenger's panel discipline, declined — wrong mode, but its no-shadow hairline discipline is adopted); trust facts presented as an accumulating dated ledger down the page rather than a flat icon row (raised from the orizuru-crane challenger's continuous-accumulating-form discipline, declined — no thematic fit, but its "history accumulates, every earlier mark stays visible" idea is adopted for the "since 1999" story); color kept almost entirely achromatic except at stamp/seal edges (raised from the iridescent-cloud-edge challenger's confined-spectral-band discipline, declined — no thematic fit, but its restraint discipline is adopted).

OWN-WORLD: Color strategy Restrained — warm paper cream (#F3EDE1-ish) and aged manila ground, graphite/ink near-black for text and rules, steel gray for structural chrome. Two accent colors appear ONLY inside stamp/seal/badge marks: an inspection-sticker teal-green (~#1F6F5C family) and a stamped-ink red (~#B23A2E family) — never washed across backgrounds or large fields. EXCEPTION, cited: the KurumaWorks booking CTA (`.btn-kuruma`, every "Book Now" instance) is exempted from this surface's own accent rule and instead uses solid KurumaWorks blue (#2663eb) — a standing, cross-site brand requirement from the reusable KurumaWorks-booking template (see PRODUCT.md > Brand Commitments), not a local design choice, kept deliberately distinct from this site's own palette so the booking action reads identically across every business site built on the template. Trust markers (est. 1999, family owned, service categories) render as circular/octagonal stamped seals with a rotated-stamp feel (subtle rotation, inked-edge texture via an SVG feTurbulence/feDisplacementMap filter shared across the hero stamp, ledger stamps, and service badges, never a literal clipart stamp icon). Section dividers are single hairline rules, not drop-shadow cards. Numerals (year, phone, mileage-style callouts) set large and bold in a condensed industrial display face. Dated entries (est. 1999 marker, hours) carry a typewriter-ledger accent face used sparingly for dates/labels only.

Typography: Big Shoulders (Display/Text, variable) for stamped headlines and large numerals — an industrial permit/signage face with genuine reason (steel-stencil character matches the seal/stamp world), never used as body copy. Libre Franklin for all body copy and UI text — a plain American civic/utilitarian grotesk, matching the "official record" world without becoming a themed gimmick. Courier Prime used sparingly and only for ledger-style micro-labels (dates, "EST. 1999", ticket-style numbers) — never for paragraphs or headlines.

STORY: A Durham/Orange County driver lands, within the first viewport recognizes this as a real decades-old family-run shop rather than a chain or app, sees the accumulating service-record proof (since 1999, family owned, real address/phone/hours), and books through KurumaWorks or calls.

FIRST VIEWPORT: Sticky header — logo left, real phone number + hours pushed right, KurumaWorks booking button far right (.btn-kuruma; full "Book Now on KurumaWorks" wording at ≥900px, shortened to "Book Now" below that so the always-visible real phone number fits at every width down to 320px — see PRODUCT.md's "reachable at a glance at every viewport" constraint). Hero below: left column carries a headline in Big Shoulders built from the confirmed positioning ("friend-mechanic," trusted since 1999 — real copy, not invented), one sentence of the real Facebook-sourced description, primary CTA (btn-kuruma, full "Book Now on KurumaWorks" wording) plus a secondary "Call (919) 401-2612" link. Right column (or below content on mobile) carries a large stamped-seal SVG graphic (concentric rings, inked "1999" numeral, ring text, ink-edge-textured "TRUSTED" stamp) — no stock photography of people/vehicles. Hairline rule closes the viewport before the services section.

FORM: Assigned candidate 6 of 7 grounded directions (own list), seed key 0409734a — "state inspection & mileage-reminder sticker system" world, built as "The Service Record."

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.
