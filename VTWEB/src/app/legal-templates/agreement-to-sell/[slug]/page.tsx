import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { TrustSignalsSection } from "@/components/features/homepage/trust-signals";
import { FAQSection } from "@/components/shared/faq-section";
import { TemplatePurchaseCard } from "@/components/features/legal-templates/template-purchase-card";
import {
  AGREEMENT_TO_SELL_TEMPLATES,
  getAgreementToSellTemplate,
} from "@/data/legal-templates/agreement-to-sell-data";
import { BASE_URL } from "@/lib/seo";
import {
  CheckCircle2,
  AlertTriangle,
  FileText,
  ScrollText,
  ShieldCheck,
  Clock,
  Wallet,
  IndianRupee,
  Zap,
  ArrowRight,
} from "lucide-react";
import { CustomDraftingCTA } from "@/components/features/legal-templates/custom-drafting-cta";

// Pre-render every Agreement to Sell template at build time.
export function generateStaticParams() {
  return AGREEMENT_TO_SELL_TEMPLATES.map((t) => ({ slug: t.slug }));
}

// Dynamic metadata per template.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const template = getAgreementToSellTemplate(slug);
  if (!template) return {};

  const url = `${BASE_URL}/legal-templates/agreement-to-sell/${template.slug}`;
  return {
    title: template.metaTitle,
    description: template.metaDescription,
    keywords: [template.focusKeyword, ...template.secondaryKeywords],
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: template.metaTitle,
      description: template.metaDescription,
      siteName: "vakiltech",
    },
    twitter: {
      card: "summary_large_image",
      title: template.metaTitle,
      description: template.metaDescription,
    },
  };
}

export default async function AgreementToSellTemplatePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const template = getAgreementToSellTemplate(slug);
  if (!template) notFound();

  const url = `${BASE_URL}/legal-templates/agreement-to-sell/${template.slug}`;

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Legal Templates", href: "/legal-templates" },
    {
      label: "Agreement to Sell",
      href: "/legal-templates/agreement-to-sell",
    },
    { label: template.shortLabel, current: true },
  ];

  // Combine variant-specific FAQs with shared FAQs that apply to every
  // Agreement to Sell page.
  const sharedFaqs = [
    {
      question:
        "What is the difference between an Agreement to Sell and a Sale Deed?",
      answer:
        "An Agreement to Sell is a contract that records the parties' intention to transfer property in the future on agreed terms. The Sale Deed is the document that actually transfers ownership and is compulsorily registrable under Section 17 of the Registration Act, 1908. Per Section 54 of the Transfer of Property Act, 1882, an Agreement to Sell does not by itself create any interest in the property — only the registered Sale Deed does.",
    },
    {
      question:
        "Is an Agreement to Sell legally enforceable in India without registration?",
      answer:
        "Yes. An unregistered Agreement to Sell, if executed on appropriate stamp paper and signed by both parties along with witnesses, is admissible as evidence in a suit for specific performance under the Specific Relief Act, 1963. However, if possession of the property is being delivered along with the Agreement, registration becomes mandatory under state law (post Registration & Other Related Laws (Amendment) Act, 2001).",
    },
    {
      question: "What is earnest money, and what happens if either party defaults?",
      answer:
        "Earnest money is a token amount paid by the buyer to the seller as proof of the buyer's intention to purchase. If the buyer defaults on the agreed payment timeline, the seller is entitled to forfeit the earnest money under the standard 'time is the essence' clause. If the seller defaults on executing the Sale Deed, the buyer can sue for specific performance and recover the earnest money with damages.",
    },
    {
      question: "Can this template be used for properties in any Indian state?",
      answer:
        "Yes — the template is drafted in line with central laws (Transfer of Property Act, Registration Act, Indian Stamp Act, Specific Relief Act). Stamp duty, however, is a state subject and varies. The template carries blank fields where you fill in state-specific stamp duty values. We recommend confirming the exact stamp value with a local lawyer or sub-registrar before printing on stamp paper.",
    },
    {
      question: "Will I get notarisation and registration support?",
      answer:
        "This is a self-service downloadable template — you receive an editable .docx that you fill in and execute. If you'd like end-to-end support with stamp paper procurement, drafting, notarisation, and registration appointment booking, please contact our team — we offer this as a separate paid service.",
    },
  ];

  const allFaqs = [...template.faqs, ...sharedFaqs];

  // ---- Schema.org JSON-LD ----------------------------------------------------

  const digitalDocumentSchema = {
    "@context": "https://schema.org",
    "@type": "DigitalDocument",
    name: template.documentName,
    description: template.metaDescription,
    inLanguage: "en-IN",
    fileFormat: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    dateModified: template.lastReviewed,
    url,
    offers: {
      "@type": "Offer",
      price: "49",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url,
    },
    provider: {
      "@type": "Organization",
      name: "vakiltech",
      url: BASE_URL,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(digitalDocumentSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="min-h-screen bg-gradient-to-b from-background to-background/55">
        <div className="container mx-auto px-6 md:px-8 pb-8">
          {/* HERO */}
          <section className="relative pt-6 pb-12 md:pt-10 md:pb-16 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 overflow-hidden rounded-b-3xl md:rounded-b-[40px] -mx-6 md:-mx-8 px-6 md:px-8">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[800px] h-[800px] bg-gradient-to-r from-primary/20 to-transparent rounded-full blur-3xl opacity-20" />
            </div>

            <div className="relative max-w-6xl mx-auto flex flex-col gap-8">
              <div className="z-10 mt-2 mb-2">
                <Breadcrumb items={breadcrumbItems} />
              </div>

              <div className="space-y-6 max-w-3xl">
                <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                  <FileText className="h-4 w-4 mr-2" />
                  Editable Word Format · Instant Download
                </div>
                <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
                  {template.documentName} — Format & Free Sample (₹49)
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  {template.heroSubheading}
                </p>

                <div className="flex flex-wrap gap-4 pt-2 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4 text-green-600" />
                    Lawyer-drafted
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-4 w-4 text-green-600" />
                    Instant download
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <IndianRupee className="h-4 w-4 text-green-600" />
                    One-time ₹49 — no subscription
                  </span>
                </div>
              </div>

              {/* Primary purchase card */}
              <div className="max-w-4xl">
                <TemplatePurchaseCard
                  templateSlug={template.slug}
                  documentName={template.documentName}
                />
              </div>
            </div>
          </section>

          {/* DOCUMENT PREVIEW */}
          <div className="max-w-4xl mx-auto py-12">
            <section className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
              <div className="p-6 md:p-8 border-b border-border bg-muted/30">
                <div className="flex items-center gap-3 mb-2">
                  <ScrollText className="h-5 w-5 text-primary" />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Document Preview
                  </h2>
                </div>
                <p className="text-sm text-muted-foreground">
                  Full editable Word file is delivered after payment. This
                  preview shows the structure and language style.
                </p>
              </div>

              <div className="p-6 md:p-10 font-serif bg-white text-zinc-900 max-w-none">
                <h3 className="text-center text-lg md:text-xl font-bold tracking-wide mb-6 underline">
                  {template.preview.titleLine}
                </h3>

                <p className="mb-4 text-sm leading-relaxed text-zinc-700">
                  This Agreement to Sell is executed on this ____ day of
                  ____, 20__ at ____.
                </p>
                <p className="mb-2 text-sm font-semibold">BETWEEN</p>
                <p className="mb-4 text-sm leading-relaxed text-zinc-700">
                  Mr./Ms. ____, S/o / D/o ____, R/o ____, hereinafter referred
                  to as the &ldquo;SELLER&rdquo; of the FIRST PART;
                </p>
                <p className="mb-2 text-sm font-semibold">AND</p>
                <p className="mb-6 text-sm leading-relaxed text-zinc-700">
                  Mr./Ms. ____, S/o / D/o ____, R/o ____, hereinafter referred
                  to as the &ldquo;PURCHASER&rdquo; of the SECOND PART.
                </p>

                {template.preview.recitals.map((recital, i) => (
                  <p
                    key={i}
                    className="mb-4 text-sm leading-relaxed text-zinc-700"
                  >
                    {recital}
                  </p>
                ))}

                <p className="my-6 text-sm font-semibold tracking-wide">
                  NOW THIS AGREEMENT WITNESSETH AS UNDER:
                </p>

                {template.preview.clauseSnippets.map((c) => (
                  <div key={c.number} className="mb-5">
                    <p className="text-sm font-semibold mb-1">
                      {c.number}. {c.title}
                    </p>
                    <p className="text-sm leading-relaxed text-zinc-700">
                      {c.body}
                    </p>
                  </div>
                ))}

                <div className="mt-8 rounded-md border border-dashed border-zinc-300 bg-zinc-50 p-4 text-center text-sm text-zinc-500 italic">
                  …additional clauses and signature block continue in the full
                  editable Word file.
                </div>
              </div>

              <div className="p-6 md:p-8 border-t border-border bg-gradient-to-r from-primary/5 to-primary/10">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold text-foreground">
                      Like what you see? Get the full editable copy.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Delivered as .docx within minutes on WhatsApp.
                    </p>
                  </div>
                  <TemplatePurchaseCard
                    templateSlug={template.slug}
                    documentName={template.documentName}
                    compact
                  />
                </div>
              </div>

              {/* Key Highlights Section */}
              <div className="p-6 md:p-8 border-t border-border bg-muted/20">
                <h3 className="text-lg font-semibold text-foreground mb-6">
                  Key Highlights from This Document
                </h3>
                <div className="grid sm:grid-cols-3 gap-4">
                  {template.preview.clauseSnippets.map((c) => (
                    <div
                      key={c.number}
                      className="bg-white border border-border rounded-lg p-5 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2">
                          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                            {c.number}
                          </span>
                          <h4 className="font-semibold text-sm text-foreground leading-snug">
                            {c.title}
                          </h4>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mb-3 font-medium bg-muted/40 px-2 py-1 rounded w-fit">
                        page {c.pageNumber}
                      </p>
                      <p className="text-xs leading-relaxed text-muted-foreground line-clamp-3">
                        {c.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* CUSTOM DRAFTING CTA */}
          <div className="max-w-4xl mx-auto py-12">
            <CustomDraftingCTA />
          </div>

          <div className="max-w-4xl mx-auto py-12 space-y-8">
            {/* SCENARIO + WHO NEEDS THIS */}
            <section className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                When this {template.shortLabel} Agreement applies
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {template.scenario}
              </p>

              <h3 className="text-lg font-semibold text-foreground mb-3">
                Who needs this template
              </h3>
              <ul className="space-y-2 mb-6">
                {template.whoNeeds.map((item) => (
                  <li key={item} className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-lg font-semibold text-foreground mb-3">
                When you should use it
              </h3>
              <ul className="space-y-2">
                {template.whenToUse.map((item) => (
                  <li key={item} className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* RISKS OF GENERIC TEMPLATE */}
            <section className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Why a generic sale agreement is risky here
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The free formats floating around online are written for a
                generic sale of property. They miss the specifics that make a
                {" "}{template.shortLabel.toLowerCase()} transaction defensible
                in court. Specifically:
              </p>
              <ul className="space-y-3">
                {template.risksOfGenericFormat.map((item) => (
                  <li key={item} className="flex gap-3">
                    <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* CLAUSES INCLUDED */}
            <section className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Clauses included in the editable Word file
              </h2>
              <p className="text-muted-foreground mb-5">
                Every clause is pre-drafted. You only fill in the blanks
                (names, addresses, amounts, dates) — no legal writing needed.
              </p>
              <ol className="grid sm:grid-cols-2 gap-3">
                {template.clausesIncluded.map((clause, i) => (
                  <li
                    key={clause}
                    className="flex gap-3 rounded-lg border border-border bg-muted/30 px-4 py-3"
                  >
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                      {i + 1}
                    </span>
                    <span className="text-sm text-foreground">{clause}</span>
                  </li>
                ))}
              </ol>
            </section>

            {/* SHARED EDUCATION SECTION — agreement to sell vs sale deed */}
            <section className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Agreement to Sell vs Sale Deed — what&rsquo;s the difference?
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-border text-left">
                      <th className="py-3 pr-4 font-semibold text-foreground">
                        Aspect
                      </th>
                      <th className="py-3 pr-4 font-semibold text-foreground">
                        Agreement to Sell
                      </th>
                      <th className="py-3 font-semibold text-foreground">
                        Sale Deed
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    {[
                      [
                        "Effect on ownership",
                        "Future promise — does not transfer ownership",
                        "Actual transfer of ownership",
                      ],
                      [
                        "Governing law",
                        "Section 54, Transfer of Property Act, 1882",
                        "Section 54 + Registration Act, 1908",
                      ],
                      [
                        "Registration",
                        "Optional (mandatory if possession is delivered)",
                        "Compulsorily registrable",
                      ],
                      [
                        "Stamp duty",
                        "Nominal in most states",
                        "Full state-prescribed stamp duty + registration fees",
                      ],
                      [
                        "Remedy on breach",
                        "Specific performance / forfeiture of earnest money",
                        "Cancellation suit / refund + damages",
                      ],
                    ].map(([aspect, a, b]) => (
                      <tr key={aspect} className="border-b border-border/60">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          {aspect}
                        </td>
                        <td className="py-3 pr-4">{a}</td>
                        <td className="py-3">{b}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* STAMP DUTY & REGISTRATION GUIDANCE */}
            <section className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
                <Wallet className="h-7 w-7 text-primary" />
                Stamp duty & registration — what you need to know
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Stamp duty on an Agreement to Sell is a state subject and
                varies materially. The downloaded template carries blank
                fields and notes so you (or your local lawyer) can plug in
                the correct stamp value before printing.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-foreground">Without possession:</strong>{" "}
                    Most states charge a nominal stamp duty (₹100–₹500). Karnataka
                    and Maharashtra are exceptions where the duty can be
                    higher.
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-foreground">With possession:</strong>{" "}
                    Treated like a conveyance in many states — same stamp
                    duty as the eventual Sale Deed and compulsorily registrable.
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-foreground">TDS:</strong> If the
                    sale consideration exceeds ₹50 lakh, the buyer must
                    deduct 1% TDS under Section 194-IA at the time of paying
                    the seller.
                  </span>
                </li>
              </ul>
              <p className="text-xs text-muted-foreground italic mt-5">
                This information is general guidance, not legal advice for
                your specific transaction. Confirm state-specific values with
                a local advocate or sub-registrar.
              </p>
            </section>
          </div>
        </div>

        {/* FAQ SECTION (uses shared component which renders FAQ schema separately on its own page sections) */}
        <FAQSection
          faqs={allFaqs}
          title={`Frequently Asked Questions — ${template.shortLabel} Agreement to Sell`}
        />

        {/* FINAL CTA */}
        <section className="container mx-auto px-6 md:px-8 py-12">
          <div className="max-w-4xl mx-auto">
            <TemplatePurchaseCard
              templateSlug={template.slug}
              documentName={template.documentName}
            />
          </div>
        </section>

        {/* INTERNAL LINKS */}
        <section className="container mx-auto px-6 md:px-8 pb-12">
          <div className="max-w-4xl mx-auto bg-muted/40 border border-border rounded-xl p-6">
            <h2 className="text-lg font-semibold text-foreground mb-3">
              Related on vakiltech
            </h2>
            <ul className="grid sm:grid-cols-2 gap-2 text-sm">
              <li>
                <Link
                  href="/agreement-drafting"
                  className="text-primary hover:underline"
                >
                  Custom agreement drafting (lawyer-drafted from scratch)
                </Link>
              </li>
              <li>
                <Link
                  href="/3500-legal-drafts-templates-bundle"
                  className="text-primary hover:underline"
                >
                  3500+ Legal Drafts Bundle (₹499)
                </Link>
              </li>
              <li>
                <Link
                  href="/agreement-drafting/rental-agreement"
                  className="text-primary hover:underline"
                >
                  Rental Agreement drafting
                </Link>
              </li>
              <li>
                <Link
                  href="/agreement-drafting/power-of-attorney"
                  className="text-primary hover:underline"
                >
                  Power of Attorney drafting
                </Link>
              </li>
            </ul>
          </div>
        </section>

        <TrustSignalsSection />
      </main>
    </>
  );
}
