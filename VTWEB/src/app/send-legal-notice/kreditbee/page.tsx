import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { TrustSignalsSection } from "@/components/features/homepage/trust-signals";
import { FAQSection } from "@/components/shared/faq-section";
import { DidYouKnowBlock } from "@/components/shared/did-you-know";
import BrandFormCTA from "@/components/shared/brand-form-cta";
import Link from "next/link";
import {
  AlertTriangle, MapPin, Mail, Building2,
  Phone, Scale, FileText, CheckCircle2, ChevronRight, HelpCircle, AlertCircle, Hash, ShieldCheck
} from "lucide-react";

export const metadata: Metadata = {
  title: "Send Legal Notice to KreditBee — Stop Loan Harassment | vakiltech",
  description: "KreditBee agents calling repeatedly or charging hidden fees? Send a legal notice to KreditBee for ₹1,499. Legally stop harassment and demand redress.",
  keywords: ["kreditbee legal notice", "kreditbee harassment complaint", "legal notice kreditbee loan", "kreditbee recovery agent complaint", "kreditbee hidden charges legal notice", "kreditbee finnovation legal notice"],
  alternates: {
    canonical: "https://vakiltech.in/send-legal-notice/kreditbee",
  },
};

export default function KreditBeeLegalNoticePage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Legal Notice", href: "/send-legal-notice" },
    { label: "Send Legal Notice to KreditBee", current: true },
  ];

  const faqs = [
    {
      question: "What is KreditBee's registered address for sending a legal notice?",
      answer: "Send your notice to Finnovation Tech Solutions Private Limited (KreditBee), 4th Floor, Salarpuria Towers-I, 7th Block, Koramangala, Bangalore – 560 095, Karnataka.",
    },
    {
      question: "KreditBee agents are calling me repeatedly — can I send a legal notice to stop them?",
      answer: "Yes. RBI guidelines prohibit recovery calls before 8 AM and after 7 PM, abusive language, and excessive call frequency. Instant loan app recovery teams frequently violate these rules. A legal notice citing RBI's guidelines and the IT Act, 2000 puts KreditBee on formal notice to immediately cease illegal recovery practices.",
    },
    {
      question: "KreditBee charged hidden processing fees not mentioned in the loan agreement — what can I do?",
      answer: "This is a violation of RBI's Fair Practices Code and the Consumer Protection Act, 2019. Any fee not clearly disclosed before disbursal is unauthorised. A legal notice can demand a full refund of the undisclosed charges.",
    },
    {
      question: "My KreditBee loan was rejected after my KYC was uploaded — but they kept my documents. What should I do?",
      answer: "Retention of KYC data after a rejected application without consent raises data privacy concerns under the IT Act, 2000, and the Digital Personal Data Protection Act, 2023. A legal notice demanding deletion of your data and clarification on its use is appropriate.",
    },
    {
      question: "KreditBee sent me a legal notice for non-payment — how should I respond?",
      answer: "Do not ignore it. You have 15–30 days to respond. A response through vakiltech's advocate can dispute the claimed amount, raise your grievances (harassment, undisclosed charges), and set the tone for any further proceedings. Contact us for a consultation.",
    },
    {
      question: "How much does it cost to send a legal notice to KreditBee through vakiltech?",
      answer: "vakiltech charges ₹1,499 all-inclusive — advocate consultation, custom drafting, unlimited revisions, and Speed Post dispatch with Acknowledgment Due to KreditBee's registered office in Bangalore.",
    },
  ];

  const faqSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  });

  const serviceSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    name: "vakiltech — Send Legal Notice to KreditBee",
    description: "Send a lawyer-drafted legal notice to KreditBee (Finnovation Tech Solutions Pvt Ltd) to stop recovery harassment and dispute hidden charges. ₹1,499.",
    url: "https://vakiltech.in/send-legal-notice/kreditbee",
    areaServed: { "@type": "Country", name: "India" },
    provider: { "@type": "Organization", name: "vakiltech", url: "https://vakiltech.in" },
    offers: { "@type": "Offer", price: "1499", priceCurrency: "INR" },
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serviceSchema }} />

      <main className="min-h-screen bg-neutral-50/50">

        <section className="relative pt-6 pb-16 md:pt-10 md:pb-24 bg-gradient-to-br from-primary/5 via-primary/10 to-transparent overflow-hidden border-b border-primary/10">
          <div className="relative max-w-5xl mx-auto px-6 md:px-8 flex flex-col gap-8 md:gap-10">
            <div className="z-10 mt-2 mb-2"><Breadcrumb items={breadcrumbItems} /></div>
            <div className="grid md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-8 space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 bg-white border border-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
                    <AlertCircle className="w-4 h-4" /> Legal Notice Service
                  </div>
                  <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-[1.15] tracking-tight">
                    Send Legal Notice to KreditBee
                  </h1>
                  <p className="text-xl text-slate-600 leading-relaxed font-medium max-w-3xl">
                    KreditBee targets young professionals and students who need quick credit. When repayment
                    becomes difficult, their recovery tactics can turn aggressive and unlawful. You are not
                    alone — and you are not powerless. A legal notice is calm, legal, and effective.
                    It stops harassment and forces KreditBee to address your grievance formally.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <BrandFormCTA service="legal-notice">Send Legal Notice to KreditBee — ₹1,499</BrandFormCTA>
                  <BrandFormCTA service="consultation" variant="outline" showIcon={false}>Talk to a Verified Advocate — ₹299</BrandFormCTA>
                </div>
              </div>
              <div className="md:col-span-4 bg-white rounded-2xl p-6 border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col gap-6">
                <h3 className="font-bold text-slate-900 pb-2 border-b border-slate-100">Why vakiltech?</h3>
                <div className="space-y-4">
                  {[
                    { icon: <CheckCircle2 className="w-5 h-5" />, bg: "bg-emerald-100 text-emerald-600", title: "15,000+ Notices Sent", sub: "Across all states in India" },
                    { icon: <Scale className="w-5 h-5" />, bg: "bg-blue-100 text-blue-600", title: "Drafted by Advocates", sub: "Valid in all Consumer Courts" },
                    { icon: <AlertTriangle className="w-5 h-5" />, bg: "bg-amber-100 text-amber-600", title: "65% Settlement Rate", sub: "Without going to court" },
                  ].map(({ icon, bg, title, sub }) => (
                    <div key={title} className="flex items-start gap-3">
                      <div className={`${bg} p-2 rounded-lg shrink-0`}>{icon}</div>
                      <div><p className="font-semibold text-slate-900 text-sm">{title}</p><p className="text-slate-500 text-sm">{sub}</p></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-6 md:px-8 py-16 space-y-12">

          <section className="scroll-mt-24" id="address">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">KreditBee (Finnovation Tech Solutions Pvt Ltd) — Registered Address</h2>
            <p className="text-slate-600 text-lg mb-8">Send your legal notice via Speed Post with Acknowledgment Due to:</p>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex items-center gap-3">
                <Building2 className="text-slate-500" /><h3 className="font-bold text-xl text-slate-800">Legal Entity Details</h3>
              </div>
              <div className="divide-y divide-slate-100">
                <div className="p-6 grid sm:grid-cols-[200px_1fr] gap-4">
                  <div className="font-semibold text-slate-500 flex items-center gap-2"><FileText className="w-4 h-4" /> Legal Entity Name</div>
                  <div className="font-bold text-slate-900 text-lg">Finnovation Tech Solutions Private Limited</div>
                </div>
                <div className="p-6 grid sm:grid-cols-[200px_1fr] gap-4 bg-slate-50/50">
                  <div className="font-semibold text-slate-500 flex items-center gap-2"><Hash className="w-4 h-4" /> Brand Name</div>
                  <div className="text-slate-700 bg-white border border-slate-200 px-3 py-1 rounded inline-block w-max font-medium">KreditBee</div>
                </div>
                <div className="p-6 grid sm:grid-cols-[200px_1fr] gap-4">
                  <div className="font-semibold text-slate-500 flex flex-col gap-1 mt-1">
                    <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Registered Office</span>
                    <span className="text-xs font-normal ml-6">(For Legal Notice)</span>
                  </div>
                  <div className="text-slate-700 leading-relaxed font-medium">4th Floor, Salarpuria Towers-I, 7th Block,<br />Koramangala, Bangalore – 560 095, Karnataka</div>
                </div>
                <div className="p-6 grid sm:grid-cols-2 gap-6 bg-white">
                  <div className="space-y-4">
                    <div className="font-semibold text-slate-500 flex items-center gap-2"><Mail className="w-4 h-4" /> Email</div>
                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Support</div>
                      <span className="text-primary font-medium break-all">support@kreditbee.in</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="font-semibold text-slate-500 flex items-center gap-2"><Phone className="w-4 h-4" /> Helpline</div>
                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 h-[calc(100%-2rem)] flex flex-col justify-center">
                      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Customer Care</div>
                      <div className="text-slate-900 font-bold text-lg">080-44292200</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <HelpCircle className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-bold text-slate-900">When Can You Send a Legal Notice to KreditBee?</h2>
            </div>
            <p className="text-slate-600 text-lg mb-6">Instant loan apps rely on aggressive recovery to maintain their NPAs. When those tactics cross legal lines, you have the right to push back — firmly and legally. Common grounds include:</p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                "Repeated calls before 8 AM or after 7 PM — illegal under RBI guidelines",
                "Threats of legal action or arrest — illegal if used as a scare tactic before any court order",
                "Contacting your family, friends, or employer about your loan",
                "Hidden processing fees or interest rate higher than disclosed at disbursal",
                "Penalty charges added without being mentioned in the loan agreement",
                "KYC data retained or misused after loan rejection",
                "Account marked overdue despite payment being made on time",
                "Loan amount disbursed less than what was approved",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium leading-snug">{item}</span>
                </div>
              ))}
            </div>
            <div className="bg-blue-50 text-blue-800 p-4 rounded-lg font-medium shadow-inner">
              <span className="font-bold uppercase tracking-wider text-xs bg-blue-200 text-blue-900 px-2 py-1 rounded inline-block mb-2 mr-2">Note</span>
              For recovery harassment, you can send a legal notice immediately. You do not need to wait for an internal complaint to be resolved first. Harassment is an emergency — treat it as one.
            </div>
          </section>

          <DidYouKnowBlock
            title="Did you know?"
            text="Instant loan apps like KreditBee often partner with RBI-licensed NBFCs to disburse loans. Your legal notice should be addressed to both the app company (Finnovation Tech Solutions) and the NBFC partner listed in your loan agreement — this maximises the legal pressure and often triggers the fastest response."
          />

          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-8 pt-4 flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-primary" /> Laws That Protect You Against KreditBee
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Consumer Protection Act, 2019", desc: "Fintech lending services are covered under consumer law. Harassment, hidden charges, and data misuse are actionable grievances." },
                { title: "RBI Fair Practices Code for NBFCs", desc: "KreditBee's NBFC partner must comply with RBI's Fair Practices Code governing recovery conduct and transparent pricing." },
                { title: "IT Act, 2000 & DPDP Act, 2023", desc: "Unauthorised use of your phone contacts or KYC data is a violation of data privacy laws. A legal notice can demand deletion and compensation." },
                { title: "Indian Contract Act, 1872", desc: "Any charge not disclosed in your loan agreement is an unauthorised addition to the contract — giving you the right to a refund." },
              ].map(({ title, desc }) => (
                <div key={title} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
                  <p className="text-slate-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-primary rounded-3xl p-10 text-center shadow-lg my-16">
            <div className="max-w-2xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">You Have Rights. Use Them. Send KreditBee a Legal Notice.</h2>
              <p className="text-lg text-primary-foreground/90">Drafted by licensed advocates. Delivered in 24 hours. Calm, firm, legally binding.</p>
              <BrandFormCTA service="legal-notice" variant="ghost-white">Send Legal Notice to KreditBee — ₹1,499</BrandFormCTA>
            </div>
          </section>

          <section className="pt-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Related Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { href: "/send-legal-notice", title: "All Legal Notice Services", desc: "Browse legal notices for every type of dispute — finance, consumer, employment." },
                { href: "/blogs/what-is-a-legal-notice-in-india", title: "What is a Legal Notice?", desc: "Complete guide to legal notices in India — what they do and when to send one." },
                { href: "/send-legal-notice/consumer-complaint-legal-notice", title: "Consumer Complaint Notice", desc: "Send a legal notice to any company for consumer disputes." },
              ].map(({ href, title, desc }) => (
                <Link key={href} href={href} className="block group">
                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 h-full shadow-lg hover:shadow-xl hover:border-slate-700 transition-all duration-300 flex flex-col">
                    <h3 className="font-bold text-lg text-white mb-3">{title}</h3>
                    <p className="text-slate-400 text-sm flex-grow mb-6">{desc}</p>
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
