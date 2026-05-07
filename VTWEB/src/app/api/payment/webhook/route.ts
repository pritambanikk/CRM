import { NextRequest } from "next/server";
import { CashfreeClient } from "@/lib/cashfree-client";
import { updateLeadPaymentStatus, createPaymentAPIResponse } from "@/lib/payment-utils";

/**
 * Webhook handler for Cashfree payment events.
 * This ensures that even if a user closes the browser before the client-side 
 * verification completes, the lead status is updated in our CRM.
 */
export async function POST(request: NextRequest) {
  try {
    // 1. Get raw body for signature verification
    const rawBody = await request.text();
    
    // 2. Extract verification headers
    const signature = request.headers.get("x-webhook-signature");
    const timestamp = request.headers.get("x-webhook-timestamp");

    if (!signature || !timestamp) {
      console.warn("[Webhook] Missing verification headers");
      return createPaymentAPIResponse(false, "Missing verification headers", {}, 400);
    }

    // 3. Verify Signature
    try {
      // Cashfree Node SDK v5 utility - throws if invalid, returns event object if valid
      CashfreeClient.PGVerifyWebhookSignature(signature, rawBody, timestamp);
    } catch (err) {
      console.error("[Webhook] Signature verification failed:", err);
      return createPaymentAPIResponse(false, "Invalid signature", {}, 401);
    }

    // 4. Parse Payload
    const payload = JSON.parse(rawBody);
    const eventType = payload.type;
    const data = payload.data;

    console.log(`[Webhook] Processing event: ${eventType}`);

    // 5. Handle Successful Payment Events
    // Different versions use different event types: PAYMENT_SUCCESS_WEBHOOK, success payment, etc.
    const isSuccessEvent = 
      eventType === "PAYMENT_SUCCESS_WEBHOOK" || 
      eventType === "ORDER_PAID_WEBHOOK" ||
      eventType === "success payment" ||
      eventType === "SUCCESS_PAYMENT";

    if (isSuccessEvent) {
      const orderId = data?.order?.order_id || payload?.order?.order_id;
      const amount = data?.order?.order_amount || payload?.order?.order_amount;
      const leadId = data?.order?.order_tags?.leadId || payload?.order?.order_tags?.leadId;

      if (leadId && orderId) {
        console.log(`[Webhook] Success! Updating lead ${leadId} for order ${orderId}`);
        const updateResult = await updateLeadPaymentStatus({
          leadId,
          orderId,
          amount: amount || 0,
        });

        if (!updateResult.success) {
          console.error(`[Webhook] CRM update failed for lead ${leadId}:`, updateResult.error);
          // Still return 200 to Cashfree so they don't keep retrying if it's a permanent error
        }
      } else {
        console.warn("[Webhook] Missing leadId or orderId in payload", { leadId, orderId });
      }
    }

    // 6. Always acknowledge receipt to Cashfree with 200 OK
    return createPaymentAPIResponse(true, "Webhook processed successfully");

  } catch (error) {
    console.error("[Webhook] Critical Error:", error);
    // Returning 500 will cause Cashfree to retry the webhook
    return createPaymentAPIResponse(false, "Internal Server Error", {}, 500);
  }
}
