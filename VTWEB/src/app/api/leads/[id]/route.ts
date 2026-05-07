import { NextRequest, NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabase-server';

interface LeadUpdateRequest {
  payment_status?: 'pending' | 'paid' | 'failed';
  payment_id?: string;
  payment_amount?: number;
  status?: 'new' | 'processing' | 'completed';
  [key: string]: string | number | boolean | undefined;
}

interface LeadUpdateResponse {
  success: boolean;
  leadId?: string;
  error?: string;
  message?: string;
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
): Promise<NextResponse<LeadUpdateResponse>> {
  const { id } = await params;

  try {
    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Lead ID required', message: 'Lead ID is required for update.' },
        { status: 400 }
      );
    }

    const updateData: LeadUpdateRequest = await request.json();

    if (!updateData || Object.keys(updateData).length === 0) {
      return NextResponse.json(
        { success: false, error: 'No update data provided', message: 'Please provide data to update.' },
        { status: 400 }
      );
    }

    // Strip unknown fields that don't exist in the Supabase schema
    const { status: _status, ...rest } = updateData;

    const dataToUpdate = {
      ...rest,
      updated_at: new Date().toISOString(),
    };

    console.log(`Updating lead ${id} in Supabase:`, dataToUpdate);

    // No .select() after update — the anon role has no SELECT policy on leads,
    // and Postgres applies SELECT RLS to RETURNING clauses, causing 42501.
    const { error } = await supabaseServer
      .from('leads')
      .update(dataToUpdate)
      .eq('id', id);

    if (error) {
      console.error('Supabase update error:', error);

      return NextResponse.json(
        { success: false, error: 'Database update failed', message: 'Failed to update lead in database.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, leadId: id, message: 'Lead updated successfully!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Lead update API error:', error);

    if (error instanceof Error) {
      return NextResponse.json(
        { success: false, error: 'Update failed', message: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: false, error: 'Internal server error', message: 'Something went wrong during lead update.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}

export async function POST() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}

export async function DELETE() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}
