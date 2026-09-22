import { useState } from 'react'
import { IconPhone, IconMail, IconPin, IconArrowLeft } from '../lib/icons'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', message: '' })

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }))

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  const inputCls =
    'w-full rounded-xl border border-oak/30 bg-white/60 px-4 py-3 text-ink placeholder:text-ink/35 outline-none transition-colors focus:border-brass focus:ring-2 focus:ring-brass/20'

  return (
    <>
      <section className="wood-texture bg-charcoal pt-32 pb-16 lg:pt-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <span className="text-sm font-semibold tracking-widest text-brass">تواصل</span>
          <h1 className="mt-3 font-display text-4xl font-black text-ivory lg:text-5xl">
            لنبدأ الحديث عن قطعتك
          </h1>
          <p className="mt-4 max-w-xl text-ivory/70">
            املأ النموذج وسنعاود التواصل معك خلال يوم عمل، أو راسلنا مباشرة عبر واتساب.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr]">
          {/* Form */}
          <div className="rounded-card border border-oak/25 bg-white/50 p-6 sm:p-8">
            {sent ? (
              <div className="flex min-h-72 flex-col items-center justify-center text-center">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-brass/15 text-brass">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                <h3 className="mt-5 font-display text-2xl font-extrabold text-ink">تم استلام رسالتك</h3>
                <p className="mt-2 text-ink/60">شكراً {form.name || 'لك'}، سنتواصل معك قريباً.</p>
                <button
                  onClick={() => {
                    setSent(false)
                    setForm({ name: '', phone: '', message: '' })
                  }}
                  className="mt-6 font-semibold text-brass"
                >
                  إرسال رسالة أخرى
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-ink/80">الاسم</label>
                  <input
                    required
                    value={form.name}
                    onChange={update('name')}
                    placeholder="اسمك الكريم"
                    className={inputCls}
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-ink/80">رقم الهاتف</label>
                  <input
                    required
                    type="tel"
                    dir="ltr"
                    value={form.phone}
                    onChange={update('phone')}
                    placeholder="+20 100 000 0000"
                    className={`${inputCls} text-right`}
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-ink/80">الرسالة</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={update('message')}
                    placeholder="حدّثنا عن القطعة التي تريدها..."
                    className={`${inputCls} resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-brass px-6 py-3.5 font-semibold text-ivory shadow-md shadow-brass/20 transition-all hover:bg-brass-bright"
                >
                  إرسال الرسالة
                  <IconArrowLeft className="h-5 w-5" />
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="space-y-4">
            {[
              { icon: IconPhone, label: 'الهاتف', value: '+20 100 123 4567', dir: 'ltr' as const },
              { icon: IconMail, label: 'البريد', value: 'info@abualkhair.com' },
              { icon: IconPin, label: 'العنوان', value: 'المنطقة الصناعية، القاهرة، مصر' },
            ].map((c) => (
              <div
                key={c.label}
                className="flex items-center gap-4 rounded-card border border-oak/25 bg-white/50 p-5"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-oak/20 text-brass">
                  <c.icon className="h-6 w-6" />
                </span>
                <div>
                  <div className="text-xs text-ink/50">{c.label}</div>
                  <div className="font-semibold text-ink" dir={c.dir}>
                    {c.value}
                  </div>
                </div>
              </div>
            ))}

            <div className="rounded-card border border-oak/25 bg-charcoal p-6 text-ivory">
              <h3 className="font-display text-lg font-bold text-oak">ساعات العمل</h3>
              <ul className="mt-4 space-y-2 text-sm text-ivory/75">
                <li className="flex justify-between">
                  <span>السبت – الخميس</span>
                  <span dir="ltr">9:00 – 18:00</span>
                </li>
                <li className="flex justify-between">
                  <span>الجمعة</span>
                  <span>إجازة</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
