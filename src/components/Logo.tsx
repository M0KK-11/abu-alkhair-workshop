import React from 'react'

interface LogoProps {
  className?: string
  variant?: 'light' | 'dark' | 'auto'
  showSubtitle?: boolean
  iconOnly?: boolean
}

export default function Logo({
  className = '',
  variant = 'light',
  showSubtitle = true,
  iconOnly = false,
}: LogoProps) {
  const isLight = variant === 'light'
  const textColor = isLight ? '#FFF9EF' : '#1D1714'
  const subtextColor = isLight ? '#D9B98C' : '#8A6A45'
  const badgeBg = isLight ? 'rgba(217, 185, 140, 0.12)' : 'rgba(115, 90, 53, 0.1)'
  const badgeBorder = isLight ? 'rgba(217, 185, 140, 0.3)' : 'rgba(115, 90, 53, 0.25)'

  return (
    <div className={`inline-flex items-center gap-3.5 select-none ${className}`}>
      {/* Artisanal Damascene Woodcraft & Joinery Crest */}
      <div className="relative shrink-0 flex items-center justify-center group">
        <svg
          viewBox="0 0 84 84"
          className="h-11 w-11 sm:h-12 sm:w-12 drop-shadow-[0_4px_12px_rgba(184,115,51,0.25)] transition-transform duration-300 group-hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Rich Brushed Brass Gradient */}
            <linearGradient id="brassGrad" x1="10" y1="10" x2="74" y2="74" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#F5D7B0" />
              <stop offset="30%" stopColor="#C98642" />
              <stop offset="70%" stopColor="#9C5921" />
              <stop offset="100%" stopColor="#E3AF72" />
            </linearGradient>

            {/* Glowing Accent Gradient */}
            <linearGradient id="goldGlow" x1="42" y1="4" x2="42" y2="80" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFE7C4" />
              <stop offset="50%" stopColor="#D49A55" />
              <stop offset="100%" stopColor="#8A4A14" />
            </linearGradient>

            {/* Deep Solid Walnut Wood Core */}
            <linearGradient id="walnutCore" x1="20" y1="20" x2="64" y2="64" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#2F231D" />
              <stop offset="50%" stopColor="#1C1410" />
              <stop offset="100%" stopColor="#291D17" />
            </linearGradient>

            {/* Subtle Inner Radial Glow */}
            <radialGradient id="crestGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#D9B98C" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#B87333" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Background Medallion (Damascene Octagon) */}
          <rect
            x="8"
            y="8"
            width="68"
            height="68"
            rx="18"
            fill="url(#walnutCore)"
            stroke="url(#brassGrad)"
            strokeWidth="2.2"
          />
          <circle cx="42" cy="42" r="33" fill="url(#crestGlow)" />

          {/* Geometric Inner Framing Line */}
          <rect
            x="14"
            y="14"
            width="56"
            height="56"
            rx="12"
            stroke="url(#brassGrad)"
            strokeWidth="0.8"
            strokeDasharray="3 2"
            opacity="0.6"
          />

          {/* Organic Wood Growth Rings (Concentric Timber Texture Arcs) */}
          <path
            d="M20 54C23 37 36 24 53 21"
            stroke="#D9B98C"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.35"
          />
          <path
            d="M26 59C28 45 39 34 53 31"
            stroke="#C98642"
            strokeWidth="1"
            strokeLinecap="round"
            opacity="0.4"
          />
          <path
            d="M32 64C34 53 43 44 54 41"
            stroke="#D9B98C"
            strokeWidth="0.8"
            strokeLinecap="round"
            opacity="0.3"
          />

          {/* The Artisanal Joinery & "أ خ" Monogram Insignia */}
          {/* Vertical Alif Pillar / Chiseled mortise */}
          <path
            d="M28 24V58"
            stroke="url(#goldGlow)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          {/* Decorative Tenon Join Pin */}
          <circle cx="28" cy="30" r="1.5" fill="#FFE7C4" />

          {/* Calligraphic Damascene "خ" Curve & Carpenter's Interlock */}
          <path
            d="M33 34C37 27 49 27 55 33C58 36 58 41 53 45L37 57H56"
            stroke="url(#brassGrad)"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Central Mortise & Tenon Key (Japanese Kigumi Joint Motif) */}
          <path
            d="M38 41L45 47"
            stroke="#FFE7C4"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Floating Diamond Accent (نقطة الخاء / Chiseled Brass Inlay) */}
          <path
            d="M45 20L48.5 24.5L45 29L41.5 24.5Z"
            fill="url(#goldGlow)"
            stroke="#FFE7C4"
            strokeWidth="0.8"
          />
          <circle cx="45" cy="24.5" r="1" fill="#FFFFFF" />

          {/* 4 Corner Brass Pins / Nails */}
          <circle cx="16" cy="16" r="1.5" fill="url(#brassGrad)" />
          <circle cx="68" cy="16" r="1.5" fill="url(#brassGrad)" />
          <circle cx="16" cy="68" r="1.5" fill="url(#brassGrad)" />
          <circle cx="68" cy="68" r="1.5" fill="url(#brassGrad)" />
        </svg>

        {/* Subtle Ambient Glow Behind the Emblem */}
        <div className="absolute inset-0 rounded-2xl bg-[#c37c3b]/15 blur-md -z-10 group-hover:bg-[#c37c3b]/25 transition-all"></div>
      </div>

      {/* Typography Section */}
      {!iconOnly && (
        <div className="flex flex-col leading-none text-right">
          <div className="flex items-center gap-2">
            <span
              className="text-xl sm:text-2xl font-black tracking-tight font-sans transition-colors"
              style={{ color: textColor }}
            >
              ورشة أبو الخير
            </span>
            <span
              className="hidden sm:inline-block text-[9px] px-1.5 py-0.5 rounded font-mono font-bold tracking-wider"
              style={{ backgroundColor: badgeBg, color: subtextColor, border: `1px solid ${badgeBorder}` }}
            >
              دمشق
            </span>
          </div>

          {showSubtitle && (
            <div className="flex items-center gap-1.5 mt-1.5">
              <span
                className="text-[10px] sm:text-[11px] font-semibold tracking-wide"
                style={{ color: subtextColor }}
              >
                للأعمال الخشبية الفاخرة والنجارة الراقية
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
