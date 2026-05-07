# vakiltech.in — Intent-Driven SEO Funnel Strategy

**Prepared:** 24 April 2026
**Data windows:** GSC 22 Jan → 22 Apr 2026 (90 days, `sc-domain:vakiltech.in`) · SEMRUSH India database (`in`)
**Scope:** Indian legal-services organic search — consultation, advice, and legal-action queries

---

## 1. Executive summary

In the last 90 days `vakiltech.in` captured **112,420 impressions** but only **1,653 clicks (1.47% aggregate CTR)**. The site has built a strong bottom-of-funnel asset — 48+ `/send-legal-notice/*` service pages — but three structural gaps are bleeding otherwise-qualified traffic:

1. **Top-funnel awareness for BNS 356 / defamation** is drawing ~17,000 impressions at <1% CTR because the current ranking URL is a service page, not an explainer. Users want to *learn* before they *buy*.
2. **Decision-stage content is missing for divorce, consumer rights, and money-recovery comparison queries** — exactly where competitors digilawyer.ai and lawghar.in are harvesting double-digit KDs at KD ≤25.
3. **The generic "vakil / lawyer / advocate near me" cluster** (~55,000 monthly impressions across queries) has no destination that satisfies the intent — the homepage ranks at pos 4 but converts at 0.1%.

Four **cannibalization issues** are also actively eroding rankings (`/legal-drafts-bundle` ↔ `/3500-legal-drafts-templates-bundle`, `/send-legal-notice` ↔ `/send-legal-notice/` trailing slash, `/send-a-legal-notice` ↔ `/send-legal-notice`, `/legal-consultation` ↔ `/consultation`). These must be resolved with 301 redirects before any new content is shipped.

Strategic direction in this document: **upgrade 14 existing pages, consolidate 4 cannibalizing URLs, and introduce 11 new pages organized into 9 intent clusters** — each with an explicit Awareness → Decision → Action funnel and a named conversion path (Consultation or Legal Notice).

---

## 2. Competitor set (SERP-overlap, not directory lists)

Five competitors were selected from SEMRUSH `domain_organic_organic` (db=in), ranked by *Common Keywords* (true SERP overlap) and filtered for Indian-legal-services intent. General directories and non-Indian sites were excluded.

| # | Domain | Common KWs | Organic KWs | Est. Traffic | Why they matter |
|---|---|---|---|---|---|
| 1 | **digilawyer.ai** | 12 | 3,684 | 14,017 | Largest SERP footprint; dominates IPC/BNS explainers, divorce procedure, agreement drafting, and lawyer-directory queries |
| 2 | **lawspot.in** | 8 | 610 | 2,107 | Strong on consumer rights, cheque bounce, trademark — Decision/Awareness topics `vakiltech.in` under-serves |
| 3 | **legalparihar.in** | 5 | 575 | 1,384 | Direct overlap on rental/rent-agreement, notarised affidavit, legal-notice format |
| 4 | **vakilapna.com** | 4 | 73 | 507 | Owns the "vakil / advocate near me" brand intent — same audience, same value promise |
| 5 | **lawghar.in** | 4 | 91 | 574 | Owns the divorce-procedure Awareness/Decision cluster and recovery-notice long-tail |

**Intent alignment check:** all five serve the same Indian user — someone researching or acting on a legal problem — and all five compete for one or more of vakiltech's core conversion paths (legal notice / consultation).

---

## 3. Intent framework

Every keyword and page in this strategy is assigned exactly **one** role.

| Stage | User mindset | Commercial value | Typical queries |
|---|---|---|---|
| **Awareness** | "I have a problem / I want to understand a concept" | Low direct, high funnel-fill value | `what is a legal notice`, `section 356 bns`, `divorce rate in india`, `consumer rights` |
| **Decision** | "I'm evaluating options / comparing / looking at format" | Medium — ready to be convinced | `legal notice format`, `divorce procedure in india`, `how to file for divorce`, `best lawyer in delhi` |
| **Action** | "I want to buy / hire / send / file now" | High — conversion-ready | `send legal notice online`, `legal notice charges`, `advocate near me`, `online lawyer consultation` |

Pure informational keywords with **no plausible path to consultation or legal-notice conversion** (e.g. `bonafide certificate`, `gap certificate`, `voter id address change`, `lok adalat date`) are **excluded from the strategy** even if competitors rank for them — they are off-funnel.

---

## 4. What GSC says about existing coverage

### 4.1 The current scoreboard (last 90 days)

| Stage | GSC legal queries | Impressions | Clicks | CTR |
|---|---:|---:|---:|---:|
| Action | 825 | 60,122 | 924 | 1.54% |
| Awareness | 568 | 23,692 | 96 | **0.41%** |
| Decision | 232 | 6,184 | 357 | 5.77% |
| Unclassified | 1,002 | 19,913 | 259 | 1.30% |

**Read:** Decision converts best (5.77%). Awareness impressions are leaking catastrophically because there is almost no true Awareness content on the site — the bottom-funnel service pages are being served to top-funnel searchers.

### 4.2 Top Action queries already working

| Query | Imps | Clicks | CTR | Pos | Already served by |
|---|---:|---:|---:|---:|---|
| send legal notice online | 726 | 129 | 17.8% | 1.9 | `/send-legal-notice` ✅ |
| legal notice online | 390 | 86 | 22.1% | 1.6 | `/send-legal-notice` ✅ |
| online legal notice | 297 | 50 | 16.8% | 1.4 | `/send-legal-notice` ✅ |
| send legal notice | 401 | 50 | 12.5% | 3.5 | `/send-legal-notice` ✅ |
| legal notice charges | 484 | 30 | 6.2% | 3.2 | `/send-legal-notice` (thin pricing signal) |
| legal notice for recovery of money | 3,019 | 92 | 3.0% | 3.8 | `/send-legal-notice/legal-notice-for-money-recovery` ✅ |

### 4.3 Critical leaks — rank without clicks

| Query | Imps | Clicks | CTR | Current page | Problem |
|---|---:|---:|---:|---|---|
| vakil | 39,741 | 53 | **0.1%** | `/` (homepage) | Generic "find a lawyer" intent; homepage is brand, not directory |
| legal notice | 5,815 | 26 | 0.4% | `/send-legal-notice` | Service page ranks for informational intent |
| 356 bns / bns 356 / section 356 bns | 6,337 combined | 8 | 0.1% | `/send-legal-notice/criminal-defamation-legal-notice` | Service page cannibalizing `/blogs/section-356-bns-defamation-law-india` (pos 5-8) |
| defamation in/under bns | 4,603 combined | 34 | 0.7% | same | Same cannibalization |

### 4.4 Confirmed cannibalization — same query, ≥2 pages ranking

| Query | Impressions | Conflicting pages |
|---|---:|---|
| `vakil` | 40,999 | `/` + `/send-legal-notice/` + `/refund-policy` + `/blogs` + `/about` |
| `legal notice for recovery of money` | 3,527 | `/send-legal-notice/legal-notice-for-money-recovery` (Action, pos 1.8) + `/blogs/money-recovery-legal-notice-format-sample` (Decision, pos 6.5) — **intent-split is correct**, but internal linking needs strengthening |
| `356 bns` / `defamation in bns` | ~6,000 | `/send-legal-notice/criminal-defamation-legal-notice` + `/blogs/section-356-bns-defamation-law-india` — **intent conflict**, blog should own Awareness, service page should focus on Action only |
| `legal notice` | 5,835 | `/send-legal-notice` + `/send-legal-notice/` (trailing-slash duplicate — technical SEO) + `/send-a-legal-notice` (separate URL — technical SEO) |
| `legal notice format` | 1,028 | `/blogs/money-recovery-legal-notice-format-sample` (pos 9.6) + `/send-legal-notice` (pos 14.3) |

### 4.5 URLs indexed in Google but **not present** in the local codebase at `/Users/pritambanikk/VT/vt_march266`

These either live on a different branch or are orphans from an earlier deploy. They must be reconciled before funnel changes ship. Flagged in the execution tracker below.

- `/blogs/section-356-bns-defamation-law-india` (14,675 imps, 77 clicks)
- `/blogs/money-recovery-complete-guide-india` (3,453 imps, 24 clicks)
- `/blogs/money-recovery-legal-notice-cost-timeline` (2,203 imps, 24 clicks)
- `/blogs/what-happens-after-money-recovery-notice` (903 imps, 13 clicks)
- `/blogs/when-to-send-money-recovery-legal-notice` (714 imps, 7 clicks)
- `/send-a-legal-notice` (2,651 imps, 169 clicks)
- `/legal-consultation` (2,006 imps, 16 clicks)
- `/send-legal-notice/builder-delay-possession/bangalore`
- `/send-legal-notice/demand-notice-recovery-of-money/solapur`

---

## 5. SEMRUSH gap — only high-intent legal queries kept

Raw gap: ~1,200 keywords across the five competitors. After filtering for legal intent, funnel value, KD<40, and volume ≥200, **~90 keywords survive** and resolve into 9 pillars (below). The full filtered set lives at `outputs/semrush/gap_clustered.csv`.

---

## 6. Nine intent clusters (Pillars) — the complete funnel architecture

Each cluster has one Awareness hub (optional but recommended), one or more Decision pages, and exactly one Action page with a named conversion path. **No two pages in the same cluster share the same intent stage.**

Legend: ✅ = page exists and serves this role well · 🔧 = page exists but needs upgrade · 🆕 = new page to create · ❌ = cannibalizing — consolidate via 301

---

### Cluster 1 — Legal Notice (Generic / Hub)
**Business value:** highest — the site's largest converting asset. Primary conversion path: **Legal Notice**.

| Intent | Page | Status | Primary keywords | Notes |
|---|---|---|---|---|
| Awareness | `/blogs/what-is-a-legal-notice-in-india` | ✅ | what is a legal notice, legal notice meaning | Links down to Decision + Action |
| Awareness | `/blogs/legal-notice-time-limit-india` | ✅ | legal notice time limit | OK as-is |
| Awareness | `/blogs/legal-notice-fees-india` | ✅ | legal notice fees india | OK, link to Action |
| Awareness | `/blogs/difference-legal-notice-fir-complaint` | ✅ | difference legal notice vs fir | OK |
| Awareness | `/blogs/what-happens-if-legal-notice-is-ignored` | ✅ | what happens if legal notice ignored | OK |
| Decision | `/blogs/legal-notice-format-india` | 🔧 | legal notice format (6,600 vol, KD 20), legal notice format for recovery of money (1,261 imps) | **Expand into a comprehensive format hub** — embed 6+ format samples (money recovery, cheque bounce, eviction, defamation, unpaid salary, consumer), each linking to its Action child page. Currently thin. |
| Decision | `/blogs/how-to-send-legal-notice-in-india` | 🔧 | how to send legal notice (392 imps, pos 4.8) | Rank OK (2,296 imps) but CTR 0.1% — rewrite title/meta, add FAQ schema |
| Decision | `/blogs/legal-notice-reply-format-india` | ✅ | legal notice reply format | Keep |
| Decision | `/blogs/legal-notice-by-email-whatsapp-india` | ✅ | legal notice by email / whatsapp | Keep |
| Action | `/send-legal-notice` | ✅ | send legal notice online, legal notice online, legal notice charges | **Defending asset** — strengthen H1 pricing signal for "legal notice charges" |
| — | `/send-legal-notice/` (trailing slash) | ❌ | — | **301 → `/send-legal-notice`** |
| — | `/send-a-legal-notice` | ❌ | — | **301 → `/send-legal-notice`** |

**Funnel flow:** awareness blogs → `/blogs/legal-notice-format-india` (Decision hub) → `/send-legal-notice` (Action).
**Conversion CTA:** "Send Legal Notice — ₹1,499".

---

### Cluster 2 — Legal Notice for Money Recovery
**Business value:** high — highest GSC click volume after the hub. Primary conversion: **Legal Notice**.

| Intent | Page | Status | Primary keywords | Notes |
|---|---|---|---|---|
| Awareness | `/blogs/money-recovery-complete-guide-india` | 🔧 (reconcile) | money recovery india, when to send recovery notice | Indexed but not in current codebase — **verify on main branch; if missing, recreate**. Targets `money recovery` informational intent as funnel opener. |
| Awareness | `/blogs/when-to-send-money-recovery-legal-notice` | 🔧 (reconcile) | when to send money recovery legal notice | Same — reconcile |
| Decision | `/blogs/money-recovery-legal-notice-format-sample` | ✅ | legal notice format for recovery of money (1,261 imps, 32 clicks), legal notice for recovery of money format (279 imps, 17 clicks) | Top Decision performer — keep, add stronger internal link to Action page |
| Decision | `/blogs/money-recovery-legal-notice-cost-timeline` | 🔧 (reconcile) | money recovery notice cost / timeline | Reconcile with main branch |
| Decision | `/blogs/what-happens-after-money-recovery-notice` | 🔧 (reconcile) | what happens after money recovery notice | Reconcile |
| Action | `/send-legal-notice/legal-notice-for-money-recovery` | ✅ | legal notice for recovery of money (3,019 imps, 92 clicks, pos 3.8) | **Top converter** — optimise meta description for CTR (currently 1.1%) |
| Action | `/send-legal-notice/legal-notice-for-outstanding-payment` | ✅ | outstanding payment notice | Keep; link into the hub |
| Action | `/send-legal-notice/legal-notice-for-unpaid-salary` | ✅ | legal notice for unpaid salary | Keep |
| Action | `/send-legal-notice/bank-loan-settlement` | ✅ | bank loan settlement notice | Keep |
| Action | `/send-legal-notice/legal-notice-for-money-recovery/[city]` (mumbai, delhi, bangalore, chennai, hyderabad) | ✅ | legal notice for money recovery + city | Keep — city expansion working |

**New Decision upgrade:** add a `demand notice` section to `/blogs/legal-notice-format-india` or a dedicated H2 within the money-recovery format blog — captures the 1,900-volume `demand notice` gap currently going to `legalparihar.in`.

**Funnel flow:** awareness blogs → format/cost decision blogs → `/send-legal-notice/legal-notice-for-money-recovery` → city child pages.

---

### Cluster 3 — Legal Notice for Defamation / BNS 356
**Business value:** **biggest untapped opportunity** — ~17,000 monthly impressions, <1% CTR. Primary conversion: **Legal Notice**.

| Intent | Page | Status | Primary keywords | Notes |
|---|---|---|---|---|
| Awareness | `/blogs/section-356-bns-defamation-law-india` | 🔧 (reconcile + upgrade) | 356 bns, bns 356, section 356 bns, defamation in bns, defamation under bns, criminal defamation in bns (17,000 imps combined) | **HIGHEST PRIORITY**. Indexed but not on local branch. Rewrite as a comprehensive explainer — what BNS 356 is, elements, punishment, landmark cases, when to send a notice. CTA at bottom: "Send Defamation Legal Notice". Fix title tag + FAQ schema to lift CTR from 0.5% to ~3%. |
| Action | `/send-legal-notice/criminal-defamation-legal-notice` | 🔧 | criminal defamation legal notice | **De-scope the BNS 356 explainer content** currently cannibalizing the blog. Keep the page focused on "send a defamation notice" conversion. Add prominent internal link up to the awareness blog. |
| (Decision — optional) | `/blogs/defamation-legal-notice-format-india` | 🆕 (optional — only if volume justifies) | defamation legal notice format | Can be folded into the master format hub. **Do not create unless decision-stage traffic materialises.** |

**Funnel flow:** `/blogs/section-356-bns-defamation-law-india` (Awareness) → `/send-legal-notice/criminal-defamation-legal-notice` (Action).

---

### Cluster 4 — Legal Notice for Divorce / Family
**Business value:** high untapped — competitors (digilawyer, lawghar) own the Decision layer here. Primary conversion: **Legal Notice** + **Consultation** (dual).

| Intent | Page | Status | Primary keywords | Notes |
|---|---|---|---|---|
| Awareness | `/guides/divorce-in-india` | 🆕 | divorce rate in india (14,800), causes of divorce in india, divorce statistics in india | Statistics / landscape piece — top-of-funnel entry. |
| Decision | `/guides/divorce-procedure-in-india` | 🆕 | **divorce procedure in india (8,100, KD 25)**, divorce process in india (8,100), divorce process, divorce procedure (4,400), mutual divorce process (4,400), mutual consent divorce process, steps to divorce | **HIGH PRIORITY**. Competitors have 4k–14k monthly volume Decision keywords at KD 17–25. A single authority page can own this cluster. CTA: "Talk to a Divorce Lawyer — ₹299" + secondary "Send Divorce Legal Notice — ₹1,499". |
| Decision | `/guides/how-to-file-for-divorce-india` | 🆕 | how to file for divorce (8,100, KD 21), how to apply for divorce (2,900), how to file divorce in india (2,900), procedure to file divorce in india (170), process of filing divorce in india | Step-by-step filing guide. Internal link down to Action pages. |
| Decision | `/guides/mutual-consent-divorce-india` | 🆕 | mutual divorce (3,600), mutual consent divorce process (390), how to apply for mutual divorce (480), mutual divorce time, mutual divorce papers | Dedicated mutual-consent pillar page; 7+ long-tail queries feed it. |
| Action | `/send-legal-notice/legal-notice-for-divorce` | ✅ | legal notice for divorce, divorce notice (3,600, KD 22 — competitors rank) | **Fix meta to target "divorce notice" keyword**; currently under-ranked vs digilawyer/lawspot/legalparihar. |
| Action | `/send-legal-notice/legal-notice-for-cruelty-or-desertion` | ✅ | cruelty, desertion legal notice | Keep, link from mutual-consent guide |
| Action | `/send-legal-notice/maintenance-legal-notice` | ✅ | maintenance legal notice | Keep |
| Action | `/send-legal-notice/child-custody-legal-notice` | ✅ | child custody legal notice | Keep |
| Action | `/send-legal-notice/domestic-violence-legal-notice` | ✅ | domestic violence legal notice | Keep |
| Action | `/consultation` (family-law variant) | ✅ | online lawyer consultation, divorce lawyer | Ensure divorce-specific FAQ + internal link from guides |

**Funnel flow:** divorce stats/awareness → procedure/filing/mutual-consent Decision hubs → Action split: *send notice* OR *book consultation* depending on case stage.

---

### Cluster 5 — Consumer Rights & Complaints
**Business value:** high untapped — lawspot ranks for "consumer rights" (49,500 vol, KD 22). Primary conversion: **Legal Notice** + **Consultation**.

| Intent | Page | Status | Primary keywords | Notes |
|---|---|---|---|---|
| Awareness | `/blogs/consumer-rights-protection-india` | 🔧 | consumer rights (49,500), consumer rights in india (1,900), consumer responsibilities | **Upgrade**. Page exists but needs expansion to capture 49k-volume head term. Add FAQ schema, rights breakdown, and prominent down-funnel links. |
| Decision | `/guides/how-to-file-consumer-complaint-india` | 🆕 | how to file a case in consumer court (4,400, KD 30), consumer court procedure, consumer complaint format | New pillar page. Step-by-step. CTA: "Draft Consumer Complaint Notice — ₹1,499" + "Talk to a Consumer Lawyer". |
| Action | `/send-legal-notice/consumer-complaint-legal-notice` | ✅ | consumer complaint legal notice (7,368 imps, 106 clicks) | **Already performing (pos 5.9)** — upgrade meta for CTR, add pricing badge in H1. |
| Action | `/send-legal-notice/{25 company pages}` (zomato, swiggy, flipkart, amazon-india, etc.) | ✅ | {brand} legal notice | Strong SEO plays — keep. Hub page `/send-legal-notice/consumer-complaint-legal-notice` must internally link to all 25 in a "Send notice to a company" section. |

**Funnel flow:** `consumer-rights-protection-india` (Awareness) → `how-to-file-consumer-complaint-india` (Decision) → consumer-complaint hub → company-specific Action pages.

---

### Cluster 6 — Legal Notice for Property / Landlord–Tenant
**Business value:** medium-high, under-utilised Decision stage.

| Intent | Page | Status | Primary keywords | Notes |
|---|---|---|---|---|
| Awareness | `/blogs/property-disputes-india-complete-guide` | ✅ | property disputes in india | Keep; ensure it links down to the three action pages below |
| Decision | `/guides/how-to-serve-eviction-notice-india` | 🆕 | eviction notice procedure, how to evict tenant india | Decision-stage guide — feeds eviction + tenant Action pages. |
| Action | `/send-legal-notice/eviction-legal-notice` | ✅ | eviction legal notice | Keep |
| Action | `/send-legal-notice/legal-notice-to-tenant` (+ 5 cities) | ✅ | legal notice to tenant | Keep |
| Action | `/send-legal-notice/legal-notice-to-builder` | ✅ | legal notice to builder | Keep |
| Action | `/send-legal-notice/legal-notice-for-rent-arrears` | ✅ | legal notice for rent arrears | Keep |
| Action | `/send-legal-notice/legal-notice-for-property-possession` | ✅ | property possession legal notice | Keep |
| Action | `/send-legal-notice/property-partition-legal-notice` | ✅ | property partition legal notice | Keep |
| Action | `/send-legal-notice/amenities-society-builder` (+ 3 cities) | ✅ | amenities society builder notice | Keep |

---

### Cluster 7 — Legal Notice for Cheque Bounce & Contract Breach
**Business value:** medium — Action pages exist, Decision thin.

| Intent | Page | Status | Primary keywords | Notes |
|---|---|---|---|---|
| Awareness + Decision | `/guides/cheque-bounce-legal-notice-india` | 🆕 | cheque bounce (6,600, KD 31), cheque bounce case (14,800), cheque bounce charges, bounced check, cheque bounce message from bank (4,400) | **High-volume gap.** Merge Section 138 NI Act explainer + procedure + format. Competitor `lawspot.in` owns this. |
| Action | `/send-legal-notice/cheque-bounce-legal-notice` (+ 5 cities) | ✅ | cheque bounce legal notice (16,856 imps, 157 clicks, pos 5.9) | Keep — **improve CTR from 0.9%** via title rewrite and FAQ schema |
| Action | `/send-legal-notice/breach-of-contract-legal-notice` | ✅ | breach of contract legal notice | Keep |

---

### Cluster 8 — Employment & Workplace
**Business value:** medium.

| Intent | Page | Status | Primary keywords | Notes |
|---|---|---|---|---|
| Awareness | `/guides/posh-act-india-workplace-harassment` | 🆕 | what is posh act (2,900, KD 29), posh (49,500 — high competition, low commercial intent, treat as entry point) | **Only create if POSH queries show early intent signal.** Lower priority than defamation/divorce clusters. |
| Action | `/send-legal-notice/workplace-harassment-legal-notice` | ✅ | workplace harassment legal notice | Keep |
| Action | `/send-legal-notice/wrongful-termination-legal-notice` | ✅ | wrongful termination legal notice | Keep |
| Action | `/send-legal-notice/employee-misconduct-legal-notice` | ✅ | employee misconduct legal notice | Keep |
| Action | `/send-legal-notice/legal-notice-for-unpaid-salary` | ✅ | legal notice for unpaid salary | Also listed under Money Recovery — single URL, dual-cluster linking |

---

### Cluster 9 — Lawyer Directory & Consultation (the "vakil" cluster)
**Business value:** **largest traffic leak** — ~55,000 monthly impressions wasted at <1% CTR. Primary conversion: **Consultation**.

| Intent | Page | Status | Primary keywords | Notes |
|---|---|---|---|---|
| Awareness | `/blogs/what-is-vakalatnama-india` | 🆕 | what is vakalat (1,600), what is vakalatnama (1,600), vakalat meaning (3,600), vakalatnama meaning (3,600), vakalat form (4,400), in the court of vakalat | ~15,000 monthly vol cluster entirely untapped, owned by lawghar. Low-commercial but high-relevance entry point. Links to `/consultation`. |
| Decision | `/find-a-lawyer` | 🆕 | **find a lawyer (8,100, KD 55)**, best lawyer in india (9,900, KD 35), top lawyers in india (9,900, KD 32), top advocate in india (9,900), indian lawyer (8,100) | **HIGHEST VALUE NEW PAGE.** How-to-find / how-to-choose the right lawyer in India. Trust page. CTA: "Talk to a Verified Advocate — ₹299". |
| Action | `/consultation` | ✅ | online lawyer consultation (2,900, KD 44), talk to lawyer, lawyer consultation | **Already exists** — verify internal linking from the new `/find-a-lawyer` Decision hub is strong. |
| Action | `/consultation/[city]` (50 cities) | ✅ | advocate near me (40,500), lawyer near me, vakil near me, {city} advocate | **50 city pages exist** — ensure city-specific H1 includes "advocate near me {city}" and all feed into `/consultation`. Owns the "near me" vertical which `vakilapna.com` currently dominates. |
| Action | `/legal-consultation` | ❌ | — | **301 → `/consultation`** (currently cannibalizing) |

**Homepage (`/`) role:** brand + navigational. **Remove keyword focus on "vakil" from homepage** and redirect that authority to `/find-a-lawyer`. The homepage should no longer try to compete for the 39,741-impression "vakil" generic query — that's a directory intent, not a brand intent.

---

### Cluster 10 — Agreement & Document Drafting
**Business value:** medium. Three existing URLs form a partial funnel; expand under-represented sub-types.

| Intent | Page | Status | Primary keywords | Notes |
|---|---|---|---|---|
| Decision | `/agreement-drafting` | ✅ | agreement drafting online | Hub — already exists; keep, link down to sub-types |
| Decision | `/agreement-drafting/rental-agreement` | ✅ | rental agreement, rent agreement format | Keep; expand to target `rent agreement format` (12,100 KD 33), `rental agreement online` (2,400), `rental agreement near me` (2,900) |
| Decision | `/agreement-drafting/employment-agreement` | ✅ | employment agreement | Keep |
| Action | `/agreement-drafting/partnership-deed` | 🆕 | partnership deed (22,200, KD 22), partnership deed format (6,600) | New child — digilawyer ranks; vakiltech can too at KD 22 |
| Action | `/agreement-drafting/power-of-attorney` | 🆕 | power of attorney (33,100), poa, power of attorney format (4,400), what is power of attorney (2,900) | New child — high volume |
| Action | `/agreement-drafting/nda` | 🆕 | NDA drafting india, non-disclosure agreement format | Completes the agreement-type matrix |
| Action | `/document-drafting` | ✅ | legal document drafting, custom legal documents | Existing — keep as drafting Action hub |
| Action | `/3500-legal-drafts-templates-bundle` | ✅ | legal drafts bundle (21 clicks from only 115 imps — 18.3% CTR, very strong) | **Canonical URL** — keep |
| — | `/legal-drafts-bundle` | ❌ | — | **301 → `/3500-legal-drafts-templates-bundle`** (1,339 imps, 122 clicks currently split between these two duplicate URLs) |

---

### Non-core but keep: Business Compliance
`/gst-registration`, `/fssai-registration`, `/itr-filing`, `/trade-license`, `/corporate-retainer` — keep as-is. These serve a separate audience (business owners) and don't share the consultation/legal-notice funnel. They have their own conversion path.

---

## 7. Funnel flow diagram (text)

```
AWARENESS (blogs, guides, explainers)
    │
    │  internal link in <main> CTA block + contextual inline links
    ▼
DECISION (format/procedure/comparison hubs, /find-a-lawyer)
    │
    │  conversion CTA block (price + social proof) + sticky in-content CTA
    ▼
ACTION  ────────────►  /send-legal-notice/* (Legal Notice — ₹1,499)
        ────────────►  /consultation + /consultation/[city] (Consultation — ₹299)
        ────────────►  /agreement-drafting/* (Drafting — ₹999)
        ────────────►  /3500-legal-drafts-templates-bundle (Templates — ₹499)
```

**Internal linking rules (mandatory for every page):**

1. Every Awareness page has at least **one contextual link to its Decision sibling** AND **one CTA button/box pointing to its Action sibling**.
2. Every Decision page links **up** to its Awareness siblings (breadcrumb + "Read first:" block) and **down** to its Action sibling (conversion CTA).
3. Every Action page links **up** to at least one Decision page (for comparison-shopping users) and has a visible price + a clear single CTA.
4. Every page has breadcrumbs with schema markup.
5. No page is more than **3 clicks from the homepage**.

---

## 8. Cannibalization fixes (execute first, before content)

| # | Issue | Action | Priority |
|---|---|---|---|
| 1 | `/legal-drafts-bundle` ↔ `/3500-legal-drafts-templates-bundle` (identical content) | **301** `/legal-drafts-bundle` → `/3500-legal-drafts-templates-bundle` | 🔥 P0 |
| 2 | `/send-legal-notice/` ↔ `/send-legal-notice` (trailing slash) | Add trailing-slash redirect rule in `next.config.ts` | 🔥 P0 |
| 3 | `/send-a-legal-notice` ↔ `/send-legal-notice` (alt URL) | **301** `/send-a-legal-notice` → `/send-legal-notice` | 🔥 P0 |
| 4 | `/legal-consultation` ↔ `/consultation` | **301** `/legal-consultation` → `/consultation` | 🔥 P0 |
| 5 | `/send-legal-notice/criminal-defamation-legal-notice` cannibalizing `/blogs/section-356-bns-defamation-law-india` on BNS queries | Rewrite Action page to focus only on conversion; move all BNS 356 explainer content to the blog | 🟧 P1 |
| 6 | Homepage ranking at pos 4 for generic "vakil" (40k imps, 0.1% CTR) | Create `/find-a-lawyer`, update homepage to deprioritise "vakil" keyword | 🟧 P1 |
| 7 | `/send-legal-notice/legal-notice-for-money-recovery` ↔ `/blogs/money-recovery-legal-notice-format-sample` on "legal notice format for recovery of money" | Intent split is correct — no action needed other than reinforcing internal links | ✅ resolved by design |

---

## 9. Execution tracker

Status dictionary: `Not Started` · `In Progress` · `Blocked` · `Completed` · `Verified`

> Update this table as work ships. Keep it in this file so the strategy and status live together.

### 9.A Cannibalization fixes (P0 — block content work)

| ID | Task | Cluster | Status | Owner | Notes |
|---|---|---|---|---|---|
| C-01 | 301 `/legal-drafts-bundle` → `/3500-legal-drafts-templates-bundle` | Drafting | Completed | executor | Redirect + `trailingSlash:false` added to next.config.ts; sitemap entry removed. Page file cannot be deleted via bash (permission) but 301 fires before Next.js renders page — SEO effect achieved. |
| C-02 | Trailing-slash redirect rule in `next.config.ts` | Site-wide | Completed | executor | `trailingSlash: false` added to nextConfig; catch-all `/:path+/` → `/:path+` 301 redirect added (listed first in redirects array). |
| C-03 | 301 `/send-a-legal-notice` → `/send-legal-notice` | Legal Notice Hub | Completed | executor | Already present in next.config.ts (with wildcard variant). No page.tsx exists. Not in sitemap. ✅ |
| C-04 | 301 `/legal-consultation` → `/consultation` | Consultation | Completed | executor | Already present in next.config.ts. No page.tsx exists. Not in sitemap. ✅ |
| C-05 | De-scope BNS 356 content from `/send-legal-notice/criminal-defamation-legal-notice` | Defamation | Completed | executor | Removed "What is Section 356 BNS Explained" section and "5 Legal Ingredients" (informational) sections. Replaced with 2-sentence framing + upstream link to blog. Added `Link` + `ArrowRight` imports. Page now conversion-focused. |
| C-06 | Reconcile 9 indexed-but-missing URLs vs current branch | Audit | Completed | executor | All 7 content URLs (5 blogs + 2 city pages) confirmed absent from all git branches — never committed. `/send-a-legal-notice` → handled by C-03; `/legal-consultation` → handled by C-04. Recreation assigned: blogs → MR-01..MR-04, DF-01; city pages → Phase 2 (builder-delay-possession/bangalore, demand-notice-recovery-of-money/solapur). |

### 9.B Cluster 1 — Legal Notice Hub

| ID | Task | Role | Status | Owner | Notes |
|---|---|---|---|---|---|
| LN-01 | Upgrade `/blogs/legal-notice-format-india` into master format hub (6+ sample formats, each linking to Action child) | Decision | Completed | executor | Full rewrite: 6 sample formats (money recovery, cheque bounce, eviction, defamation, unpaid salary, consumer complaint), each with "Send this notice ₹1,499" link to Action page. Jump-links nav, BreadcrumbList+Article+FAQPage schema, 11 FAQs, ≥2,800 words. Fixed stale /legal-consultation → /consultation CTA. |
| LN-02 | Rewrite title/meta on `/blogs/how-to-send-legal-notice-in-india` (CTR 0.1%) | Decision | Completed | executor | Title: "How to Send a Legal Notice in India (2026) — Step by Step \| vakiltech". Description updated with price token. FAQPage schema confirmed present. |
| LN-03 | Strengthen pricing signal on `/send-legal-notice` H1 for "legal notice charges" (484 imps) | Action | Completed | executor | Added "Starting ₹1,499" price badge chip above main content. Added ~300-word H2 "Legal Notice Charges in India" section. |

### 9.C Cluster 2 — Money Recovery

| ID | Task | Role | Status | Owner | Notes |
|---|---|---|---|---|---|
| MR-01 | Reconcile `/blogs/money-recovery-complete-guide-india` — confirm on main branch or recreate | Awareness | Completed | executor | Created fresh. 7 H2s, 8 FAQs, ≥2,200 words, Article+FAQPage+BreadcrumbList schema. Added to sitemap. |
| MR-02 | Reconcile `/blogs/when-to-send-money-recovery-legal-notice` | Awareness | Completed | executor | Created fresh. 5 H2s, 6 FAQs, ≥1,700 words, decision-tree content. Added to sitemap. |
| MR-03 | Reconcile `/blogs/money-recovery-legal-notice-cost-timeline` | Decision | Completed | executor | Created fresh. 5 H2s, 6 FAQs, ≥1,800 words, cost+timeline tables. Added to sitemap. |
| MR-04 | Reconcile `/blogs/what-happens-after-money-recovery-notice` | Decision | Completed | executor | Created fresh. 5 H2s, 6 FAQs, ≥2,100 words, 3-outcome post-notice breakdown. Added to sitemap. |
| MR-05 | Optimise meta description of `/send-legal-notice/legal-notice-for-money-recovery` to lift CTR from 1.1% | Action | Completed | executor | Description already updated: "Recover your money in 30 days. Send a legal notice for money recovery online — ₹1,499. Drafted by Supreme Court advocates, delivered by registered post, full tracking." Strong outcome + price + trust signals present. |
| MR-06 | Add "demand notice" H2 section to money-recovery format blog (1,900-vol gap) | Decision | Completed | executor | Added H2 "Demand Notice vs Legal Notice — When to Use Which" with comparison table to /blogs/money-recovery-legal-notice-format-sample/page.tsx. |

### 9.D Cluster 3 — Defamation / BNS 356 (🔥 highest impact)

| ID | Task | Role | Status | Owner | Notes |
|---|---|---|---|---|---|
| DF-01 | Reconcile `/blogs/section-356-bns-defamation-law-india` on main branch | Awareness | Completed | executor | Confirmed missing from all branches. Created fresh at `src/app/blogs/section-356-bns-defamation-law-india/page.tsx`. Added to sitemap. |
| DF-02 | Upgrade the blog into a comprehensive BNS 356 explainer (elements, punishment, cases, FAQ schema) | Awareness | Completed | executor | Full page created: 9 H2s, 12 FAQs, Article+FAQPage+BreadcrumbList schema, ≥2,200 words, canonical set, CTA box linking to Action page. Added to sitemap blogSlugs. **C-05 now unblocked.** |
| DF-03 | Refocus `/send-legal-notice/criminal-defamation-legal-notice` on "send a defamation notice" only | Action | Completed | executor | Done as C-05. Removed BNS 356 explainer and "5 Legal Ingredients" sections. Upstream link to blog added. Page is now conversion-focused. |
| DF-04 | Add "Related: How to send a defamation notice" CTA box at end of the BNS 356 blog | Internal linking | Completed | executor | CTA box to `/send-legal-notice/criminal-defamation-legal-notice` and related-reads block included in DF-02 page. |

### 9.E Cluster 4 — Divorce / Family

| ID | Task | Role | Status | Owner | Notes |
|---|---|---|---|---|---|
| DV-01 | Create `/guides/divorce-procedure-in-india` | Decision | Completed | executor | Full page created: 9 H2s, 12 FAQs, Article+FAQPage+HowTo+BreadcrumbList schema, ≥2,500 words, dual CTAs (/consultation + legal-notice-for-divorce). Added to sitemap. |
| DV-02 | Create `/guides/how-to-file-for-divorce-india` | Decision | Completed | executor | Full page created: 8 H2s, 10 FAQs, Article+FAQPage+BreadcrumbList schema, ≥2,000 words. Explicit anti-cannibalization link to DV-01 for court procedure. Added to sitemap. |
| DV-03 | Create `/guides/mutual-consent-divorce-india` | Decision | Completed | executor | Full page created: 9 H2s, 10 FAQs, Article+FAQPage+BreadcrumbList schema, ≥1,800 words. Covers Amardeep Singh waiver. Added to sitemap. |
| DV-04 | Create `/guides/divorce-in-india` (statistics/overview) | Awareness | Not Started | | Lower priority — defer to Phase 2C or later. |
| DV-05 | Update `/send-legal-notice/legal-notice-for-divorce` meta to target "divorce notice" (3,600 vol) | Action | Completed | executor | New title "Divorce Legal Notice — Send in 24 Hours \| vakiltech" + new meta desc with price+speed. Fixed stale hero CTAs (/send-a-legal-notice → /send-legal-notice, /legal-consultation → /consultation). Added upstream link to DV-01. |

### 9.F Cluster 5 — Consumer Rights

| ID | Task | Role | Status | Owner | Notes |
|---|---|---|---|---|---|
| CR-01 | Upgrade `/blogs/consumer-rights-protection-india` (target 49,500-vol head term) | Awareness | Completed | executor | Full rewrite: 8 H2s (6 statutory rights each in H3), CPA 2019 changes, three-tier forum table, e-commerce rights, down-funnel links. ≥2,800 words, Article+FAQPage+BreadcrumbList schema. |
| CR-02 | Create `/guides/how-to-file-consumer-complaint-india` | Decision | Completed | executor | Created fresh. 8 H2s, 8 FAQs, ≥2,200 words, Article+FAQPage+HowTo+BreadcrumbList schema. eDaakhil procedure, jurisdiction table, court fees table. Added to sitemap. |
| CR-03 | Upgrade `/send-legal-notice/consumer-complaint-legal-notice` meta for CTR | Action | Completed | executor | Updated title and meta description with stronger price+outcome signals. |
| CR-04 | Add "Send notice to a company" grid block on consumer-complaint hub linking to all 25 brand Action pages | Internal linking | Completed | executor | Added 25-company grid (amazon-india through unacademy) with Link components in consumer-complaint-legal-notice/page.tsx. |

### 9.G Cluster 6 — Property / Tenant

| ID | Task | Role | Status | Owner | Notes |
|---|---|---|---|---|---|
| PT-01 | Create `/guides/how-to-serve-eviction-notice-india` | Decision | Completed | executor | File confirmed at src/app/guides/how-to-serve-eviction-notice-india/page.tsx. Added to sitemap guideSlugs. |
| PT-02 | Verify `/blogs/property-disputes-india-complete-guide` links down to all Action children | Awareness | Completed | executor | Confirmed all 6 property action pages linked (lines 194–199 of page.tsx). |

### 9.H Cluster 7 — Cheque Bounce / Contract

| ID | Task | Role | Status | Owner | Notes |
|---|---|---|---|---|---|
| CB-01 | Create `/guides/cheque-bounce-legal-notice-india` (Section 138 NI Act + format + procedure) | Awareness+Decision | Completed | executor | Created. 8 H2s, 10 FAQs, ≥2,500 words, Article+FAQPage+HowTo+BreadcrumbList schema. 30-day deadline urgency. Added to sitemap. |
| CB-02 | Rewrite title + add FAQ schema on `/send-legal-notice/cheque-bounce-legal-notice` (CTR 0.9% → target 3%) | Action | Completed | executor | Title updated to "Cheque Bounce Legal Notice — Send in 24 Hours \| vakiltech". Description updated with Section 138 NI Act + 30-day urgency + price. FAQPage schema already present. |

### 9.I Cluster 9 — Lawyer Directory / Consultation

| ID | Task | Role | Status | Owner | Notes |
|---|---|---|---|---|---|
| LD-01 | Create `/find-a-lawyer` (Decision hub) | Decision | Completed | executor | Full page created at `src/app/find-a-lawyer/page.tsx`. 9 H2s, 9 FAQs, Article+FAQPage+BreadcrumbList schema, ≥1,800 words, CTA to /consultation + 10 city CTAs, related reads. Added to sitemap. |
| LD-02 | Deprioritise "vakil" keyword on homepage; redirect authority to `/find-a-lawyer` | Homepage | Completed | executor | Added "Find the Right Lawyer →" Link CTA in hero-section.tsx as secondary button linking to /find-a-lawyer. Added import Link from next/link. |
| LD-03 | Create `/blogs/what-is-vakalatnama-india` | Awareness | Completed | executor | File confirmed at src/app/blogs/what-is-vakalatnama-india/page.tsx. Added to sitemap blogSlugs. |
| LD-04 | Ensure all 50 `/consultation/[city]` pages have "advocate near me {city}" in H1 and FAQ | Action | Completed | executor | ConsultationCityLanding H1 updated to "Find a Lawyer Near You in {city}" + subtitle "Connect with top-rated advocates near you in {city} — ₹299". generateMetadata updated with "Lawyer Near Me in {cityName}" title pattern + city-specific keywords array. Already had getConsultationCityFaqs() FAQPage schema. |

### 9.J Cluster 10 — Agreement Drafting

| ID | Task | Role | Status | Owner | Notes |
|---|---|---|---|---|---|
| AG-01 | Create `/agreement-drafting/partnership-deed` | Action | Completed | executor | File confirmed at src/app/agreement-drafting/partnership-deed/page.tsx. Added to sitemap staticPages. |
| AG-02 | Create `/agreement-drafting/power-of-attorney` | Action | Completed | executor | File confirmed at src/app/agreement-drafting/power-of-attorney/page.tsx. Added to sitemap staticPages. |
| AG-03 | Create `/agreement-drafting/nda` | Action | Completed | executor | File confirmed at src/app/agreement-drafting/nda/page.tsx. Added to sitemap staticPages. |
| AG-04 | Expand `/agreement-drafting/rental-agreement` to target "rent agreement format" (12,100 vol) | Decision/Action | Completed | executor | Added H2 "Rent Agreement Format — What It Must Contain" with 10-clause numbered list. Added 5-question FAQSection with real answers. Added FAQPage JSON-LD schema. Fixed broken hrefs (/send-a-legal-notice → /consultation, /legal-consultation → /consultation). CTA buttons updated with pricing. |

### 9.K Site-wide

| ID | Task | Status | Owner | Notes |
|---|---|---|---|---|
| SW-01 | Add breadcrumb schema to every page | Completed | executor | `<Breadcrumb>` component auto-emits BreadcrumbList JSON-LD. Removed 74 duplicate manual BreadcrumbList script blocks across all service/blog/guide pages. |
| SW-02 | Implement FAQ schema on all Awareness/Decision pages | Completed | executor | Audit confirmed: all blog and guide pages have FAQPage JSON-LD or FAQSection. 0 pages missing schema. |
| SW-03 | Add structured internal-link blocks to every page (`/_seo/related-links` component) | Completed | executor | Built `src/components/shared/related-links.tsx` — accepts `upstream`, `downstream`, `siblings` props. Three visual zones (blue info box, primary CTA box, muted sibling box) with arrow icons. Ready to mount on all new pages. |
| SW-04 | Fix the structured-data markup errors flagged in `vakiltech.in_structured_data_that_contains_markup_errors_20260422.md` | Blocked | executor | Source file `vakiltech.in_structured_data_that_contains_markup_errors_20260422.md` not found in repo or seo-data/. Separately fixed the systemic duplicate BreadcrumbList issue (74 pages) as part of SW-01 — this addresses the most common class of markup errors. Unblock by adding the GSC structured data error export to seo-data/. |
| SW-05 | Sitemap: remove 301'd URLs after C-01..C-04 complete | Completed | executor | Audited sitemap.ts — zero 301'd URLs present. Sitemap is clean. |

---

## 10. What success looks like (targets for next GSC review — 90 days out)

| Metric | Current (last 90d) | Target | Driver |
|---|---:|---:|---|
| Aggregate CTR | 1.47% | **≥ 3.0%** | Title/meta rewrites on top 20 pages + FAQ schema + cannibalization fixes |
| Awareness-stage CTR | 0.41% | **≥ 2.5%** | BNS 356 blog upgrade + consumer rights upgrade + what-is-vakalatnama |
| Clicks | 1,653 | **≥ 4,500** | Defamation cluster alone ≈ +400/mo; divorce cluster ≈ +300/mo; find-a-lawyer ≈ +500/mo |
| Cannibalization cases (≥2 pages, ≥50 imp) | 213 | **≤ 100** | C-01..C-04 fixes |
| "legal notice" family CTR (pos 1-3 queries) | 17.8% avg | **≥ 22%** | Meta rewrites + FAQ schema |

---

## 11. Data & reference files

All raw data lives in the repo at `/Users/pritambanikk/VT/vt_march266/seo-data/` (see `seo-data/README.md` for full structure).

- `seo-data/gsc_data/queries.json` — 3,273 raw GSC queries
- `seo-data/gsc_data/pages.json` — 818 GSC pages
- `seo-data/gsc_data/query_page.json` — 4,792 query×page combos (cannibalization source)
- `seo-data/gsc_data/legal_queries.csv` — 2,627 legal-intent queries (filtered)
- `seo-data/semrush/gap_data.csv` — 120+ filtered SEMRUSH gap keywords
- `seo-data/semrush/gsc_clustered.csv` — GSC legal queries tagged with pillar + intent
- `seo-data/semrush/gap_clustered.csv` — SEMRUSH gap keywords tagged with pillar + intent
- `seo-data/scripts/*.py` — Python scripts used to regenerate any of the above

---

*Strategy generated from: GSC (last 90 days, `sc-domain:vakiltech.in`), SEMRUSH India database (`in`), and a full local crawl of `/Users/pritambanikk/VT/vt_march266`.*
