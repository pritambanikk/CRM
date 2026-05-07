import { NextRequest, NextResponse } from "next/server";
import { CashfreeClient } from "@/lib/cashfree-client";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { amount, currency, receipt, notes, customer_phone, customer_email, customer_name } = body || {};

    if (
      typeof amount !== "number" ||
      !currency
    ) {
      return NextResponse.json(
        {
          error: "Invalid request",
          message: "amount and currency are required",
        },
        { status: 400 }
      );
    }

    const orderId = `order_${Date.now()}_${Math.random().toString(36).substring(7)}`;

    const host = request.headers.get("host") || "vakiltech.in";
    const protocol = host.includes("localhost") ? "http" : "https";
    
    // Check for both common environment variable names
    let appUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.NEXT_PUBLIC_APP_URL || `${protocol}://${host}`;
    
    // Clean up trailing slash if present
    if (appUrl.endsWith("/")) {
      appUrl = appUrl.slice(0, -1);
    }

    const req = {
      order_amount: amount / 100, // Cashfree takes rupees, Razorpay took paise
      order_currency: currency,
      order_id: orderId,
      customer_details: {
        customer_id: `cust_${Math.random().toString(36).substring(7)}`,
        customer_phone: customer_phone || "9999999999",
        customer_name: customer_name || "Guest",
        customer_email: customer_email || "guest@example.com"
      },
      order_meta: {
        return_url: `${appUrl}/payment-status?order_id={order_id}`
      },
      order_note: notes?.orderNote || receipt,
      order_tags: {
        leadId: notes?.leadId || "unknown",
        service: notes?.service || "unknown",
        productName: notes?.productName || "unknown",
        bundleType: notes?.bundleType || "unknown",
        customerName: notes?.customerName || customer_name || "Guest",
        customerWhatsapp: notes?.customerWhatsapp || customer_phone || "unknown"
      }
    };

    const response = await CashfreeClient.PGCreateOrder(req);
    
    // Return the response data which includes payment_session_id
    return NextResponse.json(response.data, { status: 201 });
  } catch (error: any) {
    const errorData = error?.response?.data || error;
    console.error("Order creation error:", errorData);
    
    return NextResponse.json(
      {
        error: "Order creation failed",
        message: errorData?.message || "Unable to create Cashfree order",
        details: errorData
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
