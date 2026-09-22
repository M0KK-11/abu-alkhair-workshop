import { Link } from 'react-router'
import { siteConfig } from '../config/site'

export default function MobileQuickBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-primary-container/95 backdrop-blur-xl border-t border-[#d9b98c]/25 px-4 py-2.5 shadow-[0_-4px_20px_rgba(0,0,0,0.3)]">
      <div className="flex items-center justify-around gap-2 max-w-md mx-auto">
        {/* Direct Call Action */}
        <a
          href={siteConfig.contact.phoneTel}
          className="flex-1 flex flex-col items-center justify-center gap-1 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors"
        >
          <span className="material-symbols-outlined text-[20px] text-[#d9b98c]">call</span>
          <span className="text-[11px] font-semibold">اتصال فوري</span>
        </a>

        {/* WhatsApp Direct Action (Highlighted Green) */}
        <a
          href={siteConfig.contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center gap-1 py-1.5 rounded-lg bg-[#25d366] hover:bg-[#20ba59] text-white shadow-md transition-colors"
        >
          <span className="material-symbols-outlined text-[20px]">chat</span>
          <span className="text-[11px] font-bold">واتساب</span>
        </a>

        {/* Request Consultation / Quote */}
        <Link
          to="/contact"
          className="flex-1 flex flex-col items-center justify-center gap-1 py-1.5 rounded-lg bg-[#b87333] hover:bg-[#c37c3b] text-white shadow-md transition-colors"
        >
          <span className="material-symbols-outlined text-[20px]">tune</span>
          <span className="text-[11px] font-bold">طلب تسعير</span>
        </Link>
      </div>
    </div>
  )
}
