import { siteConfig } from '../config/site'

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-center group">
      {/* Tooltip on hover */}
      <div className="hidden md:block absolute left-full ml-3 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-primary-container text-[#fff9ef] text-xs py-1.5 px-3 rounded shadow-lg border border-[#d9b98c]/20">
        تحدث مع المعلم أبو الخير مباشرة
      </div>

      <a
        aria-label="WhatsApp"
        href={siteConfig.contact.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25d366] text-white flex items-center justify-center shadow-[0_8px_24px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_28px_rgba(37,211,102,0.6)] hover:scale-105 transition-transform"
      >
        <span className="material-symbols-outlined text-[28px]">chat</span>
      </a>
    </div>
  )
}
