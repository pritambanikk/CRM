import { WillData, calculateWillStrength } from "@/lib/will-engine";
import { ShieldAlert, ShieldCheck, Shield, CheckCircle2, Circle } from "lucide-react";

export function WillStrengthMeter({ data }: { data: Partial<WillData> }) {
  const score = calculateWillStrength(data);
  const hasMinorChildren = data?.family?.children?.some((c) => c?.age < 18);

  const { label, colorClass, ringColor, barGradient, Icon } =
    score >= 80
      ? { label: "Dispute-Proof", colorClass: "text-emerald-600", ringColor: "bg-emerald-50", barGradient: "linear-gradient(90deg,#34d399,#059669)", Icon: ShieldCheck }
      : score >= 50
      ? { label: "Moderate",      colorClass: "text-yellow-600",  ringColor: "bg-yellow-50",  barGradient: "linear-gradient(90deg,#fbbf24,#d97706)", Icon: Shield }
      : { label: "Incomplete",    colorClass: "text-red-500",     ringColor: "bg-red-50",     barGradient: "linear-gradient(90deg,#f87171,#dc2626)",  Icon: ShieldAlert };

  const checks = [
    { done: !!data?.basic?.fullName,               label: "Personal details added" },
    { done: (data?.assets?.length ?? 0) > 0,       label: "Assets declared" },
    { done: (data?.beneficiaries?.length ?? 0) > 0, label: "Beneficiaries named" },
    { done: !!data?.executor?.name,                label: "Executor appointed" },
    ...(hasMinorChildren ? [{ done: !!data?.guardian?.name, label: "Guardian appointed" }] : []),
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-[11px] font-medium text-slate-400 uppercase tracking-widest mb-1">Will Strength</p>
          <div className="flex items-baseline gap-1">
            <span className={`text-4xl font-bold tabular-nums ${colorClass}`}>{score}</span>
            <span className={`text-sm font-medium ${colorClass}`}>/100</span>
          </div>
          <p className={`text-xs font-semibold mt-0.5 ${colorClass}`}>{label}</p>
        </div>
        <div className={`w-12 h-12 rounded-xl ${ringColor} flex items-center justify-center shrink-0`}>
          <Icon className={`w-6 h-6 ${colorClass}`} />
        </div>
      </div>

      {/* strength bar */}
      <div className="h-2 bg-slate-100 rounded-full overflow-hidden mb-5">
        <div
          className="h-full rounded-full transition-all duration-700 ease-out"
          style={{ width: `${score}%`, background: barGradient }}
        />
      </div>

      {/* checklist */}
      <ul className="space-y-2.5">
        {checks.map(({ done, label: lbl }) => (
          <li key={lbl} className="flex items-center gap-2.5 text-xs">
            {done
              ? <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              : <Circle       className="w-4 h-4 text-slate-300 shrink-0" />}
            <span className={done ? "text-slate-700 font-medium" : "text-slate-400"}>{lbl}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
