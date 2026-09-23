import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router'
import { fetchWorkBySlug, fetchWorks, Work } from '../lib/works'
import { ImageLightbox } from '../components/ImageLightbox'

export default function WorkDetail() {
  const { slug } = useParams()
  const [currentWork, setCurrentWork] = useState<Work | null>(null)
  const [relatedWorks, setRelatedWorks] = useState<Work[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [activeImage, setActiveImage] = useState<string>('')
  const [activeAlt, setActiveAlt] = useState<string>('')
  const [fading, setFading] = useState<boolean>(false)
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false)

  useEffect(() => {
    async function loadData() {
      if (!slug) return
      setLoading(true)
      try {
        const work = await fetchWorkBySlug(slug)
        setCurrentWork(work)

        if (work) {
          const mainImg = work.image || (work.images && work.images[0]?.image_url) || ''
          setActiveImage(mainImg)
          setActiveAlt(work.title)

          // Fetch related works from Supabase
          const allWorks = await fetchWorks()
          const related = allWorks
            .filter((w) => w.id !== work.id && (w.category === work.category || w.categoryId === work.categoryId))
            .slice(0, 3)

          // Fallback to any other works if not enough in same category
          if (related.length < 3) {
            const others = allWorks.filter((w) => w.id !== work.id && !related.some((r) => r.id === w.id))
            setRelatedWorks([...related, ...others].slice(0, 3))
          } else {
            setRelatedWorks(related)
          }
        }
      } catch (err) {
        console.error('Error loading work detail:', err)
      } finally {
        setLoading(false)
      }
    }
    loadData()
  }, [slug])

  const handleAngleChange = (imageUrl: string, title?: string) => {
    setFading(true)
    setTimeout(() => {
      setActiveImage(imageUrl)
      setActiveAlt(title || currentWork?.title || '')
      setFading(false)
    }, 150)
  }

  // Loading skeleton
  if (loading) {
    return (
      <div className="w-full pt-28 pb-20 bg-background min-h-screen">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 flex flex-col gap-8 animate-pulse">
          <div className="h-6 bg-surface-container-high rounded w-1/3"></div>
          <div className="h-10 bg-surface-container-high rounded w-2/3"></div>
          <div className="aspect-[16/9] md:aspect-[21/9] bg-surface-container-high rounded-2xl w-full"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="h-64 bg-surface-container-high rounded-xl"></div>
            <div className="h-64 bg-surface-container-high rounded-xl"></div>
          </div>
        </div>
      </div>
    )
  }

  // Not found state
  if (!currentWork) {
    return (
      <div className="w-full pt-32 pb-24 bg-background min-h-[70vh] flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-6 py-12 bg-surface-container-lowest rounded-2xl border border-outline-variant/30 shadow-sm flex flex-col items-center">
          <div className="w-16 h-16 rounded-2xl bg-[#b87333]/15 text-[#b87333] flex items-center justify-center mb-4">
            <span className="material-symbols-outlined text-3xl">sentiment_dissatisfied</span>
          </div>
          <h2 className="text-2xl font-bold text-primary mb-2">المشروع غير متوفر</h2>
          <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">
            لم نتمكن من العثور على تفاصيل هذا العمل في قاعدة البيانات، قد يكون قد تم تعديل رابطه أو نقله.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 bg-[#b87333] hover:bg-[#c37c3b] text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-xs"
            >
              <span className="material-symbols-outlined text-[18px]">arrow_back</span>
              <span>العودة إلى المعرض</span>
            </Link>
            <Link
              to="/"
              className="px-4 py-2.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-primary text-sm font-medium transition-colors"
            >
              الصفحة الرئيسية
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const galleryImages =
    currentWork.images && currentWork.images.length > 0
      ? currentWork.images
      : currentWork.image
      ? [{ id: '1', work_id: currentWork.id, image_url: currentWork.image, title: currentWork.title }]
      : []

  const refCode = currentWork.reference_code || `#AK-${currentWork.id ? currentWork.id.slice(0, 5) : '001'}`
  const encodedWhatsappMsg = encodeURIComponent(
    `مرحباً ورشة أبو الخير، أرغب في الاستفسار عن تفاصيل العمل "${currentWork.title}" (المرجع: ${refCode}).`
  )

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
              <span className="text-secondary font-medium">{currentWork.category}</span>
              <span className="material-symbols-outlined text-[14px] text-outline">
                chevron_left
              </span>
              <span className="text-primary font-medium truncate max-w-xs">{currentWork.title}</span>
            </nav>

            <div className="flex items-center gap-3">
              <span className="bg-surface-container-highest text-on-surface text-xs px-3 py-1 rounded-full">
                المعرف المرجعي: <span className="font-mono font-semibold text-tertiary">{refCode}</span>
              </span>
              <span className="bg-secondary-container text-on-secondary-container text-xs px-3 py-1 rounded-full flex items-center gap-1.5 font-medium">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                قطعة حصرية معتمدة
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
                  <span>{currentWork.project_context || 'مشروع معماري خاص • ورشة أبو الخير'}</span>
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary tracking-tight leading-tight">
                  {currentWork.title}
                </h1>
                {currentWork.description && (
                  <p className="text-sm sm:text-base text-on-surface-variant max-w-3xl leading-relaxed mt-1">
                    {currentWork.description}
                  </p>
                )}
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
                  src={activeImage || currentWork.image}
                  alt={activeAlt || currentWork.title}
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
                      {currentWork.material}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-primary/80 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs">
                    <span className="material-symbols-outlined text-[16px] text-secondary-fixed">
                      photo_camera
                    </span>
                    <span>تصوير حي من المعمل والموقع</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Thumbnail Strip / Gallery Images */}
            {galleryImages.length > 1 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5">
                {galleryImages.map((imgItem, idx) => {
                  const isSelected = activeImage === imgItem.image_url
                  return (
                    <button
                      key={imgItem.id || idx}
                      type="button"
                      onClick={() => handleAngleChange(imgItem.image_url, imgItem.title)}
                      className={`group flex flex-col text-right rounded-xl overflow-hidden bg-surface-container p-2 transition-all hover:bg-surface-container-high focus:outline-none cursor-pointer border ${
                        isSelected
                          ? 'border-secondary ring-2 ring-secondary/40 shadow-md'
                          : 'border-transparent hover:border-outline-variant/50'
                      }`}
                    >
                      <div className="aspect-[4/3] w-full rounded-lg overflow-hidden relative mb-2">
                        <img
                          src={imgItem.image_url}
                          alt={imgItem.title || currentWork.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {imgItem.badge && (
                          <span className="absolute top-2 right-2 bg-primary/80 backdrop-blur-sm text-white text-[11px] px-2 py-0.5 rounded font-medium">
                            {imgItem.badge}
                          </span>
                        )}
                      </div>
                      <span
                        className={`text-sm font-semibold transition-colors truncate ${
                          isSelected ? 'text-secondary' : 'text-on-surface group-hover:text-secondary'
                        }`}
                      >
                        {imgItem.title || `زاوية العرض ${idx + 1}`}
                      </span>
                    </button>
                  )
                })}
              </div>
            )}
          </div>
        </section>

        {/* Technical Spec Sheets & Narrative Split */}
        <section className="w-full bg-surface-container-low py-12 border-t border-b border-outline-variant/30">
          <div className="max-w-[1360px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Side: Technical Specifications Matrix (5 cols on Desktop) */}
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
                      <span className="text-primary font-semibold">{currentWork.material}</span>
                    </div>
                    {currentWork.dimensions && (
                      <div className="flex items-center justify-between py-2 px-3 rounded-md">
                        <span className="text-on-surface-variant">الأبعاد الكلية</span>
                        <span className="text-primary font-mono font-bold" dir="ltr">
                          {currentWork.dimensions}
                        </span>
                      </div>
                    )}
                    <div className="flex items-center justify-between py-2 bg-surface-container-low px-3 rounded-md">
                      <span className="text-on-surface-variant">التصنيف المعماري</span>
                      <span className="text-primary font-semibold">{currentWork.category}</span>
                    </div>
                    <div className="flex items-center justify-between py-2 px-3 rounded-md">
                      <span className="text-on-surface-variant">نوع التشطيب</span>
                      <span className="text-primary font-semibold">
                        {currentWork.finish}
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-2 bg-surface-container-low px-3 rounded-md">
                      <span className="text-on-surface-variant">مدة العمل والتهيئة</span>
                      <span className="text-primary font-semibold">{currentWork.duration}</span>
                    </div>
                    {currentWork.approx_price && (
                      <div className="flex items-center justify-between py-2 px-3 rounded-md">
                        <span className="text-on-surface-variant">السعر التقديري</span>
                        <span className="text-secondary font-mono font-bold">
                          {currentWork.approx_price.toLocaleString()} ر.س
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Material Integrity Seal */}
                  <div className="bg-surface-container p-4 rounded-xl flex items-center gap-3.5 mt-1 border border-outline-variant/30">
                    <span className="material-symbols-outlined text-[36px] text-secondary shrink-0">
                      handyman
                    </span>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-primary">
                        {currentWork.warranty}
                      </span>
                      <span className="text-xs text-on-surface-variant mt-0.5 leading-relaxed">
                        يشمل ثبات التعاشيق ومقاومة التقوس والتمدد المناخي وفق المعايير المعتمدة.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: The Craft Story & Details (7 cols on Desktop) */}
              <div className="lg:col-span-7 flex flex-col gap-6 order-1 lg:order-2">
                <div className="bg-surface-container-lowest rounded-2xl p-6 sm:p-8 shadow-sm border border-outline-variant/30 flex flex-col gap-5">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-[2px] bg-secondary"></span>
                    <span className="text-xs sm:text-sm text-secondary font-bold tracking-wide">
                      فلسفة النجارة العريقة
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-primary">
                    تفاصيل الصنع: {currentWork.title}
                  </h2>

                  <div className="flex flex-col gap-4 text-sm sm:text-base text-on-surface-variant leading-relaxed">
                    <p>
                      {currentWork.description ||
                        `تم تنفيذ هذه القطعة الاستثنائية بعناية فائقة في ورشة أبو الخير، باستخدام أجود أنواع ${currentWork.material} مع الالتزام الصارم بأصول الصنعة التقليدية الممزوجة بأحدث تقنيات المعالجة الحديثة.`}
                    </p>
                  </div>

                  {/* Key Craft Metrics */}
                  <div className="grid grid-cols-3 gap-4 pt-5 border-t border-outline-variant/30 text-center sm:text-right">
                    <div className="flex flex-col">
                      <span className="text-2xl sm:text-3xl text-primary font-black font-mono">
                        100%
                      </span>
                      <span className="text-[11px] sm:text-xs text-on-surface-variant mt-1">
                        أخشاب طبيعية صلبة
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-2xl sm:text-3xl text-secondary font-black font-mono">
                        FAS
                      </span>
                      <span className="text-[11px] sm:text-xs text-on-surface-variant mt-1">
                        أعلى تصنيف نخب أول
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-2xl sm:text-3xl text-primary font-black font-mono">
                        10+
                      </span>
                      <span className="text-[11px] sm:text-xs text-on-surface-variant mt-1">
                        سنوات ضمان إنشائي
                      </span>
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
                  href={`https://wa.me/963988696805?text=${encodedWhatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-3 rounded-lg text-sm font-semibold transition-colors text-center"
                >
                  <span className="material-symbols-outlined text-[20px] text-[#25d366]">
                    chat
                  </span>
                  <span>استفسار واتساب ({refCode})</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Related Works Grid */}
        {relatedWorks.length > 0 && (
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
                    key={item.id}
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
                        <Link to={`/work/${item.slug}`}>
                          <h3 className="text-base font-bold text-primary group-hover:text-secondary transition-colors">
                            {item.title}
                          </h3>
                        </Link>
                        {item.description && (
                          <p className="text-xs text-on-surface-variant line-clamp-2 leading-relaxed">
                            {item.description}
                          </p>
                        )}
                      </div>
                      <div className="flex items-center justify-between pt-3 border-t border-outline-variant/30 text-on-surface-variant text-xs">
                        <span className="font-mono font-medium">{item.dimensions || item.duration}</span>
                        <Link
                          to={`/work/${item.slug}`}
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
        )}

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
