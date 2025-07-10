import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

// Типы данных
interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  category: string;
  features: string[];
  inStock: boolean;
}

interface CartItem extends Product {
  quantity: number;
}

const Index = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Мок данные товаров
  const products: Product[] = [
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

  const categories = [
    { id: "all", name: "Все товары" },
    { id: "lighting", name: "Освещение" },
    { id: "decor", name: "Декор" },
    { id: "organization", name: "Организация" },
  ];

  // Функции для работы с корзиной
  const addToCart = (product: Product) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item)),
    );
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  };

  const getCartItemsCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  // Фильтрация товаров
  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Icon name="Home" className="h-8 w-8 text-black mr-2" />
              <h1 className="text-2xl font-bold text-black font-playfair">
                Домашний уют
              </h1>
            </div>

            <nav className="hidden md:flex space-x-8">
              <a
                href="#"
                className="text-gray-700 hover:text-black transition-colors"
              >
                Главная
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-black transition-colors"
              >
                Каталог
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-black transition-colors"
              >
                О нас
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-black transition-colors"
              >
                Контакты
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Icon name="User" className="h-5 w-5" />
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Профиль пользователя</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Имя</Label>
                      <Input id="name" placeholder="Ваше имя" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="ваш@email.com"
                      />
                    </div>
                    <Button className="w-full">Сохранить</Button>
                  </div>
                </DialogContent>
              </Dialog>

              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="relative">
                    <Icon name="ShoppingCart" className="h-5 w-5" />
                    {getCartItemsCount() > 0 && (
                      <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 text-xs">
                        {getCartItemsCount()}
                      </Badge>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Корзина</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6 space-y-4">
                    {cartItems.length === 0 ? (
                      <p className="text-gray-500 text-center py-8">
                        Корзина пуста
                      </p>
                    ) : (
                      <>
                        {cartItems.map((item) => (
                          <div
                            key={item.id}
                            className="flex items-center space-x-4 p-4 border rounded-lg"
                          >
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-16 h-16 object-cover rounded"
                            />
                            <div className="flex-1">
                              <h4 className="font-medium">{item.name}</h4>
                              <p className="text-sm text-gray-500">
                                {item.price.toLocaleString()} ₽
                              </p>
                              <div className="flex items-center space-x-2 mt-2">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() =>
                                    updateQuantity(item.id, item.quantity - 1)
                                  }
                                >
                                  -
                                </Button>
                                <span className="w-8 text-center">
                                  {item.quantity}
                                </span>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() =>
                                    updateQuantity(item.id, item.quantity + 1)
                                  }
                                >
                                  +
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => removeFromCart(item.id)}
                                >
                                  <Icon name="Trash2" className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))}
                        <Separator />
                        <div className="space-y-4">
                          <div className="flex justify-between text-lg font-bold">
                            <span>Итого:</span>
                            <span>{getTotalPrice().toLocaleString()} ₽</span>
                          </div>
                          <Button className="w-full" size="lg">
                            Оформить заказ
                          </Button>
                        </div>
                      </>
                    )}
                  </div>
                </SheetContent>
              </Sheet>

              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Icon name="MessageCircle" className="h-5 w-5" />
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Поддержка</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <p>Нужна помощь? Мы готовы ответить на ваши вопросы!</p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Icon name="Phone" className="h-4 w-4" />
                        <span>+7 (800) 123-45-67</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon name="Mail" className="h-4 w-4" />
                        <span>support@domashnyuyt.ru</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon name="Clock" className="h-4 w-4" />
                        <span>Пн-Пт: 9:00-18:00</span>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-playfair">
            Создайте уют в вашем доме
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Премиальные товары для дома с доставкой по всей России
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-gray-100">
            Перейти к покупкам
          </Button>
        </div>
      </section>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <Input
              placeholder="Поиск товаров..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full"
            />
          </div>
          <div className="flex gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={
                  selectedCategory === category.id ? "default" : "outline"
                }
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.originalPrice && (
                    <Badge className="absolute top-2 left-2 bg-red-500">
                      Скидка{" "}
                      {Math.round(
                        (1 - product.price / product.originalPrice) * 100,
                      )}
                      %
                    </Badge>
                  )}
                  {!product.inStock && (
                    <Badge className="absolute top-2 right-2 bg-gray-500">
                      Нет в наличии
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
                <CardDescription className="text-sm text-gray-600 mb-3">
                  {product.description}
                </CardDescription>

                <div className="space-y-2 mb-4">
                  <h4 className="font-semibold text-sm">Особенности:</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {product.features.slice(0, 2).map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Icon
                          name="Check"
                          className="h-3 w-3 text-green-500 mr-2"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-black">
                      {product.price.toLocaleString()} ₽
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        {product.originalPrice.toLocaleString()} ₽
                      </span>
                    )}
                  </div>
                  <Button
                    onClick={() => addToCart(product)}
                    disabled={!product.inStock}
                    className="bg-black hover:bg-gray-800 text-white"
                  >
                    {product.inStock ? "В корзину" : "Недоступно"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Домашний уют</h3>
              <p className="text-gray-400">Создаём уют в каждом доме</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Категории</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Освещение
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Декор
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Организация
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Доставка
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Возврат
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Гарантия
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p>+7 (800) 123-45-67</p>
                <p>support@domashnyuyt.ru</p>
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-gray-700" />
          <div className="text-center text-gray-400">
            <p>&copy; 2024 Домашний уют. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
