import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { TrustSignalsSection } from "@/components/features/homepage/trust-signals";
import { FAQSection } from "@/components/shared/faq-section";
import Link from 'next/link';
import ClientFormTrigger from "@/app/send-legal-notice/legal-notice-for-money-recovery/client-form-trigger";

export const metadata: Metadata = {
  title: "Builder Delayed Possession? | Send RERA Notice | ₹499",
  description: "Property delayed or defective? Get a RERA-compliant notice sent to your builder today. Pay ₹499 to start + 2-hr callback. Approve before paying ₹1000.",
  keywords: ["legal notice to builder","builder delay legal notice","rera notice"],
  alternates: {
    canonical: "https://vakiltech.in/send-legal-notice/legal-notice-to-builder",
  },
};

export default function GeneratedServicePage() {
const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Builder Delayed Possession?", current: true },
  ];

  const faqs: any[] = [
  {
    "question": "When should I send a legal notice to builder?",
    "answer": "Send a notice when: possession is delayed beyond agreed date + grace period (if any), builder is not responding to complaints, property has major defects or quality issues, builder violates buyer agreement terms, you want refund due to delay, or builder has deviated from approved plans. Notice is required before approaching RERA or consumer forum."
  },
  {
    "question": "What is RERA and how does it protect property buyers?",
    "answer": "RERA (Real Estate Regulation Act) 2016 is a central law protecting property buyers from builder exploitation. Key protections: builders must register projects, deposit 70% of funds in escrow, complete within registered timeline, pay interest on delays, refund with interest if project fails, fix defects within defect liability period, and face penalties for violations. RERA authorities provide fast adjudication (60-90 days) compared to courts."
  },
  {
    "question": "What compensation can I claim for possession delay?",
    "answer": "You can claim: (1) Refund of all amounts paid with interest at prescribed rate (typically SBI MCLR + 2%), (2) OR Possession with compensation for delay period at same interest rate, (3) Additional compensation for mental harassment and loss, (4) Litigation costs. Many buyers claim rent equivalent for the delay period as alternative accommodation cost."
  },
  {
    "question": "Can I send notice for defective or poor quality property?",
    "answer": "Yes, if property has: structural defects, seepage/leakage issues, quality different from promised specifications, deviation from approved plans, amenities not provided as promised, or defects within defect liability period (5 years under RERA). Notice should detail all defects with photographs and demand rectification within timeline or compensation."
  },
  {
    "question": "Should I claim refund or wait for possession?",
    "answer": "Consider: how much delay has occurred (3+ years suggests claiming refund), builder's financial health (distressed builders may never complete), whether you still want the property, and market conditions. If project is clearly delayed beyond reasonable time or builder is in financial trouble, claiming refund with interest is often better than waiting indefinitely. You can revise your claim later."
  },
  {
    "question": "Should I approach RERA or file a court case?",
    "answer": "Prefer RERA authority first because: it's much faster (60-90 days vs 2-5 years), no court fee (small nominal fee only), buyer-friendly forum with specialized expertise, and builder non-compliance attracts strict penalties. Court cases are for very large claims or if RERA doesn't have jurisdiction. Consumer forum is alternative for deficiency in service."
  },
  {
    "question": "What if builder is bankrupt or project is stalled?",
    "answer": "If builder is under IBC (bankruptcy code), you become a financial creditor and can: file claim in NCLT proceedings, vote on resolution plan, and recover from available assets (priority after secured creditors). RERA claims can still be filed. However, recovery may be partial. For stalled projects, check if state has taken over or if buyer association can complete using available funds."
  },
  {
    "question": "What is grace period for possession delay?",
    "answer": "Grace period is the buffer time beyond committed possession date during which builder is not liable for delay. Typically 3-6 months as per buyer-builder agreement. Delay is calculated only after grace period ends. Example: Possession date June 2023, grace period 6 months, delay starts from January 2024 onward. Check your agreement for specific grace period clause."
  },
  {
    "question": "How much does a legal notice to builder cost?",
    "answer": "vakiltech offers builder notice services for ₹1,499, including detailed review of buyer-builder agreement and RERA provisions, calculation of delay period and interest, professional drafting citing RERA and consumer law, demand for refund/compensation/possession, unlimited revisions, registered post delivery to builder's registered address, and guidance on filing RERA complaint or consumer case if needed."
  }
];

  return (
    <>
    {/* schema-migrated */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"Organization","name":"vakiltech","legalName":"vakiltech Legal Services","url":"https://vakiltech.in","logo":"https://vakiltech.in/logo.png","foundingDate":"2023","description":"India's leading online legal services platform providing affordable legal notices, consultations, and agreement drafting services through experienced Licensed Advocates.","address":{"@type":"PostalAddress","addressCountry":"IN"},"contactPoint":[{"@type":"ContactPoint","telephone":"+91-70476 83995","contactType":"Customer Service","availableLanguage":["English","Hindi"],"areaServed":"IN"}],"sameAs":[],"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"500","bestRating":"5","worstRating":"1"},"makesOffer":[{"@type":"Offer","itemOffered":{"@type":"Service","name":"Legal Notice Services","description":"Professional legal notice drafting and sending"},"price":"1499","priceCurrency":"INR"},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Legal Consultation","description":"Expert legal consultation from Licensed Advocates"},"price":"299","priceCurrency":"INR"},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Agreement Drafting","description":"Professional legal agreement drafting services"},"price":"999","priceCurrency":"INR"}]}` }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"When should I send a legal notice to builder?","acceptedAnswer":{"@type":"Answer","text":"Send a notice when: possession is delayed beyond agreed date + grace period (if any), builder is not responding to complaints, property has major defects or quality issues, builder violates buyer agreement terms, you want refund due to delay, or builder has deviated from approved plans. Notice is required before approaching RERA or consumer forum."}},{"@type":"Question","name":"What is RERA and how does it protect property buyers?","acceptedAnswer":{"@type":"Answer","text":"RERA (Real Estate Regulation Act) 2016 is a central law protecting property buyers from builder exploitation. Key protections: builders must register projects, deposit 70% of funds in escrow, complete within registered timeline, pay interest on delays, refund with interest if project fails, fix defects within defect liability period, and face penalties for violations. RERA authorities provide fast adjudication (60-90 days) compared to courts."}},{"@type":"Question","name":"What compensation can I claim for possession delay?","acceptedAnswer":{"@type":"Answer","text":"You can claim: (1) Refund of all amounts paid with interest at prescribed rate (typically SBI MCLR + 2%), (2) OR Possession with compensation for delay period at same interest rate, (3) Additional compensation for mental harassment and loss, (4) Litigation costs. Many buyers claim rent equivalent for the delay period as alternative accommodation cost."}},{"@type":"Question","name":"Can I send notice for defective or poor quality property?","acceptedAnswer":{"@type":"Answer","text":"Yes, if property has: structural defects, seepage/leakage issues, quality different from promised specifications, deviation from approved plans, amenities not provided as promised, or defects within defect liability period (5 years under RERA). Notice should detail all defects with photographs and demand rectification within timeline or compensation."}},{"@type":"Question","name":"Should I claim refund or wait for possession?","acceptedAnswer":{"@type":"Answer","text":"Consider: how much delay has occurred (3+ years suggests claiming refund), builder's financial health (distressed builders may never complete), whether you still want the property, and market conditions. If project is clearly delayed beyond reasonable time or builder is in financial trouble, claiming refund with interest is often better than waiting indefinitely. You can revise your claim later."}},{"@type":"Question","name":"Should I approach RERA or file a court case?","acceptedAnswer":{"@type":"Answer","text":"Prefer RERA authority first because: it's much faster (60-90 days vs 2-5 years), no court fee (small nominal fee only), buyer-friendly forum with specialized expertise, and builder non-compliance attracts strict penalties. Court cases are for very large claims or if RERA doesn't have jurisdiction. Consumer forum is alternative for deficiency in service."}},{"@type":"Question","name":"What if builder is bankrupt or project is stalled?","acceptedAnswer":{"@type":"Answer","text":"If builder is under IBC (bankruptcy code), you become a financial creditor and can: file claim in NCLT proceedings, vote on resolution plan, and recover from available assets (priority after secured creditors). RERA claims can still be filed. However, recovery may be partial. For stalled projects, check if state has taken over or if buyer association can complete using available funds."}},{"@type":"Question","name":"What is grace period for possession delay?","acceptedAnswer":{"@type":"Answer","text":"Grace period is the buffer time beyond committed possession date during which builder is not liable for delay. Typically 3-6 months as per buyer-builder agreement. Delay is calculated only after grace period ends. Example: Possession date June 2023, grace period 6 months, delay starts from January 2024 onward. Check your agreement for specific grace period clause."}},{"@type":"Question","name":"How much does a legal notice to builder cost?","acceptedAnswer":{"@type":"Answer","text":"vakiltech offers builder notice services for ₹1,499, including detailed review of buyer-builder agreement and RERA provisions, calculation of delay period and interest, professional drafting citing RERA and consumer law, demand for refund/compensation/possession, unlimited revisions, registered post delivery to builder's registered address, and guidance on filing RERA complaint or consumer case if needed."}}]}` }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"LegalService","telephone":"+91-70476 83995","image":"https://vakiltech.in/vt-logo.png","address":{"@type":"PostalAddress","addressCountry":"IN"},"priceRange":"\u20b91,499+","name":"vakiltech - Legal Notice to Builder","description":"Property delayed or defective? Get a RERA-compliant notice sent to your builder today. Pay ₹499 to start + 2-hr callback. Approve before paying ₹1000.","url":"https://vakiltech.in/send-legal-notice/legal-notice-to-builder","areaServed":{"@type":"Country","name":"India"},"provider":{"@type":"Organization","name":"vakiltech","url":"https://vakiltech.in","logo":"https://vakiltech.in/logo.png","contactPoint":{"@type":"ContactPoint","telephone":"+91-70476 83995","contactType":"Customer Service","availableLanguage":["English","Hindi"]}},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"500"},"offers":{"@type":"Offer","price":"1499","priceCurrency":"INR","availability":"https://schema.org/InStock"}}` }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"WebPage","name":"Builder Delayed Possession? | Send RERA Notice | ₹499","description":"Property delayed or defective? Get a RERA-compliant notice sent to your builder today. Pay ₹499 to start + 2-hr callback. Approve before paying ₹1000.","url":"https://vakiltech.in/send-legal-notice/legal-notice-to-builder","speakable":{"@type":"SpeakableSpecification","cssSelector":["h1","h2",".prose"]},"mainEntity":{"@type":"Service","name":"Legal Notice to Builder","description":"If your builder has delayed possession, delivered a defective property, or violated the buyer-builder agreement, you have strong rights under RERA (Real Estate Regulation Act) 2016. A legal notice to builder is the first step to claim compensation, refund, or enforce your rights as a property buyer.","provider":{"@type":"Organization","name":"vakiltech"}}}` }}
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
                    Builder Delayed Possession?
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Property delayed or defective? Get a RERA-compliant notice sent to your builder today. Pay ₹499 to start + 2-hr callback. Approve before paying ₹1000.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/send-a-legal-notice"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Start Process
                  </Link>
                  <Link
                    href="/legal-consultation"
                    className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 text-center"
                  >
                    Get Free Consultation
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 p-8 flex items-center justify-center">
                  <img
                    src="/legal-notice/lawyer-customer-desk.svg"
                    alt="Legal notice drafted by vakiltech advocates"
                    className="w-full h-full object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto py-12 space-y-6">
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Before You Spend ₹1,499 — Check If Your Case Is Worth It</h2>
<p className="text-muted-foreground mb-4">Many legal notices fail due to weak facts or missing proof. Our lawyer-logic tool helps you avoid wasting money.</p>
<p className="text-muted-foreground mb-4">"Example result for a money recovery dispute with written proof"</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Recovered ₹25 Lakhs + Compensation fromDelayed Project</h2>
<p className="text-muted-foreground mb-4">Amit's flat possession was delayed by 3 years. After sending a RERA-based legal notice through vakiltech, he filed a RERA complaint. The builder was ordered to pay ₹25 lakhs refund plus ₹8 lakhs compensation for the delay.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Strong RERA Protection</li>
</ul>
<p className="text-muted-foreground mb-4">RERA provides statutory remedies for buyers against builder defaults.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Fast RERA Adjudication</li>
</ul>
<p className="text-muted-foreground mb-4">RERA authorities decide cases within 60-90 days, much faster than courts.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Refund + Interest + Compensation</li>
</ul>
<p className="text-muted-foreground mb-4">Can claim full refund with interest at prescribed rate plus compensation for delay.</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">How We Work</h2>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>You Tell Us</li>
</ul>
<p className="text-muted-foreground mb-4">Answer simple questions. Upload documents. Done in 5 mins.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>We Draft</li>
</ul>
<p className="text-muted-foreground mb-4">Expert lawyers draft your notice. You review and approve.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>We Send</li>
</ul>
<p className="text-muted-foreground mb-4">Sent via Speed Post with tracking ID.</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Roadmap: What Happens After Sending the Notice?</h2>
<p className="text-muted-foreground mb-4">Clear next steps based on how the other party responds</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Mediation</li>
</ul>
<p className="text-muted-foreground mb-4">Most property disputes are best settled out of court to save decades of time. Draft a Settlement Agreement.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Authority</li>
</ul>
<p className="text-muted-foreground mb-4">If it's a builder issue, file a complaint with RERA (Real Estate Regulatory Authority).</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>File Case</li>
</ul>
<p className="text-muted-foreground mb-4">File a formal complaint with RERA or Consumer Forum for compensation and refund.</p>
<p className="text-muted-foreground mb-4">File a written complaint to the Municipal Corporation if there is illegal construction.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Need Expert Guidance?</li>
</ul>
<p className="text-muted-foreground mb-4">Not sure if this is the right notice for your situation? Talk to a lawyer for personalized advice before proceeding.</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">RERA &amp;Property Buyer Rights</h2>
<p className="text-muted-foreground mb-4">Property buyer rights are protected under Real Estate (Regulation and Development) Act 2016, Consumer Protection Act 2019, and buyer-builder agreements.</p>
<p className="text-muted-foreground mb-4">EXPERT INSIGHT</p>
<p className="text-muted-foreground mb-4">RERA has revolutionized property buyer protection. 85% of RERA complaints result in favorable orders for buyers within 6 months.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>⚖️Property Buyer Rights Under RERA</li>
</ul>
<p className="text-muted-foreground mb-4">Draft Notice Now</p>
<p className="text-muted-foreground mb-4">Expert drafting in 48 hours</p>
<p className="text-muted-foreground mb-4">Talk to a Lawyer</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Why vakiltech!</h2>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Expert Drafted</li>
</ul>
<p className="text-muted-foreground mb-4">Valid in all Indian courts.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Zero Court Visits</li>
</ul>
<p className="text-muted-foreground mb-4">100% digital process.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Ready in 24 Hrs</li>
</ul>
<p className="text-muted-foreground mb-4">Fastest turnaround.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Save 80% Cost</li>
</ul>
<p className="text-muted-foreground mb-4">Transparent ₹1,499 pricing.</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Why Choose vakiltech?</h2>
<p className="text-muted-foreground mb-4">We combine the expertise of top lawyers with the convenience of technology.</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">See a Real Legal Notice to Builder Format</h2>
<p className="text-muted-foreground mb-4">Preview a professionally drafted legal notice to builder.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Sample Legal Notice — Legal Notice to Builder</li>
<li>Legally valid format used by 10,000+ lawyers.</li>
</ul>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Get Your Legal Notice to Builder Drafted</h2>
<p className="text-muted-foreground mb-4">Fill out the form below to get started</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Simple, Transparent Pricing</h2>
<p className="text-muted-foreground mb-4">No hidden charges, pay only for what you need</p>
<p className="text-muted-foreground mb-4">Unlimited Revisions</p>
<p className="text-muted-foreground mb-4">24/7 Support</p>
<p className="text-muted-foreground mb-4">Legal Consultation</p>
<p className="text-muted-foreground mb-4">Free consultation</p>
<p className="text-muted-foreground mb-4">Legal notice drafted</p>
<p className="text-muted-foreground mb-4">After your approval</p>
<p className="text-muted-foreground mb-4">We send the notice</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Other Builder &amp; Consumer Legal Notices</h2>
<p className="text-muted-foreground mb-4">Need a different type of legal notice? We have specialized options.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Property Possession</li>
</ul>
<p className="text-muted-foreground mb-4">Demand possession of property from builder.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Consumer Complaint</li>
</ul>
<p className="text-muted-foreground mb-4">File consumer complaint for defective products or services.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Money Recovery</li>
</ul>
<p className="text-muted-foreground mb-4">Recover unpaid dues, loans, or business payments legally.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Cheque Bounce</li>
</ul>
<p className="text-muted-foreground mb-4">Legal action under Section 138 for dishonoured cheques.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Outstanding Payment</li>
</ul>
<p className="text-muted-foreground mb-4">Recover unpaid invoices and business dues.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Unpaid Salary</li>
</ul>
<p className="text-muted-foreground mb-4">Claim unpaid wages and employment dues.</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Real People. Real Results.</h2>
<p className="text-muted-foreground mb-4">My landlord refused to return my ₹45,000 security deposit for months. After sending the legal notice through vakiltech, he returned the full amount within 10 days. The draft was very strong.Rohan MalhotraSoftware Engineer, Bangalore</p>
<p className="text-muted-foreground mb-4">A builder in Noida was delaying possession by 2 years. I sent a legal notice for refund with interest. They finally called me for a settlement meeting. Highly recommended for property issues.Suresh GuptaGovernment Employee, Delhi</p>
<p className="text-muted-foreground mb-4">I was not getting my salary dues from my previous employer. The legal notice drafted by vakiltech showed I was serious. They cleared my dues to avoid court trouble. Thank you!Anjali DesaiMarketing Executive, Mumbai</p>
<p className="text-muted-foreground mb-4">Standard legal notice for cheque bounce. The process was simple, and the lawyer added all necessary sections under the NI Act. Very professional service.Vikramjit SinghBusiness Owner, Ludhiana</p>
<p className="text-muted-foreground mb-4">Bought a defective fridge and the company wasn't replacing it. Sent a consumer notice. They replaced it immediately after receiving the notice. Fast and effective.Meera NairHomemaker, Kochi</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
<p className="text-muted-foreground mb-4">Everything you need to know about legal notice to builder</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>When should I send a legal notice to builder?</li>
<li>What is RERA and how does it protect property buyers?</li>
<li>What compensation can I claim for possession delay?</li>
<li>Can I send notice for defective or poor quality property?</li>
<li>Should I claim refund or wait for possession?</li>
<li>Should I approach RERA or file a court case?</li>
<li>What if builder is bankrupt or project is stalled?</li>
<li>What is grace period for possession delay?</li>
<li>How much does a legal notice to builder cost?</li>
</ul>
</div>

        </div>
      </div>

      <TrustSignalsSection />

      {faqs.length > 0 && (
         <FAQSection faqs={faqs} title="Frequently Asked Questions" />
      )}
    </main>
    </>
  );
}
