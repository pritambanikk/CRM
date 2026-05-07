import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { TrustSignalsSection } from "@/components/features/homepage/trust-signals";
import { FAQSection } from "@/components/shared/faq-section";
import Link from 'next/link';
import ClientFormTrigger from "@/app/send-legal-notice/legal-notice-for-money-recovery/client-form-trigger";
import SalaryFormCTA from "./salary-form-cta";

export const metadata: Metadata = {
  title: "Employer Not Paying Salary? Legal Notice – ₹1,499 | vakiltech",
  description: "Employer not paying salary? Send a lawyer-drafted legal notice under Payment of Wages Act in 24 hrs. Flat ₹1,499. Start now →",
  keywords: [
    "employer not paying salary",
    "legal notice for non payment of salary",
    "salary recovery legal notice india",
    "legal notice for unpaid salary format",
    "non payment of salary legal notice",
    "complaint against employer for non payment of salary",
    "labour law for salary delay in india",
    "salary issue legal notice",
  ],
  alternates: {
    canonical: "https://vakiltech.in/send-legal-notice/legal-notice-for-unpaid-salary",
  },
  openGraph: {
    title: "Employer Not Paying Salary? Legal Notice – ₹1,499 | vakiltech",
    description: "Employer not paying salary? Send a lawyer-drafted legal notice under Payment of Wages Act in 24 hrs. Flat ₹1,499. Start now →",
    url: "https://vakiltech.in/send-legal-notice/legal-notice-for-unpaid-salary",
    siteName: "vakiltech",
    images: [
      {
        url: "https://vakiltech.in/og/legal-notice-unpaid-salary.png",
        width: 1200,
        height: 630,
        alt: "Legal notice for employer not paying salary — professional drafting service by vakiltech advocates",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Employer Not Paying Salary? Legal Notice – ₹1,499 | vakiltech",
    description: "Employer not paying salary? Send a lawyer-drafted legal notice under Payment of Wages Act in 24 hrs. Flat ₹1,499. Start now →",
    images: ["https://vakiltech.in/og/legal-notice-unpaid-salary.png"],
  },
};

export default function GeneratedServicePage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Legal Notice", href: "/send-legal-notice" },
    { label: "Legal Notice for Unpaid Salary", current: true },
  ];

  const faqs: any[] = [
    {
      question: "What is a legal notice for unpaid salary?",
      answer: "A legal notice for unpaid salary is a formal document sent by an employee to an employer demanding payment of overdue salary under the Payment of Wages Act, 1936. It serves as a pre-litigation communication and gives the employer 15–30 days to settle dues before the employee files a case in Labour Court or Civil Court.",
    },
    {
      question: "When should I send a salary recovery notice?",
      answer: "Send a salary recovery notice when your employer has not paid salary for one or more months, when salary has been illegally deducted, or when full-and-final settlement, incentives, or notice period pay remain unpaid after repeated follow-ups with HR. Early action prevents accumulation of dues.",
    },
    {
      question: "What can I claim in a salary recovery notice?",
      answer: "You can claim: outstanding monthly salary, overtime wages, pending bonuses, leave encashment, gratuity (if eligible), full & final settlement amounts, and interest on delayed amounts. You can also claim compensation for mental harassment caused by the employer's non-payment.",
    },
    {
      question: "Can I claim salary for the notice period?",
      answer: "Yes. If you served your notice period or if your employer terminated you without notice, you are legally entitled to receive salary for that period. This can be included as a separate claim in the legal notice.",
    },
    {
      question: "How long should I give the employer to pay?",
      answer: "The standard response window is 15 to 30 days from receipt of notice. If the employer does not respond or settle within this period, you can file a complaint with the Labour Commissioner or approach Labour Court.",
    },
    {
      question: "Should I approach Labour Court or Civil Court?",
      answer: "Labour Court is appropriate if you qualify as a 'workman' under the Industrial Disputes Act, 1947 — broadly, non-supervisory employees. Managers and executives must approach Civil Court for a money recovery suit. An employment lawyer can confirm which forum applies to your case.",
    },
    {
      question: "Can I send a notice even after termination?",
      answer: "Yes. Even after resignation or termination, you have the right to recover all unpaid salary, dues, and benefits for the period you worked. You have 3 years under the Limitation Act to file a civil suit — act promptly.",
    },
    {
      question: "Can I claim interest on delayed salary?",
      answer: "Yes. Under the Payment of Wages Act, 1936, you can claim compensation for delay. Courts regularly award interest at 6–9% per annum on delayed salary payments, and this can be demanded in the legal notice itself.",
    },
    {
      question: "What documents do I need to send a salary legal notice?",
      answer: "You need your appointment letter, employment contract, salary slips or bank statements showing non-credit of salary, and any written HR communication about pending dues. You do not need all documents — even with partial proof a notice can be sent.",
    },
    {
      question: "How much does a salary recovery notice cost?",
      answer: "vakiltech charges ₹1,499 for drafting and sending a comprehensive salary recovery legal notice — including consultation with labour law experts, unlimited revisions, registered post delivery, and guidance on next steps if the employer does not respond.",
    },
    {
      question: "Does the Payment of Wages Act apply to IT employees?",
      answer: "The Payment of Wages Act applies to employees earning up to ₹24,000 per month. IT employees earning above this threshold may rely on the Industrial Disputes Act, 1947 or their employment contract for salary recovery. State Shops & Establishments Acts typically cover all private sector employees regardless of salary.",
    },
  ];

  return (
    <>
      {/* schema-migrated */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: { "@type": "Answer", text: f.answer },
            })),
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"LegalService","telephone":"+91-70476 83995","image":"https://vakiltech.in/vt-logo.png","address":{"@type":"PostalAddress","addressCountry":"IN"},"priceRange":"\u20b91,499+","name":"vakiltech - Legal Notice for Unpaid Salary","description":"Employer not paying? Send legal notice for salary & dues under Labour Laws. Expert advocate drafting. ₹1,499 | Confidential service.","url":"https://vakiltech.in/send-legal-notice/legal-notice-for-unpaid-salary","areaServed":{"@type":"Country","name":"India"},"provider":{"@type":"Organization","name":"vakiltech","url":"https://vakiltech.in","logo":"https://vakiltech.in/logo.png","contactPoint":{"@type":"ContactPoint","telephone":"+91-70476 83995","contactType":"Customer Service","availableLanguage":["English","Hindi"]}},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"500"},"offers":{"@type":"Offer","price":"1499","priceCurrency":"INR","availability":"https://schema.org/InStock"}}` }}
      />
    <main className="min-h-screen bg-gradient-to-b from-background to-background/55">

      <div className="container mx-auto px-6 md:px-8 pb-8">
        {/* HERO SECTION */}
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
                    Employer Not Paying Salary? Here&apos;s How to Send a Legal Notice and Recover Your Dues
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    If your employer is not paying salary, you have clear legal rights under the Payment of Wages Act, 1936 and the Industrial Disputes Act, 1947. Non-payment of salary is a statutory violation — not just a workplace dispute. The most effective first step is sending a formal legal notice through an advocate, which legally compels your employer to respond. In most cases, employers settle within 15–30 days to avoid Labour Commissioner scrutiny. vakiltech drafts and dispatches lawyer-certified salary recovery notices for a flat ₹1,499, with 24-hour turnaround.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <SalaryFormCTA variant="primary">
                    Send Legal Notice to My Employer — ₹1,499
                  </SalaryFormCTA>
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

          {/* TABLE OF CONTENTS */}
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
            <h2 className="text-lg font-semibold text-foreground mb-4">On This Page</h2>
            <ol className="list-decimal pl-5 space-y-2 text-primary text-sm">
              <li><a href="#what-to-do" className="hover:underline">What to Do When Employer Is Not Paying Salary</a></li>
              <li><a href="#your-rights" className="hover:underline">Your Legal Rights When Salary Is Not Paid</a></li>
              <li><a href="#laws" className="hover:underline">Laws That Protect Employees</a></li>
              <li><a href="#documents" className="hover:underline">Documents You Need</a></li>
              <li><a href="#how-to-send" className="hover:underline">How to Send the Legal Notice</a></li>
              <li><a href="#after-notice" className="hover:underline">What Happens After Sending</a></li>
              <li><a href="#sample-format" className="hover:underline">Sample Legal Notice Format</a></li>
              <li><a href="#pricing" className="hover:underline">Pricing</a></li>
              <li><a href="#faq" className="hover:underline">Frequently Asked Questions</a></li>
            </ol>
          </div>

          {/* SECTION 1: WHAT TO DO */}
          <div id="what-to-do" className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">What to Do When Your Employer Is Not Paying Salary (India — Step-by-Step)</h2>
            <p className="text-muted-foreground mb-4">Follow these steps in order. Each step creates a stronger paper trail if you need to go to court.</p>
            <ol className="list-decimal pl-5 space-y-3 text-muted-foreground">
              <li><strong>Document every unpaid month</strong> — save bank statements showing non-credit of salary, payslips if issued, and any digital communication from the company about payment.</li>
              <li><strong>Send a formal written email to HR</strong> — state the months unpaid, the amount owed, and give a 7-day deadline. Keep the email chain. This is your paper trail and shows good faith before escalating.</li>
              <li><strong>Engage an advocate to draft a legal notice</strong> — a notice on advocate letterhead under the Payment of Wages Act, 1936 carries legal weight. It signals you are serious and the employer risks Labour Commissioner action if they ignore it.</li>
              <li><strong>Dispatch via Speed Post with Acknowledgement Due</strong> — send to the employer&apos;s registered address. Keep the receipt. This is your proof of service.</li>
              <li><strong>Allow 15–30 days for response</strong> — most employers settle at this stage to avoid official scrutiny.</li>
              <li><strong>If no response: escalate</strong> — file a complaint with the Labour Commissioner or approach Labour Court (workmen) or Civil Court (managers/executives).</li>
            </ol>
          </div>

          {/* SECTION 2: LEGAL RIGHTS */}
          <div id="your-rights" className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Your Legal Rights When an Employer Stops Paying Salary in India</h2>
            <p className="text-muted-foreground mb-4">
              Non-payment of salary is not a civil dispute you have to tolerate — it is a punishable statutory offense under Indian labour law. As an employee, you have the right to:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-4">
              <li>Recover outstanding salary for every unpaid month</li>
              <li>Claim interest on delayed salary payments</li>
              <li>Demand compensation for mental harassment caused by non-payment</li>
              <li>Recover unpaid bonuses, incentives, leave encashment, and full &amp; final settlement</li>
              <li>File a complaint with the Labour Commissioner without a lawyer</li>
              <li>Approach Labour Court or Civil Court if the employer does not settle</li>
            </ul>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mt-4">
              <p className="text-sm font-semibold text-primary mb-1">⚖️ Expert Insight</p>
              <p className="text-sm text-muted-foreground">Non-payment of salary is a serious offense. Employers who receive a formal legal notice from an advocate almost always settle before the case reaches a Labour Commissioner — because an inspection of their premises and payroll records follows automatically.</p>
            </div>
          </div>

          {/* SECTION 3: LAWS */}
          <div id="laws" className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Laws That Protect You When an Employer Is Not Paying Salary</h2>

            <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">Payment of Wages Act, 1936 — Key Provisions</h3>
            <p className="text-muted-foreground mb-4">
              The Payment of Wages Act, 1936 mandates that employers pay wages before the 7th of each month (for establishments with fewer than 1,000 employees) or the 10th (for larger ones). Violation exposes the employer to fines up to ₹7,500 and criminal liability. The Act covers employees earning up to ₹24,000 per month.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">Industrial Disputes Act, 1947 — When Does It Apply?</h3>
            <p className="text-muted-foreground mb-4">
              The Industrial Disputes Act, 1947 applies to &quot;workmen&quot; — broadly defined as employees in non-managerial, non-supervisory roles. If you fall under this definition, you can approach the Labour Court directly. The Act also provides for reinstatement and back wages in wrongful termination cases linked to salary disputes.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">State Shops &amp; Establishments Acts — What They Cover</h3>
            <p className="text-muted-foreground mb-4">
              State Shops &amp; Establishments Acts extend salary protection to employees not covered by central legislation — including most private sector office workers, IT employees, and retail staff. These Acts vary by state but uniformly require timely salary payment and provide for complaints to local labour offices.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">Does the Payment of Wages Act Apply to IT Employees?</h3>
            <p className="text-muted-foreground mb-4">
              The Payment of Wages Act applies to employees earning up to ₹24,000/month. IT employees earning above this may rely on their employment contract and the Industrial Disputes Act for salary recovery. State Shops &amp; Establishments Acts typically cover all private sector employees regardless of salary level.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">What Is the Time Limit to Claim Unpaid Salary in India?</h3>
            <p className="text-muted-foreground mb-4">
              Under the Limitation Act, 1963, you have 3 years from the date of non-payment to file a civil suit for salary recovery. For Labour Court complaints under the Industrial Disputes Act, the limitation varies by state — act as early as possible.
            </p>
          </div>

          {/* SECTION 4: DOCUMENTS */}
          <div id="documents" className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Documents You Need Before Sending a Salary Recovery Legal Notice</h2>
            <p className="text-muted-foreground mb-4">
              You do not need every document listed below — even partial documentation is sufficient to send a valid notice. Gather whatever you have:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-4">
              <li><strong>Appointment letter</strong> — confirms employment start date and agreed salary</li>
              <li><strong>Employment contract</strong> — shows contractual salary obligations and notice period terms</li>
              <li><strong>Bank statements</strong> — shows months where salary was not credited</li>
              <li><strong>Salary slips</strong> — if previously issued, useful to establish the salary amount</li>
              <li><strong>HR email chain</strong> — written follow-ups to HR are strong evidence of employer awareness</li>
              <li><strong>Offer letter / increment letters</strong> — establishes the current salary entitlement</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">What If You Don&apos;t Have a Written Employment Contract?</h3>
            <p className="text-muted-foreground mb-4">
              A written contract is not mandatory to send a legal notice. Your appointment letter, offer email, or even consistent monthly salary credits to your bank account establish an implied contract. Our advocates regularly draft notices for employees who have only partial documentation.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">Is an Appointment Letter Required?</h3>
            <p className="text-muted-foreground mb-4">
              An appointment letter strengthens your case but is not strictly required. Bank statements showing previous salary credits, Provident Fund records (EPFO), or ESI records can substitute as proof of employment and salary amount.
            </p>
          </div>

          {/* SECTION 5: HOW TO SEND */}
          <div id="how-to-send" className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">How to Send a Legal Notice to Employer for Non-Payment of Salary</h2>

            <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">Step 1 — Send a Formal Email to HR and Document It</h3>
            <p className="text-muted-foreground mb-4">
              Before the legal notice, send a written email to HR and your direct manager stating the months unpaid and the exact amount owed. Give a 7-day deadline. Save the email. If they ignore it, this becomes evidence that informal resolution was attempted.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">Step 2 — Engage an Advocate to Draft the Notice</h3>
            <p className="text-muted-foreground mb-4">
              A notice on advocate letterhead carries far more weight than a personal letter. The advocate cites specific sections of the Payment of Wages Act, 1936 and the applicable State Shops &amp; Establishments Act, states the demand clearly, and sets a 15–30 day response window.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">Step 3 — Send via Speed Post with Acknowledgement Due</h3>
            <p className="text-muted-foreground mb-4">
              Dispatch the notice to the employer&apos;s registered office address via Speed Post with Acknowledgement Due (AD). Keep the receipt and the AD card when returned — these are your proof of service if the employer later claims they never received the notice.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">Step 4 — Allow 15–30 Days for Employer Response</h3>
            <p className="text-muted-foreground mb-4">
              Most employers respond within this window — either paying in full, negotiating a settlement, or requesting more time. If there is no response after 30 days, you proceed to formal legal action.
            </p>

            <div className="mt-6">
              <SalaryFormCTA variant="primary">
                Send Legal Notice to My Employer — ₹1,499
              </SalaryFormCTA>
            </div>
          </div>

          {/* SECTION 6: AFTER NOTICE */}
          <div id="after-notice" className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">What Happens If Employer Ignores the Legal Notice? (Step-by-Step)</h2>
            <p className="text-muted-foreground mb-4">If the employer does not respond or settle within the notice period, you have three escalation paths:</p>

            <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">File Complaint with Labour Commissioner</h3>
            <p className="text-muted-foreground mb-4">
              File a formal written complaint with the Labour Commissioner of your area. The Commissioner will summon the employer for a conciliation meeting. Employers who receive this summons almost always negotiate — because a formal inspection of their payroll and statutory compliance records follows automatically.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">Approach Labour Court (for Workmen) or Civil Court (for Managers)</h3>
            <p className="text-muted-foreground mb-4">
              If conciliation fails, file a case in Labour Court if you are a &quot;workman&quot; under the Industrial Disputes Act, 1947. Managers, executives, and employees earning above the threshold must file a money recovery suit in Civil Court. Both courts can award the full salary owed plus interest and costs.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">Fast-Track Summary Suit for Quick Monetary Relief</h3>
            <p className="text-muted-foreground mb-4">
              For salary disputes with clear documentary evidence, you can file an Order VII Rule 1 summary suit in Civil Court — a fast-track procedure designed for cases where the defendant has no real defence. This delivers quicker monetary relief than a full civil trial.
            </p>
          </div>

          {/* SECTION 7: CASE STUDY */}
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Real Case: ₹3.6 Lakhs Recovered in 45 Days</h2>
            <p className="text-muted-foreground mb-4">
              Rahul, a software engineer in Bangalore, was not paid for 6 months when his startup faced a funding crisis. After sending a legal notice through vakiltech citing the Payment of Wages Act and threatening Labour Court action, his employer paid in full within 45 days — avoiding a formal Commissioner inquiry.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li><strong>Payment of Wages Act, 1936</strong> protects salary rights with criminal liability for employers</li>
              <li><strong>Labour Court</strong> option available if employer ignores the notice</li>
              <li><strong>Interest &amp; compensation</strong> can be claimed on delayed salary in addition to the principal amount</li>
            </ul>
          </div>

          {/* SECTION 8: SAMPLE FORMAT */}
          <div id="sample-format" className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Sample Legal Notice Format for Non-Payment of Salary (Lawyer-Drafted)</h2>
            <p className="text-muted-foreground mb-4">
              Below is a representative format of a lawyer-drafted legal notice for employer not paying salary. The actual notice drafted for your case will include specific facts, applicable law sections, and your exact claim amount.
            </p>
            <div className="bg-muted/50 border border-border rounded-lg p-5 text-sm text-muted-foreground font-mono leading-relaxed">
              <p className="mb-2"><strong>LEGAL NOTICE</strong></p>
              <p className="mb-2">To,<br />The Managing Director / HR Manager,<br />[Employer Company Name],<br />[Registered Office Address]</p>
              <p className="mb-2">Sub: Legal Notice for Non-Payment of Salary — Recovery of ₹[Amount] under the Payment of Wages Act, 1936</p>
              <p className="mb-2">Under instructions and on behalf of my client, [Employee Name], [Designation], formerly employed with your organization from [Date] to [Date], I hereby serve you with the following legal notice:</p>
              <p className="mb-2">1. That my client was employed by your company at a monthly salary of ₹[Amount] as per the appointment letter dated [Date].</p>
              <p className="mb-2">2. That despite my client&apos;s diligent service, your company has failed and neglected to pay salary for the period [Month/Year] to [Month/Year], amounting to ₹[Total Amount].</p>
              <p className="mb-2">3. That the non-payment of salary constitutes a violation of Section 5 of the Payment of Wages Act, 1936, and applicable State Shops &amp; Establishments Act.</p>
              <p className="mb-2">4. You are hereby called upon to pay the outstanding dues of ₹[Amount] together with interest thereon within <strong>15 (fifteen) days</strong> of receipt of this notice, failing which my client shall be constrained to file appropriate proceedings before the competent Labour Court / Civil Court without any further notice to you, entirely at your risk, cost, and consequences.</p>
              <p>[Advocate Name, Bar Council Number]</p>
            </div>
            <p className="text-muted-foreground text-sm mt-4">Legally valid format. Used in 10,000+ cases across India.</p>
            <div className="mt-6">
              <SalaryFormCTA variant="primary">
                Get This Exact Format Drafted for Your Case → Start for ₹1,499
              </SalaryFormCTA>
            </div>
          </div>

          {/* SECTION 9: HOW WE WORK */}
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">How to Send Legal Notice to Employer for Non-Payment of Salary — Our Process</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-4">
              <div>
                <p className="font-semibold text-foreground mb-2">1. You Tell Us</p>
                <p className="text-muted-foreground text-sm">Answer simple questions: employer name, salary amount owed, months unpaid, employment dates. Upload available documents. Done in 5 minutes.</p>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-2">2. We Draft</p>
                <p className="text-muted-foreground text-sm">Expert labour law advocates draft your notice citing the Payment of Wages Act, 1936 and applicable state laws. You review and approve before anything is sent.</p>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-2">3. We Send</p>
                <p className="text-muted-foreground text-sm">Dispatched via Speed Post with Acknowledgement Due to your employer&apos;s registered address. Tracking ID shared with you. Notice valid in all Indian courts.</p>
              </div>
            </div>
          </div>

          {/* SECTION 10: WHY VAKILTECH */}
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Why 18,000+ Indians Trust vakiltech for Salary Recovery Notices</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              <div className="text-center">
                <p className="font-semibold text-foreground text-sm">Expert Drafted</p>
                <p className="text-muted-foreground text-xs mt-1">Valid in all Indian courts.</p>
              </div>
              <div className="text-center">
                <p className="font-semibold text-foreground text-sm">Zero Court Visits</p>
                <p className="text-muted-foreground text-xs mt-1">100% digital process.</p>
              </div>
              <div className="text-center">
                <p className="font-semibold text-foreground text-sm">Ready in 24 Hrs</p>
                <p className="text-muted-foreground text-xs mt-1">Fastest turnaround.</p>
              </div>
              <div className="text-center">
                <p className="font-semibold text-foreground text-sm">Save 80% Cost</p>
                <p className="text-muted-foreground text-xs mt-1">Transparent ₹1,499 pricing.</p>
              </div>
            </div>
          </div>


          {/* SECTION 11: GET STARTED FORM */}
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">Get Your Legal Notice for Unpaid Salary Drafted</h2>
            <p className="text-muted-foreground mb-6">Fill out the form below to get started. Takes 5 minutes. Our advocate reviews your case and drafts the notice within 24 hours.</p>
            <ClientFormTrigger />
          </div>

          {/* SECTION 12: PRICING */}
          <div id="pricing" className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Simple, Transparent Pricing</h2>
            <p className="text-muted-foreground mb-6">No hidden charges. Pay only for what you need.</p>
            <div className="border border-primary/30 rounded-xl p-6 bg-primary/5">
              <p className="text-3xl font-bold text-foreground mb-1">₹1,499</p>
              <p className="text-muted-foreground text-sm mb-4">One-time flat fee. No court visits.</p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li className="flex items-start gap-2"><span className="text-primary font-bold mt-0.5">✓</span> Free legal consultation before drafting</li>
                <li className="flex items-start gap-2"><span className="text-primary font-bold mt-0.5">✓</span> Legal notice drafted by registered advocate</li>
                <li className="flex items-start gap-2"><span className="text-primary font-bold mt-0.5">✓</span> Unlimited revisions until you approve</li>
                <li className="flex items-start gap-2"><span className="text-primary font-bold mt-0.5">✓</span> Sent via Speed Post with tracking ID</li>
                <li className="flex items-start gap-2"><span className="text-primary font-bold mt-0.5">✓</span> 24/7 support throughout the process</li>
                <li className="flex items-start gap-2"><span className="text-primary font-bold mt-0.5">✓</span> Guidance on next steps if employer doesn&apos;t respond</li>
              </ul>
              <SalaryFormCTA variant="primary-wide">
                Send Legal Notice to My Employer — ₹1,499
              </SalaryFormCTA>
            </div>
          </div>

          {/* SECTION 13: RELATED NOTICES — INTERNAL LINKING */}
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Other Employment &amp; Money Recovery Legal Notices</h2>
            <p className="text-muted-foreground mb-4">Need a different type of legal notice? We have specialised options for every situation.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/send-legal-notice/legal-notice-for-money-recovery" className="block p-4 border border-border rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-semibold text-foreground text-sm">Money Recovery</p>
                <p className="text-muted-foreground text-xs mt-1">Recover unpaid dues, loans, or business payments legally.</p>
              </Link>
              <Link href="/send-legal-notice/wrongful-termination-legal-notice" className="block p-4 border border-border rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-semibold text-foreground text-sm">Wrongful Termination</p>
                <p className="text-muted-foreground text-xs mt-1">Legal notice for illegal dismissal and reinstatement or compensation.</p>
              </Link>
              <Link href="/send-legal-notice/cheque-bounce-legal-notice" className="block p-4 border border-border rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-semibold text-foreground text-sm">Cheque Bounce</p>
                <p className="text-muted-foreground text-xs mt-1">Legal action under Section 138 for dishonoured cheques.</p>
              </Link>
              <Link href="/send-legal-notice/legal-notice-for-outstanding-payment" className="block p-4 border border-border rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-semibold text-foreground text-sm">Outstanding Payment</p>
                <p className="text-muted-foreground text-xs mt-1">Recover unpaid invoices and business dues from clients.</p>
              </Link>
              <Link href="/send-legal-notice/workplace-harassment-legal-notice" className="block p-4 border border-border rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-semibold text-foreground text-sm">Workplace Harassment</p>
                <p className="text-muted-foreground text-xs mt-1">Legal notice for harassment at workplace under POSH Act.</p>
              </Link>
              <Link href="/send-legal-notice/employee-misconduct-legal-notice" className="block p-4 border border-border rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-semibold text-foreground text-sm">Employee Misconduct</p>
                <p className="text-muted-foreground text-xs mt-1">Formal legal notice from employer for employee misconduct.</p>
              </Link>
            </div>
          </div>

          {/* SECTION 14: TESTIMONIALS */}
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Real People. Real Results.</h2>
            <div className="space-y-4">
              <div className="border border-border rounded-lg p-4">
                <p className="text-muted-foreground text-sm mb-2">&ldquo;I was not getting my salary dues from my previous employer. The legal notice drafted by vakiltech showed I was serious. They cleared my dues within 3 weeks to avoid court trouble. Thank you!&rdquo;</p>
                <p className="font-semibold text-foreground text-sm">Anjali Desai</p>
                <p className="text-muted-foreground text-xs">Marketing Executive, Mumbai — vakiltech client, salary recovery notice</p>
              </div>
              <div className="border border-border rounded-lg p-4">
                <p className="text-muted-foreground text-sm mb-2">&ldquo;My landlord refused to return my ₹45,000 security deposit for months. After sending the legal notice through vakiltech, he returned the full amount within 10 days. The draft was very strong.&rdquo;</p>
                <p className="font-semibold text-foreground text-sm">Rohan Malhotra</p>
                <p className="text-muted-foreground text-xs">Software Engineer, Bangalore — vakiltech client, deposit recovery notice</p>
              </div>
              <div className="border border-border rounded-lg p-4">
                <p className="text-muted-foreground text-sm mb-2">&ldquo;Their legal notice service is a game-changer. Got a ₹50,000 payment recovered in 3 weeks. Professional, affordable, and they speak my language.&rdquo;</p>
                <p className="font-semibold text-foreground text-sm">Anita Patel</p>
                <p className="text-muted-foreground text-xs">E-commerce Business Owner, Delhi — vakiltech client, money recovery notice</p>
              </div>
            </div>
          </div>

          {/* BLOG CROSS-LINKS */}
          <div className="bg-muted/30 border border-border rounded-xl p-6 shadow-sm mb-8">
            <h2 className="text-xl font-bold text-foreground mb-4">Learn More About Salary Recovery &amp; Labour Law</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/blogs/how-to-send-legal-notice-in-india" className="text-primary hover:underline text-sm font-medium">
                  How to Send a Legal Notice in India — Complete Guide
                </Link>
              </li>
              <li>
                <Link href="/blogs/what-happens-if-legal-notice-is-ignored" className="text-primary hover:underline text-sm font-medium">
                  What Happens If a Legal Notice Is Ignored?
                </Link>
              </li>
              <li>
                <Link href="/blogs/legal-notice-fees-india" className="text-primary hover:underline text-sm font-medium">
                  Legal Notice Fees in India — What You Should Actually Pay
                </Link>
              </li>
            </ul>
          </div>


          {/* BOTTOM CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-3">18,000+ Indians Have Recovered Their Dues. You&apos;re Next.</h2>
            <p className="text-muted-foreground mb-6">Get a lawyer-drafted legal notice sent to your employer within 24 hours. Flat ₹1,499. No hidden charges.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <SalaryFormCTA variant="primary">
                Send Legal Notice Now — ₹1,499
              </SalaryFormCTA>
              <Link
                href="/legal-consultation"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 text-center"
              >
                Still Have Questions? Talk to a Lawyer Free — Then Decide
              </Link>
            </div>
          </div>

        </div>{/* end max-w-4xl */}
      </div>{/* end container */}

      <TrustSignalsSection />

      {faqs.length > 0 && (
        <div id="faq">
          <FAQSection faqs={faqs} title="Frequently Asked Questions — Employer Not Paying Salary" />
        </div>
      )}
    </main>
    </>
  );
}
