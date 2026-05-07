import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { FAQSection } from "@/components/shared/faq-section";

export const metadata: Metadata = {
  title: "Mutual Consent Divorce in India: Process, Timeline, Fees | vakiltech",
  description:
    "Mutual consent divorce is the fastest route — 6 to 18 months. Learn the two-motion process, papers required, cost, and talk to a divorce lawyer — ₹299.",
  keywords: [
    "mutual divorce",
    "mutual consent divorce process",
    "how to apply for mutual divorce",
    "mutual divorce time",
    "mutual divorce papers",
  ],
  alternates: {
    canonical: "https://vakiltech.in/guides/mutual-consent-divorce-india",
  },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/guides" },
  { label: "Mutual Consent Divorce in India", current: true },
];

const faqItems = [
  {
    question: "Can we get a mutual consent divorce without going to court?",
    answer:
      "No. Under Section 13B of the Hindu Marriage Act, 1955, both spouses must appear in court for the First Motion and again for the Second Motion. Personal appearance before the Family Court is mandatory. However, if one spouse is abroad or unable to travel, they may be allowed to appoint a Power of Attorney holder subject to the court's discretion — speak to your advocate before assuming this is available in your jurisdiction.",
  },
  {
    question: "Can NRI couples file for mutual consent divorce in India?",
    answer:
      "Yes. NRI couples married under Indian law (Hindu Marriage Act, Special Marriage Act, etc.) can file for mutual consent divorce in an Indian Family Court. The petition is typically filed in the court having jurisdiction over the last place of residence in India or where the marriage was solemnised. One or both spouses may need to be present during the two motions, though courts increasingly permit exceptions for NRIs through authorised representatives — this is fact-specific, so consult an advocate familiar with NRI divorce matters.",
  },
  {
    question: "What happens to property and assets in a mutual consent divorce?",
    answer:
      "Property division is entirely negotiated between the parties and documented in a settlement agreement (also called a consent terms or memorandum of understanding) filed along with the joint petition. The court does not automatically divide property — whatever the spouses agree to is recorded and given the force of a decree. If agreement cannot be reached on property, it may convert the matter into a contested divorce. It is strongly advisable to have an advocate draft the settlement agreement to ensure it is legally enforceable.",
  },
  {
    question: "What about children's custody in a mutual consent divorce?",
    answer:
      "Custody, visitation rights, and child maintenance are agreed upon by both spouses and documented in the settlement agreement. The court reviews the custody arrangement to ensure it is in the best interests of the child — the court is not a rubber stamp and may raise concerns or suggest modifications. Arrangements can include sole custody to one parent, joint custody, or defined visitation schedules. The welfare of the child is the paramount consideration under Indian law.",
  },
  {
    question: "Can we remarry immediately after the divorce decree is passed?",
    answer:
      "Yes. Once the court passes the decree absolute (final decree) after the Second Motion, the divorce is complete and both parties are free to remarry. There is no additional waiting period after the decree is issued. However, ensure you obtain a certified copy of the divorce decree, as it will be required for any subsequent marriage registration.",
  },
  {
    question: "What if one spouse is abroad during the mutual consent divorce process?",
    answer:
      "If a spouse is abroad, the matter becomes procedurally complex. Some courts permit representation through a Power of Attorney (PoA) holder for specific procedural steps, but personal appearance is generally expected for at least the Second Motion. Courts may also record statements via video conferencing in certain circumstances. You must consult an advocate early to plan the logistics — attempting to proceed without proper legal guidance in this scenario can result in significant delays or rejection of the petition.",
  },
  {
    question: "Is a settlement deed (consent terms) required for mutual consent divorce?",
    answer:
      "While not mandated by the bare text of Section 13B, practically all Family Courts require a detailed settlement agreement (consent terms) to be filed with the joint petition. This document records the parties' agreement on alimony/permanent maintenance, child custody and visitation, child maintenance, and division of assets and liabilities. Without a clear settlement deed, courts routinely send parties back to negotiate. A well-drafted settlement deed reduces court queries and speeds up the proceedings.",
  },
  {
    question: "Can a mutual consent divorce decree be challenged or contested later?",
    answer:
      "A decree passed after both motions with free and informed consent of both parties is very difficult to challenge. Grounds for challenge would be limited to fraud, coercion, misrepresentation, or procedural irregularity — these are high bars to meet. If one party claims the consent was obtained under duress, they may appeal the decree before the High Court within the prescribed limitation period. This is precisely why courts are careful to record that consent is free and voluntary at both motions.",
  },
  {
    question: "How does a joint petition differ from a solo/individual petition for divorce?",
    answer:
      "A joint petition (mutual consent divorce) is filed together by both spouses and is governed by Section 13B of the Hindu Marriage Act. It requires mutual agreement on all terms and follows the two-motion process. A solo petition (contested divorce) is filed by one spouse against the other and is governed by Section 13 of the Hindu Marriage Act — it requires proving specific grounds such as cruelty, desertion, adultery, or irretrievable breakdown. Contested divorces are typically far longer and more expensive. If you started with a mutual consent petition but your spouse has withdrawn consent, you will need to switch to a contested petition.",
  },
  {
    question: "What if we reconcile during the 6-month cooling-off period?",
    answer:
      "If both spouses reconcile during the 6-month statutory cooling-off period, they can simply not file the Second Motion. If no Second Motion is filed within 18 months from the date of the First Motion, the petition is deemed to have lapsed and the divorce proceedings automatically come to an end. No formal withdrawal is necessary in most courts — the parties simply do nothing and the petition expires. If a waiver of the cooling-off period was granted but the parties reconcile before the Second Motion, they should inform their advocate immediately.",
  },
];

export default function MutualConsentDivorcePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Mutual Consent Divorce in India — Process, Timeline & Cost",
    description:
      "Mutual consent divorce is the fastest route — 6 to 18 months. Learn the two-motion process, papers required, cost, and talk to a divorce lawyer — ₹299.",
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
      "@id": "https://vakiltech.in/guides/mutual-consent-divorce-india",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen bg-background">
        {/* Breadcrumb bar */}
        <div className="border-b border-border bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 py-3">
            <Breadcrumb items={breadcrumbItems} />
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 py-12">
          {/* Article header */}
          <header className="mb-10">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
              <Calendar className="h-4 w-4" />
              <span>Decision Guide — Divorce</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
              Mutual Consent Divorce in India — Process, Timeline &amp; Cost
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Mutual consent divorce is the fastest, least adversarial way for
              two spouses to legally end their marriage in India. This guide
              covers everything you need to know — from eligibility and the
              two-motion process to documents, cost, and what happens if one
              party changes their mind.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
              <span>By vakiltech Legal Team</span>
              <span>·</span>
              <span>Updated April 2026</span>
              <span>·</span>
              <span>~9 min read</span>
            </div>
          </header>

          {/* Section 1 — What is Mutual Consent Divorce */}
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              1. What is Mutual Consent Divorce?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Mutual consent divorce is a legal process by which both spouses
              voluntarily agree to dissolve their marriage — without one party
              blaming the other or proving any matrimonial fault. In India, it
              is governed primarily by <strong>Section 13B of the Hindu Marriage
              Act, 1955</strong>. Equivalent provisions exist under the Special
              Marriage Act, 1954 (Section 28) and the Indian Divorce Act, 1869
              (for Christians).
            </p>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Because neither spouse is contesting the divorce, the process is
              considerably faster and significantly cheaper than a contested
              divorce. The couple agrees — in advance — on all key issues:
              alimony or permanent maintenance, custody and maintenance of
              children, and division of property and assets. That agreement is
              documented in a settlement deed and submitted to the Family Court
              as part of the joint petition.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Mutual consent divorce is widely regarded as the fastest legal
              route to divorce in India. With the right advocate and both
              parties cooperating, the entire process can conclude in as little
              as six to eight months — or even sooner if the statutory
              cooling-off period is waived by the court.
            </p>
          </div>

          {/* Section 2 — Eligibility */}
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              2. Eligibility — Who Can Apply for Mutual Consent Divorce?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Before filing a joint petition, both spouses must satisfy the
              following conditions:
            </p>
            <ul className="space-y-3 mb-4">
              {[
                "The couple must have been living separately for at least one year immediately before the date of the petition. 'Living separately' does not necessarily mean different residences — courts have accepted that parties can live under the same roof but lead entirely separate lives.",
                "Both spouses must consent freely and voluntarily. Consent obtained by coercion, undue influence, or fraud is not valid consent and can invalidate the proceedings.",
                "Both must agree that the marriage has broken down irretrievably and that they have not been able to live together.",
                "All ancillary issues — alimony, child custody, child maintenance, and property division — must be agreed upon before the petition is filed.",
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 h-5 w-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold flex-shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-muted-foreground leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
            <div className="bg-muted/40 rounded-lg p-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Which law applies to you?</strong>{" "}
                Section 13B of the Hindu Marriage Act applies to Hindus, Jains,
                Buddhists, and Sikhs. For inter-faith marriages or marriages
                solemnised under the Special Marriage Act, 1954, the equivalent
                provision is Section 28 of that Act. Christians can seek mutual
                consent divorce under the Indian Divorce Act, 1869 (as amended
                in 2001). Parsi marriages are governed by the Parsi Marriage
                and Divorce Act, 1936.
              </p>
            </div>
          </div>

          {/* Section 3 — Two-Motion Process */}
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              3. The Two-Motion Process — Explained Step by Step
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Mutual consent divorce under Section 13B follows a mandatory
              two-stage process — First Motion, a statutory waiting period, and
              Second Motion. Here is exactly what happens at each stage.
            </p>

            <div className="space-y-5">
              {/* First Motion */}
              <div className="border border-border rounded-lg p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="h-8 w-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center flex-shrink-0">
                    1
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">
                    First Motion — Joint Petition
                  </h3>
                  <span className="ml-auto text-xs bg-muted px-2 py-1 rounded text-muted-foreground">
                    Day 1 – Week 4
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Both spouses, along with their advocate, file a joint petition
                  before the relevant Family Court. The petition is accompanied
                  by individual affidavits confirming free consent and a
                  settlement agreement covering all agreed terms. The court
                  records the statements of both parties on oath, confirms that
                  consent is freely given, and admits the petition. A date for
                  the Second Motion is then fixed.
                </p>
              </div>

              {/* Cooling-off Period */}
              <div className="border border-border rounded-lg p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="h-8 w-8 rounded-full bg-amber-500 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                    2
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">
                    Cooling-Off Period — Statutory Wait
                  </h3>
                  <span className="ml-auto text-xs bg-muted px-2 py-1 rounded text-muted-foreground">
                    6 months (statutory minimum)
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  After the First Motion, the law mandates a minimum waiting
                  period of six months. The purpose is to give the couple an
                  opportunity to reconsider and potentially reconcile. During
                  this period, either party may withdraw their consent and
                  the proceedings will not proceed. The second motion must be
                  filed within 18 months of the First Motion — if it is not
                  filed within this window, the petition lapses automatically.
                </p>
              </div>

              {/* Second Motion */}
              <div className="border border-border rounded-lg p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="h-8 w-8 rounded-full bg-green-600 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                    3
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">
                    Second Motion — Decree Absolute
                  </h3>
                  <span className="ml-auto text-xs bg-muted px-2 py-1 rounded text-muted-foreground">
                    Month 6 – Month 18
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  After the six-month cooling-off period, both spouses file a
                  joint application confirming that they still wish to proceed
                  with the divorce and that their consent is intact. The court
                  holds a brief hearing, verifies the settlement terms and the
                  continued consent of both parties, and passes the <em>decree
                  absolute</em> — the final divorce decree. From this point, the
                  marriage is legally dissolved and both parties are free to
                  remarry.
                </p>
              </div>
            </div>

            <div className="mt-4 bg-primary/5 border border-primary/20 rounded-lg p-4">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Realistic timeline:</strong>{" "}
                Most mutual consent divorces in Indian Family Courts conclude
                within 6 to 12 months from the date of filing. Courts in
                metro cities (Mumbai, Delhi, Bangalore, Hyderabad) may take
                slightly longer due to backlog. Courts in smaller cities can
                sometimes be faster. Plan conservatively for 8–12 months.
              </p>
            </div>
          </div>

          {/* Section 4 — Cooling-off waiver */}
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              4. Can the 6-Month Cooling-Off Period Be Waived?
            </h2>
            <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-4">
              <p className="text-green-800 dark:text-green-300 font-semibold text-sm">
                Yes — the Supreme Court of India has held that the 6-month
                cooling-off period can be waived.
              </p>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-3">
              In the landmark judgment{" "}
              <strong>Amardeep Singh v. Harveen Kaur [(2017) 8 SCC 746]</strong>,
              the Supreme Court held that the six-month waiting period under
              Section 13B(2) of the Hindu Marriage Act is directory and not
              mandatory. Courts can waive it if the circumstances so warrant.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The Supreme Court laid down the following criteria for granting a
              waiver of the cooling-off period:
            </p>
            <ul className="space-y-2 mb-4">
              {[
                "The statutory period of one year of separation has already been completed before the First Motion.",
                "All efforts at mediation and conciliation, including those by the court, have failed.",
                "The parties have genuinely settled all ancillary issues — alimony, custody, maintenance, and property.",
                "Waiting for the six-month period would only prolong the agony of parties who have clearly and finally decided to part ways.",
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <ArrowRight className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
              <p className="text-amber-800 dark:text-amber-300 text-sm">
                <strong>Practical advice:</strong> Do not structure your plans
                around getting a waiver. Waiver is at the court's discretion
                and is granted only in compelling circumstances. Always plan for
                the full six-month wait and treat a waiver as a bonus if it is
                granted. Your advocate can assess whether your case meets the
                Amardeep Singh criteria and file the appropriate application.
              </p>
            </div>
          </div>

          {/* Section 5 — Documents */}
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              5. Documents Required for Mutual Consent Divorce
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You will need to compile and submit the following documents when
              filing the joint petition before the Family Court:
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                {
                  doc: "Joint Petition",
                  note: "Drafted and signed by both spouses; states the grounds, the period of separation, and the agreed terms",
                },
                {
                  doc: "Marriage Certificate",
                  note: "Original or certified copy of the marriage certificate issued by the registrar or religious authority",
                },
                {
                  doc: "Affidavits from Both Parties",
                  note: "Individual sworn affidavits confirming free consent, period of separation, and failure to cohabit",
                },
                {
                  doc: "Address Proof",
                  note: "Current address proof of both spouses (Aadhaar card, passport, voter ID, or utility bill)",
                },
                {
                  doc: "Passport-Size Photographs",
                  note: "Recent photographs of both spouses (typically 3–4 copies each)",
                },
                {
                  doc: "Settlement Agreement / Consent Terms",
                  note: "Detailed document recording agreed alimony, child custody, child maintenance, and property division",
                },
                {
                  doc: "Salary Slips / Income Proof",
                  note: "Required if alimony or maintenance has been agreed — helps record the agreed maintenance quantum",
                },
                {
                  doc: "Proof of Separation",
                  note: "Documents evidencing separate residence for one year (rental agreements, utility bills, etc.) if applicable",
                },
                {
                  doc: "Birth Certificate of Children",
                  note: "Required if the couple has minor children and custody / maintenance is being agreed",
                },
                {
                  doc: "Court Filing Fees Receipt",
                  note: "Stamped receipt of court fees paid at the time of filing — amount varies by state court",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-muted/30 rounded-lg p-3"
                >
                  <span className="h-5 w-5 rounded-full bg-primary/15 text-primary text-xs flex items-center justify-center font-bold flex-shrink-0 mt-0.5">
                    ✓
                  </span>
                  <div>
                    <p className="font-medium text-foreground text-sm">{item.doc}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{item.note}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Your advocate will provide a tailored checklist based on the
              court's local requirements. Some Family Courts require additional
              documents such as income tax returns or property title documents
              depending on what is covered in the settlement.
            </p>
          </div>

          {/* Section 6 — Cost */}
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              6. Cost of Mutual Consent Divorce in India
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The total cost of a mutual consent divorce varies significantly by
              city, court, and the complexity of the settlement. Here is a
              realistic breakdown:
            </p>
            <div className="space-y-3 mb-4">
              {[
                {
                  item: "Court Filing Fees",
                  range: "₹500 – ₹2,000",
                  note: "Set by each state's court rules; payable as court stamp fees at the time of filing the petition",
                },
                {
                  item: "Advocate Fees",
                  range: "₹15,000 – ₹50,000+",
                  note: "Varies by city (metro courts tend to be higher), advocate experience, and complexity of the settlement. Some advocates charge separately for drafting the settlement deed.",
                },
                {
                  item: "Settlement Deed Drafting",
                  range: "₹2,000 – ₹10,000",
                  note: "Sometimes included in the advocate's overall fees; sometimes billed separately — clarify upfront",
                },
                {
                  item: "Notarisation & Stamp Duty",
                  range: "₹500 – ₹3,000",
                  note: "For affidavits and, in some states, for the settlement agreement itself",
                },
                {
                  item: "vakiltech Initial Consultation",
                  range: "₹299",
                  note: "Talk to a qualified divorce lawyer on vakiltech to understand your options, assess your eligibility, and plan your next steps — before committing to a full retainer",
                },
              ].map((row, i) => (
                <div
                  key={i}
                  className="flex items-start justify-between gap-4 border border-border rounded-lg p-4"
                >
                  <div className="flex-1">
                    <p className="font-semibold text-foreground text-sm">{row.item}</p>
                    <p className="text-xs text-muted-foreground mt-1">{row.note}</p>
                  </div>
                  <span className="font-bold text-primary text-sm whitespace-nowrap">
                    {row.range}
                  </span>
                </div>
              ))}
            </div>
            <div className="bg-muted/40 rounded-lg p-4">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Total realistic estimate:</strong>{" "}
                ₹20,000 – ₹60,000 for a straightforward mutual consent divorce
                with a standard settlement. Complex settlements involving
                significant property, business assets, or child custody disputes
                may cost more. Costs in tier-1 cities (Mumbai High Court
                jurisdiction, Delhi, Bangalore) tend to be at the higher end of
                the range.
              </p>
            </div>
          </div>

          {/* Section 7 — Withdrawal of consent */}
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              7. What if One Party Withdraws Consent Before the Second Motion?
            </h2>
            <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-4">
              <p className="text-red-800 dark:text-red-300 text-sm font-medium">
                This is one of the most significant risks in a mutual consent
                divorce — and it happens more often than most people expect.
              </p>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Under Section 13B(2) of the Hindu Marriage Act, either party has
              an <strong>absolute right to withdraw consent</strong> at any time
              before the Second Motion is filed and heard. The withdrawal can be
              unilateral — it does not require the agreement of the other spouse.
              If consent is withdrawn, the court cannot pass the divorce decree
              under the mutual consent route.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-3">
              This has been consistently upheld by courts including the Supreme
              Court. In <em>Sureshta Devi v. Om Prakash [(1991) 2 SCC 25]</em>,
              the Supreme Court held that consent in mutual consent divorce must
              continue to subsist right up to the time of the Second Motion.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">What should you do if consent is withdrawn?</strong>{" "}
              Contact your advocate immediately. Your options at that stage include:
            </p>
            <ul className="space-y-2 mb-4">
              {[
                "Attempt mediation or negotiation to address the withdrawing party's concerns and restore mutual consent.",
                "Proceed with a contested divorce under Section 13 of the Hindu Marriage Act by establishing one of the recognised grounds (cruelty, desertion, adultery, etc.).",
                "Evaluate whether an application under the Special Marriage Act or other applicable personal law offers a better path.",
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <ArrowRight className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="bg-muted/40 rounded-lg p-4">
              <p className="text-sm text-muted-foreground">
                If you need to switch to a contested route, read our detailed
                guide:{" "}
                <Link
                  href="/guides/divorce-procedure-in-india"
                  className="text-primary hover:underline font-medium"
                >
                  Divorce Procedure in India — Complete Guide
                </Link>
                . You may also find our guide on{" "}
                <Link
                  href="/guides/how-to-file-for-divorce-india"
                  className="text-primary hover:underline font-medium"
                >
                  How to File for Divorce in India
                </Link>{" "}
                helpful for understanding all available routes.
              </p>
            </div>
          </div>

          {/* Section 8 — CTA */}
          <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-background border border-primary/20 rounded-xl p-6 shadow-sm mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              8. Talk to a Divorce Lawyer — Get Started
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              vakiltech connects you with a specialist divorce advocate in under
              15 minutes. Whether you need to confirm your eligibility for
              mutual consent divorce, get the settlement agreement drafted, or
              understand what to do if your spouse is uncooperative — a
              30-minute consultation gives you a clear action plan.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {/* Primary CTA */}
              <div className="bg-card border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl font-bold text-primary">₹299</span>
                  <span className="text-sm text-muted-foreground">/ session</span>
                </div>
                <h3 className="font-bold text-foreground text-lg mb-1">
                  Talk to a Divorce Lawyer
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  30-minute consultation with a verified divorce specialist.
                  Get answers to your specific situation — alimony, custody,
                  property, eligibility, and next steps.
                </p>
                <Link
                  href="/consultation"
                  className="inline-flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200"
                >
                  Talk to a Divorce Lawyer — ₹299
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Secondary CTA */}
              <div className="bg-card border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl font-bold text-foreground">₹1,499</span>
                  <span className="text-sm text-muted-foreground">/ notice</span>
                </div>
                <h3 className="font-bold text-foreground text-lg mb-1">
                  Send a Divorce Legal Notice
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Already decided to proceed? If you have sent or received a
                  legal notice and need a formal legal notice drafted and
                  dispatched by a licensed advocate, we can help.
                </p>
                <Link
                  href="/send-legal-notice/legal-notice-for-divorce"
                  className="inline-flex items-center justify-center gap-2 w-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200"
                >
                  Send Divorce Legal Notice — ₹1,499
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <p className="text-xs text-muted-foreground text-center mt-4">
              Consultations are with licensed advocates (BA.LLB / LLM). All
              communications are confidential. Available Monday to Saturday,
              10 AM – 7 PM IST.
            </p>
          </div>

          {/* Section 9 — FAQ */}
          <div className="bg-card border border-border rounded-xl shadow-sm mb-6 overflow-hidden">
            <div className="px-6 pt-6 pb-2">
              <h2 className="text-2xl font-bold text-foreground mb-1">
                9. Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground text-sm">
                Answers to the questions our clients ask most often about mutual
                consent divorce in India.
              </p>
            </div>
            <FAQSection
              faqs={faqItems}
              title=""
              subtitle=""
              className="pt-0 pb-6"
            />
          </div>

          {/* Footer note */}
          <div className="bg-muted/30 border border-border rounded-xl p-5 text-sm text-muted-foreground leading-relaxed">
            <p className="mb-2">
              <strong className="text-foreground">Disclaimer:</strong> This
              guide is for general informational purposes only and does not
              constitute legal advice. Laws and court interpretations may have
              changed since this guide was last updated. Please consult a
              licensed advocate for advice specific to your situation.
            </p>
            <p>
              vakiltech (vakiltech.in) is a platform that connects individuals
              with licensed advocates across India. We are not a law firm and
              do not provide legal services directly.
            </p>
          </div>
        </article>
      </div>
    </>
  );
}
