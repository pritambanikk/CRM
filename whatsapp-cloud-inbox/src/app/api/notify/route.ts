import { NextResponse } from 'next/server';
import { whatsappClient, PHONE_NUMBER_ID } from '@/lib/whatsapp-client';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

// Handle CORS pre-flight from the CRM frontend
export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS_HEADERS });
}

/**
 * POST /api/notify
 * Called by the CRM after a ticket is created / lawyer is assigned.
 * Body: { phone: string, message: string }
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { phone, message } = body as { phone?: string; message?: string };

    if (!phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: phone, message' },
        { status: 400, headers: CORS_HEADERS }
      );
    }

    const result = await whatsappClient.messages.sendText({
      phoneNumberId: PHONE_NUMBER_ID,
      to: phone,
      body: message,
    });

    return NextResponse.json(result, { headers: CORS_HEADERS });
  } catch (error) {
    console.error('[notify] Error sending notification:', error);
    return NextResponse.json(
      { error: 'Failed to send notification' },
      { status: 500, headers: CORS_HEADERS }
    );
  }
}
