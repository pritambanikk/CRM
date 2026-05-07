"use client";

import { useFormContext } from "@/contexts/form-context";
import { ChevronRight } from "lucide-react";

type ServiceType = "legal-notice" | "consultation";

interface BrandFormCTAProps {
  service: ServiceType;
  children: React.ReactNode;
  /** Extra Tailwind classes — merged with the variant base styles */
  className?: string;
  /** Visual variant — defaults to "primary" */
  variant?: "primary" | "outline" | "ghost-white";
  /** Whether to show the chevron icon — defaults to true */
  showIcon?: boolean;
}

const baseClasses =
  "inline-flex items-center justify-center gap-2 font-bold rounded-xl transition-all duration-300 cursor-pointer border-0";

const variantClasses: Record<string, string> = {
  primary:
    "bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1",
  outline:
    "bg-white border-2 border-slate-200 text-slate-700 hover:border-primary hover:text-primary px-8 py-4 text-lg shadow-sm",
  "ghost-white":
    "bg-white text-primary hover:bg-slate-50 px-8 py-5 text-xl shadow transform hover:scale-105",
};

/**
 * BrandFormCTA
 *
 * Drop-in replacement for <Link href="/send-legal-notice"> and
 * <Link href="/consultation"> CTAs on brand/action pages.
 *
 * Triggers the site-wide lead-capture modal (FormContext.openForm)
 * instead of navigating to a page. This keeps conversion in-place.
 *
 * Usage:
 *   <BrandFormCTA service="legal-notice">Send Legal Notice — ₹1,499</BrandFormCTA>
 *   <BrandFormCTA service="consultation" variant="outline">Talk to a Verified Advocate — ₹299</BrandFormCTA>
 *   <BrandFormCTA service="legal-notice" variant="ghost-white">Send Legal Notice — ₹1,499</BrandFormCTA>
 */
export default function BrandFormCTA({
  service,
  children,
  className = "",
  variant = "primary",
  showIcon = true,
}: BrandFormCTAProps) {
  const { openForm } = useFormContext();

  return (
    <button
      type="button"
      onClick={() => openForm(service)}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
      {showIcon && <ChevronRight className="w-5 h-5 shrink-0" />}
    </button>
  );
}
