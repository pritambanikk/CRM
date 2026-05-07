import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { TrustSignalsSection } from "@/components/features/homepage/trust-signals";
import { FAQSection } from "@/components/shared/faq-section";
import Link from 'next/link';
import ClientFormTrigger from "@/app/send-legal-notice/legal-notice-for-money-recovery/client-form-trigger";

export const metadata: Metadata = {
  title: "Maintenance/Alimony Legal Notice – Expert Drafting in 24 Hours",
  description: "Seeking maintenance? Legal notice for spousal & child support under Section 125 CrPC. Expert drafted. ₹1,499 | Protection guaranteed. Start today.",
  keywords: ["legal notice for maintenance","maintenance claim section 125 crpc","wife maintenance notice format","child support legal notice","alimony notice india","maintenance for parents notice"],
  alternates: {
    canonical: "https://vakiltech.in/send-legal-notice/maintenance-legal-notice",
  },
};

export default function GeneratedServicePage() {
const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Maintenance/Alimony Legal Notice – Expert Drafting in 24 Hours", current: true },
  ];

  const faqs: any[] = [
  {
    "question": "Can a working wife claim maintenance?",
    "answer": "Yes, absolutely. The Supreme Court has ruled that a wife is entitled to the same standard of living she enjoyed in her matrimonial home. If her earnings are not sufficient to maintain that lifestyle, the husband must make up the deficit. Earning money does not disqualify a wife from claiming maintenance."
  },
  {
    "question": "Can my husband avoid paying by saying he is unemployed?",
    "answer": "No. Courts have held that an able-bodied man has a legal and moral duty to support his wife and children. He cannot hide behind unemployment (unless due to severe disability). The court can assume a 'notional income' based on his qualifications and order him to pay."
  },
  {
    "question": "What is Interim Maintenance?",
    "answer": "Since court cases can take time, you can ask for 'Interim Maintenance' immediately after filing the petition. This is a temporary monthly amount paid by the husband while the case is pending ensuring you don't suffer financially during the legal battle. Most notices demand this explicitly."
  },
  {
    "question": "How much percentage of salary is usually given as maintenance?",
    "answer": "While there is no fixed percentage in law, the Supreme Court has observed in recent judgments that a figure of 25% of the husband's net salary is a 'just and proper' amount for maintenance to the wife. This can vary based on specific circumstances and number of dependents."
  },
  {
    "question": "How long does it take to get maintenance after sending notice?",
    "answer": "The notice gives a period of 15 days to comply. If the husband agrees, payments can start immediately. If he refuses and you file a case under Sec 125, you can get an order for Interim Maintenance within 2-4 months of filing, depending on the court's schedule."
  },
  {
    "question": "Until what age can children claim maintenance?",
    "answer": "Sons can claim maintenance until they attain majority (18 years). In some cases, until they finish basic education. Daughters are entitled to maintenance until they get married. Children with physical or mental disabilities can claim maintenance for life if they cannot support themselves."
  },
  {
    "question": "If I remarry, does the maintenance stop?",
    "answer": "Yes, maintenance to a wife usually stops upon her remarriage. However, the maintenance for the child continues regardless of the mother's remarriage, as the father is still obligated to support his child."
  },
  {
    "question": "On what grounds can maintenance be denied to a wife?",
    "answer": "Maintenance can be denied if: (1) The wife is living in adultery, (2) She refuses to live with her husband without any sufficient reason, or (3) The couple is living separately by mutual consent (unless the agreement specifies maintenance)."
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
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Can a working wife claim maintenance?","acceptedAnswer":{"@type":"Answer","text":"Yes, absolutely. The Supreme Court has ruled that a wife is entitled to the same standard of living she enjoyed in her matrimonial home. If her earnings are not sufficient to maintain that lifestyle, the husband must make up the deficit. Earning money does not disqualify a wife from claiming maintenance."}},{"@type":"Question","name":"Can my husband avoid paying by saying he is unemployed?","acceptedAnswer":{"@type":"Answer","text":"No. Courts have held that an able-bodied man has a legal and moral duty to support his wife and children. He cannot hide behind unemployment (unless due to severe disability). The court can assume a 'notional income' based on his qualifications and order him to pay."}},{"@type":"Question","name":"What is Interim Maintenance?","acceptedAnswer":{"@type":"Answer","text":"Since court cases can take time, you can ask for 'Interim Maintenance' immediately after filing the petition. This is a temporary monthly amount paid by the husband while the case is pending ensuring you don't suffer financially during the legal battle. Most notices demand this explicitly."}},{"@type":"Question","name":"How much percentage of salary is usually given as maintenance?","acceptedAnswer":{"@type":"Answer","text":"While there is no fixed percentage in law, the Supreme Court has observed in recent judgments that a figure of 25% of the husband's net salary is a 'just and proper' amount for maintenance to the wife. This can vary based on specific circumstances and number of dependents."}},{"@type":"Question","name":"How long does it take to get maintenance after sending notice?","acceptedAnswer":{"@type":"Answer","text":"The notice gives a period of 15 days to comply. If the husband agrees, payments can start immediately. If he refuses and you file a case under Sec 125, you can get an order for Interim Maintenance within 2-4 months of filing, depending on the court's schedule."}},{"@type":"Question","name":"Until what age can children claim maintenance?","acceptedAnswer":{"@type":"Answer","text":"Sons can claim maintenance until they attain majority (18 years). In some cases, until they finish basic education. Daughters are entitled to maintenance until they get married. Children with physical or mental disabilities can claim maintenance for life if they cannot support themselves."}},{"@type":"Question","name":"If I remarry, does the maintenance stop?","acceptedAnswer":{"@type":"Answer","text":"Yes, maintenance to a wife usually stops upon her remarriage. However, the maintenance for the child continues regardless of the mother's remarriage, as the father is still obligated to support his child."}},{"@type":"Question","name":"On what grounds can maintenance be denied to a wife?","acceptedAnswer":{"@type":"Answer","text":"Maintenance can be denied if: (1) The wife is living in adultery, (2) She refuses to live with her husband without any sufficient reason, or (3) The couple is living separately by mutual consent (unless the agreement specifies maintenance)."}}]}` }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"LegalService","telephone":"+91-70476 83995","image":"https://vakiltech.in/vt-logo.png","address":{"@type":"PostalAddress","addressCountry":"IN"},"priceRange":"\u20b91,499+","name":"vakiltech - Legal Notice for Maintenance","description":"Seeking maintenance? Legal notice for spousal & child support under Section 125 CrPC. Expert drafted. ₹1,499 | Protection guaranteed. Start today.","url":"https://vakiltech.in/send-legal-notice/legal-notice-for-maintenance","areaServed":{"@type":"Country","name":"India"},"provider":{"@type":"Organization","name":"vakiltech","url":"https://vakiltech.in","logo":"https://vakiltech.in/logo.png","contactPoint":{"@type":"ContactPoint","telephone":"+91-70476 83995","contactType":"Customer Service","availableLanguage":["English","Hindi"]}},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"500"},"offers":{"@type":"Offer","price":"1499","priceCurrency":"INR","availability":"https://schema.org/InStock"}}` }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"WebPage","name":"Maintenance/Alimony Legal Notice – Expert Drafting in 24 Hours","description":"Seeking maintenance? Legal notice for spousal & child support under Section 125 CrPC. Expert drafted. ₹1,499 | Protection guaranteed. Start today.","url":"https://vakiltech.in/send-legal-notice/legal-notice-for-maintenance","speakable":{"@type":"SpeakableSpecification","cssSelector":["h1","h2",".prose"]},"mainEntity":{"@type":"Service","name":"Legal Notice for Maintenance","description":"Seeking Maintenance? Get a Legal Notice Drafted & Sent by Experts. A legal notice for maintenance is a formal demand for financial support sent to a person who is legally bound to support their dependents but has refused or neglected to do so. Under Indian law (specifically Section 125 of the Code of Criminal Procedure), wives, children (legitimate or illegitimate), and aging parents have a strong legal right to claim maintenance. Sending a legal notice is often the first and most effective step to secure these rights without immediately stepping into a courtroom.","provider":{"@type":"Organization","name":"vakiltech"}}}` }}
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
                    Maintenance/Alimony Legal Notice – Expert Drafting in 24 Hours
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Seeking maintenance? Legal notice for spousal & child support under Section 125 CrPC. Expert drafted. ₹1,499 | Protection guaranteed. Start today.
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
<h2 className="text-2xl font-bold text-foreground mb-4">Who Can Claim Maintenance?</h2>
<p className="text-muted-foreground mb-4">Our laws provide robust protection for dependents who are unable to maintain themselves. The following categories can claim support:</p>
<p className="text-muted-foreground mb-4">Wife: A wife unable to maintain herself can claim maintenance from her husband, even if living separately due to valid reasons.</p>
<p className="text-muted-foreground mb-4">Children: Minor children (legitimate or illegitimate) are entitled to maintenance. Daughters (until marriage) and disabled children (lifetime) can also claim.</p>
<p className="text-muted-foreground mb-4">Parents: Elderly or infirm parents who cannot support themselves can claim maintenance from their adult children.</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Why Start with a Legal Notice?</h2>
<p className="text-muted-foreground mb-4">Before jumping into a long court battle, a legal notice often yields faster results:</p>
<p className="text-muted-foreground mb-4">Immediate Pressure: A formal legal notice signals serious intent and often prompts the defaulter to start paying.</p>
<p className="text-muted-foreground mb-4">Proof of Neglect: If the matter goes to court, the notice serves as documentary evidence that you demanded support and were refused.</p>
<p className="text-muted-foreground mb-4">Cost-Effective: It is far cheaper and faster than a full-blown court case, with many disputes settling at this stage.</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Key Legal Provisions</h2>
<p className="text-muted-foreground mb-4">Maintenance can be claimed under various acts depending on your situation:</p>
<p className="text-muted-foreground mb-4">Section 125 CrPC: The primary secular law providing a quick remedy for wives, children, and parents of all religions.</p>
<p className="text-muted-foreground mb-4">Hindu Adoptions and Maintenance Act, 1956: Section 18 for Hindu wives, and Section 20 for children and aged parents.</p>
<p className="text-muted-foreground mb-4">Domestic Violence Act, 2005: Empowers courts to grant monetary relief to meet expenses and compensates for losses.</p>
<p className="text-muted-foreground mb-4">Stop requesting and start claiming. Your financial dignity is protected by law.</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Secured Monthly Support of₹45,000</h2>
<p className="text-muted-foreground mb-4">Meera (name changed) was abandoned by her husband with a 4-year-old child. He stopped sending money, claiming he had 'no savings'. Desperate, she contacted vakiltech. We drafted a stern legal notice under Section 125 CrPC, detailing his lifestyle and actual income sources. Fearing a court summons and potential wage garnishment, he agreed to a settlement within 20 days. Meera now receives ₹45,000/month regularly without ever stepping into a court.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Evidence Based</li>
</ul>
<p className="text-muted-foreground mb-4">The notice cited specific details of his income, making it hard for him to plead poverty.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Child's Future Secured</li>
</ul>
<p className="text-muted-foreground mb-4">The amount covered school fees and medical expenses for the child separately.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Fast Resolution</li>
</ul>
<p className="text-muted-foreground mb-4">Matter resolved in &lt;3 weeks via notice, avoiding the 1-2 year court timeline.</p>
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
<li>Settlement</li>
</ul>
<p className="text-muted-foreground mb-4">If they agree to pay, sign a formal Maintenance Agreement to avoid court.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>One-Time Settlement</li>
</ul>
<p className="text-muted-foreground mb-4">Sometimes a lump-sum amount (Permanent Alimony) is better than monthly payments.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>File Case</li>
</ul>
<p className="text-muted-foreground mb-4">File a Maintenance Petition under Section 125 CrPC (fastest remedy).</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Interim Relief</li>
</ul>
<p className="text-muted-foreground mb-4">Ask the court for 'Interim Maintenance' to get financial support immediately while the case runs.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Need Expert Guidance?</li>
</ul>
<p className="text-muted-foreground mb-4">Not sure if this is the right notice for your situation? Talk to a lawyer for personalized advice before proceeding.</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Maintenance Laws inIndia</h2>
<p className="text-muted-foreground mb-4">Indian law is very protective of dependents. Courts look at the standard of living you were used to, not just basic survival needs.</p>
<p className="text-muted-foreground mb-4">EXPERT INSIGHT</p>
<p className="text-muted-foreground mb-4">Even if a wife is working, she can claim maintenance if her income is insufficient to maintain the standard of living she enjoyed in her matrimonial home.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>₹How is Maintenance Calculated?</li>
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
<h2 className="text-2xl font-bold text-foreground mb-4">See a Real Legal Notice for Maintenance Format</h2>
<p className="text-muted-foreground mb-4">Preview a professionally drafted legal notice for maintenance.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Sample Legal Notice — Legal Notice for Maintenance</li>
<li>Legally valid format used by 10,000+ lawyers.</li>
</ul>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Get Your Legal Notice for Maintenance Drafted</h2>
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
<li>Cruelty or Desertion</li>
</ul>
<p className="text-muted-foreground mb-4">Legal action for matrimonial cruelty or desertion.</p>
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
<p className="text-muted-foreground mb-4">Everything you need to know about legal notice for maintenance</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Can a working wife claim maintenance?</li>
<li>Can my husband avoid paying by saying he is unemployed?</li>
<li>What is Interim Maintenance?</li>
<li>How much percentage of salary is usually given as maintenance?</li>
<li>How long does it take to get maintenance after sending notice?</li>
<li>Until what age can children claim maintenance?</li>
<li>If I remarry, does the maintenance stop?</li>
<li>On what grounds can maintenance be denied to a wife?</li>
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
