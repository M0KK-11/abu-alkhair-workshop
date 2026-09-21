// بيانات تجريبية مؤقتة — تُستبدل تلقائياً ببيانات Supabase الحقيقية
// بمجرد ما تضيف صفوف فعلية بجدول works و categories

export const placeholderCategories = [
  { id: "1", name: "مطابخ" },
  { id: "2", name: "غرف نوم" },
  { id: "3", name: "أبواب" },
  { id: "4", name: "أثاث مخصص" },
];

export const placeholderWorks = [
  {
    id: "1",
    title: "مطبخ خشب الزان الكلاسيكي",
    description: "مطبخ متكامل من خشب الزان الطبيعي بتصميم كلاسيكي، تنفيذ يدوي بالكامل مع لمسة عصرية بالمقابض.",
    category_id: "1",
    material: "خشب زان",
    is_featured: true,
    image: "https://placehold.co/600x400/8b5e34/ffffff?text=مطبخ+زان",
  },
  {
    id: "2",
    title: "غرفة نوم بتصميم عصري",
    description: "غرفة نوم كاملة بخامات مقاومة للرطوبة ولمسات معدنية بسيطة.",
    category_id: "2",
    material: "MDF مطلي",
    is_featured: true,
    image: "https://placehold.co/600x400/6b4226/ffffff?text=غرفة+نوم",
  },
  {
    id: "3",
    title: "باب مدخل منحوت يدوياً",
    description: "باب رئيسي منحوت بالكامل يدوياً بزخارف تراثية.",
    category_id: "3",
    material: "خشب بلوط",
    is_featured: true,
    image: "https://placehold.co/600x400/4a2c17/ffffff?text=باب+خشبي",
  },
  {
    id: "4",
    title: "طاولة طعام مخصصة",
    description: "طاولة طعام بمقاس مخصص لـ 8 أشخاص مع كراسي متناسقة.",
    category_id: "4",
    material: "خشب جوز",
    is_featured: false,
    image: "https://placehold.co/600x400/5c3a21/ffffff?text=طاولة+طعام",
  },
];
