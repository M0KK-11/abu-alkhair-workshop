import { Link } from 'react-router'

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-6 text-center">
      <span className="font-display text-7xl font-black text-brass">٤٠٤</span>
      <h1 className="mt-4 font-display text-2xl font-extrabold text-ink">الصفحة غير موجودة</h1>
      <p className="mt-3 text-ink/60">
        يبدو أن هذه الصفحة قد نُشرت في مكان آخر من الورشة.
      </p>
      <Link
        to="/"
        className="mt-8 rounded-full bg-brass px-7 py-3.5 font-semibold text-ivory transition-colors hover:bg-brass-bright"
      >
        العودة للرئيسية
      </Link>
    </section>
  )
}
