import {
  fetchWorksFromSupabase,
  fetchWorkBySlugFromSupabase,
  fetchCategoriesFromSupabase,
} from './supabase'

export type WorkImageItem = {
  id: string
  work_id: string
  image_url: string
  title?: string
  sort_order?: number
  badge?: string
}

export type Work = {
  id: string
  slug: string
  title: string
  category: string
  categoryId?: string
  summary: string
  description: string
  material: string
  duration: string
  finish: string
  image: string
  images: WorkImageItem[]
  dimensions?: string
  warranty?: string
  special_badge?: string
  reference_code?: string
  project_context?: string
  approx_price?: number
  is_featured?: boolean
  is_wide?: boolean
  created_at?: string
}

export function mapSupabaseWork(raw: any): Work {
  const images: WorkImageItem[] = (raw.work_images || []).sort(
    (a: any, b: any) => (a.sort_order || 0) - (b.sort_order || 0)
  )
  const primaryImage =
    images.length > 0
      ? images[0].image_url
      : raw.image_url ||
        'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=1200&q=80'

  return {
    id: raw.id,
    slug: raw.slug || raw.id,
    title: raw.title || 'عمل خشبي مخصص',
    category: raw.categories?.name || 'أعمال خشبية',
    categoryId: raw.category_id,
    summary: raw.description ? raw.description.slice(0, 160) : raw.title || '',
    description: raw.description || '',
    material: raw.material || 'خشب طبيعي صلب',
    duration: raw.execution_duration || 'حسب الطلب',
    finish: raw.finish_type || 'زيت طبيعي ألماني معتمد',
    image: primaryImage,
    images: images,
    dimensions: raw.dimensions || '',
    warranty: raw.warranty_period || '',
    special_badge: raw.special_badge || '',
    reference_code: raw.reference_code || '',
    project_context: raw.project_context || '',
    approx_price: raw.approx_price,
    is_featured: !!raw.is_featured,
    is_wide: !!raw.is_wide,
    created_at: raw.created_at,
  }
}

export async function fetchWorks(): Promise<Work[]> {
  const rawWorks = await fetchWorksFromSupabase()
  if (!rawWorks) return []
  return rawWorks.map(mapSupabaseWork)
}

export async function fetchWorkBySlug(slug: string): Promise<Work | null> {
  const rawWork = await fetchWorkBySlugFromSupabase(slug)
  if (!rawWork) return null
  return mapSupabaseWork(rawWork)
}

export async function fetchCategories(): Promise<{ id: string; name: string }[]> {
  const rawCategories = await fetchCategoriesFromSupabase()
  if (!rawCategories) return []
  return rawCategories.map((c: any) => ({ id: c.id, name: c.name }))
}

// Synchronous empty works array for compatibility
export const works: Work[] = []
export const categories: string[] = ['الكل']

export function getWork(slug: string) {
  return works.find((w) => w.slug === slug)
}
