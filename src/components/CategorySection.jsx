import {
  Settings,
  Car,
  Wrench,
  Droplet,
  Battery,
  Headphones,
  Disc,
  Truck,
  Gauge,
  ArrowRight,
} from "lucide-react";

export default function CategorySection() {
  const categories = [
    {
      title: "Оригинальные запчасти",
      count: "730 товаров",
      icon: Settings,
    },
    {
      title: "Неоригинальные запчасти",
      count: "278 товаров",
      icon: Gauge,
    },
    {
      title: "Запчасти ВАЗ, ГАЗ, КАМАЗ",
      count: "730 товаров",
      icon: Truck,
    },
    {
      title: "Кузовные запчасти",
      count: "730 товаров",
      icon: Car,
    },
    {
      title: "Запчасти для ТО",
      count: "730 товаров",
      icon: Wrench,
      highlight: true,
    },
    {
      title: "Автостёкла",
      count: "730 товаров",
      icon: Headphones,
    },
    {
      title: "Автомасла",
      count: "730 товаров",
      icon: Droplet,
    },
    {
      title: "Автохимия",
      count: "730 товаров",
      icon: Droplet,
    },
    {
      title: "Диски",
      count: "730 товаров",
      icon: Disc,
    },
    {
      title: "Аккумуляторы",
      count: "730 товаров",
      icon: Battery,
    },
    {
      title: "Автолампы",
      count: "730 товаров",
      icon: Headphones,
    },
  ];

  return (
    <div className="w-full px-6 lg:px-16 mt-10">
      <div className="border rounded-xl overflow-hidden">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

          {/* CATEGORY ITEMS */}
          {categories.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`flex items-center gap-4 p-6 border-b border-r hover:bg-gray-50 transition ${
                  item.highlight ? "bg-gray-100" : ""
                }`}
              >
                {/* ICON */}
                <div className="w-12 h-12 flex items-center justify-center text-purple-600">
                  <Icon size={36} />
                </div>

                {/* TEXT */}
                <div>
                  <h3 className="text-lg font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {item.count}
                  </p>
                </div>
              </div>
            );
          })}

          {/* LAST SPECIAL CARD */}
          <div className="relative flex items-center justify-between p-6 bg-purple-900 text-white col-span-1 md:col-span-2 lg:col-span-1">

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center">
                <Settings size={32} />
              </div>

              <h3 className="text-lg font-semibold">
                Поставщикам
              </h3>
            </div>

            {/* ARROW */}
            <ArrowRight size={28} />
          </div>

        </div>
      </div>
    </div>
  );
}