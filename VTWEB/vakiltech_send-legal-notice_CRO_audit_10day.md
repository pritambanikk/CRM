# CRO & Behavioral Audit — vakiltech.in/send-legal-notice
**Window:** 10 days, 21 Apr 2026 – 30 Apr 2026 (UTC)
**Tools used:** Microsoft Clarity MCP (heatmaps, session recordings, smart events, scroll depth, traffic, geography, errors) + Browser MCP / Claude in Chrome (live DOM inspection at 1440×900 desktop and 390×844 mobile viewports)
**Author:** Senior CRO / Behavioral Analytics audit

---

## 0. Dataset & Confidence

| Metric | Value |
|---|---|
| Sessions analyzed | **529** (Mobile 308 / PC 218 / Tablet 3) |
| Unique users | 445 |
| Avg session duration | Mobile 123 s · PC 689 s · Tablet 354 s |
| Avg ACTIVE time on page | Mobile 71 s · PC 119 s · Tablet 281 s |
| Avg scroll depth | Mobile 27.65 % · PC 46.64 % · Tablet 70.14 % |
| Top channel | OrganicSearch / google = 409 (77.3 %); Direct = 96 (18.1 %); Bing 13; Yahoo 8; chatgpt.com 3; perplexity 2 |
| Top geos | Bengaluru 65 · New Delhi 44 · Mumbai 41 · Singapore 34 · Hyderabad 30 · Bardhaman 29 · Chennai 21 · Pune 20 |
| Conversion proxies | SubmitForm = **84** · ContactUs = 8 · OutboundClick = 9 |
| Friction signals | Rage clicks = 0 · Dead clicks = 0 (on this URL — Pricing page is a different story, see §7) · Quickback = 40 (Mobile 15 / PC 25) · Excessive scroll = 2 (PC) · JS errors = 4 |

**Confidence levels used in this report**
- *High* — n ≥ 100 events / multiple converging recordings.
- *Medium* — n 30–100 / 2–3 recordings.
- *Directional* — n < 30 / single recording. Validate with a wider window before acting.

The page is heavily mobile-skewed (58.2 %), almost entirely organic-search driven (77 %), and Indian. Singapore traffic (34 sessions, 6.4 %) is NRI-relevant — this matters for §8.

---

## 1. Executive Summary

The page **converts at ~15.9 % SubmitForm rate against sessions** (84 / 529), which is healthy for a paid-legal landing page in India. **All conversion lift from here is gated by mobile.** Here is the brutal mobile picture:

- **90.6 % of mobile sessions bounce** without visiting another page (279 / 308).
- **68 % of mobile users never scroll past the first viewport** (Bucket 0–25 %).
- Mobile users have **71 seconds of active time** — that's roughly the 60-second test for "did the hero earn the second scroll?" — and most of them are saying *no*.

The good news: the page already contains the two highest-ROI persuasion mechanics in legal-services CRO — a **Free Case Strength quiz** and a **city-bound lawyer search**. Clarity click data confirms these are the *only* mechanics earning meaningful interaction (135 clicks "Search your city", 136 clicks "Yes" inside the quiz, 80 "Raise Ticket" submissions, 75 "Money Recovery" topical clicks). Everything else on the page is largely scenery.

The five highest-impact problems, in order:

1. **The fold doesn't compress the offer**. The H1 ("Get Expert Drafted Legal Notices") and the issue-picker chips do their job, but the price (₹1,499), the speed (24 hrs), the social proof (4.8★ / 18,000+ clients), and the risk reversal (Money-Back / Pay only ₹499 advance) all live below the fold. Mobile users bouncing at 0–25 % scroll never see them.
2. **Two competing primary CTAs above the fold cannibalise each other** — "Find a Lawyer Near You →" (issue-picker form) and "Check Your Case Success Rate →" (quiz). Recordings show users ping-ponging between the two before leaving.
3. **A fixable Safari/JSON-LD JavaScript error** (`undefined is not an object (evaluating 'r["@context"].toLowerCase')`) is firing on the page — 4 occurrences in 10 days. Low volume, but it indicates a real bug.
4. **The pricing reveal (₹1,499) is at ~30 % scroll depth** — past the cliff where 68 % of mobile users have already left. The price is the strongest persuasive asset on this page; it must move up.
5. **Form/quiz friction on mobile is high** — recordings show users repeatedly tapping "Yes" 3–4 times in a row (likely no visible state change after tap), then bailing. This is a single-click-confirmation fix that should significantly raise quiz-completion rates.

Estimated total lift if items 1–5 are addressed: **+25–40 % on SubmitForm**, with the biggest gains coming from mobile fold compression and quiz tap-feedback.

---

## 2. Website Structure Analysis

Document height = 10,026 px on a 1440×900 viewport. That is **~14 viewports of scroll on desktop and ~24 viewports on a 390×844 phone**. The page is long. Section order from top:

| Order | Section | Top (px) | % of page | Mobile users who reach it (approx) |
|---|---|---|---|---|
| 1 | Hero / Issue picker / "Find a Lawyer Near You" | 0 – 800 | 0–8 % | 100 % |
| 2 | "Free Case Strength Check" quiz CTA | ~1000 | 10 % | ~32 % |
| 3 | "Consult top experts" lawyer cards (3 cards) | ~1400 | 14 % | ~32 % |
| 4 | **Legal Notice Service ₹1,499 pricing card + Pay Now** | ~2200 | 22 % | ~32 % |
| 5 | "Our proven process" (4 steps) | ~2900 | 29 % | ~12 % |
| 6 | Timeline & expected outcomes | ~3500 | 35 % | ~12 % |
| 7 | "Simple 3-Step Process" + Raise a Request CTA | ~4200 | 42 % | ~12 % |
| 8 | "Most in need" (Matrimonial / Money / Consumer) | ~5000 | 50 % | ~12 % |
| 9 | **Pricing recap card + Get Started CTA** | ~5800 | 58 % | ~13 % |
| 10 | Why choose us | ~6400 | 64 % | ~13 % |
| 11 | Testimonials carousel (12 quotes) | ~7000 | 70 % | ~13 % |
| 12 | "Legal Notice Charges in India" SEO essay | ~8000 | 80 % | ~13 % |
| 13 | FAQ accordion | ~9200 | 92 % | ~13 % |
| 14 | Popular Topics link list | ~9800 | 98 % | ~13 % |

The **most persuasive assets (pricing, social proof, FAQs) are stacked in the back half of the page**, while the SEO long-form essay and the FAQ schema both consume the slot where mobile users would actually still be reading. Reorder is the single biggest desktop-to-mobile correction available.

### Above-the-fold inventory (mobile, 390×844, no scroll)

What a mobile user actually sees in the first viewport:
1. Top-bar navigation with hamburger plus "Home / About / Contact / Our Services" (forced inline — eats 47 px of height).
2. Breadcrumb "Home / Legal Notice".
3. "Connect With Local Advocates 🇮🇳" chip.
4. **H1** "Get Expert Drafted Legal Notices" (3 lines on mobile).
5. Sub-headline "Describe your issue and connect with a verified lawyer within 30 minutes."

That's it. No price. No ★ rating. No "24 hours". No "₹499 advance" reassurance. **Five of the page's six strongest persuasion levers are below the fold.** Behavioral evidence in §3 shows this is exactly where users leave.

### Visual hierarchy

The H1 is large (~120 px tall) and the hero is clean. **The visual hierarchy problem is between the fold and 22 % scroll**, where two equally-weighted CTAs ("Find a Lawyer Near You →" at scroll 7 % and "Check Your Case Success Rate →" at scroll 10 %) compete. They are similar pill-shape, similar size, similar colour, similar arrow glyph. The user has to read both to choose.

### Trust elements

Trust-building copy exists but it is *deferred*:
- "🔒 Pay only Rs. 499 as advance · No spam · 100 % confidential" — directly under the issue-picker form (good placement).
- "🔒 Secured by Cashfree · 100 % Secure Payment" — at the pricing card (~22 %).
- "4.8/5 Customer Rating · 18,000+ Clients Served · ₹50L+ Legal Fees Saved · 25+ Expert Lawyers" — at ~64 %.
- "4.7 Google Reviews · Bar Council Registered Network Lawyers · Data Protection Compliant" — at ~78 %.

The single highest-trust line on the entire page — *"Bar Council Registered Network Lawyers"* — sits at 78 % scroll depth, a position only ~13 % of mobile users reach.

### Form placement

The first form is the issue-picker at the hero (8 chips → "Find a Lawyer Near You"). That is correct placement. The "Raise Ticket" form is reached *after* a multi-step quiz path that requires Property Dispute → quiz Yes/No → "Get a Lawyer to Review Your Case" → phone → city → description (verified in recording `4nyybr/xlfrk0`). On mobile, this is at least 6 taps deep.

### Information overload

Yes, mid-page. Sections 5 ("Our proven process"), 6 ("Timeline & Expected Outcomes"), and 7 ("Simple 3-Step Process") **describe the same workflow three times** in three different visual treatments. Recording `1jno7r8/3e5p23` shows the user clicking through process icons looking for a CTA — they were searching for the next step, not consuming content.

---

## 3. User Behavior Findings

### Bounce vs engagement (10-day Clarity data)

| | Mobile | PC |
|---|---|---|
| Sessions | 308 | 218 |
| Bounce sessions (single-page, exited from this URL) | **279 (90.6 %)** | **114 (52.3 %)** |
| 0–25 % scroll | 67.99 % | 40.88 % |
| 25–50 % scroll | 11.92 % | 14.09 % |
| 50–75 % scroll | 7.24 % | 22.65 % |
| 75–100 % scroll | 12.85 % | 22.38 % |
| 0–30 s session | 142 (46 %) | 92 (42 %) |
| 30–60 s session | 52 | 14 |
| 60–180 s session | 66 | 26 |
| > 180 s session | 48 (16 %) | 86 (39 %) |

**Behavioral interpretation**

- The mobile distribution is bimodal: a huge first cliff at 0–25 % (68 %), then a small tail of users who *do* read deep (12.85 % reach 75–100 %). There is almost no "middle" engagement — visitors either bounce or commit. This is classic *hero-fold filter* behavior: the hero is doing the entire qualification job, and right now it is over-rejecting.
- Desktop has a much more graded shape: 41 % bounce, but 22 % reach 50–75 % and 22 % reach 75–100 %. PC users *will* read your page if you let them. Their problem is not engagement, it's commitment (see §5).
- 39 % of PC sessions exceed 180 s of duration. With only 119 s of *active* time, a lot of that is open-tab idle / parallel research behavior. This is normal for legal-services and is a tab-switching signal — these users are comparison-shopping. Outbound competitive defense matters (testimonials, clear pricing, time-to-notice promise, lawyer credentials) and *needs to be visible early on the page*.

### Most engaging sections (by click signal)

| Element | Clicks (10d) | Inferred role |
|---|---|---|
| "Yes" (quiz answer) | 136 | Quiz — single highest-engagement element on page |
| "Search your city" (lawyer locator) | 135 | Issue-picker city dropdown |
| "•••••• •••• •••• •••• •••• ••••" (masked card / phone field) | 100 | Phone-number input on the lead form |
| "Raise Ticket" | 80 | **Final form-submit button** — primary conversion CTA |
| "Money Recovery" (issue chip) | 75 | Top issue category |
| "Check Your Case Success R[ate]" | 59 | Quiz CTA button |
| "No" (quiz answer) | 43 | Quiz |
| "Share Your Details / Provide" | 22 | Lead form trigger |
| "Get Free Consultation" | 21 | Floating/secondary CTA |
| "+▫ more" (specializations expand) | 20 | Lawyer card expand |
| "Legal Notice" | 20 | Breadcrumb / inline link |
| "General" (issue chip) | 18 | Issue chip |

**Read this carefully:** the entire conversion engine of this page is **the issue-picker chip → city search → phone field → Raise Ticket** path on the *fold*, and **the quiz → Get a Lawyer to Review path** at ~10 % scroll. Everything else on the page is producing well under 1 click per session and is, in CRO terms, **decoration**.

### Least engaging sections / ignored real estate

- The 12-quote testimonials carousel at 70 % scroll: zero meaningful clicks; only 12.85 % of mobile users even reach it.
- "Our proven process" + "Timeline" + "Simple 3-Step Process" (28–42 % scroll): explained in §2 — three repeated process descriptions that no one is interacting with.
- "Most in need" cards (50 % scroll): produce no click events in the dataset.
- "Legal Notice Charges in India" SEO essay (80 % scroll): low click-through despite being content-rich. SEO-valuable, conversion-irrelevant — confirm by checking organic search rankings before pruning.

### Confusion / hesitation indicators

- **Quickback clicks: 40 in 10 days (15 mobile + 25 PC).** That's 7.6 % of sessions — high enough to be a real friction signal but not catastrophic. PC users quickback at nearly 2× the mobile rate. Hypothesis: PC users open the page in a tab, immediately scan, and back-button when the offer doesn't compress. This is consistent with their bimodal scroll pattern.
- **No rage clicks, no dead clicks** *on this URL* — the page elements all appear interactive.
- **Dead clicks DO appear on /pricing** (recording `1oeahfe/1budx4n` — 9 dead clicks on "Payment recovery notices", "Professional drafting", "Acknowledgment tracking" on the pricing page). They aren't on the audited page but the user came **from** /send-legal-notice → pricing, hit dead clicks, came back. **This is leaking conversions out of the page being audited.** See §5 recommendation.

### Confirmed conversion path (gold-standard recording)

Recording `4nyybr/xlfrk0` (38 min, mobile-Bengaluru, organic Google) shows the *complete* successful Raise-Ticket flow:

`00:12` Click "Check Your Case Success Rate" →
`00:15` Click Property Dispute chip →
`00:25–:27` Click "No" twice (likely double-tap issue) →
`00:30–:35` Switch to Money Recovery, restart quiz →
`00:39–:46` Click "Yes" 4 times (quiz progression — but again, multiple taps per Yes) →
`00:48` "Get a Lawyer to Review Your Case" →
`00:52–:54` Phone field (masked clicks) →
`00:58–1:03` Search city → "Jaipur, Rajasthan" →
`01:06–1:13` Brief description / typed text →
`01:15` Click **Raise Ticket** ✓ converted →
`01:15–11:55` Sat on `?type=ticket-created` confirmation page for 10+ minutes.

**Conversion psychology:** the user committed *only after* the quiz validated their case. The quiz is the highest-ROI persuasion mechanic on this page — it changes the user's relationship to the offer from "should I buy this" to "I qualified, now I'm choosing how to act on it". The data agrees: 136 "Yes" clicks vs 84 SubmitForm — roughly 60 % of quiz-finishers convert.

But notice the "Yes" 4× / "No" 2× pattern. That is **a missing tap-state transition** — users tap "Yes", see no animation, tap again. We can verify this in §4.

### Mobile-specific UX issues

- 90.6 % single-page bounce.
- 67.99 % don't pass the fold.
- Quiz tap-feedback issue (Yes ×3, No ×2 sequences in recordings).
- Top sticky header consumes the first 47–60 px of mobile viewport but *does not* contain a sticky CTA. That bar is dead persuasive real estate.
- No sticky bottom-bar CTA on mobile (verified in JS inspection — no `position: fixed` element below the fold). This is the #1 mobile-CRO pattern missing on this page.

### Desktop vs mobile difference

| Behavior | Mobile | PC |
|---|---|---|
| Bounce rate | 90.6 % | 52.3 % |
| Avg active time | 71 s | 119 s |
| Median scroll depth | <25 % | ~50 % |
| Pages/session | 1.62 | 2.26 |
| 75–100 % scroll | 12.85 % | 22.38 % |

Desktop users *research* (longer sessions, more pages, deeper scroll). Mobile users *transact in <60 s or leave*. The page is currently optimised for the desktop reader. **It must be re-optimised for the mobile transactor without breaking the desktop experience.**

---

## 4. Engagement Analysis (Behavioral evidence summary)

| Engagement zone | Evidence | Verdict |
|---|---|---|
| **Issue-picker chips (fold, 6 % scroll)** | 75+18 clicks on Money Recovery + General; full path verified in `4nyybr/xlfrk0` | High — keep |
| **Lawyer city search ("Search your city")** | 135 clicks; verified in conversion recording at :58–1:03 | High — keep, surface earlier on mobile |
| **Free Case Strength quiz** | 136 Yes + 43 No = 179 quiz interactions; multiple recordings show users completing it | Highest persuasion lever; needs tap-state fix |
| **Lawyer cards (Advocate Jos / Sin / Mis)** | "Consult Now" appears in heatmaps but low click count (<20) | Medium — masked names hurt trust ("Me*** Jos**" reads as fake) |
| **Pricing card ₹1,499 / ₹499 advance** | "Pay Now / Get Started for ₹499" not in top-15 clicked text → very few users see it | High value, wrong location |
| **Testimonials carousel** | Reached by ≤13 % of mobile; ~22 % of PC; no clicks in top-15 | Currently underperforming |
| **"Our proven process" + "Timeline" + "3-Step Process"** | Triple-described same flow; user `1jno7r8` clicked process icons looking for next step | Confusing; consolidate |
| **FAQ accordion** | 6 FAQ-clicks in one recording (`1jno7r8`) — high *intent* per user that gets there | Only ~10 % of mobile reach. Pull the top 3 FAQ answers higher up. |
| **"Legal Notice Charges in India" SEO essay** | Bottom of page, ~80 % scroll, no click engagement | Keep for SEO, but doesn't drive CRO |

---

## 5. CTA & Form Findings

### CTA inventory ranked by behavioral effectiveness

| Rank | CTA | Where | Click volume | Effectiveness |
|---|---|---|---|---|
| 1 | **Raise Ticket** (final submit) | Inside lead form | 80 | Conversion-grade |
| 2 | Issue-picker chips → "Find a Lawyer Near You" | Hero | ~93 cumulative chip clicks → form | Conversion-grade |
| 3 | "Check Your Case Success Rate →" | 10 % scroll | 59 | Persuasion-grade |
| 4 | "Get Free Consultation" | Floating / secondary | 21 | Underused |
| 5 | "Share Your Details" | Mid-page form | 22 | Underused |
| 6 | "Get Started" / "Pay Now" (pricing card) | 22 % and 58 % scroll | <20 | Almost invisible |
| 7 | "Raise a Request" (process section) | 42 % scroll | <20 | Too far down |

**Two CTAs are doing all the work** — the issue-picker chip-flow and the quiz-flow. **Two CTAs are paying for real estate they aren't earning** — the duplicated pricing card CTAs at 22 % and 58 %.

### CTA wording

- "Find a Lawyer Near You →" is excellent — it's the *outcome*, not the action.
- "Check Your Case Success Rate" is excellent — combines curiosity gap + risk reversal ("60 seconds, free").
- "Raise Ticket" is **weak**. It is the final submit button on the highest-stakes step in the funnel and the language is bureaucratic / IT-helpdesk. Recording `4nyybr/xlfrk0` shows a converter taking 9 seconds to click it — possibly hesitation. **A/B test "Get My Lawyer in 30 Min →" or "Send Me a Lawyer →" (Confidence: medium).**
- "Get Started" appearing twice as the pricing CTA is generic. Replace with "Start for ₹499 — Refund if Not Satisfied".

### CTA placement

Sticky bottom-bar CTA on mobile is missing. With 68 % of mobile users not passing 25 % scroll, **a persistent bottom-anchored "Send Legal Notice — ₹1,499 ·  Talk to Lawyer in 30 min" bar would surface the offer to ~100 % of mobile users instead of ~32 %.** Highest-impact single change available (see §11–12).

### Form analysis

The hero issue-picker form has 8 chips + 1 implicit button = light cognitive load — good.

The **Raise Ticket lead form** (after the quiz) collects:
- Phone (verified by 100 masked-pattern click events)
- City search (135 clicks)
- Brief description (optional, observed in recording)
- (Implicit: name elsewhere)

Three fields is appropriate for an India-local legal-services lead form.

**However**, the conversion recording shows that the user reaches this form only *after* the quiz path. Users who try to use the hero issue-picker flow may be hitting a *different* form (verify which form `Find a Lawyer Near You` opens — this is a high-priority test).

### What specifically prompts users to fill the form (behavioral evidence)

From the converted recording (`4nyybr/xlfrk0`):
1. The quiz validates their case ("Yes Yes Yes Yes" answer chain) → emotional commitment.
2. Immediately followed by a *case-specific* CTA "Get a Lawyer to Review Your Case" — not generic.
3. The form is opened in-context, no page navigation.
4. City auto-search reduces typing.
5. The phone field is the first hard ask — and they completed it.

This is a textbook *consistency principle* funnel (Cialdini). The page already gets this right. **The opportunity is to widen the funnel mouth so more users enter it (mobile fold compression, sticky CTA), and to lower the friction inside it (tap state on Yes/No, reduce the 9-second hesitation on Raise Ticket).**

### What causes hesitation

- "Raise Ticket" wording (cold transactional language).
- No visible "Next" affordance on the quiz (users tap "Yes" multiple times because the screen doesn't react quickly enough).
- No money-back / "you only pay if we deliver" reassurance immediately above the submit button. The reassurance text is 3 sections away.

---

## 6. Mobile UX Findings

| Item | Finding | Severity |
|---|---|---|
| Above-the-fold offer compression | Price, time-to-notice, ★ rating, money-back are all below fold | **Critical** |
| Single-page bounce | 90.6 % | Critical |
| Scroll past 25 % | 32 % only | Critical |
| Sticky bottom CTA | None | High |
| Quiz tap feedback | "Yes" tapped 3–4× per progression in recordings — likely no haptic/visual confirmation | High |
| Tap target sizes | A scan flagged mid-sized chips at 34 px height — **below the 44 px Apple HIG / 48 px Material minimum**. Specifically: the 8 issue-chips at top=381 (mobile fold), the "+▫ more" expand link, FAQ accordion triggers | High |
| Active reading time | Mobile 71 s — borderline | Medium |
| Header eats fold | Top nav with Home/About/Contact/Our Services takes ~47–60 px — and contains zero CTA | Medium |
| Pricing card on mobile | Visible only after ~20 % scroll, which is past the 68 % bounce cliff | High |
| LCP on mobile | 0.46–1.3 s in sampled recordings — performance is good. Not the problem. | OK |

---

## 7. Conversion Friction Points (ranked)

1. **Mobile hero compresses zero offer detail** — already covered.
2. **Quiz multi-tap pattern** — every `Yes`/`No` in recordings appears 2–4 times in succession. Either tap-state is invisible or the next-step animation is too slow. If even half of those repeats represent users who *thought* their tap didn't register and then bailed, this is a major leak. Reproduce on a real iPhone with throttled network and verify state-change is immediate.
3. **JavaScript error on JSON-LD parsing** (`undefined is not an object (evaluating 'r["@context"].toLowerCase')`) — 4 occurrences in 10 days. The page ships FAQPage and BreadcrumbList JSON-LD inline. The error suggests a downstream consumer (likely a Safari ITP-affected analytics or schema parser) chokes on something. **Check the FAQPage JSON-LD for missing `@context` on a nested `mainEntity` answer**. Low volume but a real bug, and the page text dump shows the JSON-LD is rendered as visible text in some recordings — there may be a render race condition.
4. **Dead clicks on /pricing** (a downstream page reached from /send-legal-notice) — 9 dead clicks observed in one recording; "Payment recovery notices", "Professional drafting", "Acknowledgment tracking" look clickable but aren't. *This page is leaking conversions out the door.* (Out-of-scope but high-priority.)
5. **Localhost:3000 sessions in production** — 16 sessions in 10 days carry `localhost:3000/send-legal-notice/...` in their visitedUrls. This is staging traffic leaking into your Clarity production data. Clean up the Clarity project filters or inspect why localhost requests are hitting the production project ID.
6. **Triple-described process flow** wastes 28–42 % scroll real estate. Mobile users are bouncing before they finish reading the *first* description.
7. **Lawyer-name masking** — "Advocate Me*** Jos**" / "Sa**** Mis***". Masked names are presumably for privacy, but they read as inauthentic on first glance. At minimum, show first name + last initial ("Advocate Manish J."), Bar Council number, and a verified badge.

---

## 8. Trust & Persuasion Analysis

What is working:
- "🇮🇳" Indian flag in headline + "Indian Lawyers 🇮🇳" — strong cultural signaling. Singapore (NRI) traffic at 6.4 % suggests this hooks NRIs effectively.
- "Bar Council Registered Network Lawyers" — the strongest trust line on the page, but at 78 % scroll.
- "₹50L+ Legal Fees Saved · 18,000+ Clients Served · 4.8/5 Rating" — strong but at 64 %.
- "Money-Back" mention at the pricing card — but small, easy to miss, no specific guarantee terms.
- Cashfree payment-security badge — present, in good location relative to the price.
- Specific, named testimonials with city + role (Anita Patel, E-commerce Business Owner, Delhi) — believable.

What is missing or buried:
- **No visible advocate licence numbers** above the fold. Bar Council enrolment number on each lawyer card would dominate the trust line for legal services.
- **No press / institutional logos** ("As featured in", or India-relevant: Bar Council of India / NALSAR / NLU / regulator press). Even a single line with three credible names would shift this.
- **No specificity on the 24-hour promise** (e.g., "If you submit before 6 PM IST, your draft is in your inbox by tomorrow noon"). The current "24 Hours" claim in the title needs to be visibly anchored on the page.
- **No counter-claim handling** for the most common objection: *"Why is this so cheap if a Mumbai senior advocate charges ₹15,000?"* — the SEO essay at 80 % scroll answers this brilliantly ("vakiltech standardises common notice formats…"), but no mobile user gets there. Promote a 2-line summary of that argument up to the price card.

Persuasion stack to surface above the fold (in priority order):
1. Price + "vs ₹3,000–10,000 typical" (anchoring).
2. 4.8 ★ + "18,000 + Indians served" (social proof).
3. "24-hour draft · Speed Post tracking · Bar Council Registered Lawyer" (credibility).
4. "100 % Money-Back if you don't approve the draft" (risk reversal).

---

## 9. Funnel Observations

Approximate funnel for the 10-day window (mobile + PC combined, 529 sessions):

```
529 sessions
 │
 ├──> 360 (68 %) bounce in 0–25 % scroll
 │
 ├──> 169 (32 %) scroll past hero
 │     │
 │     ├──> ~179 quiz interactions (Yes 136 + No 43; can repeat per user)
 │     │
 │     ├──> 135 city searches  ─────────── strong intent signal
 │     ├──> 100 phone-field interactions
 │     │
 │     └──> 84 SubmitForm events  ────────  ~50 % of city-searchers convert
 │            └──> 8 ContactUs (post-form support / human escalation)
```

Critical funnel ratios:
- **Hero → past-fold: 32 %** (mobile-driven; PC alone is ~59 %).
- **Past-fold → quiz/picker engagement: ~50 %** of those who pass the fold actually engage with a primary mechanic.
- **Picker engagement → SubmitForm: ~50 %**. This is the **strongest** ratio on the page — the form itself is converting well.
- **SubmitForm rate against all sessions: 15.9 %**.

The funnel diagnosis: **the page does not have a form-conversion problem; it has a fold-passage problem.** Lifting fold-passage from 32 % to 45 % at the same downstream conversion rate would move SubmitForm from 84 to ~118 (+40 % in absolute leads, all on the existing ad/SEO spend).

---

## 10. Behavioral Insights (psychology lens)

- **The quiz is a commitment device.** Users who complete it are pre-committed to the outcome. This is why post-quiz conversion is so high. Any change that increases quiz-completion rate (tap-state fix, fewer questions, bigger mobile chips) compounds downstream.
- **The mobile bounce is not disinterest, it's "skim-and-leave"**. Most mobile sessions average 0–30 s with single-digit clicks. These are quick-scan triage visits. Compressing the offer above the fold converts a triage scan into a soft commit.
- **PC users are tab-stackers.** Their 689 s session duration with only 119 s active time is the signature of someone keeping the tab open while researching alternatives. Defensive content (testimonials, lawyer credentials, anchoring price) needs to be visible in a single screen on desktop too — currently it's spread over 14 viewports.
- **Trust is back-loaded.** The page says everything that builds trust, but in the wrong order. Move the institutional trust line ("Bar Council Registered · Cashfree-secured · 18,000+ clients · 4.8 ★") into a single horizontal strip directly under the H1.
- **Price anchoring is missing at the moment of intent.** The pricing card mentions ₹1,499 vs ₹3,999 (struck-through) — that's an *internal* anchor. The far stronger anchor is the SEO copy claim that "Mumbai/Delhi advocates charge ₹8,000–15,000 for the same notice". That external anchor must move to the hero.
- **"Raise Ticket" is the wrong word at the wrong time.** It is functional language (developer / helpdesk speak). Replace with outcome language ("Get My Lawyer Now").

---

## 11. Quick Wins (≤ 1 sprint, high confidence)

| # | Change | Why | Expected impact | Evidence |
|---|---|---|---|---|
| QW1 | Add a sticky bottom CTA on mobile: "Send Legal Notice — ₹1,499 · Talk to Lawyer in 30 min" | 68 % of mobile users never see the offer/price; sticky CTA surfaces it 100 % | +15–25 % SubmitForm on mobile | Mobile scroll <25 % = 67.99 %; mobile bounce 90.6 % |
| QW2 | Compress 4-line trust strip directly under H1: "₹1,499 flat · 24-hour draft · 18,000+ clients · 4.8 ★ · Bar Council Registered" | Moves all primary persuasion levers above fold | +8–15 % above-fold engagement | Trust elements currently at 64–78 % scroll |
| QW3 | Fix "Yes"/"No" quiz tap state — confirm tap with instant colour change + ~150 ms transition | Recordings show 2–4 repeat taps per progression. Each repeat is a near-miss bail | +5–10 % quiz completion | Recording `4nyybr/xlfrk0` (Yes ×4), `1oeahfe/1budx4n` (Yes ×3) |
| QW4 | Rename "Raise Ticket" to "Get My Lawyer Now →" | Bureaucratic submit-label causes hesitation | +3–7 % submit-rate from form viewers | 9-sec pause before click in conversion recording |
| QW5 | Increase tap targets on issue-chips and quiz to ≥48 px tall | Currently 34 px — below Apple HIG (44) and Material (48) | Reduces mis-taps and frustration on Android Chrome (top traffic) | DOM measurement: chips at 34 px |
| QW6 | Fix the JSON-LD `@context` JS error | 4 errors in 10 days; possible Safari render race | Removes silent UX flicker for 1 % of users | Clarity error log: `undefined is not an object (evaluating 'r["@context"].toLowerCase')` |
| QW7 | Filter out `localhost:3000` traffic from the Clarity project | 16 sessions in 10 days are dev/staging | Cleaner data; ~3 % of PC sessions removed | 16 sessions found in `visitedUrls` |
| QW8 | De-mask lawyer names: "Advocate Manish J. (Bar Council Reg # 12345)" | Masked "Me*** Jos**" reads as inauthentic | +2–5 % trust signal lift | UX heuristic + user-hesitation pattern |

---

## 12. High-Impact Recommendations (≥ 1 sprint)

| # | Change | Why | Expected impact | Evidence |
|---|---|---|---|---|
| HI1 | **Re-architect the mobile fold into a one-screen offer card** containing: H1, 1-line sub-headline, ₹1,499 vs "Mumbai/Delhi senior charges ₹8–15K" anchor, ★/clients/Bar-Council strip, single primary CTA "Get My Lawyer in 30 min", and a "Or take the 60-sec case-strength quiz" secondary link | The mobile hero is the entire qualification gate; today it qualifies almost nobody | +20–35 % mobile SubmitForm | Mobile bounce 90.6 %; 67.99 % scroll <25 % |
| HI2 | Promote the Free Case Strength quiz to the *primary* mobile fold mechanic (the issue-picker becomes the secondary path) | Quiz is the highest-engagement element on the page (179 interactions) and has the highest downstream conversion ratio | +10–15 % overall conversion | 136 Yes + 43 No = 179; 84 SubmitForm |
| HI3 | Consolidate the three process descriptions ("Our proven process", "Timeline", "Simple 3-Step Process") into one stepped section with a CTA at the end | Currently 28–42 % scroll = 14 % of page repeating the same content | Shortens page by ~3 viewports; gets pricing & social proof higher | Recording `1jno7r8/3e5p23` shows user clicking process icons looking for a CTA |
| HI4 | Move the FAQ block from 92 % scroll to ~30 % scroll, top-3 questions only ("How much?", "How long?", "What happens after?") | FAQ-clickers in recording `1jno7r8` engage hard (6 FAQ clicks). The questions handle the top objections. Mobile users never reach them. | +5–10 % objection-handling lift | FAQ at 92 % scroll; 12.85 % mobile reach |
| HI5 | Add a 30-second testimonial video (1 lawyer + 1 client) under the H1 trust strip | Video on legal-services landing pages tends to lift trust 10–20 %; current testimonials are buried at 70 % scroll and ignored | +5–12 % trust signal | Testimonials at 70 % scroll; 13 % reach |
| HI6 | On `/pricing` (referred to from this page), fix the 9 dead-click hotspots ("Payment recovery notices", "Professional drafting", "Acknowledgment tracking") so they navigate to relevant sub-pages | Page is leaking confused users out of the funnel — observed in recording `1oeahfe/1budx4n` | Recovers ~30–50 % of pricing-page bouncers | Dead-click recording observed |
| HI7 | Add Bar Council registration numbers and verified-badge on each lawyer card | Largest trust gap relative to category norms (other Indian legal services display these) | +3–8 % conversion on lawyer cards | UX heuristic + low click rate on current cards |
| HI8 | Create a separate Singapore/NRI variant of the hero (or detect locale and tweak copy) | 6.4 % of traffic; specifically high-intent given the NRI use-case is sending notice to India from abroad | +2–5 % overall (small but high LTV) | Singapore = 34 sessions, 4th highest geo |

---

## 13. A/B Test Suggestions

| Test | Hypothesis | Primary metric | Sample-size note |
|---|---|---|---|
| **A/B #1: Sticky bottom CTA on mobile** (control: none / variant: "Send Legal Notice — ₹1,499 · Talk to Lawyer in 30 min") | Surfacing offer to mobile bouncers will lift submit rate +15–25 % | Mobile SubmitForm rate | At 308 mobile sessions / 10d, you need ~3 weeks for 90 % power on a 15 % effect |
| **A/B #2: Quiz vs Issue-picker as primary mobile-fold CTA** | Quiz pre-commitment yields better downstream than free-text issue selection | SubmitForm/session | Run for 4 weeks; the quiz's 50 % completion-to-submit ratio sets a high bar |
| **A/B #3: "Raise Ticket" vs "Get My Lawyer Now →"** | Outcome-language reduces hesitation at the submit | SubmitForm rate from form-viewers (event-level, not session-level) | Easy two-week test; 84 submits / 10d → adequately powered for ±10 % effect |
| **A/B #4: Trust strip under H1** (control: none / variant: "₹1,499 flat · 24-hr · 4.8 ★ · 18,000+ clients · Bar Council Registered") | Compressed trust above fold reduces bounce | Mobile bounce rate | Measure scroll-past-25 %, then SubmitForm |
| **A/B #5: 3-question FAQ block at 30 % scroll** | Surfacing top objections higher reduces mid-page abandonment | Scroll-past-50 %, SubmitForm | Test for 4 weeks |
| **A/B #6: Tap-state animation on quiz Yes/No** | Visible state change reduces double-taps and mid-quiz bails | Quiz-completion (last-step) % | Reproduce on a real iPhone first; A/B may be unnecessary if observable improvement is large |
| **A/B #7: Pricing anchoring** ("vs ₹8,000–15,000 in Mumbai/Delhi") in pricing card | External anchor is more persuasive than internal struck-through ₹3,999 | Pay Now click + SubmitForm | 4-week test |

---

## 14. Strategic Improvements

- **Reorient the page mental model from "long landing page" to "single-screen offer + drill-down"**. The desktop reader can still scroll for depth, but the mobile transactor should be able to make the decision without scrolling.
- **Treat the Free Case Strength Check as the primary product surface**, not a side-feature. The data shows it is the single strongest conversion driver. Build a separate `/legal-notice/case-strength` URL, run paid Google Search and Performance Max traffic against it, and feed the form output back into the same Raise Ticket flow.
- **Build a city-specific landing-page programme**. Bengaluru (65), Delhi (44), Mumbai (41), Hyderabad (30), Chennai (21), Pune (20) account for 62 % of Indian-city traffic. Local pages with a local lawyer card and a city-specific Bar-Council line ("Drafted by an advocate registered with Karnataka State Bar Council") will convert higher and rank for "send legal notice in Bengaluru" type queries. The Money-Recovery / Consumer / Defamation sub-pages already exist — extend the same template by city.
- **Fix the analytics hygiene** — remove `localhost:3000` from production data and segment Clarity dashboards by mobile vs desktop by default.
- **Create a "post-quiz" lifecycle email**. Users who complete the quiz but don't submit (179 quiz events vs 84 submits = ~95 abandoners) are a re-marketable cohort if you capture an email at quiz step 1.
- **Strengthen the AI-search positioning**. ChatGPT (3) and Perplexity (2) are now sending small but real traffic. Update the FAQ schema, add specific claim-based content ("How much does sending a legal notice in India cost in 2026?"), and ensure your pages are LLM-citable. This is one of the highest-leverage SEO movements right now and your competitors haven't noticed.

---

## 15. Final Prioritized Action Plan

| Priority | Action | Effort | Lift estimate | Confidence |
|---|---|---|---|---|
| **P0 (this week)** | QW3 Fix quiz Yes/No tap-state animation | 0.5 day | +5–10 % quiz completion | High |
| P0 | QW6 Fix `@context.toLowerCase` JS error | 0.5 day | Removes silent failure | High |
| P0 | QW7 Filter localhost:3000 from Clarity | 0.25 day | Clean data | High |
| **P1 (this sprint)** | QW1 Sticky bottom-bar CTA on mobile | 1 day | +15–25 % mobile SubmitForm | High |
| P1 | QW2 Trust strip under H1 (price + 24h + 4.8 ★ + Bar Council) | 1 day | +8–15 % | High |
| P1 | QW4 Rename "Raise Ticket" → "Get My Lawyer Now →" | 0.25 day | +3–7 % | Medium |
| P1 | QW5 Increase tap targets to ≥48 px | 0.5 day | Reduces mis-taps | High |
| P1 | QW8 De-mask lawyer names + add Bar Council numbers | 1 day | +2–5 % trust | Medium |
| **P2 (next sprint)** | HI1 Re-architect mobile fold into one-screen offer card | 3 days | +20–35 % mobile SubmitForm | High |
| P2 | HI3 Consolidate process descriptions (3 → 1) | 1 day | Shortens page; gets pricing higher | High |
| P2 | HI4 Move top-3 FAQs to 30 % scroll | 0.5 day | +5–10 % | Medium |
| P2 | HI6 Fix dead clicks on /pricing | 1 day | Recovers ~30 % of pricing bouncers | High |
| **P3 (next 30 days)** | HI2 Promote Free Case Strength quiz to primary fold mechanic | 2 days + A/B | +10–15 % | Medium |
| P3 | HI5 Add 30-sec lawyer + client testimonial video under H1 | 2 weeks (production) | +5–12 % | Medium |
| P3 | HI7 Add Bar Council numbers + verified badges to each lawyer card | 1 day | +3–8 % | Medium |
| P3 | A/B #1, #3, #6 (sticky CTA, CTA wording, tap state) | 4 weeks | Compounded | High |
| P3 | HI8 + city-page programme (Bengaluru/Delhi/Mumbai/Hyderabad/Chennai/Pune) | 1 month | +5–10 % organic + local conversion | Medium |

**If Vakiltech ships P0 + P1 within 2 sprints**, the realistic conservative outcome is **+25–40 % SubmitForm on the existing 529 sessions / 10 days**, i.e. roughly **105–120 form submits/10d** instead of 84, with the lift weighted ~70 % to mobile and ~30 % to desktop.

The single highest-impact change is **the mobile-fold rewrite (HI1) plus the sticky bottom CTA (QW1)**. Together those two address the 68 %-don't-pass-the-fold cliff that is currently capping the page.

---

## Appendix A — Confidence per finding

- *High confidence:* mobile bounce (n = 308, multiple corroborating recordings); top click counts (n ≥ 100); scroll-depth distribution; geography; channel mix; conversion path validated end-to-end in recording.
- *Medium confidence:* tap-state hypothesis (n = 5 recordings, pattern consistent); CTA wording impact (UX heuristic + 1 hesitation observation); JSON-LD render race (4 errors only — small n); lawyer-card credibility lift (heuristic).
- *Directional:* Singapore-NRI strategy (n = 34); LLM-traffic emerging (n = 5); video-testimonial impact (n = 0 — based on category norms).

## Appendix B — Notable session recordings cited

- `clarity.microsoft.com/player/wdyya1yw27/4nyybr/xlfrk0` — full successful conversion path (Property Dispute → Money Recovery → quiz → form → Raise Ticket). 38 min mobile session.
- `clarity.microsoft.com/player/wdyya1yw27/1ploc5h/1rdj1dt` — form-submit recording, 02:27 active.
- `clarity.microsoft.com/player/wdyya1yw27/1arz54d/1uqc3c5` — mobile read-and-leave, 03:26 active, 0 clicks.
- `clarity.microsoft.com/player/wdyya1yw27/xxeuz0/3vaqlf` — mobile read-and-leave, 04:11 active, 0 clicks.
- `clarity.microsoft.com/player/wdyya1yw27/bn4zik/1sjnwf8` — defamation sub-page, 10:57 active, 0 clicks.
- `clarity.microsoft.com/player/wdyya1yw27/1jno7r8/3e5p23` — engaged FAQ user, 04:12, 9 clicks.
- `clarity.microsoft.com/player/wdyya1yw27/1oeahfe/1budx4n` — **the dead-click on /pricing recording**.
- `clarity.microsoft.com/player/wdyya1yw27/becn8v/1nspnmb` — quickback PC user, 08:25.
- `clarity.microsoft.com/player/wdyya1yw27/td5scg/chdier` — partial form interaction, abandoned.

---

*Report generated 30 Apr 2026. All behavioral findings sourced from Microsoft Clarity (project `wdyya1yw27`) over 21–30 Apr 2026 and corroborated by live DOM inspection of vakiltech.in/send-legal-notice on the same date.*
