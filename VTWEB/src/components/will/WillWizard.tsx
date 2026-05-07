"use client";

import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { WillData } from "@/lib/will-engine";
import { Button } from "@/components/ui/button";
import Step1Basic from "./steps/Step1Basic";
import Step2Family from "./steps/Step2Family";
import Step3Assets from "./steps/Step3Assets";
import Step4Beneficiaries from "./steps/Step4Beneficiaries";
import Step5Executor from "./steps/Step5Executor";
import Step6Wishes from "./steps/Step6Wishes";
import Step7Guardian from "./steps/Step7Guardian";
import Step8Review from "./steps/Step8Review";
import {
  ArrowLeft,
  ArrowRight,
  User,
  Users,
  Landmark,
  Gift,
  Briefcase,
  Heart,
  Baby,
  FileCheck,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
} from "lucide-react";
import { WillStrengthMeter } from "./widgets/WillStrengthMeter";
import { IntestacyRisk } from "./widgets/IntestacyRisk";
import { LegacyVisualizer } from "./widgets/LegacyVisualizer";
import { calculateWillStrength } from "@/lib/will-engine";

const STEPS = [
  { id: 1, title: "Basic Details",  short: "Basics",   icon: User },
  { id: 2, title: "Family Details", short: "Family",   icon: Users },
  { id: 3, title: "Assets",         short: "Assets",   icon: Landmark },
  { id: 4, title: "Beneficiaries",  short: "Heirs",    icon: Gift },
  { id: 5, title: "Executor",       short: "Executor", icon: Briefcase },
  { id: 6, title: "Special Wishes", short: "Wishes",   icon: Heart },
  { id: 7, title: "Guardian",       short: "Guardian", icon: Baby },
  { id: 8, title: "Review & Draft", short: "Review",   icon: FileCheck },
];

export default function WillWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isMobileDashboardOpen, setIsMobileDashboardOpen] = useState(false);

  const methods = useForm<WillData>({
    defaultValues: {
      basic: {
        fullName: "", age: "", gender: "",
        addressLine1: "", postOffice: "", policeStation: "",
        district: "", state: "", pincode: "", maritalStatus: "",
      },
      family: { hasSpouse: false, spouseName: "", hasChildren: false, children: [], dependents: "" },
      assets: [],
      beneficiaries: [],
      distributionType: "equal",
      assetDistribution: {},
      executor: { name: "", relationship: "", address: "" },
      guardian: { name: "" },
      specialWishes: "",
    },
    mode: "onChange",
  });

  const { watch, trigger } = methods;
  const hasChildren      = watch("family.hasChildren");
  const children         = watch("family.children") || [];
  const hasMinorChildren = hasChildren && children.some((c) => c.age < 18);
  const currentData      = watch();
  const currentStrength  = calculateWillStrength(currentData);

  const nextStep = async () => {
    let fieldsToValidate: string[] = [];
    if (currentStep === 1) fieldsToValidate = ["basic"];
    if (currentStep === 2) fieldsToValidate = ["family"];
    if (currentStep === 3) fieldsToValidate = ["assets"];
    if (currentStep === 4) fieldsToValidate = ["beneficiaries", "distributionType", "assetDistribution"];
    if (currentStep === 5) fieldsToValidate = ["executor"];
    const isValid = await trigger(fieldsToValidate as any);
    if (isValid) {
      if (currentStep === 6 && !hasMinorChildren) setCurrentStep(8);
      else if (currentStep < 8) setCurrentStep((p) => p + 1);
    }
  };

  const prevStep = () => {
    if (currentStep === 8 && !hasMinorChildren) setCurrentStep(6);
    else if (currentStep > 1) setCurrentStep((p) => p - 1);
  };

  const goToStep = (id: number) => { if (id < currentStep) setCurrentStep(id); };

  const visibleSteps = STEPS.filter((s) => s.id !== 7 || hasMinorChildren || currentStep === 7);
  const progressPct  = ((currentStep - 1) / (STEPS.length - 1)) * 100;
  const strengthColor =
    currentStrength >= 80 ? "text-emerald-400" :
    currentStrength >= 50 ? "text-yellow-400" : "text-red-400";

  const StepIcon = STEPS[currentStep - 1].icon;

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6">

      {/* ── Mobile sticky header ── */}
      <div className="md:hidden sticky top-0 z-50 mb-4">
        <div className="bg-slate-900 text-white rounded-2xl shadow-xl border border-slate-700/60 overflow-hidden">
          <button
            className="w-full flex items-center justify-between p-4"
            onClick={() => setIsMobileDashboardOpen((v) => !v)}
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold leading-none">
                  Will Strength:&nbsp;
                  <span className={strengthColor}>{currentStrength}%</span>
                </p>
                <p className="text-[11px] text-slate-400 mt-0.5">Tap to view risks &amp; legacy tree</p>
              </div>
            </div>
            {isMobileDashboardOpen
              ? <ChevronUp className="w-4 h-4 text-slate-400" />
              : <ChevronDown className="w-4 h-4 text-slate-400" />}
          </button>
          {isMobileDashboardOpen && (
            <div className="px-4 pb-4 pt-2 border-t border-slate-700/60 space-y-3 max-h-[65vh] overflow-y-auto">
              <WillStrengthMeter data={currentData} />
              <IntestacyRisk data={currentData} />
              <LegacyVisualizer data={currentData} />
            </div>
          )}
        </div>
      </div>

      {/* ── Step indicator card ── */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 px-4 py-4 mb-4">
        <div className="h-1.5 bg-slate-100 rounded-full mb-4 overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500 ease-out"
            style={{
              width: `${progressPct}%`,
              background: "linear-gradient(to right, #fb923c, #ef4444)",
            }}
          />
        </div>
        <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 no-scrollbar">
          {visibleSteps.map((step) => {
            const Icon      = step.icon;
            const done      = currentStep > step.id;
            const active    = currentStep === step.id;
            const clickable = step.id < currentStep;
            return (
              <button
                key={step.id}
                onClick={() => clickable && goToStep(step.id)}
                disabled={!clickable && !active}
                className={[
                  "flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all duration-200 shrink-0",
                  active   ? "bg-slate-900 text-white shadow" :
                  done     ? "bg-emerald-50 text-emerald-700 hover:bg-emerald-100 cursor-pointer" :
                             "bg-slate-50 text-slate-400 cursor-default",
                ].join(" ")}
              >
                <div className={[
                  "w-5 h-5 rounded-full flex items-center justify-center shrink-0",
                  active ? "bg-white/20" : done ? "bg-emerald-200" : "bg-slate-200",
                ].join(" ")}>
                  {done ? (
                    <svg className="w-3 h-3 text-emerald-600" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ) : (
                    <Icon className={`w-2.5 h-2.5 ${active ? "text-white" : "text-slate-400"}`} />
                  )}
                </div>
                <span className="hidden sm:inline">{step.short}</span>
                <span className="sm:hidden font-semibold">{step.id}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Main grid ── */}
      <div className="grid md:grid-cols-3 gap-4 md:gap-6">

        {/* Left: form */}
        <div className="md:col-span-2 flex flex-col">

          {/* Step header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-11 h-11 rounded-xl bg-slate-900 flex items-center justify-center shrink-0 shadow-sm">
              <StepIcon className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-[11px] font-medium uppercase tracking-widest text-slate-400">
                Step {currentStep} of {STEPS.length}
              </p>
              <h2 className="text-xl font-semibold text-slate-900 leading-tight">
                {STEPS[currentStep - 1].title}
              </h2>
            </div>
          </div>

          {/* Form card */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm flex-1 p-5 md:p-8 mb-4 min-h-[400px]">
            <FormProvider {...methods}>
              <form onSubmit={(e) => e.preventDefault()}>
                {currentStep === 1 && <Step1Basic />}
                {currentStep === 2 && <Step2Family />}
                {currentStep === 3 && <Step3Assets />}
                {currentStep === 4 && <Step4Beneficiaries />}
                {currentStep === 5 && <Step5Executor />}
                {currentStep === 6 && <Step6Wishes />}
                {currentStep === 7 && <Step7Guardian />}
                {currentStep === 8 && <Step8Review />}
              </form>
            </FormProvider>
          </div>

          {/* Nav buttons */}
          <div className="flex items-center justify-between gap-3">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="flex-1 sm:flex-none sm:w-36 border-slate-200 text-slate-700 hover:bg-slate-50 rounded-xl h-11"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            {currentStep < 8 && (
              <Button
                onClick={nextStep}
                className="flex-1 sm:flex-none sm:w-40 bg-slate-900 hover:bg-slate-800 text-white rounded-xl h-11 shadow-md"
              >
                Continue
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            )}
          </div>
        </div>

        {/* Right: sidebar — desktop only */}
        <div className="hidden md:block md:col-span-1">
          <div className="sticky top-6 space-y-4">
            <WillStrengthMeter data={currentData} />
            <IntestacyRisk data={currentData} />
            <LegacyVisualizer data={currentData} />
          </div>
        </div>

      </div>
    </div>
  );
}
