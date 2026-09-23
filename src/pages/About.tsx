import { Link } from 'react-router'

export default function About() {
  return (
    <div className="w-full bg-background">
      <div className="flex flex-col w-full">
        {/* 1. Hero & Philosophy Section */}
        <section className="relative w-full bg-surface pt-28 pb-14 overflow-hidden border-b border-outline-variant/30">
          <div className="absolute -top-32 right-12 w-96 h-96 rounded-full bg-secondary-container/20 blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-10 w-80 h-80 rounded-full bg-tertiary-fixed/15 blur-3xl pointer-events-none"></div>

          <div className="max-w-[1360px] mx-auto px-6 md:px-12">
            {/* Monoline Architectural Badge */}
            <div className="inline-flex items-center gap-2 bg-surface-container px-4 py-1.5 rounded-full text-secondary mb-6 shadow-xs border border-outline-variant/30">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <span className="text-xs sm:text-sm font-semibold tracking-wider">
                سيرة الحرفي والأتيليه الخشبي
              </span>
              <span className="text-xs text-outline font-mono">| منذ ١٩٩٤</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Main Statement */}
              <div className="lg:col-span-7 flex flex-col gap-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary leading-tight">
                  ثلاثة عقود من العشق لألياف الخشب وأسرار الحرفة
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
                  من قلب دمشق، نروي عبر جذوع الزان والبلوط والجوز الأمريكي فصولاً تتجسد في تحفٍ
                  معمارية تدوم أجيالاً. رحلة تتناغم فيها الدقة الإسكندنافية مع أصالة التراث الدمشقي
                  العريق وحكمة التعشيق الياباني.
                </p>

                {/* Founder's Signature Quote Card */}
                <div className="mt-2 bg-surface-container-high p-5 sm:p-6 rounded-2xl shadow-sm relative overflow-hidden border border-outline-variant/30">
                  <div className="absolute top-2 left-4 text-secondary/20 select-none">
                    <span className="material-symbols-outlined text-7xl">format_quote</span>
                  </div>
                  <div className="flex items-start gap-4 relative z-10">
                    <div className="w-1.5 self-stretch bg-[#b87333] rounded-full shrink-0"></div>
                    <div className="flex flex-col gap-1.5">
                      <blockquote className="text-sm sm:text-base text-primary font-medium italic leading-relaxed">
                        "الخشب ليس مجرد مادة خام للبناء، بل كائن حي يحمل تاريخ الشجرة، ودورنا
                        كنحاتين وحرفيين هو إبراز روحه الداخلية لكل بيت يقدر الأصالة."
                      </blockquote>
                      <div className="flex items-center gap-2 pt-1">
                        <span className="text-xs sm:text-sm text-primary font-bold">
                          المعلم عبد الله أبو الخير
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-outline-variant"></span>
                        <span className="text-[11px] sm:text-xs text-secondary font-medium">
                          المؤسس وكبير النجارين المعماريين
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visual Hero Mosaic */}
              <div className="lg:col-span-5 relative">
                <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-xl bg-surface-container-highest border border-outline-variant/30">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAM-W9u4s9je05WTa638BVTyhhV8FZVoOJX6zqmywNGjR86O8FI4b3XS-rD8rKwyLSj6Hz0oL595TT4ePNv0ERIDJA-WVAPcHcazBCd39-OJxiF3nkBreBqQE0rk77ExRVZF5dMUh3GHMjjVCSzTiL5EoqE4y0lBEK2uHXl33jCL_4c6VoEMvHfRd0o8CLlR48NoJfeNqB2zwyO-jgqj-bcx69n1vzioxtUeP2Qj_2iRAy5YnYIPG1i"
                    alt="Artisan master carpenter hands shaping live-edge American walnut wood slab"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-primary-container text-white p-4 rounded-xl shadow-xl hidden md:flex items-center gap-3 border border-[#d9b98c]/30">
                  <div className="w-11 h-11 rounded-full bg-[#b87333] flex items-center justify-center text-white shrink-0">
                    <span className="material-symbols-outlined text-2xl">verified</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-white">٣٠+ عاماً</span>
                    <span className="text-xs text-[#d2c4bf]">
                      في تشكيل التحف المعمارية الخالدة
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Master Craftsman & Workshop Chronicle */}
        <section className="w-full bg-surface-container-low py-14 border-b border-outline-variant/30">
          <div className="max-w-[1360px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Visual Column */}
              <div className="lg:col-span-6 order-2 lg:order-1 flex flex-col gap-4">
                <div className="relative w-full aspect-[16/11] rounded-2xl overflow-hidden shadow-md bg-surface-container-highest border border-outline-variant/30">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVVEvrJUar0xcPj4QXmX1uz9ZE74E2ObAWZB7RePUmmjadalIUx-ve1KZqohRP7qjcSuiCsGaZxUXW0ADiuA34Yzzv311eHEaHUINyYO3OhUtSgt5DTG3hXwAex5nEgc9uibeCslG8cV6ANTFce28p0lUY1jhArRkTaZ0_-Yy2gNakKCfzTT1YZl-VxNNoK_bLAlpo7Y-M5DXnbb2ecH4-gBDkWWg_uvF6QUNQ0CmVyuLrWq2Vhvu3"
                    alt="Arab master carpenter in traditional modest workshop inspecting wood joinery"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 right-4 text-white text-xs bg-primary-container/85 px-3 py-1.5 rounded-lg backdrop-blur-sm border border-[#d9b98c]/20">
                    معمل الأتيليه الرئيسي - حي الإخلاص، المزة، دمشق
                  </div>
                </div>

                {/* Secondary Micro Metrics Bar */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-surface p-4 rounded-xl text-center shadow-xs border border-outline-variant/30">
                    <span className="text-xl sm:text-2xl text-secondary font-bold font-mono block">
                      ١٢٠٠+
                    </span>
                    <span className="text-xs text-on-surface-variant mt-0.5 block">
                      قطعة أثاث مخصصة
                    </span>
                  </div>
                  <div className="bg-surface p-4 rounded-xl text-center shadow-xs border border-outline-variant/30">
                    <span className="text-xl sm:text-2xl text-secondary font-bold font-mono block">
                      ١٠٠٪
                    </span>
                    <span className="text-xs text-on-surface-variant mt-0.5 block">
                      أخشاب مصمتة طبيعية
                    </span>
                  </div>
                  <div className="bg-surface p-4 rounded-xl text-center shadow-xs border border-outline-variant/30">
                    <span className="text-xl sm:text-2xl text-secondary font-bold font-mono block">
                      ٤٥+
                    </span>
                    <span className="text-xs text-on-surface-variant mt-0.5 block">
                      قصر وفندق بوتيك
                    </span>
                  </div>
                </div>
              </div>

              {/* Narrative Column */}
              <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col gap-4 text-right">
                <div className="flex items-center gap-1.5 text-secondary font-bold text-xs sm:text-sm">
                  <span className="material-symbols-outlined text-lg">carpenter</span>
                  <span className="uppercase tracking-wider">قصة المشغل والصنعة</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-primary">
                  من مشغل صغير للأزاميل إلى صرح لتجهيز أرقى القصور
                </h2>
                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  انطلقت الحكاية في شتاء عام 1994 بورشة متواضعة لا تتجاوز مساحتها بضع أمتار مربعة،
                  كان المحرك الأساسي فيها هو الشغف الفطري برائحة نشارة الخشب وعروقه الفريدة. كرّس
                  المعلم أبو الخير وقته لفهم حركة الأخشاب وتمددها مع طقس الجزيرة العربية الجاف،
                  معتمداً على أدوات الفارة والمنقار اليدوية لصقل كل وصلة بعناية متناهية.
                </p>
                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  مع توالي السنين والثقة المتنامية لكبار المصممين والمعماريين، تطورت الورشة لتصبح
                  وجهة أولى لتجهيز القصور الراقية والمشاريع الفندقية الفاخرة، دون أن تفقد ولو ذرة
                  واحدة من فلسفتها الأصلية: احترام المادة الطبيعية، ورفض الحلول السريعة، واعتماد
                  التعشيق النجار الأصيل الذي يصمد عبر الزمن.
                </p>
                <div className="flex items-center gap-6 pt-2">
                  <div className="flex items-center gap-2 text-primary">
                    <span className="material-symbols-outlined text-[#b87333] text-2xl">
                      architecture
                    </span>
                    <span className="text-xs sm:text-sm font-semibold">
                      تصاميم هندسية دقيقة
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-primary">
                    <span className="material-symbols-outlined text-[#b87333] text-2xl">
                      handyman
                    </span>
                    <span className="text-xs sm:text-sm font-semibold">
                      صقل وتشطيب يدوي كامل
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Timeline of Excellence */}
        <section className="w-full bg-surface py-14 border-b border-outline-variant/30">
          <div className="max-w-[1360px] mx-auto px-6 md:px-12">
            <div className="text-center max-w-2xl mx-auto mb-10 flex flex-col gap-1">
              <span className="text-xs sm:text-sm text-secondary font-semibold tracking-wide">
                مسيرة النضج والإتقان
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-primary">
                محطات فارقة في تاريخ ورشة أبو الخير
              </h2>
              <p className="text-xs sm:text-sm text-on-surface-variant">
                خطوات راسخة نحو الريادة المعمارية في صياغة الأخشاب الطبيعية
              </p>
            </div>

            {/* Timeline Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {/* 1994 Node */}
              <div className="bg-surface-container p-6 rounded-2xl shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between border border-outline-variant/30">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-secondary font-mono">1994</span>
                    <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                      <span className="material-symbols-outlined text-xl">
                        home_repair_service
                      </span>
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-primary mb-2">انطلاق المشغل الأول</h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    تأسيس الورشة في دمشق والتركيز المتخصص على تصنيع أبواب الخشب السويدي المعالج
                    والزان الصلب بتقنيات النقر واللسان التراثية.
                  </p>
                </div>
                <div className="mt-4 pt-2 border-t border-outline-variant/20 flex items-center gap-1.5 text-secondary text-xs font-semibold">
                  <span className="material-symbols-outlined text-sm">nature</span>
                  <span>أخشاب سويدي وزان طبيعي</span>
                </div>
              </div>

              {/* 2005 Node */}
              <div className="bg-surface-container p-6 rounded-2xl shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between border border-outline-variant/30">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-secondary font-mono">2005</span>
                    <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                      <span className="material-symbols-outlined text-xl">villa</span>
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-primary mb-2">
                    دخول عالم القصور الملكية
                  </h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    تجهيز أول قصر ملكي في محافظة الدرعية التاريخية، تلاه التوسع المتسارع في أعمال
                    التكسيات الجدارية والمجالس الفخمة للفنادق البوتيكية.
                  </p>
                </div>
                <div className="mt-4 pt-2 border-t border-outline-variant/20 flex items-center gap-1.5 text-secondary text-xs font-semibold">
                  <span className="material-symbols-outlined text-sm">stars</span>
                  <span>تكسيات جدارية وقصور تاريخية</span>
                </div>
              </div>

              {/* 2014 Node */}
              <div className="bg-surface-container p-6 rounded-2xl shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between border border-outline-variant/30">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-secondary font-mono">2014</span>
                    <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                      <span className="material-symbols-outlined text-xl">
                        precision_manufacturing
                      </span>
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-primary mb-2">تكامل التقنية مع اليد</h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    إدخال ماكينات القطع الرقمية المتقدمة (CNC) لقص الزوايا المعقدة، مع الإبقاء الصارم
                    على أعمال الصنفرة والتعتيق والدهان الزيتي بالطرق اليدوية.
                  </p>
                </div>
                <div className="mt-4 pt-2 border-t border-outline-variant/20 flex items-center gap-1.5 text-secondary text-xs font-semibold">
                  <span className="material-symbols-outlined text-sm">tune</span>
                  <span>دقة ميكرونية بلمسة يدوية</span>
                </div>
              </div>

              {/* 2024 Node */}
              <div className="bg-primary-container text-white p-6 rounded-2xl shadow-lg flex flex-col justify-between border border-[#d9b98c]/30">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-secondary-fixed font-mono">
                      2024
                    </span>
                    <div className="w-10 h-10 rounded-full bg-[#b87333] flex items-center justify-center text-white">
                      <span className="material-symbols-outlined text-xl">
                        workspace_premium
                      </span>
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    العلامة المعمارية المستدامة
                  </h3>
                  <p className="text-xs sm:text-sm text-[#d2c4bf] leading-relaxed">
                    إعادة تدشين علامة "أبو الخير" كهوية استوديو معماري للأخشاب الحية النادرة، ومطابخ
                    خشب السنديان المصمت، وتصاميم صديقة للبيئة تدوم للأبد.
                  </p>
                </div>
                <div className="mt-4 pt-2 border-t border-[#d9b98c]/20 flex items-center gap-1.5 text-secondary-fixed text-xs font-semibold">
                  <span className="material-symbols-outlined text-sm">eco</span>
                  <span>أخشاب حية مستدامة ونادرة</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Our Core Values */}
        <section className="w-full bg-surface-container-high py-14 border-b border-outline-variant/30">
          <div className="max-w-[1360px] mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
              <div>
                <span className="text-xs sm:text-sm text-secondary font-bold">مبادئنا الثابتة</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-primary mt-1">
                  القيم التي تحكم كل قطعة نغرس فيها أزاميلنا
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-on-surface-variant max-w-md leading-relaxed">
                لا نتنازل عن معايير الحرفية الرفيعة مهما كانت متطلبات السرعة، فكل لوح خشبي يحظى
                بالوقت الكافي للنضوج والاستقرار.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Value 1 */}
              <div className="bg-surface p-6 rounded-2xl shadow-xs hover:shadow-md transition-all flex flex-col gap-4 border border-outline-variant/30">
                <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-[#b87333]">
                  <span className="material-symbols-outlined text-3xl">forest</span>
                </div>
                <div className="flex flex-col gap-1.5 text-right">
                  <h3 className="text-base font-bold text-primary">الاستدامة والوعي البيئي</h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    نستورد أخشابنا من مزارع مدارة بشكل مستدام ومعتمدة دولياً (FSC)، مع الحرص على
                    استغلال القطع المهملة وتحويلها إلى تفاصيل فنية مصغرة.
                  </p>
                </div>
              </div>

              {/* Value 2 */}
              <div className="bg-surface p-6 rounded-2xl shadow-xs hover:shadow-md transition-all flex flex-col gap-4 border border-outline-variant/30">
                <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-[#b87333]">
                  <span className="material-symbols-outlined text-3xl">all_inclusive</span>
                </div>
                <div className="flex flex-col gap-1.5 text-right">
                  <h3 className="text-base font-bold text-primary">التعشيق الأصيل المتين</h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    نعتمد تقنيات التعشيق اليابانية والإسلامية خالية البراغي الظاهرة لضمان تماسك
                    الهيكل لقرون دون تفكك، مع مراعاة تنفس الخشب الطبيعي.
                  </p>
                </div>
              </div>

              {/* Value 3 */}
              <div className="bg-surface p-6 rounded-2xl shadow-xs hover:shadow-md transition-all flex flex-col gap-4 border border-outline-variant/30">
                <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-[#b87333]">
                  <span className="material-symbols-outlined text-3xl">fingerprint</span>
                </div>
                <div className="flex flex-col gap-1.5 text-right">
                  <h3 className="text-base font-bold text-primary">التخصيص الفني الكامل</h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    كل طاولة، باب، أو خزانة هي عمل فني مستقل بذاته، لا نكرر القوالب أبداً. تُختم كل
                    قطعة برقم تسلسلي خاص وتوقيع الحرفي المسؤول.
                  </p>
                </div>
              </div>

              {/* Value 4 */}
              <div className="bg-surface p-6 rounded-2xl shadow-xs hover:shadow-md transition-all flex flex-col gap-4 border border-outline-variant/30">
                <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-[#b87333]">
                  <span className="material-symbols-outlined text-3xl">shield</span>
                </div>
                <div className="flex flex-col gap-1.5 text-right">
                  <h3 className="text-base font-bold text-primary">الضمان والرعاية الممتدة</h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    علاقتنا لا تنتهي عند التسليم؛ نوفر خدمات صيانة دورية، تلميع شمع العسل الطبيعي،
                    ومعالجة تغيرات المناخ لكل المقتنيات مدى الحياة.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Atelier & Workshop Visit Invitation */}
        <section className="w-full bg-surface py-14">
          <div className="max-w-[1360px] mx-auto px-6 md:px-12">
            <div className="bg-primary-container text-white rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 border border-[#d9b98c]/30">
              {/* Visual Atmosphere */}
              <div className="lg:col-span-5 relative min-h-[340px]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRzMEBB4-_U6Wh1uciiZNYq04Nu3ZXkROxw_2HcoZIIE84ARRJDsrPEQ3QaEM4C0VXt06Phi5gfzfQlxIzc9M3rnyIuIiWwHzBVhZEjZbvzFet6NKaptYcTqYqZhuXmAQ9Vff9Wt5o-O9pEDtbzVJ1B0x9yOCIfWhVGWCY6vwozAhwrtyIhcrD1iHmp6e6xYNsC00rFiu4Wy8MMpz66ml3T5PU7Et0Ic6AGcPkWObiqSJbemU-oxk_"
                  alt="Intimate cozy architectural showroom lounge with live edge walnut table and Saudi coffee pot Dallah"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-container/90 via-primary-container/30 to-transparent"></div>
                <div className="absolute bottom-6 right-6 flex items-center gap-2 bg-surface/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                  <span className="material-symbols-outlined text-secondary-fixed text-lg">
                    local_cafe
                  </span>
                  <span className="text-xs font-semibold text-white">
                    مجلس الضيافة وأتيليه العينات
                  </span>
                </div>
              </div>

              {/* Invitation Details & CTA */}
              <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-center gap-4 text-right">
                <div className="inline-flex items-center gap-1.5 text-secondary-fixed text-xs font-semibold">
                  <span className="material-symbols-outlined text-lg">door_front</span>
                  <span>أبوابنا مفتوحة للمعماريين وعشاق الخشب</span>
                </div>

                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-snug">
                  تفضل بزيارتنا لاحتساء فنجان قهوة ولمس الأخشاب الخام بنفسك
                </h3>

                <p className="text-xs sm:text-sm text-[#d2c4bf] leading-relaxed">
                  لا شيء يضاهي متعة الوقوف أمام ألواح خشب الجوز العملاقة، واستنشاق أريج الأرز
                  والساج، واختيار التموج اللوني (Grain) الذي سيشكل هوية مسكنك. يسعدنا استقبالكم في
                  صالة عرض المشغل لجلسة نقاش واستشارة هندسية خاصة.
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-[#b87333] hover:bg-[#c37c3b] text-white px-6 py-3 rounded-lg text-xs sm:text-sm font-semibold transition-transform hover:scale-[1.02] shadow-md"
                  >
                    <span className="material-symbols-outlined text-lg">calendar_month</span>
                    <span>حجز موعد زيارة خاصة</span>
                  </Link>

                  <a
                    href="https://wa.me/963988696805"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-3 rounded-lg text-xs sm:text-sm font-semibold transition-colors"
                  >
                    <span className="material-symbols-outlined text-lg text-[#25d366]">chat</span>
                    <span>تنسيق الزيارة عبر واتساب</span>
                  </a>
                </div>

                <div className="flex flex-wrap items-center gap-6 pt-2 text-[#d2c4bf] text-xs">
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-sm text-[#b87333]">
                      schedule
                    </span>
                    <span>السبت - الخميس: 9:00 ص - 9:00 م</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-sm text-[#b87333]">
                      pin_drop
                    </span>
                    <span>حي الإخلاص، المزة، دمشق</span>
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
