"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExpertCarousel } from "@/components/ui/expert-carousel";
import { useFormContext } from "@/contexts/form-context";
import { SimpleProcess } from "../homepage/simple-process";
import { legalExperts } from "@/data/experts";
import Image from "next/image";
import { LegalNoticePayCard } from "./legal-notice-pay-card";
import { ProvenProcess } from "../legal-notice/proven-process";
import { TimelineOutcomes } from "../legal-notice/timeline-outcomes";
import { LegalSuccessPredictor } from "../legal-notice/legal-success-predictor";

export function LegalNoticeLanding({
  topicTitle,
  city,
}: { topicTitle?: string; city?: string } = {}) {
  const { openForm } = useFormContext();

  const handleCallbackRequest = () => {
    openForm("legal-notice");
  };

  const services = [
    {
      title: "Matrimonial Disputes",
      description:
        "Professional legal support for matrimonial and family law matters",
      image: "/legal-notice/matrimonial-disputes.png",
      features: ["Privacy Guaranteed", "Pick a male or Female lawyer"],
    },
    {
      title: "Money Recovery",
      description:
        "Effective legal solutions for recovering outstanding payments and debts",
      image: "/legal-notice/marketing-software-feature-1.webp",
      features: ["Threaten Legal Action", "Follow up on unpaid bills"],
    },
    {
      title: "Consumer Disputes",
      description:
        "Expert legal assistance for consumer rights and dispute resolution",
      image: "/legal-notice/hero.png",
      features: ["Seek Refund", "Seek Compensation"],
    },
  ];

  const processSteps = [
    {
      icon: "₹",
      title: "Raise a Request",
      description: "fill the form and get a lawyer assigned within 3 hrs",
      svgPath: "/4-step-process/pay_advance.svg",
    },
    {
      icon: "📝",
      title: "Get Expert Service",
      description:
        "Sit back and relax while our legal team does the heavy lifting",
      svgPath: "/4-step-process/draft.svg",
    },
    {
      icon: "✅",
      title: "Approve & Send",
      description:
        "Review, approve and get signed notice posted with acknowledgment",
      svgPath: "/4-step-process/approve_send.svg",
    },
  ];

  return (
    <div className="container mx-auto px-6 md:px-8 py-2 md:py-8">
      {/* Hero Section */}
      <section className="relative text-center py-10 md:py-16">
        <div className="max-w-lg mx-auto px-4">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 border border-primary/40 rounded-full px-4 py-1.5 mb-6 bg-background shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse shrink-0" />
            <span className="text-sm font-medium text-foreground">
              Connect With Local Advocates 🇮🇳
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-foreground leading-tight">
            {topicTitle ? (
              <>
                India&apos;s Fastest{" "}
                <span className="text-primary">{topicTitle}</span> Service
                {city ? (
                  <>
                    {" "}
                    in <span className="text-primary">{city}</span>
                  </>
                ) : null}
              </>
            ) : (
              <>
                Get Expert Drafted{" "}
                <span className="text-primary">Legal Notices</span>
              </>
            )}
          </h1>

          {/* Sub-headline */}
          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-sm mx-auto">
            Describe your issue and connect with a verified lawyer within 30 minutes.
          </p>

          {/* Widget Card */}
          <div className="bg-card border border-border rounded-2xl shadow-md p-5 text-left space-y-4">
            {/* Category chips label */}
            <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
              I need help with
            </p>

            {/* Category chips */}
            <div
              className="flex gap-2 overflow-x-auto pb-1"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {[
                "Divorce",
                "General",
                "Money Recovery",
                "Cheque Bounce",
                "Defamation",
                "Employment Issue",
                "Reply Notice",
                "Others",
              ].map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={handleCallbackRequest}
                  className="px-4 py-1.5 rounded-full border border-border text-sm font-medium text-foreground bg-background hover:border-primary hover:text-primary transition-colors duration-200 cursor-pointer whitespace-nowrap shrink-0"
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Pin Code Input (decorative — clicking or submitting opens the form) */}
            <div
              className="flex items-center gap-3 border border-border rounded-xl px-4 py-3 bg-secondary/40 cursor-text"
              onClick={handleCallbackRequest}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-muted-foreground shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 2C8.686 2 6 4.686 6 8c0 4.5 6 12 6 12s6-7.5 6-12c0-3.314-2.686-6-6-6zm0 8.5A2.5 2.5 0 1112 5.5a2.5 2.5 0 010 5z"
                />
              </svg>
              <input
                type="text"
                inputMode="numeric"
                maxLength={6}
                placeholder="Enter your Pin Code"
                onClick={(e) => {
                  e.stopPropagation();
                  handleCallbackRequest();
                }}
                readOnly
                className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none cursor-pointer"
              />
            </div>

            {/* CTA Button */}
            <Button
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-base font-semibold py-6 rounded-xl"
              onClick={handleCallbackRequest}
            >
              Find a Lawyer Near You →
            </Button>

            {/* Trust line */}
            <p className="text-center text-xs text-muted-foreground">
              🔒 Pay only Rs. 499 as advance for legal notice · No spam · 100% confidential
            </p>
          </div>
        </div>
      </section>

      {/* Legal Success Rate Predictor */}
      <section className="py-4">
        <LegalSuccessPredictor />
      </section>

      {/* Expert Carousel Section */}
      <ExpertCarousel
        experts={legalExperts}
        title="Consult top experts across legal areas"
        subtitle="Connect with experienced legal professionals who can help you with your specific legal needs"
      />

      {/* Pay Card Section */}
      <LegalNoticePayCard />

      {/* Our Proven Process */}
      <ProvenProcess />

      {/* Timeline & Expected Outcomes */}
      <TimelineOutcomes />

      {/* 3-Step Process — redesigned */}
      <section id="legal-process" className="py-16">
        <div className="rounded-2xl border border-primary/20 bg-accent/30 px-6 py-10 md:px-12 md:py-14">
          {/* Header */}
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
              How it works
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Simple 3-Step Process
            </h2>
            <p className="text-sm text-muted-foreground mt-2 max-w-md mx-auto">
              Sit back and relax while we handle your legal notice from start to finish
            </p>
          </div>

          {/* Steps */}
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 max-w-3xl mx-auto">
            {/* Connector line — desktop only */}
            <div className="hidden md:block absolute top-9 left-[calc(16.7%+1rem)] right-[calc(16.7%+1rem)] border-t-2 border-dashed border-primary/30 z-0" />

            {[
              {
                number: "01",
                title: "Raise a Request",
                description: "Fill the form and get a lawyer assigned within 3 hrs",
                icon: (
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                  </svg>
                ),
              },
              {
                number: "02",
                title: "Get Expert Service",
                description: "Our legal team drafts a bullet-proof notice tailored to your case",
                icon: (
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                ),
              },
              {
                number: "03",
                title: "Approve & Send",
                description: "Review, approve and get signed notice posted with acknowledgment",
                icon: (
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
            ].map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center gap-3">
                {/* Icon circle */}
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-background border-2 border-primary/30 flex items-center justify-center shadow-sm">
                    {step.icon}
                  </div>
                  {/* Step badge */}
                  <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-primary text-primary-foreground text-[10px] font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground max-w-[180px]">{step.description}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-10">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-base font-semibold"
              onClick={handleCallbackRequest}
            >
              Raise a Request →
            </Button>
          </div>
        </div>
      </section>
      {/* Most in Need Section */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Most in need
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Thousands of Indians face on a regular basis
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-all duration-300"
            >
              <CardHeader>
                <div className="w-32 h-32 mx-auto mb-4 relative">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <CardTitle className="text-xl mb-4">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center justify-center"
                    >
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <br />
      {/* Transparent Pricing Section */}
      <section className="py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Simple, Transparent Pricing
          </h2>
          <p className="text-muted-foreground text-base">
            No hidden charges, pay only for what you need
          </p>
        </div>

        <div className="max-w-sm mx-auto">
          <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-md">
            {/* Card Header */}
            <div className="px-6 pt-6 pb-4">
              <div className="flex items-center justify-between mb-3">
                <span className="bg-amber-400 text-amber-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Best Value Pack
                </span>
                <span className="text-muted-foreground line-through text-sm">
                  ₹3,999
                </span>
              </div>
              <div className="flex items-baseline gap-1 mb-5">
                <span className="text-4xl font-extrabold text-foreground">
                  ₹1,499
                </span>
                <span className="text-muted-foreground text-sm">/ notice</span>
              </div>

              {/* Feature list */}
              <ul className="space-y-2.5">
                {[
                  "Drafted by Licensed Advocate",
                  "Sent via Speed Post",
                  "Unlimited Revisions",
                  "24/7 Support",
                  "Legal Consultation",
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5 text-sm text-foreground">
                    <svg
                      className="w-4 h-4 text-green-500 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Advance breakdown sub-card */}
            <div className="mx-4 mb-4 bg-secondary/50 rounded-xl px-4 py-3">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-sm font-semibold text-foreground">
                  Get Started With
                </span>
                <span className="text-primary font-bold">₹499</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <svg className="w-3.5 h-3.5 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                Pay ₹1,000 after notice is drafted and approved
              </div>
            </div>

            {/* CTA */}
            <div className="px-4 pb-4">
              <Button
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-5 rounded-xl"
                onClick={handleCallbackRequest}
              >
                Get Started →
              </Button>
            </div>

            {/* Total payable footer */}
            <div className="border-t border-border px-6 py-3 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                Total Payable
              </span>
              <span className="text-sm font-bold text-foreground">₹1,499</span>
            </div>
          </div>
        </div>
      </section>

      <br />
      {/* Pricing & Value Proposition */}
      <section className="py-16 bg-card border rounded-lg">
        <div className="text-center max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
            Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
              <span className="text-muted-foreground">
                Expert legal professionals
              </span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
              <span className="text-muted-foreground">
                Indian Lawyers 🇮🇳
              </span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
              <span className="text-muted-foreground">
                Fast turnaround time
              </span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
              <span className="text-muted-foreground">
                Customized to your case
              </span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
              <span className="text-muted-foreground">Ongoing support</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
              <span className="text-muted-foreground">No hidden charges</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
