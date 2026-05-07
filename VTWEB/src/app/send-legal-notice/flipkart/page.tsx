import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { TrustSignalsSection } from "@/components/features/homepage/trust-signals";
import { FAQSection } from "@/components/shared/faq-section";
import Link from 'next/link';
import {
  AlertTriangle, MapPin, Mail, Building2,
  Phone, Scale, FileText, CheckCircle2, ChevronRight, HelpCircle, AlertCircle, Hash, ShieldCheck
} from "lucide-react";

export const metadata: Metadata = {
  title: "Send Legal Notice to Flipkart | Registered Address + Step-by-Step Guide | vakiltech",
  description: "Flipkart not responding? Send a lawyer-drafted legal notice to Flipkart's registered address. Resolve refund, delivery & product disputes legally. ₹1,499. Drafted in 24 hours.",
  keywords: ["send legal notice to flipkart", "flipkart registered address for legal notice", "flipkart legal notice", "flipkart consumer complaint", "flipkart grievance officer", "flipkart not refunding", "how to file complaint against flipkart", "legal notice flipkart refund", "flipkart consumer court"],
  alternates: {
    canonical: "https://vakiltech.in/send-legal-notice/flipkart",
  },
};

export default function FlipkartLegalNoticePage() {
const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Legal Notice", href: "/send-legal-notice" },
    { label: "Send Legal Notice to Flipkart", current: true },
  ];

  const faqs = [
    {
      "question": "Is Flipkart responsible for seller fraud on its platform?",
      "answer": "Yes. Under the Consumer Protection (E-Commerce) Rules, 2020, Flipkart as a marketplace entity is responsible for ensuring sellers comply with consumer protection laws. If a seller on Flipkart defrauds you, you can send your legal notice to both the seller and Flipkart Internet Private Limited."
    },
    {
      "question": "What if Flipkart says it is the seller's responsibility and not theirs?",
      "answer": "This is a common tactic. However, under the Consumer Protection Act, 2019, both the seller and the platform are jointly liable in many situations — particularly for misleading listings, fake products, or non-delivery. A legal notice citing both parties usually prompts faster resolution."
    },
    {
      "question": "How long does Flipkart have to respond to a legal notice?",
      "answer": "A legal notice typically gives the recipient 15 to 30 days to respond. If Flipkart does not respond within this period, you can proceed to file a consumer complaint in the District Consumer Disputes Redressal Commission in your city."
    },
    {
      "question": "Can I send a legal notice to Flipkart myself without a lawyer?",
      "answer": "Technically yes, but it is strongly inadvisable. A notice on an advocate's letterhead with a valid Bar Council number carries significantly more legal weight. Flipkart's legal team receives self-drafted notices regularly and knows they can be dismissed more easily. A notice from a licensed advocate signals that you are serious and prepared to go to court."
    },
    {
      "question": "Does Flipkart actually respond to legal notices?",
      "answer": "Yes — large corporations like Flipkart take legal notices seriously because consumer court cases create records, media attention, and legal costs for them. Most disputes involving amounts below ₹2 lakhs are settled after a legal notice to avoid the hassle of litigation."
    },
    {
      "question": "What court do I approach if Flipkart ignores my legal notice?",
      "answer": "File in the District Consumer Disputes Redressal Commission in your city. For claims up to ₹50 lakhs, the district commission has jurisdiction. For claims above ₹50 lakhs, approach the State Consumer Disputes Redressal Commission. You do not need to go to Bengaluru where Flipkart is registered — you can file in the district where you reside or where the transaction took place."
    },
    {
      "question": "What is the time limit to file a consumer complaint against Flipkart?",
      "answer": "Under the Consumer Protection Act, 2019, you must file a consumer complaint within 2 years from the date the cause of action arose (i.e., when the issue first occurred). Send your legal notice before this deadline."
    },
    {
      "question": "How much does it cost to send a legal notice to Flipkart?",
      "answer": "With vakiltech, you can send a professionally drafted legal notice to Flipkart for ₹1,499 — all inclusive. This covers consultation with a licensed advocate, custom drafting based on your case, unlimited revisions, and sending via Speed Post with Acknowledgment Due."
    }
  ];

  return (
    <>
    {/* schema-migrated */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Is Flipkart responsible for seller fraud on its platform?","acceptedAnswer":{"@type":"Answer","text":"Yes. Under the Consumer Protection (E-Commerce) Rules, 2020, Flipkart as a marketplace entity is responsible for ensuring sellers comply with consumer protection laws. If a seller on Flipkart defrauds you, you can send your legal notice to both the seller and Flipkart Internet Private Limited."}},{"@type":"Question","name":"What is Flipkart's registered address for sending a legal notice?","acceptedAnswer":{"@type":"Answer","text":"Send your legal notice to Flipkart Internet Private Limited (CIN: U51109KA2012PTC066107), Buildings Alyssa, Begonia & Clover, Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village, Bengaluru, Karnataka - 560103. Note: Do NOT send to Flipkart India Private Limited - that is a B2B entity and not responsible for consumer transactions on Flipkart.com."}},{"@type":"Question","name":"How long does Flipkart have to respond to a legal notice?","acceptedAnswer":{"@type":"Answer","text":"A legal notice typically gives Flipkart 15 to 30 days to respond. If they do not respond within this period, you can proceed to file a consumer complaint in the District Consumer Disputes Redressal Commission in your city."}},{"@type":"Question","name":"Can I send a legal notice to Flipkart myself without a lawyer?","acceptedAnswer":{"@type":"Answer","text":"Technically yes, but it is strongly inadvisable. A notice on an advocate's letterhead with a valid Bar Council number carries significantly more legal weight. A notice from a licensed advocate signals that you are serious and prepared to go to court."}},{"@type":"Question","name":"What court do I approach if Flipkart ignores my legal notice?","acceptedAnswer":{"@type":"Answer","text":"File in the District Consumer Disputes Redressal Commission in your city. For claims up to ₹50 lakhs, the district commission has jurisdiction. You can file in the district where you reside or where the transaction took place — you do not need to go to Bengaluru where Flipkart is registered."}},{"@type":"Question","name":"What is the time limit to file a consumer complaint against Flipkart?","acceptedAnswer":{"@type":"Answer","text":"Under the Consumer Protection Act, 2019, you must file a consumer complaint within 2 years from the date the cause of action arose. Send your legal notice before this deadline."}},{"@type":"Question","name":"How much does it cost to send a legal notice to Flipkart?","acceptedAnswer":{"@type":"Answer","text":"With vakiltech, you can send a professionally drafted legal notice to Flipkart for ₹1,499 — all inclusive. This covers consultation with a licensed advocate, custom drafting, unlimited revisions, and sending via Speed Post with Acknowledgment Due."}},{"@type":"Question","name":"Does Flipkart actually respond to legal notices?","acceptedAnswer":{"@type":"Answer","text":"Yes — large corporations like Flipkart take legal notices seriously because consumer court cases create records and legal costs for them. Most disputes involving amounts below ₹2 lakhs are settled after a legal notice to avoid the hassle of litigation."}}]}` }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"Service","name":"vakiltech — Send Legal Notice to Flipkart","description":"Send a lawyer-drafted legal notice to Flipkart's registered address for refund disputes, fake products, delivery issues, and consumer complaints. Starting ₹1,499.","url":"https://vakiltech.in/send-legal-notice/flipkart","areaServed":{"@type":"Country","name":"India"},"provider":{"@type":"Organization","name":"vakiltech","url":"https://vakiltech.in"},"offers":{"@type":"Offer","price":"1499","priceCurrency":"INR","availability":"https://schema.org/InStock"}}` }}
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
                  Send Legal Notice to Flipkart — Registered Address, Grievance Officer & Complete Guide
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed font-medium max-w-3xl">
                  Flipkart is India's largest e-commerce platform — and also one of the most complained-about companies in Indian consumer courts. If Flipkart has refused your refund, delivered a fake or wrong product, or ignored your repeated support requests, a formal legal notice is your most effective next step.
                </p>
                <p className="text-lg text-slate-600">
                  This page gives you Flipkart's verified registered address, grievance officer contact, and a complete guide to getting your money back legally.
                </p>
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

            {/* Quick Stats sidebar */}
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
              <h2 className="text-xl font-bold text-red-900 mb-2">IMPORTANT — Send Your Notice to the Right Flipkart Entity</h2>
              <p className="text-red-800/80 mb-4 leading-relaxed">
                Many people make a critical mistake when sending legal notices to Flipkart: they address it to the wrong company.
              </p>
              <p className="text-red-800/80 mb-4 leading-relaxed">
                Flipkart operates through two separate legal entities. <strong>Flipkart India Private Limited (CIN: U51909KA2011PTC060489)</strong> is a wholesale B2B company that sells in bulk to registered sellers — it does NOT run the Flipkart.com website or app where you shop. Sending your notice to this entity will likely go unanswered because they are not the party responsible for your consumer dispute.
              </p>
              <p className="text-red-900 font-medium leading-relaxed bg-red-100/50 p-4 rounded-lg">
                The correct entity for all consumer complaints is <strong>Flipkart Internet Private Limited (CIN: U51109KA2012PTC066107)</strong> — this is the company that operates Flipkart.com, processes your orders, and is legally responsible for the marketplace.
              </p>
            </div>
          </div>
        </div>

        {/* 3. Registered Address Block */}
        <section className="scroll-mt-24" id="address">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Flipkart Internet Private Limited — Registered Address for Legal Notice</h2>
          <p className="text-slate-600 text-lg mb-8">Send your legal notice to this address via Speed Post with Acknowledgment Due:</p>

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
                <div className="font-bold text-slate-900 text-lg">Flipkart Internet Private Limited</div>
              </div>

              <div className="p-6 grid sm:grid-cols-[200px_1fr] gap-4 bg-slate-50/50">
                <div className="font-semibold text-slate-500 flex items-center gap-2">
                  <Hash className="w-4 h-4" /> CIN
                </div>
                <div className="font-mono text-slate-700 bg-white border border-slate-200 px-3 py-1 rounded inline-block w-max">U51109KA2012PTC066107</div>
              </div>

              <div className="p-6 grid sm:grid-cols-[200px_1fr] gap-4">
                <div className="font-semibold text-slate-500 flex flex-col gap-1 mt-1">
                  <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Registered Office</span>
                  <span className="text-xs font-normal ml-6">(For Legal Notice)</span>
                </div>
                <div className="text-slate-700 leading-relaxed font-medium">
                  Buildings Alyssa, Begonia & Clover, Embassy Tech Village,<br />
                  Outer Ring Road, Devarabeesanahalli Village,<br />
                  Bengaluru, Karnataka – 560103
                </div>
              </div>

              <div className="p-6 grid sm:grid-cols-[200px_1fr] gap-4 bg-slate-50/50">
                <div className="font-semibold text-slate-500 flex flex-col gap-1 mt-1">
                  <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Grievance Officer</span>
                  <span className="text-xs font-normal ml-6">(For Escalations)</span>
                </div>
                <div className="text-slate-700 leading-relaxed">
                  Senior Manager, Flipkart Internet Private Limited,<br />
                  Block B (Begonia), 8th Floor, Embassy Tech Village,<br />
                  Outer Ring Road, Devarabeesanahalli Village, Varthur Hobli,<br />
                  Bengaluru East Taluk, Bengaluru District, Karnataka – 560103
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
                      <a href="mailto:grievance.officer@flipkart.com" className="text-primary font-medium hover:underline break-all">grievance.officer@flipkart.com</a>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Legal Department</div>
                      <a href="mailto:legal@flipkart.com" className="text-primary font-medium hover:underline">legal@flipkart.com</a>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="font-semibold text-slate-500 flex items-center gap-2">
                    <Phone className="w-4 h-4" /> Telephone
                  </div>
                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 h-[calc(100%-2rem)] flex flex-col justify-center">
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Grievance Officer Phone</div>
                    <div className="text-slate-900 font-bold text-lg">+91 80 4908 3910</div>
                    <div className="text-sm text-slate-500">(Mon–Sat, 9:00 AM to 6:00 PM)</div>
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
            <h2 className="text-2xl font-bold text-slate-900">When Can You Send a Legal Notice to Flipkart?</h2>
          </div>
          <p className="text-slate-600 text-lg mb-6">You can send a legal notice to Flipkart when their customer support has failed to resolve your issue. Common situations include:</p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              "Refund not processed even after the return was picked up or approved",
              "Product delivered was fake, damaged, or significantly different from what was advertised",
              "Order marked as delivered but never received",
              "Seller on Flipkart is fraudulent and Flipkart is refusing responsibility",
              "Flipkart refused a warranty claim for a defective product",
              "Account or order cancelled without reason and refund withheld",
              "Unauthorised charges on your Flipkart account",
              "EMI or credit offer not honoured after purchase"
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-slate-700 font-medium leading-snug">{item}</span>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 text-blue-800 p-4 rounded-lg font-medium shadow-inner">
            <span className="font-bold uppercase tracking-wider text-xs bg-blue-200 text-blue-900 px-2 py-1 rounded inline-block mb-2 mr-2">Note</span>
            You should attempt resolution through Flipkart's customer support and Grievance Officer before sending a legal notice. However, if 15–30 days have passed with no satisfactory resolution, a legal notice is appropriate.
          </div>
        </section>

        {/* 5. Step by Step Guide */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-8 pt-4">Step-by-Step: How to Escalate Your Flipkart Complaint Before Sending a Notice</h2>

          <div className="relative border-l-2 border-slate-200 ml-4 md:ml-6 space-y-10 pb-4">
            <div className="relative pl-8 md:pl-10">
              <div className="absolute -left-[17px] top-0 bg-white border-2 border-slate-300 w-8 h-8 rounded-full flex items-center justify-center font-bold text-slate-500 shadow-sm">1</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Step 1 — Contact Flipkart Customer Support</h3>
              <p className="text-slate-600 leading-relaxed">Use the Flipkart app or website to raise a complaint. Always get a ticket number and screenshot all conversations. Keep every chat transcript.</p>
            </div>

            <div className="relative pl-8 md:pl-10">
              <div className="absolute -left-[17px] top-0 bg-white border-2 border-slate-300 w-8 h-8 rounded-full flex items-center justify-center font-bold text-slate-500 shadow-sm">2</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Step 2 — Escalate to Flipkart Grievance Officer</h3>
              <p className="text-slate-600 leading-relaxed">If customer support fails, email <strong>grievance.officer@flipkart.com</strong> with your order details, previous complaint reference numbers, and what resolution you are seeking. They are required by law to respond within 15 days.</p>
            </div>

            <div className="relative pl-8 md:pl-10">
              <div className="absolute -left-[17px] top-0 bg-primary border-2 border-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-primary-foreground shadow ring-2 ring-primary/20">3</div>
              <h3 className="text-xl font-bold text-primary mb-2">Step 3 — Send a Legal Notice</h3>
              <p className="text-slate-600 leading-relaxed mb-4">If the above steps fail, send a formal legal notice through a licensed advocate. This is the step that usually prompts Flipkart to act — most companies settle before the matter reaches consumer court.</p>
              <Link href="/send-a-legal-notice" className="inline-flex items-center gap-2 text-sm font-bold text-primary-foreground bg-primary hover:bg-primary/90 px-4 py-2 rounded-lg transition-colors">
                Draft a Notice Now <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="relative pl-8 md:pl-10">
              <div className="absolute -left-[17px] top-0 bg-slate-800 border-2 border-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-white shadow">4</div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Step 4 — File in Consumer Court</h3>
              <p className="text-slate-600 leading-relaxed">If Flipkart does not respond to the legal notice within 15–30 days, you can file a consumer complaint in the District Consumer Disputes Redressal Commission nearest to you.</p>
            </div>
          </div>
        </section>

        {/* 6. What Your Legal Notice Must Include */}
        <section className="bg-card border border-border rounded-3xl p-8 md:p-10 shadow-sm overflow-hidden">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">What Your Legal Notice to Flipkart Must Include</h2>
          <p className="text-muted-foreground text-lg mb-8">To be legally effective, your notice to Flipkart must contain:</p>

          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 mb-8">
            {[
              "Your full name and address (the sender)",
              "The correct legal entity name and registered address of Flipkart",
              "Order number, product name, and date of purchase",
              "A clear description of the deficiency or unfair trade practice",
              "All previous attempts to resolve the matter (with dates and ticket numbers)",
              "The exact amount of refund or compensation you are claiming",
              "The legal basis for your claim — Consumer Protection Act, 2019 and/or Indian Contract Act, 1872",
              "A specific deadline for response (15 or 30 days)",
              "Clear consequence — filing a consumer complaint in the appropriate court"
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-foreground/80 leading-relaxed">{item}</span>
              </div>
            ))}
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 flex items-start gap-4">
            <Mail className="w-6 h-6 text-primary shrink-0 mt-0.5" />
            <p className="text-foreground/80 font-medium">The notice must be sent via <strong className="text-primary">Speed Post</strong> to create legal proof of delivery.</p>
          </div>
        </section>

        {/* 7. Which Laws Protect You */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-8 pt-4 flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-primary" /> Which Laws Protect You Against Flipkart?
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-slate-800 mb-3 text-primary">Consumer Protection Act, 2019</h3>
              <p className="text-slate-600 leading-relaxed">The primary law. Flipkart, as an e-commerce marketplace, is responsible for ensuring sellers meet quality and delivery standards. Refund refusals, fake products, and misleading listings all constitute deficiency in service and unfair trade practices under this Act.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-slate-800 mb-3 text-primary">Consumer Protection (E-Commerce) Rules, 2020</h3>
              <p className="text-slate-600 leading-relaxed">Specifically regulates e-commerce platforms. Flipkart is required to provide a clear grievance mechanism, not manipulate prices, and ensure sellers are accountable. Violations can be reported to the CCPA.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-slate-800 mb-3 text-primary">Indian Contract Act, 1872</h3>
              <p className="text-slate-600 leading-relaxed">When Flipkart accepts your order and payment, a contract is formed. Failure to deliver the product or process a refund is a breach of contract — giving you the right to demand the amount back with interest.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-slate-800 mb-3 text-primary">Information Technology Act, 2000</h3>
              <p className="text-slate-600 leading-relaxed">Governs the grievance officer requirement. Flipkart must appoint a grievance officer who responds within 15 days. Failure to do so is a violation.</p>
            </div>
          </div>
        </section>

        {/* 8. Success Story */}
        <section className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 rounded-3xl p-8 shadow-sm">
          <div className="inline-block bg-emerald-100 text-emerald-800 font-bold px-3 py-1 rounded-full text-sm mb-4">Real Success Story</div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">How a Legal Notice Got ₹42,000 Back from Flipkart</h2>
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-emerald-50">
            <p className="text-slate-700 text-lg leading-relaxed mb-6 italic hover:not-italic transition-all duration-500">
              "Rahul Sharma, a software engineer from Pune, ordered a laptop worth ₹42,000 on Flipkart. The laptop arrived with a cracked screen. Flipkart's customer support asked him to wait, then rejected his return claiming the damage was not covered. Rahul escalated to the Grievance Officer — no response in 21 days.
            </p>
            <div className="bg-emerald-500/10 border-l-4 border-emerald-500 p-4 ml-4 mb-6 relative">
              <p className="text-emerald-900 font-medium">He sent a legal notice through vakiltech citing the Consumer Protection Act and demanding a full refund plus compensation within 15 days. Flipkart's legal team contacted him within 5 days and processed a complete refund.</p>
            </div>
            <div className="text-xs text-slate-400 pt-4 border-t border-slate-100">
              Note: This is a representative example based on the typical outcome of legal notices in consumer disputes. Individual results may vary.
            </div>
          </div>
        </section>

        {/* 9. Compensation */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">How Much Compensation Can You Claim from Flipkart?</h2>
          <p className="text-slate-600 text-lg mb-6">In addition to your refund, you can claim:</p>

          <ul className="space-y-4 mb-8">
            {[
              "The cost of the legal notice (advocate fees — typically ₹1,499 to ₹5,000)",
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
            Consumer courts regularly award compensation of ₹5,000 to ₹50,000 in addition to refunds in clear-cut cases of deficiency of service by e-commerce platforms like Flipkart.
          </div>
        </section>

        {/* 10. Mid-Page CTA */}
        <section className="bg-primary rounded-3xl p-10 text-center shadow-lg relative overflow-hidden my-16">
          <div className="relative z-10 max-w-2xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">Stop Waiting for Customer Support. Take Legal Action.</h2>
            <p className="text-lg text-primary-foreground/90">Drafted by licensed advocates. Delivered to Flipkart's verified legal address in 24 hours.</p>

            <Link
              href="/send-a-legal-notice"
              className="inline-flex items-center gap-3 bg-white text-primary hover:bg-slate-50 px-8 py-5 rounded-xl font-bold text-xl shadow transition-all duration-300 transform hover:scale-105"
            >
              Send Legal Notice to Flipkart — ₹1,499
              <ChevronRight className="w-6 h-6" />
            </Link>
          </div>
        </section>

        {/* 11. Related Services */}
        <section className="pt-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Related Services</h2>
          <div className="grid md:grid-cols-3 gap-6">

            <Link href="/send-legal-notice/amazon-india" className="block group">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 h-full shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col">
                <h3 className="font-bold text-lg text-slate-900 mb-3 group-hover:text-primary transition-colors">Send Legal Notice to Amazon India</h3>
                <p className="text-slate-600 text-sm flex-grow mb-6">Amazon not processing your refund? Legal notice to Amazon Seller Services Private Limited. ₹1,499. Drafted by advocates.</p>
                <div className="text-primary text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">View Service <ChevronRight className="w-4 h-4" /></div>
              </div>
            </Link>

            <Link href="/send-legal-notice/meesho" className="block group">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 h-full shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col">
                <h3 className="font-bold text-lg text-slate-900 mb-3 group-hover:text-primary transition-colors">Send Legal Notice to Meesho</h3>
                <p className="text-slate-600 text-sm flex-grow mb-6">Fake products or refund issues on Meesho? Send a legal notice to Meesho Limited's registered address. ₹1,499.</p>
                <div className="text-primary text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">View Service <ChevronRight className="w-4 h-4" /></div>
              </div>
            </Link>

            <Link href="/send-legal-notice/consumer-complaint-legal-notice" className="block group">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 h-full shadow-lg hover:shadow-xl hover:border-slate-700 transition-all duration-300 flex flex-col relative overflow-hidden">
                <h3 className="font-bold text-lg text-white mb-3 relative z-10">Consumer Complaint Notice</h3>
                <p className="text-slate-400 text-sm flex-grow mb-6 relative z-10">Not just Flipkart — send legal notices to any company for consumer disputes. All types of consumer complaints handled.</p>
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
