"use client";

import React from "react";
import { useFormContext, useFieldArray } from "react-hook-form";
import { WillData } from "@/lib/will-engine";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Plus, Trash2, Lightbulb, Landmark } from "lucide-react";

const ASSET_TYPES = [
  "Real Estate / Property",
  "Bank Account",
  "Mutual Funds / Stocks",
  "Gold / Jewelry",
  "Vehicle",
  "Other",
];

function Insight({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3 items-start bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800 animate-in fade-in slide-in-from-top-2">
      <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
      <p>{children}</p>
    </div>
  );
}

export default function Step3Assets() {
  const { control, register, setValue, watch } = useFormContext<WillData>();
  const { fields, append, remove } = useFieldArray({ control, name: "assets" });

  return (
    <div className="space-y-5">
      {fields.length === 0 ? (
        <Insight>
          Assets not listed will fall under a general &ldquo;residuary clause.&rdquo; However, high-value assets (property, bank accounts) should be explicitly detailed to avoid ambiguity.
        </Insight>
      ) : (
        <Insight>
          You have listed <strong>{fields.length} asset{fields.length !== 1 ? "s" : ""}</strong>. Describe each clearly (e.g. &ldquo;HDFC Bank A/c ending 1234&rdquo;). Clear descriptions make execution smoother for your family.
        </Insight>
      )}

      {fields.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-10 bg-slate-50 border border-dashed border-slate-200 rounded-xl text-center">
          <Landmark className="w-8 h-8 text-slate-300 mb-3" />
          <p className="text-sm text-slate-500 font-medium">No assets added yet</p>
          <p className="text-xs text-slate-400 mt-1">Add your first asset below</p>
        </div>
      ) : (
        <div className="space-y-4">
          {fields.map((field, index) => (
            <div key={field.id} className="bg-slate-50 border border-slate-200 rounded-xl p-4 relative">
              <button
                type="button"
                onClick={() => remove(index)}
                className="absolute top-3 right-3 p-1.5 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>

              <div className="space-y-3 pr-8">
                <div className="grid gap-1.5">
                  <Label className="text-xs font-medium text-slate-600">Asset Type</Label>
                  <Select
                    value={watch(`assets.${index}.type`)}
                    onValueChange={(v) => setValue(`assets.${index}.type`, v)}
                  >
                    <SelectTrigger className="bg-white">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      {ASSET_TYPES.map((t) => (
                        <SelectItem key={t} value={t}>{t}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-1.5">
                  <Label className="text-xs font-medium text-slate-600">Description</Label>
                  <Input
                    className="bg-white"
                    placeholder="e.g. 2BHK flat in Andheri / HDFC A/c ending 1234"
                    {...register(`assets.${index}.description`)}
                  />
                </div>
                <div className="grid gap-1.5">
                  <Label className="text-xs font-medium text-slate-600">Location / Branch <span className="text-slate-400">(optional)</span></Label>
                  <Input
                    className="bg-white"
                    placeholder="e.g. Mumbai / HDFC MG Road Branch"
                    {...register(`assets.${index}.location`)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <Button
        type="button"
        variant="outline"
        onClick={() => append({ id: Date.now().toString(), type: "", description: "", location: "" })}
        className="w-full border-dashed border-slate-300 text-slate-600 hover:text-slate-900 hover:border-slate-400 rounded-xl"
      >
        <Plus className="w-4 h-4 mr-2" />
        Add Asset
      </Button>
    </div>
  );
}
