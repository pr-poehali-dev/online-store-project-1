import { Product, Category } from "@/types";

export const products: Product[] = [
  {
    id: 1,
    name: "Дизайнерский торшер",
    price: 24990,
    originalPrice: 29990,
    image: "/img/943cb1f9-dca9-4b60-b083-dc7dabf3736c.jpg",
    description:
      "Элегантный торшер с регулируемой яркостью. Идеально подойдёт для создания уютной атмосферы в гостиной.",
    category: "lighting",
    features: [
      "Регулируемая яркость",
      "LED лампа",
      "Тканевый абажур",
      "Металлическая основа",
    ],
    inStock: true,
  },
  {
    id: 2,
    name: "Набор декоративных подушек",
    price: 8990,
    image: "/img/fc46f286-845e-4782-91e5-e6c00e58413c.jpg",
    description:
      "Набор из 3 подушек разных размеров. Выполнены из премиального бархата с золотистой отделкой.",
    category: "decor",
    features: [
      "3 подушки в наборе",
      "Бархатная ткань",
      "Золотистая отделка",
      "Гипоаллергенный наполнитель",
    ],
    inStock: true,
  },
  {
    id: 3,
    name: "Керамическая ваза",
    price: 12990,
    image: "/img/31c60213-cf1c-4f53-8f7f-50087ec12308.jpg",
    description:
      "Изысканная ваза ручной работы из керамики. Станет прекрасным дополнением к любому интерьеру.",
    category: "decor",
    features: [
      "Ручная работа",
      "Керамика премиум класса",
      "Уникальная глазурь",
      "Высота 35 см",
    ],
    inStock: true,
  },
  {
    id: 4,
    name: "Бамбуковая сушилка",
    price: 5990,
    image: "/img/f041a047-6852-4146-97e7-6093a86a0aae.jpg",
    description:
      "Экологичная сушилка для белья из натурального бамбука. Складная конструкция для экономии места.",
    category: "organization",
    features: [
      "Натуральный бамбук",
      "Складная конструкция",
      "Экологично",
      "Грузоподъёмность 15 кг",
    ],
    inStock: false,
  },
];

export const categories: Category[] = [
  { id: "all", name: "Все товары" },
  { id: "lighting", name: "Освещение" },
  { id: "decor", name: "Декор" },
  { id: "organization", name: "Организация" },
];
