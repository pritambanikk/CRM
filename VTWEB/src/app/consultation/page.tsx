import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { ConsultationLanding } from "@/components/features/landing-pages/consultation-landing";
import { FAQSection } from "@/components/shared/faq-section";
import { consultationFAQs } from "@/data/faqs";
import { generateServiceMetadata } from "@/lib/seo";
import Link from "next/link";
import { indianCities } from "@/data/indian-cities";
import { slugify } from "@/lib/slug";

export const metadata: Metadata = generateServiceMetadata("consultation");

export default function ConsultationPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Legal Consultation", current: true },
  ];

  return (
    <>
    {/* schema-migrated */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Who are the lawyers on your platform?","acceptedAnswer":{"@type":"Answer","text":"All lawyers are bar-council verified advocates with at least 3 years of active practice. They are screened by our team for expertise, communication, and professionalism before being onboarded."}},{"@type":"Question","name":"What happens after I pay ₹299?","acceptedAnswer":{"@type":"Answer","text":"You'll describe your issue in a short form. We'll match you to the right advocate based on your issue type. The lawyer will call you within 1 hour to discuss your matter in detail."}},{"@type":"Question","name":"Is there a time limit on the call?","acceptedAnswer":{"@type":"Answer","text":"No. Unlike other services that cap calls at 10–15 minutes, we let you speak until your queries are fully resolved. The ₹299 covers the full consultation, not a timed slot."}},{"@type":"Question","name":"What if I'm not satisfied with the lawyer assigned?","acceptedAnswer":{"@type":"Answer","text":"You can request a reassignment free of charge. We want you to feel confident in the advice you receive — a good lawyer-client match matters."}},{"@type":"Question","name":"Is my information kept confidential?","acceptedAnswer":{"@type":"Answer","text":"Absolutely. Everything shared during the consultation is protected by attorney-client privilege and our strict privacy policy. Your information is never shared with third parties."}}]}` }}
    />

    <main
      className="min-h-screen relative"
      style={{
        background:
          "radial-gradient(ellipse 100% 40% at 50% 0%, rgba(244,100,80,0.11) 0%, transparent 55%)",
      }}
    >
      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb items={breadcrumbItems} />
      </div>
      <ConsultationLanding />
      <section className="container mx-auto px-4 pb-12">
        <h2 className="text-xl font-semibold mb-4">Popular in cities</h2>
        <div className="flex flex-wrap gap-3">
          {indianCities.slice(0, 24).map((c) => (
            <Link
              key={c.city}
              href={`/consultation/${slugify(c.city)}`}
              className="text-sm text-primary underline underline-offset-4"
            >
              Consult a lawyer in {c.city}
            </Link>
          ))}
        </div>
      </section>
      <FAQSection
        faqs={consultationFAQs}
        title="Legal Consultation FAQs"
        subtitle="Common questions about our consultation services"
      />
    </main>
    </>
  );
}
