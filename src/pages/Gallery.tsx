import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import { ImageLightbox } from '../components/ImageLightbox'
import { fetchWorks, fetchCategories, Work } from '../lib/works'

export default function Gallery() {
  const [works, setWorks] = useState<Work[]>([])
  const [categories, setCategories] = useState<{ id: string; name: string }[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [activeFilter, setActiveFilter] = useState<string>('all')
  const [lightboxImage, setLightboxImage] = useState<{
    src: string
    alt: string
    caption?: string
  } | null>(null)

  useEffect(() => {
    async function loadGalleryData() {
      setLoading(true)
      try {
        const [worksData, categoriesData] = await Promise.all([
          fetchWorks(),
          fetchCategories(),
        ])
        setWorks(worksData)
        setCategories(categoriesData)
      } catch (err) {
        console.error('Failed to load gallery works:', err)
      } finally {
        setLoading(false)
      }
    }
    loadGalleryData()
  }, [])

  // Build dynamic filters based on categories and real works count
  const filterOptions = [
    { key: 'all', label: 'جميع الأعمال', count: works.length, icon: 'select_all' },
    ...categories.map((c) => ({
      key: c.name,
      label: c.name,
      count: works.filter((w) => w.category === c.name || w.categoryId === c.id).length,
      icon: '',
    })),
  ]

  // Filter works dynamically
  const filteredWorks =
    activeFilter === 'all'
      ? works
      : works.filter((w) => w.category === activeFilter || w.categoryId === activeFilter)

  return (
    <div className="w-full bg-background">
      <div className="flex flex-col w-full">
        {/* Top Hero Header / Architectural Title Area */}
        <section className="relative w-full bg-surface-container-low pt-28 pb-16 overflow-hidden border-b border-outline-variant/30">
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
              <span>سجل المشغولات الحية والتحف المعمارية المعتمدة</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary tracking-tight mb-3 max-w-4xl leading-tight">
              معرض الروائع الخشبية
            </h1>

            {/* Subtitle Description */}
            <p className="text-sm sm:text-base text-on-surface-variant max-w-2xl leading-relaxed">
              تصفح تشكيلتنا المتنوعة من الأثاث المفصل، الديكورات المعمارية، والأبواب الفاخرة
              الموثقة مباشرة من سجل إنجازات المعمل.
            </p>

            {/* Key Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-8 w-full max-w-3xl pt-2">
              <div className="flex flex-col items-center p-3 sm:p-4 bg-surface-container-lowest/80 rounded-xl shadow-xs border border-outline-variant/30">
                <span className="text-2xl sm:text-3xl text-primary font-mono font-bold" dir="ltr">
                  {works.length > 0 ? works.length : '100%'}
                </span>
                <span className="text-xs sm:text-sm text-on-surface-variant mt-0.5">
                  {works.length > 0 ? 'أعمال موثقة بالمعرض' : 'تنفيذ يدوي حر'}
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
                  10
                </span>
                <span className="text-xs sm:text-sm text-on-surface-variant mt-0.5">
                  سنوات ضمان الجودة
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
        <section className="w-full py-12 bg-background min-h-[400px]">
          <div className="max-w-[1360px] mx-auto px-6 md:px-12">
            {/* Loading State */}
            {loading && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((n) => (
                  <div
                    key={n}
                    className="animate-pulse bg-surface-container-lowest rounded-2xl overflow-hidden border border-outline-variant/30 flex flex-col h-96"
                  >
                    <div className="h-72 bg-surface-container-high/60 w-full" />
                    <div className="p-5 flex flex-col gap-3">
                      <div className="h-4 bg-surface-container-high/80 rounded w-2/3" />
                      <div className="h-3 bg-surface-container-high/50 rounded w-full" />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Empty State when no works exist */}
            {!loading && filteredWorks.length === 0 && (
              <div className="py-16 px-6 text-center max-w-lg mx-auto bg-surface-container-lowest rounded-2xl border border-outline-variant/30 shadow-xs flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-[#b87333]/15 text-[#b87333] flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-3xl">carpenter</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">
                  {activeFilter === 'all'
                    ? 'جاري تحديث وتوثيق أعمال المعرض'
                    : `لا توجد أعمال في قسم "${activeFilter}" حالياً`}
                </h3>
                <p className="text-xs sm:text-sm text-on-surface-variant mb-6 leading-relaxed">
                  يتم العمل حالياً على إضافة واعتماد أحدث المشغولات من لوحة التحكم. يمكنك طلب استشارة أو تفصيل أي قطعة مخصصة بالتصميم والخشب الذي ترغب به.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-[#b87333] hover:bg-[#c37c3b] text-white px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-xs"
                  >
                    <span className="material-symbols-outlined text-[18px]">add_task</span>
                    <span>طلب استشارة أو تسعير مخصص</span>
                  </Link>
                  {activeFilter !== 'all' && (
                    <button
                      type="button"
                      onClick={() => setActiveFilter('all')}
                      className="px-4 py-2.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-primary text-xs sm:text-sm font-medium transition-colors cursor-pointer"
                    >
                      عرض جميع الأعمال
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* Real Data Grid */}
            {!loading && filteredWorks.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredWorks.map((p) => {
                  const isHero = p.is_wide

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
                          alt={p.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/25 to-transparent"></div>

                        {/* Badges Floating Overlay */}
                        <div className="absolute top-4 right-4 flex flex-wrap items-center gap-2">
                          <span className="px-3 py-1 rounded-full bg-primary-container/85 backdrop-blur-sm text-white text-xs font-medium">
                            {p.category}
                          </span>
                          {p.special_badge && (
                            <span className="px-3 py-1 rounded-full bg-[#b87333]/90 text-white text-xs font-medium flex items-center gap-1 shadow-sm backdrop-blur-sm">
                              <span className="material-symbols-outlined text-[14px]">star</span>
                              {p.special_badge}
                            </span>
                          )}
                          {p.is_featured && !p.special_badge && (
                            <span
                              className="px-2.5 py-1 rounded-full bg-[#b87333]/95 text-amber-300 text-xs font-semibold flex items-center gap-1 shadow-md backdrop-blur-sm border border-amber-400/40"
                              title="عمل مميز"
                            >
                              <span
                                className="material-symbols-outlined text-[15px] text-amber-300"
                                style={{ fontVariationSettings: "'FILL' 1" }}
                              >
                                star
                              </span>
                              <span className="text-white text-[11px]">مميز</span>
                            </span>
                          )}
                        </div>

                        {/* In-image Headline for Spanned Feature */}
                        {isHero && p.project_context && (
                          <div className="absolute bottom-4 right-4 left-4 text-white">
                            <span className="text-xs text-[#eedfda] tracking-wider block">
                              {p.project_context}
                            </span>
                          </div>
                        )}

                        {/* Fullscreen Preview Trigger */}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            setLightboxImage({
                              src: p.image,
                              alt: p.title,
                              caption: `${p.title} — ${p.material}`,
                            })
                          }}
                          className="absolute bottom-4 left-4 w-9 h-9 rounded-full bg-black/60 hover:bg-[#b87333] text-white flex items-center justify-center backdrop-blur-sm shadow-md transition-all cursor-pointer opacity-90 sm:opacity-0 sm:group-hover:opacity-100 z-10"
                          title="تكبير ومعاينة الصورة"
                        >
                          <span className="material-symbols-outlined text-[20px]">zoom_in</span>
                        </button>
                      </div>

                      {/* Card Body */}
                      <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow gap-4 bg-surface-container-lowest">
                        <div>
                          <div className="flex items-center gap-1.5 mb-1.5">
                            <span className="w-2 h-2 rounded-full bg-[#b87333]"></span>
                            <span className="text-xs text-on-surface-variant">{p.material}</span>
                          </div>
                          <Link to={`/work/${p.slug}`}>
                            <h3 className="text-base sm:text-lg font-bold text-primary group-hover:text-[#b87333] transition-colors leading-snug">
                              {p.title}
                            </h3>
                          </Link>
                        </div>

                        {/* Card Footer */}
                        <div className="flex items-center justify-between pt-3 border-t border-surface-container-highest text-xs">
                          {p.warranty ? (
                            <div className="flex items-center gap-1.5 text-on-surface-variant font-medium">
                              <span className="material-symbols-outlined text-[18px] text-[#b87333]">
                                verified
                              </span>
                              <span>{p.warranty}</span>
                            </div>
                          ) : (
                            <span></span>
                          )}

                          <Link
                            to={`/work/${p.slug}`}
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
            )}
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
                الجوية للشرق الأوسط وتمنع الانكماش أو التقوس.
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
                  الذكية برفقة المعلم أبو الخير وكبار الحرفيين لدينا في دمشق.
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
                  href="https://wa.me/963988696805"
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

        {/* Fullscreen Lightbox Modal */}
        <ImageLightbox
          isOpen={!!lightboxImage}
          src={lightboxImage?.src || ''}
          alt={lightboxImage?.alt || ''}
          caption={lightboxImage?.caption}
          onClose={() => setLightboxImage(null)}
        />
      </div>
    </div>
  )
}
