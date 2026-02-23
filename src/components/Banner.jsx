import { ChevronLeft, ChevronRight } from "lucide-react";
import banner from "../assets/banner.png";

export default function Banner() {
  return (
    <div className="w-full px-6 lg:px-16 mt-6">
      {/* BANNER */}
      <div className="relative w-full h-[220px] md:h-[320px] lg:h-[420px] rounded-3xl overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <img
          src={banner}
          alt="banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* CONTENT */}
        <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 lg:px-16">

          {/* HEADLINE */}
          <h1 className="text-white font-bold leading-tight text-xl md:text-3xl lg:text-5xl max-w-[650px] flex flex-wrap items-center gap-3">
            <span>
              Оригинальные автомасла <br />
              со скидкой
            </span>

            {/* 15% BADGE */}
            <span className="bg-orange-500 text-white w-[112px] h-[50px] flex items-center justify-center rounded-[10px] text-lg md:text-2xl font-bold">
              15%
            </span>
          </h1>

          {/* SUBTEXT */}
          <p className="text-white/80 mt-4 text-sm md:text-base">
            Акция действует с 1 по 30 июня 2021
          </p>

          {/* DOTS */}
          <div className="flex gap-3 mt-6">
            <div className="w-12 h-1 bg-white rounded-full"></div>
            <div className="w-12 h-1 bg-white/40 rounded-full"></div>
            <div className="w-12 h-1 bg-white/40 rounded-full"></div>
          </div>
        </div>

        {/* LEFT ARROW */}
        <button className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white rounded-full items-center justify-center shadow ml-2 z-20">
          <ChevronLeft />
        </button>

        {/* RIGHT ARROW */}
        <button className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white rounded-full items-center justify-center shadow mr-2 z-20">
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}