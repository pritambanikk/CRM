import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { FAQSection } from "@/components/shared/faq-section";

export const metadata: Metadata = {
  title: "Legal Notice Format India — 6 Sample Formats & Templates (2026) | vakiltech",
  description: "Legal notice format India: 6 ready-to-use samples for money recovery, cheque bounce, eviction, defamation, unpaid salary & consumer complaint. Drafted by advocates — send in 24 hours for ₹1,499.",
  keywords: [
    "legal notice format india",
    "legal notice format",
    "legal notice sample india",
    "legal notice template india",
    "legal notice draft format",
    "legal notice format for money recovery",
    "legal notice format for cheque bounce",
    "legal notice format for tenant eviction",
    "legal notice format for unpaid salary",
    "legal notice format for consumer complaint",
    "legal notice format in english",
  ],
  alternates: {
    canonical: "https://vakiltech.in/blogs/legal-notice-format-india",
  },
};

export default function LegalNoticeFormatPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blogs" },
    { label: "Legal Notice Format in India", current: true },
  ];

  const faqs = [
    {
      question: "What is the correct format of a legal notice in India?",
      answer:
        "A legal notice in India must include: (1) Advocate's letterhead with name, enrollment number, and address; (2) Date of the notice; (3) Sender's full name and address; (4) Recipient's full name and address; (5) Subject line; (6) Statement of facts in chronological order; (7) Legal provisions invoked; (8) Specific demand or relief sought; (9) Time limit for compliance (15–30 days); (10) Consequence of non-compliance; and (11) Advocate's signature and seal.",
    },
    {
      question: "Can I write a legal notice myself or do I need a lawyer?",
      answer:
        "You can write a legal notice yourself — there is no legal requirement that it must be drafted by an advocate. However, a notice on an advocate's letterhead with proper legal citations carries significantly more weight and is taken far more seriously. For ₹1,499, vakiltech gets it done by an experienced advocate.",
    },
    {
      question: "What language should a legal notice be written in?",
      answer:
        "Legal notices in India are typically written in English. However, if the recipient does not understand English, it is advisable to send the notice in a language they understand — such as Hindi or the regional language — to avoid the recipient claiming they could not understand the contents.",
    },
    {
      question: "How long should a legal notice be?",
      answer:
        "A legal notice should be as long as needed to clearly state the facts, the legal basis, and the demand — but no longer. Typically, a well-drafted legal notice is 1 to 3 pages. Unnecessarily long notices can dilute the impact. Focus on accuracy and clarity over length.",
    },
    {
      question: "What is the difference between a legal notice and a demand letter?",
      answer:
        "A demand letter is an informal written request asking someone to do something. A legal notice is a formal, legally-structured document — usually on an advocate's letterhead — that invokes specific laws, sets a compliance deadline, and explicitly states that legal proceedings will follow if ignored. Legal notices carry far more legal weight.",
    },
    {
      question: "Does a legal notice have to be on advocate letterhead?",
      answer:
        "No — there is no legal requirement that a notice must be on advocate letterhead. You can send it yourself on plain paper. However, a notice on advocate letterhead with a bar council enrollment number is taken far more seriously and is far less likely to be ignored.",
    },
    {
      question: "What are the most common mistakes in a legal notice?",
      answer:
        "The most common mistakes are: (1) Wrong or incomplete address of the recipient; (2) Missing or incorrect legal provisions; (3) Vague demands without specifying the exact amount or action required; (4) No deadline for compliance; (5) Factual errors that contradict your own documents; and (6) Sending by ordinary post without keeping delivery proof.",
    },
    {
      question: "How should a legal notice be sent in India?",
      answer:
        "The recommended method is Registered Post with Acknowledgment Due (RPAD) or Speed Post. Both provide proof of posting and delivery. Courts in India presume that a notice sent by registered post has been received — even if the recipient refuses to accept it. Email can also be used if prior communication has been by email.",
    },
    {
      question: "Is there a standard government legal notice format in India?",
      answer:
        "There is no single government-prescribed format for all legal notices in India. The format varies slightly depending on the type of dispute — cheque bounce notices under Section 138 NI Act have specific requirements, while property or money recovery notices follow general civil notice conventions. The core elements remain the same across all types.",
    },
    {
      question: "What happens if the recipient ignores a legal notice?",
      answer:
        "If the recipient ignores a legal notice within the stipulated deadline, you are entitled to file a case in the appropriate court or consumer forum. For cheque bounce under Section 138 NI Act, you can file a criminal complaint. For money recovery, you can file a civil suit. The notice itself becomes an important piece of evidence in the proceedings.",
    },
    {
      question: "How much does it cost to send a legal notice through vakiltech?",
      answer:
        "vakiltech drafts and sends legal notices starting at ₹1,499. This includes advocate drafting, review, dispatch via Speed Post with tracking, and a PDF copy of the sent notice. Delivery is within 24 hours of receiving your details.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"Article","headline":"Legal Notice Format India — 6 Sample Formats & Templates (2026)","description":"Legal notice format India: 6 ready-to-use samples for money recovery, cheque bounce, eviction, defamation, unpaid salary & consumer complaint. Drafted by advocates — send in 24 hours for ₹1,499.","author":{"@type":"Organization","name":"vakiltech Legal Team"},"publisher":{"@type":"Organization","name":"vakiltech","logo":{"@type":"ImageObject","url":"https://vakiltech.in/logo.png"}},"datePublished":"2026-04-18T00:00:00+05:30","dateModified":"2026-04-25T00:00:00+05:30","mainEntityOfPage":{"@type":"WebPage","@id":"https://vakiltech.in/blogs/legal-notice-format-india"}}`,
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the correct format of a legal notice in India?","acceptedAnswer":{"@type":"Answer","text":"A legal notice in India must include: (1) Advocate's letterhead with name, enrollment number, and address; (2) Date of the notice; (3) Sender's full name and address; (4) Recipient's full name and address; (5) Subject line; (6) Statement of facts in chronological order; (7) Legal provisions invoked; (8) Specific demand or relief sought; (9) Time limit for compliance (15–30 days); (10) Consequence of non-compliance; and (11) Advocate's signature and seal."}},{"@type":"Question","name":"Can I write a legal notice myself or do I need a lawyer?","acceptedAnswer":{"@type":"Answer","text":"You can write a legal notice yourself — there is no legal requirement that it must be drafted by an advocate. However, a notice on an advocate's letterhead with proper legal citations carries significantly more weight. For ₹1,499, vakiltech gets it done by an experienced advocate."}},{"@type":"Question","name":"What is the difference between a legal notice and a demand letter?","acceptedAnswer":{"@type":"Answer","text":"A demand letter is an informal written request. A legal notice is a formal, legally-structured document that invokes specific laws, sets a compliance deadline, and states that legal proceedings will follow if ignored."}},{"@type":"Question","name":"Does a legal notice have to be on advocate letterhead?","acceptedAnswer":{"@type":"Answer","text":"No. However, a notice on advocate letterhead with a bar council enrollment number is taken far more seriously and is far less likely to be ignored."}},{"@type":"Question","name":"What are the most common mistakes in a legal notice?","acceptedAnswer":{"@type":"Answer","text":"Wrong recipient address, citing the wrong law, vague demands, no compliance deadline, factual inconsistencies, sending by ordinary post, and using emotional or threatening language."}},{"@type":"Question","name":"How should a legal notice be sent in India?","acceptedAnswer":{"@type":"Answer","text":"The recommended method is Registered Post with Acknowledgment Due (RPAD) or Speed Post. Courts presume delivery once posted via these methods — even if the recipient refuses to accept."}},{"@type":"Question","name":"What happens if the recipient ignores a legal notice?","acceptedAnswer":{"@type":"Answer","text":"You are entitled to file a case in the appropriate court or consumer forum. The notice itself becomes an important piece of evidence in the proceedings."}},{"@type":"Question","name":"How much does it cost to send a legal notice through vakiltech?","acceptedAnswer":{"@type":"Answer","text":"vakiltech drafts and sends legal notices starting at ₹1,499, including advocate drafting, Speed Post dispatch with tracking, and a PDF copy. Delivery within 24 hours."}}]}`,
        }}
      />

      <div className="min-h-screen bg-background">
        <div className="bg-card border-b">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <Breadcrumb items={breadcrumbItems} />
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 py-12">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Legal Notice Format India — 6 Sample Formats & Templates (2026)
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              The correct format is what separates a legal notice that gets results from one that gets ignored. This guide covers the 11 mandatory sections every valid notice must include, plus six ready-to-use sample formats — money recovery, cheque bounce, tenant eviction, defamation, unpaid salary, and consumer complaint — each with a direct link to send it professionally.
            </p>
            <div className="flex flex-wrap items-center gap-6 pb-8 border-b">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                  V
                </div>
                <div>
                  <p className="font-medium text-foreground">vakiltech Legal Team</p>
                  <p className="text-xs text-muted-foreground">Reviewed by Licensed Advocates</p>
                </div>
              </div>
              <div className="flex items-center gap-6 ml-auto text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Updated 25 April 2026
                </span>
              </div>
            </div>
          </header>

          {/* Jump Links */}
          <div className="bg-muted/40 border border-border rounded-xl p-5 mb-10">
            <p className="text-sm font-semibold text-foreground mb-3">Jump to a format:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              {[
                { label: "Money Recovery Format", href: "#money-recovery-format" },
                { label: "Cheque Bounce Format", href: "#cheque-bounce-format" },
                { label: "Tenant Eviction Format", href: "#eviction-format" },
                { label: "Defamation Format", href: "#defamation-format" },
                { label: "Unpaid Salary Format", href: "#unpaid-salary-format" },
                { label: "Consumer Complaint Format", href: "#consumer-complaint-format" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  <ArrowRight className="w-3 h-3 flex-shrink-0" />
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="prose prose-lg max-w-none mb-16 text-foreground/90 space-y-8">

            {/* Section 1 — Mandatory Sections */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                11 Mandatory Sections of a Legal Notice in India
              </h2>
              <p className="text-muted-foreground mb-4">
                Every legally valid notice in India — regardless of the type of dispute — must contain these sections. Missing even one can make the notice defective and give the other side grounds to challenge it.
              </p>
              <ol className="space-y-4 text-muted-foreground">
                {[
                  { n: 1, title: "Advocate's letterhead", body: "Name, address, phone, email, and Bar Council enrollment number of the drafting advocate." },
                  { n: 2, title: "Date", body: "The date of the notice. Critical because statutory deadlines (e.g., 30 days for cheque bounce) are calculated from this date." },
                  { n: 3, title: "Sender's details", body: "Full name, address, and relationship to the advocate (i.e., named as client)." },
                  { n: 4, title: "Recipient's details", body: "Full name and complete postal address including pin code. An incorrect address is the single most common reason a notice fails legally." },
                  { n: 5, title: "Subject line", body: 'One clear line stating the nature of the notice (e.g., "Notice under Section 138 of the Negotiable Instruments Act, 1881").' },
                  { n: 6, title: "Statement of facts", body: "A chronological, factual account of events leading to the dispute. This forms the backbone of any subsequent legal case." },
                  { n: 7, title: "Legal provisions invoked", body: "The specific sections of law being cited (e.g., Section 138 NI Act, Consumer Protection Act 2019, Section 356 BNS)." },
                  { n: 8, title: "Specific demand", body: "Exactly what you are demanding — payment of ₹X, vacation of property, reinstatement. Vague demands weaken your entire position." },
                  { n: 9, title: "Time limit for compliance", body: "Usually 15 or 30 days from receipt. For cheque bounce under Section 138, this is fixed at 15 days by statute." },
                  { n: 10, title: "Consequence of non-compliance", body: "A clear statement that failure to comply will result in legal proceedings without further notice." },
                  { n: 11, title: "Advocate's signature and seal", body: "The notice closes with the advocate's signature, name, and seal confirming it has been sent on behalf of the named client." },
                ].map((item) => (
                  <li key={item.n} className="flex gap-4">
                    <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      {item.n}
                    </span>
                    <div>
                      <strong className="text-foreground">{item.title}</strong> — {item.body}
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Section 2 — 6 Sample Formats */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">
                6 Legal Notice Format Samples — Ready to Use
              </h2>
              <p className="text-muted-foreground mb-6">
                Each format below follows the standard Indian legal notice structure. Brackets [ ] indicate fields you must fill in with your specific facts. For a professionally drafted version with the correct legal provisions, use the "Send this notice" link at the bottom of each sample.
              </p>

              {/* Format 1 — Money Recovery */}
              <div id="money-recovery-format" className="bg-card border border-border rounded-xl p-6 shadow-sm mb-6 scroll-mt-20">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-xl font-bold text-foreground">
                    1. Legal Notice Format for Money Recovery
                  </h3>
                  <span className="text-xs bg-primary/10 text-primary border border-primary/20 rounded-full px-3 py-1 whitespace-nowrap font-medium">
                    Most used
                  </span>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  Use when someone owes you money — unpaid loan, service fees, outstanding invoice, or advance not returned. The key is specifying the exact amount and providing transaction proof.
                </p>
                <div className="bg-muted/50 border border-border rounded-lg p-5 font-mono text-sm text-foreground/80 space-y-3 leading-relaxed mb-4">
                  <p className="font-bold text-foreground">
                    ADVOCATE'S LETTERHEAD<br />
                    Adv. [Full Name] | Enrol. No: [Bar Council No.] | [Address] | [Phone] | [Email]
                  </p>
                  <p className="border-t border-border pt-3">Date: [DD/MM/YYYY]</p>
                  <p>
                    To,<br />
                    [Full Name of Recipient]<br />
                    [Complete Postal Address with Pin Code]
                  </p>
                  <p className="font-semibold text-foreground">
                    Subject: Legal Notice for Recovery of ₹[Amount] — [Brief reason]
                  </p>
                  <p>
                    Sir/Madam,<br /><br />
                    Under instructions from and on behalf of my client, [Client Full Name], residing at [Client Address], I hereby serve upon you the following legal notice:
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">1. FACTS:</span> That my client advanced a sum of ₹[Amount] to you on [Date] by way of [mode — bank transfer/NEFT/UPI/cheque], for the purpose of [purpose]. A copy of the transaction record/agreement is enclosed.
                  </p>
                  <p>
                    That despite repeated oral and written requests on [dates], you have failed and neglected to repay the said amount.
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">2. LEGAL BASIS:</span> Your failure to repay constitutes a breach of your legal and contractual obligation and renders you liable under the applicable provisions of law, including but not limited to provisions of the Indian Contract Act, 1872.
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">3. DEMAND:</span> You are hereby called upon to pay the outstanding sum of ₹[Amount] along with interest at [rate]% per annum from [date] to my client within <span className="font-semibold">15 (fifteen) days</span> from the receipt of this notice.
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">4. CONSEQUENCE:</span> Please take notice that in the event of failure to comply, my client shall be constrained to initiate appropriate civil and/or criminal proceedings before the competent court, at your risk, cost, and consequences, without further notice.
                  </p>
                  <p className="border-t border-border pt-3">
                    Yours faithfully,<br /><br />
                    [Advocate's Signature]<br />
                    [Advocate's Name & Seal]
                  </p>
                </div>
                <div className="flex items-center justify-between gap-3 pt-3 border-t border-border">
                  <p className="text-muted-foreground text-xs">
                    Key law: Indian Contract Act 1872 + CPC Order 21
                  </p>
                  <Link
                    href="/send-legal-notice/legal-notice-for-money-recovery"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors whitespace-nowrap"
                  >
                    Send this notice — ₹1,499 <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Format 2 — Cheque Bounce */}
              <div id="cheque-bounce-format" className="bg-card border border-border rounded-xl p-6 shadow-sm mb-6 scroll-mt-20">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-xl font-bold text-foreground">
                    2. Legal Notice Format for Cheque Bounce (Section 138 NI Act)
                  </h3>
                  <span className="text-xs bg-red-50 dark:bg-red-950/30 text-red-600 border border-red-200 dark:border-red-800 rounded-full px-3 py-1 whitespace-nowrap font-medium">
                    30-day deadline
                  </span>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  Strict statutory notice — must be sent within 30 days of receiving the bank's cheque return memo. The recipient then has 15 days to pay. If they don't, you can file a criminal case under Section 138 of the Negotiable Instruments Act, 1881.
                </p>
                <div className="bg-muted/50 border border-border rounded-lg p-5 font-mono text-sm text-foreground/80 space-y-3 leading-relaxed mb-4">
                  <p className="font-bold text-foreground">
                    ADVOCATE'S LETTERHEAD<br />
                    Adv. [Full Name] | Enrol. No: [Bar Council No.] | [Address] | [Phone] | [Email]
                  </p>
                  <p className="border-t border-border pt-3">Date: [DD/MM/YYYY]</p>
                  <p>
                    To,<br />
                    [Full Name of Cheque Issuer]<br />
                    [Complete Postal Address with Pin Code]
                  </p>
                  <p className="font-semibold text-foreground">
                    Subject: Statutory Notice under Section 138 of the Negotiable Instruments Act, 1881 — Dishonour of Cheque No. [XXXXXX]
                  </p>
                  <p>
                    Sir/Madam,<br /><br />
                    Under instructions from my client, [Client Full Name], I hereby give you the following statutory notice:
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">1. FACTS:</span> That you issued Cheque No. [Number] dated [Date] drawn on [Bank Name], [Branch], for a sum of ₹[Amount] in favour of my client, [Client Name], towards [reason — discharge of legally enforceable debt/liability].
                  </p>
                  <p>
                    That the said cheque was presented for encashment on [Presentation Date] and was returned dishonoured on [Return Date] with the bank memo citing "[Reason — insufficient funds / exceeds arrangement / account closed]". A copy of the return memo is enclosed.
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">2. LEGAL BASIS:</span> The dishonour of the said cheque constitutes an offence under Section 138 read with Section 142 of the Negotiable Instruments Act, 1881.
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">3. DEMAND:</span> You are hereby called upon to make payment of ₹[Amount] to my client within <span className="font-semibold">15 (fifteen) days</span> from the date of receipt of this notice.
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">4. CONSEQUENCE:</span> Please note that in the event of non-payment within the stipulated period, my client shall be constrained to initiate criminal complaint proceedings against you under Section 138 of the NI Act, without further notice, at your risk and cost.
                  </p>
                  <p className="border-t border-border pt-3">
                    Yours faithfully,<br /><br />
                    [Advocate's Signature]<br />
                    [Advocate's Name & Seal]
                  </p>
                </div>
                <div className="flex items-center justify-between gap-3 pt-3 border-t border-border">
                  <p className="text-muted-foreground text-xs">
                    Key law: Section 138 NI Act 1881 — criminal + civil remedy
                  </p>
                  <Link
                    href="/send-legal-notice/cheque-bounce-legal-notice"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors whitespace-nowrap"
                  >
                    Send this notice — ₹1,499 <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Format 3 — Tenant Eviction */}
              <div id="eviction-format" className="bg-card border border-border rounded-xl p-6 shadow-sm mb-6 scroll-mt-20">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  3. Legal Notice Format for Tenant Eviction
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Use when a tenant is not paying rent, has overstayed after the lease period, or has violated the rental agreement. The notice must clearly state the breach and set a date by which the tenant must vacate or pay arrears.
                </p>
                <div className="bg-muted/50 border border-border rounded-lg p-5 font-mono text-sm text-foreground/80 space-y-3 leading-relaxed mb-4">
                  <p className="font-bold text-foreground">
                    ADVOCATE'S LETTERHEAD<br />
                    Adv. [Full Name] | Enrol. No: [Bar Council No.] | [Address] | [Phone] | [Email]
                  </p>
                  <p className="border-t border-border pt-3">Date: [DD/MM/YYYY]</p>
                  <p>
                    To,<br />
                    [Full Name of Tenant]<br />
                    [Property Address — Same as tenanted premises]
                  </p>
                  <p className="font-semibold text-foreground">
                    Subject: Legal Notice for Eviction and Recovery of Rent Arrears — [Property Address]
                  </p>
                  <p>
                    Sir/Madam,<br /><br />
                    Under instructions from my client, [Landlord Full Name], the lawful owner of the premises situated at [Full Property Address], I hereby serve upon you the following legal notice:
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">1. FACTS:</span> That you have been occupying the said premises as a tenant under a Rental Agreement dated [Agreement Date] at a monthly rent of ₹[Amount] payable on or before the [day] of each month.
                  </p>
                  <p>
                    That you have failed to pay rent for [X] consecutive months from [Month/Year] to [Month/Year], resulting in outstanding rent arrears of ₹[Total Amount].
                  </p>
                  <p>
                    [Alternative — Overstay:] That the said Rental Agreement expired on [Date] and you have failed to vacate the said premises despite the agreement having come to an end, making you an unlawful occupant.
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">2. LEGAL BASIS:</span> Your continued occupation without payment of rent/after expiry of the tenancy constitutes a breach of the rental agreement and renders you liable to eviction under the applicable Rent Control / State Tenancy Act and the Transfer of Property Act, 1882.
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">3. DEMAND:</span> You are hereby called upon to: (a) pay all outstanding rent arrears of ₹[Amount] immediately; and (b) vacate and hand over peaceful possession of the said premises within <span className="font-semibold">30 (thirty) days</span> from the date of receipt of this notice.
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">4. CONSEQUENCE:</span> Failure to comply will compel my client to initiate appropriate eviction proceedings before the competent court/Rent Controller and also file a suit for recovery of all rent arrears with interest, at your risk and cost.
                  </p>
                  <p className="border-t border-border pt-3">
                    Yours faithfully,<br /><br />
                    [Advocate's Signature]<br />
                    [Advocate's Name & Seal]
                  </p>
                </div>
                <div className="flex items-center justify-between gap-3 pt-3 border-t border-border">
                  <p className="text-muted-foreground text-xs">
                    Key law: Transfer of Property Act 1882 + State Rent Control Acts
                  </p>
                  <Link
                    href="/send-legal-notice/eviction-legal-notice"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors whitespace-nowrap"
                  >
                    Send this notice — ₹1,499 <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Format 4 — Defamation */}
              <div id="defamation-format" className="bg-card border border-border rounded-xl p-6 shadow-sm mb-6 scroll-mt-20">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  4. Legal Notice Format for Defamation (BNS Section 356)
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Use when someone has made false statements — verbally, in writing, or online — that have harmed your reputation. Since the introduction of the Bharatiya Nyaya Sanhita 2023, defamation in India is governed by Section 356 BNS (replacing Section 499/500 IPC).
                </p>
                <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-3 mb-4 text-sm text-blue-800 dark:text-blue-200">
                  Want to understand the full law first?{" "}
                  <Link href="/blogs/section-356-bns-defamation-law-india" className="underline font-medium">
                    Read our complete guide to Section 356 BNS Defamation Law →
                  </Link>
                </div>
                <div className="bg-muted/50 border border-border rounded-lg p-5 font-mono text-sm text-foreground/80 space-y-3 leading-relaxed mb-4">
                  <p className="font-bold text-foreground">
                    ADVOCATE'S LETTERHEAD<br />
                    Adv. [Full Name] | Enrol. No: [Bar Council No.] | [Address] | [Phone] | [Email]
                  </p>
                  <p className="border-t border-border pt-3">Date: [DD/MM/YYYY]</p>
                  <p>
                    To,<br />
                    [Full Name of Person / Company]<br />
                    [Complete Postal Address with Pin Code]
                  </p>
                  <p className="font-semibold text-foreground">
                    Subject: Legal Notice for Defamation under Section 356 of the Bharatiya Nyaya Sanhita, 2023
                  </p>
                  <p>
                    Sir/Madam,<br /><br />
                    Under instructions from my client, [Client Full Name], [designation/occupation], I hereby serve upon you the following legal notice:
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">1. FACTS:</span> That on or around [Date], you published/made/circulated [specific act — a social media post / article / verbal statement in public] containing the following false and defamatory statement: "[Exact quote of the defamatory statement]".
                  </p>
                  <p>
                    That the said statement was published/made in the presence of/accessible to third parties, namely [describe audience or platform], and is entirely false and without any factual basis.
                  </p>
                  <p>
                    That as a direct result of your publication, my client has suffered severe damage to their reputation, professional standing, and mental wellbeing. [Add specific examples of harm — loss of clients, professional opportunities, emotional distress.]
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">2. LEGAL BASIS:</span> The aforesaid false publication constitutes criminal defamation under Section 356 of the Bharatiya Nyaya Sanhita, 2023, and also gives rise to a civil claim for damages under the law of torts.
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">3. DEMAND:</span> You are hereby called upon to, within <span className="font-semibold">15 (fifteen) days</span> of receipt of this notice: (a) remove/delete the said defamatory content from all platforms; (b) issue a public apology to my client; and (c) pay damages of ₹[Amount] to my client.
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">4. CONSEQUENCE:</span> Failure to comply will compel my client to initiate criminal proceedings under Section 356 BNS and a civil suit for damages without further notice.
                  </p>
                  <p className="border-t border-border pt-3">
                    Yours faithfully,<br /><br />
                    [Advocate's Signature]<br />
                    [Advocate's Name & Seal]
                  </p>
                </div>
                <div className="flex items-center justify-between gap-3 pt-3 border-t border-border">
                  <p className="text-muted-foreground text-xs">
                    Key law: Section 356 BNS 2023 (criminal) + tort of defamation (civil)
                  </p>
                  <Link
                    href="/send-legal-notice/criminal-defamation-legal-notice"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors whitespace-nowrap"
                  >
                    Send this notice — ₹1,499 <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Format 5 — Unpaid Salary */}
              <div id="unpaid-salary-format" className="bg-card border border-border rounded-xl p-6 shadow-sm mb-6 scroll-mt-20">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  5. Legal Notice Format for Unpaid Salary
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Use when an employer has failed to pay your salary, withheld full and final settlement, or not released statutory dues. A legal notice is often the fastest way to force payment — many employers settle immediately to avoid a labour court complaint.
                </p>
                <div className="bg-muted/50 border border-border rounded-lg p-5 font-mono text-sm text-foreground/80 space-y-3 leading-relaxed mb-4">
                  <p className="font-bold text-foreground">
                    ADVOCATE'S LETTERHEAD<br />
                    Adv. [Full Name] | Enrol. No: [Bar Council No.] | [Address] | [Phone] | [Email]
                  </p>
                  <p className="border-t border-border pt-3">Date: [DD/MM/YYYY]</p>
                  <p>
                    To,<br />
                    [Name of Employer / Company]<br />
                    [Registered Office Address with Pin Code]<br />
                    Through its [Director / HR Manager / Authorised Signatory]
                  </p>
                  <p className="font-semibold text-foreground">
                    Subject: Legal Notice for Recovery of Unpaid Salary and Dues — [Employee Name]
                  </p>
                  <p>
                    Sir/Madam,<br /><br />
                    Under instructions from my client, [Employee Full Name], who was employed as [Designation] with your organisation from [Joining Date] to [Last Working Date], I hereby serve the following legal notice:
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">1. FACTS:</span> That my client was employed with you at a monthly CTC/salary of ₹[Amount] as evidenced by the appointment letter dated [Date] / salary slips from [months].
                  </p>
                  <p>
                    That my client's salary for the period [Month/Year] to [Month/Year] amounting to ₹[Amount] has not been paid. [Add: Full and final settlement amounting to ₹[Amount] including notice pay/gratuity/leave encashment has not been released since [Date of separation].]
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">2. LEGAL BASIS:</span> Your failure to pay the said dues violates the provisions of the Payment of Wages Act, 1936, the Industrial Disputes Act, 1947, and applicable State labour laws, and constitutes an illegal withholding of earned wages.
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">3. DEMAND:</span> You are hereby called upon to pay my client the outstanding amount of ₹[Total Amount] within <span className="font-semibold">15 (fifteen) days</span> from the receipt of this notice.
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">4. CONSEQUENCE:</span> Failure to comply will compel my client to file a complaint before the Labour Commissioner / Payment of Wages Authority and also initiate civil recovery proceedings, without further notice.
                  </p>
                  <p className="border-t border-border pt-3">
                    Yours faithfully,<br /><br />
                    [Advocate's Signature]<br />
                    [Advocate's Name & Seal]
                  </p>
                </div>
                <div className="flex items-center justify-between gap-3 pt-3 border-t border-border">
                  <p className="text-muted-foreground text-xs">
                    Key law: Payment of Wages Act 1936 + Industrial Disputes Act 1947
                  </p>
                  <Link
                    href="/send-legal-notice/legal-notice-for-unpaid-salary"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors whitespace-nowrap"
                  >
                    Send this notice — ₹1,499 <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Format 6 — Consumer Complaint */}
              <div id="consumer-complaint-format" className="bg-card border border-border rounded-xl p-6 shadow-sm mb-6 scroll-mt-20">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  6. Legal Notice Format for Consumer Complaint
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Use when a company has delivered defective goods, provided poor service, or engaged in unfair trade practices. The Consumer Protection Act 2019 requires you to attempt resolution with the company before approaching the consumer forum — this notice is that formal attempt.
                </p>
                <div className="bg-muted/50 border border-border rounded-lg p-5 font-mono text-sm text-foreground/80 space-y-3 leading-relaxed mb-4">
                  <p className="font-bold text-foreground">
                    ADVOCATE'S LETTERHEAD<br />
                    Adv. [Full Name] | Enrol. No: [Bar Council No.] | [Address] | [Phone] | [Email]
                  </p>
                  <p className="border-t border-border pt-3">Date: [DD/MM/YYYY]</p>
                  <p>
                    To,<br />
                    [Company Name / Brand Name]<br />
                    [Registered Office / Corporate Address with Pin Code]<br />
                    Through its [Grievance Officer / Managing Director / Customer Care Head]
                  </p>
                  <p className="font-semibold text-foreground">
                    Subject: Legal Notice under the Consumer Protection Act, 2019 — [Defective Product / Deficiency in Service] — [Order/Invoice No.]
                  </p>
                  <p>
                    Sir/Madam,<br /><br />
                    Under instructions from my client, [Consumer Full Name], residing at [Address], I hereby serve the following legal notice:
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">1. FACTS:</span> That my client purchased [Product/Service Name] from you on [Purchase Date] vide Order No./Invoice No. [Number] for a consideration of ₹[Amount].
                  </p>
                  <p>
                    That the said [product/service] was found to be [defective / not as described / not delivered / delivered damaged]. Specifically: [describe the defect or deficiency in precise terms].
                  </p>
                  <p>
                    That my client raised a complaint with your customer care on [Date] vide Complaint No. [Number], but the same has not been resolved till date / was resolved unsatisfactorily.
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">2. LEGAL BASIS:</span> The aforesaid acts constitute a deficiency in service and/or defect in goods within the meaning of the Consumer Protection Act, 2019, and render you liable for compensation and corrective action.
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">3. DEMAND:</span> You are hereby called upon to, within <span className="font-semibold">30 (thirty) days</span> of receipt of this notice: (a) [refund ₹[Amount] / replace the defective product / rectify the service deficiency]; and (b) pay compensation of ₹[Amount] for inconvenience and mental agony.
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">4. CONSEQUENCE:</span> Failure to comply will compel my client to file a complaint before the District Consumer Disputes Redressal Commission under the Consumer Protection Act, 2019, without further notice.
                  </p>
                  <p className="border-t border-border pt-3">
                    Yours faithfully,<br /><br />
                    [Advocate's Signature]<br />
                    [Advocate's Name & Seal]
                  </p>
                </div>
                <div className="flex items-center justify-between gap-3 pt-3 border-t border-border">
                  <p className="text-muted-foreground text-xs">
                    Key law: Consumer Protection Act 2019 — District/State/National Commission
                  </p>
                  <Link
                    href="/send-legal-notice/consumer-complaint-legal-notice"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors whitespace-nowrap"
                  >
                    Send this notice — ₹1,499 <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Section 3 — Common Mistakes */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                7 Common Mistakes That Weaken a Legal Notice
              </h2>
              <p className="text-muted-foreground mb-4">
                These mistakes are seen repeatedly in self-drafted notices and can seriously damage your legal position:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-red-500 font-bold flex-shrink-0">✗</span>
                  <span>
                    <strong className="text-foreground">Wrong recipient address.</strong> If the notice is undeliverable because of an incorrect address, the entire process may have to restart — and statutory deadlines (like the 30-day cheque bounce window) may expire.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-500 font-bold flex-shrink-0">✗</span>
                  <span>
                    <strong className="text-foreground">Citing the wrong law.</strong> Invoking an inapplicable section weakens your case and can be used by the other side to challenge the notice's validity.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-500 font-bold flex-shrink-0">✗</span>
                  <span>
                    <strong className="text-foreground">Vague demands.</strong> "Pay me the money you owe" is not a demand. "Pay ₹85,000 as outstanding loan principal advanced on 12 March 2024 via NEFT (UTR No. XXXXX)" is.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-500 font-bold flex-shrink-0">✗</span>
                  <span>
                    <strong className="text-foreground">No compliance deadline.</strong> Without a specific deadline, the other side can claim they were still "considering" complying when you filed the case.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-500 font-bold flex-shrink-0">✗</span>
                  <span>
                    <strong className="text-foreground">Factual inconsistencies.</strong> If your notice states facts that contradict your own documents (like a different loan amount or date), it will be exploited in court.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-500 font-bold flex-shrink-0">✗</span>
                  <span>
                    <strong className="text-foreground">Sending by ordinary post.</strong> Ordinary post has no delivery proof. If the recipient denies receiving it, you have no recourse. Always use Speed Post or RPAD.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-500 font-bold flex-shrink-0">✗</span>
                  <span>
                    <strong className="text-foreground">Emotional or threatening language.</strong> A legal notice must be professional and factual. Aggressive or threatening language can expose the sender to a defamation or criminal intimidation counter-claim.
                  </span>
                </li>
              </ul>
            </div>

            {/* Section 4 — Delivery Methods */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                How to Send a Legal Notice — Valid Modes in India
              </h2>
              <p className="text-muted-foreground mb-4">
                The mode of delivery matters as much as the content. Here is how each method is treated legally:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-muted-foreground border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 pr-4 text-foreground font-semibold">Mode</th>
                      <th className="text-left py-2 pr-4 text-foreground font-semibold">Legal standing</th>
                      <th className="text-left py-2 text-foreground font-semibold">Recommended?</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="py-2 pr-4 font-medium text-foreground">Speed Post</td>
                      <td className="py-2 pr-4">Very strong — court presumes delivery once posted</td>
                      <td className="py-2 text-green-600 font-medium">Yes ✓</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 font-medium text-foreground">RPAD</td>
                      <td className="py-2 pr-4">Very strong — physical acknowledgment returned</td>
                      <td className="py-2 text-green-600 font-medium">Yes ✓</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 font-medium text-foreground">Email</td>
                      <td className="py-2 pr-4">Accepted if prior communication was by email</td>
                      <td className="py-2 text-yellow-600 font-medium">Supplement only</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 font-medium text-foreground">WhatsApp</td>
                      <td className="py-2 pr-4">Accepted in some High Court rulings, not universal</td>
                      <td className="py-2 text-yellow-600 font-medium">Supplement only</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 font-medium text-foreground">Ordinary post / courier</td>
                      <td className="py-2 pr-4">Weak — no proof of delivery</td>
                      <td className="py-2 text-red-600 font-medium">No ✗</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 font-medium text-foreground">Hand delivery</td>
                      <td className="py-2 pr-4">Valid if recipient signs an acknowledgment</td>
                      <td className="py-2 text-yellow-600 font-medium">With caution</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-muted-foreground text-sm mt-4">
                Best practice: Send via Speed Post AND email on the same day. This maximises proof of delivery and ensures the recipient sees it quickly. vakiltech dispatches all notices via Speed Post with a tracking number provided to you.
              </p>
            </div>

            {/* Related reads */}
            <div className="bg-muted/30 border border-border rounded-xl p-6">
              <h2 className="text-lg font-bold text-foreground mb-3">Related Guides</h2>
              <ul className="space-y-2">
                {[
                  { label: "How to Send a Legal Notice in India — Step by Step", href: "/blogs/how-to-send-legal-notice-in-india" },
                  { label: "Legal Notice Fees in India — Complete Cost Breakdown", href: "/blogs/legal-notice-fees-india" },
                  { label: "What Is a Legal Notice? — Complete Explainer", href: "/blogs/what-is-a-legal-notice-in-india" },
                  { label: "Money Recovery Legal Notice — Format, Sample & Guide", href: "/blogs/money-recovery-legal-notice-format-sample" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="flex items-center gap-2 text-primary hover:underline text-sm">
                      <ArrowRight className="w-3 h-3 flex-shrink-0" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
              <h2 className="text-xl font-bold text-foreground mb-2">
                Skip the Risk — Get Your Notice Drafted by an Expert
              </h2>
              <p className="text-muted-foreground mb-4">
                A self-drafted notice with the wrong legal provision or a vague demand can actually weaken your case. vakiltech's advocates draft your notice with the correct format, precise facts, and relevant legal provisions — delivered via Speed Post in 24 hours for ₹1,499.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/send-legal-notice"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Send a Legal Notice — ₹1,499 <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/consultation"
                  className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary/5 transition-colors"
                >
                  Talk to a Lawyer First — ₹299
                </Link>
              </div>
            </div>
          </div>
        </article>

        {faqs.length > 0 && (
          <FAQSection faqs={faqs} title="Frequently Asked Questions — Legal Notice Format" />
        )}
      </div>
    </>
  );
}
