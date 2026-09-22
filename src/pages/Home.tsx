import { Link } from 'react-router'
import WorkCard from '../components/WorkCard'
import { works } from '../lib/works'
import { IconArrowLeft, IconChisel, IconLeaf, IconRuler, IconClock } from '../lib/icons'

const heroImg =
  'https://images.unsplash.com/photo-1497219055242-93359eeed651?w=1400&h=1600&fit=crop&auto=format'

const stats = [
  { value: '+٢٥', label: 'عاماً من الخبرة' },
  { value: '+٤٨٠', label: 'قطعة مصنوعة' },
  { value: '٪١٠٠', label: 'صناعة يدوية' },
]

const values = [
  {
    icon: IconChisel,
    title: 'حرفة يدوية أصيلة',
    text: 'كل قطعة تُصنع باليد بعناية، من اختيار الخشب حتى اللمسة الأخيرة.',
  },
  {
    icon: IconRuler,
    title: 'تصميم على المقاس',
    text: 'نصمم القطعة لتناسب مساحتك وذوقك تماماً، لا قوالب جاهزة.',
  },
  {
    icon: IconLeaf,
    title: 'خامات طبيعية',
    text: 'خشب صلب مختار وزيوت طبيعية تُبرز جمال العروق وتدوم طويلاً.',
  },
  {
    icon: IconClock,
    title: 'يدوم لأجيال',
    text: 'نبني وصلات متينة وتشطيبات تحمي القطعة لتبقى معك سنوات طويلة.',
  },
]

export default function Home() {
  const featured = works.slice(0, 6)

  return (
    <>
      {/* Hero */}
      <section className="wood-texture relative overflow-hidden bg-charcoal pt-32 pb-20 lg:pt-40 lg:pb-28">
        {/* brass geometric accent */}
        <div className="pointer-events-none absolute -left-32 top-1/4 h-80 w-80 rounded-full border border-brass/20" />
        <div className="pointer-events-none absolute -left-16 top-1/3 h-56 w-56 rounded-full border border-brass/15" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
          <div className="animate-rise">
            <span className="inline-flex items-center gap-2 rounded-full border border-oak/25 px-4 py-1.5 text-xs font-medium tracking-widest text-oak">
              نجارة يدوية فاخرة · منذ ٢٠٠١
            </span>
            <h1 className="mt-6 font-display text-4xl font-black leading-[1.15] text-ivory sm:text-5xl lg:text-6xl">
              نصنع الخشب
              <span className="block text-brass">قطعاً تُروى حكايتها</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-ivory/70 lg:text-lg">
              في ورشة أبو الخير نحوّل ألواح الخشب الصلب إلى قطع فريدة مصنوعة على المقاس،
              تجمع بين دفء الحرفة اليدوية الأصيلة ونقاء التصميم العصري.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-brass px-7 py-3.5 font-semibold text-ivory shadow-lg shadow-brass/20 transition-all hover:bg-brass-bright hover:shadow-xl"
              >
                اطلب الآن
                <IconArrowLeft className="h-5 w-5" />
              </Link>
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 rounded-full border border-oak/30 px-7 py-3.5 font-semibold text-ivory transition-colors hover:border-oak hover:text-oak"
              >
                تصفّح المعرض
              </Link>
            </div>

            <div className="mt-12 flex gap-10 border-t border-oak/15 pt-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-3xl font-extrabold text-oak">{s.value}</div>
                  <div className="mt-1 text-xs text-ivory/60">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-rise relative">
            <div className="overflow-hidden rounded-card border border-oak/20 shadow-2xl shadow-black/30">
              <img
                src={heroImg}
                alt="حرفي ينحت الخشب بإزميل داخل الورشة"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 right-6 rounded-card border border-brass/30 bg-charcoal-soft/90 px-6 py-4 backdrop-blur-sm">
              <div className="font-display text-sm font-bold text-brass">تشطيب يدوي</div>
              <div className="text-xs text-ivory/60">صقل وزيت طبيعي لكل قطعة</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-card border border-oak/25 bg-white/50 p-6 transition-colors hover:border-brass/40"
            >
              <span className="grid h-12 w-12 place-items-center rounded-full bg-oak/20 text-brass">
                <v.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-ink">{v.title}</h3>
              <p className="mt-2 text-sm leading-6 text-ink/60">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured works */}
      <section className="bg-ivory-deep/60 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-sm font-semibold tracking-widest text-brass">أعمالنا</span>
              <h2 className="mt-2 font-display text-3xl font-extrabold text-ink lg:text-4xl">
                قطع مختارة من الورشة
              </h2>
            </div>
            <Link
              to="/gallery"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-brass"
            >
              كل الأعمال
              <IconArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((w) => (
              <WorkCard key={w.slug} work={w} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="wood-texture relative overflow-hidden rounded-card bg-charcoal px-8 py-14 text-center lg:px-16 lg:py-20">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-brass/15" />
          <h2 className="relative font-display text-3xl font-extrabold text-ivory lg:text-4xl">
            عندك فكرة لقطعة تحلم بها؟
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-ivory/70">
            شاركنا تصوّرك ونحوّله إلى واقع خشبي يليق بمساحتك. استشارة التصميم مجانية.
          </p>
          <Link
            to="/contact"
            className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-brass px-8 py-4 font-semibold text-ivory shadow-lg shadow-brass/25 transition-all hover:bg-brass-bright hover:shadow-xl"
          >
            اطلب الآن
            <IconArrowLeft className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
