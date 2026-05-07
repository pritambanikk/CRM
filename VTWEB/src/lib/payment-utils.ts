import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase-server";

interface LeadUpdateDetails {
  leadId: string;
  orderId: string;
  amount: number;
}

/**
 * Shared utility to update lead payment status in Supabase after a successful payment.
 * Maps Cashfree payment data → Supabase leads table fields.
 */
export async function updateLeadPaymentStatus({
  leadId,
  orderId,
  amount,
}: LeadUpdateDetails) {
  try {
    const { error } = await supabaseServer
      .from("leads")
      .update({
        payment_status: "partial",       // 'advance_paid' → 'partial' (schema: pending|partial|paid)
        payment_id: orderId,
        payment_amount: amount,
        mark_advance_paid: true,
        advance_amount: amount,
        status: "ADVANCE_PAID",          // 'paid_customer' → 'ADVANCE_PAID' (CRM status)
        updated_at: new Date().toISOString(),
      })
      .eq("id", leadId);

    if (error) {
      console.error("Supabase lead payment update failed:", error);
      return {
        success: false,
        error: "Supabase CRM update failed",
      };
    }

    return { success: true };
  } catch (error) {
    console.error("Supabase lead payment update exception:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Network error",
    };
  }
}

/**
 * Standard utility for consistent API responses across payment endpoints.
 */
export function createPaymentAPIResponse(
  success: boolean,
  message: string,
  data: any = {},
  status: number = 200
) {
  return NextResponse.json(
    {
      success,
      message,
      ...data,
    },
    { status }
  );
}
