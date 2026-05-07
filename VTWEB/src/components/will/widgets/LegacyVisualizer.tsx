import React from "react";
import { WillData } from "@/lib/will-engine";
import { User, Landmark, Users, ArrowDown } from "lucide-react";

export function LegacyVisualizer({ data }: { data: Partial<WillData> }) {
  const name            = data?.basic?.fullName || "You";
  const numAssets       = data?.assets?.length || 0;
  const numBeneficiaries = data?.beneficiaries?.length || 0;

  const nodes = [
    {
      icon: User,
      label: name,
      sub: "Testator",
      bg: "bg-slate-900",
      text: "text-white",
      subText: "text-slate-300",
      iconColor: "text-slate-200",
    },
    {
      icon: Landmark,
      label: numAssets > 0 ? `${numAssets} Asset${numAssets !== 1 ? "s" : ""}` : "No Assets Yet",
      sub: "Estate",
      bg: numAssets > 0 ? "bg-emerald-50" : "bg-slate-50",
      text: numAssets > 0 ? "text-emerald-800" : "text-slate-400",
      subText: numAssets > 0 ? "text-emerald-600" : "text-slate-400",
      iconColor: numAssets > 0 ? "text-emerald-600" : "text-slate-400",
    },
    {
      icon: Users,
      label: numBeneficiaries > 0
        ? `${numBeneficiaries} Heir${numBeneficiaries !== 1 ? "s" : ""}`
        : "No Beneficiaries Yet",
      sub: "Beneficiaries",
      bg: numBeneficiaries > 0 ? "bg-orange-50" : "bg-slate-50",
      text: numBeneficiaries > 0 ? "text-orange-800" : "text-slate-400",
      subText: numBeneficiaries > 0 ? "text-orange-600" : "text-slate-400",
      iconColor: numBeneficiaries > 0 ? "text-orange-500" : "text-slate-400",
    },
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
      <p className="text-[11px] font-medium text-slate-400 uppercase tracking-widest mb-4 text-center">
        Legacy Tree
      </p>
      <div className="flex flex-col items-center gap-1">
        {nodes.map((node, i) => (
          <React.Fragment key={node.sub}>
            <div className={`${node.bg} border border-slate-100 rounded-xl px-4 py-2.5 w-full flex items-center gap-3 shadow-sm`}>
              <div className={`w-8 h-8 rounded-lg ${i === 0 ? "bg-white/20" : "bg-white"} flex items-center justify-center shrink-0`}>
                <node.icon className={`w-4 h-4 ${node.iconColor}`} />
              </div>
              <div>
                <p className={`text-sm font-semibold leading-none ${node.text} truncate max-w-[140px]`}>
                  {node.label}
                </p>
                <p className={`text-[11px] mt-0.5 ${node.subText}`}>{node.sub}</p>
              </div>
            </div>
            {i < nodes.length - 1 && (
              <ArrowDown className="w-4 h-4 text-slate-300 my-0.5" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
