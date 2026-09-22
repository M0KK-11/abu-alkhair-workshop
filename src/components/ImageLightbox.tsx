import { useEffect, useState } from 'react'

export interface LightboxProps {
  isOpen: boolean
  onClose: () => void
  imageSrc?: string
  src?: string
  alt?: string
  title?: string
  caption?: string
  description?: string
  badge?: string
}

export function ImageLightbox({
  isOpen,
  onClose,
  imageSrc,
  src,
  alt,
  title,
  caption,
  description,
  badge,
}: LightboxProps) {
  const [zoomed, setZoomed] = useState(false)
  const finalSrc = src || imageSrc || ''
  const finalTitle = title || caption

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 animate-fade"
      onClick={onClose}
    >
      {/* Top Controls Bar */}
      <div
        className="w-full max-w-6xl flex items-center justify-between text-white pb-3 z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col text-right">
          {badge && (
            <span className="text-[11px] text-[#d9b98c] font-semibold tracking-wide">
              {badge}
            </span>
          )}
          {finalTitle && <h3 className="text-sm sm:text-base font-bold">{finalTitle}</h3>}
        </div>

        <div className="flex items-center gap-2">
          {/* Zoom toggle button */}
          <button
            type="button"
            onClick={() => setZoomed(!zoomed)}
            aria-label="Zoom Image"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[22px]">
              {zoomed ? 'zoom_out' : 'zoom_in'}
            </span>
          </button>

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close Preview"
            className="p-2 rounded-full bg-white/10 hover:bg-red-500/80 text-white transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[24px]">close</span>
          </button>
        </div>
      </div>

      {/* Main Image Stage */}
      <div
        className="relative max-w-6xl max-h-[80vh] w-full flex items-center justify-center overflow-auto rounded-xl select-none"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={finalSrc}
          alt={alt || finalTitle || 'معاينة صورة مكبرة'}
          className={`max-w-full max-h-[75vh] object-contain rounded-lg transition-transform duration-300 ${
            zoomed ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in'
          }`}
          onClick={() => setZoomed(!zoomed)}
        />
      </div>

      {/* Bottom Description Pill */}
      {description && (
        <div
          className="mt-3 text-center text-xs text-[#d2c4bf] max-w-xl bg-white/5 py-1.5 px-4 rounded-full border border-white/10"
          onClick={(e) => e.stopPropagation()}
        >
          {description}
        </div>
      )}
    </div>
  )
}

export default ImageLightbox
