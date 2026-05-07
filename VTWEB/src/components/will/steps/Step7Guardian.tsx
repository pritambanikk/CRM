"use client";

import React from "react";
import { useFormContext } from "react-hook-form";
import { WillData } from "@/lib/will-engine";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Lightbulb, CheckCircle2, Baby } from "lucide-react";

export default function Step7Guardian() {
  const { register, watch } = useFormContext<WillData>();
  const guardianName = watch("guardian.name");

  return (
    <div className="space-y-5">
      <div className="flex gap-3 items-start bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-800">
        <Baby className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
        <p>
          Since you have <strong>minor children (under 18)</strong>, it is crucial to appoint a legal guardian who will care for them in your absence.
        </p>
      </div>

      {!guardianName ? (
        <div className="flex gap-3 items-start bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
          <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
          <p>Without a named guardian, the court will appoint one — often a prolonged and emotionally draining process. By naming someone here, your children are raised by someone you deeply trust.</p>
        </div>
      ) : (
        <div className="flex gap-3 items-start bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-sm text-emerald-800">
          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
          <p><strong>Your children&apos;s future is secured.</strong> It is highly recommended to discuss this responsibility with {guardianName} in advance.</p>
        </div>
      )}

      <div className="max-w-sm space-y-1.5">
        <Label className="text-sm font-medium text-slate-700">Guardian&apos;s Full Name</Label>
        <Input placeholder="e.g. Priya Sharma" {...register("guardian.name", { required: true })} />
      </div>
    </div>
  );
}
