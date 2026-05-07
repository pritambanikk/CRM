import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { TrustSignalsSection } from "@/components/features/homepage/trust-signals";
import { FAQSection } from "@/components/shared/faq-section";
import Link from 'next/link';
import ClientFormTrigger from "@/app/send-legal-notice/legal-notice-for-money-recovery/client-form-trigger";

export const metadata: Metadata = {
  title: "Send Legal Notice for Workplace Harassment - Get Justice | vakiltech",
  description: "Face workplace harassment? Take legal action with a strong notice. Confidential, professional, and supportive assistance.",
  keywords: ["workplace harassment legal notice","sexual harassment notice","POSH Act notice","workplace bullying notice","hostile work environment"],
  alternates: {
    canonical: "https://vakiltech.in/send-legal-notice/workplace-harassment-legal-notice",
  },
};

export default function GeneratedServicePage() {
const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Send Legal Notice for Workplace Harassment - Get Justice", current: true },
  ];

  const faqs: any[] = [
  {
    "question": "What is the POSH Act 2013?",
    "answer": "The Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013 is a law that protects women from sexual harassment at workplace. It mandates all organizations with 10+ employees to constitute an Internal Complaints Committee (ICC) to address harassment complaints. Sexual harassment includes unwelcome physical contact, sexually colored remarks, demand for sexual favors, showing pornography, and any other unwelcome sexual conduct."
  },
  {
    "question": "When should I send a workplace harassment notice?",
    "answer": "Send a legal notice when you face sexual harassment by colleague/supervisor/client, employer fails to take action despite internal complaints, ICC doesn't exist or is non-functional, you experience workplace bullying or discrimination, or face retaliation for refusing advances or filing complaints. The earlier you send the notice, the better for evidence and quick resolution."
  },
  {
    "question": "What types of harassment does POSH Act cover?",
    "answer": "POSH Act covers sexual harassment including: unwelcome physical contact or advances, demand for sexual favors (quid pro quo), sexually colored remarks about appearance/body/personal life, showing pornography, unwelcome sexual jokes or comments, and any other unwelcome physical, verbal, or non-verbal conduct of sexual nature. It also covers harassment creating hostile, intimidating, or offensive work environment."
  },
  {
    "question": "How does ICC investigation work?",
    "answer": "After filing complaint, ICC must conduct inquiry within 90 days. The process includes: recording statements of complainant and witnesses, giving harasser opportunity to respond and defend, examining evidence (emails, messages, CCTVfootage), preparing inquiry report with findings, and recommending action if harassment is proved. ICC can recommend termination, suspension, withholding promotion/increment, or other disciplinary action. Employer must implement recommendations within 60 days."
  },
  {
    "question": "Can men file harassment complaints?",
    "answer": "POSH Act 2013 specifically covers sexual harassment of women. However, men facing workplace bullying, discrimination, or harassment can file complaints under general employment laws, service rules, labor laws, or approach labor authorities. For sexual harassment of men, criminal complaints under relevant BNS sections can be filed."
  },
  {
    "question": "What if my employer retaliates against me?",
    "answer": "Retaliation for filing harassment complaint is illegal under Section 14 of POSH Act. Any adverse action like termination, demotion, denial of promotion, or hostile treatment after filing complaint is prohibited and punishable. If you face retaliation, immediately file complaint with Local Complaints Committee and labor authorities. Courts take retaliatory actions very seriously."
  },
  {
    "question": "How much compensation can I claim?",
    "answer": "Compensation depends on: mental trauma suffered, medical expenses incurred, loss of career opportunities, income lost during proceedings, and severity of harassment. Typical compensation ranges from ₹2-15 lakhs depending on these factors. In severe cases with prolonged harassment, forced resignation, or significant career damage, compensation can be higher."
  },
  {
    "question": "How much does workplace harassment notice cost?",
    "answer": "vakiltech offers workplace harassment legal notice services for ₹1,499, including: consultation on POSH Act rights, professional drafting citing relevant laws, demand for ICC investigation and action, compensation calculation, unlimited revisions, registered post delivery, and guidance on further legal steps if needed."
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
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the POSH Act 2013?","acceptedAnswer":{"@type":"Answer","text":"The Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013 is a law that protects women from sexual harassment at workplace. It mandates all organizations with 10+ employees to constitute an Internal Complaints Committee (ICC) to address harassment complaints. Sexual harassment includes unwelcome physical contact, sexually colored remarks, demand for sexual favors, showing pornography, and any other unwelcome sexual conduct."}},{"@type":"Question","name":"When should I send a workplace harassment notice?","acceptedAnswer":{"@type":"Answer","text":"Send a legal notice when you face sexual harassment by colleague/supervisor/client, employer fails to take action despite internal complaints, ICC doesn't exist or is non-functional, you experience workplace bullying or discrimination, or face retaliation for refusing advances or filing complaints. The earlier you send the notice, the better for evidence and quick resolution."}},{"@type":"Question","name":"What types of harassment does POSH Act cover?","acceptedAnswer":{"@type":"Answer","text":"POSH Act covers sexual harassment including: unwelcome physical contact or advances, demand for sexual favors (quid pro quo), sexually colored remarks about appearance/body/personal life, showing pornography, unwelcome sexual jokes or comments, and any other unwelcome physical, verbal, or non-verbal conduct of sexual nature. It also covers harassment creating hostile, intimidating, or offensive work environment."}},{"@type":"Question","name":"How does ICC investigation work?","acceptedAnswer":{"@type":"Answer","text":"After filing complaint, ICC must conduct inquiry within 90 days. The process includes: recording statements of complainant and witnesses, giving harasser opportunity to respond and defend, examining evidence (emails, messages, CCTVfootage), preparing inquiry report with findings, and recommending action if harassment is proved. ICC can recommend termination, suspension, withholding promotion/increment, or other disciplinary action. Employer must implement recommendations within 60 days."}},{"@type":"Question","name":"Can men file harassment complaints?","acceptedAnswer":{"@type":"Answer","text":"POSH Act 2013 specifically covers sexual harassment of women. However, men facing workplace bullying, discrimination, or harassment can file complaints under general employment laws, service rules, labor laws, or approach labor authorities. For sexual harassment of men, criminal complaints under relevant BNS sections can be filed."}},{"@type":"Question","name":"What if my employer retaliates against me?","acceptedAnswer":{"@type":"Answer","text":"Retaliation for filing harassment complaint is illegal under Section 14 of POSH Act. Any adverse action like termination, demotion, denial of promotion, or hostile treatment after filing complaint is prohibited and punishable. If you face retaliation, immediately file complaint with Local Complaints Committee and labor authorities. Courts take retaliatory actions very seriously."}},{"@type":"Question","name":"How much compensation can I claim?","acceptedAnswer":{"@type":"Answer","text":"Compensation depends on: mental trauma suffered, medical expenses incurred, loss of career opportunities, income lost during proceedings, and severity of harassment. Typical compensation ranges from ₹2-15 lakhs depending on these factors. In severe cases with prolonged harassment, forced resignation, or significant career damage, compensation can be higher."}},{"@type":"Question","name":"How much does workplace harassment notice cost?","acceptedAnswer":{"@type":"Answer","text":"vakiltech offers workplace harassment legal notice services for ₹1,499, including: consultation on POSH Act rights, professional drafting citing relevant laws, demand for ICC investigation and action, compensation calculation, unlimited revisions, registered post delivery, and guidance on further legal steps if needed."}}]}` }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"LegalService","telephone":"+91-70476 83995","image":"https://vakiltech.in/vt-logo.png","address":{"@type":"PostalAddress","addressCountry":"IN"},"priceRange":"\u20b91,499+","name":"vakiltech - Legal Notice for Workplace Harassment","description":"Face workplace harassment? Take legal action with a strong notice. Confidential, professional, and supportive assistance.","url":"https://vakiltech.in/send-legal-notice/workplace-harassment-legal-notice","areaServed":{"@type":"Country","name":"India"},"provider":{"@type":"Organization","name":"vakiltech","url":"https://vakiltech.in","logo":"https://vakiltech.in/logo.png","contactPoint":{"@type":"ContactPoint","telephone":"+91-70476 83995","contactType":"Customer Service","availableLanguage":["English","Hindi"]}},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"500"},"offers":{"@type":"Offer","price":"1499","priceCurrency":"INR","availability":"https://schema.org/InStock"}}` }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"WebPage","name":"Send Legal Notice for Workplace Harassment - Get Justice | vakiltech","description":"Face workplace harassment? Take legal action with a strong notice. Confidential, professional, and supportive assistance.","url":"https://vakiltech.in/send-legal-notice/workplace-harassment-legal-notice","speakable":{"@type":"SpeakableSpecification","cssSelector":["h1","h2",".prose"]},"mainEntity":{"@type":"Service","name":"Legal Notice for Workplace Harassment","description":"Facing harassment? Sending a legal notice for mental harassment or workplace sexual harassment is a critical step to assert your rights. Under the POSH Act 2013, this notice compels the employer to constitute an Internal Complaints Committee (ICC) and investigate the matter within 90 days.","provider":{"@type":"Organization","name":"vakiltech"}}}` }}
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
                    Send Legal Notice for Workplace Harassment - Get Justice
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Face workplace harassment? Take legal action with a strong notice. Confidential, professional, and supportive assistance.
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
<h2 className="text-2xl font-bold text-foreground mb-4">What is a Legal Notice for Workplace Harassment?</h2>
<p className="text-muted-foreground mb-4">A legal notice for workplace harassment is sent to demand action against harassment, discrimination, or hostile work environment at the workplace. Under the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act 2013 (POSH Act), and general employment laws, employers are legally obligated to provide safe, harassment-free workplace. This notice demands investigation, disciplinary action against harassers, compensation, and corrective measures. It applies to sexual harassment, workplace bullying, discrimination, and hostile environment.</p>
<p className="text-muted-foreground mb-4">Addresses sexual harassment, bullying, discrimination at workplace</p>
<p className="text-muted-foreground mb-4">Mandatory under POSH Act 2013 for sexual harassment of women</p>
<p className="text-muted-foreground mb-4">Demands Internal Committee investigation and action</p>
<p className="text-muted-foreground mb-4">Can claim compensation for mental agony and career damage</p>
<p className="text-muted-foreground mb-4">Employer legally liable for not preventing harassment</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Types of Workplace Harassment</h2>
<p className="text-muted-foreground mb-4">Workplace harassment can take various forms, all of which are legally actionable:</p>
<p className="text-muted-foreground mb-4">Sexual Harassment: Unwelcome sexual advances, requests, remarks, touching</p>
<p className="text-muted-foreground mb-4">Verbal Harassment: Abusive language, humiliation, threats, shouting</p>
<p className="text-muted-foreground mb-4">Discrimination: Based on gender, caste, religion, disability, pregnancy</p>
<p className="text-muted-foreground mb-4">Bullying: Intimidation, isolation, sabotage of work, constant criticism</p>
<p className="text-muted-foreground mb-4">Hostile Environment: Offensive jokes, sexual content, exclusion</p>
<p className="text-muted-foreground mb-4">Quid Pro Quo: Sexual favors demanded for job benefits or to avoid harm</p>
<p className="text-muted-foreground mb-4">Retaliation: Punishment for refusing advances or filing complaints</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">POSH Act 2013: Protection for Women</h2>
<p className="text-muted-foreground mb-4">The Sexual Harassment of Women at Workplace Act 2013 mandates that every organization with 10+ employees must constitute an Internal Complaints Committee (ICC) to address sexual harassment complaints. Sexual harassment includes: unwelcome physical contact, sexually colored remarks, demand for sexual favors, showing pornography, and any other unwelcome physical, verbal, or non-verbal conduct of sexual nature. Women employees, interns, apprentices, and visitors are protected. Employers who fail to prevent harassment or constitute ICC face penalties up to ₹50,000. The notice should be addressed to ICC and employer demanding investigation.</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">When to Send Workplace Harassment Notice?</h2>
<p className="text-muted-foreground mb-4">You should send a legal notice for workplace harassment when:</p>
<p className="text-muted-foreground mb-4">You face sexual harassment by colleague, supervisor, or client</p>
<p className="text-muted-foreground mb-4">Employer fails to take action despite internal complaints</p>
<p className="text-muted-foreground mb-4">Internal Complaints Committee doesn't exist or is non-functional</p>
<p className="text-muted-foreground mb-4">You experience workplace bullying or hostile environment</p>
<p className="text-muted-foreground mb-4">Discrimination in promotions, pay, or assignments</p>
<p className="text-muted-foreground mb-4">Retaliation for refusing sexual advances or filing complaints</p>
<p className="text-muted-foreground mb-4">Constructive dismissal due to harassment (forced to resign)</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">What Should the Notice Contain?</h2>
<p className="text-muted-foreground mb-4">Your workplace harassment notice must document the harassment comprehensively:</p>
<p className="text-muted-foreground mb-4">Detailed account of harassment incidents with dates, times, locations</p>
<p className="text-muted-foreground mb-4">Identity of harasser(s) - colleague, supervisor, client, vendor</p>
<p className="text-muted-foreground mb-4">Names of witnesses who observed or have knowledge of incidents</p>
<p className="text-muted-foreground mb-4">Evidence: emails, messages, CCTV footage, audio recordings (if any)</p>
<p className="text-muted-foreground mb-4">Internal complaints filed and employer's inadequate response</p>
<p className="text-muted-foreground mb-4">Impact on your mental health, performance, and career</p>
<p className="text-muted-foreground mb-4">Demand for ICC investigation and inquiry against harasser</p>
<p className="text-muted-foreground mb-4">Demand for disciplinary action including termination of harasser</p>
<p className="text-muted-foreground mb-4">Compensation claim for mental agony, medical expenses, career loss</p>
<p className="text-muted-foreground mb-4">Demand for preventive measures to ensure no retaliation</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Remedies and Legal Action Available</h2>
<p className="text-muted-foreground mb-4">After sending the notice, if the employer fails to act, you can file complaint with Local Complaints Committee (LCC) constituted by District Officer, file complaint with Police (for sexual assault, stalking, voyeurism under IPC/BNS), file complaint with Labor Commissioner for workplace violations, file civil suit for damages and compensation, or report to Ministry of Women and Child Development. Under POSH Act, ICC must complete inquiry within 90 days and can recommend compensation, termination, suspension, or other action. Employer must implement ICC recommendations within 60 days.</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Success Rate and Importance of Documentation</h2>
<p className="text-muted-foreground mb-4">Workplace harassment cases succeed when backed by strong documentation. Approximately 55-65% of harassment complaints filed with ICC result in findings against the harasser. Legal notices create formal record and pressure employers to act immediately. Many employers settle by taking action against harassers, offering compensation, or improving workplace policies to avoid litigation and reputation damage. It's crucial to document every incident, save all evidence (emails, messages, recordings), file internal complaints immediately, and seek medical/psychological help (creates medical records as evidence).</p>
<p className="text-muted-foreground mb-4">No one should face harassment at work. Take legal action to protect your dignity and career.</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Harasser Terminated. Compensation of₹12 Lakhs</h2>
<p className="text-muted-foreground mb-4">Priya faced persistent sexual harassment from her manager for 8 months. After filing a legal notice demanding ICC inquiry, the company conducted investigation, terminated the harasser, and paid ₹12 lakhs compensation to Priya for mental trauma and career damage.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>POSH Act Protection</li>
</ul>
<p className="text-muted-foreground mb-4">Employers must constitute ICC and investigate all complaints within 90 days.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Fast Resolution</li>
</ul>
<p className="text-muted-foreground mb-4">Most employers act immediately after legal notice to avoid penalties and litigation.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Compensation Rights</li>
</ul>
<p className="text-muted-foreground mb-4">Can claim compensation for mental agony, medical expenses, and career loss.</p>
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
<li>ICC Inquiry</li>
</ul>
<p className="text-muted-foreground mb-4">The company must constitute an ICC (Internal Complaints Committee) to investigate within 90 days.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Resolution</li>
</ul>
<p className="text-muted-foreground mb-4">If proven, the harasser can be terminated, suspended, or asked to apologize.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>File Complaint</li>
</ul>
<p className="text-muted-foreground mb-4">Complain to the District Officer (LCC) or Ministry of Women &amp; Child Development (She-Box).</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Labor Court</li>
</ul>
<p className="text-muted-foreground mb-4">Approach the Labor Court for wrongful treatment or failure to implement POSH Act.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Need Expert Guidance?</li>
</ul>
<p className="text-muted-foreground mb-4">Not sure if this is the right notice for your situation? Talk to a lawyer for personalized advice before proceeding.</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">POSH Act 2013 andHarassment Laws</h2>
<p className="text-muted-foreground mb-4">Workplace harassment is prohibited under POSH Act 2013, Constitution (equality and dignity), and criminal laws. Employers face penalties up to ₹50,000 for non-compliance.</p>
<p className="text-muted-foreground mb-4">EXPERT INSIGHT</p>
<p className="text-muted-foreground mb-4">55-65% of workplace harassment complaints result in action against the harasser when proper legal notice is sent.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>⚖️Legal Protections Against Harassment</li>
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
<h2 className="text-2xl font-bold text-foreground mb-4">See a Real Legal Notice for Workplace Harassment Format</h2>
<p className="text-muted-foreground mb-4">Preview a professionally drafted legal notice for workplace harassment.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Sample Legal Notice — Legal Notice for Workplace Harassment</li>
<li>Legally valid format used by 10,000+ lawyers.</li>
</ul>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Get Your Legal Notice for Workplace Harassment Drafted</h2>
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
<p className="text-muted-foreground mb-4">Everything you need to know about legal notice for workplace harassment</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>What is the POSH Act 2013?</li>
<li>When should I send a workplace harassment notice?</li>
<li>What types of harassment does POSH Act cover?</li>
<li>How does ICC investigation work?</li>
<li>Can men file harassment complaints?</li>
<li>What if my employer retaliates against me?</li>
<li>How much compensation can I claim?</li>
<li>How much does workplace harassment notice cost?</li>
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
