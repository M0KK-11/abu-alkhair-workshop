import Link from "next/link";
import { supabase } from "../../../lib/supabase";
import { placeholderWorks } from "../../../lib/placeholderData";

async function getWork(id) {
  const { data } = await supabase
    .from("works")
    .select("*, work_images(image_url)")
    .eq("id", id)
    .single();

  if (data) {
    return { ...data, image: data.work_images?.[0]?.image_url };
  }
  // رجوع لبيانات تجريبية إذا ما لقينا العمل بقاعدة البيانات (بيئة تجريبية)
  return placeholderWorks.find((w) => w.id === id);
}

export default async function WorkDetailPage({ params }) {
  const work = await getWork(params.id);

  if (!work) {
    return (
      <div className="container section">
        <p>لم يتم العثور على هذا العمل.</p>
        <Link href="/gallery" className="btn">رجوع للمعرض</Link>
      </div>
    );
  }

  return (
    <section className="section work-detail">
      <div className="container">
        <img src={work.image} alt={work.title} className="main" />
        <h1>{work.title}</h1>
        <div className="meta">
          {work.material && <span>الخامة: {work.material}</span>}
        </div>
        <p>{work.description}</p>
        <Link href="/contact" className="btn">اطلب عمل مشابه</Link>
      </div>
    </section>
  );
}
