"use client";

import React from "react";
import { useFormContext } from "react-hook-form";
import { WillData } from "@/lib/will-engine";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Lightbulb, CheckCircle2 } from "lucide-react";

export default function Step6Wishes() {
  const { register, watch } = useFormContext<WillData>();
  const wishes = watch("specialWishes");

  return (
    <div className="space-y-5">
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm text-slate-600">
        <p className="font-semibold text-slate-800 mb-1">This section is optional</p>
        <p>Use this space for personal instructions — funeral preferences, organ donation wishes, or a final heartfelt message to your loved ones. While not legally binding, these wishes will be formally recorded.</p>
      </div>

      {!wishes ? (
        <div className="flex gap-3 items-start bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
          <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
          <p>Many people use this section to express organ donation preferences, arrange for a simple or religious funeral, or leave a personal letter for their family.</p>
        </div>
      ) : (
        <div className="flex gap-3 items-start bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-sm text-emerald-800">
          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
          <p>Your personal wishes will be formally recorded, providing clarity and comfort to your family during a difficult time.</p>
        </div>
      )}

      <div className="grid gap-1.5">
        <Label className="text-sm font-medium text-slate-700">Your Wishes</Label>
        <Textarea
          placeholder="e.g. I wish for my funeral to be a simple affair... / I wish to donate my organs..."
          className="min-h-[160px] resize-y"
          {...register("specialWishes")}
        />
        <p className="text-xs text-slate-400">{wishes?.length || 0} characters</p>
      </div>
    </div>
  );
}
