import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { TrustSignalsSection } from "@/components/features/homepage/trust-signals";
import { FAQSection } from "@/components/shared/faq-section";
import Link from 'next/link';
import ClientFormTrigger from "@/app/send-legal-notice/legal-notice-for-money-recovery/client-form-trigger";

export const metadata: Metadata = {
  title: "Divorce Legal Notice — Send in 24 Hours | vakiltech",
  description: "Send a divorce legal notice online for ₹1,499. Covers cruelty, desertion, adultery. Drafted by verified advocates and delivered by registered post.",
  keywords: ["legal notice for divorce","divorce notice","divorce notice format india","send divorce notice online","mutual consent divorce notice","contested divorce notice","Notice for Dissolution of Marriage","Divorce under Hindu Marriage Act"],
  alternates: {
    canonical: "https://vakiltech.in/send-legal-notice/legal-notice-for-divorce",
  },
};

export default function GeneratedServicePage() {
const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Affordable Divorce Legal Notice Online", current: true },
  ];

  const faqs: any[] = [
  {
    "question": "Is it mandatory to send a legal notice before filing for divorce?",
    "answer": "While not strictly mandatory by law for all types of divorce petitions, sending a legal notice is highly recommended. It serves as a final warning, officially records the date of separation/desertion, and often pushes the other party to agree to a Mutual Consent Divorce to avoid court battles. For 'Restitution of Conjugal Rights', a notice is a prerequisite."
  },
  {
    "question": "What is the difference between Mutual Consent and Contested Divorce?",
    "answer": {
      "type": "div",
      "key": null,
      "ref": null,
      "props": {
        "className": "space-y-2",
        "children": [
          {
            "type": "p",
            "key": null,
            "ref": null,
            "props": {
              "children": [
                {
                  "type": "strong",
                  "key": null,
                  "ref": null,
                  "props": {
                    "children": "Mutual Consent (Sec 13B HMA):"
                  }
                },
                " Both husband and wife agree to separate peacefully. They mutually decide on alimony, child custody, and assets. It is the fastest way (6-18 months)."
              ]
            }
          },
          {
            "type": "p",
            "key": null,
            "ref": null,
            "props": {
              "children": [
                {
                  "type": "strong",
                  "key": null,
                  "ref": null,
                  "props": {
                    "children": "Contested Divorce (Sec 13(1) HMA):"
                  }
                },
                " Filed by one spouse on specific grounds like cruelty or adultery, while the other opposes it. It involves proving allegations in court and can take 3-5 years to resolve."
              ]
            }
          }
        ]
      }
    }
  },
  {
    "question": "How is alimony or maintenance decided?",
    "answer": "Alimony (permanent) or interim maintenance is decided based on the husband's income/assets, the wife's earning capacity, the standard of living during marriage, and the duration of the marriage. There is no fixed formula (e.g., '50% of salary'), but courts generally aim for a fair amount that allows the dependent spouse to maintain a similar lifestyle."
  },
  {
    "question": "Who gets child custody after divorce?",
    "answer": "The paramount consideration for the court is the 'Welfare of the Child'. For children under 5, custody usually goes to the mother. For older children, the court looks at who can better provide for the child's emotional and educational needs. Joint custody or visitation rights for the non-custodial parent are common outcomes."
  },
  {
    "question": "Can I claim my jewelry (Stridhan) in the divorce notice?",
    "answer": "Yes, absolutely. A wife has absolute ownership over her Stridhan (gifts, jewelry given to her during marriage). You should explicitly demand the return of all Stridhan items in the legal notice. Failure to return them can lead to a criminal complaint under Section 406 IPC (Criminal Breach of Trust)."
  },
  {
    "question": "Does a husband have any rights to file for divorce?",
    "answer": "Yes, a husband can file for divorce on the same grounds as a wife under the Hindu Marriage Act, such as Cruelty (mental harassment by wife), Desertion, Adultery, or Unsoundness of Mind. He can also seek custody of children if he can prove it's in their best interest."
  },
  {
    "question": "What is the cost and timeline for a divorce notice?",
    "answer": "At vakiltech, a professionally drafted Divorce Legal Notice costs ₹1,499. The draft is typically ready within 24-48 hours after consultation. Once approved, it is sent via Registered Post, which takes 3-5 days for delivery. The response time given to the spouse is usually 15 days."
  },
  {
    "question": "Can I send a divorce notice if I am living abroad (NRI)?",
    "answer": "Yes, NRIs can send a legal notice for divorce to their spouse in India. You do not need to be physically present to send the notice. Our lawyers can coordinate with you via video call/email, draft the notice, and dispatch it from India to your spouse's address securely."
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
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Is it mandatory to send a legal notice before filing for divorce?","acceptedAnswer":{"@type":"Answer","text":"While not strictly mandatory by law for all types of divorce petitions, sending a legal notice is highly recommended. It serves as a final warning, officially records the date of separation/desertion, and often pushes the other party to agree to a Mutual Consent Divorce to avoid court battles. For 'Restitution of Conjugal Rights', a notice is a prerequisite."}},{"@type":"Question","name":"What is the difference between Mutual Consent and Contested Divorce?","acceptedAnswer":{"@type":"Answer","text":{"type":"div","key":null,"ref":null,"props":{"className":"space-y-2","children":[{"type":"p","key":null,"ref":null,"props":{"children":[{"type":"strong","key":null,"ref":null,"props":{"children":"Mutual Consent (Sec 13B HMA):"}}," Both husband and wife agree to separate peacefully. They mutually decide on alimony, child custody, and assets. It is the fastest way (6-18 months)."]}},{"type":"p","key":null,"ref":null,"props":{"children":[{"type":"strong","key":null,"ref":null,"props":{"children":"Contested Divorce (Sec 13(1) HMA):"}}," Filed by one spouse on specific grounds like cruelty or adultery, while the other opposes it. It involves proving allegations in court and can take 3-5 years to resolve."]}}]}}}},{"@type":"Question","name":"How is alimony or maintenance decided?","acceptedAnswer":{"@type":"Answer","text":"Alimony (permanent) or interim maintenance is decided based on the husband's income/assets, the wife's earning capacity, the standard of living during marriage, and the duration of the marriage. There is no fixed formula (e.g., '50% of salary'), but courts generally aim for a fair amount that allows the dependent spouse to maintain a similar lifestyle."}},{"@type":"Question","name":"Who gets child custody after divorce?","acceptedAnswer":{"@type":"Answer","text":"The paramount consideration for the court is the 'Welfare of the Child'. For children under 5, custody usually goes to the mother. For older children, the court looks at who can better provide for the child's emotional and educational needs. Joint custody or visitation rights for the non-custodial parent are common outcomes."}},{"@type":"Question","name":"Can I claim my jewelry (Stridhan) in the divorce notice?","acceptedAnswer":{"@type":"Answer","text":"Yes, absolutely. A wife has absolute ownership over her Stridhan (gifts, jewelry given to her during marriage). You should explicitly demand the return of all Stridhan items in the legal notice. Failure to return them can lead to a criminal complaint under Section 406 IPC (Criminal Breach of Trust)."}},{"@type":"Question","name":"Does a husband have any rights to file for divorce?","acceptedAnswer":{"@type":"Answer","text":"Yes, a husband can file for divorce on the same grounds as a wife under the Hindu Marriage Act, such as Cruelty (mental harassment by wife), Desertion, Adultery, or Unsoundness of Mind. He can also seek custody of children if he can prove it's in their best interest."}},{"@type":"Question","name":"What is the cost and timeline for a divorce notice?","acceptedAnswer":{"@type":"Answer","text":"At vakiltech, a professionally drafted Divorce Legal Notice costs ₹1,499. The draft is typically ready within 24-48 hours after consultation. Once approved, it is sent via Registered Post, which takes 3-5 days for delivery. The response time given to the spouse is usually 15 days."}},{"@type":"Question","name":"Can I send a divorce notice if I am living abroad (NRI)?","acceptedAnswer":{"@type":"Answer","text":"Yes, NRIs can send a legal notice for divorce to their spouse in India. You do not need to be physically present to send the notice. Our lawyers can coordinate with you via video call/email, draft the notice, and dispatch it from India to your spouse's address securely."}}]}` }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"LegalService","telephone":"+91-70476 83995","image":"https://vakiltech.in/vt-logo.png","address":{"@type":"PostalAddress","addressCountry":"IN"},"priceRange":"\u20b91,499+","name":"vakiltech - Legal Notice for Divorce","description":"Initiate divorce proceedings with a professionally drafted legal notice. clear, affordable, and sensitive handling of your case.","url":"https://vakiltech.in/send-legal-notice/legal-notice-for-divorce","areaServed":{"@type":"Country","name":"India"},"provider":{"@type":"Organization","name":"vakiltech","url":"https://vakiltech.in","logo":"https://vakiltech.in/logo.png","contactPoint":{"@type":"ContactPoint","telephone":"+91-70476 83995","contactType":"Customer Service","availableLanguage":["English","Hindi"]}},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"500"},"offers":{"@type":"Offer","price":"1499","priceCurrency":"INR","availability":"https://schema.org/InStock"}}` }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"WebPage","name":"Affordable Divorce Legal Notice Online | vakiltech - Get Notice Drafted & Sent","description":"Initiate divorce proceedings with a professionally drafted legal notice. clear, affordable, and sensitive handling of your case.","url":"https://vakiltech.in/send-legal-notice/legal-notice-for-divorce","speakable":{"@type":"SpeakableSpecification","cssSelector":["h1","h2",".prose"]},"mainEntity":{"@type":"Service","name":"Legal Notice for Divorce","description":"A legal notice for divorce is the first formal step in ending a marriage. It communicates your intent to separate and outlines the grounds for divorce to your spouse. Whether you are seeking a mutual consent divorce or proceeding with a contested divorce due to cruelty, desertion, or adultery, a well-drafted legal notice sets the tone for the entire legal process. It demonstrates your serious intent and often opens the door for an amicable settlement without prolonged litigation.","provider":{"@type":"Organization","name":"vakiltech"}}}` }}
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
                    Affordable Divorce Legal Notice Online
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Initiate divorce proceedings with a professionally drafted legal notice. clear, affordable, and sensitive handling of your case.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/send-legal-notice"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Send Divorce Legal Notice — ₹1,499
                  </Link>
                  <Link
                    href="/consultation"
                    className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 text-center"
                  >
                    Talk to a Divorce Lawyer — ₹299
                  </Link>
                </div>
                {/* DV-05: upstream link to decision guide */}
                <p className="text-sm text-muted-foreground">
                  Understanding the divorce process?{" "}
                  <Link href="/guides/divorce-procedure-in-india" className="text-primary hover:underline font-medium">
                    Read our step-by-step divorce procedure guide →
                  </Link>
                </p>
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
<h2 className="text-2xl font-bold text-foreground mb-4">Why Send a Legal Notice for Divorce?</h2>
<p className="text-muted-foreground mb-4">Sending a legal notice is not just a formality but a strategic move that serves multiple legal and practical purposes:</p>
<p className="text-muted-foreground mb-4">Clear Communication of Intent: It formally informs your spouse of your decision to end the marriage and the specific reasons (grounds).</p>
<p className="text-muted-foreground mb-4">Opportunity for Mutual Settlement: A notice often prompts the other party to consider a Mutual Consent Divorce, which is faster (6-18 months) and less expensive.</p>
<p className="text-muted-foreground mb-4">Legal Requirement: For grounds like desertion or restitution of conjugal rights, a notice serves as crucial evidence that you attempted to resolve the matter.</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Types of Divorce Notices We Handle</h2>
<p className="text-muted-foreground mb-4">Our experienced family law advocates can draft notices tailored to your specific situation and desired outcome:</p>
<p className="text-muted-foreground mb-4">Mutual Consent Notice: Proposing an amicable separation where both parties agree on terms like alimony, child custody, and assets.</p>
<p className="text-muted-foreground mb-4">Contested Divorce Notice: Based on specific legal grounds such as Cruelty, Adultery, Desertion, or Conversion, when one party does not agree.</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Legal Framework &amp; Acts</h2>
<p className="text-muted-foreground mb-4">Divorce laws in India vary based on religion, and your legal notice will be drafted under the specific act applicable to you:</p>
<p className="text-muted-foreground mb-4">Hindu Marriage Act, 1955: For Hindus, Buddhists, Jains, and Sikhs (Sec 13B for Mutual, Sec 13(1) for Contested).</p>
<p className="text-muted-foreground mb-4">Special Marriage Act, 1954: For inter-religion marriages or civil marriages registered under this act.</p>
<p className="text-muted-foreground mb-4">Indian Divorce Act, 1869: Applicable to Christians.</p>
<p className="text-muted-foreground mb-4">Dissolution of Muslim Marriages Act, 1939: Applicable to Muslim women seeking divorce.</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Our Divorce Notice Process</h2>
<p className="text-muted-foreground mb-4">We follow a systematic, confidential, and client-centric process to ensure your notice is legally sound:</p>
<p className="text-muted-foreground mb-4">1. Consultation: Discuss your case details and grounds for divorce with our family law advocate.</p>
<p className="text-muted-foreground mb-4">2. Drafting: Our lawyer drafts a comprehensive notice citing relevant sections of the law.</p>
<p className="text-muted-foreground mb-4">3. Review &amp; Approval: You review the draft to ensure all facts are accurate. Unlimited revisions provided.</p>
<p className="text-muted-foreground mb-4">4. Dispatch: The notice is sent via Registered Post Acknowledgment Due for legal proof.</p>
<p className="text-muted-foreground mb-4">Divorce is legally complex and emotionally taxing. Let our experts handle the legal formalities while you focus on your future.</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">From Contested Threat toMutual Consent</h2>
<p className="text-muted-foreground mb-4">Rohan (name changed) was facing a toxic marriage but feared a long court battle. His wife threatened false cases if he filed for divorce. We drafted a balanced legal notice highlighting 'Mental Cruelty' while simultaneously offering a fair Mutual Consent settlement. The notice, devoid of aggressive language but strong on legal facts, helped bring her to the negotiation table. Instead of a 5-year battle, they signed a Mutual Consent agreement within 3 months.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Protected Against False Claims</li>
</ul>
<p className="text-muted-foreground mb-4">The legal notice proactively documented facts, protecting Rohan from potential false allegations later.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Opened Proper Dialogue</li>
</ul>
<p className="text-muted-foreground mb-4">Shifted the conversation from emotional arguments to legal realities and settlement terms.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Saved Years of Litigation</li>
</ul>
<p className="text-muted-foreground mb-4">Mutual consent divorce was filed immediately after the cooling-off period discussions.</p>
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
<p className="text-muted-foreground mb-4">Arrange a joint meeting to discuss terms (alimony, child custody).</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>File Case</li>
</ul>
<p className="text-muted-foreground mb-4">File a Mutual Consent Divorce (Section 13B HMA). This is faster (6-18 months).</p>
<p className="text-muted-foreground mb-4">Attempt pre-litigation mediation center counseling (optional but recommended).</p>
<p className="text-muted-foreground mb-4">File a Contested Divorce petition (Cruelty, Desertion, etc.).</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Maintenance</li>
</ul>
<p className="text-muted-foreground mb-4">Simultaneously file Section 125 CrPC / Section 144 BNSS for interim maintenance.</p>
<p className="text-muted-foreground mb-4">File for Restitution of Conjugal Rights (Section 9) if you want them back, OR file for Contested Divorce.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Authority Complaint</li>
</ul>
<p className="text-muted-foreground mb-4">If violence was involved, file a complaint with the Women’s Cell or Protection Officer (DV Act).</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Need Expert Guidance?</li>
</ul>
<p className="text-muted-foreground mb-4">Not sure if this is the right notice for your situation? Talk to a lawyer for personalized advice before proceeding.</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Grounds for Divorce inIndia</h2>
<p className="text-muted-foreground mb-4">Under Section 13(1) of the Hindu Marriage Act, 1955, and similar provisions in other personal laws, you can seek divorce on specific grounds if mutual consent is not possible.</p>
<p className="text-muted-foreground mb-4">EXPERT INSIGHT</p>
<p className="text-muted-foreground mb-4">The specific wording of your 'grounds' in the legal notice is critical. If you allege 'Cruelty', specific instances must be cited to stand up in court later.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>⚖️Common Grounds Explained</li>
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
<h2 className="text-2xl font-bold text-foreground mb-4">See a Real Legal Notice for Divorce Format</h2>
<p className="text-muted-foreground mb-4">Preview a professionally drafted legal notice for divorce.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Sample Legal Notice — Legal Notice for Divorce</li>
<li>Legally valid format used by 10,000+ lawyers.</li>
</ul>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Get Your Legal Notice for Divorce Drafted</h2>
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
<p className="text-muted-foreground mb-4">Everything you need to know about legal notice for divorce</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Is it mandatory to send a legal notice before filing for divorce?</li>
<li>What is the difference between Mutual Consent and Contested Divorce?</li>
<li>How is alimony or maintenance decided?</li>
<li>Who gets child custody after divorce?</li>
<li>Can I claim my jewelry (Stridhan) in the divorce notice?</li>
<li>Does a husband have any rights to file for divorce?</li>
<li>What is the cost and timeline for a divorce notice?</li>
<li>Can I send a divorce notice if I am living abroad (NRI)?</li>
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
