import type { SVGProps } from 'react'

/* Thin line icons, 1.5 stroke, currentColor */
const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export function IconMenu(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )
}

export function IconClose(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  )
}

export function IconArrowLeft(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
  )
}

export function IconArrowRight(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

export function IconChisel(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M14 4l6 6-9 9-4 1 1-4 9-9z" />
      <path d="M5 20h5" />
    </svg>
  )
}

export function IconPlane(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M3 14l4-8h11l3 4v4H3z" />
      <path d="M3 14l2 4h12l2-4" />
      <path d="M9 10v2" />
    </svg>
  )
}

export function IconLeaf(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M20 4S8 4 5 12c-2 5 2 8 2 8s7-1 10-7c2-4 3-9 3-9z" />
      <path d="M8 16c3-4 6-6 9-8" />
    </svg>
  )
}

export function IconRuler(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M4 16L16 4l4 4L8 20z" />
      <path d="M8 8l2 2M11 5l2 2M5 11l2 2" />
    </svg>
  )
}

export function IconClock(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4l3 2" />
    </svg>
  )
}

export function IconPhone(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M4 5c0 8 7 15 15 15l0-3-4-2-2 2c-3-1.5-5.5-4-7-7l2-2-2-4H4z" />
    </svg>
  )
}

export function IconPin(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M12 21s7-6 7-11a7 7 0 10-14 0c0 5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  )
}

export function IconMail(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  )
}

export function IconWhatsApp(p: SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 004.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm0 18.15h-.01a8.2 8.2 0 01-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.2 8.2 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 012.41 5.83c0 4.54-3.7 8.23-8.24 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.8-.79.97-.14.16-.29.18-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43l-.48-.01c-.16 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.16 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29z" />
    </svg>
  )
}
