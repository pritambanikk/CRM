"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useFormContext } from "@/contexts/form-context";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Question {
  id: string;
  text: string;
  helper?: string;
  weight: number; // out of 100
}

interface Category {
  label: string;
  value: string;
  questions: Question[];
}

// ─── Category & Question Data ─────────────────────────────────────────────────

const CATEGORIES: Category[] = [
  {
    label: "Cheque Bounce",
    value: "cheque-bounce",
    questions: [
      {
        id: "q1",
        text: "Do you have the original cheque and the 'Return Memo' from the bank?",
        helper: "The bank memo proving the cheque bounced is essential.",
        weight: 40,
      },
      {
        id: "q2",
        text: "Has it been less than 30 days since the cheque was dishonoured?",
        helper: "Under Section 138 NI Act, notice must be sent within 30 days.",
        weight: 30,
      },
      {
        id: "q3",
        text: "Was the cheque issued in discharge of a legally enforceable debt or liability?",
        weight: 20,
      },
      {
        id: "q4",
        text: "Do you know the current address of the person who issued the cheque?",
        weight: 10,
      },
    ],
  },
  {
    label: "Money Recovery",
    value: "money-recovery",
    questions: [
      {
        id: "q1",
        text: "Do you have a written agreement, invoice, or acknowledgment of the debt?",
        helper: "Written proof significantly strengthens your case.",
        weight: 35,
      },
      {
        id: "q2",
        text: "Is the amount owed more than ₹10,000?",
        weight: 20,
      },
      {
        id: "q3",
        text: "Was the last payment or transaction within the last 3 years?",
        helper: "Limitation period for recovery suits is typically 3 years.",
        weight: 30,
      },
      {
        id: "q4",
        text: "Do you have the contact details (address/phone) of the person who owes you?",
        weight: 15,
      },
    ],
  },
  {
    label: "Divorce",
    value: "divorce",
    questions: [
      {
        id: "q1",
        text: "Have you been married for at least 1 year?",
        helper: "Most grounds for divorce require a minimum 1-year marriage.",
        weight: 25,
      },
      {
        id: "q2",
        text: "Have you and your spouse been living separately?",
        weight: 30,
      },
      {
        id: "q3",
        text: "Do you have documented grounds (cruelty, desertion, adultery, etc.)?",
        helper: "Evidence of grounds is critical for a strong case.",
        weight: 30,
      },
      {
        id: "q4",
        text: "Is the jurisdiction of filing clear (where you or spouse currently reside)?",
        weight: 15,
      },
    ],
  },
  {
    label: "Tenant Dispute",
    value: "tenant-dispute",
    questions: [
      {
        id: "q1",
        text: "Do you have a written rental/lease agreement with the tenant?",
        weight: 35,
      },
      {
        id: "q2",
        text: "Are there unpaid rent arrears of more than 2 months?",
        weight: 25,
      },
      {
        id: "q3",
        text: "Have you already issued a verbal or informal eviction notice?",
        weight: 20,
      },
      {
        id: "q4",
        text: "Is the property jurisdiction in your current city or state?",
        weight: 20,
      },
    ],
  },
  {
    label: "Landlord Dispute",
    value: "landlord-dispute",
    questions: [
      {
        id: "q1",
        text: "Do you have rent payment receipts or bank transfer proof?",
        weight: 30,
      },
      {
        id: "q2",
        text: "Has the landlord withheld your security deposit without valid reason?",
        weight: 30,
      },
      {
        id: "q3",
        text: "Have you requested repairs in writing that were ignored?",
        weight: 25,
      },
      {
        id: "q4",
        text: "Are you currently living (or did you live) in the disputed premises?",
        weight: 15,
      },
    ],
  },
  {
    label: "Employer Dispute",
    value: "employer-dispute",
    questions: [
      {
        id: "q1",
        text: "Do you have a copy of your employment contract or offer letter?",
        weight: 30,
      },
      {
        id: "q2",
        text: "Have your dues (salary, bonus, PF) remained unpaid for more than 30 days?",
        weight: 30,
      },
      {
        id: "q3",
        text: "Did you raise the grievance internally with HR before leaving?",
        helper: "Prior internal escalation strengthens legal claims.",
        weight: 20,
      },
      {
        id: "q4",
        text: "Were you terminated (not resigned voluntarily)?",
        helper: "Wrongful termination claims are stronger than voluntary exit disputes.",
        weight: 20,
      },
    ],
  },
  {
    label: "Employee Dispute",
    value: "employee-dispute",
    questions: [
      {
        id: "q1",
        text: "Do you have documented proof of the employee's misconduct?",
        weight: 35,
      },
      {
        id: "q2",
        text: "Was a proper HR/disciplinary process followed before termination?",
        weight: 25,
      },
      {
        id: "q3",
        text: "Was the termination notice served with proper notice pay or garden leave?",
        weight: 25,
      },
      {
        id: "q4",
        text: "Did the incident occur within the last 60 days?",
        weight: 15,
      },
    ],
  },
  {
    label: "Maintenance",
    value: "maintenance",
    questions: [
      {
        id: "q1",
        text: "Is your marriage registered or solemnized under a recognized personal law?",
        helper: "Registration strengthens enforceability of maintenance claims.",
        weight: 40,
      },
      {
        id: "q2",
        text: "Is your spouse financially capable of paying maintenance?",
        weight: 30,
      },
      {
        id: "q3",
        text: "Are you aware of the correct family court for filing in your jurisdiction?",
        weight: 30,
      },
    ],
  },
  {
    label: "Consumer Complaint",
    value: "consumer-complaint",
    questions: [
      {
        id: "q1",
        text: "Do you have proof of purchase (invoice, receipt, or order confirmation)?",
        weight: 30,
      },
      {
        id: "q2",
        text: "Did the defect or service failure occur within the warranty or service period?",
        weight: 35,
      },
      {
        id: "q3",
        text: "Have you already complained to the seller or brand without resolution?",
        helper: "Prior complaint attempts are often required before legal notice.",
        weight: 20,
      },
      {
        id: "q4",
        text: "Can you estimate the monetary loss or damage caused?",
        weight: 15,
      },
    ],
  },
  {
    label: "Property Dispute",
    value: "property-dispute",
    questions: [
      {
        id: "q1",
        text: "Do you have clear ownership documents (sale deed, registry, title)?",
        weight: 40,
      },
      {
        id: "q2",
        text: "Is there active encroachment or illegal occupation of your property?",
        weight: 30,
      },
      {
        id: "q3",
        text: "Have you filed a police complaint regarding the trespass?",
        weight: 15,
      },
      {
        id: "q4",
        text: "Do you have a survey report or boundary proof for the disputed area?",
        weight: 15,
      },
    ],
  },
  {
    label: "Defamation",
    value: "defamation",
    questions: [
      {
        id: "q1",
        text: "Was the defamatory statement made publicly (written, spoken, or online)?",
        weight: 35,
      },
      {
        id: "q2",
        text: "Did it cause measurable damage to your reputation, career, or business?",
        weight: 35,
      },
      {
        id: "q3",
        text: "Can you prove the statement was false?",
        helper: "Truth is an absolute defence, so falsity must be demonstrable.",
        weight: 20,
      },
      {
        id: "q4",
        text: "Did the incident occur within the last 1 year?",
        helper: "Limitation period for defamation suits is 1 year.",
        weight: 10,
      },
    ],
  },
  {
    label: "Loan Default",
    value: "loan-default",
    questions: [
      {
        id: "q1",
        text: "Do you have a signed loan agreement or promissory note?",
        weight: 35,
      },
      {
        id: "q2",
        text: "Have EMIs/repayments been unpaid for more than 90 days?",
        weight: 30,
      },
      {
        id: "q3",
        text: "Was any collateral or security offered against the loan?",
        weight: 20,
      },
      {
        id: "q4",
        text: "Do you have a credit/CIBIL trail or bank transaction record for the loan?",
        weight: 15,
      },
    ],
  },
  {
    label: "Other",
    value: "other",
    questions: [
      {
        id: "q1",
        text: "Is the issue documented in writing (emails, messages, contracts)?",
        weight: 30,
      },
      {
        id: "q2",
        text: "Can you clearly identify the other party (name, address, company)?",
        weight: 30,
      },
      {
        id: "q3",
        text: "Did the issue occur within the last 3 years?",
        helper: "Many civil disputes have a 3-year limitation period.",
        weight: 25,
      },
      {
        id: "q4",
        text: "Is there a clear monetary loss or legal harm you can demonstrate?",
        weight: 15,
      },
    ],
  },
];

// ─── Score helpers ─────────────────────────────────────────────────────────────

function computeScore(
  questions: Question[],
  answers: Record<string, boolean | null>
): number {
  return questions.reduce((acc, q) => {
    return acc + (answers[q.id] === true ? q.weight : 0);
  }, 0);
}

function scoreLabel(score: number): {
  label: string;
  color: string;
  ringColor: string;
  bg: string;
  message: string;
} {
  if (score >= 70)
    return {
      label: "Strong Case",
      color: "text-emerald-600",
      ringColor: "#10b981",
      bg: "bg-emerald-50",
      message:
        "Your facts align well with the legal requirements. A formal notice is very likely to yield results or prompt a quick settlement.",
    };
  if (score >= 40)
    return {
      label: "Moderate Case",
      color: "text-amber-600",
      ringColor: "#f59e0b",
      bg: "bg-amber-50",
      message:
        "Your case has merit but may need additional evidence or documentation. A lawyer can identify gaps and strengthen your position.",
    };
  return {
    label: "Needs Review",
    color: "text-red-600",
    ringColor: "#ef4444",
    bg: "bg-red-50",
    message:
      "There are some gaps in the documentation or legal grounds. Speaking with a lawyer is strongly recommended before proceeding.",
  };
}

// ─── Circular Gauge SVG ────────────────────────────────────────────────────────

function CircularGauge({
  score,
  color,
}: {
  score: number;
  color: string;
}) {
  const radius = 52;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  return (
    <svg width="140" height="140" className="rotate-[-90deg]">
      <circle
        cx="70"
        cy="70"
        r={radius}
        fill="none"
        stroke="#e5e7eb"
        strokeWidth="12"
      />
      <circle
        cx="70"
        cy="70"
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth="12"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        style={{ transition: "stroke-dashoffset 1s ease" }}
      />
    </svg>
  );
}

// ─── Progress Bar ─────────────────────────────────────────────────────────────

function StepProgressBar({
  current,
  total,
}: {
  current: number;
  total: number;
}) {
  return (
    <div className="flex items-center gap-1.5 mb-6">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className="h-1.5 flex-1 rounded-full transition-all duration-300"
          style={{
            background:
              i < current
                ? "var(--primary)"
                : i === current
                ? "linear-gradient(90deg, var(--primary) 40%, #e5e7eb 40%)"
                : "#e5e7eb",
          }}
        />
      ))}
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────

export function LegalSuccessPredictor() {
  const { openForm } = useFormContext();

  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0); // 0 = category select, 1..n = questions, last = result
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );
  const [answers, setAnswers] = useState<Record<string, boolean | null>>({});
  const [score, setScore] = useState<number | null>(null);

  // total steps = 1 (category) + n questions
  const totalSteps = selectedCategory ? 1 + selectedCategory.questions.length : 1;
  // which question index are we on (step 1 → question[0], etc.)
  const questionIndex = step - 1;
  const currentQuestion =
    selectedCategory && questionIndex >= 0
      ? selectedCategory.questions[questionIndex]
      : null;
  const isResultStep =
    selectedCategory !== null && step === selectedCategory.questions.length + 1;

  function handleOpen() {
    setOpen(true);
    resetState();
  }

  function resetState() {
    setStep(0);
    setSelectedCategory(null);
    setAnswers({});
    setScore(null);
  }

  function handleCategorySelect(value: string) {
    const cat = CATEGORIES.find((c) => c.value === value);
    if (cat) {
      setSelectedCategory(cat);
      setAnswers({});
      setStep(1);
    }
  }

  function handleAnswer(answer: boolean) {
    if (!currentQuestion || !selectedCategory) return;
    const newAnswers = { ...answers, [currentQuestion.id]: answer };
    setAnswers(newAnswers);

    const nextStep = step + 1;
    if (nextStep > selectedCategory.questions.length) {
      // compute score and go to result
      const s = computeScore(selectedCategory.questions, newAnswers);
      setScore(s);
      setStep(nextStep);
    } else {
      setStep(nextStep);
    }
  }

  function handleBack() {
    if (step === 0) return;
    if (step === 1) {
      setStep(0);
      setSelectedCategory(null);
      setAnswers({});
    } else {
      setStep(step - 1);
    }
  }

  function handleGetLawyer() {
    setOpen(false);
    setTimeout(() => openForm("legal-notice"), 300);
  }

  const scoreInfo = score !== null ? scoreLabel(score) : null;

  return (
    <>
      {/* ── CTA Section ── */}
      <div className="flex flex-col items-center gap-3 py-8 px-4">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-1">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Free Case Strength Check
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground">
          Is your case strong enough to send a notice?
        </h2>
        <p className="text-muted-foreground text-sm text-center max-w-sm">
          Answer 4–5 quick questions and get an instant legal success probability score — completely free.
        </p>
        <button
          onClick={handleOpen}
          className="mt-2 group relative inline-flex items-center gap-2.5 bg-primary text-primary-foreground font-semibold text-base px-7 py-3.5 rounded-xl shadow-md hover:shadow-lg hover:bg-primary/90 transition-all duration-200"
        >
          <svg
            className="w-5 h-5 shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
            />
          </svg>
          Check Your Case Success Rate
          <span className="ml-1 group-hover:translate-x-0.5 transition-transform duration-150">→</span>
        </button>
        <p className="text-xs text-muted-foreground">
          🔒 No sign-up required · Takes less than 60 seconds
        </p>
      </div>

      {/* ── Modal ── */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className="sm:max-w-md w-full p-0 overflow-hidden rounded-2xl"
          style={{ maxHeight: "90dvh", overflowY: "auto" }}
          aria-describedby="predictor-description"
        >
          <DialogTitle className="sr-only">Legal Case Success Rate Predictor</DialogTitle>
          <p id="predictor-description" className="sr-only">
            Answer a few questions to assess the strength of your legal case.
          </p>

          {/* Header */}
          <div className="px-6 pt-6 pb-4 border-b border-border">
            <div className="flex items-center justify-between mb-4">
              {step > 0 && !isResultStep ? (
                <button
                  onClick={handleBack}
                  className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
                >
                  ← Back
                </button>
              ) : (
                <div />
              )}
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                {isResultStep
                  ? "Your Result"
                  : step === 0
                  ? "Step 1 of 2"
                  : `Step ${step + 1} of ${totalSteps}`}
              </span>
              <div className="w-12" />
            </div>

            {!isResultStep && (
              <StepProgressBar
                current={isResultStep ? totalSteps : step}
                total={totalSteps}
              />
            )}
          </div>

          {/* Body */}
          <div className="px-6 py-6">

            {/* ── Step 0: Category Select ── */}
            {step === 0 && (
              <div className="space-y-5">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    What type of legal issue do you have?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Select your category to get relevant legal questions.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.value}
                      onClick={() => handleCategorySelect(cat.value)}
                      className="text-left text-sm font-medium px-4 py-3 rounded-xl border border-border hover:border-primary hover:text-primary hover:bg-accent transition-all duration-150"
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* ── Steps 1–n: Questions ── */}
            {currentQuestion && !isResultStep && (
              <div className="space-y-6">
                <div>
                  <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">
                    {selectedCategory?.label}
                  </p>
                  <h3 className="text-lg font-bold text-foreground leading-snug">
                    {currentQuestion.text}
                  </h3>
                  {currentQuestion.helper && (
                    <p className="text-sm text-muted-foreground mt-2 flex gap-1.5">
                      <svg
                        className="w-4 h-4 shrink-0 mt-px text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                        />
                      </svg>
                      {currentQuestion.helper}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => handleAnswer(true)}
                    className="flex items-center justify-center gap-2 py-4 rounded-xl border-2 border-border font-semibold text-foreground hover:border-emerald-500 hover:text-emerald-600 hover:bg-emerald-50 transition-all duration-150"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    Yes
                  </button>
                  <button
                    onClick={() => handleAnswer(false)}
                    className="flex items-center justify-center gap-2 py-4 rounded-xl border-2 border-border font-semibold text-foreground hover:border-red-400 hover:text-red-500 hover:bg-red-50 transition-all duration-150"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    No
                  </button>
                </div>

                {/* mini progress dots */}
                <div className="flex justify-center gap-1.5">
                  {selectedCategory?.questions.map((_, i) => (
                    <div
                      key={i}
                      className="w-1.5 h-1.5 rounded-full transition-all duration-200"
                      style={{
                        background:
                          i < questionIndex
                            ? "var(--primary)"
                            : i === questionIndex
                            ? "var(--primary)"
                            : "#e5e7eb",
                        opacity: i === questionIndex ? 1 : 0.5,
                        transform: i === questionIndex ? "scale(1.4)" : "scale(1)",
                      }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* ── Result Screen ── */}
            {isResultStep && scoreInfo && score !== null && (
              <div className="space-y-6 text-center">
                <div>
                  <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-1">
                    {selectedCategory?.label}
                  </p>
                  <h3 className="text-xl font-bold text-foreground">
                    Your Case Success Rate
                  </h3>
                </div>

                {/* Gauge */}
                <div className="flex flex-col items-center gap-1 relative">
                  <CircularGauge score={score} color={scoreInfo.ringColor} />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span
                      className="text-4xl font-extrabold"
                      style={{ color: scoreInfo.ringColor }}
                    >
                      {score}%
                    </span>
                  </div>
                </div>

                <div
                  className={`rounded-xl px-4 py-3 ${scoreInfo.bg} text-left`}
                >
                  <p
                    className={`text-sm font-bold mb-1 ${scoreInfo.color}`}
                  >
                    {scoreInfo.label}
                  </p>
                  <p className="text-sm text-foreground/80">
                    {scoreInfo.message}
                  </p>
                </div>

                <div className="space-y-3">
                  <Button
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 rounded-xl text-base"
                    onClick={handleGetLawyer}
                  >
                    Get a Lawyer to Review Your Case →
                  </Button>
                  <button
                    className="text-sm text-muted-foreground hover:text-foreground underline underline-offset-4 transition-colors"
                    onClick={() => {
                      resetState();
                    }}
                  >
                    Start over with a different category
                  </button>
                </div>

                <p className="text-xs text-muted-foreground">
                  🔒 This is an indicative assessment based on disclosed facts. It does not constitute legal advice.
                </p>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
