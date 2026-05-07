import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { TrustSignalsSection } from "@/components/features/homepage/trust-signals";
import { FAQSection } from "@/components/shared/faq-section";
import Link from 'next/link';
import ClientFormTrigger from "@/app/send-legal-notice/legal-notice-for-money-recovery/client-form-trigger";

export const metadata: Metadata = {
  title: "GST Registration Online | New GSTIN Apply @ ₹698 | vakiltech",
  description: "Apply for GST Registration Online in India starting @ ₹698. Get your 15-digit GSTIN number quickly. 100% Online process, Expert CA Assistance.",
  keywords: ["gst registration","gst registration online","apply for gst","new gst registration","gstin registration"],
  alternates: {
    canonical: "https://vakiltech.in/gst-registration",
  },
};

export default function GeneratedServicePage() {
const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "GST Registration Online", current: true },
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
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"LegalService","telephone":"+91-70476 83995","image":"https://vakiltech.in/vt-logo.png","address":{"@type":"PostalAddress","addressCountry":"IN"},"priceRange":"\u20b91,499+","name":"Online GST Registration Service","description":"Online GST Registration Service in India starting at ₹698. Get your 15-digit GSTIN easily.","provider":{"@type":"Organization","name":"vakiltech","url":"https://vakiltech.in"},"offers":{"@type":"Offer","price":"698","priceCurrency":"INR"},"areaServed":{"@type":"Country","name":"India"}}` }}
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
                    GST Registration Online
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Apply for GST Registration Online in India starting @ ₹698. Get your 15-digit GSTIN number quickly. 100% Online process, Expert CA Assistance.
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
<h2 className="text-2xl font-bold text-foreground mb-4">Why Choose Us for GST Registration</h2>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Error-Free</li>
</ul>
<p className="text-muted-foreground mb-4">We ensure precise HSN/SAC code selection to avoid future notices.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Fast Track</li>
</ul>
<p className="text-muted-foreground mb-4">Priority processing with instant ARN generation.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Post-Reg Support</li>
</ul>
<p className="text-muted-foreground mb-4">Guidance on first return filing and compliance.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Documents Required</li>
</ul>
<p className="text-muted-foreground mb-4">Scan copies of these for quick approval.</p>
<p className="text-muted-foreground mb-4">PAN Card of Business / Proprietor</p>
<p className="text-muted-foreground mb-4">Aadhaar Card of Proprietor / Partners / Directors</p>
<p className="text-muted-foreground mb-4">Proof of Business Address (Electricity Bill / Rent Agreement)</p>
<p className="text-muted-foreground mb-4">Cancelled Cheque / Bank Statement</p>
<p className="text-muted-foreground mb-4">Passport Size Photos</p>
<p className="text-muted-foreground mb-4">Partnership Deed / Incorporation Certificate (if applicable)</p>
<p className="text-muted-foreground mb-4">Digital Signature Certificate (DSC) (for companies/LLPs)</p>
<p className="text-muted-foreground mb-4">NOC from Owner (if rented)</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Eligibility Criteria</li>
</ul>
<p className="text-muted-foreground mb-4">Mandatory under the GST Act for these businesses.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Turnover &gt; ₹40 Lakhs</li>
</ul>
<p className="text-muted-foreground mb-4">Businesses with annual turnover above ₹40L (₹20L for services) must register.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Inter-State Sales</li>
</ul>
<p className="text-muted-foreground mb-4">Mandatory if you sell goods to customers in other states.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>E-Commerce Sellers</li>
</ul>
<p className="text-muted-foreground mb-4">Compulsory for selling on Amazon, Flipkart, Zomato, etc.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Voluntary Registration</li>
</ul>
<p className="text-muted-foreground mb-4">To claim Input Tax Credit (ITC) on B2B purchases.</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Registration Process</h2>
<p className="text-muted-foreground mb-4">Get your GSTIN in 4 simple steps</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Application Filing</li>
</ul>
<p className="text-muted-foreground mb-4">Submit business details and secure document upload.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>ARN Generation</li>
</ul>
<p className="text-muted-foreground mb-4">Receive Application Reference Number (ARN) instantly.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Department Approval</li>
</ul>
<p className="text-muted-foreground mb-4">Officer reviews and approves the application.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Certificate Issued</li>
</ul>
<p className="text-muted-foreground mb-4">Receive your 15-digit GSTIN and Registration Certificate.</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Real People. Real Results.</h2>
<p className="text-muted-foreground mb-4">vakiltech helped me get my GST number in just 4 days. I could start selling on Amazon immediately.Rajesh KumarE-commerce Seller, Bangalore</p>
<p className="text-muted-foreground mb-4">The process was smooth. They handled all the document resizing and uploads perfectly.Sneha ReddyFreelance Consultant, Hyderabad</p>
<p className="text-muted-foreground mb-4">Very affordable service compared to local agents. Highly professional team.Amitabh SinghSmall Business Owner, Lucknow</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
<p className="text-muted-foreground mb-4">Everything you need to know about GST</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Who needs to register for GST in India?</li>
<li>What documents are required for GST Registration?</li>
<li>How long does it take to get the GST Certificate?</li>
<li>Is physical verification of business premises mandatory?</li>
<li>Can I file GST returns myself after registration?</li>
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
