"use client";

import React from "react";
import { useFormContext } from "react-hook-form";
import { WillData } from "@/lib/will-engine";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Lightbulb } from "lucide-react";

function Insight({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3 items-start bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800 animate-in fade-in slide-in-from-top-2">
      <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
      <p>{children}</p>
    </div>
  );
}

export default function Step1Basic() {
  const { register, setValue, watch } = useFormContext<WillData>();
  const gender        = watch("basic.gender");
  const maritalStatus = watch("basic.maritalStatus");
  const age           = watch("basic.age");

  return (
    <div className="space-y-5">
      {age && Number(age) > 0 && Number(age) < 40 && (
        <Insight>
          <strong>85% of Indians under 40</strong> don&apos;t have a Will, leaving their families vulnerable. By doing this today, you&apos;re making a deeply responsible choice for your loved ones.
        </Insight>
      )}
      {age && Number(age) >= 60 && (
        <Insight>
          At your stage of life, courts look very closely at the legal clarity of a Will. Providing your full, accurate details below ensures your Will is legally airtight.
        </Insight>
      )}

      <div className="grid gap-1.5">
        <Label className="text-sm font-medium text-slate-700">Full Name <span className="text-slate-400 font-normal text-xs">(as per legal ID)</span></Label>
        <Input placeholder="e.g. Ramesh Kumar Sharma" {...register("basic.fullName", { required: true })} />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="grid gap-1.5">
          <Label className="text-sm font-medium text-slate-700">Age</Label>
          <Input type="number" min={18} max={120} placeholder="e.g. 38" {...register("basic.age", { required: true, min: 18 })} />
        </div>
        <div className="grid gap-1.5">
          <Label className="text-sm font-medium text-slate-700">Gender</Label>
          <Select value={gender} onValueChange={(v) => setValue("basic.gender", v)}>
            <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="Male">Male</SelectItem>
              <SelectItem value="Female">Female</SelectItem>
              <SelectItem value="Other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-1.5">
        <Label className="text-sm font-medium text-slate-700">Marital Status</Label>
        <Select value={maritalStatus} onValueChange={(v) => setValue("basic.maritalStatus", v)}>
          <SelectTrigger><SelectValue placeholder="Select status" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="Single">Single</SelectItem>
            <SelectItem value="Married">Married</SelectItem>
            <SelectItem value="Divorced">Divorced</SelectItem>
            <SelectItem value="Widowed">Widowed</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="pt-4 border-t border-slate-100 space-y-4">
        <p className="text-sm font-semibold text-slate-800">Complete Address</p>

        <div className="grid gap-1.5">
          <Label className="text-sm font-medium text-slate-700">Address Line 1</Label>
          <Input placeholder="Flat No, Building Name, Street" {...register("basic.addressLine1", { required: true })} />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-1.5">
            <Label className="text-sm font-medium text-slate-700">Post Office</Label>
            <Input placeholder="e.g. Andheri West PO" {...register("basic.postOffice", { required: true })} />
          </div>
          <div className="grid gap-1.5">
            <Label className="text-sm font-medium text-slate-700">Police Station</Label>
            <Input placeholder="e.g. D.N. Nagar PS" {...register("basic.policeStation", { required: true })} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-1.5">
            <Label className="text-sm font-medium text-slate-700">District</Label>
            <Input placeholder="e.g. Mumbai Suburban" {...register("basic.district", { required: true })} />
          </div>
          <div className="grid gap-1.5">
            <Label className="text-sm font-medium text-slate-700">State</Label>
            <Input placeholder="e.g. Maharashtra" {...register("basic.state", { required: true })} />
          </div>
        </div>

        <div className="grid gap-1.5 max-w-xs">
          <Label className="text-sm font-medium text-slate-700">Pincode</Label>
          <Input placeholder="e.g. 400053" {...register("basic.pincode", { required: true })} />
        </div>
      </div>
    </div>
  );
}
