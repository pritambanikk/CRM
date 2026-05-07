"use client";

import React from "react";
import { useFormContext, useFieldArray } from "react-hook-form";
import { WillData } from "@/lib/will-engine";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Plus, Trash2, Lightbulb, Users } from "lucide-react";

function Insight({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3 items-start bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800 animate-in fade-in slide-in-from-top-2">
      <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
      <p>{children}</p>
    </div>
  );
}

export default function Step4Beneficiaries() {
  const { control, register, setValue, watch } = useFormContext<WillData>();
  const { fields, append, remove } = useFieldArray({ control, name: "beneficiaries" });

  const assets              = watch("assets") || [];
  const beneficiaries       = watch("beneficiaries") || [];
  const distributionType    = watch("distributionType");
  const assetDistribution   = watch("assetDistribution") || {};

  const toggleAssetBeneficiary = (assetId: string, benId: string) => {
    const current = assetDistribution[assetId] || [];
    const updated = current.includes(benId)
      ? current.filter((id) => id !== benId)
      : [...current, benId];
    setValue("assetDistribution", { ...assetDistribution, [assetId]: updated });
  };

  return (
    <div className="space-y-6">
      {fields.length === 0 ? (
        <Insight>
          Beneficiaries are the people or organisations who will inherit your assets. Ensure names match their legal IDs to prevent disputes during execution.
        </Insight>
      ) : (
        <Insight>
          You&apos;ve added <strong>{fields.length} beneficiar{fields.length !== 1 ? "ies" : "y"}</strong>. Choose equal distribution or assign specific assets to specific people below.
        </Insight>
      )}

      {/* Beneficiary list */}
      <div className="space-y-3">
        {fields.length === 0 && (
          <div className="flex flex-col items-center justify-center py-8 bg-slate-50 border border-dashed border-slate-200 rounded-xl text-center">
            <Users className="w-7 h-7 text-slate-300 mb-2" />
            <p className="text-sm text-slate-500 font-medium">No beneficiaries added yet</p>
          </div>
        )}

        {fields.map((field, index) => (
          <div key={field.id} className="flex gap-3 items-end bg-slate-50 border border-slate-200 rounded-xl p-3">
            <div className="flex-1 grid gap-1.5">
              <Label className="text-xs font-medium text-slate-600">Full Name</Label>
              <Input className="bg-white" placeholder="e.g. Rahul Sharma" {...register(`beneficiaries.${index}.name`)} />
            </div>
            <div className="flex-1 grid gap-1.5">
              <Label className="text-xs font-medium text-slate-600">Relationship</Label>
              <Input className="bg-white" placeholder="e.g. Son / Friend" {...register(`beneficiaries.${index}.relationship`)} />
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
          onClick={() => append({ id: Date.now().toString(), name: "", relationship: "" })}
          className="border-dashed border-slate-300 text-slate-600 hover:text-slate-900 rounded-xl"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Beneficiary
        </Button>
      </div>

      {/* Distribution type */}
      {beneficiaries.length > 0 && assets.length > 0 && (
        <div className="pt-4 border-t border-slate-100 space-y-4">
          <p className="text-sm font-semibold text-slate-800">Distribution Method</p>
          <div className="space-y-2">
            {[
              { value: "equal", label: "Distribute all assets equally among all beneficiaries" },
              { value: "custom", label: "Assign specific assets to specific beneficiaries" },
            ].map(({ value, label }) => (
              <label
                key={value}
                className={[
                  "flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-colors",
                  distributionType === value
                    ? "bg-slate-900 border-slate-900 text-white"
                    : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100",
                ].join(" ")}
              >
                <input
                  type="radio"
                  name="distributionType"
                  value={value}
                  checked={distributionType === value}
                  onChange={() => setValue("distributionType", value as "equal" | "custom")}
                  className="mt-0.5 accent-white"
                />
                <span className="text-sm">{label}</span>
              </label>
            ))}
          </div>

          {distributionType === "custom" && (
            <div className="space-y-3 pt-2">
              <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Map Assets → Beneficiaries</p>
              {assets.map((asset) => (
                <div key={asset.id} className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <p className="text-sm font-medium text-slate-800 mb-3">
                    {asset.type}{asset.description ? ` — ${asset.description}` : ""}
                  </p>
                  <div className="space-y-2">
                    {beneficiaries.map((ben) => {
                      if (!ben.name) return null;
                      const isChecked = (assetDistribution[asset.id] || []).includes(ben.id);
                      return (
                        <div key={ben.id} className="flex items-center gap-2.5">
                          <Checkbox
                            id={`a-${asset.id}-b-${ben.id}`}
                            checked={isChecked}
                            onCheckedChange={() => toggleAssetBeneficiary(asset.id, ben.id)}
                          />
                          <Label htmlFor={`a-${asset.id}-b-${ben.id}`} className="text-sm text-slate-700 cursor-pointer">
                            {ben.name} <span className="text-slate-400">({ben.relationship})</span>
                          </Label>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
