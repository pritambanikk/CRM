import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { FAQSection } from "@/components/shared/faq-section";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Cheque Bounce Legal Notice in India — Section 138 NI Act Guide | vakiltech",
  description:
    "Cheque bounced? You have 30 days to send a legal notice. Learn Section 138 NI Act, the mandatory notice requirement, court procedure, and send your notice for ₹1,499.",
  keywords: [
    "cheque bounce",
    "cheque bounce case",
    "cheque bounce charges",
    "bounced check",
    "cheque bounce message from bank",
    "section 138 NI act",
  ],
  alternates: {
    canonical: "https://vakiltech.in/guides/cheque-bounce-legal-notice-india",
  },
};

export default function ChequeBounceGuidePage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Guides", href: "/guides" },
    { label: "Cheque Bounce Legal Notice India", current: true },
  ];

  const faqs = [
    {
      question: "Can I file an FIR for cheque bounce?",
      answer:
        "Cheque bounce under Section 138 of the NI Act is a criminal offence but the complaint must be filed before a Judicial Magistrate of the First Class — not at a police station. An FIR at a police station is generally not the correct procedure for a Section 138 case. However, if fraudulent intent is demonstrably present from the outset, a parallel cheating complaint under Section 420 IPC can be filed at the police station, running alongside the Section 138 Magistrate complaint.",
    },
    {
      question: "What if the cheque was post-dated?",
      answer:
        "A post-dated cheque is valid under Section 138 provided it is presented for payment on or after the date mentioned on the cheque, and within the 3-month validity from that date. If you present a post-dated cheque before its date and it is returned as 'post-dated', that is a technical return and Section 138 does not apply. Wait for the cheque date, present it then, and if it bounces for insufficient funds, the 30-day notice window opens from that return memo.",
    },
    {
      question: "What if the account is closed?",
      answer:
        "A cheque returned because the drawer closed the account after issuing the cheque attracts full Section 138 liability. Closing an account with knowledge of an issued cheque is treated by courts as evidence of dishonest intent. The procedure remains the same: send the demand notice within 30 days of the return memo, give the drawer 15 days to pay, and file a complaint if payment is not received.",
    },
    {
      question: "Can company cheques bounce under Section 138?",
      answer:
        "Yes. When a company issues a cheque that bounces, Section 141 of the NI Act extends criminal liability to the company as well as every person who was in charge of and responsible for the conduct of the company's business at the time of the offence — typically the managing director, whole-time directors, and authorised signatories. The notice must be addressed to all such persons.",
    },
    {
      question: "Can I file a cheque bounce case after 30 days?",
      answer:
        "No. The 30-day window to send the demand notice runs from the date you receive the cheque return memo. If you miss this deadline, your right to file a criminal complaint under Section 138 for that specific return is extinguished. However, if the cheque is still within its 3-month validity, you can present it again, get a fresh return memo, and start a new 30-day notice window from that fresh memo.",
    },
    {
      question: "What if the drawer is in another state?",
      answer:
        "Jurisdiction for a Section 138 complaint lies with the Judicial Magistrate of the First Class where the cheque was presented for payment — i.e., the location of the payee's bank branch where the cheque was deposited. So if you deposited the cheque in Mumbai, you file in Mumbai, even if the drawer lives in Delhi. The notice can be sent by Speed Post or Registered Post to the drawer's address in any state.",
    },
    {
      question: "Can I file a cheque bounce case online?",
      answer:
        "You cannot yet file a Section 138 criminal complaint entirely online — it must be filed physically at the competent Magistrate court. However, the preparatory steps — drafting the legal notice, getting it reviewed, sending it by Speed Post — can all be done online through vakiltech for ₹1,499. We handle everything up to the point of filing; if you need to file the complaint, our advocates can represent you in court.",
    },
    {
      question: "Multiple cheques bounced — do I file multiple cases?",
      answer:
        "Each dishonoured cheque gives rise to a separate cause of action under Section 138. If you received three cheques from the same drawer and all three bounced, you can send three separate notices and file three separate complaints. Courts have confirmed that each bounced cheque is an independent offence. The aggregate fine from multiple convictions can be substantial, which is a significant deterrent.",
    },
    {
      question: "What if the drawer pays only a partial amount?",
      answer:
        "Partial payment within the 15-day window does not extinguish the Section 138 cause of action if the full cheque amount remains unpaid. The Supreme Court has held that the demand is for the entire cheque amount. You may accept part payment without waiving your right to prosecute for the balance, though it is advisable to document the partial payment and your reservation of rights in writing before accepting it.",
    },
    {
      question: "Is cheque bounce civil or criminal?",
      answer:
        "Cheque bounce under Section 138 of the NI Act is primarily a criminal offence — it is tried before a criminal Magistrate, carries imprisonment up to 2 years, and results in a criminal conviction. It also has civil dimensions: courts routinely award the cheque amount plus compensation (up to twice the cheque value) payable to the complainant. You can also run a parallel civil suit under Order 37 CPC for a money decree, and both proceedings can continue simultaneously.",
    },
  ];

  const howToSteps = [
    {
      name: "Receive the cheque return memo from your bank",
      text: "The 30-day clock starts from the date on this memo.",
    },
    {
      name: "Send a written demand notice to the drawer within 30 days",
      text: "Via Speed Post or Registered Post with AD. Notice must demand payment within 15 days.",
    },
    {
      name: "Wait 15 days for the drawer to pay",
      text: "If payment is received, the matter ends. Get a written receipt.",
    },
    {
      name: "File criminal complaint before JMFC within 30 days of notice period expiry",
      text: "If the drawer does not pay, file before the Judicial Magistrate where the cheque was presented.",
    },
  ];

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Cheque Bounce in India — Legal Notice, Section 138 NI Act & Complete Guide",
    author: { "@type": "Organization", name: "vakiltech Legal Team" },
    datePublished: "2026-04-24T00:00:00+05:30",
    dateModified: "2026-04-24T00:00:00+05:30",
    publisher: {
      "@type": "Organization",
      name: "vakiltech",
      logo: { "@type": "ImageObject", url: "https://vakiltech.in/logo.png" },
    },
    description:
      "Complete guide to cheque bounce in India — Section 138 NI Act, the mandatory 30-day legal notice, court procedure, and how to send your notice for ₹1,499.",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://vakiltech.in/guides/cheque-bounce-legal-notice-india",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to File a Cheque Bounce Case Under Section 138 NI Act",
    description:
      "Step-by-step procedure for enforcing your rights after a cheque bounces in India.",
    step: howToSteps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
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
              Cheque Bounce in India — Legal Notice, Section 138 NI Act &amp; Complete Guide
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              A cheque bounce is not just a banking problem — it is a criminal offence under Section 138 of the Negotiable Instruments Act, 1881. The moment your bank returns the cheque, a 30-day clock starts. Here is everything you need to know and exactly what to do.
            </p>
            <div className="flex flex-wrap items-center gap-6 pb-8 border-b">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                  V
                </div>
                <div>
                  <p className="font-medium text-foreground">vakiltech Legal Team</p>
                  <p className="text-xs text-muted-foreground">Legal Reviewer</p>
                </div>
              </div>
              <div className="flex items-center gap-6 ml-auto text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  24 April 2026
                </span>
              </div>
            </div>
          </header>

          <div className="prose prose-lg max-w-none mb-16 text-foreground/90">

            {/* Section 1 */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">What is Cheque Bounce?</h2>
              <p className="text-muted-foreground mb-4">
                A cheque is said to have bounced — or been dishonoured — when the bank on which it is drawn returns it unpaid. The technical term is <strong>dishonour of cheque</strong>. While the phrase &ldquo;bounced cheque&rdquo; is colloquial, the legal term used in Indian law is dishonour of negotiable instrument.
              </p>
              <p className="text-muted-foreground mb-4">
                Cheques are central to commercial transactions in India. When a drawer issues a cheque to a payee, the payee deposits it in their bank (the collecting bank), which sends it to the drawer&rsquo;s bank (the drawee bank) for payment. If the drawee bank cannot honour the cheque, it returns it unpaid — this is the bounce. The bank sends the payee a <strong>cheque return memo</strong> stating the reason for dishonour.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Common Reasons a Bank Returns a Cheque</h3>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-4">
                <li><strong>Insufficient funds</strong> — the drawer&apos;s account balance is less than the cheque amount. This is the most common reason and directly attracts Section 138 liability.</li>
                <li><strong>Exceeds arrangement</strong> — the amount exceeds the overdraft or credit facility sanctioned to the drawer by the bank.</li>
                <li><strong>Account closed</strong> — the drawer closed their account after issuing the cheque. Courts treat this as evidence of dishonest intent and Section 138 applies.</li>
                <li><strong>Stop payment instruction</strong> — the drawer instructed the bank to stop payment. If the stop-payment was given without a valid legal basis, Section 138 applies (Supreme Court: <em>Modi Cements Ltd. v. Kuchil Kumar Nandi</em>, 1998).</li>
                <li><strong>Signature mismatch</strong> — the signature on the cheque does not match the bank&apos;s records. This is a technical return; Section 138 does not apply directly, but the cheque can be rectified and re-presented.</li>
                <li><strong>Post-dated cheque presented early</strong> — the cheque was presented before the date written on it. Also a technical return; wait for the date and present again.</li>
                <li><strong>Overwriting or alteration</strong> — the amount, date, or payee name has been altered without the drawer&apos;s countersignature. Technical return; get a fresh cheque.</li>
                <li><strong>Stale cheque</strong> — presented more than 3 months after the date on the cheque. Section 138 cannot apply; the cheque has expired.</li>
              </ul>
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">What the Cheque Bounce Message from Bank Actually Means</h3>
              <p className="text-muted-foreground mb-4">
                When a cheque is dishonoured, your bank sends you a physical or digital <strong>cheque return memo</strong> — sometimes called a cheque bounce message — specifying the return reason code. Banks use RBI-approved codes: for example, &ldquo;Return Code 01&rdquo; typically means insufficient funds, and &ldquo;Return Code 55&rdquo; means signature mismatch.
              </p>
              <p className="text-muted-foreground mb-4">
                The return memo is critical legal evidence. The <strong>date on this memo</strong> starts your 30-day countdown under Section 138. Keep the original memo safely — it must be attached to your legal notice and later to your court complaint. An SMS or email from your bank about a returned cheque is not the same as the official memo; always collect the physical or authenticated digital return memo from your bank branch.
              </p>
            </div>

            {/* Section 2 */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Section 138 Negotiable Instruments Act — The Law Explained</h2>
              <p className="text-muted-foreground mb-4">
                Section 138 of the Negotiable Instruments Act, 1881, makes dishonour of a cheque a <strong>criminal offence</strong>. It was inserted by the Banking, Public Financial Institutions and Negotiable Instruments Laws (Amendment) Act, 1988, specifically to enhance the credibility of cheques as instruments of commercial trust. The Supreme Court in <em>Dalmia Cement (Bharat) Ltd. v. Galaxy Traders &amp; Agencies</em> (2001) confirmed that the section must be interpreted purposively, in favour of enforcement.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Punishment Under Section 138</h3>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-4">
                <li><strong>Imprisonment</strong> — up to 2 years. Even for a first offence, imprisonment is possible, though courts often allow compounding if the drawer pays.</li>
                <li><strong>Fine</strong> — up to twice the amount of the dishonoured cheque, which is typically awarded as compensation to the payee.</li>
                <li><strong>Both</strong> — imprisonment and fine together.</li>
              </ul>
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Why Section 138 is Powerful Leverage</h3>
              <p className="text-muted-foreground mb-4">
                Unlike a civil money recovery suit — which can drag on for years and results only in a money decree — Section 138 carries the threat of criminal prosecution and imprisonment. The moment a drawer receives a Section 138 legal notice, they understand that failing to pay within 15 days can result in a criminal case being registered against them. This threat alone resolves a large proportion of cheque bounce disputes before they ever reach court.
              </p>
              <p className="text-muted-foreground mb-4">
                The law also places a <strong>statutory presumption</strong> in the payee&apos;s favour under Section 139: it is presumed that the cheque was issued in discharge of a legally enforceable debt. The drawer must rebut this presumption with evidence — a reversal of the usual burden of proof that makes Section 138 cases particularly favourable for the payee.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Is Cheque Bounce Bailable?</h3>
              <p className="text-muted-foreground mb-4">
                Section 138 is a <strong>bailable offence</strong> — if the drawer is arrested, they can seek bail. However, it becomes cognisable after a Magistrate&apos;s order, meaning a police officer can then arrest without a warrant. In practice, most cases never reach the arrest stage because drawers settle on receiving the notice or during early court hearings.
              </p>
              <p className="text-muted-foreground mb-4">
                The 2018 amendment introduced Section 148, which empowers the Appellate Court to direct the accused to deposit a minimum of 20% of the cheque amount as interim compensation while the appeal is pending — further strengthening the payee&apos;s position.
              </p>
            </div>

            {/* Section 3 */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">The Mandatory 30-Day Legal Notice Requirement</h2>
              <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 mb-6">
                <p className="text-foreground font-semibold">
                  Critical: Before you can file a criminal complaint under Section 138, you MUST send a written legal notice to the drawer within 30 days of receiving the bank&apos;s dishonour memo. This is a statutory precondition — not a formality. Skip it and your case collapses.
                </p>
              </div>
              <p className="text-muted-foreground mb-4">
                Section 138 creates the offence in stages. The cheque bounce itself is not the complete offence — the full offence crystallises only when all three conditions are met: the cheque is dishonoured, the payee sends a written demand notice, and the drawer fails to pay within 15 days of receiving it.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">The Three-Window Timeline</h3>
              <ul className="list-disc pl-5 space-y-3 text-muted-foreground mb-4">
                <li>
                  <strong>Window 1 — 30 days from the return memo:</strong> You must send a written demand notice to the drawer within 30 days of receiving the bank&apos;s cheque return memo. The notice must demand payment of the cheque amount and warn of criminal prosecution under Section 138.
                </li>
                <li>
                  <strong>Window 2 — 15 days from notice receipt:</strong> The drawer gets 15 days after receiving your notice to pay the full cheque amount. If they pay in full within this window, the cause of action under Section 138 is extinguished and no criminal complaint can be filed.
                </li>
                <li>
                  <strong>Window 3 — 30 days after the 15-day window expires:</strong> If the drawer does not pay within 15 days, you must file a criminal complaint before the Judicial Magistrate of the First Class within 30 days of the notice period expiry. Miss this window too and the complaint becomes time-barred.
                </li>
              </ul>
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">How Service of Notice is Calculated</h3>
              <p className="text-muted-foreground mb-4">
                The notice must be sent to the drawer&apos;s correct address. Under Section 27 of the General Clauses Act, a notice sent by post is presumed to have been received by the addressee in the ordinary course of post — typically 48–72 hours after dispatch. If the drawer refuses to accept the notice, the refusal itself is treated as deemed receipt. The 15-day payment window begins from the date of actual or deemed receipt, whichever comes first.
              </p>
              <p className="text-muted-foreground mb-4">
                This is why vakiltech sends every Section 138 notice via <strong>Speed Post with tracking</strong> — the tracking ID and the India Post delivery record provide court-admissible evidence of both dispatch and delivery.
              </p>
            </div>

            {/* Section 4 */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Cheque Bounce Legal Notice Format — What It Must Contain</h2>
              <p className="text-muted-foreground mb-4">
                A cheque bounce legal notice is not a letter — it is a statutory document that must contain specific elements to be legally enforceable. Courts have dismissed Section 138 complaints where the notice was defective. Every element below is non-negotiable.
              </p>
              <ul className="list-disc pl-5 space-y-3 text-muted-foreground mb-4">
                <li>
                  <strong>Date of dishonour:</strong> The exact date the cheque was returned unpaid by the drawee bank, as appearing on the cheque return memo.
                </li>
                <li>
                  <strong>Cheque details:</strong> Cheque number, date of the cheque, amount in figures and words, name of the drawee bank and branch, name of the drawer and payee.
                </li>
                <li>
                  <strong>Bank return memo reference:</strong> The reference number and date of the cheque return memo issued by the drawee bank. A copy of the memo should be annexed to the notice.
                </li>
                <li>
                  <strong>Statement of the underlying debt:</strong> A brief factual statement of the legally enforceable liability in discharge of which the cheque was issued (e.g., &ldquo;towards repayment of a loan of ₹X advanced on [date]&rdquo; or &ldquo;towards settlement of Invoice No. Y&rdquo;).
                </li>
                <li>
                  <strong>Demand to pay within 15 days:</strong> A clear written demand that the drawer pay the full cheque amount within 15 days of receipt of this notice.
                </li>
                <li>
                  <strong>Warning of criminal complaint:</strong> An explicit statement that if the drawer fails to pay within 15 days, a criminal complaint will be filed under Section 138 of the Negotiable Instruments Act, 1881, before the competent Magistrate.
                </li>
                <li>
                  <strong>Advocate&apos;s signature and details:</strong> The notice should be signed by an advocate on the advocate&apos;s letterhead, including the advocate&apos;s name, Bar Council enrolment number, and address for service.
                </li>
                <li>
                  <strong>Mode of dispatch:</strong> The notice must be sent by Registered Post with Acknowledgement Due (RPAD) or Speed Post with tracking to the drawer&apos;s correct address. The postal receipt is evidentiary proof of service.
                </li>
              </ul>
              <p className="text-muted-foreground mb-4">
                A single missing element — wrong cheque date, missing return memo reference, absence of a specific 15-day demand — is enough for a skilled defence lawyer to challenge the notice and potentially get the complaint dismissed at the threshold stage.
              </p>
            </div>

            {/* Section 5 */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Court Procedure After the Notice Is Ignored</h2>
              <p className="text-muted-foreground mb-4">
                If the drawer does not pay within 15 days of receiving your notice, the full criminal offence under Section 138 is complete. You now have a 30-day window to file a complaint before the Judicial Magistrate of the First Class (JMFC).
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Which Court Has Jurisdiction?</h3>
              <p className="text-muted-foreground mb-4">
                Jurisdiction lies with the JMFC in whose local limits the cheque was presented for payment — that is, the city or district where the payee&apos;s bank branch is located. The Supreme Court in <em>Dasrath Rupsingh Rathod v. State of Maharashtra</em> (2014) settled this, and the 2015 amendment to the NI Act codified it under Section 142(2). You cannot choose a convenient court — you must file where the cheque was deposited.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Documents Required to File the Complaint</h3>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-4">
                <li>Original dishonoured cheque</li>
                <li>Original bank return memo</li>
                <li>Copy of the demand notice served on the drawer</li>
                <li>Speed Post / Registered Post receipt proving dispatch</li>
                <li>Tracking record or postal acknowledgement showing delivery or attempted delivery</li>
                <li>Affidavit of evidence of the complainant (required under Section 145 of the NI Act)</li>
                <li>Relevant agreements, invoices, or ledger entries establishing the underlying debt</li>
              </ul>
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">What Happens at Trial</h3>
              <p className="text-muted-foreground mb-4">
                Once the complaint is filed, the Magistrate examines the complainant on oath and issues summons to the accused drawer. The law requires Section 138 cases to be decided within 6 months of filing. In practice, timelines vary depending on the court&apos;s load and whether the drawer challenges the proceedings.
              </p>
              <p className="text-muted-foreground mb-4">
                Under Section 143A, courts can direct the accused to pay interim compensation of up to 20% of the cheque amount pending trial — further protecting the payee. The statutory presumption under Section 139 means the drawer must affirmatively prove their defence; the payee need only prove dishonour, notice, and non-payment.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Typical Outcomes</h3>
              <p className="text-muted-foreground mb-4">
                Most Section 138 cases settle before or shortly after the complaint is filed — the criminal threat is usually enough. When cases go to conviction, courts typically order the drawer to pay the cheque amount plus compensation (often up to twice the cheque amount) to the payee, and may impose imprisonment for serious or repeat offenders. Compounding — a mutual settlement with court approval — is permitted at any stage under the Supreme Court&apos;s ruling in <em>Meters and Instruments Pvt. Ltd. v. Kanchan Mehta</em> (2018).
              </p>
            </div>

            {/* Section 6 */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Cheque Bounce Charges and Compensation You Can Claim</h2>
              <p className="text-muted-foreground mb-4">
                A cheque bounce hits the drawer financially on multiple fronts simultaneously. As the payee, you can recover not just the original cheque amount but potentially far more.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Bank Charges the Drawer Pays</h3>
              <p className="text-muted-foreground mb-4">
                The drawee bank typically levies a dishonour charge on the drawer ranging from <strong>₹150 to ₹750</strong> per returned cheque, depending on the bank and the reason. The payee&apos;s bank (collecting bank) may also levy a smaller processing charge. These are bank-to-drawer charges and are separate from any legal claim.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Civil Recovery: Cheque Amount + Interest + Costs</h3>
              <p className="text-muted-foreground mb-4">
                Through a civil suit under Order 37 of the Code of Civil Procedure (summary suit on a negotiable instrument), you can recover the full cheque amount, interest from the date of dishonour at a rate the court considers fair (typically 12–18% per annum), and the legal costs of the proceedings. This runs in parallel with the Section 138 criminal case — you can pursue both simultaneously.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Criminal: Fine Up to Twice the Cheque Amount</h3>
              <p className="text-muted-foreground mb-4">
                On conviction under Section 138, the court can impose a fine <strong>up to twice the cheque amount</strong>. Courts routinely direct that this fine be paid as <strong>compensation to the payee</strong> under Section 357 of the Code of Criminal Procedure. This means if your cheque was for ₹5 lakhs, you can potentially recover up to ₹10 lakhs through the criminal route, in addition to any civil recovery.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Interim Compensation During Trial</h3>
              <p className="text-muted-foreground mb-4">
                Under Section 143A (added by the 2018 amendment), at the first hearing the Magistrate may direct the accused to pay interim compensation up to <strong>20% of the cheque amount</strong> to the payee — even before the trial concludes. Under Section 148, if the drawer appeals a conviction, the Appellate Court must direct payment of at least 20% as a deposit condition. These provisions ensure payees receive partial recovery during the legal process itself.
              </p>
            </div>

            {/* Section 7 — CTA */}
            <div className="bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground rounded-2xl p-8 mb-8">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <div className="inline-flex items-center bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium mb-3">
                    30-Day Deadline — Act Now
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-3">
                    Send Your Cheque Bounce Legal Notice — vakiltech
                  </h2>
                  <p className="text-primary-foreground/90 text-lg mb-2">
                    Your bank returned the cheque. The 30-day clock is running. Miss this window and you lose your right to prosecute under Section 138 — permanently.
                  </p>
                  <ul className="text-primary-foreground/85 text-sm space-y-1 mb-4">
                    <li>Drafted by an enrolled advocate — not a template</li>
                    <li>Dispatched by Speed Post with tracking within 24 hours</li>
                    <li>Correct Section 138 / 141 / 142 NI Act references</li>
                    <li>Flat ₹1,499 — no hidden charges</li>
                  </ul>
                </div>
                <div className="flex-shrink-0">
                  <Link
                    href="/send-legal-notice/cheque-bounce-legal-notice"
                    className="group inline-flex items-center gap-2 px-8 py-4 bg-background text-foreground rounded-lg font-semibold hover:bg-background/90 transition-all shadow-lg text-center whitespace-nowrap"
                  >
                    Send Cheque Bounce Legal Notice — ₹1,499
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Section 8 — FAQ intro */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Frequently Asked Questions — Cheque Bounce in India</h2>
              <p className="text-muted-foreground">
                The most common questions about cheque bounce cases, Section 138 NI Act, legal notices, and court procedure are answered below.
              </p>
            </div>

          </div>

          {/* Closing CTA */}
          <div className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground rounded-2xl p-10 mb-16 overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Don&apos;t Miss the 30-Day Deadline
              </h3>
              <p className="text-primary-foreground/90 text-lg mb-6">
                Every day that passes after the return memo is a day closer to losing your Section 138 rights permanently. Let vakiltech draft and send your notice today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/send-legal-notice/cheque-bounce-legal-notice"
                  className="group px-8 py-4 bg-background text-foreground rounded-lg font-semibold hover:bg-background/90 transition-all shadow-lg text-center inline-flex items-center justify-center gap-2"
                >
                  Send Cheque Bounce Legal Notice — ₹1,499
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/legal-consultation"
                  className="px-8 py-4 border-2 border-white/60 text-white rounded-lg font-semibold hover:bg-white/10 transition-all text-center"
                >
                  Talk to a Lawyer — Free 10 min
                </Link>
              </div>
            </div>
          </div>
        </article>

        <FAQSection faqs={faqs} title="Frequently Asked Questions — Cheque Bounce" />
      </div>
    </>
  );
}
