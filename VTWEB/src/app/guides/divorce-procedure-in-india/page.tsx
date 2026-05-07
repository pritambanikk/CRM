import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { FAQSection } from "@/components/shared/faq-section";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Divorce Procedure in India: Step-by-Step Guide | vakiltech",
  description:
    "From filing the petition to final decree — understand every step of the divorce procedure under Hindu, Muslim, and Special Marriage Act. Talk to a divorce lawyer — ₹299.",
  keywords: [
    "divorce procedure in india",
    "divorce process in india",
    "divorce process",
    "steps to divorce",
    "divorce procedure",
  ],
  alternates: {
    canonical: "https://vakiltech.in/guides/divorce-procedure-in-india",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Divorce Procedure in India — Step-by-Step (2026)",
  description:
    "From filing the petition to final decree — understand every step of the divorce procedure under Hindu, Muslim, and Special Marriage Act.",
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
    logo: {
      "@type": "ImageObject",
      url: "https://vakiltech.in/logo.png",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://vakiltech.in/guides/divorce-procedure-in-india",
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to File for Divorce in India",
  description:
    "A step-by-step guide to filing a contested divorce petition in India, from preparing the petition to receiving the final decree.",
  totalTime: "P2Y",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "File the Divorce Petition",
      text: "Engage an advocate to draft and file the divorce petition in the appropriate Family Court or District Court. The petition must state the grounds for divorce, details of the marriage, and relief sought. Court fees are paid at this stage.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Service of Summons",
      text: "The court issues summons to the respondent (other spouse) directing them to appear. Summons can be served by registered post, court bailiff, or in some cases by substituted service. This typically takes 2–6 weeks.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Filing of Written Statement",
      text: "The respondent files a written statement responding to the petition, either contesting the divorce or raising counter-claims. The respondent may also file a counter-petition. This stage can take 1–3 months.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Evidence and Examination",
      text: "Both parties lead evidence — documentary and oral. Witnesses are examined in chief and cross-examined. This is often the longest stage in a contested divorce, spanning 6 months to several years depending on the complexity.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Final Arguments",
      text: "Both advocates address the court with their final arguments, citing evidence and precedents. Written arguments may also be submitted. This stage typically takes 1–3 months.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Decree of Divorce",
      text: "The judge pronounces judgment and, if divorce is granted, issues a decree of divorce. The decree becomes final after the appeal period lapses (typically 90 days). The court also decides on maintenance, custody, and property matters.",
    },
  ],
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
        text: "Technically yes — you can file in person (in propria persona). However, divorce proceedings involve complex procedural rules, evidence law, and court practice. A single procedural error can delay your case by months. For mutual consent divorce, self-representation is more feasible; for contested divorce, an advocate is strongly recommended.",
      },
    },
    {
      "@type": "Question",
      name: "What is the fastest divorce in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mutual consent divorce under Section 13B of the Hindu Marriage Act is the fastest route. Courts can waive the 6-month cooling-off period if the parties have been separated for a long time and reconciliation is impossible. With a waiver, a decree can be obtained in as little as 3–4 months.",
      },
    },
    {
      "@type": "Question",
      name: "Can an NRI file for divorce in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. An NRI can file for divorce in India if the marriage was solemnized in India, or if the respondent is residing in India, or if both parties last resided together in India. An NRI petitioner can also appear through a Power of Attorney holder in some procedural hearings, though personal appearance may be required at key stages.",
      },
    },
    {
      "@type": "Question",
      name: "What happens to property after divorce in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Indian law does not provide for automatic 50-50 division of matrimonial property on divorce (unlike community property systems). The court may award permanent alimony or a lump-sum settlement. Jointly held property is dealt with separately under civil law. The court considers factors such as income, assets, duration of marriage, and contribution of each spouse.",
      },
    },
    {
      "@type": "Question",
      name: "Can a divorce petition be denied by the court?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. A court can dismiss a divorce petition if the petitioner fails to prove the grounds alleged, if the petitioner is found to have condoned the respondent's conduct, or if the petitioner is themselves guilty of the same conduct (doctrine of recrimination). Courts also dismiss petitions that are filed with suppression of material facts.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a divorce cost in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Costs vary significantly. For mutual consent divorce, total costs typically range from ₹15,000 to ₹60,000 (advocate fees + court fees). For contested divorce, costs can range from ₹50,000 to several lakhs depending on the complexity, city, and seniority of the advocate engaged. Court fees themselves are nominal (₹200–₹2,000) but advocate fees drive the total cost.",
      },
    },
    {
      "@type": "Question",
      name: "What is the minimum period of separation required for divorce?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Under Hindu Marriage Act Section 13B (mutual consent), one year of separation is required before filing. Under Section 13(1A), either party can seek divorce on the ground of no cohabitation for one year after a decree of judicial separation, or no restitution of conjugal rights for one year after a decree of restitution. Under the Special Marriage Act, the minimum separation is one year.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between judicial separation and divorce?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A decree of judicial separation relieves both parties of the obligation to cohabit but does not dissolve the marriage — the parties remain legally married. Divorce permanently dissolves the marriage, allowing both parties to remarry. Judicial separation is sometimes sought as an interim step, or by those who have religious or personal objections to divorce.",
      },
    },
    {
      "@type": "Question",
      name: "Can I get interim maintenance during the divorce proceedings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Under Section 24 of the Hindu Marriage Act, either spouse can apply for interim maintenance (pendente lite) and litigation expenses during the pendency of the divorce petition. Courts typically decide interim maintenance applications within a few months. Muslim women may claim maintenance under Section 125 CrPC or the Muslim Women (Protection of Rights on Divorce) Act.",
      },
    },
    {
      "@type": "Question",
      name: "Which court has jurisdiction for filing a divorce petition?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The petition must be filed in the Family Court (or District Court where Family Courts are not established) having jurisdiction over: (a) the place where the marriage was solemnized; (b) the place where the respondent currently resides; or (c) the place where the couple last resided together. In cases where the wife is the petitioner, she can also file where she currently resides.",
      },
    },
    {
      "@type": "Question",
      name: "Does irretrievable breakdown of marriage apply in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Irretrievable breakdown of marriage is not yet a statutory ground for divorce in India (as of 2026), though multiple Law Commission reports have recommended it. However, the Supreme Court has invoked its powers under Article 142 of the Constitution to grant divorce on this ground in exceptional cases where the marriage has completely and irretrievably broken down.",
      },
    },
    {
      "@type": "Question",
      name: "How does a Muslim divorce (talaq) work under current Indian law?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Triple talaq (instant talaq) was declared unconstitutional by the Supreme Court in 2017 and criminalized by the Muslim Women (Protection of Rights on Marriage) Act, 2019. Valid forms of divorce under Muslim personal law include: single talaq followed by the iddat period (approximately 3 months); khula (wife-initiated divorce with return of mehr); and mubarat (mutual divorce). Muslim couples can also seek divorce through a Family Court.",
      },
    },
  ],
};

const faqs = [
  {
    question: "Can I file for divorce without a lawyer in India?",
    answer:
      "Technically yes — you can file in person (in propria persona). However, divorce proceedings involve complex procedural rules, evidence law, and court practice. A single procedural error can delay your case by months. For mutual consent divorce, self-representation is more feasible; for contested divorce, an advocate is strongly recommended.",
  },
  {
    question: "What is the fastest divorce in India?",
    answer:
      "Mutual consent divorce under Section 13B of the Hindu Marriage Act is the fastest route. Courts can waive the 6-month cooling-off period if the parties have been separated for a long time and reconciliation is impossible. With a waiver, a decree can be obtained in as little as 3–4 months.",
  },
  {
    question: "Can an NRI file for divorce in India?",
    answer:
      "Yes. An NRI can file for divorce in India if the marriage was solemnized in India, or if the respondent is residing in India, or if both parties last resided together in India. An NRI petitioner can also appear through a Power of Attorney holder in some procedural hearings, though personal appearance may be required at key stages.",
  },
  {
    question: "What happens to property after divorce in India?",
    answer:
      "Indian law does not provide for automatic 50-50 division of matrimonial property on divorce (unlike community property systems). The court may award permanent alimony or a lump-sum settlement. Jointly held property is dealt with separately under civil law. The court considers factors such as income, assets, duration of marriage, and contribution of each spouse.",
  },
  {
    question: "Can a divorce petition be denied by the court?",
    answer:
      "Yes. A court can dismiss a divorce petition if the petitioner fails to prove the grounds alleged, if the petitioner is found to have condoned the respondent's conduct, or if the petitioner is themselves guilty of the same conduct (doctrine of recrimination). Courts also dismiss petitions that are filed with suppression of material facts.",
  },
  {
    question: "How much does a divorce cost in India?",
    answer:
      "Costs vary significantly. For mutual consent divorce, total costs typically range from ₹15,000 to ₹60,000 (advocate fees + court fees). For contested divorce, costs can range from ₹50,000 to several lakhs depending on the complexity, city, and seniority of the advocate engaged. Court fees themselves are nominal (₹200–₹2,000) but advocate fees drive the total cost.",
  },
  {
    question: "What is the minimum period of separation required for divorce?",
    answer:
      "Under Hindu Marriage Act Section 13B (mutual consent), one year of separation is required before filing. Under Section 13(1A), either party can seek divorce on the ground of no cohabitation for one year after a decree of judicial separation, or no restitution of conjugal rights for one year after a decree of restitution. Under the Special Marriage Act, the minimum separation is one year.",
  },
  {
    question: "What is the difference between judicial separation and divorce?",
    answer:
      "A decree of judicial separation relieves both parties of the obligation to cohabit but does not dissolve the marriage — the parties remain legally married. Divorce permanently dissolves the marriage, allowing both parties to remarry. Judicial separation is sometimes sought as an interim step, or by those who have religious or personal objections to divorce.",
  },
  {
    question: "Can I get interim maintenance during the divorce proceedings?",
    answer:
      "Yes. Under Section 24 of the Hindu Marriage Act, either spouse can apply for interim maintenance (pendente lite) and litigation expenses during the pendency of the divorce petition. Courts typically decide interim maintenance applications within a few months. Muslim women may claim maintenance under Section 125 CrPC or the Muslim Women (Protection of Rights on Divorce) Act.",
  },
  {
    question: "Which court has jurisdiction for filing a divorce petition?",
    answer:
      "The petition must be filed in the Family Court (or District Court where Family Courts are not established) having jurisdiction over: (a) the place where the marriage was solemnized; (b) the place where the respondent currently resides; or (c) the place where the couple last resided together. In cases where the wife is the petitioner, she can also file where she currently resides.",
  },
  {
    question: "Does irretrievable breakdown of marriage apply in India?",
    answer:
      "Irretrievable breakdown of marriage is not yet a statutory ground for divorce in India (as of 2026), though multiple Law Commission reports have recommended it. However, the Supreme Court has invoked its powers under Article 142 of the Constitution to grant divorce on this ground in exceptional cases where the marriage has completely and irretrievably broken down.",
  },
  {
    question: "How does a Muslim divorce (talaq) work under current Indian law?",
    answer:
      "Triple talaq (instant talaq) was declared unconstitutional by the Supreme Court in 2017 and criminalized by the Muslim Women (Protection of Rights on Marriage) Act, 2019. Valid forms of divorce under Muslim personal law include: single talaq followed by the iddat period (approximately 3 months); khula (wife-initiated divorce with return of mehr); and mubarat (mutual divorce). Muslim couples can also seek divorce through a Family Court.",
  },
];

export default function DivorceProceduePage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Guides", href: "/guides" },
    { label: "Divorce Procedure in India", current: true },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
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
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Calendar className="h-4 w-4" />
              <time dateTime="2026-04-24">April 24, 2026</time>
              <span className="mx-1">·</span>
              <span>vakiltech Legal Team</span>
              <span className="mx-1">·</span>
              <span>~18 min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
              Divorce Procedure in India — Step-by-Step (2026)
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From filing the petition to the final decree — a comprehensive
              guide to every step of the divorce procedure under the Hindu
              Marriage Act, Special Marriage Act, Muslim personal law, and the
              Christian Marriage Act. Whether you are considering a mutual
              consent divorce or a contested divorce, this guide will walk you
              through timelines, costs, documents, and your rights at each
              stage.
            </p>

            {/* Quick CTA banner */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link
                href="/consultation"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Talk to a Divorce Lawyer — ₹299
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/send-legal-notice/legal-notice-for-divorce"
                className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-muted transition-colors"
              >
                Send Divorce Legal Notice — ₹1,499
              </Link>
            </div>
          </header>

          <div className="space-y-8">
            {/* ── H2 #1 ── Grounds for Divorce */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                1. Grounds for Divorce in India — Which Law Applies to You?
              </h2>
              <p className="text-muted-foreground mb-5 leading-relaxed">
                India does not have a uniform civil code for divorce. The
                personal law that governs your marriage depends on your religion
                and the statute under which you married. The first question to
                answer before initiating any divorce proceeding is: which law
                applies to me?
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">
                        Applicable Law
                      </th>
                      <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">
                        Who It Covers
                      </th>
                      <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">
                        Key Grounds for Divorce
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="even:bg-muted/30">
                      <td className="border border-border px-4 py-3 font-medium text-foreground align-top">
                        Hindu Marriage Act, 1955
                      </td>
                      <td className="border border-border px-4 py-3 text-muted-foreground align-top">
                        Hindus, Buddhists, Jains, Sikhs
                      </td>
                      <td className="border border-border px-4 py-3 text-muted-foreground align-top">
                        Adultery, cruelty, desertion (2 years), conversion,
                        mental disorder, leprosy, venereal disease, renunciation,
                        presumed death, no cohabitation after judicial separation
                        or restitution decree (1 year)
                      </td>
                    </tr>
                    <tr className="even:bg-muted/30">
                      <td className="border border-border px-4 py-3 font-medium text-foreground align-top">
                        Special Marriage Act, 1954
                      </td>
                      <td className="border border-border px-4 py-3 text-muted-foreground align-top">
                        Inter-religion couples; civil marriages regardless of
                        religion
                      </td>
                      <td className="border border-border px-4 py-3 text-muted-foreground align-top">
                        Same as Hindu Marriage Act grounds, plus impotency at
                        time of marriage; one year separation required for
                        mutual consent petition
                      </td>
                    </tr>
                    <tr className="even:bg-muted/30">
                      <td className="border border-border px-4 py-3 font-medium text-foreground align-top">
                        Muslim Personal Law (Shariat)
                      </td>
                      <td className="border border-border px-4 py-3 text-muted-foreground align-top">
                        Muslims (governed by Muslim Personal Law Application
                        Act, 1937)
                      </td>
                      <td className="border border-border px-4 py-3 text-muted-foreground align-top">
                        Talaq by husband (single pronouncement + iddat);
                        Khula (wife-initiated, with return of mehr); Mubarat
                        (mutual); dissolution under Dissolution of Muslim
                        Marriages Act, 1939 (cruelty, desertion, impotency,
                        insanity, etc.)
                      </td>
                    </tr>
                    <tr className="even:bg-muted/30">
                      <td className="border border-border px-4 py-3 font-medium text-foreground align-top">
                        Indian Christian Marriage Act, 1872 / Divorce Act, 1869
                      </td>
                      <td className="border border-border px-4 py-3 text-muted-foreground align-top">
                        Christians
                      </td>
                      <td className="border border-border px-4 py-3 text-muted-foreground align-top">
                        Adultery (plus cruelty / desertion for wife petitioner);
                        conversion; mutual consent (two years separation); the
                        Divorce (Amendment) Acts have progressively expanded
                        grounds
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-muted-foreground mt-4 leading-relaxed text-sm">
                <strong className="text-foreground">Note:</strong> Parsi
                marriages are governed by the Parsi Marriage and Divorce Act,
                1936. Courts across all personal laws can also grant divorce on
                the ground of irretrievable breakdown under the Supreme Court's
                Article 142 jurisdiction in extraordinary circumstances.
              </p>
            </div>

            {/* ── H2 #2 ── Contested vs Mutual Consent */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                2. Contested vs Mutual Consent Divorce — Which Route?
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Before drafting a single document, you need to decide which type
                of divorce proceeding suits your situation. The answer depends
                on one critical question: do both spouses agree to the divorce
                and its terms?
              </p>

              {/* Decision tree visual */}
              <div className="bg-muted/40 border border-border rounded-lg p-4 mb-6 text-sm">
                <p className="font-semibold text-foreground mb-3">
                  Quick Decision Guide:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p>
                    <span className="font-medium text-foreground">
                      Both spouses agree to divorce AND agree on maintenance,
                      custody, and property?
                    </span>{" "}
                    → Mutual Consent Divorce (faster, cheaper, less adversarial)
                  </p>
                  <p>
                    <span className="font-medium text-foreground">
                      One spouse does not want the divorce, or both disagree on
                      terms?
                    </span>{" "}
                    → Contested Divorce (requires proving grounds before the
                    court)
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                Mutual Consent Divorce
              </h3>
              <p className="text-muted-foreground mb-5 leading-relaxed">
                Available under Section 13B of the Hindu Marriage Act and the
                equivalent provisions of the Special Marriage Act, mutual
                consent divorce is a joint petition. Both parties confirm that
                they have been living separately for at least one year, that
                they have not been able to live together, and that they have
                mutually agreed to dissolve the marriage. The procedure is
                significantly simpler and faster than contested divorce. For a
                full walkthrough of this route, see{" "}
                <Link
                  href="/guides/mutual-consent-divorce-india"
                  className="text-primary hover:underline font-medium"
                >
                  our mutual consent divorce guide
                </Link>
                .
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                Contested Divorce
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                When only one spouse wants the divorce, or when the other spouse
                actively opposes it, the matter must go through a full trial.
                The petitioning spouse must prove to the court's satisfaction
                that one or more statutory grounds for divorce exist. This is a
                lengthy process — expect a minimum of two years in most Family
                Courts, and often considerably longer. For a detailed breakdown
                of each procedural step, continue reading this guide, or refer
                to our{" "}
                <Link
                  href="/guides/how-to-file-for-divorce-india"
                  className="text-primary hover:underline font-medium"
                >
                  practical filing guide
                </Link>
                .
              </p>
            </div>

            {/* ── H2 #3 ── Contested Procedure */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                3. Step-by-Step Court Procedure for Contested Divorce
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                A contested divorce is a civil suit heard primarily by Family
                Courts (established under the Family Courts Act, 1984) or by
                the District Court in areas where Family Courts have not been
                set up. The procedure follows the broad framework of the Code of
                Civil Procedure, 1908, with modifications. Here is what to
                expect at each stage.
              </p>

              <ol className="space-y-6">
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Filing the Divorce Petition
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      Your advocate drafts the divorce petition stating the
                      material facts of the marriage, the ground(s) for divorce
                      (e.g., cruelty, adultery, desertion), and the relief
                      sought (divorce decree, maintenance, custody of children,
                      return of stridhan). Supporting documents — marriage
                      certificate, address proof, photographs — are annexed. The
                      petition is filed at the appropriate Family Court along
                      with the prescribed court fee (typically ₹200–₹1,000).
                      The court assigns a case number and a first date of
                      hearing.{" "}
                      <span className="font-medium text-foreground">
                        Typical time: 1–2 weeks from instruction to filing.
                      </span>
                    </p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Service of Summons on the Respondent
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      The court issues summons directing the respondent (your
                      spouse) to appear on the first date. Summons is typically
                      served by the court bailiff, registered post, or speed
                      post. If the respondent evades service, the court may
                      allow substituted service (newspaper publication or
                      affixing notice at the last known address). The
                      respondent's advocate may file a vakalatnama and
                      appearance.{" "}
                      <span className="font-medium text-foreground">
                        Typical time: 2–8 weeks depending on cooperation of the
                        respondent.
                      </span>
                    </p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Written Statement by the Respondent
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      The respondent has 30 days (extendable by the court) to
                      file a written statement admitting or denying the
                      allegations in the petition. They may also file a
                      counter-petition seeking their own relief. The petitioner
                      may then file a replication (reply to the written
                      statement). Courts sometimes attempt mediation or
                      counselling at this stage — mandatory under Section 9 of
                      the Family Courts Act.{" "}
                      <span className="font-medium text-foreground">
                        Typical time: 1–4 months.
                      </span>
                    </p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Framing of Issues and Evidence Stage
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      The court frames the issues — the specific factual and
                      legal questions to be decided. Both parties then lead
                      evidence. The petitioner leads evidence first (examination-
                      in-chief by affidavit, followed by cross-examination).
                      Then the respondent leads evidence. Documentary evidence —
                      call records, photographs, messages, medical records — is
                      exhibited and proved through witnesses. This is often the
                      longest stage in a contested divorce case, particularly
                      when multiple witnesses are involved or when there are
                      applications for discovery of documents.{" "}
                      <span className="font-medium text-foreground">
                        Typical time: 6 months to 3+ years.
                      </span>
                    </p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                    5
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Final Arguments
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      Once evidence is complete, both advocates address the court
                      on the law and facts. Written arguments may be submitted.
                      The court may also consider precedents from the High Court
                      and Supreme Court on the grounds alleged. If the case
                      involves child custody or maintenance, those issues may be
                      argued together or separately.{" "}
                      <span className="font-medium text-foreground">
                        Typical time: 1–4 months.
                      </span>
                    </p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                    6
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Judgment and Decree of Divorce
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      The judge pronounces judgment — either granting or
                      dismissing the divorce petition. If granted, a decree of
                      divorce is drawn up. The decree becomes final and
                      executable after the appeal period lapses (typically 90
                      days for an appeal to the High Court). Either party can
                      appeal the judgment to the High Court, and thereafter to
                      the Supreme Court. The decree settles questions of
                      maintenance, custody, and — to the extent asked — property
                      rights.{" "}
                      <span className="font-medium text-foreground">
                        Typical time: 1–3 months after arguments.
                      </span>
                    </p>
                  </div>
                </li>
              </ol>
            </div>

            {/* ── H2 #4 ── Mutual Consent Procedure */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                4. Step-by-Step Process for Mutual Consent Divorce
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Mutual consent divorce under Section 13B of the Hindu Marriage
                Act (and equivalent provisions under the Special Marriage Act) is
                designed to be less adversarial and more efficient than a
                contested trial. Both spouses must genuinely agree — not just on
                the divorce itself, but on all ancillary matters including
                maintenance, custody of children, and division of property.
              </p>

              <ol className="space-y-5">
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Drafting and Filing the Joint Petition (First Motion)
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Both spouses sign a joint petition stating that they have
                      been living separately for at least one year, that they
                      have not been able to live together, and that they mutually
                      agree to dissolve the marriage. The petition records all
                      agreed terms — maintenance (if any), child custody and
                      visitation schedule, return of stridhan and personal
                      articles, and any property settlement. Both spouses (or
                      their respective advocates on their behalf) appear before
                      the Family Court for the first motion hearing. Statements
                      are recorded on oath.
                    </p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      The Six-Month Cooling-Off Period
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      After the first motion, the law requires a minimum waiting
                      period of six months (and a maximum of 18 months) before
                      the second motion can be filed. The purpose of this period
                      is to give the parties a chance to reconsider and attempt
                      reconciliation. During this window, either party can
                      withdraw consent and the petition will be dismissed. If no
                      second motion is filed within 18 months, the petition
                      lapses automatically.
                    </p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Waiver of the Cooling-Off Period
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      The Supreme Court in{" "}
                      <em>Amardeep Singh v. Harveen Kaur</em> (2017) held that
                      the six-month cooling-off period is directory, not
                      mandatory, and can be waived by the court in its
                      discretion where (a) the parties have been separated for a
                      long time, (b) all ancillary disputes have been resolved,
                      and (c) there is no possibility of reconciliation. To seek
                      a waiver, file an application stating these grounds at the
                      time of or after the first motion. Many Family Courts now
                      routinely grant waivers where the separation has been
                      substantial.
                    </p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Second Motion — Reaffirming Consent
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Within 18 months of the first motion (or sooner if the
                      waiver is granted), both parties must appear again before
                      the court to confirm that they continue to consent to the
                      divorce. This appearance is called the second motion. Both
                      spouses' statements are recorded again on oath. The court
                      confirms that the agreed terms remain as stated and that no
                      party has been coerced or misled.
                    </p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    5
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Decree Absolute
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      After the second motion, the court passes the decree of
                      divorce dissolving the marriage. The decree becomes final
                      immediately (there is no separate appeal period that
                      suspends the decree in mutual consent cases, though a
                      party could theoretically challenge it on grounds of fraud
                      or coercion). Both parties receive certified copies of the
                      decree, which they will need for official purposes such as
                      remarriage, name change, or property transfer.
                    </p>
                  </div>
                </li>
              </ol>

              <div className="mt-5 bg-muted/40 rounded-lg p-4 text-sm text-muted-foreground">
                <strong className="text-foreground">Total timeline:</strong>{" "}
                Without a waiver: approximately 7–9 months. With a waiver of
                cooling-off: as little as 3–4 months from filing to decree.
              </div>
            </div>

            {/* ── H2 #5 ── Documents Required */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                5. Documents Required for Divorce in India
              </h2>
              <p className="text-muted-foreground mb-5 leading-relaxed">
                Having the correct documents organized before you approach your
                advocate saves time and prevents early adjournments. Below is a
                comprehensive checklist. The "Required for" column tells you
                whether the document is needed for contested divorce (CD),
                mutual consent divorce (MCD), or both.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">
                        Document
                      </th>
                      <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">
                        Purpose
                      </th>
                      <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">
                        Required For
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        doc: "Marriage Certificate / Marriage Registration Certificate",
                        purpose:
                          "Proves the existence and validity of the marriage",
                        for: "Both",
                      },
                      {
                        doc: "Address proof of petitioner (Aadhaar / Passport / Voter ID / Utility bill)",
                        purpose:
                          "Establishes court's territorial jurisdiction",
                        for: "Both",
                      },
                      {
                        doc: "Address proof of respondent",
                        purpose: "Required for issuance of summons",
                        for: "Both",
                      },
                      {
                        doc: "Passport-size photographs of both spouses",
                        purpose:
                          "Annexed to the petition for identification purposes",
                        for: "Both",
                      },
                      {
                        doc: "Birth certificates of children (if any)",
                        purpose:
                          "Required for custody / maintenance applications",
                        for: "Both",
                      },
                      {
                        doc: "Income proof (salary slips, ITR, bank statements)",
                        purpose:
                          "Determines quantum of maintenance / alimony",
                        for: "Both",
                      },
                      {
                        doc: "Evidence of cruelty / adultery / desertion (messages, emails, medical records, FIRs, letters)",
                        purpose: "Primary evidence for the ground alleged",
                        for: "CD only",
                      },
                      {
                        doc: "Property documents (if property division is claimed)",
                        purpose:
                          "Supports claims for permanent alimony or property settlement",
                        for: "CD (MCD if agreed settlement includes property)",
                      },
                      {
                        doc: "Signed settlement agreement / memorandum of understanding",
                        purpose:
                          "Records mutually agreed terms on maintenance, custody, assets",
                        for: "MCD only",
                      },
                      {
                        doc: "Separation proof (rent agreements, utility bills, school records showing separate addresses)",
                        purpose:
                          "Proves one year of separation required for MCD, or desertion for CD",
                        for: "Both (especially MCD)",
                      },
                    ].map((row, i) => (
                      <tr key={i} className="even:bg-muted/30">
                        <td className="border border-border px-4 py-3 text-foreground font-medium align-top">
                          {row.doc}
                        </td>
                        <td className="border border-border px-4 py-3 text-muted-foreground align-top">
                          {row.purpose}
                        </td>
                        <td className="border border-border px-4 py-3 text-muted-foreground align-top">
                          {row.for}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
                All documents should be self-attested photocopies. Original
                documents will need to be produced at the evidence stage when
                they are formally "exhibited" before the court. Your advocate
                will guide you on which originals to bring to each hearing.
              </p>
            </div>

            {/* ── H2 #6 ── Timeline & Costs */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                6. Divorce Timeline and Costs in India
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                One of the most common questions people have before initiating
                divorce proceedings is: how long will it take, and what will it
                cost? The honest answer is that both depend significantly on
                which type of divorce you pursue, which city you are in, and
                how cooperative (or uncooperative) the other party is. Here are
                realistic estimates based on typical cases across Indian Family
                Courts.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                Timeline
              </h3>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                  <p className="font-semibold text-green-800 dark:text-green-300 mb-2">
                    Mutual Consent Divorce
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">
                      Without waiver:
                    </strong>{" "}
                    7–18 months
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">With waiver:</strong>{" "}
                    3–6 months
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Fastest possible: ~3 months (waiver granted, no delays)
                  </p>
                </div>
                <div className="bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
                  <p className="font-semibold text-orange-800 dark:text-orange-300 mb-2">
                    Contested Divorce
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Typical:</strong> 2–5
                    years
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Complex cases:</strong>{" "}
                    5–10+ years
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Heavily court-dependent; metros typically faster than tier-2
                    courts
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                Cost Breakdown
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">
                        Cost Head
                      </th>
                      <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">
                        Mutual Consent
                      </th>
                      <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">
                        Contested
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        head: "Court fees (stamp duty on petition)",
                        mcd: "₹200 – ₹1,000",
                        cd: "₹200 – ₹2,000",
                      },
                      {
                        head: "Advocate fees (drafting + appearances)",
                        mcd: "₹10,000 – ₹50,000",
                        cd: "₹50,000 – ₹5,00,000+",
                      },
                      {
                        head: "Mediation / counselling costs",
                        mcd: "Nil – ₹5,000",
                        cd: "Nil – ₹10,000",
                      },
                      {
                        head: "Process server / summons service",
                        mcd: "Not applicable",
                        cd: "₹500 – ₹3,000",
                      },
                      {
                        head: "Miscellaneous (certified copies, notarization, travel)",
                        mcd: "₹2,000 – ₹5,000",
                        cd: "₹5,000 – ₹20,000",
                      },
                      {
                        head: "Total estimated range",
                        mcd: "₹15,000 – ₹60,000",
                        cd: "₹55,000 – ₹5,25,000+",
                      },
                    ].map((row, i) => (
                      <tr
                        key={i}
                        className={`even:bg-muted/30 ${i === 5 ? "font-semibold" : ""}`}
                      >
                        <td className="border border-border px-4 py-3 text-foreground align-top">
                          {row.head}
                        </td>
                        <td className="border border-border px-4 py-3 text-muted-foreground align-top">
                          {row.mcd}
                        </td>
                        <td className="border border-border px-4 py-3 text-muted-foreground align-top">
                          {row.cd}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
                Advocate fee ranges are broad because they vary considerably by
                city (Delhi, Mumbai, and Bengaluru are more expensive),
                seniority of the advocate, and complexity of ancillary claims
                like maintenance and custody. Always confirm the fee structure
                upfront and get it in writing. vakiltech's initial consultation
                costs just ₹299 and will give you a clear picture of what to
                expect in your specific case.
              </p>
            </div>

            {/* ── H2 #7 ── Interim Reliefs */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                7. Interim Reliefs — Maintenance, Custody, and Injunctions
              </h2>
              <p className="text-muted-foreground mb-5 leading-relaxed">
                A contested divorce can take years to reach its final decree,
                but the law does not leave vulnerable parties without protection
                during that period. Indian courts can grant various forms of
                interim relief — temporary orders that operate while the main
                case is pending. Understanding what interim reliefs are available
                is crucial, especially if you are worried about financial
                security, safety, or the welfare of your children.
              </p>

              <div className="space-y-5">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Interim Maintenance (Pendente Lite)
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Under Section 24 of the Hindu Marriage Act, either spouse
                    (not just the wife) can apply for interim maintenance and a
                    contribution toward litigation expenses while the divorce
                    petition is pending. The court considers the income and
                    assets of both parties and passes an order, usually within 2–
                    6 months of the application. Non-compliance with a
                    maintenance order can result in execution proceedings and
                    even arrest of the defaulting spouse. Separately, Section 125
                    of the Criminal Procedure Code provides a faster remedy for
                    maintenance, available to any wife, child, or dependent
                    parent.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Interim Child Custody
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    When children are involved, the court can pass interim
                    custody orders specifying which parent the child lives with
                    and the visitation rights of the other parent. Courts apply
                    the paramount test: what is in the best interests of the
                    child? Factors include the child's age, health, educational
                    needs, existing bond with each parent, and the stability
                    each parent can provide. Interim custody orders can be
                    revisited if circumstances change. For children under 5,
                    there is a general presumption in favour of the mother's
                    custody, though this is not absolute.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Injunctions — Preventing Transfer of Assets
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    If you have reason to believe that your spouse may
                    transfer, sell, or dissipate matrimonial assets during the
                    pendency of the case to defeat your legitimate claims, you
                    can apply for an interim injunction restraining them from
                    doing so. Courts can also pass injunctions preventing a
                    spouse from alienating the matrimonial home. These
                    applications are governed by Order 39 of the CPC and can be
                    heard urgently if there is demonstrable urgency and prima
                    facie merit.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Protection Orders under the Domestic Violence Act
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    If there is a history of domestic violence (physical,
                    emotional, verbal, economic, or sexual), a wife can
                    simultaneously file a complaint under the Protection of Women
                    from Domestic Violence Act, 2005. This can result in
                    Protection Orders (preventing the respondent from
                    approaching the victim), Residence Orders (ensuring the wife
                    can remain in the shared household), Monetary Relief Orders,
                    and Custody Orders — all on an interim basis and often
                    faster than divorce proceedings.
                  </p>
                </div>
              </div>
            </div>

            {/* ── H2 #8 ── CTA Section */}
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-foreground mb-3">
                8. How to Start Your Divorce Process with vakiltech
              </h2>
              <p className="text-muted-foreground mb-5 leading-relaxed">
                Taking the first step in a divorce — whether contested or by
                mutual consent — can feel overwhelming. vakiltech makes it
                straightforward. Our process begins with a 30-minute one-on-one
                consultation with a qualified family law advocate at just ₹299.
                In that session, you will understand which grounds apply to
                your situation, which court has jurisdiction, what documents
                you need to gather, and a realistic timeline and cost estimate
                for your specific case.
              </p>
              <p className="text-muted-foreground mb-5 leading-relaxed">
                If you are in a situation where you need to put the other party
                on formal notice before filing — for example, to create a paper
                trail of desertion or cruelty, or to initiate divorce
                proceedings formally — our team can also draft and send a
                legally valid Divorce Legal Notice on your behalf. Once your
                consultation is done and you decide to proceed, a dedicated
                advocate experienced in family law is assigned to your matter
                and guides you through every court appearance and document.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/consultation"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Talk to a Divorce Lawyer — ₹299
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/send-legal-notice/legal-notice-for-divorce"
                  className="inline-flex items-center justify-center gap-2 border border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary/10 transition-colors"
                >
                  Send Divorce Legal Notice — ₹1,499
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* ── H2 #9 ── FAQ */}
            <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
              <div className="p-6 pb-0">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  9. Frequently Asked Questions — Divorce Procedure in India
                </h2>
                <p className="text-muted-foreground mb-2">
                  Answers to the twelve most common questions we receive about
                  the divorce process in India.
                </p>
              </div>
              <FAQSection
                faqs={faqs}
                title=""
                subtitle=""
                className="pt-0"
              />
            </div>

            {/* Related reads */}
            <div className="bg-muted/40 border border-border rounded-xl p-6">
              <h2 className="text-lg font-semibold text-foreground mb-4">
                Related Guides
              </h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/guides/how-to-file-for-divorce-india"
                  className="flex items-center gap-2 text-primary hover:underline font-medium"
                >
                  <ArrowRight className="h-4 w-4 flex-shrink-0" />
                  How to File for Divorce in India — Practical Filing Guide
                </Link>
                <Link
                  href="/guides/mutual-consent-divorce-india"
                  className="flex items-center gap-2 text-primary hover:underline font-medium"
                >
                  <ArrowRight className="h-4 w-4 flex-shrink-0" />
                  Mutual Consent Divorce in India — Complete Guide
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
