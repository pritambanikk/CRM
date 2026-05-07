"use client";

import { useState } from "react";
import { useFormContext } from "@/contexts/form-context";
import Link from "next/link";
import { getLocalitiesByCity } from "@/data/localities";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ConsultationCityLandingProps {
  city: string;
}

export function ConsultationCityLanding({
  city,
}: ConsultationCityLandingProps) {
  const { openForm } = useFormContext();
  const [step, setStep] = useState<1 | 2>(1);
  const [issue, setIssue] = useState<string>("");
  const [otherIssueText, setOtherIssueText] = useState<string>("");
  const [urgency, setUrgency] = useState<string>("");
  const [isMatching, setIsMatching] = useState(false);
  const [matchFound, setMatchFound] = useState(false);

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
    <div className="container mx-auto px-4 sm:px-6 md:px-8 pb-4 sm:pb-8">
      {/* Hero */}
      <section className="relative text-center py-8 md:py-16 mt-4 sm:mt-8">
        <div className="max-w-4xl mx-auto px-2 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 text-foreground tracking-tight leading-tight">
            Find a Lawyer Near You{" "}
            <span className="text-primary">in {city}</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground mb-6">
            Connect with top-rated advocates near you in {city} — ₹299 consultation
          </p>

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
                            className={`w-full flex items-center justify-start gap-2 h-auto py-3 sm:py-4 px-3 sm:px-4 rounded-xl transition-all duration-300 bg-background border border-border text-foreground ${
                              isSelected 
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

                  {/* "Other" Textarea Expansion */}
                  {issue === "Other" && (
                    <div className="mt-4 animate-in slide-in-from-top-2 fade-in duration-300">
                      <textarea
                        className="w-full border border-border rounded-xl p-3 text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none resize-none bg-background shadow-sm"
                        rows={3}
                        placeholder="Briefly describe your issue..."
                        value={otherIssueText}
                        onChange={(e) => setOtherIssueText(e.target.value)}
                      />
                    </div>
                  )}



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
                        className={`w-full h-12 sm:h-14 rounded-xl text-base font-semibold shadow-md transition-all duration-300 ${
                          issue 
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
                          className={`flex items-center justify-center gap-3 w-full h-auto py-4 sm:py-5 rounded-xl transition-all duration-300 bg-background border border-border text-foreground ${
                            isSelected 
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
                      className={`h-12 sm:h-14 flex-1 rounded-xl text-base font-semibold shadow-md transition-all duration-300 w-full ${
                        urgency 
                          ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-[1.02] hover:shadow-lg" 
                          : "bg-muted text-muted-foreground cursor-not-allowed"
                      }`}
                      onClick={() => openForm("consultation")}
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

      {/* Two column: intro + pricing */}
      <section className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
          <h2 className="text-2xl font-semibold">
            Consult top lawyers in {city}
          </h2>
          <p className="text-muted-foreground">
            Instant slot booking, multi-language support and 100% private
            sessions. Get actionable guidance with clear next-steps and document
            checklist.
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-1">
            <li>Verified advocates for your subject area</li>
            <li>Available 7 days a week</li>
            <li>Follow-up summary and action plan</li>
          </ul>
        </div>
        <div className="border rounded-xl p-4 bg-card shadow-sm h-max">
          <h3 className="text-lg font-semibold mb-2">Consultation Plans</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">15 mins quick consult</span>
              <span className="font-semibold">₹449</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">30 mins detailed consult</span>
              <span className="font-semibold">₹849</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">60 mins strategy session</span>
              <span className="font-semibold">₹1449</span>
            </div>
            <Link
              href={`?type=consultation`}
              className="block text-center bg-primary text-primary-foreground rounded-md py-2 mt-2"
            >
              Book a consultation
            </Link>
            <p className="text-xs text-muted-foreground mt-2">
              Free reschedule once.
            </p>
          </div>
        </div>
      </section>

      {/* Localities */}
      <section className="pt-8">
        <h3 className="text-xl font-semibold mb-3">Popular areas in {city}</h3>
        <div className="flex flex-wrap gap-3">
          {getLocalitiesByCity(city).map((loc) => (
            <span
              key={loc}
              className="text-sm px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
            >
              {loc}
            </span>
          ))}
        </div>
      </section>

      {/* Areas of expertise */}
      <section className="pt-8">
        <h3 className="text-xl font-semibold mb-3">Areas of expertise</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            { icon: "🏠", label: "Property & Real Estate" },
            { icon: "👨‍👩‍👧", label: "Family & Matrimonial" },
            { icon: "📜", label: "Contracts & Agreements" },
            { icon: "👔", label: "Employment & HR" },
            { icon: "🏢", label: "Corporate & Startup" },
            { icon: "🧾", label: "Tax & GST" },
            { icon: "⚖️", label: "Civil & Recovery" },
            { icon: "🚨", label: "Criminal & Bail" },
          ].map((item) => (
            <div
              key={item.label}
              className="border rounded-lg p-4 flex items-center gap-3"
            >
              <span className="text-2xl" aria-hidden>
                {item.icon}
              </span>
              <span className="text-sm text-foreground">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Languages supported */}
      <section className="pt-8">
        <h3 className="text-xl font-semibold mb-3">Consult in your language</h3>
        <div className="flex flex-wrap gap-2">
          {[
            "Hindi",
            "English",
            "Marathi",
            "Tamil",
            "Telugu",
            "Kannada",
            "Malayalam",
            "Bengali",
          ].map((lang) => (
            <span
              key={lang}
              className="text-sm px-3 py-1 rounded-full border bg-card"
            >
              {lang}
            </span>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="pt-8">
        <h3 className="text-xl font-semibold mb-3">How it works</h3>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            {
              icon: "🧭",
              title: "Raise a request",
              text: "Raise a request for consultation with a lawyer",
            },
            {
              icon: "💳",
              title: "Pay securely",
              text: "Confirm a slot with secure payment",
            },
            {
              icon: "📞",
              title: "Talk to lawyer",
              text: "Consult with a lawyer regarding your issue",
            },
            {
              icon: "✅",
              title: "Get next steps",
              text: "Action plan and document checklist",
            },
          ].map((step) => (
            <div key={step.title} className="border rounded-lg p-4">
              <div className="text-2xl" aria-hidden>
                {step.icon}
              </div>
              <div className="font-medium mt-2">{step.title}</div>
              <div className="text-sm text-muted-foreground">{step.text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust metrics */}
      <section className="pt-8">
        <div className="grid sm:grid-cols-3 gap-4 text-center">
          <div className="border rounded-lg p-4">
            <div className="text-2xl font-bold">24/7</div>
            <div className="text-sm text-muted-foreground">
              Consultation availability
            </div>
          </div>
          <div className="border rounded-lg p-4">
            <div className="text-2xl font-bold">730K+</div>
            <div className="text-sm text-muted-foreground">
              Calls handled across India
            </div>
          </div>
          <div className="border rounded-lg p-4">
            <div className="text-2xl font-bold">4.8/5</div>
            <div className="text-sm text-muted-foreground">
              Average lawyer rating
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="pt-10 text-center">
        <button
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-md"
          onClick={() => openForm("consultation")}
        >
          Consult now
        </button>
        <div className="text-xs text-muted-foreground mt-2">
          Confidential and secure
        </div>
      </section>

      {/* Benefits */}
      <section className="pt-8">
        <h3 className="text-xl font-semibold mb-3">
          Benefits of online consultation
        </h3>
        <div className="grid md:grid-cols-3 gap-4 text-muted-foreground">
          <div className="border rounded-lg p-4">
            Save time and travel — get advice from anywhere
          </div>
          <div className="border rounded-lg p-4">
            Transparent pricing, no hidden charges
          </div>
          <div className="border rounded-lg p-4">
            Pick subject-matter experts for your issue
          </div>
        </div>
      </section>
    </div>
  );
}

export default ConsultationCityLanding;
