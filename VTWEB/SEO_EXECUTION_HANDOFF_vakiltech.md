# vakiltech.in — SEO Execution Handoff (for Sonnet executor)

**Source strategy:** `/Users/pritambanikk/VT/vt_march266/SEO_FUNNEL_STRATEGY_vakiltech.md`
**Repo:** `/Users/pritambanikk/VT/vt_march266` (Next.js 14, app router)
**Handoff prepared:** 24 April 2026
**Prior agent:** completed discovery (GSC + SEMRUSH + codebase audit) and wrote the source strategy. All discovery data lives at `/sessions/.../outputs/` and is referenced below.

---

## 0. What this document is

This is a **self-contained execution brief**. Everything a fresh agent needs to ship the work is in here — you do not need to re-run GSC pulls, re-run SEMRUSH, or re-audit the codebase. If you find yourself wanting to re-do discovery, stop and re-read §9 first.

Each task below has: **ID · role · target URL · target keywords (with volume/KD) · required H1 · required meta · content outline · required schema · internal-link contracts (in/out) · conversion CTA · acceptance criteria**. A task is done when every bullet in its acceptance section is verifiable from the deploy preview.

---

## 1. Your role (executor)

You are implementing the strategy — not re-designing it. In particular:

1. **Do not invent new pages** outside the 50 tasks in §5–§7. If a new idea surfaces, park it in §11 and keep going.
2. **Do not change the intent assignment of any page.** Every page in this doc has exactly one role in the funnel. If you think a page should move stages, stop and ask.
3. **Do not create duplicate URLs.** Before `git add` on any new page, `grep -r "<new-slug>" src/app/` to confirm no existing path collides.
4. **Always implement the internal-link contract** for a page in the same commit as the page itself. A new page shipped without its prescribed upstream/downstream links is a regression.
5. **Update the tracker in `SEO_FUNNEL_STRATEGY_vakiltech.md` §9** as you close tasks (`Not Started` → `In Progress` → `Completed` → `Verified`).

---

## 2. Repository facts you need

**Framework:** Next.js 14, App Router. All routes live under `src/app/<slug>/page.tsx`.

**Metadata:** Use the existing helpers in `src/lib/seo.ts` — in particular `generateServiceMetadata()` for service pages and the exported types for blog/guide metadata. Do not hand-roll `<head>` tags.

**Default title suffix:** `"vakiltech | Built on the Calibre of Expert Lawyers"` — append via the existing helper, do not duplicate in H1.

**Sitemap:** `src/app/sitemap.ts` enumerates canonical URLs. **Any new page must be added here; any 301'd URL must be removed from here.**

**City slugs:** 50 cities enumerated in `sitemap.ts` — reuse that list for any city-variant page, do not hand-type a second list.

**Blog routing:** `src/app/blogs/[slug]/page.tsx` (dynamic). Content lives in `src/content/blogs/*.mdx` (confirm pattern before first blog task).

**Guide routing (new):** Use `src/app/guides/[slug]/page.tsx` for the Decision-stage guide pages created in Clusters 4, 5, 6, 7, 9. Mirror the `/blogs` pattern. If `/guides` does not yet exist, scaffold it before DV-01.

**Redirects:** Add in `next.config.ts` under the existing `redirects()` function. Use `permanent: true` for all 301s below.

**Schema markup:** JSON-LD in the page component body. Types required by this handoff: `FAQPage`, `BreadcrumbList`, `Article` (for blogs), `LegalService` (for service pages — check if already in place).

---

## 3. Execution rules (apply to every task)

**Intent rule.** One page = one intent stage in one cluster. No page may simultaneously target Awareness keywords and Action keywords in its H1, title, or meta.

**Internal-link contract (mandatory):**
- Awareness page → 1 contextual inline link to its Decision sibling + 1 CTA block linking to its Action sibling
- Decision page → breadcrumb + "Read first:" block linking up to Awareness; conversion CTA linking down to Action
- Action page → 1 visible link up to at least one Decision page ("Want to compare options first?") + 1 single primary CTA with price

**Conversion CTAs (canonical copy):**
- Legal Notice: "Send Legal Notice" → `/send-legal-notice` or specific variant
- Consultation: "Talk to a Verified Advocate" → `/consultation` or city variant
- Drafting: "Draft My Agreement" → `/agreement-drafting` or specific child
- Templates: "Get 3,500+ Legal Drafts" → `/3500-legal-drafts-templates-bundle`

**No more than 3 clicks from homepage** for any URL in the sitemap.

**Acceptance proof.** For each task, before marking Completed: (1) local build passes, (2) `/sitemap.xml` includes the URL, (3) page renders with H1/meta/schema as specified, (4) internal-link contract is visible in the rendered HTML, (5) Lighthouse SEO ≥ 95 on the new page.

---

## 4. Sequencing (strict)

Ship in this order. Later phases are **blocked** until earlier phases are Verified.

```
PHASE 0: Cannibalization fixes (C-01..C-06)        [blocks all content work]
   ↓
PHASE 1: Reconcile indexed-but-missing URLs        [informs MR-01..MR-04, DF-01]
   ↓
PHASE 2A: Highest-ROI content (DF-02, LD-01)       [run in parallel]
   ↓
PHASE 2B: Divorce cluster (DV-01..DV-05)
   ↓
PHASE 2C: Remaining cluster upgrades (LN, MR, CR, PT, CB, AG, LD)
   ↓
PHASE 3: Site-wide (SW-01..SW-05)                  [can run in parallel with 2C]
```

---

## 5. Phase 0 — Cannibalization fixes

Execute all six before any content work.

### C-01 · 301 `/legal-drafts-bundle` → `/3500-legal-drafts-templates-bundle`

- Edit `next.config.ts` → add permanent redirect.
- Delete `src/app/legal-drafts-bundle/page.tsx`.
- Remove from `src/app/sitemap.ts`.
- **Acceptance:** `curl -I https://vakiltech.in/legal-drafts-bundle` returns 301 to canonical; canonical still renders 200; sitemap no longer lists the source URL.

### C-02 · Trailing-slash redirect rule

- In `next.config.ts`, set `trailingSlash: false` and add a catch-all rewrite if needed so `/foo/` → `/foo` with 301.
- **Acceptance:** `curl -I https://vakiltech.in/send-legal-notice/` returns 301 → `/send-legal-notice`. Same for `/send-a-legal-notice/`, `/privacy-policy/`.

### C-03 · 301 `/send-a-legal-notice` → `/send-legal-notice`

- Add redirect in `next.config.ts`. if this is not already done; check first. 
- Delete `src/app/send-a-legal-notice/page.tsx` if present.
- Remove from sitemap.
- **Acceptance:** 301 verified; no local route remains.

### C-04 · 301 `/legal-consultation` → `/consultation`
-if this is not already done; check first. 
- Add redirect; delete any `src/app/legal-consultation/page.tsx`; remove from sitemap.
- **Acceptance:** 301 verified.

### C-05 · De-scope BNS 356 content from `/send-legal-notice/criminal-defamation-legal-notice`

- Remove the "What is Section 356 BNS" / "Elements of criminal defamation" / "Punishment" / long-form legal explainer sections from `src/app/send-legal-notice/criminal-defamation-legal-notice/page.tsx`.
- Replace with a short (2–3 sentence) framing ("You can send a legal notice when someone defames you under BNS 356. Here's how vakiltech handles it") + the Action CTA.
- Add a prominent "Want to understand Section 356 BNS first? → Read our complete guide" link pointing up to `/blogs/section-356-bns-defamation-law-india`.
- **Do not ship C-05 until DF-01/DF-02 is ready to merge** so the blog exists to link to.
- **Acceptance:** Action page word count ≤ 600; no H2 on the page targets informational queries; visible upstream link present.

### C-06 · Reconcile 9 indexed-but-missing URLs

For each URL in §4.5 of the strategy doc:
1. `git log --all -- "src/app/<path>"` — find any branch where it exists.
2. If found on a feature branch: cherry-pick or merge into main.
3. If genuinely missing: mark for recreation in Phase 2 (MR-01..MR-04, DF-01 cover the critical ones).

List to reconcile:
- `/blogs/section-356-bns-defamation-law-india`
- `/blogs/money-recovery-complete-guide-india`
- `/blogs/money-recovery-legal-notice-cost-timeline`
- `/blogs/what-happens-after-money-recovery-notice`
- `/blogs/when-to-send-money-recovery-legal-notice`
- `/send-a-legal-notice` (handled by C-03)
- `/legal-consultation` (handled by C-04)
- `/send-legal-notice/builder-delay-possession/bangalore`
- `/send-legal-notice/demand-notice-recovery-of-money/solapur`

**Acceptance:** each URL either exists on main or has a recreation task assigned in Phase 2.

---

## 6. Phase 1 — Reconciliation outcomes drive Phase 2 scope

Stop before Phase 2 and update this doc with the reconciliation result for each URL in C-06. If a URL is found on a branch: Phase 2 task for it becomes "merge + upgrade". If missing: task becomes "create from scratch".

---

## 7. Phase 2 — Content execution briefs

Each brief is self-contained. Kentucky rule: if any section is ambiguous, stop and ask — do not guess.

---

### DF-02 · 🔥 HIGHEST PRIORITY — Upgrade `/blogs/section-356-bns-defamation-law-india`

- **Role:** Awareness (Cluster 3 — Defamation / BNS 356)
- **Target keywords (GSC-validated):** `356 bns` (1,430 imp/90d), `bns 356` (1,210), `section 356 bns` (1,290), `defamation in bns` (1,380), `defamation under bns` (890), `criminal defamation in bns` (560), `what is section 356 bns` (220) — ~17,000 monthly imps combined
- **H1:** `Section 356 BNS — Criminal Defamation Law in India: Complete 2026 Guide`
- **Meta title:** `Section 356 BNS (Criminal Defamation) Explained | vakiltech`
- **Meta description:** `Section 356 of BNS replaces IPC 499/500 for criminal defamation. Learn elements, punishment, landmark cases, and how to send a defamation legal notice. (Read in 8 min)`
- **Content outline (H2s in order):**
  1. What is Section 356 BNS? (plain-language summary — 150 words max)
  2. How BNS 356 differs from IPC 499/500
  3. Elements of criminal defamation under BNS 356 (imputation, intent, publication, reputation damage)
  4. Punishment under Section 356 BNS
  5. Exceptions (truth in public interest, fair comment, good-faith imputation — list all 10)
  6. Landmark cases (pick 3–4 post-BNS)
  7. Civil vs criminal defamation — which route for which case
  8. How to send a defamation legal notice under BNS 356 (brief — 200 words) → CTA to `/send-legal-notice/criminal-defamation-legal-notice`
  9. FAQ (12–15 Q&A, schema-marked)
- **Schema required:** `Article` + `FAQPage` + `BreadcrumbList`
- **Internal links:**
  - **Out (Action):** "Send a defamation legal notice" CTA box after H2 #8 → `/send-legal-notice/criminal-defamation-legal-notice`
  - **Out (related Awareness):** link to `/blogs/what-is-a-legal-notice-in-india` and `/blogs/legal-notice-fees-india` in the relevant inline copy
  - **In:** ensure the Action page (after C-05 ships) links up here
- **Conversion CTA:** "Send Defamation Legal Notice — ₹1,499"
- **Acceptance:** all 9 H2s present, FAQ schema validates in Rich Results Test, word count ≥ 2,200, Flesch score 55–70, no duplicate H1, canonical self-reference.
- **Expected lift:** CTR 0.5% → 3%, ~+400 monthly clicks.

---

### LD-01 · Create `/find-a-lawyer` (Decision hub)

- **Role:** Decision (Cluster 9 — Lawyer Directory)
- **Target keywords:** `find a lawyer` (8,100, KD 55), `best lawyer in india` (9,900, KD 35), `top lawyers in india` (9,900, KD 32), `top advocate in india` (9,900), `indian lawyer` (8,100), `how to choose a lawyer`
- **File:** `src/app/find-a-lawyer/page.tsx`
- **H1:** `How to Find the Right Lawyer in India (2026 Guide)`
- **Meta title:** `Find a Lawyer in India — Verified Advocates by Case Type | vakiltech`
- **Meta description:** `Choosing the right lawyer matters. Learn what to look for, how much to pay, and talk to a verified Indian advocate in 15 minutes — ₹299.`
- **Content outline:**
  1. When do you actually need a lawyer? (decision tree)
  2. 7 things to check before hiring a lawyer in India
  3. Lawyer fees in India — what's reasonable (table by case type)
  4. How to verify a lawyer's credentials (Bar Council, State roll, sanchaar)
  5. Types of lawyers you might need (civil, criminal, family, consumer, corporate — each links to the relevant `/consultation` anchor)
  6. Online vs in-person consultation
  7. What to prepare before your first consultation
  8. Talk to a verified advocate now → conversion block
  9. FAQ
- **Schema:** `Article` + `FAQPage` + `BreadcrumbList`
- **Internal links:**
  - **Out (Action):** primary CTA → `/consultation`; city secondary CTAs → top 10 `/consultation/[city]` pages
  - **Out (Awareness):** link to `/blogs/what-is-vakalatnama-india` (LD-03) once shipped
  - **In:** homepage hero must add a "Find a Lawyer" secondary CTA linking here (see LD-02)
- **Conversion CTA:** "Talk to a Verified Advocate — ₹299"
- **Acceptance:** word count ≥ 1,800, all 9 H2s, FAQ schema valid, at least 10 contextual internal links (5 to `/consultation/*`, 5 elsewhere), sitemap includes the URL.
- **Expected lift:** ~+500 monthly clicks.

---

### LD-02 · Deprioritise "vakil" on homepage; redirect authority to `/find-a-lawyer`

- Edit `src/app/page.tsx` → remove "vakil" from H1, title, meta description, and primary H2s.
- Keep brand "vakiltech" references; remove generic "vakil" keyword targeting.
- Add a prominent secondary CTA in the hero: "Looking for a lawyer? → Find the right advocate".
- **Acceptance:** homepage H1, title, meta description no longer contain the standalone word "vakil"; secondary CTA to `/find-a-lawyer` is visible above the fold.

---

### LD-03 · Create `/blogs/what-is-vakalatnama-india`

- **Role:** Awareness (Cluster 9)
- **Target keywords:** `what is vakalat` (1,600), `what is vakalatnama` (1,600), `vakalat meaning` (3,600), `vakalatnama meaning` (3,600), `vakalat form` (4,400), `in the court of vakalat`
- **H1:** `What is a Vakalatnama? Meaning, Format & How It Works in India`
- **Meta title:** `Vakalatnama — Meaning, Format & Legal Significance in India | vakiltech`
- **Meta description:** `A vakalatnama authorises a lawyer to represent you in court. Learn its meaning, format, stamp duty, and when you need one — plus talk to a verified advocate.`
- **Content outline:** definition → origin of the word → when it's required → format (include embedded image) → stamp duty rules (by state) → signing & attestation → revoking → FAQ
- **Schema:** `Article` + `FAQPage` + `BreadcrumbList`
- **Internal links:** Out → `/find-a-lawyer` (Decision) + `/consultation` (Action)
- **Conversion CTA:** "Talk to a Verified Advocate — ₹299"
- **Acceptance:** word count ≥ 1,500, includes vakalatnama format image/embed.

---

### LD-04 · Optimise all 50 `/consultation/[city]` pages

- For each city page: H1 must include literal phrase `"advocate near me {city}"` or `"lawyer near me {city}"`; add 5-Q city-specific FAQ with schema.
- Add breadcrumbs: Home › Consultation › {City}.
- **Acceptance:** programmatic check — grep every `/consultation/*/page.tsx` for the required H1 pattern; all 50 present.

---

### DV-01 · Create `/guides/divorce-procedure-in-india`

- **Role:** Decision (Cluster 4 — Divorce / Family)
- **Target keywords:** `divorce procedure in india` (8,100, KD 25), `divorce process in india` (8,100), `divorce process` (4,400), `steps to divorce`, `divorce procedure` (4,400)
- **File:** `src/app/guides/divorce-procedure-in-india/page.tsx` (scaffold `/guides` if not already present)
- **H1:** `Divorce Procedure in India — Step-by-Step (2026)`
- **Meta title:** `Divorce Procedure in India: Step-by-Step Guide | vakiltech`
- **Meta description:** `From filing the petition to final decree — understand every step of the divorce procedure under Hindu, Muslim, and Special Marriage Act. Talk to a divorce lawyer — ₹299.`
- **Content outline:** grounds for divorce → contested vs mutual-consent route (decision tree) → step-by-step court procedure → documents required → timeline & costs → interim reliefs (maintenance, custody) → FAQ
- **Schema:** `Article` + `FAQPage` + `HowTo` + `BreadcrumbList`
- **Internal links:**
  - Out → `/guides/mutual-consent-divorce-india` (sibling Decision) + `/guides/how-to-file-for-divorce-india` (sibling Decision, user-action view)
  - Out → `/send-legal-notice/legal-notice-for-divorce` (Action) + `/consultation` (Action, dual conversion)
  - In → from `/guides/divorce-in-india` Awareness page when shipped
- **Conversion CTA (dual):** primary "Talk to a Divorce Lawyer — ₹299"; secondary "Send Divorce Legal Notice — ₹1,499"
- **Acceptance:** word count ≥ 2,500, `HowTo` schema validates, dual CTA visible, all three sibling links present.

---

### DV-02 · Create `/guides/how-to-file-for-divorce-india`

- **Role:** Decision (Cluster 4)
- **Target keywords:** `how to file for divorce` (8,100, KD 21), `how to apply for divorce` (2,900), `how to file divorce in india` (2,900), `procedure to file divorce in india`, `process of filing divorce in india`
- **File:** `src/app/guides/how-to-file-for-divorce-india/page.tsx`
- **Positioning vs DV-01:** this is the **user-action** view (practical "how do I actually do this"), DV-01 is the **legal-process** view. Keep them distinct — do not duplicate the step-by-step court procedure; link out to DV-01 for that. Focus here: paperwork, where to go, hiring a lawyer, costs you'll actually pay.
- **H1:** `How to File for Divorce in India: A Practical Guide`
- **Meta title:** `How to File for Divorce in India — Practical 2026 Guide | vakiltech`
- **Meta description:** `Filing for divorce in India? Here's what paperwork you need, where to file, how much it costs, and when to hire a lawyer. Talk to one — ₹299.`
- **Content outline:** decide mutual vs contested → choose the right act (Hindu/SMA/Muslim/Christian) → documents checklist → picking the right court (jurisdiction) → hiring a lawyer → filing the petition → what happens next (links to DV-01 for court procedure) → FAQ
- **Schema:** `Article` + `FAQPage` + `BreadcrumbList`
- **Internal links:** Out → DV-01, DV-03, `/consultation`, `/send-legal-notice/legal-notice-for-divorce`
- **Conversion CTA:** "Talk to a Divorce Lawyer — ₹299" primary
- **Acceptance:** ≥ 2,000 words; section "For the legal court procedure, see our step-by-step guide" explicitly links to DV-01 (prevents cannibalization).

---

### DV-03 · Create `/guides/mutual-consent-divorce-india`

- **Role:** Decision (Cluster 4)
- **Target keywords:** `mutual divorce` (3,600), `mutual consent divorce process` (390), `how to apply for mutual divorce` (480), `mutual divorce time`, `mutual divorce papers`
- **File:** `src/app/guides/mutual-consent-divorce-india/page.tsx`
- **H1:** `Mutual Consent Divorce in India — Process, Timeline & Cost`
- **Meta title:** `Mutual Consent Divorce in India: Process, Timeline, Fees | vakiltech`
- **Meta description:** `Mutual consent divorce is the fastest route — 6 to 18 months. Learn the two-motion process, papers required, cost, and talk to a divorce lawyer — ₹299.`
- **Content outline:** what is MCD → eligibility (both spouses must agree) → two-motion process (first vs second motion) → cooling-off period (6-month rule, waivers) → papers required → cost breakdown → timeline expectations → what if one party withdraws consent → FAQ
- **Schema:** `Article` + `FAQPage` + `BreadcrumbList`
- **Internal links:** Out → DV-01, DV-02, `/consultation`, `/send-legal-notice/legal-notice-for-divorce`
- **Conversion CTA:** "Talk to a Divorce Lawyer — ₹299"
- **Acceptance:** ≥ 1,800 words.

---

### DV-04 · Create `/guides/divorce-in-india` (Awareness)

- **Role:** Awareness (Cluster 4) — lower priority than DV-01/02/03
- **Target keywords:** `divorce rate in india` (14,800), `causes of divorce in india`, `divorce statistics in india`
- **H1:** `Divorce in India — Trends, Causes & Your Options`
- **Content:** Landscape / statistics / cultural context piece. Not a how-to.
- **Internal links:** Out → DV-01 (next read: Decision)
- **Conversion CTA:** soft — "Wondering if you have a case? Talk to a lawyer — ₹299"
- **Acceptance:** ≥ 1,500 words; no how-to content (prevents cannibalization with DV-02).

---

### DV-05 · Update `/send-legal-notice/legal-notice-for-divorce` meta

- Title: `Divorce Legal Notice — Send in 24 Hours | vakiltech`
- Meta description: `Send a divorce legal notice online for ₹1,499. Covers cruelty, desertion, adultery. Drafted by verified advocates and delivered by registered post.`
- Add visible up-link: "Understanding the divorce process? Read our step-by-step guide" → DV-01.
- **Acceptance:** grep confirms new meta; rendered up-link visible above the primary CTA.

---

### LN-01 · Upgrade `/blogs/legal-notice-format-india` into master format hub

- **Role:** Decision (Cluster 1)
- **Target keywords:** `legal notice format` (6,600, KD 20), `legal notice format for recovery of money` (1,261 imp/90d GSC)
- **Content outline:** what a legal notice format is → mandatory components → **6 full sample formats** embedded (money recovery, cheque bounce, eviction, defamation, unpaid salary, consumer complaint) — each sample is followed by a link to its Action page → FAQ
- **Internal links:** Out → 6 Action pages listed above; plus `/send-legal-notice` as the catch-all CTA
- **Schema:** `Article` + `FAQPage` + `BreadcrumbList`
- **Acceptance:** exactly 6 sample formats; each has a captioned "Send this notice" link to its Action page; word count ≥ 2,500.

---

### LN-02 · Rewrite `/blogs/how-to-send-legal-notice-in-india`

- Current CTR 0.1% on 2,296 imp. New title: `How to Send a Legal Notice in India (2026) — Step by Step`
- Meta description: `Sending a legal notice in India? Here's the exact process — who drafts it, what to include, how it's delivered, and what happens after. vakiltech sends one for ₹1,499.`
- Add FAQ schema (10 Q&A).
- **Acceptance:** FAQ schema validates; meta description includes the price token.

---

### LN-03 · Strengthen pricing signal on `/send-legal-notice` H1

- Add a visible price badge next to H1: "Send Legal Notice — Starting ₹1,499".
- Add an H2 "Legal notice charges in India" section (300 words) targeting `legal notice charges` (484 imp/90d, CTR 6.2%).
- **Acceptance:** H2 literal string "Legal notice charges in India" present; price ₹1,499 visible above the fold.

---

### MR-01..MR-04 · Reconcile money-recovery blogs

Scope per C-06. If blogs exist on a feature branch: merge. If missing: create fresh per the skeletons below.

**MR-01 `/blogs/money-recovery-complete-guide-india`** — Awareness · target `money recovery india` · ≥ 2,000 words · links out to MR-03, MR-04, `/send-legal-notice/legal-notice-for-money-recovery`

**MR-02 `/blogs/when-to-send-money-recovery-legal-notice`** — Awareness · target `when to send money recovery legal notice` · ≥ 1,500 words · decision-tree content

**MR-03 `/blogs/money-recovery-legal-notice-cost-timeline`** — Decision · target `money recovery notice cost`, `money recovery notice timeline` · ≥ 1,500 words · table of costs and timelines

**MR-04 `/blogs/what-happens-after-money-recovery-notice`** — Decision · target `what happens after money recovery notice` · ≥ 1,500 words

**All four:** conversion CTA "Send Legal Notice for Money Recovery — ₹1,499" → `/send-legal-notice/legal-notice-for-money-recovery`

---

### MR-05 · Optimise `/send-legal-notice/legal-notice-for-money-recovery` meta

- Current: 3,019 imp, 92 clk, 3.0% CTR — aim for 6%.
- New meta description: `Recover your money in 30 days. Send a legal notice for money recovery online — ₹1,499. Drafted by Supreme Court advocates, delivered by registered post, full tracking.`
- **Acceptance:** meta contains price + timeline + credibility signal.

---

### MR-06 · Add "demand notice" H2 to money-recovery format blog

- Add H2 "Demand Notice vs Legal Notice — When to Use Which" (400 words) to `/blogs/money-recovery-legal-notice-format-sample`.
- Target gap keyword `demand notice` (1,900 vol).
- **Acceptance:** section present; linked internally from LN-01 master format hub.

---

### CR-01 · Upgrade `/blogs/consumer-rights-protection-india`

- **Role:** Awareness (Cluster 5)
- **Target keywords:** `consumer rights` (49,500, KD 22), `consumer rights in india` (1,900)
- **Content expansion:** add sections on the 6 statutory consumer rights (Safety, Information, Choice, Heard, Redressal, Consumer Education), the Consumer Protection Act 2019, consumer forums (district/state/national), e-commerce-specific rights.
- **Schema:** `Article` + `FAQPage` + `BreadcrumbList`
- **Internal links:** Out → CR-02 (Decision) + `/send-legal-notice/consumer-complaint-legal-notice` (Action)
- **Acceptance:** word count ≥ 2,800; FAQ schema valid; 6 rights each in their own H3.

---

### CR-02 · Create `/guides/how-to-file-consumer-complaint-india`

- **Role:** Decision (Cluster 5)
- **Target keywords:** `how to file a case in consumer court` (4,400, KD 30), `consumer court procedure`, `consumer complaint format`
- **Content outline:** when to file → jurisdiction (district/state/national by claim value) → documents required → filing procedure → fee structure → timeline → typical outcomes → FAQ
- **Schema:** `Article` + `FAQPage` + `HowTo` + `BreadcrumbList`
- **Internal links:** Out → CR-01 (Awareness up) + `/send-legal-notice/consumer-complaint-legal-notice` (Action down)
- **Conversion CTA:** "Draft Consumer Complaint Notice — ₹1,499"
- **Acceptance:** ≥ 2,200 words; claim-value-by-forum table present.

---

### CR-03 · Upgrade `/send-legal-notice/consumer-complaint-legal-notice` meta

- Current: 7,368 imp, ~106 clk, 1.4% CTR — aim for 4%.
- New meta description: `File a consumer complaint the right way. Legal notice drafted by verified advocates and sent to the company within 24 hours — ₹1,499.`
- **Acceptance:** CTR check 30 days post-deploy.

---

### CR-04 · Add "Send notice to a company" grid on consumer-complaint hub

- On `/send-legal-notice/consumer-complaint-legal-notice`, add a grid component linking to all 25 brand Action pages (Zomato, Swiggy, Flipkart, Amazon India, etc.).
- **Acceptance:** 25 links rendered; each links to its canonical `/send-legal-notice/<brand>` URL.

---

### PT-01 · Create `/guides/how-to-serve-eviction-notice-india`

- **Role:** Decision (Cluster 6)
- **Target keywords:** `eviction notice procedure`, `how to evict tenant india`
- **Internal links:** Out → 6 property Action pages
- **Conversion CTA:** "Send Eviction Legal Notice — ₹1,499"
- **Acceptance:** ≥ 1,800 words; grid linking to all 6 property Action pages (eviction, legal-notice-to-tenant, legal-notice-to-builder, rent-arrears, property-possession, property-partition).

---

### PT-02 · Verify `/blogs/property-disputes-india-complete-guide` links down

- Audit outbound links; ensure all 6 property Action pages are linked.
- **Acceptance:** grep output shows 6 internal links to `/send-legal-notice/*` property pages.

---

### CB-01 · Create `/guides/cheque-bounce-legal-notice-india`

- **Role:** Awareness + Decision (merged — see §3 note)
- **Target keywords:** `cheque bounce` (6,600, KD 31), `cheque bounce case` (14,800), `cheque bounce charges`, `bounced check`, `cheque bounce message from bank` (4,400)
- **Content outline:** what is cheque bounce → Section 138 NI Act overview → 30-day notice requirement → legal notice format (sample) → court procedure → punishment & fines → FAQ
- **Schema:** `Article` + `FAQPage` + `HowTo` + `BreadcrumbList`
- **Internal links:** Out → `/send-legal-notice/cheque-bounce-legal-notice` + 5 city variants
- **Conversion CTA:** "Send Cheque Bounce Legal Notice — ₹1,499"
- **Acceptance:** ≥ 2,500 words; Section 138 NI Act explained in depth.

---

### CB-02 · Rewrite `/send-legal-notice/cheque-bounce-legal-notice` title + FAQ schema

- Current: 16,856 imp, ~157 clk, 0.9% CTR — aim for 3%.
- New title: `Cheque Bounce Legal Notice — Send in 24 Hours | vakiltech`
- Add FAQ schema with 10 Q&A.
- **Acceptance:** FAQ schema validates; title changed.

---

### AG-01 · Create `/agreement-drafting/partnership-deed`

- **Target keywords:** `partnership deed` (22,200, KD 22), `partnership deed format` (6,600)
- **Role:** Action (Cluster 10)
- **Conversion CTA:** "Draft Partnership Deed — ₹999"
- **Acceptance:** follows pattern of existing `/agreement-drafting/rental-agreement`; schema `LegalService`; sitemap updated.

---

### AG-02 · Create `/agreement-drafting/power-of-attorney`

- **Target keywords:** `power of attorney` (33,100), `poa`, `power of attorney format` (4,400), `what is power of attorney` (2,900)
- Mirror AG-01 pattern.

---

### AG-03 · Create `/agreement-drafting/nda`

- **Target keywords:** `NDA drafting india`, `non-disclosure agreement format`
- Mirror AG-01 pattern.

---

### AG-04 · Expand `/agreement-drafting/rental-agreement`

- Target `rent agreement format` (12,100, KD 33), `rental agreement online` (2,400), `rental agreement near me` (2,900)
- Add sample rent-agreement format (embed) + FAQ schema.
- **Acceptance:** sample visible; FAQ schema valid; word count ≥ 1,800.

---

## 8. Phase 3 — Site-wide

### SW-01 · Breadcrumb schema on every page
Implement a shared `<Breadcrumbs>` component that emits both visible breadcrumbs and `BreadcrumbList` JSON-LD. Mount on every page. **Acceptance:** crawl the sitemap, every URL returns `BreadcrumbList` in the rendered HTML.

### SW-02 · FAQ schema on all Awareness/Decision pages
Ensure every page in Clusters 1–9 (Awareness + Decision rows) emits `FAQPage` JSON-LD. **Acceptance:** Rich Results Test passes for every such URL.

### SW-03 · Shared related-links component `/_seo/related-links`
Build a reusable React component that takes `{ upstream: [], downstream: [], siblings: [] }` and renders styled link blocks. Mount per the §3 internal-link contract. **Acceptance:** component used by every new page shipped in Phase 2.

### SW-04 · Fix structured-data markup errors
Address every item in `vakiltech.in_structured_data_that_contains_markup_errors_20260422.md`. **Acceptance:** zero errors in Rich Results Test across the sitemap.

### SW-05 · Sitemap cleanup
Remove all 301'd URLs from `src/app/sitemap.ts` after C-01..C-04 are verified. **Acceptance:** `curl https://vakiltech.in/sitemap.xml | grep -c "legal-drafts-bundle\|send-a-legal-notice\|legal-consultation"` returns 0.

---

## 9. Data & reference files (if you need to dig deeper)

**Only consult these if a task is ambiguous. Do not re-run discovery.** All files live in the repo under `/Users/pritambanikk/VT/vt_march266/seo-data/` — see `seo-data/README.md` for the full layout.

- Strategy document: `/Users/pritambanikk/VT/vt_march266/SEO_FUNNEL_STRATEGY_vakiltech.md`
- GSC raw queries: `seo-data/gsc_data/queries.json` (3,273 queries)
- GSC pages: `seo-data/gsc_data/pages.json` (818 pages)
- GSC query×page (cannibalization source): `seo-data/gsc_data/query_page.json` (4,792 combos)
- GSC query×device: `seo-data/gsc_data/query_device.json`
- Legal-intent queries filtered (human-readable): `seo-data/gsc_data/legal_queries.csv` (2,627 rows)
- Pages summary (human-readable): `seo-data/gsc_data/pages.csv`
- SEMRUSH gap keywords: `seo-data/semrush/gap_data.csv`
- GSC keywords clustered by pillar × intent: `seo-data/semrush/gsc_clustered.csv`
- SEMRUSH gap clustered: `seo-data/semrush/gap_clustered.csv`
- Regeneration scripts (Python): `seo-data/scripts/*.py`

---

## 10. Stop conditions (ask before acting)

Stop and ask the user (not the strategy author) if:

1. A target keyword's intent classification seems wrong given the current SERP.
2. Two tasks appear to compete for the same primary keyword (possible hidden cannibalization).
3. An existing page's removal would break an external link you can see in GSC "Referring pages" data.
4. The `/guides` directory does not exist and you're unsure whether to scaffold it under app router conventions.
5. A new page would take URL authority from a higher-traffic existing page (check GSC impressions first).

**Do not ask before:** routine implementation choices (which Tailwind class, which heading level for H3 under the 9 H2s, whether to use `<dl>` vs `<ul>` for a list, image sizes, etc.). Just pick the repo's existing convention and move on.

---

## 11. Parking lot (ideas that surfaced but are out of scope)

*Append here any new content or keyword opportunities discovered during execution. Do not act on them without user approval — flag them for the next strategy revision.*

- (empty)

---

## 12. Tracker sync

After each task is shipped and verified, update the corresponding row in `SEO_FUNNEL_STRATEGY_vakiltech.md` §9 from `Not Started` to the new state. Commit message convention: `seo(<task-id>): <short description>` — e.g. `seo(DF-02): upgrade BNS 356 defamation blog into full explainer`.

---

*Handoff authored by the discovery agent. If anything here conflicts with the source strategy document, the strategy document wins — flag the conflict and ask.*
