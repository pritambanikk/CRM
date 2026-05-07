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
  title: "Send Legal Notice to Air India — Flight & Refund Disputes | vakiltech",
  description: "Air India refund pending, flight delayed, or baggage missing? Send a legal notice to Air India for ₹1,499. Lawyer-drafted, fast dispatch.",
  keywords: ["legal notice air india", "air india refund legal notice", "air india complaint legal notice", "air india baggage claim notice"],
  alternates: {
    canonical: "https://vakiltech.in/send-legal-notice/air-india",
  },
};

export default function AirIndiaLegalNoticePage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Legal Notice", href: "/send-legal-notice" },
    { label: "Send Legal Notice to Air India", current: true },
  ];

  const faqs = [
    {
      question: "What is Air India's registered address for a legal notice?",
      answer: "Send your legal notice to Air India Limited at Airlines House, 113 Gurudwara Rakabganj Road, New Delhi – 110 001. Use Speed Post with Acknowledgment Due.",
    },
    {
      question: "Can I send a legal notice to Air India for a refund not processed?",
      answer: "Yes. Under Consumer Protection Act 2019 and DGCA guidelines, Air India must refund cancelled flights within 7 days (credit card) or 20 days (other payments). A legal notice formally demands the refund.",
    },
    {
      question: "How long does Air India have to respond to a legal notice?",
      answer: "Typically 15 to 30 days as specified in the notice. If unresolved, you can approach the District Consumer Disputes Redressal Commission or DGCA Air Sewa portal.",
    },
    {
      question: "Can I claim compensation for a delayed Air India flight?",
      answer: "Yes. DGCA rules mandate compensation and facilities (meals, hotel) for delays beyond certain thresholds. The Consumer Protection Act also allows claims for mental harassment caused by unreasonable delays.",
    },
    {
      question: "Is Air India a government company? Does that change my rights?",
      answer: "Air India is now privatised (owned by Tata Group). Your consumer rights under Consumer Protection Act 2019 apply fully, just as with any private airline.",
    },
    {
      question: "What if Air India lost or damaged my checked baggage?",
      answer: "You can claim compensation under the Carriage by Air Act 1972 and Consumer Protection Act. A legal notice triggers formal investigation and compensation procedures.",
    },
    {
      question: "What if Air India ignores the legal notice?",
      answer: "File before the District Consumer Disputes Redressal Commission (CDRC) or raise a complaint on the DGCA Air Sewa portal. Courts regularly award refunds plus compensation against airlines.",
    },
    {
      question: "How much does vakiltech charge to send a legal notice to Air India?",
      answer: "₹1,499 all-inclusive — advocate consultation, custom drafting, revisions, and Speed Post dispatch with Acknowledgment Due.",
    },
  ];

  return (
    <>
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "vakiltech — Send Legal Notice to Air India",
            description: "Send a lawyer-drafted legal notice to Air India Limited for flight refunds, delays, and baggage disputes. ₹1,499.",
            url: "https://vakiltech.in/send-legal-notice/air-india",
            areaServed: { "@type": "Country", name: "India" },
            provider: { "@type": "Organization", name: "vakiltech", url: "https://vakiltech.in" },
            offers: { "@type": "Offer", price: "1499", priceCurrency: "INR" },
          }),
        }}
      />

      <main className="min-h-screen bg-neutral-50/50">

        {/* Hero */}
        <section className="relative pt-6 pb-16 md:pt-10 md:pb-24 bg-gradient-to-br from-primary/5 via-primary/10 to-transparent overflow-hidden border-b border-primary/10">
          <div className="relative max-w-5xl mx-auto px-6 md:px-8 flex flex-col gap-8 md:gap-10">
            <div className="z-10 mt-2 mb-2"><Breadcrumb items={breadcrumbItems} /></div>
            <div className="grid md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-8 space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 bg-white border border-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
                    <AlertCircle className="w-4 h-4" /> Aviation Consumer Rights
                  </div>
                  <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-[1.15] tracking-tight">
                    Send Legal Notice to Air India
                  </h1>
                  <p className="text-xl text-slate-600 leading-relaxed font-medium max-w-3xl">
                    Air India delayed your flight for hours, lost your bags, or kept your refund pending for months? A lawyer-drafted legal notice is the most effective way to force a resolution.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <BrandFormCTA service="legal-notice">Send Legal Notice to Air India — ₹1,499</BrandFormCTA>
                  <BrandFormCTA service="consultation" variant="outline" showIcon={false}>Talk to a Verified Advocate — ₹299</BrandFormCTA>
                </div>
              </div>
              <div className="md:col-span-4 bg-white rounded-2xl p-6 border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col gap-6">
                <h3 className="font-bold text-slate-900 pb-2 border-b border-slate-100">Why vakiltech?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-emerald-100 p-2 rounded-lg text-emerald-600 shrink-0"><CheckCircle2 className="w-5 h-5" /></div>
                    <div><p className="font-semibold text-slate-900 text-sm">15,000+ Notices Sent</p><p className="text-slate-500 text-sm">Across all states in India</p></div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-lg text-blue-600 shrink-0"><Scale className="w-5 h-5" /></div>
                    <div><p className="font-semibold text-slate-900 text-sm">Drafted by Advocates</p><p className="text-slate-500 text-sm">Valid in all Consumer Courts</p></div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-amber-100 p-2 rounded-lg text-amber-600 shrink-0"><AlertTriangle className="w-5 h-5" /></div>
                    <div><p className="font-semibold text-slate-900 text-sm">65% Settlement Rate</p><p className="text-slate-500 text-sm">Without going to court</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-6 md:px-8 py-16 space-y-12">

          {/* Warning Box */}
          <div className="bg-red-50 border-l-4 border-red-500 rounded-r-xl p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-red-500 shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-red-900 mb-2">IMPORTANT — Air India&apos;s Correct Legal Entity for Consumer Notices</h2>
                <p className="text-red-800/80 leading-relaxed">The correct legal entity is <strong>Air India Limited</strong> (CIN U62200DL2021PLC385425), now owned by Tata Sons. Do not address notices to &quot;Tata Airlines&quot; or the older government entity. Use the registered company name for legal validity.</p>
              </div>
            </div>
          </div>

          {/* Registered Address */}
          <section className="scroll-mt-24" id="address">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Air India Limited — Registered Address for Legal Notice</h2>
            <p className="text-slate-600 text-lg mb-8">Send your legal notice via Speed Post with Acknowledgment Due to:</p>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex items-center gap-3">
                <Building2 className="text-slate-500" />
                <h3 className="font-bold text-xl text-slate-800">Legal Entity Details</h3>
              </div>
              <div className="divide-y divide-slate-100">
                <div className="p-6 grid sm:grid-cols-[200px_1fr] gap-4">
                  <div className="font-semibold text-slate-500 flex items-center gap-2"><FileText className="w-4 h-4" /> Legal Entity Name</div>
                  <div className="font-bold text-slate-900 text-lg">Air India Limited</div>
                </div>
                <div className="p-6 grid sm:grid-cols-[200px_1fr] gap-4 bg-slate-50/50">
                  <div className="font-semibold text-slate-500 flex items-center gap-2"><Hash className="w-4 h-4" /> CIN</div>
                  <div className="font-mono text-slate-700 bg-white border border-slate-200 px-3 py-1 rounded inline-block w-max">U62200DL2021PLC385425</div>
                </div>
                <div className="p-6 grid sm:grid-cols-[200px_1fr] gap-4">
                  <div className="font-semibold text-slate-500 flex flex-col gap-1 mt-1">
                    <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Registered Office</span>
                    <span className="text-xs font-normal ml-6">(For Legal Notice)</span>
                  </div>
                  <div className="text-slate-700 leading-relaxed font-medium">Airlines House, 113 Gurudwara Rakabganj Road, New Delhi – 110 001</div>
                </div>
                <div className="p-6 grid sm:grid-cols-2 gap-6 bg-white">
                  <div className="space-y-4">
                    <div className="font-semibold text-slate-500 flex items-center gap-2"><Mail className="w-4 h-4" /> Email</div>
                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Customer Grievance</div>
                      <span className="text-primary font-medium break-all">customer.relations@airindia.com</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="font-semibold text-slate-500 flex items-center gap-2"><Phone className="w-4 h-4" /> Telephone</div>
                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Customer Support</div>
                      <div className="text-slate-900 font-bold text-lg">1860-233-1407</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* When to Send */}
          <section className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <HelpCircle className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-bold text-slate-900">When Can You Send a Legal Notice to Air India?</h2>
            </div>
            <p className="text-slate-600 text-lg mb-6">Air India disputes are unfortunately common. You have strong legal grounds in any of these situations:</p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                "Refund not processed after flight cancellation",
                "Significant flight delay without proper compensation",
                "Checked baggage lost, delayed, or damaged",
                "Denied boarding despite a confirmed ticket",
                "Incorrect fare charged or double billing",
                "Upgrade booked but not delivered",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium leading-snug">{item}</span>
                </div>
              ))}
            </div>
            <div className="bg-blue-50 text-blue-800 p-4 rounded-lg font-medium shadow-inner">
              <span className="font-bold uppercase tracking-wider text-xs bg-blue-200 text-blue-900 px-2 py-1 rounded inline-block mb-2 mr-2">Note</span>
              Attempt resolution through Air India&apos;s grievance portal first. If 15–30 days pass without a satisfactory response, a legal notice is appropriate.
            </div>
          </section>

          <DidYouKnowBlock
            title="Did you know?"
            text="Under DGCA rules, Air India must provide meals and refreshments for domestic flight delays over 2 hours, and hotel accommodation for delays over 6 hours. If denied these facilities, you can claim compensation through the Consumer Protection Act 2019."
          />

          {/* Escalation Steps */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-8 pt-4">Your Escalation Roadmap</h2>
            <div className="relative border-l-2 border-slate-200 ml-4 md:ml-6 space-y-10 pb-4">
              {[
                { step: 1, title: "Contact Air India Customer Support", desc: "Call 1860-233-1407 or use the Air India website. Record all ticket IDs and screenshot all communications.", highlight: false },
                { step: 2, title: "Escalate to Nodal Officer / Grievance Officer", desc: "Email customer.relations@airindia.com with your complaint, booking reference, and all prior communications.", highlight: false },
                { step: 3, title: "Send a Legal Notice", desc: "A formal legal notice through a licensed advocate reaches Air India's legal team directly and demands resolution within a fixed timeframe.", highlight: true },
                { step: 4, title: "File Before Consumer Court / DGCA", desc: "If the notice is unanswered, file before the District Consumer CDRC or the DGCA Air Sewa portal for airline grievances.", highlight: false },
              ].map(({ step, title, desc, highlight }) => (
                <div key={step} className="relative pl-8 md:pl-10">
                  <div className={`absolute -left-[17px] top-0 w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-sm border-2 ${highlight ? "bg-primary border-white text-primary-foreground shadow ring-2 ring-primary/20" : "bg-white border-slate-300 text-slate-500"}`}>{step}</div>
                  <h3 className={`text-xl font-bold mb-2 ${highlight ? "text-primary" : "text-slate-900"}`}>{title}</h3>
                  <p className="text-slate-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Laws */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-8 pt-4 flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-primary" /> Laws That Protect You
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Consumer Protection Act, 2019", desc: "Primary legislation for deficiency of service claims against airlines." },
                { title: "DGCA Civil Aviation Requirements", desc: "Specifies mandatory refunds, delay compensation, and passenger rights." },
                { title: "Carriage by Air Act, 1972", desc: "Governs compensation for lost, damaged, or delayed baggage." },
                { title: "IT Act, 2000", desc: "Requires Air India's grievance officer to respond within 15 days." },
              ].map((law, i) => (
                <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-primary mb-3">{law.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{law.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Success Story */}
          <section className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 rounded-3xl p-8 shadow-sm">
            <div className="inline-block bg-emerald-100 text-emerald-800 font-bold px-3 py-1 rounded-full text-sm mb-4">Real Success Story</div>
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-emerald-50">
              <p className="text-slate-700 text-lg leading-relaxed mb-6 italic">&ldquo;Rahul Mehta from Mumbai had his Air India international flight cancelled due to operational reasons. The ₹42,000 refund was pending for over 45 days. After two weeks of ignored emails, vakiltech sent a legal notice to Air India&apos;s registered address. The full refund was credited within 10 days of the notice being delivered.&rdquo;</p>
              <div className="text-xs text-slate-400 pt-4 border-t border-slate-100">Note: Representative example based on typical outcomes. Individual results may vary.</div>
            </div>
          </section>

          {/* Mid-Page CTA */}
          <section className="bg-primary rounded-3xl p-10 text-center shadow-lg relative overflow-hidden my-16">
            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">Stop Waiting. Take Legal Action Today.</h2>
              <p className="text-lg text-primary-foreground/90">Drafted by licensed advocates. Delivered to Air India in 24 hours.</p>
              <BrandFormCTA service="legal-notice" variant="ghost-white">Send Legal Notice to Air India — ₹1,499</BrandFormCTA>
            </div>
          </section>

          {/* Related Services */}
          <section className="pt-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Related Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { href: "/send-legal-notice/indigo", title: "Legal Notice to IndiGo", desc: "Flight refund, cancellation, or baggage dispute with IndiGo." },
                { href: "/send-legal-notice/makemytrip", title: "Legal Notice to MakeMyTrip", desc: "Booking fraud or refund disputes with MakeMyTrip." },
                { href: "/send-legal-notice/consumer-complaint-legal-notice", title: "Consumer Complaint Notice", desc: "For any company refusing your refund or ignoring complaints." },
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
