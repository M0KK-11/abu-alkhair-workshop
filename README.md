# ورشة أبو الخير — منصة عرض الأعمال (المرحلة 1)

## التشغيل محلياً

1. ثبّت الحزم:
   ```
   npm install
   ```

2. انسخ ملف البيئة وعبّي بياناتك من Supabase (Project Settings → API):
   ```
   cp .env.local.example .env.local
   ```
   وعدّل القيم:
   ```
   NEXT_PUBLIC_SUPABASE_URL=...
   NEXT_PUBLIC_SUPABASE_ANON_KEY=...
   ```

3. شغّل المشروع:
   ```
   npm run dev
   ```
   افتح المتصفح على: http://localhost:3000

## ملاحظات مهمة

- **الموقع شغّال حالياً بمحتوى تجريبي (placeholder)**: إذا جدول `works` بقاعدة بياناتك فاضي، رح يعرض الموقع بيانات وهمية تلقائياً (4 أعمال تجريبية) حتى تقدر تشوف الشكل النهائي. بمجرد ما تضيف أعمال حقيقية بالداشبورد (أو مباشرة من Supabase Table Editor)، رح تظهر تلقائياً بدل البيانات التجريبية.
- **رقم الواتساب**: عدّل الرقم `9627XXXXXXXX` بملفي `components/Footer.js` و `app/contact/page.js`.
- **نموذج التواصل**: يكتب مباشرة بجدول `messages` بقاعدة البيانات (تأكد إنك شغّلت ملف `schema.sql` أولاً بـ Supabase).

## البنية

```
app/
  page.js              → الصفحة الرئيسية
  gallery/             → صفحة المعرض مع الفلترة
  work/[id]/           → صفحة تفاصيل كل عمل
  about/               → صفحة عنّا
  contact/             → صفحة التواصل
components/
  Navbar.js, Footer.js
lib/
  supabase.js          → الاتصال بقاعدة البيانات
  placeholderData.js   → بيانات تجريبية مؤقتة
```

## النشر

بعد ما تتأكد إنه شغّال محلياً، ارفعه على GitHub واربطه بـ Vercel (استيراد المشروع مباشرة)، وضيف نفس متغيرات `.env.local` بإعدادات Environment Variables على Vercel.
