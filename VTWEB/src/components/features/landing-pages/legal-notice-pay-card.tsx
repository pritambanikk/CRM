"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Shield,
  Clock,
  FileText,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import { useFormContext } from "@/contexts/form-context";

const DELIVERABLES = [
  "Professional legal notice drafted by a licensed advocate",
  "Review of your facts and supporting documents",
  "1:1 consultation with an expert lawyer",
  "Dispatch via Speed Post with tracking",
  "Guidance on next legal steps if no response",
];

export function LegalNoticePayCard() {
  const [expanded, setExpanded] = useState(false);
  const { openForm } = useFormContext();

  const toggle = () => setExpanded((v) => !v);
  const visible = expanded ? DELIVERABLES : DELIVERABLES.slice(0, 3);

  return (
    <section className="py-10">
      <div className="max-w-md mx-auto">
        {/* Main card */}
        <div className="relative bg-card rounded-2xl border border-border shadow-lg overflow-hidden">
          {/* Top accent bar */}
          <div className="h-1.5 bg-gradient-to-r from-primary via-primary/80 to-amber-400" />

          <div className="p-6">
            {/* Header */}
            <div className="text-center mb-5">
              <div className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-3">
                <FileText className="w-3 h-3" />
                Legal Notice Service
              </div>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-4xl font-extrabold text-foreground">
                  ₹1,499
                </span>
                <span className="text-sm line-through text-muted-foreground">
                  ₹3,999
                </span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                All-inclusive · No hidden charges
              </p>
            </div>

            {/* Payment split card */}
            <div className="bg-secondary/40 rounded-xl p-4 mb-5">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-sm font-bold text-foreground">Pay Now</p>
                  <p className="text-xs text-muted-foreground">Advance to start</p>
                </div>
                <span className="text-2xl font-extrabold text-primary">₹499</span>
              </div>
              <div className="h-px bg-border mb-3" />
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-foreground">Pay Later</p>
                  <p className="text-xs text-muted-foreground">After notice is drafted &amp; approved</p>
                </div>
                <span className="text-lg font-bold text-foreground">₹1,000</span>
              </div>
            </div>

            {/* Deliverables */}
            <div className="mb-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                What&apos;s included
              </p>
              <ul className="space-y-2.5">
                {visible.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    <span className="text-sm text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              {DELIVERABLES.length > 3 && (
                <button
                  onClick={toggle}
                  className="flex items-center gap-1 text-xs font-medium text-primary mt-2.5 hover:underline cursor-pointer"
                >
                  {expanded ? (
                    <>
                      Show less <ChevronUp className="w-3 h-3" />
                    </>
                  ) : (
                    <>
                      +{DELIVERABLES.length - 3} more <ChevronDown className="w-3 h-3" />
                    </>
                  )}
                </button>
              )}
            </div>

            {/* Trust signals row */}
            <div className="flex items-center justify-center gap-4 mb-5 py-2.5 bg-secondary/30 rounded-lg">
              <div className="flex items-center gap-1">
                <Shield className="w-3.5 h-3.5 text-green-600" />
                <span className="text-[10px] font-medium text-muted-foreground">Money-Back</span>
              </div>
              <div className="w-px h-4 bg-border" />
              <div className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-primary" />
                <span className="text-[10px] font-medium text-muted-foreground">Fastest</span>
              </div>
              <div className="w-px h-4 bg-border" />
              <div className="flex items-center gap-1.5">
                <Image src="/icons/gpay.png" alt="GPay" width={14} height={14} className="object-contain" />
                <Image src="/icons/phone-pe.png" alt="PhonePe" width={14} height={14} className="object-contain" />
                <span className="text-[10px] font-medium text-muted-foreground">UPI</span>
              </div>
            </div>

            {/* CTA */}
            <Button
              className="w-full text-base py-6 rounded-xl font-semibold group"
              onClick={() => openForm("legal-notice")}
            >
              Get Started for ₹499
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            <p className="text-center text-[10px] text-muted-foreground mt-2.5">
              🔒 Secured by Cashfree · 100% Secure Payment
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LegalNoticePayCard;
