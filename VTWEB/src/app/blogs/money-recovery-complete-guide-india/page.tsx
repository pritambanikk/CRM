import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { FAQSection } from "@/components/shared/faq-section";

export const metadata: Metadata = {
  title: "Money Recovery in India — Complete Legal Guide (2026) | vakiltech",
  description:
    "Someone owes you money and won't pay? Learn your legal options — from a demand notice to a civil recovery suit — and how to recover money fast in India.",
  keywords: [
    "money recovery india",
    "how to recover money in india",
    "money recovery legal options india",
    "legal steps to recover money india",
  ],
  alternates: {
    canonical: "https://vakiltech.in/blogs/money-recovery-complete-guide-india",
  },
};

export default function MoneyRecoveryCompleteGuide() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blogs" },
    { label: "Money Recovery in India", current: true },
  ];

  const faqs = [
    {
      question: "Can I recover money without a written agreement in India?",
      answer:
        "Yes. A written agreement is strong evidence, but not mandatory. Bank transfer records, WhatsApp conversations, emails, UPI receipts, and witness testimony can all establish the existence of a debt. Courts assess the totality of evidence. The stronger your documentary trail, the more likely you are to recover.",
    },
    {
      question: "What is the time limit (limitation period) to recover money in India?",
      answer:
        "Under the Limitation Act 1963, you have 3 years from the date the debt became due to file a recovery suit. If the debtor acknowledges the debt in writing within that period, the 3-year clock resets from the date of that acknowledgement. Acting promptly — including sending a legal notice — is critical to preserve your rights.",
    },
    {
      question: "Does a legal notice guarantee the debtor will pay?",
      answer:
        "No — but statistics show it is highly effective. Industry estimates suggest that 60–70% of money recovery disputes settle after receiving a properly drafted legal notice from an advocate, without any court case. The notice signals seriousness and creates a formal record that makes ignoring the debt legally risky for the debtor.",
    },
    {
      question: "What if the debtor is in another city or state?",
      answer:
        "A legal notice is valid across India regardless of where the recipient lives. It must be sent via Speed Post with Acknowledgment Due to their last known address. If a civil suit becomes necessary, you can generally file it in the court that has jurisdiction over the place where the cause of action arose or where the debtor resides.",
    },
    {
      question: "Can I file a criminal case if someone doesn't return my money?",
      answer:
        "In limited circumstances, yes. If there was fraudulent intent from the outset (the person borrowed money without any intention to repay), you may have grounds for a criminal complaint of cheating under Section 318 of the Bharatiya Nyaya Sanhita (BNS) 2023. However, a purely civil debt — where the person genuinely cannot pay — does not automatically give rise to criminal liability. An advocate can assess your specific facts.",
    },
    {
      question: "How long does a civil money recovery suit take in India?",
      answer:
        "A standard civil recovery suit can take 3–7 years in district courts. However, a Summary Suit under Order 37 of the Code of Civil Procedure (CPC) — available for liquidated debts — can be significantly faster because the defendant must seek leave of the court to defend, and if they cannot show a triable issue, a decree can be passed within months.",
    },
    {
      question: "What is the minimum amount for which I can send a legal notice?",
      answer:
        "There is no minimum amount prescribed by law for sending a legal notice. You can send a notice for any amount. However, before sending a notice for very small amounts (under ₹5,000), consider whether the cost and time are proportionate to the debt. vakiltech's flat fee of ₹1,499 makes it economically viable to pursue debts even at lower amounts.",
    },
    {
      question: "Can I send a legal notice to a company or business for money recovery?",
      answer:
        "Yes. A legal notice can be addressed to any legal entity — individuals, partnerships, private limited companies, or public companies. For a company, the notice is sent to its registered office address, addressed to the Managing Director or authorised signatory. Corporate debts above ₹1 crore may also be pursued through the NCLT under the Insolvency and Bankruptcy Code.",
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
            headline: "Money Recovery in India — Complete Legal Guide (2026)",
            description:
              "Someone owes you money and won't pay? Learn your legal options — from a demand notice to a civil recovery suit — and how to recover money fast in India.",
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
              "@id": "https://vakiltech.in/blogs/money-recovery-complete-guide-india",
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
              Money Recovery in India — Complete Legal Guide
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Someone owes you money and won&apos;t pay. You have exhausted polite reminders. Now you need to
              know your legal options, what they cost, how long they take, and which one is right for your
              situation. This guide covers everything — from the first demand notice to filing a civil suit.
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
                  10 min read
                </span>
              </div>
            </div>
          </header>

          <div className="prose prose-lg max-w-none mb-16 text-foreground/90 space-y-8">

            {/* H2 1 */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                When Is a Debt Legally Recoverable in India?
              </h2>
              <p className="text-muted-foreground mb-4">
                Not every unpaid amount is automatically a &ldquo;recoverable debt&rdquo; in the legal sense. Before
                pursuing any formal recovery action, you need to establish that the debt is:
              </p>
              <ol className="space-y-4 text-muted-foreground">
                <li className="flex gap-4">
                  <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</span>
                  <div>
                    <strong className="text-foreground">Certain in amount.</strong> The amount owed must be
                    specific or calculable. A debt of &ldquo;approximately ₹2 lakhs&rdquo; is harder to pursue than
                    &ldquo;₹1,87,500 as per invoice no. 142 dated 12 January 2026.&rdquo; The more precisely you can
                    state the amount — with documentary backup — the stronger your position.
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</span>
                  <div>
                    <strong className="text-foreground">Due and payable.</strong> The payment date must have
                    passed. If you gave the debtor until 31 March to repay, you cannot initiate formal
                    recovery action on 15 March. The debt must have become due — either by a specific date
                    in an agreement or by the passage of a reasonable time after demand.
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</span>
                  <div>
                    <strong className="text-foreground">Within the limitation period.</strong> Under the
                    Limitation Act 1963, you have <strong>3 years</strong> from the date the debt became due
                    to file a recovery suit. If the debtor acknowledges the debt in writing — even a WhatsApp
                    message saying &ldquo;I will pay you next month&rdquo; — the limitation clock may reset from that
                    acknowledgement. Do not let time run out.
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">4</span>
                  <div>
                    <strong className="text-foreground">Supported by evidence.</strong> You do not need a
                    formal written contract, but you do need evidence. Bank transfer records, UPI payment
                    history, email threads, WhatsApp messages, signed invoices, and delivery receipts all
                    count. The stronger your evidence, the faster and cheaper your recovery.
                  </div>
                </li>
              </ol>
              <p className="text-muted-foreground mt-4">
                Common recoverable debts include: personal loans to friends or relatives, unpaid
                invoices for goods or services, security deposits not returned by landlords, salary dues
                and full-and-final settlement amounts, advance payments where services were not delivered,
                and business dues from vendors or distributors.
              </p>
            </div>

            {/* H2 2 */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Your Four Legal Options: Demand Notice → Legal Notice → Civil Suit → Criminal Complaint
              </h2>
              <p className="text-muted-foreground mb-5">
                Indian law gives you several tools for money recovery — and they are best used in sequence,
                escalating in formality and cost. Here is what each option means and when to use it.
              </p>

              <div className="space-y-5">
                <div className="border-l-4 border-primary pl-4">
                  <p className="font-semibold text-foreground mb-1">Option 1 — Informal Demand (No legal cost)</p>
                  <p className="text-muted-foreground text-sm">
                    A written message — email, WhatsApp, or letter — clearly stating the amount owed and a
                    deadline to pay. This is not legally binding but creates a documented record. If the
                    debtor responds with even a partial payment or acknowledgement, it resets the limitation
                    clock. Attempt this before escalating. Keep all records.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <p className="font-semibold text-foreground mb-1">Option 2 — Legal Notice via Advocate (₹1,499 with vakiltech)</p>
                  <p className="text-muted-foreground text-sm">
                    A formal notice drafted by a licensed advocate on their letterhead, citing the relevant
                    law, specifying the exact amount, and giving a 15–30 day deadline to pay before legal
                    action is initiated. Sent via Speed Post with Acknowledgment Due. This is the most
                    effective step — approximately 60–70% of debtors pay or negotiate after receiving a
                    lawyer&apos;s notice. It is also a mandatory prerequisite for certain types of civil suits.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <p className="font-semibold text-foreground mb-1">Option 3 — Civil Recovery Suit (Court filing)</p>
                  <p className="text-muted-foreground text-sm">
                    If the legal notice is ignored or refused, you can file a civil suit in the appropriate
                    court — a Summary Suit under Order 37 CPC for liquidated debts, or an ordinary money
                    suit. Court fees are a percentage of the claimed amount. Timelines range from 6 months
                    (Summary Suit, uncontested) to several years. The legal notice becomes key evidence.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <p className="font-semibold text-foreground mb-1">Option 4 — Criminal Complaint (for fraud cases)</p>
                  <p className="text-muted-foreground text-sm">
                    If the debtor never intended to repay — i.e., there was fraudulent intent from the
                    start — you may file a criminal complaint of cheating under Section 318 of the BNS
                    2023. Criminal complaints create pressure, but courts require proof of fraudulent intent;
                    a simple failure to repay is not automatically a criminal offence. Consult an advocate
                    before this step.
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground mt-5 text-sm font-medium">
                The correct sequence for most people: informal demand first → legal notice if ignored →
                civil suit if the notice is ignored → criminal complaint only if fraud is established.
              </p>
            </div>

            {/* H2 3 */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                When to Send a Money Recovery Legal Notice
              </h2>
              <p className="text-muted-foreground mb-4">
                A legal notice is not always the first step — but there are clear signals that it is time
                to escalate from informal reminders to formal legal action. The key indicators are:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary font-bold mt-0.5">→</span>
                  <span>The payment due date has passed and the debtor has not paid or given a concrete plan.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold mt-0.5">→</span>
                  <span>You have sent at least one written reminder (email or WhatsApp) that has been ignored or met with vague promises.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold mt-0.5">→</span>
                  <span>The debtor is becoming evasive — not answering calls, delaying responses, or giving contradictory explanations.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold mt-0.5">→</span>
                  <span>The amount is significant enough to warrant formal action (generally above ₹10,000, though you can send a notice for any amount).</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold mt-0.5">→</span>
                  <span>You have reason to believe the debtor has assets but is choosing not to pay.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold mt-0.5">→</span>
                  <span>The 3-year limitation period is approaching — sending a notice creates a fresh record of your demand.</span>
                </li>
              </ul>
              <p className="text-muted-foreground mt-4">
                For a full decision guide on timing — including a cost-benefit analysis at different
                debt amounts and a 5-question decision tree — see:{" "}
                <Link
                  href="/blogs/when-to-send-money-recovery-legal-notice"
                  className="text-primary hover:underline font-medium"
                >
                  When to Send a Money Recovery Legal Notice — A Decision Guide
                </Link>
                .
              </p>
            </div>

            {/* H2 4 */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                How Much Does Money Recovery Cost and How Long Does It Take?
              </h2>
              <p className="text-muted-foreground mb-4">
                Costs and timelines vary significantly depending on which recovery option you use.
              </p>
              <div className="overflow-x-auto mb-5">
                <table className="w-full text-sm text-muted-foreground border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 pr-4 text-foreground font-semibold">Step</th>
                      <th className="text-left py-2 pr-4 text-foreground font-semibold">Typical Cost</th>
                      <th className="text-left py-2 text-foreground font-semibold">Typical Timeline</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="py-2 pr-4 font-medium text-foreground">Informal demand</td>
                      <td className="py-2 pr-4">Zero</td>
                      <td className="py-2">Immediate — up to 2 weeks</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 font-medium text-foreground">Legal notice (vakiltech)</td>
                      <td className="py-2 pr-4">₹1,499 (all-inclusive)</td>
                      <td className="py-2">Draft in 24 hrs; debtor has 15–30 days to respond</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 font-medium text-foreground">Legal notice (traditional lawyer)</td>
                      <td className="py-2 pr-4">₹3,000–₹10,000+</td>
                      <td className="py-2">3–10 days to draft; same 15–30 day window</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 font-medium text-foreground">Summary Suit (Order 37 CPC)</td>
                      <td className="py-2 pr-4">Court fees + advocate fees (₹10,000–₹50,000+)</td>
                      <td className="py-2">6 months to 3 years</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 font-medium text-foreground">Ordinary civil recovery suit</td>
                      <td className="py-2 pr-4">Court fees + advocate fees (₹15,000–₹1,00,000+)</td>
                      <td className="py-2">3–10 years</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-muted-foreground mb-4">
                The most important insight: most disputes never reach court. A well-drafted legal notice
                is often all it takes. Spending ₹1,499 on a notice that results in recovering ₹50,000
                within 30 days is a return most investments cannot match.
              </p>
              <p className="text-muted-foreground">
                For a detailed breakdown of costs, what affects timelines, and how to evaluate whether
                sending a notice is worth it in your specific situation, see:{" "}
                <Link
                  href="/blogs/money-recovery-legal-notice-cost-timeline"
                  className="text-primary hover:underline font-medium"
                >
                  Money Recovery Legal Notice — Cost and Timeline in India
                </Link>
                .
              </p>
            </div>

            {/* H2 5 */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                What Happens After You Send a Money Recovery Notice?
              </h2>
              <p className="text-muted-foreground mb-4">
                Once your notice is sent via Speed Post with Acknowledgment Due, three outcomes are possible:
              </p>
              <div className="space-y-4">
                <div className="bg-background border border-border rounded-lg p-4">
                  <p className="font-semibold text-foreground mb-2">Outcome 1 — The debtor pays (most common)</p>
                  <p className="text-muted-foreground text-sm">
                    The debtor settles the full amount within the notice period. If this happens, get a
                    signed receipt and written confirmation that the debt is fully discharged. Do not
                    accept partial payment without a clear written agreement on the balance.
                  </p>
                </div>
                <div className="bg-background border border-border rounded-lg p-4">
                  <p className="font-semibold text-foreground mb-2">Outcome 2 — The debtor disputes or negotiates</p>
                  <p className="text-muted-foreground text-sm">
                    The debtor or their lawyer replies disputing the amount or the liability, or proposes
                    a settlement or instalment plan. Evaluate their reply carefully with your advocate.
                    A partial settlement or instalment plan may be acceptable — get it in writing.
                  </p>
                </div>
                <div className="bg-background border border-border rounded-lg p-4">
                  <p className="font-semibold text-foreground mb-2">Outcome 3 — The debtor ignores the notice</p>
                  <p className="text-muted-foreground text-sm">
                    Silence is not a good sign for the debtor — courts view non-response to a legal notice
                    very unfavourably. If ignored, you now have grounds to file a civil suit. The notice
                    itself becomes your first key piece of evidence showing you attempted resolution.
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground mt-4">
                For the complete breakdown of all three scenarios — including what documentation to
                collect if the debtor pays, how to evaluate a dispute reply, and which type of civil
                suit to file if ignored — see:{" "}
                <Link
                  href="/blogs/what-happens-after-money-recovery-notice"
                  className="text-primary hover:underline font-medium"
                >
                  What Happens After You Send a Money Recovery Legal Notice?
                </Link>
              </p>
            </div>

            {/* H2 6 — CTA */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Send a Money Recovery Legal Notice with vakiltech
              </h2>
              <p className="text-muted-foreground mb-4">
                vakiltech makes it simple to send a professionally drafted money recovery legal notice —
                without expensive consultation fees or lengthy delays. Here is exactly what you get:
              </p>
              <ul className="space-y-3 text-muted-foreground mb-6">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span><strong className="text-foreground">Custom drafting by a licensed advocate</strong> — based on your specific facts, the type of debt, and the applicable law (Indian Contract Act, CPC Order 37, NI Act Section 138 for cheque bounce, etc.)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span><strong className="text-foreground">Sent via Speed Post with Acknowledgment Due</strong> — creating a legally valid proof of delivery that courts recognise.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span><strong className="text-foreground">Delivered within 24 hours of your approval</strong> — no week-long waiting periods.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span><strong className="text-foreground">Full tracking and guidance</strong> — you are informed of every step, and your advocate advises on next steps if the debtor does not respond.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span><strong className="text-foreground">All-inclusive price of ₹1,499</strong> — no hidden charges, no separate fees for revisions.</span>
                </li>
              </ul>
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
                <p className="font-bold text-foreground mb-2">Send Legal Notice for Money Recovery — ₹1,499</p>
                <p className="text-sm text-muted-foreground mb-4">
                  Drafted by licensed advocates. Sent via Speed Post within 24 hours. Fully tracked.
                  If the debtor doesn&apos;t respond, your advocate guides you on the next legal step.
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
                  href="/blogs/when-to-send-money-recovery-legal-notice"
                  className="flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  <ArrowRight className="w-3 h-3" />
                  When to Send a Money Recovery Legal Notice — A Decision Guide
                </Link>
                <Link
                  href="/blogs/money-recovery-legal-notice-cost-timeline"
                  className="flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  <ArrowRight className="w-3 h-3" />
                  Money Recovery Legal Notice — Cost and Timeline in India
                </Link>
                <Link
                  href="/blogs/what-happens-after-money-recovery-notice"
                  className="flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  <ArrowRight className="w-3 h-3" />
                  What Happens After You Send a Money Recovery Legal Notice?
                </Link>
              </div>
            </div>

          </div>
        </article>

        {faqs.length > 0 && (
          <FAQSection faqs={faqs} title="Frequently Asked Questions — Money Recovery in India" />
        )}
      </div>
    </>
  );
}
