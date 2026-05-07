import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { TrustSignalsSection } from "@/components/features/homepage/trust-signals";
import { FAQSection } from "@/components/shared/faq-section";
import Link from 'next/link';
import ClientFormTrigger from "@/app/send-legal-notice/legal-notice-for-money-recovery/client-form-trigger";

export const metadata: Metadata = {
  title: "Legal Notice for Non-Payment of Rent | Recover Arrears & Evict",
  description: "Tenant defaulted on rent? Send a strict Legal Notice for Rent Arrears & Eviction. Demand payment with interest. Drafted by expert lawyers. Starts ₹1499.",
  keywords: ["legal notice for rent arrears","unpaid rent legal notice","rent recovery notice","rent default notice format","demand notice for unpaid rent","tenant late rent notice","notice to pay rent or quit india","recovery of outstanding rent"],
  alternates: {
    canonical: "https://vakiltech.in/send-legal-notice/legal-notice-for-rent-arrears",
  },
};

export default function GeneratedServicePage() {
const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Legal Notice for Non-Payment of Rent", current: true },
  ];

  const faqs: any[] = [
  {
    "question": "Can I just deduct unpaid rent from the security deposit?",
    "answer": "You can, but it leaves you vulnerable if the tenant refuses to vacate later or causes damages. The security deposit is primarily for property safety. It is legally safer to demand the rent first. If the lease ends and they leave, you can settle the accounts. Using the deposit to cover rent while the tenant stays effectively leaves you with zero security."
  },
  {
    "question": "Tenant gave a cheque for rent but it bounced. What now?",
    "answer": "This gives you a double advantage. You can send a Rent Arrears Notice for the dues AND a Cheque Bounce Notice (Section 138 NI Act) for the dishonored cheque. The threat of criminal prosecution under the Cheque Bounce law is often faster and more effective than civil recovery suits."
  },
  {
    "question": "Is a WhatsApp message valid as a legal notice for rent?",
    "answer": "Courts in India have started accepting WhatsApp/Email notices as valid *evidence* of communication, but they are not a substitute for a formal legal notice sent via Registered Post, especially for eviction purposes. A formal notice on a lawyer's letterhead carries statutory weight that a WhatsApp text does not."
  },
  {
    "question": "Tenant is paying small amounts partially. Should I accept?",
    "answer": "Only accept it 'without prejudice.' Issue a receipt stating clearly that this is a partial payment and the balance is still due. If you accept rent without objection, the tenant can claim in court that you waived your right to evict them for that month's default. Consult a lawyer on how to document these receipts."
  },
  {
    "question": "Is there a time limit to claim unpaid rent?",
    "answer": "Yes, the Limitation Act imposes a 3-year limit. You can only sue to recover rent dues that are less than 3 years old. If you wait for 4 years to claim old rent, the court will dismiss it as 'time-barred.' Send a notice immediately to stop the clock."
  },
  {
    "question": "Can I lock out a tenant who hasn't paid for 6 months?",
    "answer": "No. Even if they are defaulters, you cannot take the law into your own hands. Illegal dispossession is a criminal offense. You must follow the due process: Notice -> Eviction Suit -> Court decree -> Bailiff execution over the property."
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
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Can I just deduct unpaid rent from the security deposit?","acceptedAnswer":{"@type":"Answer","text":"You can, but it leaves you vulnerable if the tenant refuses to vacate later or causes damages. The security deposit is primarily for property safety. It is legally safer to demand the rent first. If the lease ends and they leave, you can settle the accounts. Using the deposit to cover rent while the tenant stays effectively leaves you with zero security."}},{"@type":"Question","name":"Tenant gave a cheque for rent but it bounced. What now?","acceptedAnswer":{"@type":"Answer","text":"This gives you a double advantage. You can send a Rent Arrears Notice for the dues AND a Cheque Bounce Notice (Section 138 NI Act) for the dishonored cheque. The threat of criminal prosecution under the Cheque Bounce law is often faster and more effective than civil recovery suits."}},{"@type":"Question","name":"Is a WhatsApp message valid as a legal notice for rent?","acceptedAnswer":{"@type":"Answer","text":"Courts in India have started accepting WhatsApp/Email notices as valid *evidence* of communication, but they are not a substitute for a formal legal notice sent via Registered Post, especially for eviction purposes. A formal notice on a lawyer's letterhead carries statutory weight that a WhatsApp text does not."}},{"@type":"Question","name":"Tenant is paying small amounts partially. Should I accept?","acceptedAnswer":{"@type":"Answer","text":"Only accept it 'without prejudice.' Issue a receipt stating clearly that this is a partial payment and the balance is still due. If you accept rent without objection, the tenant can claim in court that you waived your right to evict them for that month's default. Consult a lawyer on how to document these receipts."}},{"@type":"Question","name":"Is there a time limit to claim unpaid rent?","acceptedAnswer":{"@type":"Answer","text":"Yes, the Limitation Act imposes a 3-year limit. You can only sue to recover rent dues that are less than 3 years old. If you wait for 4 years to claim old rent, the court will dismiss it as 'time-barred.' Send a notice immediately to stop the clock."}},{"@type":"Question","name":"Can I lock out a tenant who hasn't paid for 6 months?","acceptedAnswer":{"@type":"Answer","text":"No. Even if they are defaulters, you cannot take the law into your own hands. Illegal dispossession is a criminal offense. You must follow the due process: Notice -> Eviction Suit -> Court decree -> Bailiff execution over the property."}}]}` }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"LegalService","telephone":"+91-70476 83995","image":"https://vakiltech.in/vt-logo.png","address":{"@type":"PostalAddress","addressCountry":"IN"},"priceRange":"\u20b91,499+","name":"vakiltech - Legal Notice for Rent Arrears","description":"Tenant defaulted on rent? Send a strict Legal Notice for Rent Arrears & Eviction. Demand payment with interest. Drafted by expert lawyers. Starts ₹1499.","url":"https://vakiltech.in/send-legal-notice/legal-notice-for-rent-arrears","areaServed":{"@type":"Country","name":"India"},"provider":{"@type":"Organization","name":"vakiltech","url":"https://vakiltech.in","logo":"https://vakiltech.in/logo.png","contactPoint":{"@type":"ContactPoint","telephone":"+91-70476 83995","contactType":"Customer Service","availableLanguage":["English","Hindi"]}},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"500"},"offers":{"@type":"Offer","price":"1499","priceCurrency":"INR","availability":"https://schema.org/InStock"}}` }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"WebPage","name":"Legal Notice for Non-Payment of Rent | Recover Arrears & Evict","description":"Tenant defaulted on rent? Send a strict Legal Notice for Rent Arrears & Eviction. Demand payment with interest. Drafted by expert lawyers. Starts ₹1499.","url":"https://vakiltech.in/send-legal-notice/legal-notice-for-rent-arrears","speakable":{"@type":"SpeakableSpecification","cssSelector":["h1","h2",".prose"]},"mainEntity":{"@type":"Service","name":"Legal Notice for Rent Arrears","description":"Consistent non-payment of rent is a breach of the lease agreement and a primary ground for eviction. If your tenant has defaulted on payments despite reminders, sending a **Legal Notice for Rent Arrears** is critical. It formally puts the tenant on notice to clear the dues within a specific period or face legal consequences, including eviction and a suit for recovery of money with interest.","provider":{"@type":"Organization","name":"vakiltech"}}}` }}
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
                    Legal Notice for Non-Payment of Rent
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Tenant defaulted on rent? Send a strict Legal Notice for Rent Arrears & Eviction. Demand payment with interest. Drafted by expert lawyers. Starts ₹1499.
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
<h2 className="text-2xl font-bold text-foreground mb-4">How to Recover Unpaid Rent Legally?</h2>
<p className="text-muted-foreground mb-4">Don't let arrears pile up. Follow this legal escalation matrix: 1. **Written Reminder:** Send a polite email or WhatsApp message documenting the default. 2. **Formal Legal Notice:** If they ignore reminders, send a lawyer-signed notice demanding full payment + interest. 3. **Termination of Lease:** If the notice period expires without payment, the lease stands terminated. 4. **Summary Suit (Order 37 CPC):** For pure money recovery (without eviction), you can file a 'Summary Suit' which is faster than regular trials. 5. **Eviction Suit:** If you want possession back, file for eviction on the ground of non-payment.</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">What This Notice Must Include</h2>
<p className="text-muted-foreground mb-4">A defective notice can delay your recovery. Our experts ensure your notice contains: * **Calculation of Dues:** Month-wise breakdown of unpaid rent. * **Interest Claim:** Market rate interest (usually 15-18% p.a.) on the delayed amount. * **Adjustment Warning:** Clause regarding adjustment against security deposit (if applicable) or why deposit is forfeited. * **Ultimatum:** A clear deadline (e.g., 15 days) to credit the amount to your bank account. * **Eviction Warning:** Explicit statement that failure to pay leads to lease termination.</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Can You Adjust Against Security Deposit?</h2>
<p className="text-muted-foreground mb-4">Many landlords make the mistake of just adjusting arrears against the security deposit without notice. **Avoid this.** The security deposit is usually for property damages and is refundable *after* vacation. Always demand the rent first. If they vacate and still owe money, *then* adjust against the deposit and claim the remaining balance legally.</p>
<p className="text-muted-foreground mb-4">Stop chasing your tenant. Make them pay with a formal legal demand.</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">How Mrs. Gupta recovered₹2.4 Lakhs</h2>
<p className="text-muted-foreground mb-4">Mrs. Gupta's commercial tenant in Bangalore owed 6 months of rent and kept making false promises. Fearing he would run away, she sent a legal notice through VakilTalk demanding the principal amount plus 18% interest. The tenant, realizing that a lawsuit would ruin his business credit, arranged for funds and cleared the entire pending amount of ₹2.4 Lakhs within 15 days of receiving the notice.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Interest Claimed</li>
</ul>
<p className="text-muted-foreground mb-4">Successfully demanded 18% p.a. interest on the delayed payments.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>15-Day Payment</li>
</ul>
<p className="text-muted-foreground mb-4">Tenant paid immediately to avoid civil litigation and business reputation loss.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Lease Continued</li>
</ul>
<p className="text-muted-foreground mb-4">Since dues were cleared, the tenancy continued with stricter terms.</p>
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
<li>Payment</li>
</ul>
<p className="text-muted-foreground mb-4">Tenant pays the arrears. You can then choose to continue or terminate the lease.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Partial Payment</li>
</ul>
<p className="text-muted-foreground mb-4">If they pay partially, issue a receipt 'Without Prejudice' to your right to evict.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>File Case (Money)</li>
</ul>
<p className="text-muted-foreground mb-4">File a Summary Suit (Order 37 CPC) just to recover the money quickly.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>File Case (Eviction)</li>
</ul>
<p className="text-muted-foreground mb-4">File an Eviction Suit on ground of 'Non-Payment of Rent'.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Need Expert Guidance?</li>
</ul>
<p className="text-muted-foreground mb-4">Not sure if this is the right notice for your situation? Talk to a lawyer for personalized advice before proceeding.</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Laws on RentDefault</h2>
<p className="text-muted-foreground mb-4">Indian laws provide specific remedies for landlords to recover money and possession from defaulting tenants.</p>
<p className="text-muted-foreground mb-4">EXPERT INSIGHT</p>
<p className="text-muted-foreground mb-4">A 'Notice to Pay or Quit' is a powerful tool. In most states, if a tenant pays arrears within the notice period, they can save their tenancy. If not, eviction is almost guaranteed.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>⚖️Civil Procedure Code (Order 37)</li>
<li>🏠Rent Control Acts</li>
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
<h2 className="text-2xl font-bold text-foreground mb-4">See a Real Legal Notice for Rent Arrears Format</h2>
<p className="text-muted-foreground mb-4">Preview a professionally drafted legal notice for rent arrears.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Sample Legal Notice — Legal Notice for Rent Arrears</li>
<li>Legally valid format used by 10,000+ lawyers.</li>
</ul>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Get Your Legal Notice for Rent Arrears Drafted</h2>
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
<h2 className="text-2xl font-bold text-foreground mb-4">Other Tenant &amp; Property Legal Notices</h2>
<p className="text-muted-foreground mb-4">Need a different type of legal notice? We have specialized options.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Tenant Notice</li>
</ul>
<p className="text-muted-foreground mb-4">Send legal notice to tenant for various disputes.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Eviction Notice</li>
</ul>
<p className="text-muted-foreground mb-4">Lawfully evict tenant from property.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Property Partition</li>
</ul>
<p className="text-muted-foreground mb-4">Legal division of jointly owned property.</p>
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
<p className="text-muted-foreground mb-4">Everything you need to know about legal notice for rent arrears</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Can I just deduct unpaid rent from the security deposit?</li>
<li>Tenant gave a cheque for rent but it bounced. What now?</li>
<li>Is a WhatsApp message valid as a legal notice for rent?</li>
<li>Tenant is paying small amounts partially. Should I accept?</li>
<li>Is there a time limit to claim unpaid rent?</li>
<li>Can I lock out a tenant who hasn't paid for 6 months?</li>
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
