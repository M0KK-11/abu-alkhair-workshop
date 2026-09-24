import { Link } from 'react-router'
import Logo from './Logo'
import { siteConfig } from '../config/site'

export default function Footer() {
  return (
    <footer className="w-full bg-primary-container text-[#d2c4bf] pt-12 pb-8 border-t border-[#d9b98c]/20">
      <div className="max-w-[1360px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {/* Col 1: Brand & Philosophy */}
        <div className="flex flex-col gap-4">
          <Logo variant="light" showSubtitle={true} />
          <p className="text-sm text-[#d2c4bf] leading-relaxed mt-2">
            {siteConfig.description}
          </p>
        </div>

        {/* Col 2: Categories */}
        <div className="flex flex-col gap-3">
          <span className="text-base font-bold text-[#fff9ef] mb-1">أقسام المشغولات</span>
          <ul className="flex flex-col gap-2 text-sm">
            <li className="hover:text-[#fff9ef] transition-colors">
              <Link to="/gallery">الأثاث المودرن الفاخر</Link>
            </li>
            <li className="hover:text-[#fff9ef] transition-colors">
              <Link to="/gallery">المطابخ المعمارية المخصصة</Link>
            </li>
            <li className="hover:text-[#fff9ef] transition-colors">
              <Link to="/gallery">الأبواب والواجهات الصلبة</Link>
            </li>
            <li className="hover:text-[#fff9ef] transition-colors">
              <Link to="/gallery">التكسيات الجدارية وشبكات الخشب</Link>
            </li>
            <li className="hover:text-[#fff9ef] transition-colors">
              <Link to="/gallery">طاولات خشب الجوز المعتق</Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Workshop Location & Hours */}
        <div className="flex flex-col gap-3">
          <span className="text-base font-bold text-[#fff9ef] mb-1">موقع المعمل والأتيليه</span>
          <div className="flex items-start gap-2.5 text-[#d2c4bf]">
            <span className="material-symbols-outlined text-[20px] text-[#b87333] shrink-0 mt-0.5">
              location_on
            </span>
            <span className="text-sm leading-relaxed">
              {siteConfig.address}
            </span>
          </div>
          <div className="flex items-start gap-2.5 text-[#d2c4bf] mt-2">
            <span className="material-symbols-outlined text-[20px] text-[#b87333] shrink-0 mt-0.5">
              schedule
            </span>
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-[#fff9ef]">
                أوقات العمل واستقبال الاستشارات
              </span>
              <span className="text-sm">{siteConfig.workingHours.full}</span>
            </div>
          </div>
        </div>

        {/* Col 4: Direct Contact */}
        <div className="flex flex-col gap-3">
          <span className="text-base font-bold text-[#fff9ef] mb-1">التواصل المباشر</span>
          <p className="text-sm leading-relaxed">
            نرحب بزيارة المهندسين وأصحاب المنازل لمعاينة عينات الأخشاب وحلول النجارة الدقيقة.
          </p>
          <div className="flex flex-col gap-2 pt-2 text-xs sm:text-sm text-[#fff9ef]">
            <a
              href={siteConfig.contact.phoneTel}
              className="flex items-center gap-2 hover:text-oak transition-colors"
            >
              <span className="material-symbols-outlined text-[18px] text-[#b87333]">call</span>
              <span dir="ltr">{siteConfig.contact.phoneFormatted}</span>
            </a>
            <a
              href={siteConfig.contact.emailMailto}
              className="flex items-center gap-2 hover:text-oak transition-colors"
            >
              <span className="material-symbols-outlined text-[18px] text-[#b87333]">mail</span>
              <span>{siteConfig.contact.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-[1360px] mx-auto px-6 md:px-12 pt-6 border-t border-[#d9b98c]/15 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-right">
        <span className="text-xs text-[#d2c4bf]/80">
          جميع الحقوق محفوظة © ورشة أبو الخير للأعمال الخشبية الفاخرة
        </span>
        <span className="text-xs text-[#d2c4bf]/50">
          صُنعت بحرفية معمارية وأخشاب مستدامة
        </span>
      </div>
    </footer>
  )
}
