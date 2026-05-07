"use client";

import React from "react";
import { useFormContext } from "react-hook-form";
import { WillData, generateWillText } from "@/lib/will-engine";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Download, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const BENEFITS = [
  "Reviewed by experienced high-court advocates",
  "Personalised corrections &amp; legal additions",
  "Legally compliant drafting guarantee",
];

export default function Step8Review() {
  const { getValues } = useFormContext<WillData>();
  const willData  = getValues();
  const draftText = generateWillText(willData);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-900 leading-tight">Your Will Draft is Ready</h3>
          <p className="text-sm text-slate-500 mt-0.5">
            Review the generated document below. Structured under the Indian Succession Act, 1925.
          </p>
        </div>
      </div>

      {/* Draft preview */}
      <div className="relative">
        <div className="absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-white to-transparent z-10 rounded-t-xl pointer-events-none" />
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 whitespace-pre-wrap font-serif text-sm text-slate-800 leading-relaxed max-h-72 overflow-y-auto">
          {draftText}
        </div>
        <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-white to-transparent z-10 rounded-b-xl pointer-events-none" />
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-5 md:p-6 text-white">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-6 h-6 text-emerald-400" />
          </div>
          <div>
            <h4 className="text-base font-semibold leading-tight">Get Your Will Legally Verified</h4>
            <p className="text-sm text-slate-300 mt-1">
              Ensure your Will is dispute-proof and fully customised to your family situation.
            </p>
          </div>
        </div>
        <ul className="space-y-2 mb-5">
          {BENEFITS.map((b) => (
            <li key={b} className="flex items-center gap-2.5 text-sm text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span dangerouslySetInnerHTML={{ __html: b }} />
            </li>
          ))}
        </ul>
        <Link href="/consultation">
          <Button
            size="lg"
            className="w-full bg-gradient-to-r from-orange-400 to-red-500 hover:from-orange-500 hover:to-red-600 text-white border-0 rounded-xl font-semibold shadow-lg"
          >
            Get Expert Review for ₹2,999
          </Button>
        </Link>
      </div>

      {/* Download placeholder */}
      <button
        type="button"
        className="w-full flex items-center justify-center gap-2 border border-dashed border-slate-300 rounded-xl py-3 text-sm text-slate-500 hover:border-slate-400 hover:text-slate-700 transition-colors"
      >
        <Download className="w-4 h-4" />
        Download Draft as PDF (coming soon)
      </button>

      {/* Disclaimer */}
      <p className="text-[11px] text-slate-400 text-center leading-relaxed">
        <strong>Disclaimer:</strong> This is a draft Will for informational purposes only. It must be reviewed by a qualified legal professional before execution. A Will must be signed in the presence of two witnesses to be legally valid in India.
      </p>
    </div>
  );
}
