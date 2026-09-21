import { supabase } from "../../lib/supabase";
import { placeholderWorks, placeholderCategories } from "../../lib/placeholderData";
import GalleryClient from "./GalleryClient";

async function getWorksAndCategories() {
  const [{ data: works }, { data: categories }] = await Promise.all([
    supabase.from("works").select("id, title, description, category_id, work_images(image_url)"),
    supabase.from("categories").select("id, name"),
  ]);

  const finalWorks =
    works && works.length > 0
      ? works.map((w) => ({
          ...w,
          image: w.work_images?.[0]?.image_url || "https://placehold.co/600x400?text=عمل+النجار",
        }))
      : placeholderWorks;

  const finalCategories = categories && categories.length > 0 ? categories : placeholderCategories;

  return { works: finalWorks, categories: finalCategories };
}

export default async function GalleryPage() {
  const { works, categories } = await getWorksAndCategories();
  return <GalleryClient works={works} categories={categories} />;
}
