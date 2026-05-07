"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExpertCarousel } from "@/components/ui/expert-carousel";
import { useFormContext } from "@/contexts/form-context";

import { consultationExperts } from "@/data/experts";
import { useAnalytics } from "@/hooks/use-analytics";

export function ConsultationLanding({ city }: { city?: string } = {}) {
  const { openForm } = useFormContext();
  const { logCTAClick } = useAnalytics();
  const [step, setStep] = useState<1 | 2>(1);
  const [issue, setIssue] = useState<string>("");
  const [urgency, setUrgency] = useState<string>("");
  const [isMatching, setIsMatching] = useState(false);
  const [matchFound, setMatchFound] = useState(false);
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowStickyCTA(true);
      } else {
        setShowStickyCTA(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBookConsultation = () => {
    logCTAClick(
      "consultation",
      "Book Consultation",
      typeof window !== "undefined" ? window.location.pathname : undefined,
      "consultation"
    );
    openForm("consultation");
  };

  const issueOptions = [
    { label: "Civil Law", icon: "⚖️" },
    { label: "Criminal Law", icon: "🚨" },
    { label: "Cheque Bounce", icon: "💰" },
    { label: "Divorce", icon: "💔" },
    { label: "Property Dispute", icon: "🏠" },
    { label: "Startup / Business", icon: "💼" },
    { label: "Other", icon: "✍️" }
  ];

  const urgencyOptions = [
    { label: "Immediate (Today)", icon: "⚡" },
    { label: "This Week", icon: "📅" },
    { label: "Just Exploring", icon: "🤔" }
  ];



  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 py-4 sm:py-8 pb-20 md:pb-8">
      {/* Hero Section */}
      <section className="relative text-center py-8 md:py-16">
        <div className="max-w-3xl mx-auto px-2 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 text-foreground tracking-tight leading-tight">
            Consult a Lawyer
            {city ? <>{" "}in <span className="text-primary">{city}</span></> : null}
          </h1>

          <Card className="max-w-xl mx-auto border-border bg-card shadow-lg rounded-2xl overflow-hidden text-left mb-6">
            <CardContent className="p-5 sm:p-7">
              {/* Progress Bar & Title */}
              <div className="flex justify-between items-center text-[10px] sm:text-xs font-semibold text-muted-foreground mb-3 px-1 uppercase tracking-wider">
                <span>
                  {step === 1 ? "Step 1 of 2 — You're almost done" : "Step 2 of 2 — Just one last thing"}
                </span>
                <span>{step === 1 ? "50%" : "100%"}</span>
              </div>
              <div className="w-full bg-secondary h-1.5 rounded-full mb-6 sm:mb-8 overflow-hidden">
                <div
                  className={`h-full bg-primary transition-all duration-700 ease-out ${step === 1 ? "w-1/2" : "w-full"}`}
                />
              </div>

              {step === 1 && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="mb-6">
                    <h2 className="text-xl sm:text-2xl font-bold text-foreground leading-tight mb-2">
                      Tell us your issue. We'll connect you to the right lawyer instantly.
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Takes 30 seconds • Lawyer calls within 1 hour
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    {issueOptions.map((opt, idx) => {
                      const isSelected = issue === opt.label;
                      const isLast = idx === issueOptions.length - 1;
                      return (
                        <div key={opt.label} className={isLast && issueOptions.length % 2 !== 0 ? "col-span-2" : ""}>
                          <Button
                            variant="outline"
                            className={`w-full flex items-center justify-start gap-2 h-auto py-3 sm:py-4 px-3 sm:px-4 rounded-xl transition-all duration-300 bg-background border border-border text-foreground ${isSelected
                              ? "bg-red-50 dark:bg-red-950/30 border-primary text-primary ring-1 ring-primary transform scale-[1.02] shadow-sm"
                              : "hover:border-primary/50 hover:bg-accent hover:-translate-y-0.5 hover:shadow-sm"
                              }`}
                            onClick={() => {
                              setIssue(opt.label);
                            }}
                          >
                            <span className="text-xl sm:text-2xl">{opt.icon}</span>
                            <span className="text-sm sm:text-base font-semibold whitespace-nowrap overflow-hidden text-ellipsis">{opt.label}</span>
                          </Button>
                        </div>
                      );
                    })}
                  </div>





                  {/* Price + Trust Strip inside Hero Box */}
                  <div className="mt-6 mb-4">
                    <div className="flex flex-col items-center justify-center p-3 sm:p-4 bg-primary/5 rounded-xl border border-primary/10">
                      <p className="text-sm sm:text-base font-bold text-foreground mb-2">₹299 one-time consultation fee</p>
                      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-[11px] sm:text-xs text-muted-foreground font-medium">
                        <span className="flex items-center gap-1"><span className="text-primary font-bold">✔</span> No time limit</span>
                        <span className="flex items-center gap-1"><span className="text-primary font-bold">✔</span> No hidden charges</span>
                        <span className="flex items-center gap-1"><span className="text-primary font-bold">✔</span> 100% confidential</span>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-6">
                    {isMatching ? (
                      <Button
                        disabled
                        className="w-full h-12 sm:h-14 rounded-xl text-base font-semibold shadow-md bg-primary text-primary-foreground relative overflow-hidden disabled:opacity-100"
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse" />
                        {matchFound ? `✔ Match found: ${issue !== "Other" ? issue : "Legal"} Expert` : "🔍 Finding the right lawyer for you..."}
                      </Button>
                    ) : (
                      <Button
                        className={`w-full h-12 sm:h-14 rounded-xl text-base font-semibold shadow-md transition-all duration-300 ${issue
                          ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-[1.02] hover:shadow-lg"
                          : "bg-muted text-muted-foreground cursor-not-allowed"
                          }`}
                        onClick={() => {
                          if (!issue) return;
                          setIsMatching(true);
                          setTimeout(() => {
                            setMatchFound(true);
                            setTimeout(() => {
                              setIsMatching(false);
                              setMatchFound(false);
                              setStep(2);
                            }, 800);
                          }, 1200);
                        }}
                        disabled={!issue}
                      >
                        {issue ? "Continue → Get Lawyer Call" : "Select an issue to continue"}
                      </Button>
                    )}
                  </div>

                  {/* Trust Microcopy */}
                  <p className="text-center text-[11px] sm:text-xs text-muted-foreground mt-4 flex items-center justify-center gap-1">
                    🔒 Your information is 100% confidential
                  </p>
                </div>
              )}

              {step === 2 && (
                <div className="animate-in fade-in slide-in-from-right-8 duration-500">
                  <div className="mb-6">
                    <h2 className="text-xl sm:text-2xl font-bold text-foreground leading-tight mb-2">
                      When do you need the lawyer to call?
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Available instantly via callback
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 mb-6 sm:mb-8">
                    {urgencyOptions.map((opt) => {
                      const isSelected = urgency === opt.label;
                      return (
                        <Button
                          key={opt.label}
                          variant="outline"
                          className={`flex items-center justify-center gap-3 w-full h-auto py-4 sm:py-5 rounded-xl transition-all duration-300 bg-background border border-border text-foreground ${isSelected
                            ? "bg-red-50 dark:bg-red-950/30 border-primary text-primary ring-1 ring-primary transform scale-[1.02] shadow-sm"
                            : "hover:border-primary/50 hover:bg-accent hover:-translate-y-0.5"
                            }`}
                          onClick={() => setUrgency(opt.label)}
                        >
                          <span className="text-2xl">{opt.icon}</span>
                          <span className="text-base sm:text-lg font-bold">{opt.label}</span>
                        </Button>
                      );
                    })}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border/50">
                    <Button
                      variant="ghost"
                      onClick={() => setStep(1)}
                      className="text-muted-foreground hover:text-foreground hover:bg-accent h-12 sm:h-14 w-full sm:w-auto rounded-xl font-semibold"
                    >
                      ← Back
                    </Button>
                    <Button
                      className={`h-12 sm:h-14 flex-1 rounded-xl text-base font-semibold shadow-md transition-all duration-300 w-full ${urgency
                        ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-[1.02] hover:shadow-lg"
                        : "bg-muted text-muted-foreground cursor-not-allowed"
                        }`}
                      onClick={handleBookConsultation}
                      disabled={!urgency}
                    >
                      Verify & Book Session →
                    </Button>
                  </div>

                  <p className="text-center text-[11px] sm:text-xs text-muted-foreground mt-4 flex items-center justify-center gap-1">
                    🔒 Secure verification • Zero spam
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Expert Carousel Section */}
      <div className="py-2">
        <ExpertCarousel
          experts={consultationExperts}
          title="Consult top law experts"
          subtitle="Get expert advice from experienced law professionals"
        />
      </div>

      {/* What do you need help with? */}
      <section className="py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-3xl font-bold mb-2 text-foreground">
            What do you need help with?
          </h2>
          <p className="text-muted-foreground text-sm">
            Select your issue and get matched instantly
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "My Employer is not settling my FnF",
            "Landlord not returning Security Deposit",
            "Received a Legal Notice",
            "Property dispute with neighbour",
            "Cheque bounce issue",
            "Divorce / family matter",
          ].map((query) => (
            <button
              key={query}
              onClick={handleBookConsultation}
              className="text-left px-6 py-5 rounded-2xl border border-border bg-card text-foreground font-medium text-sm hover:border-primary hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              {query}
            </button>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-3xl font-bold mb-2 text-foreground">
            How it works
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {[
            {
              step: 1,
              title: "Choose your issue & pay ₹299",
              subtitle: "Takes less than 30 seconds",
            },
            {
              step: 2,
              title: "We assign the right lawyer",
              subtitle: "Based on your specific issue",
            },
            {
              step: 3,
              title: "Get a call within 1 hour",
              subtitle: "Ask everything without time pressure",
            },
          ].map(({ step, title, subtitle }) => (
            <div
              key={step}
              className="flex flex-col items-center text-center border border-border rounded-2xl p-8 bg-card hover:shadow-md transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg mb-5">
                {step}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground">{subtitle}</p>
            </div>
          ))}
        </div>

        {/* Trust strip */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-card text-sm text-foreground font-medium shadow-sm">
            <span className="text-primary font-bold">✓</span>
            No 10-minute limit. Speak freely until your queries are resolved.
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-3xl font-bold mb-2 text-foreground">
            Why people choose us
          </h2>
          <p className="text-muted-foreground text-sm max-w-xl mx-auto">
            Thousands of Indians have resolved their legal issues with us
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {[
            {
              icon: "⚡",
              title: "Call within 1 hour",
              desc: "No waiting days for appointments. A verified lawyer calls you within the hour.",
            },
            {
              icon: "🔒",
              title: "100% confidential",
              desc: "Everything you share stays between you and your lawyer. Always.",
            },
            {
              icon: "🕐",
              title: "No time pressure",
              desc: "Unlike other services, we don't cut you off at 10 minutes. Talk until you're satisfied.",
            },
            {
              icon: "✅",
              title: "Verified advocates",
              desc: "Every lawyer is bar-verified and hand-screened for expertise and professionalism.",
            },
          ].map(({ icon, title, desc }) => (
            <div
              key={title}
              className="flex gap-4 p-6 rounded-2xl border border-border bg-card hover:shadow-sm transition-all duration-200"
            >
              <div className="text-2xl shrink-0 mt-0.5">{icon}</div>
              <div>
                <h3 className="font-bold text-foreground mb-1">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-10 bg-secondary/40 rounded-3xl px-6 my-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-3xl font-bold mb-2 text-foreground">
            What our users say
          </h2>
          <p className="text-muted-foreground text-sm">
            Real people, real legal problems — resolved.
          </p>
        </div>
        <div className="grid sm:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {[
            {
              quote:
                "My employer was withholding my FnF for 4 months. The lawyer called within 45 minutes and told me exactly what notice to send. Got my money in 2 weeks.",
              name: "Rohit S.",
              tag: "FnF Settlement · Mumbai",
            },
            {
              quote:
                "Landlord refused to return my ₹1.2L deposit and stopped picking up calls. After one consultation I knew my rights. Deposit returned within 10 days.",
              name: "Priya M.",
              tag: "Security Deposit · Bangalore",
            },
            {
              quote:
                "Received a legal notice out of nowhere. Panicked completely. The lawyer explained it calmly, it was nothing serious. Worth every rupee of ₹299.",
              name: "Arun K.",
              tag: "Legal Notice · Hyderabad",
            },
          ].map(({ quote, name, tag }) => (
            <div
              key={name}
              className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-4"
            >
              <p className="text-sm text-foreground leading-relaxed">
                &ldquo;{quote}&rdquo;
              </p>
              <div className="mt-auto">
                <p className="font-bold text-sm text-foreground">{name}</p>
                <p className="text-xs text-muted-foreground">{tag}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-3xl font-bold mb-2 text-foreground">
            Simple, transparent process
          </h2>
          <p className="text-muted-foreground text-sm max-w-xl mx-auto">
            From booking to resolution — here's exactly what happens
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto flex flex-col gap-0">
          {[
            {
              step: "01",
              title: "Pay ₹299 & describe your issue",
              desc: "One flat fee. No hidden charges. Takes less than 30 seconds.",
            },
            {
              step: "02",
              title: "We match you to the right lawyer",
              desc: "Based on your issue type and urgency, we assign a verified advocate instantly.",
            },
            {
              step: "03",
              title: "Lawyer calls you within 1 hour",
              desc: "No waiting rooms. Your lawyer calls you directly at the scheduled time.",
            },
            {
              step: "04",
              title: "Speak freely — no time pressure",
              desc: "Discuss everything until your queries are fully resolved. Zero rush.",
            },
          ].map(({ step, title, desc }, i, arr) => (
            <div key={step} className="flex gap-5 sm:gap-8 relative">
              {/* Step indicator + vertical line */}
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 shrink-0 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center text-primary font-bold text-sm">
                  {step}
                </div>
                {i < arr.length - 1 && (
                  <div className="w-px flex-1 bg-border mt-2 mb-2 min-h-[2.5rem]" />
                )}
              </div>
              {/* Content */}
              <div className={`pb-8 ${i === arr.length - 1 ? "pb-0" : ""}`}>
                <h3 className="text-base sm:text-lg font-bold text-foreground mb-1">
                  {title}
                </h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Guarantee Block */}
      <section className="py-10">
        <div className="max-w-2xl mx-auto border border-primary/20 bg-primary/5 rounded-2xl p-8 text-center">
          <div className="text-3xl mb-3">🛡️</div>
          <h3 className="text-xl font-bold text-foreground mb-2">
            Our satisfaction guarantee
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            If you feel your query wasn't fully addressed, we'll reassign you to
            a different lawyer — completely free of charge. No questions asked.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-xs font-medium">
            {[
              "Free reassignment if unsatisfied",
              "No extra charge",
              "Your call, your comfort",
            ].map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background border border-border text-foreground"
              >
                <span className="text-primary font-bold">✓</span> {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* With vs Without a Lawyer */}
      <section className="py-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-3xl font-bold mb-2 text-foreground">
            ₹299 that pays for itself
          </h2>
          <p className="text-muted-foreground text-sm">
            See what changes when you have the right legal advice
          </p>
        </div>
        <div className="max-w-3xl mx-auto grid grid-cols-2 gap-4">
          {/* Without column header */}
          <div className="rounded-t-2xl bg-muted/60 border border-border px-5 py-3 text-center font-bold text-sm text-muted-foreground">
            ❌ Without a lawyer
          </div>
          {/* With column header */}
          <div className="rounded-t-2xl bg-primary text-primary-foreground px-5 py-3 text-center font-bold text-sm">
            ✅ With Vakil Tech
          </div>
          {/* Rows */}
          {[
            [
              "Guessing your legal rights",
              "Know exactly where you stand",
            ],
            [
              "Employer ignores your FnF claim",
              "Lawyer-drafted notice gets results",
            ],
            [
              "Landlord keeps your deposit",
              "Recover it with legal backing",
            ],
            [
              "Panic when you get a legal notice",
              "Calm, clear guidance in 1 hour",
            ],
            [
              "Expensive lawyer meetings",
              "Full consultation for ₹299 flat",
            ],
          ].map(([without, withLawyer], i) => (
            <React.Fragment key={i}>
              <div
                className={`px-5 py-4 text-sm text-muted-foreground bg-muted/30 border-x border-b border-border ${i === 4 ? "rounded-b-2xl" : ""}`}
              >
                {without}
              </div>
              <div
                className={`px-5 py-4 text-sm font-medium text-foreground bg-primary/5 border-x border-b border-primary/20 ${i === 4 ? "rounded-b-2xl" : ""}`}
              >
                {withLawyer}
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* Pricing Card */}
      <section className="py-4">
        <div className="max-w-lg mx-auto border border-border rounded-2xl bg-card p-8 text-center shadow-sm">
          <p className="text-sm text-muted-foreground font-medium uppercase tracking-widest mb-4">
            One flat fee
          </p>
          <div className="text-6xl font-extrabold text-primary mb-2">₹299</div>
          <p className="text-muted-foreground text-sm mb-6">
            One-time consultation fee. No subscription. No hidden charges.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center text-sm text-foreground font-medium">
            {["No time limit", "100% confidential", "Verified lawyers"].map(
              (tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary/8 border border-primary/15 text-primary"
                >
                  <span className="font-bold">✓</span> {tag}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-3xl font-bold mb-4 text-foreground">
            Ready for Legal Consultation?
          </h2>
          <p className="text-base text-muted-foreground mb-6">
            Get expert legal advice for your business today. Our professionals
            will help you navigate complex legal matters with confidence.
          </p>
          <div className="space-x-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
              onClick={handleBookConsultation}
            >
              Book Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-secondary px-8 py-3"
              onClick={() => {
                // Expand service details or show FAQ
                const serviceDetails =
                  document.getElementById("service-details");
                if (serviceDetails) {
                  serviceDetails.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Sticky Mobile CTA — only visible on small screens after scroll */}
      <div 
        className={`fixed bottom-0 left-0 right-0 z-40 md:hidden bg-background/95 backdrop-blur border-t border-border px-4 py-3 flex items-center gap-3 shadow-lg transition-transform duration-300 ${
          showStickyCTA ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex-1 min-w-0">
          <p className="text-xs text-muted-foreground leading-tight">Lawyer calls within 1 hour</p>
          <p className="text-sm font-bold text-foreground">₹299 one-time · No hidden charges</p>
        </div>
        <Button
          className="shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl px-5 h-11 font-semibold text-sm"
          onClick={handleBookConsultation}
        >
          Get Lawyer Call →
        </Button>
      </div>
    </div>
  );
}
