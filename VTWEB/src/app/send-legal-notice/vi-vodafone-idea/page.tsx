import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { TrustSignalsSection } from "@/components/features/homepage/trust-signals";
import { FAQSection } from "@/components/shared/faq-section";
import { DidYouKnowBlock } from "@/components/shared/did-you-know";
import Link from "next/link";
import BrandFormCTA from "@/components/shared/brand-form-cta";
import {
  AlertTriangle, MapPin, Mail, Building2,
  Phone, Scale, FileText, CheckCircle2, ChevronRight, HelpCircle, AlertCircle, Hash, ShieldCheck
} from "lucide-react";

export const metadata: Metadata = {
  title: "Send Legal Notice to Vi (Vodafone Idea) — ₹1,499 | vakiltech",
  description: "Vi disconnected your number or charged you wrongly? Send a legal notice to Vodafone Idea's registered address. Lawyer-drafted, legally binding.",
  keywords: ["legal notice to vi", "vodafone idea legal notice", "vi complaint legal notice", "vi wrongful disconnection legal notice", "vodafone idea billing complaint", "send legal notice vi telecom"],
  alternates: {
    canonical: "https://vakiltech.in/send-legal-notice/vi-vodafone-idea",
  },
};

export default function ViLegalNoticePage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Legal Notice", href: "/send-legal-notice" },
    { label: "Send Legal Notice to Vi (Vodafone Idea)", current: true },
  ];

  const faqs = [
    {
      question: "What is Vi (Vodafone Idea)'s registered address for a legal notice?",
      answer: "Send your notice to Vodafone Idea Limited, Birla Centurion, Century Mills Compound, Worli, Mumbai – 400 030. You should also send a copy to the Vi Nodal Officer for your telecom circle.",
    },
    {
      question: "Can I send a legal notice to Vi for wrongful disconnection?",
      answer: "Yes. Vi must follow TRAI's prescribed disconnection process, which requires advance notice and legitimate grounds. Disconnection without outstanding dues or without proper notice is actionable under the Consumer Protection Act, 2019.",
    },
    {
      question: "Vi is charging me for a plan I never subscribed to — what can I do?",
      answer: "This is a clear billing fraud. Raise the complaint with Vi's helpline (call 198) and escalate to the Nodal Officer. If unresolved in 15 days, send a legal notice demanding a refund and citing TRAI billing regulations.",
    },
    {
      question: "My Vi number was ported but services are not activating on the new network — is that Vi's fault?",
      answer: "Under TRAI's MNP framework, both the donor operator (Vi) and the recipient operator have defined obligations. If Vi has delayed the port-out without justification, they are in violation. A legal notice to Vi can accelerate the process.",
    },
    {
      question: "Given Vi's financial situation, will a legal notice be effective?",
      answer: "Yes. Legal notices are sent to Vodafone Idea Limited as a going concern. The company is still operational and legally obligated to respond. Consumer complaints and legal notices go through their regulated grievance channels, which remain active.",
    },
    {
      question: "How much does it cost to send a legal notice to Vi through vakiltech?",
      answer: "vakiltech charges ₹1,499 all-inclusive — advocate consultation, custom drafting, unlimited revisions, and Speed Post dispatch with Acknowledgment Due to Vi's registered office.",
    },
  ];

  const faqSchemaString = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  });

  const serviceSchemaString = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    name: "vakiltech — Send Legal Notice to Vi (Vodafone Idea)",
    description: "Send a lawyer-drafted legal notice to Vodafone Idea Limited's registered office for billing disputes, wrongful disconnection, and service complaints. ₹1,499.",
    url: "https://vakiltech.in/send-legal-notice/vi-vodafone-idea",
    areaServed: { "@type": "Country", name: "India" },
    provider: { "@type": "Organization", name: "vakiltech", url: "https://vakiltech.in" },
    offers: { "@type": "Offer", price: "1499", priceCurrency: "INR" },
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchemaString }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serviceSchemaString }} />

      <main className="min-h-screen bg-neutral-50/50">

        {/* 1. Hero */}
        <section className="relative pt-6 pb-16 md:pt-10 md:pb-24 bg-gradient-to-br from-primary/5 via-primary/10 to-transparent overflow-hidden border-b border-primary/10">
          <div className="relative max-w-5xl mx-auto px-6 md:px-8 flex flex-col gap-8 md:gap-10">
            <div className="z-10 mt-2 mb-2">
              <Breadcrumb items={breadcrumbItems} />
            </div>

            <div className="grid md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-8 space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 bg-white border border-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
                    <AlertCircle className="w-4 h-4" />
                    Legal Notice Service
                  </div>
                  <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-[1.15] tracking-tight">
                    Send Legal Notice to Vi (Vodafone Idea)
                  </h1>
                  <p className="text-xl text-slate-600 leading-relaxed font-medium max-w-3xl">
                    Vi (Vodafone Idea) is India's third-largest telecom operator. Billing errors, wrongful
                    disconnections, and unresolved service outages are frequent complaints from Vi subscribers.
                    A lawyer-drafted legal notice to Vi's registered office gives you a legally binding path
                    to resolution that their customer care cannot ignore.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <BrandFormCTA service="legal-notice">
                    Send Legal Notice to Vi — ₹1,499
                  </BrandFormCTA>
                  <BrandFormCTA service="consultation" variant="outline" showIcon={false}>
                    Talk to a Verified Advocate — ₹299
                  </BrandFormCTA>
                </div>
              </div>

              <div className="md:col-span-4 bg-white rounded-2xl p-6 border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col gap-6">
                <h3 className="font-bold text-slate-900 pb-2 border-b border-slate-100">Why vakiltech?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-emerald-100 p-2 rounded-lg text-emerald-600 shrink-0"><CheckCircle2 className="w-5 h-5" /></div>
                    <div>
                      <p className="font-semibold text-slate-900 text-sm">15,000+ Notices Sent</p>
                      <p className="text-slate-500 text-sm">Across all states in India</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-lg text-blue-600 shrink-0"><Scale className="w-5 h-5" /></div>
                    <div>
                      <p className="font-semibold text-slate-900 text-sm">Drafted by Advocates</p>
                      <p className="text-slate-500 text-sm">Valid in all Consumer Courts</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-amber-100 p-2 rounded-lg text-amber-600 shrink-0"><AlertTriangle className="w-5 h-5" /></div>
                    <div>
                      <p className="font-semibold text-slate-900 text-sm">65% Settlement Rate</p>
                      <p className="text-slate-500 text-sm">Without going to court</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-6 md:px-8 py-16 space-y-12">

          {/* 2. Registered Address */}
          <section className="scroll-mt-24" id="address">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Vodafone Idea Limited — Registered Address for Legal Notice</h2>
            <p className="text-slate-600 text-lg mb-8">Send your legal notice via Speed Post with Acknowledgment Due to:</p>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex items-center gap-3">
                <Building2 className="text-slate-500" />
                <h3 className="font-bold text-xl text-slate-800">Legal Entity Details</h3>
              </div>

              <div className="divide-y divide-slate-100">
                <div className="p-6 grid sm:grid-cols-[200px_1fr] gap-4">
                  <div className="font-semibold text-slate-500 flex items-center gap-2">
                    <FileText className="w-4 h-4" /> Legal Entity Name
                  </div>
                  <div className="font-bold text-slate-900 text-lg">Vodafone Idea Limited</div>
                </div>

                <div className="p-6 grid sm:grid-cols-[200px_1fr] gap-4 bg-slate-50/50">
                  <div className="font-semibold text-slate-500 flex items-center gap-2">
                    <Hash className="w-4 h-4" /> CIN
                  </div>
                  <div className="font-mono text-slate-700 bg-white border border-slate-200 px-3 py-1 rounded inline-block w-max">L32100GJ1996PLC030976</div>
                </div>

                <div className="p-6 grid sm:grid-cols-[200px_1fr] gap-4">
                  <div className="font-semibold text-slate-500 flex flex-col gap-1 mt-1">
                    <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Registered Office</span>
                    <span className="text-xs font-normal ml-6">(For Legal Notice)</span>
                  </div>
                  <div className="text-slate-700 leading-relaxed font-medium">
                    Birla Centurion, Century Mills Compound,<br />Worli, Mumbai – 400 030, Maharashtra
                  </div>
                </div>

                <div className="p-6 grid sm:grid-cols-[200px_1fr] gap-4 bg-slate-50/50">
                  <div className="font-semibold text-slate-500 flex flex-col gap-1 mt-1">
                    <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Nodal Officer</span>
                    <span className="text-xs font-normal ml-6">(Telecom-specific)</span>
                  </div>
                  <div className="text-slate-700 leading-relaxed">
                    Send a copy to the Vi Nodal Officer for your telecom circle. Circle-wise Nodal Officer contacts are available on Vi's website under Regulatory Information.
                  </div>
                </div>

                <div className="p-6 grid sm:grid-cols-2 gap-6 bg-white">
                  <div className="space-y-4">
                    <div className="font-semibold text-slate-500 flex items-center gap-2">
                      <Mail className="w-4 h-4" /> Email Addresses
                    </div>
                    <div className="space-y-2">
                      <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Grievance Officer</div>
                        <span className="text-primary font-medium break-all">appellate.authority@vodafoneidea.com</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="font-semibold text-slate-500 flex items-center gap-2">
                      <Phone className="w-4 h-4" /> Helpline
                    </div>
                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 h-[calc(100%-2rem)] flex flex-col justify-center">
                      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Customer Care</div>
                      <div className="text-slate-900 font-bold text-lg">199 / 198</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 3. When to Send */}
          <section className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <HelpCircle className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-bold text-slate-900">When Can You Send a Legal Notice to Vi?</h2>
            </div>
            <p className="text-slate-600 text-lg mb-6">
              Vi users frequently report unresolved billing errors and network-related grievances. When standard escalation fails, a legal notice is your most effective tool. Typical grounds include:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                "Wrongful disconnection or SIM deactivation without dues",
                "Billing errors on prepaid or postpaid accounts",
                "Data balance deducted without usage or background drain",
                "Recharge amount debited but plan not activated",
                "Port-out request rejected or delayed beyond TRAI timeline",
                "Unsolicited VAS charges added to bill without consent",
                "Network outage persisting 3+ days without credit or compensation",
                "Vi broadband / home broadband installation delayed after payment",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium leading-snug">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 text-blue-800 p-4 rounded-lg font-medium shadow-inner">
              <span className="font-bold uppercase tracking-wider text-xs bg-blue-200 text-blue-900 px-2 py-1 rounded inline-block mb-2 mr-2">Note</span>
              Use Vi's helpline (199) first and escalate to the Nodal Officer. If 15–30 days pass without satisfactory resolution, a legal notice is appropriate.
            </div>
          </section>

          {/* Did You Know */}
          <DidYouKnowBlock
            title="Did you know?"
            text="Vodafone Idea Limited remains a fully licensed telecom operator regulated by TRAI. Regardless of the company's financial position, your consumer rights under the Consumer Protection Act, 2019 are fully enforceable — including claims for billing errors and wrongful disconnection."
          />

          {/* 4. Legal Protection */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-8 pt-4 flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-primary" /> Laws That Protect You Against Vi
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Consumer Protection Act, 2019", desc: "Telecom services are covered. Billing errors, wrongful disconnection, or failure to activate a recharge are deficiencies in service." },
                { title: "TRAI Act, 1997 & QoS Regulations", desc: "TRAI's Quality of Service norms mandate complaint resolution within 15 days, billing accuracy, and MNP compliance. Vi's failure on any count is actionable." },
                { title: "Indian Contract Act, 1872", desc: "Your subscription plan is a legal contract. Deviating from the contracted service — charging more or delivering less — is a breach." },
                { title: "TRAI Consumer Protection Regulations", desc: "These regulations specifically prohibit unsolicited VAS charges and require explicit opt-in. Any violation gives you the right to a full refund." },
              ].map(({ title, desc }) => (
                <div key={title} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
                  <p className="text-slate-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 5. CTA */}
          <section className="bg-primary rounded-3xl p-10 text-center shadow-lg relative overflow-hidden my-16">
            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">Vi Isn't Responding? Send a Legal Notice.</h2>
              <p className="text-lg text-primary-foreground/90">Drafted by licensed advocates. Delivered to Vi's registered office in 24 hours.</p>
              <BrandFormCTA service="legal-notice" variant="ghost-white">
                Send Legal Notice to Vi — ₹1,499
              </BrandFormCTA>
            </div>
          </section>

          {/* 6. Related */}
          <section className="pt-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Related Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/send-legal-notice" className="block group">
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 h-full shadow-lg hover:shadow-xl hover:border-slate-700 transition-all duration-300 flex flex-col">
                  <h3 className="font-bold text-lg text-white mb-3">All Legal Notice Services</h3>
                  <p className="text-slate-400 text-sm flex-grow mb-6">Browse legal notices for every type of dispute — consumer, employment, property.</p>
                  <div className="text-white text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">See All <ChevronRight className="w-4 h-4" /></div>
                </div>
              </Link>
              <Link href="/blogs/what-is-a-legal-notice-in-india" className="block group">
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 h-full shadow-lg hover:shadow-xl hover:border-slate-700 transition-all duration-300 flex flex-col">
                  <h3 className="font-bold text-lg text-white mb-3">What is a Legal Notice?</h3>
                  <p className="text-slate-400 text-sm flex-grow mb-6">Complete guide to legal notices in India — what they do, how they work, and when to send one.</p>
                  <div className="text-white text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">Read Guide <ChevronRight className="w-4 h-4" /></div>
                </div>
              </Link>
              <Link href="/send-legal-notice/consumer-complaint-legal-notice" className="block group">
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 h-full shadow-lg hover:shadow-xl hover:border-slate-700 transition-all duration-300 flex flex-col">
                  <h3 className="font-bold text-lg text-white mb-3">Consumer Complaint Notice</h3>
                  <p className="text-slate-400 text-sm flex-grow mb-6">Send a legal notice to any company for consumer disputes — not just telecom.</p>
                  <div className="text-white text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">See Details <ChevronRight className="w-4 h-4" /></div>
                </div>
              </Link>
            </div>
          </section>

        </div>

        <TrustSignalsSection />
        {faqs.length > 0 && <FAQSection faqs={faqs} title="Frequently Asked Questions" />}
      </main>
    </>
  );
}
