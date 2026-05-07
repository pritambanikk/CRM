import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { TrustSignalsSection } from "@/components/features/homepage/trust-signals";
import { FAQSection } from "@/components/shared/faq-section";
import Link from 'next/link';
import ClientFormTrigger from "@/app/send-legal-notice/legal-notice-for-money-recovery/client-form-trigger";

export const metadata: Metadata = {
  title: "Legal Notice to Tenant for Eviction | Draft & Send in 24 Hrs",
  description: "Tenant not vacating or paying rent? Send a strong legal notice for eviction to tenant under Rent Control Act. Professional drafting by expert lawyers. Starts ₹1499.",
  keywords: ["legal notice to tenant","tenant eviction notice","eviction notice format","notification to tenant to vacate","lease termination notice","landlord legal notice format","eviction notice to tenant sample india","legal notice for rental property"],
  alternates: {
    canonical: "https://vakiltech.in/send-legal-notice/legal-notice-to-tenant",
  },
};

export default function GeneratedServicePage() {
const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Legal Notice to Tenant for Eviction", current: true },
  ];

  const faqs: any[] = [
  {
    "question": "Can I evict a tenant without a rental agreement?",
    "answer": "Yes, you can. Even without a written agreement, a tenancy is presumed to be month-to-month under the Transfer of Property Act. You can terminate this oral tenancy by sending a valid legal notice giving 15 days' time to vacate. If they refuse, you can file an eviction suit based on the termination of oral tenancy."
  },
  {
    "question": "Can police help me evict a tenant?",
    "answer": "Generally, no. The police treat tenancy disputes as civil matters and will ask you to go to court. They will only intervene if there is a law and order situation (e.g., violence). You cannot use police influence to forcibly throw out a tenant; that is illegal. However, once you have a court order for eviction, police assistance can be officially requested to execute it."
  },
  {
    "question": "Tenant is not paying rent and not vacating. What to do?",
    "answer": "You should immediately send a legal notice demanding the unpaid rent and asking them to vacate. Under many Rent Control Acts, if a tenant pays the arrears within the notice period (usually 2 months), they cannot be evicted for that default. If they don't pay or vacate, this notice becomes the foundation for your eviction suit."
  },
  {
    "question": "How long does the eviction process take?",
    "answer": "The first step—sending a legal notice—takes only 24-48 hours. The notice period given to the tenant is usually 15-30 days. If they vacate, it's over. If you must go to court, it can take 1-3 years depending on the case backlog and whether the tenant contests it. However, Summary Proceedings (faster track) are available in some states for specific grounds like bonafide requirement."
  },
  {
    "question": "How much does it cost to send a legal notice to a tenant?",
    "answer": "At VakilTalk, we draft and send a professional Legal Notice to Tenant starting at ₹1,499. This includes drafting by an experienced property lawyer, review, and dispatch via Registered Post AD. This small investment often saves you lakhs in potential litigation fees by resolving the matter early."
  },
  {
    "question": "Can I lock the property to stop the tenant from entering?",
    "answer": "No, absolutely not. Locking out a tenant, cutting off electricity/water, or throwing their goods out is illegal in India. The tenant can file a police complaint against you for wrongful restraint and even get a court order to restore their possession. Always follow the due process of law."
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
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Can I evict a tenant without a rental agreement?","acceptedAnswer":{"@type":"Answer","text":"Yes, you can. Even without a written agreement, a tenancy is presumed to be month-to-month under the Transfer of Property Act. You can terminate this oral tenancy by sending a valid legal notice giving 15 days' time to vacate. If they refuse, you can file an eviction suit based on the termination of oral tenancy."}},{"@type":"Question","name":"Can police help me evict a tenant?","acceptedAnswer":{"@type":"Answer","text":"Generally, no. The police treat tenancy disputes as civil matters and will ask you to go to court. They will only intervene if there is a law and order situation (e.g., violence). You cannot use police influence to forcibly throw out a tenant; that is illegal. However, once you have a court order for eviction, police assistance can be officially requested to execute it."}},{"@type":"Question","name":"Tenant is not paying rent and not vacating. What to do?","acceptedAnswer":{"@type":"Answer","text":"You should immediately send a legal notice demanding the unpaid rent and asking them to vacate. Under many Rent Control Acts, if a tenant pays the arrears within the notice period (usually 2 months), they cannot be evicted for that default. If they don't pay or vacate, this notice becomes the foundation for your eviction suit."}},{"@type":"Question","name":"How long does the eviction process take?","acceptedAnswer":{"@type":"Answer","text":"The first step—sending a legal notice—takes only 24-48 hours. The notice period given to the tenant is usually 15-30 days. If they vacate, it's over. If you must go to court, it can take 1-3 years depending on the case backlog and whether the tenant contests it. However, Summary Proceedings (faster track) are available in some states for specific grounds like bonafide requirement."}},{"@type":"Question","name":"How much does it cost to send a legal notice to a tenant?","acceptedAnswer":{"@type":"Answer","text":"At VakilTalk, we draft and send a professional Legal Notice to Tenant starting at ₹1,499. This includes drafting by an experienced property lawyer, review, and dispatch via Registered Post AD. This small investment often saves you lakhs in potential litigation fees by resolving the matter early."}},{"@type":"Question","name":"Can I lock the property to stop the tenant from entering?","acceptedAnswer":{"@type":"Answer","text":"No, absolutely not. Locking out a tenant, cutting off electricity/water, or throwing their goods out is illegal in India. The tenant can file a police complaint against you for wrongful restraint and even get a court order to restore their possession. Always follow the due process of law."}}]}` }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"LegalService","telephone":"+91-70476 83995","image":"https://vakiltech.in/vt-logo.png","address":{"@type":"PostalAddress","addressCountry":"IN"},"priceRange":"\u20b91,499+","name":"vakiltech - Legal Notice to Tenant","description":"Tenant not vacating or paying rent? Send a strong legal notice for eviction to tenant under Rent Control Act. Professional drafting by expert lawyers. Starts ₹1499.","url":"https://vakiltech.in/send-legal-notice/legal-notice-to-tenant","areaServed":{"@type":"Country","name":"India"},"provider":{"@type":"Organization","name":"vakiltech","url":"https://vakiltech.in","logo":"https://vakiltech.in/logo.png","contactPoint":{"@type":"ContactPoint","telephone":"+91-70476 83995","contactType":"Customer Service","availableLanguage":["English","Hindi"]}},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"500"},"offers":{"@type":"Offer","price":"1499","priceCurrency":"INR","availability":"https://schema.org/InStock"}}` }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"WebPage","name":"Legal Notice to Tenant for Eviction | Draft & Send in 24 Hrs","description":"Tenant not vacating or paying rent? Send a strong legal notice for eviction to tenant under Rent Control Act. Professional drafting by expert lawyers. Starts ₹1499.","url":"https://vakiltech.in/send-legal-notice/legal-notice-to-tenant","speakable":{"@type":"SpeakableSpecification","cssSelector":["h1","h2",".prose"]},"mainEntity":{"@type":"Service","name":"Legal Notice to Tenant","description":"Dealing with a difficult tenant can be stressful. Whether they are defaulting on rent, refusing to vacate after the lease expires, or damaging your property, sending a **Legal Notice to Tenant** is the mandatory first step to initiate eviction proceedings. In India, you cannot forcibly evict a tenant without following due process. A well-drafted legal notice, citing the specific grounds under the *Transfer of Property Act, 1882* or your state's *Rent Control Act*, formally warns the tenant of legal action and often resolves the issue without going to court.","provider":{"@type":"Organization","name":"vakiltech"}}}` }}
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
                    Legal Notice to Tenant for Eviction
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Tenant not vacating or paying rent? Send a strong legal notice for eviction to tenant under Rent Control Act. Professional drafting by expert lawyers. Starts ₹1499.
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
<h2 className="text-2xl font-bold text-foreground mb-4">When Can You Send an Eviction Notice?</h2>
<p className="text-muted-foreground mb-4">A landlord cannot evict a tenant arbitrarily. You must have valid legal grounds. Common reasons to send a legal notice to a tenant include: * **Non-Payment of Rent:** If the tenant has not paid rent for more than 15 days or as stipulated in the agreement. * **Expiry of Lease Agreement:** If the rental agreement has expired and the tenant refuses to renew or vacate. * **Breach of Contract:** Violation of terms like unauthorized subletting, keeping pets (if prohibited), or commercial use of residential property. * **Property Damage:** Causing structural damage or major alterations without permission. * **Personal Requirement:** The landlord genuinely needs the property for their own occupation (Bona Fide requirement). * **Nuisance:** Creating a nuisance for neighbors or conducting illegal activities on the premises.</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Essential Elements of a Valid Tenant Notice</h2>
<p className="text-muted-foreground mb-4">To be legally valid and effective in court, your eviction notice must contain specific details: 1. **Clear Description:** Full address and description of the tenanted property. 2. **Tenancy Details:** Start date, current rent, and lease expiry date. 3. **Grounds for Eviction:** Clearly state *why* you are asking them to leave (e.g., Section 106 of Transfer of Property Act). 4. **Demand:** Specific demand to vacate and hand over peaceful possession. 5. **Notice Period:** A reasonable time to vacate (typically 15 to 30 days, depending on the law and agreement). 6. **Consequences:** Warning of civil suit and claim for damages/mesne profits if they fail to comply.</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Procedure to Evict a Tenant in India</h2>
<p className="text-muted-foreground mb-4">The legal process for eviction safeguards both landlord and tenant rights: 1. **Draft the Notice:** A lawyer drafts the notice citing relevant laws (Rent Control Act or TPA). 2. **Send via Registered Post:** It must be sent via Registered Post AD to prove delivery. 3. **Wait for Response:** The tenant is given time (e.g., 15-30 days) to reply or vacate. 4. **File an Eviction Suit:** If they refuse to leave, you file an eviction petition in the Rent Control Court or Civil Court. 5. **Court Order:** The court hears both sides and issues an eviction order if your grounds are valid. 6. **Execution:** If they still stay, police assistance can be sought to enforce the court order.</p>
<p className="text-muted-foreground mb-4">Don't take the law into your own hands. Start the legal eviction process correctly today.</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">How Mr. Sharma reclaimed his flat in30 Days</h2>
<p className="text-muted-foreground mb-4">Mr. Sharma's tenant in Pune stopped paying rent and refused to leave after the agreement expired. Worried about property grabbing, he contacted VakilTalk. We drafted a strong legal notice citing the Maharashtra Rent Control Act and the expiry of the license period. The tenant, realizing the legal seriousness and potential liability for 'mesne profits' (market rate damages), vacated the property within the 30-day notice period without a court battle.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Strong Legal Grounds</li>
</ul>
<p className="text-muted-foreground mb-4">Cited specific sections of Rent Control Act to establish illegal possession.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>30-Day Resolution</li>
</ul>
<p className="text-muted-foreground mb-4">Tenant vacated voluntarily to avoid litigation costs and damages.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Recovered Pending Rent</li>
</ul>
<p className="text-muted-foreground mb-4">Notice included a demand for all rent arrears, which were paid upon vacating.</p>
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
<p className="text-muted-foreground mb-4">Most property disputes are best settled out of court to save decades of time. Draft a Family Settlement Deed or Vacation Agreement.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Authority</li>
</ul>
<p className="text-muted-foreground mb-4">If it's a builder issue, file a complaint with RERA (Real Estate Regulatory Authority).</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>File Case</li>
</ul>
<p className="text-muted-foreground mb-4">1. Eviction Suit: Under Rent Control Act (for tenants). 2. Suit for Partition: For family property. 3. Suit for Declaration &amp; Possession: If someone has illegally encroached.</p>
<p className="text-muted-foreground mb-4">File a written complaint to the Municipal Corporation if there is illegal construction.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Need Expert Guidance?</li>
</ul>
<p className="text-muted-foreground mb-4">Not sure if this is the right notice for your situation? Talk to a lawyer for personalized advice before proceeding.</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Laws Governing TenantEviction</h2>
<p className="text-muted-foreground mb-4">Eviction laws in India are tenant-friendly, making procedural compliance critical for landlords.</p>
<p className="text-muted-foreground mb-4">EXPERT INSIGHT</p>
<p className="text-muted-foreground mb-4">Sending a defective notice is the #1 reason eviction suits get dismissed. Always ensure your notice lists the correct legal grounds.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>📜Transfer of Property Act, 1882</li>
<li>🏛️State Rent Control Acts</li>
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
<h2 className="text-2xl font-bold text-foreground mb-4">See a Real Legal Notice to Tenant Format</h2>
<p className="text-muted-foreground mb-4">Preview a professionally drafted legal notice to tenant.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Sample Legal Notice — Legal Notice to Tenant</li>
<li>Legally valid format used by 10,000+ lawyers.</li>
</ul>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Get Your Legal Notice to Tenant Drafted</h2>
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
<li>Rent Arrears</li>
</ul>
<p className="text-muted-foreground mb-4">Recover unpaid rent from tenant.</p>
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
<p className="text-muted-foreground mb-4">Everything you need to know about legal notice to tenant</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Can I evict a tenant without a rental agreement?</li>
<li>Can police help me evict a tenant?</li>
<li>Tenant is not paying rent and not vacating. What to do?</li>
<li>How long does the eviction process take?</li>
<li>How much does it cost to send a legal notice to a tenant?</li>
<li>Can I lock the property to stop the tenant from entering?</li>
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
