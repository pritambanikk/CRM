"use client";

import { useState } from "react";
import { X, Scale, PhoneCall, CheckCircle2, ArrowRight } from "lucide-react";
import { useFormContext } from "@/contexts/form-context";

const NOTICE_TEXT = `DEMAND NOTICE TEMPLATE

THROUGH SPEED POST
Date: _______________

To,
[Recipient Full Name]
[Recipient Designation]
[Recipient Company Name]
[Recipient Full Address]

Subject: Demand Notice for Recovery of Outstanding Service Dues of ₹[Amount]/- and Compensation for Breach of Commercial Obligations

Sir / Madam,

I represent [Client Name], [Designation] of [Company Name], having its registered office at [Registered Office Address] (hereinafter referred to as "My Client"), under whose specific instructions I hereby issue this Demand Notice ("Notice") to you as follows:

1. That in or around the month of [Month, Year], you, acting in your capacity as [Designation] of [Recipient Company Name], engaged My Client to execute an affiliate-based acquisition campaign for [Nature of Services / Project Details]. As per your explicit commitment, My Client was required to generate [Nature of Deliverables] through authorised agents and provide the said leads/services to you for processing and verification. You had expressly assured My Client that payouts for each successful [Service / Deliverable] would be made on a [weekly/monthly] basis, without delay.

2. That My Client fulfilled his obligations fully, diligently, and in good faith for the entire duration of the campaign from [Start Month, Year] to [End Month, Year], and delivered substantial successful conversions/services through his network, all of which were accepted and utilised by you and your company for commercial benefit.

3. However, despite multiple assurances from your end, you have failed and neglected to release the payments owed for the aforesaid services. My Client states that the total dues owed by you to My Client amount to ₹[Outstanding Amount]/- (Rupees [Amount in Words] Only). The said amount has remained outstanding since [Month, Year], despite persistent reminders, reconciliations, and repeated follow-up communications from My Client.

4. My Client further states that you have, on several occasions, attempted to justify the non-payment by citing reasons such as [Reasons Cited by Recipient]. My Client contends that these reasons are wholly unjustified, unreasonable, and irrelevant to your liability to release the legitimate dues owed to My Client. My Client further confirms that even after subsequent assurances provided by you on [Relevant Period / Date], no payment whatsoever was made by you.

5. That your repeated failure to honour your own commercial commitments, despite benefitting from the services already rendered, constitutes a clear and deliberate breach of contract, wrongful withholding of money, and unjust enrichment, making you liable under the provisions of the Indian Contract Act, 1872, and other applicable laws relating to commercial dishonesty and unfair business practices.

6. My Client states that he has demonstrated more than adequate patience over the past several months. However, your continued failure to clear the dues, despite repeated reminders, has caused substantial financial loss, disruption to My Client's operations, reputational harm with associated agents/business partners, and considerable mental distress. Your conduct has left My Client with no option but to proceed with formal legal action for recovery of dues.

7. That under these circumstances, a sum of ₹[Outstanding Amount]/- (Rupees [Amount in Words] Only) remains legally recoverable from you. My Client is also entitled to compensation for financial loss, inconvenience, and breach of trust.

Under the above-mentioned circumstances, my client hereby calls upon you:

• To immediately pay the outstanding sum of ₹[Outstanding Amount]/- (Rupees [Amount in Words] Only).

You are required to comply with this final demand within fifteen (15) days from the date of receipt of this Notice, failing which My Client shall be constrained to initiate appropriate civil and/or criminal proceedings against you before the competent courts for recovery of the outstanding amount, litigation costs, and damages for mental agony, entirely at your sole risk, cost, and consequences.

This Notice is issued in good faith and without prejudice to all other legal rights and remedies available to My Client under applicable civil and criminal law.

Sincerely,
[Advocate Name]
[Designation / Court Details]
[Enrollment Number]
[Membership Details]`;

type ModalStep = "intent" | "consult";

export default function NoticeIntentModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<ModalStep>("intent");
  const { openForm } = useFormContext();

  const handleOpen = () => {
    setStep("intent");
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleYes = () => {
    setIsOpen(false);
    openForm("legal-notice");
  };

  const handleNo = () => {
    setStep("consult");
  };

  const handleBookConsult = () => {
    setIsOpen(false);
    openForm("consultation");
  };

  return (
    <>
      {/* ── Clickable Notice Block ── */}
      <div
        onClick={handleOpen}
        className="group relative cursor-pointer select-none"
        role="button"
        aria-label="Click to send this legal notice via a licensed advocate"
      >
        {/* Hover action banner */}
        <div className="flex items-center justify-between gap-2 px-4 py-2.5 bg-primary text-primary-foreground text-xs font-semibold rounded-t-lg">
          <span className="flex items-center gap-1.5">
            <Scale className="w-3.5 h-3.5 shrink-0" />
            Demand Notice — Sample Format
          </span>
          <span className="flex items-center gap-1 opacity-90 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Send via advocate
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </div>

        {/* Notice content */}
        <div className="bg-muted border border-t-0 p-6 rounded-b-lg mb-0 text-sm font-mono whitespace-pre-wrap text-foreground transition-all duration-200 group-hover:shadow-md group-hover:brightness-[0.97]">
          {NOTICE_TEXT}
        </div>

        {/* Bottom overlay hint */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-muted to-transparent rounded-b-lg flex items-end justify-center pb-3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
            Click to send this notice through a licensed advocate →
          </span>
        </div>
      </div>

      {/* ── Modal Overlay ── */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={(e) => e.target === e.currentTarget && handleClose()}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={handleClose} />

          {/* Modal Panel */}
          <div className="relative bg-background rounded-2xl shadow-2xl w-full max-w-md border border-border overflow-y-auto max-h-[90vh] animate-in fade-in zoom-in-95 duration-200">

            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors z-10"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>

            {/* ── Step: Intent (YES / NO) ── */}
            {step === "intent" && (
              <div className="p-6">
                {/* Icon */}
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Scale className="w-6 h-6 text-primary" />
                </div>

                <h2 className="text-xl font-bold text-foreground mb-2 leading-snug">
                  Want this notice sent by a real advocate?
                </h2>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                  This template shows you what a notice looks like. But for legal
                  weight in court, it must carry an advocate&apos;s signature,
                  Bar Council number, and official letterhead.
                </p>

                {/* Trust signals */}
                <ul className="space-y-2 mb-6">
                  {[
                    "Drafted & signed by a licensed advocate",
                    "Sent via Speed Post with Acknowledgment Due",
                    "Ready within 24 hours — ₹1,499 all-inclusive",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {point}
                    </li>
                  ))}
                </ul>

                {/* CTA Buttons */}
                <div className="flex flex-col gap-3">
                  <button
                    onClick={handleYes}
                    className="w-full py-3.5 bg-primary text-primary-foreground rounded-xl font-semibold text-sm hover:bg-primary/90 transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
                  >
                    Yes, send via advocate — ₹1,499
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNo}
                    className="w-full py-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    No, I&apos;ll handle it myself →
                  </button>
                </div>
              </div>
            )}

            {/* ── Step: Consultation offer (if NO) ── */}
            {step === "consult" && (
              <div className="p-6">
                {/* Icon */}
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <PhoneCall className="w-6 h-6 text-primary" />
                </div>

                <h2 className="text-xl font-bold text-foreground mb-2 leading-snug">
                  Talk to an advocate first
                </h2>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                  Not sure if a legal notice is the right move? Get a 30-minute
                  consultation with a licensed advocate who specialises in money
                  recovery — understand your options before committing.
                </p>

                {/* Offer highlight */}
                <div className="bg-primary/5 dark:bg-primary/10 border border-primary/20 dark:border-primary/30 rounded-xl p-4 mb-5">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-2xl font-bold text-foreground">₹299</span>
                    <span className="text-sm text-muted-foreground line-through">₹999</span>
                    <span className="text-xs font-semibold text-primary bg-primary/10 dark:bg-primary/20 px-2 py-0.5 rounded-full">
                      Limited offer
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    30-min video / phone consultation · Book now, speak today
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col gap-3">
                  <button
                    onClick={handleBookConsult}
                    className="w-full py-3.5 bg-primary text-primary-foreground rounded-xl font-semibold text-sm hover:bg-primary/90 transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
                  >
                    Book Consultation — ₹299
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleClose}
                    className="w-full py-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Maybe later
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
