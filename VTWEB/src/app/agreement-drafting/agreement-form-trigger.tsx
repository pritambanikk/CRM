"use client";

import { useFormContext } from "@/contexts/form-context";

interface AgreementFormTriggerProps {
  label?: string;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function AgreementFormTrigger({
  label = "Draft My Agreement — ₹999+",
  variant = "primary",
  className,
}: AgreementFormTriggerProps) {
  const { openForm } = useFormContext();

  const baseClass =
    variant === "primary"
      ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transform hover:scale-105"
      : "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground";

  return (
    <button
      onClick={() => openForm("document-drafting")}
      className={`${baseClass} px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 text-center ${className ?? ""}`}
    >
      {label}
    </button>
  );
}
