import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { FAQSection } from "@/components/shared/faq-section";

export const metadata: Metadata = {
  title: "How to File for Divorce in India — Practical 2026 Guide | vakiltech",
  description:
    "Filing for divorce in India? Here's what paperwork you need, where to file, how much it costs, and when to hire a lawyer. Talk to one — ₹299.",
  keywords: [
    "how to file for divorce",
    "how to apply for divorce",
    "how to file divorce in india",
    "procedure to file divorce in india",
    "process of filing divorce in india",
  ],
  alternates: {
    canonical: "https://vakiltech.in/guides/how-to-file-for-divorce-india",
  },
  openGraph: {
    title: "How to File for Divorce in India — Practical 2026 Guide | vakiltech",
    description:
      "Filing for divorce in India? Here's what paperwork you need, where to file, how much it costs, and when to hire a lawyer. Talk to one — ₹299.",
    type: "article",
    url: "https://vakiltech.in/guides/how-to-file-for-divorce-india",
    siteName: "vakiltech",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to File for Divorce in India — Practical 2026 Guide | vakiltech",
    description:
      "Filing for divorce in India? Here's what paperwork you need, where to file, how much it costs, and when to hire a lawyer. Talk to one — ₹299.",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to File for Divorce in India: A Practical Guide",
  description:
    "Filing for divorce in India? Here's what paperwork you need, where to file, how much it costs, and when to hire a lawyer.",
  datePublished: "2026-04-24",
  dateModified: "2026-04-24",
  author: {
    "@type": "Organization",
    name: "vakiltech Legal Team",
    url: "https://vakiltech.in",
  },
  publisher: {
    "@type": "Organization",
    name: "vakiltech",
    url: "https://vakiltech.in",
    logo: {
      "@type": "ImageObject",
      url: "https://vakiltech.in/logo.png",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://vakiltech.in/guides/how-to-file-for-divorce-india",
  },
};


const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can I file for divorce without a lawyer in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Technically yes — the court does not require you to be represented by an advocate. In practice, filing a divorce petition involves drafting precise legal pleadings, complying with court-specific formats, and navigating multiple hearings. Mistakes in the petition can cause delays of months. For mutual consent divorce where both parties agree on every term, many couples manage with minimal legal support. For contested divorce, going without a lawyer is strongly inadvisable.",
      },
    },
    {
      "@type": "Question",
      name: "What is the minimum time for divorce in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The fastest route is mutual consent divorce under Section 13B of the Hindu Marriage Act. There is a mandatory six-month cooling-off period between the first and second motion — though courts can waive this if you can show the marriage has irretrievably broken down and both parties have been living separately for over 18 months. After the waiver, if everything is in order, the decree can come within weeks. Contested divorce in India routinely takes 2–5 years, sometimes longer.",
      },
    },
    {
      "@type": "Question",
      name: "Can a wife stop a divorce filed by the husband?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In a contested divorce, the wife can defend the petition, contest the grounds cited, and file a counter-petition. This does not stop the proceedings but it can significantly extend the timeline. Courts can still grant divorce even if one party objects, provided the petitioner establishes the ground (cruelty, desertion, adultery, etc.) on evidence. In a mutual consent divorce, either party can withdraw consent before the second motion is filed — which effectively stops that particular route.",
      },
    },
    {
      "@type": "Question",
      name: "Can a husband refuse mutual consent divorce?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Mutual consent divorce requires genuine, free consent from both spouses at both the first motion and the second motion stages. If the husband withdraws consent before the second motion, the joint petition lapses. The wife would then need to file a contested divorce on valid grounds. There is no mechanism in Indian law to compel a spouse to give consent to a mutual divorce.",
      },
    },
    {
      "@type": "Question",
      name: "What happens to children during divorce proceedings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Custody of children is a separate matter dealt with either in the divorce petition itself or through a separate custody application. Courts decide custody based on the 'best interests of the child' standard — not automatically in favour of either parent. Interim custody arrangements are usually fixed at an early hearing. Either parent can seek interim custody orders while the main case is pending. Maintenance for children is addressed under Section 26 of the Hindu Marriage Act or Section 125 CrPC, whichever is applicable.",
      },
    },
    {
      "@type": "Question",
      name: "How does NRI divorce work in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If a marriage was solemnised in India, Indian courts retain jurisdiction even if one or both spouses now live abroad. An NRI petitioner can file in the family court in the place of marriage, last shared address in India, or where the spouse currently resides in India. A foreign divorce decree (obtained abroad by one party without the other's participation) is generally not automatically recognised in India — the non-participating spouse can challenge it in an Indian court. If you are an NRI navigating this, specialist advice is essential before you act.",
      },
    },
    {
      "@type": "Question",
      name: "What is the court fee for filing a divorce petition?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Court filing fees are set by each state and are generally modest — ranging from ₹200 to ₹1,000 for the petition itself. The larger costs are lawyer fees, which vary considerably: in metropolitan family courts, contested divorce representation can cost ₹30,000–₹2,00,000+ depending on complexity. Mutual consent divorces are considerably cheaper. Additional costs include stamp duty on any settlement agreement, notarisation fees, and the cost of certified document copies.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to be physically present in court for every date?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For most hearings in a contested case, yes — at least one party must be present or represented by an advocate through a vakalatnama. In a mutual consent divorce, both parties must personally appear before the judge for the first motion and the second motion — these two hearings cannot be skipped or substituted. If you are an NRI or face genuine hardship, some courts accept video conferencing for interim hearings, but you should confirm this with your advocate and the specific family court.",
      },
    },
    {
      "@type": "Question",
      name: "Can divorce proceedings be kept confidential?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Family courts in India conduct proceedings in camera (closed court) by default under Section 11 of the Family Courts Act, 1984. This means the general public cannot attend the hearings, and case records are not published. However, the final decree is a court document and can be inspected by parties to the case. Matters of maintenance, custody, and settlement are similarly confidential. This is one reason family courts exist as a separate system from civil courts.",
      },
    },
    {
      "@type": "Question",
      name: "What if my spouse has gone missing or cannot be found?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If the whereabouts of the respondent spouse are unknown, you can still file a divorce petition. The court will direct service of summons by substituted service — typically public notice by newspaper publication. If the spouse does not appear after proper notice, the court can proceed ex parte (in their absence) and eventually grant a decree. This process takes longer than a standard contested case. Desertion for a continuous period of two years is also a standalone ground for divorce under the Hindu Marriage Act.",
      },
    },
  ],
};

const faqs = [
  {
    question: "Can I file for divorce without a lawyer in India?",
    answer:
      "Technically yes — the court does not require you to be represented by an advocate. In practice, filing a divorce petition involves drafting precise legal pleadings, complying with court-specific formats, and navigating multiple hearings. Mistakes in the petition can cause delays of months. For mutual consent divorce where both parties agree on every term, many couples manage with minimal legal support. For contested divorce, going without a lawyer is strongly inadvisable.",
  },
  {
    question: "What is the minimum time for divorce in India?",
    answer:
      "The fastest route is mutual consent divorce under Section 13B of the Hindu Marriage Act. There is a mandatory six-month cooling-off period between the first and second motion — though courts can waive this if you can show the marriage has irretrievably broken down and both parties have been living separately for over 18 months. After the waiver, if everything is in order, the decree can come within weeks. Contested divorce in India routinely takes 2–5 years, sometimes longer.",
  },
  {
    question: "Can a wife stop a divorce filed by the husband?",
    answer:
      "In a contested divorce, the wife can defend the petition, contest the grounds cited, and file a counter-petition. This does not stop the proceedings but it can significantly extend the timeline. Courts can still grant divorce even if one party objects, provided the petitioner establishes the ground (cruelty, desertion, adultery, etc.) on evidence. In a mutual consent divorce, either party can withdraw consent before the second motion is filed — which effectively stops that particular route.",
  },
  {
    question: "Can a husband refuse mutual consent divorce?",
    answer:
      "Yes. Mutual consent divorce requires genuine, free consent from both spouses at both the first motion and the second motion stages. If the husband withdraws consent before the second motion, the joint petition lapses. The wife would then need to file a contested divorce on valid grounds. There is no mechanism in Indian law to compel a spouse to give consent to a mutual divorce.",
  },
  {
    question: "What happens to children during divorce proceedings?",
    answer:
      "Custody of children is a separate matter dealt with either in the divorce petition itself or through a separate custody application. Courts decide custody based on the 'best interests of the child' standard — not automatically in favour of either parent. Interim custody arrangements are usually fixed at an early hearing. Either parent can seek interim custody orders while the main case is pending. Maintenance for children is addressed under Section 26 of the Hindu Marriage Act or Section 125 CrPC, whichever is applicable.",
  },
  {
    question: "How does NRI divorce work in India?",
    answer:
      "If a marriage was solemnised in India, Indian courts retain jurisdiction even if one or both spouses now live abroad. An NRI petitioner can file in the family court in the place of marriage, last shared address in India, or where the spouse currently resides in India. A foreign divorce decree (obtained abroad by one party without the other's participation) is generally not automatically recognised in India — the non-participating spouse can challenge it in an Indian court. If you are an NRI navigating this, specialist advice is essential before you act.",
  },
  {
    question: "What is the court fee for filing a divorce petition?",
    answer:
      "Court filing fees are set by each state and are generally modest — ranging from ₹200 to ₹1,000 for the petition itself. The larger costs are lawyer fees, which vary considerably: in metropolitan family courts, contested divorce representation can cost ₹30,000–₹2,00,000+ depending on complexity. Mutual consent divorces are considerably cheaper. Additional costs include stamp duty on any settlement agreement, notarisation fees, and the cost of certified document copies.",
  },
  {
    question: "Do I need to be physically present in court for every date?",
    answer:
      "For most hearings in a contested case, yes — at least one party must be present or represented by an advocate through a vakalatnama. In a mutual consent divorce, both parties must personally appear before the judge for the first motion and the second motion — these two hearings cannot be skipped or substituted. If you are an NRI or face genuine hardship, some courts accept video conferencing for interim hearings, but you should confirm this with your advocate and the specific family court.",
  },
  {
    question: "Can divorce proceedings be kept confidential?",
    answer:
      "Family courts in India conduct proceedings in camera (closed court) by default under Section 11 of the Family Courts Act, 1984. This means the general public cannot attend the hearings, and case records are not published. However, the final decree is a court document and can be inspected by parties to the case. Matters of maintenance, custody, and settlement are similarly confidential. This is one reason family courts exist as a separate system from civil courts.",
  },
  {
    question: "What if my spouse has gone missing or cannot be found?",
    answer:
      "If the whereabouts of the respondent spouse are unknown, you can still file a divorce petition. The court will direct service of summons by substituted service — typically public notice by newspaper publication. If the spouse does not appear after proper notice, the court can proceed ex parte (in their absence) and eventually grant a decree. This process takes longer than a standard contested case. Desertion for a continuous period of two years is also a standalone ground for divorce under the Hindu Marriage Act.",
  },
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/guides" },
  { label: "How to File for Divorce in India", current: true },
];

export default function HowToFileForDivorceIndiaPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb bar */}
      <div className="border-b border-border bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Article header */}
        <header className="mb-10">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Calendar className="h-4 w-4" />
            <time dateTime="2026-04-24">Updated April 24, 2026</time>
            <span className="mx-1">·</span>
            <span>By vakiltech Legal Team</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-5">
            How to File for Divorce in India: A Practical Guide
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            This guide answers the practical question: what do you actually do to start a divorce in India?
            What paperwork do you need, which court do you go to, how much will it cost, and at what
            point must you bring in a lawyer? If you are looking for the step-by-step legal court procedure,
            we have a separate guide for that — this one is about what you need to do before you walk through
            the court door.
          </p>
        </header>

        {/* Primary CTA */}
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-foreground text-lg">Not sure where to start?</p>
            <p className="text-muted-foreground text-sm mt-1">
              Speak to a verified divorce advocate today — fixed price, no surprises.
            </p>
          </div>
          <Link
            href="/consultation"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold text-sm whitespace-nowrap hover:bg-primary/90 transition-colors shadow-sm"
          >
            Talk to a Divorce Lawyer — ₹299
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Section 1 — Mutual Consent or Contested */}
        <div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            1. First Decision: Mutual Consent or Contested?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-5">
            Before you gather a single document or book a lawyer, you need to answer one question:
            are you and your spouse on the same page about ending the marriage? The entire trajectory
            of your divorce — the timeline, the cost, the emotional toll — turns on the answer.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-5">
            Ask yourself these three questions:
          </p>
          <ol className="space-y-4 mb-6">
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-bold">1</span>
              <div>
                <p className="font-semibold text-foreground">Does my spouse agree that the marriage should end?</p>
                <p className="text-muted-foreground text-sm mt-1">
                  Not necessarily for the same reasons, but are they willing to consent to a divorce decree?
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-bold">2</span>
              <div>
                <p className="font-semibold text-foreground">Have we been living separately for at least one year?</p>
                <p className="text-muted-foreground text-sm mt-1">
                  Mutual consent divorce under the Hindu Marriage Act requires a minimum one year of separation
                  before filing. Under the Special Marriage Act, this is one year as well.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-bold">3</span>
              <div>
                <p className="font-semibold text-foreground">Can we agree on custody, maintenance, and property division?</p>
                <p className="text-muted-foreground text-sm mt-1">
                  Mutual consent divorce requires a written settlement agreement covering all ancillary matters.
                  If any of these are genuinely disputed, the mutual consent route will break down.
                </p>
              </div>
            </li>
          </ol>
          <div className="bg-muted/50 rounded-lg p-4 border border-border">
            <p className="text-sm font-semibold text-foreground mb-1">Decision rule</p>
            <p className="text-sm text-muted-foreground">
              If you answered <strong>yes to all three</strong>, mutual consent divorce is your fastest,
              cheapest, and least adversarial option.{" "}
              <Link href="/guides/mutual-consent-divorce-india" className="text-primary underline underline-offset-2 hover:no-underline">
                Read our detailed guide on mutual consent divorce in India
              </Link>{" "}
              for the full process. If you answered no to any one of them, you are looking at a contested
              divorce — read on.
            </p>
          </div>
        </div>

        {/* Section 2 — Which Law Applies */}
        <div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            2. Which Law Applies to Your Marriage?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            India does not have a single divorce law. The personal law that governed your marriage
            also governs your divorce — it determines which grounds are available to you, what the
            minimum separation period is, and which court has authority. Here is how to identify yours:
          </p>

          <div className="space-y-5">
            <div className="border-l-4 border-primary pl-4">
              <h3 className="font-bold text-foreground mb-1">Hindu Marriage Act, 1955</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Applies if both spouses are Hindu, Buddhist, Jain, or Sikh. This covers the majority of
                divorce cases filed in India. Grounds include cruelty, desertion (two years), adultery,
                conversion, mental disorder, communicable disease, and mutual consent. Petitions are filed
                in the family court of the relevant jurisdiction.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-bold text-foreground mb-1">Special Marriage Act, 1954</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Applies to inter-faith marriages and civil marriages registered under this Act, regardless
                of religion. The grounds for divorce largely mirror the Hindu Marriage Act. NRIs who
                registered their marriage at an Indian consulate often fall under this Act. The petition
                goes to the district court or family court with jurisdiction.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-bold text-foreground mb-1">Muslim Personal Law (Dissolution of Muslim Marriages Act, 1939)</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Applies to Muslims. Divorce options include talaq (by the husband), khul (wife-initiated
                dissolution by returning mehr), and court-supervised divorce by the wife on grounds listed
                in the 1939 Act. The Triple Talaq (instantaneous talaq) was declared unconstitutional in 2017
                and is now a criminal offence. Muslim couples may also opt for a court decree under the 1939 Act
                regardless of religious divorce — useful for official records and remarriage documentation.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="font-bold text-foreground mb-1">Indian Christian Marriage Act / Divorce Act, 1869</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Applies to Christians. Historically limited grounds, but the Supreme Court has progressively
                expanded access — couples can now seek divorce on grounds of cruelty and desertion in addition
                to adultery. Petitions are filed in the district court or family court. Mutual consent divorce
                for Christians was added by amendment to the Divorce Act.
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-bold text-foreground mb-1">Parsi Marriage and Divorce Act, 1936</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Applies to Parsis. Divorce petitions under this Act go to a special Parsi matrimonial
                court constituted for this purpose in cities with a sufficient Parsi population — in other
                cities, the jurisdiction falls to the district court. Grounds include non-consummation,
                adultery, cruelty, desertion, and others listed in the Act.
              </p>
            </div>
          </div>

          <div className="mt-5 bg-muted/50 rounded-lg p-4 border border-border">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Practical takeaway:</strong> Identify your personal law
              before you do anything else. It determines the grounds you can plead, the minimum waiting
              period, and which court counter you walk up to. If you are unsure which law applies — for
              instance, in a conversion situation or an inter-faith marriage — get legal advice before filing.
            </p>
          </div>
        </div>

        {/* Section 3 — Documents Checklist */}
        <div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            3. Documents Checklist Before You File
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Gather these before you call a lawyer or step into a court office. Having everything
            ready in one folder shortens consultation time and prevents avoidable filing delays.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Column 1 */}
            <div>
              <h3 className="font-bold text-foreground mb-3 text-base">
                Required in all divorce cases (mutual or contested)
              </h3>
              <ul className="space-y-2">
                {[
                  "Original marriage certificate (registered) — or proof of marriage if unregistered (photos, invitation, affidavits from witnesses)",
                  "Proof of address of both spouses — Aadhaar, voter ID, or passport",
                  "Proof of identity — Aadhaar / PAN / passport of the petitioner",
                  "Proof of separation — rent agreement, utility bills, or affidavit confirming separate residence and the date separation began",
                  "Passport-size photographs (usually 2–4 of each spouse)",
                  "Details of children: birth certificates, school records if custody will be contested",
                  "List of jointly owned assets — property papers, bank account details, vehicle registration",
                  "Income proof — salary slips, IT returns (last 3 years) — required for maintenance claims",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                    <span className="flex-shrink-0 w-4 h-4 rounded border-2 border-primary mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="font-bold text-foreground mb-3 text-base">
                Additionally required for mutual consent divorce
              </h3>
              <ul className="space-y-2 mb-6">
                {[
                  "Signed settlement agreement covering maintenance (if any), permanent alimony, child custody, visitation rights, and division of property",
                  "Affidavit by both parties confirming voluntary consent — no force, fraud, or coercion",
                  "Proof of living separately for at least one year prior to filing",
                  "Joint petition drafted and signed by both parties (your lawyer will prepare this)",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                    <span className="flex-shrink-0 w-4 h-4 rounded border-2 border-blue-500 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                <p className="text-sm font-semibold text-amber-800 dark:text-amber-200 mb-1">
                  Tip: get certified copies
                </p>
                <p className="text-sm text-amber-700 dark:text-amber-300">
                  Courts often require attested or notarised copies, not originals. Get 3–4
                  certified copies of key documents (marriage certificate, address proof) so
                  you are not running back to the registrar multiple times.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4 — Jurisdiction */}
        <div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            4. Choosing the Right Court — Jurisdiction
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-5">
            Filing in the wrong court is one of the most common and costly early mistakes. The court
            will reject your petition or transfer it, and you lose weeks or months. Here is how to
            identify the correct family court for your case.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-5">
            Under Section 19 of the Hindu Marriage Act (and equivalent provisions in other personal laws),
            a divorce petition can be filed in the family court (or district court where no family court
            exists) at any of these locations — you choose:
          </p>

          <div className="space-y-4 mb-6">
            <div className="flex gap-4 p-4 bg-muted/40 rounded-lg border border-border">
              <div className="flex-shrink-0 w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-bold">A</div>
              <div>
                <p className="font-semibold text-foreground text-sm">Where the marriage was solemnised</p>
                <p className="text-muted-foreground text-sm mt-1">
                  The family court in the city or district where the wedding took place. Strong option
                  if you still live near there or have documentary evidence from that location.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-4 bg-muted/40 rounded-lg border border-border">
              <div className="flex-shrink-0 w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-bold">B</div>
              <div>
                <p className="font-semibold text-foreground text-sm">Where the parties last resided together</p>
                <p className="text-muted-foreground text-sm mt-1">
                  The last shared matrimonial home. Most commonly used — utility bills, rent agreements,
                  or bank statements from that address serve as proof.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-4 bg-muted/40 rounded-lg border border-border">
              <div className="flex-shrink-0 w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-bold">C</div>
              <div>
                <p className="font-semibold text-foreground text-sm">Where the wife currently resides</p>
                <p className="text-muted-foreground text-sm mt-1">
                  A protective provision — if the wife has moved to a new city after separation, she
                  can file (or have the petition filed) in the family court of her current place of
                  residence, regardless of where the marriage took place or where the husband lives.
                </p>
              </div>
            </div>
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed">
            <strong className="text-foreground">Which to choose?</strong> Go with the court that is
            most convenient for you to attend repeatedly — hearings can stretch over years in contested
            matters. Travel cost and ease of access to your advocate matter. In a mutual consent divorce,
            both parties must appear at the same court, so pick the one easiest for both.
          </p>
        </div>

        {/* Section 5 — Hiring a Lawyer */}
        <div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            5. Hiring a Divorce Lawyer in India — What to Ask
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Not all family law advocates are equal. Some specialise in mutual consent matters;
            others have trial experience for contested cases. Before you retain anyone, ask these
            five questions — the answers will tell you a great deal.
          </p>

          <div className="space-y-5">
            {[
              {
                q: "How many divorce cases have you handled in this family court specifically?",
                a: "Court culture varies significantly. An advocate who regularly appears in your target family court knows the judges' preferences, the registry staff, and the local timelines. An advocate who is unfamiliar with that specific court is a liability even if they are excellent elsewhere.",
              },
              {
                q: "Will you handle the case personally, or pass it to a junior?",
                a: "Many senior advocates brief junior associates for routine hearings. That is acceptable — but you should know upfront who will be in court on your dates and how communication will work. Ask for the associate's contact details if the senior advocates.",
              },
              {
                q: "What is your fee structure — fixed, per-hearing, or milestone-based?",
                a: "Per-hearing billing can balloon unpredictably in a long contested case. A fixed or capped fee gives you cost certainty. Get the fee arrangement in writing before signing any vakalatnama.",
              },
              {
                q: "What is a realistic timeline for my situation, and what could delay it?",
                a: "No lawyer can guarantee a timeline, but an experienced advocate can tell you what the family court's current backlog looks like and what specific risks — an uncooperative spouse, jurisdictional issues, tracing of assets — could extend proceedings. Be wary of anyone who promises a quick result in a contested matter.",
              },
              {
                q: "What do I need to do versus what will you handle?",
                a: "Divorce proceedings require active participation: gathering documents, attending hearings, providing instructions. Understand clearly what your obligations are. A good advocate gives you a list of action items at the first meeting rather than leaving you to figure it out.",
              },
            ].map((item, i) => (
              <div key={i} className="border border-border rounded-lg p-4">
                <p className="font-semibold text-foreground text-sm mb-2">
                  Question {i + 1}: {item.q}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-primary/5 border border-primary/20 rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-foreground">Skip the uncertainty.</p>
              <p className="text-muted-foreground text-sm mt-1">
                Talk to a verified divorce advocate on vakiltech — flat ₹299 for a 20-minute consultation,
                no retainer required.
              </p>
            </div>
            <Link
              href="/consultation"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-semibold text-sm whitespace-nowrap hover:bg-primary/90 transition-colors"
            >
              Talk to a Divorce Lawyer — ₹299
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Section 6 — Day 1: Filing the Petition */}
        <div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            6. Filing the Petition — What Happens on Day 1
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Your advocate prepares the petition. Before you walk into the family court, here is
            what to expect on filing day — most people go in without knowing any of this and are
            caught off guard.
          </p>

          <div className="space-y-5">
            <div>
              <h3 className="font-semibold text-foreground mb-2">What you bring to court</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                The original petition (signed by you and your advocate) plus the required number of
                copies — typically three sets: one for the court, one for service on the respondent,
                one for your record. Attach certified copies of all supporting documents (marriage
                certificate, address proof, evidence of separation). A court fee receipt — you pay
                the prescribed fee at the court cashier window before filing. Your advocate's vakalatnama
                (power of attorney authorising them to represent you). Your own identity proof — some
                registries ask for Aadhaar at the counter.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">What the court clerk does</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                The filing clerk stamps and registers the petition, assigns it a case number, and
                issues a filing receipt. This receipt is your most important document at this stage —
                keep it. The clerk checks the petition for basic completeness (signatures, annexures,
                fee receipt) but does not evaluate the merits. If something is missing, the petition
                is returned with a defect memo — your advocate fixes it and re-files.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">What comes back to you</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                After registration, the court issues a "first date" — the date on which the case
                comes before the judge for the first time. This is usually 4–12 weeks from the
                date of filing, depending on the family court's backlog. On this first date, the
                judge formally takes the case on record, orders service of summons on the respondent
                (your spouse), and may pass interim orders on matters like maintenance or child custody
                if you have applied for them.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">What "first date" means in practice</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                The first hearing is almost never substantive — it is administrative. The judge
                confirms the petition is in order and directs next steps. In a mutual consent matter,
                the judge records the statements of both parties (first motion) on this date if both
                appear. In a contested matter, the judge sets a date for filing the respondent's reply.
                After the first date, subsequent dates are typically 6–10 weeks apart, sometimes longer.
              </p>
            </div>

            <div className="bg-muted/50 rounded-lg p-4 border border-border">
              <p className="text-sm font-semibold text-foreground mb-1">Also consider</p>
              <p className="text-sm text-muted-foreground">
                If your situation involves domestic violence, harassment, or threats, you can file
                for interim protection under the Protection of Women from Domestic Violence Act
                simultaneously. You may also consider sending a{" "}
                <Link href="/send-legal-notice/legal-notice-for-divorce" className="text-primary underline underline-offset-2 hover:no-underline">
                  legal notice for divorce
                </Link>{" "}
                before filing the petition — this creates a documented record and sometimes prompts the
                other party to settle without court proceedings.
              </p>
            </div>
          </div>
        </div>

        {/* Section 7 — Link to procedure guide (MANDATORY cannibalization prevention) */}
        <div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            7. After Filing: The Court Process
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-5">
            This guide covers the practical side of filing: the paperwork, the jurisdiction choice,
            hiring a lawyer, and what happens on day one. The court process that follows — summons
            and service, the respondent's written statement, evidence, arguments, and the final decree
            — is a different subject, with its own stages, timelines, and strategy points.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-5">
            For the legal court procedure, see our step-by-step guide:{" "}
            <Link
              href="/guides/divorce-procedure-in-india"
              className="text-primary font-semibold underline underline-offset-2 hover:no-underline"
            >
              Divorce Procedure in India — Complete Step-by-Step Guide
            </Link>
            . It covers everything from summons service through to the decree absolute, including what
            to expect at each stage in a contested case and how the six-month cooling-off period works
            in mutual consent matters.
          </p>
          <div className="flex items-center gap-3 mt-4">
            <Link
              href="/guides/divorce-procedure-in-india"
              className="inline-flex items-center gap-2 border border-primary text-primary px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Read the step-by-step court procedure guide
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Secondary CTA card before FAQ */}
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-foreground text-lg">Ready to take the next step?</p>
            <p className="text-muted-foreground text-sm mt-1">
              A vakiltech divorce advocate can review your situation, confirm which law applies,
              and tell you exactly what to file and where — in one 20-minute call.
            </p>
          </div>
          <Link
            href="/consultation"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold text-sm whitespace-nowrap hover:bg-primary/90 transition-colors shadow-sm"
          >
            Talk to a Divorce Lawyer — ₹299
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Section 8 — FAQ */}
        <FAQSection
          title="Frequently Asked Questions About Filing for Divorce in India"
          subtitle="Straight answers to the questions people search for most."
          faqs={faqs}
          className="!px-0 !py-0"
        />
      </article>
    </div>
  );
}
