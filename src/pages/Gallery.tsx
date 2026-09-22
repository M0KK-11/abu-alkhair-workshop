import { useMemo, useState } from 'react'
import WorkCard from '../components/WorkCard'
import { categories, works } from '../lib/works'

export default function Gallery() {
  const [active, setActive] = useState('الكل')

  const filtered = useMemo(
    () => (active === 'الكل' ? works : works.filter((w) => w.category === active)),
    [active],
  )

  return (
    <>
      {/* Page header */}
      <section className="wood-texture bg-charcoal pt-32 pb-16 lg:pt-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <span className="text-sm font-semibold tracking-widest text-brass">المعرض</span>
          <h1 className="mt-3 font-display text-4xl font-black text-ivory lg:text-5xl">
            معرض أعمالنا
          </h1>
          <p className="mt-4 max-w-xl text-ivory/70">
            مجموعة من القطع التي صنعناها على المقاس لعملائنا، بين الطاولات والخزائن
            والمطابخ والأبواب. تصفّح حسب التصنيف.
          </p>
        </div>
      </section>

      {/* Filters + grid */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => {
            const isActive = cat === active
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-brass text-ivory shadow-md shadow-brass/20'
                    : 'bg-oak/25 text-ink/70 hover:bg-oak/40'
                }`}
              >
                {cat}
              </button>
            )
          })}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((w) => (
            <WorkCard key={w.slug} work={w} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="py-16 text-center text-ink/50">لا توجد أعمال في هذا التصنيف بعد.</p>
        )}
      </section>
    </>
  )
}
