import { useEffect, Suspense } from 'react'
import { Outlet, useLocation } from 'react-router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import BackToTop from '../components/BackToTop'
import MobileQuickBar from '../components/MobileQuickBar'
import { siteConfig } from '../config/site'

function PageLoader() {
  return (
    <div className="flex min-h-[60vh] w-full items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="h-10 w-10 animate-spin rounded-full border-[3px] border-[#d9b98c]/30 border-t-[#b87333]" />
        <span className="text-xs font-semibold text-secondary animate-pulse">
          جارٍ التحميل...
        </span>
      </div>
    </div>
  )
}

const routeTitles: Record<string, string> = {
  '/': `${siteConfig.name} | ${siteConfig.tagline}`,
  '/gallery': `المعرض والأعمال | ${siteConfig.name}`,
  '/work': `تفاصيل العمل | ${siteConfig.name}`,
  '/about': `عن الورشة والتراث | ${siteConfig.name}`,
  '/contact': `تواصل معنا والاستشارات | ${siteConfig.name}`,
}

export default function Root() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0 })

    // Dynamic Title Management
    const matchedTitle =
      routeTitles[pathname] ||
      (pathname.startsWith('/work') ? `تفاصيل العمل | ${siteConfig.name}` : `${siteConfig.name} | ${siteConfig.tagline}`)
    document.title = matchedTitle
  }, [pathname])

  return (
    <div className="flex min-h-screen flex-col bg-background text-on-surface pb-16 md:pb-0">
      <Navbar />
      <main className="flex-1">
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
      <MobileQuickBar />
    </div>
  )
}
