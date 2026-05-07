import type { Metadata } from "next";
import { HeroSection } from "@/components/features/homepage/hero-section";
import { HowItWorksSection } from "@/components/features/homepage/how-it-works";
import { ServicesOverviewSection } from "@/components/features/homepage/services-overview";
import { TrustSignalsSection } from "@/components/features/homepage/trust-signals";
import { WhyChooseUsSection } from "@/components/features/homepage/why-choose-us";
import { LiveChatSection } from "@/components/features/homepage/live-chat-section";
import { FAQSection } from "@/components/shared/faq-section";
import { homepageFAQs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "vakiltech | Built on the Calibre of Expert Lawyers",
  description:
    "Get instant legal help from expert lawyers! Legal consultation, document drafting, legal notices & corporate services. 15,000+ happy clients. Start free consultation now!",
  keywords: [
    "instant legal help",
    "online lawyer consultation",
    "legal advice 24/7",
    "document drafting",
    "legal notices",
    "expert lawyers",
    "legal solutions",
    "legal consultation",
    "send legal notices",
    "legal notice",
    "legal notice online",
    "legal notice online india",
  ],
  openGraph: {
    title: "vakiltech | Built on the Calibre of Expert Lawyers",
    description:
      "Get instant legal help from expert lawyers! Legal consultation, document drafting, legal notices & corporate services. 15,000+ happy clients. Start free consultation now!",
    url: "/",
    type: "website",
    siteName: "vakiltech",
  },
  twitter: {
    card: "summary_large_image",
    title: "vakiltech | Built on the Calibre of Expert Lawyers",
    description:
      "Get instant legal help from expert lawyers! Legal consultation, document drafting, legal notices & corporate services. 15,000+ happy clients. Start free consultation now!",
  },
  alternates: {
    canonical: "https://vakiltech.in",
  },
};

export default function HomePage() {

  return (
    <>
    {/* schema-migrated */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How does vakiltech's legal consultation process work?","acceptedAnswer":{"@type":"Answer","text":"Our process is simple: 1) Book a free consultation through our platform, 2) Get matched with a qualified lawyer within 24 hours, 3) Have your consultation via video call or in-person, 4) Receive a detailed legal opinion and action plan. We handle everything from scheduling to follow-up."}},{"@type":"Question","name":"What types of legal services do you offer?","acceptedAnswer":{"@type":"Answer","text":"We offer comprehensive legal services including business consultation, corporate retainer services, document drafting, and legal notice services. Our team specializes in corporate law, contract law, intellectual property, employment law, and regulatory compliance."}},{"@type":"Question","name":"How much do your legal services cost?","acceptedAnswer":{"@type":"Answer","text":"We offer transparent, competitive pricing. Consultation starts at ₹999, document drafting from ₹1,499, and corporate retainer services from ₹25,000/month. All prices are clearly listed on our website with no hidden fees."}},{"@type":"Question","name":"Are your lawyers qualified and experienced?","acceptedAnswer":{"@type":"Answer","text":"Yes, all our lawyers are qualified advocates with minimum 5+ years of experience. They're registered with the Bar Council of India and specialize in their respective practice areas. We thoroughly vet all lawyers before onboarding them."}},{"@type":"Question","name":"How quickly can I get a consultation?","acceptedAnswer":{"@type":"Answer","text":"We typically schedule consultations within 24-48 hours of booking. For urgent matters, we offer same-day consultations subject to lawyer availability. You can also choose your preferred time slot during booking."}},{"@type":"Question","name":"Do you offer services outside major cities?","acceptedAnswer":{"@type":"Answer","text":"Yes, we offer services across India. While our lawyers are primarily based in major cities, we provide video consultations and can arrange in-person meetings in most locations. We also have a network of local lawyers for specific regional requirements."}},{"@type":"Question","name":"What if I'm not satisfied with the service?","acceptedAnswer":{"@type":"Answer","text":"We offer a 100% satisfaction guarantee. If you're not satisfied with your consultation, we'll provide a free follow-up session or a full refund. We're committed to ensuring you get the legal support you need."}},{"@type":"Question","name":"Can you help with ongoing legal cases?","acceptedAnswer":{"@type":"Answer","text":"Yes, we can assist with ongoing cases. Our lawyers can review existing cases, provide second opinions, help with documentation, and represent you in court if needed. We'll assess your case during the initial consultation."}}]}` }}
    />

      <div className="min-h-screen bg-background max-w-screen-2xl mx-auto overflow-x-hidden">
        {/* Hero Section */}
        <HeroSection />

        {/* How It Works Section */}
        <HowItWorksSection />

        {/* Services Overview Section */}
        <ServicesOverviewSection />

        {/* Trust Signals Section */}
        <TrustSignalsSection />

        {/* Why Choose Us Section */}
        <WhyChooseUsSection />

        {/* Live Chat Section */}
        <LiveChatSection />

        {/* FAQ Section */}
        <FAQSection
          faqs={homepageFAQs}
          title="Frequently Asked Questions"
          subtitle="Get answers to common questions about our legal services"
        />
      </div>
    </>
  );
}
