import { media } from "@/lib/media";
import { services, serviceCategories, quoteUrl, type Service, type ServiceCategory } from "@/lib/studio";

export { services, serviceCategories, quoteUrl };
export type { Service, ServiceCategory };

export const steps = [
  { number: "01", title: "Связаться", text: "Позвоните или напишите в WhatsApp либо Instagram.", image: media.process.studio },
  { number: "02", title: "Уточнить детали", text: "Спросите о нужной услуге и записи напрямую у студии.", image: media.process.work },
  { number: "03", title: "Выбрать время", text: "Часы работы студии — с понедельника по субботу, 10:00–18:00.", image: media.process.studio },
  { number: "04", title: "Приехать в студию", text: "Адрес: улица Желтоксан, 207/1, Шымкент.", image: media.process.work },
];

export const principles = [
  { number: "01", title: "Детейлинг", text: "Уход за автомобилями в Royal Detailing Studio." },
  { number: "02", title: "Тонировка автостёкол", text: "Тонировка автомобильных стёкол." },
  { number: "03", title: "Шымкент", text: "Приезжайте: улица Желтоксан, 207/1." },
];

export const faqs = [
  { question: "Какие услуги указаны у студии?", answer: "Детейлинг автомобилей и тонировка автостёкол. По конкретным работам уточняйте у студии." },
  { question: "Как узнать стоимость и записаться?", answer: "Позвоните или напишите в WhatsApp по номеру +7 702 951 78 78." },
  { question: "Где находится студия?", answer: "Шымкент, улица Желтоксан, 207/1, Енбекшинский район." },
];

export const navLinks = [
  { href: "#services", label: "Услуги" },
  { href: "#result", label: "Студия" },
  { href: "#process", label: "Как связаться" },
  { href: "#gallery", label: "Фото" },
  { href: "#pricing", label: "Запись" },
  { href: "#contact", label: "Контакты" },
];
