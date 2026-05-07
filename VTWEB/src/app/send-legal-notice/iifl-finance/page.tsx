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
  title: "Send Legal Notice to IIFL Finance — Stop Harassment | vakiltech",
  description: "IIFL recovery agents harassing you? Wrong loan charges or CIBIL entry? Send a legal notice to IIFL Finance for ₹1,499. Stop the harassment legally.",
  keywords: ["legal notice to iifl", "iifl finance harassment legal notice", "iifl complaint notice", "iifl recovery agent harassment", "iifl cibil entry legal notice", "iifl finance legal notice india"],
  alternates: {
    canonical: "https://vakiltech.in/send-legal-notice/iifl-finance",
  },
};

export default function IIFLFinanceLegalNoticePage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Legal Notice", href: "/send-legal-notice" },
    { label: "Send Legal Notice to IIFL Finance", current: true },
  ];

  const faqs = [
    {
      question: "What is IIFL Finance's registered address for sending a legal notice?",
      answer: "Send your notice to IIFL Finance Limited, IIFL House, Sun Infotech Park, Road No. 16V, Wagle Industrial Estate, Thane – 400 604, Maharashtra.",
    },
    {
      question: "Can I send a legal notice to IIFL Finance to stop recovery agent harassment?",
      answer: "Yes. RBI guidelines strictly prohibit abusive, threatening, or unreasonably frequent recovery calls. A legal notice to IIFL Finance citing RBI's Fair Practices Code and the Consumer Protection Act, 2019 puts their recovery operations on immediate legal notice and typically stops harassment within days.",
    },
    {
      question: "IIFL Finance made a wrong CIBIL entry against me — what can I do?",
      answer: "A wrongful CIBIL entry is actionable as deficiency in service and can cause serious financial harm. Send a legal notice to IIFL Finance demanding immediate correction and compensation. You can also file a complaint with CIBIL and the RBI Banking Ombudsman simultaneously.",
    },
    {
      question: "IIFL is charging interest rates higher than what was agreed — is that legal?",
      answer: "No. IIFL Finance is an RBI-regulated NBFC and must honour the loan agreement terms. Charging undisclosed fees or interest rates beyond what was agreed is a breach of contract and a violation of RBI's Fair Practices Code for NBFCs.",
    },
    {
      question: "Can I send a legal notice to IIFL for a gold loan dispute?",
      answer: "Yes. Gold loan disputes — including wrongful auction of pledged gold before the due date, incorrect outstanding balance, or excess charges — are all covered under the Consumer Protection Act, 2019. IIFL is particularly known for gold loan volume; a legal notice is the fastest way to freeze an auction.",
    },
    {
      question: "How much does it cost to send a legal notice to IIFL Finance through vakiltech?",
      answer: "vakiltech charges ₹1,499 all-inclusive — advocate consultation, custom drafting, unlimited revisions, and Speed Post dispatch with Acknowledgment Due to IIFL Finance's registered office.",
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
    name: "vakiltech — Send Legal Notice to IIFL Finance",
    description: "Send a lawyer-drafted legal notice to IIFL Finance Limited to stop recovery harassment, dispute CIBIL entries, and resolve loan overcharging. ₹1,499.",
    url: "https://vakiltech.in/send-legal-notice/iifl-finance",
    areaServed: { "@type": "Country", name: "India" },
    provider: { "@type": "Organization", name: "vakiltech", url: "https://vakiltech.in" },
    offers: { "@type": "Offer", price: "1499", priceCurrency: "INR" },
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serviceSchema }} />

      <main className="min-h-screen bg-neutral-50/50">

        {/* Hero */}
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
                    Send Legal Notice to IIFL Finance
                  </h1>
                  <p className="text-xl text-slate-600 leading-relaxed font-medium max-w-3xl">
                    IIFL Finance is one of India's largest NBFCs — offering gold loans, personal loans, and home loans.
                    Recovery agent harassment, wrongful CIBIL entries, and undisclosed charges are among the most
                    common complaints. A formal legal notice stops the harassment legally and puts IIFL's compliance
                    team on the clock.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <BrandFormCTA service="legal-notice">Send Legal Notice to IIFL Finance — ₹1,499</BrandFormCTA>
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

          {/* Registered Address */}
          <section className="scroll-mt-24" id="address">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">IIFL Finance Limited — Registered Address for Legal Notice</h2>
            <p className="text-slate-600 text-lg mb-8">Send your legal notice via Speed Post with Acknowledgment Due to:</p>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex items-center gap-3">
                <Building2 className="text-slate-500" />
                <h3 className="font-bold text-xl text-slate-800">Legal Entity Details</h3>
              </div>
              <div className="divide-y divide-slate-100">
                <div className="p-6 grid sm:grid-cols-[200px_1fr] gap-4">
                  <div className="font-semibold text-slate-500 flex items-center gap-2"><FileText className="w-4 h-4" /> Legal Entity Name</div>
                  <div className="font-bold text-slate-900 text-lg">IIFL Finance Limited</div>
                </div>
                <div className="p-6 grid sm:grid-cols-[200px_1fr] gap-4 bg-slate-50/50">
                  <div className="font-semibold text-slate-500 flex items-center gap-2"><Hash className="w-4 h-4" /> CIN</div>
                  <div className="font-mono text-slate-700 bg-white border border-slate-200 px-3 py-1 rounded inline-block w-max">L67100MH1995PLC093849</div>
                </div>
                <div className="p-6 grid sm:grid-cols-[200px_1fr] gap-4">
                  <div className="font-semibold text-slate-500 flex flex-col gap-1 mt-1">
                    <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Registered Office</span>
                    <span className="text-xs font-normal ml-6">(For Legal Notice)</span>
                  </div>
                  <div className="text-slate-700 leading-relaxed font-medium">
                    IIFL House, Sun Infotech Park, Road No. 16V,<br />Wagle Industrial Estate, Thane – 400 604, Maharashtra
                  </div>
                </div>
                <div className="p-6 grid sm:grid-cols-2 gap-6 bg-white">
                  <div className="space-y-4">
                    <div className="font-semibold text-slate-500 flex items-center gap-2"><Mail className="w-4 h-4" /> Email</div>
                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Grievance Officer</div>
                      <span className="text-primary font-medium break-all">grievance@iifl.com</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="font-semibold text-slate-500 flex items-center gap-2"><Phone className="w-4 h-4" /> Helpline</div>
                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 h-[calc(100%-2rem)] flex flex-col justify-center">
                      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Customer Care</div>
                      <div className="text-slate-900 font-bold text-lg">1860-267-3000</div>
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
              <h2 className="text-2xl font-bold text-slate-900">When Can You Send a Legal Notice to IIFL Finance?</h2>
            </div>
            <p className="text-slate-600 text-lg mb-6">IIFL's recovery operations can become aggressive quickly — often crossing legal lines. A legal notice forces the company's legal team to intervene and halt illegal activity. Common grounds include:</p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                "Recovery agents calling at odd hours, threatening, or abusing you or your family",
                "Contacting your employer, neighbours, or relatives about your loan — illegal under RBI guidelines",
                "Wrong or inflated outstanding balance on gold, personal, or home loan",
                "CIBIL score damaged by wrongful NPA or overdue marking",
                "Gold pledged with IIFL auctioned before the agreed loan tenure expired",
                "Processing fees, insurance, or hidden charges added without consent",
                "Loan settlement agreement not honoured after payment",
                "Account statement not provided despite repeated requests",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium leading-snug">{item}</span>
                </div>
              ))}
            </div>
            <div className="bg-blue-50 text-blue-800 p-4 rounded-lg font-medium shadow-inner">
              <span className="font-bold uppercase tracking-wider text-xs bg-blue-200 text-blue-900 px-2 py-1 rounded inline-block mb-2 mr-2">Note</span>
              File a complaint with IIFL's grievance officer first. If unresolved in 15 days, a legal notice is appropriate. For recovery harassment, you can send a legal notice immediately without waiting — harassment is an emergency.
            </div>
          </section>

          <DidYouKnowBlock
            title="Did you know?"
            text="RBI's Fair Practices Code for NBFCs explicitly prohibits recovery agents from contacting borrowers before 8 AM or after 7 PM, using abusive language, or contacting third parties (employers, relatives) without the borrower's prior consent. Violation of this code is the basis of a strong legal notice."
          />

          {/* Legal Protection */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-8 pt-4 flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-primary" /> Laws That Protect You Against IIFL Finance
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Consumer Protection Act, 2019", desc: "NBFC loan services fall under consumer law. Harassment, wrong charges, and CIBIL damage are actionable deficiencies in service." },
                { title: "RBI Fair Practices Code for NBFCs", desc: "IIFL Finance is an RBI-regulated NBFC and must comply with the Fair Practices Code — covering recovery conduct, disclosure, and grievance redressal." },
                { title: "Indian Contract Act, 1872", desc: "Your loan agreement is a contract. Unilateral changes to interest rates, fees, or tenure are contractual breaches." },
                { title: "Credit Information Companies (Regulation) Act", desc: "Submitting inaccurate data to CIBIL is a violation of this Act. IIFL is legally obligated to correct wrong entries promptly on receiving written notice." },
              ].map(({ title, desc }) => (
                <div key={title} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
                  <p className="text-slate-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Banner */}
          <section className="bg-primary rounded-3xl p-10 text-center shadow-lg my-16">
            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">Stop the Harassment. Send IIFL Finance a Legal Notice.</h2>
              <p className="text-lg text-primary-foreground/90">Drafted by licensed advocates. Delivered in 24 hours.</p>
              <BrandFormCTA service="legal-notice" variant="ghost-white">Send Legal Notice to IIFL Finance — ₹1,499</BrandFormCTA>
            </div>
          </section>

          {/* Related */}
          <section className="pt-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Related Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { href: "/send-legal-notice", title: "All Legal Notice Services", desc: "Browse legal notices for every type of dispute — consumer, employment, property." },
                { href: "/blogs/what-is-a-legal-notice-in-india", title: "What is a Legal Notice?", desc: "Complete guide to legal notices in India — what they do, how they work, and when to send one." },
                { href: "/send-legal-notice/consumer-complaint-legal-notice", title: "Consumer Complaint Notice", desc: "Send a legal notice to any company for consumer disputes — finance, telecom, e-commerce." },
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
