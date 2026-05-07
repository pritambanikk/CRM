import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { TrustSignalsSection } from "@/components/features/homepage/trust-signals";
import { FAQSection } from "@/components/shared/faq-section";
import Link from 'next/link';
import ClientFormTrigger from "@/app/send-legal-notice/legal-notice-for-money-recovery/client-form-trigger";

export const metadata: Metadata = {
  title: "Legal Notice for Cruelty & Desertion | 498A & Divorce | ₹499",
  description: "Facing mental cruelty or desertion? Send a strong legal notice. Valid grounds for divorce & 498A complaints. Expert drafting by family lawyers.",
  keywords: ["legal notice for cruelty","legal notice for desertion","mental cruelty divorce notice","section 498a notice","matrimonial harassment notice"],
  alternates: {
    canonical: "https://vakiltech.in/send-legal-notice/legal-notice-for-cruelty-or-desertion",
  },
};

export default function GeneratedServicePage() {
const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Legal Notice for Cruelty & Desertion", current: true },
  ];

  const faqs: any[] = [
  {
    "question": "How do I prove mental cruelty?",
    "answer": "Mental cruelty is harder to prove than physical injury but is equally valid. Proof can include: abusive text messages/emails, audio recordings, testimony of neighbors or relatives, medical records of treatment for depression/anxiety caused by the marriage, and crucially, a detailed legal notice sent at the time of incidents."
  },
  {
    "question": "Is this notice the same as filing a 498A case?",
    "answer": "No. A legal notice is a civil warning sent by a lawyer. Section 498A is a criminal complaint filed with the police. However, sending a notice acts as a final warning. If the harassment stops, you may avoid a criminal case. If not, the notice shows you tried to resolve it civilly first."
  },
  {
    "question": "Do I have to wait 2 years to send a desertion notice?",
    "answer": "No! You should send the notice as soon as your spouse leaves or you are forced to leave. The notice will document the *start date* of the separation. While you may need to wait 2 years to file for divorce on this specific ground, the notice prevents the spouse from later claiming they never left."
  },
  {
    "question": "I left home because he beat me. Can he claim I deserted him?",
    "answer": "No. This is called 'Constructive Desertion'. Since his cruelty *forced* you to leave for your safety, *he* is considered the deserter in the eyes of the law. Your legal notice must clearly state that you were compelled to leave due to his conduct."
  },
  {
    "question": "Can I demand return of dowry/gifts in this notice?",
    "answer": "Yes. The notice should list all Stridhan (jewelry, gifts, dowry items) that are in the possession of your spouse/in-laws and demand their return within 7-15 days. Failure to return them is a criminal offense under Section 406 IPC (Criminal Breach of Trust)."
  },
  {
    "question": "Can I send notice to my in-laws too?",
    "answer": "Yes, if the in-laws are participating in the cruelty or holding your property. In Indian law (especially Sec 498A and DV Act), husband's relatives are also liable for cruelty. The notice can address them specifically."
  },
  {
    "question": "Will sending a notice provoke him to file a false case?",
    "answer": "Usually, it's the opposite. A well-drafted notice shows you have legal counsel and successful evidence. It serves as a deterrent. Moreover, if he files a false case *after* receiving your notice, your notice proves his case is a counter-blast (retaliation) and helps you get bail or quash his case."
  },
  {
    "question": "What is the cost of a Cruelty/Desertion notice?",
    "answer": "We charge ₹1,499. This covers a detailed consultation to understand your specific incidents of cruelty, drafting a strong legal notice citing relevant High Court/Supreme Court judgments, and dispatch via Registered Post."
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
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How do I prove mental cruelty?","acceptedAnswer":{"@type":"Answer","text":"Mental cruelty is harder to prove than physical injury but is equally valid. Proof can include: abusive text messages/emails, audio recordings, testimony of neighbors or relatives, medical records of treatment for depression/anxiety caused by the marriage, and crucially, a detailed legal notice sent at the time of incidents."}},{"@type":"Question","name":"Is this notice the same as filing a 498A case?","acceptedAnswer":{"@type":"Answer","text":"No. A legal notice is a civil warning sent by a lawyer. Section 498A is a criminal complaint filed with the police. However, sending a notice acts as a final warning. If the harassment stops, you may avoid a criminal case. If not, the notice shows you tried to resolve it civilly first."}},{"@type":"Question","name":"Do I have to wait 2 years to send a desertion notice?","acceptedAnswer":{"@type":"Answer","text":"No! You should send the notice as soon as your spouse leaves or you are forced to leave. The notice will document the *start date* of the separation. While you may need to wait 2 years to file for divorce on this specific ground, the notice prevents the spouse from later claiming they never left."}},{"@type":"Question","name":"I left home because he beat me. Can he claim I deserted him?","acceptedAnswer":{"@type":"Answer","text":"No. This is called 'Constructive Desertion'. Since his cruelty *forced* you to leave for your safety, *he* is considered the deserter in the eyes of the law. Your legal notice must clearly state that you were compelled to leave due to his conduct."}},{"@type":"Question","name":"Can I demand return of dowry/gifts in this notice?","acceptedAnswer":{"@type":"Answer","text":"Yes. The notice should list all Stridhan (jewelry, gifts, dowry items) that are in the possession of your spouse/in-laws and demand their return within 7-15 days. Failure to return them is a criminal offense under Section 406 IPC (Criminal Breach of Trust)."}},{"@type":"Question","name":"Can I send notice to my in-laws too?","acceptedAnswer":{"@type":"Answer","text":"Yes, if the in-laws are participating in the cruelty or holding your property. In Indian law (especially Sec 498A and DV Act), husband's relatives are also liable for cruelty. The notice can address them specifically."}},{"@type":"Question","name":"Will sending a notice provoke him to file a false case?","acceptedAnswer":{"@type":"Answer","text":"Usually, it's the opposite. A well-drafted notice shows you have legal counsel and successful evidence. It serves as a deterrent. Moreover, if he files a false case *after* receiving your notice, your notice proves his case is a counter-blast (retaliation) and helps you get bail or quash his case."}},{"@type":"Question","name":"What is the cost of a Cruelty/Desertion notice?","acceptedAnswer":{"@type":"Answer","text":"We charge ₹1,499. This covers a detailed consultation to understand your specific incidents of cruelty, drafting a strong legal notice citing relevant High Court/Supreme Court judgments, and dispatch via Registered Post."}}]}` }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"LegalService","telephone":"+91-70476 83995","image":"https://vakiltech.in/vt-logo.png","address":{"@type":"PostalAddress","addressCountry":"IN"},"priceRange":"\u20b91,499+","name":"vakiltech - Legal Notice for Cruelty or Desertion","description":"Facing mental cruelty or desertion? Send a strong legal notice. Valid grounds for divorce & 498A complaints. Expert drafting by family lawyers.","url":"https://vakiltech.in/send-legal-notice/legal-notice-for-cruelty-or-desertion","areaServed":{"@type":"Country","name":"India"},"provider":{"@type":"Organization","name":"vakiltech","url":"https://vakiltech.in","logo":"https://vakiltech.in/logo.png","contactPoint":{"@type":"ContactPoint","telephone":"+91-70476 83995","contactType":"Customer Service","availableLanguage":["English","Hindi"]}},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"500"},"offers":{"@type":"Offer","price":"1499","priceCurrency":"INR","availability":"https://schema.org/InStock"}}` }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"WebPage","name":"Legal Notice for Cruelty & Desertion | 498A & Divorce | ₹499","description":"Facing mental cruelty or desertion? Send a strong legal notice. Valid grounds for divorce & 498A complaints. Expert drafting by family lawyers.","url":"https://vakiltech.in/send-legal-notice/legal-notice-for-cruelty-or-desertion","speakable":{"@type":"SpeakableSpecification","cssSelector":["h1","h2",".prose"]},"mainEntity":{"@type":"Service","name":"Legal Notice for Cruelty or Desertion","description":"Cruelty (mental or physical) and Desertion are the two most common grounds for contested divorce in India. Sending a legal notice documents the abuse or abandonment formally. It serves as a strong warning to the offending spouse and creates vital evidence for future legal proceedings—whether for divorce, maintenance, or criminal complaints under Section 498A IPC or the Domestic Violence Act.","provider":{"@type":"Organization","name":"vakiltech"}}}` }}
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
                    Legal Notice for Cruelty & Desertion
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Facing mental cruelty or desertion? Send a strong legal notice. Valid grounds for divorce & 498A complaints. Expert drafting by family lawyers.
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
<h2 className="text-2xl font-bold text-foreground mb-4">What Constitutes 'Cruelty'?</h2>
<p className="text-muted-foreground mb-4">Cruelty under Indian law includes both physical harm and mental suffering that makes living together impossible:</p>
<p className="text-muted-foreground mb-4">Mental Cruelty: Constant humiliation, false accusations, restricting freedom, or prolonged silence that causes mental agony.</p>
<p className="text-muted-foreground mb-4">Physical Cruelty: Any act causing bodily harm, injury, or danger to life, limb, or health.</p>
<p className="text-muted-foreground mb-4">Legal Significance: Under Section 13(1)(ia) of the Hindu Marriage Act, 'Cruelty' is a valid ground for divorce.</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">What Constitutes 'Desertion'?</h2>
<p className="text-muted-foreground mb-4">Desertion refers to the intentional abandonment of one spouse by the other without sufficient cause:</p>
<p className="text-muted-foreground mb-4">Willful Abandonment: Leaving the spouse without reasonable cause and without consent.</p>
<p className="text-muted-foreground mb-4">Duration: Must be for a continuous period of at least 2 years immediately preceding the divorce petition.</p>
<p className="text-muted-foreground mb-4">Constructive Desertion: If one spouse is forced to leave home due to the other's cruelty, the aggressive spouse is considered the deserter.</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Why Send a Notice Now?</h2>
<p className="text-muted-foreground mb-4">Drafting and sending a legal notice immediately serves crucial strategic purposes:</p>
<p className="text-muted-foreground mb-4">Stops the Abuse: A legal notice shows you have legal backing, acting as a strong deterrent to further harassment.</p>
<p className="text-muted-foreground mb-4">Creates Evidence: It puts on record specific incidents of cruelty or the exact date of desertion, which is vital for court cases.</p>
<p className="text-muted-foreground mb-4">Option for Settlement: It gives the spouse a chance to rectify their behavior or agree to a mutual separation to avoid litigation.</p>
<p className="text-muted-foreground mb-4">You deserve safety and dignity. Take the first legal step to protect yourself today.</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Documenting Cruelty Led toFavorable Divorce</h2>
<p className="text-muted-foreground mb-4">Deepa (name changed) faced constant mental harassment and dowry taunts from her in-laws but had no physical proof. On our advice, she sent a detailed legal notice listing specific incidents and dates of harassment. When her husband filed a false 'Restitution of Conjugal Rights' case later, this notice served as primary evidence that she had valid reasons to live separately. The court ruled in her favor, granting divorce and alimony.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Created Paper Trail</li>
</ul>
<p className="text-muted-foreground mb-4">The noticed proved that the harassment was ongoing and not an afterthought.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Countered False Cases</li>
</ul>
<p className="text-muted-foreground mb-4">prevented the husband from claiming she left the home without reason.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Alimony Granted</li>
</ul>
<p className="text-muted-foreground mb-4">Cruelty was established as the ground for divorce, ensuring she received maintenance.</p>
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
<li>Reconciliation</li>
</ul>
<p className="text-muted-foreground mb-4">They might ask to reconcile. If you agree, sign a clear 'terms of return' agreement.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Mutual Divorce</li>
</ul>
<p className="text-muted-foreground mb-4">If the marriage is broken beyond repair, agree to file for Mutual Consent Divorce (Fastest).</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>File Contested Divorce</li>
</ul>
<p className="text-muted-foreground mb-4">File for divorce on ground of Cruelty (immediate) or Desertion (after 2 years).</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Criminal Complaint</li>
</ul>
<p className="text-muted-foreground mb-4">If cruelty was severe, file complaint under Section 498A IPC/BNS.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Need Expert Guidance?</li>
</ul>
<p className="text-muted-foreground mb-4">Not sure if this is the right notice for your situation? Talk to a lawyer for personalized advice before proceeding.</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Cruelty Laws inIndia</h2>
<p className="text-muted-foreground mb-4">Indian law provides both civil (divorce) and criminal remedies for cruelty.</p>
<p className="text-muted-foreground mb-4">EXPERT INSIGHT</p>
<p className="text-muted-foreground mb-4">For a divorce based on desertion, the period must be 2 continuous years. However, you don't need to wait 2 years to send a legal notice—send it immediately to mark the start date.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>⚖️Key Legal Sections</li>
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
<h2 className="text-2xl font-bold text-foreground mb-4">See a Real Legal Notice for Cruelty or Desertion Format</h2>
<p className="text-muted-foreground mb-4">Preview a professionally drafted legal notice for cruelty or desertion.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Sample Legal Notice — Legal Notice for Cruelty or Desertion</li>
<li>Legally valid format used by 10,000+ lawyers.</li>
</ul>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Get Your Legal Notice for Cruelty or Desertion Drafted</h2>
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
<h2 className="text-2xl font-bold text-foreground mb-4">Other Family Law Legal Notices</h2>
<p className="text-muted-foreground mb-4">Need a different type of legal notice? We have specialized options.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Divorce Notice</li>
</ul>
<p className="text-muted-foreground mb-4">Legal notice for divorce proceedings in India.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Maintenance Claim</li>
</ul>
<p className="text-muted-foreground mb-4">Claim maintenance for wife, children, or parents.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Child Custody</li>
</ul>
<p className="text-muted-foreground mb-4">Legal notice for child custody matters.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Domestic Violence</li>
</ul>
<p className="text-muted-foreground mb-4">Protection from domestic violence.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Money Recovery</li>
</ul>
<p className="text-muted-foreground mb-4">Recover unpaid dues, loans, or business payments legally.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Cheque Bounce</li>
</ul>
<p className="text-muted-foreground mb-4">Legal action under Section 138 for dishonoured cheques.</p>
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
<p className="text-muted-foreground mb-4">Everything you need to know about legal notice for cruelty or desertion</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>How do I prove mental cruelty?</li>
<li>Is this notice the same as filing a 498A case?</li>
<li>Do I have to wait 2 years to send a desertion notice?</li>
<li>I left home because he beat me. Can he claim I deserted him?</li>
<li>Can I demand return of dowry/gifts in this notice?</li>
<li>Can I send notice to my in-laws too?</li>
<li>Will sending a notice provoke him to file a false case?</li>
<li>What is the cost of a Cruelty/Desertion notice?</li>
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
