import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { TrustSignalsSection } from "@/components/features/homepage/trust-signals";
import { FAQSection } from "@/components/shared/faq-section";
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import ClientFormTrigger from "@/app/send-legal-notice/legal-notice-for-money-recovery/client-form-trigger";

export const metadata: Metadata = {
  title: "Terms and Conditions | vakiltech",
  description: "Read the terms and conditions for using vakiltech's legal services platform.",
  keywords: ["vakil","vakiltech","online vakil","legal advice","talk to lawyer","lawyer contact number","send legal notice","online legal services india","advocate services"],
  alternates: {
    canonical: "https://vakiltech.in/terms-and-conditions",
  },
};

export default function GeneratedServicePage() {
const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Terms and Conditions", current: true },
  ];

  const faqs: any[] = [];

  return (
    <>
    {/* schema-migrated */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"Organization","name":"vakiltech","legalName":"vakiltech Legal Services","url":"https://vakiltech.in","logo":"https://vakiltech.in/logo.png","foundingDate":"2023","description":"India's leading online legal services platform providing affordable legal notices, consultations, and agreement drafting services through experienced Licensed Advocates.","address":{"@type":"PostalAddress","addressCountry":"IN"},"contactPoint":[{"@type":"ContactPoint","telephone":"+91-70476 83995","contactType":"Customer Service","availableLanguage":["English","Hindi"],"areaServed":"IN"}],"sameAs":[],"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"500","bestRating":"5","worstRating":"1"},"makesOffer":[{"@type":"Offer","itemOffered":{"@type":"Service","name":"Legal Notice Services","description":"Professional legal notice drafting and sending"},"price":"1499","priceCurrency":"INR"},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Legal Consultation","description":"Expert legal consultation from Licensed Advocates"},"price":"299","priceCurrency":"INR"},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Agreement Drafting","description":"Professional legal agreement drafting services"},"price":"999","priceCurrency":"INR"}]}` }}
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
                    Terms and Conditions
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Read the terms and conditions for using vakiltech's legal services platform.
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
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="acceptance">
              <AccordionTrigger className="text-left">
                1. Acceptance of Terms
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  By accessing and using Vakiltech.in, you accept and agree to
                  be bound by these Terms and Conditions. If you do not agree to
                  these terms, please do not use our website or services.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="service-description">
              <AccordionTrigger className="text-left">
                2. Service Description
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground mb-4">
                  Vakil Tech operates as a legal services aggregator platform.
                  We connect clients with qualified legal professionals who
                  provide various legal services including:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Legal consultation and advice</li>
                  <li>Document drafting and review</li>
                  <li>Legal notice services</li>
                  <li>Corporate retainer services</li>
                  <li>Compliance and regulatory guidance</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  All legal services are provided by qualified legal
                  professionals registered with the Bar Council of India.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="user-responsibilities">
              <AccordionTrigger className="text-left">
                3. User Responsibilities
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground mb-4">
                  As a user of our platform, you agree to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Provide accurate and complete information</li>
                  <li>Cooperate with our legal professionals</li>
                  <li>Pay fees as agreed upon</li>
                  <li>Maintain confidentiality of legal advice</li>
                  <li>Not use our services for illegal purposes</li>
                  <li>Respect the intellectual property rights of others</li>
                  <li>
                    Not attempt to gain unauthorized access to our systems
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="payment-refund">
              <AccordionTrigger className="text-left">
                4. Payment and Refund Policy
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Payment Terms</h3>
                    <p className="text-muted-foreground">
                      All fees are quoted in Indian Rupees (INR) and include
                      applicable taxes. Payment is due as specified in your
                      service agreement. We accept various payment methods
                      including online transfers and digital payments.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Refund Policy</h3>
                    <p className="text-muted-foreground">
                      We offer refunds in accordance with our satisfaction
                      guarantee. Refund requests must be made within 30 days of
                      service completion. Processing fees may apply and are
                      non-refundable.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="confidentiality">
              <AccordionTrigger className="text-left">
                5. Confidentiality
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  We maintain strict confidentiality of all client information
                  and legal matters, subject to legal requirements and your
                  consent. Our confidentiality obligations are governed by
                  applicable laws and professional ethics. All communications
                  between you and our legal professionals are protected by
                  attorney-client privilege.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="limitation-liability">
              <AccordionTrigger className="text-left">
                6. Limitation of Liability
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground mb-4">
                  Vakil Tech&apos;s liability is limited to the extent permitted
                  by law. We are not liable for:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Indirect or consequential damages</li>
                  <li>Loss of profits or business opportunities</li>
                  <li>
                    Damages arising from client&apos;s failure to follow advice
                  </li>
                  <li>Third-party actions or decisions</li>
                  <li>Technical issues or service interruptions</li>
                  <li>Data loss or security breaches beyond our control</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="intellectual-property">
              <AccordionTrigger className="text-left">
                7. Intellectual Property
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  All content on our website, including text, graphics, logos,
                  and software, is owned by Vakil Tech and protected by
                  intellectual property laws. You may not reproduce, distribute,
                  or create derivative works without our written permission.
                  Legal documents prepared for you remain your property.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="website-use">
              <AccordionTrigger className="text-left">
                8. Website Use
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Acceptable Use</h3>
                    <p className="text-muted-foreground">
                      You agree to use our website only for lawful purposes and
                      in accordance with these terms.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">
                      Prohibited Activities
                    </h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>
                        Attempting to gain unauthorized access to our systems
                      </li>
                      <li>Interfering with website functionality</li>
                      <li>Transmitting harmful code or content</li>
                      <li>Violating any applicable laws or regulations</li>
                      <li>
                        Impersonating others or providing false information
                      </li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="dispute-resolution">
              <AccordionTrigger className="text-left">
                9. Dispute Resolution
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground mb-4">
                  Any disputes arising from these terms or our services will be
                  resolved through:
                </p>
                <ol className="list-decimal list-inside text-muted-foreground space-y-1">
                  <li>Direct communication and negotiation</li>
                  <li>Mediation if required</li>
                  <li>Arbitration in Mumbai, India</li>
                  <li>Court proceedings as a last resort</li>
                </ol>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="governing-law">
              <AccordionTrigger className="text-left">
                10. Governing Law
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  These terms are governed by the laws of India. Any legal
                  proceedings will be subject to the jurisdiction of courts in
                  Mumbai, Maharashtra. All disputes will be resolved in
                  accordance with Indian law.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="changes-terms">
              <AccordionTrigger className="text-left">
                11. Changes to Terms
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  We reserve the right to modify these terms at any time.
                  Changes will be effective immediately upon posting on our
                  website. Continued use of our services constitutes acceptance
                  of modified terms. We will notify users of significant changes
                  via email or website notification.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="contact-info">
              <AccordionTrigger className="text-left">
                12. Contact Information
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground mb-4">
                  For questions about these terms and conditions, please contact
                  us:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p>Email: legal@vakiltech.in</p>
                  <p>Phone: +91 7047683995</p>
                  <p>
                    Address: Vakil Tech Legal Services, Mumbai, Maharashtra,
                    India
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
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
