import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { TrustSignalsSection } from "@/components/features/homepage/trust-signals";
import { FAQSection } from "@/components/shared/faq-section";
import Link from 'next/link';
import ClientFormTrigger from "@/app/send-legal-notice/legal-notice-for-money-recovery/client-form-trigger";

export const metadata: Metadata = {
  title: "Trade License Registration Online | Apply Municipal License @ ₹399",
  description: "Apply for Municipal Trade License Online in India starting @ ₹399. Mandatory for businesses within municipal limits. Easy online process with vakiltech.",
  keywords: ["trade license","online trade license","municipal trade license","shop license registration","business license india"],
  alternates: {
    canonical: "https://vakiltech.in/trade-license",
  },
};

export default function GeneratedServicePage() {
const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Trade License Registration Online", current: true },
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
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"LegalService","telephone":"+91-70476 83995","image":"https://vakiltech.in/vt-logo.png","address":{"@type":"PostalAddress","addressCountry":"IN"},"priceRange":"\u20b91,499+","name":"Trade License Registration Service","description":"Online Municipal Trade License Registration Service in India.","provider":{"@type":"Organization","name":"vakiltech","url":"https://vakiltech.in"},"offers":{"@type":"Offer","price":"399","priceCurrency":"INR"},"areaServed":{"@type":"Country","name":"India"}}` }}
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
                    Trade License Registration Online
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Apply for Municipal Trade License Online in India starting @ ₹399. Mandatory for businesses within municipal limits. Easy online process with vakiltech.
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
<h2 className="text-2xl font-bold text-foreground mb-4">Why Choose Us for Trade License</h2>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Hassle-Free</li>
</ul>
<p className="text-muted-foreground mb-4">We handle all municipal liaising and paperwork for you.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Quick Approval</li>
</ul>
<p className="text-muted-foreground mb-4">Our experts ensure error-free applications for faster processing.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Renewal Support</li>
</ul>
<p className="text-muted-foreground mb-4">We remind you and assist with timely annual renewals.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Documents Required</li>
</ul>
<p className="text-muted-foreground mb-4">Keep these documents handy. We'll assist with resizing and uploading.</p>
<p className="text-muted-foreground mb-4">Photo of Applicant / Partner / Director</p>
<p className="text-muted-foreground mb-4">PAN Card &amp; Aadhaar Card of Applicant</p>
<p className="text-muted-foreground mb-4">Address Proof of Business (Electricity Bill / Rent Agreement / Sale Deed)</p>
<p className="text-muted-foreground mb-4">Partnership Deed / Incorporation Certificate (if applicable)</p>
<p className="text-muted-foreground mb-4">NOC from Owner (if rented)</p>
<p className="text-muted-foreground mb-4">Blueprint / Site Plan of Premises (for specific trades)</p>
<p className="text-muted-foreground mb-4">Fire Application / NOC (for restaurants &amp; hazardous trades)</p>
<p className="text-muted-foreground mb-4">Property Tax Receipt (latest paid)</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Eligibility Criteria</li>
</ul>
<p className="text-muted-foreground mb-4">Mandatory for any business within municipal limits.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Shops &amp; Establishments</li>
</ul>
<p className="text-muted-foreground mb-4">Retail stores, offices, showrooms, and service centers.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Food Businesses</li>
</ul>
<p className="text-muted-foreground mb-4">Restaurants, cafes, bakeries, canteens, and cloud kitchens.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Manufacturing Units</li>
</ul>
<p className="text-muted-foreground mb-4">Factories, workshops, and small-scale industries.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Online Businesses</li>
</ul>
<p className="text-muted-foreground mb-4">Warehouses and godowns used for e-commerce operations.</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Registration Process</h2>
<p className="text-muted-foreground mb-4">Get your Trade License in 4 simple steps</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Application Filing</li>
</ul>
<p className="text-muted-foreground mb-4">Submit business details and address proof online.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Document Verification</li>
</ul>
<p className="text-muted-foreground mb-4">Municipal officials verify your uploaded documents.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Fee Payment</li>
</ul>
<p className="text-muted-foreground mb-4">Pay the government fee based on your trade type.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>License Issuance</li>
</ul>
<p className="text-muted-foreground mb-4">Download your digitally signed Trade License.</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Real People. Real Results.</h2>
<p className="text-muted-foreground mb-4">Getting a trade license from the municipal office was a nightmare until I found vakiltech. They did it all online.Suresh GuptaRetail Store Owner, Pune</p>
<p className="text-muted-foreground mb-4">Very professional service. They explained the documents needed clearly and got my license within a week.Anita DesaiBoutique Owner, Ahmedabad</p>
<p className="text-muted-foreground mb-4">Highly recommended for small businesses. Low cost and very efficient team.Manish KumarCafe Owner, Gurgaon</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
<p className="text-muted-foreground mb-4">Everything you need to know about Trade Licenses</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Who needs a Trade License in India?</li>
<li>What happens if I operate without a Trade License?</li>
<li>How long is the Trade License valid for?</li>
<li>Can I apply for a Trade License online?</li>
<li>Is property tax receipt mandatory for Trade License?</li>
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
