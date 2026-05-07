import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { TrustSignalsSection } from "@/components/features/homepage/trust-signals";
import { FAQSection } from "@/components/shared/faq-section";
import Link from 'next/link';
import ClientFormTrigger from "@/app/send-legal-notice/legal-notice-for-money-recovery/client-form-trigger";

export const metadata: Metadata = {
  title: "Rental Agreement Online | Draft Rent Agreement @ ₹299 | vakiltech",
  description: "Draft your Rental Agreement Online starting @ ₹299. Legally valid, lawyer verified. Get it delivered to your email in 24 hours. Rental Agreement India.",
  keywords: ["rental agreement online","rent agreement format","lease agreement india","house rent agreement","online rent agreement drafting"],
  alternates: {
    canonical: "https://vakiltech.in/agreement-drafting/rental-agreement",
  },
};

export default function GeneratedServicePage() {
const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Rental Agreement Online", current: true },
  ];

  const faqs = [
    {
      question: "Is a rental agreement mandatory in India?",
      answer:
        "While there is no central law making a rental agreement mandatory, most state tenancy acts strongly recommend it. Without a written agreement, disputes about rent, notice period, and deposit become very difficult to resolve legally. Most landlords and tenants use an 11-month agreement to avoid state-specific rent control laws that kick in for leases of 12 months or more.",
    },
    {
      question: "What is the difference between an 11-month rental agreement and a lease?",
      answer:
        "An 11-month rental agreement is a licence (not a lease) and falls outside the purview of state Rent Control Acts, making eviction easier for the landlord. A lease of 12 months or more may attract rent control protections, which can restrict rent increases and make eviction much harder. Most residential agreements in India are structured as 11-month licences for this reason.",
    },
    {
      question: "What should a rent agreement format mandatorily include?",
      answer:
        "A legally valid rental agreement must contain: names and addresses of both landlord and tenant; complete property description; monthly rent amount; security deposit amount and refund conditions; tenancy start date and duration; notice period (typically 1 month); lock-in period if any; maintenance responsibilities; and clauses on subletting, property damage, and permitted use. It must be executed on stamp paper of the correct value and signed by both parties and two witnesses.",
    },
    {
      question: "Can I use a rental agreement as address proof in India?",
      answer:
        "Yes. A notarised or registered rental agreement is accepted as valid address proof by most government authorities — including Aadhaar, passport applications, bank KYC, driving licence applications, and voter ID updates. The agreement should be on proper stamp paper and ideally registered with the local Sub-Registrar's Office for maximum validity.",
    },
    {
      question: "What is the stamp duty for a rental agreement in India?",
      answer:
        "Stamp duty on rental agreements varies by state. In Maharashtra, it is typically ₹500 for agreements up to 5 years. In Karnataka and Delhi, the stamp duty is calculated as a percentage of the annual rent plus security deposit. vakiltech will advise you on the correct stamp duty for your specific state and help you draft the agreement on the appropriate stamp paper.",
    },
  ];

  return (
    <>
    {/* schema-migrated */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"Organization","name":"vakiltech","legalName":"vakiltech Legal Services","url":"https://vakiltech.in","logo":"https://vakiltech.in/logo.png","foundingDate":"2023","description":"India's leading online legal services platform providing affordable legal notices, consultations, and agreement drafting services through experienced Licensed Advocates.","address":{"@type":"PostalAddress","addressCountry":"IN"},"contactPoint":[{"@type":"ContactPoint","telephone":"+91-70476 83995","contactType":"Customer Service","availableLanguage":["English","Hindi"],"areaServed":"IN"}],"sameAs":[],"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"500","bestRating":"5","worstRating":"1"},"makesOffer":[{"@type":"Offer","itemOffered":{"@type":"Service","name":"Legal Notice Services","description":"Professional legal notice drafting and sending"},"price":"1499","priceCurrency":"INR"},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Legal Consultation","description":"Expert legal consultation from Licensed Advocates"},"price":"299","priceCurrency":"INR"},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Agreement Drafting","description":"Professional legal agreement drafting services"},"price":"999","priceCurrency":"INR"}]}` }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Is a rental agreement mandatory in India?","acceptedAnswer":{"@type":"Answer","text":"While there is no central law making a rental agreement mandatory, most state tenancy acts strongly recommend it. Most landlords use an 11-month agreement to avoid state Rent Control Act protections."}},{"@type":"Question","name":"What is the difference between an 11-month rental agreement and a lease?","acceptedAnswer":{"@type":"Answer","text":"An 11-month rental agreement is a licence and falls outside the purview of state Rent Control Acts, making eviction easier for the landlord. A lease of 12 months or more may attract rent control protections."}},{"@type":"Question","name":"What should a rent agreement format mandatorily include?","acceptedAnswer":{"@type":"Answer","text":"A legally valid rental agreement must contain: names and addresses of landlord and tenant; property description; monthly rent; security deposit and refund conditions; tenancy duration; notice period; lock-in period; maintenance responsibilities; and subletting restrictions. It must be on stamp paper of the correct value."}},{"@type":"Question","name":"Can I use a rental agreement as address proof in India?","acceptedAnswer":{"@type":"Answer","text":"Yes. A notarised or registered rental agreement is accepted as valid address proof by most government authorities including Aadhaar, passport applications, bank KYC, and driving licence applications."}},{"@type":"Question","name":"What is the stamp duty for a rental agreement in India?","acceptedAnswer":{"@type":"Answer","text":"Stamp duty varies by state. In Maharashtra, it is typically ₹500 for agreements up to 5 years. In Karnataka and Delhi, it is calculated as a percentage of annual rent plus security deposit. vakiltech advises on state-specific stamp duty."}}]}` }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"LegalService","telephone":"+91-70476 83995","image":"https://vakiltech.in/vt-logo.png","address":{"@type":"PostalAddress","addressCountry":"IN"},"priceRange":"\u20b91,499+","name":"Rental Agreement Drafting Service","description":"Online Rental Agreement Drafting Service in India starting at ₹299. Lawyer verified drafts.","provider":{"@type":"Organization","name":"vakiltech","url":"https://vakiltech.in"},"offers":{"@type":"Offer","price":"299","priceCurrency":"INR"},"areaServed":{"@type":"Country","name":"India"}}` }}
    />

    <main className="min-h-screen bg-gradient-to-b from-background to-background/55">
      
      <div className="container mx-auto px-6 md:px-8 pb-8">
        <section className="relative pt-6 pb-16 md:pt-10 md:pb-24 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 overflow-hidden rounded-b-3xl md:rounded-b-[40px] -mx-6 md:-mx-8 px-6 md:px-8">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[800px] h-[800px] bg-gradient-to-r from-primary/20 to-transparent rounded-full blur-3xl opacity-20" />
          </div>

          <div className="relative max-w-6xl mx-auto flex flex-col gap-8 md:gap-12">
            <div className="z-10 mt-2 mb-2">
              <Breadcrumb items={breadcrumbItems} />
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                    Professional Legal Service
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                    Rental Agreement Online
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Draft your Rental Agreement Online starting @ ₹299. Legally valid, lawyer verified. Get it delivered to your email in 24 hours. Rental Agreement India.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/consultation"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Draft My Rental Agreement — ₹299
                  </Link>
                  <Link
                    href="/consultation"
                    className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 text-center"
                  >
                    Talk to a Lawyer — ₹299
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto py-12 space-y-6">

          {/* Rent Agreement Format — What It Must Contain */}
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Rent Agreement Format — What It Must Contain
            </h2>
            <p className="text-muted-foreground mb-5">
              A legally valid rental agreement in India must contain these clauses. Missing even one can create disputes that are difficult to resolve in court.
            </p>
            <ol className="space-y-4 text-muted-foreground">
              {[
                { n: 1, title: "Parties to the agreement", body: "Full legal names, addresses, and identity proof details of both the landlord (licensor) and the tenant (licensee). If the property is co-owned, all co-owners must be named." },
                { n: 2, title: "Property description", body: "Complete address of the premises, including floor number, property dimensions (if applicable), and a description of what is included — furnished, semi-furnished, or unfurnished. List major fixtures (AC, geyser, etc.) explicitly." },
                { n: 3, title: "Monthly rent amount", body: "The exact rent amount in figures and words, the due date (e.g., 1st of every month), the grace period (if any), and late payment penalties. Also include a rent escalation clause — typically 5–10% annual increase." },
                { n: 4, title: "Security deposit", body: "The deposit amount (usually 2–3 months' rent), the mode of payment, and the exact conditions under which it will be refunded or deducted. State the refund timeline — typically 15–30 days from vacating." },
                { n: 5, title: "Tenancy period and commencement date", body: "The start date, the duration (most residential agreements are for 11 months to avoid Rent Control Act applicability), and the renewal terms." },
                { n: 6, title: "Lock-in period", body: "The minimum period during which neither party can terminate the agreement without penalty. Typically 3–6 months. If either party breaks out during this period, the consequences (e.g., forfeiture of deposit) must be clearly stated." },
                { n: 7, title: "Notice period for termination", body: "How much advance notice either party must give before ending the tenancy — typically 30 days. Without this clause, disputes about premature exits become very messy." },
                { n: 8, title: "Maintenance responsibilities", body: "Who pays for what — minor repairs (typically tenant), major structural repairs (typically landlord), utility bills (electricity, water, gas, internet), and society maintenance charges." },
                { n: 9, title: "Permitted use and restrictions", body: "Whether the property is for residential use only or permits home office use. Also covers subletting restrictions (usually prohibited without written consent), pet policy, and number of occupants." },
                { n: 10, title: "Dispute resolution clause", body: "The jurisdiction for any legal disputes (city where the property is located), whether arbitration is preferred, and the governing law (typically the Transfer of Property Act 1882 + state-specific tenancy law)." },
              ].map((item) => (
                <li key={item.n} className="flex gap-4">
                  <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                    {item.n}
                  </span>
                  <div>
                    <strong className="text-foreground">{item.title}</strong> — {item.body}
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-6 pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground">
                vakiltech drafts rental agreements with all required clauses, tailored to your specific property and state-specific stamp duty requirements.{" "}
                <Link href="/consultation" className="text-primary hover:underline font-medium">
                  Get yours drafted — ₹299 →
                </Link>
              </p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Why Choose Us for Rental Agreements</h2>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Customized</li>
</ul>
<p className="text-muted-foreground mb-4">Tailored clauses for your specific property and needs.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Fast Delivery</li>
</ul>
<p className="text-muted-foreground mb-4">Get your draft in 24-48 hours.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Legal Advice</li>
</ul>
<p className="text-muted-foreground mb-4">Consultation on clauses and stamp duty requirements.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Details Required</li>
</ul>
<p className="text-muted-foreground mb-4">We need these details to draft the agreement.</p>
<p className="text-muted-foreground mb-4">Details of Landlord (Name, Address)</p>
<p className="text-muted-foreground mb-4">Details of Tenant (Name, Permanent Address)</p>
<p className="text-muted-foreground mb-4">Property Address &amp; Description</p>
<p className="text-muted-foreground mb-4">Rent Amount &amp; Security Deposit Details</p>
<p className="text-muted-foreground mb-4">Lease Start Date &amp; Duration</p>
<p className="text-muted-foreground mb-4">Notice Period &amp; Lock-in Period (if any)</p>
<p className="text-muted-foreground mb-4">List of Fixtures &amp; Fittings (optional)</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Who Needs This?</li>
</ul>
<p className="text-muted-foreground mb-4">Suitable for various rental scenarios.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Landlords</li>
</ul>
<p className="text-muted-foreground mb-4">Protect your property and ensure timely rent payments.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Tenants</li>
</ul>
<p className="text-muted-foreground mb-4">Secure your rights and get valid address proof.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Business Owners</li>
</ul>
<p className="text-muted-foreground mb-4">For commercial property leasing and office spaces.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Shared Accommodation</li>
</ul>
<p className="text-muted-foreground mb-4">Agreements for flatmates or paying guests (PG).</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Drafting Process</h2>
<p className="text-muted-foreground mb-4">Get your agreement in 4 simple steps</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Share Details</li>
</ul>
<p className="text-muted-foreground mb-4">Fill out a simple form with Landlord, Tenant, and Property details.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Drafting</li>
</ul>
<p className="text-muted-foreground mb-4">Our legal experts draft a customized agreement for you.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Review</li>
</ul>
<p className="text-muted-foreground mb-4">You review the draft and request any changes.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Final Delivery</li>
</ul>
<p className="text-muted-foreground mb-4">Receive the final ready-to-print agreement via email.</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Real People. Real Results.</h2>
<p className="text-muted-foreground mb-4">Received a very professional agreement. The clauses for maintenance and deposit were very clear.Vikram MalhotraLandlord, Mumbai</p>
<p className="text-muted-foreground mb-4">Needed an agreement quickly for my passport application. vakiltech delivered in 1 day!Priya DasTenant, Pune</p>
<p className="text-muted-foreground mb-4">Saved me a trip to the lawyer. Everything was done online.Rahul VermaFlat Owner, Delhi</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
<p className="text-muted-foreground mb-4">Everything about Rental Agreements</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Is a rental agreement mandatory in India?</li>
<li>What is the difference between an 11-month agreement and a lease?</li>
<li>Can I use this agreement as address proof?</li>
<li>Does vakiltech handle stamp duty?</li>
<li>How long does drafting take?</li>
</ul>
</div>

        </div>
      </div>

      <TrustSignalsSection />

      {faqs.length > 0 && (
         <FAQSection faqs={faqs} title="Frequently Asked Questions" />
      )}
    </main>
    </>
  );
}
