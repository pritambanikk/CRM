"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
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
  Check,
  Download,
  FileText,
  Shield,
  Clock,
  Star,
  Zap,
  ChevronDown,
  ChevronUp,
  Loader2,
  BookOpen,
  Users,
  RefreshCw,
} from "lucide-react";
import { createPaymentRequest } from "@/lib/payment-config";
import { initializePayment } from "@/services/payment-service";
import { useAnalytics } from "@/hooks/use-analytics";

type BundleType = "hindi-english" | "marathi-only" | "hindi-english-marathi";

interface BundleOption {
  id: BundleType;
  name: string;
  price: number;
  originalPrice: number;
  description: string;
  features: string[];
  popular?: boolean;
}

interface BuyerDetails {
  name: string;
  whatsappNumber: string;
}

const bundleOptions: BundleOption[] = [
  {
    id: "hindi-english",
    name: "Hindi + English",
    price: 357,
    originalPrice: 1785,
    description: "3500+ drafts in Hindi and English",
    features: [
      "3500+ Legal Drafts",
      "Hindi & English versions",
      "Instant download",
      "Lifetime access",
      "Free updates",
    ],
  },
  {
    id: "marathi-only",
    name: "Marathi Only",
    price: 315,
    originalPrice: 1575,
    description: "3500+ drafts in Marathi",
    features: [
      "3500+ Legal Drafts",
      "Marathi language",
      "Instant download",
      "Lifetime access",
      "Free updates",
    ],
  },
  {
    id: "hindi-english-marathi",
    name: "Hindi + English + Marathi",
    price: 499,
    originalPrice: 2495,
    description: "Complete bundle in all three languages",
    features: [
      "3500+ Legal Drafts",
      "Hindi, English & Marathi",
      "Instant download",
      "Lifetime access",
      "Free updates",
      "Best value",
    ],
    popular: true,
  },
];

const legalCategories = [
  "Agreements", "Affidavits", "Bail Bonds", "Contracts", "Deeds",
  "Notices", "Petitions", "Wills", "Power of Attorney", "Rent Agreements",
  "Sale Deeds", "Partnership Deeds", "Employment Contracts", "NDA Agreements",
  "Service Agreements", "Loan Agreements", "Gift Deeds", "Lease Deeds",
  "Settlement Deeds", "Divorce Petitions", "Maintenance Petitions",
  "Property Disputes", "Consumer Complaints", "Insurance Claims",
  "Banking Documents", "Corporate Documents", "Tax Documents", "Family Law",
];

const testimonials = [
  {
    name: "Advocate Priya Sharma",
    role: "Senior Advocate, Delhi High Court",
    content: "This bundle saved me countless hours of drafting. The templates are comprehensive and professionally written. Best investment for any legal professional.",
    rating: 5,
    initials: "PS",
  },
  {
    name: "Rajesh Kumar",
    role: "Law Firm Partner, Mumbai",
    content: "Outstanding collection. Over 3500 templates covering every legal scenario. My entire team uses these drafts daily. Highly recommended.",
    rating: 5,
    initials: "RK",
  },
  {
    name: "Dr. Meera Patel",
    role: "Legal Consultant & Professor",
    content: "Perfect for law students and practitioners alike. The quality is exceptional and templates are updated regularly. Worth every rupee.",
    rating: 5,
    initials: "MP",
  },
  {
    name: "Adv. Sneha Joshi",
    role: "Junior Advocate, Kolhapur",
    content: "The Marathi drafts are especially helpful for my practice in Maharashtra. Excellent quality, impressive variety. Great value for money.",
    rating: 5,
    initials: "SJ",
  },
];

const faqs = [
  {
    question: "How many drafts are included in the bundle?",
    answer: "The bundle contains over 3500+ professionally drafted legal documents covering all major legal categories including agreements, contracts, notices, petitions, affidavits, deeds, and more.",
  },
  {
    question: "Are the drafts editable?",
    answer: "Yes, all drafts are provided in fully editable Microsoft Word format (.docx) so you can easily customize them — names, dates, clauses and any other details.",
  },
  {
    question: "How will I receive the drafts after payment?",
    answer: "You will receive an instant download link on WhatsApp immediately after successful payment. The link will be valid for lifetime access.",
  },
  {
    question: "What if I don't get the product after payment?",
    answer: "If you don't receive the download link within 5 minutes, please contact us on WhatsApp at +91 7047683995. We guarantee delivery or full refund.",
  },
  {
    question: "What is the refund policy?",
    answer: "We offer a 100% money-back guarantee if you're not satisfied with the quality of the drafts. Contact us within 7 days of purchase, no questions asked.",
  },
  {
    question: "What languages are available?",
    answer: "You can choose Hindi + English, Marathi Only, or the complete Hindi + English + Marathi bundle depending on your drafting needs.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-muted/40 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-foreground pr-4">{question}</span>
        {open
          ? <ChevronUp className="w-4 h-4 text-primary shrink-0" />
          : <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" />
        }
      </button>
      {open && (
        <div className="px-6 pb-5 text-muted-foreground leading-relaxed border-t border-border pt-4 text-sm">
          {answer}
        </div>
      )}
    </div>
  );
}

export function LegalDraftsBundleLanding() {
  const {
    logCTAClick, logEvent, logPaymentStarted,
    logPaymentCompleted, logPaymentFailed, logPaymentAbandoned,
  } = useAnalytics();

  const router = useRouter();

  const [selectedBundle, setSelectedBundle] = useState<BundleType>("hindi-english-marathi");
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [checkoutError, setCheckoutError] = useState<string | null>(null);
  const [buyerDetails, setBuyerDetails] = useState<BuyerDetails>({ name: "", whatsappNumber: "" });

  const handleBuyNow = (source?: string) => {
    const selected = bundleOptions.find((b) => b.id === selectedBundle);
    logCTAClick("buy_bundle", `Buy ${selected?.name || "Legal Drafts Bundle"}`,
      typeof window !== "undefined" ? window.location.pathname : undefined, "legal-drafts-bundle");
    logEvent("bundle_checkout_started", { bundle_type: selectedBundle, bundle_price: selected?.price, currency: "INR", source });
    setCheckoutError(null);
    setIsCheckoutOpen(true);
  };

  const cleanPhoneNumber = buyerDetails.whatsappNumber.replace(/\D/g, "");
  const normalizedPhoneNumber =
    cleanPhoneNumber.length === 12 && cleanPhoneNumber.startsWith("91")
      ? cleanPhoneNumber.slice(2) : cleanPhoneNumber;
  const isValidPhone =
    /^[6-9]\d{9}$/.test(cleanPhoneNumber) || /^91[6-9]\d{9}$/.test(cleanPhoneNumber);
  const isBuyerDetailsValid = buyerDetails.name.trim().length >= 2 && isValidPhone;

  const handleCheckoutPayment = async () => {
    const selected = bundleOptions.find((b) => b.id === selectedBundle);
    if (!selected || !isBuyerDetailsValid) {
      setCheckoutError("Please enter your name and a valid WhatsApp number.");
      return;
    }
    setIsProcessingPayment(true);
    setCheckoutError(null);

    const paymentRequest = createPaymentRequest(
      "legal-drafts-bundle",
      `bundle_${selectedBundle}_${Date.now()}`,
      buyerDetails.name.trim(),
      selectedBundle,
      {
        customerWhatsapp: normalizedPhoneNumber,
        productName: `3500+ Legal Drafts Templates Bundle - ${selected.name}`,
        bundleType: selectedBundle,
        orderNote: `Legal drafts bundle purchase: ${selected.name}; WhatsApp: ${normalizedPhoneNumber}`,
      }
    );

    if (!paymentRequest) {
      setCheckoutError("Unable to start checkout for this bundle.");
      setIsProcessingPayment(false);
      return;
    }

    logPaymentStarted("legal-drafts-bundle", paymentRequest.amount, "cashfree");
    logEvent("bundle_payment_started", { bundle_type: selectedBundle, amount: paymentRequest.amount, currency: "INR" });

    try {
      await initializePayment(
        paymentRequest,
        buyerDetails.name.trim(),
        normalizedPhoneNumber,
        (response) => {
          setIsProcessingPayment(false);
          logPaymentCompleted("legal-drafts-bundle", paymentRequest.amount, "cashfree", response?.orderId || response?.paymentId);
          logEvent("bundle_payment_success", { bundle_type: selectedBundle, amount: paymentRequest.amount, currency: "INR" });
          const orderId = response?.orderId || response?.paymentId || "";
          router.push(`/thank-you/legal-drafts?bundle=${selectedBundle}&orderId=${encodeURIComponent(orderId)}`);
        },
        (error) => {
          setCheckoutError(error || "Payment failed. Please try again.");
          setIsProcessingPayment(false);
          logPaymentFailed("legal-drafts-bundle", paymentRequest.amount, "cashfree", error);
        },
        () => {
          setIsProcessingPayment(false);
          logPaymentAbandoned("legal-drafts-bundle", paymentRequest.amount, "cashfree", "cashfree_modal_dismissed");
        }
      );
    } catch (error) {
      const message = error instanceof Error ? error.message : "Payment initialization failed.";
      setCheckoutError(message);
      setIsProcessingPayment(false);
      logPaymentFailed("legal-drafts-bundle", paymentRequest.amount, "cashfree", message);
    }
  };

  const selectedBundleData = bundleOptions.find((b) => b.id === selectedBundle);

  return (
    <div className="min-h-screen bg-background">

      {/* ── CHECKOUT DIALOG ── */}
      <Dialog open={isCheckoutOpen} onOpenChange={setIsCheckoutOpen}>
        <DialogContent className="w-[95vw] sm:max-w-md max-h-[90vh] overflow-y-auto rounded-2xl p-5 sm:p-6">
          <DialogHeader>
            <DialogTitle>Complete Your Purchase</DialogTitle>
            <DialogDescription>
              Enter your details and pay securely via Cashfree.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
              <div className="rounded-xl border bg-muted/50 p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-semibold text-foreground">{selectedBundleData?.name}</p>
                    <p className="text-sm text-muted-foreground mt-0.5">3500+ editable legal drafts · Instant access</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-2xl font-bold text-primary">₹{selectedBundleData?.price}</p>
                    <p className="text-xs text-muted-foreground line-through">₹{selectedBundleData?.originalPrice}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bundle-buyer-name">Full Name</Label>
                <Input
                  id="bundle-buyer-name"
                  value={buyerDetails.name}
                  onChange={(e) => setBuyerDetails((p) => ({ ...p, name: e.target.value }))}
                  placeholder="Your full name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bundle-buyer-whatsapp">WhatsApp Number</Label>
                <Input
                  id="bundle-buyer-whatsapp"
                  value={buyerDetails.whatsappNumber}
                  onChange={(e) => setBuyerDetails((p) => ({ ...p, whatsappNumber: e.target.value }))}
                  inputMode="tel"
                  placeholder="10-digit mobile number"
                />
              </div>

              {checkoutError && (
                <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">
                  {checkoutError}
                </div>
              )}

              <button
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3.5 rounded-xl font-bold text-base transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                disabled={!isBuyerDetailsValid || isProcessingPayment}
                onClick={handleCheckoutPayment}
              >
                {isProcessingPayment ? (
                  <><Loader2 className="w-4 h-4 animate-spin" />Processing...</>
                ) : (
                  `Pay ₹${selectedBundleData?.price} Securely`
                )}
              </button>

              <p className="text-center text-xs text-muted-foreground">
                Secured by Cashfree · UPI, Cards, Net Banking & Wallets accepted
              </p>
            </div>
        </DialogContent>
      </Dialog>

      {/* ══════════════════════════════════════════════
          HERO SECTION — clean, light, professional
      ══════════════════════════════════════════════ */}
      <section className="border-b border-border bg-background">
        <div className="container mx-auto px-6 md:px-8 pt-10 pb-14 md:pt-12 md:pb-20">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">

            {/* LEFT: Copy */}
            <div className="space-y-7">
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/25 px-4 py-1.5 rounded-full text-sm font-semibold">
                <BookOpen className="w-3.5 h-3.5" />
                3500+ Professional Legal Templates
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight tracking-tight">
                  Legal Drafts for Every Situation — Ready to Use
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A complete collection of editable legal drafts in Hindi, English and Marathi.
                  Used by lawyers, law students and businesses across India.
                </p>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-primary" />
                  10,000+ customers
                </span>
                <span className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  4.9 average rating
                </span>
                <span className="flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-green-600" />
                  7-day money-back guarantee
                </span>
              </div>

              {/* Feature list */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: FileText, label: "3500+ templates" },
                  { icon: Download, label: "Fully editable (.docx)" },
                  { icon: Zap, label: "Instant download" },
                  { icon: Clock, label: "Lifetime access" },
                  { icon: RefreshCw, label: "Free updates" },
                  { icon: Shield, label: "Secure payment" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2.5 text-sm text-foreground">
                    <div className="w-7 h-7 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <Icon className="w-3.5 h-3.5 text-primary" />
                    </div>
                    {label}
                  </div>
                ))}
              </div>

              {/* Languages badge row */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm text-muted-foreground">Available in:</span>
                {["Hindi", "English", "Marathi"].map((lang) => (
                  <span key={lang} className="bg-muted text-foreground text-xs font-medium px-3 py-1 rounded-full border border-border">
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* RIGHT: Pricing card */}
            <div className="bg-card border border-border rounded-2xl shadow-sm overflow-hidden">
              {/* Card header */}
              <div className="bg-muted/50 border-b border-border px-6 py-4 flex items-center justify-between">
                <div>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Selected Plan</p>
                  <p className="font-semibold text-foreground mt-0.5">{selectedBundleData?.name}</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-primary">₹{selectedBundleData?.price}</p>
                  <p className="text-xs text-muted-foreground line-through">₹{selectedBundleData?.originalPrice}</p>
                </div>
              </div>

              <div className="p-6 space-y-5">
                {/* Bundle options */}
                <div className="space-y-2.5">
                  {bundleOptions.map((bundle) => (
                    <label
                      key={bundle.id}
                      className={`flex items-center justify-between gap-4 p-3.5 rounded-xl border cursor-pointer transition-all ${
                        selectedBundle === bundle.id
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/40 bg-background"
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className={`w-4 h-4 rounded-full border-2 shrink-0 flex items-center justify-center ${
                          selectedBundle === bundle.id ? "border-primary" : "border-muted-foreground/40"
                        }`}>
                          {selectedBundle === bundle.id && (
                            <div className="w-2 h-2 bg-primary rounded-full" />
                          )}
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-sm text-foreground">{bundle.name}</span>
                            {bundle.popular && (
                              <span className="text-xs bg-primary/10 text-primary border border-primary/20 px-2 py-0.5 rounded-full font-medium">
                                Popular
                              </span>
                            )}
                          </div>
                          <span className="text-xs text-muted-foreground">{bundle.description}</span>
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="font-bold text-foreground">₹{bundle.price}</div>
                        <div className="text-xs text-muted-foreground line-through">₹{bundle.originalPrice}</div>
                      </div>
                      <input
                        type="radio"
                        className="sr-only"
                        checked={selectedBundle === bundle.id}
                        onChange={() => setSelectedBundle(bundle.id)}
                      />
                    </label>
                  ))}
                </div>

                {/* What's included summary */}
                <div className="space-y-2">
                  {selectedBundleData?.features.map((f) => (
                    <div key={f} className="flex items-center gap-2.5 text-sm text-foreground">
                      <Check className="w-4 h-4 text-green-500 shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button
                  onClick={() => handleBuyNow("hero")}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3.5 rounded-xl font-bold text-base transition-colors shadow-sm hover:shadow-md"
                >
                  Download Now — ₹{selectedBundleData?.price}
                </button>

                <p className="text-center text-xs text-muted-foreground">
                  Secure payment · Instant delivery on WhatsApp
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SOCIAL PROOF BAR
      ══════════════════════════════════════════════ */}
      <section className="border-b border-border bg-muted/40 py-8">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {[
              { num: "10,000+", label: "Customers" },
              { num: "3,500+", label: "Legal Templates" },
              { num: "4.9 / 5", label: "Average Rating" },
              { num: "3 Languages", label: "Hindi, English, Marathi" },
            ].map(({ num, label }) => (
              <div key={label} className="text-center">
                <div className="text-2xl font-bold text-foreground">{num}</div>
                <div className="text-sm text-muted-foreground mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          PRODUCT IMAGE
      ══════════════════════════════════════════════ */}
      <section className="py-10 bg-background">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative w-full rounded-2xl overflow-hidden border border-border shadow-sm">
              <Image
                src="/3500+ Legal Drafts.jpg"
                alt="3500+ Legal Drafts Templates Bundle — Preview"
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          HOW IT WORKS
      ══════════════════════════════════════════════ */}
      <section className="py-10 bg-background">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4 text-center">How it works</p>
            <div className="bg-muted/40 border border-border rounded-2xl divide-y divide-border overflow-hidden">
              {[
                { step: "1", title: "Choose your bundle", desc: "Hindi + English, Marathi, or all three" },
                { step: "2", title: "Pay securely", desc: "UPI, card or net banking via Cashfree" },
                { step: "3", title: "Download instantly", desc: "Link sent to your WhatsApp in minutes" },
              ].map(({ step, title, desc }) => (
                <div key={step} className="flex items-center gap-3 px-4 py-2.5">
                  <div className="w-5 h-5 bg-primary text-primary-foreground rounded flex items-center justify-center font-bold text-[11px] shrink-0">
                    {step}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-foreground text-sm leading-tight">{title}</p>
                    <p className="text-muted-foreground text-xs leading-tight mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          WHAT'S INSIDE
      ══════════════════════════════════════════════ */}
      <section className="py-12 md:py-16 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">What&apos;s inside the bundle</h2>
              <p className="text-muted-foreground mt-2">28+ categories, 3500+ drafts — all editable Word files</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
              {legalCategories.map((category) => (
                <div
                  key={category}
                  className="bg-background border border-border rounded-xl px-4 py-3 flex items-center gap-2.5 hover:border-primary/40 transition-colors"
                >
                  <FileText className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span className="text-sm text-foreground">{category}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          PRICING
      ══════════════════════════════════════════════ */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Choose your plan</h2>
              <p className="text-muted-foreground mt-2">One-time payment. Lifetime access. No subscription.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {bundleOptions.map((bundle) => (
                <div
                  key={bundle.id}
                  className={`relative rounded-2xl border-2 p-6 cursor-pointer transition-all hover:shadow-md ${
                    bundle.popular
                      ? "border-primary shadow-sm"
                      : "border-border"
                  }`}
                  onClick={() => setSelectedBundle(bundle.id)}
                >
                  <div className="mb-5">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-bold text-foreground">{bundle.name}</h3>
                      {bundle.popular && (
                        <span className="bg-primary text-primary-foreground text-[11px] font-semibold px-2.5 py-0.5 rounded-full whitespace-nowrap">
                          Most Popular
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{bundle.description}</p>
                    <div className="mt-4 flex items-end gap-2">
                      <span className="text-3xl font-bold text-foreground">₹{bundle.price}</span>
                      <span className="text-sm text-muted-foreground line-through mb-0.5">₹{bundle.originalPrice}</span>
                    </div>
                    <p className="text-xs text-green-600 font-medium mt-1">
                      Save ₹{bundle.originalPrice - bundle.price} ({Math.round((1 - bundle.price / bundle.originalPrice) * 100)}% off)
                    </p>
                  </div>
                  <div className="space-y-2.5 mb-6">
                    {bundle.features.map((f) => (
                      <div key={f} className="flex items-center gap-2 text-sm text-foreground">
                        <Check className="w-3.5 h-3.5 text-green-500 shrink-0" />
                        {f}
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedBundle(bundle.id);
                      handleBuyNow("pricing");
                    }}
                    className={`w-full py-3 rounded-xl font-semibold text-sm transition-colors ${
                      bundle.popular
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "bg-background text-foreground hover:bg-muted border border-border hover:border-primary/40"
                    }`}
                  >
                    Get this bundle
                  </button>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center gap-6 mt-8 flex-wrap text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-green-500" />7-day money-back guarantee</span>
              <span className="flex items-center gap-1.5"><Zap className="w-4 h-4 text-primary" />Instant delivery on WhatsApp</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-blue-500" />Lifetime access</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════════════ */}
      <section className="py-12 md:py-16 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">What our customers say</h2>
              <p className="text-muted-foreground mt-2">Used by advocates, law students and businesses across India</p>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-card border border-border rounded-2xl p-6">
                  <div className="flex items-center gap-0.5 mb-4">
                    {[...Array(t.rating)].map((_, si) => (
                      <Star key={si} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-foreground leading-relaxed text-sm mb-5">
                    &ldquo;{t.content}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xs font-bold shrink-0">
                      {t.initials}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-sm">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          GUARANTEES
      ══════════════════════════════════════════════ */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Our guarantees</h2>
              <p className="text-muted-foreground mt-2">We stand behind every purchase</p>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  icon: Zap,
                  title: "Instant delivery",
                  desc: "Download link sent to your WhatsApp within 5 minutes of payment. Delayed? Full refund.",
                  color: "bg-yellow-50 text-yellow-600 border-yellow-100",
                },
                {
                  icon: Shield,
                  title: "7-day refund",
                  desc: "Not satisfied with the quality? Get a full refund within 7 days, no questions asked.",
                  color: "bg-blue-50 text-blue-600 border-blue-100",
                },
                {
                  icon: RefreshCw,
                  title: "Free updates forever",
                  desc: "New templates are added regularly. All updates are included free with your purchase.",
                  color: "bg-green-50 text-green-600 border-green-100",
                },
              ].map(({ icon: Icon, title, desc, color }) => (
                <div key={title} className="border border-border rounded-2xl p-6 text-center">
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mx-auto mb-4 ${color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════════ */}
      <section className="py-12 md:py-16 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Frequently asked questions</h2>
            </div>
            <div className="space-y-2">
              {faqs.map((faq, i) => (
                <FAQItem key={i} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SEO CONTENT
      ══════════════════════════════════════════════ */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Legal Drafts, Agreement Formats and Templates for India
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                This legal drafts bundle is built for people who need practical, editable legal document formats without
                spending hours searching for scattered PDF samples. It brings together agreements, notices, affidavits,
                deeds, petitions, applications and business contracts in one organized collection.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">What are legal drafts?</h3>
                <p className="text-muted-foreground leading-relaxed text-sm mb-3">
                  Legal drafts are structured documents used to record rights, duties, claims, undertakings, notices
                  and transactions. A good legal draft gives you the right format, standard clauses and a clear starting
                  point that can be customized for a specific matter.
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Lawyers, law students, companies and consultants use legal drafting formats to save time, maintain
                  consistency and avoid missing important clauses while preparing documents.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">Why choose editable legal templates?</h3>
                <p className="text-muted-foreground leading-relaxed text-sm mb-3">
                  PDF samples are useful for reference, but editable Word templates are easier to adapt for client
                  names, dates, jurisdiction, payment terms, notice facts, property details and other case-specific
                  information.
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  This bundle focuses on ready-to-use formats that can support day-to-day drafting work across civil,
                  criminal, family, property, consumer, corporate and commercial matters.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-5">Popular agreement formats included</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  "Rent agreement format",
                  "Non-disclosure agreement format",
                  "Partnership agreement format",
                  "Employment agreement format",
                  "Service agreement format",
                  "Sale agreement format",
                  "Loan agreement format",
                  "Leave and license agreement format",
                  "Franchise agreement format",
                ].map((item) => (
                  <div key={item} className="rounded-xl border border-border p-3.5 flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                    <p className="text-sm text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Legal notice drafts",
                  desc: "Use legal notice formats for money recovery, cheque bounce, tenant disputes, consumer complaints, breach of contract, employment issues and property-related claims.",
                },
                {
                  title: "Petitions and applications",
                  desc: "The bundle includes formats for petitions, applications, affidavits, bail-related documents, maintenance matters, divorce matters and other court-focused drafting needs.",
                },
                {
                  title: "Hindi, English and Marathi",
                  desc: "Choose the language bundle you need, including Hindi legal drafts, English legal templates and Marathi legal documents for regional practice and client communication.",
                },
              ].map(({ title, desc }) => (
                <div key={title}>
                  <h3 className="font-bold text-foreground mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-border bg-muted/40 p-6 md:p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Who should use this legal drafts bundle?</h3>
              <div className="grid md:grid-cols-2 gap-6 text-sm text-muted-foreground">
                <p className="leading-relaxed">
                  Advocates and legal consultants can use the bundle as a drafting library for recurring client matters.
                  Law students can study real document structures and understand how legal drafting formats are organized
                  in practice.
                </p>
                <p className="leading-relaxed">
                  Businesses, HR teams, property owners, CAs and company secretaries can use the templates as a practical
                  starting point for agreements, notices, declarations and routine legal documentation.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-5">Legal drafting questions people ask</h3>
              <div className="space-y-5">
                {[
                  {
                    question: "What is the difference between a legal draft and a legal template?",
                    answer: "A legal draft is the document prepared for a specific matter. A legal template is a reusable format that gives you the structure and clauses to prepare that draft faster.",
                  },
                  {
                    question: "Can I use these legal drafts for client work?",
                    answer: "Yes. The templates are editable and can be customized for client-specific facts, but professional review is recommended before final use or filing.",
                  },
                  {
                    question: "Are Word formats better than legal drafting PDF files?",
                    answer: "Word formats are usually better for actual drafting because you can edit clauses, party details, dates, schedules and jurisdiction-specific language directly.",
                  },
                  {
                    question: "Does this bundle include agreement formats in Hindi and Marathi?",
                    answer: "Yes. You can choose Hindi + English, Marathi only, or the complete Hindi + English + Marathi bundle depending on your drafting needs.",
                  },
                ].map((faq) => (
                  <div key={faq.question} className="border-b border-border pb-5 last:border-b-0">
                    <h4 className="font-semibold text-foreground mb-2 text-sm">{faq.question}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════════════ */}
      <section className="py-12 md:py-16 bg-primary/5 border-t border-border">
        <div className="container mx-auto px-6 md:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Ready to save time on legal drafting?
            </h2>
            <p className="text-muted-foreground mb-8">
              Join 10,000+ legal professionals who rely on our templates for day-to-day practice.
            </p>
            <button
              onClick={() => handleBuyNow("final-cta")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-3.5 rounded-xl font-bold text-base transition-colors shadow-sm hover:shadow-md"
            >
              Download 3500+ Templates — ₹{selectedBundleData?.price}
            </button>
            <p className="text-sm text-muted-foreground mt-4">
              One-time payment · Instant download · 7-day refund policy
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          CONTACT + PAYMENT STRIP
      ══════════════════════════════════════════════ */}
      <section className="py-10 bg-background border-t border-border">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Have questions? We&apos;re here to help.</p>
              <a
                href="https://wa.me/917047683995"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-foreground hover:text-primary transition-colors"
              >
                +91 7047683995
              </a>
            </div>
            <div className="text-center md:text-right">
              <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wider font-medium">Secure payments via</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground flex-wrap justify-center md:justify-end">
                <span className="font-semibold text-foreground">Cashfree</span>
                <span>·</span>
                <span>UPI</span>
                <span>·</span>
                <span>Cards</span>
                <span>·</span>
                <span>Net Banking</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
