"use client";

import { Button } from "@/components/ui/button";
import { WordRotate } from "@/components/ui/word-rotate";
import { useFormContext } from "@/contexts/form-context";
import { useAnalytics } from "@/hooks/use-analytics";
import { ArrowRight, ShieldCheck, MapPin, Scale, Star } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  const { openForm } = useFormContext();
  const { logCTAClick, logServiceViewed } = useAnalytics();

  const handleGetStarted = () => {
    logCTAClick("hero_cta", "Consult a Top Lawyer", "/", "consultation");
    logServiceViewed("consultation", "/");
    openForm("consultation");
  };

  const handleSeeServices = () => {
    logCTAClick("hero_cta", "Explore Services", "/", undefined);
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-secondary/30">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] opacity-40 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,hsl(var(--primary))_0%,transparent_50%)] blur-3xl opacity-20"></div>
      </div>

      <div className="container relative mx-auto px-6 md:px-8 py-12 md:py-24 lg:py-32">
        <div className="text-center max-w-4xl mx-auto">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-1.5 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-secondary/80 backdrop-blur-sm border border-border text-xs md:text-sm font-medium mb-8 shadow-sm">
            <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary shrink-0" />
            <span className="text-muted-foreground whitespace-nowrap">Connecting you with expert lawyers</span>
            <span className="font-semibold text-foreground whitespace-nowrap"> across India</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 text-foreground leading-[1.1]">
            India's Most Trusted
            <br className="hidden md:block" />
            <span className="text-primary"> Legal Network</span>
          </h1>

          {/* Tagline showing Dynamic text */}
          <div className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-6 flex flex-col md:flex-row items-center justify-center gap-2">
            <span>We help you</span>
            <WordRotate
              className="text-foreground"
              words={[
                "resolve complex disputes.",
                "draft airtight agreements.",
                "send legal notices swiftly.",
                "consult top-rated experts."
              ]}
            />
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            Don't leave your legal matters to chance. We bridge the gap between you and India's most proficient attorneys, offering secure, transparent, and tailored legal solutions.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base px-8 h-14 group transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
              onClick={handleGetStarted}
            >
              Consult a Top Lawyer
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary/20 hover:border-primary text-foreground hover:bg-secondary font-semibold text-base px-8 h-14 transition-all duration-300"
              onClick={handleSeeServices}
            >
              Explore Services
            </Button>
            <Link
              href="/find-a-lawyer"
              className="inline-flex items-center justify-center gap-2 border-2 border-border hover:border-primary/50 text-muted-foreground hover:text-foreground bg-transparent hover:bg-secondary/50 font-semibold text-base px-8 h-14 rounded-md transition-all duration-300"
            >
              Find the Right Lawyer →
            </Link>
          </div>

          {/* Trust Value Props */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pt-10 border-t border-border/60">
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-5 rotate-3 hover:rotate-0 transition-transform">
                <ShieldCheck className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-foreground text-lg mb-2">Verified Professionals</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-[250px]">
                Rigorous vetting ensures you only work with highly qualified legal experts.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-5 -rotate-3 hover:rotate-0 transition-transform">
                <Scale className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-foreground text-lg mb-2">Tailored Matching</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-[250px]">
                We match your specific dispute with lawyers specializing in that exact field.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-5 rotate-3 hover:rotate-0 transition-transform">
                <Star className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-foreground text-lg mb-2">15,000+ Clients Served</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-[250px]">
                Trusted by thousands across India to resolve their legal matters effectively.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
