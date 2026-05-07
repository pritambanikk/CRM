import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { TrustSignalsSection } from "@/components/features/homepage/trust-signals";
import { FAQSection } from "@/components/shared/faq-section";
import Link from "next/link";
import ClientFormTrigger from "./client-form-trigger";

export const metadata: Metadata = {
  title: "Legal Notice for Recovery of Money – ₹1,499 | vakiltech",
  description: "Recover your money in 30 days. Send a legal notice for money recovery online — ₹1,499. Drafted by Supreme Court advocates, delivered by registered post, full tracking.",
  keywords: ["legal notice for recovery of money", "money recovery legal notice format", "legal notice for non payment of dues", "recovery of money suit", "legal notice format for recovery of money", "money recovery suit india", "debt collection legal notice", "send legal notice for money recovery"],
  alternates: {
    canonical: "https://vakiltech.in/send-legal-notice/legal-notice-for-money-recovery",
  },
  openGraph: {
    title: "Legal Notice for Recovery of Money – ₹1,499 | vakiltech",
    description: "Send a legal notice for recovery of money from ₹1,499. Drafted by Licensed Advocates in 24 hrs. 70% cases settle without court.",
    url: "https://vakiltech.in/send-legal-notice/legal-notice-for-money-recovery",
    siteName: "vakiltech",
    images: [
      {
        url: "https://vakiltech.in/og/legal-notice-money-recovery.png",
        width: 1200,
        height: 630,
        alt: "Legal notice for recovery of money - professional drafting service by vakiltech advocates",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal Notice for Recovery of Money – ₹1,499 | vakiltech",
    description: "Send a legal notice for recovery of money from ₹1,499. Drafted by Licensed Advocates in 24 hrs. 70% cases settle without court.",
    images: ["https://vakiltech.in/og/legal-notice-money-recovery.png"],
  },
};

export default function LegalNoticeMoneyRecoveryPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Legal Notice", href: "/send-legal-notice" },
    { label: "Legal Notice for Money Recovery", current: true },
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
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"LegalService","telephone":"+91-70476 83995","image":"https://vakiltech.in/vt-logo.png","address":{"@type":"PostalAddress","addressCountry":"IN"},"priceRange":"\u20b91,499+","name":"vakiltech - Legal Notice for Money Recovery","description":"Send a legal notice for recovery of money from ₹1,499. Drafted by Licensed Advocates in 24 hrs. 70% cases settle without court.","url":"https://vakiltech.in/send-legal-notice/legal-notice-for-money-recovery","areaServed":{"@type":"Country","name":"India"},"provider":{"@type":"Organization","name":"vakiltech","url":"https://vakiltech.in","logo":"https://vakiltech.in/logo.png","contactPoint":{"@type":"ContactPoint","telephone":"+91-70476 83995","contactType":"Customer Service","availableLanguage":["English","Hindi"]}},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"500"},"offers":{"@type":"Offer","price":"1499","priceCurrency":"INR","availability":"https://schema.org/InStock"}}` }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"WebPage","name":"Legal Notice for Recovery of Money – ₹1,499 | vakiltech","description":"Send a legal notice for recovery of money from ₹1,499. Drafted by Licensed Advocates in 24 hrs. 70% cases settle without court.","url":"https://vakiltech.in/send-legal-notice/legal-notice-for-money-recovery","speakable":{"@type":"SpeakableSpecification","cssSelector":["h1","h2",".prose"]},"mainEntity":{"@type":"Service","name":"Legal Notice for Money Recovery","description":"If someone has failed to repay money owed to you—whether it is a personal loan, unpaid invoice, salary dues, or business payment—the first and most effective legal step is to send a legal notice for recovery of money. A properly drafted legal notice puts the opposite party on formal legal notice, creates documentary evidence, and often leads to recovery without going to court. It serves as a precursor to filing a Summary Suit under Order 37 of the CPC if the debt remains unpaid.","provider":{"@type":"Organization","name":"vakiltech"}}}` }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is a legal notice for recovery of money?","acceptedAnswer":{"@type":"Answer","text":"A legal notice for recovery of money is a formal written document sent by a creditor to a debtor demanding payment of outstanding dues. It serves as an official warning before filing a civil suit and gives the recipient a final opportunity to settle the debt out of court. The notice must contain details of the debt, amount owed, legal basis for the claim, and a specific timeframe for payment."}},{"@type":"Question","name":"When should I send a money recovery legal notice?","acceptedAnswer":{"@type":"Answer","text":"You should send a legal notice when someone owes you money and has failed to repay despite reminders. This includes personal loans, business payments, unpaid invoices, security deposits, or any contractual payment obligations. It's the first formal legal step before approaching court."}},{"@type":"Question","name":"What is the limitation period for money recovery?","acceptedAnswer":{"@type":"Answer","text":"Under the Limitation Act, 1963, the limitation period for filing a suit for recovery of money is 3 years from the date the cause of action arises (e.g., the date the debt became due or the last payment was made). Sending a legal notice does not extend this period, so it is crucial to act within this timeline."}},{"@type":"Question","name":"What evidence is required for a money recovery notice?","acceptedAnswer":{"@type":"Answer","text":"Key evidence includes: (1) Written agreement or contract, (2) Promissory note or cheques, (3) Bank statements showing funds transfer, (4) Invoices or bills, (5) Communications acknowledging the debt (emails, WhatsApp chats, recordings). Even without a formal contract, other proofs can establish the debt."}},{"@type":"Question","name":"How long does the other party get to pay after receiving the notice?","acceptedAnswer":{"@type":"Answer","text":"Typically, the recipient is given 15-30 days to respond and make payment, depending on the nature of the case and the amount involved. The exact period will be clearly mentioned in the notice. If they fail to pay within this period, you can proceed with legal action."}},{"@type":"Question","name":"Is sending a legal notice mandatory before filing a case?","acceptedAnswer":{"@type":"Answer","text":"While not always legally mandatory for all civil suits, sending a legal notice is highly recommended and often required by courts. It demonstrates that you attempted to resolve the matter amicably before litigation. In many cases, courts may ask if you sent a notice before filing suit. A properly sent legal notice strengthens your case and shows good faith."}},{"@type":"Question","name":"What happens after sending the legal notice?","acceptedAnswer":{"@type":"Answer","text":"After receiving the notice, the debtor may: (1) Pay the full amount and settle the dispute, (2) Respond with their objections or propose a settlement, or (3) Ignore the notice entirely. If there's no satisfactory response within the specified time, you can proceed to file a civil suit for recovery."}},{"@type":"Question","name":"How much does it cost to send a money recovery notice?","acceptedAnswer":{"@type":"Answer","text":"With vakiltech, our money recovery legal notice service costs just ₹1,499, which includes: Professional drafting by Licensed Advocates, Unlimited revisions until you're satisfied, Sending via Speed Post with tracking, 48-hour delivery guaranteed, Legal consultation support."}},{"@type":"Question","name":"What information do I need to provide for drafting?","acceptedAnswer":{"@type":"Answer","text":"You'll need to provide: (1) Your complete details and the debtor's details, (2) Amount owed and reason for the debt, (3) Date when the debt was incurred, (4) Any agreements, invoices, or proof of transaction, (5) Previous communication attempts (emails, messages, etc.). Our team will guide you through the entire process."}},{"@type":"Question","name":"What is the success rate of legal notices for money recovery?","acceptedAnswer":{"@type":"Answer","text":"Approximately 65-70% of money recovery disputes are settled after sending a professionally drafted legal notice, without going to court. The formal legal language and threat of litigation often motivates debtors to clear their dues quickly to avoid court cases, legal costs, and damage to their reputation."}},{"@type":"Question","name":"Can I send a legal notice without a lawyer?","acceptedAnswer":{"@type":"Answer","text":"Technically yes, but it's strongly not recommended. A legal notice must follow specific legal format, language, and procedures to be valid and effective in court. A notice drafted by a qualified advocate carries much more weight, uses proper legal terminology, cites relevant laws, and is more likely to result in payment or be admissible as evidence if you need to file a lawsuit later."}},{"@type":"Question","name":"How long does the drafting and sending process take?","acceptedAnswer":{"@type":"Answer","text":"With vakiltech, our advocates draft your legal notice within 24-48 hours after you provide all necessary details. Once you review and approve the draft, we send it via Speed Post, which typically takes 5-7 business days for delivery. You'll receive tracking updates throughout the process."}}]}` }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"Review","reviewRating":{"@type":"Rating","ratingValue":"5","bestRating":"5"},"author":{"@type":"Person","name":"Rohan Malhotra"},"reviewBody":"My landlord refused to return my ₹45,000 security deposit for months. After sending the legal notice through vakiltech, he returned the full amount within 10 days. The draft was very strong.","itemReviewed":{"@type":"LegalService","name":"vakiltech - Legal Notice for Money Recovery"}}` }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"Review","reviewRating":{"@type":"Rating","ratingValue":"5","bestRating":"5"},"author":{"@type":"Person","name":"Suresh Gupta"},"reviewBody":"A builder in Noida was delaying possession by 2 years. I sent a legal notice for refund with interest. They finally called me for a settlement meeting. Highly recommended for property issues.","itemReviewed":{"@type":"LegalService","name":"vakiltech - Legal Notice for Money Recovery"}}` }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"Review","reviewRating":{"@type":"Rating","ratingValue":"5","bestRating":"5"},"author":{"@type":"Person","name":"Anjali Desai"},"reviewBody":"I was not getting my salary dues from my previous employer. The legal notice drafted by vakiltech showed I was serious. They cleared my dues to avoid court trouble. Thank you!","itemReviewed":{"@type":"LegalService","name":"vakiltech - Legal Notice for Money Recovery"}}` }}
    />

    <main className="min-h-screen bg-gradient-to-b from-background to-background/55">
      
      <div className="container mx-auto px-6 md:px-8 pb-8">
        {/* HERO SECTION */}
        <section className="relative pt-6 pb-16 md:pt-10 md:pb-24 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 overflow-hidden rounded-b-3xl md:rounded-b-[40px] -mx-6 md:-mx-8 px-6 md:px-8">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
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
                    Trusted by 15,000+ Indians
                  </div>
                  <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                    Legal Notice for Recovery of Money — Send Online in 24 Hours
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    If someone owes you money and refuses to pay, a legal notice for recovery of money is the strongest first step you can take. Drafted by Licensed Advocates. Sent via Speed Post. Starting at just ₹1,499.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-sm text-foreground font-medium">✓ Expert Drafted</div>
                    <div className="text-sm text-foreground font-medium">✓ Valid in all Indian courts</div>
                    <div className="text-sm text-foreground font-medium">✓ Sent via Speed Post with tracking ID</div>
                    <div className="text-sm text-foreground font-medium">✓ Transparent ₹1,499 pricing</div>
                  </div>
                </div>

                <ClientFormTrigger />

                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                    <span>Expert Lawyers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                    <span>24-48 Hour Delivery</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                    <span>65-70% Settlement Rate</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 p-8 flex items-center justify-center">
                  <img
                    src="/legal-notice/lawyer-customer-desk.svg"
                    alt="Legal notice for recovery of money - drafted by vakiltech advocates"
                    className="w-full h-full object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TABLE OF CONTENTS */}
        <nav className="max-w-4xl mx-auto py-8" aria-label="Table of Contents">
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-foreground mb-4">📑 Table of Contents</h2>
            <ol className="list-decimal pl-5 space-y-2 text-primary">
              <li><a href="#what-is" className="hover:underline">What Is a Legal Notice for Recovery of Money?</a></li>
              <li><a href="#when-to-send" className="hover:underline">When Should You Send a Money Recovery Legal Notice?</a></li>
              <li><a href="#legal-basis" className="hover:underline">Legal Basis for Money Recovery in India</a></li>
              <li><a href="#what-to-include" className="hover:underline">What Should a Money Recovery Notice Contain?</a></li>
              <li><a href="#how-to-send" className="hover:underline">How to Send a Legal Notice for Money Recovery (Step-by-Step)</a></li>
              <li><a href="#debtor-ignores" className="hover:underline">What Happens If the Debtor Ignores the Legal Notice?</a></li>
              <li><a href="#check-case" className="hover:underline">Check If Your Case Is Worth It</a></li>
              <li><a href="#cost" className="hover:underline">Cost of Sending a Money Recovery Legal Notice</a></li>
              <li><a href="#testimonials" className="hover:underline">Client Testimonials</a></li>
              <li><a href="#faq" className="hover:underline">Frequently Asked Questions</a></li>
            </ol>
          </div>
        </nav>

        {/* CONTENT SECTIONS */}
        <div className="max-w-4xl mx-auto py-4 space-y-12">
          
          {/* SECTION 1: What Is */}
          <div id="what-is" className="bg-card border border-border rounded-xl p-6 shadow-sm scroll-mt-20">
            <h2 className="text-2xl font-bold text-foreground mb-4">What Is a Legal Notice for Recovery of Money?</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>A <strong>legal notice for recovery of money</strong> is a formal written demand sent by a creditor's advocate to a debtor, requiring payment of outstanding dues within 15–30 days, failing which civil proceedings will be initiated under the Code of Civil Procedure, 1908.</p>
              <p>This formal demand — drafted by a licensed advocate and sent via registered post — puts the defaulter on record and creates court-admissible evidence that you tried to settle before filing suit. Over 65% of cases settle at the notice stage itself, without ever stepping into a courtroom.</p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Legal Definition Under Section 80 CPC</h3>
              <p>Section 80 of the Code of Civil Procedure, 1908 mandates that a notice must be served before filing a suit against the government or a public officer. While not strictly mandatory for private parties, courts consistently view the absence of a prior notice unfavourably. A notice under Section 80 CPC establishes your cause of action and demonstrates good faith — both critical for money recovery suits.</p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Why Sending a Notice Before Filing Suit Matters</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Creates formal, dated, court-admissible evidence of your demand</li>
                <li>Gives the debtor a final legal opportunity to pay — avoiding expensive litigation for both sides</li>
                <li>Strengthens your position if the matter escalates to a <Link href="/send-legal-notice" className="text-primary hover:underline">civil suit</Link></li>
                <li>Demonstrates to the court that you acted in good faith and attempted amicable resolution</li>
                <li>Often triggers immediate payment — debtors take a lawyer's letterhead seriously</li>
              </ul>
            </div>
          </div>

          {/* SECTION 2: When to Send */}
          <div id="when-to-send" className="bg-card border border-border rounded-xl p-6 shadow-sm scroll-mt-20">
            <h2 className="text-2xl font-bold text-foreground mb-4">When Should You Send a Money Recovery Legal Notice?</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>You should send a legal notice for money recovery when someone owes you money and has failed to repay despite verbal or written reminders. Here are the most common situations:</p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Personal Loans and Friendly Advances</h3>
              <p>Lent money to a friend or relative based on trust? If they refuse to repay, a formal debt collection legal notice from an advocate often resolves the matter within days — without damaging the relationship irreparably.</p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Unpaid Invoices and Business Debts</h3>
              <p>Vendors, clients, or partners who owe you for goods delivered or services rendered. B2B payment defaults are one of the most common reasons businesses send legal notices for recovery of money in India.</p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Salary Arrears and Employee Dues</h3>
              <p>Employer fails to pay salary, bonus, gratuity, or full and final settlement? You can <Link href="/send-legal-notice/legal-notice-for-unpaid-salary" className="text-primary hover:underline">send a legal notice for unpaid salary</Link> demanding immediate clearance of all pending dues.</p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Security Deposits and Advance Payments</h3>
              <p>Landlord refusing to return your security deposit? Service provider who took advance payment but never delivered? These are straightforward money recovery cases with high success rates through legal notices.</p>
            </div>
          </div>

          {/* MID-PAGE CTA 1 */}
          <div className="bg-primary/5 border-2 border-primary/20 rounded-xl p-8 text-center">
            <p className="text-xl font-bold text-foreground mb-2">Don't wait until it's too late.</p>
            <p className="text-muted-foreground mb-6">The Limitation Act gives you only 3 years from the date the debt became due. Act now.</p>
            <ClientFormTrigger />
          </div>
          
          {/* SECTION 3: Legal Basis */}
          <div id="legal-basis" className="bg-card border border-border rounded-xl p-6 shadow-sm scroll-mt-20">
            <h2 className="text-2xl font-bold text-foreground mb-4">Legal Basis for Money Recovery in India</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>Money recovery cases in India are governed by multiple statutes depending on the nature of the debt. Understanding the applicable law strengthens your legal notice and your position in court.</p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Indian Contract Act, 1872</h3>
              <p>The foundation for all contractual debt claims. Under <a href="https://legislative.gov.in/actsofparliamentfromtheyear/indian-contract-act-1872" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">the Indian Contract Act, 1872</a>, any agreement made with free consent between competent parties for lawful consideration is a valid contract. When one party fails to honour a payment obligation, the other party has the legal right to demand recovery. Sections 73 and 74 specifically cover compensation for breach of contract.</p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Negotiable Instruments Act, 1881</h3>
              <p>If the debtor issued a cheque that bounced, you have additional remedies under Section 138 of the NI Act. This makes dishonour of cheque a criminal offence punishable with imprisonment up to two years or a fine up to twice the cheque amount. You can <Link href="/send-legal-notice/cheque-bounce-legal-notice" className="text-primary hover:underline">send a cheque bounce legal notice</Link> within 30 days of receiving the bank memo.</p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Code of Civil Procedure, 1908 (Order 37 — Summary Suit)</h3>
              <p>Order 37 CPC allows creditors to file a Summary Suit for quick recovery where the debt is based on a written instrument (promissory note, bill of exchange, or written contract). The key advantage: the debtor must obtain the court's permission to even defend the case, making recovery significantly faster than an ordinary civil suit.</p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Limitation Act, 1963 — The 3-Year Deadline</h3>
              <p>Under the Limitation Act, you must file a money recovery suit within <strong>3 years</strong> from the date the cause of action arose — typically the date the payment became due or the date of the last acknowledgement of debt. Sending a legal notice does not extend this period. If you're close to the 3-year mark, act immediately.</p>
            </div>
          </div>

          {/* SECTION 4: What to Include */}
          <div id="what-to-include" className="bg-card border border-border rounded-xl p-6 shadow-sm scroll-mt-20">
            <h2 className="text-2xl font-bold text-foreground mb-4">What Should a Money Recovery Notice Contain?</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>A legally valid money recovery notice must include specific details to be effective in court:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Complete details of sender and recipient with full addresses</li>
                <li>Exact amount owed with detailed breakdown and calculation</li>
                <li>Date when the debt arose and when payment became legally due</li>
                <li>Nature of transaction (loan, service fee, salary, business payment, etc.)</li>
                <li>Legal grounds for the claim (citing the specific Act and Section)</li>
                <li>Reference to supporting documents (agreements, invoices, bank statements, promissory notes)</li>
                <li>Clear deadline for payment (usually 15-30 days from receipt of notice)</li>
                <li>Statement of legal consequences — including filing a civil suit, claiming interest under Section 34 CPC, and recovery of litigation costs</li>
                <li>Advocate's signature, Bar Council registration number, seal, and contact details</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Sample Legal Notice Format for Recovery of Money</h3>
              <div className="bg-muted/30 border border-border rounded-lg p-6 font-mono text-sm leading-relaxed">
                <p className="font-bold mb-4">[ON THE LETTERHEAD OF THE ADVOCATE]</p>
                <p><strong>LEGAL NOTICE</strong></p>
                <p className="mt-2"><strong>Date:</strong> [DD/MM/YYYY]</p>
                <p><strong>Ref No:</strong> [Reference Number]</p>
                <p className="mt-4"><strong>To,</strong><br/>[Debtor's Full Name]<br/>[Complete Address]</p>
                <p className="mt-4"><strong>Subject:</strong> Legal Notice for Recovery of Outstanding Amount of ₹[Amount]</p>
                <p className="mt-4">Under instructions from and on behalf of my client, [Your Name], residing at [Your Address], I hereby serve you with the following legal notice:</p>
                <p className="mt-2">1. That my client advanced/paid a sum of ₹[Amount] to you on [Date] for [purpose — loan/services/goods].</p>
                <p>2. That despite repeated requests and reminders, you have failed/refused to repay the said amount.</p>
                <p>3. That you are hereby called upon to pay the total outstanding amount of ₹[Amount] within 15 days from receipt of this notice.</p>
                <p>4. That failure to comply shall compel my client to initiate appropriate legal proceedings, including filing a civil suit for recovery under Order 37 CPC, along with interest at 18% per annum and litigation costs.</p>
                <p className="mt-4">A copy of this notice is retained for record and future legal action.</p>
                <p className="mt-4">[Advocate's Name]<br/>[Bar Council No.]<br/>[Signature & Seal]</p>
              </div>
              <p className="text-sm italic mt-2">Note: This is a simplified format for reference. Your actual legal notice will be customised to your specific case facts by our Licensed Advocates.</p>
            </div>
          </div>

          {/* SECTION 5: How to Send — Step by Step */}
          <div id="how-to-send" className="bg-card border border-border rounded-xl p-6 shadow-sm scroll-mt-20">
            <h2 className="text-2xl font-bold text-foreground mb-4">How to Send a Legal Notice for Money Recovery (Step-by-Step)</h2>
            <div className="space-y-6 text-muted-foreground">
              <p>Here's the exact process to send a legal notice for money recovery through vakiltech:</p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Gather Evidence and Documents</h3>
                    <p>Collect all proof of the debt: written agreements, promissory notes, bank transfer receipts, invoices, WhatsApp/email conversations acknowledging the debt, and any previous reminders sent. Even informal evidence like text messages can support your claim.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Consult a Licensed Advocate</h3>
                    <p>Share your case details and documents with our advocate team. They'll assess the strength of your claim, advise you on the best legal approach, and confirm whether a legal notice is the right first step. At vakiltech, this <Link href="/consultation" className="text-primary hover:underline">consultation is included free</Link> with your notice.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Draft the Notice</h3>
                    <p>Our advocate drafts your legal notice within 24–48 hours, citing the relevant laws (Indian Contract Act, CPC, Limitation Act), stating the exact amount and basis of your claim, and setting a clear payment deadline. You review and approve — with unlimited revisions until you're satisfied.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Send via Registered Post / Speed Post</h3>
                    <p>The notice is dispatched via India Post Speed Post with tracking. You receive the tracking ID and postal receipt — this serves as legal proof that the notice was delivered. The postal acknowledgement is admissible evidence in court.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">5</div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Wait for Response (15–30 Days)</h3>
                    <p>After the debtor receives the notice, they get 15–30 days to respond. In most cases, debtors either pay up or negotiate a settlement. If there's no response, our team guides you on the next step — filing a civil suit or a Summary Suit under Order 37 CPC for fast-track recovery.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 6: What Happens If Debtor Ignores */}
          <div id="debtor-ignores" className="bg-card border border-border rounded-xl p-6 shadow-sm scroll-mt-20">
            <h2 className="text-2xl font-bold text-foreground mb-4">What Happens If the Debtor Ignores the Legal Notice?</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>If the debtor does not respond within the stipulated 15–30 day period, or refuses to pay, you have multiple legal options to escalate the matter:</p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Filing a Civil Suit for Recovery of Money</h3>
              <p>You can file a regular civil suit in the appropriate court (based on the amount and jurisdiction). The unreplied legal notice serves as strong evidence of your intent and the debtor's bad faith. Courts take notice non-response seriously.</p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Summary Suit Under Order 37 CPC</h3>
              <p>If your claim is based on a written instrument — promissory note, bill of exchange, or written contract — you can file a Summary Suit under Order 37 of the Code of Civil Procedure. This is the fastest route to money recovery because the debtor must obtain the court's leave (permission) just to contest your claim. Most Summary Suits conclude within 6–12 months.</p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Interest and Costs You Can Claim</h3>
              <p>When filing suit, you can claim interest on the outstanding amount under Section 34 CPC at a rate the court deems reasonable (typically 6–18% per annum). You can also claim the cost of litigation, the cost of sending the legal notice, and any consequential damages arising from the non-payment.</p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Alternative Dispute Resolution — Lok Adalat</h3>
              <p>For amounts under ₹20 lakhs, you can also approach a Lok Adalat for free mediation. Lok Adalat awards are final, binding, and non-appealable — and the entire process can conclude in a single sitting. No court fee is required.</p>
            </div>
          </div>

          {/* SECTION 7: Check Your Case */}
          <div id="check-case" className="bg-card border border-border rounded-xl p-6 shadow-sm scroll-mt-20">
            <h2 className="text-2xl font-bold text-foreground mb-4">Before You Spend ₹1,499 — Check If Your Case Is Worth It</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>Many legal notices fail due to weak facts or missing proof. Before you proceed, make sure your case meets these criteria:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Clear debt:</strong> You have evidence that money was lent, paid, or is owed to you</li>
                <li><strong>Identifiable debtor:</strong> You know the full name and address of the person/entity who owes you</li>
                <li><strong>Within limitation:</strong> The debt became due less than 3 years ago</li>
                <li><strong>Supporting documents:</strong> You have at least one form of proof — agreement, bank statement, messages, or invoices</li>
              </ul>
              <p>If you're unsure whether your case qualifies, our advocates offer a <Link href="/consultation" className="text-primary hover:underline">free case assessment</Link> before you pay anything.</p>
              <div className="mt-6">
                <ClientFormTrigger />
              </div>
            </div>
          </div>

          {/* SECTION 8: Cost */}
          <div id="cost" className="bg-card border border-border rounded-xl p-6 shadow-sm scroll-mt-20">
            <h2 className="text-2xl font-bold text-foreground mb-4">Cost of Sending a Money Recovery Legal Notice</h2>
            <div className="space-y-4 text-muted-foreground">

              <h3 className="text-xl font-semibold text-foreground mt-2 mb-3">vakiltech Pricing vs Traditional Lawyers</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-border text-sm">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="border border-border p-3 text-left font-semibold text-foreground">Feature</th>
                      <th className="border border-border p-3 text-left font-semibold text-foreground">Traditional Lawyer</th>
                      <th className="border border-border p-3 text-left font-semibold text-primary">vakiltech</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border border-border p-3">Price</td><td className="border border-border p-3">₹5,000 – ₹15,000+</td><td className="border border-border p-3 font-semibold text-primary">₹1,499 (all-inclusive)</td></tr>
                    <tr><td className="border border-border p-3">Drafting Time</td><td className="border border-border p-3">1–3 weeks</td><td className="border border-border p-3 font-semibold text-primary">24–48 hours</td></tr>
                    <tr><td className="border border-border p-3">Revisions</td><td className="border border-border p-3">Extra charges</td><td className="border border-border p-3 font-semibold text-primary">Unlimited, free</td></tr>
                    <tr><td className="border border-border p-3">Sending</td><td className="border border-border p-3">You handle it</td><td className="border border-border p-3 font-semibold text-primary">Speed Post with tracking</td></tr>
                    <tr><td className="border border-border p-3">Hidden Charges</td><td className="border border-border p-3">Common</td><td className="border border-border p-3 font-semibold text-primary">Zero</td></tr>
                    <tr><td className="border border-border p-3">Consultation</td><td className="border border-border p-3">₹500 – ₹2,000</td><td className="border border-border p-3 font-semibold text-primary">Included free</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4">With vakiltech, you can send a professionally drafted legal notice for money recovery for just ₹1,499 — all inclusive with no hidden charges. This includes consultation with experienced Licensed Advocates, professional drafting tailored to your case, unlimited revisions, sending via Speed Post with tracking, and guidance on next legal steps if needed.</p>
            </div>
          </div>

          {/* MID-PAGE CTA 2 */}
          <div className="bg-primary/5 border-2 border-primary/20 rounded-xl p-8 text-center">
            <p className="text-xl font-bold text-foreground mb-2">Ready to recover what's yours?</p>
            <p className="text-muted-foreground mb-6">Our Licensed Advocates will draft and send your legal notice for recovery of money within 24 hours.</p>
            <ClientFormTrigger />
          </div>
          
          {/* SECTION 9: Testimonials */}
          <div id="testimonials" className="bg-card border border-border rounded-xl p-6 shadow-sm scroll-mt-20">
            <h2 className="text-2xl font-bold text-foreground mb-4">Client Testimonials — Money Recovery Success Stories</h2>
            <div className="space-y-6 text-muted-foreground">
              <div className="p-4 bg-muted/30 rounded-lg italic border-l-4 border-primary">
                "My landlord refused to return my ₹45,000 security deposit for months. After sending the legal notice through vakiltech, he returned the full amount within 10 days. The draft was very strong."
                <div className="mt-2 font-semibold text-foreground not-italic">— Rohan Malhotra, Software Engineer, Bangalore</div>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg italic border-l-4 border-primary">
                "A builder in Noida was delaying possession by 2 years. I sent a legal notice for refund with interest. They finally called me for a settlement meeting. Highly recommended for property issues."
                <div className="mt-2 font-semibold text-foreground not-italic">— Suresh Gupta, Government Employee, Delhi</div>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg italic border-l-4 border-primary">
                "I was not getting my salary dues from my previous employer. The legal notice drafted by vakiltech showed I was serious. They cleared my dues to avoid court trouble. Thank you!"
                <div className="mt-2 font-semibold text-foreground not-italic">— Anjali Desai, Marketing Executive, Mumbai</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <TrustSignalsSection />

      <FAQSection
        faqs={[
          { question: "What is a legal notice for recovery of money?", answer: "A legal notice for recovery of money is a formal written document sent by a creditor to a debtor demanding payment of outstanding dues. It serves as an official warning before filing a civil suit and gives the recipient a final opportunity to settle the debt out of court." },
          { question: "When should I send a money recovery legal notice?", answer: "You should send a legal notice when someone owes you money and has failed to repay despite reminders. This includes personal loans, business payments, unpaid invoices, security deposits, or any contractual payment obligations." },
          { question: "What is the limitation period for money recovery?", answer: "Under the Limitation Act, 1963, the limitation period for filing a suit for recovery of money is 3 years from the date the cause of action arises." },
          { question: "What evidence is required for a money recovery notice?", answer: "Key evidence includes: (1) Written agreement or contract, (2) Promissory note or cheques, (3) Bank statements showing funds transfer, (4) Invoices or bills, (5) Communications acknowledging the debt." },
          { question: "How long does the other party get to pay after receiving the notice?", answer: "Typically, the recipient is given 15-30 days to respond and make payment, depending on the nature of the case and the amount involved." },
          { question: "Is sending a legal notice mandatory before filing a case?", answer: "While not always legally mandatory for all civil suits, sending a legal notice is highly recommended and often required by courts. It demonstrates that you attempted to resolve the matter amicably before litigation." },
          { question: "What happens after sending the legal notice?", answer: "After receiving the notice, the debtor may: (1) Pay the full amount and settle the dispute, (2) Respond with their objections or propose a settlement, or (3) Ignore the notice entirely." },
          { question: "How much does it cost to send a money recovery notice?", answer: "With vakiltech, our money recovery legal notice service costs just ₹1,499." },
          { question: "What information do I need to provide for drafting?", answer: "You'll need to provide: (1) Your complete details and the debtor's details, (2) Amount owed and reason for the debt, (3) Date when the debt was incurred, (4) Any agreements, invoices, or proof of transaction." },
          { question: "What is the success rate of legal notices for money recovery?", answer: "Approximately 65-70% of money recovery disputes are settled after sending a professionally drafted legal notice, without going to court." },
          { question: "Can I send a legal notice without a lawyer?", answer: "Technically yes, but it's strongly not recommended. A legal notice must follow specific legal format, language, and procedures to be valid and effective in court." },
          { question: "How long does the drafting and sending process take?", answer: "With vakiltech, our advocates draft your legal notice within 24-48 hours after you provide all necessary details." },
        ]}
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about legal notice for money recovery"
      />
    </main>
  </>
  );
}
