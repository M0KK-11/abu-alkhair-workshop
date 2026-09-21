import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "ورشة أبو الخير | نجارة وأثاث مخصص",
  description: "منصة عرض أعمال النجارة والأثاث المخصص - ورشة أبو الخير",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
