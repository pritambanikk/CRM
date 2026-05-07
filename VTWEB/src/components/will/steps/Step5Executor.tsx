"use client";

import React from "react";
import { useFormContext } from "react-hook-form";
import { WillData } from "@/lib/will-engine";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Lightbulb, CheckCircle2 } from "lucide-react";

export default function Step5Executor() {
  const { register, watch } = useFormContext<WillData>();
  const executorName = watch("executor.name");

  return (
    <div className="space-y-5">
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm text-slate-600">
        <p className="font-semibold text-slate-800 mb-1">What is an Executor?</p>
        <p>An Executor is the trusted person responsible for carrying out the terms of your Will — settling debts, distributing assets, and handling legal formalities after your passing.</p>
      </div>

      {!executorName ? (
        <div className="flex gap-3 items-start bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800 animate-in fade-in slide-in-from-top-2">
          <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
          <p>Choose someone reliable and preferably younger — a trusted friend, family member, or lawyer. They&apos;re legally responsible for paying off debts and distributing your assets.</p>
        </div>
      ) : (
        <div className="flex gap-3 items-start bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-sm text-emerald-800 animate-in fade-in slide-in-from-top-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
          <p><strong>Great choice.</strong> You&apos;ve appointed {executorName}. Discuss this responsibility with them and provide their complete address below so they can be legally contacted.</p>
        </div>
      )}

      <div className="space-y-4 max-w-xl">
        <div className="grid gap-1.5">
          <Label className="text-sm font-medium text-slate-700">Executor&apos;s Full Name</Label>
          <Input placeholder="e.g. Amit Patel" {...register("executor.name", { required: true })} />
        </div>
        <div className="grid gap-1.5">
          <Label className="text-sm font-medium text-slate-700">Relationship to You</Label>
          <Input placeholder="e.g. Brother, Friend, Lawyer" {...register("executor.relationship", { required: true })} />
        </div>
        <div className="grid gap-1.5">
          <Label className="text-sm font-medium text-slate-700">Full Postal Address</Label>
          <Textarea
            placeholder="Complete address of the executor"
            className="resize-none"
            rows={3}
            {...register("executor.address", { required: true })}
          />
        </div>
      </div>
    </div>
  );
}
