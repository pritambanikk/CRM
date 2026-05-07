import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { TrustSignalsSection } from "@/components/features/homepage/trust-signals";
import { FAQSection } from "@/components/shared/faq-section";
import Link from 'next/link';
import ClientFormTrigger from "@/app/send-legal-notice/legal-notice-for-money-recovery/client-form-trigger";

export const metadata: Metadata = {
  title: "Eviction Notice to Tenant India | Legal Process to Vacate",
  description: "Need to evict a tenant? Send a strict Eviction Notice. 100% legal compliance with Rent Control Act. Get tenant to vacate peacefully. Starts ₹1499.",
  keywords: ["eviction legal notice","tenant eviction notice format","eviction notice","legal notice for eviction of tenant","notice to vacate house by landlord","15 days notice to vacate","eviction letter from landlord to tenant","grounds for eviction in india"],
  alternates: {
    canonical: "https://vakiltech.in/send-legal-notice/eviction-legal-notice",
  },
};

export default function GeneratedServicePage() {
const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Eviction Notice to Tenant India", current: true },
  ];

  const faqs: any[] = [
  {
    "question": "Is it harder to evict a senior citizen tenant?",
    "answer": "Legally, the grounds for eviction remain the same (non-payment, bona fide need, etc.) regardless of age. However, courts may be sympathetic to senior citizens regarding valid 'alternative accommodation.' Conversely, many states have 'Senior Citizen' acts that speed up eviction *if the landlord* is a senior citizen needing their property back."
  },
  {
    "question": "Tenant locked the house and disappeared. Can I break the lock?",
    "answer": "No. Even if they are gone, breaking the lock is illegal. You must file a suit and get a court order for 'Inspection' or appointment of a 'Court Commissioner' to break the lock in official presence. This protects you from future claims that 'valuables were stolen' by you."
  },
  {
    "question": "Is commercial eviction different from residential?",
    "answer": "Yes but the process is similar. Grounds like bona fide need apply to both (in most states). However, for commercial eviction, courts may scrutinize the 'hardship' caused to the tenant's business more closely. Contracts for commercial leases often have stricter termination clauses."
  },
  {
    "question": "Is the 15-day notice mandatory?",
    "answer": "Yes, under Section 106 of the Transfer of Property Act, a 15-day notice ending with the tenancy month is the standard requirement for month-to-month tenancies (unless a contract says otherwise). In Rent Control areas, this might be 1-3 months. Failure to give the exact notice period makes the entire eviction suit void."
  },
  {
    "question": "Tenant is filing false police complaints. What to do?",
    "answer": "Tenants often file false harassment complaints to counter eviction. Anticipate this. Communicate only in writing/email. Install CCTV in common areas. File a 'Caveat Petition' in court so that if they seek an injunction against you, the court hears you first. Mention their behavior in your legal notice."
  },
  {
    "question": "Can I sell a property that has a tenant?",
    "answer": "Yes, you can sell 'tenanted property.' The tenancy transfers to the new owner (Attornment of Tenancy). The new owner becomes the landlord and can then send an eviction notice for their own bona fide requirement. However, properties with sitting tenants usually sell for a lower price."
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
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Is it harder to evict a senior citizen tenant?","acceptedAnswer":{"@type":"Answer","text":"Legally, the grounds for eviction remain the same (non-payment, bona fide need, etc.) regardless of age. However, courts may be sympathetic to senior citizens regarding valid 'alternative accommodation.' Conversely, many states have 'Senior Citizen' acts that speed up eviction *if the landlord* is a senior citizen needing their property back."}},{"@type":"Question","name":"Tenant locked the house and disappeared. Can I break the lock?","acceptedAnswer":{"@type":"Answer","text":"No. Even if they are gone, breaking the lock is illegal. You must file a suit and get a court order for 'Inspection' or appointment of a 'Court Commissioner' to break the lock in official presence. This protects you from future claims that 'valuables were stolen' by you."}},{"@type":"Question","name":"Is commercial eviction different from residential?","acceptedAnswer":{"@type":"Answer","text":"Yes but the process is similar. Grounds like bona fide need apply to both (in most states). However, for commercial eviction, courts may scrutinize the 'hardship' caused to the tenant's business more closely. Contracts for commercial leases often have stricter termination clauses."}},{"@type":"Question","name":"Is the 15-day notice mandatory?","acceptedAnswer":{"@type":"Answer","text":"Yes, under Section 106 of the Transfer of Property Act, a 15-day notice ending with the tenancy month is the standard requirement for month-to-month tenancies (unless a contract says otherwise). In Rent Control areas, this might be 1-3 months. Failure to give the exact notice period makes the entire eviction suit void."}},{"@type":"Question","name":"Tenant is filing false police complaints. What to do?","acceptedAnswer":{"@type":"Answer","text":"Tenants often file false harassment complaints to counter eviction. Anticipate this. Communicate only in writing/email. Install CCTV in common areas. File a 'Caveat Petition' in court so that if they seek an injunction against you, the court hears you first. Mention their behavior in your legal notice."}},{"@type":"Question","name":"Can I sell a property that has a tenant?","acceptedAnswer":{"@type":"Answer","text":"Yes, you can sell 'tenanted property.' The tenancy transfers to the new owner (Attornment of Tenancy). The new owner becomes the landlord and can then send an eviction notice for their own bona fide requirement. However, properties with sitting tenants usually sell for a lower price."}}]}` }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"LegalService","telephone":"+91-70476 83995","image":"https://vakiltech.in/vt-logo.png","address":{"@type":"PostalAddress","addressCountry":"IN"},"priceRange":"\u20b91,499+","name":"vakiltech - Eviction Notice","description":"Need to evict a tenant? Send a strict Eviction Notice. 100% legal compliance with Rent Control Act. Get tenant to vacate peacefully. Starts ₹1499.","url":"https://vakiltech.in/send-legal-notice/eviction-notice","areaServed":{"@type":"Country","name":"India"},"provider":{"@type":"Organization","name":"vakiltech","url":"https://vakiltech.in","logo":"https://vakiltech.in/logo.png","contactPoint":{"@type":"ContactPoint","telephone":"+91-70476 83995","contactType":"Customer Service","availableLanguage":["English","Hindi"]}},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"500"},"offers":{"@type":"Offer","price":"1499","priceCurrency":"INR","availability":"https://schema.org/InStock"}}` }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"WebPage","name":"Eviction Notice to Tenant India | Legal Process to Vacate","description":"Need to evict a tenant? Send a strict Eviction Notice. 100% legal compliance with Rent Control Act. Get tenant to vacate peacefully. Starts ₹1499.","url":"https://vakiltech.in/send-legal-notice/eviction-notice","speakable":{"@type":"SpeakableSpecification","cssSelector":["h1","h2",".prose"]},"mainEntity":{"@type":"Service","name":"Eviction Notice","description":"Evicting a tenant is a legal process, not a physical act. You cannot simply throw a tenant out. To regain possession of your property, you must first serve a formal **Eviction Notice** terminating the tenancy and strictly complying with the Rent Control Act applicable in your state. A flawed notice is the most common reason for eviction suits to fail in court.","provider":{"@type":"Organization","name":"vakiltech"}}}` }}
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
                    Eviction Notice to Tenant India
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Need to evict a tenant? Send a strict Eviction Notice. 100% legal compliance with Rent Control Act. Get tenant to vacate peacefully. Starts ₹1499.
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
<h2 className="text-2xl font-bold text-foreground mb-4">Valid Grounds for Eviction Under Rent Control Acts</h2>
<p className="text-muted-foreground mb-4">While grounds vary by state (e.g., Delhi vs. Maharashtra), common valid reasons for eviction include: * **Bona Fide Requirement:** You honestly need the property for yourself or your family members. * **Subletting:** Tenant has sublet the property without your written consent. * **Non-Use:** Tenant has not resided in the property for a continuous period (e.g., 6 months). * **Acquisition of Alternate Property:** Tenant has bought or built their own residence in the same city. * **Material Alterations:** Tenant made structural changes without permission. * **Nuisance &amp; Illegal Use:** Using residential property for commercial purposes or illegal activities.</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Termination of Tenancy vs. Eviction</h2>
<p className="text-muted-foreground mb-4">It's crucial to understand the difference: * **Termination of Tenancy:** This is the act of ending the lease agreement (e.g., by sending a Section 106 notice under Transfer of Property Act). * **Eviction:** This is the process of recovering physical possession *after* the tenancy has been terminated. * **The Rule:** You cannot file for eviction unless you have first validly terminated the tenancy through a legal notice.</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Steps to File an Eviction Suit</h2>
<p className="text-muted-foreground mb-4">If the tenant ignores your notice: 1. **File Petition:** Submit an eviction petition in the Rent Control Court / Civil Court. 2. **Summons:** Court sends summons to the tenant. 3. **Written Statement:** Tenant files their defense. 4. **Evidence:** Both parties prove their claims (rent receipts, agreement, photos). 5. **Arguments &amp; Judgment:** Court passes an eviction decree. 6. **Execution:** If tenant still refuses, court bailiff helps take possession.</p>
<p className="text-muted-foreground mb-4">Avoid the long court battle. A strong notice usually convinces tenants to leave voluntarily.</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">How Kavita reclaimed her home forSelf-Use</h2>
<p className="text-muted-foreground mb-4">Kavita needed her rented apartment in Delhi for her son's marriage. Her tenant of 5 years refused to move. VakilTalk drafted a precise notice citing 'Bona Fide Requirement' under the Delhi Rent Control Act, detailing her son's upcoming wedding and lack of other accommodation. The tenant, advised by his own lawyer that Kavita's ground was legally undeniable, agreed to vacate within 3 months amicably.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Bona Fide Proven</li>
</ul>
<p className="text-muted-foreground mb-4">Notice established genuine personal need, a strong ground for eviction.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>No Litigation</li>
</ul>
<p className="text-muted-foreground mb-4">Matter resolved through notice negotiation, saving 2+ years of court time.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Smooth Handover</li>
</ul>
<p className="text-muted-foreground mb-4">Tenant handed over keys peacefully on the agreed date.</p>
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
<li>Vacation</li>
</ul>
<p className="text-muted-foreground mb-4">The tenant agrees to vacate. Ensure you check utility bills and condition before taking keys.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Time Extension</li>
</ul>
<p className="text-muted-foreground mb-4">They might ask for 1-2 months more. If agreed, sign a 'Vacation Undertaking' to ensure they leave.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>File Case</li>
</ul>
<p className="text-muted-foreground mb-4">File an Eviction Suit in the Rent Control Court / Civil Court.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Tip</li>
</ul>
<p className="text-muted-foreground mb-4">Do not cut electricity or water. It's illegal and weakens your case.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Need Expert Guidance?</li>
</ul>
<p className="text-muted-foreground mb-4">Not sure if this is the right notice for your situation? Talk to a lawyer for personalized advice before proceeding.</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Rent ControlActs</h2>
<p className="text-muted-foreground mb-4">Every state has its own Rent Control Act (e.g., MRCA 1999, DRCA 1958) which overrides general contract terms.</p>
<p className="text-muted-foreground mb-4">EXPERT INSIGHT</p>
<p className="text-muted-foreground mb-4">Drafting an eviction notice requires knowing specifically which State Act applies. Using a generic template often leads to invalid notices.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>🏛️Maharashtra Rent Control Act, 1999</li>
<li>🏛️Delhi Rent Control Act, 1958</li>
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
<h2 className="text-2xl font-bold text-foreground mb-4">See a Real Eviction Notice Format</h2>
<p className="text-muted-foreground mb-4">Preview a professionally drafted eviction notice.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Sample Legal Notice — Eviction Notice</li>
<li>Legally valid format used by 10,000+ lawyers.</li>
</ul>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Get Your Eviction Notice Drafted</h2>
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
<p className="text-muted-foreground mb-4">Everything you need to know about eviction notice</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Is it harder to evict a senior citizen tenant?</li>
<li>Tenant locked the house and disappeared. Can I break the lock?</li>
<li>Is commercial eviction different from residential?</li>
<li>Is the 15-day notice mandatory?</li>
<li>Tenant is filing false police complaints. What to do?</li>
<li>Can I sell a property that has a tenant?</li>
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
