import { ArrowRight } from "lucide-react";
import oil from "../assets/oil.png";
import tyre from "../assets/product2.png";
import brake from "../assets/product3.png";

export default function MiniBannerSection() {
  const banners = [
    {
      title: "Моторные масла Genesis",
      button: "Перейти",
      image: oil,
    },
    {
      title: "Шины зимние дешевле",
      button: "Выбрать",
      image: tyre,
    },
    {
      title: "Запчасти для ТО",
      button: "Смотреть",
      image: brake,
    },
  ];

  return (
    <div className="w-full px-6 lg:px-16 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {banners.map((item, index) => (
          <div
            key={index}
            className="relative bg-gray-100 rounded-2xl overflow-hidden h-[200px] md:h-[220px] lg:h-[250px] p-6 flex flex-col justify-start"
          >
            {/* TEXT */}
            <h3 className="text-lg md:text-xl font-semibold max-w-[240px] leading-snug">
              {item.title}
            </h3>

            {/* BUTTON */}
            <button className="mt-6 flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg w-fit">
              {item.button} <ArrowRight size={18} />
            </button>

            {/* ORANGE SHAPE */}
            <div className="absolute bottom-0 right-0 w-[180px] h-[180px] bg-orange-400 rounded-full translate-x-1/3 translate-y-1/3"></div>

            {/* IMAGE */}
            <img
              src={item.image}
              alt="banner"
              className={`absolute object-contain ${
                index === 0
                  ? "w-[120px] bottom-4 right-6"
                  : index === 1
                  ? "w-[220px] bottom-0 right-4"
                  : "w-[200px] bottom-2 right-6"
              }`}
            />
          </div>
        ))}

      </div>
    </div>
  );
}