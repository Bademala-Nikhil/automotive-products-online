import { ShoppingCart, Star, ChevronRight } from "lucide-react";
import product1 from "../assets/oil.png";
import product2 from "../assets/product1.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product2.png";

export default function RecommendedSection() {
  const products = [
    product1,
    product2,
    product3,
    product4,
  ];

  return (
    <div className="w-full px-6 lg:px-16 mt-12">
      
      {/* HEADING */}
      <h2 className="text-xl md:text-2xl font-bold mb-6">
        Рекомендуем
      </h2>

      {/* WRAPPER */}
      <div className="relative">

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {products.map((img, index) => (
            <div
              key={index}
              className="bg-white border rounded-xl p-4 h-[320px] md:h-[380px] lg:h-[410px] flex flex-col justify-between hover:shadow-lg transition"
            >
              {/* IMAGE */}
              <div className="flex justify-center">
                <img
                  src={img}
                  alt="product"
                  className="w-[180px] md:w-[220px] h-[180px] object-contain"
                />
              </div>

              {/* ARTICLE + RATING */}
              <div className="flex items-center justify-between mt-2 text-sm text-gray-500">
                <span>Артикул: 153789</span>

                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4].map((i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-orange-400 text-orange-400"
                    />
                  ))}
                  <Star size={14} className="text-gray-300" />
                  <span className="ml-1 text-gray-500">4.0 (51)</span>
                </div>
              </div>

              {/* TITLE */}
              <p className="text-sm md:text-base font-medium mt-2 line-clamp-2">
                Mobil SUPER 3000 X1 5W-40, 1 л. Масло моторное.
              </p>

              {/* PRICE */}
              <div className="flex items-center justify-between mt-3">
                <div>
                  <p className="text-lg font-bold">2 334 ₽</p>
                  <p className="text-sm text-gray-400 line-through">
                    2 864 ₽
                  </p>
                </div>

                {/* CART BUTTON */}
                <button className="w-10 h-10 border-2 border-purple-500 text-purple-500 rounded-lg flex items-center justify-center hover:bg-purple-500 hover:text-white transition">
                  <ShoppingCart size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT ARROW */}
        <button className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow rounded-xl items-center justify-center">
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}