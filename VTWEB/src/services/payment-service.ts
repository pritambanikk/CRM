import {
  CashfreePaymentRequest,
  PaymentVerificationResponse,
} from "@/lib/payment-config";
import { load } from "@cashfreepayments/cashfree-js";

declare global {
  interface Window {
    Razorpay: {
      new(options: PaymentOptions): {
        open(): void;
      };
    };
  }
}

export interface PaymentOptions {
  paymentSessionId: string;
  onSuccess: (response: any) => void;
  onFailure: (error: any) => void;
}

export class PaymentService {
  private static readonly PAYMENT_VERIFY_URL = "/api/payment/verify";

  /**
   * Check if debug mode is enabled
   */
  private static isDebugMode(): boolean {
    if (typeof window === "undefined") return false;
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('debug') === 'vt-new';
  }

  /**
   * Mock payment initialization for debug mode
   */
  private static async mockInitializePayment(
    paymentRequest: CashfreePaymentRequest,
    customerName: string,
    customerPhone: string,
    onSuccess: (response: any) => void,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _onError: (error: string) => void,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _onDismiss?: () => void
  ): Promise<void> {
    console.log("🚧 DEBUG MODE: Mocking payment initialization", {
      paymentRequest,
      customerName,
      customerPhone
    });

    // Simulate a brief delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Mock successful payment response
    const mockResponse = {
      orderId: `debug_order_${Date.now()}`,
    };

    console.log("🚧 DEBUG MODE: Simulating successful payment", mockResponse);
    onSuccess(mockResponse);
  }

  /**
   * Mock payment verification for debug mode
   */
  private static async mockVerifyPayment(paymentResponse: any): Promise<PaymentVerificationResponse> {
    console.log("🚧 DEBUG MODE: Mocking payment verification", paymentResponse);

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));

    return {
      success: true,
      message: "Payment verified successfully (DEBUG MODE)"
    };
  }

  /**
   * Load Cashfree script dynamically
   */
  static async loadCashfreeScript(): Promise<any> {
    const environment = process.env.NEXT_PUBLIC_CASHFREE_ENVIRONMENT === "PRODUCTION" 
      ? "production" 
      : "sandbox";
      
    return await load({
      mode: environment
    });
  }

  /**
   * Initialize Cashfree payment
   */
  static async initializePayment(
    paymentRequest: CashfreePaymentRequest,
    customerName: string,
    customerPhone: string,
    onSuccess: (response: any) => void,
    onError: (error: string) => void,
    onDismiss?: () => void
  ): Promise<void> {
    // Check for debug mode
    if (PaymentService.isDebugMode()) {
      return PaymentService.mockInitializePayment(
        paymentRequest,
        customerName,
        customerPhone,
        onSuccess,
        onError,
        onDismiss
      );
    }

    try {
      // Load Cashfree script
      const cashfree = await PaymentService.loadCashfreeScript();

      const formModal = document.querySelector('[role="dialog"]');

      // Create an order on the server to get paymentSessionId
      let paymentSessionId: string | undefined;
      let orderId: string | undefined;

      const orderResponse = await fetch("/api/payment/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: paymentRequest.amount,
          currency: paymentRequest.currency,
          receipt: paymentRequest.receipt,
          notes: paymentRequest.notes,
          customer_phone: customerPhone,
          customer_name: customerName,
          // Could pass email if available
        }),
      });

      if (orderResponse.ok) {
        const order = await orderResponse.json();
        paymentSessionId = order?.payment_session_id;
        orderId = order?.order_id;
      } else {
        throw new Error("Unable to create payment session");
      }

      if (!paymentSessionId) {
        throw new Error("Payment session ID not found");
      }

      const checkoutOptions = {
        paymentSessionId: paymentSessionId,
        redirectTarget: "_modal",
      };

      // Hide our dialog BEFORE Cashfree opens so its modal renders into a
      // clean body stacking context with no z-index / overflow conflicts.
      if (formModal) {
        (formModal as HTMLElement).style.visibility = "hidden";
        // Also hide the backdrop overlay (previous sibling rendered by Radix)
        const backdrop = formModal.previousElementSibling as HTMLElement | null;
        if (backdrop) backdrop.style.visibility = "hidden";
      }

      cashfree.checkout(checkoutOptions).then(async (result: any) => {
        if (result.error) {
          // Restore dialog visibility on error/cancel so user can retry
          if (formModal) {
            (formModal as HTMLElement).style.visibility = "";
            const backdrop = formModal.previousElementSibling as HTMLElement | null;
            if (backdrop) backdrop.style.visibility = "";
          }
          if (result.error.message === "User cancelled payment") {
             onDismiss?.();
          } else {
             onError(result.error.message || "Payment Failed");
          }
        }
        if (result.paymentDetails) {
            // Payment completed — verify then redirect. Dialog stays hidden.
            const verificationResult =
              await PaymentService.verifyPaymentWithRetry({ orderId: orderId! }, 4);

            if (verificationResult.success) {
              onSuccess(result.paymentDetails);
            } else {
              // Restore on verification failure so user sees the error
              if (formModal) {
                (formModal as HTMLElement).style.visibility = "";
                const backdrop = formModal.previousElementSibling as HTMLElement | null;
                if (backdrop) backdrop.style.visibility = "";
              }
              onError(
                verificationResult.error || "Payment verification failed"
              );
            }
        }
        if (result.redirect) {
            console.log("Payment will be redirected");
        }
      });
    } catch (error) {
      // Restore dialog visibility on unexpected errors
      const formModalOnError = document.querySelector('[role="dialog"]') as HTMLElement | null;
      if (formModalOnError) {
        formModalOnError.style.visibility = "";
        const backdrop = formModalOnError.previousElementSibling as HTMLElement | null;
        if (backdrop) backdrop.style.visibility = "";
      }

      console.error("Payment initialization error:", error);
      onError(
        error instanceof Error ? error.message : "Payment initialization failed"
      );
    }
  }

  /**
   * Verify payment with server
   */
  static async verifyPayment(paymentResponse: {
    orderId: string;
  }): Promise<PaymentVerificationResponse> {
    // Check for debug mode
    if (PaymentService.isDebugMode()) {
      return PaymentService.mockVerifyPayment(paymentResponse);
    }

    try {
      const response = await fetch(this.PAYMENT_VERIFY_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          orderId: paymentResponse.orderId,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.message || `HTTP error! status: ${response.status}`
        );
      }

      const result: PaymentVerificationResponse = await response.json();
      return result;
    } catch (error) {
      console.error("Payment verification error:", error);

      if (error instanceof TypeError && error.message.includes("fetch")) {
        return {
          success: false,
          error: "Network error",
          message: "Please check your internet connection and try again.",
        };
      }

      if (error instanceof Error) {
        return {
          success: false,
          error: "Verification failed",
          message: error.message,
        };
      }

      return {
        success: false,
        error: "Unknown error",
        message: "Payment verification failed. Please contact support.",
      };
    }
  }

  /**
   * Retry payment verification with exponential backoff
   */
  static async verifyPaymentWithRetry(
    paymentResponse: {
      orderId: string;
    },
    maxRetries: number = 3
  ): Promise<PaymentVerificationResponse> {
    let lastError: PaymentVerificationResponse | null = null;

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      const result = await PaymentService.verifyPayment(paymentResponse);

      if (result.success) {
        return result;
      }

      lastError = result;

      // Don't retry on validation errors
      if (result.error === "Validation failed") {
        break;
      }

      // Wait before retrying (exponential backoff)
      if (attempt < maxRetries) {
        const delay = Math.pow(2, attempt) * 1000; // 2s, 4s, 8s
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }

    return (
      lastError || {
        success: false,
        error: "Max retries exceeded",
        message: "Payment verification failed after multiple attempts.",
      }
    );
  }
}

// Export convenience functions that properly reference the static methods
export const initializePayment =
  PaymentService.initializePayment.bind(PaymentService);
export const verifyPayment = PaymentService.verifyPayment.bind(PaymentService);
export const verifyPaymentWithRetry =
  PaymentService.verifyPaymentWithRetry.bind(PaymentService);
