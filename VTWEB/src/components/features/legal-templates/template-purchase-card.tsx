"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  CheckCircle2,
  Download,
  Loader2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { createPaymentRequest } from "@/lib/payment-config";
import { initializePayment } from "@/services/payment-service";
import { useAnalytics } from "@/hooks/use-analytics";

interface TemplatePurchaseCardProps {
  templateSlug: string;
  documentName: string;
  /** Display price in ₹ */
  price?: number;
  /** Optional strikethrough comparison price */
  originalPrice?: number;
  /** Compact variant — shown inline mid-page */
  compact?: boolean;
}

interface BuyerDetails {
  name: string;
  whatsappNumber: string;
}

export function TemplatePurchaseCard({
  templateSlug,
  documentName,
  price = 49,
  originalPrice = 199,
  compact = false,
}: TemplatePurchaseCardProps) {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [buyerDetails, setBuyerDetails] = useState<BuyerDetails>({
    name: "",
    whatsappNumber: "",
  });
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [checkoutError, setCheckoutError] = useState<string | null>(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const {
    logCTAClick,
    logEvent,
    logPaymentStarted,
    logPaymentCompleted,
    logPaymentFailed,
    logPaymentAbandoned,
  } = useAnalytics();

  const cleanPhoneNumber = buyerDetails.whatsappNumber.replace(/\D/g, "");
  const normalizedPhoneNumber =
    cleanPhoneNumber.length === 12 && cleanPhoneNumber.startsWith("91")
      ? cleanPhoneNumber.slice(2)
      : cleanPhoneNumber;
  const isValidPhone =
    /^[6-9]\d{9}$/.test(cleanPhoneNumber) ||
    /^91[6-9]\d{9}$/.test(cleanPhoneNumber);
  const isBuyerDetailsValid =
    buyerDetails.name.trim().length >= 2 && isValidPhone;

  const openCheckout = () => {
    logCTAClick(
      "buy_template",
      `Buy ${documentName}`,
      typeof window !== "undefined" ? window.location.pathname : undefined,
      "legal-template"
    );
    logEvent("template_checkout_started", {
      template_slug: templateSlug,
      template_name: documentName,
      price,
      currency: "INR",
    });
    setCheckoutError(null);
    setPaymentSuccess(false);
    setIsCheckoutOpen(true);
  };

  const handlePay = async () => {
    if (!isBuyerDetailsValid) {
      setCheckoutError("Please enter your name and a valid WhatsApp number.");
      return;
    }

    setIsProcessingPayment(true);
    setCheckoutError(null);

    const paymentRequest = createPaymentRequest(
      "legal-template",
      `template_${templateSlug}_${Date.now()}`,
      buyerDetails.name.trim(),
      undefined,
      {
        customerWhatsapp: normalizedPhoneNumber,
        productName: documentName,
        orderNote: `Legal template purchase: ${documentName} (${templateSlug}); WhatsApp: ${normalizedPhoneNumber}`,
      }
    );

    if (!paymentRequest) {
      const errorMsg = "Payment configuration error. Please check the browser console and contact support.";
      console.error(`Failed to create payment request for template: ${templateSlug}`, {
        templateSlug,
        documentName,
        price,
      });
      setCheckoutError(errorMsg);
      setIsProcessingPayment(false);
      return;
    }

    logPaymentStarted("legal-template", paymentRequest.amount, "cashfree");

    try {
      await initializePayment(
        paymentRequest,
        buyerDetails.name.trim(),
        normalizedPhoneNumber,
        (response) => {
          setPaymentSuccess(true);
          setIsProcessingPayment(false);
          logPaymentCompleted(
            "legal-template",
            paymentRequest.amount,
            "cashfree",
            response?.orderId || response?.paymentId
          );
          logEvent("template_payment_success", {
            template_slug: templateSlug,
            amount: paymentRequest.amount,
          });
        },
        (error) => {
          setCheckoutError(error || "Payment failed. Please try again.");
          setIsProcessingPayment(false);
          logPaymentFailed(
            "legal-template",
            paymentRequest.amount,
            "cashfree",
            error
          );
        },
        () => {
          setIsProcessingPayment(false);
          logPaymentAbandoned(
            "legal-template",
            paymentRequest.amount,
            "cashfree",
            "cashfree_modal_dismissed"
          );
        }
      );
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Payment initialization failed.";
      setCheckoutError(message);
      setIsProcessingPayment(false);
      logPaymentFailed(
        "legal-template",
        paymentRequest.amount,
        "cashfree",
        message
      );
    }
  };

  // Inline compact pill
  if (compact) {
    return (
      <>
        <Button
          onClick={openCheckout}
          className="bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          <Download className="mr-2 h-4 w-4" />
          Download for ₹{price}
        </Button>
        <CheckoutDialog
          isOpen={isCheckoutOpen}
          onOpenChange={setIsCheckoutOpen}
          documentName={documentName}
          price={price}
          buyerDetails={buyerDetails}
          setBuyerDetails={setBuyerDetails}
          isBuyerDetailsValid={isBuyerDetailsValid}
          isProcessingPayment={isProcessingPayment}
          checkoutError={checkoutError}
          paymentSuccess={paymentSuccess}
          onPay={handlePay}
        />
      </>
    );
  }

  // Full pricing card
  return (
    <>
      <div className="rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-primary/5 via-background to-primary/5 p-6 md:p-8 shadow-sm">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-3 flex-1">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              Lawyer-Drafted, Editable Word Format
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-foreground">
              {documentName}
            </h3>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              {[
                "Editable .docx — open in Word, Google Docs, or Pages",
                "All clauses pre-drafted, only fill in your details",
                "Includes notes on stamp duty & registration",
                "Instant download after payment + WhatsApp copy",
              ].map((line) => (
                <li key={line} className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center gap-3 md:items-end">
            <div className="flex items-baseline gap-2">
              <span className="text-4xl md:text-5xl font-bold text-primary">
                ₹{price}
              </span>
              {originalPrice && originalPrice > price ? (
                <span className="text-lg text-muted-foreground line-through">
                  ₹{originalPrice}
                </span>
              ) : null}
            </div>
            <Button
              size="lg"
              onClick={openCheckout}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-semibold shadow-lg"
            >
              <Download className="mr-2 h-5 w-5" />
              Get Instant Download
            </Button>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <ShieldCheck className="h-3.5 w-3.5" />
              Secure payment via Cashfree
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4">
          <p className="text-sm text-amber-900">
            <strong>Need many templates?</strong> Get all{" "}
            <strong>3500+ legal drafts</strong> for just{" "}
            <strong>₹499</strong> — that&rsquo;s ₹0.14 per template.{" "}
            <Link
              href="/3500-legal-drafts-templates-bundle"
              className="font-semibold text-amber-900 underline underline-offset-2 hover:text-amber-700"
            >
              See the bundle →
            </Link>
          </p>
        </div>
      </div>

      <CheckoutDialog
        isOpen={isCheckoutOpen}
        onOpenChange={setIsCheckoutOpen}
        documentName={documentName}
        price={price}
        buyerDetails={buyerDetails}
        setBuyerDetails={setBuyerDetails}
        isBuyerDetailsValid={isBuyerDetailsValid}
        isProcessingPayment={isProcessingPayment}
        checkoutError={checkoutError}
        paymentSuccess={paymentSuccess}
        onPay={handlePay}
      />
    </>
  );
}

interface CheckoutDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  documentName: string;
  price: number;
  buyerDetails: BuyerDetails;
  setBuyerDetails: React.Dispatch<React.SetStateAction<BuyerDetails>>;
  isBuyerDetailsValid: boolean;
  isProcessingPayment: boolean;
  checkoutError: string | null;
  paymentSuccess: boolean;
  onPay: () => void;
}

function CheckoutDialog({
  isOpen,
  onOpenChange,
  documentName,
  price,
  buyerDetails,
  setBuyerDetails,
  isBuyerDetailsValid,
  isProcessingPayment,
  checkoutError,
  paymentSuccess,
  onPay,
}: CheckoutDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="w-[95vw] sm:max-w-md max-h-[90vh] overflow-y-auto rounded-xl p-4 sm:p-6">
        <DialogHeader>
          <DialogTitle>Complete Your Purchase</DialogTitle>
          <DialogDescription>
            Enter your details, then pay ₹{price} securely with Cashfree. The
            editable Word file will be sent to your WhatsApp.
          </DialogDescription>
        </DialogHeader>

        {paymentSuccess ? (
          <div className="space-y-4">
            <div className="rounded-lg border border-green-200 bg-green-50 p-4 text-green-800">
              Payment successful. Your editable Word file will be sent to your
              WhatsApp number within 5 minutes. If it does not arrive, please
              WhatsApp us at +91 9347388278.
            </div>
            <Button
              className="w-full bg-green-600 hover:bg-green-700"
              onClick={() => onOpenChange(false)}
            >
              Done
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="rounded-lg border bg-secondary/50 p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-foreground text-sm">
                    {documentName}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Editable .docx · Instant WhatsApp delivery
                  </p>
                </div>
                <p className="text-2xl font-bold text-primary shrink-0">
                  ₹{price}
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="template-buyer-name">Name</Label>
              <Input
                id="template-buyer-name"
                value={buyerDetails.name}
                onChange={(e) =>
                  setBuyerDetails((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }))
                }
                placeholder="Your full name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="template-buyer-whatsapp">WhatsApp number</Label>
              <Input
                id="template-buyer-whatsapp"
                value={buyerDetails.whatsappNumber}
                onChange={(e) =>
                  setBuyerDetails((prev) => ({
                    ...prev,
                    whatsappNumber: e.target.value,
                  }))
                }
                inputMode="tel"
                placeholder="10-digit mobile number"
              />
            </div>

            {checkoutError && (
              <div className="rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-700">
                {checkoutError}
              </div>
            )}

            <Button
              className="w-full bg-primary hover:bg-primary/90"
              disabled={!isBuyerDetailsValid || isProcessingPayment}
              onClick={onPay}
            >
              {isProcessingPayment ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Opening Cashfree…
                </>
              ) : (
                `Pay ₹${price} Securely`
              )}
            </Button>

            <p className="text-center text-xs text-muted-foreground">
              UPI, cards, net banking and wallets accepted. No subscription.
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
