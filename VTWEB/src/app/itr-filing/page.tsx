import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { TrustSignalsSection } from "@/components/features/homepage/trust-signals";
import { FAQSection } from "@/components/shared/faq-section";
import Link from 'next/link';
import ClientFormTrigger from "@/app/send-legal-notice/legal-notice-for-money-recovery/client-form-trigger";

export const metadata: Metadata = {
  title: "ITR Filing Online CA Assisted | Income Tax Return @ ₹599 | vakiltech",
  description: "File your ITR Online with Expert CA assistance starting @ ₹599. Get maximum refund. Secure & Confidential. Income Tax Return Filing Service India.",
  keywords: ["itr filing online","income tax return filing","ca assisted itr filing","file itr online","income tax refund"],
  alternates: {
    canonical: "https://vakiltech.in/itr-filing",
  },
};

export default function GeneratedServicePage() {
const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "ITR Filing Online CA Assisted", current: true },
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
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"LegalService","telephone":"+91-70476 83995","image":"https://vakiltech.in/vt-logo.png","address":{"@type":"PostalAddress","addressCountry":"IN"},"priceRange":"\u20b91,499+","name":"Online ITR Filing Service","description":"Expert CA assisted ITR filing service in India starting at ₹599.","provider":{"@type":"Organization","name":"vakiltech","url":"https://vakiltech.in"},"offers":{"@type":"Offer","price":"599","priceCurrency":"INR"},"areaServed":{"@type":"Country","name":"India"}}` }}
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
                    ITR Filing Online CA Assisted
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    File your ITR Online with Expert CA assistance starting @ ₹599. Get maximum refund. Secure & Confidential. Income Tax Return Filing Service India.
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
<h2 className="text-2xl font-bold text-foreground mb-4">Why Choose Us for ITR Filing</h2>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Tax Optimization</li>
</ul>
<p className="text-muted-foreground mb-4">We don't just file; we plan to save every rupee possible legally.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Expert CAs</li>
</ul>
<p className="text-muted-foreground mb-4">Filed by Chartered Accountants with years of experience.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Year-Round Support</li>
</ul>
<p className="text-muted-foreground mb-4">Got a notice? We help you respond even after filing.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Documents Required</li>
</ul>
<p className="text-muted-foreground mb-4">We'll review these to maximize your deductions.</p>
<p className="text-muted-foreground mb-4">Form 16 / 16A from Employer / Deductor</p>
<p className="text-muted-foreground mb-4">Form 26AS &amp; AIS (Tax Credit Statements)</p>
<p className="text-muted-foreground mb-4">Bank Statements (Savings &amp; Current)</p>
<p className="text-muted-foreground mb-4">Interest Certificates from Banks/Post Office</p>
<p className="text-muted-foreground mb-4">Proof of Investments (LIC, PPF, NSC, ELSS)</p>
<p className="text-muted-foreground mb-4">Home Loan Interest Certificate (if applicable)</p>
<p className="text-muted-foreground mb-4">Capital Gains Statement from Broker (for traders/investors)</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Eligibility &amp; Benefits</li>
</ul>
<p className="text-muted-foreground mb-4">Filing ITR is crucial for financial health and compliance.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Income &gt; ₹2.5 Lakhs</li>
</ul>
<p className="text-muted-foreground mb-4">Mandatory for individuals with gross income above the exemption limit.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Claim Refunds</li>
</ul>
<p className="text-muted-foreground mb-4">To claim back excess TDS deducted by your employer or bank.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Apply for Loans</li>
</ul>
<p className="text-muted-foreground mb-4">ITR is the most important income proof for Housing or Personal Loans.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Visa Processing</li>
</ul>
<p className="text-muted-foreground mb-4">Foreign consulates require ITRs of last 3 years for visa approval.</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Filing Process</h2>
<p className="text-muted-foreground mb-4">File your ITR in 4 simple steps</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Upload Documents</li>
</ul>
<p className="text-muted-foreground mb-4">Submit Form 16, bank statements, and investment details secureley.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>CA Review</li>
</ul>
<p className="text-muted-foreground mb-4">Our CA analyzes your income to maximize deductions.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Draft Approval</li>
</ul>
<p className="text-muted-foreground mb-4">We prepare the computation and get your approval.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>File &amp; E-Verify</li>
</ul>
<p className="text-muted-foreground mb-4">We file the return and guide you to e-verify via OTP.</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Real People. Real Results.</h2>
<p className="text-muted-foreground mb-4">Received a refund of ₹15,000 which I didn't even know I could claim. The CA was super helpful!Rohan DasSoftware Engineer, Hyderabad</p>
<p className="text-muted-foreground mb-4">vakiltech made ITR filing so simple. I just uploaded my Form 16 and they handled the rest.Meera IyerMarketing Manager, Chennai</p>
<p className="text-muted-foreground mb-4">Best service for freelancers. They understood my expenses and deductions perfectly.Vikram SinghGraphic Designer, Delhi</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
<p className="text-muted-foreground mb-4">Everything you need to know about ITR Filing</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Is it mandatory to file ITR?</li>
<li>What documents are required for ITR filing?</li>
<li>Can I file ITR myself?</li>
<li>What is the penalty for late filing?</li>
<li>How long does it take to get the refund?</li>
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
