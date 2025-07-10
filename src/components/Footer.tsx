import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 font-playfair">
              Домашний уют
            </h3>
            <p className="text-gray-400">Создаём уют в каждом доме</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Категории</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Освещение
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Декор
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Организация
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Поддержка</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Доставка
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Возврат
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
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
  );
};
