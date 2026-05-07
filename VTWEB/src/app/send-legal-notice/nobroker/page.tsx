import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { TrustSignalsSection } from "@/components/features/homepage/trust-signals";
import { FAQSection } from "@/components/shared/faq-section";
import { DidYouKnowBlock } from "@/components/shared/did-you-know";
import BrandFormCTA from "@/components/shared/brand-form-cta";
import Link from "next/link";
import {
  AlertTriangle, MapPin, Mail, Building2, Phone, Scale,
  FileText, CheckCircle2, ChevronRight, HelpCircle, AlertCircle, Hash, ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Send Legal Notice to NoBroker — Deposit & Listing Fraud | vakiltech",
  description: "NoBroker not returning security deposit or fake listing? Send a legal notice for ₹1,499. Advocate-drafted, legally enforceable.",
  keywords: ["nobroker legal notice", "nobroker deposit complaint", "nobroker fraud legal notice", "nobroker subscription refund legal"],
  alternates: {
    canonical: "https://vakiltech.in/send-legal-notice/nobroker",
  },
};

export default function NoBrokerLegalNoticePage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Legal Notice", href: "/send-legal-notice" },
    { label: "Send Legal Notice to NoBroker", current: true },
  ];

  const faqs = [
    {
      question: "What is NoBroker's registered address for a legal notice?",
      answer: "Send your legal notice to Htek Spaces Pvt. Ltd. (NoBroker) at 6th Floor, Leela Galleria, 5th Block, Koramangala, Bangalore – 560 095, Karnataka. Send via Speed Post with Acknowledgment Due.",
    },
    {
      question: "Can I send a legal notice to NoBroker for not returning my security deposit?",
      answer: "NoBroker as a platform facilitates the transaction. If they held the security deposit in escrow and are refusing to return it, you can send a legal notice. If the dispute is between you and your landlord, a notice to the landlord may be more appropriate — consult an advocate.",
    },
    {
      question: "NoBroker showed a property listing that turned out to be fake. What can I do?",
      answer: "Listing fake or unavailable properties is an unfair trade practice under Consumer Protection Act 2019 and E-Commerce Rules 2020. Document your experience and send a legal notice demanding compensation.",
    },
    {
      question: "NoBroker charged a subscription fee but did not provide owner contacts. Can I get a refund?",
      answer: "Yes. If NoBroker charged a paid subscription or premium plan but failed to deliver the promised owner contacts or property matches, that is deficiency of service and you can claim a refund.",
    },
    {
      question: "How long does NoBroker have to respond to a legal notice?",
      answer: "Typically 15 to 30 days as specified in the notice. If unresolved, you can file before the District Consumer Disputes Redressal Commission in your city.",
    },
    {
      question: "Can I file a consumer complaint in my city even though NoBroker is based in Bangalore?",
      answer: "Yes. Under Consumer Protection Act 2019, you can file where you reside or where the service was availed.",
    },
    {
      question: "What if NoBroker ignores the legal notice?",
      answer: "File before the District Consumer CDRC. Courts have awarded refunds and compensation against property portals for listing fraud and subscription fee disputes.",
    },
    {
      question: "How much does vakiltech charge to send a legal notice to NoBroker?",
      answer: "₹1,499 all-inclusive — advocate consultation, custom drafting, revisions, and Speed Post dispatch with Acknowledgment Due.",
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", name: "vakiltech — Send Legal Notice to NoBroker", description: "Send a lawyer-drafted legal notice to Htek Spaces Pvt. Ltd. (NoBroker) for deposit fraud, fake listings, and subscription fee disputes. ₹1,499.", url: "https://vakiltech.in/send-legal-notice/nobroker", areaServed: { "@type": "Country", name: "India" }, provider: { "@type": "Organization", name: "vakiltech", url: "https://vakiltech.in" }, offers: { "@type": "Offer", price: "1499", priceCurrency: "INR" } }) }} />

      <main className="min-h-screen bg-neutral-50/50">
        <section className="relative pt-6 pb-16 md:pt-10 md:pb-24 bg-gradient-to-br from-primary/5 via-primary/10 to-transparent overflow-hidden border-b border-primary/10">
          <div className="relative max-w-5xl mx-auto px-6 md:px-8 flex flex-col gap-8 md:gap-10">
            <div className="z-10 mt-2 mb-2"><Breadcrumb items={breadcrumbItems} /></div>
            <div className="grid md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-8 space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 bg-white border border-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
                    <AlertCircle className="w-4 h-4" /> Real Estate Consumer Rights
                  </div>
                  <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-[1.15] tracking-tight">
                    Send Legal Notice to NoBroker
                  </h1>
                  <p className="text-xl text-slate-600 leading-relaxed font-medium max-w-3xl">
                    NoBroker holding your security deposit, charging subscription fees for fake listings, or failing to connect you with verified owners? You have consumer rights — and a legal notice is how you enforce them.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <BrandFormCTA service="legal-notice">Send Legal Notice to NoBroker — ₹1,499</BrandFormCTA>
                  <BrandFormCTA service="consultation" variant="outline" showIcon={false}>Talk to a Verified Advocate — ₹299</BrandFormCTA>
                </div>
              </div>
              <div className="md:col-span-4 bg-white rounded-2xl p-6 border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col gap-6">
                <h3 className="font-bold text-slate-900 pb-2 border-b border-slate-100">Why vakiltech?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3"><div className="bg-emerald-100 p-2 rounded-lg text-emerald-600 shrink-0"><CheckCircle2 className="w-5 h-5" /></div><div><p className="font-semibold text-slate-900 text-sm">15,000+ Notices Sent</p><p className="text-slate-500 text-sm">Across all states in India</p></div></div>
                  <div className="flex items-start gap-3"><div className="bg-blue-100 p-2 rounded-lg text-blue-600 shrink-0"><Scale className="w-5 h-5" /></div><div><p className="font-semibold text-slate-900 text-sm">Drafted by Advocates</p><p className="text-slate-500 text-sm">Valid in all Consumer Courts</p></div></div>
                  <div className="flex items-start gap-3"><div className="bg-amber-100 p-2 rounded-lg text-amber-600 shrink-0"><AlertTriangle className="w-5 h-5" /></div><div><p className="font-semibold text-slate-900 text-sm">65% Settlement Rate</p><p className="text-slate-500 text-sm">Without going to court</p></div></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-6 md:px-8 py-16 space-y-12">

          <div className="bg-red-50 border-l-4 border-red-500 rounded-r-xl p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-red-500 shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-red-900 mb-2">IMPORTANT — NoBroker&apos;s Correct Legal Entity for Consumer Notices</h2>
                <p className="text-red-800/80 leading-relaxed">The correct legal entity is <strong>Htek Spaces Pvt. Ltd.</strong> — the registered company that operates the NoBroker platform. Do not address notices to &quot;NoBroker&quot; alone. Use the registered company name to ensure your notice is legally valid.</p>
              </div>
            </div>
          </div>

          <section className="scroll-mt-24" id="address">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Htek Spaces Pvt. Ltd. (NoBroker) — Registered Address for Legal Notice</h2>
            <p className="text-slate-600 text-lg mb-8">Send your legal notice via Speed Post with Acknowledgment Due to:</p>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex items-center gap-3"><Building2 className="text-slate-500" /><h3 className="font-bold text-xl text-slate-800">Legal Entity Details</h3></div>
              <div className="divide-y divide-slate-100">
                <div className="p-6 grid sm:grid-cols-[200px_1fr] gap-4"><div className="font-semibold text-slate-500 flex items-center gap-2"><FileText className="w-4 h-4" /> Legal Entity Name</div><div className="font-bold text-slate-900 text-lg">Htek Spaces Pvt. Ltd. (NoBroker)</div></div>
                <div className="p-6 grid sm:grid-cols-[200px_1fr] gap-4 bg-slate-50/50"><div className="font-semibold text-slate-500 flex items-center gap-2"><Hash className="w-4 h-4" /> CIN</div><div className="font-mono text-slate-700 bg-white border border-slate-200 px-3 py-1 rounded inline-block w-max">U72900KA2013PTC067281</div></div>
                <div className="p-6 grid sm:grid-cols-[200px_1fr] gap-4"><div className="font-semibold text-slate-500 flex flex-col gap-1 mt-1"><span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Registered Office</span><span className="text-xs font-normal ml-6">(For Legal Notice)</span></div><div className="text-slate-700 leading-relaxed font-medium">6th Floor, Leela Galleria, 5th Block, Koramangala, Bangalore – 560 095, Karnataka</div></div>
                <div className="p-6 grid sm:grid-cols-2 gap-6 bg-white">
                  <div className="space-y-4"><div className="font-semibold text-slate-500 flex items-center gap-2"><Mail className="w-4 h-4" /> Email</div><div className="bg-slate-50 p-3 rounded-lg border border-slate-100"><div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Customer Grievance</div><span className="text-primary font-medium break-all">support@nobroker.in</span></div></div>
                  <div className="space-y-4"><div className="font-semibold text-slate-500 flex items-center gap-2"><Phone className="w-4 h-4" /> Telephone</div><div className="bg-slate-50 p-3 rounded-lg border border-slate-100"><div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Support Helpline</div><div className="text-slate-900 font-bold text-lg">080-4660-4660</div></div></div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-6"><HelpCircle className="w-8 h-8 text-primary" /><h2 className="text-2xl font-bold text-slate-900">When Can You Send a Legal Notice to NoBroker?</h2></div>
            <p className="text-slate-600 text-lg mb-6">NoBroker operates as a property listing and rental platform. Your consumer rights apply in these situations:</p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                "Security deposit held in NoBroker escrow not returned after tenancy",
                "Subscription fee paid for premium plan but owner contacts not provided",
                "Property listed on NoBroker found to be fake or unavailable at site visit",
                "NoBroker Pay-Rent service charged but payment not forwarded to landlord",
                "Packers & movers booked via NoBroker caused damage without compensation",
                "Rental agreement services paid for but documentation not completed",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium leading-snug">{item}</span>
                </div>
              ))}
            </div>
            <div className="bg-blue-50 text-blue-800 p-4 rounded-lg font-medium shadow-inner">
              <span className="font-bold uppercase tracking-wider text-xs bg-blue-200 text-blue-900 px-2 py-1 rounded inline-block mb-2 mr-2">Note</span>
              Attempt resolution through NoBroker&apos;s support first. If 15–30 days pass without resolution, a legal notice is appropriate.
            </div>
          </section>

          <DidYouKnowBlock title="Did you know?" text="NoBroker and similar property platforms that collect security deposits on behalf of landlords act as intermediaries handling consumer money. Under Consumer Protection Act 2019, they are directly liable for deficiency of service in handling that money — including any delays or wrongful withholding." />

          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-8 pt-4">Your Escalation Roadmap</h2>
            <div className="relative border-l-2 border-slate-200 ml-4 md:ml-6 space-y-10 pb-4">
              {[
                { step: 1, title: "Contact NoBroker Customer Support", desc: "Raise a ticket via the NoBroker app. Note all ticket IDs and screenshot all conversations.", highlight: false },
                { step: 2, title: "Escalate to NoBroker Grievance Officer", desc: "Email support@nobroker.in with a detailed complaint, supporting evidence, and all prior ticket references.", highlight: false },
                { step: 3, title: "Send a Legal Notice", desc: "A formal legal notice from a licensed advocate to Htek Spaces Pvt. Ltd. directly reaches their legal team.", highlight: true },
                { step: 4, title: "File Before Consumer Court", desc: "If the notice is unanswered, file before the District Consumer CDRC in your city. Courts have held property portals liable for fake listings and payment disputes.", highlight: false },
              ].map(({ step, title, desc, highlight }) => (
                <div key={step} className="relative pl-8 md:pl-10">
                  <div className={`absolute -left-[17px] top-0 w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-sm border-2 ${highlight ? "bg-primary border-white text-primary-foreground shadow ring-2 ring-primary/20" : "bg-white border-slate-300 text-slate-500"}`}>{step}</div>
                  <h3 className={`text-xl font-bold mb-2 ${highlight ? "text-primary" : "text-slate-900"}`}>{title}</h3>
                  <p className="text-slate-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-8 pt-4 flex items-center gap-3"><ShieldCheck className="w-8 h-8 text-primary" /> Laws That Protect You</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Consumer Protection Act, 2019", desc: "Primary protection for deficiency of service, fake listings, and unfair trade practices." },
                { title: "E-Commerce Rules, 2020", desc: "Online property platforms must display accurate listings and maintain a grievance officer." },
                { title: "IT Act, 2000", desc: "NoBroker must maintain a grievance officer who responds within 15 days." },
                { title: "Indian Contract Act, 1872", desc: "Payment for subscription services or deposit escrow creates binding contractual obligations." },
              ].map((law, i) => (
                <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-primary mb-3">{law.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{law.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 rounded-3xl p-8 shadow-sm">
            <div className="inline-block bg-emerald-100 text-emerald-800 font-bold px-3 py-1 rounded-full text-sm mb-4">Real Success Story</div>
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-emerald-50">
              <p className="text-slate-700 text-lg leading-relaxed mb-6 italic">&ldquo;Siddharth Menon from Bangalore paid ₹15,000 for a NoBroker premium subscription to find a flat. Despite three months of searching, every owner contact shared turned out to be unavailable or irrelevant. Refund requests were ignored for 6 weeks. A vakiltech legal notice resulted in a full ₹15,000 refund within 10 days.&rdquo;</p>
              <div className="text-xs text-slate-400 pt-4 border-t border-slate-100">Note: Representative example. Individual results may vary.</div>
            </div>
          </section>

          <section className="bg-primary rounded-3xl p-10 text-center shadow-lg my-16">
            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">NoBroker Owes You. Let&apos;s Make It Official.</h2>
              <p className="text-lg text-primary-foreground/90">Drafted by licensed advocates. Delivered in 24 hours.</p>
              <BrandFormCTA service="legal-notice" variant="ghost-white">Send Legal Notice to NoBroker — ₹1,499</BrandFormCTA>
            </div>
          </section>

          <section className="pt-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Related Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { href: "/send-legal-notice/housing-com", title: "Legal Notice to Housing.com", desc: "Fake listings or refund disputes with Housing.com." },
                { href: "/send-legal-notice/legal-notice-for-property-possession", title: "Property Possession Notice", desc: "Legal notice to builder or seller for possession delay." },
                { href: "/send-legal-notice/consumer-complaint-legal-notice", title: "Consumer Complaint Notice", desc: "For any company refusing refunds or ignoring complaints." },
              ].map((card, i) => (
                <Link key={i} href={card.href} className="block group">
                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 h-full shadow-lg hover:shadow-xl hover:border-slate-700 transition-all duration-300 flex flex-col">
                    <h3 className="font-bold text-lg text-white mb-3">{card.title}</h3>
                    <p className="text-slate-400 text-sm flex-grow mb-6">{card.desc}</p>
                    <div className="text-white text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">See Details <ChevronRight className="w-4 h-4" /></div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>

        <TrustSignalsSection />
        {faqs.length > 0 && <FAQSection faqs={faqs} title="Frequently Asked Questions" />}
      </main>
    </>
  );
}
