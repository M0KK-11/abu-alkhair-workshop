import { useState, useRef } from 'react'
import { sendConsultationToSupabase } from '../lib/supabase'

const timberOptions = [
  'جوز أمريكي',
  'سنديان / بلوط',
  'تيك / ساج بورمي',
  'ترك الخيار للورشة',
]

const faqs = [
  {
    id: 1,
    q: 'هل توفرون خدمة أخذ المقاسات في الموقع مباشرة؟',
    a: 'نعم، بكل تأكيد. بعد الاتفاق المبدئي على نوعية الخشب والتقدير التقريبي، يزور فريق المسح الهندسي موقعكم في دمشق أو المحافظات السورية لرفع المقاسات بدقة متناهية بأجهزة المسح الليزري، وفحص استواء الجدران والأرضيات ومستوى الرطوبة.',
  },
  {
    id: 2,
    q: 'ما هي مدة الضمان وماذا يشمل تحديداً؟',
    a: 'نقدم ضماناً رسمياً موثقاً لمدة 10 سنوات على سلامة الهيكل الخشبي، وصلابة مفاصل التعشيق اليابانية (Mortise and Tenon)، وعدم تقوس الألواح أو ظهور شقوق طبيعية شاذة. كما يشمل الضمان الإكسسوارات والمفصلات الإيطالية والألمانية (Blum / Hafele) لمدة 5 سنوات.',
  },
  {
    id: 3,
    q: 'كيف يتم احتساب الدفع وما هو جدول الدفعات المعتمد؟',
    a: `نعتمد نظام دفعات مرن مرتبط بمراحل الإنجاز الفعلية:
- 40% دفعة أولى: عند اعتماد المخططات التنفيذية وشراء الأخشاب الصلبة المختارة.
- 40% دفعة ثانية: بعد اكتمال مرحلة التجميع الميكانيكي في المعمل وقبل بدء مرحلة الدهان والتلميع (يمكن للعميل زيارة الورشة لمعاينة القطع).
- 20% دفعة نهائية: بعد التوريد، والتركيب التام بالموقع، وتوقيع محضر الاستلام النهائي.`,
  },
  {
    id: 4,
    q: 'هل تشحنون وتنفذون أعمال خارج مدينة دمشق؟',
    a: 'نعم، ننفذ مشاريع الفلل والشقق والمشاريع السكنية والتجارية في جميع المحافظات السورية (ريف دمشق، حمص، حلب، اللاذقية، طرطوس وغيرها). يتم تغليف المشغولات بصناديق خشبية مبطنة وتكليف فريق تركيب متخصص من الورشة للإشراف على التثبيت في الموقع.',
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    projectType: '',
    selectedTimber: 'ترك الخيار للورشة',
    projectNotes: '',
  })
  const [attachedFile, setAttachedFile] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(1)

  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleTimberSelect = (timber: string) => {
    setFormData((prev) => ({ ...prev, selectedTimber: timber }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAttachedFile(e.target.files[0].name)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setErrorMessage(null)

    const result = await sendConsultationToSupabase({
      full_name: formData.fullName,
      phone: formData.phone,
      email: formData.email,
      project_type: formData.projectType,
      preferred_timber: formData.selectedTimber,
      project_notes: formData.projectNotes,
      sketch_file_url: attachedFile || undefined,
    })

    setLoading(false)

    if (result.success) {
      setErrorMessage(null)
      setSubmitted(true)
    } else {
      setErrorMessage(result.error || 'تعذر حفظ الطلب في قاعدة البيانات (401 Unauthorized)')
    }
  }

  const handleReset = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      projectType: '',
      selectedTimber: 'ترك الخيار للورشة',
      projectNotes: '',
    })
    setAttachedFile(null)
    setSubmitted(false)
    setErrorMessage(null)
  }

  const toggleFaq = (id: number) => {
    setOpenFaq((prev) => (prev === id ? null : id))
  }

  return (
    <div className="w-full bg-background">
      <div className="flex flex-col w-full">
        {/* Ambient Glows */}
        <div className="relative w-full overflow-hidden">
          <div className="absolute -top-32 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute top-96 left-10 w-80 h-80 bg-tertiary-fixed-dim/20 rounded-full blur-3xl pointer-events-none"></div>

          {/* Editorial Header Section */}
          <section className="max-w-[1360px] mx-auto w-full px-6 md:px-12 pt-28 pb-8 relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6">
              <div className="flex flex-col max-w-3xl">
                <div className="flex items-center gap-2 text-secondary mb-2">
                  <span className="w-8 h-[2px] bg-secondary"></span>
                  <span className="text-xs sm:text-sm font-semibold tracking-wider">
                    ورشة ومعمل أبو الخير • الاستشارات والتنفيذ
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-on-surface tracking-tight">
                  فلنبدأ الحديث حول مشروعك القادم
                </h1>
                <p className="text-sm sm:text-base text-on-surface-variant mt-2 leading-relaxed">
                  سواء كان لديك مخطط هندسي جاهز أو فكرة مبدئية تبحث عن تجسيدها بخشب البلوط أو
                  الجوز، فريقنا يسعد بخدمتك وتقديم الاستشارة الفنية المتخصصة.
                </p>
              </div>

              {/* Metric Accent Pill */}
              <div className="bg-surface-container-high p-4 rounded-2xl flex items-center gap-4 shadow-xs self-start md:self-auto border border-outline-variant/30">
                <div className="w-12 h-12 rounded-xl bg-primary-container text-white flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[26px]">
                    precision_manufacturing
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm sm:text-base font-bold text-on-surface">
                    100% خشب طبيعي
                  </span>
                  <span className="text-xs text-on-surface-variant">
                    معالجة حرارية ورطوبة مضبوطة
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Main Two-Column Architectural Workstation */}
          <section className="max-w-[1360px] mx-auto w-full px-6 md:px-12 pb-14 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Right Column: Interactive Consultation & Estimation Form (7 Columns) */}
              <div className="lg:col-span-7 bg-surface-container-lowest rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden border border-outline-variant/30">
                <div className="flex items-center justify-between mb-6 pb-2 bg-surface-container-low p-3 rounded-xl border border-outline-variant/20">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#b87333]">architecture</span>
                    <span className="text-sm sm:text-base font-bold text-on-surface">
                      استمارة طلب تسعير مفصل ومخططات
                    </span>
                  </div>
                  <span className="text-xs text-on-surface-variant bg-surface px-2.5 py-1 rounded-md font-medium">
                    استجابة خلال 24 ساعة
                  </span>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-right">
                  {/* Row 1: Full Name & Mobile */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                      <label className="text-xs sm:text-sm font-semibold text-on-surface-variant">
                        الاسم الكامل <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) =>
                            setFormData({ ...formData, fullName: e.target.value })
                          }
                          placeholder="مثال: عبد الرحمن السبيعي"
                          className="w-full bg-surface-container rounded-xl p-3 text-xs sm:text-sm text-on-surface focus:outline-none focus:bg-surface-container-lowest transition-colors pr-10 border border-outline-variant/20"
                        />
                        <span className="material-symbols-outlined text-outline absolute right-3 top-3 text-[20px] pointer-events-none">
                          person
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-xs sm:text-sm font-semibold text-on-surface-variant flex items-center justify-between">
                        <span>
                          رقم الجوال <span className="text-red-500">*</span>
                        </span>
                        <span className="text-xs text-on-surface-variant font-mono" dir="ltr">
                          +963
                        </span>
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          required
                          dir="ltr"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          placeholder="0988 696 805"
                          className="w-full text-right bg-surface-container rounded-xl p-3 text-xs sm:text-sm text-on-surface focus:outline-none focus:bg-surface-container-lowest transition-colors pl-10 border border-outline-variant/20"
                        />
                        <span className="material-symbols-outlined text-outline absolute left-3 top-3 text-[20px] pointer-events-none">
                          smartphone
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Row 2: Email & Project Scope */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                      <label className="text-xs sm:text-sm font-semibold text-on-surface-variant">
                        البريد الإلكتروني
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          dir="ltr"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="name@domain.com"
                          className="w-full text-right bg-surface-container rounded-xl p-3 text-xs sm:text-sm text-on-surface focus:outline-none focus:bg-surface-container-lowest transition-colors pl-10 border border-outline-variant/20"
                        />
                        <span className="material-symbols-outlined text-outline absolute left-3 top-3 text-[20px] pointer-events-none">
                          alternate_email
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-xs sm:text-sm font-semibold text-on-surface-variant">
                        نوع المشروع المطلوب <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <select
                          required
                          value={formData.projectType}
                          onChange={(e) =>
                            setFormData({ ...formData, projectType: e.target.value })
                          }
                          className="w-full bg-surface-container rounded-xl p-3 text-xs sm:text-sm text-on-surface focus:outline-none focus:bg-surface-container-lowest transition-colors appearance-none pr-10 border border-outline-variant/20"
                        >
                          <option value="" disabled>
                            حدد نطاق العمل...
                          </option>
                          <option value="furniture">أثاث مخصص (طاولات، خزائن، كونسول)</option>
                          <option value="kitchen">مطبخ خشبي فاخر صلب ومقاوم</option>
                          <option value="doors">أبواب خارجية محورية أو داخلية كلاسيك/مودرن</option>
                          <option value="cladding">تجليد وتكسيات جدارية وأسقف خشبية</option>
                          <option value="full_estate">
                            قصر أو فيلا متكاملة (مقاولة نجارة شاملة)
                          </option>
                        </select>
                        <span className="material-symbols-outlined text-outline absolute right-3 top-3 text-[20px] pointer-events-none">
                          design_services
                        </span>
                        <span className="material-symbols-outlined text-outline absolute left-3 top-3 text-[20px] pointer-events-none">
                          expand_more
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Row 3: Preferred Wood Timber Selection */}
                  <div className="flex flex-col gap-1">
                    <label className="text-xs sm:text-sm font-semibold text-on-surface-variant">
                      نوع الخشب المفضل (اختياري)
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {timberOptions.map((timber) => {
                        const isSelected = formData.selectedTimber === timber
                        return (
                          <button
                            key={timber}
                            type="button"
                            onClick={() => handleTimberSelect(timber)}
                            className={`py-2 px-3 rounded-xl text-xs sm:text-sm font-medium text-center transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-primary-container text-white shadow-xs'
                                : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
                            }`}
                          >
                            {timber}
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {/* Row 4: Dimensions & Project Details */}
                  <div className="flex flex-col gap-1">
                    <label className="text-xs sm:text-sm font-semibold text-on-surface-variant">
                      تفاصيل المشروع، الأبعاد والمقاسات التقديرية
                    </label>
                    <textarea
                      rows={4}
                      value={formData.projectNotes}
                      onChange={(e) =>
                        setFormData({ ...formData, projectNotes: e.target.value })
                      }
                      placeholder="مثال: طاولة طعام بطول 3.5 م مع حواف طبيعية حية (Live Edge)، بالإضافة إلى كونسول مدخل متناسق. المقاسات التقريبية للغرفة 6×8 م..."
                      className="w-full bg-surface-container rounded-xl p-3 text-xs sm:text-sm text-on-surface focus:outline-none focus:bg-surface-container-lowest transition-colors leading-relaxed border border-outline-variant/20 resize-none"
                    ></textarea>
                  </div>

                  {/* Row 5: File & Sketch Upload Zone */}
                  <div className="flex flex-col gap-1">
                    <span className="text-xs sm:text-sm font-semibold text-on-surface-variant">
                      إرفاق مخطط معماري أو صورة استرشادية (CAD, PDF, صور عالية الدقة)
                    </span>
                    <label
                      htmlFor="fileUpload"
                      className="cursor-pointer group relative bg-surface-container hover:bg-surface-container-high rounded-2xl p-5 transition-all flex flex-col items-center justify-center text-center border-2 border-dashed border-outline-variant/40"
                    >
                      <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center mb-2 text-[#b87333] group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-[24px]">cloud_upload</span>
                      </div>
                      <span className="text-xs sm:text-sm text-on-surface font-semibold">
                        {attachedFile ? (
                          <span className="text-secondary font-bold">تم إرفاق: {attachedFile}</span>
                        ) : (
                          'انقر لرفع المخططات أو اسحب الملفات هنا'
                        )}
                      </span>
                      <span className="text-[11px] text-on-surface-variant mt-1">
                        الحد الأقصى 25 ميجابايت (PDF, DWG, PNG, JPG)
                      </span>
                      <input
                        id="fileUpload"
                        ref={fileInputRef}
                        type="file"
                        className="hidden"
                        onChange={handleFileChange}
                      />
                    </label>
                  </div>

                  {/* Error Notification Alert */}
                  {errorMessage && (
                    <div className="bg-red-50 dark:bg-red-950/40 border border-red-300 dark:border-red-800 p-3.5 rounded-xl text-right flex items-center gap-2 text-red-700 dark:text-red-300 font-bold text-sm animate-fade">
                      <span className="material-symbols-outlined text-[20px]">error</span>
                      <span>حدث خطأ أثناء إرسال الطلب. يمكنك المحاولة مجدداً أو المراسلة عبر واتساب مباشرة.</span>
                    </div>
                  )}

                  {/* Submit Actions */}
                  <div className="pt-2 flex flex-col gap-2.5">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3 px-6 bg-[#b87333] hover:bg-[#c37c3b] text-white rounded-xl text-sm sm:text-base font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-75"
                    >
                      {loading ? (
                        <>
                          <span className="material-symbols-outlined text-[20px] animate-spin">
                            progress_activity
                          </span>
                          <span>جارٍ إرسال الطلب...</span>
                        </>
                      ) : (
                        <>
                          <span className="material-symbols-outlined text-[22px] group-hover:-translate-x-1 transition-transform">
                            send
                          </span>
                          <span>إرسال طلب التسعير والاستشارة</span>
                        </>
                      )}
                    </button>

                    <a
                      href={`https://wa.me/963988696805?text=${encodeURIComponent(
                        `مرحباً ورشة أبو الخير، أود إرسال تفاصيل مشروعي:\n- الاسم: ${formData.fullName || 'غير محدد'}\n- الهاتف: ${formData.phone || 'غير محدد'}\n- نوع العمل: ${formData.projectType || 'عام'}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#25d366] hover:bg-[#20ba59] text-white py-3 px-6 rounded-xl text-sm sm:text-base font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer text-center"
                    >
                      <span className="material-symbols-outlined text-[22px]">chat</span>
                      <span>إرسال الطلب مباشرة عبر واتساب</span>
                    </a>

                    <p className="text-[11px] text-center text-on-surface-variant mt-1 leading-relaxed">
                      بإرسال هذا النموذج، ستتلقى مكالمة من كبير الحرفيين أو المهندس المسؤول للمناقشة
                      وتحديد موعد معاينة.
                    </p>
                  </div>
                </form>

                {/* Success Notification Overlay */}
                {submitted && (
                  <div className="absolute inset-0 bg-surface-container-lowest/95 backdrop-blur-md p-6 sm:p-10 flex flex-col items-center justify-center text-center z-20 transition-all animate-rise">
                    <div className="w-16 h-16 rounded-full bg-surface-container-high text-[#b87333] flex items-center justify-center mb-4 shadow-inner">
                      <span className="material-symbols-outlined text-[36px]">check_circle</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl text-on-surface font-bold mb-2">
                      تم استلام طلبك بنجاح
                    </h3>
                    <p className="text-xs sm:text-sm text-on-surface-variant max-w-md mb-6 leading-relaxed">
                      شكراً لاهتمامك بأعمال ورشة أبو الخير. سيقوم كبير مصممي الأخشاب بمراجعة المعطيات
                      والتواصل معك خلال يوم عمل واحد لترتيب المقاسات وتقديم التقدير المالي.
                    </p>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="py-2.5 px-6 bg-primary-container text-white rounded-xl text-xs sm:text-sm font-semibold hover:bg-black transition-colors cursor-pointer"
                    >
                      إرسال طلب جديد
                    </button>
                  </div>
                )}
              </div>

              {/* Left Column: Master Craftsman Contact Atelier & Location Dossier (5 Columns) */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                {/* Master Charcoal Card */}
                <div className="bg-primary-container text-white rounded-2xl p-6 sm:p-7 shadow-xl relative overflow-hidden border border-[#d9b98c]/30">
                  {/* Brass Inlay Strip Decor */}
                  <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-secondary-container via-[#b87333] to-secondary-container"></div>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex flex-col">
                      <span className="text-[11px] text-secondary-fixed-dim uppercase tracking-wider font-semibold">
                        مقر الأتيليه وصالة العرض
                      </span>
                      <h2 className="text-lg sm:text-xl text-white font-bold">
                        بيانات الاتصال المباشر
                      </h2>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-secondary-fixed">
                      <span className="material-symbols-outlined text-[22px]">handyman</span>
                    </div>
                  </div>

                  {/* Contact Vectors */}
                  <div className="flex flex-col gap-3">
                    {/* Hotline */}
                    <div className="bg-primary/40 p-3 rounded-xl flex items-center justify-between border border-white/5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-secondary-fixed shrink-0">
                          <span className="material-symbols-outlined text-[20px]">
                            phone_in_talk
                          </span>
                        </div>
                        <div className="flex flex-col text-right">
                          <span className="text-[11px] text-secondary-fixed-dim">
                            الاتصال المباشر
                          </span>
                          <span
                            className="text-xs sm:text-sm text-white font-mono tracking-wide"
                            dir="ltr"
                          >
                            +963 988 696 805
                          </span>
                        </div>
                      </div>
                      <a
                        href="tel:+963988696805"
                        aria-label="Call Mobile"
                        className="text-secondary-fixed hover:text-white transition-colors p-2"
                      >
                        <span className="material-symbols-outlined text-[20px]">call</span>
                      </a>
                    </div>

                    {/* Workshop Mobile & WhatsApp */}
                    <div className="bg-primary/40 p-3 rounded-xl flex items-center justify-between border border-white/5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-secondary-fixed shrink-0">
                          <span className="material-symbols-outlined text-[20px]">smartphone</span>
                        </div>
                        <div className="flex flex-col text-right">
                          <span className="text-[11px] text-secondary-fixed-dim">
                            الخط الساخن واستشارات الواتساب
                          </span>
                          <span
                            className="text-xs sm:text-sm text-white font-mono tracking-wide"
                            dir="ltr"
                          >
                            +963 988 696 805
                          </span>
                        </div>
                      </div>
                      <a
                        href="https://wa.me/963988696805"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Chat WhatsApp"
                        className="text-[#25d366] hover:scale-110 transition-transform p-2"
                      >
                        <span className="material-symbols-outlined text-[22px]">chat</span>
                      </a>
                    </div>

                    {/* Official Email */}
                    <div className="bg-primary/40 p-3 rounded-xl flex items-center justify-between border border-white/5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-secondary-fixed shrink-0">
                          <span className="material-symbols-outlined text-[20px]">
                            mark_email_read
                          </span>
                        </div>
                        <div className="flex flex-col text-right">
                          <span className="text-[11px] text-secondary-fixed-dim">
                            البريد والتنسيق
                          </span>
                          <span className="text-xs sm:text-sm text-white font-mono" dir="ltr">
                            info@abualkhair-wood.com
                          </span>
                        </div>
                      </div>
                      <a
                        href="mailto:info@abualkhair-wood.com"
                        aria-label="Send Mail"
                        className="text-secondary-fixed hover:text-white transition-colors p-2"
                      >
                        <span className="material-symbols-outlined text-[20px]">send</span>
                      </a>
                    </div>

                    {/* Address Description */}
                    <div className="p-2 flex items-start gap-3">
                      <span className="material-symbols-outlined text-secondary-fixed text-[22px] shrink-0 mt-0.5">
                        pin_drop
                      </span>
                      <div className="flex flex-col text-right">
                        <span className="text-xs sm:text-sm text-white font-semibold">
                          عنوان الورشة والمعمل
                        </span>
                        <p className="text-xs text-secondary-fixed-dim leading-relaxed mt-0.5">
                          سوريا، دمشق - المزة، حي الإخلاص
                        </p>
                        <span className="text-[11px] font-mono text-secondary-fixed mt-1" dir="ltr">
                          33.504990, 36.265369
                        </span>
                      </div>
                    </div>

                    {/* Operating Schedule */}
                    <div className="p-3 bg-white/5 rounded-xl flex items-start gap-3 border border-white/5">
                      <span className="material-symbols-outlined text-secondary-fixed text-[22px] shrink-0 mt-0.5">
                        nest_clock_farsight_analog
                      </span>
                      <div className="flex flex-col text-right">
                        <span className="text-xs sm:text-sm text-white font-semibold">
                          أوقات العمل واستقبال الزوار
                        </span>
                        <span className="text-xs text-secondary-fixed-dim mt-0.5">
                          من السبت إلى الخميس: 9:00 صباحاً – 9:00 مساءً
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Atelier Imagery Preview */}
                  <div className="mt-4 rounded-xl overflow-hidden relative h-40 border border-white/10">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-hW8OzmGCP4Q15wUDlalol_GG9w7GanPFlUhApp1ImgvY9-vcZqIUvtds-7mjaQNAbslYAXtbSAYiMCApByNtbM3Bi7AcigvGuNUzpibJ3EQcFLra6QpvXa0Bbc6TIDGvrK8T6qd4sYfWj_ahIs67sPPS4-zq4aQo2qaqkgPJoty2elX30bhQUHDlbzPt0gW9drVJkMSfBK6qa28_fQ30TNgLPsiZkDN8soRFflAAGD7QLKGnRcF2"
                      alt="Woodworking atelier workshop in Riyadh"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-transparent to-transparent"></div>
                    <div className="absolute bottom-2 right-3 left-3 flex items-center justify-between text-secondary-fixed text-xs font-medium">
                      <span>معاينة حية للمواد داخل الأتيليه</span>
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#25d366]"></span>
                        <span>نرحب بزيارتكم</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Location Interactive Map Container */}
                <div className="bg-surface-container-lowest rounded-2xl p-5 shadow-sm flex flex-col gap-3 border border-outline-variant/30">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[#b87333]">explore</span>
                      <span className="text-sm sm:text-base font-bold text-on-surface">
                        موقع الورشة على الخريطة
                      </span>
                    </div>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=33.504990,36.265369"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-secondary hover:underline flex items-center gap-1 font-semibold"
                    >
                      <span>فتح خرائط Google</span>
                      <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                    </a>
                  </div>

                  {/* Interactive Google Maps Iframe */}
                  <div className="w-full h-64 rounded-xl overflow-hidden bg-surface-container relative shadow-inner border border-outline-variant/30">
                    <iframe
                      title="موقع ورشة أبو الخير - دمشق المزة حي الإخلاص"
                      src="https://maps.google.com/maps?q=33.504990,36.265369&hl=ar&z=16&output=embed"
                      className="w-full h-full border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-on-surface-variant font-medium pt-1">
                    <span>حي الإخلاص، المزة، دمشق</span>
                    <span className="font-mono text-secondary" dir="ltr">33.504990, 36.265369</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Timber Quality & Inspection Assurance Strip */}
          <section className="max-w-[1360px] mx-auto w-full px-6 md:px-12 pb-14">
            <div className="bg-surface-container rounded-2xl p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-center border border-outline-variant/30">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-xl bg-surface-container-highest text-[#b87333] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[28px]">square_foot</span>
                </div>
                <div className="flex flex-col text-right">
                  <h4 className="text-sm sm:text-base font-bold text-on-surface">
                    معاينة ميدانية وتدقيق المقاسات
                  </h4>
                  <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                    مهندسونا يقومون بزيارة الموقع بأجهزة الليزر لضمان مطابقة التركيب بنسبة 100% دون
                    فواصل عشوائية.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-xl bg-surface-container-highest text-[#b87333] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[28px]">verified</span>
                </div>
                <div className="flex flex-col text-right">
                  <h4 className="text-sm sm:text-base font-bold text-on-surface">
                    ضمان شامل ومكتوب 10 سنوات
                  </h4>
                  <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                    تغطية متكاملة ضد التقوس، التشققات، أو انفصال الغراء الطبيعي تحت أقسى درجات جفاف
                    المناخ.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-xl bg-surface-container-highest text-[#b87333] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[28px]">palette</span>
                </div>
                <div className="flex flex-col text-right">
                  <h4 className="text-sm sm:text-base font-bold text-on-surface">
                    عينات تشطيب مسبقة لاعتمادك
                  </h4>
                  <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                    نصنع لك 3 عينات خشبية مختلفة الدرجات من الزيوت الطبيعية والمطفي (Matte) قبل بدء
                    التنفيذ النهائي.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Accordion Section */}
          <section className="max-w-[1360px] mx-auto w-full px-6 md:px-12 pb-16">
            <div className="max-w-4xl mx-auto flex flex-col gap-6">
              <div className="text-center flex flex-col items-center mb-2">
                <div className="flex items-center gap-2 text-secondary mb-1">
                  <span className="w-6 h-[2px] bg-secondary"></span>
                  <span className="text-xs sm:text-sm font-semibold">الوضوح والشفافية أولاً</span>
                  <span className="w-6 h-[2px] bg-secondary"></span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-on-surface">
                  الأسئلة الشائعة حول آلية العمل
                </h2>
                <p className="text-xs sm:text-sm text-on-surface-variant max-w-xl mt-1">
                  إجابات واضحة لأكثر الاستفسارات تكراراً لدى عملائنا قبل انطلاق مرحلة التصنيع
                </p>
              </div>

              {/* Accordions Container */}
              <div className="flex flex-col gap-3">
                {faqs.map((faq) => {
                  const isOpen = openFaq === faq.id
                  return (
                    <div
                      key={faq.id}
                      className="bg-surface-container-lowest rounded-2xl shadow-xs overflow-hidden transition-all border border-outline-variant/30"
                    >
                      <button
                        type="button"
                        onClick={() => toggleFaq(faq.id)}
                        className="w-full p-4 sm:p-5 flex items-center justify-between text-right gap-4 cursor-pointer"
                      >
                        <span className="text-sm sm:text-base font-bold text-on-surface flex items-center gap-2">
                          <span className="text-secondary font-mono">0{faq.id}.</span>
                          <span>{faq.q}</span>
                        </span>
                        <span
                          className={`material-symbols-outlined text-outline transition-transform duration-300 ${
                            isOpen ? 'rotate-180 text-secondary' : ''
                          }`}
                        >
                          expand_more
                        </span>
                      </button>

                      {isOpen && (
                        <div className="px-5 pb-5 pt-0 text-on-surface-variant text-xs sm:text-sm leading-relaxed bg-surface-container-low/40 whitespace-pre-line border-t border-outline-variant/10">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
