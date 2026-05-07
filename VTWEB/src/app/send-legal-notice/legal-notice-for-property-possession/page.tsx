import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { TrustSignalsSection } from "@/components/features/homepage/trust-signals";
import { FAQSection } from "@/components/shared/faq-section";
import Link from 'next/link';
import ClientFormTrigger from "@/app/send-legal-notice/legal-notice-for-money-recovery/client-form-trigger";

export const metadata: Metadata = {
  title: "Demand Property Possession | Legal Notice | ₹499",
  description: "Awaiting property handover? Get a lawyer-drafted possession demand notice sent today. Pay ₹499 to start + 2-hr callback. Approve before paying ₹1000.",
  keywords: ["legal notice for property possession","possession delay notice","property handover notice"],
  alternates: {
    canonical: "https://vakiltech.in/send-legal-notice/legal-notice-for-property-possession",
  },
};

export default function GeneratedServicePage() {
const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Demand Property Possession", current: true },
  ];

  const faqs: any[] = [
  {
    "question": "When is possession legally due from builder?",
    "answer": "Possession is due on the date mentioned in the buyer-builder agreement plus any grace period (typically 3-6 months). Example: Agreement says 'possession by December 2023' with 6-month grace means possession is due by June 2024. Any delay beyond that date entitles you to interest/compensation. If no date is mentioned, reasonable time (typically 3-4 years) is implied."
  },
  {
    "question": "How to calculate possession delay?",
    "answer": "Delay = Current date - (Committed possession date + Grace period). Example: Committed date: Jan 2022, Grace: 6 months, So possession due: July 2022. If today is Jan 2025, delay is 30 months. Interest/compensation is calculated for these 30 months at prescribed rate (typically 10-11% per annum). Use simple interest calculation."
  },
  {
    "question": "What if property is ready but builder is not offering possession?",
    "answer": "If construction is complete but builder is delaying handover (often to collect additional charges or due to occupation certificate delay), send immediate possession demand notice. Threaten RERA complaint if not handed over within 15-30 days. You can also claim continued interest/rent for delay period. Builder cannot withhold possession without valid reason."
  },
  {
    "question": "Can builder impose conditions for possession?",
    "answer": "Builder can only demand: pending installments as per payment schedule, property tax/stamp duty/registration (which are buyer's legal obligations), and reasonable possession charges mentioned in agreement. Builder CANNOT demand: extra charges not in agreement, club membership fees, infrastructure charges beyond agreement, or force you to take loan from specific bank. Refuse illegal demands."
  },
  {
    "question": "Can I take possession without Occupation Certificate (OC)?",
    "answer": "No, don't take possession without OC. Occupation Certificate certifies the building is safe for occupation and complies with approved plans. Without OC: you cannot get water/electricity connections, property insurance may be invalid, resale is difficult, and home loan disbursement may stop. Insist on OC before possession. Builder's delay in getting OC is not your problem."
  },
  {
    "question": "What if builder offers part possession (flat ready but amenities pending)?",
    "answer": "You can: accept flat possession but don't pay full amount—hold back 10-15% until amenities are complete, take possession under protest (written statement that amenities are pending), continue claiming delay interest until full project including amenities is complete, or refuse possession until everything including amenities is ready. Document everything in writing."
  },
  {
    "question": "How much compensation can I claim for possession delay?",
    "answer": "Under RERA: Interest at prescribed rate (SBI MCLR + 2%, currently ~10.75% per annum) calculated on all amounts paid for the entire delay period. Additionally, you can claim: rent equivalent for alternative accommodation, mental harassment compensation (₹50,000-2,00,000 typically), and litigation costs. Total compensation can be 10-20% of property value for 2-3 years delay."
  },
  {
    "question": "Should I take possession even if property has defects?",
    "answer": "Take possession under protest: write detailed defect list, take photographs/videos of all defects, give written notice to builder about defects with rectification timeline, and mention you're taking possession without prejudice to rights. This way you get possession (stop delay interest running) but can still claim rectification. However, for major structural defects, consider refusing possession until fixed."
  },
  {
    "question": "How much does a property possession notice cost?",
    "answer": "vakiltech offers property possession notice services for ₹1,499, including review of agreement and possession timeline, calculation of delay period and interest, professional drafting citing RERA and agreement clauses, demand for immediate possession with compensation, unlimited revisions, registered post delivery, and guidance on filing RERA complaint if possession is not offered within notice period."
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
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"When is possession legally due from builder?","acceptedAnswer":{"@type":"Answer","text":"Possession is due on the date mentioned in the buyer-builder agreement plus any grace period (typically 3-6 months). Example: Agreement says 'possession by December 2023' with 6-month grace means possession is due by June 2024. Any delay beyond that date entitles you to interest/compensation. If no date is mentioned, reasonable time (typically 3-4 years) is implied."}},{"@type":"Question","name":"How to calculate possession delay?","acceptedAnswer":{"@type":"Answer","text":"Delay = Current date - (Committed possession date + Grace period). Example: Committed date: Jan 2022, Grace: 6 months, So possession due: July 2022. If today is Jan 2025, delay is 30 months. Interest/compensation is calculated for these 30 months at prescribed rate (typically 10-11% per annum). Use simple interest calculation."}},{"@type":"Question","name":"What if property is ready but builder is not offering possession?","acceptedAnswer":{"@type":"Answer","text":"If construction is complete but builder is delaying handover (often to collect additional charges or due to occupation certificate delay), send immediate possession demand notice. Threaten RERA complaint if not handed over within 15-30 days. You can also claim continued interest/rent for delay period. Builder cannot withhold possession without valid reason."}},{"@type":"Question","name":"Can builder impose conditions for possession?","acceptedAnswer":{"@type":"Answer","text":"Builder can only demand: pending installments as per payment schedule, property tax/stamp duty/registration (which are buyer's legal obligations), and reasonable possession charges mentioned in agreement. Builder CANNOT demand: extra charges not in agreement, club membership fees, infrastructure charges beyond agreement, or force you to take loan from specific bank. Refuse illegal demands."}},{"@type":"Question","name":"Can I take possession without Occupation Certificate (OC)?","acceptedAnswer":{"@type":"Answer","text":"No, don't take possession without OC. Occupation Certificate certifies the building is safe for occupation and complies with approved plans. Without OC: you cannot get water/electricity connections, property insurance may be invalid, resale is difficult, and home loan disbursement may stop. Insist on OC before possession. Builder's delay in getting OC is not your problem."}},{"@type":"Question","name":"What if builder offers part possession (flat ready but amenities pending)?","acceptedAnswer":{"@type":"Answer","text":"You can: accept flat possession but don't pay full amount—hold back 10-15% until amenities are complete, take possession under protest (written statement that amenities are pending), continue claiming delay interest until full project including amenities is complete, or refuse possession until everything including amenities is ready. Document everything in writing."}},{"@type":"Question","name":"How much compensation can I claim for possession delay?","acceptedAnswer":{"@type":"Answer","text":"Under RERA: Interest at prescribed rate (SBI MCLR + 2%, currently ~10.75% per annum) calculated on all amounts paid for the entire delay period. Additionally, you can claim: rent equivalent for alternative accommodation, mental harassment compensation (₹50,000-2,00,000 typically), and litigation costs. Total compensation can be 10-20% of property value for 2-3 years delay."}},{"@type":"Question","name":"Should I take possession even if property has defects?","acceptedAnswer":{"@type":"Answer","text":"Take possession under protest: write detailed defect list, take photographs/videos of all defects, give written notice to builder about defects with rectification timeline, and mention you're taking possession without prejudice to rights. This way you get possession (stop delay interest running) but can still claim rectification. However, for major structural defects, consider refusing possession until fixed."}},{"@type":"Question","name":"How much does a property possession notice cost?","acceptedAnswer":{"@type":"Answer","text":"vakiltech offers property possession notice services for ₹1,499, including review of agreement and possession timeline, calculation of delay period and interest, professional drafting citing RERA and agreement clauses, demand for immediate possession with compensation, unlimited revisions, registered post delivery, and guidance on filing RERA complaint if possession is not offered within notice period."}}]}` }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"LegalService","telephone":"+91-70476 83995","image":"https://vakiltech.in/vt-logo.png","address":{"@type":"PostalAddress","addressCountry":"IN"},"priceRange":"\u20b91,499+","name":"vakiltech - Legal Notice for Property Possession","description":"Awaiting property handover? Get a lawyer-drafted possession demand notice sent today. Pay ₹499 to start + 2-hr callback. Approve before paying ₹1000.","url":"https://vakiltech.in/send-legal-notice/legal-notice-for-property-possession","areaServed":{"@type":"Country","name":"India"},"provider":{"@type":"Organization","name":"vakiltech","url":"https://vakiltech.in","logo":"https://vakiltech.in/logo.png","contactPoint":{"@type":"ContactPoint","telephone":"+91-70476 83995","contactType":"Customer Service","availableLanguage":["English","Hindi"]}},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"500"},"offers":{"@type":"Offer","price":"1499","priceCurrency":"INR","availability":"https://schema.org/InStock"}}` }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"WebPage","name":"Demand Property Possession | Legal Notice | ₹499","description":"Awaiting property handover? Get a lawyer-drafted possession demand notice sent today. Pay ₹499 to start + 2-hr callback. Approve before paying ₹1000.","url":"https://vakiltech.in/send-legal-notice/legal-notice-for-property-possession","speakable":{"@type":"SpeakableSpecification","cssSelector":["h1","h2",".prose"]},"mainEntity":{"@type":"Service","name":"Legal Notice for Property Possession","description":"If your builder has delayed property possession beyond the agreed timeline, you have the legal right to demand immediate possession or claim compensation and interest for the delay. A legal notice for property possession formally demands handover and sets the stage for RERA complaints or legal action if the builder continues to delay.","provider":{"@type":"Organization","name":"vakiltech"}}}` }}
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
                    Demand Property Possession
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Awaiting property handover? Get a lawyer-drafted possession demand notice sent today. Pay ₹499 to start + 2-hr callback. Approve before paying ₹1000.
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
<h2 className="text-2xl font-bold text-foreground mb-4">Got Possession After 2 Years Delay +₹6L Compensation</h2>
<p className="text-muted-foreground mb-4">Neha's flat possession was delayed by 2 years. After sending a possession demand notice through vakiltech and filing RERA complaint, she received possession within 3 months and ₹6 lakhs compensation (interest for delay period at 10.75% per annum).</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Force Immediate Possession</li>
</ul>
<p className="text-muted-foreground mb-4">Notice creates legal pressure for builder to hand over possession quickly.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Interest for Delay Period</li>
</ul>
<p className="text-muted-foreground mb-4">Claim interest at prescribed rate for entire delay period beyond grace.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Possession OR Refund</li>
</ul>
<p className="text-muted-foreground mb-4">Can choose immediate possession with compensation OR full refund with interest.</p>
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
<li>Handover</li>
</ul>
<p className="text-muted-foreground mb-4">Builder agrees to handover timeline. Ensure you check Occupancy Certificate (OC) first.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Compensation</li>
</ul>
<p className="text-muted-foreground mb-4">They might offer waiver of maintenance charges as compensation for delay. Negotiate hard.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>File RERA Case</li>
</ul>
<p className="text-muted-foreground mb-4">File a complaint for 'Possession plus Interest' (Form M/N). Fastest remedy.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Consumer Court</li>
</ul>
<p className="text-muted-foreground mb-4">Alternative: File in Consumer Commission for 'Deficiency in Service' (compensation is often higher here).</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Need Expert Guidance?</li>
</ul>
<p className="text-muted-foreground mb-4">Not sure if this is the right notice for your situation? Talk to a lawyer for personalized advice before proceeding.</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Property PossessionRights</h2>
<p className="text-muted-foreground mb-4">Property possession rights are protected under RERA 2016, Consumer Protection Act 2019, Transfer of Property Act 1882, and buyer-builder agreements.</p>
<p className="text-muted-foreground mb-4">EXPERT INSIGHT</p>
<p className="text-muted-foreground mb-4">Possession delay is the most common RERA complaint. 80% of cases result in either immediate possession or refund with interest within 6 months.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>⚖️Legal Rights for Property Possession</li>
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
<h2 className="text-2xl font-bold text-foreground mb-4">See a Real Legal Notice for Property Possession Format</h2>
<p className="text-muted-foreground mb-4">Preview a professionally drafted legal notice for property possession.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Sample Legal Notice — Legal Notice for Property Possession</li>
<li>Legally valid format used by 10,000+ lawyers.</li>
</ul>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Get Your Legal Notice for Property Possession Drafted</h2>
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
<li>Builder Dispute</li>
</ul>
<p className="text-muted-foreground mb-4">Legal action for builder delay or default.</p>
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
<p className="text-muted-foreground mb-4">Everything you need to know about legal notice for property possession</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>When is possession legally due from builder?</li>
<li>How to calculate possession delay?</li>
<li>What if property is ready but builder is not offering possession?</li>
<li>Can builder impose conditions for possession?</li>
<li>Can I take possession without Occupation Certificate (OC)?</li>
<li>What if builder offers part possession (flat ready but amenities pending)?</li>
<li>How much compensation can I claim for possession delay?</li>
<li>Should I take possession even if property has defects?</li>
<li>How much does a property possession notice cost?</li>
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
