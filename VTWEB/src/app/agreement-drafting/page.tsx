import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { TrustSignalsSection } from "@/components/features/homepage/trust-signals";
import { FAQSection } from "@/components/shared/faq-section";
import Link from 'next/link';
import AgreementFormTrigger from "@/app/agreement-drafting/agreement-form-trigger";

export const metadata: Metadata = {
  title: "Agreement Drafting Services in India — From ₹999 | vakiltech",
  description: "Get any agreement drafted by a Licensed Advocate from ₹999. Rental, NDA, employment & 30+ types. Legally valid, customised clauses, delivered in 48 hrs. Start now.",
  keywords: ["agreement drafting","agreement drafting services","online agreement drafting","contract drafting India","legal agreement drafting","draft agreement online","agreement drafting cost India"],
  alternates: {
    canonical: "https://vakiltech.in/agreement-drafting",
  },
  openGraph: {
    title: "Agreement Drafting Services in India — From ₹999 | vakiltech",
    description: "Get any agreement drafted by a Licensed Advocate from ₹999. 30+ agreement types. Delivered in 48 hrs.",
    url: "https://vakiltech.in/agreement-drafting",
    siteName: "vakiltech",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agreement Drafting Services in India — From ₹999 | vakiltech",
    description: "Get any agreement drafted by a Licensed Advocate from ₹999. 30+ agreement types. Delivered in 48 hrs.",
  },
};

export default function GeneratedServicePage() {
const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Agreement Drafting", current: true },
  ];

  const faqs = [
    {
      question: "What makes an agreement legally valid in India?",
      answer: "Under the Indian Contract Act, 1872, a legally valid agreement requires: (1) a lawful offer and acceptance, (2) consideration — something of value exchanged by both parties, (3) free consent — no coercion, fraud, or misrepresentation, (4) parties competent to contract (adults of sound mind), and (5) a lawful object. A professionally drafted agreement ensures all these elements are correctly documented."
    },
    {
      question: "Do agreements need to be on stamp paper?",
      answer: "Most agreements require stamp paper under the Indian Stamp Act. The required stamp duty value varies by state and agreement type — for example, a rental agreement in Maharashtra requires stamp duty based on the annual rent, while a simple service agreement may need only ₹100–₹500 of stamp paper. vakiltech advises on the exact stamp duty applicable to your agreement based on your state."
    },
    {
      question: "Can I customise the agreement after delivery?",
      answer: "Yes. Every agreement comes with unlimited revisions until you are completely satisfied. You can request changes to any clause, add new provisions, or remove terms that don't apply to your situation. Our Licensed Advocates will revise the draft and explain the legal implications of any changes you request."
    },
    {
      question: "Are digital/electronic signatures valid on agreements in India?",
      answer: "Yes. Under the Information Technology Act, 2000, electronic signatures are legally valid in India and are admissible as evidence in court. However, certain documents — such as powers of attorney, wills, and property sale deeds — still require physical signatures and registration. vakiltech will advise you on whether your specific agreement requires physical execution."
    },
    {
      question: "How long does agreement drafting take?",
      answer: "Standard agreements are delivered within 48 hours of receiving your requirements. Urgent same-day delivery is available for an additional charge. Complex multi-party agreements or those requiring detailed legal research may take 72 hours. You will receive a timeline confirmation when you submit your request."
    },
    {
      question: "What if there is a dispute after signing?",
      answer: "Every agreement drafted by vakiltech includes a dispute resolution clause covering negotiation, mediation, and arbitration under the Arbitration and Conciliation Act, 1996, as well as a governing law and jurisdiction clause. These provisions are your first line of protection if a dispute arises. If a dispute does occur, vakiltech advocates can represent you or advise on your legal options."
    },
    {
      question: "Can an agreement have more than two parties?",
      answer: "Yes. Agreements can have multiple parties — for example, a tripartite agreement between a developer, buyer, and bank, or a multi-founder partnership deed. vakiltech regularly drafts multi-party agreements and ensures each party's rights, obligations, and liabilities are clearly defined."
    },
    {
      question: "How long is a drafted agreement legally valid?",
      answer: "An agreement remains valid until its specified end date, until a party terminates it under the termination clause, or until it is fulfilled. There is no automatic expiry date under Indian law unless the agreement specifies one. However, for enforcement purposes, the Limitation Act, 1963 provides a 3-year window from the date of breach to file a suit."
    },
  ];

  return (
    <>
    {/* BreadcrumbList Schema */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://vakiltech.in" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://vakiltech.in/services" },
          { "@type": "ListItem", "position": 3, "name": "Agreement Drafting", "item": "https://vakiltech.in/agreement-drafting" }
        ]
      })}}
    />
    {/* Organization Schema */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"Organization","name":"vakiltech","legalName":"vakiltech Legal Services","url":"https://vakiltech.in","logo":"https://vakiltech.in/logo.png","foundingDate":"2023","description":"India's leading online legal services platform providing affordable legal notices, consultations, and agreement drafting services through experienced Licensed Advocates.","address":{"@type":"PostalAddress","addressCountry":"IN"},"contactPoint":[{"@type":"ContactPoint","telephone":"+91-70476 83995","contactType":"Customer Service","availableLanguage":["English","Hindi"],"areaServed":"IN"}],"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"500","bestRating":"5","worstRating":"1"}}` }}
    />
    {/* LegalService Schema */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"LegalService","telephone":"+91-70476 83995","image":"https://vakiltech.in/vt-logo.png","address":{"@type":"PostalAddress","addressCountry":"IN"},"priceRange":"₹999+","name":"vakiltech - Agreement Drafting Services","description":"Professional agreement drafting services online from ₹999. Rental agreements, employment contracts, NDAs, partnership deeds & more. Drafted by Licensed Advocates.","url":"https://vakiltech.in/agreement-drafting","areaServed":{"@type":"Country","name":"India"},"provider":{"@type":"Organization","name":"vakiltech","url":"https://vakiltech.in","logo":"https://vakiltech.in/logo.png","contactPoint":{"@type":"ContactPoint","telephone":"+91-70476 83995","contactType":"Customer Service","availableLanguage":["English","Hindi"]}},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"500"},"offers":{"@type":"Offer","price":"999","priceCurrency":"INR","availability":"https://schema.org/InStock"}}` }}
    />
    {/* FAQ Schema */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "What makes an agreement legally valid in India?", "acceptedAnswer": { "@type": "Answer", "text": "Under the Indian Contract Act, 1872, a legally valid agreement requires: a lawful offer and acceptance, consideration, free consent, competent parties, and a lawful object." } },
          { "@type": "Question", "name": "Do agreements need to be on stamp paper?", "acceptedAnswer": { "@type": "Answer", "text": "Most agreements require stamp paper under the Indian Stamp Act. The stamp duty value varies by state and agreement type. vakiltech advises on the exact stamp duty applicable based on your state." } },
          { "@type": "Question", "name": "Are digital/electronic signatures valid on agreements in India?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Under the Information Technology Act, 2000, electronic signatures are legally valid in India and admissible as evidence in court." } },
          { "@type": "Question", "name": "How long does agreement drafting take?", "acceptedAnswer": { "@type": "Answer", "text": "Standard agreements are delivered within 48 hours. Urgent same-day delivery is available. Complex multi-party agreements may take 72 hours." } },
          { "@type": "Question", "name": "Can I customise the agreement after delivery?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Every agreement comes with unlimited revisions until you are completely satisfied." } }
        ]
      })}}
    />
    {/* WebPage Schema */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"WebPage","name":"Agreement Drafting Services in India | vakiltech","description":"Professional agreement drafting services from ₹999. Drafted by Licensed Advocates.","url":"https://vakiltech.in/agreement-drafting","speakable":{"@type":"SpeakableSpecification","cssSelector":["h1","h2",".prose"]},"about":{"@type":"Thing","name":"Agreement Drafting Services","description":"Professional online agreement drafting services in India"}}` }}
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
                    Licensed Advocates · Bar Council Registered
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                    Agreement Drafting Services by Licensed Advocates
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Agreement drafting is the process of preparing a legally binding written document that defines the rights, obligations, and dispute resolution mechanisms between parties — in compliance with the Indian Contract Act, 1872. A poorly worded agreement costs far more than a professionally drafted one. vakiltech's Licensed Advocates draft agreements tailored to your exact situation, delivered in 48 hours, from ₹999.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">⭐ 4.8/5 from 500+ clients</span>
                    <span>·</span>
                    <span>48-hour delivery</span>
                    <span>·</span>
                    <span>Unlimited revisions</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <AgreementFormTrigger />
                  <AgreementFormTrigger
                    label="Free Consultation"
                    variant="secondary"
                  />
                </div>
              </div>

              <div className="relative hidden md:block">
                <div className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 p-8 flex items-center justify-center">
                  <img
                    src="/images/services/agreement_drafting.png"
                    alt="Agreement drafting services by Licensed Advocates — vakiltech"
                    className="w-full h-full object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto py-12 space-y-6">

          {/* What Is Agreement Drafting */}
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">What Is Agreement Drafting?</h2>
            <p className="text-muted-foreground mb-4">
              Agreement drafting is the legal process of preparing a written contract that is enforceable under Indian law. A valid agreement under the Indian Contract Act, 1872 requires a lawful offer, acceptance, consideration (something of value exchanged), free consent, and competent parties. When any of these elements is missing or poorly documented, the agreement becomes void or voidable — leaving you exposed in a dispute.
            </p>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Agreement vs Contract — What's the Difference?</h3>
            <p className="text-muted-foreground mb-4">
              Every contract is an agreement, but not every agreement is a contract. An agreement becomes a legally enforceable contract only when it satisfies the conditions under the Indian Contract Act. A simple verbal understanding or an unsigned document is an agreement — it has limited legal standing. A properly drafted, signed, and stamped contract is what protects you in court.
            </p>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">When Do You Need a Lawyer to Draft Your Agreement?</h3>
            <p className="text-muted-foreground mb-4">
              Use a professionally drafted agreement whenever money, property, employment, confidential information, or intellectual property is involved. Generic templates from the internet are not customised to your state's laws, your industry, or the specific terms of your deal. A Licensed Advocate ensures your agreement includes the right governing law clause, applicable stamp duty compliance, an arbitration clause under the Arbitration and Conciliation Act, 1996, and force majeure provisions — clauses that templates routinely miss.
            </p>
          </div>

          {/* Types of Agreements */}
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">Types of Agreements We Draft</h2>
            <p className="text-muted-foreground mb-6">30+ agreement types across every business and personal situation. Click any type to see full details and pricing.</p>

            <h3 className="text-lg font-semibold text-foreground mt-4 mb-3">Business & Commercial Agreements</h3>
            <p className="text-muted-foreground mb-2">Define ownership, profit-sharing, and decision-making clearly before disputes arise.</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
              <li><Link href="/agreement-drafting/partnership-deed" className="text-primary hover:underline font-medium">Partnership Deed</Link> — roles, profit sharing, and exit terms</li>
              <li><span className="font-medium">Shareholder Agreement</span> — rights and obligations of company shareholders</li>
              <li><span className="font-medium">Joint Venture Agreement</span> — terms for business collaboration</li>
              <li><span className="font-medium">Memorandum of Understanding</span> — preliminary agreement before a formal contract</li>
            </ul>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Employment & HR Agreements</h3>
            <p className="text-muted-foreground mb-2">Protect your business and your employees from day one of the relationship.</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
              <li><Link href="/agreement-drafting/employment-agreement" className="text-primary hover:underline font-medium">Employment Contract</Link> — terms, salary, IP rights, and notice period</li>
              <li><Link href="/agreement-drafting/nda" className="text-primary hover:underline font-medium">Non-Disclosure Agreement (NDA)</Link> — protect confidential information</li>
              <li><span className="font-medium">Non-Compete Agreement</span> — restrict competitive activities post-employment</li>
              <li><span className="font-medium">Freelancer / Contractor Agreement</span> — terms for independent contractors</li>
            </ul>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Property & Real Estate Agreements</h3>
            <p className="text-muted-foreground mb-2">Legally watertight agreements for landlords, tenants, and property buyers.</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
              <li><Link href="/agreement-drafting/rental-agreement" className="text-primary hover:underline font-medium">Rental Agreement</Link> — terms for residential property rental</li>
              <li><span className="font-medium">Commercial Lease Agreement</span> — terms for business property rental</li>
              <li><span className="font-medium">Leave & License Agreement</span> — short-term property usage rights</li>
              <li><span className="font-medium">Sale Deed / Agreement to Sell</span> — transfer of property ownership</li>
            </ul>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Service & Vendor Agreements</h3>
            <p className="text-muted-foreground mb-2">Define deliverables, timelines, payment terms, and liability limits precisely.</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
              <li><span className="font-medium">Service Agreement</span> — terms for service delivery</li>
              <li><span className="font-medium">Service Level Agreement (SLA)</span> — define service standards and metrics</li>
              <li><span className="font-medium">Vendor Contract</span> — terms for supplier relationships</li>
              <li><span className="font-medium">Consulting Agreement</span> — terms for consulting engagements</li>
            </ul>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">IP & Technology Agreements</h3>
            <p className="text-muted-foreground mb-2">Secure your intellectual property before sharing it with partners, developers, or clients.</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
              <li><span className="font-medium">IP Assignment Agreement</span> — transfer intellectual property rights</li>
              <li><span className="font-medium">Software Licensing Agreement</span> — terms for software usage</li>
              <li><span className="font-medium">SaaS Agreement</span> — Software as a Service terms</li>
              <li><span className="font-medium">Technology Transfer Agreement</span> — licensing technology to third parties</li>
            </ul>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Family & Personal Agreements</h3>
            <p className="text-muted-foreground mb-2">Protect personal assets and relationships with legally sound documentation.</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
              <li><span className="font-medium">Personal Loan Agreement</span> — terms for personal lending between individuals</li>
              <li><span className="font-medium">Gift Deed</span> — legal transfer of property as a gift</li>
              <li><span className="font-medium">Prenuptial Agreement</span> — pre-marriage asset protection</li>
              <li><Link href="/agreement-drafting/power-of-attorney" className="text-primary hover:underline font-medium">Power of Attorney</Link> — authorise someone to act on your behalf</li>
            </ul>
          </div>

          {/* What You Get */}
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">What You Get With Every Agreement</h2>
            <p className="text-muted-foreground mb-4">Every agreement drafted by vakiltech includes the following as standard — not as add-ons:</p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-2"><span className="text-primary font-bold">✓</span><span><strong className="text-foreground">Professionally drafted document in Word & PDF</strong> — ready to sign and stamp</span></li>
              <li className="flex gap-2"><span className="text-primary font-bold">✓</span><span><strong className="text-foreground">Customised clauses</strong> — tailored to your specific parties, terms, and jurisdiction</span></li>
              <li className="flex gap-2"><span className="text-primary font-bold">✓</span><span><strong className="text-foreground">Arbitration clause</strong> — dispute resolution under the Arbitration and Conciliation Act, 1996</span></li>
              <li className="flex gap-2"><span className="text-primary font-bold">✓</span><span><strong className="text-foreground">Governing law & jurisdiction clause</strong> — specifies which court has authority</span></li>
              <li className="flex gap-2"><span className="text-primary font-bold">✓</span><span><strong className="text-foreground">Force majeure provision</strong> — protection against unforeseeable events</span></li>
              <li className="flex gap-2"><span className="text-primary font-bold">✓</span><span><strong className="text-foreground">Stamp duty guidance</strong> — state-specific advice on required stamp paper value</span></li>
              <li className="flex gap-2"><span className="text-primary font-bold">✓</span><span><strong className="text-foreground">Review by a Senior Advocate</strong> — internal quality check before delivery</span></li>
              <li className="flex gap-2"><span className="text-primary font-bold">✓</span><span><strong className="text-foreground">Unlimited revisions</strong> — until you are completely satisfied</span></li>
            </ul>
          </div>

          {/* How It Works */}
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">How Agreement Drafting Works — 4 Steps</h2>
            <p className="text-muted-foreground mb-6">From your first message to a signed, stamped agreement — here is exactly what happens:</p>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">Step 1 — Choose Your Agreement Type</h3>
                <p className="text-muted-foreground">Browse the 30+ types above or describe your situation in plain language. Our advocates recommend the right agreement structure and flag any legal requirements specific to your state.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">Step 2 — Share Your Requirements</h3>
                <p className="text-muted-foreground">Fill a simple form with party names, key terms, and any specific clauses you need. Our advocates may call for clarifications — particularly for complex multi-party or cross-state agreements.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">Step 3 — Licensed Advocate Drafts Your Agreement</h3>
                <p className="text-muted-foreground">Your assigned advocate drafts the agreement with industry-specific clauses, relevant case law references, and full compliance with Indian law. A senior advocate reviews before delivery.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">Step 4 — Review, Revise & Sign</h3>
                <p className="text-muted-foreground">You receive the draft in Word and PDF format. Request unlimited revisions. Once finalised, your advocate guides you on stamp duty, notarisation, and whether registration is required.</p>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Agreement Drafting Fees in India</h2>

            <h3 className="text-lg font-semibold text-foreground mb-3">Starting at ₹999 — What's Included</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-muted-foreground border border-border rounded-lg overflow-hidden">
                <thead className="bg-primary/5 text-foreground font-semibold">
                  <tr>
                    <th className="text-left p-3 border-b border-border">Agreement Type</th>
                    <th className="text-left p-3 border-b border-border">Starting Price</th>
                    <th className="text-left p-3 border-b border-border">Delivery</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="p-3">Rental / Leave & License Agreement</td>
                    <td className="p-3 font-semibold text-foreground">₹999</td>
                    <td className="p-3">24 hrs</td>
                  </tr>
                  <tr className="border-b border-border bg-muted/20">
                    <td className="p-3">Employment Contract / NDA / Non-Compete</td>
                    <td className="p-3 font-semibold text-foreground">₹999</td>
                    <td className="p-3">48 hrs</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3">Service Agreement / Vendor Contract / SLA</td>
                    <td className="p-3 font-semibold text-foreground">₹1,499</td>
                    <td className="p-3">48 hrs</td>
                  </tr>
                  <tr className="border-b border-border bg-muted/20">
                    <td className="p-3">Partnership Deed / Shareholder Agreement</td>
                    <td className="p-3 font-semibold text-foreground">₹1,999</td>
                    <td className="p-3">48–72 hrs</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3">IP Assignment / Software License / SaaS</td>
                    <td className="p-3 font-semibold text-foreground">₹2,499</td>
                    <td className="p-3">48–72 hrs</td>
                  </tr>
                  <tr>
                    <td className="p-3">Custom / Multi-party / Complex Agreements</td>
                    <td className="p-3 font-semibold text-foreground">Quote on request</td>
                    <td className="p-3">72 hrs+</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground mt-3">All prices exclude stamp duty, which varies by state and agreement type. vakiltech advises on applicable stamp duty as part of the service.</p>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">What Affects the Final Price</h3>
            <p className="text-muted-foreground">Complexity (number of parties, cross-border elements), number of custom clauses requested, turnaround time (same-day delivery attracts a premium), and whether notarisation or registration guidance is required — these are the four factors that move a price above the base rate. vakiltech confirms the final price before you pay.</p>
          </div>

          {/* Why Choose Us */}
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Why Choose vakiltech for Agreement Drafting</h2>
            <p className="text-muted-foreground mb-6">4.8/5 from 500+ clients across India. Here is what sets our drafting service apart from templates and local typists:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-foreground mb-1">48-Hour Turnaround</p>
                <p className="text-muted-foreground text-sm">Standard delivery in 48 hours. Same-day available for urgent needs. No more waiting weeks for a lawyer's appointment.</p>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">Licensed Advocates Only</p>
                <p className="text-muted-foreground text-sm">Every agreement is drafted by an advocate registered with the Bar Council of India — not a paralegal, not AI, not a template engine.</p>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">Unlimited Revisions</p>
                <p className="text-muted-foreground text-sm">Request changes until every clause is exactly right. No per-revision charges, no friction.</p>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">100% Court-Valid</p>
                <p className="text-muted-foreground text-sm">All agreements comply with Indian law and are admissible in court. We include the clauses that matter when it goes to litigation.</p>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">Stamp Duty Guidance Included</p>
                <p className="text-muted-foreground text-sm">Most services skip this. We tell you exactly which stamp paper to buy, at what value, in your state — so your agreement is enforceable from day one.</p>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">Post-Delivery Support</p>
                <p className="text-muted-foreground text-sm">Questions after signing? Our advocates are available for follow-up clarifications at no additional cost.</p>
              </div>
            </div>
          </div>

          {/* Get Started Form */}
          <div id="get-started" className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">Get Your Agreement Drafted Now</h2>
            <p className="text-muted-foreground mb-6">Click below to get started. Our team contacts you within 30 minutes to confirm requirements and assign your advocate.</p>
            <AgreementFormTrigger />
          </div>

          {/* Testimonials */}
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Real People. Real Results.</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-4">
                <p className="text-muted-foreground italic mb-2">"I used to ignore contracts, but after a client refused payment, I got a Service Agreement drafted here. It's solid, protects my rights, and clients actually respect me more now."</p>
                <p className="text-sm font-medium text-foreground">Arjun Mehta — Freelance Designer, Pune</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <p className="text-muted-foreground italic mb-2">"Much better than the copy-paste templates from local typists. The Non-Compete clause they added saved my business when an employee tried to poach my clients."</p>
                <p className="text-sm font-medium text-foreground">Sneha Kapoor — Small Business Owner, Gurgaon</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <p className="text-muted-foreground italic mb-2">"They included a specific clause for annual painting restoration in my Rent Agreement which my previous broker missed. Very thorough work."</p>
                <p className="text-sm font-medium text-foreground">Rajeshwari Iyer — Landlord, Chennai</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <p className="text-muted-foreground italic mb-2">"My landlord wanted a very one-sided agreement. vakiltech reviewed it and suggested changes to the lock-in period clause that saved me significant money later."</p>
                <p className="text-sm font-medium text-foreground">Aditya Verma — Tenant, Indore</p>
              </div>
            </div>
          </div>

          {/* Cities */}
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">We Draft Agreements Across India</h2>
            <p className="text-muted-foreground mb-4">vakiltech's advocates are registered with Bar Councils across India and have drafted agreements enforceable in every state court. We serve all major cities and Tier 2 towns including Mumbai, Delhi, Bengaluru, Hyderabad, Chennai, Kolkata, Pune, Ahmedabad, Jaipur, Lucknow, Chandigarh, Kochi, Nagpur, Surat, and more.</p>
            <p className="text-muted-foreground">For state-specific agreements — such as Maharashtra's Leave & License format, Delhi's rental agreement stamp duty requirements, or Karnataka's specific real estate clauses — our advocates apply the correct state law automatically.</p>
          </div>

        </div>
      </div>

      <TrustSignalsSection />

      <FAQSection faqs={faqs} title="Agreement Drafting FAQs" />
    </main>
    </>
  );
}
