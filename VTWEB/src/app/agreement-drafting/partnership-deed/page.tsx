import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { TrustSignalsSection } from "@/components/features/homepage/trust-signals";
import { FAQSection } from "@/components/shared/faq-section";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Partnership Deed Online India — ₹999 | vakiltech",
  description:
    "Draft your partnership deed with verified advocates — ₹999. Profit sharing, capital, dissolution clauses covered. Delivered in 24 hrs. Start today.",
  keywords: [
    "partnership deed",
    "partnership deed format",
    "partnership deed online india",
    "how to make partnership deed",
    "partnership deed registration india",
    "partnership agreement india",
  ],
  alternates: {
    canonical: "https://vakiltech.in/agreement-drafting/partnership-deed",
  },
  openGraph: {
    title: "Partnership Deed Online India — ₹999 | vakiltech",
    description:
      "Draft your partnership deed with verified advocates — ₹999. Profit sharing, capital, dissolution clauses covered. Delivered in 24 hrs.",
    url: "https://vakiltech.in/agreement-drafting/partnership-deed",
    siteName: "vakiltech",
    images: [
      {
        url: "https://vakiltech.in/logo.png",
        width: 1200,
        height: 630,
        alt: "vakiltech — Partnership Deed Drafting Online India",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Partnership Deed Online India — ₹999 | vakiltech",
    description:
      "Draft your partnership deed with verified advocates — ₹999. Delivered in 24 hrs. Start today.",
    images: ["https://vakiltech.in/logo.png"],
  },
};

export default function PartnershipDeedPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Agreement Drafting", href: "/agreement-drafting" },
    { label: "Partnership Deed", current: true },
  ];

  const faqs = [
    {
      question: "What is a partnership deed and is it legally mandatory?",
      answer:
        "A partnership deed is a written agreement between two or more individuals who agree to carry on a business together and share its profits and losses. While oral partnerships are legally recognized under the Indian Partnership Act 1932, a written deed is strongly recommended because it defines roles, profit ratios, and exit conditions with legal clarity. Without a deed, disputes are governed by the default rules of the Act — which may not reflect what the partners actually agreed.",
    },
    {
      question: "What must a partnership deed include?",
      answer:
        "A partnership deed must cover: (1) Name and address of the firm and all partners; (2) Nature of the business; (3) Capital contributions by each partner; (4) Profit and loss sharing ratio; (5) Roles and responsibilities of each partner; (6) Salary or remuneration to working partners (if any); (7) Procedure for admission of new partners; (8) Dispute resolution mechanism; (9) Lock-in period (if applicable); and (10) Dissolution conditions and process.",
    },
    {
      question: "Do I need to register a partnership deed in India?",
      answer:
        "Registration of a partnership firm with the Registrar of Firms under the Indian Partnership Act 1932 is optional — not compulsory. However, an unregistered firm cannot file a suit against third parties or partners to enforce its rights. Registration is therefore strongly advisable, especially for commercial partnerships. vakiltech can assist with both drafting and registration.",
    },
    {
      question: "Can a partnership deed be amended after signing?",
      answer:
        "Yes — a partnership deed can be amended by executing a Supplementary Partnership Deed signed by all partners. The amendment must be consistent with the terms of the original deed and must be registered with the Registrar of Firms if the firm is already registered. Common amendments include changes to profit ratio, admission of a new partner, or alteration of capital contributions.",
    },
    {
      question: "What is the stamp duty on a partnership deed in India?",
      answer:
        "Stamp duty on a partnership deed varies by state. It is calculated based on the capital contribution of the partners. For example, in Maharashtra the stamp duty ranges from ₹500 to ₹5,000 depending on the capital amount. In Delhi, it is ₹200 for capital up to ₹50,000. vakiltech's advocates will advise you on the exact stamp duty applicable in your state before finalizing the deed.",
    },
    {
      question: "How long does it take to get a partnership deed drafted?",
      answer:
        "vakiltech delivers a fully drafted, advocate-reviewed partnership deed within 24 hours of receiving your details. The process is entirely online — you fill in a simple form, our advocate drafts the deed with your specific clauses, and the final document is sent to your email. You can request revisions at no extra charge before finalizing.",
    },
    {
      question: "What is the difference between a partnership deed and a partnership agreement?",
      answer:
        "A partnership deed and a partnership agreement refer to the same document — both are written contracts that define the terms of a partnership. 'Deed' is the formal legal term used in Indian law under the Indian Partnership Act, 1932. 'Agreement' is the common usage term. The document must be executed on non-judicial stamp paper to be legally valid in India.",
    },
    {
      question: "Can a minor be a partner in a partnership firm?",
      answer:
        "A minor cannot become a full partner in a partnership firm in India, as minors lack the legal capacity to enter into contracts. However, under Section 30 of the Indian Partnership Act, 1932, a minor can be admitted to the benefits of a partnership with the consent of all partners. This means a minor can share in profits but is not personally liable for the firm's losses or obligations.",
    },
  ];

  return (
    <>
      {/* schema-migrated */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            name: "Partnership Deed Drafting Service",
            description:
              "Online Partnership Deed Drafting in India at ₹999. Covers profit sharing, capital contribution, dissolution clauses. Drafted by verified advocates, delivered in 24 hours.",
            serviceType: "Partnership Deed Drafting",
            provider: {
              "@type": "Organization",
              name: "vakiltech",
              url: "https://vakiltech.in",
            },
            url: "https://vakiltech.in/agreement-drafting/partnership-deed",
            telephone: "+91-70476 83995",
            image: "https://vakiltech.in/vt-logo.png",
            address: { "@type": "PostalAddress", addressCountry: "IN" },
            priceRange: "₹999",
            offers: { "@type": "Offer", price: "999", priceCurrency: "INR" },
            areaServed: { "@type": "Country", name: "India" },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is a partnership deed and is it legally mandatory?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A partnership deed is a written agreement between two or more individuals who agree to carry on a business together and share its profits and losses. While oral partnerships are legally recognized under the Indian Partnership Act 1932, a written deed is strongly recommended because it defines roles, profit ratios, and exit conditions with legal clarity. Without a deed, disputes are governed by the default rules of the Act — which may not reflect what the partners actually agreed.",
                },
              },
              {
                "@type": "Question",
                name: "What must a partnership deed include?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A partnership deed must cover: (1) Name and address of the firm and all partners; (2) Nature of the business; (3) Capital contributions by each partner; (4) Profit and loss sharing ratio; (5) Roles and responsibilities of each partner; (6) Salary or remuneration to working partners (if any); (7) Procedure for admission of new partners; (8) Dispute resolution mechanism; (9) Lock-in period (if applicable); and (10) Dissolution conditions and process.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need to register a partnership deed in India?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Registration of a partnership firm with the Registrar of Firms under the Indian Partnership Act 1932 is optional — not compulsory. However, an unregistered firm cannot file a suit against third parties or partners to enforce its rights. Registration is therefore strongly advisable, especially for commercial partnerships. vakiltech can assist with both drafting and registration.",
                },
              },
              {
                "@type": "Question",
                name: "Can a partnership deed be amended after signing?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes — a partnership deed can be amended by executing a Supplementary Partnership Deed signed by all partners. The amendment must be consistent with the terms of the original deed and must be registered with the Registrar of Firms if the firm is already registered. Common amendments include changes to profit ratio, admission of a new partner, or alteration of capital contributions.",
                },
              },
              {
                "@type": "Question",
                name: "What is the stamp duty on a partnership deed in India?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Stamp duty on a partnership deed varies by state. It is calculated based on the capital contribution of the partners. For example, in Maharashtra the stamp duty ranges from ₹500 to ₹5,000 depending on the capital amount. In Delhi, it is ₹200 for capital up to ₹50,000. vakiltech's advocates will advise you on the exact stamp duty applicable in your state before finalizing the deed.",
                },
              },
              {
                "@type": "Question",
                name: "How long does it take to get a partnership deed drafted?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "vakiltech delivers a fully drafted, advocate-reviewed partnership deed within 24 hours of receiving your details. The process is entirely online — you fill in a simple form, our advocate drafts the deed with your specific clauses, and the final document is sent to your email. You can request revisions at no extra charge before finalizing.",
                },
              },
              {
                "@type": "Question",
                name: "What is the difference between a partnership deed and a partnership agreement?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A partnership deed and a partnership agreement refer to the same document — both are written contracts that define the terms of a partnership. 'Deed' is the formal legal term used in Indian law under the Indian Partnership Act, 1932. 'Agreement' is the common usage term. The document must be executed on non-judicial stamp paper to be legally valid in India.",
                },
              },
              {
                "@type": "Question",
                name: "Can a minor be a partner in a partnership firm?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A minor cannot become a full partner in a partnership firm in India, as minors lack the legal capacity to enter into contracts. However, under Section 30 of the Indian Partnership Act, 1932, a minor can be admitted to the benefits of a partnership with the consent of all partners. This means a minor can share in profits but is not personally liable for the firm's losses or obligations.",
                },
              },
            ],
          }),
        }}
      />

      <main className="min-h-screen bg-gradient-to-b from-background to-background/55">
        <div className="container mx-auto px-6 md:px-8 pb-8">
          <section className="relative pt-6 pb-16 md:pt-10 md:pb-24 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 overflow-hidden rounded-b-3xl md:rounded-b-[40px] -mx-6 md:-mx-8 px-6 md:px-8">
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
                      Indian Partnership Act, 1932 Compliant
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                      Partnership Deed Drafting Online in India — by Verified Advocates at ₹999
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                      Draft your partnership deed with verified advocates — ₹999 flat. Covers profit sharing, capital contribution, dissolution clauses, and registration guidance. Delivered to your inbox in 24 hours.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/agreement-drafting/partnership-deed#get-started"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center"
                    >
                      Draft Partnership Deed — ₹999
                    </Link>
                    <Link
                      href="/legal-consultation"
                      className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 text-center"
                    >
                      Get Free Consultation
                    </Link>
                  </div>
                </div>

                <div className="relative">
                  <div className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 p-8 flex items-center justify-center">
                    <img
                      src="/legal-notice/lawyer-customer-desk.svg"
                      alt="Partnership deed drafting online India - vakiltech advocates"
                      className="w-full h-full object-contain drop-shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="max-w-4xl mx-auto py-12 space-y-6">

            {/* What is a Partnership Deed */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">What is a Partnership Deed?</h2>
              <p className="text-muted-foreground mb-4">
                A partnership deed is a written legal agreement between two or more individuals who agree to carry on a business together, share profits in agreed proportions, and define each partner's rights and responsibilities. It is governed by the Indian Partnership Act, 1932, and is the foundational document for registering a partnership firm in India.
              </p>
              <p className="text-muted-foreground mb-4">
                A partnership deed — also called a partnership agreement — is a written contract between two or more persons who agree to carry on a business jointly, contribute capital, and share the profits (and losses) in agreed proportions. While the law recognizes oral partnerships, a written, stamped, and registered deed is the only reliable way to protect each partner's rights — especially when disputes arise over profit sharing, decision-making authority, or exit conditions.
              </p>
              <p className="text-muted-foreground mb-6">
                Without a deed, any dispute between partners will default to the provisions of the Indian Partnership Act — which distributes profits equally regardless of actual capital contribution and gives all partners equal management rights, regardless of the agreed arrangement.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">Is a Partnership Deed Legally Mandatory in India?</h3>
              <p className="text-muted-foreground mb-4">
                No — a partnership deed is not legally mandatory under the Indian Partnership Act, 1932. The Act recognizes both oral and written partnerships. However, an unregistered or undocumented partnership exposes every partner to significant legal and financial risk. Registration with the Registrar of Firms is optional, but without it, partners cannot file suits to enforce their rights in court.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">What Happens If You Don't Have a Partnership Deed?</h3>
              <p className="text-muted-foreground mb-2">
                Operating without a partnership deed triggers the default rules of the Indian Partnership Act — which are rarely what partners actually want:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Profits and losses are split <strong className="text-foreground">equally</strong> among all partners, regardless of capital invested.</li>
                <li>All partners have <strong className="text-foreground">equal management rights</strong> — no partner can be assigned a senior or operational role.</li>
                <li>Partners are not entitled to any <strong className="text-foreground">salary or interest on capital</strong> unless explicitly agreed in writing.</li>
                <li>The firm cannot sue third parties or partners to enforce its rights if it is unregistered.</li>
                <li>Banks and financial institutions often <strong className="text-foreground">refuse loans</strong> to unregistered firms without a deed.</li>
                <li>The firm cannot obtain GST registration, PAN, or licences in the firm's name without a deed.</li>
              </ul>
            </div>

            {/* Essential Clauses — H3s for each clause */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Essential Clauses in a Partnership Deed</h2>
              <p className="text-muted-foreground mb-6">
                vakiltech&apos;s advocates draft every clause your partnership needs — customised to your business structure, not a generic template:
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Profit and Loss Sharing Ratio</h3>
                  <p className="text-muted-foreground text-sm">
                    The most critical clause in any partnership deed. It specifies the exact percentage in which net profits and losses are distributed among partners after accounting for working partner salaries and interest on capital. Without this clause, Section 13(b) of the Indian Partnership Act mandates equal distribution regardless of capital invested. For income tax purposes under Section 40(b) of the Income Tax Act, profit sharing ratios must be explicitly stated in a registered deed for working partner remuneration to be deductible.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Roles and Responsibilities of Each Partner</h3>
                  <p className="text-muted-foreground text-sm">
                    Defines which partner is responsible for which aspect of the business — operations, finance, sales, client management. Without this clause, all partners have equal management rights under the Act, which creates operational chaos in any firm with more than two partners. A clear roles clause also protects you if a dispute arises over who had authority to enter a contract on the firm&apos;s behalf.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Capital Contribution</h3>
                  <p className="text-muted-foreground text-sm">
                    Records each partner&apos;s initial capital contribution — whether cash, assets, or intellectual property — and the process for additional capital calls if the business needs more funds. This clause also determines what happens to a partner&apos;s capital on exit. The Indian Partnership Act is silent on capital contributions, meaning courts will determine entitlement based on facts if no written record exists.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Remuneration and Interest on Capital</h3>
                  <p className="text-muted-foreground text-sm">
                    Specifies whether working partners are entitled to a salary or commission, and whether partners earn interest on their capital contributions. Without this clause, no such payments are legally permissible — Section 13(a) of the Act provides that partners are not entitled to remuneration for carrying on the business unless the deed says otherwise. Interest on capital is similarly absent by default.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Admission and Retirement of Partners</h3>
                  <p className="text-muted-foreground text-sm">
                    Sets out the process for admitting new partners — including whether all existing partners must consent — and the terms on which a partner may retire, including the valuation of their share. Without this clause, admitting a new partner requires unanimous consent of all existing partners by default, which can deadlock decisions at critical growth stages.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Dissolution Clauses</h3>
                  <p className="text-muted-foreground text-sm">
                    Defines the events that trigger dissolution — death of a partner, insolvency, mutual agreement, or court order — the procedure for winding up the firm, and how assets are distributed after settling liabilities. Without a dissolution clause, the death or insolvency of any partner automatically dissolves the entire firm under the Act, regardless of whether the remaining partners want to continue.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Dispute Resolution Mechanism</h3>
                  <p className="text-muted-foreground text-sm">
                    Specifies the mechanism for resolving internal disputes — typically arbitration under the Arbitration and Conciliation Act, 1996, or mediation — before the matter escalates to litigation. A dispute resolution clause that names a specific arbitrator or arbitration body can save months and lakhs in legal fees when partner disagreements arise.
                  </p>
                </div>
              </div>
            </div>

            {/* Types of Partnership Deeds — NEW SECTION */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Types of Partnership Deeds in India</h2>
              <p className="text-muted-foreground mb-6">
                Not all partnership deeds are the same. The type of deed you need depends on your business structure and the liability arrangement between partners:
              </p>

              <div className="space-y-5">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">General Partnership Deed</h3>
                  <p className="text-muted-foreground text-sm">
                    The most common type. All partners share equal responsibility for managing the business and bear unlimited joint liability for the firm&apos;s debts and obligations. Any partner can bind the firm in contracts with third parties. A general partnership deed governs the majority of small and medium businesses, professional practices, and family firms in India.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Limited Partnership Deed</h3>
                  <p className="text-muted-foreground text-sm">
                    Creates a partnership with both general partners (unlimited liability, active management) and limited partners (limited liability up to their capital contribution, no active role in management). Limited partnerships are used where investors want to contribute capital without operational involvement or unlimited personal liability.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Partnership at Will</h3>
                  <p className="text-muted-foreground text-sm">
                    A partnership with no fixed duration — any partner can dissolve it at any time by giving written notice. The Indian Partnership Act defaults to a partnership at will if the deed does not specify a duration. While flexible, this creates risk: a disgruntled partner can trigger dissolution without warning, disrupting operations and forcing asset liquidation.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Particular Partnership Deed</h3>
                  <p className="text-muted-foreground text-sm">
                    Created for a specific project or undertaking — the partnership automatically dissolves once the project is complete or the purpose is achieved. Common in construction, real estate, film production, and event management. A particular partnership deed defines the scope, duration, and winding-up procedure tied to the completion of the specific venture.
                  </p>
                </div>
              </div>
            </div>

            {/* Registration Section — NEW SECTION */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">How to Register a Partnership Deed in India</h2>
              <p className="text-muted-foreground mb-4">
                Registration is optional under the Indian Partnership Act, 1932, but strongly advisable. A registered partnership firm can sue partners and third parties, open a bank account in the firm&apos;s name, apply for PAN, obtain GST registration, and access business loans. An unregistered firm loses all these rights.
              </p>
              <p className="text-muted-foreground mb-6">
                Registration is done with the Registrar of Firms in the state where the firm&apos;s principal place of business is located. vakiltech handles the entire registration process alongside deed drafting.
              </p>

              <h3 className="text-lg font-semibold text-foreground mb-3">Documents Required for Partnership Registration</h3>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-6">
                <li>Signed partnership deed on non-judicial stamp paper (value varies by state)</li>
                <li>Application for registration in the prescribed form (Form I under the Indian Partnership Act)</li>
                <li>PAN cards and address proof of all partners</li>
                <li>Proof of principal place of business (rental agreement or ownership document)</li>
                <li>Prescribed registration fee (varies by state)</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mb-3">Stamp Duty on a Partnership Deed — State-wise</h3>
              <p className="text-muted-foreground mb-4">
                A partnership deed must be executed on non-judicial stamp paper. The stamp duty varies by state and is calculated on the total capital contribution of the firm:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-muted-foreground border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 pr-4 font-semibold text-foreground">State</th>
                      <th className="text-left py-2 pr-4 font-semibold text-foreground">Stamp Duty</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4">Maharashtra</td>
                      <td className="py-2">₹500 – ₹5,000 (based on capital)</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4">Delhi</td>
                      <td className="py-2">₹200 (up to ₹50,000 capital)</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4">Karnataka</td>
                      <td className="py-2">₹500 – ₹2,000</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4">Tamil Nadu</td>
                      <td className="py-2">₹100 – ₹1,000</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4">West Bengal</td>
                      <td className="py-2">₹100 – ₹500</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Other states</td>
                      <td className="py-2">Varies — vakiltech advises on your specific state</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Who Needs a Partnership Deed */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Who Needs a Partnership Deed?</h2>
              <ul className="list-disc pl-5 space-y-3 text-muted-foreground">
                <li>
                  <strong className="text-foreground">Two or more co-founders</strong> starting a business together — whether a traditional firm, a startup, or a professional practice. Without a deed, a co-founder dispute defaults to equal rights, regardless of who contributed more.
                </li>
                <li>
                  <strong className="text-foreground">Family businesses</strong> being converted into a partnership structure with defined roles for each family member. Family disputes are the most common source of partnership litigation — a deed prevents them.
                </li>
                <li>
                  <strong className="text-foreground">Professionals</strong> such as doctors, architects, chartered accountants, or lawyers entering into a practice partnership. Many professional regulators require a registered deed before the firm can be listed.
                </li>
                <li>
                  <strong className="text-foreground">Existing partnerships</strong> that have been operating without a deed and now want to formalize and register the firm to access bank loans, GST registration, or PAN in the firm&apos;s name.
                </li>
                <li>
                  <strong className="text-foreground">Partners changing terms</strong> — such as admitting a new partner, revising the profit ratio, or buying out a retiring partner. Any change to partnership terms requires a supplementary deed.
                </li>
              </ul>
            </div>

            {/* Mid-page CTA */}
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-8">
              <p className="font-semibold text-foreground mb-1">Ready to draft yours?</p>
              <p className="text-muted-foreground mb-4">
                vakiltech&apos;s advocates prepare a fully customised partnership deed — stamped, reviewed, and delivered within 24 hours. ₹999 flat. No hidden fees.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/agreement-drafting/partnership-deed#get-started"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Draft Partnership Deed — ₹999
                </Link>
                <Link
                  href="/legal-consultation"
                  className="inline-flex items-center justify-center gap-2 border border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary/5 transition-colors"
                >
                  Talk to a Lawyer First
                </Link>
              </div>
            </div>

            {/* Drafting Process */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">How vakiltech Drafts Your Partnership Deed</h2>
              <p className="text-muted-foreground mb-4">Get your deed in 4 simple steps:</p>
              <ol className="space-y-4">
                {[
                  {
                    step: "1",
                    title: "Share Details",
                    desc: "Fill a simple form with partner names, capital contributions, profit ratio, roles, and any specific clauses you need.",
                  },
                  {
                    step: "2",
                    title: "Advocate Drafting",
                    desc: "A qualified advocate drafts a comprehensive deed tailored to your specific business structure and partner arrangement.",
                  },
                  {
                    step: "3",
                    title: "Review and Revise",
                    desc: "Review the draft. Request changes — unlimited revisions are included in the ₹999 fee until you are satisfied.",
                  },
                  {
                    step: "4",
                    title: "Final Delivery",
                    desc: "Receive the final deed in PDF and Word format via email, ready for printing, signing, and stamping.",
                  },
                ].map((item) => (
                  <li key={item.step} className="flex gap-4">
                    <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      {item.step}
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">{item.title}</p>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Bottom CTA */}
            <div id="get-started" className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-8">
              <p className="font-semibold text-foreground mb-1">Draft Your Partnership Deed Today</p>
              <p className="text-muted-foreground mb-4">
                18,000+ businesses across India have used vakiltech. Get your partnership deed drafted, reviewed, and delivered in 24 hours for ₹999. No hidden fees. Unlimited revisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/agreement-drafting/partnership-deed#get-started"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Draft Partnership Deed — ₹999
                </Link>
                <Link
                  href="/legal-consultation"
                  className="inline-flex items-center justify-center gap-2 border border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary/5 transition-colors"
                >
                  Talk to a Lawyer First
                </Link>
              </div>
            </div>

          </div>
        </div>

        <TrustSignalsSection />

        <FAQSection faqs={faqs} title="Partnership Deed — Frequently Asked Questions" />
      </main>
    </>
  );
}
