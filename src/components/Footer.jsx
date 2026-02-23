import { MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#3C3658] text-white mt-16">
      <div className="px-6 lg:px-16 py-10">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* 1 */}
          <div>
            <h3 className="font-semibold mb-4">Меню компании</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>Что такое Oner</li>
              <li>Реквизиты и информация</li>
              <li>Новости</li>
              <li>Вакансии</li>
              <li>Поставщикам</li>
              <li>Контакты</li>
            </ul>
          </div>

          {/* 2 */}
          <div>
            <h3 className="font-semibold mb-4">Каталоги</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>Оригинальные запчасти</li>
              <li>Неоригинальные запчасти</li>
              <li>Запчасти для ТО</li>
              <li>Автомасла</li>
              <li>Аккумуляторы</li>
              <li>Распродажа</li>
            </ul>
          </div>

          {/* 3 */}
          <div>
            <h3 className="font-semibold mb-4">Помощь</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>Часто задаваемые вопросы</li>
              <li>Консультация Online</li>
              <li>Оплата заказа</li>
              <li>Доставка заказа</li>
              <li>Возврат товара</li>
              <li>Забыл пароль</li>
            </ul>
          </div>

          {/* 4 */}
          <div>
            <h3 className="font-semibold mb-4">Товары и бренды</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>Список брендов</li>
              <li>Популярные товары</li>
              <li>Наличие на складах</li>
            </ul>
          </div>

          {/* 5 RIGHT SIDE */}
          <div className="flex flex-col gap-6">

            {/* CHAT BOX */}
            <div className="border border-white/20 rounded-xl p-4 flex items-center gap-3">
              <MessageCircle size={20} />
              <div className="text-sm">
                <p>Консультация Online</p>
                <p className="text-white/70 text-xs">Задавайте вопросы</p>
              </div>
            </div>

            {/* STATUS */}
            <div className="flex items-center gap-3 text-sm">
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              <span className="text-white/80">
                Сервис работает в обычном режиме
              </span>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/20 mt-10 pt-6">

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

            {/* LEFT */}
            <p className="text-white/70 text-sm text-center lg:text-left">
              Copyright © ООО «Oner.ru» 2021. All rights reserved.
            </p>

            {/* PAYMENT */}
            <div className="flex items-center gap-3">
              <span className="text-white/70 text-sm">
                Принимаем к оплате
              </span>

              <div className="bg-white/10 px-4 py-2 rounded">VISA</div>
              <div className="bg-white/10 px-4 py-2 rounded">MC</div>
              <div className="bg-white/10 px-4 py-2 rounded">МИР</div>
            </div>

            {/* RIGHT LINKS */}
            <div className="flex gap-6 text-white/70 text-sm">
              <span>Оферта</span>
              <span>Конфиденциальность</span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}