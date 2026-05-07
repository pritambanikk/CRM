import { NextRequest, NextResponse } from 'next/server';
import { leadFormSchema } from '@/lib/validators/lead-form';
import { validatePhoneNumber } from '@/lib/validators/phone-validation';
import { countryCodes } from '@/data/indian-cities';
import { supabaseServer } from '@/lib/supabase-server';
import { z } from 'zod';
import { randomUUID } from 'crypto';

interface LeadSubmissionResponse {
  success: boolean;
  leadId?: string;
  customId?: string;
  error?: string;
  message?: string;
}

function generateCustomId(name: string, phoneNumber: string): string {
  const firstName = name.split(' ')[0].toLowerCase();
  const phoneDigits = phoneNumber.replace(/\D/g, '');
  const phonePart = phoneDigits.slice(-4);
  return `${firstName}-${phonePart}`;
}

const leadInsertSchema = z.object({
  name: z.string().min(2).max(255),
  location: z.string().min(3).max(255),
  whatsapp_number: z.string().refine((phoneNumber) => {
    if (!phoneNumber.startsWith('+')) return false;
    const phoneDigits = phoneNumber.replace(/\D/g, '');
    if (phoneDigits.length < 7 || phoneDigits.length > 15) return false;
    const country = countryCodes.find(c => phoneNumber.startsWith(c.dialCode));
    if (!country) return false;
    const numberPart = phoneNumber.replace(country.dialCode, '');
    const numberDigits = numberPart.replace(/\D/g, '');
    const validation = validatePhoneNumber(numberDigits, country);
    return validation.isValid;
  }, { message: 'Please enter a valid international phone number' }),
  service: z.enum(['legal-notice', 'consultation', 'document-drafting', 'corporate-retainer']),
  description: z.string().max(1000).optional().nullable(),
  payment_status: z.literal('pending'),
  status: z.literal('new'),
  custom_id: z.string().min(1).max(50),
});

export async function POST(request: NextRequest): Promise<NextResponse<LeadSubmissionResponse>> {
  try {
    const body = await request.json();
    console.log('Received lead submission:', JSON.stringify(body, null, 2));

    const validatedData = leadFormSchema.parse(body);

    const customId = generateCustomId(validatedData.name, validatedData.whatsappNumber);
    // Generate ID server-side so we don't need a RETURNING/SELECT after insert.
    // The anon role has no SELECT policy on leads (by design), and Postgres checks
    // SELECT RLS even for the RETURNING clause of an INSERT, causing a 42501 error.
    const leadId = randomUUID();

    // Map website status ('new') → CRM status ('NEW_LEAD')
    const payload = {
      id: leadId,
      name: validatedData.name,
      location: validatedData.location,
      whatsapp_number: validatedData.whatsappNumber,
      service: validatedData.service,
      description: validatedData.description || validatedData.caseDescription || 'None provided',
      payment_status: 'pending' as const,
      status: 'NEW_LEAD' as const,
      custom_id: customId,
      conversion_source: 'website' as const,
    };

    console.log('Inserting lead into Supabase:', JSON.stringify(payload, null, 2));

    // No .select() after insert — avoids RETURNING which requires a SELECT policy.
    const { error } = await supabaseServer
      .from('leads')
      .insert([payload]);

    if (error) {
      console.error('Supabase insert error:', error);

      // Duplicate detection (unique constraint violation)
      if (error.code === '23505') {
        return NextResponse.json(
          {
            success: false,
            error: 'Duplicate lead',
            message: 'A ticket already exists for this service. We will reach out to you soon!',
          },
          { status: 409 }
        );
      }

      return NextResponse.json(
        {
          success: false,
          error: 'Failed to save lead',
          message: 'Please try again or contact support if the problem persists.',
        },
        { status: 500 }
      );
    }

    console.log('Lead saved successfully, id:', leadId);

    return NextResponse.json(
      {
        success: true,
        leadId,
        customId,
        message: 'Lead submitted successfully!',
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('API route error:', error);

    if (error instanceof z.ZodError) {
      const fieldErrors = error.issues.map((err: z.ZodIssue) => ({
        field: err.path.join('.'),
        message: err.message,
      }));

      const phoneError = fieldErrors.find(
        (err: { field: string; message: string }) => err.field === 'whatsapp_number'
      );

      return NextResponse.json(
        {
          success: false,
          error: 'Validation failed',
          message: phoneError ? phoneError.message : 'Please check your form data and try again.',
          details: fieldErrors,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error',
        message: 'Something went wrong. Please try again later.',
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}

export async function PUT() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}

export async function DELETE() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}
