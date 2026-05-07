import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { DocumentDraftingLanding } from "@/components/features/landing-pages/document-drafting-landing";
import { FAQSection } from "@/components/shared/faq-section";
import { documentDraftingFAQs } from "@/data/faqs";
import { generateServiceMetadata } from "@/lib/seo";

export const metadata: Metadata = generateServiceMetadata('document-drafting');

export default function DocumentDraftingPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Document Drafting", current: true }
  ];

  return (
    <>
    {/* schema-migrated */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What types of documents can you draft?","acceptedAnswer":{"@type":"Answer","text":"We draft all types of legal documents including contracts, agreements, policies, notices, legal opinions, compliance documents, employment contracts, partnership agreements, and more."}},{"@type":"Question","name":"How long does document drafting take?","acceptedAnswer":{"@type":"Answer","text":"Standard documents are delivered within 3-5 business days. Urgent documents can be completed within 24-48 hours for an additional fee. Complex documents may take 7-10 days."}},{"@type":"Question","name":"Do you provide document review services?","acceptedAnswer":{"@type":"Answer","text":"Yes, we offer document review services where we analyze existing documents, identify potential issues, suggest improvements, and ensure legal compliance. This is often more cost-effective than drafting from scratch."}},{"@type":"Question","name":"Can you customize documents for my specific needs?","acceptedAnswer":{"@type":"Answer","text":"Absolutely. We don't use templates. Each document is customized based on your specific requirements, industry, and legal situation. We'll discuss your needs in detail before drafting."}},{"@type":"Question","name":"Do you provide ongoing support after document delivery?","acceptedAnswer":{"@type":"Answer","text":"Yes, we provide 30 days of support after document delivery. This includes revisions, clarifications, and assistance with implementation. Extended support is available for retainer clients."}},{"@type":"Question","name":"Are the documents legally enforceable?","acceptedAnswer":{"@type":"Answer","text":"Yes, all our documents are drafted by qualified lawyers and are legally enforceable in Indian courts. We ensure compliance with relevant laws and include necessary legal safeguards."}}]}` }}
    />

    <main className="min-h-screen bg-gradient-to-b from-background to-background/55">
      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb items={breadcrumbItems} />
      </div>
      <DocumentDraftingLanding />
      <FAQSection 
        faqs={documentDraftingFAQs}
        title="Document Drafting FAQs"
        subtitle="Common questions about our document drafting services"
      />
    </main>
    </>
  );
} 