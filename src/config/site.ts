/**
 * Centralized site configuration and workshop metadata.
 * Single source of truth for contact details, location, and brand information.
 */
export const siteConfig = {
  name: 'ورشة أبو الخير',
  shortName: 'أبو الخير',
  tagline: 'للنجارة الراقية والأعمال الخشبية الفاخرة',
  subtitle: 'للأعمال الخشبية الفاخرة والنجارة الراقية',
  description:
    'صياغة معمارية راقية للأخشاب الطبيعية تجمع الدقة اليابانية والأناقة الإسكندنافية وأصالة التراث الدمشقي لابتكار قطع فنية خالدة.',
  city: 'دمشق',
  country: 'سوريا',
  address: 'سوريا، دمشق - المزة، حي الإخلاص',
  coordinates: {
    lat: 33.504990,
    lng: 36.265369,
    formatted: '33.504990, 36.265369',
  },
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=33.504990,36.265369',
  googleMapsEmbedUrl: 'https://maps.google.com/maps?q=33.504990,36.265369&hl=ar&z=16&output=embed',
  
  contact: {
    phoneFormatted: '+963 988 696 805',
    phoneLocal: '0988 696 805',
    phoneTel: 'tel:+963988696805',
    phoneRaw: '+963988696805',
    whatsappNumber: '963988696805',
    whatsappUrl: 'https://wa.me/963988696805',
    email: 'info@abualkhair-wood.com',
    emailMailto: 'mailto:info@abualkhair-wood.com',
  },

  workingHours: {
    days: 'السبت - الخميس',
    hours: '9:00 ص - 9:00 م',
    full: 'السبت - الخميس: 9:00 ص - 9:00 م',
  },

  links: {
    home: '/',
    gallery: '/gallery',
    about: '/about',
    contact: '/contact',
  },
} as const
