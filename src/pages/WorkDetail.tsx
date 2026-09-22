import { useState } from 'react'
import { Link, useParams } from 'react-router'
import { getWork, works } from '../lib/works'
import { ImageLightbox } from '../components/ImageLightbox'

interface ShowcaseAngle {
  id: string
  title: string
  subtitle: string
  badge: string
  image: string
  alt: string
}

const angles: ShowcaseAngle[] = [
  {
    id: 'hero-main',
    title: 'المشهد الرئيسي للطاولة',
    subtitle: 'طاولة طعام ملكية من خشب الجوز بقصة حية وقاعدة نحاسية',
    badge: 'المنظور الكامل',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBesiWog6lyU3Bn__oQP6ZXdk-90ZfwOR9pPObwpKjQXVJ_5oFKVqH99yNboa3sMKF3L8dC7DAXzt5i43fKZqrd6971Zi8vsagk6S7onwsWeEVzr4bzbckg91R1hXAlvloCUOOcHsWjaxvcDi5nXfoBvPVtlefzqX2OTTGupDqrQtk-6Bo0YHPgu7NAMcfEwI-5xRClVkjKw-NxarmjJyBSkdgSZ1J2hfuWLVI_vcW_70WWYhjgDCET',
    alt: 'Luxurious live edge American walnut solid wood dining table',
  },
  {
    id: 'thumb1',
    title: 'تعشيقات الفراشة التثبيتية',
    subtitle: 'خالية تماماً من المسامير المعدنية',
    badge: 'تفاصيل التعشيق',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBt29pCZosw6yDI-RwNHa6fRkoIwS5SCv9JZ4Q_CfGys3rIfZkQzKUGzLIEPUR8PPRhVO9v2StorBK42rTPGaWz5KPzv7qA3yIIdLyV-gnBP68RicY2qmCDK3ZOfyCsKmXPJeLEjoLORfDS2Rx6jkvE0q-zsbyHcz4jtCbtTcBpSdg3WsLYHcb7PQhLR7AeyGDrcz3OIeSwWrVztMKaY6tJK3GSAMOGJgBL-k2FDODFFWQnWbxXH3BZ',
    alt: 'Extreme macro close-up of handmade butterfly key wood joinery',
  },
  {
    id: 'thumb2',
    title: 'قاعدة نحاس مصقول مطفي',
    subtitle: 'حديد مشغول مطلي يدوياً',
    badge: 'الدعامات المعدنية',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDAPCLGZRz2w9oiaiIylC0s6Vt-NALRAH2NaFo4-dukjzDHf5GnErF7yt2aYYdmU5ZEPoE83yZ3FCTDW56yKVfwei-X8xVdaRTtfe5qVtTgxduUJQYR8WrzK7NKKUtSTwy-yWLyIPCveEGcqIreV-EcJ6nmNvvasX1tg3P1xJyEFg7CfgyfNr5ZXCLFrMAvkonKp7g-8eQemj9V3UNxPX18VZghETCu01wC2v829cb2fPv2d9hAcr8C',
    alt: 'Close up view of the brushed solid brass base and metallic support',
  },
  {
    id: 'thumb3',
    title: 'صقل بزيوت أوزمو والشمع',
    subtitle: 'أربع طبقات مشبعة عازلة للسوائل',
    badge: 'التشطيب العضوي',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD1alumHOkf6rvY2_GU32Hk-llesgQvBvNd1jVUFUWd1VjUOPoZPBCGi8MBsaAeESxdFCKV9Z9UdPZprxo5zOe0YmW9MH2VZjKutyo74bu3C1hA5omqXDtRmawCk4zyopJ_Gkt8hAKV3zGLroPdz_SZzaRf9kqERSWNfPS8cMz3qLsx2W3zQhGZR7OXj8fde8bpXLH0_nMuGUjlZk6Scmn-IN_UFHbNaA-Hq3Uaz4MVZaSoUH_PP8l3',
    alt: 'Raking low-angle lighting demonstrating the silky sheen of Osmo hardwax oil',
  },
  {
    id: 'thumb4',
    title: 'التناغم داخل القاعة الملكية',
    subtitle: 'توزيع 12 مقعد جلدي براحة تامة',
    badge: 'المشهد المعماري',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDK5P49ayGxENtXFrCP0nP3gg9EwIWkd-45gP6ZdLOydhyeiARmSpgNqPdjnlqlpzKYGBMtz8uv_OF3FqtwnfT33clH2GyCrvabY5xmL8G6Z8CVDUvDl3vZ8yiGXOY924JtxvbAhq60euKhM0PzLteBAZdSvudwGlML8BkbIRsVRRLPgh5HHF1zZoGzXWF3XlbphQ_zVIMOPn2TciSeTGxWVHt4kIGCwdf83fAfSSSZ7DasKvgnOeHA',
    alt: 'Wide contextual architectural view of the entire 12-person dining room',
  },
]

export default function WorkDetail() {
  const { slug } = useParams()
  // Default to royal walnut dining table if not found or on direct route
  const currentWork = (slug ? getWork(slug) : undefined) || works[0]

  const [activeImage, setActiveImage] = useState<string>(angles[0].image)
  const [activeAlt, setActiveAlt] = useState<string>(angles[0].alt)
  const [fading, setFading] = useState<boolean>(false)
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false)

  const handleAngleChange = (angle: ShowcaseAngle) => {
    setFading(true)
    setTimeout(() => {
      setActiveImage(angle.image)
      setActiveAlt(angle.alt)
      setFading(false)
    }, 150)
  }

  const relatedWorks = [
    {
      title: 'بوفيه السنديان المخدد بتطعيمات نحاسية',
      category: 'خزائن وبوفيهات',
      material: 'سنديان أوروبي',
      dimension: 'طول 280 سم',
      desc: 'صُمم ليتماشى مع قاعات الاستقبال الفسيحة مع نظام إغلاق هيدروليكي مخفي بالكامل.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCabuStXWdVzN-7TnaDkBFdi7hUZ-59N4Zu7lJYoWtmRW7dImnjaeVv38E-i62mcEXpPlT3WUbFprAiviZtlEpTOiTi8_JgvywX-XlWLuJfukfuv2nDlyoI9oPzcjwKhsFnIMmVrERwGNxA2I-F28_ZFVCauYUR32NBGCCFl_zoTzJ6VIOuovgdHvV55tPALOaxolPiHipDXWQh44g75U36OgMh2PzmwyViGXFkHQWQoR9Vo0zFbM79',
      link: '/work/walnut-cabinet',
    },
    {
      title: 'بوابة الفيلا المحورية بنقوش هندسية ناعمة',
      category: 'أبواب محورية معمارية',
      material: 'خشب تيك بورمي',
      dimension: 'ارتفاع 380 سم',
      desc: 'مقاومة فائقة لعوامل الطقس الخارجي ومجهزة بمفصلات ألمانية مخفية تتحمل حتى 400 كجم.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCiUse3lUf_QAmeFmfWaqU7ZEQk7W4bSG2ND1lZoC54MfNHcyvmZXntl5V1KIboIpcdx3rUgkL-S_WR7tPGD734Kamo9qS7Urytl7T5iBqn-tm9tbYfXj_UocEyMKWtOqTOxukoMzc3stiD9qUJuF3AHt9DsZ64BoaUWQLDS0ZyOKC__uEGiIAGqHUBbgoisO9MkhuyNDZ2no4F-tZrQ_OmbX_Nz5mWM2cprEuB_kQJ9VBChuDuqSp9',
      link: '/work/pivot-door',
    },
    {
      title: 'تكسية جدارية عازلة مع طاولات جانبية عائمة',
      category: 'تكسيات جدارية متكاملة',
      material: 'جوز مدخن',
      dimension: 'حي الملقا',
      desc: 'ألواح خشبية متداخلة صوتياً مع معالجة إضاءة شريطية غير مباشرة للراحة البصرية.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCyyK4Aa6QH47BTem5jRQpC3k01MjSGKySMHfelbVTkjcsSGO093mFo5JBsarfBJ8mmnhXewGlZ5eKdkNTZIGFvrfHH0EpyfDqzeiGg6wRMpQAoQyV_nv0joULynPe8u_PHMz6ASTK4boQKUfQ5TOAeSvEYp73t52_Kf7puru54yEnXpHAzyVOnYOZNaT4Ddnr-fzWhVIgWZJAmQbZ_oKGd1qFS8Z67mUshLP5vFzuZOh_EEELp2hfO',
      link: '/work/sideboard-console',
    },
  ]

  return (
    <div className="w-full pt-20 bg-background">
      <div className="flex flex-col w-full">
        {/* Top Specimen & Breadcrumb Utility Band */}
        <section className="w-full bg-surface-container-low py-3 border-b border-outline-variant/30">
          <div className="max-w-[1360px] mx-auto px-6 md:px-12 flex flex-wrap items-center justify-between gap-3 text-on-surface-variant">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-1.5 text-xs sm:text-sm flex-wrap"
            >
              <Link to="/" className="hover:text-primary transition-colors">
                الرئيسية
              </Link>
              <span className="material-symbols-outlined text-[14px] text-outline">
                chevron_left
              </span>
              <Link to="/gallery" className="hover:text-primary transition-colors">
                المعرض
              </Link>
              <span className="material-symbols-outlined text-[14px] text-outline">
                chevron_left
              </span>
              <Link to="/gallery" className="hover:text-primary transition-colors">
                أثاث فاخر
              </Link>
              <span className="material-symbols-outlined text-[14px] text-outline">
                chevron_left
              </span>
              <span className="text-primary font-medium">طاولة طعام ملكية - حي النرجس</span>
            </nav>

            <div className="flex items-center gap-3">
              <span className="bg-surface-container-highest text-on-surface text-xs px-3 py-1 rounded-full">
                المعرف المرجعي: <span className="font-mono font-semibold text-tertiary">#AK-9042</span>
              </span>
              <span className="bg-secondary-container text-on-secondary-container text-xs px-3 py-1 rounded-full flex items-center gap-1.5 font-medium">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                قطعة حصرية منفذة بالكامل
              </span>
            </div>
          </div>
        </section>

        {/* Project Header Context */}
        <section className="w-full bg-background pt-7 pb-4">
          <div className="max-w-[1360px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
              <div className="lg:col-span-8 flex flex-col gap-2">
                <div className="flex items-center gap-1.5 text-secondary font-medium text-sm">
                  <span className="material-symbols-outlined text-[18px]">verified</span>
                  <span>مشروع سكني خاص • دمشق</span>
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary tracking-tight leading-tight">
                  طاولة طعام ملكية بقصّة حية (Live Edge) ومقاعد منجدة بالجلد الطبيعي
                </h1>
                <p className="text-sm sm:text-base text-on-surface-variant max-w-3xl leading-relaxed mt-1">
                  صُممت هذه القطعة خصيصاً لفيلا خاصة بدمشق، باستخدام لوحين متقابلين من شجرة
                  جوز أمريكي معمرة، مع صقل يدوي بزيوت طبيعية عضوية خالية من الكيماويات الضارة،
                  لتكون محوراً عمرانياً دافئاً يجمع العائلة لأجيال.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-2 justify-end items-start lg:items-end">
                <div className="bg-surface-container px-4 py-3 rounded-lg flex items-center gap-3 border border-outline-variant/40 shadow-xs">
                  <span className="material-symbols-outlined text-secondary text-[28px]">
                    workspace_premium
                  </span>
                  <div className="flex flex-col">
                    <span className="text-xs text-on-surface-variant">معايير التصنيع الخشبي</span>
                    <span className="text-base text-primary font-bold">درجة نخب أول FAS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Imagery Showcase with Interactive Angles */}
        <section className="w-full bg-background pb-12">
          <div className="max-w-[1360px] mx-auto px-6 md:px-12">
            {/* Main Visual Showcase Display */}
            <div className="relative w-full rounded-2xl overflow-hidden shadow-xl bg-surface-container border border-outline-variant/30">
              <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden">
                <img
                  id="mainShowcaseImage"
                  src={activeImage}
                  alt={activeAlt}
                  onClick={() => setIsLightboxOpen(true)}
                  className={`w-full h-full object-cover transition-all duration-500 hover:scale-[1.01] cursor-zoom-in ${
                    fading ? 'opacity-40 scale-[0.99]' : 'opacity-100 scale-100'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/75 via-transparent to-transparent pointer-events-none"></div>

                {/* Top-left Quick Zoom button */}
                <button
                  type="button"
                  onClick={() => setIsLightboxOpen(true)}
                  className="absolute top-4 left-4 z-10 inline-flex items-center gap-2 bg-black/60 hover:bg-[#b87333] text-white px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium backdrop-blur-md shadow-md transition-all cursor-pointer"
                  title="تكبير ومعاينة الصورة بالحجم الكامل"
                >
                  <span className="material-symbols-outlined text-[18px]">zoom_in</span>
                  <span>معاينة مكبّرة للتفاصيل</span>
                </button>

                {/* Bottom Floating Highlights Overlay */}
                <div className="absolute bottom-4 right-4 left-4 flex flex-wrap items-end justify-between gap-2 text-white">
                  <div className="flex items-center gap-2 bg-primary/80 backdrop-blur-md px-4 py-2 rounded-lg text-xs sm:text-sm">
                    <span className="material-symbols-outlined text-[20px] text-tertiary-fixed">
                      eco
                    </span>
                    <span className="font-medium">
                      خشب مستدام مجفف هوائياً ومُعالج بنسبة رطوبة 8%
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-primary/80 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs">
                    <span className="material-symbols-outlined text-[16px] text-secondary-fixed">
                      photo_camera
                    </span>
                    <span>تصوير حي من موقع التركيب النهائي</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Thumbnail Strip / Craft Angles */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5">
              {angles.slice(1).map((angle) => {
                const isSelected = activeImage === angle.image
                return (
                  <button
                    key={angle.id}
                    type="button"
                    onClick={() => handleAngleChange(angle)}
                    className={`group flex flex-col text-right rounded-xl overflow-hidden bg-surface-container p-2 transition-all hover:bg-surface-container-high focus:outline-none cursor-pointer border ${
                      isSelected
                        ? 'border-secondary ring-2 ring-secondary/40 shadow-md'
                        : 'border-transparent hover:border-outline-variant/50'
                    }`}
                  >
                    <div className="aspect-[4/3] w-full rounded-lg overflow-hidden relative mb-2">
                      <img
                        src={angle.image}
                        alt={angle.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <span className="absolute top-2 right-2 bg-primary/80 backdrop-blur-sm text-white text-[11px] px-2 py-0.5 rounded font-medium">
                        {angle.badge}
                      </span>
                    </div>
                    <span
                      className={`text-sm font-semibold transition-colors ${
                        isSelected ? 'text-secondary' : 'text-on-surface group-hover:text-secondary'
                      }`}
                    >
                      {angle.title}
                    </span>
                    <span className="text-xs text-on-surface-variant mt-0.5">
                      {angle.subtitle}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        </section>

        {/* Technical Spec Sheets & Narrative Split */}
        <section className="w-full bg-surface-container-low py-12 border-t border-b border-outline-variant/30">
          <div className="max-w-[1360px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Side: Technical Specifications & Dimension Matrix (5 cols on Desktop) */}
              <div className="lg:col-span-5 flex flex-col gap-6 order-2 lg:order-1">
                {/* Timber Spec Sheet Card */}
                <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-outline-variant/30 flex flex-col gap-4">
                  <div className="flex items-center justify-between pb-1 border-b border-outline-variant/20">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-[24px]">
                        architecture
                      </span>
                      <span className="text-lg font-bold text-primary">
                        بطاقة المواصفات الفنية
                      </span>
                    </div>
                    <span className="bg-surface-container-high text-on-surface text-xs font-semibold px-2.5 py-1 rounded-md">
                      توثيق معتمد
                    </span>
                  </div>

                  {/* Specs Grid */}
                  <div className="flex flex-col gap-1.5 text-xs sm:text-sm">
                    <div className="flex items-center justify-between py-2 bg-surface-container-low px-3 rounded-md">
                      <span className="text-on-surface-variant">الخامة الأساسية</span>
                      <span className="text-primary font-semibold">خشب جوز أمريكي صلب (FAS)</span>
                    </div>
                    <div className="flex items-center justify-between py-2 px-3 rounded-md">
                      <span className="text-on-surface-variant">الأبعاد الكلية</span>
                      <span className="text-primary font-mono font-bold" dir="ltr">
                        340 × 110 × 76 cm
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-2 bg-surface-container-low px-3 rounded-md">
                      <span className="text-on-surface-variant">سعة الجلوس</span>
                      <span className="text-primary font-semibold">12 مقعداً مريحاً</span>
                    </div>
                    <div className="flex items-center justify-between py-2 px-3 rounded-md">
                      <span className="text-on-surface-variant">القاعدة والدعامات</span>
                      <span className="text-primary font-semibold">
                        حديد مشغول مطلي بنحاس مطفي
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-2 bg-surface-container-low px-3 rounded-md">
                      <span className="text-on-surface-variant">نوع التشطيب</span>
                      <span className="text-primary font-semibold">
                        4 طبقات زيت وشمع عسل طبيعي (Osmo)
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-2 px-3 rounded-md">
                      <span className="text-on-surface-variant">مدة العمل والتهيئة</span>
                      <span className="text-primary font-semibold">28 يوم عمل يدوي مكثف</span>
                    </div>
                    <div className="flex items-center justify-between py-2 bg-surface-container-low px-3 rounded-md">
                      <span className="text-on-surface-variant">سنة التنفيذ والاعتماد</span>
                      <span className="text-primary font-mono font-bold">2024 م</span>
                    </div>
                  </div>

                  {/* Material Integrity Seal */}
                  <div className="bg-surface-container p-4 rounded-xl flex items-center gap-3.5 mt-1 border border-outline-variant/30">
                    <span className="material-symbols-outlined text-[36px] text-secondary shrink-0">
                      handyman
                    </span>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-primary">
                        ضمان إنشائي يدوي لمدة 10 سنوات
                      </span>
                      <span className="text-xs text-on-surface-variant mt-0.5 leading-relaxed">
                        يشمل ثبات التعاشيق ومقاومة التقوس والتمدد المناخي في بيئة نجد.
                      </span>
                    </div>
                  </div>
                </div>

                {/* Dimension Matrix Visualization Card */}
                <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-outline-variant/30 flex flex-col gap-3">
                  <span className="text-sm font-bold text-primary flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[20px]">
                      straighten
                    </span>
                    المخطط المعماري التوجيهي للمساحة
                  </span>
                  <div className="bg-surface-container-high rounded-xl p-4 flex flex-col items-center justify-center text-center">
                    <svg
                      className="w-full max-w-[320px] text-secondary fill-none stroke-current"
                      strokeWidth="1.5"
                      viewBox="0 0 400 180"
                    >
                      {/* Outer Space Boundary */}
                      <rect
                        className="text-outline-variant"
                        height="160"
                        strokeDasharray="4 4"
                        width="380"
                        x="10"
                        y="10"
                      />
                      {/* Dining Table */}
                      <rect
                        className="text-secondary stroke-2 fill-surface-container"
                        height="80"
                        rx="8"
                        width="260"
                        x="70"
                        y="50"
                      />
                      {/* Chairs Upper */}
                      <circle className="text-outline" cx="105" cy="30" r="10" />
                      <circle className="text-outline" cx="155" cy="30" r="10" />
                      <circle className="text-outline" cx="205" cy="30" r="10" />
                      <circle className="text-outline" cx="255" cy="30" r="10" />
                      <circle className="text-outline" cx="300" cy="30" r="10" />
                      {/* Chairs Lower */}
                      <circle className="text-outline" cx="105" cy="150" r="10" />
                      <circle className="text-outline" cx="155" cy="150" r="10" />
                      <circle className="text-outline" cx="205" cy="150" r="10" />
                      <circle className="text-outline" cx="255" cy="150" r="10" />
                      <circle className="text-outline" cx="300" cy="150" r="10" />
                      {/* Chairs Ends */}
                      <circle className="text-outline" cx="45" cy="90" r="10" />
                      <circle className="text-outline" cx="355" cy="90" r="10" />
                      {/* Dimension arrows */}
                      <line
                        className="text-secondary"
                        strokeWidth="1"
                        x1="70"
                        x2="330"
                        y1="90"
                        y2="90"
                      />
                      <text
                        className="font-mono text-primary font-bold"
                        fill="currentColor"
                        fontSize="12"
                        stroke="none"
                        textAnchor="middle"
                        x="200"
                        y="85"
                      >
                        340 CM
                      </text>
                    </svg>
                    <span className="text-xs text-on-surface-variant mt-2 font-medium">
                      يُنصح بمساحة غرفة لا تقل عن 5.5م × 4م لضمان انسيابية الحركة.
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Side: The Craft Story & Philosophy (7 cols on Desktop) */}
              <div className="lg:col-span-7 flex flex-col gap-6 order-1 lg:order-2">
                {/* Editorial Story Card */}
                <div className="bg-surface-container-lowest rounded-2xl p-6 sm:p-8 shadow-sm border border-outline-variant/30 flex flex-col gap-5">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-[2px] bg-secondary"></span>
                    <span className="text-xs sm:text-sm text-secondary font-bold tracking-wide">
                      فلسفة النجارة العريقة
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-primary">
                    قصة الصنع: حوار هادئ مع خشب الجوز المعمر
                  </h2>

                  <div className="flex flex-col gap-4 text-sm sm:text-base text-on-surface-variant leading-relaxed">
                    <p>
                      تبدأ حكاية هذه الطاولة من فحص دقيق للكتلة الخشبية القادمة من أخشاب الجوز
                      المعمر؛ حيث اخترنا لوحين متماثلين من نفس الشجرة (Bookmatched) لإظهار انعكاس
                      بصري أشبه بكتاب مفتوح يروي تقلبات الفصول وحلقات النمو الطبيعية على مدار
                      ثمانين عاماً.
                    </p>

                    <div className="bg-surface-container-low p-4 sm:p-5 rounded-xl flex items-start gap-3.5 border border-outline-variant/20">
                      <span className="material-symbols-outlined text-[28px] text-secondary shrink-0 mt-0.5">
                        flare
                      </span>
                      <div className="flex flex-col gap-1">
                        <span className="text-base font-bold text-primary">
                          تقنية تعشيقات الفراشة (Butterfly Keys)
                        </span>
                        <p className="text-xs sm:text-sm text-on-surface leading-relaxed">
                          استخدمنا تعشيقات الفراشة الخشبية الصلبة لمنع تشقق الخشب الطبيعي عبر
                          السنين وتأصيل حركته الحرة، مع الحفاظ الكامل على التعرجات والعيوب
                          الجمالية الطبيعية للألياف التي نعتبرها بصمة فريدة لا تتكرر.
                        </p>
                      </div>
                    </div>

                    <p>
                      تطلبت الحواف الحية (Live Edge) عملية نحت وصنفرة يدوية متدرجة عبر ست مراحل
                      مختلفة من الحبيبات الناعمة وصولاً لملمس الحرير، دون إزالة القشرة الطبيعية
                      المنحنية. أما القاعدة فقد تمت موازنتها ميكانيكياً لتحمل وزن اللوح المصمت
                      الذي يتجاوز 180 كيلوغراماً مع الحفاظ على مظهر خفيف يعزف على وتر الأناقة
                      المعاصرة.
                    </p>

                    <p>
                      تم ختام العمل بتشريب الألياف بأربع طبقات متعاقبة من شمع العسل الطبيعي وزيوت
                      الصويا وبذور الكتان العضوية، لتنفس مسام الخشب بحرية وحمايته في آنٍ واحد من
                      السوائل اليومية وحرارة الأكواب.
                    </p>
                  </div>

                  {/* Key Craft Metrics */}
                  <div className="grid grid-cols-3 gap-4 pt-5 border-t border-outline-variant/30 text-center sm:text-right">
                    <div className="flex flex-col">
                      <span className="text-2xl sm:text-3xl text-primary font-black font-mono">
                        100%
                      </span>
                      <span className="text-[11px] sm:text-xs text-on-surface-variant mt-1">
                        طبيعي خالي من الراتنج الكيميائي
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-2xl sm:text-3xl text-secondary font-black font-mono">
                        0
                      </span>
                      <span className="text-[11px] sm:text-xs text-on-surface-variant mt-1">
                        مسامير حديدية في مسطح الخشب
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-2xl sm:text-3xl text-primary font-black font-mono">
                        6
                      </span>
                      <span className="text-[11px] sm:text-xs text-on-surface-variant mt-1">
                        تعشيقات فراشة مدمجة بدقة الميكرون
                      </span>
                    </div>
                  </div>
                </div>

                {/* Master Artisan Voice Callout */}
                <div className="bg-primary-container text-white rounded-2xl p-6 shadow-lg flex items-center gap-5 relative overflow-hidden border border-[#d9b98c]/25">
                  <div className="w-18 h-18 sm:w-20 sm:h-20 shrink-0 rounded-full overflow-hidden border-2 border-secondary shadow-md">
                    <img
                      className="w-full h-full object-cover"
                      alt="Portrait of master Arabic wood artisan"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5wT0MQxqLpqGEPpsgFXJPlqecAymbNoujyOFt6AppF0IfzP62kAIUIBUW4p-bSqHh-yqQL2hmUsvCaulDlTB7V0lm3gplp-CDWjOI12-Fc4SkDBXDdnGbjHcSG3cc3aBwhnhHDo4ktriaJNjiYRRbo55HcOE832G25111G6IUJdq6uw80p-QXkrGf8qfojCXr4_NBAa3etoQ5xlSD65RCu2wZQsvA8QKsQhOr6tOso_5Ae6Lh4uDc"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 z-10">
                    <p className="text-sm sm:text-base text-[#fff9ef] italic leading-relaxed">
                      "الخشب كائن حي لا يموت بالقطع؛ ومهمتنا كنجارين ليست ترويضه بالقوة، بل الاستماع
                      لتموجاته وإعطاؤه الاستقرار ليعيش مائة عام أخرى بأبهى حلّة."
                    </p>
                    <div className="flex items-center gap-2 text-xs text-tertiary-fixed font-semibold mt-1">
                      <span>المعلم أبو الخير</span>
                      <span>•</span>
                      <span>كبير حرفيي الأتيليه</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Prominent Action & Conversion Stage */}
        <section className="w-full bg-background py-12">
          <div className="max-w-[1360px] mx-auto px-6 md:px-12">
            <div className="bg-gradient-to-l from-primary via-primary-container to-primary text-white rounded-2xl p-6 sm:p-10 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden border border-[#d9b98c]/30">
              <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-secondary/10 blur-3xl pointer-events-none"></div>

              <div className="flex flex-col gap-2 text-right max-w-2xl z-10">
                <div className="inline-flex items-center gap-1.5 text-tertiary-fixed text-xs font-semibold">
                  <span className="material-symbols-outlined text-[18px]">verified_user</span>
                  <span>تصميم حصري وفق مقاسات قاعتكم المعمارية</span>
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                  هل ترغب في اقتناء قطعة مماثلة مصممة لبيتك؟
                </h2>
                <p className="text-xs sm:text-sm text-outline-variant leading-relaxed">
                  نقوم بزيارة موقعك لمعاينة الإضاءة والمساحة واختيار ألواح الخشب الخام معاً قبل
                  البدء في عملية النجارة والتشكيل.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto shrink-0 z-10">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#b87333] hover:bg-[#c37c3b] text-white px-5 py-3 rounded-lg text-sm font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] text-center"
                >
                  <span className="material-symbols-outlined text-[20px]">tune</span>
                  <span>اطلب تنفيذ عمل مشابه بمقاسات مخصصة</span>
                </Link>

                <a
                  href="https://wa.me/963988696805?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%B7%D8%A7%D9%88%D9%84%D8%A9%20%D8%A7%D9%84%D8%B7%D8%B9%D8%A7%D9%85%20%D8%A7%D9%84%D9%85%D9%84%D9%83%D9%8A%D8%A9%20%D9%85%D8%B1%D8%AC%D8%B9%20AK-9042"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-3 rounded-lg text-sm font-semibold transition-colors text-center"
                >
                  <span className="material-symbols-outlined text-[20px] text-[#25d366]">
                    chat
                  </span>
                  <span>استفسار واتساب (#AK-9042)</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Related Works Grid */}
        <section className="w-full bg-surface-container-low py-12 border-t border-outline-variant/30">
          <div className="max-w-[1360px] mx-auto px-6 md:px-12">
            <div className="flex items-end justify-between mb-8">
              <div className="flex flex-col gap-1">
                <span className="text-xs sm:text-sm text-secondary font-bold">
                  مختارات من الورشة
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-primary">
                  أعمال ومشروعات ذات صلة
                </h2>
              </div>
              <Link
                to="/gallery"
                className="inline-flex items-center gap-1.5 text-secondary hover:text-primary text-xs sm:text-sm font-semibold transition-colors"
              >
                <span>مشاهدة كافة الأعمال</span>
                <span className="material-symbols-outlined text-[16px]">arrow_back</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedWorks.map((item) => (
                <div
                  key={item.title}
                  className="group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col border border-outline-variant/30"
                >
                  <div className="aspect-[16/10] w-full overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 right-3 bg-primary/80 backdrop-blur-sm text-white text-[11px] px-2.5 py-1 rounded font-medium">
                      {item.material}
                    </span>
                  </div>
                  <div className="p-5 flex flex-col flex-grow justify-between gap-4">
                    <div className="flex flex-col gap-1.5">
                      <span className="text-xs text-secondary font-semibold">
                        {item.category}
                      </span>
                      <h3 className="text-base font-bold text-primary group-hover:text-secondary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-on-surface-variant line-clamp-2 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-3 border-t border-outline-variant/30 text-on-surface-variant text-xs">
                      <span className="font-mono font-medium">{item.dimension}</span>
                      <Link
                        to={item.link}
                        className="text-secondary font-bold group-hover:underline flex items-center gap-1"
                      >
                        عرض التفاصيل
                        <span className="material-symbols-outlined text-[14px]">arrow_back</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fullscreen Lightbox Modal */}
        <ImageLightbox
          isOpen={isLightboxOpen}
          src={activeImage}
          alt={activeAlt}
          caption={`${currentWork.title} — معاينة التفاصيل الحرفية`}
          onClose={() => setIsLightboxOpen(false)}
        />
      </div>
    </div>
  )
}
