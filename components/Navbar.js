import Link from "next/link";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container">
        <Link href="/" className="logo">ورشة أبو الخير</Link>
        <nav>
          <Link href="/">الرئيسية</Link>
          <Link href="/gallery">المعرض</Link>
          <Link href="/about">عنّا</Link>
          <Link href="/contact">تواصل معنا</Link>
        </nav>
      </div>
    </header>
  );
}
