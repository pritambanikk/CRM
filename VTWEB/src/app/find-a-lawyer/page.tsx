import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import Link from "next/link";
import { Calendar, ArrowRight, CheckCircle } from "lucide-react";
import { FAQSection } from "@/components/shared/faq-section";

export const metadata: Metadata = {
  title: "Find a Lawyer in India — Verified Advocates by Case Type | vakiltech",
  description:
    "Choosing the right lawyer matters. Learn what to look for, how much to pay, and talk to a verified Indian advocate in 15 minutes — ₹299.",
  keywords: [
    "find a lawyer",
    "find a lawyer in india",
    "best lawyer in india",
    "top lawyers in india",
    "top advocate in india",
    "indian lawyer",
    "how to choose a lawyer",
    "hire a lawyer india",
    "online lawyer india",
    "verified advocate india",
  ],
  alternates: {
    canonical: "https://vakiltech.in/find-a-lawyer",
  },
};

// Top 10 consultation cities for CTAs
const topCities = [
  { name: "Mumbai", slug: "mumbai" },
  { name: "Delhi", slug: "delhi" },
  { name: "Bangalore", slug: "bangalore" },
  { name: "Hyderabad", slug: "hyderabad" },
  { name: "Chennai", slug: "chennai" },
  { name: "Pune", slug: "pune" },
  { name: "Kolkata", slug: "kolkata" },
  { name: "Ahmedabad", slug: "ahmedabad" },
  { name: "Jaipur", slug: "jaipur" },
  { name: "Lucknow", slug: "lucknow" },
];

export default function FindALawyerPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Find a Lawyer", current: true },
  ];

  const faqs = [
    {
      question: "How do I find the right lawyer in India?",
      answer:
        "The right lawyer depends on your case type. For civil disputes, property matters, or money recovery, look for a civil advocate with experience in your local court. For criminal matters, you need a criminal lawyer enrolled in the relevant court. For family law (divorce, custody, maintenance), a family court specialist is best. vakiltech connects you with verified advocates matched to your case type — you can talk to one in 15 minutes for ₹299.",
    },
    {
      question: "How much does a lawyer charge in India?",
      answer:
        "Lawyer fees in India vary widely. For a simple legal notice, advocates charge ₹1,500–₹5,000. For a consultation, ₹500–₹3,000 per session is typical. For full case representation, fees range from ₹10,000 to several lakhs depending on the court, case complexity, and advocate's seniority. vakiltech offers consultations at a flat ₹299 and legal notices from ₹1,499.",
    },
    {
      question: "How do I verify a lawyer's credentials in India?",
      answer:
        "Every advocate in India must be enrolled with their State Bar Council and registered with the Bar Council of India (BCI). You can verify an advocate's enrollment on the Bar Council of India's online portal (barcouncilofindia.org) using their name or enrollment number. All vakiltech advocates are BCI-enrolled and have been independently verified.",
    },
    {
      question: "What is the difference between an advocate and a lawyer in India?",
      answer:
        "In India, 'advocate' is the legally recognised title for a person enrolled with a State Bar Council and entitled to appear in courts. 'Lawyer' is the common informal term — but only enrolled advocates can represent clients in court proceedings. The terms are often used interchangeably in everyday usage.",
    },
    {
      question: "Can I consult a lawyer online in India?",
      answer:
        "Yes. Online legal consultations are fully valid in India and increasingly common. You can discuss your matter over a phone or video call with a qualified advocate, receive legal advice, and even get legal documents drafted remotely. vakiltech's online consultation connects you with verified advocates for ₹299 — no office visit needed.",
    },
    {
      question: "What is a vakalatnama and do I need one?",
      answer:
        "A vakalatnama is the legal document by which you formally authorise an advocate to appear and act for you in court. It is required when your lawyer represents you in court proceedings. For a consultation or for drafting a legal notice, a vakalatnama is not needed. If you proceed to file a court case, your advocate will prepare the vakalatnama for you to sign.",
    },
    {
      question: "How do I choose between different types of lawyers in India?",
      answer:
        "Match the lawyer's specialisation to your problem: civil/property disputes → civil advocate; family law (divorce, custody) → family court advocate; criminal matters → criminal advocate; consumer complaints → consumer court advocate; business and contracts → corporate advocate; employment issues → labour law advocate. A general practitioner handles smaller matters across categories.",
    },
    {
      question: "What should I prepare before my first lawyer consultation?",
      answer:
        "Before consulting a lawyer, gather: (1) a chronological summary of the facts — what happened, when, and who was involved; (2) all relevant documents — agreements, invoices, communication records, notices already received; (3) a clear statement of what outcome you want (money, injunction, divorce decree, etc.); and (4) your questions in writing. A prepared client gets much more value from a consultation.",
    },
    {
      question: "Is it better to hire a local lawyer or an online lawyer?",
      answer:
        "For matters that will be filed in a specific court, a locally enrolled advocate is essential — they know the local court's procedures and judges. For consultations, legal advice, drafting legal notices, agreements, or drafting pleadings, online lawyers are equally effective and often more affordable. vakiltech advocates are enrolled across India and can handle pan-India matters, while also being available for consultations in your local court's jurisdiction.",
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
            headline: "How to Find the Right Lawyer in India (2026 Guide)",
            description:
              "Choosing the right lawyer matters. Learn what to look for, how much to pay, and talk to a verified Indian advocate in 15 minutes.",
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
              "@id": "https://vakiltech.in/find-a-lawyer",
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
              How to Find the Right Lawyer in India (2026 Guide)
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Finding a good lawyer in India is not just about a Google search. The right advocate
              depends on your case type, court jurisdiction, language, and budget. This guide walks
              you through every step — from recognising when you need a lawyer, to verifying their
              credentials, to knowing what to pay.
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
              </div>
            </div>
          </header>

          <div className="prose prose-lg max-w-none mb-16 text-foreground/90 space-y-8">

            {/* H2 1 — When do you need a lawyer */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                When Do You Actually Need a Lawyer?
              </h2>
              <p className="text-muted-foreground mb-4">
                Not every legal problem needs a lawyer — but knowing when you do is crucial. Use this
                decision framework:
              </p>
              <div className="space-y-3">
                {[
                  {
                    condition: "Someone owes you money and won't pay",
                    action: "Send a legal notice first (₹1,499). If ignored → file recovery suit → need a civil advocate.",
                  },
                  {
                    condition: "You received a legal notice",
                    action: "Get a consultation immediately (₹299). You typically have 15–30 days to respond.",
                  },
                  {
                    condition: "Divorce or separation",
                    action: "Family law advocate needed. For mutual consent divorce, a single advocate can handle both parties' paperwork.",
                  },
                  {
                    condition: "Property dispute or landlord–tenant conflict",
                    action: "A property/civil advocate. A legal notice often resolves the matter before court.",
                  },
                  {
                    condition: "Consumer complaint (defective product, service failure)",
                    action: "Consumer forum complaints can be filed yourself — but a lawyer helps for larger claims.",
                  },
                  {
                    condition: "Police summons or criminal charge",
                    action: "Criminal advocate immediately. Do not respond to police without legal advice.",
                  },
                  {
                    condition: "Business contract or agreement drafting",
                    action: "Corporate or civil advocate for drafting; vakiltech can draft agreements from ₹999.",
                  },
                ].map((item) => (
                  <div
                    key={item.condition}
                    className="grid md:grid-cols-2 gap-2 bg-background border border-border rounded-lg p-4"
                  >
                    <div>
                      <p className="text-sm font-medium text-foreground">{item.condition}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.action}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* H2 2 — 7 things to check */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                7 Things to Check Before Hiring a Lawyer in India
              </h2>
              <p className="text-muted-foreground mb-4">
                Hiring the wrong lawyer is costly — in fees, time, and outcome. Check all seven
                before you commit:
              </p>
              <ol className="space-y-5 text-muted-foreground">
                <li className="flex gap-4">
                  <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</span>
                  <div>
                    <strong className="text-foreground">Bar Council enrolment is active.</strong> Every practising advocate must be enrolled with their State Bar Council. Verify this before anything else — an unenrolled person cannot represent you in court.
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</span>
                  <div>
                    <strong className="text-foreground">Specialisation matches your case.</strong> A criminal lawyer handling a property partition case, or a corporate lawyer handling a domestic violence matter, is suboptimal. Ask specifically: "How many cases of this type have you handled in the last 2 years?"
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</span>
                  <div>
                    <strong className="text-foreground">Jurisdiction — which court will this be filed in?</strong> A lawyer enrolled in the Bombay High Court cannot appear at a Delhi District Court. Match the lawyer's enrolment to the court where your matter will be heard.
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">4</span>
                  <div>
                    <strong className="text-foreground">Fee structure is clear and in writing.</strong> Ask for a fee agreement — lump sum retainer, per-hearing fee, or contingency (the latter is technically restricted in India). Vague fee arrangements lead to disputes. Good lawyers are upfront about costs.
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">5</span>
                  <div>
                    <strong className="text-foreground">Communication — will they actually respond?</strong> Many clients complain their advocate doesn&apos;t return calls. Ask upfront: "How will you update me after each hearing? What is your typical response time?" Set expectations before you pay a retainer.
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">6</span>
                  <div>
                    <strong className="text-foreground">References or verified reviews.</strong> Ask for references from past clients with similar cases — or check verified review platforms. An advocate who has successfully handled 20+ similar cases is a safer bet than one who is new to the area.
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">7</span>
                  <div>
                    <strong className="text-foreground">No outcome guarantees.</strong> Any lawyer who guarantees a verdict is making a promise they cannot keep — and violating Bar Council rules. Honest advocates explain your probability of success and the risks. Red-flag: "Don&apos;t worry, I know the judge" or "We will definitely win."
                  </div>
                </li>
              </ol>
            </div>

            {/* H2 3 — Fees table */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Lawyer Fees in India — What&apos;s Reasonable (by Case Type)
              </h2>
              <p className="text-muted-foreground mb-4">
                Fees vary by city, court, advocate seniority, and case complexity. These ranges reflect
                typical market rates for competent, enrolled advocates:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-muted-foreground border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 pr-4 text-foreground font-semibold">Service / Case Type</th>
                      <th className="text-left py-2 pr-4 text-foreground font-semibold">Typical range</th>
                      <th className="text-left py-2 text-foreground font-semibold">vakiltech price</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr><td className="py-2 pr-4 font-medium text-foreground">Legal notice drafting + sending</td><td className="py-2 pr-4">₹2,000–₹10,000</td><td className="py-2 text-primary font-medium">₹1,499</td></tr>
                    <tr><td className="py-2 pr-4 font-medium text-foreground">Online legal consultation (30 min)</td><td className="py-2 pr-4">₹500–₹3,000</td><td className="py-2 text-primary font-medium">₹299</td></tr>
                    <tr><td className="py-2 pr-4 font-medium text-foreground">Agreement / contract drafting</td><td className="py-2 pr-4">₹2,000–₹15,000</td><td className="py-2 text-primary font-medium">₹999</td></tr>
                    <tr><td className="py-2 pr-4 font-medium text-foreground">Mutual consent divorce (full)</td><td className="py-2 pr-4">₹15,000–₹50,000</td><td className="py-2 text-muted-foreground">Varies</td></tr>
                    <tr><td className="py-2 pr-4 font-medium text-foreground">Contested civil suit (district court)</td><td className="py-2 pr-4">₹20,000–₹1,00,000+</td><td className="py-2 text-muted-foreground">Varies</td></tr>
                    <tr><td className="py-2 pr-4 font-medium text-foreground">Criminal case (sessions court)</td><td className="py-2 pr-4">₹30,000–₹2,00,000+</td><td className="py-2 text-muted-foreground">Varies</td></tr>
                    <tr><td className="py-2 pr-4 font-medium text-foreground">High Court matter</td><td className="py-2 pr-4">₹50,000–₹5,00,000+</td><td className="py-2 text-muted-foreground">Varies</td></tr>
                    <tr><td className="py-2 pr-4 font-medium text-foreground">Consumer forum complaint</td><td className="py-2 pr-4">₹5,000–₹25,000</td><td className="py-2 text-primary font-medium">₹1,499 (notice)</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-muted-foreground text-xs mt-3">
                Note: Fees quoted above are for initial or base services. Case representation fees
                vary significantly based on the number of hearings, complexity, and outcome.
              </p>
            </div>

            {/* H2 4 — How to verify */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                How to Verify a Lawyer&apos;s Credentials in India
              </h2>
              <p className="text-muted-foreground mb-4">
                Verifying credentials takes less than 5 minutes and could save you from engaging an
                unqualified person:
              </p>
              <ol className="space-y-4 text-muted-foreground">
                <li className="flex gap-4">
                  <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</span>
                  <div>
                    <strong className="text-foreground">Bar Council of India online portal.</strong> Visit{" "}
                    <span className="text-primary">barcouncilofindia.org</span> and search by the
                    advocate&apos;s name or enrollment number. An enrolled advocate will appear in the
                    State Bar Council database with their enrolment year, status (active/inactive), and
                    the court/State they are enrolled in.
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</span>
                  <div>
                    <strong className="text-foreground">Ask for their enrolment certificate.</strong> Every
                    advocate has a State Bar Council enrolment certificate. A genuine advocate will
                    readily share their enrollment number. If someone is evasive, treat it as a red flag.
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</span>
                  <div>
                    <strong className="text-foreground">High Court website for senior advocates.</strong> Most
                    State High Courts list enrolled advocates on their official website. For Senior Advocates,
                    the High Court&apos;s official designation list is available publicly.
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">4</span>
                  <div>
                    <strong className="text-foreground">vakiltech verification.</strong> All advocates
                    on the vakiltech platform have been independently verified — BCI enrolment confirmed,
                    identity verified, and previous case history reviewed. You don&apos;t need to verify
                    separately when you book through vakiltech.
                  </div>
                </li>
              </ol>
            </div>

            {/* H2 5 — Types of lawyers */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Types of Lawyers You Might Need in India
              </h2>
              <p className="text-muted-foreground mb-4">
                Indian law has numerous specialisations. Here are the most common, and when to
                consult each:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    type: "Civil Advocate",
                    use: "Money disputes, property matters, breach of contract, injunctions, recovery suits.",
                    href: "/consultation",
                  },
                  {
                    type: "Criminal Advocate",
                    use: "Bail, police summons, FIR quashing, criminal trials, cheque bounce prosecution.",
                    href: "/consultation",
                  },
                  {
                    type: "Family Law Advocate",
                    use: "Divorce, child custody, maintenance, domestic violence, matrimonial property.",
                    href: "/consultation",
                  },
                  {
                    type: "Consumer Law Advocate",
                    use: "Consumer forum complaints, defective products, service deficiency, insurance disputes.",
                    href: "/consultation",
                  },
                  {
                    type: "Corporate / Business Advocate",
                    use: "Company formation, agreements, disputes, intellectual property, employment contracts.",
                    href: "/consultation",
                  },
                  {
                    type: "Property / Real Estate Advocate",
                    use: "Property purchase, title disputes, builder delays, eviction, partition suits.",
                    href: "/consultation",
                  },
                ].map((item) => (
                  <Link
                    key={item.type}
                    href={item.href}
                    className="bg-background border border-border rounded-lg p-4 hover:border-primary transition-colors group"
                  >
                    <p className="font-semibold text-foreground group-hover:text-primary text-sm mb-1">
                      {item.type}
                    </p>
                    <p className="text-muted-foreground text-xs">{item.use}</p>
                  </Link>
                ))}
              </div>
            </div>

            {/* H2 6 — Online vs in-person */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Online vs In-Person Consultation — Which to Choose?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" /> Online Consultation — Best for:
                  </p>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Getting a first opinion on your case before deciding next steps</li>
                    <li>• Understanding your legal rights and options</li>
                    <li>• Drafting and reviewing legal notices, agreements, or documents</li>
                    <li>• Cases that don&apos;t require immediate court appearance</li>
                    <li>• Situations where speed matters — vakiltech connects you in 15 minutes</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500" /> In-Person Consultation — Best for:
                  </p>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Criminal matters requiring immediate court appearance or bail</li>
                    <li>• Signing documents that need physical attestation</li>
                    <li>• Situations with large volumes of physical evidence</li>
                    <li>• Ongoing court representation where the advocate must appear</li>
                    <li>• Matters where physical proximity to the court is important</li>
                  </ul>
                </div>
              </div>
              <p className="text-muted-foreground text-sm mt-4">
                Start with an online consultation to understand your case and get a plan — then engage
                a local advocate for in-court representation if needed.
              </p>
            </div>

            {/* H2 7 — What to prepare */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                What to Prepare Before Your First Consultation
              </h2>
              <p className="text-muted-foreground mb-4">
                Coming prepared makes your consultation far more productive — and reduces the time
                (and money) you spend explaining background:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3"><span className="text-primary font-bold">→</span><span><strong className="text-foreground">A written timeline of facts.</strong> Who did what, when, and what happened next. Keep it factual and chronological — no opinions or emotions.</span></li>
                <li className="flex gap-3"><span className="text-primary font-bold">→</span><span><strong className="text-foreground">All key documents.</strong> Agreements, invoices, bank statements, emails, WhatsApp messages, legal notices already received, court orders, property documents — anything relevant.</span></li>
                <li className="flex gap-3"><span className="text-primary font-bold">→</span><span><strong className="text-foreground">Your outcome goal.</strong> What do you want to happen? Money back? Injunction? Divorce decree? The more specific, the better the advice you get.</span></li>
                <li className="flex gap-3"><span className="text-primary font-bold">→</span><span><strong className="text-foreground">Your budget and timeline expectations.</strong> A lawyer needs to know if you want a quick resolution or can sustain a 3-year litigation — it changes the strategy.</span></li>
                <li className="flex gap-3"><span className="text-primary font-bold">→</span><span><strong className="text-foreground">Your questions written down.</strong> You will forget questions during the call. Write them before. Examples: "What are my chances?", "How long will this take?", "What can I do myself vs what needs a lawyer?"</span></li>
              </ul>
            </div>

            {/* H2 8 — Talk to a verified advocate (Conversion block) */}
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
              <h2 className="text-xl font-bold text-foreground mb-2">
                Talk to a Verified Advocate Now
              </h2>
              <p className="text-muted-foreground mb-4">
                vakiltech connects you with BCI-enrolled, independently verified advocates across all
                case types. Online consultation in 15 minutes — flat ₹299. No office visits, no
                hidden charges.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <Link
                  href="/consultation"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Talk to a Verified Advocate — ₹299 <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <p className="text-sm text-muted-foreground font-medium mb-3">
                Or find an advocate in your city:
              </p>
              <div className="flex flex-wrap gap-2">
                {topCities.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/consultation/${city.slug}`}
                    className="text-sm bg-background border border-border hover:border-primary text-foreground hover:text-primary px-3 py-1.5 rounded-lg transition-colors"
                  >
                    Advocate in {city.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Related reads */}
            <div className="bg-muted/40 border border-border rounded-xl p-5">
              <p className="text-sm font-semibold text-foreground mb-3">Related guides</p>
              <div className="space-y-2">
                <Link
                  href="/blogs/what-is-a-legal-notice-in-india"
                  className="flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  <ArrowRight className="w-3 h-3" />
                  What is a Legal Notice in India?
                </Link>
                <Link
                  href="/send-legal-notice"
                  className="flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  <ArrowRight className="w-3 h-3" />
                  Send a Legal Notice — Starting ₹1,499
                </Link>
              </div>
            </div>

          </div>
        </article>

        {faqs.length > 0 && (
          <FAQSection faqs={faqs} title="Frequently Asked Questions — Finding a Lawyer in India" />
        )}
      </div>
    </>
  );
}
