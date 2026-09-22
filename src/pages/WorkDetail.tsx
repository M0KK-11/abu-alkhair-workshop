import { Link, useParams } from 'react-router'
import WorkCard from '../components/WorkCard'
import { getWork, works } from '../lib/works'
import { IconArrowRight, IconLeaf, IconClock, IconChisel } from '../lib/icons'

export default function WorkDetail() {
  const { slug } = useParams()
  const work = slug ? getWork(slug) : undefined

  if (!work) {
    return (
      <section className="mx-auto max-w-3xl px-6 pt-40 pb-24 text-center">
        <h1 className="font-display text-3xl font-extrabold text-ink">العمل غير موجود</h1>
        <Link to="/gallery" className="mt-6 inline-block font-semibold text-brass">
          العودة إلى المعرض
        </Link>
      </section>
    )
  }

  const badges = [
    { icon: IconLeaf, label: 'الخامة', value: work.material },
    { icon: IconClock, label: 'مدة التنفيذ', value: work.duration },
    { icon: IconChisel, label: 'التشطيب', value: work.finish },
  ]

  const related = works.filter((w) => w.category === work.category && w.slug !== work.slug).slice(0, 3)

  return (
    <>
      <div className="pt-28 lg:pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Link
            to="/gallery"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-ink/60 transition-colors hover:text-brass"
          >
            <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            العودة إلى المعرض
          </Link>
        </div>
      </div>

      {/* Big image */}
      <section className="mx-auto mt-6 max-w-7xl px-6 lg:px-10">
        <div className="overflow-hidden rounded-card border border-oak/20 bg-ivory-deep shadow-lg shadow-charcoal/10">
          <img
            src={work.image.replace('w=1200&h=900', 'w=1600&h=1000')}
            alt={work.title}
            className="aspect-[16/10] w-full object-cover"
          />
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.9fr]">
          <div>
            <span className="text-sm font-semibold tracking-widest text-brass">{work.category}</span>
            <h1 className="mt-2 font-display text-3xl font-extrabold text-ink lg:text-4xl">
              {work.title}
            </h1>
            <p className="mt-6 text-base leading-8 text-ink/70">{work.description}</p>
            <p className="mt-4 text-base leading-8 text-ink/70">
              يمكننا تنفيذ قطعة مشابهة بأبعاد ونوع خشب وتشطيب يناسب مساحتك تماماً. تواصل
              معنا لبدء التصميم.
            </p>
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-card border border-oak/25 bg-white/60 p-6">
              <h3 className="font-display text-lg font-bold text-ink">تفاصيل القطعة</h3>
              <ul className="mt-5 space-y-4">
                {badges.map((b) => (
                  <li key={b.label} className="flex items-center gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-oak/20 text-brass">
                      <b.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-xs text-ink/50">{b.label}</div>
                      <div className="font-semibold text-ink">{b.value}</div>
                    </div>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="mt-7 flex items-center justify-center gap-2 rounded-full bg-brass px-6 py-3.5 font-semibold text-ivory shadow-md shadow-brass/20 transition-all hover:bg-brass-bright"
              >
                اطلب عمل مشابه
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-ivory-deep/60 py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <h2 className="font-display text-2xl font-extrabold text-ink">أعمال مشابهة</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((w) => (
                <WorkCard key={w.slug} work={w} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
