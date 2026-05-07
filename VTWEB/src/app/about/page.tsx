import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { TrustSignalsSection } from "@/components/features/homepage/trust-signals";
import { FAQSection } from "@/components/shared/faq-section";
import Link from 'next/link';
import Image from "next/image";
import { 
  Scale, 
  ShieldCheck, 
  Zap, 
  ArrowRight,
  TrendingDown,
  Clock,
  XCircle,
  CheckCircle2,
  Users,
  Building,
  HeartHandshake
} from "lucide-react";

export const metadata: Metadata = {
  title: "About vakiltech | Affordable Legal Services for Every Indian",
  description: "Learn why 15,000+ Indians trust vakiltech for legal notices and consultations. Transparent pricing, expert advocates, and genuine solutions. Save 80% on legal fees.",
  keywords: ["vakiltech","about us","legal services India","affordable lawyers","transparent legal fees","online legal help","legal notice service","legal consultation India"],
  alternates: {
    canonical: "https://vakiltech.in/about",
  },
};

export default function AboutPage() {
const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "About vakiltech", current: true },
  ];

  const faqs: any[] = [];

  const coreValues = [
    {
      title: "Justice for All",
      description: "Legal help shouldn't be dictated by your bank balance. We fight to make quality justice accessible to every Indian.",
      image: "/images/about/val_justice.webp"
    },
    {
      title: "Radical Transparency",
      description: "No hidden fees. No surprise charges. What you see is precisely what you pay. Period.",
      image: "/images/about/val_transparency.webp"
    },
    {
      title: "Speed Without Compromise",
      description: "24-hour drafts, 3-hour lawyer matching. Fast doesn't mean careless—it means highly efficient.",
      image: "/images/about/val_speed.webp"
    },
    {
      title: "Client-First Always",
      description: "Your problem is our problem. We do not rest until you have complete clarity and a path forward.",
      image: "/images/about/val_client.webp"
    },
    {
      title: "Expertise You Can Trust",
      description: "We connect you exclusively with verified, Bar Council-registered advocates. You communicate directly with experts, not middlemen or chatbots.",
      image: "/images/about/val_expertise.webp"
    },
    {
      title: "Corporate Grade Security",
      description: "Your information never leaves our secure systems. Attorney-client privilege is strictly sacred to us.",
      image: "/images/about/val_security.webp"
    }
  ];

  return (
    <>
    {/* schema-migrated */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"Organization","name":"vakiltech","legalName":"vakiltech Legal Services","url":"https://vakiltech.in","logo":"https://vakiltech.in/logo.png","foundingDate":"2023","description":"India's leading online legal services platform providing affordable legal notices, consultations, and agreement drafting services through experienced Licensed Advocates.","address":{"@type":"PostalAddress","addressCountry":"IN"},"contactPoint":[{"@type":"ContactPoint","telephone":"+91-70476 83995","contactType":"Customer Service","availableLanguage":["English","Hindi"],"areaServed":"IN"}],"sameAs":[],"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"500","bestRating":"5","worstRating":"1"},"makesOffer":[{"@type":"Offer","itemOffered":{"@type":"Service","name":"Legal Notice Services","description":"Professional legal notice drafting and sending"},"price":"1499","priceCurrency":"INR"},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Legal Consultation","description":"Expert legal consultation from Licensed Advocates"},"price":"299","priceCurrency":"INR"},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Agreement Drafting","description":"Professional legal agreement drafting services"},"price":"999","priceCurrency":"INR"}]}` }}
    />

    <main className="min-h-screen bg-background selection:bg-primary/20 selection:text-primary">

      {/* HERO SECTION */}
      <section className="relative pt-6 pb-20 md:pt-10 md:pb-32 overflow-hidden border-b border-border/40">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 max-w-7xl mx-auto z-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-[40rem] h-[40rem] bg-primary/10 rounded-full blur-[100px] opacity-60 animate-gradient-pulse" />
          <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-amber-500/10 rounded-full blur-[100px] opacity-60" />
        </div>

        <div className="container relative z-10 mx-auto px-6 md:px-8">
          <Breadcrumb items={breadcrumbItems} />
          
          <div className="max-w-4xl mx-auto text-center mt-12 md:mt-20">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-semibold tracking-wide mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              India's Digital Legal Revolution
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-foreground tracking-tight leading-[1.1] mb-6">
              Democratizing Legal Help <br className="hidden md:block"/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-500">For Every Indian.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
              We are India's premier legal service aggregator, dedicated to bridging the gap between individuals and the right legal minds. We aren't a law firm—we are the digital bridge connecting you seamlessly with specialized, vetted legal professionals at your fingertips.
            </p>
            

          </div>
        </div>
      </section>



      {/* WHY VAKILTECH / COMPARISON SECTION */}
      <section className="py-20 md:py-32 container mx-auto px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Because Legal Services Needed a Revolution</h2>
          <p className="text-xl text-muted-foreground">Our role is simple: to facilitate seamless connections. We broke down the barriers of finding reliable legal representation by bringing the best advocates directly to you.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Traditional Law Firm */}
          <div className="bg-accent/50 border border-border/50 rounded-3xl p-8 md:p-10 transition-all hover:border-border">
            <h3 className="text-xl font-semibold text-muted-foreground mb-8 flex items-center gap-3">
              <Building className="w-6 h-6" />
              Traditional Law Firms
            </h3>
            <ul className="space-y-6">
              {[
                "Charge ₹5,000-15,000 for a simple legal notice",
                "Weeks of waiting just for a starting draft",
                "Hidden consultation charges appear later",
                "Senior partners bill you, but juniors do the work",
                "In-person visits required during work hours"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <XCircle className="w-6 h-6 text-destructive shrink-0 mt-0.5" />
                  <span className="text-muted-foreground/80 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Vakiltech */}
          <div className="bg-card border-2 border-primary/20 rounded-3xl p-8 md:p-10 shadow-2xl shadow-primary/5 transition-all hover:border-primary/40 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-34 bg-primary/5 rounded-full blur-[50px] -mr-16 -mt-16" />
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3 relative z-10">
              <span className="bg-primary text-primary-foreground p-1.5 rounded-lg">
                <Zap className="w-5 h-5" />
              </span>
              The vakiltech Promise
            </h3>
            <ul className="space-y-6 relative z-10">
              {[
                "Fixed ₹1,499 all-inclusive pricing",
                "Guaranteed 24-hour turnaround",
                "Radical transparency, zero hidden charges",
                "Direct connection to specialized, Licensed Advocates",
                "100% remote, strictly private, accessible 24/7"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CORE VALUES GRID */}
      <section className="bg-accent/30 py-20 md:py-32 border-y border-border/40">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Values That Drive Every Decision</h2>
            <p className="text-xl text-muted-foreground">We aren't agents for lawyers. We are a trusted aggregator built to facilitate seamless communication and connect you with the legal resources you deserve.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {coreValues.map((val, idx) => (
              <div 
                key={idx} 
                className="bg-card hover:bg-accent/40 border border-border/50 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group flex flex-col items-center text-center"
              >
                <div className="w-32 h-32 mb-6 mx-auto group-hover:scale-110 transition-transform duration-500 relative">
                  <Image src={val.image} alt={val.title} fill className="object-contain drop-shadow-xl" sizes="(max-width: 768px) 100vw, 30vw" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{val.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT / TESTIMONIALS */}
      <section className="py-20 md:py-32 container mx-auto px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Don't Just Take Our Word For It</h2>
          <p className="text-xl text-muted-foreground">Real stories from Indians who experienced the exact difference.</p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 max-w-7xl mx-auto space-y-6">
          {[
            {
              quote: "I was quoted ₹12,000 by a local lawyer for a simple cheque bounce notice. vakiltech did it for ₹1,499. Same quality, 1/8th the price. Why doesn't everyone know about this?",
              author: "Amit Sharma",
              role: "Small Business Owner, Delhi"
            },
            {
              quote: "What impressed me most was the transparency. No hidden fees, no 'we'll let you know the cost later'. Everything was upfront. That's rare in legal services.",
              author: "Priya Menon",
              role: "Startup Founder, Bangalore"
            },
            {
              quote: "The advocate who handled my property case had 15 years of experience. I was paying a fraction of what I'd pay elsewhere for the exact same expertise.",
              author: "Rajesh Agarwal",
              role: "NRI, USA (Property in Mumbai)"
            },
            {
              quote: "मुझे लगा था online lawyer reliable नहीं होंगे। लेकिन vakiltech ने सब clear किया। Hindi में consultation मिली और 2 हफ्ते में problem resolve हो गई।",
              author: "Kavita Singh",
              role: "Teacher, Lucknow"
            },
            {
              quote: "Finally, a legal service that treats clients like humans, not billing opportunities. Refreshingly honest and genuinely helpful. Highly recommended.",
              author: "Mohammed Faiz",
              role: "IT Professional, Hyderabad"
            }
          ].map((testimonial, i) => (
            <div key={i} className="bg-card border border-border/60 rounded-2xl p-8 break-inside-avoid shadow-sm hover:shadow-md transition-shadow">
              <div className="flex gap-1 mb-6">
                {[1,2,3,4,5].map(star => <svg key={star} className="w-5 h-5 text-amber-500 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>)}
              </div>
              <p className="text-muted-foreground leading-relaxed italic mb-6">"{testimonial.quote}"</p>
              <div>
                <h4 className="font-bold text-foreground">{testimonial.author}</h4>
                <p className="text-sm text-primary/80 font-medium">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-amber-500/10 py-20 md:py-32 border-t border-border/40">
        <div className="container mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Ready to Experience the Difference?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">Stop overpaying for legal services. Get premium, expert legal representation at exclusively transparent prices today.</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/send-legal-notice"
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              Start Your Notice
            </Link>
            <Link
              href="/consultation"
              className="w-full sm:w-auto bg-card border-2 border-primary/20 hover:border-primary/50 text-foreground px-8 py-4 rounded-xl font-semibold text-lg shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              Get Free Assessment
            </Link>
          </div>
        </div>
      </section>

      <TrustSignalsSection />

      {faqs.length > 0 && (
         <FAQSection faqs={faqs} title="Frequently Asked Questions" />
      )}
    </main>
    </>
  );
}
