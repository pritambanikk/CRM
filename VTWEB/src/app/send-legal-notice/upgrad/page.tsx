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
  title: "Send Legal Notice to upGrad — Course Refund & Fraud | vakiltech",
  description: "upGrad not refunding course fees or misrepresented the program? Send a legal notice for ₹1,499. Lawyer-drafted, legally binding.",
  keywords: ["upgrad legal notice", "upgrad refund complaint notice", "upgrad course fraud", "upgrad job guarantee legal notice"],
  alternates: {
    canonical: "https://vakiltech.in/send-legal-notice/upgrad",
  },
};

export default function UpgradLegalNoticePage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Legal Notice", href: "/send-legal-notice" },
    { label: "Send Legal Notice to upGrad", current: true },
  ];

  const faqs = [
    {
      question: "What is upGrad's registered address for a legal notice?",
      answer: "Send your legal notice to upGrad Education Private Limited at Nishuvi, 75, Dr. Annie Besant Road, Worli, Mumbai – 400 018, Maharashtra. Send via Speed Post with Acknowledgment Due.",
    },
    {
      question: "Can I send a legal notice to upGrad for not refunding course fees?",
      answer: "Yes. Under Consumer Protection Act 2019, if upGrad misrepresented the course, failed to deliver promised features, or denied a refund within the stated cooling-off period, you have a strong legal claim.",
    },
    {
      question: "upGrad promised job placement but I got no placement. Can I claim a refund?",
      answer: "Yes. If job placement or a salary guarantee was a material promise that induced you to enrol, failure to deliver is misrepresentation and breach of contract. A legal notice can demand a full or partial refund.",
    },
    {
      question: "I took a loan for an upGrad course. Can I still send a legal notice?",
      answer: "Yes. You can still send a legal notice to upGrad for misrepresentation or breach of contract. Separately, if the loan was arranged by upGrad with a third-party NBFC without proper disclosure, you may also have a complaint against the NBFC.",
    },
    {
      question: "How long does upGrad have to respond to a legal notice?",
      answer: "Typically 15 to 30 days as specified in the notice. If unresolved, you can file before the District Consumer Disputes Redressal Commission in your city.",
    },
    {
      question: "upGrad revoked my course access without reason. What can I do?",
      answer: "Revoking access to a paid course without valid reason is deficiency of service. Document the revocation with screenshots and send a legal notice demanding restoration of access or a full refund.",
    },
    {
      question: "What if upGrad ignores the legal notice?",
      answer: "You can file a complaint before the District Consumer CDRC. Courts have consistently ruled against ed-tech companies for misrepresentation of placement records and course quality.",
    },
    {
      question: "How much does vakiltech charge to send a legal notice to upGrad?",
      answer: "₹1,499 all-inclusive — advocate consultation, custom drafting, revisions, and Speed Post dispatch with Acknowledgment Due.",
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", name: "vakiltech — Send Legal Notice to upGrad", description: "Send a lawyer-drafted legal notice to upGrad Education Private Limited for course refunds, misrepresentation, and placement fraud. ₹1,499.", url: "https://vakiltech.in/send-legal-notice/upgrad", areaServed: { "@type": "Country", name: "India" }, provider: { "@type": "Organization", name: "vakiltech", url: "https://vakiltech.in" }, offers: { "@type": "Offer", price: "1499", priceCurrency: "INR" } }) }} />

      <main className="min-h-screen bg-neutral-50/50">
        <section className="relative pt-6 pb-16 md:pt-10 md:pb-24 bg-gradient-to-br from-primary/5 via-primary/10 to-transparent overflow-hidden border-b border-primary/10">
          <div className="relative max-w-5xl mx-auto px-6 md:px-8 flex flex-col gap-8 md:gap-10">
            <div className="z-10 mt-2 mb-2"><Breadcrumb items={breadcrumbItems} /></div>
            <div className="grid md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-8 space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 bg-white border border-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
                    <AlertCircle className="w-4 h-4" /> Ed-Tech Consumer Rights
                  </div>
                  <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-[1.15] tracking-tight">
                    Send Legal Notice to upGrad
                  </h1>
                  <p className="text-xl text-slate-600 leading-relaxed font-medium max-w-3xl">
                    upGrad promised a career transformation — and didn&apos;t deliver. Course fee not refunded, job guarantee unfulfilled, or certificate still pending? A formal legal notice is your strongest legal weapon.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <BrandFormCTA service="legal-notice">Send Legal Notice to upGrad — ₹1,499</BrandFormCTA>
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
                <h2 className="text-xl font-bold text-red-900 mb-2">IMPORTANT — upGrad&apos;s Correct Legal Entity for Consumer Notices</h2>
                <p className="text-red-800/80 leading-relaxed">The correct legal entity is <strong>upGrad Education Private Limited</strong>. Do not address notices to &quot;upGrad&quot; or &quot;UpGrad&quot; alone — use the full registered company name to ensure your notice is legally valid and reaches the correct party.</p>
              </div>
            </div>
          </div>

          <section className="scroll-mt-24" id="address">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">upGrad Education Private Limited — Registered Address for Legal Notice</h2>
            <p className="text-slate-600 text-lg mb-8">Send your legal notice via Speed Post with Acknowledgment Due to:</p>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex items-center gap-3"><Building2 className="text-slate-500" /><h3 className="font-bold text-xl text-slate-800">Legal Entity Details</h3></div>
              <div className="divide-y divide-slate-100">
                <div className="p-6 grid sm:grid-cols-[200px_1fr] gap-4"><div className="font-semibold text-slate-500 flex items-center gap-2"><FileText className="w-4 h-4" /> Legal Entity Name</div><div className="font-bold text-slate-900 text-lg">upGrad Education Private Limited</div></div>
                <div className="p-6 grid sm:grid-cols-[200px_1fr] gap-4 bg-slate-50/50"><div className="font-semibold text-slate-500 flex items-center gap-2"><Hash className="w-4 h-4" /> CIN</div><div className="font-mono text-slate-700 bg-white border border-slate-200 px-3 py-1 rounded inline-block w-max">U80904MH2015PTC267119</div></div>
                <div className="p-6 grid sm:grid-cols-[200px_1fr] gap-4"><div className="font-semibold text-slate-500 flex flex-col gap-1 mt-1"><span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Registered Office</span><span className="text-xs font-normal ml-6">(For Legal Notice)</span></div><div className="text-slate-700 leading-relaxed font-medium">Nishuvi, 75, Dr. Annie Besant Road, Worli, Mumbai – 400 018, Maharashtra</div></div>
                <div className="p-6 grid sm:grid-cols-2 gap-6 bg-white">
                  <div className="space-y-4"><div className="font-semibold text-slate-500 flex items-center gap-2"><Mail className="w-4 h-4" /> Email</div><div className="bg-slate-50 p-3 rounded-lg border border-slate-100"><div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Student Grievance</div><span className="text-primary font-medium break-all">support@upgrad.com</span></div></div>
                  <div className="space-y-4"><div className="font-semibold text-slate-500 flex items-center gap-2"><Phone className="w-4 h-4" /> Telephone</div><div className="bg-slate-50 p-3 rounded-lg border border-slate-100"><div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Student Support</div><div className="text-slate-900 font-bold text-lg">1800-210-2120</div></div></div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-6"><HelpCircle className="w-8 h-8 text-primary" /><h2 className="text-2xl font-bold text-slate-900">When Can You Send a Legal Notice to upGrad?</h2></div>
            <p className="text-slate-600 text-lg mb-6">Disputes with upGrad often involve significant sums. You have strong legal grounds in these situations:</p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                "Course fee refund denied after cancellation within the cooling-off period",
                "Job placement guarantee not fulfilled as promised",
                "Course content significantly different from what was advertised",
                "Completion certificate not issued after course completion",
                "Course access revoked without valid reason",
                "NBFC loan arranged by upGrad without proper disclosure of terms",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium leading-snug">{item}</span>
                </div>
              ))}
            </div>
            <div className="bg-blue-50 text-blue-800 p-4 rounded-lg font-medium shadow-inner">
              <span className="font-bold uppercase tracking-wider text-xs bg-blue-200 text-blue-900 px-2 py-1 rounded inline-block mb-2 mr-2">Note</span>
              Attempt resolution through upGrad&apos;s student support first. If 15–30 days pass without resolution, a legal notice is appropriate and often triggers a quick settlement.
            </div>
          </section>

          <DidYouKnowBlock title="Did you know?" text="Under Consumer Protection Act 2019, promises made in sales calls and marketing materials are legally binding. If an upGrad sales representative verbally guaranteed a placement or salary hike that was not delivered, that constitutes misrepresentation — even if the written agreement contains a disclaimer." />

          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-8 pt-4">Your Escalation Roadmap</h2>
            <div className="relative border-l-2 border-slate-200 ml-4 md:ml-6 space-y-10 pb-4">
              {[
                { step: 1, title: "Contact upGrad Student Support", desc: "Raise a ticket via the upGrad platform. Note all ticket IDs and screenshot all responses.", highlight: false },
                { step: 2, title: "Escalate to Grievance Officer", desc: "Email support@upgrad.com with your complaint, enrollment details, and all prior correspondence.", highlight: false },
                { step: 3, title: "Send a Legal Notice", desc: "A lawyer-drafted legal notice to upGrad Education Private Limited's registered office triggers formal escalation to their legal team.", highlight: true },
                { step: 4, title: "File Before Consumer Court", desc: "If the notice is ignored, file before the District Consumer CDRC. Courts take a serious view of ed-tech misrepresentation cases.", highlight: false },
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
                { title: "Consumer Protection Act, 2019", desc: "Primary protection against misrepresentation, deficiency of service, and unfair trade practices." },
                { title: "IT Act, 2000", desc: "Requires upGrad to maintain a grievance officer who must respond within 15 days." },
                { title: "Indian Contract Act, 1872", desc: "Verbal promises and advertised guarantees are enforceable terms of contract." },
                { title: "E-Commerce Rules, 2020", desc: "Online platforms must disclose all material terms before purchase, including refund conditions." },
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
              <p className="text-slate-700 text-lg leading-relaxed mb-6 italic">&ldquo;Rohan Gupta from Delhi enrolled in an upGrad MBA programme for ₹3,20,000, partly financed by an NBFC loan arranged by upGrad. After 2 months, the course content proved significantly different from what was sold. upGrad refused to issue a refund citing their policy. A vakiltech legal notice citing misrepresentation under Consumer Protection Act led to a settlement of ₹2,40,000 within 18 days.&rdquo;</p>
              <div className="text-xs text-slate-400 pt-4 border-t border-slate-100">Note: Representative example. Individual results may vary.</div>
            </div>
          </section>

          <section className="bg-primary rounded-3xl p-10 text-center shadow-lg my-16">
            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">upGrad Owes You More Than Excuses.</h2>
              <p className="text-lg text-primary-foreground/90">Drafted by licensed advocates. Delivered in 24 hours.</p>
              <BrandFormCTA service="legal-notice" variant="ghost-white">Send Legal Notice to upGrad — ₹1,499</BrandFormCTA>
            </div>
          </section>

          <section className="pt-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Related Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { href: "/send-legal-notice/byjus", title: "Legal Notice to Byju's", desc: "Course fee refund or misrepresentation by Byju's." },
                { href: "/send-legal-notice/physics-wallah", title: "Legal Notice to Physics Wallah", desc: "Refund or batch cancellation dispute with Physics Wallah." },
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
