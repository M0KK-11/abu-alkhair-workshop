import { createClient } from '@supabase/supabase-js'

const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL ||
  import.meta.env.NEXT_PUBLIC_SUPABASE_URL ||
  'https://deaackxmnahwacrqbjjn.supabase.co'

const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  import.meta.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRlYWFja3htbmFod2FjcnFiampuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk5NzM4MDksImV4cCI6MjEwNTU0OTgwOX0.Hi7VNw4oVVQ5j39_p94d4QScwtnimV2YlLS3U0CM3rU'

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey)

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface OrderSubmission {
  customer_name: string
  phone: string
  email?: string
  item_type: string
  preferred_timber?: string
  notes?: string
  sketch_file_url?: string
}

/**
 * Inserts a consultation/order request directly into the `public.orders` table
 */
export async function sendOrderToSupabase(payload: OrderSubmission) {
  // Always back up to localStorage so client submissions are never lost
  try {
    if (typeof window !== 'undefined') {
      const stored = JSON.parse(localStorage.getItem('abualkhair_orders') || '[]')
      stored.push({ ...payload, submitted_at: new Date().toISOString() })
      localStorage.setItem('abualkhair_orders', JSON.stringify(stored))
    }
  } catch {
    // Ignore storage issues in restricted browsers
  }

  try {
    const { data, error } = await supabase
      .from('orders')
      .insert([
        {
          customer_name: payload.customer_name,
          phone: payload.phone,
          email: payload.email || null,
          item_type: payload.item_type,
          preferred_timber: payload.preferred_timber || 'ترك الخيار للورشة',
          material: payload.preferred_timber || 'خشب طبيعي',
          notes: payload.notes || null,
          sketch_file_url: payload.sketch_file_url || null,
        },
      ])

    if (error) {
      console.warn('Orders table notice:', error.message)
      return { success: false, error: error.message }
    }

    return { success: true, data }
  } catch (err: any) {
    console.error('Unexpected Supabase error:', err)
    return { success: false, error: err?.message || String(err) }
  }
}

/**
 * Backward-compatible helper for consultation requests
 */
export async function sendConsultationToSupabase(payload: {
  full_name: string
  phone: string
  email?: string
  project_type: string
  preferred_timber?: string
  project_notes?: string
  sketch_file_url?: string
}) {
  return sendOrderToSupabase({
    customer_name: payload.full_name,
    phone: payload.phone,
    email: payload.email,
    item_type: payload.project_type,
    preferred_timber: payload.preferred_timber,
    notes: payload.project_notes,
    sketch_file_url: payload.sketch_file_url,
  })
}

/**
 * Fetch works from Supabase with categories and images
 */
export async function fetchWorksFromSupabase() {
  try {
    const { data, error } = await supabase
      .from('works')
      .select('*, categories(*), work_images(*)')
      .order('created_at', { ascending: false })

    if (error) {
      console.warn('Could not fetch works from Supabase:', error.message)
      return null
    }

    return data
  } catch (err) {
    console.error('Fetch works error:', err)
    return null
  }
}

/**
 * Fetch single work by slug from Supabase
 */
export async function fetchWorkBySlugFromSupabase(slug: string) {
  try {
    const { data, error } = await supabase
      .from('works')
      .select('*, categories(*), work_images(*)')
      .eq('slug', slug)
      .single()

    if (error) {
      console.warn('Could not fetch work by slug from Supabase:', error.message)
      return null
    }

    return data
  } catch (err) {
    console.error('Fetch work by slug error:', err)
    return null
  }
}

/**
 * Fetch categories from Supabase
 */
export async function fetchCategoriesFromSupabase() {
  try {
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .order('display_order', { ascending: true })

    if (error) {
      console.warn('Could not fetch categories from Supabase:', error.message)
      return null
    }

    return data
  } catch (err) {
    console.error('Fetch categories error:', err)
    return null
  }
}

