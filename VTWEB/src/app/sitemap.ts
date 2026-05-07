import { MetadataRoute } from "next";
import { pageDate } from "./sitemap-dates";
import { guideSlugsForSitemap } from "@/data/guides";
import { AGREEMENT_TO_SELL_TEMPLATES } from "@/data/legal-templates/agreement-to-sell-data";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://vakiltech.in";

// ─── City slugs for /consultation/[city] ──────────────────────────────────────
// Matches generateStaticParams in src/app/consultation/[city]/page.tsx
const consultationCities = [
  "mumbai", "delhi", "bangalore", "hyderabad", "chennai", "kolkata", "pune",
  "ahmedabad", "jaipur", "surat", "lucknow", "kanpur", "nagpur", "indore",
  "thane", "bhopal", "visakhapatnam", "pimpri-chinchwad", "patna", "vadodara",
  "ghaziabad", "ludhiana", "agra", "nashik", "faridabad", "meerut", "rajkot",
  "kalyan-dombivali", "vasai-virar", "varanasi", "srinagar", "aurangabad",
  "dhanbad", "amritsar", "allahabad", "ranchi", "howrah", "coimbatore",
  "jabalpur", "gwalior", "vijayawada", "jodhpur", "madurai", "raipur", "kota",
  "guwahati", "chandigarh", "solapur", "hubballi-dharwad", "bareilly",
];

// ─── All pages under /send-legal-notice/ ──────────────────────────────────────
const sendLegalNoticePages = [
  // SEO-targeted service pages
  "legal-notice-for-money-recovery",
  "legal-notice-for-outstanding-payment",
  "legal-notice-for-unpaid-salary",
  "legal-notice-for-rent-arrears",
  "legal-notice-for-property-possession",
  "legal-notice-for-cruelty-or-desertion",
  "legal-notice-for-divorce",
  "legal-notice-to-builder",
  "legal-notice-to-tenant",
  // Topic pages
  "cheque-bounce-legal-notice",
  "breach-of-contract-legal-notice",
  "consumer-complaint-legal-notice",
  "employee-misconduct-legal-notice",
  "workplace-harassment-legal-notice",
  "wrongful-termination-legal-notice",
  "criminal-defamation-legal-notice",
  "domestic-violence-legal-notice",
  "child-custody-legal-notice",
  "maintenance-legal-notice",
  "eviction-legal-notice",
  "property-partition-legal-notice",
  "bank-loan-settlement",
  "amenities-society-builder",
  // Company-specific pages
  "amazon-india", "flipkart", "myntra", "meesho", "snapdeal", "nykaa",
  "tata-cliq", "swiggy", "zomato", "blinkit", "zepto", "bigbasket",
  "dunzo", "rapido", "ola-cabs", "ola-electric", "uber-india", "makemytrip",
  "irctc", "paytm", "phonepe", "cred", "urban-company", "byjus", "unacademy",
  // Wave 1A — Telecom
  "jio", "airtel", "vi-vodafone-idea", "bsnl",
  // Wave 1B — Fintech & Lending
  "iifl-finance", "bajaj-finance", "kreditbee", "mpokket", "cashe", "navi",
  // Wave 1C — Travel & Hospitality
  "indigo", "air-india", "oyo", "easemytrip",
  // Wave 1D — Ed-tech
  "upgrad", "physics-wallah", "simplilearn",
  // Wave 1E — Real Estate Portals
  "nobroker", "housing-com",
];

// ─── Static city sub-pages (only ones that have actual page.tsx files) ─────────
const sendLegalNoticeWithCities: { topic: string; cities: string[] }[] = [
  {
    topic: "legal-notice-for-money-recovery",
    cities: ["mumbai", "delhi", "bangalore", "chennai", "hyderabad"],
  },
  {
    topic: "cheque-bounce-legal-notice",
    cities: ["mumbai", "delhi", "bangalore", "chennai", "hyderabad"],
  },
  {
    topic: "legal-notice-to-tenant",
    cities: ["mumbai", "delhi", "bangalore", "chennai", "hyderabad"],
  },
  {
    topic: "amenities-society-builder",
    cities: ["kolkata", "jaipur", "chennai"],
  },
];

// ─── Guide slugs — sourced from src/data/guides.ts (single source of truth) ───
// To add a new guide to the sitemap, add it to GUIDES in src/data/guides.ts.
const guideSlugs = guideSlugsForSitemap;

// ─── Blog slugs ────────────────────────────────────────────────────────────────
const blogSlugs = [
  "how-to-send-legal-notice-in-india",
  "what-is-a-legal-notice-in-india",
  "legal-notice-format-india",
  "legal-notice-fees-india",
  "legal-notice-time-limit-india",
  "legal-notice-by-email-whatsapp-india",
  "legal-notice-reply-format-india",
  "difference-legal-notice-fir-complaint",
  "what-happens-if-legal-notice-is-ignored",
  "money-recovery-legal-notice-format-sample",
  "consumer-rights-protection-india",
  "property-disputes-india-complete-guide",
  // Phase 2A additions
  "section-356-bns-defamation-law-india",      // DF-01/DF-02
  // Phase 2A — Lawyer Decision cluster
  "what-is-vakalatnama-india",                 // LD-03
  // Phase 2C — Money Recovery cluster
  "money-recovery-complete-guide-india",        // MR-01
  "when-to-send-money-recovery-legal-notice",   // MR-02
  "money-recovery-legal-notice-cost-timeline",  // MR-03
  "what-happens-after-money-recovery-notice",   // MR-04
];

// ─── Consultation pages share the parent /consultation date ───────────────────
// The [city] dynamic pages don't have individual git dates, so we use the
// parent page's last-modified date as a reasonable proxy.
const CONSULTATION_DATE = pageDate("/consultation");

export default function sitemap(): MetadataRoute.Sitemap {
  // ── 1. Core / static pages ───────────────────────────────────────────────────
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}`,                                  lastModified: pageDate("/"),                                  changeFrequency: "daily",   priority: 1.0 },
    { url: `${BASE_URL}/send-legal-notice`,                lastModified: pageDate("/send-legal-notice"),                 changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE_URL}/consultation`,                     lastModified: pageDate("/consultation"),                      changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE_URL}/document-drafting`,                lastModified: pageDate("/document-drafting"),                 changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE_URL}/corporate-retainer`,               lastModified: pageDate("/corporate-retainer"),                changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE_URL}/legal-notice-strength`,            lastModified: pageDate("/legal-notice-strength"),             changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/find-a-lawyer`,                   lastModified: pageDate("/find-a-lawyer"),                     changeFrequency: "monthly", priority: 0.8 }, // LD-01
    { url: `${BASE_URL}/agreement-drafting`,               lastModified: pageDate("/agreement-drafting"),                changeFrequency: "weekly",  priority: 0.8 },
    { url: `${BASE_URL}/agreement-drafting/employment-agreement`, lastModified: pageDate("/agreement-drafting/employment-agreement"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/agreement-drafting/rental-agreement`,     lastModified: pageDate("/agreement-drafting/rental-agreement"),     changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/agreement-drafting/partnership-deed`,     lastModified: pageDate("/agreement-drafting/partnership-deed"),     changeFrequency: "monthly", priority: 0.7 }, // AG-01
    { url: `${BASE_URL}/agreement-drafting/power-of-attorney`,    lastModified: pageDate("/agreement-drafting/power-of-attorney"),    changeFrequency: "monthly", priority: 0.7 }, // AG-02
    { url: `${BASE_URL}/agreement-drafting/nda`,                  lastModified: pageDate("/agreement-drafting/nda"),                  changeFrequency: "monthly", priority: 0.7 }, // AG-03
    { url: `${BASE_URL}/3500-legal-drafts-templates-bundle`, lastModified: pageDate("/3500-legal-drafts-templates-bundle"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/legal-templates`,                  lastModified: pageDate("/legal-templates"),                   changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/legal-templates/agreement-to-sell`, lastModified: pageDate("/legal-templates/agreement-to-sell"), changeFrequency: "weekly",  priority: 0.85 },
    { url: `${BASE_URL}/pricing`,                          lastModified: pageDate("/pricing"),                           changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/about`,                            lastModified: pageDate("/about"),                             changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/contact`,                          lastModified: pageDate("/contact"),                           changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/careers`,                          lastModified: pageDate("/careers"),                           changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/guides`,                           lastModified: pageDate("/guides"),                            changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/blogs`,                            lastModified: pageDate("/blogs"),                             changeFrequency: "weekly",  priority: 0.8 },
    { url: `${BASE_URL}/gst-registration`,                 lastModified: pageDate("/gst-registration"),                  changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/fssai-registration`,               lastModified: pageDate("/fssai-registration"),               changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/itr-filing`,                       lastModified: pageDate("/itr-filing"),                        changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/trade-license`,                    lastModified: pageDate("/trade-license"),                     changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/privacy-policy`,                   lastModified: pageDate("/privacy-policy"),                    changeFrequency: "yearly",  priority: 0.3 },
    { url: `${BASE_URL}/terms-and-conditions`,             lastModified: pageDate("/terms-and-conditions"),              changeFrequency: "yearly",  priority: 0.3 },
    { url: `${BASE_URL}/refund-policy`,                    lastModified: pageDate("/refund-policy"),                     changeFrequency: "yearly",  priority: 0.3 },
  ];

  // ── 2. Blog posts ─────────────────────────────────────────────────────────────
  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blogs/${slug}`,
    lastModified: pageDate(`/blogs/${slug}`),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // ── 2b. Guide pages ───────────────────────────────────────────────────────────
  // guideSlugsForSitemap already excludes entries with sitemap: false (e.g. /find-a-lawyer)
  const guidePages: MetadataRoute.Sitemap = guideSlugs.map((slug) => ({
      url: `${BASE_URL}/guides/${slug}`,
      lastModified: pageDate(`/guides/${slug}`),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    }));

  // ── 3. Send Legal Notice — topic landing pages ────────────────────────────────
  const legalNoticePages: MetadataRoute.Sitemap = sendLegalNoticePages.map((slug) => ({
    url: `${BASE_URL}/send-legal-notice/${slug}`,
    lastModified: pageDate(`/send-legal-notice/${slug}`),
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  // ── 4. Send Legal Notice — city sub-pages ─────────────────────────────────────
  const legalNoticeCityPages: MetadataRoute.Sitemap = sendLegalNoticeWithCities.flatMap(
    ({ topic, cities }) =>
      cities.map((city) => ({
        url: `${BASE_URL}/send-legal-notice/${topic}/${city}`,
        lastModified: pageDate(`/send-legal-notice/${topic}/${city}`),
        changeFrequency: "weekly" as const,
        priority: 0.8,
      }))
  );

  // ── 5. Consultation city pages ────────────────────────────────────────────────
  // Dynamic [city] pages don't have individual git dates — use parent date.
  const consultationPages: MetadataRoute.Sitemap = consultationCities.map((city) => ({
    url: `${BASE_URL}/consultation/${city}`,
    lastModified: CONSULTATION_DATE,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // ── 6. Agreement to Sell template pages ───────────────────────────────────────
  // 43 lawyer-drafted Agreement to Sell templates for different property types
  const agreementToSellPages: MetadataRoute.Sitemap = AGREEMENT_TO_SELL_TEMPLATES.map((template) => ({
    url: `${BASE_URL}/legal-templates/agreement-to-sell/${template.slug}`,
    lastModified: template.lastReviewed,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    ...staticPages,
    ...blogPages,
    ...guidePages,
    ...legalNoticePages,
    ...legalNoticeCityPages,
    ...consultationPages,
    ...agreementToSellPages,
  ];
}
