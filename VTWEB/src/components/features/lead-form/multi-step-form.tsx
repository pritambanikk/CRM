"use client";

import { motion, AnimatePresence } from "framer-motion";
import { PersonalDetailsStep } from "./steps/personal-details-step";
import { PaymentStep } from "./steps/payment-step";
import { WhatsNextStep } from "./steps/whats-next-step";
import { stepVariants } from "@/lib/animations";
import { useFormContext } from "@/contexts/form-context";
import { useEffect } from "react";
import { LeadFormData } from "@/types/lead-form";

interface MultiStepFormProps {
  setIsStepValid?: (valid: boolean) => void;
}

export const MultiStepForm = ({ setIsStepValid }: MultiStepFormProps) => {
  const { currentStep, formData, updateFormData, nextStep, submitForm } = useFormContext();

  // Set step validity for steps that don't have form validation
  useEffect(() => {
    if (setIsStepValid) {
      // Only step 1 (personal details) should be validated via child
      // For non-validated steps, default to true so buttons are enabled
      setIsStepValid(currentStep !== 1 ? true : false);
    }
  }, [currentStep, setIsStepValid]);

  const handleStepComplete = async (stepData: Record<string, unknown>) => {
    // We update the local form data state
    updateFormData(stepData);

    // If we're on step 1, we also need to immediately submit the form
    // The issue is that submitForm() in the context reads from the React state `formData`,
    // which won't include stepData yet because state updates are asynchronous.
    if (currentStep === 1) {
       // We pass the fresh stepData directly to submitForm to guarantee it's not lost
       // by React state batching delays.
       await submitForm(stepData as Partial<LeadFormData>);
    } else {
       nextStep();
    }
  };

  const handleFormDataUpdate = (stepData: Record<string, unknown>) => {
    updateFormData(stepData);
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <PersonalDetailsStep
            initialData={formData}
            onNext={handleStepComplete}
            onDataUpdate={handleFormDataUpdate}
            setIsStepValid={setIsStepValid}
          />
        );
      case 2:
        return <PaymentStep formData={formData} />;
      case 3:
        return (
          <WhatsNextStep
            formData={formData}
            leadId={formData.leadId as string}
            submissionSuccess={formData.submissionSuccess as boolean}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto h-full flex flex-col min-h-0">
      <div className="flex-1 overflow-y-auto touch-manipulation px-2 sm:px-4 form-scroll-container min-h-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            variants={stepVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="w-full px-2"
          >
            {renderCurrentStep()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
