import { useState } from "react";
import {
  Search,
  MapPin,
  Phone,
  User,
  ShoppingCart,
  Grid,
  Menu,
  X,
} from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm">
      {/* TOP HEADER */}
      <div className="w-full px-6 lg:px-16 py-3 flex items-center justify-between gap-6">

        {/* LOGO */}
        <div className="flex items-center gap-2 min-w-[180px]">
          <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
            ⚙
          </div>
          <h1 className="text-xl font-bold text-purple-600 whitespace-nowrap">
            ONER.RU
          </h1>
        </div>

        {/* SEARCH */}
        <div className="hidden md:flex flex-1 max-w-[500px] items-center border rounded-lg px-3 h-[44px]">
          <input
            type="text"
            placeholder="Введите номер запчасти или VIN"
            className="w-full outline-none text-sm"
          />
          <Search className="text-purple-600" size={18} />
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden lg:flex items-center gap-8 text-sm whitespace-nowrap">
          <div className="flex items-center gap-2">
            <MapPin size={18} className="text-purple-600" />
            <span>Санкт-Петербург</span>
          </div>

          <div className="flex items-center gap-2 font-semibold">
            <Phone size={18} className="text-purple-600" />
            <span>+7 (347) 229-46-45</span>
          </div>

          <div className="flex items-center gap-2">
            <User size={18} className="text-purple-600" />
            <span>Вход / Регистрация</span>
          </div>
        </div>

        {/* MOBILE MENU */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* BOTTOM HEADER */}
      <div className="border-t">
        <div className="w-full px-6 lg:px-16 py-3 flex items-center justify-between gap-6">

          {/* CATEGORY BUTTON */}
          <button className="flex items-center gap-2 bg-purple-600 text-white px-5 py-2 rounded-lg whitespace-nowrap">
            <Grid size={18} />
            Все категории
          </button>

          {/* MENU */}
          <div className="hidden lg:flex flex-1 items-center justify-center gap-6 text-sm">
            <span className="hover:text-purple-600 cursor-pointer">
              Запчасти для ТО
            </span>
            <span className="hover:text-purple-600 cursor-pointer">
              Автомасла
            </span>
            <span className="bg-gray-100 px-3 py-2 rounded-md">
              Оригинальные запчасти
            </span>
            <span className="hover:text-purple-600 cursor-pointer">
              Неоригинальные запчасти
            </span>
            <span className="hover:text-purple-600 cursor-pointer">
              Лампочки
            </span>
            <span className="hover:text-purple-600 cursor-pointer">
              Аккумуляторы
            </span>
          </div>

          {/* CART */}
          <button className="flex items-center gap-2 bg-gray-100 px-5 py-2 rounded-lg relative whitespace-nowrap">
            <ShoppingCart size={18} />
            <span>Корзина</span>

            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              5
            </span>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t p-4 space-y-4">

          {/* SEARCH */}
          <div className="flex items-center border rounded-lg px-3 h-[44px]">
            <input
              type="text"
              placeholder="Введите номер запчасти или VIN"
              className="w-full outline-none text-sm"
            />
            <Search className="text-purple-600" size={18} />
          </div>

          <div className="flex items-center gap-2">
            <MapPin size={18} />
            <span>Санкт-Петербург</span>
          </div>

          <div className="flex items-center gap-2">
            <Phone size={18} />
            <span>+7 (347) 229-46-45</span>
          </div>

          <div className="flex items-center gap-2">
            <User size={18} />
            <span>Вход / Регистрация</span>
          </div>

          <div className="flex flex-col gap-2">
            <span>Запчасти для ТО</span>
            <span>Автомасла</span>
            <span>Оригинальные запчасти</span>
            <span>Неоригинальные запчасти</span>
            <span>Лампочки</span>
            <span>Аккумуляторы</span>
          </div>
        </div>
      )}
    </header>
  );
}