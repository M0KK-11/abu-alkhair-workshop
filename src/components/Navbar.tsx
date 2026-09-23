import { useState } from 'react'
import { Link, NavLink } from 'react-router'
import Logo from './Logo'
import { siteConfig } from '../config/site'

const links = [
  { to: siteConfig.links.home, label: 'الرئيسية' },
  { to: siteConfig.links.gallery, label: 'المعرض والأعمال' },
  { to: siteConfig.links.about, label: 'عن الورشة' },
  { to: siteConfig.links.contact, label: 'تواصل معنا' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 h-20 bg-primary-container/95 backdrop-blur-xl border-b border-[#d9b98c]/25">
      <div className="h-20 max-w-[1360px] mx-auto px-6 md:px-12 flex items-center justify-between gap-6">
        {/* Brand / Logo */}
        <Link
          to="/"
          className="flex items-center shrink-0 group transition-opacity hover:opacity-95"
          onClick={() => setOpen(false)}
        >
          <Logo variant="light" showSubtitle={true} />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-7">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `text-sm py-1 px-2.5 transition-colors rounded ${
                  isActive
                    ? 'bg-[#fff9ef]/10 text-[#fff9ef] font-semibold'
                    : 'text-[#d2c4bf] hover:text-[#fff9ef]'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* Action Call & CTA */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex flex-col text-left text-[#d2c4bf] leading-tight">
            <span className="text-[11px] text-[#d2c4bf]/70">اتصال مباشر</span>
            <a
              href={siteConfig.contact.phoneTel}
              className="text-xs text-[#fff9ef] font-mono hover:text-oak transition-colors"
              dir="ltr"
            >
              {siteConfig.contact.phoneFormatted}
            </a>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#b87333] hover:bg-[#c37c3b] text-white px-4 py-2 rounded text-xs sm:text-sm font-medium shadow-[0_2px_12px_rgba(184,115,51,0.35)] transition-all hover:shadow-[0_4px_16px_rgba(184,115,51,0.5)]"
          >
            <span className="material-symbols-outlined text-[18px]">call</span>
            <span className="hidden sm:inline">طلب استشارة أو تسعير</span>
            <span className="sm:hidden">استشارة</span>
          </Link>

          {/* Mobile hamburger menu toggle */}
          <button
            type="button"
            className="xl:hidden p-2 text-[#fff9ef] rounded-md focus:outline-none"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="القائمة"
          >
            <span className="material-symbols-outlined text-[26px]">
              {open ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="xl:hidden bg-primary-container border-b border-[#d9b98c]/25 px-6 py-4 space-y-2">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-sm transition-colors ${
                  isActive
                    ? 'bg-[#fff9ef]/10 text-[#fff9ef] font-semibold'
                    : 'text-[#d2c4bf] hover:text-[#fff9ef]'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <div className="pt-2 border-t border-[#d9b98c]/15 text-xs text-[#d2c4bf] flex items-center justify-between">
            <span>اتصال مباشر:</span>
            <a href="tel:+963988696805" className="font-mono text-[#fff9ef] hover:underline" dir="ltr">
              +963 988 696 805
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
