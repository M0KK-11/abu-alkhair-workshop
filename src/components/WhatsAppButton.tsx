import { IconWhatsApp } from '../lib/icons'

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/201001234567"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="تواصل عبر واتساب"
      className="group fixed bottom-6 left-6 z-50 flex items-center gap-3 rounded-full bg-whatsapp px-4 py-4 text-white shadow-lg shadow-whatsapp/30 transition-all hover:pl-5 hover:shadow-xl"
    >
      <IconWhatsApp className="h-6 w-6" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-300 group-hover:max-w-[8rem] group-hover:opacity-100">
        تواصل معنا
      </span>
    </a>
  )
}
