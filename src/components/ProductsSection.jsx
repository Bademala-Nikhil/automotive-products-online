import { ShoppingCart, Star, ArrowRight } from "lucide-react";
import promo from "../assets/promo.png"; // your left banner image
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";

export default function ProductsSection() {
  const products = [
    { img: product1 },
    { img: product2 },
    { img: product3 },
  ];

  return (
    <div className="w-full px-6 lg:px-16 mt-10">
      
      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl md:text-2xl font-bold">
          Автомасла
        </h2>

        <button className="flex items-center gap-2 border px-4 py-2 rounded-lg text-purple-600">
          Все автомасла <ArrowRight size={18} />
        </button>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* PROMO CARD */}
        <div className="relative rounded-xl overflow-hidden h-[320px] md:h-[410px] bg-gradient-to-br from-purple-600 to-indigo-600 text-white p-6 flex flex-col justify-between">
          
          <h3 className="text-lg md:text-xl font-bold max-w-[200px]">
            Автомасла №1 от официальных дилеров
          </h3>

          <img
            src={promo}
            alt="promo"
            className="absolute bottom-0 right-0 w-[70%] object-contain"
          />
        </div>

        {/* PRODUCT CARDS */}
        {products.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border p-4 flex flex-col justify-between hover:shadow-lg transition h-[320px] md:h-[410px]"
          >
            {/* IMAGE */}
            <div className="flex justify-center">
              <img
                src={item.img}
                alt="product"
                className="w-[180px] md:w-[220px] h-[180px] object-contain"
              />
            </div>

            {/* TOP INFO */}
            <div className="mt-2 text-sm text-gray-500">
              Артикул: 153789
            </div>

            {/* TITLE */}
            <p className="text-sm md:text-base font-medium mt-1 line-clamp-2">
              Mobil SUPER 3000 X1 5W-40, 1 л. Масло моторное.
            </p>

            {/* RATING */}
            <div className="flex items-center gap-1 mt-2 text-sm">
              {[1, 2, 3, 4].map((i) => (
                <Star key={i} size={14} className="fill-orange-400 text-orange-400" />
              ))}
              <Star size={14} className="text-gray-300" />
              <span className="ml-1 text-gray-500">4.0 (51)</span>
            </div>

            {/* PRICE */}
            <div className="flex items-center justify-between mt-3">
              <div>
                <p className="text-lg font-bold">2 334 ₽</p>
                <p className="text-sm text-gray-400 line-through">
                  2 864 ₽
                </p>
              </div>

              {/* ADD BUTTON */}
              <button className="w-10 h-10 border-2 border-purple-500 text-purple-500 rounded-lg flex items-center justify-center hover:bg-purple-500 hover:text-white transition">
                <ShoppingCart size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}