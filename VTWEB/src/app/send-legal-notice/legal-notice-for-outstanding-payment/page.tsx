import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { TrustSignalsSection } from "@/components/features/homepage/trust-signals";
import { FAQSection } from "@/components/shared/faq-section";
import Link from 'next/link';
import ClientFormTrigger from "@/app/send-legal-notice/legal-notice-for-money-recovery/client-form-trigger";

export const metadata: Metadata = {
  title: "Send Legal Notice for Outstanding Payment - Recover Dues Fast | vakiltech",
  description: "Client not paying? Send a strong legal notice to recover your outstanding dues. fast, professional drafting to get you paid.",
  keywords: ["legal notice for outstanding payment format","legal notice for recovery of outstanding dues","msme payment recovery","unpaid invoice legal action","demand notice for payment"],
  alternates: {
    canonical: "https://vakiltech.in/send-legal-notice/legal-notice-for-outstanding-payment",
  },
};

export default function GeneratedServicePage() {
const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Send Legal Notice for Outstanding Payment - Recover Dues Fast", current: true },
  ];

  const faqs: any[] = [
  {
    "question": "What is an outstanding payment legal notice?",
    "answer": "An outstanding payment legal notice is a formal demand sent to a business or individual who has failed to pay for goods or services as per agreed terms. It's commonly used by MSMEs, freelancers, and service providers to recover unpaid invoices and business dues."
  },
  {
    "question": "When should I send an outstanding payment notice?",
    "answer": "Send a notice when payment is overdue beyond the agreed credit period, typically 30-90 days after the invoice date, and after your informal reminders have been ignored. The earlier you send a formal notice, the better your chances of quick recovery."
  },
  {
    "question": "What are the benefits for MSMEs?",
    "answer": "MSMEs (Micro, Small & Medium Enterprises) have special protection under the MSMED Act, 2006. If payment is not made within 45 days, you can claim compound interest at 3 times the bank rate. You can also approach the Micro & Small Enterprises Facilitation Council (MSEFC) for dispute resolution."
  },
  {
    "question": "How long should I give for payment?",
    "answer": "Typically, give 15-30 days for payment from the date of notice receipt. However, in urgent cases or when payment is severely delayed, you can give a shorter period of 7-10 days. The timeline should be reasonable and mentioned clearly in the notice."
  },
  {
    "question": "Can I claim interest on delayed payments?",
    "answer": "Yes. If your contract specifies interest on delayed payments, you can claim it. For MSMEs, even without a contract clause, you can claim compound interest under Section 16 of the MSMED Act from the date the payment became due."
  },
  {
    "question": "Will sending a notice damage the business relationship?",
    "answer": "A professionally worded legal notice can actually preserve relationships by showing you're serious about payment while still open to resolution. Many businesses understand it's a standard process involving their finance department and respond positively."
  },
  {
    "question": "What documents do I need to provide?",
    "answer": "You'll need: invoice copies, purchase orders or work agreements, proof of delivery (if goods), email correspondence about payment, bank statements showing payment not received, and any terms & conditions agreed upon."
  },
  {
    "question": "How much does a business payment notice cost?",
    "answer": "vakiltech offers outstanding payment legal notice services for ₹1,499, including drafting by advocates experienced in commercial law, unlimited revisions, registered post delivery, and legal consultation throughout the recovery process."
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
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is an outstanding payment legal notice?","acceptedAnswer":{"@type":"Answer","text":"An outstanding payment legal notice is a formal demand sent to a business or individual who has failed to pay for goods or services as per agreed terms. It's commonly used by MSMEs, freelancers, and service providers to recover unpaid invoices and business dues."}},{"@type":"Question","name":"When should I send an outstanding payment notice?","acceptedAnswer":{"@type":"Answer","text":"Send a notice when payment is overdue beyond the agreed credit period, typically 30-90 days after the invoice date, and after your informal reminders have been ignored. The earlier you send a formal notice, the better your chances of quick recovery."}},{"@type":"Question","name":"What are the benefits for MSMEs?","acceptedAnswer":{"@type":"Answer","text":"MSMEs (Micro, Small & Medium Enterprises) have special protection under the MSMED Act, 2006. If payment is not made within 45 days, you can claim compound interest at 3 times the bank rate. You can also approach the Micro & Small Enterprises Facilitation Council (MSEFC) for dispute resolution."}},{"@type":"Question","name":"How long should I give for payment?","acceptedAnswer":{"@type":"Answer","text":"Typically, give 15-30 days for payment from the date of notice receipt. However, in urgent cases or when payment is severely delayed, you can give a shorter period of 7-10 days. The timeline should be reasonable and mentioned clearly in the notice."}},{"@type":"Question","name":"Can I claim interest on delayed payments?","acceptedAnswer":{"@type":"Answer","text":"Yes. If your contract specifies interest on delayed payments, you can claim it. For MSMEs, even without a contract clause, you can claim compound interest under Section 16 of the MSMED Act from the date the payment became due."}},{"@type":"Question","name":"Will sending a notice damage the business relationship?","acceptedAnswer":{"@type":"Answer","text":"A professionally worded legal notice can actually preserve relationships by showing you're serious about payment while still open to resolution. Many businesses understand it's a standard process involving their finance department and respond positively."}},{"@type":"Question","name":"What documents do I need to provide?","acceptedAnswer":{"@type":"Answer","text":"You'll need: invoice copies, purchase orders or work agreements, proof of delivery (if goods), email correspondence about payment, bank statements showing payment not received, and any terms & conditions agreed upon."}},{"@type":"Question","name":"How much does a business payment notice cost?","acceptedAnswer":{"@type":"Answer","text":"vakiltech offers outstanding payment legal notice services for ₹1,499, including drafting by advocates experienced in commercial law, unlimited revisions, registered post delivery, and legal consultation throughout the recovery process."}}]}` }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"LegalService","telephone":"+91-70476 83995","image":"https://vakiltech.in/vt-logo.png","address":{"@type":"PostalAddress","addressCountry":"IN"},"priceRange":"\u20b91,499+","name":"vakiltech - Legal Notice for Outstanding Payment","description":"Client not paying? Send a strong legal notice to recover your outstanding dues. fast, professional drafting to get you paid.","url":"https://vakiltech.in/send-legal-notice/legal-notice-for-outstanding-payment","areaServed":{"@type":"Country","name":"India"},"provider":{"@type":"Organization","name":"vakiltech","url":"https://vakiltech.in","logo":"https://vakiltech.in/logo.png","contactPoint":{"@type":"ContactPoint","telephone":"+91-70476 83995","contactType":"Customer Service","availableLanguage":["English","Hindi"]}},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"500"},"offers":{"@type":"Offer","price":"1499","priceCurrency":"INR","availability":"https://schema.org/InStock"}}` }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"WebPage","name":"Send Legal Notice for Outstanding Payment - Recover Dues Fast | vakiltech","description":"Client not paying? Send a strong legal notice to recover your outstanding dues. fast, professional drafting to get you paid.","url":"https://vakiltech.in/send-legal-notice/legal-notice-for-outstanding-payment","speakable":{"@type":"SpeakableSpecification","cssSelector":["h1","h2",".prose"]},"mainEntity":{"@type":"Service","name":"Legal Notice for Outstanding Payment","description":"If you are looking for the correct legal notice format for non-payment of dues, our experts can help. A professionally drafted legal notice formally demands payment and creates strong legal grounds for recovery under the Indian Contract Act and MSMED Act.","provider":{"@type":"Organization","name":"vakiltech"}}}` }}
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
                    Send Legal Notice for Outstanding Payment - Recover Dues Fast
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Client not paying? Send a strong legal notice to recover your outstanding dues. fast, professional drafting to get you paid.
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
<h2 className="text-2xl font-bold text-foreground mb-4">What is an Outstanding Payment Legal Notice?</h2>
<p className="text-muted-foreground mb-4">An outstanding payment legal notice is sent when a business or individual fails to pay for goods supplied or services rendered despite invoices and reminders. This formal legal demand establishes your claim and creates evidence before filing a recovery suit. It's commonly used in B2B transactions, freelance work, vendor payments, and professional service fees.</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">When to Send Outstanding Payment Notice</h2>
<p className="text-muted-foreground mb-4">You should send an outstanding payment notice when:</p>
<p className="text-muted-foreground mb-4">Invoices remain unpaid beyond payment terms (30/60/90 days)</p>
<p className="text-muted-foreground mb-4">Client ignores payment reminders and follow-up communications</p>
<p className="text-muted-foreground mb-4">Partial payments stopped without explanation</p>
<p className="text-muted-foreground mb-4">Disputes arise over payment terms or invoice amounts</p>
<p className="text-muted-foreground mb-4">You want to formalize the debt before legal action</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">B2B Payment Disputes and Legal Notice</h2>
<p className="text-muted-foreground mb-4">In business-to-business transactions, outstanding payments disrupt cash flow and business operations. A legal notice serves multiple purposes: it escalates the matter from casual reminders to formal legal communication, creates enforceable documentary evidence of the debt, often triggers payment due to reputation concerns in business circles, and establishes the timeline for legal action. Many businesses settle immediately after receiving a legal notice to maintain business relationships and avoid litigation costs.</p>
<p className="text-muted-foreground mb-4">Don't let unpaid invoices hurt your business cash flow. Send a professional payment demand notice today.</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Recovered Outstanding Dues of₹15 Lakhs</h2>
<p className="text-muted-foreground mb-4">A Mumbai-based web development agency was owed ₹15 lakhs by a client for 8 months. After sending a legal notice through vakiltech specifically citing the MSMED Act provisions and calculating interest, the client reached out for settlement within 5 days to avoid the Micro &amp; Small Enterprise Facilitation Council.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>MSMED Act Protection</li>
</ul>
<p className="text-muted-foreground mb-4">For MSMEs, you can claim interest on delayed payments under MSMED Act.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Faster Than Court</li>
</ul>
<p className="text-muted-foreground mb-4">Most B2B disputes settle within 15-30 days after receiving a formal notice.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Preserve Relationship</li>
</ul>
<p className="text-muted-foreground mb-4">Resolve payment disputes professionally without burning business bridges.</p>
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
<p className="text-muted-foreground mb-4">They might offer to pay in installments. Accept only if they sign a Payment Agreement.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Reconciliation</li>
</ul>
<p className="text-muted-foreground mb-4">If they dispute the invoice amount, reconcile accounts immediately to avoid delay.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>MSME Samadhaan</li>
</ul>
<p className="text-muted-foreground mb-4">If you are MSME registered, file a case with MSE Facilitation Council (Fast &amp; Powerful).</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>File Case</li>
</ul>
<p className="text-muted-foreground mb-4">File Summary Suit (Order 37 CPC) or Commercial Suit for recovery.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Insolvency</li>
</ul>
<p className="text-muted-foreground mb-4">If the debt is &gt;₹1 Cr, you can drag the company to NCLT for insolvency.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Need Expert Guidance?</li>
</ul>
<p className="text-muted-foreground mb-4">Not sure if this is the right notice for your situation? Talk to a lawyer for personalized advice before proceeding.</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Business PaymentRecovery Laws</h2>
<p className="text-muted-foreground mb-4">Business payment recovery is governed by the Indian Contract Act, 1872, and specifically the MSMED Act, 2006 for registered enterprises.</p>
<p className="text-muted-foreground mb-4">EXPERT INSIGHT</p>
<p className="text-muted-foreground mb-4">Under the MSMED Act, buyers are liable to pay compound interest at 3 times the bank rate if payment is delayed beyond 45 days.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>⚖️Legal Rights for Payment Recovery</li>
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
<h2 className="text-2xl font-bold text-foreground mb-4">See a Real Legal Notice for Outstanding Payment Format</h2>
<p className="text-muted-foreground mb-4">Preview a professionally drafted legal notice for outstanding payment.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Sample Legal Notice — Legal Notice for Outstanding Payment</li>
<li>Legally valid format used by 10,000+ lawyers.</li>
</ul>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Get Your Legal Notice for Outstanding Payment Drafted</h2>
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
<h2 className="text-2xl font-bold text-foreground mb-4">Other Money Recovery Legal Notices</h2>
<p className="text-muted-foreground mb-4">Need a different type of legal notice? We have specialized options.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Money Recovery</li>
</ul>
<p className="text-muted-foreground mb-4">Recover unpaid dues, loans, or business payments legally.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Cheque Bounce</li>
</ul>
<p className="text-muted-foreground mb-4">Legal action under Section 138 for dishonoured cheques.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Unpaid Salary</li>
</ul>
<p className="text-muted-foreground mb-4">Claim unpaid wages and employment dues.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Divorce Notice</li>
</ul>
<p className="text-muted-foreground mb-4">Legal notice for divorce proceedings in India.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Maintenance Claim</li>
</ul>
<p className="text-muted-foreground mb-4">Claim maintenance for wife, children, or parents.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Cruelty or Desertion</li>
</ul>
<p className="text-muted-foreground mb-4">Legal action for matrimonial cruelty or desertion.</p>
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
<p className="text-muted-foreground mb-4">Everything you need to know about legal notice for outstanding payment</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>What is an outstanding payment legal notice?</li>
<li>When should I send an outstanding payment notice?</li>
<li>What are the benefits for MSMEs?</li>
<li>How long should I give for payment?</li>
<li>Can I claim interest on delayed payments?</li>
<li>Will sending a notice damage the business relationship?</li>
<li>What documents do I need to provide?</li>
<li>How much does a business payment notice cost?</li>
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
