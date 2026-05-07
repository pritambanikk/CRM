import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { TrustSignalsSection } from "@/components/features/homepage/trust-signals";
import { FAQSection } from "@/components/shared/faq-section";
import Link from 'next/link';
import ClientFormTrigger from "@/app/send-legal-notice/legal-notice-for-money-recovery/client-form-trigger";

export const metadata: Metadata = {
  title: "FSSAI Registration Online | Food License Apply @ ₹429 | vakiltech",
  description: "Apply for FSSAI Registration Online in India starting @ ₹429. Get your Food License (FosCos) quickly via vakiltech. 100% Online, Expert Support, Avoid Penalties.",
  keywords: ["fssai registration online","food license apply","fssai license registration","foscos registration","food safety license","fssai registration fees"],
  alternates: {
    canonical: "https://vakiltech.in/fssai-registration",
  },
};

export default function GeneratedServicePage() {
const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "FSSAI Registration Online", current: true },
  ];

  const faqs: any[] = [];

  return (
    <>
    {/* schema-migrated */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"Organization","name":"vakiltech","legalName":"vakiltech Legal Services","url":"https://vakiltech.in","logo":"https://vakiltech.in/logo.png","foundingDate":"2023","description":"India's leading online legal services platform providing affordable legal notices, consultations, and agreement drafting services through experienced Licensed Advocates.","address":{"@type":"PostalAddress","addressCountry":"IN"},"contactPoint":[{"@type":"ContactPoint","telephone":"+91-70476 83995","contactType":"Customer Service","availableLanguage":["English","Hindi"],"areaServed":"IN"}],"sameAs":[],"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"500","bestRating":"5","worstRating":"1"},"makesOffer":[{"@type":"Offer","itemOffered":{"@type":"Service","name":"Legal Notice Services","description":"Professional legal notice drafting and sending"},"price":"1499","priceCurrency":"INR"},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Legal Consultation","description":"Expert legal consultation from Licensed Advocates"},"price":"299","priceCurrency":"INR"},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Agreement Drafting","description":"Professional legal agreement drafting services"},"price":"999","priceCurrency":"INR"}]}` }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"LegalService","telephone":"+91-70476 83995","image":"https://vakiltech.in/vt-logo.png","address":{"@type":"PostalAddress","addressCountry":"IN"},"priceRange":"\u20b91,499+","name":"FSSAI Registration Service","description":"Online FSSAI Registration and Food License Service in India.","provider":{"@type":"Organization","name":"vakiltech","url":"https://vakiltech.in"},"offers":{"@type":"Offer","price":"429","priceCurrency":"INR"},"areaServed":{"@type":"Country","name":"India"}}` }}
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
                    FSSAI Registration Online
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Apply for FSSAI Registration Online in India starting @ ₹429. Get your Food License (FosCos) quickly via vakiltech. 100% Online, Expert Support, Avoid Penalties.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/send-a-legal-notice"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Start Process
                  </Link>
                  <Link
                    href="/legal-consultation"
                    className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 text-center"
                  >
                    Get Free Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto py-12 space-y-6">
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Benefits of FSSAI Registration</h2>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Legal Advantage</li>
</ul>
<p className="text-muted-foreground mb-4">Avoid heavy penalties and legal hassles by being fully compliant with FSS Act, 2006.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Build Consumer Trust</li>
</ul>
<p className="text-muted-foreground mb-4">Displaying the FSSAI logo on your packaging builds credibility and assures quality.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Business Expansion</li>
</ul>
<p className="text-muted-foreground mb-4">Mandatory for selling online (Zomato/Swiggy) and entering corporate contracts.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Government tenders</li>
</ul>
<p className="text-muted-foreground mb-4">FSSAI registration makes it easier to apply for government tenders and schemes.</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Why Choose Us for FSSAI</h2>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Expert Assistance</li>
</ul>
<p className="text-muted-foreground mb-4">Guided by professionals who understand food safety laws.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Fast Processing</li>
</ul>
<p className="text-muted-foreground mb-4">We optimized the application process to avoid rejections.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>100% Online</li>
</ul>
<p className="text-muted-foreground mb-4">No need to visit any government office. Complete it from home.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Documents Required</li>
</ul>
<p className="text-muted-foreground mb-4">Keep these documents handy for a smooth registration process.</p>
<p className="text-muted-foreground mb-4">Passport Size Photo of Applicant</p>
<p className="text-muted-foreground mb-4">Government Issued ID (Aadhaar/PAN/Voter ID)</p>
<p className="text-muted-foreground mb-4">Proof of Address of Business Premises (Electricity Bill/Rent Agreement)</p>
<p className="text-muted-foreground mb-4">Partnership Deed / Incorporation Certificate / Shop Act License</p>
<p className="text-muted-foreground mb-4">NOC from Owner (if rented)</p>
<p className="text-muted-foreground mb-4">List of Food Products to be manufactured/sold</p>
<p className="text-muted-foreground mb-4">Food Safety Management System (FSMS) Plan (for State/Central)</p>
<p className="text-muted-foreground mb-4">Water Analysis Report (for manufacturing units)</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Types of FSSAI Licenses</li>
</ul>
<p className="text-muted-foreground mb-4">Select the right license based on your business turnover.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Basic Registration</li>
</ul>
<p className="text-muted-foreground mb-4">Turnover &lt; ₹12 Lakhs/year</p>
<p className="text-muted-foreground mb-4">For petty food businesses, small retailers, hawkers, and temporary stallholders.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>State License</li>
</ul>
<p className="text-muted-foreground mb-4">Turnover ₹12 Lakhs - ₹20 Cr/year</p>
<p className="text-muted-foreground mb-4">For medium-sized manufacturers, storage units, transporters, and marketers operating in one state.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Central License</li>
</ul>
<p className="text-muted-foreground mb-4">Turnover &gt; ₹20 Cr/year</p>
<p className="text-muted-foreground mb-4">For large manufacturers, importers, exporters, e-commerce operators, and businesses in central govt premises (Airports/Railways).</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Avoid Heavy Penalties</li>
</ul>
<p className="text-muted-foreground mb-4">FSSAI has strict guidelines for food safety. Non-compliance can lead to imprisonment and hefty fines.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Operating without License</li>
</ul>
<p className="text-muted-foreground mb-4">Imprisonment &amp; Fine up to ₹5 Lakhs</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Sub-standard Food</li>
</ul>
<p className="text-muted-foreground mb-4">Fine up to ₹5 Lakhs</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Misbranded Food</li>
</ul>
<p className="text-muted-foreground mb-4">Fine up to ₹3 Lakhs</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Unhygienic Processing</li>
</ul>
<p className="text-muted-foreground mb-4">Fine up to ₹1 Lakh</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Registration Process</h2>
<p className="text-muted-foreground mb-4">Get your FSSAI license in 4 simple steps</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Fill Application</li>
</ul>
<p className="text-muted-foreground mb-4">Submit your business details and select the license type.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Document Upload</li>
</ul>
<p className="text-muted-foreground mb-4">Upload ID proof, address proof, and food category list.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Fee Payment</li>
</ul>
<p className="text-muted-foreground mb-4">Pay the government and professional fees online securely.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Get License</li>
</ul>
<p className="text-muted-foreground mb-4">Receive your 14-digit FSSAI license number digitally.</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Real People. Real Results.</h2>
<p className="text-muted-foreground mb-4">Got my FSSAI license in just 3 days! The team was very professional and handled everything online.Rahul SharmaRestaurant Owner, Delhi</p>
<p className="text-muted-foreground mb-4">vakiltech not only helped with registration but also guided me on food safety compliance for my bakery.Priya PatelHome Baker, Mumbai</p>
<p className="text-muted-foreground mb-4">Excellent service. Cheapest price I found online and no hidden charges. Highly recommended.Amit VermaCloud Kitchen Owner, Bangalore</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
<p className="text-muted-foreground mb-4">Everything you need to know about FSSAI Registration</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Is FSSAI registration mandatory for small food businesses?</li>
<li>What is the validity of an FSSAI license?</li>
<li>Do I need a separate FSSAI license for different locations?</li>
<li>Is GST required for FSSAI registration?</li>
<li>How long does it take to get the FSSAI certificate?</li>
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
