import { useEffect, useState, useRef, useCallback } from 'react'

export default function WoodScrollbar() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const trackRef = useRef<HTMLDivElement>(null)
  const dragStartYRef = useRef(0)
  const dragStartScrollRef = useRef(0)

  // Calculate scroll percentage
  const updateScroll = useCallback(() => {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    if (docHeight <= 0) {
      setScrollProgress(0)
      return
    }
    const current = window.scrollY
    setScrollProgress(Math.min(Math.max(current / docHeight, 0), 1))
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', updateScroll, { passive: true })
    window.addEventListener('resize', updateScroll, { passive: true })
    updateScroll()

    return () => {
      window.removeEventListener('scroll', updateScroll)
      window.removeEventListener('resize', updateScroll)
    }
  }, [updateScroll])

  // Handle Dragging
  const handleThumbMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
    dragStartYRef.current = e.clientY
    dragStartScrollRef.current = window.scrollY
  }

  // Handle Clicking Track to Jump
  const handleTrackClick = (e: React.MouseEvent) => {
    if (!trackRef.current) return
    const rect = trackRef.current.getBoundingClientRect()
    const clickY = e.clientY - rect.top
    const ratio = Math.min(Math.max(clickY / rect.height, 0), 1)
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    window.scrollTo({
      top: ratio * docHeight,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    if (!isDragging) return

    const handleMouseMove = (e: MouseEvent) => {
      if (!trackRef.current) return
      const trackRect = trackRef.current.getBoundingClientRect()
      const deltaY = e.clientY - dragStartYRef.current
      const thumbTravel = trackRect.height - 84 // 84px is thumb height
      if (thumbTravel <= 0) return

      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollDelta = (deltaY / thumbTravel) * docHeight
      window.scrollTo({
        top: dragStartScrollRef.current + scrollDelta,
      })
    }

    const handleMouseUp = () => {
      setIsDragging(false)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDragging])

  // Track height calculation
  // Thumb height is 84px, so thumb max translation is trackHeight - 84px
  const thumbOffsetPercent = scrollProgress * 100

  return (
    <aside
      aria-label="مسطرة التمرير الخشبية الحرفية"
      className="fixed top-24 bottom-16 right-1.5 sm:right-2.5 z-40 select-none pointer-events-auto flex items-center justify-center transition-opacity duration-300"
      style={{ width: '28px' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 1. The Routed Carpenter Track (المجرى الخشبي المحفور) */}
      <div
        ref={trackRef}
        onClick={handleTrackClick}
        className="relative w-3.5 sm:w-4 h-full rounded-full cursor-pointer transition-all duration-300"
        style={{
          backgroundColor: '#eadecd',
          backgroundImage: `
            linear-gradient(180deg, #9b5a23 0px, #d49a55 3px, #f7d5a5 4px, #8c4a16 7px, transparent 8px),
            linear-gradient(0deg, #9b5a23 0px, #d49a55 3px, #f7d5a5 4px, #8c4a16 7px, transparent 8px),
            linear-gradient(90deg, rgba(35, 18, 10, 0.28) 0%, rgba(250, 245, 238, 0.6) 50%, rgba(35, 18, 10, 0.22) 100%),
            repeating-linear-gradient(90deg, rgba(138, 82, 41, 0.06) 0px, rgba(138, 82, 41, 0.06) 1px, transparent 1px, transparent 4px)
          `,
          boxShadow: 'inset 2px 0 5px rgba(35, 18, 10, 0.35), inset -1px 0 2px rgba(255, 255, 255, 0.9), 0 2px 8px rgba(0, 0, 0, 0.08)',
          border: '1px solid rgba(184, 115, 51, 0.35)',
        }}
        title="انقر للتنقل السريع في الصفحة"
      >
        {/* 2. The Physical Solid Wood Piece (قطعة الخشب الطبيعي المصقولة) */}
        <div
          onMouseDown={handleThumbMouseDown}
          className="absolute left-1/2 -translate-x-1/2 w-6 sm:w-7 h-[84px] cursor-grab active:cursor-grabbing transition-transform duration-75 flex flex-col items-center justify-between py-2 group"
          style={{
            top: `calc(${thumbOffsetPercent}% - ${(scrollProgress * 84).toFixed(1)}px)`,
            backgroundColor: '#8a4e22',
            backgroundImage: `
              /* Longitudinal natural wood grain */
              repeating-linear-gradient(90deg, rgba(40, 18, 7, 0.18) 0px, rgba(40, 18, 7, 0.18) 1px, transparent 1px, transparent 3px, rgba(255, 235, 200, 0.15) 3px, rgba(255, 235, 200, 0.15) 4px, transparent 4px, transparent 6px),
              /* Natural timber growth rings and 3D bevel */
              linear-gradient(90deg, #44220c 0%, #683615 12%, #8e4e22 28%, #b26c33 46%, #ca8548 54%, #9e5b27 74%, #663414 90%, #3e1c09 100%)
            `,
            /* Real sculpted timber form with asymmetric live edge */
            borderRadius: '5px 10px 6px 12px / 10px 20px 12px 22px',
            border: '2px solid rgba(60, 26, 9, 0.85)',
            boxShadow: isDragging
              ? '-2px 3px 12px rgba(20, 8, 3, 0.7), inset 2px 2px 3px rgba(255, 245, 220, 0.85), inset -2px -2px 3px rgba(30, 12, 4, 0.9)'
              : isHovered
              ? '-5px 6px 18px rgba(18, 8, 3, 0.65), 0 2px 6px rgba(45, 20, 8, 0.4), inset 2px 2px 3px rgba(255, 240, 210, 0.75), inset -2px -2px 3px rgba(30, 12, 4, 0.85)'
              : '-3px 4px 12px rgba(18, 8, 3, 0.5), 0 2px 4px rgba(45, 20, 8, 0.3), inset 2px 2px 2px rgba(255, 235, 195, 0.65), inset -2px -2px 3px rgba(30, 12, 4, 0.85)',
            transform: `translateX(-50%) ${isHovered || isDragging ? 'scale(1.08)' : 'scale(1)'}`,
            filter: isDragging ? 'brightness(0.95)' : isHovered ? 'brightness(1.1) contrast(1.05)' : 'none',
          }}
        >
          {/* Top Wooden Dowel Pin (وتد خشبي علوي) */}
          <div className="w-2.5 h-1.5 rounded-full bg-[#381a08] border border-[#d99b52]/70 shadow-xs flex items-center justify-center">
            <div className="w-1 h-0.5 rounded-full bg-[#1f0d04]" />
          </div>

          {/* Damascene Butterfly Joint (تعشيقة الفراشة الخشبية الشهيرة في الوسط) */}
          <div className="relative flex items-center justify-center py-1">
            <svg
              width="18"
              height="16"
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-xs"
            >
              {/* Bowtie / Butterfly Inlay */}
              <path
                d="M2 1 L16 1 L9 8 L16 15 L2 15 L9 8 Z"
                fill="#261005"
                stroke="#e5aa65"
                strokeWidth="1.2"
                strokeLinejoin="round"
              />
              <path
                d="M2 1 L9 8 L2 15"
                stroke="#120601"
                strokeWidth="1.2"
                fill="none"
              />
              <circle cx="9" cy="8" r="0.75" fill="#f7d5a5" />
            </svg>
          </div>

          {/* Bottom Wooden Dowel Pin (وتد خشبي سفلي) */}
          <div className="w-2.5 h-1.5 rounded-full bg-[#381a08] border border-[#d99b52]/70 shadow-xs flex items-center justify-center">
            <div className="w-1 h-0.5 rounded-full bg-[#1f0d04]" />
          </div>

          {/* Carpenter Measurement Notches (حزوز قياس مسطرة النجار المحفورة على الحافة) */}
          <div className="absolute left-0 top-3 bottom-3 flex flex-col justify-between py-1 pointer-events-none opacity-70">
            <div className="w-1.5 h-[1.5px] bg-[#220d04] shadow-[0_1px_0_rgba(255,235,200,0.4)]" />
            <div className="w-2 h-[1.5px] bg-[#220d04] shadow-[0_1px_0_rgba(255,235,200,0.4)]" />
            <div className="w-1.5 h-[1.5px] bg-[#220d04] shadow-[0_1px_0_rgba(255,235,200,0.4)]" />
            <div className="w-2 h-[1.5px] bg-[#220d04] shadow-[0_1px_0_rgba(255,235,200,0.4)]" />
            <div className="w-1.5 h-[1.5px] bg-[#220d04] shadow-[0_1px_0_rgba(255,235,200,0.4)]" />
          </div>

          {/* Floating Artisan Tooltip (عرض نسبة التمرير كختم خشبي فاخر عند السحب أو التمرير) */}
          {(isHovered || isDragging) && (
            <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#2b201a] text-[#fff9ef] text-[11px] font-mono font-bold px-2 py-1 rounded-md shadow-xl border border-[#d9b98c]/40 flex items-center gap-1.5 pointer-events-none whitespace-nowrap animate-fade">
              <span className="w-1.5 h-1.5 rounded-full bg-[#b87333]" />
              <span>{Math.round(scrollProgress * 100)}%</span>
            </div>
          )}
        </div>
      </div>
    </aside>
  )
}
