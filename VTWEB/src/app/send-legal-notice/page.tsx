import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { LegalNoticeLanding } from "@/components/features/landing-pages/legal-notice-landing";
import { FAQSection } from "@/components/shared/faq-section";
import { legalNoticeFAQs } from "@/data/faqs";
import { generateServiceMetadata } from "@/lib/seo";
import { TrustSignalsSection } from "@/components/features/homepage/trust-signals";
import Link from "next/link";
import { legalNoticeTopics } from "@/data/legal-notice-topics";

export const metadata: Metadata = generateServiceMetadata(
  "send-legal-notice"
);

export default function LegalNoticePage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Legal Notice", current: true },
  ];

  return (
    <>
    {/* schema-migrated */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is a legal notice and when do I need one?","acceptedAnswer":{"@type":"Answer","text":"A legal notice is a formal communication sent before taking legal action. You need one when: someone owes you money, there's a contract breach, property disputes, employment issues, or any legal grievance that requires formal communication."}},{"@type":"Question","name":"How much does a legal notice cost?","acceptedAnswer":{"@type":"Answer","text":"Legal notices typically cost ₹1,499–5,999 depending on complexity, but we charge a fixed price of ₹1,499 with full transparency"}},{"@type":"Question","name":"How long does it take to draft and send a legal notice?","acceptedAnswer":{"@type":"Answer","text":"We typically draft and send legal notices within 2-3 business days. Urgent notices can be completed within 24 hours for an additional fee. We also handle the delivery and tracking. Contanct our helpdes for priority support"}},{"@type":"Question","name":"What happens after sending a legal notice?","acceptedAnswer":{"@type":"Answer","text":"The recipient must reply within 15–30 days. They can settle, deny, or ignore the notice. If they don’t resolve the issue, you can proceed with legal action—Vakiltech will assist you if need be."}},{"@type":"Question","name":"Can you help if I receive a legal notice?","acceptedAnswer":{"@type":"Answer","text":"Yes, we provide legal notice response services. We'll analyze the notice, advise you on your legal position, draft an appropriate response, and represent you if the matter escalates to court."}},{"@type":"Question","name":"Do you guarantee results from legal notices?","acceptedAnswer":{"@type":"Answer","text":"While we can't guarantee specific outcomes, our legal notices are professionally drafted and have a high success rate in resolving disputes amicably. We use proven legal strategies to maximize effectiveness."}}]}` }}
    />

    <main
      className="min-h-screen"
      style={{
        background:
          "radial-gradient(ellipse 100% 40% at 50% 0%, rgba(244,100,80,0.11) 0%, transparent 55%)",
      }}
    >
      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-4 pt-8">
        <Breadcrumb items={breadcrumbItems} />
      </div>
      <LegalNoticeLanding />
      <TrustSignalsSection />
      <section className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Legal Notice Charges in India</h2>
          <p className="text-muted-foreground mb-4">
            One of the first questions people ask when considering a legal notice is: how much will it cost? The answer depends on several factors — the type of dispute, the complexity of the facts, the lawyer&apos;s seniority, and the city you are in. Understanding what drives the cost helps you make an informed decision.
          </p>
          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">What Determines Legal Notice Charges?</h3>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-4">
            <li><strong>Type of dispute:</strong> A straightforward cheque bounce notice under Section 138 NI Act has a well-settled format. A complex property dispute or employment matter requires more research and drafting time — this pushes the cost up.</li>
            <li><strong>Applicable law:</strong> Notices that require citations from multiple statutes (e.g., Consumer Protection Act + IPC + State Rent Control Act) take longer to draft correctly.</li>
            <li><strong>Lawyer&apos;s seniority and location:</strong> A senior advocate in a metro city charges significantly more than a junior advocate in a tier-2 city for the identical notice.</li>
            <li><strong>Urgency:</strong> If you need the notice within 24 hours, most lawyers charge a premium. vakiltech includes 24-hour turnaround in the standard flat fee.</li>
            <li><strong>Delivery mode:</strong> Speed Post, Registered Post with AD, and courier all have different rates. The postage is typically a separate add-on in traditional engagements; at vakiltech it is included in the ₹1,499 flat fee.</li>
          </ul>
          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Typical Advocate Charges for a Legal Notice in India</h3>
          <p className="text-muted-foreground mb-4">
            In the traditional offline market, drafting fees for a legal notice typically range from <strong>₹3,000 to ₹10,000</strong> — and can go higher for senior advocates or complex matters. This fee covers only the drafting; dispatch charges (Registered Post, courier) are billed separately. If you need the advocate to follow up or represent you in subsequent proceedings, those fees are additional and generally billed on an hourly or per-appearance basis.
          </p>
          <p className="text-muted-foreground mb-4">
            In Mumbai and Delhi, a reputed advocate may charge ₹8,000–₹15,000 for a single notice. In smaller cities, the range is ₹2,000–₹5,000 for comparable work. Many people avoid seeking legal help for smaller disputes — unpaid salaries of ₹30,000, security deposits of ₹20,000 — because the traditional fee structure makes it economically irrational.
          </p>
          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">vakiltech Legal Notice — ₹1,499 Flat</h3>
          <p className="text-muted-foreground mb-4">
            vakiltech charges a flat <strong>₹1,499 for a complete legal notice service</strong> — regardless of the city, type of dispute (within standard notice categories), or number of revisions needed. The ₹1,499 includes:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-4">
            <li>Drafting by an advocate enrolled with a State Bar Council — not a template or AI-generated text</li>
            <li>Unlimited revisions until you are satisfied with the draft</li>
            <li>Speed Post dispatch with tracking ID (evidentiary proof of service)</li>
            <li>PDF copy of the final signed notice for your records</li>
            <li>WhatsApp and email support during the waiting period</li>
          </ul>
          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Why Legal Notice Charges Differ by Case Type</h3>
          <p className="text-muted-foreground mb-4">
            Different notice types carry different risk profiles and legal complexity. A cheque bounce notice under Section 138 follows a rigid statutory format — the facts are simple (cheque number, amount, return date) and the law is settled. A property encroachment notice may require citations from state-specific legislation, revenue records, and local municipal bye-laws, demanding considerably more advocate time. A defamation notice requires careful drafting to avoid counter-claims. This is why traditional advocates price case-specifically, while vakiltech&apos;s flat fee model works by standardising the most common notice types — covering cheque bounce, money recovery, property disputes, employment, consumer, and matrimonial matters at the same ₹1,499 price point.
          </p>
          <p className="text-muted-foreground">
            If your matter falls outside standard categories or requires an unusually complex factual narrative, our team will advise you upfront. There are no surprise charges after you start.
          </p>
        </div>
      </section>
      <FAQSection
        faqs={legalNoticeFAQs}
        title="Legal Notice FAQs"
        subtitle="Common questions about our legal notice services"
      />
      <section className="container mx-auto px-4 pb-12">
        <h2 className="text-xl font-semibold mb-4">Popular Topics</h2>
        <div className="flex flex-wrap gap-3">
          {legalNoticeTopics.slice(0, 24).map((t) => {
            const topicHref = t.slug ? `/send-legal-notice/${t.slug}` : `/send-legal-notice`;
            return (
              <Link
                key={t.id}
                href={topicHref}
                className="text-sm text-primary underline underline-offset-4"
              >
                {t.title}
              </Link>
            );
          })}
        </div>
      </section>
    </main>
    </>
  );
}
