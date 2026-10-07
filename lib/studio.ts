import { media } from "@/lib/media";

export const INSTAGRAM_URL = "https://www.instagram.com/royal_detailing_studio/";
export const MAPS_URL = "https://2gis.kz/shymkent/firm/70000001039691790";

export const studio = {
  name: "Royal Detailing Studio",
  city: "Шымкент",
  country: "Казахстан",
  phone: "+77029517878",
  displayPhone: "+7 702 951 78 78",
  whatsappNumber: "77029517878",
  secondaryWhatsappNumber: "77024351754",
  secondaryDisplayPhone: "+7 702 435 17 54",
  address: "ул. Желтоксан, 207/1, Енбекшинский район, Шымкент, 160008",
  hours: "Пн–Сб: 10:00–18:00 · Вс: выходной",
  metaDescription:
    "Royal Detailing Studio в Шымкенте: детейлинг автомобилей и тонировка автостёкол. Желтоксан, 207/1. Запись и вопросы — по телефону, WhatsApp и Instagram.",
  keywords: ["Royal Detailing Studio Шымкент", "тонировка автостёкол Шымкент", "детейлинг Шымкент"],
  hero: {
    eyebrow: "Детейлинг · тонировка автостёкол",
    lines: ["Уход", "за вашим", "автомобилем"],
    description:
      "Royal Detailing Studio — центр детейлинга и тонировки автостёкол в Шымкенте.",
    primaryCta: "Связаться со студией",
    secondaryCta: "Посмотреть услуги",
  },
  contact: {
    headingLines: ["Royal", "Detailing", "Studio"],
    description:
      "Позвоните или напишите в WhatsApp. Фото работ и новости студии — в Instagram.",
    whatsappCta: "Написать в WhatsApp",
    instagramCta: "Instagram",
    phoneCta: "Позвонить",
  },
  pricingCta: "Уточнить детали",
  serviceCta: "Связаться",
  quoteMessage: (serviceName: string) =>
    `Здравствуйте! Подскажите, пожалуйста, по услуге «${serviceName}».`,
  contactMessage:
    "Здравствуйте! Хочу узнать подробнее об услугах Royal Detailing Studio.",
  services: [
    { id: "detailing", number: "01", title: "Детейлинг автомобилей", category: "Детейлинг", description: "Детейлинг в Royal Detailing Studio, Шымкент.", image: media.services.detailing },
    { id: "tinting", number: "02", title: "Тонировка автостёкол", category: "Тонировка", description: "Тонировка автомобильных стёкол.", image: media.services.tinting },
  ],
} as const;

export const studioDescription = studio.metaDescription;
export const studioKeywords = [...studio.keywords];

export const serviceCategories = ["Детейлинг", "Тонировка"] as const;
export type ServiceCategory = (typeof serviceCategories)[number];
export type Service = (typeof studio.services)[number];
export const services: readonly Service[] = studio.services;

export function quoteUrl(serviceTitle: string) {
  return `https://wa.me/${studio.whatsappNumber}?text=${encodeURIComponent(studio.quoteMessage(serviceTitle))}`;
}

export const WHATSAPP_URL = `https://wa.me/${studio.whatsappNumber}?text=${encodeURIComponent(studio.contactMessage)}`;
export const PHONE_URL = `tel:${studio.phone}`;
