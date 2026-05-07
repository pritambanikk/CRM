"use client";

import { useFormContext } from "@/contexts/form-context";
import { ReactNode } from "react";

type Variant = "primary" | "outline" | "primary-wide";

interface SalaryFormCTAProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}

const base =
  "px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transform hover:scale-105",
  outline:
    "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-center",
  "primary-wide":
    "bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl w-full text-center",
};

export default function SalaryFormCTA({
  children,
  variant = "primary",
  className = "",
}: SalaryFormCTAProps) {
  const { openForm } = useFormContext();

  return (
    <button
      type="button"
      onClick={() => openForm("legal-notice")}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
