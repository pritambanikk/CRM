"use client";

import { useFormContext } from "@/contexts/form-context";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, CheckCircle2 } from "lucide-react";

export function CustomDraftingCTA() {
  const { openForm } = useFormContext();

  const handleOpenForm = () => {
    openForm("document-drafting");
  };

  return (
    <section className="bg-gradient-to-br from-primary/8 via-background to-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12 overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start">
          {/* Left side - Content */}
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/15 text-primary px-4 py-2 rounded-full text-sm font-semibold">
              <Zap className="h-4 w-4" />
              Need a Custom Solution?
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                Rather want a custom document tailored to your exact needs?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our expert lawyers will understand your unique situation, review any existing agreements, and draft a legally robust document that protects your interests and covers scenarios templates can't.
              </p>
            </div>

            {/* Key benefits */}
            <ul className="space-y-3 mt-6">
              <li className="flex gap-3 items-start">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-foreground">
                  <strong>Lawyer-drafted from scratch</strong> — no generic templates, fully customized to your situation
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-foreground">
                  <strong>Direct access to an expert</strong> — your personal lawyer reviews and refines until you're satisfied
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-foreground">
                  <strong>Covers edge cases</strong> — clauses and protections specific to your deal, state, and industry
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-foreground">
                  <strong>Total peace of mind</strong> — assigned within 3 hours, revision rounds included
                </span>
              </li>
            </ul>
          </div>

          {/* Right side - CTA Card */}
          <div className="w-full md:w-auto flex-shrink-0">
            <div className="bg-card border-2 border-primary/30 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="space-y-6 text-center">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-2">
                    Starting from
                  </p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-foreground">₹2,990</span>
                    <span className="text-sm text-muted-foreground">/document</span>
                  </div>
                </div>

                <div className="border-t border-border pt-4">
                  <p className="text-sm text-muted-foreground mb-4">
                    Tell us your requirements and we'll get started right away
                  </p>
                  <Button
                    onClick={handleOpenForm}
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base py-6 shadow-lg"
                  >
                    Get a Custom Document
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>

                <div className="text-xs text-muted-foreground space-y-1 pt-2 border-t border-border/50">
                  <p>✓ Free consultation to understand your needs</p>
                  <p>✓ Assigned lawyer within 3 hours</p>
                  <p>✓ Unlimited revision rounds</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
