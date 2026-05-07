import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { TrustSignalsSection } from "@/components/features/homepage/trust-signals";
import { FAQSection } from "@/components/shared/faq-section";
import Link from 'next/link';
import ClientFormTrigger from "@/app/send-legal-notice/legal-notice-for-money-recovery/client-form-trigger";

export const metadata: Metadata = {
  title: "Breach of Contract? | Enforce Agreement | Start at ₹499",
  description: "Contract violated? Get a lawyer-drafted breach of contract notice sent today. Pay ₹499 to start + 2-hr callback. Approve the draft before paying ₹1000.",
  keywords: ["breach of contract legal notice","contract violation notice","specific performance notice","contract enforcement","contract dispute"],
  alternates: {
    canonical: "https://vakiltech.in/send-legal-notice/breach-of-contract-legal-notice",
  },
};

export default function GeneratedServicePage() {
const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Breach of Contract?", current: true },
  ];

  const faqs: any[] = [
  {
    "question": "What constitutes breach of contract?",
    "answer": "Breach of contract occurs when a party: fails to perform obligations on due date (actual breach), indicates in advance they won't perform (anticipatory breach), performs defectively not meeting contract standards (material breach), or partially performs some but not all obligations. The breach must be of a valid, enforceable contract."
  },
  {
    "question": "What is difference between specific performance and damages?",
    "answer": "Specific performance: court order forcing the breaching party to perform the contract as agreed. Granted for unique contracts (sale of specific property, rare goods). Damages: monetary compensation for losses suffered. Granted when specific performance not feasible or appropriate. You can demand specific performance as primary relief and damages as alternative."
  },
  {
    "question": "What damages can I claim?",
    "answer": "You can claim: actual/compensatory damages (direct financial loss), consequential damages (indirect losses like lost profits, business disruption), liquidated damages (pre-agreed amount in contract), interest on amount due from breach date, and legal costs. Must prove damages are direct result of breach and reasonably foreseeable."
  },
  {
    "question": "Is legal notice mandatory before filing suit?",
    "answer": "While not always legally mandatory, sending legal notice is highly recommended and often required by courts. It demonstrates you attempted amicable resolution before litigation. Many contracts have clauses requiring notice before suit. Proper notice strengthens your case significantly and often leads to settlement without court."
  },
  {
    "question": "What types of contracts can be enforced?",
    "answer": "All legally valid contracts: business agreements (supply, service, partnership), sale agreements (goods, property), employment contracts (non-compete, notice period), franchise agreements, construction/contractor agreements, loan agreements, and license agreements. Contract must have valid offer, acceptance, consideration, lawful object, and capacity to contract."
  },
  {
    "question": "How long does breach of contract litigation take?",
    "answer": "If notice doesn't resolve the matter, suit for specific performance or damages typically takes 2-4 years in civil court. However, 60-70% of cases settle during litigation through compromise. For commercial disputes over ₹3 lakhs, Commercial Courts Act provides for faster disposal (target 1 year). Arbitration, if contract has clause, can be faster (6-18 months)."
  },
  {
    "question": "What if they claim force majeure or impossibility?",
    "answer": "Force majeure (act of God, pandemic, war) or impossibility of performance can be valid defenses to breach. However, burden of  proof is on the breaching party to show: event was unforeseeable, beyond their control, made performance impossible (not just difficult or expensive), and they took reasonable steps to mitigate. Most force majeure defenses fail as contracts only become difficult, not impossible."
  },
  {
    "question": "How much does breach of contract notice cost?",
    "answer": "vakiltech offers breach of contract legal notice services for ₹1,499, including: contract analysis and breach identification, professional drafting citing Contract Act provisions, documentation of your complete performance, quantification of damages and losses, demand for specific performance or compensation, unlimited revisions, and guidance on filing suit if needed."
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
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What constitutes breach of contract?","acceptedAnswer":{"@type":"Answer","text":"Breach of contract occurs when a party: fails to perform obligations on due date (actual breach), indicates in advance they won't perform (anticipatory breach), performs defectively not meeting contract standards (material breach), or partially performs some but not all obligations. The breach must be of a valid, enforceable contract."}},{"@type":"Question","name":"What is difference between specific performance and damages?","acceptedAnswer":{"@type":"Answer","text":"Specific performance: court order forcing the breaching party to perform the contract as agreed. Granted for unique contracts (sale of specific property, rare goods). Damages: monetary compensation for losses suffered. Granted when specific performance not feasible or appropriate. You can demand specific performance as primary relief and damages as alternative."}},{"@type":"Question","name":"What damages can I claim?","acceptedAnswer":{"@type":"Answer","text":"You can claim: actual/compensatory damages (direct financial loss), consequential damages (indirect losses like lost profits, business disruption), liquidated damages (pre-agreed amount in contract), interest on amount due from breach date, and legal costs. Must prove damages are direct result of breach and reasonably foreseeable."}},{"@type":"Question","name":"Is legal notice mandatory before filing suit?","acceptedAnswer":{"@type":"Answer","text":"While not always legally mandatory, sending legal notice is highly recommended and often required by courts. It demonstrates you attempted amicable resolution before litigation. Many contracts have clauses requiring notice before suit. Proper notice strengthens your case significantly and often leads to settlement without court."}},{"@type":"Question","name":"What types of contracts can be enforced?","acceptedAnswer":{"@type":"Answer","text":"All legally valid contracts: business agreements (supply, service, partnership), sale agreements (goods, property), employment contracts (non-compete, notice period), franchise agreements, construction/contractor agreements, loan agreements, and license agreements. Contract must have valid offer, acceptance, consideration, lawful object, and capacity to contract."}},{"@type":"Question","name":"How long does breach of contract litigation take?","acceptedAnswer":{"@type":"Answer","text":"If notice doesn't resolve the matter, suit for specific performance or damages typically takes 2-4 years in civil court. However, 60-70% of cases settle during litigation through compromise. For commercial disputes over ₹3 lakhs, Commercial Courts Act provides for faster disposal (target 1 year). Arbitration, if contract has clause, can be faster (6-18 months)."}},{"@type":"Question","name":"What if they claim force majeure or impossibility?","acceptedAnswer":{"@type":"Answer","text":"Force majeure (act of God, pandemic, war) or impossibility of performance can be valid defenses to breach. However, burden of  proof is on the breaching party to show: event was unforeseeable, beyond their control, made performance impossible (not just difficult or expensive), and they took reasonable steps to mitigate. Most force majeure defenses fail as contracts only become difficult, not impossible."}},{"@type":"Question","name":"How much does breach of contract notice cost?","acceptedAnswer":{"@type":"Answer","text":"vakiltech offers breach of contract legal notice services for ₹1,499, including: contract analysis and breach identification, professional drafting citing Contract Act provisions, documentation of your complete performance, quantification of damages and losses, demand for specific performance or compensation, unlimited revisions, and guidance on filing suit if needed."}}]}` }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"LegalService","telephone":"+91-70476 83995","image":"https://vakiltech.in/vt-logo.png","address":{"@type":"PostalAddress","addressCountry":"IN"},"priceRange":"\u20b91,499+","name":"vakiltech - Legal Notice for Breach of Contract","description":"Contract violated? Get a lawyer-drafted breach of contract notice sent today. Pay ₹499 to start + 2-hr callback. Approve the draft before paying ₹1000.","url":"https://vakiltech.in/send-legal-notice/breach-of-contract-legal-notice","areaServed":{"@type":"Country","name":"India"},"provider":{"@type":"Organization","name":"vakiltech","url":"https://vakiltech.in","logo":"https://vakiltech.in/logo.png","contactPoint":{"@type":"ContactPoint","telephone":"+91-70476 83995","contactType":"Customer Service","availableLanguage":["English","Hindi"]}},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"500"},"offers":{"@type":"Offer","price":"1499","priceCurrency":"INR","availability":"https://schema.org/InStock"}}` }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"WebPage","name":"Breach of Contract? | Enforce Agreement | Start at ₹499","description":"Contract violated? Get a lawyer-drafted breach of contract notice sent today. Pay ₹499 to start + 2-hr callback. Approve the draft before paying ₹1000.","url":"https://vakiltech.in/send-legal-notice/breach-of-contract-legal-notice","speakable":{"@type":"SpeakableSpecification","cssSelector":["h1","h2",".prose"]},"mainEntity":{"@type":"Service","name":"Legal Notice for Breach of Contract","description":"When a party fails to fulfill contractual obligations, you have legal remedies under the Indian Contract Act 1872. A breach of contract notice formally demands performance or compensation and is prerequisite before filing suit for specific performance or [damages](/guide/civil-suit-procedure). This notice applies to all contracts—business agreements, service contracts, sale agreements, employment contracts, and partnership agreements.","provider":{"@type":"Organization","name":"vakiltech"}}}` }}
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
                    Breach of Contract?
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Contract violated? Get a lawyer-drafted breach of contract notice sent today. Pay ₹499 to start + 2-hr callback. Approve the draft before paying ₹1000.
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
<h2 className="text-2xl font-bold text-foreground mb-4">What is a Legal Notice for Breach of Contract?</h2>
<p className="text-muted-foreground mb-4">A legal notice for breach of contract is sent when one party fails to fulfill obligations under a legally binding agreement. Under the Indian Contract Act 1872, a breach of contract occurs when a party fails to perform contractual obligations, performs defectively, or repudiates the contract. This notice formally puts the breaching party on notice, demands performance or compensation, and is a prerequisite before filing a suit for specific performance or damages. It applies to all types of contracts—business, employment, service, sale, partnership, etc.</p>
<p className="text-muted-foreground mb-4">Addresses non-performance or defective performance of contract</p>
<p className="text-muted-foreground mb-4">Governed by Indian Contract Act 1872</p>
<p className="text-muted-foreground mb-4">Demands performance, cure of breach, or compensation</p>
<p className="text-muted-foreground mb-4">Prerequisite before filing suit for specific performance or damages</p>
<p className="text-muted-foreground mb-4">Can claim actual damages, consequential losses, and interest</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Types of Breach of Contract</h2>
<p className="text-muted-foreground mb-4">Contract breaches can be classified based on timing and nature:</p>
<p className="text-muted-foreground mb-4">Actual Breach: Party fails to perform on due date or performs defectively</p>
<p className="text-muted-foreground mb-4">Anticipatory Breach: Party indicates in advance they won't perform (repudiation)</p>
<p className="text-muted-foreground mb-4">Material Breach: Serious breach that defeats the contract's purpose</p>
<p className="text-muted-foreground mb-4">Minor Breach: Trivial breach that doesn't destroy contract's essence</p>
<p className="text-muted-foreground mb-4">Total Breach: Complete non-performance</p>
<p className="text-muted-foreground mb-4">Partial Breach: Some obligations performed, others not</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Essential Elements for Breach of Contract Claim</h2>
<p className="text-muted-foreground mb-4">To succeed in a breach of contract claim, you must establish:</p>
<p className="text-muted-foreground mb-4">Valid Contract Exists: Offer, acceptance, consideration, lawful object, capacity</p>
<p className="text-muted-foreground mb-4">You Performed Your Obligations: Or were ready and willing to perform</p>
<p className="text-muted-foreground mb-4">Other Party Breached: Failed to perform or performed defectively</p>
<p className="text-muted-foreground mb-4">You Suffered Loss/Damage: As a direct result of the breach</p>
<p className="text-muted-foreground mb-4">Breach Was Without Lawful Excuse: No force majeure or valid defense applies</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">When to Send Breach of Contract Notice?</h2>
<p className="text-muted-foreground mb-4">You should send a legal notice for breach of contract in these situations:</p>
<p className="text-muted-foreground mb-4">Vendor fails to deliver goods/services as per contract terms</p>
<p className="text-muted-foreground mb-4">Buyer refuses to pay or make payment as per agreed terms</p>
<p className="text-muted-foreground mb-4">Contractor abandons project or delivers substandard work</p>
<p className="text-muted-foreground mb-4">Partnership agreement violated (profit sharing, duties, etc.)</p>
<p className="text-muted-foreground mb-4">Employment contract breached (non-compete, confidentiality, notice period)</p>
<p className="text-muted-foreground mb-4">Franchise agreement violated</p>
<p className="text-muted-foreground mb-4">Real estate transaction: seller refuses to deliver property or buyer backs out</p>
<p className="text-muted-foreground mb-4">Service agreements: non-performance or deficient performance</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">What Should the Notice Contain?</h2>
<p className="text-muted-foreground mb-4">A legally sound breach of contract notice must comprehensively establish the breach:</p>
<p className="text-muted-foreground mb-4">Details of the contract: date, parties, subject matter, key terms</p>
<p className="text-muted-foreground mb-4">Your complete performance of contractual obligations</p>
<p className="text-muted-foreground mb-4">Specific breach committed by other party with dates and details</p>
<p className="text-muted-foreground mb-4">How the breach violates specific contract clauses</p>
<p className="text-muted-foreground mb-4">Losses and damages suffered as direct result of breach</p>
<p className="text-muted-foreground mb-4">Quantification of damages (actual loss + consequential damages)</p>
<p className="text-muted-foreground mb-4">Demand for specific performance (fulfilling the contract)</p>
<p className="text-muted-foreground mb-4">Alternative demand for compensation/damages if performance impossible</p>
<p className="text-muted-foreground mb-4">Deadline for cure of breach or payment (typically 15-30 days)</p>
<p className="text-muted-foreground mb-4">Warning of suit for specific performance or damages</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Remedies for Breach of Contract</h2>
<p className="text-muted-foreground mb-4">Under Indian Contract Act, you have several remedies for breach of contract:</p>
<p className="text-muted-foreground mb-4">Specific Performance: Court orders breaching party to perform the contract (Specific Relief Act 1963)</p>
<p className="text-muted-foreground mb-4">Damages: Monetary compensation for losses suffered due to breach</p>
<p className="text-muted-foreground mb-4">Injunction: Court order restraining party from breaching (e.g., non-compete)</p>
<p className="text-muted-foreground mb-4">Rescission: Contract cancelled, parties restored to pre-contract position</p>
<p className="text-muted-foreground mb-4">Quantum Meruit: Payment for work done before breach if contract repudiated</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Types of Damages Recoverable</h2>
<p className="text-muted-foreground mb-4">You can claim different types of damages depending on the nature of breach:</p>
<p className="text-muted-foreground mb-4">Actual/Compensatory Damages: Direct financial loss suffered</p>
<p className="text-muted-foreground mb-4">Consequential Damages: Indirect losses flowing from breach (lost profits, business losses)</p>
<p className="text-muted-foreground mb-4">Liquidated Damages: Pre-agreed amount specified in contract for breach</p>
<p className="text-muted-foreground mb-4">Interest: On amount due from date of breach</p>
<p className="text-muted-foreground mb-4">Legal Costs: Attorney fees and litigation expenses (if contract provides)</p>
<p className="text-muted-foreground mb-4">Note: Punitive damages are generally not awarded in contract cases in India</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Timeline and Success Rate</h2>
<p className="text-muted-foreground mb-4">Legal notices for breach of contract have a strong settlement rate. Approximately 60-70% of contract disputes are resolved after sending a professional legal notice, as the breaching party realizes the strength of your claim and potential litigation costs. If you need to file a suit for specific performance or damages, civil contract cases typically take 2-4 years, but many settle during trial. The legal notice creates crucial documentary evidence of: the breach, your attempt to resolve amicably, and the damages quantification—all of which strengthen your case significantly if litigation becomes necessary.</p>
<p className="text-muted-foreground mb-4">Don't let contract breaches harm your business. Take legal action to enforce your rights and recover losses.</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Recovered Damages of₹45 Lakhs</h2>
<p className="text-muted-foreground mb-4">A vendor failed to deliver goods worth ₹18 lakhs despite receiving full payment, then abandoned the contract. After sending legal notice demanding refund plus damages, the vendor paid ₹18 lakhs (principal) plus ₹27 lakhs (damages for business losses and delay) within 45 days to avoid lengthy litigation.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Strong Legal Basis</li>
</ul>
<p className="text-muted-foreground mb-4">Well-drafted notice establishes breach, your performance, and quantified damages.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Specific Performance</li>
</ul>
<p className="text-muted-foreground mb-4">Can demand court order forcing the party to perform the contract as agreed.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Damages Recovery</li>
</ul>
<p className="text-muted-foreground mb-4">Can claim actual losses, consequential damages, interest, and legal costs.</p>
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
<li>Negotiation</li>
</ul>
<p className="text-muted-foreground mb-4">If they admit the breach, negotiate for damage compensation or a new timeline to perform.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Rescission</li>
</ul>
<p className="text-muted-foreground mb-4">Mutually agree to cancel the contract and refund any advances paid.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>File Case</li>
</ul>
<p className="text-muted-foreground mb-4">Suit for Specific Performance: Ask the court to force them to complete the contract.</p>
<p className="text-muted-foreground mb-4">Suit for Damages: Ask the court to make them pay for financial losses caused by the breach.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Arbitration</li>
</ul>
<p className="text-muted-foreground mb-4">If an arbitration clause exists, appoint an arbitrator to resolve the dispute.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Need Expert Guidance?</li>
</ul>
<p className="text-muted-foreground mb-4">Not sure if this is the right notice for your situation? Talk to a lawyer for personalized advice before proceeding.</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Indian Contract Act 1872 andSpecific Relief Act 1963</h2>
<p className="text-muted-foreground mb-4">Contract breaches are governed by Contract Act 1872 (damages) and Specific Relief Act 1963 (specific performance). Courts can order performance of contract or award monetary damages.</p>
<p className="text-muted-foreground mb-4">EXPERT INSIGHT</p>
<p className="text-muted-foreground mb-4">60-70% of contract disputes settle after legal notice as breaching party realizes litigation costs and time involved.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>⚖️Legal Remedies for Breach of Contract</li>
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
<h2 className="text-2xl font-bold text-foreground mb-4">See a Real Legal Notice for Breach of Contract Format</h2>
<p className="text-muted-foreground mb-4">Preview a professionally drafted legal notice for breach of contract.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Sample Legal Notice — Legal Notice for Breach of Contract</li>
<li>Legally valid format used by 10,000+ lawyers.</li>
</ul>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Get Your Legal Notice for Breach of Contract Drafted</h2>
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
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Divorce Notice</li>
</ul>
<p className="text-muted-foreground mb-4">Legal notice for divorce proceedings in India.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Maintenance Claim</li>
</ul>
<p className="text-muted-foreground mb-4">Claim maintenance for wife, children, or parents.</p>
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
<p className="text-muted-foreground mb-4">Everything you need to know about legal notice for breach of contract</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>What constitutes breach of contract?</li>
<li>What is difference between specific performance and damages?</li>
<li>What damages can I claim?</li>
<li>Is legal notice mandatory before filing suit?</li>
<li>What types of contracts can be enforced?</li>
<li>How long does breach of contract litigation take?</li>
<li>What if they claim force majeure or impossibility?</li>
<li>How much does breach of contract notice cost?</li>
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
