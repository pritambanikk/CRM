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
  title: "Send Legal Notice to CASHe — Loan App Complaint | vakiltech",
  description: "CASHe overcharging, harassment by recovery agents, or illegal contact-list calls? Send a legal notice for ₹1,499. Lawyer-drafted and legally binding.",
  keywords: ["cashe app legal notice", "cashe loan harassment", "cashe complaint notice", "cashe recovery agent complaint", "cashe overcharging legal notice", "bhanix finance legal notice"],
  alternates: {
    canonical: "https://vakiltech.in/send-legal-notice/cashe",
  },
};

export default function CASHeLegalNoticePage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Legal Notice", href: "/send-legal-notice" },
    { label: "Send Legal Notice to CASHe", current: true },
  ];

  const faqs = [
    {
      question: "What is CASHe's registered address for sending a legal notice?",
      answer: "Send your notice to Bhanix Finance and Investment Limited (CASHe), 901, Lodha Supremus, Saki Vihar Road, Powai, Mumbai – 400 072, Maharashtra.",
    },
    {
      question: "Can I send a legal notice to CASHe for recovery agent harassment?",
      answer: "Yes. CASHe is operated by Bhanix Finance and Investment Limited, an RBI-registered NBFC. All RBI guidelines on recovery agent conduct apply to CASHe — including prohibitions on calls outside permitted hours, abusive language, and contacting third parties. A legal notice citing these violations compels their compliance team to act.",
    },
    {
      question: "CASHe charged me a processing fee that was not mentioned when I applied — can I get a refund?",
      answer: "Yes. Any fee not disclosed clearly before loan disbursal is unauthorised under RBI's Fair Practices Code. A legal notice can demand a full refund of the undisclosed fee and a corrected loan summary.",
    },
    {
      question: "My CASHe loan shows a different outstanding balance than what I calculated — what can I do?",
      answer: "CASHe must provide a clear loan account statement on request. If the balance does not match your records, raise it in writing first. If they fail to clarify or correct within 15 days, a legal notice demanding a detailed account statement and correction is appropriate.",
    },
    {
      question: "CASHe's recovery team is contacting people from my phone contacts — is that allowed?",
      answer: "No. Contacting your phone contacts without their consent is a violation of RBI guidelines, the IT Act, 2000, and the Digital Personal Data Protection Act, 2023. A legal notice specifically addressing this practice can demand immediate cessation and compensation.",
    },
    {
      question: "How much does it cost to send a legal notice to CASHe through vakiltech?",
      answer: "vakiltech charges ₹1,499 all-inclusive — advocate consultation, custom drafting, unlimited revisions, and Speed Post dispatch with Acknowledgment Due to CASHe's registered office in Mumbai.",
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
    name: "vakiltech — Send Legal Notice to CASHe",
    description: "Send a lawyer-drafted legal notice to CASHe (Bhanix Finance and Investment Limited) to stop recovery harassment, dispute hidden charges, and address contact-list abuse. ₹1,499.",
    url: "https://vakiltech.in/send-legal-notice/cashe",
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
                    Send Legal Notice to CASHe
                  </h1>
                  <p className="text-xl text-slate-600 leading-relaxed font-medium max-w-3xl">
                    CASHe, operated by Bhanix Finance and Investment Limited, offers salary-linked personal
                    loans through an app. Recovery agent harassment, contact-list abuse, and undisclosed
                    charges are the top complaints from CASHe borrowers. You have legal recourse —
                    and a formal notice to CASHe's registered office in Mumbai is the fastest way to use it.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <BrandFormCTA service="legal-notice">Send Legal Notice to CASHe — ₹1,499</BrandFormCTA>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-6">CASHe (Bhanix Finance and Investment Limited) — Registered Address</h2>
            <p className="text-slate-600 text-lg mb-8">Send your legal notice via Speed Post with Acknowledgment Due to:</p>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex items-center gap-3">
                <Building2 className="text-slate-500" /><h3 className="font-bold text-xl text-slate-800">Legal Entity Details</h3>
              </div>
              <div className="divide-y divide-slate-100">
                <div className="p-6 grid sm:grid-cols-[200px_1fr] gap-4">
                  <div className="font-semibold text-slate-500 flex items-center gap-2"><FileText className="w-4 h-4" /> Legal Entity Name</div>
                  <div className="font-bold text-slate-900 text-lg">Bhanix Finance and Investment Limited</div>
                </div>
                <div className="p-6 grid sm:grid-cols-[200px_1fr] gap-4 bg-slate-50/50">
                  <div className="font-semibold text-slate-500 flex items-center gap-2"><Hash className="w-4 h-4" /> Brand Name</div>
                  <div className="text-slate-700 bg-white border border-slate-200 px-3 py-1 rounded inline-block w-max font-medium">CASHe</div>
                </div>
                <div className="p-6 grid sm:grid-cols-[200px_1fr] gap-4">
                  <div className="font-semibold text-slate-500 flex flex-col gap-1 mt-1">
                    <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Registered Office</span>
                    <span className="text-xs font-normal ml-6">(For Legal Notice)</span>
                  </div>
                  <div className="text-slate-700 leading-relaxed font-medium">
                    901, Lodha Supremus, Saki Vihar Road,<br />Powai, Mumbai – 400 072, Maharashtra
                  </div>
                </div>
                <div className="p-6 grid sm:grid-cols-2 gap-6 bg-white">
                  <div className="space-y-4">
                    <div className="font-semibold text-slate-500 flex items-center gap-2"><Mail className="w-4 h-4" /> Email</div>
                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Support</div>
                      <span className="text-primary font-medium break-all">support@cashe.co.in</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="font-semibold text-slate-500 flex items-center gap-2"><Phone className="w-4 h-4" /> Helpline</div>
                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 h-[calc(100%-2rem)] flex flex-col justify-center">
                      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Customer Care</div>
                      <div className="text-slate-900 font-bold text-lg">022-48971100</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <HelpCircle className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-bold text-slate-900">When Can You Send a Legal Notice to CASHe?</h2>
            </div>
            <p className="text-slate-600 text-lg mb-6">CASHe borrowers report a range of grievances — from recovery harassment to incorrect charges. Each of the following gives you a valid legal basis for a formal notice:</p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                "Recovery calls at odd hours or with threatening/abusive language",
                "Contacting your phone contacts or workplace about your loan",
                "Processing fee, GST, or insurance charged without prior disclosure",
                "Interest rate higher than what the app showed at application",
                "Penalty for late payment not mentioned in the loan terms",
                "Repaid loan balance not updated in the app",
                "CIBIL score affected despite no actual default",
                "Loan disbursed late, causing financial loss",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium leading-snug">{item}</span>
                </div>
              ))}
            </div>
            <div className="bg-blue-50 text-blue-800 p-4 rounded-lg font-medium shadow-inner">
              <span className="font-bold uppercase tracking-wider text-xs bg-blue-200 text-blue-900 px-2 py-1 rounded inline-block mb-2 mr-2">Note</span>
              Email CASHe's support team first with your complaint in writing. If unresolved in 15 days, a legal notice is appropriate. For contact-list harassment, send immediately.
            </div>
          </section>

          <DidYouKnowBlock
            title="Did you know?"
            text="Bhanix Finance (CASHe) is a licensed NBFC regulated by RBI. As an NBFC, it is subject to the same consumer protection obligations as banks — including grievance redressal timelines, fair practices in lending, and restrictions on recovery agent conduct. Their RBI licence can be reviewed by the regulator if systematic violations are reported."
          />

          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-8 pt-4 flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-primary" /> Laws That Protect You Against CASHe
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Consumer Protection Act, 2019", desc: "CASHe's lending service is covered under consumer law. Harassment and hidden charges are deficiencies in service." },
                { title: "RBI Fair Practices Code for NBFCs", desc: "As an NBFC, Bhanix Finance must comply with RBI's code on recovery conduct, transparent pricing, and grievance resolution." },
                { title: "IT Act, 2000 & DPDP Act, 2023", desc: "Accessing and using your phone contacts or personal data without consent is a data privacy violation under both statutes." },
                { title: "Indian Contract Act, 1872", desc: "Your loan agreement is a contract. Fees not disclosed in it are unauthorised additions — giving you the right to a refund." },
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
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">CASHe Crossing the Line? Send a Legal Notice.</h2>
              <p className="text-lg text-primary-foreground/90">Drafted by licensed advocates. Delivered in 24 hours.</p>
              <BrandFormCTA service="legal-notice" variant="ghost-white">Send Legal Notice to CASHe — ₹1,499</BrandFormCTA>
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
