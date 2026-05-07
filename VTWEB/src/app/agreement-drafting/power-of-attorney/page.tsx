import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { TrustSignalsSection } from "@/components/features/homepage/trust-signals";
import { FAQSection } from "@/components/shared/faq-section";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Power of Attorney Drafting Online — ₹999 | vakiltech",
  description:
    "Get your power of attorney drafted and notarised online — ₹999. General, Special, or NRI PoA. Drafted by verified advocates, ready in 24 hours.",
  keywords: [
    "power of attorney",
    "poa",
    "power of attorney format",
    "what is power of attorney",
    "power of attorney india",
  ],
  alternates: {
    canonical: "https://vakiltech.in/agreement-drafting/power-of-attorney",
  },
};

export default function PowerOfAttorneyPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Agreement Drafting", href: "/agreement-drafting" },
    { label: "Power of Attorney", current: true },
  ];

  const faqs = [
    {
      question: "What is a Power of Attorney (PoA) in India?",
      answer:
        "A Power of Attorney (PoA) is a legal document that authorizes one person (the Agent or Attorney-in-Fact) to act on behalf of another person (the Principal) in specified legal, financial, or personal matters. The document is governed by the Powers of Attorney Act, 1882 in India. The authority granted can be broad (General PoA) or limited to specific acts (Special PoA). The PoA is valid only during the Principal's lifetime unless it is an enduring PoA.",
    },
    {
      question: "What is the difference between a General PoA and a Special PoA?",
      answer:
        "A General Power of Attorney (GPoA) grants broad authority to the agent to manage all of the Principal's affairs — including banking, property, legal proceedings, and business decisions. A Special Power of Attorney (SPoA) is limited to one specific transaction or act — for example, selling a specific property, registering a document, or appearing before a court in a specific case. For most NRI property transactions, a Special PoA is preferred because it limits the agent's scope of authority.",
    },
    {
      question: "What is an NRI Power of Attorney and how is it executed?",
      answer:
        "An NRI Power of Attorney is executed by an Indian citizen residing abroad who needs someone in India to manage their affairs — typically property transactions, banking, or legal proceedings. The NRI signs the PoA before an Indian Consulate or Notary in the country of residence. The document is then either apostilled (for countries under the Hague Convention) or attested by the Indian Embassy. After arriving in India, it must be notarised or registered with the Sub-Registrar's office before use.",
    },
    {
      question: "Does a Power of Attorney need to be registered in India?",
      answer:
        "Registration is mandatory only for PoAs that relate to the sale, mortgage, or transfer of immovable property. For such transactions, the PoA must be registered with the Sub-Registrar's office and stamped as per state stamp duty laws. For other purposes — banking, appearing in court, managing a business — a notarised (but unregistered) PoA is generally sufficient, though some banks may insist on a registered PoA.",
    },
    {
      question: "Can a Power of Attorney be revoked?",
      answer:
        "Yes — the Principal can revoke a PoA at any time as long as they are mentally competent, by executing a Deed of Revocation. If the PoA was registered, the revocation must also be registered. The agent and any third parties who may have relied on the PoA must be formally notified of the revocation. A PoA is also automatically revoked upon the death, insanity, or insolvency of the Principal.",
    },
    {
      question: "How long does it take to get a Power of Attorney drafted by vakiltech?",
      answer:
        "vakiltech delivers a fully drafted, advocate-reviewed Power of Attorney within 24 hours of receiving your details. The document is customized for your specific purpose — property, banking, legal proceedings, or NRI use. Revisions are included in the ₹999 fee. vakiltech can also guide you on the notarisation and registration process applicable to your state.",
    },
  ];

  return (
    <>
      {/* schema-migrated */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"LegalService","name":"Power of Attorney Drafting Service","description":"Online Power of Attorney drafting and notarisation in India at ₹999. General, Special, or NRI PoA. Drafted by verified advocates, ready in 24 hours.","provider":{"@type":"Organization","name":"vakiltech","url":"https://vakiltech.in"},"telephone":"+91-70476 83995","image":"https://vakiltech.in/vt-logo.png","address":{"@type":"PostalAddress","addressCountry":"IN"},"priceRange":"₹999","offers":{"@type":"Offer","price":"999","priceCurrency":"INR"},"areaServed":{"@type":"Country","name":"India"}}`,
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is a Power of Attorney (PoA) in India?","acceptedAnswer":{"@type":"Answer","text":"A Power of Attorney (PoA) is a legal document that authorizes one person (the Agent) to act on behalf of another person (the Principal) in specified legal, financial, or personal matters. Governed by the Powers of Attorney Act, 1882. Authority can be broad (General PoA) or limited (Special PoA)."}},{"@type":"Question","name":"What is the difference between a General PoA and a Special PoA?","acceptedAnswer":{"@type":"Answer","text":"A General PoA grants broad authority to manage all affairs — banking, property, legal proceedings. A Special PoA is limited to one specific transaction — like selling a specific property or registering a document."}},{"@type":"Question","name":"What is an NRI Power of Attorney and how is it executed?","acceptedAnswer":{"@type":"Answer","text":"An NRI PoA is executed by an Indian citizen abroad for managing Indian affairs. The NRI signs before an Indian Consulate or Notary, the document is apostilled or attested, and then notarised or registered in India before use."}},{"@type":"Question","name":"Does a Power of Attorney need to be registered in India?","acceptedAnswer":{"@type":"Answer","text":"Registration is mandatory only for PoAs relating to sale, mortgage, or transfer of immovable property. For other purposes, a notarised PoA is generally sufficient."}},{"@type":"Question","name":"Can a Power of Attorney be revoked?","acceptedAnswer":{"@type":"Answer","text":"Yes — the Principal can revoke a PoA at any time by executing a Deed of Revocation. If registered, the revocation must also be registered. A PoA is automatically revoked on the Principal's death, insanity, or insolvency."}},{"@type":"Question","name":"How long does it take to get a Power of Attorney drafted by vakiltech?","acceptedAnswer":{"@type":"Answer","text":"vakiltech delivers a fully drafted, advocate-reviewed Power of Attorney within 24 hours of receiving your details. ₹999 includes revisions."}}]}`,
        }}
      />

      <main className="min-h-screen bg-gradient-to-b from-background to-background/55">
        <div className="container mx-auto px-6 md:px-8 pb-8">
          <section className="relative pt-6 pb-16 md:pt-10 md:pb-24 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 overflow-hidden rounded-b-3xl md:rounded-b-[40px] -mx-6 md:-mx-8 px-6 md:px-8">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[800px] h-[800px] bg-gradient-to-r from-primary/20 to-transparent rounded-full blur-3xl opacity-20" />
            </div>

            <div className="relative max-w-6xl mx-auto flex flex-col gap-8 md:gap-12">
              <div className="z-10 mt-2 mb-2">
                <Breadcrumb items={breadcrumbItems} />
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="space-y-6">
                    <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                      Professional Legal Service
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                      Power of Attorney — Draft &amp; Notarise Online
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                      Get your power of attorney drafted and notarised online — ₹999. General, Special, or NRI PoA. Drafted by verified advocates, ready in 24 hours.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/agreement-drafting/power-of-attorney#get-started"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center"
                    >
                      Draft Power of Attorney — ₹999
                    </Link>
                    <Link
                      href="/legal-consultation"
                      className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 text-center"
                    >
                      Get Free Consultation
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="max-w-4xl mx-auto py-12 space-y-6">

            {/* What is a PoA */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">What is a Power of Attorney?</h2>
              <p className="text-muted-foreground mb-4">
                A Power of Attorney (PoA) is a legal instrument through which one person (the Principal) authorizes another person (the Agent or Attorney) to act on their behalf in legal, financial, or personal matters. The document is governed by the Powers of Attorney Act, 1882 and the Registration Act, 1908 in India.
              </p>
              <p className="text-muted-foreground mb-4">
                A PoA is essential when the Principal cannot be physically present to handle their affairs — whether due to illness, travel, old age, or residence abroad. The Agent acts with the same legal authority as the Principal within the scope defined by the document.
              </p>
              <p className="text-muted-foreground">
                The PoA must be executed with the full, free, and informed consent of the Principal. It can be revoked at any time, and it ceases to be valid upon the death or mental incapacity of the Principal (unless specifically structured as an enduring PoA).
              </p>
            </div>

            {/* Types of PoA */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Types of Power of Attorney in India</h2>
              <div className="space-y-4">
                {[
                  {
                    type: "General Power of Attorney (GPoA)",
                    desc: "Grants the Agent broad authority to manage all of the Principal's affairs — banking, property, investments, signing contracts, and appearing in legal proceedings. Typically used when the Principal is incapacitated or will be away for an extended period. Requires careful drafting to prevent abuse.",
                  },
                  {
                    type: "Special Power of Attorney (SPoA)",
                    desc: "Grants authority limited to a specific act or transaction — for example, selling a particular flat, registering a sale deed, withdrawing funds from a specific account, or appearing in a specific court matter. The Agent's authority automatically ends once the specified act is completed. Most advisable for property transactions.",
                  },
                  {
                    type: "NRI Power of Attorney",
                    desc: "Executed by an Indian citizen residing abroad to authorize a person in India to manage their property, banking, or legal affairs. Must be signed before an Indian Consulate or a local Notary, then apostilled (for Hague Convention countries) or Embassy-attested. Notarised or registered in India before use.",
                  },
                  {
                    type: "Durable (Enduring) Power of Attorney",
                    desc: "A specialized PoA that remains valid even if the Principal becomes mentally incapacitated. Not explicitly covered under the Powers of Attorney Act 1882 but is recognized through judicial interpretation. Useful for elderly Principals planning ahead for potential incapacity.",
                  },
                ].map((item) => (
                  <div key={item.type} className="border border-border rounded-lg p-4">
                    <p className="font-semibold text-foreground text-sm mb-1">{item.type}</p>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* When You Need a PoA */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">When Do You Need a Power of Attorney?</h2>
              <ul className="list-disc pl-5 space-y-3 text-muted-foreground">
                <li>You are an <strong className="text-foreground">NRI</strong> who needs someone to manage your Indian property, bank accounts, or legal cases from abroad.</li>
                <li>You need to <strong className="text-foreground">sell, purchase, or mortgage property</strong> but cannot be present personally for registration.</li>
                <li>You are <strong className="text-foreground">elderly or unwell</strong> and need a trusted person to manage your finances and legal affairs.</li>
                <li>You want someone to <strong className="text-foreground">represent you in court</strong> or appear before a government authority on your behalf.</li>
                <li>You are <strong className="text-foreground">travelling abroad</strong> for an extended period and need a family member to handle urgent matters.</li>
                <li>You need to <strong className="text-foreground">manage a business</strong> through an authorized representative when you are unavailable.</li>
              </ul>
            </div>

            {/* What a PoA Covers */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">What a vakiltech PoA Covers</h2>
              <p className="text-muted-foreground mb-4">
                vakiltech's advocate-drafted Power of Attorney will include the following, tailored to your specific purpose:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Full details of the Principal and the Agent (name, address, identification)</li>
                <li>Precise scope of authority — what the Agent can and cannot do</li>
                <li>Specific property, accounts, or proceedings covered (for Special PoA)</li>
                <li>Duration of the authority — time-bound or open-ended</li>
                <li>Sub-delegation clause — whether the Agent can further delegate authority</li>
                <li>Revocation conditions and procedure</li>
                <li>Execution clause with witness requirements</li>
                <li>Notarisation/registration instructions specific to your state</li>
              </ul>
            </div>

            {/* CTA */}
            <div id="get-started" className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-8">
              <h2 className="text-xl font-bold text-foreground mb-2">Get Your Power of Attorney Drafted Today</h2>
              <p className="text-muted-foreground mb-4">
                vakiltech's verified advocates draft your PoA — General, Special, or NRI — within 24 hours. ₹999 includes unlimited revisions and guidance on notarisation and registration applicable to your state.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/agreement-drafting/power-of-attorney#get-started"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Draft Power of Attorney — ₹999
                </Link>
                <Link
                  href="/legal-consultation"
                  className="inline-flex items-center justify-center gap-2 border border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary/5 transition-colors"
                >
                  Talk to a Lawyer First
                </Link>
              </div>
            </div>

          </div>
        </div>

        <TrustSignalsSection />

        <FAQSection faqs={faqs} title="Power of Attorney — Frequently Asked Questions" />
      </main>
    </>
  );
}
