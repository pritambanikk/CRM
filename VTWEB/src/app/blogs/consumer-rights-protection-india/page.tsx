import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { FAQSection } from "@/components/shared/faq-section";

export const metadata: Metadata = {
  title: "Consumer Rights in India — The Complete 2026 Guide | vakiltech",
  description:
    "Know your 6 statutory consumer rights under the Consumer Protection Act 2019. Learn what counts as a deficiency, how to complain, and when to send a legal notice.",
  keywords: [
    "consumer rights",
    "consumer rights in india",
    "consumer protection act 2019",
    "consumer rights india",
    "consumer forum india",
  ],
  alternates: {
    canonical: "https://vakiltech.in/blogs/consumer-rights-protection-india",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Consumer Rights in India — Your Complete 2026 Guide",
  description:
    "Know your 6 statutory consumer rights under the Consumer Protection Act 2019. Learn what counts as a deficiency, how to complain, and when to send a legal notice.",
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
    "@id": "https://vakiltech.in/blogs/consumer-rights-protection-india",
  },
};

const faqData = [
  {
    question: "Can I file a consumer complaint online in India?",
    answer:
      "Yes. The Government of India launched the eDaakhil portal (edaakhil.nic.in) specifically for online filing of consumer complaints. You can register, upload documents, pay court fees, and track your case entirely online — without visiting the consumer forum in person. It is available for District, State, and National Consumer Commissions.",
  },
  {
    question: "What is the time limit to file a consumer complaint?",
    answer:
      "Under the Consumer Protection Act 2019, a consumer complaint must be filed within two years from the date the cause of action arose — that is, from the date the deficiency or defect occurred. After two years, the forum can still admit the complaint if you show sufficient cause for the delay, but it is always best to act promptly.",
  },
  {
    question: "Can I file a consumer complaint against Amazon, Flipkart, or Meesho?",
    answer:
      "Yes. E-commerce platforms are covered under the Consumer Protection Act 2019 and the Consumer Protection (E-Commerce) Rules 2020. You can file a complaint against the platform as well as the seller listed on it. Start by sending a legal notice to the company's registered address; if there is no response within 15–30 days, file a complaint at the appropriate consumer forum.",
  },
  {
    question: "What compensation can I get in a consumer complaint?",
    answer:
      "You can claim a full refund of the amount paid, replacement of the defective product, compensation for physical injury or mental agony, and reimbursement of litigation costs. In cases involving gross negligence or unfair trade practices, consumer forums can also award punitive damages and interest on the refund amount from the date of the deficiency.",
  },
  {
    question: "Do I need a lawyer to file a consumer complaint in India?",
    answer:
      "No. Consumer forums are designed to be accessible to ordinary citizens. You can file and argue a consumer complaint yourself. However, a lawyer can strengthen your case, particularly for complex, high-value, or technical matters. Sending a professionally drafted legal notice before filing often resolves disputes faster without ever needing to go to the forum.",
  },
  {
    question: "What is the difference between a defect and a deficiency?",
    answer:
      "A 'defect' refers to a fault or imperfection in a good — for example, a phone whose screen stops working within a week of purchase. A 'deficiency' refers to a shortcoming or inadequacy in a service — for example, a builder who fails to hand over a flat by the agreed date. Both defects and deficiencies are actionable before a consumer forum.",
  },
  {
    question: "Can I file a consumer complaint against a hospital or doctor?",
    answer:
      "Yes. Medical services are covered under the Consumer Protection Act 2019. If a hospital charges for services not rendered, or if there is medical negligence, you can file a consumer complaint. The Supreme Court in Indian Medical Association v. V.P. Shantha (1995) confirmed that medical services fall within the scope of consumer protection law.",
  },
  {
    question: "What is an unfair trade practice under Indian consumer law?",
    answer:
      "An unfair trade practice is any deceptive method or practice that a trader uses to promote the sale of goods or services — such as false advertising, misleading price comparisons, offering fake discounts, or making spurious quality claims. Restrictive trade practices, such as tying conditions that force you to buy unwanted products, are also covered.",
  },
  {
    question: "How much does it cost to file a consumer complaint?",
    answer:
      "Court fees in consumer cases are nominal. For claims up to ₹5 lakh in the District Commission, the fee is ₹100. Fees increase in bands up to a maximum of ₹5,000 for the National Commission. There are no fees for complaints relating to loss of life or personal injury due to a hazardous product.",
  },
  {
    question: "Should I send a legal notice before filing a consumer complaint?",
    answer:
      "Yes — sending a legal notice is strongly recommended as a first step. It formally notifies the company of your grievance and gives them a fixed period (usually 15–30 days) to resolve it. Many disputes are settled at this stage, saving you the time and effort of forum proceedings. A legal notice also strengthens your case before the forum if the company ignores it.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function ConsumerRightsBlogPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blogs" },
    { label: "Consumer Rights in India", current: true },
  ];

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

      <div className="min-h-screen bg-background">
        <div className="bg-card border-b">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <Breadcrumb items={breadcrumbItems} />
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 py-12">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Consumer Rights in India — Your Complete 2026 Guide
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              The Consumer Protection Act 2019 gives every buyer in India six enforceable statutory
              rights. Whether you received a defective product, a substandard service, or were
              misled by a false advertisement, the law is firmly on your side. This guide explains
              what those rights are, who qualifies as a consumer, what counts as a legal deficiency,
              and exactly how to seek redressal — including when to send a legal notice.
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

            {/* Section 1 — The 6 Statutory Consumer Rights */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                The 6 Statutory Consumer Rights in India
              </h2>
              <p className="text-muted-foreground mb-6">
                Section 2(9) of the Consumer Protection Act 2019 codifies six fundamental rights
                that every consumer in India is entitled to exercise against any seller, manufacturer,
                or service provider.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-2">1. Right to Safety</h3>
              <p className="text-muted-foreground mb-5">
                You have the right to be protected against goods and services that are hazardous to
                life and property. This right is particularly relevant in sectors such as
                pharmaceuticals, electrical appliances, food and beverages, construction materials,
                and automobiles. For example, if you purchase a certified LPG cylinder that leaks
                and causes a fire, the manufacturer can be held liable under this right. The Bureau
                of Indian Standards (BIS) certification system enforces minimum safety benchmarks,
                and selling goods that fall below those standards is actionable before a consumer
                forum.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-2">2. Right to Information</h3>
              <p className="text-muted-foreground mb-5">
                You have the right to be informed about the quality, quantity, potency, purity,
                standard, and price of goods and services so that you can make an informed decision.
                This right prevents sellers from concealing material facts. A practical example: if
                an insurance company sells you a policy without disclosing the exclusion clauses —
                and you later discover your claim is excluded — the non-disclosure constitutes an
                unfair trade practice and you can seek redressal before the consumer forum.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-2">3. Right to Choose</h3>
              <p className="text-muted-foreground mb-5">
                You have the right of access to a variety of goods and services at competitive
                prices. No seller can force you to purchase an unwanted product as a condition of
                buying the product you want — this is a restrictive trade practice. For example, if
                a car dealer insists you must buy their in-house insurance as part of the purchase
                deal, you can refuse and report it as a restrictive trade practice under Section
                2(41) of the Act.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-2">4. Right to be Heard</h3>
              <p className="text-muted-foreground mb-5">
                Consumer interests must receive due consideration at appropriate forums. This right
                also means that if you raise a complaint with a company's grievance officer, your
                complaint cannot simply be ignored. Under the Consumer Protection (E-Commerce) Rules
                2020, e-commerce platforms are required to acknowledge complaints within 48 hours
                and resolve them within one month. Failure to do so strengthens your case before
                the consumer forum.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-2">5. Right to Redressal</h3>
              <p className="text-muted-foreground mb-5">
                You have the right to seek redressal against unfair trade practices, restrictive
                trade practices, and the exploitation of consumers. This right is backed by the
                three-tier consumer forum system — District, State, and National Consumer
                Commissions — that provides a formal legal mechanism to enforce your other rights.
                Remedies include refunds, replacements, compensation for loss, and in egregious
                cases, punitive damages that are deposited in the Consumer Welfare Fund.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-2">6. Right to Consumer Education</h3>
              <p className="text-muted-foreground mb-2">
                You have the right to acquire knowledge and skills to be an informed consumer
                throughout your life. This right obligates the government to run consumer awareness
                campaigns, maintain the National Consumer Helpline (1800-11-4000), and operate the
                eDaakhil online filing portal. For you as an individual, this right means you should
                never feel pressured or uninformed when dealing with businesses — you are entitled to
                ask questions, demand disclosures, and seek guidance before making any purchase.
              </p>
            </div>

            {/* Section 2 — Who is a Consumer? */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-4">Who is a Consumer?</h2>
              <p className="text-muted-foreground mb-4">
                Under Section 2(7) of the Consumer Protection Act 2019, a consumer is any person
                who buys goods or avails services for consideration — whether the payment has been
                made, promised, partly made, or is under a deferred payment arrangement. The
                definition also covers any person who uses those goods or benefits from those
                services with the approval of the buyer, even if they themselves did not pay. For
                example, if your spouse buys a refrigerator and you use it, you are also a consumer
                for the purpose of the Act.
              </p>
              <p className="text-muted-foreground mb-4">
                The Act, however, explicitly excludes certain categories:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>
                  <strong>Commercial purchasers:</strong> A person who buys goods for resale or for
                  any commercial purpose is not a consumer. For example, a textile trader who buys
                  fabric in bulk to sell in his shop cannot file a consumer complaint if the fabric
                  is defective — he must approach a civil court instead.
                </li>
                <li>
                  <strong>Resellers:</strong> Anyone who purchases goods with the intention of
                  selling them further is excluded from the definition.
                </li>
                <li>
                  <strong>Exception for small businesses:</strong> The Act carves out an important
                  exception — a person who buys goods for use in self-employment (for example, a
                  self-employed plumber who buys a pipe-fitting machine for his work) is still
                  treated as a consumer.
                </li>
              </ul>
              <p className="text-muted-foreground">
                If you are unsure whether you qualify as a consumer in your specific situation, a
                quick consultation with a consumer lawyer can clarify this before you invest time
                in filing a complaint.
              </p>
            </div>

            {/* Section 3 — What Counts as a Deficiency? */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-4">What Counts as a Deficiency?</h2>
              <p className="text-muted-foreground mb-4">
                To succeed in a consumer complaint, you need to establish that there was a defect in
                goods, a deficiency in service, an unfair trade practice, or a restrictive trade
                practice. Here is what each of these means in practice:
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-2">Defect in Goods</h3>
              <p className="text-muted-foreground mb-4">
                A defect is any fault, imperfection, or shortcoming in the quality, quantity,
                potency, purity, or standard of goods as required by any law or as represented by
                the seller. Examples include a smartphone with a manufacturing fault that causes it
                to overheat, adulterated food that causes illness, or a car with a faulty braking
                system. Under the 2019 Act, product liability claims are also available against
                manufacturers, product service providers, and even sellers — meaning you can claim
                compensation even if you cannot prove the seller was personally at fault.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-2">Deficiency in Service</h3>
              <p className="text-muted-foreground mb-4">
                A deficiency is any shortcoming or inadequacy in the quality, nature, and manner of
                performance of a service. Examples include a builder who delays handing over a flat
                without justification, a bank that wrongly debits your account, an airline that
                denies boarding without adequate compensation, or an insurance company that wrongly
                repudiates a valid claim. Even government departments providing services for a
                consideration can be held liable for deficiency.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-2">Unfair Trade Practices</h3>
              <p className="text-muted-foreground mb-4">
                Defined under Section 2(47), unfair trade practices include false representations,
                misleading advertisements, false guarantees, bait-and-switch tactics, pyramid
                selling schemes, and withholding information that would influence the buyer's
                decision. A common example is an e-commerce seller showing a product at a heavily
                discounted price but then claiming it is out of stock and trying to sell you a
                costlier alternative.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-2">Restrictive Trade Practices</h3>
              <p className="text-muted-foreground mb-2">
                Restrictive trade practices under Section 2(41) are those that tend to bring about
                the manipulation of price or conditions of delivery to the detriment of the
                consumer. Forcing you to buy one product as a condition of getting another — known
                as tie-in selling — is the most common example. For instance, a builder insisting
                you must purchase modular kitchen fittings only from his specified vendor as part of
                your flat purchase is a restrictive trade practice.
              </p>
            </div>

            {/* Section 4 — Key Changes from 1986 Act */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Consumer Protection Act 2019 — Key Changes from the 1986 Act
              </h2>
              <p className="text-muted-foreground mb-4">
                The Consumer Protection Act 2019, which replaced the 1986 Act, introduced several
                significant changes that substantially strengthened consumer rights in India:
              </p>
              <ul className="space-y-4 text-muted-foreground">
                <li>
                  <strong className="text-foreground">E-Commerce Coverage:</strong> The 2019 Act
                  and the subsequent E-Commerce Rules 2020 explicitly bring online marketplaces,
                  direct sellers, and e-commerce entities within the scope of consumer protection
                  law. Platforms must appoint a Grievance Officer, display seller information, and
                  ensure a clear return and refund policy.
                </li>
                <li>
                  <strong className="text-foreground">Product Liability:</strong> For the first
                  time, the 2019 Act introduces a dedicated chapter on product liability. A
                  manufacturer, service provider, or seller can now be held strictly liable for harm
                  caused by a defective product — even without proof of negligence — if the product
                  did not conform to applicable product safety standards.
                </li>
                <li>
                  <strong className="text-foreground">Mediation:</strong> The 2019 Act provides for
                  Consumer Mediation Cells attached to each District, State, and National
                  Commission. If both parties agree, disputes can be referred to mediation for a
                  faster, out-of-court resolution — avoiding the time and cost of a full hearing.
                </li>
                <li>
                  <strong className="text-foreground">Enhanced Penalties:</strong> The 2019 Act
                  significantly increased penalties for unfair trade practices and the manufacture
                  or sale of adulterated or spurious goods. Penalties can now reach up to ₹10 lakh
                  for a first offence and imprisonment in serious cases involving death or grievous
                  hurt.
                </li>
                <li>
                  <strong className="text-foreground">Central Consumer Protection Authority (CCPA):</strong>{" "}
                  A new regulatory body with suo motu powers to investigate, recall products, order
                  refunds, and impose penalties on businesses that engage in unfair trade practices
                  on a wide scale.
                </li>
              </ul>
            </div>

            {/* Section 5 — Three-Tier Forum */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                The Three-Tier Consumer Forum System
              </h2>
              <p className="text-muted-foreground mb-4">
                The Consumer Protection Act 2019 maintains a three-tier quasi-judicial system to
                resolve consumer disputes. Choosing the right forum is important — filing in the
                wrong forum can result in your complaint being returned.
              </p>
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-muted/40">
                      <th className="text-left p-3 border border-border font-semibold text-foreground">Forum</th>
                      <th className="text-left p-3 border border-border font-semibold text-foreground">Pecuniary Jurisdiction</th>
                      <th className="text-left p-3 border border-border font-semibold text-foreground">Appeal Goes To</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3 border border-border text-muted-foreground">District Consumer Commission</td>
                      <td className="p-3 border border-border text-muted-foreground">Up to ₹1 crore</td>
                      <td className="p-3 border border-border text-muted-foreground">State Consumer Commission</td>
                    </tr>
                    <tr className="bg-muted/20">
                      <td className="p-3 border border-border text-muted-foreground">State Consumer Commission</td>
                      <td className="p-3 border border-border text-muted-foreground">₹1 crore to ₹10 crore</td>
                      <td className="p-3 border border-border text-muted-foreground">National Consumer Commission</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-border text-muted-foreground">National Consumer Commission (NCDRC)</td>
                      <td className="p-3 border border-border text-muted-foreground">Above ₹10 crore</td>
                      <td className="p-3 border border-border text-muted-foreground">Supreme Court of India</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-muted-foreground mb-2">
                You file your complaint in the District Commission of the district where you reside
                or where the opposite party (seller or service provider) has its place of business.
                The 2019 Act introduced a consumer-friendly change: you no longer need to file only
                where the cause of action arose — you can file where you ordinarily reside or
                personally work for gain.
              </p>
              <p className="text-muted-foreground">
                For a detailed, step-by-step breakdown of the filing procedure, documents required,
                and court fees, read our dedicated guide:{" "}
                <Link
                  href="/guides/how-to-file-consumer-complaint-india"
                  className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
                >
                  How to File a Consumer Complaint in India
                </Link>
                .
              </p>
            </div>

            {/* Section 6 — E-Commerce Consumer Rights */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                E-Commerce Consumer Rights in India
              </h2>
              <p className="text-muted-foreground mb-4">
                The Consumer Protection (E-Commerce) Rules 2020 create specific obligations for
                all e-commerce entities operating in India — whether Indian-owned like Flipkart or
                Meesho, or global platforms like Amazon. These rules give you the following
                specific protections:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  <strong className="text-foreground">Right to Return and Refund:</strong> E-commerce
                  entities must clearly display their return, refund, exchange, warranty, and
                  guarantee policies on their platform. If a product is defective or not as
                  described, you are entitled to return it and receive a full refund within the
                  policy period — and if the policy is unclear or hidden, the platform is in breach
                  of the Rules.
                </li>
                <li>
                  <strong className="text-foreground">Genuine Products:</strong> Platforms must not
                  allow counterfeit, spurious, or hazardous products to be listed. Sellers must
                  provide accurate descriptions, images, and specifications. If you receive a
                  counterfeit product, both the seller and the platform can be held liable.
                </li>
                <li>
                  <strong className="text-foreground">Delivery SLAs:</strong> The platform must
                  display the expected delivery date clearly before checkout. If delivery is
                  significantly delayed beyond the promised date, this constitutes a deficiency in
                  service and you can claim compensation.
                </li>
                <li>
                  <strong className="text-foreground">No Hidden Charges:</strong> E-commerce
                  platforms cannot add charges for goods or services not explicitly agreed to by
                  you. Pre-ticked checkboxes for add-ons, hidden convenience fees added at
                  checkout, or charges for services you did not request are prohibited.
                </li>
                <li>
                  <strong className="text-foreground">Grievance Officer:</strong> Every e-commerce
                  entity must appoint a Grievance Officer whose name and contact details must be
                  displayed on the platform. The officer must acknowledge your complaint within 48
                  hours and resolve it within one month. This is your first point of escalation
                  before approaching a consumer forum.
                </li>
              </ul>
            </div>

            {/* Section 7 — Legal Notice CTA */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                When to Send a Legal Notice Before Filing a Consumer Complaint
              </h2>
              <p className="text-muted-foreground mb-4">
                While the Consumer Protection Act 2019 does not make it mandatory to send a legal
                notice before filing a consumer complaint, doing so is strongly recommended — and
                for good reason. A formal legal notice:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                <li>
                  Gives the company a last opportunity to resolve the dispute before you escalate
                  to the consumer forum — many disputes are resolved at this stage without any
                  further action.
                </li>
                <li>
                  Creates a clear paper trail that demonstrates you gave the company adequate
                  notice and they chose not to respond — this strengthens your case significantly
                  before the forum.
                </li>
                <li>
                  Is treated as evidence of good faith by consumer commissions when they award
                  litigation costs.
                </li>
                <li>
                  Carries legal weight when drafted by a licensed advocate — companies take a
                  formal legal notice far more seriously than an informal email or social media
                  complaint.
                </li>
              </ul>
              <p className="text-muted-foreground mb-6">
                vakiltech's consumer complaint legal notice is drafted by experienced advocates,
                sent via Speed Post with tracking, and includes a signed copy for your records —
                all for a flat fee of ₹1,499.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/send-legal-notice/consumer-complaint-legal-notice"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-md"
                >
                  Draft Consumer Complaint Notice — ₹1,499
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Section 8 — Link to Step-by-Step Guide */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Want the Step-by-Step Filing Guide?
              </h2>
              <p className="text-muted-foreground mb-4">
                Knowing your rights is the first step. The next step is knowing exactly how to
                enforce them — which forum to approach, what documents to gather, what fees to pay,
                and how to use the eDaakhil portal to file your complaint online.
              </p>
              <p className="text-muted-foreground mb-6">
                Our dedicated procedural guide covers every stage of the consumer complaint process,
                with realistic timelines and practical tips from our legal team.
              </p>
              <Link
                href="/guides/how-to-file-consumer-complaint-india"
                className="group inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors"
              >
                Read our guide to filing a consumer complaint in India
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>

          <FAQSection faqs={faqData} title="Frequently Asked Questions — Consumer Rights in India" />
        </article>
      </div>
    </>
  );
}
