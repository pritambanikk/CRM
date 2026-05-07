import React from "react";
import { WillData } from "@/lib/will-engine";
import { AlertTriangle } from "lucide-react";

export function IntestacyRisk({ data }: { data: Partial<WillData> }) {
  const hasSpouse   = data?.family?.hasSpouse;
  const hasChildren = data?.family?.children && data.family.children.length > 0;
  const numAssets   = data?.assets?.length || 0;

  let message =
    "If you abandon this form now, you risk dying 'intestate' (without a Will). The court — not you — will decide who inherits your assets.";

  if (numAssets > 0 && !hasSpouse && !hasChildren) {
    message = `You have listed ${numAssets} asset(s). Without a Will, the Hindu Succession Act will distribute these strictly to Class I heirs like parents. Friends or unlisted dependents get nothing.`;
  } else if (hasSpouse && hasChildren) {
    message = "Without a Will your spouse does NOT automatically inherit everything. Assets will be split among your spouse, children, and mother — often causing bitter family disputes.";
  } else if (hasSpouse && !hasChildren) {
    message = "Without a Will your spouse shares assets with your parents. Complete this document to ensure your spouse inherits fully.";
  } else if (!hasSpouse && hasChildren) {
    message = "Without a Will your children inherit equally — but without a Guardian & Executor, the court controls their inheritance until age 18.";
  }

  return (
    <div className="bg-red-50 border border-red-100 rounded-2xl shadow-sm p-5">
      <div className="flex items-center gap-2.5 mb-3">
        <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center shrink-0">
          <AlertTriangle className="w-4 h-4 text-red-600" />
        </div>
        <h3 className="text-sm font-semibold text-red-800 leading-tight">Intestacy Risk</h3>
      </div>
      <p className="text-xs text-red-700 leading-relaxed">{message}</p>
    </div>
  );
}
