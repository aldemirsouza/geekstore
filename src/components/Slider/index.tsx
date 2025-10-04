"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Banner {
  image: string;
  headline: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

interface SliderProps {
  banners: Banner[];
}

export function Slider({ banners }: SliderProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % banners.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [banners.length]);

  if (!banners || banners.length === 0) return null;

  const prevSlide = () => {
    setCurrent(prev => (prev - 1 + banners.length) % banners.length);
  };

  const nextSlide = () => {
    setCurrent(prev => (prev + 1) % banners.length);
  };

  return (
    <div className="w-full flex justify-center relative">
      <div className="relative w-full h-[500px] overflow-hidden bg-[#F3F3F5]">
        {banners.map((banner, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ${index === current ? "opacity-100" : "opacity-0"
              }`}
          >
            <Image
              src={banner.image}
              alt={banner.title}
              fill
              className="object-cover"
            />

            <div className="max-w-[1055px] sm:max-w-[735px] container mx-auto absolute inset-0 flex flex-col justify-center items-center md:items-start text-white px-4 md:px-0 text-center md:text-left">
              <span className="text-[16px] font-normal leading-[24px] text-secondary">{banner.headline}</span>

              <h2 className="text-[48px] font-bold leading-[48px] mt-2">{banner.title}</h2>
              <p className="mt-4 text-[20px] font-normal leading-[28px]">{banner.description}</p>

              <a
                href={banner.buttonLink}
                className="mt-8 px-4 py-2 bg-[#F5AB00] rounded-[8px] inline-block text-[#09235C] text-[14px] font-medium leading-[20px] hover:brightness-90 transition cursor-pointer"
              >
                {banner.buttonText}
              </a>
            </div>
          </div>
        ))}

        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full ${index === current ? "bg-secondary" : "bg-gray-background"}`}
            />
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2  text-white p-2 rounded-full z-10 cursor-pointer"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white p-2 rounded-full z-10 cursor-pointer"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
