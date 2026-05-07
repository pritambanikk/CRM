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
  title: "Send Legal Notice to MakeMyTrip | Registered Address + Complete Guide | vakiltech",
  description: "MakeMyTrip not resolving your complaint? Send a lawyer-drafted legal notice to MakeMyTrip India Private Limited's registered address. Resolve consumer disputes legally. \u20b91,499. Drafted in 24 hours.",
  keywords: ["send legal notice to makemytrip", "makemytrip registered address legal notice", "makemytrip grievance officer", "MakeMyTrip consumer complaint", "MakeMyTrip legal notice", "how to file complaint against MakeMyTrip"],
  alternates: {
    canonical: "https://vakiltech.in/send-legal-notice/makemytrip",
  },
};

export default function MakemytripLegalNoticePage() {
const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Legal Notice", href: "/send-legal-notice" },
    { label: "Send Legal Notice to MakeMyTrip", current: true },
  ];

  const faqs = [
    {
        "question": "What is MakeMyTrip's registered address for a legal notice?",
        "answer": "Send your notice to MakeMyTrip India Private Limited at 19th Floor, Tower A/B/C, Epitome Building No. 5, DLF Cyber City, DLF Phase III, Gurugram, Haryana \u2013 122002. Grievance email: grievanceofficer@makemytrip.com."
    },
    {
        "question": "How long does MakeMyTrip have to respond to a legal notice?",
        "answer": "15 to 30 days as specified in the notice. After that you can file a consumer complaint in the District Consumer Disputes Redressal Commission in your city."
    },
    {
        "question": "How much does it cost to send a legal notice to MakeMyTrip?",
        "answer": "vakiltech charges \u20b91,499 all-inclusive \u2014 consultation, custom drafting, unlimited revisions, and Speed Post dispatch with Acknowledgment Due."
    }
];

  return (
    <>
    {/* schema-migrated */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is MakeMyTrip's registered address for a legal notice?","acceptedAnswer":{"@type":"Answer","text":"Send your notice to MakeMyTrip India Private Limited at 19th Floor, Tower A/B/C, Epitome Building No. 5, DLF Cyber City, DLF Phase III, Gurugram, Haryana – 122002. Grievance email: grievanceofficer@makemytrip.com."}},{"@type":"Question","name":"How long does MakeMyTrip have to respond to a legal notice?","acceptedAnswer":{"@type":"Answer","text":"15 to 30 days as specified in the notice. After that you can file a consumer complaint in the District Consumer Disputes Redressal Commission in your city."}},{"@type":"Question","name":"How much does it cost to send a legal notice to MakeMyTrip?","acceptedAnswer":{"@type":"Answer","text":"vakiltech charges ₹1,499 all-inclusive — consultation, custom drafting, unlimited revisions, and Speed Post dispatch with Acknowledgment Due."}}]}` }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"Service","name":"vakiltech — Send Legal Notice to MakeMyTrip","description":"Send a lawyer-drafted legal notice to MakeMyTrip India Private Limited for consumer disputes. ₹1,499.","url":"https://vakiltech.in/send-legal-notice/makemytrip","areaServed":{"@type":"Country","name":"India"},"provider":{"@type":"Organization","name":"vakiltech","url":"https://vakiltech.in"},"offers":{"@type":"Offer","price":"1499","priceCurrency":"INR"}}` }}
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
                  Send Legal Notice to MakeMyTrip — Registered Address, Grievance Officer & Complete Guide
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed font-medium max-w-3xl">If MakeMyTrip has refused your refund, ignored your complaints, or failed</p>
<p className="text-lg text-slate-600">to resolve your dispute despite repeated attempts, a formal legal notice</p>
<p className="text-lg text-slate-600">is your most effective next step. This page gives you MakeMyTrip's verified</p>
<p className="text-lg text-slate-600">registered address, grievance officer contact, and a complete guide to</p>
<p className="text-lg text-slate-600">resolving your dispute legally.</p>
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
              <h2 className="text-xl font-bold text-red-900 mb-2">IMPORTANT — MakeMyTrip's Correct Legal Entity for Consumer Notices</h2>
              <p className="text-red-800/80 mb-4 leading-relaxed">The correct legal entity for consumer complaints is MakeMyTrip India Private Limited.</p>
<p className="text-red-800/80 mb-4 leading-relaxed">MakeMyTrip also owns Goibibo — complaints about Goibibo bookings should be sent to the same entity.</p>
            </div>
          </div>
        </div>

        {/* 3. Registered Address Block */}
        <section className="scroll-mt-24" id="address">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">MakeMyTrip India Private Limited — Registered Address for Legal Notice</h2>
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
                <div className="font-bold text-slate-900 text-lg">MakeMyTrip India Private Limited</div>
              </div>

              <div className="p-6 grid sm:grid-cols-[200px_1fr] gap-4 bg-slate-50/50">
                <div className="font-semibold text-slate-500 flex items-center gap-2">
                  <Hash className="w-4 h-4" /> CIN
                </div>
                <div className="font-mono text-slate-700 bg-white border border-slate-200 px-3 py-1 rounded inline-block w-max">U63040HR2000PTC090846</div>
              </div>

              <div className="p-6 grid sm:grid-cols-[200px_1fr] gap-4">
                <div className="font-semibold text-slate-500 flex flex-col gap-1 mt-1">
                  <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Registered Office</span>
                  <span className="text-xs font-normal ml-6">(For Legal Notice)</span>
                </div>
                <div className="text-slate-700 leading-relaxed font-medium">
                  <span dangerouslySetInnerHTML={{__html: `19th Floor, Tower A/B/C, Epitome Building No. 5, DLF Cyber City, DLF Phase III, Gurugram, Haryana – 122002`}} />
                </div>
              </div>

              

              <div className="p-6 grid sm:grid-cols-2 gap-6 bg-white">
                <div className="space-y-4">
                  <div className="font-semibold text-slate-500 flex items-center gap-2">
                    <Mail className="w-4 h-4" /> Email Addresses
                  </div>
                  <div className="space-y-2">
                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-100"><div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Grievance Officer</div><span className="text-primary font-medium hover:underline break-all">grievanceofficer@makemytrip.com</span></div>
<div className="bg-slate-50 p-3 rounded-lg border border-slate-100"><div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Legal Team</div><span className="text-primary font-medium hover:underline break-all">nodalofficer@makemytrip.com</span></div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="font-semibold text-slate-500 flex items-center gap-2">
                    <Phone className="w-4 h-4" /> Telephone
                  </div>
                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 h-[calc(100%-2rem)] flex flex-col justify-center">
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Contact Phone</div>
                    <div className="text-slate-900 font-bold text-lg">0124-4628747</div>
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
            <h2 className="text-2xl font-bold text-slate-900">Ruined Vacations or Denied Check-Ins? When to Take Action.</h2>
          </div>
          <p className="text-slate-600 text-lg mb-6">A holiday shouldn't end in a dispute over unfulfilled promises. If MakeMyTrip refuses to refund you for cancelled flights, or if a hotel denies your confirmed booking while customer service offers 'travel credits' instead of cash, taking the legal route is often the only leverage you have. Common grievances include:</p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /><span className="text-slate-700 font-medium leading-snug">Common situations include:</span></div>
<div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /><span className="text-slate-700 font-medium leading-snug">Refund not processed for cancelled flight or hotel, hidden charges added at checkout, booking errors not rectified, cancellation charges applied despite policy exemption, travel insurance claim rejected, hotel not as described</span></div>
          </div>

          <div className="bg-blue-50 text-blue-800 p-4 rounded-lg font-medium shadow-inner">
            <span className="font-bold uppercase tracking-wider text-xs bg-blue-200 text-blue-900 px-2 py-1 rounded inline-block mb-2 mr-2">Note</span>
            You should attempt resolution through customer support before sending a legal notice. However, if 15–30 days have passed with no satisfactory resolution, a legal notice is appropriate.
          </div>
        </section>

        {/* Did You Know Block */}
        <DidYouKnowBlock 
            title="Did you know?"
            text="When a hotel unexpectedly denies you check-in despite a confirmed MakeMyTrip itinerary, MakeMyTrip is legally accountable for 'deficiency in service'. Consumer law mandates they either refund you fully or provide suitable alternative accommodation." 
        />

        {/* 5. Step by Step Guide */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-8 pt-4">Your Roadmap to Escalation: Getting Past "Support"</h2>

          <div className="relative border-l-2 border-slate-200 ml-4 md:ml-6 space-y-10 pb-4">
            <div className="relative pl-8 md:pl-10">
              <div className="absolute -left-[17px] top-0 bg-white border-2 border-slate-300 text-slate-500 w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-sm">1</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Step 1 — Contact MakeMyTrip Customer Support</h3>
              <p className="text-slate-600 leading-relaxed mb-4">Use the official app or website. Note all ticket IDs and screenshot all conversations.</p>
            </div>
<div className="relative pl-8 md:pl-10">
              <div className="absolute -left-[17px] top-0 bg-white border-2 border-slate-300 text-slate-500 w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-sm">2</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Step 2 — Escalate to MakeMyTrip Grievance Officer</h3>
              <p className="text-slate-600 leading-relaxed mb-4">Email the grievance officer with your complaint details and previous reference numbers. They are legally required to respond within 15 days.</p>
            </div>

<div className="relative pl-8 md:pl-10">
              <div className="absolute -left-[17px] top-0 bg-primary border-2 border-white text-primary-foreground shadow ring-2 ring-primary/20 w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-sm">3</div>
              <h3 className="text-xl font-bold text-primary mb-2">Step 3 — Send a Legal Notice</h3>
              <p className="text-slate-600 leading-relaxed mb-4">Send a formal legal notice through a licensed advocate. This step bypasses frontline support and prompts legal team review.</p>
            </div>
<div className="relative pl-8 md:pl-10">
              <div className="absolute -left-[17px] top-0 bg-slate-800 border-2 border-white text-white shadow w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-sm">4</div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Step 4 — Consumer Court</h3>
              <p className="text-slate-600 leading-relaxed mb-4">File in the District Consumer Disputes Redressal Commission in your city if the legal notice is ignored within 15–30 days.</p>
            </div>
          </div>
        </section>

        {/* 6. Which Laws Protect You */}
        <section><h2 className="text-3xl font-bold text-slate-900 mb-8 pt-4 flex items-center gap-3"><ShieldCheck className="w-8 h-8 text-primary" /> Your Legal Armor against travel tech</h2><div className="grid md:grid-cols-2 gap-6"><div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"><h3 className="text-xl font-bold text-slate-800 mb-3 text-primary">Consumer Protection Act, 2019</h3><p className="text-slate-600 leading-relaxed">your primary protection as a consumer.</p></div><div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"><h3 className="text-xl font-bold text-slate-800 mb-3 text-primary">IT Act, 2000</h3><p className="text-slate-600 leading-relaxed">requires a grievance officer who responds within 15 days.</p></div><div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"><h3 className="text-xl font-bold text-slate-800 mb-3 text-primary">Indian Contract Act, 1872</h3><p className="text-slate-600 leading-relaxed">failure to deliver agreed service is breach</p></div></div></section>

        {/* 7. Success Story */}
        <section className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 rounded-3xl p-8 shadow-sm">
          <div className="inline-block bg-emerald-100 text-emerald-800 font-bold px-3 py-1 rounded-full text-sm mb-4">Real Success Story</div>
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-emerald-50"><p className="text-slate-700 text-lg leading-relaxed mb-6 italic hover:not-italic transition-all duration-500">"Vikram Singh from Pune booked a hotel for ₹18,000 through MakeMyTrip. The hotel was under renovation and uninhabitable. MakeMyTrip refused a refund citing hotel policy. After a legal notice citing deficiency in service and misrepresentation, MakeMyTrip settled with a full refund in 10 days."</p><div className="text-xs text-slate-400 pt-4 border-t border-slate-100">Note: This is a representative example based on the typical outcome of legal notices in consumer disputes. Individual results may vary.</div></div>
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
