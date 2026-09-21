"use client";

import { useState } from "react";
import Link from "next/link";

export default function GalleryClient({ works, categories }) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredWorks =
    activeCategory === "all"
      ? works
      : works.filter((w) => w.category_id === activeCategory);

  return (
    <section className="section">
      <div className="container">
        <h2>معرض الأعمال</h2>

        <div className="filters">
          <button
            className={activeCategory === "all" ? "active" : ""}
            onClick={() => setActiveCategory("all")}
          >
            الكل
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={activeCategory === cat.id ? "active" : ""}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="grid">
          {filteredWorks.map((work) => (
            <Link key={work.id} href={`/work/${work.id}`} className="card">
              <img src={work.image} alt={work.title} />
              <div className="card-body">
                <h3>{work.title}</h3>
                <p>{work.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {filteredWorks.length === 0 && (
          <p style={{ textAlign: "center", marginTop: 30 }}>لا يوجد أعمال بهذا التصنيف حالياً.</p>
        )}
      </div>
    </section>
  );
}
