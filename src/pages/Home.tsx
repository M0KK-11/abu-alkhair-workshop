import { useState } from 'react'
import { Link } from 'react-router'
import { sendConsultationToSupabase } from '../lib/supabase'

interface FeaturedProject {
  id: string
  title: string
  category: string
  filterType: 'custom-furniture' | 'doors-cladding'
  spec: string
  specIcon: string
  description: string
  image: string
  alt: string
  link: string
}

const featuredProjects: FeaturedProject[] = [
  {
    id: 'f1',
    title: 'طاولة طعام ملكية من الجوز المصمت',
    category: 'أثاث فاخر',
    filterType: 'custom-furniture',
    spec: 'طول 4.2 متر',
    specIcon: 'straighten',
    description:
      'لوح خشبي متصل بسماكة 8 سم منتقى بعناية مع أرجل برونزية مشغولة يدوياً بتشطيب عتيق غير لامع.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBSeEciRR0d9_7Eg3AQJz5ec-GCULeuj7ydbgoIqXKSUHM4W-q87CllcKIbrJTizOA4Oob5iRWQ6Fq1usp4aEv7-2d4Bo5MDaLGM3qFxW0GSuKUB1IfrfUJAsxIdr7RjxwRetwKGKfOlw2Vv_O7pYxzt7kS72GSvveJb7DD4E-_8EZGBoeNCHdF3sUx2-7KPWy-HPu_GpN7vKWmt8kkhf5QMpEJdcd_9QiY5ZqOz9-p6r1M3ctJefKu',
    alt: 'Monolithic solid American Walnut dining table with live natural edges and sculptural brass base legs',
    link: '/work/royal-walnut-dining-table',
  },
  {
    id: 'f2',
    title: 'تجليد جداري بانورامي ومكتبة خاصة',
    category: 'ديكورات خشبية ومعمارية',
    filterType: 'doors-cladding',
    spec: 'المزة، دمشق',
    specIcon: 'pin_drop',
    description:
      'تكسية جدارية هندسية تمتد بارتفاع مزدوج (Double Height) مدمجة مع نظام تكييف مخفي وإضاءات محيطية.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB3DdhQetkL0FMx1u5t3foP5UCh3cYZpwpS_0JBgS0t3yKfzQpQvssowkIQY6d49awHo4hXN_EuQLdSobHsUqx7kh7HHJmYsptYsZ1VKbNrtMlLhMRYOtyvfk-UHQEExG3I08FZ5N1HblcYj-qU5hvxtfv--JnX_70iDRGV868rVUj5PAYqMZBwwy2GHNd2nWLaM--IMirVamIYh_ci4PszsWN39S7XOeZLJ2yW6M6GkfKaTut-tSQ9',
    alt: 'Floor to ceiling architectural wood paneling and integrated library shelving in dark smoked oak',
    link: '/work/royal-walnut-dining-table',
  },
  {
    id: 'f3',
    title: 'مطبخ عصري مدمج من خشب البلوط',
    category: 'مطابخ حصرية',
    filterType: 'custom-furniture',
    spec: 'مفصلات نحاسية مخفية',
    specIcon: 'construction',
    description:
      'تصميم مينيمالي انسيابي مع واجهات خشب بلوط معالجة بنانو التفلون لحمايتها من السوائل والحرارة.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAN6HrEuvGCY6Jbr4O8D7HDDav7bGe9z3fyR34uQk_NccrmsSpcBJvrQa_8Q8HthDSsFXs0XXpsTfjsZ8IKTdzXar6fGexC0vvRlO9eZNOpjo13PPEuCIT5OvX1n9OtYtzHPWs2iuwzhBs30XJWNHE-cBgC92GX3SD4dgcvdN2QjssWkLpTF8p5m7CppmPK-LAhL-wWJY27uSJSN6Igeml66by91kMoFSrBcC760XlW9b67Tr-zXuvE',
    alt: 'Seamless contemporary kitchen island and bespoke cabinetry made from Swiss white oak',
    link: '/work/royal-walnut-dining-table',
  },
  {
    id: 'f4',
    title: 'باب رئيسي خارجي ضخم من التيك الصاج',
    category: 'أبواب خارجية فاخرة',
    filterType: 'doors-cladding',
    spec: 'نظام محوري Pivot إيطالي',
    specIcon: 'lock',
    description:
      'بارتفاع 4 أمتار ونظام دوران هيدروليكي محوري يتحمل حتى 800 كجم بسلاسة متناهية، مقاوم كلياً للشمس والغبار.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA20OpqlmrU14PoKzqpt25XqDNEOqT54L_QMSpdEutf2UrgEWBml7ggivCGD7-Qc0x4R2yPM8SW2py8njVJwu2TmBxzyF1k206rKFo7hMTG6JWXo-NXsOH791YAhaFjyLmJe_v1saVAD2SH-7mbgi5ANyChzUe6wOkzELe3tY2AO8wTnyZ9zEhm-zmpNbSoIcsUJqIPw2ODRygF1_bqVAFuDdrs6YFY5cXZNijlfssoRhH2MhhzQRwk',
    alt: 'Grand front entrance pivot door for luxury modern palace in solid Burmese Teak timber',
    link: '/work/royal-walnut-dining-table',
  },
  {
    id: 'f5',
    title: 'خزانة ملابس (Walk-in Closet) مع أدراج مخملية',
    category: 'غرف وخزائن خاصة',
    filterType: 'custom-furniture',
    spec: 'إضاءات سينمائية مخفية',
    specIcon: 'flare',
    description:
      'تقسيمات ذكية مصنوعة من خشب الأرز المعطر مع أدراج مكسوة بالمخمل الإيطالي وواجهات زجاجية عاكسة.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCtFRgVnZAYiALTyEzldHhctO9GmFzY93EZbfl8T9kZF3I8fIMXurzRVy6Xt_1YIg_wcbOzKjGNJGzZAbflSAZLeVzDDGyl6tdInrG1rqXMxSZC13Z_KUPRYM7IzHXNHgfDdZcRiXTX9sIVdgtjVJEYfyZDbLF3ZDUuqt8FZnKT8UvFsI6EuiUxCxeouGuJ8DnHlXresh0LY-Un0nJ3HV8RXJL1A3RR7-x2AmH_Jtobst6I2bkaJvJa',
    alt: 'Bespoke walk in wardrobe dressing room with dark stained solid wood frames and velvet drawers',
    link: '/work/royal-walnut-dining-table',
  },
  {
    id: 'f6',
    title: 'كونسول مدخل منحوت بتعشيقات يابانية',
    category: 'قطع فنية مخصصة',
    filterType: 'custom-furniture',
    spec: 'تعشيقة خشبية بدون مسامير',
    specIcon: 'handyman',
    description:
      'تحفة فنية تحتفي بفن النجارة التقليدي (Kigumi)؛ ثبات فائق ودقة ميكانيكية اعتماداً على تداخل الألياف الخشبية فقط.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC8lsha0-EvA7iOrnzOV-aR3xDc8WmEc4IhB9kmgubJi-0_pE9yvx_rCg0mZGbD_2eyCrZrQYP0ytMHvZrOlkto5qeCidcXTB_7bWDcZ_xE0i5-pp1IAbdZFzHBa5g1U_IlUbw5hCrBKeTqBwG3p755HOStAi9BriJYgecdW-eG8mZJrBs-YCCl0nEUwddTAa0zyHCELw3muE7jwK9p6iwbX03_PDfXSTKIIe3-8nfzSjP9MSFeS08O',
    alt: 'Artisanal entryway console table carved from solid aged walnut with exposed kigumi Japanese wood joints',
    link: '/work/royal-walnut-dining-table',
  },
]

export default function Home() {
  const [filter, setFilter] = useState<'all' | 'custom-furniture' | 'doors-cladding'>('all')
  const [formSent, setFormSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [formError, setFormError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    projectType: 'طاولة طعام أو أثاث فاخر مخصص',
  })

  const filteredProjects =
    filter === 'all' ? featuredProjects : featuredProjects.filter((p) => p.filterType === filter)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setFormError(null)

    const result = await sendConsultationToSupabase({
      full_name: formData.name,
      phone: formData.phone,
      project_type: formData.projectType,
    })

    setSubmitting(false)

    if (result.success) {
      setFormError(null)
      setFormSent(true)
      setTimeout(() => {
        setFormSent(false)
        setFormData({
          name: '',
          phone: '',
          projectType: 'طاولة طعام أو أثاث فاخر مخصص',
        })
      }, 5000)
    } else {
      setFormError(result.error || 'تعذر إرسال الطلب (يرجى مراجعة صلاحيات قاعدة البيانات)')
    }
  }

  return (
    <div className="w-full bg-background">
      <div className="flex flex-col w-full">
        {/* 1. Hero Section */}
        <section className="relative bg-primary-container text-white overflow-hidden border-b border-[#d9b98c]/20 pt-20">
          {/* Subtle Background Architectural Vectors & Glows */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grain-mesh" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path
                    d="M 60 0 L 0 0 0 60"
                    fill="none"
                    stroke="#d2c4bf"
                    strokeWidth="0.75"
                    strokeDasharray="2,4"
                  />
                  <circle cx="30" cy="30" r="1.5" fill="#c37c3b" opacity="0.6" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grain-mesh)" />
            </svg>
          </div>

          <div className="absolute -top-32 -left-32 w-96 h-96 bg-tertiary-fixed-dim/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative max-w-[1360px] mx-auto px-6 md:px-12 pt-14 pb-16 flex flex-col items-center text-center">
            {/* Hero Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white max-w-5xl leading-tight mb-4 tracking-tight">
              فن النجارة الخالصة.. نحول أخشاب{' '}
              <span className="text-secondary-container">البلوط والجوز</span> إلى تحف معمارية خالدة
            </h1>

            {/* Hero Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-[#d2c4bf] max-w-3xl leading-relaxed mb-8">
              نبتكر أثاثاً مخصصاً، تجاليد جدارية معمارية، وأبواباً ملكية تدمج عبق الحرفة اليدوية
              الأصلية بأدق تفاصيل الهندسة الإسكندنافية والتعشيقات اليابانية المتينة.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto mb-10">
              <a
                href="#quote-section"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#b87333] hover:bg-[#c37c3b] text-white px-6 py-3 rounded-lg text-sm font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <span>اطلب تسعير مشروعك</span>
                <span className="material-symbols-outlined text-[18px]">arrow_back</span>
              </a>

              <Link
                to="/gallery"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg text-sm font-semibold transition-all border border-[#d9b98c]/25"
              >
                <span className="material-symbols-outlined text-[18px]">dashboard</span>
                <span>استكشف أحدث أعمالنا</span>
              </Link>
            </div>

            {/* Macro Imagery Teaser Banner */}
            <div className="w-full relative rounded-2xl overflow-hidden shadow-2xl mb-12 max-h-[460px] border border-[#d9b98c]/25">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoL_mSW_dJT0dd9AdXPSIDC6kliJQOe_lcMX7YTOE_y-ZkmigdxprQC3v41UUMBOayEqDrEviFpXsGkWTgFPYzmbZO7CnWGbVCAB5euhKa2Cu2DJpSZQKSIiNImmKbePPq-eOGPvrceNdYpUt04FGTGG1-LtNmbOvCnQWdvSX9UorRza3EnRpTRVrTrHV7_8TRRN11U9OtIxjWUv4FWCXrgzXik6G6dHEG61o2kLSLf4dCZP3Bq5u3"
                alt="Close up architectural macro shot of authentic American Walnut wood grain with hand-carved Japanese joinery"
                className="w-full h-72 sm:h-80 md:h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-transparent to-transparent"></div>

              <div className="absolute bottom-4 right-4 left-4 flex flex-wrap items-center justify-between gap-3 text-white bg-primary-container/85 backdrop-blur-md p-4 rounded-xl border border-[#d9b98c]/30 shadow-md">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary-container text-[24px]">
                    architecture
                  </span>
                  <div className="flex flex-col text-right">
                    <span className="text-sm font-bold">المصنعية المعمارية الخاصة</span>
                    <span className="text-xs text-[#d2c4bf]">
                      دقة بالملليمتر وتجهيز باستخدام مكابس فراغية متطورة
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-secondary-container">
                  <span>فحص وتعتيق طبيعي للأخشاب</span>
                  <span className="material-symbols-outlined text-[18px]">check_circle</span>
                </div>
              </div>
            </div>

            {/* Trust Metrics Bar */}
            <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-[#d9b98c]/20 shadow-inner">
              <div className="flex flex-col items-center justify-center text-center p-2">
                <span className="text-3xl sm:text-4xl text-secondary-container font-mono font-bold" dir="ltr">
                  30+
                </span>
                <span className="text-xs sm:text-sm text-[#d2c4bf] mt-1 font-medium">
                  عاماً من الخبرة والريادة
                </span>
              </div>
              <div className="flex flex-col items-center justify-center text-center p-2">
                <span className="text-3xl sm:text-4xl text-secondary-container font-mono font-bold" dir="ltr">
                  1,200+
                </span>
                <span className="text-xs sm:text-sm text-[#d2c4bf] mt-1 font-medium">
                  مشروع منجز للقصور والفلل
                </span>
              </div>
              <div className="flex flex-col items-center justify-center text-center p-2">
                <span className="text-3xl sm:text-4xl text-secondary-container font-mono font-bold" dir="ltr">
                  100%
                </span>
                <span className="text-xs sm:text-sm text-[#d2c4bf] mt-1 font-medium">
                  أخشاب طبيعية مصمتة ومعالجة
                </span>
              </div>
              <div className="flex flex-col items-center justify-center text-center p-2">
                <span className="text-3xl sm:text-4xl text-secondary-container font-mono font-bold" dir="ltr">
                  10
                </span>
                <span className="text-xs sm:text-sm text-[#d2c4bf] mt-1 font-medium">
                  سنوات ضمان شامل ومكتوب
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Philosophy & Premium Timbers Section */}
        <section className="py-14 bg-surface-container-low text-on-surface relative border-b border-outline-variant/30">
          <div className="max-w-[1360px] mx-auto px-6 md:px-12">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
              <div className="flex flex-col gap-1 max-w-2xl text-right">
                <div className="flex items-center gap-1.5 text-secondary font-bold text-xs sm:text-sm">
                  <span className="material-symbols-outlined text-[20px]">forest</span>
                  <span className="tracking-wider">المواد الفاخرة وسر الاستدامة</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-primary">
                  أخشاب طبيعية نادرة تخضع لأعلى معايير المعالجة الحرارية
                </h2>
                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  ننتقي كتل الخشب الصلبة من غابات معتمدة عالمياً، وندخلها أفران التجفيف الرقمية
                  لضبط الرطوبة لتلائم الظروف المناخية تماماً دون انحناء أو تشقق.
                </p>
              </div>
            </div>

            {/* Timber Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Timber 1: American Walnut */}
              <div className="group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col border border-outline-variant/30">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVNEaevl83wc0rGp70821p7clOfvJpQuLcj2MQLgIxHjk8RWv9lrTF2xzsNLrfqtEkQ4fWrZxutT1UYjl0ucYAIo91VyOm7ySKXr0PbIZj_2z-LFO0YDgnpjPXjQQXacgikPYg1QjXHQpKZtdvMBzHvfA1KatZZ88M2G7utlsTdnC4rQT3aXDoVGgHI_QbnAeDuX-jEl9kXbcFlTMsRRB40KilvyId3HtvIaUDjZyfZRs18Yf1HOAX"
                    alt="Macro texture of American Walnut raw timber slab"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-primary-container/85 backdrop-blur-md text-white px-3 py-1 rounded-md text-xs font-semibold">
                    الدرجة الأولى FAS
                  </div>
                  <div className="absolute bottom-3 right-3 left-3 bg-surface-bright/95 backdrop-blur-sm p-2 rounded-lg flex items-center justify-between text-primary">
                    <span className="text-xs sm:text-sm font-bold">خشب الجوز الأمريكي</span>
                    <span className="text-xs text-on-surface-variant font-mono">Juglans nigra</span>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1 justify-between gap-4">
                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    يتميز بعمقه اللوني الشوكولاتي الداكن وتعرجاته الحيوية الفريدة. نستخدمه للأثاث
                    الرئاسي، طاولات الاستقبال الملكية، والمجالس الفخمة المعاصرة.
                  </p>
                  <div className="space-y-2 pt-2 bg-surface-container-low p-3 rounded-xl border border-outline-variant/20">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-on-surface-variant">مقاومة الصدمات</span>
                      <span className="font-mono text-secondary font-bold">1,010 Janka</span>
                    </div>
                    <div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
                      <div className="bg-[#b87333] h-full rounded-full" style={{ width: '82%' }}></div>
                    </div>
                    <div className="flex items-center justify-between text-xs pt-1">
                      <span className="text-on-surface-variant">الاستقرار البعدي</span>
                      <span className="text-secondary font-bold">ممتاز ومقاوم للتمدد</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timber 2: White Oak */}
              <div className="group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col border border-outline-variant/30">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqwR_r6107fR4OKmKRXM5LHA9W41LYn2DZk0r1qOkXpvRKmhBkXu6F5CSwA4rbEdrU9Dt6OqEXRghCq_bweVlLTR5u2_ertMVGIiNZejFGjT6b5nk8bX08oEZa2BMfUyL9pkq3l8-okgQzVVPhJgzJT2w0XEYExiFl8YUz3v6MCnq9J_iE2ATLlLexgYkipTUfBrPJ_DoR4lWlgTviLaQjOBdlFQvSsC7gvtQLfwVEimNkwMpcDzW9"
                    alt="Macro detail of quarter-sawn European and American White Oak lumber"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-primary-container/85 backdrop-blur-md text-white px-3 py-1 rounded-md text-xs font-semibold">
                    قص ربعي Quarter-Sawn
                  </div>
                  <div className="absolute bottom-3 right-3 left-3 bg-surface-bright/95 backdrop-blur-sm p-2 rounded-lg flex items-center justify-between text-primary">
                    <span className="text-xs sm:text-sm font-bold">البلوط الأبيض الأوروبي</span>
                    <span className="text-xs text-on-surface-variant font-mono">Quercus alba</span>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1 justify-between gap-4">
                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    خشب كثيف شديد الصلابة، يتميز بحلقات نمو واضحة وعروق مستقيمة مريحة للعين، مثالي
                    للمطابخ المعمارية والتجاليد الجدارية الكبيرة ذات النمط المينيمالي.
                  </p>
                  <div className="space-y-2 pt-2 bg-surface-container-low p-3 rounded-xl border border-outline-variant/20">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-on-surface-variant">مقاومة الصدمات</span>
                      <span className="font-mono text-secondary font-bold">1,360 Janka</span>
                    </div>
                    <div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
                      <div className="bg-[#b87333] h-full rounded-full" style={{ width: '92%' }}></div>
                    </div>
                    <div className="flex items-center justify-between text-xs pt-1">
                      <span className="text-on-surface-variant">مقاومة الرطوبة والتسوس</span>
                      <span className="text-secondary font-bold">فائقة لوجود مادة التايلوزيس</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timber 3: Burmese Teak */}
              <div className="group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col border border-outline-variant/30">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCppZmqOLnmasiSJUrXLDcegUwb8uDwpyXcXUMhn9018I690zfxaYqGkceZ8zcLm7lJc9SQ-aFEey8psjWcBtzMxIipJ84zoBlMCjKz6wjcI1ugPvY4TRL3Pz_T31pEJJ3NlI-p0UIigfc9NY-GWJBU-aLgJchCT5Aq7ahA5JkqEVJSG2-ZRa7Lh1RbYOv4IrwJ4QdloAB0w5z6kon7OreaS-CAx3oldfUVZQ8AHGRENPYhTQeH8ewJ"
                    alt="Close up texture of genuine old-growth Burmese Teak wood plank"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-primary-container/85 backdrop-blur-md text-white px-3 py-1 rounded-md text-xs font-semibold">
                    صاج معمر نقي 100%
                  </div>
                  <div className="absolute bottom-3 right-3 left-3 bg-surface-bright/95 backdrop-blur-sm p-2 rounded-lg flex items-center justify-between text-primary">
                    <span className="text-xs sm:text-sm font-bold">التيك البورمي الملكي</span>
                    <span className="text-xs text-on-surface-variant font-mono">Tectona grandis</span>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1 justify-between gap-4">
                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    سيد الأخشاب للأبواب الرئيسية الخارجية والواجهات المعمارية؛ يحتوي على زيوت ومطاط
                    طبيعي يجعله مانعاً تاماً للماء، وحصناً ضد شمس الصحراء الحارقة.
                  </p>
                  <div className="space-y-2 pt-2 bg-surface-container-low p-3 rounded-xl border border-outline-variant/20">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-on-surface-variant">مقاومة الصدمات</span>
                      <span className="font-mono text-secondary font-bold">1,070 Janka</span>
                    </div>
                    <div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
                      <div className="bg-[#b87333] h-full rounded-full" style={{ width: '86%' }}></div>
                    </div>
                    <div className="flex items-center justify-between text-xs pt-1">
                      <span className="text-on-surface-variant">المتانة الجوية الخارجية</span>
                      <span className="text-secondary font-bold">تصل لـ 50 عاماً في العراء</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Featured Projects Grid (6 Works) */}
        <section className="py-14 bg-surface text-on-surface" id="featured-works">
          <div className="max-w-[1360px] mx-auto px-6 md:px-12">
            {/* Section Title Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
              <div className="flex flex-col gap-1 max-w-2xl text-right">
                <div className="flex items-center gap-1.5 text-secondary font-bold text-xs sm:text-sm">
                  <span className="material-symbols-outlined text-[20px]">carpenter</span>
                  <span className="tracking-wider">سجل الإبداع والإتقان</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-primary">
                  روائع مختارة من ورشتنا
                </h2>
                <p className="text-xs sm:text-sm text-on-surface-variant">
                  أعمال صممت ونفذت بمقاييس دقيقة تليق بالقصور والمشاريع السكنية الراقية، تعكس هيبة
                  المكان وشخصية الساكنين.
                </p>
              </div>

              {/* Filter Tabs */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setFilter('all')}
                  className={`px-4 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    filter === 'all'
                      ? 'bg-primary text-white shadow-xs'
                      : 'bg-surface-container hover:bg-surface-container-high text-on-surface-variant'
                  }`}
                >
                  الكل
                </button>
                <button
                  type="button"
                  onClick={() => setFilter('custom-furniture')}
                  className={`px-4 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    filter === 'custom-furniture'
                      ? 'bg-primary text-white shadow-xs'
                      : 'bg-surface-container hover:bg-surface-container-high text-on-surface-variant'
                  }`}
                >
                  أثاث مخصص
                </button>
                <button
                  type="button"
                  onClick={() => setFilter('doors-cladding')}
                  className={`px-4 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    filter === 'doors-cladding'
                      ? 'bg-primary text-white shadow-xs'
                      : 'bg-surface-container hover:bg-surface-container-high text-on-surface-variant'
                  }`}
                >
                  أبواب وتجاليد
                </button>
              </div>
            </div>

            {/* 6 Featured Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((p) => (
                <article
                  key={p.id}
                  className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group border border-outline-variant/30"
                >
                  <div className="relative h-72 overflow-hidden bg-surface-container">
                    <img
                      src={p.image}
                      alt={p.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-primary/80 backdrop-blur-md text-white px-3 py-1 rounded-md text-xs font-semibold">
                      {p.category}
                    </div>
                    <div className="absolute bottom-3 left-3 bg-surface-container-highest/90 text-primary px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 shadow-xs">
                      <span className="material-symbols-outlined text-[14px]">{p.specIcon}</span>
                      <span>{p.spec}</span>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1 justify-between gap-4 text-right">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-primary mb-1.5 group-hover:text-secondary transition-colors">
                        {p.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed line-clamp-2">
                        {p.description}
                      </p>
                    </div>
                    <Link
                      to={p.link}
                      className="pt-2 flex items-center justify-between text-secondary text-xs sm:text-sm font-semibold border-t border-surface-container-highest"
                    >
                      <span>تفاصيل القطعة والخامات</span>
                      <span className="material-symbols-outlined text-[20px] group-hover:-translate-x-1 transition-transform">
                        west
                      </span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Action Button: View Full Gallery */}
            <div className="mt-12 flex justify-center">
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 bg-surface-container-high hover:bg-surface-container-highest text-on-surface px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold shadow-xs hover:shadow-md transition-all border border-outline-variant/30"
              >
                <span>استعراض أرشيف الأعمال الكامل (140+ تحفة خشبية)</span>
                <span className="material-symbols-outlined text-[20px]">collections</span>
              </Link>
            </div>
          </div>
        </section>

        {/* 4. Testimonials & Architect Endorsements */}
        <section className="py-14 bg-surface-container text-on-surface relative overflow-hidden border-b border-outline-variant/30">
          <div className="max-w-[1360px] mx-auto px-6 md:px-12">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-10">
              <div className="inline-flex items-center gap-1.5 text-secondary mb-1">
                <span className="material-symbols-outlined text-[20px]">hotel_class</span>
                <span className="text-xs sm:text-sm font-bold tracking-wider">شهادات نعتز بها</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-primary mb-2">
                ماذا يقول كبار المعماريين وملاك القصور؟
              </h2>
              <p className="text-xs sm:text-sm text-on-surface-variant">
                ثقة بنيت على مدى ثلاثة عقود من الالتزام بالجودة المطلقة وتسليم الأعمال في مواعيدها
                الدقيقة.
              </p>
            </div>

            {/* Testimonial Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Review 1 */}
              <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between text-right border border-outline-variant/30">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-[#c37c3b]">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <span
                          key={s}
                          className="material-symbols-outlined text-[20px]"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          star
                        </span>
                      ))}
                    </div>
                    <span className="material-symbols-outlined text-outline-variant text-[32px]">
                      format_quote
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-on-surface leading-relaxed italic">
                    "كاستوديو هندسي نصمم مشاريع سكنية فاخرة، كنا دائماً نواجه تحدياً في إيجاد
                    نجارين يفهمون تفاصيل الوصلات المخفية. ورشة أبو الخير فاقت كل التوقعات في تشطيب
                    قصر الملقا."
                  </p>
                </div>
                <div className="pt-4 flex items-center gap-3 border-t border-outline-variant/20 mt-4">
                  <div className="w-11 h-11 rounded-full bg-surface-container-highest flex items-center justify-center text-sm text-secondary font-bold">
                    م.ع
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-primary">م. عبدالمحسن المقرن</span>
                    <span className="text-[11px] text-on-surface-variant">
                      شريك مؤسس - استوديو المقرن للعمارة الداخلية
                    </span>
                  </div>
                </div>
              </div>

              {/* Review 2 */}
              <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between text-right border border-outline-variant/30">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-[#c37c3b]">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <span
                          key={s}
                          className="material-symbols-outlined text-[20px]"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          star
                        </span>
                      ))}
                    </div>
                    <span className="material-symbols-outlined text-outline-variant text-[32px]">
                      format_quote
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-on-surface leading-relaxed italic">
                    "طلبنا طاولة سفرة بطول 5 أمتار من قطعة جوز أمريكي واحدة. المعلم أبو الخير اهتم
                    حتى بدرجة امتصاص الخشب للزيت الطبيعي. أصبحت القطعة المحورية التي يثني عليها كل
                    زوارنا."
                  </p>
                </div>
                <div className="pt-4 flex items-center gap-3 border-t border-outline-variant/20 mt-4">
                  <div className="w-11 h-11 rounded-full bg-surface-container-highest flex items-center justify-center text-sm text-secondary font-bold">
                    ف.س
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-primary">فهد السبيعي</span>
                    <span className="text-[11px] text-on-surface-variant">
                      مالك فيلا خاصة - مجمع ديار الخزامى
                    </span>
                  </div>
                </div>
              </div>

              {/* Review 3 */}
              <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between text-right border border-outline-variant/30">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-[#c37c3b]">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <span
                          key={s}
                          className="material-symbols-outlined text-[20px]"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          star
                        </span>
                      ))}
                    </div>
                    <span className="material-symbols-outlined text-outline-variant text-[32px]">
                      format_quote
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-on-surface leading-relaxed italic">
                    "الباب المحوري الخارجي من التيك البورمي صامد أمام حرارة الصيف والرياح منذ ثلاث
                    سنوات دون أي تغيير بالوزنية أو المظهر. نجارة احترافية على مستوى المتاحف
                    العالمية."
                  </p>
                </div>
                <div className="pt-4 flex items-center gap-3 border-t border-outline-variant/20 mt-4">
                  <div className="w-11 h-11 rounded-full bg-surface-container-highest flex items-center justify-center text-sm text-secondary font-bold">
                    د.ن
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-primary">د. نورة التميمي</span>
                    <span className="text-[11px] text-on-surface-variant">
                      مصممة مشاريع ضيافة فاخرة
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Prominent Call to Action (CTA) & Consultation Form */}
        <section className="py-14 bg-surface" id="quote-section">
          <div className="max-w-[1360px] mx-auto px-6 md:px-12">
            <div className="relative bg-primary-container text-white rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-10 border border-[#d9b98c]/30">
              {/* Background Lighting Graphic */}
              <div className="absolute -right-24 -top-24 w-96 h-96 bg-tertiary-container/40 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-secondary/30 rounded-full blur-3xl pointer-events-none"></div>

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Text Content */}
                <div className="lg:col-span-7 flex flex-col text-right gap-4">
                  <div className="inline-flex items-center gap-1.5 text-secondary-container text-xs sm:text-sm font-semibold">
                    <span className="material-symbols-outlined text-[20px]">design_services</span>
                    <span>استشارات هندسية ومعاينة عينات الأخشاب</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white font-black leading-tight">
                    هل لديك رؤية خاصة لمنزلك أو قصرك؟ فلنبدأ بنحتها معاً
                  </h2>
                  <p className="text-xs sm:text-sm md:text-base text-[#d2c4bf] leading-relaxed">
                    سواء كانت لديك مخططات معمارية جاهزة أو فكرة أولية ترغب بتطويرها، يسعد المعلم
                    وفريق المهندسين في معملنا باستقبالك لمناقشة التفاصيل واختيار ألواح الخشب
                    المصمتة يدوياً.
                  </p>
                  <div className="flex flex-wrap items-center gap-4 pt-2 text-secondary-container text-xs sm:text-sm">
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[18px]">verified</span>
                      <span>معاينة عينات الأخشاب بموقعك</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[18px]">view_in_ar</span>
                      <span>مخططات تنفيذية ثلاثية الأبعاد 3D</span>
                    </div>
                  </div>
                </div>

                {/* Quick Consultation Form / Direct Touchpoint */}
                <div className="lg:col-span-5 bg-white/10 backdrop-blur-xl p-6 rounded-2xl shadow-inner flex flex-col gap-4 border border-[#d9b98c]/25">
                  <h3 className="text-base sm:text-lg font-bold text-white text-right">
                    حجز موعد استشارة أو تسعير
                  </h3>

                  {formSent ? (
                    <div className="bg-[#25d366]/20 border border-[#25d366]/40 p-4 rounded-xl text-center text-white animate-fade">
                      <span className="material-symbols-outlined text-3xl text-[#25d366] block mb-1">
                        check_circle
                      </span>
                      <p className="text-sm font-semibold">تم استلام طلبكم بنجاح وحفظه في النظام!</p>
                      <p className="text-xs text-[#d2c4bf] mt-1">
                        سيتواصل معكم المعلم أبو الخير خلال 24 ساعة لمناقشة تفاصيل المشروع.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-3 text-right">
                      {formError && (
                        <div className="bg-red-950/60 border border-red-500/40 p-2.5 rounded-xl text-right text-red-200 text-xs flex items-center gap-2">
                          <span className="material-symbols-outlined text-[18px] text-red-400">error</span>
                          <span>حدث خطأ أثناء إرسال الطلب، يمكنك استخدام زر الواتساب بالأسفل.</span>
                        </div>
                      )}
                      <div>
                        <label className="block text-xs text-[#d2c4bf] mb-1">الاسم الكريم</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="مثال: م. سلطان العبدالله"
                          className="w-full bg-[#fff9ef] text-primary px-3.5 py-2.5 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-secondary-container"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-[#d2c4bf] mb-1">
                          رقم الهاتف المحمول
                        </label>
                        <input
                          type="tel"
                          required
                          dir="ltr"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+963 988 696 805"
                          className="w-full bg-[#fff9ef] text-primary px-3.5 py-2.5 rounded-lg text-xs sm:text-sm text-right focus:outline-none focus:ring-2 focus:ring-secondary-container"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-[#d2c4bf] mb-1">
                          نوع المشروع المطلوب
                        </label>
                        <select
                          value={formData.projectType}
                          onChange={(e) =>
                            setFormData({ ...formData, projectType: e.target.value })
                          }
                          className="w-full bg-[#fff9ef] text-primary px-3.5 py-2.5 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-secondary-container"
                        >
                          <option>طاولة طعام أو أثاث فاخر مخصص</option>
                          <option>تجليد جداري ومكتبات معمارية</option>
                          <option>أبواب رئيسية خارجية (Pivot)</option>
                          <option>مطبخ خشبي متكامل</option>
                          <option>مشروع قصر أو فيلا متكامل</option>
                        </select>
                      </div>

                      <div className="flex flex-col gap-2 mt-1">
                        <button
                          type="submit"
                          disabled={submitting}
                          className="w-full bg-[#b87333] hover:bg-[#c37c3b] text-white py-2.5 px-4 rounded-lg text-sm font-semibold shadow-lg transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                        >
                          {submitting ? (
                            <>
                              <span className="material-symbols-outlined text-[20px] animate-spin">
                                progress_activity
                              </span>
                              <span>جارٍ إرسال الطلب...</span>
                            </>
                          ) : (
                            <>
                              <span>إرسال طلب الاستشارة</span>
                              <span className="material-symbols-outlined text-[20px]">send</span>
                            </>
                          )}
                        </button>

                        <a
                          href={`https://wa.me/963988696805?text=${encodeURIComponent(
                            `مرحباً معلم أبو الخير، أود طلب استشارة وتفاصيل مشروع:\n- الاسم: ${formData.name || 'غير محدد'}\n- الهاتف: ${formData.phone || 'غير محدد'}\n- نوع المشروع: ${formData.projectType}`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-[#25d366] hover:bg-[#20ba59] text-white py-2.5 px-4 rounded-lg text-sm font-semibold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer text-center"
                        >
                          <span className="material-symbols-outlined text-[20px]">chat</span>
                          <span>إرسال الطلب مباشرة عبر واتساب</span>
                        </a>
                      </div>
                    </form>
                  )}

                  <div className="pt-1 text-center">
                    <span className="text-[11px] text-[#d2c4bf]/80">
                      أو زر ورشتنا في حي الإخلاص، المزة، دمشق لمعاينة خشب الجوز والبلوط على الطبيعة
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
