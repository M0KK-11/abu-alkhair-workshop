import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router'
import { IconMenu, IconClose } from '../lib/icons'

const links = [
  { to: '/', label: 'الرئيسية' },
  { to: '/gallery', label: 'المعرض' },
  { to: '/about', label: 'عنّا' },
  { to: '/contact', label: 'تواصل' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-charcoal/85 backdrop-blur-md border-b border-oak/15 shadow-lg shadow-charcoal/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link to="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-10 w-10 place-items-center rounded-full border border-brass/60 text-brass transition-colors group-hover:bg-brass group-hover:text-ivory">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 4l6 6-9 9-4 1 1-4 9-9z" />
              <path d="M4 20h6" />
            </svg>
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg font-extrabold text-ivory">ورشة أبو الخير</span>
            <span className="text-[11px] tracking-[0.2em] text-oak/80">نجارة يدوية فاخرة</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `relative text-sm font-medium transition-colors ${
                    isActive ? 'text-brass' : 'text-ivory/80 hover:text-ivory'
                  } after:absolute after:-bottom-1.5 after:right-0 after:h-px after:bg-brass after:transition-all ${
                    isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
          <li>
            <Link
              to="/contact"
              className="rounded-full bg-brass px-5 py-2.5 text-sm font-semibold text-ivory shadow-sm transition-all hover:bg-brass-bright hover:shadow-md"
            >
              اطلب الآن
            </Link>
          </li>
        </ul>

        <button
          className="text-ivory md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="القائمة"
        >
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-charcoal/95 backdrop-blur-md md:hidden transition-[max-height] duration-300 ${
          open ? 'max-h-96 border-b border-oak/15' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 py-4">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block rounded-lg px-4 py-3 text-base transition-colors ${
                    isActive ? 'bg-oak/10 text-brass' : 'text-ivory/85 hover:bg-oak/5'
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
          <li className="pt-2">
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="block rounded-full bg-brass px-5 py-3 text-center font-semibold text-ivory"
            >
              اطلب الآن
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
