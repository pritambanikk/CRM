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
  title: "Send Legal Notice to Navi — Loan & Insurance Disputes | vakiltech",
  description: "Navi loan rejection, insurance claim denial, or hidden fees? Send a legal notice to Navi Technologies for ₹1,499. Fast, lawyer-drafted, legally binding.",
  keywords: ["navi app legal notice", "navi finance complaint", "navi loan legal notice", "navi insurance claim denial", "navi technologies legal notice", "navi hidden charges complaint"],
  alternates: {
    canonical: "https://vakiltech.in/send-legal-notice/navi",
  },
};

export default function NaviLegalNoticePage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Legal Notice", href: "/send-legal-notice" },
    { label: "Send Legal Notice to Navi", current: true },
  ];

  const faqs = [
    {
      question: "What is Navi's registered address for sending a legal notice?",
      answer: "Send your notice to Navi Technologies Limited, 3rd Floor, Salarpuria Touchstone, Outer Ring Road, Marathahalli, Bangalore – 560 037, Karnataka.",
    },
    {
      question: "Can I send a legal notice to Navi for wrongful loan rejection?",
      answer: "Yes. If Navi rejected your loan application without clear reason, altered the approved amount without notice, or disbursed a lower amount than agreed, you can send a formal legal notice citing their obligations under the Consumer Protection Act, 2019 and RBI guidelines for digital lenders.",
    },
    {
      question: "Navi denied my insurance claim without a valid reason — what can I do?",
      answer: "Navi offers health and term insurance products through its NBFC and insurance entity. An unjustified claim denial is a deficiency in service under the Consumer Protection Act, 2019. A legal notice demanding written justification and claim settlement puts Navi on formal record and compels a substantive response.",
    },
    {
      question: "Navi charged me fees that were not disclosed upfront — can I get a refund?",
      answer: "Yes. Under RBI's Fair Practices Code for NBFCs and digital lending guidelines, all fees must be disclosed in the Key Fact Statement before loan disbursal. Any charge not reflected there is unauthorised. A legal notice can demand a refund plus a revised loan account statement.",
    },
    {
      question: "Navi's recovery team is harassing me — what laws apply?",
      answer: "Navi Technologies and its NBFC arm must follow RBI's guidelines on recovery agent conduct. Calls outside permitted hours (8 AM–7 PM), abusive language, contacting family or colleagues, and threatening behaviour are all prohibited. A legal notice citing these violations can compel immediate cessation and trigger an internal compliance review.",
    },
    {
      question: "How much does it cost to send a legal notice to Navi through vakiltech?",
      answer: "vakiltech charges ₹1,499 all-inclusive — advocate consultation, custom drafting, unlimited revisions, and Speed Post dispatch with Acknowledgment Due to Navi's registered office in Bangalore.",
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
    name: "vakiltech — Send Legal Notice to Navi",
    description: "Send a lawyer-drafted legal notice to Navi Technologies Limited for loan rejection disputes, insurance claim denial, hidden fees, and recovery harassment. ₹1,499.",
    url: "https://vakiltech.in/send-legal-notice/navi",
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
                    Send Legal Notice to Navi
                  </h1>
                  <p className="text-xl text-slate-600 leading-relaxed font-medium max-w-3xl">
                    Navi Technologies Limited offers instant personal loans, home loans, and health
                    insurance through a single app. But loan rejections without reason, insurance
                    claim denials, and undisclosed fees are forcing borrowers and policyholders to
                    seek formal recourse. A legal notice to Navi's registered office in Bangalore
                    creates a legally binding record — and gets results.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <BrandFormCTA service="legal-notice">Send Legal Notice to Navi — ₹1,499</BrandFormCTA>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Navi Technologies Limited — Registered Address</h2>
            <p className="text-slate-600 text-lg mb-8">Send your legal notice via Speed Post with Acknowledgment Due to:</p>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex items-center gap-3">
                <Building2 className="text-slate-500" /><h3 className="font-bold text-xl text-slate-800">Legal Entity Details</h3>
              </div>
              <div className="divide-y divide-slate-100">
                <div className="p-6 grid sm:grid-cols-[200px_1fr] gap-4">
                  <div className="font-semibold text-slate-500 flex items-center gap-2"><FileText className="w-4 h-4" /> Legal Entity Name</div>
                  <div className="font-bold text-slate-900 text-lg">Navi Technologies Limited</div>
                </div>
                <div className="p-6 grid sm:grid-cols-[200px_1fr] gap-4 bg-slate-50/50">
                  <div className="font-semibold text-slate-500 flex items-center gap-2"><Hash className="w-4 h-4" /> Brand Name</div>
                  <div className="text-slate-700 bg-white border border-slate-200 px-3 py-1 rounded inline-block w-max font-medium">Navi</div>
                </div>
                <div className="p-6 grid sm:grid-cols-[200px_1fr] gap-4">
                  <div className="font-semibold text-slate-500 flex flex-col gap-1 mt-1">
                    <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Registered Office</span>
                    <span className="text-xs font-normal ml-6">(For Legal Notice)</span>
                  </div>
                  <div className="text-slate-700 leading-relaxed font-medium">
                    3rd Floor, Salarpuria Touchstone,<br />Outer Ring Road, Marathahalli,<br />Bangalore – 560 037, Karnataka
                  </div>
                </div>
                <div className="p-6 grid sm:grid-cols-2 gap-6 bg-white">
                  <div className="space-y-4">
                    <div className="font-semibold text-slate-500 flex items-center gap-2"><Mail className="w-4 h-4" /> Email</div>
                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Grievance</div>
                      <span className="text-primary font-medium break-all">grievance@navi.com</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="font-semibold text-slate-500 flex items-center gap-2"><Phone className="w-4 h-4" /> Helpline</div>
                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 h-[calc(100%-2rem)] flex flex-col justify-center">
                      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Customer Care</div>
                      <div className="text-slate-900 font-bold text-lg">1800-123-6289</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <HelpCircle className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-bold text-slate-900">When Can You Send a Legal Notice to Navi?</h2>
            </div>
            <p className="text-slate-600 text-lg mb-6">Navi's product mix — instant loans, home loans, health and term insurance — creates several categories of disputes. Each of the following gives you a valid legal basis for a formal notice:</p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                "Loan rejected or disbursed at a lower amount without explanation",
                "Health or term insurance claim denied without adequate reason",
                "Processing fee, GST, or premium charged without prior disclosure",
                "Interest rate or EMI amount changed after loan approval",
                "Prepayment penalty not disclosed at the time of application",
                "Loan repaid but CIBIL score still reflects an outstanding balance",
                "Recovery calls outside permitted hours or with abusive language",
                "Policy cancelled without written notice or refund of premium",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium leading-snug">{item}</span>
                </div>
              ))}
            </div>
            <div className="bg-blue-50 text-blue-800 p-4 rounded-lg font-medium shadow-inner">
              <span className="font-bold uppercase tracking-wider text-xs bg-blue-200 text-blue-900 px-2 py-1 rounded inline-block mb-2 mr-2">Note</span>
              Raise your grievance in writing with Navi first. If unresolved within 15 days, a legal notice is your next step. For insurance claim denials, the Insurance Ombudsman is also an escalation option after the legal notice.
            </div>
          </section>

          <DidYouKnowBlock
            title="Did you know?"
            text="Navi Technologies operates both an NBFC (Navi Finserv Limited) and a general insurance entity (Navi General Insurance Limited), both regulated by RBI and IRDAI respectively. This dual regulation means borrowers and policyholders can escalate loan disputes to the RBI Ombudsman and insurance disputes to the IRDAI Ombudsman — in addition to filing a consumer complaint. A formal legal notice triggers response obligations at both entities simultaneously."
          />

          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-8 pt-4 flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-primary" /> Laws That Protect You Against Navi
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Consumer Protection Act, 2019", desc: "Navi's loan and insurance services fall under consumer law. Unexplained claim denial, hidden fees, and misleading pricing are all actionable as deficiency of service." },
                { title: "RBI Fair Practices Code for NBFCs", desc: "Navi Finserv Limited must comply with RBI's code — covering transparent pricing, Key Fact Statements, grievance resolution timelines, and recovery agent conduct." },
                { title: "IRDAI Regulations", desc: "Navi General Insurance is regulated by IRDAI. Claim denials without proper grounds, delayed settlement, and policy cancellation without notice are actionable under IRDAI's consumer protection guidelines." },
                { title: "Indian Contract Act, 1872", desc: "Your loan or insurance agreement is a contract. Any fee, penalty, or condition imposed outside the agreed terms is an unlawful alteration — giving you the right to demand a refund or correction." },
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
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">Navi Rejected Your Claim or Loan? Send a Legal Notice.</h2>
              <p className="text-lg text-primary-foreground/90">Drafted by licensed advocates. Delivered in 24 hours.</p>
              <BrandFormCTA service="legal-notice" variant="ghost-white">Send Legal Notice to Navi — ₹1,499</BrandFormCTA>
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
