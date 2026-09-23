import { Link } from 'react-router'
import { IconArrowLeft } from '../lib/icons'
import type { Work } from '../lib/works'

export default function WorkCard({ work }: { work: Work }) {
  return (
    <Link
      to={`/work/${work.slug}`}
      className="group flex flex-col overflow-hidden rounded-card border border-oak/25 bg-white/60 shadow-sm shadow-charcoal/5 transition-all duration-300 hover:-translate-y-1 hover:border-brass/40 hover:shadow-lg hover:shadow-charcoal/10"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-ivory-deep">
        <img
          src={work.image}
          alt={work.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute right-3 top-3 flex items-center gap-1.5">
          <span className="rounded-full bg-charcoal/80 px-3 py-1 text-xs font-medium text-oak backdrop-blur-sm">
            {work.category}
          </span>
          {work.is_featured && (
            <span
              className="rounded-full bg-[#b87333]/90 px-2 py-0.5 text-xs text-amber-300 backdrop-blur-sm flex items-center gap-1 shadow-sm"
              title="عمل مميز"
            >
              <span className="material-symbols-outlined text-[14px]">star</span>
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-1.5 mb-1.5">
          <span className="w-2 h-2 rounded-full bg-[#b87333]"></span>
          <span className="text-xs text-ink/70">{work.material}</span>
        </div>
        <h3 className="font-display text-lg font-bold text-ink">{work.title}</h3>
        <span className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-brass transition-all group-hover:gap-2.5">
          عرض التفاصيل
          <IconArrowLeft className="h-4 w-4" />
        </span>
      </div>
    </Link>
  )
}
