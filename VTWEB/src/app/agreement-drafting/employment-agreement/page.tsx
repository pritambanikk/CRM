import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { TrustSignalsSection } from "@/components/features/homepage/trust-signals";
import { FAQSection } from "@/components/shared/faq-section";
import Link from 'next/link';
import ClientFormTrigger from "@/app/send-legal-notice/legal-notice-for-money-recovery/client-form-trigger";

export const metadata: Metadata = {
  title: "Employment Agreement Drafting | Job Contract Format @ ₹499 | vakiltech",
  description: "Get professional Employment Agreements drafted online. Includes Non-compete, IP rights, and Probation clauses. Lawyer verified drafts for Startups & SMEs.",
  keywords: ["employment agreement drafting","job contract format","employee bond agreement","appointment letter format","service agreement drafting"],
  alternates: {
    canonical: "https://vakiltech.in/agreement-drafting/employment-agreement",
  },
};

export default function GeneratedServicePage() {
const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Employment Agreement Drafting", current: true },
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
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"LegalService","telephone":"+91-70476 83995","image":"https://vakiltech.in/vt-logo.png","address":{"@type":"PostalAddress","addressCountry":"IN"},"priceRange":"\u20b91,499+","name":"Employment Agreement Drafting","description":"Online Employment Agreement Drafting for Startups & SMEs. Includes IP protection and non-compete clauses.","provider":{"@type":"Organization","name":"vakiltech","url":"https://vakiltech.in"},"offers":{"@type":"Offer","price":"499","priceCurrency":"INR"},"areaServed":{"@type":"Country","name":"India"}}` }}
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
                    Employment Agreement Drafting
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Get professional Employment Agreements drafted online. Includes Non-compete, IP rights, and Probation clauses. Lawyer verified drafts for Startups & SMEs.
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
<h2 className="text-2xl font-bold text-foreground mb-4">Why Choose Us for Employment Contracts</h2>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Business Protection</li>
</ul>
<p className="text-muted-foreground mb-4">Strong IP, confidentiality, and non-compete clauses.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Compliant</li>
</ul>
<p className="text-muted-foreground mb-4">Adheres to latest Indian labor laws and regulations.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Expert Support</li>
</ul>
<p className="text-muted-foreground mb-4">Guidance on best practices for HR policies.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Information Needed</li>
</ul>
<p className="text-muted-foreground mb-4">Key details to customize the contract.</p>
<p className="text-muted-foreground mb-4">Company Details (Name, Address)</p>
<p className="text-muted-foreground mb-4">Employee Details (Name, Role)</p>
<p className="text-muted-foreground mb-4">Salary Structure (CTC breakdown)</p>
<p className="text-muted-foreground mb-4">Probation Period Details</p>
<p className="text-muted-foreground mb-4">Notice Period Terms</p>
<p className="text-muted-foreground mb-4">Leave Policy Summary</p>
<p className="text-muted-foreground mb-4">Specific Confidentiality Needs</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Who is this for?</li>
</ul>
<p className="text-muted-foreground mb-4">Ideal for businesses of all sizes.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Startups</li>
</ul>
<p className="text-muted-foreground mb-4">Essential for protecting early-stage IP and setting culture.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>SMEs</li>
</ul>
<p className="text-muted-foreground mb-4">Professionalize your hiring and reduce legal risks.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Corporates</li>
</ul>
<p className="text-muted-foreground mb-4">Standardize contracts across departments and roles.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Consultants</li>
</ul>
<p className="text-muted-foreground mb-4">Agreements for long-term contract staff.</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Drafting Process</h2>
<p className="text-muted-foreground mb-4">Professional contracts in 3 steps</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Requirement</li>
</ul>
<p className="text-muted-foreground mb-4">Tell us about the role, salary, and specific company policies.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Drafting</li>
</ul>
<p className="text-muted-foreground mb-4">We create a comprehensive agreement tailored to your needs.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Review</li>
</ul>
<p className="text-muted-foreground mb-4">You review the terms and request adjustments.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Final Copy</li>
</ul>
<p className="text-muted-foreground mb-4">Receive the clean, professional agreement ready for signing.</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Real People. Real Results.</h2>
<p className="text-muted-foreground mb-4">The agreement was very detailed and covered things I hadn't even thought of. Great for my startup.Arjun GuptaFounder, Tech Startup, Bangalore</p>
<p className="text-muted-foreground mb-4">Professional service. Helped us standardize our hiring process.Nisha PatelHR Manager, Ahmedabad</p>
<p className="text-muted-foreground mb-4">Clear terms on IP ownership were crucial for us. vakiltech handled it perfectly.Sandeep RaoDirector, Design Agency, Hyderabad</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
<p className="text-muted-foreground mb-4">Common questions about Hiring Contracts</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Why do I need a written employment agreement?</li>
<li>Can I include a non-compete clause?</li>
<li>Does it cover intellectual property rights?</li>
<li>Is this suitable for freelancers?</li>
<li>What about probation periods?</li>
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
