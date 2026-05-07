import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { TrustSignalsSection } from "@/components/features/homepage/trust-signals";
import { FAQSection } from "@/components/shared/faq-section";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NDA Drafting India — Non-Disclosure Agreement Online | vakiltech",
  description:
    "Get a watertight NDA drafted by experienced business advocates — ₹999. Mutual or one-way. Covers trade secrets, IP, confidentiality obligations. Ready in 24 hours.",
  keywords: [
    "NDA drafting india",
    "non-disclosure agreement format",
    "NDA agreement india",
    "confidentiality agreement india",
  ],
  alternates: {
    canonical: "https://vakiltech.in/agreement-drafting/nda",
  },
};

export default function NDAPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Agreement Drafting", href: "/agreement-drafting" },
    { label: "NDA", current: true },
  ];

  const faqs = [
    {
      question: "What is an NDA and is it legally enforceable in India?",
      answer:
        "A Non-Disclosure Agreement (NDA) — also called a Confidentiality Agreement — is a legally binding contract in which one or more parties agree to keep specified information confidential and not disclose it to third parties. In India, NDAs are governed by the Indian Contract Act, 1872 and are fully enforceable provided they satisfy the requirements of a valid contract: offer, acceptance, consideration, and legality. Courts in India have upheld NDA clauses in IP and employment disputes, awarding injunctions and damages for breach.",
    },
    {
      question: "What is the difference between a mutual NDA and a one-way NDA?",
      answer:
        "A one-way (unilateral) NDA is used when only one party is disclosing confidential information — for example, when a startup shares its business plan with a potential investor. Only the recipient is bound by confidentiality obligations. A mutual (bilateral) NDA is used when both parties will share confidential information with each other — for example, in a joint venture discussion, a technology partnership, or a merger negotiation. Both parties are equally bound. vakiltech drafts both types.",
    },
    {
      question: "What information can and cannot be protected by an NDA?",
      answer:
        "An NDA can protect trade secrets, business plans, client lists, proprietary technology, source code, financial projections, pricing strategies, and any information marked 'confidential' by the disclosing party. It cannot protect information that is already in the public domain, information the recipient already knew before disclosure, information received from a third party without restriction, or information developed independently by the recipient without reference to the confidential information. These are called 'exclusions' and must be clearly stated in the deed.",
    },
    {
      question: "What happens if someone violates an NDA in India?",
      answer:
        "A breach of an NDA in India entitles the aggrieved party to: (1) An injunction from a civil court to stop further disclosure; (2) Damages for actual losses suffered due to the breach; (3) Liquidated damages if the NDA has a pre-agreed penalty clause; and (4) Account of profits — the breaching party may have to return any financial benefit earned from misusing the confidential information. Criminal remedies may also be available under the IT Act if the breach involves unauthorized access to electronic data.",
    },
    {
      question: "How long should an NDA last?",
      answer:
        "NDA duration depends on the nature of the confidential information. For trade secrets (formulas, source code, client data), a perpetual NDA — with no expiry — is appropriate. For business negotiations, a 2–3 year NDA after the discussion ends is standard. For employment NDAs, the obligation typically continues for 1–2 years post-employment. vakiltech's advocates will advise on the appropriate term for your specific situation.",
    },
    {
      question: "Do I need an NDA before sharing my business idea with an investor?",
      answer:
        "It is advisable to have an NDA before sharing sensitive business details — especially proprietary technology, trade secrets, or financial models — with any potential investor, partner, or contractor. However, most early-stage investors (VCs and angels) are reluctant to sign NDAs before an initial meeting, as they see hundreds of pitches. A practical approach is to share only high-level information initially and introduce the NDA before sharing detailed proprietary data, source code, or client lists. vakiltech can draft a tailored NDA for each stage of your conversation.",
    },
  ];

  return (
    <>
      {/* schema-migrated */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"LegalService","name":"NDA Drafting Service India","description":"Get a watertight NDA drafted by experienced business advocates in India at ₹999. Mutual or one-way. Covers trade secrets, IP, confidentiality obligations. Ready in 24 hours.","provider":{"@type":"Organization","name":"vakiltech","url":"https://vakiltech.in"},"telephone":"+91-70476 83995","image":"https://vakiltech.in/vt-logo.png","address":{"@type":"PostalAddress","addressCountry":"IN"},"priceRange":"₹999","offers":{"@type":"Offer","price":"999","priceCurrency":"INR"},"areaServed":{"@type":"Country","name":"India"}}`,
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is an NDA and is it legally enforceable in India?","acceptedAnswer":{"@type":"Answer","text":"A Non-Disclosure Agreement (NDA) is a legally binding contract governed by the Indian Contract Act, 1872. Courts in India have upheld NDA clauses in IP and employment disputes, awarding injunctions and damages for breach."}},{"@type":"Question","name":"What is the difference between a mutual NDA and a one-way NDA?","acceptedAnswer":{"@type":"Answer","text":"A one-way NDA is used when only one party discloses confidential information. A mutual NDA is used when both parties share information with each other. vakiltech drafts both types."}},{"@type":"Question","name":"What information can and cannot be protected by an NDA?","acceptedAnswer":{"@type":"Answer","text":"An NDA can protect trade secrets, business plans, client lists, proprietary technology, and source code. It cannot protect information already in the public domain, or information the recipient already knew or developed independently."}},{"@type":"Question","name":"What happens if someone violates an NDA in India?","acceptedAnswer":{"@type":"Answer","text":"A breach entitles the aggrieved party to an injunction, damages, liquidated damages (if pre-agreed), and account of profits. Criminal remedies may apply under the IT Act for unauthorized data access."}},{"@type":"Question","name":"How long should an NDA last?","acceptedAnswer":{"@type":"Answer","text":"For trade secrets, a perpetual NDA is appropriate. For business negotiations, 2–3 years post-discussion is standard. For employment NDAs, 1–2 years post-employment is typical."}},{"@type":"Question","name":"Do I need an NDA before sharing my business idea with an investor?","acceptedAnswer":{"@type":"Answer","text":"It is advisable for sensitive data. Most early-stage investors are reluctant to sign NDAs before initial meetings. A practical approach: share high-level information first, introduce the NDA before sharing detailed proprietary data or source code."}}]}`,
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
                      NDA (Non-Disclosure Agreement) — Draft Online in India
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                      Get a watertight NDA drafted by experienced business advocates — ₹999. Mutual or one-way. Covers trade secrets, IP, confidentiality obligations. Ready in 24 hours.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/agreement-drafting/nda#get-started"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center"
                    >
                      Draft NDA — ₹999
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

            {/* What is an NDA */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">What is an NDA (Non-Disclosure Agreement)?</h2>
              <p className="text-muted-foreground mb-4">
                A Non-Disclosure Agreement (NDA) — also called a Confidentiality Agreement or Secrecy Agreement — is a legally binding contract that prevents one or more parties from sharing confidential information with unauthorized third parties. It is one of the most fundamental commercial legal documents in business.
              </p>
              <p className="text-muted-foreground mb-4">
                In India, NDAs are governed by the Indian Contract Act, 1872. They are enforceable through civil courts and, in some cases, under the Information Technology Act, 2000. A well-drafted NDA gives you the legal standing to seek injunctions and damages if your confidential information is misused.
              </p>
              <p className="text-muted-foreground">
                NDAs are used across virtually every industry — technology, manufacturing, healthcare, media, finance, and professional services — any time sensitive information needs to be shared with a limited audience for a specific purpose.
              </p>
            </div>

            {/* Mutual vs One-Way */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Mutual NDA vs One-Way NDA</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border border-border rounded-lg p-4">
                  <p className="font-semibold text-foreground mb-2">One-Way (Unilateral) NDA</p>
                  <p className="text-muted-foreground text-sm mb-3">Only one party discloses — only the recipient is bound by confidentiality.</p>
                  <p className="text-muted-foreground text-sm font-medium mb-1">Use when:</p>
                  <ul className="list-disc pl-4 space-y-1 text-muted-foreground text-sm">
                    <li>Sharing business plan with investors</li>
                    <li>Onboarding employees or contractors</li>
                    <li>Sharing proprietary tech with a vendor</li>
                    <li>Disclosing financial data to an auditor</li>
                  </ul>
                </div>
                <div className="border border-border rounded-lg p-4">
                  <p className="font-semibold text-foreground mb-2">Mutual (Bilateral) NDA</p>
                  <p className="text-muted-foreground text-sm mb-3">Both parties disclose — both are bound by equal confidentiality obligations.</p>
                  <p className="text-muted-foreground text-sm font-medium mb-1">Use when:</p>
                  <ul className="list-disc pl-4 space-y-1 text-muted-foreground text-sm">
                    <li>Exploring a joint venture or merger</li>
                    <li>Technology partnership discussions</li>
                    <li>Licensing negotiations</li>
                    <li>Distributor or franchise discussions</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Key Clauses */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Key Clauses in a Watertight NDA</h2>
              <div className="space-y-4">
                {[
                  {
                    clause: "Definition of Confidential Information",
                    desc: "The most critical clause — precisely defines what information is considered 'confidential'. A vague definition creates loopholes. vakiltech's advocates draft this with specific categories (technical data, business plans, client lists, financial data, source code) and a catch-all provision.",
                  },
                  {
                    clause: "Confidentiality Obligations",
                    desc: "Specifies what the receiving party must do: maintain confidentiality, use the information only for the stated purpose, restrict access to authorized personnel, and apply the same standard of care as for their own confidential information (at minimum).",
                  },
                  {
                    clause: "Exclusions from Confidentiality",
                    desc: "Defines what is NOT protected: information already in the public domain, information the recipient already knew, independently developed information, and information disclosed under legal compulsion (court order). These exclusions must be precisely worded to prevent abuse.",
                  },
                  {
                    clause: "Term and Duration",
                    desc: "Specifies when confidentiality obligations begin, how long they last, and what happens to confidential information after the agreement ends (return, destruction, or continued protection). For trade secrets, a perpetual obligation is advisable.",
                  },
                  {
                    clause: "Remedies for Breach",
                    desc: "States the consequences of breach — typically injunctive relief, actual damages, and pre-agreed liquidated damages. A strong liquidated damages clause removes the need to prove exact loss in court and acts as a powerful deterrent.",
                  },
                  {
                    clause: "Jurisdiction and Governing Law",
                    desc: "Specifies which court has jurisdiction and which law governs disputes. In India, this means selecting the appropriate city (e.g., Mumbai, Delhi, Bangalore) and confirming Indian law governs — particularly important in cross-border NDAs.",
                  },
                ].map((item) => (
                  <div key={item.clause} className="border border-border rounded-lg p-4">
                    <p className="font-semibold text-foreground text-sm mb-1">{item.clause}</p>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* When You Need an NDA */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">When Do You Need an NDA?</h2>
              <ul className="list-disc pl-5 space-y-3 text-muted-foreground">
                <li>Before sharing your <strong className="text-foreground">business plan, financial projections, or product roadmap</strong> with a potential investor, partner, or acquirer.</li>
                <li>When onboarding <strong className="text-foreground">employees, freelancers, or consultants</strong> who will have access to sensitive company data.</li>
                <li>Before entering <strong className="text-foreground">merger or acquisition discussions</strong> where financial and operational data will be exchanged.</li>
                <li>When licensing <strong className="text-foreground">technology, patents, or proprietary processes</strong> to another company.</li>
                <li>Before disclosing <strong className="text-foreground">client data, pricing structures, or sales strategies</strong> to a third-party service provider.</li>
                <li>When entering into a <strong className="text-foreground">distribution or franchise agreement</strong> where brand and operational information is shared.</li>
              </ul>
            </div>

            {/* CTA */}
            <div id="get-started" className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-8">
              <h2 className="text-xl font-bold text-foreground mb-2">Get Your NDA Drafted Today</h2>
              <p className="text-muted-foreground mb-4">
                Protect your business secrets before you share them. vakiltech's experienced business advocates draft a watertight NDA — mutual or one-way — within 24 hours. ₹999 includes unlimited revisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/agreement-drafting/nda#get-started"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Draft NDA — ₹999
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

        <FAQSection faqs={faqs} title="NDA — Frequently Asked Questions" />
      </main>
    </>
  );
}
