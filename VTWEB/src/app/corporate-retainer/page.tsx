import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { CorporateRetainerLanding } from "@/components/features/landing-pages/corporate-retainer-landing";
import { FAQSection } from "@/components/shared/faq-section";
import { corporateRetainerFAQs } from "@/data/faqs";
import { generateServiceMetadata } from "@/lib/seo";

export const metadata: Metadata = generateServiceMetadata('corporate-retainer');

export default function CorporateRetainerPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Corporate Retainer", current: true }
  ];

  return (
    <>
    {/* schema-migrated */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What's included in the corporate retainer service?","acceptedAnswer":{"@type":"Answer","text":"Our retainer service includes: Dedicated legal counsel, unlimited consultations, contract review and drafting, compliance monitoring, legal notice drafting, and priority support. We act as your in-house legal team."}},{"@type":"Question","name":"How much does the retainer service cost?","acceptedAnswer":{"@type":"Answer","text":"Retainer services start at ₹25,000/month for small businesses and scale based on your company size and legal needs. We offer flexible plans including quarterly and annual contracts with discounts."}},{"@type":"Question","name":"What types of businesses can benefit from retainer services?","acceptedAnswer":{"@type":"Answer","text":"Startups, growing companies, and established businesses can all benefit. We specialize in tech companies, manufacturing, retail, services, and other sectors that need ongoing legal support."}},{"@type":"Question","name":"How quickly can you respond to urgent legal matters?","acceptedAnswer":{"@type":"Answer","text":"We provide 24/7 emergency support for urgent matters. For critical issues, we respond within 2-4 hours. Regular matters are addressed within 24 hours during business days."}},{"@type":"Question","name":"Do you handle litigation and court representation?","acceptedAnswer":{"@type":"Answer","text":"Yes, our retainer service includes litigation support, court representation, and dispute resolution. We have experienced litigators who can represent your company in various courts and tribunals."}},{"@type":"Question","name":"Can you help with regulatory compliance?","acceptedAnswer":{"@type":"Answer","text":"Absolutely. We provide comprehensive compliance services including GST compliance, labor law compliance, corporate governance, data protection, and industry-specific regulations."}}]}` }}
    />

    <main className="min-h-screen bg-gradient-to-b from-background to-background/55">
      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb items={breadcrumbItems} />
      </div>
      <CorporateRetainerLanding />
      <FAQSection 
        faqs={corporateRetainerFAQs}
        title="Corporate Retainer FAQs"
        subtitle="Common questions about our retainer services"
      />
    </main>
    </>
  );
} 