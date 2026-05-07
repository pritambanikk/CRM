import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.SUPABASE_URL as string;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY as string;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  throw new Error('Missing Supabase env vars: SUPABASE_URL and SUPABASE_ANON_KEY must be set');
}

// Server-side only client — never import this in client components.
// No NEXT_PUBLIC_ prefix = key stays on the server, never sent to the browser.
export const supabaseServer = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: { persistSession: false },
});
