import { useState } from 'react'
import { Link } from 'react-router'

interface GalleryProject {
  id: string
  title: string
  projectContext?: string
  categoryKey: 'tables' | 'doors' | 'kitchens' | 'vanities' | 'cladding' | 'closets'
  categoryLabel: string
  specialBadge?: string
  woodType: string
  woodColorDot: string
  dimensionsOrSpecs: string
  warrantyOrCode?: string
  description?: string
  image: string
  alt: string
  isSpan2?: boolean
  link: string
}

const filterOptions = [
  { key: 'all', label: 'جميع الأعمال', count: 48, icon: 'select_all' },
  { key: 'tables', label: 'طاولات وأثاث فاخر', count: 14 },
  { key: 'doors', label: 'أبواب رئيسية وداخلية', count: 9 },
  { key: 'kitchens', label: 'مطابخ مخصصة', count: 7 },
  { key: 'vanities', label: 'تواليت ومغاسل خشبية', count: 6 },
  { key: 'cladding', label: 'تجليد جدران وأسقف', count: 8 },
  { key: 'closets', label: 'خزائن وغرف ملابس', count: 4 },
]

const galleryProjects: GalleryProject[] = [
  {
    id: 'p1',
    title: 'طاولة اجتماعات رئاسية من قطعة خشب جوز كاملة (Live Edge)',
    projectContext: 'مشروع قصر الثريا، حي الدبلوماسي',
    categoryKey: 'tables',
    categoryLabel: 'طاولات وأثاث فاخر',
    specialBadge: 'قطعة متحفية مخصصة',
    woodType: 'خشب جوز أمريكي أسود معتق + لحام نحاس أصفر مسكوب',
    woodColorDot: 'bg-[#4e4541]',
    dimensionsOrSpecs: 'الطول: 5.8 متر × العرض: 1.4 متر — تعشيق يدوي ياباني مخفي دون مسامير',
    warrantyOrCode: 'ضمان جودة الاستقرار الخشبي: 25 سنة',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBZrJr53Wk9pkQNJFEiV-9sFkOY4IhW3H3serXJdKs4NNakR0coJ6Nptev-YQCRdAmZjG4o372H6oBXauvhtxjVguB_fQWuMjI2fTZZz-6VYEIpI-QgTnzhIbKM4qpEYhF06arxRoeWWoE0l7s7pvWrhQBxePXj07QzTu-wagSXuNtsFjhSZMkDCtWv4exhNGQ8LUYwKR3QttPI1HxuFIEmS1sWCJPkIZp03l3B5-uairIig9hCJvFi',
    alt: 'Grand presidential conference table crafted from a massive live-edge slab of dark American black walnut wood',
    isSpan2: true,
    link: '/work/royal-walnut-dining-table',
  },
  {
    id: 'p2',
    title: 'باب قصر أندلسي بنقوش هندسية وتطعيم نحاسي',
    categoryKey: 'doors',
    categoryLabel: 'أبواب رئيسية وداخلية',
    woodType: 'خشب التيك البورمي الطبيعي المقاوم للعوامل الجوية',
    woodColorDot: 'bg-[#b87333]',
    dimensionsOrSpecs: 'ارتفاع 4.2 متر مع مقابض برونزية صُبت يدوياً',
    warrantyOrCode: 'CODE: DR-AND-09',
    description:
      'تنفيذ معماري أصيل لباب مدخل رئيس بارتفاع 4.2 متر مزود بعوازل صوتية وحرارية خفية مع مقابض برونزية صُبت يدوياً.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCbI5it7IKDuLrB6vC-E7vsNOgAyS2PQHLzzwPcLY5L-FEqeKLTFrRGoFGIMdSjZtoH5EiA2FwPFTv5DNT7eYB3nj92QXRBSGh72cz-C-Ci7oGraIynTeRKi3t9QE6RYdHDCl5KTqKmWnGzMG_l-_adWG6AmxpRfZnVbcvGu19F2Tq2HB4H-TmELm9I179zFDf-wL2GgRvWIYZj8g2P1oLegexTOw9Y45IBA1vbyDQx5oErp-iuOiJE',
    alt: 'Imposing Andalusian entrance palace door crafted from solid aged teak wood with arabesque geometric star patterns',
    link: '/work/royal-walnut-dining-table',
  },
  {
    id: 'p3',
    title: 'تجليد سقف مفرغ ومصابيح معمارية لمطعم راقٍ',
    categoryKey: 'cladding',
    categoryLabel: 'تجليد جدران وأسقف',
    woodType: 'خشب سنديان أوروبي أبيض (European White Oak)',
    woodColorDot: 'bg-[#eedfda]',
    dimensionsOrSpecs: 'شرائح خشبية مائلة تم حساب تردداتها لامتصاص الصوت',
    warrantyOrCode: 'CODE: CLD-CEIL-14',
    description:
      'شرائح خشبية مائلة تم حساب تردداتها لامتصاص الصوت وتوزيع الإضاءة الدافئة بنسق بانورامي ساحر.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC3P_oWhx6zhRl_VKZcBN5hyXjXkUJlu6R2n1_dcQoO4xJavwryNZR5mdpuzVBsDslt5XzBn8HZi-j80Z0NSTZ9xls08gzLiTjSBO3Yyhh4DJx3yphK-EjMQbSVfpIx2Z-sz7yR_lkTsDeGtLcFORECNrI-zqWxLxj2bQoQPtclowfn7_ng23nfyoKXboZxihwkikXjTv1ZhzhKrn9d77qGdgJcssPD01u4ZI2JTn7OY2LKwkgMWyj-',
    alt: 'Suspended timber ceiling louvers made of white European oak wood ribbons curving dynamically',
    link: '/work/royal-walnut-dining-table',
  },
  {
    id: 'p4',
    title: 'مطبخ جزيرة مفتوح مع مسار سحب ذكي',
    categoryKey: 'kitchens',
    categoryLabel: 'مطابخ مخصصة',
    woodType: 'سنديان أمريكي فاتح مصقول بزيت الكتان الطبيعي',
    woodColorDot: 'bg-[#d2c4bf]',
    dimensionsOrSpecs: 'دمج بين حجر الكوارتزيت الطبيعي وألواح السنديان المقاومة',
    warrantyOrCode: 'CODE: KT-OAK-03',
    description:
      'تصميم ياباني-إسكندنافي هادئ يدمج بين حجر الكوارتزيت الطبيعي وألواح السنديان المقاومة للحرارة والرطوبة.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD8PmxjP5sSZcIy20MwyUzpiJNkorgX-wrStm1EyiBCRDxK1b43uA8WhVx3-XMTQpuhwDpnw0bjtSDTtwNgbhCHqwaTWRLSCa-ek6hTXwLA5x7QiIJyJelcg4r3hdA1GF9U-aVYYOi9MBKftT_DZjD7rBofuddLG6u5VyToaFVYs7nGH01w48CEcBwJlf1LM_ap8x6-RPA-6vj2r4xqiyM6T943YMBxEmD07KoV3j5fjcYSORPAnPT1',
    alt: 'Architectural minimalist open luxury kitchen with central monolithic island made of pale American white oak',
    link: '/work/royal-walnut-dining-table',
  },
  {
    id: 'p5',
    title: 'مكتب تنفيذي خاص بأدراج سرية كهروميكانيكية',
    categoryKey: 'tables',
    categoryLabel: 'طاولات وأثاث فاخر',
    woodType: 'جوز مدخن (Smoked Walnut) وجلود إيطالية طبيعية',
    woodColorDot: 'bg-[#4e4541]',
    dimensionsOrSpecs: 'مفاصل غير مرئية وخزائن مخفية تفتح ببصمة اليد',
    warrantyOrCode: 'CODE: DSK-SMK-88',
    description:
      'تحفة نجارية صُممت خصيصاً لمقر شركة استثمارية بمفاصل غير مرئية وخزائن مخفية تفتح ببصمة اليد.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA0nWHP49Z32ja_tJ2EtoFLMxZurzFGBTM6fUaxWCdwTkl_Rla-oc49VvBEwrCrspS5diZ6N1hCt4Ph1vAAukTuDf7p_mzq8dc5V0QHuwMCUaNrOdmB-eq2xeRm1rjR2m3kKTBy5R-Dn2_Jr7MDyDI98WoGY0Vnb89oDoqEeyz5Lmp-hKDznoTL67fMM2t4LPY-UqfuqSd47MljRJ99exRBhcR8dNO4LMCNvLLXBYWjUCtc8FnpBaN9',
    alt: 'Executive bespoke writing desk constructed from smoked dark walnut wood and oiled leather inlay pad',
    link: '/work/royal-walnut-dining-table',
  },
  {
    id: 'p6',
    title: 'فاصل خشبي مشربية متحرك مع مسارات خفية',
    categoryKey: 'cladding',
    categoryLabel: 'تجليد جدران وأسقف',
    woodType: 'خشب المران (Ash) والأرز المعطر الطبيعي',
    woodColorDot: 'bg-[#ffdcc2]',
    dimensionsOrSpecs: 'تفريغ هندسي يوفر الخصوصية التامة مع تدفق الضوء',
    warrantyOrCode: 'CODE: PRT-LCE-21',
    description:
      'تصميم تفريغ هندسي يتيح نفاذ الضوء بنعومة مع توفير الخصوصية التامة للمجالس وصالات الاستقبال المفتوحة.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBh1qUdKxq0CIFwROhpM7JqDDDwmsIL8iHjV-N-u-5EKnG9_yNBE8wvGEREPhE9juPZf84Uao9ytFAql_gHfDP_1B-HPmavewT-2BM47jTYSd2xZz6hybSsq-cfRrQT6gZQSPYb8NNiUdcZMnAT7Q9Epx22QJOh5sAhOP6T0MdnBxHHVembAe8vxv9GJ-gdkCI9txausRAQxPx8Y-PkPOk4dsGyBiTnVQOdUiHEvffiqRxiDUbKOCKV',
    alt: 'Floor to ceiling freestanding timber room partition screen divider inspired by geometric mashrabiya lattice work',
    link: '/work/royal-walnut-dining-table',
  },
  {
    id: 'p7',
    title: 'كونسول مدخل ومغسلة ضيوف بمرآة معتقة',
    categoryKey: 'vanities',
    categoryLabel: 'تواليت ومغاسل خشبية',
    woodType: 'خشب الزيتون المعتق والمطلي بطبقة حماية بحرية عازلة',
    woodColorDot: 'bg-[#735a35]',
    dimensionsOrSpecs: 'معالجة نانوية تمنع تأثر الخشب برذاذ الماء والرطوبة',
    warrantyOrCode: 'CODE: VAN-OLV-07',
    description:
      'معالجة سطحية نانوية تمنع تأثر الخشب برذاذ الماء والرطوبة مع إبراز عروق الخشب الطبيعية بأصالة تامة.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAUEl9828R5WVBdecjd-z2e37QgWxZsscWgoJN27B5p0qIcBzpEXQIBGZQDYl4UkQsMGBtr3Ro9JX2Ye3Q0FsjgOrdWszvZ3Pd8YG2eTftAzD6wMcf3yk7D0gkbaV2-IEnqZjMtskRyiiJxK5cTOf9NX4liuqhr3XCmpqFs2rKbkbIHEJelRliAzXdFdI680SFuMLfkDOJz5k6wWgd4N1GhJtItnHCL6a64aN5exPr72Dvkh3CtaGCW',
    alt: 'Luxury bathroom vanity console and entrance unit featuring carved solid olive wood and aged oak basin pedestal',
    link: '/work/royal-walnut-dining-table',
  },
  {
    id: 'p8',
    title: 'سرير نوم ماستر بتصميم طافي ومدمج مع أرفف وظهر جداري مسرّح',
    projectContext: 'جناح فيلا الندى، الرياض',
    categoryKey: 'closets',
    categoryLabel: 'خزائن وغرف ملابس',
    specialBadge: 'أجنحة فندقية وفيلا خاصة',
    woodType: 'سنديان أحمر معتق + شواحن لاسلكية خفية داخل الخشب الصلب',
    woodColorDot: 'bg-[#eedfda]',
    dimensionsOrSpecs: 'إطار فولاذي مصفح مدمج داخل كتل الخشب لتحمل أوزان تصل إلى 600 كغم بانسيابية',
    warrantyOrCode: 'تصميم ياباني معاصر (Japandi)',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDITUxsJj4XjjO_IxEDZCSsx065dCybMNdSJDaor5YLFt_FUYCx_-VTuiseoqp7nLR1I5KP5_8q0UH4UBSf1Bwe9IrocBOCg15-Z8umebr4ua7ZofRk7O4JzDvnyZuZ_LaeqFJ6-Pv2f0nVG8kc1RPA7r0Jfe9hm863evFjMbfoFifMf2jw8dbYTAndJUhoeWWSxEWG5gwg7beg-7xYig2iAjN7Hh5DAclkzMjJyZwRfHnJ5bQtyvw1',
    alt: 'Master bedroom floating cantilevered solid teak bed frame with wide continuous fluted headboard panels',
    isSpan2: true,
    link: '/work/royal-walnut-dining-table',
  },
]

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<string>('all')
  const [loadingMore, setLoadingMore] = useState<boolean>(false)
  const [allLoaded, setAllLoaded] = useState<boolean>(false)

  const filteredProjects =
    activeFilter === 'all'
      ? galleryProjects
      : galleryProjects.filter((p) => p.categoryKey === activeFilter)

  const handleLoadMore = () => {
    setLoadingMore(true)
    setTimeout(() => {
      setLoadingMore(false)
      setAllLoaded(true)
    }, 900)
  }

  return (
    <div className="w-full pt-20 bg-background">
      <div className="flex flex-col w-full">
        {/* Top Hero Header / Architectural Title Area */}
        <section className="relative w-full bg-surface-container-low pt-12 pb-16 overflow-hidden border-b border-outline-variant/30">
          {/* Subtle Architectural Backdrop Texture */}
          <div className="absolute inset-0 opacity-15 pointer-events-none flex items-center justify-center">
            <svg fill="none" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
              <pattern height="60" id="grain-lattice" patternUnits="userSpaceOnUse" width="60">
                <path
                  d="M60 0L0 60M0 0L60 60"
                  stroke="#735a35"
                  strokeDasharray="2 4"
                  strokeWidth="0.5"
                />
                <circle cx="30" cy="30" fill="#735a35" opacity="0.6" r="1.5" />
              </pattern>
              <rect fill="url(#grain-lattice)" height="100%" width="100%" />
            </svg>
          </div>

          {/* Soft Radial Gradient Depth Accent */}
          <div className="absolute -top-24 right-1/4 w-96 h-96 bg-secondary-container/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative max-w-[1360px] mx-auto px-6 md:px-12 flex flex-col items-center text-center">
            {/* Monogram Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-highest/80 text-on-surface-variant text-xs sm:text-sm mb-4 shadow-xs border border-outline-variant/30">
              <span
                className="material-symbols-outlined text-[16px] text-[#b87333]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                carpenter
              </span>
              <span>سجل المشغولات الاستثنائية والتحف الفنية المعمارية</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary tracking-tight mb-3 max-w-4xl leading-tight">
              معرض الروائع الخشبية
            </h1>

            {/* Subtitle Description */}
            <p className="text-sm sm:text-base text-on-surface-variant max-w-2xl leading-relaxed">
              تصفح تشكيلتنا المتنوعة من الأثاث المفصل، الديكورات المعمارية، والأبواب الفاخرة
              المصنوعة يدوياً بحرفية مطلقة.
            </p>

            {/* Key Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-8 w-full max-w-3xl pt-2">
              <div className="flex flex-col items-center p-3 sm:p-4 bg-surface-container-lowest/80 rounded-xl shadow-xs border border-outline-variant/30">
                <span className="text-2xl sm:text-3xl text-primary font-mono font-bold" dir="ltr">
                  +450
                </span>
                <span className="text-xs sm:text-sm text-on-surface-variant mt-0.5">
                  قطعة أثاث معمارية
                </span>
              </div>
              <div className="flex flex-col items-center p-3 sm:p-4 bg-surface-container-lowest/80 rounded-xl shadow-xs border border-outline-variant/30">
                <span className="text-2xl sm:text-3xl text-primary font-mono font-bold" dir="ltr">
                  100%
                </span>
                <span className="text-xs sm:text-sm text-on-surface-variant mt-0.5">
                  أخشاب طبيعية صلبة
                </span>
              </div>
              <div className="flex flex-col items-center p-3 sm:p-4 bg-surface-container-lowest/80 rounded-xl shadow-xs border border-outline-variant/30">
                <span className="text-2xl sm:text-3xl text-primary font-mono font-bold" dir="ltr">
                  25+
                </span>
                <span className="text-xs sm:text-sm text-on-surface-variant mt-0.5">
                  سنة إتقان وخبرة
                </span>
              </div>
              <div className="flex flex-col items-center p-3 sm:p-4 bg-surface-container-lowest/80 rounded-xl shadow-xs border border-outline-variant/30">
                <span className="text-2xl sm:text-3xl text-primary font-mono font-bold" dir="ltr">
                  15
                </span>
                <span className="text-xs sm:text-sm text-on-surface-variant mt-0.5">
                  نوع خشب ونحاس معتق
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Filter & Categorization Bar */}
        <section className="sticky top-20 z-30 w-full bg-surface-bright/95 backdrop-blur-md py-3 shadow-xs border-b border-outline-variant/30">
          <div className="max-w-[1360px] mx-auto px-6 md:px-12">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar scroll-smooth">
              {filterOptions.map((f) => {
                const isActive = activeFilter === f.key
                return (
                  <button
                    key={f.key}
                    type="button"
                    onClick={() => setActiveFilter(f.key)}
                    className={`shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#b87333] text-white shadow-md'
                        : 'bg-[#d9b98c]/20 hover:bg-[#d9b98c]/35 text-on-surface shadow-xs'
                    }`}
                  >
                    {f.icon && (
                      <span className="material-symbols-outlined text-[18px]">{f.icon}</span>
                    )}
                    <span>{f.label}</span>
                    <span
                      className={`text-[11px] px-1.5 py-0.2 rounded-full ${
                        isActive
                          ? 'bg-white/20 text-white'
                          : 'bg-surface-container-highest text-on-surface-variant'
                      }`}
                    >
                      {f.count}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        </section>

        {/* Gallery Grid Section */}
        <section className="w-full py-12 bg-background">
          <div className="max-w-[1360px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((p) => {
                const isHero = p.isSpan2

                return (
                  <article
                    key={p.id}
                    className={`group relative flex flex-col bg-surface-container-lowest rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 border border-outline-variant/30 ${
                      isHero ? 'md:col-span-2 lg:col-span-2' : ''
                    }`}
                  >
                    <div
                      className={`relative w-full overflow-hidden bg-surface-container ${
                        isHero ? 'h-72 sm:h-80 md:h-[420px]' : 'h-72 sm:h-80'
                      }`}
                    >
                      <img
                        src={p.image}
                        alt={p.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/25 to-transparent"></div>

                      {/* Badges Floating Overlay */}
                      <div className="absolute top-4 right-4 flex flex-wrap gap-2">
                        <span className="px-3 py-1 rounded-full bg-primary-container/85 backdrop-blur-sm text-white text-xs font-medium">
                          {p.categoryLabel}
                        </span>
                        {p.specialBadge && (
                          <span className="px-3 py-1 rounded-full bg-[#b87333]/90 text-white text-xs font-medium flex items-center gap-1">
                            <span className="material-symbols-outlined text-[14px]">star</span>
                            {p.specialBadge}
                          </span>
                        )}
                      </div>

                      {/* In-image Headline for Spanned Feature */}
                      {isHero && (
                        <div className="absolute bottom-4 right-4 left-4 text-white">
                          {p.projectContext && (
                            <span className="text-xs text-[#eedfda] tracking-wider block">
                              {p.projectContext}
                            </span>
                          )}
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mt-1">
                            {p.title}
                          </h3>
                        </div>
                      )}
                    </div>

                    {/* Card Body */}
                    <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow gap-4 bg-surface-container-lowest">
                      {!isHero ? (
                        <div>
                          <div className="flex items-center gap-1.5 mb-1.5">
                            <span className={`w-2 h-2 rounded-full ${p.woodColorDot}`}></span>
                            <span className="text-xs text-on-surface-variant">{p.woodType}</span>
                          </div>
                          <h3 className="text-base sm:text-lg font-bold text-primary group-hover:text-[#b87333] transition-colors leading-snug">
                            {p.title}
                          </h3>
                          {p.description && (
                            <p className="text-xs sm:text-sm text-on-surface-variant mt-2 line-clamp-2 leading-relaxed">
                              {p.description}
                            </p>
                          )}
                        </div>
                      ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="flex flex-col gap-1">
                            <span className="text-xs text-on-surface-variant">
                              الخشب والخامات المستعملة:
                            </span>
                            <div className="flex items-center gap-2 text-primary text-sm sm:text-base font-bold">
                              <span className={`w-2.5 h-2.5 rounded-full ${p.woodColorDot}`}></span>
                              <span>{p.woodType}</span>
                            </div>
                          </div>
                          <div className="flex flex-col gap-1">
                            <span className="text-xs text-on-surface-variant">
                              الأبعاد وطريقة التجميع:
                            </span>
                            <span className="text-xs sm:text-sm text-on-surface">
                              {p.dimensionsOrSpecs}
                            </span>
                          </div>
                        </div>
                      )}

                      {/* Card Footer */}
                      <div className="flex items-center justify-between pt-3 border-t border-surface-container-highest text-xs">
                        {p.warrantyOrCode ? (
                          <div className="flex items-center gap-1.5 text-on-surface-variant font-medium">
                            {p.warrantyOrCode.startsWith('ضمان') && (
                              <span className="material-symbols-outlined text-[18px] text-[#b87333]">
                                verified
                              </span>
                            )}
                            <span
                              className={
                                p.warrantyOrCode.startsWith('CODE:')
                                  ? 'font-mono text-secondary'
                                  : ''
                              }
                            >
                              {p.warrantyOrCode}
                            </span>
                          </div>
                        ) : (
                          <span></span>
                        )}

                        <Link
                          to={p.link}
                          className="inline-flex items-center gap-1 text-[#b87333] hover:text-primary font-semibold text-xs sm:text-sm transition-colors group/btn"
                        >
                          <span>عرض تفاصيل المشروع</span>
                          <span className="material-symbols-outlined text-[16px] group-hover/btn:-translate-x-1 transition-transform">
                            arrow_back
                          </span>
                        </Link>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>

            {/* Pagination / Load More Section */}
            <div className="flex flex-col items-center justify-center mt-12 gap-3">
              <div className="flex items-center gap-3 text-on-surface-variant text-xs">
                <span>
                  {allLoaded
                    ? 'تم عرض 48 من أصل 48 مشروعاً منفذاً'
                    : 'تم عرض 8 من أصل 48 مشروعاً منفذاً'}
                </span>
                <div className="w-32 h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-[#b87333] rounded-full transition-all duration-500 ${
                      allLoaded ? 'w-full' : 'w-1/6'
                    }`}
                  ></div>
                </div>
              </div>

              <button
                type="button"
                onClick={handleLoadMore}
                disabled={loadingMore || allLoaded}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-surface-container hover:bg-surface-container-high text-primary text-xs sm:text-sm font-semibold shadow-xs transition-all border border-outline-variant/30 ${
                  allLoaded ? 'opacity-80 cursor-default' : 'active:scale-98 cursor-pointer'
                }`}
              >
                {loadingMore ? (
                  <>
                    <span className="material-symbols-outlined text-[20px] animate-spin text-[#b87333]">
                      progress_activity
                    </span>
                    <span>جارٍ تجهيز صور المشاريع الإضافية...</span>
                  </>
                ) : allLoaded ? (
                  <>
                    <span className="material-symbols-outlined text-[20px] text-[#25d366]">
                      check_circle
                    </span>
                    <span>تم عرض جميع الأعمال المعتمدة حالياً</span>
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-[20px] text-[#b87333]">
                      expand_circle_down
                    </span>
                    <span>تحميل المزيد من الأعمال والقطع الفنية</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </section>

        {/* Interactive Wood & Material Anatomy Strip */}
        <section className="w-full bg-surface-container py-12 border-t border-b border-outline-variant/30">
          <div className="max-w-[1360px] mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-xs text-[#b87333] uppercase font-mono tracking-wider font-semibold">
                  SPECIFICATION &amp; SOURCING
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mt-1">
                  أصناف الأخشاب المستدامة في ورشتنا
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-on-surface-variant max-w-md leading-relaxed">
                نستورد ألواح الخشب الصلب المجفف في أفران خاصة لدرجة رطوبة 8% - 10% تلائم البيئة
                الجوية للخليج العربي وتمنع الانكماش أو التقوس.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {/* Timber 1 */}
              <div className="p-5 bg-surface-container-lowest rounded-xl shadow-xs border border-outline-variant/30 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-base font-bold text-primary">الجوز الأمريكي</span>
                    <span className="w-4 h-4 rounded-full bg-[#2b2320]"></span>
                  </div>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    يتميز بكثافة عالية وملمس ناعم وعروق بنية دافئة ذات تموجات ذهبية معتمة، الخيار
                    الأول لطاولات القصور والمكاتب.
                  </p>
                </div>
                <div className="mt-4 pt-2 border-t border-surface-container-highest flex items-center justify-between text-on-surface-variant font-mono text-[11px]">
                  <span>صلابة جانكا: 1,010 lbf</span>
                  <span>المنشأ: فيرجينيا</span>
                </div>
              </div>

              {/* Timber 2 */}
              <div className="p-5 bg-surface-container-lowest rounded-xl shadow-xs border border-outline-variant/30 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-base font-bold text-primary">السنديان الأبيض</span>
                    <span className="w-4 h-4 rounded-full bg-[#d2c4bf]"></span>
                  </div>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    مقاوم فائق للرطوبة وعوامل الزمن بفضل خلايا التيلوز المسدودة. مثالي للمطابخ
                    الحديثة والأرضيات المعمارية.
                  </p>
                </div>
                <div className="mt-4 pt-2 border-t border-surface-container-highest flex items-center justify-between text-on-surface-variant font-mono text-[11px]">
                  <span>صلابة جانكا: 1,360 lbf</span>
                  <span>المنشأ: ألمانيا</span>
                </div>
              </div>

              {/* Timber 3 */}
              <div className="p-5 bg-surface-container-lowest rounded-xl shadow-xs border border-outline-variant/30 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-base font-bold text-primary">التيك البورمي المعتق</span>
                    <span className="w-4 h-4 rounded-full bg-[#735a35]"></span>
                  </div>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    مشبع بزيوت طبيعية نادرة تطرد الحشرات وتصمد في الواجهات الخارجية وأبواب القصور دون
                    أن تتأثر بوهج الشمس.
                  </p>
                </div>
                <div className="mt-4 pt-2 border-t border-surface-container-highest flex items-center justify-between text-on-surface-variant font-mono text-[11px]">
                  <span>صلابة جانكا: 1,070 lbf</span>
                  <span>المنشأ: ميانمار</span>
                </div>
              </div>

              {/* Timber 4 */}
              <div className="p-5 bg-surface-container-lowest rounded-xl shadow-xs border border-outline-variant/30 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-base font-bold text-primary">الرماد والزان الطبيعي</span>
                    <span className="w-4 h-4 rounded-full bg-[#eedfda]"></span>
                  </div>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    مرونة فائقة تسمح بالانحناء الحراري والتشكيل النحتي المقوس المستخدم في الكراسي
                    الإسكندنافية والشبكات.
                  </p>
                </div>
                <div className="mt-4 pt-2 border-t border-surface-container-highest flex items-center justify-between text-on-surface-variant font-mono text-[11px]">
                  <span>صلابة جانكا: 1,320 lbf</span>
                  <span>المنشأ: السويد</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA: Book an Atelier Visit / Sample Inspection */}
        <section className="w-full bg-primary-container text-white py-12 relative overflow-hidden">
          {/* Ambient glow decorative backdrop */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#b87333]/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -left-20 -top-20 w-80 h-80 bg-secondary-container/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-[1360px] mx-auto px-6 md:px-12 relative z-10">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl border border-[#d9b98c]/30">
              <div className="flex flex-col text-right max-w-2xl">
                <div className="inline-flex items-center gap-1.5 text-[#eedfda] text-xs font-semibold mb-2">
                  <span className="material-symbols-outlined text-[18px] text-[#b87333]">
                    domain_verification
                  </span>
                  <span>استشارة خاصة وتجربة بصرية فريدة</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight">
                  زر ورشتنا وعاين خامات الخشب والتشطيبات بنفسك
                </h2>
                <p className="text-xs sm:text-sm text-[#d2c4bf] mt-2 leading-relaxed">
                  المس عينات خشب الجوز والسنديان والتيك، واكتشف خيارات التطعيم بالنحاس وأقفال الدرج
                  الذكية برفقة المعلم أبو الخير وكبار الحرفيين لدينا في الرياض.
                </p>
                <div className="flex flex-wrap items-center gap-4 mt-4 text-xs text-[#d2c4bf]/90">
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-[#b87333]">
                      check_circle
                    </span>
                    <span>جلسة تصميم ومراجعة المخططات الهندسية</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-[#b87333]">
                      check_circle
                    </span>
                    <span>تسليم عينات ملموسة لموقع مشروعك مجاناً</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto shrink-0">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#b87333] hover:bg-[#c37c3b] text-white px-6 py-3 rounded-lg text-sm font-semibold shadow-lg transition-transform hover:-translate-y-0.5 active:translate-y-0 text-center"
                >
                  <span className="material-symbols-outlined text-[20px]">calendar_month</span>
                  <span>حجز موعد زيارة للمشغل</span>
                </Link>

                <a
                  href="https://wa.me/966501234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-3 rounded-lg text-sm font-semibold transition-colors text-center"
                >
                  <span className="material-symbols-outlined text-[20px] text-[#25d366]">chat</span>
                  <span>استفسار واتساب فوري</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
