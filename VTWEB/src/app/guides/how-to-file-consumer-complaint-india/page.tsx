import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { FAQSection } from "@/components/shared/faq-section";

export const metadata: Metadata = {
  title: "How to File a Consumer Complaint in India — Step-by-Step Guide | vakiltech",
  description:
    "Filing a consumer complaint in India? Here's the exact procedure — which forum, what documents, what fees, how long it takes, and when a legal notice helps.",
  keywords: [
    "how to file a case in consumer court",
    "consumer court procedure",
    "consumer complaint format",
    "how to file consumer complaint india",
  ],
  alternates: {
    canonical: "https://vakiltech.in/guides/how-to-file-consumer-complaint-india",
  },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/guides" },
  { label: "How to File a Consumer Complaint", current: true },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to File a Consumer Complaint in India — Step-by-Step Guide",
  description:
    "Filing a consumer complaint in India? Here's the exact procedure — which forum, what documents, what fees, how long it takes, and when a legal notice helps.",
  author: {
    "@type": "Organization",
    name: "vakiltech Legal Team",
    url: "https://vakiltech.in",
  },
  publisher: {
    "@type": "Organization",
    name: "vakiltech",
    logo: {
      "@type": "ImageObject",
      url: "https://vakiltech.in/logo.png",
    },
  },
  datePublished: "2026-04-24T00:00:00+05:30",
  dateModified: "2026-04-24T00:00:00+05:30",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://vakiltech.in/guides/how-to-file-consumer-complaint-india",
  },
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to File a Consumer Complaint in India",
  description:
    "The step-by-step procedure for filing a consumer complaint in India, from sending a legal notice to receiving your case number at the consumer forum.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Send a Legal Notice",
      text: "Before approaching the consumer forum, send a formal legal notice to the seller or service provider demanding resolution within 15 to 30 days. This is not mandatory but strongly recommended — it often resolves the dispute without further action and strengthens your case if you do need to file.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Draft Your Consumer Complaint",
      text: "Prepare a written complaint stating your name and address, the opposite party's details, facts of the case in chronological order, the relief you are seeking, and a declaration that the complaint is not pending before any other court or commission.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Collect and Attach Supporting Documents",
      text: "Attach all relevant documents: purchase receipt or invoice, warranty or guarantee card, product photos, email and chat records, the legal notice copy, postal receipt for the legal notice, and any response received from the opposite party.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Determine the Correct Forum and Pay Court Fee",
      text: "Based on the total value of your claim, file at the District (up to ₹1 crore), State (₹1–10 crore), or National Consumer Commission (above ₹10 crore). Pay the applicable court fee by demand draft or online through eDaakhil.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "File In Person or Online via eDaakhil",
      text: "Submit your complaint either by visiting the consumer forum office or by filing online at edaakhil.nic.in. Online filing is available for all three tiers of consumer commissions.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Receive Your Case Number and Attend Hearings",
      text: "Once your complaint is admitted, you will receive a case number. The opposite party will be served a notice and given 30 days to file their reply. Attend scheduled hearings on the posted dates until the commission passes its order.",
    },
  ],
};

const faqItems = [
  {
    question: "Can I file a consumer complaint online in India?",
    answer:
      "Yes. The Government of India's eDaakhil portal (edaakhil.nic.in) allows you to file consumer complaints online for all three tiers — District, State, and National Consumer Commissions. You can register on the portal, upload your complaint and supporting documents, pay court fees online, and track your case status without visiting the forum in person.",
  },
  {
    question: "Can I file a consumer complaint against Amazon, Flipkart, or Meesho?",
    answer:
      "Yes. E-commerce platforms and the sellers listed on them are covered under the Consumer Protection Act 2019 and the Consumer Protection (E-Commerce) Rules 2020. You can name both the platform and the individual seller as opposite parties in your complaint. First send a legal notice to the company's registered office address; if there is no satisfactory response within 30 days, file your complaint at the appropriate consumer forum.",
  },
  {
    question: "What happens if the company ignores the consumer court's order?",
    answer:
      "Ignoring a consumer commission's order is a criminal offence. Under Section 72 of the Consumer Protection Act 2019, non-compliance with an order is punishable with imprisonment of up to three years or a fine of up to ₹1 lakh, or both. You can file an execution petition before the same commission, which can then initiate contempt proceedings against the company and its officers.",
  },
  {
    question: "Can I claim compensation for mental agony in a consumer complaint?",
    answer:
      "Yes. Consumer commissions routinely award compensation for mental agony, harassment, and inconvenience caused by deficient service or defective goods, in addition to the refund or replacement. The amount varies by case — courts typically award between ₹5,000 and ₹1 lakh for mental agony, depending on the severity and the respondent's conduct. You should specifically include this head of claim in your complaint.",
  },
  {
    question: "Do I need a lawyer to file a consumer complaint?",
    answer:
      "No. Consumer forums are specifically designed to be accessible to ordinary citizens without legal representation. You can file, appear, and argue your case yourself. That said, an advocate can help in complex or high-value cases, and a professionally drafted legal notice before filing significantly increases the likelihood of the company settling the dispute without a forum proceeding.",
  },
  {
    question: "What is eDaakhil and how do I use it?",
    answer:
      "eDaakhil (edaakhil.nic.in) is the Government of India's official portal for filing consumer complaints online. To use it, create an account with your mobile number and email, fill in the complaint form with party details and facts, upload all supporting documents in PDF format, and pay the court fee online by debit card, credit card, or net banking. After submission, you receive a case number and can track the status of your complaint.",
  },
  {
    question: "What is the time limit to file a consumer complaint in India?",
    answer:
      "A consumer complaint must be filed within two years from the date the cause of action arose — that is, from the date the defect, deficiency, or unfair trade practice occurred. The consumer commission can admit a complaint filed after two years if you provide sufficient cause for the delay, but it is always better to act promptly and preserve all evidence.",
  },
  {
    question: "How much does it cost to file a consumer complaint?",
    answer:
      "Court fees in consumer cases are very modest. In the District Commission: ₹100 for claims up to ₹5 lakh, ₹400 for claims between ₹5 lakh and ₹10 lakh, ₹1,000 for claims between ₹10 lakh and ₹20 lakh, ₹2,000 for claims between ₹20 lakh and ₹50 lakh, and ₹4,000 for claims between ₹50 lakh and ₹1 crore. In the State Commission: ₹2,000 to ₹4,000 depending on claim value. In the National Commission: ₹5,000. There is no court fee for complaints relating to personal injury or death caused by a hazardous product.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function HowToFileConsumerComplaintPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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
              How to File a Consumer Complaint in India — Step-by-Step Guide
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              You received a defective product, a service that was never delivered as promised, or
              a refund that was refused without reason. Now you want to know exactly what to do. This
              guide walks you through the complete consumer complaint procedure in India — from
              deciding whether to send a legal notice first, to choosing the right forum, gathering
              your documents, paying the correct fee, and filing your complaint online through
              eDaakhil.
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
              <div className="flex items-center gap-2 ml-auto text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>24 April 2026</span>
              </div>
            </div>
          </header>

          <div className="space-y-8 mb-16">

            {/* Section 1 — When to File */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                When Should You File a Consumer Complaint?
              </h2>
              <p className="text-muted-foreground mb-4">
                Not every consumer dispute needs to go to a consumer forum. Many disputes can and
                should be resolved at an earlier stage — and knowing the difference saves you time.
              </p>
              <p className="text-muted-foreground mb-4">
                <strong className="text-foreground">When a legal notice alone is often enough:</strong>{" "}
                If the amount involved is relatively small (under ₹50,000), if the company has a
                functioning customer service escalation process, or if the dispute is straightforward
                (a delayed refund, a cancelled order where money was not returned, or a product
                delivered in the wrong colour), sending a formal legal notice from a licensed advocate
                typically resolves the matter within 15 to 30 days. Companies do not want the
                reputational and operational cost of consumer forum proceedings, and a legal notice
                signals that you are serious.
              </p>
              <p className="text-muted-foreground mb-4">
                <strong className="text-foreground">When you should file a consumer complaint:</strong>{" "}
                If the company ignores your legal notice or gives an inadequate response, if the
                dispute involves a significant amount of money, if there is a manufacturing defect
                that caused physical harm, if an insurance company has wrongly repudiated your
                claim, or if a builder has delayed your flat possession by years — these situations
                warrant a formal consumer complaint before the appropriate commission.
              </p>
              <p className="text-muted-foreground">
                For a full explanation of your statutory rights under the Consumer Protection Act
                2019 — including what counts as a defect, deficiency, and unfair trade practice —
                read our companion article:{" "}
                <Link
                  href="/blogs/consumer-rights-protection-india"
                  className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
                >
                  Consumer Rights in India — Your Complete 2026 Guide
                </Link>
                .
              </p>
            </div>

            {/* Section 2 — Jurisdiction Table */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Choosing the Right Consumer Forum — Jurisdiction by Claim Value
              </h2>
              <p className="text-muted-foreground mb-4">
                Filing in the wrong forum is a common mistake that results in your complaint being
                returned. The consumer forum you approach depends on the total value of your
                claim — including the cost of the goods or services plus the compensation you are
                seeking.
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-muted/40">
                      <th className="text-left p-3 border border-border font-semibold text-foreground">
                        Forum
                      </th>
                      <th className="text-left p-3 border border-border font-semibold text-foreground">
                        Claim Value
                      </th>
                      <th className="text-left p-3 border border-border font-semibold text-foreground">
                        Governed By
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3 border border-border text-muted-foreground">
                        District Consumer Commission
                      </td>
                      <td className="p-3 border border-border text-muted-foreground">
                        Up to ₹1 crore
                      </td>
                      <td className="p-3 border border-border text-muted-foreground">
                        District-level President + 2 Members
                      </td>
                    </tr>
                    <tr className="bg-muted/20">
                      <td className="p-3 border border-border text-muted-foreground">
                        State Consumer Commission
                      </td>
                      <td className="p-3 border border-border text-muted-foreground">
                        ₹1 crore to ₹10 crore
                      </td>
                      <td className="p-3 border border-border text-muted-foreground">
                        State President + Members
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-border text-muted-foreground">
                        National Consumer Commission (NCDRC)
                      </td>
                      <td className="p-3 border border-border text-muted-foreground">
                        Above ₹10 crore
                      </td>
                      <td className="p-3 border border-border text-muted-foreground">
                        President (retired HC/SC Judge) + Members
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-muted-foreground mb-3">
                <strong className="text-foreground">Where to file:</strong> You have two options
                under the Consumer Protection Act 2019:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  The District Commission where you (the complainant) ordinarily reside or personally
                  work for gain — this is a consumer-friendly change introduced in the 2019 Act.
                </li>
                <li>
                  The District Commission where the opposite party (seller or service provider) has
                  its registered office or principal place of business, or where the branch through
                  which the cause of action arose is located.
                </li>
              </ul>
            </div>

            {/* Section 3 — Documents Required */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Documents Required to File a Consumer Complaint
              </h2>
              <p className="text-muted-foreground mb-4">
                Gather all of these documents before drafting your complaint. A well-documented
                complaint is more likely to be admitted without objection and processed faster.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="mt-1 w-5 h-5 flex-shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">1</span>
                  <span>
                    <strong className="text-foreground">Purchase receipt or invoice:</strong> The
                    original bill, invoice, or e-receipt from the seller. For online purchases,
                    a screenshot or PDF of the order confirmation is acceptable.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 w-5 h-5 flex-shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">2</span>
                  <span>
                    <strong className="text-foreground">Warranty or guarantee card:</strong> If the
                    product came with a warranty and the defect occurred within the warranty period,
                    this document is critical.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 w-5 h-5 flex-shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">3</span>
                  <span>
                    <strong className="text-foreground">Communication records:</strong> All emails,
                    WhatsApp messages, chat transcripts, or written letters exchanged with the
                    seller or service provider about the complaint. These demonstrate that you
                    raised the issue and it was not resolved.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 w-5 h-5 flex-shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">4</span>
                  <span>
                    <strong className="text-foreground">Defective product photos or videos:</strong>{" "}
                    Clear photographs or videos showing the defect. If the product is a service
                    (such as poor quality interior work), photographs of the finished work are
                    equally important.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 w-5 h-5 flex-shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">5</span>
                  <span>
                    <strong className="text-foreground">Legal notice copy and postal receipt:</strong>{" "}
                    A copy of the legal notice you sent, the postal receipt (Speed Post or
                    registered post), and the acknowledgement card if received back. If the company
                    responded, include that response too.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 w-5 h-5 flex-shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">6</span>
                  <span>
                    <strong className="text-foreground">Written complaint (the main document):</strong>{" "}
                    Your complaint must include your name, address, and contact details; the
                    opposite party's name and address; a chronological account of facts; the
                    specific relief you seek; and a declaration that the matter is not pending
                    before any other court or consumer forum.
                  </span>
                </li>
              </ul>
            </div>

            {/* Section 4 — Step-by-Step Filing Procedure */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Step-by-Step Filing Procedure
              </h2>
              <p className="text-muted-foreground mb-6">
                Follow these steps in order. Skipping the early steps — particularly the legal
                notice — can weaken your position and slow down resolution.
              </p>
              <ol className="space-y-5">
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                    1
                  </span>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Send a Legal Notice First</p>
                    <p className="text-muted-foreground">
                      Before approaching the consumer forum, send a formal legal notice to the
                      opposite party via Speed Post or registered post with acknowledgement due.
                      The notice should state the facts, the deficiency or defect, and the relief
                      you are demanding, with a deadline of 15 to 30 days to respond. Keep the
                      postal receipt and the acknowledgement card carefully — these are evidence.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                    2
                  </span>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Draft Your Consumer Complaint</p>
                    <p className="text-muted-foreground">
                      If the legal notice does not resolve the matter, draft your written consumer
                      complaint. Include: your full name and address; the opposite party's full
                      name, address, and role (manufacturer, seller, e-commerce platform, etc.);
                      facts in chronological order; what relief you are seeking (refund, replacement,
                      compensation, interest); and a declaration that the complaint is not pending
                      before any other court, tribunal, or consumer commission.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                    3
                  </span>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Attach All Supporting Documents</p>
                    <p className="text-muted-foreground">
                      Compile all the documents listed in the previous section. Make three sets of
                      copies — one for the forum, one for the opposite party, and one for yourself.
                      For online filing on eDaakhil, scan all documents as clear PDF files.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                    4
                  </span>
                  <div>
                    <p className="font-semibold text-foreground mb-1">
                      Determine the Right Forum and Pay the Court Fee
                    </p>
                    <p className="text-muted-foreground">
                      Based on the total value of your claim, determine whether to file at the
                      District, State, or National Commission. Calculate the applicable court fee
                      (see the fee table in Section 5 below). For in-person filing, pay by demand
                      draft in favour of the President of the relevant commission. For online filing
                      on eDaakhil, pay directly through the portal using debit card, credit card,
                      or net banking.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                    5
                  </span>
                  <div>
                    <p className="font-semibold text-foreground mb-1">
                      File In Person or Online via eDaakhil
                    </p>
                    <p className="text-muted-foreground">
                      Online filing: Go to edaakhil.nic.in, register with your mobile number and
                      email, complete the complaint form, upload all documents, and pay the court
                      fee. In-person filing: Take three sets of your complaint and documents to
                      the consumer forum office and submit them at the filing counter.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                    6
                  </span>
                  <div>
                    <p className="font-semibold text-foreground mb-1">
                      Receive Your Case Number
                    </p>
                    <p className="text-muted-foreground">
                      After submission, the forum will review your complaint for admission. If
                      admitted, you receive a case number and a first hearing date. The forum will
                      send a notice to the opposite party, who typically has 30 days to file a
                      written reply.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                    7
                  </span>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Attend Hearings</p>
                    <p className="text-muted-foreground">
                      Attend all scheduled hearing dates. You can appear yourself or be represented
                      by an advocate. The commission will consider arguments from both sides, review
                      evidence, and pass its final order — awarding compensation, directing a
                      refund, or dismissing the complaint. If you win and the opposite party does
                      not comply, you can file an execution petition before the same commission.
                    </p>
                  </div>
                </li>
              </ol>
            </div>

            {/* Section 5 — Court Fees */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Consumer Court Fees in India
              </h2>
              <p className="text-muted-foreground mb-4">
                One of the biggest advantages of the consumer forum system is that court fees are
                kept very low to ensure access to justice. Here is the current fee structure:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-muted/40">
                      <th className="text-left p-3 border border-border font-semibold text-foreground">
                        Forum
                      </th>
                      <th className="text-left p-3 border border-border font-semibold text-foreground">
                        Claim Value
                      </th>
                      <th className="text-left p-3 border border-border font-semibold text-foreground">
                        Court Fee
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3 border border-border text-muted-foreground" rowSpan={5}>
                        District Consumer Commission
                      </td>
                      <td className="p-3 border border-border text-muted-foreground">Up to ₹5 lakh</td>
                      <td className="p-3 border border-border text-muted-foreground">₹100</td>
                    </tr>
                    <tr className="bg-muted/20">
                      <td className="p-3 border border-border text-muted-foreground">₹5 lakh to ₹10 lakh</td>
                      <td className="p-3 border border-border text-muted-foreground">₹400</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-border text-muted-foreground">₹10 lakh to ₹20 lakh</td>
                      <td className="p-3 border border-border text-muted-foreground">₹1,000</td>
                    </tr>
                    <tr className="bg-muted/20">
                      <td className="p-3 border border-border text-muted-foreground">₹20 lakh to ₹50 lakh</td>
                      <td className="p-3 border border-border text-muted-foreground">₹2,000</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-border text-muted-foreground">₹50 lakh to ₹1 crore</td>
                      <td className="p-3 border border-border text-muted-foreground">₹4,000 – ₹5,000</td>
                    </tr>
                    <tr className="bg-muted/20">
                      <td className="p-3 border border-border text-muted-foreground" rowSpan={2}>
                        State Consumer Commission
                      </td>
                      <td className="p-3 border border-border text-muted-foreground">₹1 crore to ₹5 crore</td>
                      <td className="p-3 border border-border text-muted-foreground">₹2,000 – ₹4,000</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-border text-muted-foreground">₹5 crore to ₹10 crore</td>
                      <td className="p-3 border border-border text-muted-foreground">₹10,000</td>
                    </tr>
                    <tr className="bg-muted/20">
                      <td className="p-3 border border-border text-muted-foreground">
                        National Consumer Commission (NCDRC)
                      </td>
                      <td className="p-3 border border-border text-muted-foreground">Above ₹10 crore</td>
                      <td className="p-3 border border-border text-muted-foreground">₹5,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-muted-foreground mt-4 text-sm">
                Note: There is no court fee for complaints relating to personal injury or death
                caused by a hazardous product. Fees may vary slightly by state — verify the current
                schedule with the forum when filing.
              </p>
            </div>

            {/* Section 6 — Timeline */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Timeline — How Long Does a Consumer Case Take?
              </h2>
              <p className="text-muted-foreground mb-4">
                The Consumer Protection Act 2019 mandates that consumer disputes should be disposed
                of within five months (or three months for cases not requiring laboratory testing).
                In practice, timelines vary depending on the forum's workload and the complexity of
                the case.
              </p>
              <ul className="space-y-4 text-muted-foreground">
                <li>
                  <strong className="text-foreground">District Consumer Commission:</strong>{" "}
                  Straightforward cases (defective product, refund not processed, deficient service
                  with clear documentation) are typically disposed of in 3 to 6 months. Contested
                  cases involving multiple adjournments can take 12 to 18 months.
                </li>
                <li>
                  <strong className="text-foreground">State Consumer Commission:</strong> Expect 6
                  to 18 months for first-instance cases. The State Commission also hears appeals
                  from District Commission orders, which adds to its docket.
                </li>
                <li>
                  <strong className="text-foreground">National Consumer Commission (NCDRC):</strong>{" "}
                  Complex or high-value cases at the national level typically take 1 to 3 years. The
                  NCDRC hears both original complaints (above ₹10 crore) and appeals from State
                  Commissions.
                </li>
                <li>
                  <strong className="text-foreground">Mediation (faster option):</strong> If both
                  parties agree, the consumer commission can refer the dispute to a Consumer
                  Mediation Cell. Mediation typically concludes within 1 to 3 months and results in
                  a binding settlement that is filed before the commission. This is the fastest path
                  to resolution if the opposite party is willing to engage.
                </li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Sending a legal notice before filing often avoids the forum entirely — most
                straightforward disputes (refunds, replacements, delivery issues) are resolved
                within 30 days of a well-drafted legal notice, without any court appearances.
              </p>
            </div>

            {/* Section 7 — CTA Block */}
            <div className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground rounded-2xl p-8 overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-3">
                  Send a Legal Notice First — vakiltech
                </h2>
                <p className="text-primary-foreground/85 mb-6 max-w-2xl">
                  Before you spend months in forum proceedings, give the company one formal
                  opportunity to resolve the issue. A legal notice from a licensed advocate often
                  produces a resolution within 30 days — at a fraction of the cost and effort of
                  a consumer complaint. vakiltech drafts and sends your notice via Speed Post, with
                  a signed copy for your records.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/send-legal-notice/consumer-complaint-legal-notice"
                    className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-background text-foreground rounded-lg font-semibold hover:bg-background/90 transition-all shadow-lg"
                  >
                    Draft Consumer Complaint Notice — ₹1,499
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/consultation"
                    className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-foreground/10 border border-primary-foreground/30 text-primary-foreground rounded-lg font-semibold hover:bg-primary-foreground/20 transition-all"
                  >
                    Talk to a Consumer Lawyer — ₹299
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

          </div>

          <FAQSection
            faqs={faqItems}
            title="Frequently Asked Questions — Consumer Complaint Procedure"
          />
        </article>
      </div>
    </>
  );
}
