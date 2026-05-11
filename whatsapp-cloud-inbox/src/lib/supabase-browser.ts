import { createClient } from '@supabase/supabase-js';

// Browser-side client — uses NEXT_PUBLIC_ vars (safe to expose)
export const supabaseBrowser = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);
