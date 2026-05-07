"use client";

import { useFormContext } from "@/contexts/form-context";

export default function ClientFormTrigger() {
  const { openForm } = useFormContext();

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <button
        className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        onClick={() => openForm("legal-notice")}
      >
        Send Legal Notice — ₹1,499
      </button>
    </div>
  );
}
