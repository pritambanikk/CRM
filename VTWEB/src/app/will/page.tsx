import { Metadata } from "next";
import WillWizard from "@/components/will/WillWizard";
import { ShieldCheck, Clock, FileText, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Will Generator | Make Your Will Online Free | VakilTech",
  description: "Create a legally valid, emotionally intelligent, and completely customized Will in 10 minutes. Based on the Indian Succession Act, 1925.",
};

const TRUST_BADGES = [
  { icon: ShieldCheck, label: "Indian Succession Act, 1925" },
  { icon: Clock, label: "Ready in 10 minutes" },
  { icon: FileText, label: "Free to draft" },
  { icon: Lock, label: "100% confidential" },
];

export default function WillPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-14 pb-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-medium px-3 py-1.5 rounded-full mb-6 backdrop-blur-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            Trusted by 10,000+ Indians — legally structured &amp; court-admissible
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 leading-tight">
            Create Your Personalized
            <span className="block mt-1 bg-gradient-to-r from-orange-300 to-red-400 bg-clip-text text-transparent">
              Last Will &amp; Testament
            </span>
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            A legally structured, context-aware Will tailored to your family situation — drafted under the Indian Succession Act, 1925. Free to create, entirely confidential.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {TRUST_BADGES.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-1.5 bg-white/10 border border-white/15 rounded-full px-3 py-1.5 text-xs text-white/80"
              >
                <Icon className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wizard pulled up into the hero */}
      <div className="-mt-8 pb-16">
        <WillWizard />
      </div>
    </div>
  );
}
