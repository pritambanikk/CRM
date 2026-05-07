/**
 * Central guide registry — single source of truth.
 *
 * To add a new guide:
 *   1. Add an entry to GUIDES below (with the correct category).
 *   2. That's it — the /guides page and sitemap.ts both read from this file.
 *
 * Slug rules:
 *   - Most guides live at /guides/<slug>
 *   - Exceptions (e.g. /find-a-lawyer) set path explicitly and set sitemap: false
 *     so sitemap.ts doesn't double-add them.
 */

export interface GuideEntry {
  slug: string;
  /** Override if the guide doesn't live at /guides/<slug> */
  path?: string;
  title: string;
  description: string;
  category: GuideCategory;
  readTime: string;
  /** Set false for guides whose URLs are already in sitemap staticPages */
  sitemap?: boolean;
}

export type GuideCategory =
  | "Divorce & Family Law"
  | "Consumer Rights"
  | "Cheque Bounce & NI Act"
  | "Property & Tenancy"
  | "Money Recovery"
  | "Finding a Lawyer"
  | "Legal Notices";

export const GUIDE_CATEGORIES: GuideCategory[] = [
  "Finding a Lawyer",
  "Legal Notices",
  "Money Recovery",
  "Cheque Bounce & NI Act",
  "Divorce & Family Law",
  "Consumer Rights",
  "Property & Tenancy",
];

export const GUIDES: GuideEntry[] = [
  // ── Finding a Lawyer ────────────────────────────────────────────────────────
  {
    slug: "find-a-lawyer",
    path: "/find-a-lawyer",
    title: "How to Find the Right Lawyer in India (2026 Guide)",
    description:
      "How to evaluate and hire the right advocate for your case — by practice area, city, fees, and red flags to avoid.",
    category: "Finding a Lawyer",
    readTime: "10 min read",
    sitemap: false, // already in sitemap staticPages
  },

  // ── Legal Notices ────────────────────────────────────────────────────────────
  // (Awareness blogs live under /blogs — this section is for procedural guides)

  // ── Money Recovery ───────────────────────────────────────────────────────────
  // (Money recovery cluster lives under /blogs — add Decision guides here when created)

  // ── Cheque Bounce & NI Act ───────────────────────────────────────────────────
  {
    slug: "cheque-bounce-legal-notice-india",
    title: "Cheque Bounce Legal Notice — Complete Guide (Section 138 NI Act)",
    description:
      "The 30-day deadline, mandatory notice format, court procedure, and how to file a Section 138 complaint if payment is not made.",
    category: "Cheque Bounce & NI Act",
    readTime: "12 min read",
  },

  // ── Divorce & Family Law ─────────────────────────────────────────────────────
  {
    slug: "divorce-procedure-in-india",
    title: "Divorce Procedure in India — Step-by-Step Guide (2026)",
    description:
      "Complete court procedure for contested and mutual consent divorce — grounds, filing steps, court timeline, and what to expect at each stage.",
    category: "Divorce & Family Law",
    readTime: "14 min read",
  },
  {
    slug: "how-to-file-for-divorce-india",
    title: "How to File for Divorce in India — Documents & Process",
    description:
      "Documents required, jurisdiction rules, petition drafting, and the step-by-step filing process for divorce in Indian family courts.",
    category: "Divorce & Family Law",
    readTime: "10 min read",
  },
  {
    slug: "mutual-consent-divorce-india",
    title: "Mutual Consent Divorce in India — Process & 6-Month Waiver",
    description:
      "How mutual consent divorce works under Section 13B HMA, the 6-month cooling-off period, and how the Supreme Court's Amardeep Singh ruling lets courts waive it.",
    category: "Divorce & Family Law",
    readTime: "9 min read",
  },

  // ── Consumer Rights ──────────────────────────────────────────────────────────
  {
    slug: "how-to-file-consumer-complaint-india",
    title: "How to File a Consumer Complaint in India (2026) — eDaakhil & Courts",
    description:
      "Step-by-step process to file a consumer complaint online via eDaakhil or physically at District / State / National Consumer Commission.",
    category: "Consumer Rights",
    readTime: "11 min read",
  },

  // ── Property & Tenancy ───────────────────────────────────────────────────────
  {
    slug: "how-to-serve-eviction-notice-india",
    title: "How to Serve an Eviction Notice in India — Legal Process & Format",
    description:
      "When and how landlords can legally evict a tenant — grounds for eviction, notice format, delivery method, and what happens if the tenant refuses to vacate.",
    category: "Property & Tenancy",
    readTime: "10 min read",
  },
];

/** All guide slugs for sitemap.ts — excludes entries with sitemap: false */
export const guideSlugsForSitemap: string[] = GUIDES.filter(
  (g) => g.sitemap !== false
).map((g) => g.slug);

/** Guides grouped by category, in display order */
export function getGuidesByCategory(): Record<GuideCategory, GuideEntry[]> {
  const result = {} as Record<GuideCategory, GuideEntry[]>;
  for (const cat of GUIDE_CATEGORIES) {
    result[cat] = GUIDES.filter((g) => g.category === cat);
  }
  return result;
}

/** Resolve the public URL path for a guide */
export function guidePath(guide: GuideEntry): string {
  return guide.path ?? `/guides/${guide.slug}`;
}
