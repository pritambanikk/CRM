"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  XCircle,
  Clock,
  Search,
  PhoneCall,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import { LeadFormData } from "@/types/lead-form";
import { getPaymentConfig, formatAmount } from "@/lib/payment-config";
import { useAnalytics } from "@/hooks/use-analytics";
import { useEffect } from "react";
import { useFormContext } from "@/contexts/form-context";

interface WhatsNextStepProps {
  formData: Partial<LeadFormData>;
  leadId?: string;
  submissionSuccess?: boolean;
}

export const WhatsNextStep = ({ formData, leadId }: WhatsNextStepProps) => {
  const { logEvent } = useAnalytics();
  const { paymentStatus } = useFormContext();

  useEffect(() => {
    if (formData && (formData.submissionSuccess || formData.paymentSuccess)) {
      logEvent("lead_form_success", {
        lead_id: leadId,
        payment_success: !!formData.paymentSuccess,
        payment_status: paymentStatus,
      });
    }
  }, [formData, leadId, logEvent, paymentStatus]);

  const getPaymentAmount = () => {
    const config = getPaymentConfig(formData.service || "consultation");
    return config ? formatAmount(config.amount) : "₹400";
  };

  /* ─────────── SUCCESS ─────────── */
  if (paymentStatus === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center w-full max-w-sm mx-auto py-2 px-1"
      >
        {/* Animated check */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center mb-3"
        >
          <CheckCircle2 className="w-7 h-7 sm:w-9 sm:h-9 text-green-500" />
        </motion.div>

        {/* Title */}
        <h2 className="text-lg sm:text-xl font-bold text-foreground mb-1">
          Payment Successful!
        </h2>
        <p className="text-sm text-muted-foreground mb-0.5">
          Thank you, <span className="font-semibold text-foreground">{formData.name}</span>
        </p>
        <p className="text-xs text-muted-foreground mb-3">
          {getPaymentAmount()} paid · Ref: {formData.customId || leadId}
        </p>

        {/* What happens now timeline */}
        <div className="w-full bg-secondary/30 rounded-xl p-3 sm:p-4 mb-3">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
            What happens now
          </h3>

          <div className="space-y-3">

            {/* Step 1 — same for all services */}
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-full bg-green-500 flex items-center justify-center shrink-0 mt-0.5">
                <Search className="w-3 h-3 text-white" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-foreground">
                  Finding the best lawyer for you
                </p>
                <p className="text-xs text-muted-foreground">
                  We&apos;re matching your case with a verified legal expert.
                </p>
              </div>
            </div>

            {/* Step 2 — same for all services */}
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-full bg-muted border-2 border-border flex items-center justify-center shrink-0 mt-0.5">
                <PhoneCall className="w-3 h-3 text-muted-foreground" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-foreground">
                  Lawyer connects with you
                </p>
                <p className="text-xs text-muted-foreground">
                  You&apos;ll receive a call to discuss your case in detail
                </p>
              </div>
            </div>

            {/* Step 3 — service-specific */}
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-full bg-muted border-2 border-border flex items-center justify-center shrink-0 mt-0.5">
                <ShieldCheck className="w-3 h-3 text-muted-foreground" />
              </div>
              <div className="min-w-0">
                {formData.service === "legal-notice" ? (
                  <>
                    <p className="text-sm font-semibold text-foreground">
                      Notice drafted &amp; sent
                    </p>
                    <p className="text-xs text-muted-foreground">
                      After your approval, the notice is dispatched via Speed Post
                    </p>
                  </>
                ) : formData.service === "consultation" ? (
                  <>
                    <p className="text-sm font-semibold text-foreground">
                      Expert advice &amp; next steps
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Your advocate will guide you on the best course of action for your case
                    </p>
                  </>
                ) : formData.service === "document-drafting" ? (
                  <>
                    <p className="text-sm font-semibold text-foreground">
                      Document drafted &amp; delivered
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Your document is prepared, reviewed with you, and shared for use
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-sm font-semibold text-foreground">
                      Your matter is resolved
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Our legal team will guide you through every step until completion
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ETA badge */}
        <div className="w-full flex items-center gap-3 bg-primary/5 border border-primary/20 rounded-xl px-3 py-2.5 mb-3">
          <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0" />
          <div>
            <p className="text-sm font-semibold text-foreground">
              We&apos;ll get back within 2 hours
            </p>
            <p className="text-xs text-muted-foreground">
              Allow us time to find and connect the best lawyer for your case
            </p>
          </div>
        </div>

        {/* Live chat nudge */}
        <div className="w-full flex items-center gap-3 bg-secondary/40 rounded-xl px-3 py-2.5 mb-2">
          <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground shrink-0" />
          <p className="text-xs text-muted-foreground">
            Need help? Initiate a{" "}
            <span className="font-semibold text-foreground">live chat</span>{" "}
            anytime from our website — we&apos;re here for you
          </p>
        </div>
      </motion.div>
    );
  }

  /* ─────────── FAILED ─────────── */
  if (paymentStatus === "failed") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center w-full max-w-sm mx-auto py-2"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          className="w-16 h-16 rounded-full bg-red-50 border-2 border-red-200 flex items-center justify-center mb-4"
        >
          <XCircle className="w-9 h-9 text-red-500" />
        </motion.div>

        <h2 className="text-xl font-bold text-foreground mb-1">
          Payment Failed
        </h2>
        <p className="text-sm text-muted-foreground mb-1">
          Don&apos;t worry, <span className="font-semibold text-foreground">{formData.name}</span>!
        </p>
        <p className="text-xs text-muted-foreground mb-5">
          Ref: {formData.customId || leadId}
        </p>

        <div className="w-full bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-4">
          <p className="text-sm font-semibold text-yellow-800 mb-2">
            Your request has been saved
          </p>
          <p className="text-xs text-yellow-700">
            Payment wasn&apos;t completed, but your case details are safe with us.
            Complete the payment to get priority lawyer assignment within 2 hours.
          </p>
        </div>

        <div className="w-full flex items-center gap-3 bg-secondary/40 rounded-xl px-4 py-3">
          <MessageCircle className="w-5 h-5 text-muted-foreground shrink-0" />
          <p className="text-xs text-muted-foreground">
            Need help? Initiate a{" "}
            <span className="font-semibold text-foreground">live chat</span>{" "}
            anytime from our website
          </p>
        </div>
      </motion.div>
    );
  }

  /* ─────────── PENDING ─────────── */
  if (paymentStatus === "pending") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center w-full max-w-sm mx-auto py-2"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 rounded-full bg-blue-50 border-2 border-blue-200 flex items-center justify-center mb-4"
        >
          <Clock className="w-9 h-9 text-blue-500" />
        </motion.div>

        <h2 className="text-xl font-bold text-foreground mb-1">
          Processing Payment…
        </h2>
        <p className="text-sm text-muted-foreground mb-5">
          Please wait, <span className="font-semibold text-foreground">{formData.name}</span>. Don&apos;t close this window.
        </p>

        <div className="w-full bg-blue-50 border border-blue-200 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <p className="text-sm font-semibold text-blue-800">Verifying payment…</p>
          </div>
          <p className="text-xs text-blue-700">
            Processing {getPaymentAmount()} · This usually takes a few seconds
          </p>
        </div>
      </motion.div>
    );
  }

  /* ─────────── DEFAULT (no payment attempted) ─────────── */
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center w-full max-w-sm mx-auto py-2"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
        className="w-16 h-16 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center mb-4"
      >
        <CheckCircle2 className="w-9 h-9 text-green-500" />
      </motion.div>

      <h2 className="text-xl font-bold text-foreground mb-1">
        Request Received!
      </h2>
      <p className="text-sm text-muted-foreground mb-5">
        Thank you, <span className="font-semibold text-foreground">{formData.name}</span>, for choosing VakilTech
      </p>

      <div className="w-full bg-secondary/30 rounded-xl p-4 mb-4">
        <p className="text-sm text-foreground">
          Your request has been submitted. Pay the advance of{" "}
          <span className="font-semibold text-primary">{getPaymentAmount()}</span>{" "}
          for priority lawyer assignment within 2 hours.
        </p>
      </div>

      <div className="w-full flex items-center gap-3 bg-secondary/40 rounded-xl px-4 py-3">
        <MessageCircle className="w-5 h-5 text-muted-foreground shrink-0" />
        <p className="text-xs text-muted-foreground">
          Need help? Initiate a{" "}
          <span className="font-semibold text-foreground">live chat</span>{" "}
          anytime from our website
        </p>
      </div>
    </motion.div>
  );
};
