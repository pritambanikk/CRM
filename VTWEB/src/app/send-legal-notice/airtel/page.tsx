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
  title: "Send Legal Notice to Airtel — Lawyer Drafted & Delivered | vakiltech",
  description: "Airtel overcharging, wrongful disconnection, or postpaid billing fraud? Send a legal notice to Airtel's registered address for ₹1,499. Lawyer-drafted, same-day dispatch.",
  keywords: ["legal notice to airtel", "airtel billing complaint legal notice", "airtel legal notice", "airtel wrongful disconnection notice", "airtel overcharging legal notice", "send legal notice airtel"],
  alternates: {
    canonical: "https://vakiltech.in/send-legal-notice/airtel",
  },
};

export default function AirtelLegalNoticePage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Legal Notice", href: "/send-legal-notice" },
    { label: "Send Legal Notice to Airtel", current: true },
  ];

  const faqs = [
    {
      question: "What is Airtel's registered address for sending a legal notice?",
      answer: "Send your notice to Bharti Airtel Limited, Bharti Crescent, 1 Nelson Mandela Road, Vasant Kunj, Phase II, New Delhi – 110 070. You can also send a copy to the Airtel Nodal Officer for your telecom circle.",
    },
    {
      question: "Can I send a legal notice to Airtel for postpaid bill overcharging?",
      answer: "Yes. Overcharging on postpaid bills — for calls, data, or international roaming — is a deficiency in service under the Consumer Protection Act, 2019, and violates TRAI billing regulations. A legal notice compels Airtel's legal team to formally respond.",
    },
    {
      question: "Airtel disconnected my postpaid number without warning — what can I do?",
      answer: "Wrongful disconnection without advance notice and without a genuine outstanding dues reason is actionable. Under TRAI's Quality of Service regulations, operators must follow a prescribed process before disconnection. A legal notice citing this violation often results in immediate reconnection.",
    },
    {
      question: "Can I send a legal notice to Airtel for SIM swap fraud?",
      answer: "Yes, and this is a serious matter. Unauthorised SIM swap leading to financial fraud is both a consumer rights violation and potentially an offence under the IT Act, 2000. A legal notice to Airtel establishes their liability for the harm caused.",
    },
    {
      question: "I was charged for international roaming I never activated — what are my options?",
      answer: "Charging for international roaming without your explicit opt-in is a billing fraud. Send a legal notice citing the Consumer Protection Act and TRAI's unsolicited charge regulations. Include your billing statements as documentary evidence.",
    },
    {
      question: "How much does it cost to send a legal notice to Airtel through vakiltech?",
      answer: "vakiltech charges ₹1,499 all-inclusive — advocate consultation, custom drafting, unlimited revisions, and Speed Post dispatch with Acknowledgment Due to Airtel's registered office.",
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
    name: "vakiltech — Send Legal Notice to Airtel",
    description: "Send a lawyer-drafted legal notice to Bharti Airtel Limited's registered office for billing disputes, wrongful disconnection, SIM swap fraud, and service complaints. ₹1,499.",
    url: "https://vakiltech.in/send-legal-notice/airtel",
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
                    Send Legal Notice to Airtel
                  </h1>
                  <p className="text-xl text-slate-600 leading-relaxed font-medium max-w-3xl">
                    Airtel serves over 380 million subscribers across India. Billing disputes, wrongful
                    disconnections, and SIM swap fraud are among the most common telecom complaints filed
                    in India every year. A formal legal notice to Airtel's registered office is the fastest
                    path to a legally binding resolution.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <BrandFormCTA service="legal-notice">
                    Send Legal Notice to Airtel — ₹1,499
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
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Bharti Airtel Limited — Registered Address for Legal Notice</h2>
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
                  <div className="font-bold text-slate-900 text-lg">Bharti Airtel Limited</div>
                </div>

                <div className="p-6 grid sm:grid-cols-[200px_1fr] gap-4 bg-slate-50/50">
                  <div className="font-semibold text-slate-500 flex items-center gap-2">
                    <Hash className="w-4 h-4" /> CIN
                  </div>
                  <div className="font-mono text-slate-700 bg-white border border-slate-200 px-3 py-1 rounded inline-block w-max">L74899DL1995PLC070609</div>
                </div>

                <div className="p-6 grid sm:grid-cols-[200px_1fr] gap-4">
                  <div className="font-semibold text-slate-500 flex flex-col gap-1 mt-1">
                    <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Registered Office</span>
                    <span className="text-xs font-normal ml-6">(For Legal Notice)</span>
                  </div>
                  <div className="text-slate-700 leading-relaxed font-medium">
                    Bharti Crescent, 1 Nelson Mandela Road,<br />Vasant Kunj, Phase II, New Delhi – 110 070
                  </div>
                </div>

                <div className="p-6 grid sm:grid-cols-[200px_1fr] gap-4 bg-slate-50/50">
                  <div className="font-semibold text-slate-500 flex flex-col gap-1 mt-1">
                    <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Nodal Officer</span>
                    <span className="text-xs font-normal ml-6">(Telecom-specific)</span>
                  </div>
                  <div className="text-slate-700 leading-relaxed">
                    Send a copy to the Airtel Nodal Officer of your telecom circle. Circle-wise addresses are listed on the Airtel website under Regulatory Information.
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
                        <span className="text-primary font-medium break-all">appellateauthority@airtel.com</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="font-semibold text-slate-500 flex items-center gap-2">
                      <Phone className="w-4 h-4" /> Helpline
                    </div>
                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 h-[calc(100%-2rem)] flex flex-col justify-center">
                      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Customer Care</div>
                      <div className="text-slate-900 font-bold text-lg">121 / 198</div>
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
              <h2 className="text-2xl font-bold text-slate-900">When Can You Send a Legal Notice to Airtel?</h2>
            </div>
            <p className="text-slate-600 text-lg mb-6">
              Airtel's escalation matrix can feel like a dead end. A legal notice cuts through the noise and puts the matter before their legal department with a binding deadline. Common grounds include:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                "Postpaid bill with charges you never incurred",
                "Wrongful suspension or disconnection without dues",
                "SIM swap fraud leading to financial loss",
                "International roaming charges activated without consent",
                "Data balance deducted without usage",
                "Airtel Xstream / broadband service not provided after payment",
                "Mobile Number Portability request rejected or delayed beyond 7 days",
                "Unsolicited value-added services charged without opt-in",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium leading-snug">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 text-blue-800 p-4 rounded-lg font-medium shadow-inner">
              <span className="font-bold uppercase tracking-wider text-xs bg-blue-200 text-blue-900 px-2 py-1 rounded inline-block mb-2 mr-2">Note</span>
              Call 121 or 198 first, then escalate to the Nodal Officer. If 15–30 days pass without resolution, a legal notice is appropriate and legally justified.
            </div>
          </section>

          {/* Did You Know */}
          <DidYouKnowBlock
            title="Did you know?"
            text="Under TRAI's Consumer Protection Regulations, telecom operators are required to resolve billing complaints within 15 days. Failure to do so entitles you to approach the Appellate Authority and ultimately TDSAT — a legal notice accelerates this entire escalation path."
          />

          {/* 4. Legal Protection */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-8 pt-4 flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-primary" /> Laws That Protect You Against Airtel
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Consumer Protection Act, 2019", desc: "Telecom services fall squarely within the act. Overcharging or wrongful disconnection is a deficiency in service actionable under this statute." },
                { title: "TRAI Act, 1997 & QoS Regulations", desc: "TRAI mandates complaint resolution timelines, billing accuracy, and MNP compliance. Airtel's failure on any of these fronts is a regulatory breach." },
                { title: "Indian Contract Act, 1872", desc: "Your service plan is a contract. Charging for services not rendered, or failing to provide the subscribed plan, is a contractual breach." },
                { title: "IT Act, 2000", desc: "SIM swap fraud that leads to financial loss may attract criminal liability under Section 66C (identity theft) and Section 66D (cheating by impersonation)." },
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
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">Done Waiting? Send Airtel a Legal Notice.</h2>
              <p className="text-lg text-primary-foreground/90">Drafted by licensed advocates. Delivered to Airtel's registered office in 24 hours.</p>
              <BrandFormCTA service="legal-notice" variant="ghost-white">
                Send Legal Notice to Airtel — ₹1,499
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
