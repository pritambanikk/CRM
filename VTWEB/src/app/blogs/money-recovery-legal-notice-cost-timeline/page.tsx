import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { FAQSection } from "@/components/shared/faq-section";

export const metadata: Metadata = {
  title: "Money Recovery Legal Notice — Cost & Timeline in India | vakiltech",
  description:
    "How much does a money recovery legal notice cost? How long before you see results? Honest breakdown of costs, timelines, and what affects them.",
  keywords: [
    "money recovery legal notice cost india",
    "legal notice for money recovery fee",
    "how long does money recovery take india",
    "money recovery notice timeline india",
    "cost of legal notice india",
    "money recovery legal process timeline",
  ],
  alternates: {
    canonical: "https://vakiltech.in/blogs/money-recovery-legal-notice-cost-timeline",
  },
};

export default function MoneyRecoveryLegalNoticeCostTimeline() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blogs" },
    { label: "Money Recovery Notice Cost & Timeline", current: true },
  ];

  const faqs = [
    {
      question: "What does the ₹1,499 vakiltech fee include exactly?",
      answer:
        "The ₹1,499 all-inclusive fee covers: consultation with a licensed advocate about your case, custom drafting of the legal notice based on your specific facts and applicable law, unlimited revisions until you approve the draft, sending via Speed Post with Acknowledgment Due (creating valid legal proof of delivery), the postal receipt and tracking details, and guidance from your advocate on next steps if the debtor does not respond within the notice period.",
    },
    {
      question: "What is the typical notice period given to the debtor?",
      answer:
        "The standard notice period in money recovery cases is 15 days, which is the most commonly used timeframe. For larger amounts or more complex disputes, a 30-day period is sometimes used. You can request a 7-day period for urgent cases where time is critical — your advocate will advise on what is appropriate for your situation.",
    },
    {
      question: "Does the debtor have to respond to the legal notice?",
      answer:
        "The debtor is not legally compelled to respond within the notice period. However, failure to respond has legal consequences: courts view non-response unfavourably, and the debtor loses the ability to argue they were unaware of the dispute. A non-response also strengthens your Summary Suit case, because the debtor typically must seek leave of the court to defend — and silence makes that harder.",
    },
    {
      question: "Can I claim interest on the outstanding amount?",
      answer:
        "Yes. Your legal notice should explicitly claim interest on the principal amount. The applicable rate depends on the agreement between the parties. If no interest rate was agreed, courts typically award interest at 6–18% per annum depending on the nature of the debt and the discretion of the judge. Your advocate will include this claim in the notice.",
    },
    {
      question: "How much does filing a civil recovery suit cost in India?",
      answer:
        "Civil suit costs depend on the claimed amount and the state. Court fees (ad valorem) in most states range from 1–10% of the claim value, subject to maximum caps. Advocate fees for a civil money suit typically range from ₹10,000 to ₹1,00,000+ depending on the court level (District Court, High Court), complexity, and duration. This is why exhausting the legal notice step first — at ₹1,499 — is strongly advisable.",
    },
    {
      question: "Can I recover legal costs and court fees if I win?",
      answer:
        "Yes. Indian civil courts have the discretion to award costs to the winning party, including court fees and a portion of advocate fees. However, cost awards in Indian courts are often conservative and may not cover your full expenditure. The probability of a full cost award increases if the debtor's defence was frivolous or they ignored the legal notice.",
    },
  ];

  return (
    <>
      {/* BreadcrumbList Schema */}
      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Money Recovery Legal Notice — Cost and Timeline in India",
            description:
              "How much does a money recovery legal notice cost? How long before you see results? Honest breakdown of costs, timelines, and what affects them.",
            author: { "@type": "Organization", name: "vakiltech Legal Team" },
            publisher: {
              "@type": "Organization",
              name: "vakiltech",
              logo: { "@type": "ImageObject", url: "https://vakiltech.in/logo.png" },
            },
            datePublished: "2026-04-24T00:00:00+05:30",
            dateModified: "2026-04-24T00:00:00+05:30",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://vakiltech.in/blogs/money-recovery-legal-notice-cost-timeline",
            },
          }),
        }}
      />
      {/* FAQPage Schema */}
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
          }),
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
              Money Recovery Legal Notice — Cost and Timeline in India
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Before you send a legal notice for money recovery, you want to know exactly what it will
              cost, how long the process takes, and when you can realistically expect results. This guide
              gives you an honest, complete picture — including what happens if the notice is ignored.
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
                  24 April 2026
                </span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                  7 min read
                </span>
              </div>
            </div>
          </header>

          <div className="prose prose-lg max-w-none mb-16 text-foreground/90 space-y-8">

            {/* H2 1 */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Cost of a Money Recovery Legal Notice
              </h2>
              <p className="text-muted-foreground mb-5">
                The cost of sending a legal notice for money recovery in India varies significantly
                depending on whether you use an online legal service like vakiltech or engage a
                traditional advocate. Here is a direct comparison:
              </p>
              <div className="overflow-x-auto mb-5">
                <table className="w-full text-sm text-muted-foreground border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 pr-4 text-foreground font-semibold">Cost component</th>
                      <th className="text-left py-2 pr-4 text-foreground font-semibold">vakiltech</th>
                      <th className="text-left py-2 text-foreground font-semibold">Traditional advocate</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="py-2 pr-4 font-medium text-foreground">Initial consultation fee</td>
                      <td className="py-2 pr-4 text-green-600 font-medium">Included</td>
                      <td className="py-2">₹500 – ₹3,000 per visit</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 font-medium text-foreground">Drafting fee</td>
                      <td className="py-2 pr-4 text-green-600 font-medium">Included</td>
                      <td className="py-2">₹2,000 – ₹8,000</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 font-medium text-foreground">Speed Post / RPAD charges</td>
                      <td className="py-2 pr-4 text-green-600 font-medium">Included</td>
                      <td className="py-2">₹50 – ₹200 (billed separately)</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 font-medium text-foreground">Revision charges</td>
                      <td className="py-2 pr-4 text-green-600 font-medium">Unlimited, included</td>
                      <td className="py-2">₹500 – ₹2,000 per revision</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 font-medium text-foreground">Follow-up guidance</td>
                      <td className="py-2 pr-4 text-green-600 font-medium">Included</td>
                      <td className="py-2">Charged separately per hour</td>
                    </tr>
                    <tr className="border-t-2 border-foreground/20">
                      <td className="py-3 pr-4 font-bold text-foreground">Total all-inclusive cost</td>
                      <td className="py-3 pr-4 font-bold text-primary">₹1,499</td>
                      <td className="py-3 font-bold text-foreground">₹3,000 – ₹10,000+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-muted-foreground">
                The vakiltech fee of ₹1,499 covers everything from the first consultation to the moment
                the notice is dispatched via Speed Post with Acknowledgment Due — with a licensed
                advocate&apos;s letterhead and Bar Council number. There are no add-ons.
              </p>
            </div>

            {/* H2 2 */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                How Long Before the Debtor Responds? (15–30 Day Window)
              </h2>
              <p className="text-muted-foreground mb-4">
                After the notice is sent via Speed Post, here is a realistic timeline of what to expect:
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                    <div className="w-0.5 h-full bg-border mt-2" />
                  </div>
                  <div className="pb-4">
                    <p className="font-semibold text-foreground">Day 0 — Notice dispatched</p>
                    <p className="text-muted-foreground text-sm mt-1">Your advocate sends the notice via Speed Post with Acknowledgment Due. You receive the postal receipt and tracking number.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                    <div className="w-0.5 h-full bg-border mt-2" />
                  </div>
                  <div className="pb-4">
                    <p className="font-semibold text-foreground">Day 3–7 — Delivery confirmed</p>
                    <p className="text-muted-foreground text-sm mt-1">Speed Post typically delivers within 3–5 business days within the same state, and 5–10 days for other states. Once the Acknowledgment Due card returns, you have proof of delivery.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                    <div className="w-0.5 h-full bg-border mt-2" />
                  </div>
                  <div className="pb-4">
                    <p className="font-semibold text-foreground">Day 7–21 — Debtor reacts</p>
                    <p className="text-muted-foreground text-sm mt-1">Most debtors who will pay do so within 2–3 weeks of receiving the notice. In this window, you may receive a payment, a phone call requesting more time, or a lawyer&apos;s reply. Approximately 60–70% of cases resolve here.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-primary/40 text-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">4</div>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Day 15–30 — Notice period expires</p>
                    <p className="text-muted-foreground text-sm mt-1">If the debtor has not paid or responded by the end of the notice period, you are legally ready to file a civil suit. The notice and the Acknowledgment Due card are your first two pieces of court evidence.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* H2 3 */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Timeline If the Notice Is Ignored — Civil Suit Stages and Duration
              </h2>
              <p className="text-muted-foreground mb-5">
                If the debtor ignores the notice, your next step is filing a civil recovery suit. Here
                is how the typical process unfolds and how long each stage takes:
              </p>
              <div className="overflow-x-auto mb-5">
                <table className="w-full text-sm text-muted-foreground border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 pr-4 text-foreground font-semibold">Stage</th>
                      <th className="text-left py-2 pr-4 text-foreground font-semibold">Summary Suit (Order 37 CPC)</th>
                      <th className="text-left py-2 text-foreground font-semibold">Ordinary Civil Suit</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="py-2 pr-4 font-medium text-foreground">Filing the plaint</td>
                      <td className="py-2 pr-4">1–2 weeks to prepare</td>
                      <td className="py-2">2–4 weeks to prepare</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 font-medium text-foreground">Court summons to defendant</td>
                      <td className="py-2 pr-4">1–3 months</td>
                      <td className="py-2">1–3 months</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 font-medium text-foreground">Defendant seeks leave to defend</td>
                      <td className="py-2 pr-4">30 days; if refused, decree passed quickly</td>
                      <td className="py-2">Written statement: 30–90 days</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 font-medium text-foreground">Evidence and hearing</td>
                      <td className="py-2 pr-4">If contested: 6–18 months</td>
                      <td className="py-2">1–5 years</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 font-medium text-foreground">Judgment and decree</td>
                      <td className="py-2 pr-4">Uncontested: 3–9 months total<br />Contested: 1–3 years total</td>
                      <td className="py-2">3–10 years total</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 font-medium text-foreground">Execution of decree</td>
                      <td className="py-2 pr-4">Additional 3–12 months</td>
                      <td className="py-2">Additional 3–12 months</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-muted-foreground">
                The Summary Suit route under Order 37 CPC is designed for liquidated debts — amounts
                that are certain and calculable. It is faster because the defendant has no automatic
                right to defend; they must convince the court to grant them leave. For straightforward
                money debts with documentary evidence, this is the preferred court route.
              </p>
              <p className="text-muted-foreground mt-3">
                For a full explanation of what happens after the notice — including how to handle a
                dispute reply and what to do if the debtor ignores you entirely — see:{" "}
                <Link
                  href="/blogs/what-happens-after-money-recovery-notice"
                  className="text-primary hover:underline font-medium"
                >
                  What Happens After You Send a Money Recovery Legal Notice?
                </Link>
              </p>
            </div>

            {/* H2 4 */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Factors That Affect Recovery Speed
              </h2>
              <p className="text-muted-foreground mb-5">
                Recovery timelines are not fixed — several factors can significantly speed up or slow
                down your case. Understanding these helps you set realistic expectations and make
                better decisions.
              </p>
              <div className="space-y-5 text-muted-foreground">
                <div>
                  <p className="font-semibold text-foreground mb-2">1. Whether there is a written agreement</p>
                  <p className="text-sm">
                    A signed written agreement (loan agreement, service contract, invoice) is the single
                    biggest factor that speeds up recovery. It establishes the debt beyond dispute and makes
                    both the legal notice and any subsequent Summary Suit significantly stronger. Without a
                    written agreement, you must rely on other evidence — which is possible but slower.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-2">2. The amount of the debt</p>
                  <p className="text-sm">
                    Smaller debts (under ₹1 lakh) often settle faster after a legal notice because the
                    debtor calculates that the cost of defending a civil suit exceeds the debt itself.
                    Larger debts may involve more resistance, counter-claims, and litigation — but the
                    economics also justify more aggressive pursuit on your side.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-2">3. The debtor&apos;s location</p>
                  <p className="text-sm">
                    If the debtor is in the same city as your advocate, service is faster and follow-up
                    is easier. Cross-state disputes involve longer postal timelines and potentially
                    jurisdictional questions about where to file the civil suit. Your advocate will advise
                    on the correct jurisdiction before filing.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-2">4. The debtor&apos;s financial capacity</p>
                  <p className="text-sm">
                    A debtor with assets who is choosing not to pay will respond differently to a legal
                    notice than a debtor who is genuinely insolvent. If the debtor has no traceable assets,
                    even winning a court decree may not result in actual recovery. An advocate can advise
                    on asset tracing before you invest in litigation.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-2">5. Quality of your evidence</p>
                  <p className="text-sm">
                    Clear, contemporaneous documentary evidence (bank transfer records with narrations,
                    signed acknowledgements, written invoices) leads to faster resolution at every stage —
                    notice, negotiation, and court. Weak or incomplete evidence prolongs disputes.
                  </p>
                </div>
              </div>
            </div>

            {/* H2 5 — CTA */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Cost-Benefit Analysis — Is It Worth Sending a Legal Notice?
              </h2>
              <p className="text-muted-foreground mb-4">
                For most people owed above ₹10,000, sending a legal notice is a straightforward
                cost-benefit calculation. Here is the honest version:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                <div className="bg-background border border-border rounded-lg p-4">
                  <p className="font-semibold text-foreground mb-3">Cost of sending a notice (vakiltech)</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex justify-between"><span>Notice drafting + sending</span><span className="font-medium text-foreground">₹1,499</span></li>
                    <li className="flex justify-between"><span>Time investment (form fill)</span><span className="font-medium text-foreground">~20 minutes</span></li>
                    <li className="flex justify-between border-t border-border pt-2"><span className="font-semibold text-foreground">Total cost</span><span className="font-bold text-primary">₹1,499</span></li>
                  </ul>
                </div>
                <div className="bg-background border border-border rounded-lg p-4">
                  <p className="font-semibold text-foreground mb-3">Cost of NOT sending a notice</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex justify-between"><span>Debt written off</span><span className="font-medium text-foreground">Full amount</span></li>
                    <li className="flex justify-between"><span>Interest lost</span><span className="font-medium text-foreground">Ongoing</span></li>
                    <li className="flex justify-between border-t border-border pt-2"><span className="font-semibold text-foreground">Total cost</span><span className="font-bold text-red-500">100% of debt</span></li>
                  </ul>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                Statistics suggest approximately 60–70% of debtors who receive a properly drafted legal
                notice from an advocate settle the debt without any court case. For every 10 people who
                send a notice, 6–7 recover their money without further action. The expected return on
                the ₹1,499 notice fee — weighted by probability — is strongly positive for any debt
                above ₹5,000.
              </p>
              <p className="text-muted-foreground mb-5">
                For a complete guide on all money recovery legal options — including what to do if you
                need to go to court — see:{" "}
                <Link
                  href="/blogs/money-recovery-complete-guide-india"
                  className="text-primary hover:underline font-medium"
                >
                  Money Recovery in India — Complete Legal Guide
                </Link>
                .
              </p>
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
                <p className="font-bold text-foreground mb-2">Send Legal Notice for Money Recovery — ₹1,499</p>
                <p className="text-sm text-muted-foreground mb-4">
                  All-inclusive flat fee. Drafted by a licensed advocate. Sent via Speed Post within 24 hours.
                  Proof of delivery included. Your advocate advises on next steps if the debtor does not respond.
                </p>
                <Link
                  href="/send-legal-notice/legal-notice-for-money-recovery"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Send Legal Notice for Money Recovery <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Related reads */}
            <div className="bg-muted/40 border border-border rounded-xl p-5">
              <p className="text-sm font-semibold text-foreground mb-3">Related guides in this series</p>
              <div className="space-y-2">
                <Link
                  href="/blogs/money-recovery-complete-guide-india"
                  className="flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  <ArrowRight className="w-3 h-3" />
                  Money Recovery in India — Complete Legal Guide
                </Link>
                <Link
                  href="/blogs/what-happens-after-money-recovery-notice"
                  className="flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  <ArrowRight className="w-3 h-3" />
                  What Happens After You Send a Money Recovery Legal Notice?
                </Link>
                <Link
                  href="/blogs/when-to-send-money-recovery-legal-notice"
                  className="flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  <ArrowRight className="w-3 h-3" />
                  When to Send a Money Recovery Legal Notice — A Decision Guide
                </Link>
              </div>
            </div>

          </div>
        </article>

        {faqs.length > 0 && (
          <FAQSection faqs={faqs} title="Frequently Asked Questions — Money Recovery Notice Cost & Timeline" />
        )}
      </div>
    </>
  );
}
