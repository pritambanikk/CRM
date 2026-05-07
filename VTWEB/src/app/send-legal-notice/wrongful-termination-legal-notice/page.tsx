import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { TrustSignalsSection } from "@/components/features/homepage/trust-signals";
import { FAQSection } from "@/components/shared/faq-section";
import Link from 'next/link';
import ClientFormTrigger from "@/app/send-legal-notice/legal-notice-for-money-recovery/client-form-trigger";

export const metadata: Metadata = {
  title: "Wrongfully Terminated? | Challenge Dismissal | Start ₹499",
  description: "Unfairly dismissed from work? Get a lawyer-drafted wrongful termination notice sent today. Pay ₹499 to start + 2-hr callback. Approve before paying ₹1000.",
  keywords: ["wrongful termination legal notice","illegal termination notice","unfair dismissal notice","termination without notice legal action"],
  alternates: {
    canonical: "https://vakiltech.in/send-legal-notice/wrongful-termination-legal-notice",
  },
};

export default function GeneratedServicePage() {
const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Wrongfully Terminated?", current: true },
  ];

  const faqs: any[] = [
  {
    "question": "What is wrongful termination?",
    "answer": "Wrongful termination is dismissal from employment that violates labor laws, contract terms, or principles of natural justice. This includes: termination without valid cause, dismissal without notice or inquiry, termination during protected periods (maternity leave, medical leave), discriminatory firing, retaliation for complaints, or constructive dismissal."
  },
  {
    "question": "Who can challenge termination?",
    "answer": "Any employee can challenge wrongful termination. For 'workmen' (employees earning below ₹18,000/month under Industrial Disputes Act), protection is strongest with mandatory inquiry procedures. Other employees can challenge under contract law and natural justice. Government employees have additional constitutional protections."
  },
  {
    "question": "What are the legal requirements for notice period?",
    "answer": "Employment contract or Standing Orders specify notice period (typically 1-3 months). If contract doesn't specify, reasonable notice must be given. Employer must either: allow you to serve full notice period, or pay salary for entire notice period in lieu. Terminating without notice or payment is wrongful unless there's proven gross misconduct."
  },
  {
    "question": "What is natural justice in termination?",
    "answer": "Natural justice requires: you must be informed of allegations against you (show cause notice), given opportunity to defend yourself and present evidence, domestic inquiry must be fair with right to cross-examine witnesses, decision must be based on evidence, not arbitrary. Skipping any step makes termination wrongful."
  },
  {
    "question": "What remedies can I get for wrongful termination?",
    "answer": "You can claim: reinstatement (get your job back), full back wages from termination to settlement date, continuity of service for benefits, notice period payment if not given, all statutory dues (PF, gratuity, leave encashment), compensation for mental agony and harassment, damages for future loss of earnings. Choice between reinstatement or compensation depends on circumstances."
  },
  {
    "question": "Can I be terminated during maternity leave?",
    "answer": "No. Maternity Benefit Act 1961 prohibits termination during pregnancy or maternity leave. If terminated during this protected period, it's automatically wrongful. You can claim reinstatement, full wages for entire maternity period, and compensation. Such cases have very high success rates."
  },
  {
    "question": "Am I protected during medical leave?",
    "answer": "Yes, to an extent. While there's no absolute bar on termination during medical leave, courts view such termination very unfavorably. If you're on approved medical leave for genuine illness, termination without proper cause is likely wrongful. Document your medical condition properly and inform employer."
  },
  {
    "question": "What is constructive dismissal?",
    "answer": "Constructive dismissal occurs when employer makes working conditions so intolerable that you're forced to resign. Examples: constant harassment, demotion without cause, hostile work environment, transfer to impossible locations, substantial reduction in salary. If forced to resign, you can claim it as wrongful termination."
  },
  {
    "question": "Where should I file wrongful termination case?",
    "answer": "Options depend on your category: Labor Court or Industrial Tribunal (for workmen under Industrial Disputes Act—strongest protection), Civil Court (for breach of contract damages—for non-workmen), Labor Commissioner (for conciliation before litigation), High Court (writ petition for government employees). A legal notice is prerequisite for all forums."
  },
  {
    "question": "How much does wrongful termination notice cost?",
    "answer": "vakiltech offers wrongful termination notice services for ₹1,499, including consultation on your termination and legal rights, analysis of employment contract and termination process, professional drafting citing Industrial Disputes Act and labor laws, calculation of dues and compensation, demand for reinstatement or compensation, unlimited revisions, and registered post delivery with legal guidance on next steps."
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
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is wrongful termination?","acceptedAnswer":{"@type":"Answer","text":"Wrongful termination is dismissal from employment that violates labor laws, contract terms, or principles of natural justice. This includes: termination without valid cause, dismissal without notice or inquiry, termination during protected periods (maternity leave, medical leave), discriminatory firing, retaliation for complaints, or constructive dismissal."}},{"@type":"Question","name":"Who can challenge termination?","acceptedAnswer":{"@type":"Answer","text":"Any employee can challenge wrongful termination. For 'workmen' (employees earning below ₹18,000/month under Industrial Disputes Act), protection is strongest with mandatory inquiry procedures. Other employees can challenge under contract law and natural justice. Government employees have additional constitutional protections."}},{"@type":"Question","name":"What are the legal requirements for notice period?","acceptedAnswer":{"@type":"Answer","text":"Employment contract or Standing Orders specify notice period (typically 1-3 months). If contract doesn't specify, reasonable notice must be given. Employer must either: allow you to serve full notice period, or pay salary for entire notice period in lieu. Terminating without notice or payment is wrongful unless there's proven gross misconduct."}},{"@type":"Question","name":"What is natural justice in termination?","acceptedAnswer":{"@type":"Answer","text":"Natural justice requires: you must be informed of allegations against you (show cause notice), given opportunity to defend yourself and present evidence, domestic inquiry must be fair with right to cross-examine witnesses, decision must be based on evidence, not arbitrary. Skipping any step makes termination wrongful."}},{"@type":"Question","name":"What remedies can I get for wrongful termination?","acceptedAnswer":{"@type":"Answer","text":"You can claim: reinstatement (get your job back), full back wages from termination to settlement date, continuity of service for benefits, notice period payment if not given, all statutory dues (PF, gratuity, leave encashment), compensation for mental agony and harassment, damages for future loss of earnings. Choice between reinstatement or compensation depends on circumstances."}},{"@type":"Question","name":"Can I be terminated during maternity leave?","acceptedAnswer":{"@type":"Answer","text":"No. Maternity Benefit Act 1961 prohibits termination during pregnancy or maternity leave. If terminated during this protected period, it's automatically wrongful. You can claim reinstatement, full wages for entire maternity period, and compensation. Such cases have very high success rates."}},{"@type":"Question","name":"Am I protected during medical leave?","acceptedAnswer":{"@type":"Answer","text":"Yes, to an extent. While there's no absolute bar on termination during medical leave, courts view such termination very unfavorably. If you're on approved medical leave for genuine illness, termination without proper cause is likely wrongful. Document your medical condition properly and inform employer."}},{"@type":"Question","name":"What is constructive dismissal?","acceptedAnswer":{"@type":"Answer","text":"Constructive dismissal occurs when employer makes working conditions so intolerable that you're forced to resign. Examples: constant harassment, demotion without cause, hostile work environment, transfer to impossible locations, substantial reduction in salary. If forced to resign, you can claim it as wrongful termination."}},{"@type":"Question","name":"Where should I file wrongful termination case?","acceptedAnswer":{"@type":"Answer","text":"Options depend on your category: Labor Court or Industrial Tribunal (for workmen under Industrial Disputes Act—strongest protection), Civil Court (for breach of contract damages—for non-workmen), Labor Commissioner (for conciliation before litigation), High Court (writ petition for government employees). A legal notice is prerequisite for all forums."}},{"@type":"Question","name":"How much does wrongful termination notice cost?","acceptedAnswer":{"@type":"Answer","text":"vakiltech offers wrongful termination notice services for ₹1,499, including consultation on your termination and legal rights, analysis of employment contract and termination process, professional drafting citing Industrial Disputes Act and labor laws, calculation of dues and compensation, demand for reinstatement or compensation, unlimited revisions, and registered post delivery with legal guidance on next steps."}}]}` }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"LegalService","telephone":"+91-70476 83995","image":"https://vakiltech.in/vt-logo.png","address":{"@type":"PostalAddress","addressCountry":"IN"},"priceRange":"\u20b91,499+","name":"vakiltech - Legal Notice for Wrongful Termination","description":"Unfairly dismissed from work? Get a lawyer-drafted wrongful termination notice sent today. Pay ₹499 to start + 2-hr callback. Approve before paying ₹1000.","url":"https://vakiltech.in/send-legal-notice/wrongful-termination-legal-notice","areaServed":{"@type":"Country","name":"India"},"provider":{"@type":"Organization","name":"vakiltech","url":"https://vakiltech.in","logo":"https://vakiltech.in/logo.png","contactPoint":{"@type":"ContactPoint","telephone":"+91-70476 83995","contactType":"Customer Service","availableLanguage":["English","Hindi"]}},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"500"},"offers":{"@type":"Offer","price":"1499","priceCurrency":"INR","availability":"https://schema.org/InStock"}}` }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"WebPage","name":"Wrongfully Terminated? | Challenge Dismissal | Start ₹499","description":"Unfairly dismissed from work? Get a lawyer-drafted wrongful termination notice sent today. Pay ₹499 to start + 2-hr callback. Approve before paying ₹1000.","url":"https://vakiltech.in/send-legal-notice/wrongful-termination-legal-notice","speakable":{"@type":"SpeakableSpecification","cssSelector":["h1","h2",".prose"]},"mainEntity":{"@type":"Service","name":"Legal Notice for Wrongful Termination","description":"If you've been terminated without proper procedure, notice period, or valid cause, you have strong legal rights under the Industrial Disputes Act and labor laws. A legal notice for wrongful termination challenges your dismissal, demands reinstatement with full back wages, or seeks substantial compensation for illegal termination.","provider":{"@type":"Organization","name":"vakiltech"}}}` }}
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
                    Wrongfully Terminated?
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Unfairly dismissed from work? Get a lawyer-drafted wrongful termination notice sent today. Pay ₹499 to start + 2-hr callback. Approve before paying ₹1000.
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
<h2 className="text-2xl font-bold text-foreground mb-4">What is a Legal Notice for Wrongful Termination?</h2>
<p className="text-muted-foreground mb-4">A legal notice for wrongful termination is sent by an employee who has been illegally or unfairly dismissed from employment. This notice challenges the termination, demands reinstatement or compensation, and asserts your rights under the Industrial Disputes Act 1947, Standing Orders, employment contract, and labor laws. Wrongful termination includes dismissal without notice, termination during maternity leave, discriminatory firing, or termination in violation of natural justice principles.</p>
<p className="text-muted-foreground mb-4">Challenges illegal or unfair dismissal from employment</p>
<p className="text-muted-foreground mb-4">Demands reinstatement, full back wages, and benefits</p>
<p className="text-muted-foreground mb-4">Protected under Industrial Disputes Act 1947 and labor laws</p>
<p className="text-muted-foreground mb-4">Covers termination without notice, discriminatory firing, retaliation</p>
<p className="text-muted-foreground mb-4">Can claim compensation for mental agony and loss of livelihood</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">What Constitutes Wrongful Termination?</h2>
<p className="text-muted-foreground mb-4">Wrongful termination occurs when an employer dismisses an employee in violation of law, contract, or principles of natural justice:</p>
<p className="text-muted-foreground mb-4">Termination without following due process or natural justice</p>
<p className="text-muted-foreground mb-4">Dismissal without valid reason or proper inquiry</p>
<p className="text-muted-foreground mb-4">Termination without notice period or payment in lieu of notice</p>
<p className="text-muted-foreground mb-4">Discriminatory termination based on gender, caste, religion, pregnancy</p>
<p className="text-muted-foreground mb-4">Termination during maternity leave or medical leave</p>
<p className="text-muted-foreground mb-4">Retaliatory firing for whistleblowing or raising complaints</p>
<p className="text-muted-foreground mb-4">Termination violating employment contract terms</p>
<p className="text-muted-foreground mb-4">Constructive dismissal (forcing employee to resign through harassment)</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Legal Rights of Employees in Termination</h2>
<p className="text-muted-foreground mb-4">Under Indian labor laws, employees have strong protections against arbitrary termination. The Industrial Disputes Act 1947 requires employers to follow proper procedure before termination, especially in establishments covered under the Act. For 'workmen' (employees earning below ₹18,000/month at time of Industrial Disputes amendment), termination requires: valid reason/cause, domestic inquiry giving opportunity to defend, notice period or payment in lieu, compliance with Standing Orders. For other employees, employment contract terms and principles of natural justice must be followed. Violation of these procedures makes the termination wrongful and illegal.</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Remedies Available for Wrongful Termination</h2>
<p className="text-muted-foreground mb-4">If you've been wrongfully terminated, you have several legal remedies:</p>
<p className="text-muted-foreground mb-4">Reinstatement: Court can order employer to take you back with full back wages</p>
<p className="text-muted-foreground mb-4">Full back wages: Payment of all salary from termination date to settlement</p>
<p className="text-muted-foreground mb-4">Compensation: Monetary compensation in lieu of reinstatement</p>
<p className="text-muted-foreground mb-4">Notice period payment: If terminated without notice, claim notice pay</p>
<p className="text-muted-foreground mb-4">Statutory dues: Gratuity, PF, leave encashment, bonus, etc.</p>
<p className="text-muted-foreground mb-4">Damages: Compensation for mental agony, loss of reputation, future earnings</p>
<p className="text-muted-foreground mb-4">Punitive action: Labor law violations can attract penalties on employer</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">What Should the Notice Contain?</h2>
<p className="text-muted-foreground mb-4">Your wrongful termination notice must comprehensively establish the illegal nature of dismissal:</p>
<p className="text-muted-foreground mb-4">Employment details: designation, date of joining, salary, contract terms</p>
<p className="text-muted-foreground mb-4">Details of termination: date, manner, stated reason (if any)</p>
<p className="text-muted-foreground mb-4">Why the termination is wrongful and illegal (violation of law/contract)</p>
<p className="text-muted-foreground mb-4">Absence of proper inquiry, notice, or opportunity to defend</p>
<p className="text-muted-foreground mb-4">Evidence of good service record and no misconduct</p>
<p className="text-muted-foreground mb-4">Discriminatory or retaliatory intent behind termination</p>
<p className="text-muted-foreground mb-4">Calculation of all dues payable (salary, notice pay, benefits)</p>
<p className="text-muted-foreground mb-4">Demand for reinstatement with full back wages and continuity of service</p>
<p className="text-muted-foreground mb-4">Alternative demand for compensation in lieu of reinstatement</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Legal Forums for Wrongful Termination Cases</h2>
<p className="text-muted-foreground mb-4">After sending the notice, if the employer doesn't respond favorably, you can approach: Labor Court or Industrial Tribunal (for workmen under Industrial Disputes Act), Civil Court (for employees seeking damages for breach of contract), Labor Commissioner (for conciliation and resolution), High Court (writ petition for violation of fundamental rights for government employees). The appropriate forum depends on your employment category, salary, and nature of establishment. Most wrongful termination cases in private sector are filed under Industrial Disputes Act or as civil suits for damages.</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Timeline and Success Rate</h2>
<p className="text-muted-foreground mb-4">Legal notices for wrongful termination often lead to out-of-court settlements. Approximately 40-50% of cases settle after the notice, with employers offering reinstatement or monetary compensation to avoid litigation and labor law violations. If you proceed to Labor Court, cases typically take 2-4 years but can be faster with strong evidence. Courts are generally sympathetic to employees, especially in cases of clear procedural violations. The legal notice strengthens your position significantly and demonstrates serious intent to pursue legal action.</p>
<p className="text-muted-foreground mb-4">Don't accept illegal termination. Assert your rights and demand justice. Send a legal notice today.</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Reinstated with Back Wages of₹18 Lakhs</h2>
<p className="text-muted-foreground mb-4">Deepa was terminated without notice during maternity leave. After sending a legal notice citing Industrial Disputes Act violation, her employer agreed to reinstate her with full back wages of ₹18 lakhs plus continuity of service to avoid Labor Court case.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Strong Legal Protection</li>
</ul>
<p className="text-muted-foreground mb-4">Industrial Disputes Act and labor laws protect employees from arbitrary termination.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Reinstatement Possible</li>
</ul>
<p className="text-muted-foreground mb-4">Courts can order employer to take you back with full back wages and benefits.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Substantial Compensation</li>
</ul>
<p className="text-muted-foreground mb-4">If reinstatement not feasible, courts award significant compensation.</p>
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
<p className="text-muted-foreground mb-4">Negotiate a severance package or clearance of dues. Employers often settle to avoid bad PR.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Closure</li>
</ul>
<p className="text-muted-foreground mb-4">If settled, sign a 'Full and Final Settlement' deed.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Authority Complaint</li>
</ul>
<p className="text-muted-foreground mb-4">File a formal complaint with the Labour Commissioner of the area. They will summon the employer for conciliation.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>File Case</li>
</ul>
<p className="text-muted-foreground mb-4">1. Labour Court: If the employee is a 'workman'. 2. Civil Court: If the employee is a 'Manager/Executive' (Labour laws may not apply).</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Need Expert Guidance?</li>
</ul>
<p className="text-muted-foreground mb-4">Not sure if this is the right notice for your situation? Talk to a lawyer for personalized advice before proceeding.</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Employee TerminationLaws in India</h2>
<p className="text-muted-foreground mb-4">Wrongful termination cases are governed by Industrial Disputes Act 1947, Standing Orders, employment contracts, and principles of natural justice.</p>
<p className="text-muted-foreground mb-4">EXPERT INSIGHT</p>
<p className="text-muted-foreground mb-4">40-50% of wrongful termination cases settle after legal notice, with employers offering reinstatement or compensation to avoid litigation.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>⚖️Employee Rights in Termination</li>
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
<h2 className="text-2xl font-bold text-foreground mb-4">See a Real Legal Notice for Wrongful Termination Format</h2>
<p className="text-muted-foreground mb-4">Preview a professionally drafted legal notice for wrongful termination.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Sample Legal Notice — Legal Notice for Wrongful Termination</li>
<li>Legally valid format used by 10,000+ lawyers.</li>
</ul>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Get Your Legal Notice for Wrongful Termination Drafted</h2>
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
<li>Unpaid Salary</li>
</ul>
<p className="text-muted-foreground mb-4">Claim unpaid wages and employment dues.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Workplace Harassment</li>
</ul>
<p className="text-muted-foreground mb-4">Action against workplace harassment.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Employee Misconduct</li>
</ul>
<p className="text-muted-foreground mb-4">Notice for employee misconduct issues.</p>
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
<p className="text-muted-foreground mb-4">Everything you need to know about legal notice for wrongful termination</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>What is wrongful termination?</li>
<li>Who can challenge termination?</li>
<li>What are the legal requirements for notice period?</li>
<li>What is natural justice in termination?</li>
<li>What remedies can I get for wrongful termination?</li>
<li>Can I be terminated during maternity leave?</li>
<li>Am I protected during medical leave?</li>
<li>What is constructive dismissal?</li>
<li>Where should I file wrongful termination case?</li>
<li>How much does wrongful termination notice cost?</li>
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
