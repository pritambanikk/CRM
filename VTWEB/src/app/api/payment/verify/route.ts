import { NextRequest, NextResponse } from "next/server";
import { CashfreeClient } from "@/lib/cashfree-client";
import { createPaymentAPIResponse } from "@/lib/payment-utils";

export async function POST(
  request: NextRequest
) {
  try {
    // Parse request body
    const body = await request.json();
    const { orderId } = body;

    // Validate required fields
    if (!orderId) {
      return createPaymentAPIResponse(false, "Order ID is required.", { error: "Missing required fields" }, 400);
    }

    // Verify payment from Cashfree
    const response = await CashfreeClient.PGFetchOrder(orderId);
    const orderDetails = response.data;

    // Check if payment is successful
    if (orderDetails.order_status !== "PAID") {
      return createPaymentAPIResponse(false, `Payment status is ${orderDetails.order_status}.`, {
        error: "Payment not completed",
        status: orderDetails.order_status
      }, 400);
    }

    // Extract lead ID from payment notes/tags
    const leadId = orderDetails.order_tags?.leadId;
    if (!leadId) {
      return createPaymentAPIResponse(false, "Lead ID not found in payment details.", { error: "Lead ID not found" }, 400);
    }

    // CRM update is now handled entirely by the Cashfree Webhook to prevent duplicate tickets.
    // We only return success to the frontend to complete the UI flow.
    return createPaymentAPIResponse(true, "Payment verified successfully!", { orderId, leadId }, 200);
  } catch (error: any) {
    console.error("Payment verification error:", error?.response?.data || error);

    return createPaymentAPIResponse(false, error instanceof Error ? error.message : "Something went wrong during payment verification.", {
      error: "Verification failed"
    }, 500);
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}

export async function PUT() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}

export async function DELETE() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
