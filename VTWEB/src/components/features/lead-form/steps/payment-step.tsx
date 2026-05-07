"use client";

import React from "react";
import { motion } from "framer-motion";
import { formElementVariants, staggerContainer } from "@/lib/animations";
import { LeadFormData } from "@/types/lead-form";
import {
  Shield,
  CheckCircle,
  Star,
} from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { useFormContext } from "@/contexts/form-context";

interface PaymentStepProps {
  formData: Partial<LeadFormData>;
}

export const PaymentStep = ({ formData }: PaymentStepProps) => {
  const { submissionError, paymentError } = useFormContext();

  // Dynamic data for live feel
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "Recovered ₹2 lakh stuck for 3 years. Finally got justice!",
      author: "Priya S.",
    },
    {
      text: "Got my security deposit back after landlord refused.",
      author: "Rahul M.",
    },
    {
      text: "Property dispute resolved in weeks. Saved my family home!",
      author: "Anita K.",
    },
    {
      text: "Got my security deposit back after landlord refused.",
      author: "Vikram P.",
    },
    {
      text: "Fired without pay. VakilTech helped me receive my FnF!",
      author: "Meera R.",
    },
  ];

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => {
      clearInterval(testimonialInterval);
    };
  }, []);

  const service = formData.service || "";

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="flex flex-col h-full w-full"
    >
      <div className="flex-1 overflow-y-auto space-y-5 w-full">

        {/* ─── Price Hero ─── */}
        <motion.div variants={formElementVariants} className="text-center">
          <div className="flex justify-center mb-1">
            <Image
              src="/pay_now.svg"
              alt="Secure Payment"
              width={60}
              height={44}
              style={{ height: "auto" }}
              className="object-contain"
            />
          </div>
          <h2 className="text-lg font-bold text-foreground mb-0.5">
            {service === "consultation"
              ? "Book Your Consultation"
              : "Legal Notice Service"}
          </h2>

          {service === "consultation" ? (
            /* ── Consultation: simple one-time price ── */
            <div className="flex items-baseline justify-center gap-1.5">
              <span className="text-3xl font-extrabold text-green-600">₹299</span>
              <span className="text-sm text-muted-foreground">one-time</span>
            </div>
          ) : (
            /* ── Legal Notice: total price + savings ── */
            <>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-3xl font-extrabold text-foreground">₹1,499</span>
                <span className="text-sm line-through text-muted-foreground">₹3,999</span>
                <span className="text-xs font-semibold text-green-600 bg-green-50 px-1.5 py-0.5 rounded">
                  63% OFF
                </span>
              </div>
              <p className="text-xs text-muted-foreground mt-0.5">
                All-inclusive · No hidden charges
              </p>
            </>
          )}
        </motion.div>

        {/* ─── Payment Timeline (legal-notice only) ─── */}
        {service !== "consultation" && (
          <motion.div
            variants={formElementVariants}
            className="bg-secondary/30 rounded-xl p-4"
          >
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
              How payment works
            </h3>

            <div className="relative pl-5">
              {/* vertical connector line */}
              <div className="absolute left-[9px] top-3 bottom-3 w-px bg-border" />

              {/* Step 1 — now */}
              <div className="relative mb-4">
                <div className="absolute -left-5 top-0.5 w-[18px] h-[18px] rounded-full bg-primary flex items-center justify-center">
                  <span className="text-[10px] font-bold text-primary-foreground">1</span>
                </div>
                <div className="bg-card border border-primary/30 rounded-lg p-3 shadow-sm">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-semibold text-foreground">
                      Pay ₹499 Advance
                    </span>
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                      Pay Now
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    We assign a lawyer &amp; begin your case immediately
                  </p>
                </div>
              </div>

              {/* Step 2 — lawyer drafts */}
              <div className="relative mb-4">
                <div className="absolute -left-5 top-0.5 w-[18px] h-[18px] rounded-full bg-muted border-2 border-border flex items-center justify-center">
                  <span className="text-[10px] font-bold text-muted-foreground">2</span>
                </div>
                <div className="rounded-lg p-3">
                  <span className="text-sm font-semibold text-foreground">
                    1:1 Call &amp; Notice Drafted
                  </span>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Lawyer discusses your case, drafts the legal notice, and you review &amp; approve it
                  </p>
                </div>
              </div>

              {/* Step 3 — balance */}
              <div className="relative">
                <div className="absolute -left-5 top-0.5 w-[18px] h-[18px] rounded-full bg-muted border-2 border-border flex items-center justify-center">
                  <span className="text-[10px] font-bold text-muted-foreground">3</span>
                </div>
                <div className="rounded-lg p-3">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-sm font-semibold text-foreground">
                      Pay ₹1,000 Balance
                    </span>
                    <span className="text-xs text-muted-foreground">
                      After approval
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Notice is sent via Speed Post with tracking &amp; acknowledgement
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* ─── What's Included ─── */}
        <motion.div variants={formElementVariants}>
          <div className="grid grid-cols-2 gap-x-3 gap-y-2">
            {(service === "consultation"
              ? [
                  "Expert lawyer matched",
                  "Call within 30 mins",
                  "Case-specific advice",
                  "Follow-up support",
                ]
              : [
                  "Licensed Advocate",
                  "Unlimited Revisions",
                  "Sent via Speed Post",
                  "Money-Back Guarantee",
                ]
            ).map((item) => (
              <div key={item} className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-green-500 shrink-0" />
                <span className="text-xs text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ─── Payment Methods ─── */}
        <motion.div
          variants={formElementVariants}
          className="flex items-center justify-center gap-2 py-2 rounded-lg bg-secondary/30"
        >
          <span className="text-[10px] font-semibold uppercase text-muted-foreground tracking-wide">
            Secured by Cashfree
          </span>
          <Image src="/icons/gpay.png" alt="Google Pay" width={18} height={18} className="object-contain" />
          <Image src="/icons/phone-pe.png" alt="PhonePe" width={18} height={18} className="object-contain" />
          <div className="flex items-center gap-1 ml-1">
            <Shield className="w-3 h-3 text-green-600" />
            <span className="text-[10px] text-muted-foreground font-medium">100% Secure</span>
          </div>
        </motion.div>

        {/* ─── Social Proof ─── */}
        <motion.div variants={formElementVariants}>
          <div className="bg-secondary/20 rounded-lg p-3 text-center">
            <div className="flex items-center justify-center gap-1.5 mb-1.5">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="text-xs font-semibold text-foreground">
                4.9/5 from 18,000+ clients
              </span>
            </div>
            <AnimatePresence mode="wait">
              <motion.p
                key={currentTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="text-xs text-muted-foreground italic"
              >
                &quot;{testimonials[currentTestimonial].text}&quot;{" "}
                — <span className="font-semibold">{testimonials[currentTestimonial].author}</span>
              </motion.p>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* ─── Error Messages ─── */}
        {(submissionError || paymentError) && (
          <motion.div variants={formElementVariants}>
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-center">
              <p className="text-sm text-red-600">
                {submissionError || paymentError}
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};
