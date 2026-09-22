import { Link } from 'react-router'
import { IconPhone, IconPin, IconMail } from '../lib/icons'

export default function Footer() {
  return (
    <footer className="wood-texture bg-charcoal text-ivory/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-4 lg:px-10">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full border border-brass/60 text-brass">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 4l6 6-9 9-4 1 1-4 9-9z" />
                <path d="M4 20h6" />
              </svg>
            </span>
            <span className="font-display text-xl font-extrabold text-ivory">ورشة أبو الخير</span>
          </div>
          <p className="mt-5 max-w-md text-sm leading-7 text-ivory/70">
            ورشة نجارة متخصصة في القطع المصنوعة على المقاس، نجمع بين الحرفة اليدوية
            الأصيلة والتصميم العصري لنصنع قطعاً تدوم لأجيال.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold tracking-widest text-oak">روابط</h4>
          <ul className="mt-4 space-y-3 text-sm">
            {[
              { to: '/', label: 'الرئيسية' },
              { to: '/gallery', label: 'المعرض' },
              { to: '/about', label: 'عنّا' },
              { to: '/contact', label: 'تواصل' },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-ivory/70 transition-colors hover:text-brass">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold tracking-widest text-oak">تواصل</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <IconPhone className="h-5 w-5 text-brass" />
              <span dir="ltr">+20 100 123 4567</span>
            </li>
            <li className="flex items-center gap-3">
              <IconMail className="h-5 w-5 text-brass" />
              <span>info@abualkhair.com</span>
            </li>
            <li className="flex items-center gap-3">
              <IconPin className="h-5 w-5 text-brass" />
              <span>المنطقة الصناعية، القاهرة</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-oak/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-ivory/50 sm:flex-row lg:px-10">
          <span>© ٢٠٢٦ ورشة أبو الخير. جميع الحقوق محفوظة.</span>
          <span>صُنع بحرفية في القاهرة</span>
        </div>
      </div>
    </footer>
  )
}
