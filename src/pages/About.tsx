import { Link } from 'react-router'
import { IconArrowLeft } from '../lib/icons'

const portrait =
  'https://images.unsplash.com/photo-1631396326646-c06a935ff3a6?w=1000&h=1200&fit=crop&auto=format'
const shop =
  'https://images.unsplash.com/photo-1497218770144-3fea6dbc33fe?w=1000&h=700&fit=crop&auto=format'

const timeline = [
  { year: '٢٠٠١', title: 'البداية', text: 'افتُتحت الورشة كمشغل صغير لإصلاح وصناعة الأثاث الخشبي.' },
  { year: '٢٠٠٩', title: 'التوسّع', text: 'انتقلنا إلى ورشة أكبر وبدأنا تنفيذ المطابخ والوحدات على المقاس.' },
  { year: '٢٠١٦', title: 'الحرفة العصرية', text: 'دمجنا أدوات التصميم الحديثة مع الحرفة اليدوية الأصيلة.' },
  { year: '٢٠٢٦', title: 'اليوم', text: 'أكثر من ٤٨٠ قطعة مصنوعة يدوياً وصلت إلى بيوت عملائنا.' },
]

export default function About() {
  return (
    <>
      {/* Intro */}
      <section className="mx-auto max-w-7xl px-6 pt-32 pb-16 lg:px-10 lg:pt-40">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold tracking-widest text-brass">عن الورشة</span>
            <h1 className="mt-3 font-display text-4xl font-black leading-tight text-ink lg:text-5xl">
              خمسة وعشرون عاماً
              <span className="block text-brass">بين رائحة الخشب والإزميل</span>
            </h1>
            <p className="mt-6 text-base leading-8 text-ink/70">
              بدأت ورشة أبو الخير بيدين اثنتين وشغف واحد: أن يبقى الخشب حرفة حيّة. على مدى
              أكثر من عقدين تعلّمنا أن القطعة الجيدة لا تُقاس بسرعة صنعها، بل بالسنوات التي
              ستعيشها في بيت صاحبها.
            </p>
            <p className="mt-4 text-base leading-8 text-ink/70">
              نختار كل لوح خشب بأنفسنا، ونعمل عليه من التصميم حتى التشطيب اليدوي، لنُخرج
              قطعاً تجمع بين المتانة والدفء والبساطة العصرية.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brass px-7 py-3.5 font-semibold text-ivory shadow-md shadow-brass/20 transition-all hover:bg-brass-bright"
            >
              ابدأ مشروعك معنا
              <IconArrowLeft className="h-5 w-5" />
            </Link>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-card border border-oak/20 shadow-lg shadow-charcoal/10">
              <img
                src={portrait}
                alt="النجّار في ورشته أثناء العمل"
                className="aspect-[5/6] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-4 hidden w-48 overflow-hidden rounded-card border border-oak/20 shadow-lg shadow-charcoal/15 sm:block">
              <img src={shop} alt="أدوات النجارة اليدوية" className="aspect-[4/3] w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-ivory-deep/60 py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <div className="text-center">
            <span className="text-sm font-semibold tracking-widest text-brass">مسيرتنا</span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-ink lg:text-4xl">
              رحلة ربع قرن
            </h2>
          </div>

          <ol className="mt-12 space-y-2">
            {timeline.map((t, i) => (
              <li key={t.year} className="relative flex gap-6 pb-10 last:pb-0">
                {/* line */}
                {i !== timeline.length - 1 && (
                  <span className="absolute right-[27px] top-14 bottom-0 w-px bg-oak/40" />
                )}
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-brass/40 bg-ivory font-display font-bold text-brass">
                  {t.year.slice(-2)}
                </span>
                <div className="rounded-card border border-oak/25 bg-white/60 p-5">
                  <div className="flex items-baseline gap-3">
                    <h3 className="font-display text-lg font-bold text-ink">{t.title}</h3>
                    <span className="text-sm text-brass">{t.year}</span>
                  </div>
                  <p className="mt-1.5 text-sm leading-6 text-ink/65">{t.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  )
}
