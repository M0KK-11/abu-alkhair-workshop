import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'

export default function Root() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [pathname])

  return (
    <div className="flex min-h-screen flex-col bg-ivory">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
