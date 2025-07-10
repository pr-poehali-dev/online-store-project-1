import { Button } from "@/components/ui/button";
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

interface HeaderProps {
  onCartClick: () => void;
  cartItemsCount: number;
}

export const Header = ({ onCartClick, cartItemsCount }: HeaderProps) => {
  return (
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

            <Button
              variant="ghost"
              size="icon"
              className="relative"
              onClick={onCartClick}
            >
              <Icon name="ShoppingCart" className="h-5 w-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Button>

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
  );
};
