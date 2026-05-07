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
  title: "Send Legal Notice to mPokket — Loan Harassment & Fraud | vakiltech",
  description: "mPokket recovery calls, hidden charges, or contact list harassment? Send a legal notice for ₹1,499. Stop illegal recovery practices with legal action.",
  keywords: ["mpokket legal notice", "mpokket harassment complaint", "mpokket loan complaint", "mpokket contact list harassment", "mpokket hidden charges legal notice", "cached india tech legal notice"],
  alternates: {
    canonical: "https://vakiltech.in/send-legal-notice/mpokket",
  },
};

export default function MPokketLegalNoticePage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Legal Notice", href: "/send-legal-notice" },
    { label: "Send Legal Notice to mPokket", current: true },
  ];

  const faqs = [
    {
      question: "What is mPokket's registered address for sending a legal notice?",
      answer: "Send your notice to Cached India Tech Private Limited (mPokket), PS Srijan Corporate Park, Unit No. 1504B, Tower-1, 2 (EP & GP), Sector V, Salt Lake, Kolkata – 700 091, West Bengal.",
    },
    {
      question: "mPokket is messaging and calling people in my contact list — is that legal?",
      answer: "No. This is one of the most serious violations instant loan apps commit. Accessing your phone contacts and contacting them about your loan without their consent is a violation of the IT Act, 2000, RBI guidelines, and the Digital Personal Data Protection Act, 2023. A legal notice can demand they immediately cease contact with your list, delete all accessed data, and pay compensation for the harm caused.",
    },
    {
      question: "Can I send a legal notice to mPokket for harassment calls?",
      answer: "Yes. RBI prohibits recovery calls before 8 AM and after 7 PM, abusive language, and excessive frequency. If mPokket's recovery team has violated any of these rules, a legal notice citing RBI's Fair Practices Code and the IT Act forces them to address it formally.",
    },
    {
      question: "mPokket charged me more interest than what was shown on the app — what can I do?",
      answer: "The interest rate and all fees must be clearly disclosed before disbursal. Any charge higher than what was agreed at the time of the loan is unauthorised. A legal notice to mPokket can demand a refund of the excess amount and a corrected repayment schedule.",
    },
    {
      question: "My loan was repaid but mPokket keeps showing it as outstanding — what should I do?",
      answer: "This is a clear error and potentially a deficiency in service. Send a written complaint to mPokket's support team with your payment proof. If unresolved in 15 days, a legal notice demanding rectification and compensation is appropriate.",
    },
    {
      question: "How much does it cost to send a legal notice to mPokket through vakiltech?",
      answer: "vakiltech charges ₹1,499 all-inclusive — advocate consultation, custom drafting, unlimited revisions, and Speed Post dispatch with Acknowledgment Due to mPokket's registered office in Kolkata.",
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
    name: "vakiltech — Send Legal Notice to mPokket",
    description: "Send a lawyer-drafted legal notice to mPokket (Cached India Tech Pvt Ltd) to stop contact-list harassment, hidden charges, and illegal recovery practices. ₹1,499.",
    url: "https://vakiltech.in/send-legal-notice/mpokket",
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
                    Send Legal Notice to mPokket
                  </h1>
                  <p className="text-xl text-slate-600 leading-relaxed font-medium max-w-3xl">
                    mPokket targets college students and young professionals with small instant loans.
                    A particularly harmful practice — contacting borrowers' phone contacts to create social
                    pressure — is one of the most reported complaints against this app. This is illegal
                    under Indian law. A legal notice stops it immediately.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <BrandFormCTA service="legal-notice">Send Legal Notice to mPokket — ₹1,499</BrandFormCTA>
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

          {/* Contact-list harassment callout */}
          <div className="bg-red-50 border-l-4 border-red-500 rounded-r-xl p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-red-500 shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-red-900 mb-2">Contact-List Harassment is Illegal — and Actionable</h2>
                <p className="text-red-800/90 leading-relaxed">
                  mPokket is among the apps known to access borrowers' phone contacts and message or call
                  those contacts to shame borrowers into paying. This practice is a direct violation of
                  RBI's guidelines, the IT Act, 2000, and India's Digital Personal Data Protection Act, 2023.
                  It is not a grey area — it is illegal. A legal notice specifically citing contact-list
                  harassment is one of the strongest notices you can send to an instant loan app.
                </p>
              </div>
            </div>
          </div>

          <section className="scroll-mt-24" id="address">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">mPokket (Cached India Tech Pvt Ltd) — Registered Address</h2>
            <p className="text-slate-600 text-lg mb-8">Send your legal notice via Speed Post with Acknowledgment Due to:</p>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex items-center gap-3">
                <Building2 className="text-slate-500" /><h3 className="font-bold text-xl text-slate-800">Legal Entity Details</h3>
              </div>
              <div className="divide-y divide-slate-100">
                <div className="p-6 grid sm:grid-cols-[200px_1fr] gap-4">
                  <div className="font-semibold text-slate-500 flex items-center gap-2"><FileText className="w-4 h-4" /> Legal Entity Name</div>
                  <div className="font-bold text-slate-900 text-lg">Cached India Tech Private Limited</div>
                </div>
                <div className="p-6 grid sm:grid-cols-[200px_1fr] gap-4 bg-slate-50/50">
                  <div className="font-semibold text-slate-500 flex items-center gap-2"><Hash className="w-4 h-4" /> Brand Name</div>
                  <div className="text-slate-700 bg-white border border-slate-200 px-3 py-1 rounded inline-block w-max font-medium">mPokket</div>
                </div>
                <div className="p-6 grid sm:grid-cols-[200px_1fr] gap-4">
                  <div className="font-semibold text-slate-500 flex flex-col gap-1 mt-1">
                    <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Registered Office</span>
                    <span className="text-xs font-normal ml-6">(For Legal Notice)</span>
                  </div>
                  <div className="text-slate-700 leading-relaxed font-medium">
                    PS Srijan Corporate Park, Unit No. 1504B, Tower-1,<br />2 (EP & GP), Sector V, Salt Lake,<br />Kolkata – 700 091, West Bengal
                  </div>
                </div>
                <div className="p-6 grid sm:grid-cols-2 gap-6 bg-white">
                  <div className="space-y-4">
                    <div className="font-semibold text-slate-500 flex items-center gap-2"><Mail className="w-4 h-4" /> Email</div>
                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Support</div>
                      <span className="text-primary font-medium break-all">support@mpokket.com</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="font-semibold text-slate-500 flex items-center gap-2"><Phone className="w-4 h-4" /> Helpline</div>
                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 h-[calc(100%-2rem)] flex flex-col justify-center">
                      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Customer Care</div>
                      <div className="text-slate-900 font-bold text-lg">033-66060606</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <HelpCircle className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-bold text-slate-900">When Can You Send a Legal Notice to mPokket?</h2>
            </div>
            <p className="text-slate-600 text-lg mb-6">mPokket's recovery practices frequently cross legal lines. Every one of the scenarios below gives you a valid legal basis to send a formal notice:</p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                "Contacting your phone contacts (friends, family, colleagues) about your loan",
                "Sending shame-messages or posting in WhatsApp groups about your dues",
                "Recovery calls before 8 AM or after 7 PM",
                "Threats of legal action, police complaint, or arrest before any court order",
                "Processing fees or interest higher than disclosed in the app at disbursal",
                "Penalty charges added without mention in the loan agreement",
                "Repaid loan still shown as outstanding in the app",
                "KYC data accessed or retained after loan rejection",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium leading-snug">{item}</span>
                </div>
              ))}
            </div>
            <div className="bg-blue-50 text-blue-800 p-4 rounded-lg font-medium shadow-inner">
              <span className="font-bold uppercase tracking-wider text-xs bg-blue-200 text-blue-900 px-2 py-1 rounded inline-block mb-2 mr-2">Important</span>
              For contact-list harassment, send a legal notice immediately. Do not wait for their support team — this is a time-sensitive privacy violation and the notice should go out the same day.
            </div>
          </section>

          <DidYouKnowBlock
            title="Did you know?"
            text="The RBI has issued explicit guidelines prohibiting loan recovery agents from contacting anyone other than the borrower and their guarantors. mPokket's practice of messaging phone contacts is a direct violation. Multiple borrowers filing legal notices for the same illegal practice can also trigger an RBI enforcement inquiry against the app."
          />

          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-8 pt-4 flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-primary" /> Laws That Protect You Against mPokket
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "IT Act, 2000 & DPDP Act, 2023", desc: "Accessing your contacts and using that data without consent is a data privacy violation. The Digital Personal Data Protection Act makes this explicitly illegal." },
                { title: "RBI Guidelines on Recovery Agents", desc: "RBI prohibits contacting third parties (other than the borrower's guarantor) about the borrower's loan. Contact-list harassment directly violates this." },
                { title: "Consumer Protection Act, 2019", desc: "Harassing, abusive, or manipulative recovery practices are deficiencies in service under consumer law." },
                { title: "Indian Penal Code / BNS", desc: "Threatening, intimidating, or publicly shaming a borrower can attract criminal liability under provisions of the Bharatiya Nyaya Sanhita." },
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
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">Contact-List Harassment is Illegal. Act Now.</h2>
              <p className="text-lg text-primary-foreground/90">Drafted by licensed advocates. Delivered in 24 hours.</p>
              <BrandFormCTA service="legal-notice" variant="ghost-white">Send Legal Notice to mPokket — ₹1,499</BrandFormCTA>
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
