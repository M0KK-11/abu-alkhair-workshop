import React from 'react'

interface LogoProps {
  className?: string
  variant?: 'light' | 'dark' | 'auto'
  showSubtitle?: boolean
}

export default function Logo({ className = 'h-10', variant = 'light', showSubtitle = true }: LogoProps) {
  const textColor = variant === 'light' ? '#F7F3EE' : '#2B2320'
  const subtextColor = variant === 'light' ? '#D9B98C' : '#8C7A6B'

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>  
      {/* Artisanal Mortise & Tenon Joinery Emblem */}
      <svg
        viewBox="0 0 64 64"
        className="h-10 w-10 shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="10"
          y="8"
          width="44"
          height="48"
          rx="6"
          stroke="#B87333"
          strokeWidth="3"
          fill="none"
        />
        <path
          d="M22 8V32H42V8"
          stroke="#D9B98C"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="32" cy="44" r="3.5" fill="#B87333" />
        <line
          x1="6"
          y1="60"
          x2="58"
          y2="60"
          stroke="#B87333"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path d="M32 3L36 8H28L32 3Z" fill="#B87333" />
      </svg>

      <div className="flex flex-col leading-tight">
        <span
          className="font-display text-xl font-black tracking-tight"
          style={{ color: textColor }}
        >
          ورشة أبو الخير
        </span>
        {showSubtitle && (
          <span
            className="text-[10px] sm:text-[11px] font-medium tracking-wide"
            style={{ color: subtextColor }}
          >
            للنجارة الراقية والأعمال الخشبية الفاخرة
          </span>
        )}
      </div>
    </div>
  )
}
