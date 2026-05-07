"use client";

import React, { useEffect } from "react";
import { useFormContext, useFieldArray } from "react-hook-form";
import { WillData } from "@/lib/will-engine";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Plus, Trash2, Lightbulb } from "lucide-react";

function Insight({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3 items-start bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800 animate-in fade-in slide-in-from-top-2">
      <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
      <p>{children}</p>
    </div>
  );
}

export default function Step2Family() {
  const { register, watch, setValue, control } = useFormContext<WillData>();
  const maritalStatus = watch("basic.maritalStatus");
  const hasSpouse     = watch("family.hasSpouse");
  const hasChildren   = watch("family.hasChildren");
  const isMarried     = maritalStatus === "Married";

  useEffect(() => {
    if (isMarried) {
      setValue("family.hasSpouse", true);
    } else {
      setValue("family.hasSpouse", false);
      setValue("family.spouseName", "");
    }
  }, [isMarried, setValue]);

  const { fields, append, remove } = useFieldArray({ control, name: "family.children" });

  return (
    <div className="space-y-6">
      {hasChildren && (
        <Insight>
          Naming your children prevents future claims from unmentioned heirs and automatically triggers the Guardian clause if any are under 18.
        </Insight>
      )}
      {!hasChildren && hasSpouse && (
        <Insight>
          Without a Will your spouse doesn&apos;t automatically inherit everything — your parents may also have a legal claim. This document ensures your spouse is fully protected.
        </Insight>
      )}

      {/* Spouse */}
      {isMarried && (
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3">
          <div>
            <Label className="text-sm font-semibold text-slate-800">Spouse&apos;s Full Name</Label>
            <p className="text-xs text-slate-500 mt-0.5">Required since you indicated you are married</p>
          </div>
          <Input placeholder="Name of your spouse" {...register("family.spouseName", { required: true })} />
        </div>
      )}

      {/* Children toggle */}
      <div className="space-y-4">
        <div className="flex items-center justify-between bg-slate-50 border border-slate-200 rounded-xl px-4 py-3">
          <Label className="text-sm font-medium text-slate-700 cursor-pointer">Do you have children?</Label>
          <Switch
            checked={hasChildren}
            onCheckedChange={(v) => setValue("family.hasChildren", v)}
          />
        </div>

        {hasChildren && (
          <div className="space-y-3 pl-1">
            {fields.map((field, index) => (
              <div key={field.id} className="flex gap-3 items-end bg-white border border-slate-200 rounded-xl p-3">
                <div className="flex-1 grid gap-1.5">
                  <Label className="text-xs font-medium text-slate-600">Child&apos;s Name</Label>
                  <Input placeholder="Full name" {...register(`family.children.${index}.name`)} />
                </div>
                <div className="w-20 grid gap-1.5">
                  <Label className="text-xs font-medium text-slate-600">Age</Label>
                  <Input type="number" placeholder="Age" {...register(`family.children.${index}.age` as const, { valueAsNumber: true })} />
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => remove(index)}
                  className="text-red-400 hover:text-red-600 hover:bg-red-50 h-9 w-9 shrink-0"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            ))}
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => append({ id: Date.now().toString(), name: "", age: 0 })}
              className="border-dashed text-slate-600 hover:text-slate-900"
            >
              <Plus className="w-4 h-4 mr-1.5" />
              Add Child
            </Button>
          </div>
        )}
      </div>

      {/* Other dependents */}
      <div className="pt-4 border-t border-slate-100 space-y-1.5">
        <Label className="text-sm font-medium text-slate-700">
          Other Dependents <span className="text-slate-400 font-normal text-xs">(optional)</span>
        </Label>
        <p className="text-xs text-slate-400">Aging parents or others you financially support</p>
        <Input placeholder="e.g. My mother, Mrs. Sharma" {...register("family.dependents")} />
      </div>
    </div>
  );
}
