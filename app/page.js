import Link from "next/link";
import { supabase } from "../lib/supabase";
import { placeholderWorks } from "../lib/placeholderData";

async function getFeaturedWorks() {
  const { data, error } = await supabase
    .from("works")
    .select("id, title, description, is_featured, work_images(image_url)")
    .eq("is_featured", true)
    .limit(6);

  if (error || !data || data.length === 0) {
    // نستخدم بيانات تجريبية لحين توفر بيانات حقيقية بقاعدة البيانات
    return placeholderWorks.filter((w) => w.is_featured);
  }
  return data.map((w) => ({
    ...w,
    image: w.work_images?.[0]?.image_url || "https://placehold.co/600x400?text=عمل+النجار",
  }));
}

export default async function HomePage() {
  const works = await getFeaturedWorks();

  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>ورشة أبو الخير</h1>
          <p>نجارة وأثاث مخصص بلمسة أصيلة وخبرة سنين طويلة</p>
          <Link href="/gallery" className="btn">شوف أعمالنا</Link>
          <Link href="/contact" className="btn btn-outline">اطلب الآن</Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>أبرز أعمالنا</h2>
          <div className="grid">
            {works.map((work) => (
              <Link key={work.id} href={`/work/${work.id}`} className="card">
                <img src={work.image} alt={work.title} />
                <div className="card-body">
                  <h3>{work.title}</h3>
                  <p>{work.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
