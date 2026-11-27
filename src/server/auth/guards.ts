import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export type Role = 'owner' | 'manager' | 'accounts' | 'sales'

export async function requireAuth() {
  const supabase = createClient()
  const { data: { user }, error } = await supabase.auth.getUser()
  
  if (error || !user) {
    redirect('/admin/login')
  }
  
  return user
}

export async function requireRole(roles: Role[]) {
  const user = await requireAuth()
  
  // Checks role from user metadata (to be updated when profiles table is live)
  const userRole = user.user_metadata?.role as Role
  
  if (!roles.includes(userRole)) {
    throw new Error('Unauthorized: Insufficient permissions')
  }
  
  return user
}
