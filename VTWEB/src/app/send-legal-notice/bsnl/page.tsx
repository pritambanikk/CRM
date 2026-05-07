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
  title: "Send Legal Notice to BSNL — Advocate Drafted | vakiltech",
  description: "BSNL landline, broadband, or mobile issues unresolved? Send a lawyer-drafted legal notice to BSNL for ₹1,499. Legally binding, fast dispatch.",
  keywords: ["legal notice to bsnl", "bsnl complaint legal notice", "bsnl broadband legal notice", "bsnl landline complaint notice", "send legal notice bsnl", "bsnl mobile complaint legal notice"],
  alternates: {
    canonical: "https://vakiltech.in/send-legal-notice/bsnl",
  },
};

export default function BsnlLegalNoticePage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Legal Notice", href: "/send-legal-notice" },
    { label: "Send Legal Notice to BSNL", current: true },
  ];

  const faqs = [
    {
      question: "What is BSNL's registered address for sending a legal notice?",
      answer: "Send your notice to Bharat Sanchar Nigam Limited, Bharat Sanchar Bhawan, Harish Chandra Mathur Lane, Janpath, New Delhi – 110 001. As a government PSU, BSNL also has circle-wise offices — send a copy to the BSNL Nodal Officer of your telecom circle for faster resolution.",
    },
    {
      question: "Does sending a legal notice to a government company like BSNL actually work?",
      answer: "Yes — and it often works faster. A legal notice to BSNL carries extra weight because it triggers a mandatory escalation within the organisation and can precede action before the Telecom Disputes Settlement and Appellate Tribunal (TDSAT). Government entities are especially sensitive to formal legal communications.",
    },
    {
      question: "BSNL's broadband is down for weeks — can I claim a refund via legal notice?",
      answer: "Yes. BSNL is contractually obligated to provide the broadband service you've paid for. Prolonged outages without credit or resolution are a deficiency in service under the Consumer Protection Act, 2019. A legal notice can demand a pro-rata refund and compensation for the downtime.",
    },
    {
      question: "Can I send a legal notice to BSNL for a landline billing dispute?",
      answer: "Absolutely. Landline billing disputes — including wrongful STD/ISD charges, rental charges for disconnected lines, or duplicate bills — are all covered by the Consumer Protection Act. BSNL must resolve billing complaints within 15 days under TRAI regulations.",
    },
    {
      question: "I've been paying for a BSNL connection that was never installed — what can I do?",
      answer: "This is a clear case of charging without service delivery — a breach of contract and a consumer rights violation. A legal notice to BSNL demanding a full refund, along with compensation, is the appropriate first step before filing in consumer court.",
    },
    {
      question: "How much does it cost to send a legal notice to BSNL through vakiltech?",
      answer: "vakiltech charges ₹1,499 all-inclusive — advocate consultation, custom drafting, unlimited revisions, and Speed Post dispatch with Acknowledgment Due to BSNL's registered office.",
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
    name: "vakiltech — Send Legal Notice to BSNL",
    description: "Send a lawyer-drafted legal notice to Bharat Sanchar Nigam Limited's registered office for broadband, landline, and mobile service disputes. ₹1,499.",
    url: "https://vakiltech.in/send-legal-notice/bsnl",
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
                    Send Legal Notice to BSNL
                  </h1>
                  <p className="text-xl text-slate-600 leading-relaxed font-medium max-w-3xl">
                    BSNL is India's largest government-owned telecom operator. Broadband outages lasting
                    weeks, unresolved landline billing errors, and mobile services that simply stop working
                    are the most common complaints. A formal legal notice to BSNL carries extra authority
                    — notices to government PSUs are taken seriously and often produce faster results than
                    those sent to private operators.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <BrandFormCTA service="legal-notice">
                    Send Legal Notice to BSNL — ₹1,499
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

          {/* PSU Callout */}
          <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <ShieldCheck className="w-8 h-8 text-amber-600 shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-amber-900 mb-2">Legal Notices to Government PSUs Carry Extra Weight</h2>
                <p className="text-amber-800/90 leading-relaxed">
                  BSNL is a Public Sector Undertaking (PSU) under the Government of India. A formal legal notice
                  to a PSU triggers internal escalation processes that private companies don't have. BSNL officers
                  are personally accountable under service rules for ignoring valid legal notices — making resolution
                  faster in many cases.
                </p>
              </div>
            </div>
          </div>

          {/* 2. Registered Address */}
          <section className="scroll-mt-24" id="address">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Bharat Sanchar Nigam Limited — Registered Address for Legal Notice</h2>
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
                  <div className="font-bold text-slate-900 text-lg">Bharat Sanchar Nigam Limited (BSNL)</div>
                </div>

                <div className="p-6 grid sm:grid-cols-[200px_1fr] gap-4 bg-slate-50/50">
                  <div className="font-semibold text-slate-500 flex items-center gap-2">
                    <Hash className="w-4 h-4" /> Type
                  </div>
                  <div className="text-slate-700 bg-white border border-slate-200 px-3 py-1 rounded inline-block w-max font-medium">Government of India PSU — Ministry of Communications</div>
                </div>

                <div className="p-6 grid sm:grid-cols-[200px_1fr] gap-4">
                  <div className="font-semibold text-slate-500 flex flex-col gap-1 mt-1">
                    <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Registered Office</span>
                    <span className="text-xs font-normal ml-6">(For Legal Notice)</span>
                  </div>
                  <div className="text-slate-700 leading-relaxed font-medium">
                    Bharat Sanchar Bhawan, Harish Chandra Mathur Lane,<br />Janpath, New Delhi – 110 001
                  </div>
                </div>

                <div className="p-6 grid sm:grid-cols-[200px_1fr] gap-4 bg-slate-50/50">
                  <div className="font-semibold text-slate-500 flex flex-col gap-1 mt-1">
                    <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Circle Office</span>
                    <span className="text-xs font-normal ml-6">(Recommended)</span>
                  </div>
                  <div className="text-slate-700 leading-relaxed">
                    Send a copy to the BSNL Telecom District Manager or Nodal Officer of your telecom circle. This parallel escalation is particularly effective for BSNL as circle-level officers have direct authority over service issues.
                  </div>
                </div>

                <div className="p-6 grid sm:grid-cols-2 gap-6 bg-white">
                  <div className="space-y-4">
                    <div className="font-semibold text-slate-500 flex items-center gap-2">
                      <Mail className="w-4 h-4" /> Email
                    </div>
                    <div className="space-y-2">
                      <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Corporate Office</div>
                        <span className="text-primary font-medium break-all">pgportal.gov.in (via Public Grievance Portal)</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="font-semibold text-slate-500 flex items-center gap-2">
                      <Phone className="w-4 h-4" /> Helpline
                    </div>
                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 h-[calc(100%-2rem)] flex flex-col justify-center">
                      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Customer Care</div>
                      <div className="text-slate-900 font-bold text-lg">1800-180-1503 (Toll Free)</div>
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
              <h2 className="text-2xl font-bold text-slate-900">When Can You Send a Legal Notice to BSNL?</h2>
            </div>
            <p className="text-slate-600 text-lg mb-6">
              BSNL's complaint resolution process is often slow. A legal notice compels a formal, time-bound response from BSNL's legal department and circle officer simultaneously. You can send one for:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                "Broadband connection down for 7+ days without credit or resolution",
                "Landline billing errors — wrong STD/ISD charges or rental on dead line",
                "BSNL mobile data not working after valid recharge",
                "New broadband or landline connection not installed despite payment",
                "Wrongful disconnection of a paid-up connection",
                "BSNL charged you for a connection at your old address you vacated",
                "Speed far below subscribed broadband plan for extended period",
                "Port-out request from BSNL mobile refused or repeatedly delayed",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium leading-snug">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 text-blue-800 p-4 rounded-lg font-medium shadow-inner">
              <span className="font-bold uppercase tracking-wider text-xs bg-blue-200 text-blue-900 px-2 py-1 rounded inline-block mb-2 mr-2">Note</span>
              Call 1800-180-1503 and raise a written complaint first. You can also file on pgportal.gov.in (Public Grievance Portal). If 15–30 days pass without resolution, a legal notice is appropriate and typically very effective against a PSU.
            </div>
          </section>

          {/* Did You Know */}
          <DidYouKnowBlock
            title="Did you know?"
            text="BSNL, as a government PSU, can also be approached via the Public Grievance Portal (pgportal.gov.in) administered by the Department of Administrative Reforms. A legal notice sent in parallel with a PG portal complaint creates a two-track pressure that has an exceptionally high resolution rate."
          />

          {/* 4. Legal Protection */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-8 pt-4 flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-primary" /> Laws That Protect You Against BSNL
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Consumer Protection Act, 2019", desc: "Government-owned companies are fully subject to the Consumer Protection Act. BSNL cannot claim immunity from consumer complaints — Supreme Court has confirmed this repeatedly." },
                { title: "TRAI Act, 1997 & QoS Regulations", desc: "BSNL is a TRAI-licensed operator and must comply with the same Quality of Service norms as private operators, including complaint resolution timelines." },
                { title: "Indian Contract Act, 1872", desc: "Your broadband or landline subscription is a contract. Non-delivery of the subscribed service is a breach of contract giving rise to a refund and compensation claim." },
                { title: "Telecom Disputes Settlement (TDSAT)", desc: "If BSNL ignores the legal notice, you can file before TDSAT — the dedicated telecom tribunal. TDSAT proceedings can result in compensation orders against BSNL." },
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
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">BSNL Isn't Fixing It? A Legal Notice Gets Results.</h2>
              <p className="text-lg text-primary-foreground/90">Drafted by licensed advocates. Delivered to BSNL's registered office in 24 hours.</p>
              <BrandFormCTA service="legal-notice" variant="ghost-white">
                Send Legal Notice to BSNL — ₹1,499
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
