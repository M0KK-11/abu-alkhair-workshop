const WHATSAPP_NUMBER = "9627XXXXXXXX"; // عدّل الرقم هون

export default function Footer() {
  return (
    <>
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="تواصل عبر واتساب"
      >
        📱
      </a>
      <footer>
        <div className="container">
          <p>ورشة أبو الخير — نجارة وأثاث مخصص</p>
          <p>جميع الحقوق محفوظة © {new Date().getFullYear()}</p>
        </div>
      </footer>
    </>
  );
}
