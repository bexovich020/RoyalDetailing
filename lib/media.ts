const photo = (name: string) => `/images/royal/${name}`;

export const media = {
  logo: photo("logo.jpg"),
  hero: {
    src: photo("royal-02.jpg"),
    mobileSrc: photo("hero-mobile.png"),
    alt: "Автомобиль в студии детейлинга",
    position: "object-[center_52%]",
  },
  cta: {
    src: photo("royal-04.jpg"),
    alt: "Работа с кузовом автомобиля в студии",
    position: "object-[center_48%]",
  },
  compare: {
    after: { src: photo("royal-03.jpg"), alt: "Автомобили в Royal Detailing Studio" },
    swirls: photo("royal-04.jpg"),
  },
  services: {
    detailing: { src: photo("royal-01.jpg"), alt: "Автомобиль на мойке в студии", position: "object-[center_50%]" },
    tinting: { src: photo("royal-05.jpg"), alt: "Автомобиль в рабочей зоне студии", position: "object-[center_50%]" },
  },
  process: {
    studio: { src: photo("royal-03.jpg"), alt: "Автомобили в помещении студии", position: "object-[center_50%]" },
    work: { src: photo("royal-08.jpg"), alt: "Мастера работают с автомобилем в студии", position: "object-[center_50%]" },
  },
  gallery: [
    { src: photo("royal-01.jpg"), alt: "Автомобиль покрыт пеной во время мойки", category: "Детейлинг", title: "Уход за автомобилем", description: "Фото Royal Detailing Studio.", position: "object-[center_50%]", shape: "tall" },
    { src: photo("royal-02.jpg"), alt: "Сотрудник моет BMW в студии", category: "Рабочий процесс", title: "В студии", description: "Фото Royal Detailing Studio.", position: "object-[center_50%]", shape: "wide" },
    { src: photo("royal-03.jpg"), alt: "Чёрный и белый автомобили в рабочем помещении", category: "Студия", title: "Royal Detailing Studio", description: "Шымкент, улица Желтоксан, 207/1.", position: "object-[center_50%]", shape: "square" },
    { src: photo("royal-04.jpg"), alt: "Мастер работает с передней частью автомобиля", category: "Рабочий процесс", title: "Внимание к кузову", description: "Фото Royal Detailing Studio.", position: "object-[center_50%]", shape: "tall" },
    { src: photo("royal-06.jpg"), alt: "Светлый автомобиль в студии", category: "Уход за авто", title: "В рабочей зоне", description: "Фото Royal Detailing Studio.", position: "object-[center_50%]", shape: "wide" },
    { src: photo("royal-08.jpg"), alt: "Мастера работают с кузовом автомобиля", category: "Рабочий процесс", title: "Работа в студии", description: "Фото Royal Detailing Studio.", position: "object-[center_50%]", shape: "square" },
  ],
} as const;
