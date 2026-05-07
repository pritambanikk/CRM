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
  title: "Send Legal Notice to Meesho | Registered Address + Complete Guide | vakiltech",
  description: "Meesho sent fake or wrong product? Send a lawyer-drafted legal notice to Meesho Limited's registered address in Bengaluru. Resolve refund & product disputes. \u20b91,499. 24hr draft.",
  keywords: ["send legal notice to meesho", "meesho registered address legal notice", "meesho grievance officer", "meesho limited address", "meesho fake product legal notice", "how to file complaint against meesho", "meesho consumer complaint", "meesho refund not received"],
  alternates: {
    canonical: "https://vakiltech.in/send-legal-notice/meesho",
  },
};

export default function MeeshoLegalNoticePage() {
const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Legal Notice", href: "/send-legal-notice" },
    { label: "Send Legal Notice to Meesho", current: true },
  ];

  const faqs = [
    {
        "question": "What is Meesho's registered address for a legal notice?",
        "answer": "Send your notice to Meesho Limited (CIN: L74900KA2015PLC082263), 3rd Floor, Wing-E, Helios Business Park, Kadubeesanahalli Village, Varthur Hobli, Outer Ring Road, Bengaluru, Karnataka \u2013 560103. Grievance email: grievances@meesho.com."
    },
    {
        "question": "Can I hold Meesho responsible for a seller's fake product?",
        "answer": "Yes. Under the Consumer Protection (E-Commerce) Rules 2020, Meesho as the marketplace is responsible for ensuring sellers provide accurate product information. Listing a fake product as genuine makes Meesho jointly liable with the seller."
    },
    {
        "question": "Meesho says the return window has closed. Can I still send a legal notice?",
        "answer": "Yes. The Consumer Protection Act 2019 allows you to file a complaint within 2 years of the cause of action. A closed return window on Meesho's app does not extinguish your legal rights."
    },
    {
        "question": "How much does it cost to send a legal notice to Meesho?",
        "answer": "vakiltech charges \u20b91,499 all-inclusive \u2014 consultation with a licensed advocate, custom drafting, unlimited revisions, and Speed Post dispatch with Acknowledgment Due."
    }
];

  return (
    <>
    {/* schema-migrated */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is Meesho's registered address for a legal notice?","acceptedAnswer":{"@type":"Answer","text":"Send your notice to Meesho Limited (CIN: L74900KA2015PLC082263), 3rd Floor, Wing-E, Helios Business Park, Kadubeesanahalli Village, Varthur Hobli, Outer Ring Road, Bengaluru, Karnataka – 560103. Grievance email: grievances@meesho.com."}},{"@type":"Question","name":"Can I hold Meesho responsible for a seller's fake product?","acceptedAnswer":{"@type":"Answer","text":"Yes. Under the Consumer Protection (E-Commerce) Rules 2020, Meesho as the marketplace is responsible for ensuring sellers provide accurate product information. Listing a fake product as genuine makes Meesho jointly liable with the seller."}},{"@type":"Question","name":"Meesho says the return window has closed. Can I still send a legal notice?","acceptedAnswer":{"@type":"Answer","text":"Yes. The Consumer Protection Act 2019 allows you to file a complaint within 2 years of the cause of action. A closed return window on Meesho's app does not extinguish your legal rights."}},{"@type":"Question","name":"How much does it cost to send a legal notice to Meesho?","acceptedAnswer":{"@type":"Answer","text":"vakiltech charges ₹1,499 all-inclusive — consultation with a licensed advocate, custom drafting, unlimited revisions, and Speed Post dispatch with Acknowledgment Due."}}]}` }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"Service","name":"vakiltech — Send Legal Notice to Meesho","description":"Send a lawyer-drafted legal notice to Meesho Limited's registered address for fake products, refund disputes, and consumer complaints. ₹1,499.","url":"https://vakiltech.in/send-legal-notice/meesho","areaServed":{"@type":"Country","name":"India"},"provider":{"@type":"Organization","name":"vakiltech","url":"https://vakiltech.in"},"offers":{"@type":"Offer","price":"1499","priceCurrency":"INR"}}` }}
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
                  Send Legal Notice to Meesho — Registered Address, Grievance Officer & Complete Guide
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed font-medium max-w-3xl">Meesho is one of India's fastest-growing e-commerce platforms — and also</p>
<p className="text-lg text-slate-600">one of the top sources of consumer complaints, particularly regarding fake</p>
<p className="text-lg text-slate-600">products, wrong items, and refund disputes. If Meesho or one of its sellers</p>
<p className="text-lg text-slate-600">has sent you a fake, defective, or completely wrong product and your refund</p>
<p className="text-lg text-slate-600">has been refused, a formal legal notice is your most effective remedy.</p>
<p className="text-lg text-slate-600">This page gives you Meesho's verified registered address, grievance officer</p>
<p className="text-lg text-slate-600">details, and a complete guide to resolving your dispute legally.</p>
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
              <h2 className="text-xl font-bold text-red-900 mb-2">IMPORTANT — Meesho's Correct Legal Entity for Consumer Notices</h2>
              <p className="text-red-800/80 mb-4 leading-relaxed">Meesho has recently changed its legal name. The company was originally</p>
<p className="text-red-800/80 mb-4 leading-relaxed">incorporated as Fashnear Technologies Private Limited, then renamed to</p>
<p className="text-red-800/80 mb-4 leading-relaxed">Meesho Private Limited, and is now Meesho Limited following its public</p>
<p className="text-red-800/80 mb-4 leading-relaxed">listing in 2025 (CIN updated to reflect public company status).</p>
<p className="text-red-800/80 mb-4 leading-relaxed">Always address your legal notice to Meesho Limited at the registered</p>
<p className="text-red-800/80 mb-4 leading-relaxed">address below. Do not send to old addresses associated with Fashnear</p>
<p className="text-red-800/80 mb-4 leading-relaxed">Technologies — use the current Helios Business Park address.</p>
            </div>
          </div>
        </div>

        {/* 3. Registered Address Block */}
        <section className="scroll-mt-24" id="address">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Meesho Limited (formerly Fashnear Technologies Private Limited) — Registered Address for Legal Notice</h2>
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
                <div className="font-bold text-slate-900 text-lg">Meesho Limited (formerly Fashnear Technologies Private Limited)</div>
              </div>

              <div className="p-6 grid sm:grid-cols-[200px_1fr] gap-4 bg-slate-50/50">
                <div className="font-semibold text-slate-500 flex items-center gap-2">
                  <Hash className="w-4 h-4" /> CIN
                </div>
                <div className="font-mono text-slate-700 bg-white border border-slate-200 px-3 py-1 rounded inline-block w-max">L74900KA2015PLC082263</div>
              </div>

              <div className="p-6 grid sm:grid-cols-[200px_1fr] gap-4">
                <div className="font-semibold text-slate-500 flex flex-col gap-1 mt-1">
                  <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Registered Office</span>
                  <span className="text-xs font-normal ml-6">(For Legal Notice)</span>
                </div>
                <div className="text-slate-700 leading-relaxed font-medium">
                  <span dangerouslySetInnerHTML={{__html: `3rd Floor, Wing-E, Helios Business Park,<br />Kadubeesanahalli Village, Varthur Hobli,<br />Outer Ring Road, Bengaluru, Karnataka – 560103`}} />
                </div>
              </div>

              

              <div className="p-6 grid sm:grid-cols-2 gap-6 bg-white">
                <div className="space-y-4">
                  <div className="font-semibold text-slate-500 flex items-center gap-2">
                    <Mail className="w-4 h-4" /> Email Addresses
                  </div>
                  <div className="space-y-2">
                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-100"><div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Grievance Officer</div><span className="text-primary font-medium hover:underline break-all">grievances@meesho.com</span></div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="font-semibold text-slate-500 flex items-center gap-2">
                    <Phone className="w-4 h-4" /> Telephone
                  </div>
                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 h-[calc(100%-2rem)] flex flex-col justify-center">
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Contact Phone</div>
                    <div className="text-slate-900 font-bold text-lg"></div>
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
            <h2 className="text-2xl font-bold text-slate-900">Fraudulent Sellers or Empty Boxes? When to Take Action.</h2>
          </div>
          <p className="text-slate-600 text-lg mb-6">Meesho connects buyers with thousands of independent resellers, which unfortunately leads to cases of fraud—like receiving empty packages or fundamentally different, low-quality items. If customer care refuses to intervene and refund your purchase, legal action is your recourse. Common scenarios:</p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /><span className="text-slate-700 font-medium leading-snug">Product received is fake or counterfeit — not matching listing description</span></div>
<div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /><span className="text-slate-700 font-medium leading-snug">Completely wrong item delivered and return/refund refused</span></div>
<div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /><span className="text-slate-700 font-medium leading-snug">Product quality significantly inferior to what was advertised</span></div>
<div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /><span className="text-slate-700 font-medium leading-snug">Return picked up by Meesho but refund not credited</span></div>
<div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /><span className="text-slate-700 font-medium leading-snug">Seller on Meesho is fraudulent — unreachable after receiving payment</span></div>
<div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /><span className="text-slate-700 font-medium leading-snug">Damaged product delivered with no recourse offered</span></div>
<div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /><span className="text-slate-700 font-medium leading-snug">Refund processed but amount not received in bank or wallet</span></div>
<div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /><span className="text-slate-700 font-medium leading-snug">Order cancelled by Meesho without refund</span></div>
          </div>

          <div className="bg-blue-50 text-blue-800 p-4 rounded-lg font-medium shadow-inner">
            <span className="font-bold uppercase tracking-wider text-xs bg-blue-200 text-blue-900 px-2 py-1 rounded inline-block mb-2 mr-2">Note</span>
            You should attempt resolution through customer support before sending a legal notice. However, if 15–30 days have passed with no satisfactory resolution, a legal notice is appropriate.
          </div>
        </section>

        {/* Did You Know Block */}
        <DidYouKnowBlock 
            title="Did you know?"
            text="Although Meesho operates on a pure marketplace model with independent resellers, Indian consumer laws dictate they must actively protect against fraudulent sellers and ensure buyers are fully shielded from fake shipments." 
        />

        {/* 5. Step by Step Guide */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-8 pt-4">Your Roadmap to Escalation: Getting Past "Support"</h2>

          <div className="relative border-l-2 border-slate-200 ml-4 md:ml-6 space-y-10 pb-4">
            <div className="relative pl-8 md:pl-10">
              <div className="absolute -left-[17px] top-0 bg-white border-2 border-slate-300 text-slate-500 w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-sm">1</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Step 1 — Report in the Meesho App</h3>
              <p className="text-slate-600 leading-relaxed mb-4">Use the Orders section in the Meesho app to raise a return or complaint. Photograph the product clearly before initiating any return. Screenshot</p>
            </div>
<div className="relative pl-8 md:pl-10">
              <div className="absolute -left-[17px] top-0 bg-white border-2 border-slate-300 text-slate-500 w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-sm">2</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Step 2 — Escalate to Meesho Grievance Officer</h3>
              <p className="text-slate-600 leading-relaxed mb-4">Email grievances@meesho.com with your order ID, photos of the wrong or fake product, and the specific resolution you are seeking.</p>
            </div>

<div className="relative pl-8 md:pl-10">
              <div className="absolute -left-[17px] top-0 bg-primary border-2 border-white text-primary-foreground shadow ring-2 ring-primary/20 w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-sm">3</div>
              <h3 className="text-xl font-bold text-primary mb-2">Step 3 — Send a Legal Notice</h3>
              <p className="text-slate-600 leading-relaxed mb-4">Send a formal legal notice through a licensed advocate. This is particularly effective against Meesho as the platform is sensitive</p>
            </div>
<div className="relative pl-8 md:pl-10">
              <div className="absolute -left-[17px] top-0 bg-slate-800 border-2 border-white text-white shadow w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-sm">4</div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Step 4 — Consumer Court</h3>
              <p className="text-slate-600 leading-relaxed mb-4">File in the District Consumer Disputes Redressal Commission in your city if Meesho ignores the notice within 15–30 days.</p>
            </div>
          </div>
        </section>

        {/* 6. Which Laws Protect You */}
        <section><h2 className="text-3xl font-bold text-slate-900 mb-8 pt-4 flex items-center gap-3"><ShieldCheck className="w-8 h-8 text-primary" /> Your Legal Armor in the marketplace</h2><div className="grid md:grid-cols-2 gap-6"></div></section>

        {/* 7. Success Story */}
        <section className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 rounded-3xl p-8 shadow-sm">
          <div className="inline-block bg-emerald-100 text-emerald-800 font-bold px-3 py-1 rounded-full text-sm mb-4">Real Success Story</div>
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-emerald-50"><p className="text-slate-700 text-lg leading-relaxed mb-6 italic hover:not-italic transition-all duration-500">"Kavitha Reddy from Chennai ordered a silk saree worth ₹4,200 on Meesho.
She received a completely different synthetic saree worth a fraction of
what she paid. Meesho's support kept asking for more photos and eventually
closed her complaint without a refund. She sent a legal notice through
vakiltech citing the Consumer Protection Act and E-Commerce Rules. Meesho
issued a full refund within 6 days of receiving the notice."</p><div className="text-xs text-slate-400 pt-4 border-t border-slate-100">Note: This is a representative example based on the typical outcome of legal notices in consumer disputes. Individual results may vary.</div></div>
        </section>

        {/* 8. Compensation */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">How Much Compensation Can You Claim?</h2>
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
            Consumer courts regularly award ₹2,000 to ₹50,000 in compensation for clear-cut cases of deficiency of service.
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
