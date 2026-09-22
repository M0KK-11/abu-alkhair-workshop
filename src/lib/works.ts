export type Work = {
  slug: string
  title: string
  category: string
  summary: string
  description: string
  material: string
  duration: string
  finish: string
  image: string
}

const img = (id: string, w = 1200, h = 900) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&auto=format`

export const categories = ['الكل', 'طاولات', 'خزائن', 'أبواب', 'مطابخ', 'ديكور']

export const works: Work[] = [
  {
    slug: 'royal-walnut-dining-table',
    title: 'طاولة طعام ملكية بقصّة حية (Live Edge) ومقاعد منجدة بالجلد الطبيعي',
    category: 'طاولات',
    summary: 'طاولة ملكية من لوحين متقابلين من خشب الجوز المعمر وقاعدة نحاسية',
    description:
      'صُممت هذه القطعة خصيصاً لفيلا خاصة بالرياض، باستخدام لوحين متقابلين من شجرة جوز أمريكي معمرة، مع صقل يدوي بزيوت طبيعية عضوية خالية من الكيماويات الضارة، لتكون محوراً عمرانياً دافئاً يجمع العائلة لأجيال.',
    material: 'خشب جوز أمريكي صلب (FAS)',
    duration: '28 يوم عمل يدوي مكثف',
    finish: '4 طبقات زيت وشمع عسل طبيعي (Osmo)',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBesiWog6lyU3Bn__oQP6ZXdk-90ZfwOR9pPObwpKjQXVJ_5oFKVqH99yNboa3sMKF3L8dC7DAXzt5i43fKZqrd6971Zi8vsagk6S7onwsWeEVzr4bzbckg91R1hXAlvloCUOOcHsWjaxvcDi5nXfoBvPVtlefzqX2OTTGupDqrQtk-6Bo0YHPgu7NAMcfEwI-5xRClVkjKw-NxarmjJyBSkdgSZ1J2hfuWLVI_vcW_70WWYhjgDCET',
  },
  {
    slug: 'oak-dining-table',
    title: 'طاولة طعام من خشب البلوط',
    category: 'طاولات',
    summary: 'طاولة عائلية بلوح واحد وحواف طبيعية',
    description:
      'طاولة طعام مصنوعة من لوح بلوط أوروبي مختار بعناية، بُنيت بأسلوب اللوح الواحد مع الحفاظ على حواف الخشب الطبيعية. صُقلت باليد وطُليت بزيت طبيعي يُبرز عروق الخشب دون أن يخفيها.',
    material: 'بلوط أوروبي صلب',
    duration: '٦ أسابيع',
    finish: 'زيت طبيعي مطفّأ',
    image: img('1653971858625'),
  },
  {
    slug: 'walnut-cabinet',
    title: 'خزانة عرض من الجوز',
    category: 'خزائن',
    summary: 'خزانة بأبواب زجاجية وتفاصيل نحاسية',
    description:
      'خزانة عرض بأبواب زجاجية وإطار من خشب الجوز الداكن، بمقابض نحاسية مشغولة يدوياً. صُممت لتكون قطعة محورية في غرفة المعيشة، بأدراج انزلاقية ناعمة ورفوف قابلة للتعديل.',
    material: 'جوز أمريكي',
    duration: '٨ أسابيع',
    finish: 'ورنيش شمعي',
    image: img('1759171069660'),
  },
  {
    slug: 'pivot-door',
    title: 'باب محوري خشبي',
    category: 'أبواب',
    summary: 'باب مدخل بمفصلة محورية وخطوط عمودية',
    description:
      'باب مدخل بارتفاع كامل يعمل بمفصلة محورية مخفية، بتصميم خطوط عمودية نظيفة تمنح واجهة المنزل حضوراً عصرياً هادئاً. الخشب معالَج ضد الرطوبة ومهيّأ للاستخدام الخارجي.',
    material: 'خشب الساج المعالج',
    duration: '٥ أسابيع',
    finish: 'دهان خارجي مقاوم',
    image: img('1758977404839'),
  },
  {
    slug: 'walnut-kitchen',
    title: 'مطبخ خشبي متكامل',
    category: 'مطابخ',
    summary: 'وحدات مطبخ بواجهات خشبية دافئة',
    description:
      'مطبخ مصمّم على المقاس بواجهات خشبية دافئة وأسطح عمل متينة. يجمع بين المساحات التخزينية الذكية والخطوط البسيطة، مع مفصلات هادئة الإغلاق ولمسات نحاسية في المقابض.',
    material: 'رقائق بلوط طبيعية',
    duration: '١٠ أسابيع',
    finish: 'طلاء مطفّأ مقاوم',
    image: img('1758977404038'),
  },
  {
    slug: 'sideboard-console',
    title: 'كونسول تخزين منخفض',
    category: 'ديكور',
    summary: 'وحدة جانبية بخطوط أفقية ممتدة',
    description:
      'كونسول تخزين منخفض بخطوط أفقية ممتدة وأرجل مدببة أنيقة. مثالي لغرفة الاستقبال، يوازن بين مساحة التخزين والحضور البصري الخفيف، بأدراج مبطّنة من الداخل.',
    material: 'بلوط مدخّن',
    duration: '٧ أسابيع',
    finish: 'زيت مقوّى مطفّأ',
    image: img('1758977405163'),
  },
  {
    slug: 'coffee-table',
    title: 'طاولة قهوة نحتية',
    category: 'طاولات',
    summary: 'طاولة بقاعدة منحوتة وسطح دائري',
    description:
      'طاولة قهوة بسطح دائري وقاعدة منحوتة يدوياً تجمع بين النحت التقليدي والشكل العصري. كل قطعة فريدة بحكم طبيعة النحت اليدوي وتباين عروق الخشب.',
    material: 'خشب الزان',
    duration: '٤ أسابيع',
    finish: 'شمع نحل طبيعي',
    image: img('1653971858569'),
  },
  {
    slug: 'display-hutch',
    title: 'دولاب زجاجي كلاسيكي',
    category: 'خزائن',
    summary: 'دولاب عرض بإضاءة داخلية دافئة',
    description:
      'دولاب عرض بأبواب زجاجية وإضاءة داخلية دافئة تُبرز محتوياته. يجمع بين الإطار الخشبي المتين والزجاج الشفاف، مع رفوف زجاجية آمنة قابلة للتعديل.',
    material: 'جوز وزجاج',
    duration: '٩ أسابيع',
    finish: 'ورنيش لامع خفيف',
    image: img('1758565811303'),
  },
  {
    slug: 'entry-bench',
    title: 'مقعد مدخل مع تخزين',
    category: 'ديكور',
    summary: 'مقعد بمساحة تخزين مخفية أسفله',
    description:
      'مقعد مدخل بمساحة تخزين مخفية أسفل الجلسة، بخطوط بسيطة تناسب المداخل الضيقة. مثالي لترتيب الأحذية مع منطقة جلوس مريحة عند الباب.',
    material: 'بلوط فاتح',
    duration: '٣ أسابيع',
    finish: 'زيت طبيعي',
    image: img('1758977404839', 1200, 900),
  },
]

export function getWork(slug: string) {
  return works.find((w) => w.slug === slug)
}
