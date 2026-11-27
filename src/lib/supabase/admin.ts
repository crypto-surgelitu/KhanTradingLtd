import { createClient } from '@supabase/supabase-js'
import type { Database } from '@/types/database'

// Service role client - SERVER ONLY. NEVER EXPOSE TO CLIENT.
export const adminClient = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
)
