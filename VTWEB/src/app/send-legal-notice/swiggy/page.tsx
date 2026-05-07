import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { TrustSignalsSection } from "@/components/features/homepage/trust-signals";
import { FAQSection } from "@/components/shared/faq-section";
import { DidYouKnowBlock } from "@/components/shared/did-you-know";
import Link from 'next/link';
import {
  AlertTriangle, MapPin, Mail, Building2,
  Phone, Scale, FileText, CheckCircle2, ChevronRight, HelpCircle, AlertCircle, Hash, ShieldCheck
} from "lucide-react";

export const metadata: Metadata = {
  title: "Send Legal Notice to Swiggy | Registered Address + Complete Guide | vakiltech",
  description: "Swiggy not refunding your order? Send a lawyer-drafted legal notice to Swiggy Limited's registered address in Bengaluru. Resolve delivery, refund & food disputes. \u20b91,499. 24hr draft.",
  keywords: ["send legal notice to swiggy", "swiggy registered address legal notice", "swiggy grievance officer", "swiggy limited address", "swiggy refund legal notice", "how to file complaint against swiggy", "swiggy consumer complaint", "legal notice swiggy food not delivered"],
  alternates: {
    canonical: "https://vakiltech.in/send-legal-notice/swiggy",
  },
};

export default function SwiggyLegalNoticePage() {
const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Legal Notice", href: "/send-legal-notice" },
    { label: "Send Legal Notice to Swiggy", current: true },
  ];

  const faqs = [
    {
        "question": "What is Swiggy's registered address for a legal notice?",
        "answer": "Send your notice to Swiggy Limited (CIN: L74110KA2013PLC096530), No. 55, Sy No. 8-14, Ground Floor, I&J Block, Embassy Tech Village, Outer Ring Road, Devarbisanahalli, Bengaluru \u2013 560103, Karnataka. Grievance email: grievances@swiggy.in."
    },
    {
        "question": "Swiggy credited my refund to Swiggy wallet instead of my bank. Is that legal?",
        "answer": "No \u2014 if you specifically requested a bank refund, crediting it to Swiggy wallet without consent is an unfair trade practice under the Consumer Protection Act 2019. You can demand a bank refund through a legal notice."
    },
    {
        "question": "Swiggy says the restaurant is at fault. What do I do?",
        "answer": "Swiggy is jointly liable for platform failures including non-delivery, payment issues, and listing non-compliant restaurants. Your legal notice should name Swiggy Limited as the primary respondent."
    },
    {
        "question": "How long does Swiggy have to respond to a legal notice?",
        "answer": "15 to 30 days as specified in the notice. After that you can file a consumer complaint in the District Consumer Disputes Redressal Commission in your city."
    },
    {
        "question": "Can I file in my city even though Swiggy is in Bengaluru?",
        "answer": "Yes. Under the Consumer Protection Act 2019, you can file where you reside or where the transaction took place. You do not need to travel to Bengaluru."
    },
    {
        "question": "How much does it cost to send a legal notice to Swiggy?",
        "answer": "vakiltech charges \u20b91,499 all-inclusive \u2014 consultation with a licensed advocate, custom drafting, unlimited revisions, and Speed Post dispatch with Acknowledgment Due."
    }
];

  return (
    <>
    {/* schema-migrated */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is Swiggy's registered address for a legal notice?","acceptedAnswer":{"@type":"Answer","text":"Send your notice to Swiggy Limited (CIN: L74110KA2013PLC096530), No. 55, Sy No. 8-14, Ground Floor, I&J Block, Embassy Tech Village, Outer Ring Road, Devarbisanahalli, Bengaluru – 560103, Karnataka. Grievance email: grievances@swiggy.in."}},{"@type":"Question","name":"Swiggy credited my refund to Swiggy wallet instead of my bank. Is that legal?","acceptedAnswer":{"@type":"Answer","text":"No — if you specifically requested a bank refund, crediting it to Swiggy wallet without consent is an unfair trade practice under the Consumer Protection Act 2019. You can demand a bank refund through a legal notice."}},{"@type":"Question","name":"Swiggy says the restaurant is at fault. What do I do?","acceptedAnswer":{"@type":"Answer","text":"Swiggy is jointly liable for platform failures including non-delivery, payment issues, and listing non-compliant restaurants. Your legal notice should name Swiggy Limited as the primary respondent."}},{"@type":"Question","name":"How long does Swiggy have to respond to a legal notice?","acceptedAnswer":{"@type":"Answer","text":"15 to 30 days as specified in the notice. After that you can file a consumer complaint in the District Consumer Disputes Redressal Commission in your city."}},{"@type":"Question","name":"Can I file in my city even though Swiggy is in Bengaluru?","acceptedAnswer":{"@type":"Answer","text":"Yes. Under the Consumer Protection Act 2019, you can file where you reside or where the transaction took place. You do not need to travel to Bengaluru."}},{"@type":"Question","name":"How much does it cost to send a legal notice to Swiggy?","acceptedAnswer":{"@type":"Answer","text":"vakiltech charges ₹1,499 all-inclusive — consultation with a licensed advocate, custom drafting, unlimited revisions, and Speed Post dispatch with Acknowledgment Due."}}]}` }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"Service","name":"vakiltech — Send Legal Notice to Swiggy","description":"Send a lawyer-drafted legal notice to Swiggy Limited's registered address for food delivery disputes, refund issues, and consumer complaints. ₹1,499.","url":"https://vakiltech.in/send-legal-notice/swiggy","areaServed":{"@type":"Country","name":"India"},"provider":{"@type":"Organization","name":"vakiltech","url":"https://vakiltech.in"},"offers":{"@type":"Offer","price":"1499","priceCurrency":"INR"}}` }}
    />

    <main className="min-h-screen bg-neutral-50/50">

      {/* 1. Hero Section */}
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
                  Legal Guide & Service
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-[1.15] tracking-tight">
                  Send Legal Notice to Swiggy — Registered Address, Grievance Officer & Complete Guide
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed font-medium max-w-3xl">Swiggy is one of India's two dominant food delivery platforms — and one</p>
<p className="text-lg text-slate-600">of the most frequently complained-about consumer companies. If your order</p>
<p className="text-lg text-slate-600">was not delivered, you were charged without receiving food, Swiggy's</p>
<p className="text-lg text-slate-600">support ignored your repeated complaints, or a refund was refused after</p>
<p className="text-lg text-slate-600">a clear platform error, a formal legal notice is your most effective remedy.</p>
<p className="text-lg text-slate-600">This page gives you Swiggy's verified registered address, grievance officer</p>
<p className="text-lg text-slate-600">contact, and a complete step-by-step guide to resolving your dispute legally.</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/send-a-legal-notice"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  Send Legal Notice — ₹1,499
                  <ChevronRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/consultation"
                  className="bg-white border-2 border-slate-200 text-slate-700 hover:border-primary hover:text-primary px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 text-center shadow-sm"
                >
                  Talk to a Lawyer First
                </Link>
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

        {/* 2. Warning Box */}
        <div className="bg-red-50 border-l-4 border-red-500 rounded-r-xl p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-8 h-8 text-red-500 shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-bold text-red-900 mb-2">IMPORTANT — Swiggy's Correct Legal Entity for Consumer Notices</h2>
              <p className="text-red-800/80 mb-4 leading-relaxed">Swiggy has gone through multiple name changes. The company was originally</p>
<p className="text-red-800/80 mb-4 leading-relaxed">incorporated as Bundl Technologies Private Limited, then renamed to</p>
<p className="text-red-800/80 mb-4 leading-relaxed">Swiggy Private Limited, and is now listed as Swiggy Limited following</p>
<p className="text-red-800/80 mb-4 leading-relaxed">its IPO in November 2024.</p>
<p className="text-red-800/80 mb-4 leading-relaxed">For all consumer complaints related to food delivery on the Swiggy app,</p>
<p className="text-red-800/80 mb-4 leading-relaxed">the correct entity to address your legal notice to is Swiggy Limited</p>
<p className="text-red-800/80 mb-4 leading-relaxed">(formerly Bundl Technologies Private Limited).</p>
<p className="text-red-800/80 mb-4 leading-relaxed">Note: Swiggy Instamart (quick commerce) complaints also go to Swiggy</p>
<p className="text-red-800/80 mb-4 leading-relaxed">Limited — it operates as a division of the same entity, not a separate</p>
<p className="text-red-800/80 mb-4 leading-relaxed">legal company.</p>
            </div>
          </div>
        </div>

        {/* 3. Registered Address Block */}
        <section className="scroll-mt-24" id="address">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Swiggy Limited (formerly Bundl Technologies Private Limited) — Registered Address for Legal Notice</h2>
          <p className="text-slate-600 text-lg mb-8">Send your legal notice via Speed Post with Acknowledgment Due to:</p>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex items-center gap-3">
              <Building2 className="text-slate-500" />
              <h3 className="font-bold text-xl text-slate-800">Legal Entity details</h3>
            </div>

            <div className="divide-y divide-slate-100">
              <div className="p-6 grid sm:grid-cols-[200px_1fr] gap-4">
                <div className="font-semibold text-slate-500 flex items-center gap-2">
                  <FileText className="w-4 h-4" /> Legal Entity Name
                </div>
                <div className="font-bold text-slate-900 text-lg">Swiggy Limited (formerly Bundl Technologies Private Limited)</div>
              </div>

              <div className="p-6 grid sm:grid-cols-[200px_1fr] gap-4 bg-slate-50/50">
                <div className="font-semibold text-slate-500 flex items-center gap-2">
                  <Hash className="w-4 h-4" /> CIN
                </div>
                <div className="font-mono text-slate-700 bg-white border border-slate-200 px-3 py-1 rounded inline-block w-max">L74110KA2013PLC096530</div>
              </div>

              <div className="p-6 grid sm:grid-cols-[200px_1fr] gap-4">
                <div className="font-semibold text-slate-500 flex flex-col gap-1 mt-1">
                  <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Registered Office</span>
                  <span className="text-xs font-normal ml-6">(For Legal Notice)</span>
                </div>
                <div className="text-slate-700 leading-relaxed font-medium">
                  <span dangerouslySetInnerHTML={{__html: ``}} />
                </div>
              </div>

              

              <div className="p-6 grid sm:grid-cols-2 gap-6 bg-white">
                <div className="space-y-4">
                  <div className="font-semibold text-slate-500 flex items-center gap-2">
                    <Mail className="w-4 h-4" /> Email Addresses
                  </div>
                  <div className="space-y-2">
                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-100"><div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Grievance Officer</div><span className="text-primary font-medium hover:underline break-all">grievances@swiggy.in</span></div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="font-semibold text-slate-500 flex items-center gap-2">
                    <Phone className="w-4 h-4" /> Telephone
                  </div>
                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 h-[calc(100%-2rem)] flex flex-col justify-center">
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Contact Phone</div>
                    <div className="text-slate-900 font-bold text-lg">080-68422422</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. When Can You Send */}
        <section className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <HelpCircle className="w-8 h-8 text-primary" />
            <h2 className="text-2xl font-bold text-slate-900">Food Never Arrived? When to Stop Arguing and Escalate.</h2>
          </div>
          <p className="text-slate-600 text-lg mb-6">Swiggy support often relies on automated scripts. If you are constantly bouncing between chatbot responses regarding missing food, InstaMart discrepancies, or denied refunds, it's time for legal intervention. Common scenarios include:</p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /><span className="text-slate-700 font-medium leading-snug">Order marked delivered but food never arrived</span></div>
<div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /><span className="text-slate-700 font-medium leading-snug">Wrong order delivered and refund denied</span></div>
<div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /><span className="text-slate-700 font-medium leading-snug">Food arrived in poor condition — spoiled, tampered packaging, cold</span></div>
<div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /><span className="text-slate-700 font-medium leading-snug">Delivery executive fraud — claimed delivery without delivering</span></div>
<div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /><span className="text-slate-700 font-medium leading-snug">Swiggy One membership benefits not honoured</span></div>
<div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /><span className="text-slate-700 font-medium leading-snug">Hidden charges added without prior disclosure</span></div>
<div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /><span className="text-slate-700 font-medium leading-snug">Refund credited to Swiggy wallet instead of original payment method</span></div>
<div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /><span className="text-slate-700 font-medium leading-snug">despite requesting bank refund</span></div>
<div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /><span className="text-slate-700 font-medium leading-snug">Instamart order with missing or substitute items and no refund</span></div>
<div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /><span className="text-slate-700 font-medium leading-snug">Platform credited refund to wrong account or wallet without consent</span></div>
          </div>

          <div className="bg-blue-50 text-blue-800 p-4 rounded-lg font-medium shadow-inner">
            <span className="font-bold uppercase tracking-wider text-xs bg-blue-200 text-blue-900 px-2 py-1 rounded inline-block mb-2 mr-2">Note</span>
            You should attempt resolution through customer support before sending a legal notice. However, if 15–30 days have passed with no satisfactory resolution, a legal notice is appropriate.
          </div>
        </section>

        {/* Did You Know Block */}
        <DidYouKnowBlock 
            title="Did you know?"
            text="Swiggy is legally more than just an intermediary. Under the Consumer Protection (E-Commerce) Rules 2020, platforms are directly responsible for establishing robust grievance redressal, meaning they cannot wash their hands of delayed deliveries or spoiled food." 
        />

        {/* 5. Step by Step Guide */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-8 pt-4">Your Roadmap to Escalation: Getting Past "Support"</h2>

          <div className="relative border-l-2 border-slate-200 ml-4 md:ml-6 space-y-10 pb-4">
            <div className="relative pl-8 md:pl-10">
              <div className="absolute -left-[17px] top-0 bg-white border-2 border-slate-300 text-slate-500 w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-sm">1</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Step 1 — Report Immediately in the Swiggy App</h3>
              <p className="text-slate-600 leading-relaxed mb-4">Use the Help section in the Swiggy app right after the issue. Report within 24 hours for best results. Screenshot all chat responses and</p>
            </div>
<div className="relative pl-8 md:pl-10">
              <div className="absolute -left-[17px] top-0 bg-white border-2 border-slate-300 text-slate-500 w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-sm">2</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Step 2 — Escalate to Swiggy Grievance Officer</h3>
              <p className="text-slate-600 leading-relaxed mb-4">Email grievances@swiggy.in with your order ID, complaint ticket, and the specific resolution you are seeking. Swiggy must respond within 15</p>
            </div>

<div className="relative pl-8 md:pl-10">
              <div className="absolute -left-[17px] top-0 bg-primary border-2 border-white text-primary-foreground shadow ring-2 ring-primary/20 w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-sm">3</div>
              <h3 className="text-xl font-bold text-primary mb-2">Step 3 — Send a Legal Notice</h3>
              <p className="text-slate-600 leading-relaxed mb-4">Send a formal legal notice through a licensed advocate. This step typically results in Swiggy's executive resolution team reviewing</p>
            </div>
<div className="relative pl-8 md:pl-10">
              <div className="absolute -left-[17px] top-0 bg-slate-800 border-2 border-white text-white shadow w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-sm">4</div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Step 4 — Consumer Court</h3>
              <p className="text-slate-600 leading-relaxed mb-4">If Swiggy ignores the legal notice within 15–30 days, file at the District Consumer Disputes Redressal Commission in your city.</p>
            </div>
          </div>
        </section>

        {/* 6. Which Laws Protect You */}
        <section><h2 className="text-3xl font-bold text-slate-900 mb-8 pt-4 flex items-center gap-3"><ShieldCheck className="w-8 h-8 text-primary" /> Your Legal Armor against delivery apps</h2><div className="grid md:grid-cols-2 gap-6"></div></section>

        {/* 7. Success Story */}
        <section className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 rounded-3xl p-8 shadow-sm">
          <div className="inline-block bg-emerald-100 text-emerald-800 font-bold px-3 py-1 rounded-full text-sm mb-4">Real Success Story</div>
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-emerald-50"><p className="text-slate-700 text-lg leading-relaxed mb-6 italic hover:not-italic transition-all duration-500">"Sneha Kapoor from Mumbai ordered dinner for a family event through Swiggy.
The delivery executive marked the order delivered but Sneha never received
it. Swiggy refused a refund citing GPS confirmation of delivery. After
two escalations over 20 days with no resolution, Sneha sent a legal notice
through vakiltech. Swiggy's customer experience team contacted her within
3 days and processed a full refund to her bank account."</p><div className="text-xs text-slate-400 pt-4 border-t border-slate-100">Note: This is a representative example based on the typical outcome of legal notices in consumer disputes. Individual results may vary.</div></div>
        </section>

        {/* 8. Compensation */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">How Much Compensation Can You Claim from Swiggy?</h2>
          <p className="text-slate-600 text-lg mb-6">Beyond your refund, you can also claim:</p>

          <ul className="space-y-4 mb-8">
            {[
              "The cost of the legal notice (advocate fees)",
              "Compensation for mental harassment and inconvenience",
              "Interest on the amount withheld",
              "Costs of filing the consumer complaint (if it reaches court)"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <div className="bg-slate-100 p-2 rounded-full text-slate-500 shrink-0"><CheckCircle2 className="w-5 h-5" /></div>
                <span className="font-medium text-slate-700">{item}</span>
              </li>
            ))}
          </ul>

          <div className="bg-primary/5 border border-primary/20 p-6 rounded-2xl text-slate-800">
            <span className="font-bold text-primary">Expert Insight: </span>
            clear deficiency of service by food delivery platforms.
          </div>
        </section>

        {/* 9. Mid-Page CTA */}
        <section className="bg-primary rounded-3xl p-10 text-center shadow-lg relative overflow-hidden my-16">
          <div className="relative z-10 max-w-2xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">Stop Waiting for Customer Support. Take Legal Action.</h2>
            <p className="text-lg text-primary-foreground/90">Drafted by licensed advocates. Delivered in 24 hours.</p>

            <Link
              href="/send-a-legal-notice"
              className="inline-flex items-center gap-3 bg-white text-primary hover:bg-slate-50 px-8 py-5 rounded-xl font-bold text-xl shadow transition-all duration-300 transform hover:scale-105"
            >
              Send Legal Notice — ₹1,499
              <ChevronRight className="w-6 h-6" />
            </Link>
          </div>
        </section>

        {/* 10. Related Services */}
        <section className="pt-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Related Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/send-legal-notice/consumer-complaint-legal-notice" className="block group">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 h-full shadow-lg hover:shadow-xl hover:border-slate-700 transition-all duration-300 flex flex-col relative overflow-hidden">
                <h3 className="font-bold text-lg text-white mb-3 relative z-10">Consumer Complaint Notice</h3>
                <p className="text-slate-400 text-sm flex-grow mb-6 relative z-10">Send legal notices to any company for consumer disputes. All types handled.</p>
                <div className="text-white text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all relative z-10">See Details <ChevronRight className="w-4 h-4" /></div>
              </div>
            </Link>
          </div>
        </section>

      </div>

      <TrustSignalsSection />

      {faqs.length > 0 && (
        <FAQSection faqs={faqs} title="Frequently Asked Questions" />
      )}
    </main>
    </>
  );
}
