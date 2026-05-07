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
  title: "Send Legal Notice to Jio — Advocate Drafted, Delivered | vakiltech",
  description: "Wrongful bill, SIM block, or service fraud by Jio? Send a lawyer-drafted legal notice to Jio's registered office for ₹1,499. Fast delivery, legal backing.",
  keywords: ["legal notice to jio", "jio complaint legal notice", "send legal notice jio", "jio wrongful bill legal notice", "jio sim block legal notice", "jio service fraud notice"],
  alternates: {
    canonical: "https://vakiltech.in/send-legal-notice/jio",
  },
};

export default function JioLegalNoticePage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Legal Notice", href: "/send-legal-notice" },
    { label: "Send Legal Notice to Jio", current: true },
  ];

  const faqs = [
    {
      question: "What is Jio's registered address for sending a legal notice?",
      answer: "Send your notice to Reliance Jio Infocomm Limited, Maker Chambers IV, 3rd Floor, 222 Nariman Point, Mumbai – 400 021. You may also send a copy to the Jio Nodal Officer in your telecom circle for faster escalation.",
    },
    {
      question: "Can I send a legal notice to Jio for a wrong billing charge?",
      answer: "Yes. Wrongful billing is a clear deficiency in service under the Consumer Protection Act, 2019, and a violation of TRAI regulations. A legal notice to Jio's registered office is the fastest way to trigger a formal response from their legal team.",
    },
    {
      question: "Jio blocked my SIM without notice — is that legal?",
      answer: "No. Under TRAI guidelines, a telecom operator must give advance notice before suspending or blocking a SIM, except in cases of confirmed fraud. A wrongful or unexplained block is actionable and can form the basis of a legal notice.",
    },
    {
      question: "My Jio port-out request has been rejected repeatedly. Can I take legal action?",
      answer: "Yes. TRAI mandates that Mobile Number Portability (MNP) requests be processed within 7 working days. Repeated refusal or delay without valid reason is a regulatory violation. A legal notice citing TRAI's MNP regulations puts Jio's compliance team on notice.",
    },
    {
      question: "How long does Jio have to respond to a legal notice?",
      answer: "The notice typically gives 15 to 30 days for a response. If there is no satisfactory resolution, you can escalate to the Telecom Disputes Settlement and Appellate Tribunal (TDSAT) or file a consumer complaint at your local District Consumer Disputes Redressal Commission.",
    },
    {
      question: "How much does it cost to send a legal notice to Jio through vakiltech?",
      answer: "vakiltech charges ₹1,499 all-inclusive — advocate consultation, custom drafting, unlimited revisions, and Speed Post dispatch with Acknowledgment Due to Jio's registered office.",
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
    name: "vakiltech — Send Legal Notice to Jio",
    description: "Send a lawyer-drafted legal notice to Reliance Jio Infocomm Limited's registered office for billing disputes, SIM block, data fraud, and service complaints. ₹1,499.",
    url: "https://vakiltech.in/send-legal-notice/jio",
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
                    Send Legal Notice to Jio
                  </h1>
                  <p className="text-xl text-slate-600 leading-relaxed font-medium max-w-3xl">
                    Jio has over 400 million subscribers — and thousands of billing disputes, wrongful
                    SIM blocks, and service frauds go unresolved every month because users don't know
                    their legal rights. A lawyer-drafted legal notice to Jio's registered office changes
                    that immediately.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <BrandFormCTA service="legal-notice">
                    Send Legal Notice to Jio — ₹1,499
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
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Reliance Jio Infocomm Limited — Registered Address for Legal Notice</h2>
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
                  <div className="font-bold text-slate-900 text-lg">Reliance Jio Infocomm Limited</div>
                </div>

                <div className="p-6 grid sm:grid-cols-[200px_1fr] gap-4 bg-slate-50/50">
                  <div className="font-semibold text-slate-500 flex items-center gap-2">
                    <Hash className="w-4 h-4" /> CIN
                  </div>
                  <div className="font-mono text-slate-700 bg-white border border-slate-200 px-3 py-1 rounded inline-block w-max">U72900MH2007PLC234712</div>
                </div>

                <div className="p-6 grid sm:grid-cols-[200px_1fr] gap-4">
                  <div className="font-semibold text-slate-500 flex flex-col gap-1 mt-1">
                    <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Registered Office</span>
                    <span className="text-xs font-normal ml-6">(For Legal Notice)</span>
                  </div>
                  <div className="text-slate-700 leading-relaxed font-medium">
                    Maker Chambers IV, 3rd Floor, 222 Nariman Point,<br />Mumbai – 400 021, Maharashtra
                  </div>
                </div>

                <div className="p-6 grid sm:grid-cols-[200px_1fr] gap-4 bg-slate-50/50">
                  <div className="font-semibold text-slate-500 flex flex-col gap-1 mt-1">
                    <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Nodal Officer</span>
                    <span className="text-xs font-normal ml-6">(Telecom-specific)</span>
                  </div>
                  <div className="text-slate-700 leading-relaxed">
                    Send a copy to the Jio Nodal Officer of your telecom circle for parallel escalation under TRAI's grievance framework. Circle-wise Nodal Officer addresses are available on the Jio website under Customer Care.
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
                        <span className="text-primary font-medium break-all">grievance@jio.com</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="font-semibold text-slate-500 flex items-center gap-2">
                      <Phone className="w-4 h-4" /> Helpline
                    </div>
                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 h-[calc(100%-2rem)] flex flex-col justify-center">
                      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Customer Care</div>
                      <div className="text-slate-900 font-bold text-lg">199 / 1800-889-9999</div>
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
              <h2 className="text-2xl font-bold text-slate-900">When Can You Send a Legal Notice to Jio?</h2>
            </div>
            <p className="text-slate-600 text-lg mb-6">
              Jio's customer care resolves simple queries but often stonewalls legitimate complaints. A legal notice bypasses their support queue and lands directly with their legal team. You can send one for:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                "Wrongful or inflated bill — charges you never authorised",
                "SIM blocked or deactivated without prior notice or valid reason",
                "Data balance deducted without usage (background data theft)",
                "Mobile Number Portability (port-out) request refused or delayed",
                "Service outage for 3+ days with no refund or compensation",
                "Recharge amount deducted but plan not activated",
                "Unsolicited VAS (value-added services) activated and charged",
                "Jio Fiber / broadband connection refused after confirmed booking",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium leading-snug">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 text-blue-800 p-4 rounded-lg font-medium shadow-inner">
              <span className="font-bold uppercase tracking-wider text-xs bg-blue-200 text-blue-900 px-2 py-1 rounded inline-block mb-2 mr-2">Note</span>
              Attempt resolution through Jio's helpline (199) and escalate to their Nodal Officer before sending a legal notice. If 15–30 days pass without satisfactory resolution, a legal notice is appropriate.
            </div>
          </section>

          {/* Did You Know */}
          <DidYouKnowBlock
            title="Did you know?"
            text="TRAI mandates that all telecom operators resolve consumer complaints within 15 days. If Jio fails to act within that window, you are entitled to approach TDSAT (Telecom Disputes Settlement and Appellate Tribunal) — and a legal notice strengthens your TDSAT filing significantly."
          />

          {/* 4. What the Notice Says */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-8 pt-4">What Does the Legal Notice Say?</h2>
            <div className="relative border-l-2 border-slate-200 ml-4 md:ml-6 space-y-10 pb-4">
              {[
                { step: "1", title: "States the exact grievance", desc: "Wrong billing amount, date, and plan details — or SIM block date and circle — cited precisely in the notice." },
                { step: "2", title: "Cites applicable law", desc: "Consumer Protection Act, 2019 and relevant TRAI regulations are cited to establish Jio's legal obligations." },
                { step: "3", title: "Demands specific relief", desc: "Refund of excess charges, restoration of service, or compensation — with a clear monetary amount." },
                { step: "4", title: "Sets a 15-day deadline", desc: "Jio must respond within 15 days. No response or an unsatisfactory reply triggers your right to file in TDSAT or consumer court." },
              ].map(({ step, title, desc }) => (
                <div key={step} className="relative pl-8 md:pl-10">
                  <div className={`absolute -left-[17px] top-0 ${step === "3" ? "bg-primary text-primary-foreground ring-2 ring-primary/20 border-2 border-white" : "bg-white border-2 border-slate-300 text-slate-500"} w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-sm`}>{step}</div>
                  <h3 className={`text-xl font-bold mb-2 ${step === "3" ? "text-primary" : "text-slate-900"}`}>{title}</h3>
                  <p className="text-slate-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 5. Legal Protection */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-8 pt-4 flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-primary" /> Laws That Protect You Against Jio
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Consumer Protection Act, 2019", desc: "Telecom services are covered under this act. Wrongful billing or service denial is a clear deficiency in service." },
                { title: "TRAI Act, 1997 & Regulations", desc: "TRAI's Quality of Service regulations mandate service standards, grievance timelines, and MNP compliance." },
                { title: "Indian Contract Act, 1872", desc: "Jio's service agreement is a contract. Charging for services not rendered is a breach of contract." },
                { title: "IT Act, 2000", desc: "Unauthorised data deduction or SIM cloning/fraud may attract provisions under the IT Act." },
              ].map(({ title, desc }) => (
                <div key={title} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
                  <p className="text-slate-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 6. CTA */}
          <section className="bg-primary rounded-3xl p-10 text-center shadow-lg relative overflow-hidden my-16">
            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">Stop Fighting Jio's Support Loop. Send a Legal Notice.</h2>
              <p className="text-lg text-primary-foreground/90">Drafted by licensed advocates. Delivered to Jio's registered office in 24 hours.</p>
              <BrandFormCTA service="legal-notice" variant="ghost-white">
                Send Legal Notice to Jio — ₹1,499
              </BrandFormCTA>
            </div>
          </section>

          {/* 7. Related */}
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
