import { useEffect, useState } from 'react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 350)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!visible) return null

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="العودة لأعلى الصفحة"
      className="fixed bottom-24 left-6 z-40 w-11 h-11 rounded-full bg-primary-container/90 hover:bg-primary text-[#d9b98c] hover:text-white border border-[#d9b98c]/30 shadow-lg hover:shadow-xl backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer animate-fade"
    >
      <span className="material-symbols-outlined text-[24px]">keyboard_arrow_up</span>
    </button>
  )
}
