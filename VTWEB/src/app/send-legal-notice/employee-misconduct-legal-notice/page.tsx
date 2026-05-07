import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { TrustSignalsSection } from "@/components/features/homepage/trust-signals";
import { FAQSection } from "@/components/shared/faq-section";
import Link from 'next/link';
import ClientFormTrigger from "@/app/send-legal-notice/legal-notice-for-money-recovery/client-form-trigger";

export const metadata: Metadata = {
  title: "Employee Misconduct? | Disciplinary Notice | Start ₹499",
  description: "Employee misconduct issue? Get a lawyer-drafted show cause notice sent today. Pay ₹499 to start + 2-hr callback. Approve the draft before paying ₹1000.",
  keywords: ["employee misconduct legal notice","show cause notice format","disciplinary action notice","employee termination notice","misconduct proceedings"],
  alternates: {
    canonical: "https://vakiltech.in/send-legal-notice/employee-misconduct-legal-notice",
  },
};

export default function GeneratedServicePage() {
const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Employee Misconduct?", current: true },
  ];

  const faqs: any[] = [
  {
    "question": "What constitutes employee misconduct?",
    "answer": "Misconduct includes: gross misconduct (theft, fraud, violence, sexual harassment requiring immediate termination), serious misconduct (insubordination, negligence causing loss, breach of confidentiality), and minor misconduct (tardiness, dress code violations). Criminal misconduct includes embezzlement, forgery, and criminal breach of trust."
  },
  {
    "question": "Is show cause notice mandatory before termination?",
    "answer": "Yes, for most employees, especially 'workmen' under Industrial Disputes Act. Show cause notice is mandatory to comply with principles of natural justice. Terminating without notice makes it wrongful termination, allowing employee to file complaint before Labor Court seeking reinstatement with back wages."
  },
  {
    "question": "What is domestic inquiry and how to conduct it?",
    "answer": "Domestic inquiry is internal investigation followed if employee's response to show cause notice is unsatisfactory. Process: appoint inquiry officer, issue charge sheet with specific allegations, allow employee to defend and cross-examine witnesses, examine evidence, prepare inquiry report, and give findings. Only after inquiry can termination order be issued."
  },
  {
    "question": "Can we recover damages from the employee?",
    "answer": "Yes. If employee's misconduct caused financial loss, you can: deduct from final settlement (within Payment of Wages Act limits), file civil suit for damages, file criminal complaint for embezzlement/fraud/criminal breach of trust, and seek injunction if confidentiality breached. The legal notice should clearly quantify and demand recovery of losses."
  },
  {
    "question": "Can we suspend employee during inquiry?",
    "answer": "Yes, pending inquiry, employee can be placed on suspension with subsistence allowance (typically 50% of wages) as per Standing Orders or employment contract. Suspension allows fair inquiry without employee's presence affecting witnesses or evidence. However, prolonged suspension without inquiry can be challenged."
  },
  {
    "question": "What if employee resigns after show cause notice?",
    "answer": "Accepting resignation doesn't prevent you from pursuing recovery of losses or criminal action if misconduct involved theft/fraud. However, you lose ability to terminate for cause. It's advisable to complete inquiry before accepting resignation, so you can proceed with termination if proved and recover damages."
  },
  {
    "question": "How long does the disciplinary process take?",
    "answer": "Show cause notice: 7 days for response. Domestic inquiry: 30-60 days depending on complexity. Final decision: within 15 days of inquiry report. Total: 2-3 months typically. However, delay in taking action after discovering misconduct can weaken your case, so act promptly."
  },
  {
    "question": "How much does employee misconduct notice cost?",
    "answer": "vakiltech offers employee misconduct show cause notice services for ₹1,499, including: analysis of misconduct and evidence, professional drafting of show cause notice, specific allegations with dates and details, natural justice compliance, demand for recovery if applicable, and guidance on domestic inquiry process."
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
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What constitutes employee misconduct?","acceptedAnswer":{"@type":"Answer","text":"Misconduct includes: gross misconduct (theft, fraud, violence, sexual harassment requiring immediate termination), serious misconduct (insubordination, negligence causing loss, breach of confidentiality), and minor misconduct (tardiness, dress code violations). Criminal misconduct includes embezzlement, forgery, and criminal breach of trust."}},{"@type":"Question","name":"Is show cause notice mandatory before termination?","acceptedAnswer":{"@type":"Answer","text":"Yes, for most employees, especially 'workmen' under Industrial Disputes Act. Show cause notice is mandatory to comply with principles of natural justice. Terminating without notice makes it wrongful termination, allowing employee to file complaint before Labor Court seeking reinstatement with back wages."}},{"@type":"Question","name":"What is domestic inquiry and how to conduct it?","acceptedAnswer":{"@type":"Answer","text":"Domestic inquiry is internal investigation followed if employee's response to show cause notice is unsatisfactory. Process: appoint inquiry officer, issue charge sheet with specific allegations, allow employee to defend and cross-examine witnesses, examine evidence, prepare inquiry report, and give findings. Only after inquiry can termination order be issued."}},{"@type":"Question","name":"Can we recover damages from the employee?","acceptedAnswer":{"@type":"Answer","text":"Yes. If employee's misconduct caused financial loss, you can: deduct from final settlement (within Payment of Wages Act limits), file civil suit for damages, file criminal complaint for embezzlement/fraud/criminal breach of trust, and seek injunction if confidentiality breached. The legal notice should clearly quantify and demand recovery of losses."}},{"@type":"Question","name":"Can we suspend employee during inquiry?","acceptedAnswer":{"@type":"Answer","text":"Yes, pending inquiry, employee can be placed on suspension with subsistence allowance (typically 50% of wages) as per Standing Orders or employment contract. Suspension allows fair inquiry without employee's presence affecting witnesses or evidence. However, prolonged suspension without inquiry can be challenged."}},{"@type":"Question","name":"What if employee resigns after show cause notice?","acceptedAnswer":{"@type":"Answer","text":"Accepting resignation doesn't prevent you from pursuing recovery of losses or criminal action if misconduct involved theft/fraud. However, you lose ability to terminate for cause. It's advisable to complete inquiry before accepting resignation, so you can proceed with termination if proved and recover damages."}},{"@type":"Question","name":"How long does the disciplinary process take?","acceptedAnswer":{"@type":"Answer","text":"Show cause notice: 7 days for response. Domestic inquiry: 30-60 days depending on complexity. Final decision: within 15 days of inquiry report. Total: 2-3 months typically. However, delay in taking action after discovering misconduct can weaken your case, so act promptly."}},{"@type":"Question","name":"How much does employee misconduct notice cost?","acceptedAnswer":{"@type":"Answer","text":"vakiltech offers employee misconduct show cause notice services for ₹1,499, including: analysis of misconduct and evidence, professional drafting of show cause notice, specific allegations with dates and details, natural justice compliance, demand for recovery if applicable, and guidance on domestic inquiry process."}}]}` }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"LegalService","telephone":"+91-70476 83995","image":"https://vakiltech.in/vt-logo.png","address":{"@type":"PostalAddress","addressCountry":"IN"},"priceRange":"\u20b91,499+","name":"vakiltech - Legal Notice for Employee Misconduct","description":"Employee misconduct issue? Get a lawyer-drafted show cause notice sent today. Pay ₹499 to start + 2-hr callback. Approve the draft before paying ₹1000.","url":"https://vakiltech.in/send-legal-notice/employee-misconduct-legal-notice","areaServed":{"@type":"Country","name":"India"},"provider":{"@type":"Organization","name":"vakiltech","url":"https://vakiltech.in","logo":"https://vakiltech.in/logo.png","contactPoint":{"@type":"ContactPoint","telephone":"+91-70476 83995","contactType":"Customer Service","availableLanguage":["English","Hindi"]}},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"500"},"offers":{"@type":"Offer","price":"1499","priceCurrency":"INR","availability":"https://schema.org/InStock"}}` }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"WebPage","name":"Employee Misconduct? | Disciplinary Notice | Start ₹499","description":"Employee misconduct issue? Get a lawyer-drafted show cause notice sent today. Pay ₹499 to start + 2-hr callback. Approve the draft before paying ₹1000.","url":"https://vakiltech.in/send-legal-notice/employee-misconduct-legal-notice","speakable":{"@type":"SpeakableSpecification","cssSelector":["h1","h2",".prose"]},"mainEntity":{"@type":"Service","name":"Legal Notice for Employee Misconduct","description":"When an employee commits misconduct, employers must follow due process before termination. A show cause notice formally documents the misconduct, gives the employee opportunity to explain, and initiates disciplinary inquiry. This protects employers from wrongful termination claims under Industrial Disputes Act and ensures compliance with natural justice principles.","provider":{"@type":"Organization","name":"vakiltech"}}}` }}
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
                    Employee Misconduct?
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Employee misconduct issue? Get a lawyer-drafted show cause notice sent today. Pay ₹499 to start + 2-hr callback. Approve the draft before paying ₹1000.
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
<h2 className="text-2xl font-bold text-foreground mb-4">What is a Legal Notice for Employee Misconduct?</h2>
<p className="text-muted-foreground mb-4">A legal notice for employee misconduct is sent by an employer to an employee who has engaged in serious misconduct, violated company policies, or breached employment contract terms. This notice formally documents the misconduct, initiates disciplinary proceedings, and can lead to termination, recovery of damages, or legal action. It's essential for employers to follow due process before terminating an employee for misconduct, especially under the Industrial Disputes Act 1947 and Standing Orders.</p>
<p className="text-muted-foreground mb-4">Formally documents employee's misconduct or policy violations</p>
<p className="text-muted-foreground mb-4">Initiates disciplinary inquiry as per natural justice principles</p>
<p className="text-muted-foreground mb-4">Can demand recovery of losses caused by employee</p>
<p className="text-muted-foreground mb-4">Prerequisite for termination for cause under labor laws</p>
<p className="text-muted-foreground mb-4">Protects employer from wrongful termination claims</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Types of Employee Misconduct</h2>
<p className="text-muted-foreground mb-4">Employee misconduct can be categorized into different types based on severity:</p>
<p className="text-muted-foreground mb-4">Gross Misconduct: Theft, fraud, violence, sexual harassment (immediate termination)</p>
<p className="text-muted-foreground mb-4">Serious Misconduct: Insubordination, negligence causing loss, breach of confidentiality</p>
<p className="text-muted-foreground mb-4">Minor Misconduct: Tardiness, dress code violations, minor policy breaches</p>
<p className="text-muted-foreground mb-4">Criminal Misconduct: Embezzlement, forgery, criminal breach of trust</p>
<p className="text-muted-foreground mb-4">Behavioral Misconduct: Workplace harassment, bullying, creating hostile environment</p>
<p className="text-muted-foreground mb-4">Performance Misconduct: Consistent underperformance, willful negligence</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Legal Process for Disciplinary Action</h2>
<p className="text-muted-foreground mb-4">Under the Industrial Disputes Act and principles of natural justice, employers must follow proper procedure before terminating an employee for misconduct: Issue show cause notice detailing allegations and asking employee to explain, conduct domestic inquiry if response is unsatisfactory (inquiry officer, opportunity to defend, examine witnesses), consider employee's defense and evidence, issue charge sheet with findings if misconduct is proved, and allow employee to make submissions before final decision. Only after this process can termination order be issued. Skipping any step makes termination wrongful.</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">What Should an Employee Misconduct Notice Contain?</h2>
<p className="text-muted-foreground mb-4">The notice must clearly establish the misconduct and follow legal requirements:</p>
<p className="text-muted-foreground mb-4">Employee's full details: name, designation, employee ID, department</p>
<p className="text-muted-foreground mb-4">Specific allegations of misconduct with dates, times, and details</p>
<p className="text-muted-foreground mb-4">Evidence of misconduct: documents, witness statements, CCTV footage</p>
<p className="text-muted-foreground mb-4">Which company policies or contract terms were violated</p>
<p className="text-muted-foreground mb-4">Losses or damages caused to company (if applicable)</p>
<p className="text-muted-foreground mb-4">Demand for written explanation within specified time (usually 7 days)</p>
<p className="text-muted-foreground mb-4">Warning that failure to respond will lead to ex-parte inquiry</p>
<p className="text-muted-foreground mb-4">Statement that disciplinary action including termination may follow</p>
<p className="text-muted-foreground mb-4">For financial misconduct: demand for recovery of embezzled/lost amounts</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Misconduct vs. Poor Performance</h2>
<p className="text-muted-foreground mb-4">It's crucial to distinguish between misconduct (willful wrongdoing) and poor performance (inability to meet standards). Misconduct involves intentional violation of rules, policies, or ethical standards and can result in immediate termination for gross misconduct. Poor performance involves inability to meet performance targets or skill deficiencies and typically requires performance improvement plans, warnings, and opportunities to improve before termination. Terminating an employee for poor performance without following progressive discipline can be challenged as wrongful termination.</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Recovery of Damages from Employee</h2>
<p className="text-muted-foreground mb-4">If the employee's misconduct caused financial loss to the company, the employer can demand recovery through: deduction from final settlement (within limits prescribed by Payment of Wages Act), civil suit for damages and breach of contract, criminal complaint for embezzlement, fraud, or criminal breach of trust under BNS, or injunction to prevent employee from joining competitor if confidentiality breached. The legal notice should clearly quantify losses and demand immediate recovery to strengthen your legal position.</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Importance of Documentation and Fair Process</h2>
<p className="text-muted-foreground mb-4">Employee misconduct notices and disciplinary action must be meticulously documented to withstand legal scrutiny. Courts and Labor Tribunals closely examine whether natural justice was followed. Approximately 60-70% of wrongful termination cases filed by employees succeed when employers fail to follow proper procedure. A well-drafted legal notice establishing misconduct, followed by fair inquiry, significantly strengthens the employer's position. It demonstrates that termination was for valid cause and not arbitrary, protecting the employer from reinstatement orders and back wage liabilities.</p>
<p className="text-muted-foreground mb-4">Protect your business from wrongful termination claims. Follow proper legal process for disciplinary action.</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Termination Upheld. Saved Company₹25 Lakhs</h2>
<p className="text-muted-foreground mb-4">A company terminated an employee for theft and fraud without proper notice. Employee filed wrongful termination suit claiming ₹25 lakhs. After we helped the company issue proper show cause notice, conduct domestic inquiry, and document everything, the court upheld the termination and dismissed the employee's claim.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Due Process Protection</li>
</ul>
<p className="text-muted-foreground mb-4">Proper show cause notice and inquiry protects against wrongful termination claims.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Natural Justice Compliance</li>
</ul>
<p className="text-muted-foreground mb-4">Following inquiry procedure demonstrates fair process and strengthens employer's position.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Recovery Rights</li>
</ul>
<p className="text-muted-foreground mb-4">Can recover damages from employee for losses caused by misconduct.</p>
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
<li>Review Explanation</li>
</ul>
<p className="text-muted-foreground mb-4">Check if the explanation is valid. If acceptable, issue a warning letter and close the matter.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Domestic Inquiry</li>
</ul>
<p className="text-muted-foreground mb-4">If response is unsatisfactory, appoint an Inquiry Officer to conduct a fair internal trial.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Ex-Parte Inquiry</li>
</ul>
<p className="text-muted-foreground mb-4">Proceed with the inquiry in their absence (after giving enough chances).</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Termination</li>
</ul>
<p className="text-muted-foreground mb-4">Based on the inquiry report proving misconduct, issue a Termination Order.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Need Expert Guidance?</li>
</ul>
<p className="text-muted-foreground mb-4">Not sure if this is the right notice for your situation? Talk to a lawyer for personalized advice before proceeding.</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Industrial Disputes Act andEmployment Laws</h2>
<p className="text-muted-foreground mb-4">Employee termination is governed by Industrial Disputes Act 1947, Standing Orders, employment contracts, and natural justice principles. Improper termination can result in reinstatement orders and back wage liabilities.</p>
<p className="text-muted-foreground mb-4">EXPERT INSIGHT</p>
<p className="text-muted-foreground mb-4">60-70% of wrongful termination cases succeed when employers fail to follow proper procedure. A well-documented misconduct notice is crucial.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>⚖️Legal Process for Disciplinary Action</li>
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
<h2 className="text-2xl font-bold text-foreground mb-4">See a Real Legal Notice for Employee Misconduct Format</h2>
<p className="text-muted-foreground mb-4">Preview a professionally drafted legal notice for employee misconduct.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Sample Legal Notice — Legal Notice for Employee Misconduct</li>
<li>Legally valid format used by 10,000+ lawyers.</li>
</ul>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Get Your Legal Notice for Employee Misconduct Drafted</h2>
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
<li>Wrongful Termination</li>
</ul>
<p className="text-muted-foreground mb-4">Challenge unfair dismissal from employment.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Workplace Harassment</li>
</ul>
<p className="text-muted-foreground mb-4">Action against workplace harassment.</p>
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
<p className="text-muted-foreground mb-4">Everything you need to know about legal notice for employee misconduct</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>What constitutes employee misconduct?</li>
<li>Is show cause notice mandatory before termination?</li>
<li>What is domestic inquiry and how to conduct it?</li>
<li>Can we recover damages from the employee?</li>
<li>Can we suspend employee during inquiry?</li>
<li>What if employee resigns after show cause notice?</li>
<li>How long does the disciplinary process take?</li>
<li>How much does employee misconduct notice cost?</li>
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
