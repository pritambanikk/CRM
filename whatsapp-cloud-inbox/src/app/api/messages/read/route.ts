import { NextRequest, NextResponse } from 'next/server';
import { whatsappClient, PHONE_NUMBER_ID } from '@/lib/whatsapp-client';

export async function POST(req: NextRequest) {
  try {
    const { messageId } = await req.json();

    if (!messageId) {
      return NextResponse.json({ error: 'messageId is required' }, { status: 400 });
    }

    const result = await whatsappClient.messages.markRead({
      phoneNumberId: PHONE_NUMBER_ID,
      messageId
    });

    return NextResponse.json({ success: true, result });
  } catch (error: unknown) {
    console.error('Error marking message as read:', error);
    const message = error instanceof Error ? error.message : 'Failed to mark message as read';
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}
