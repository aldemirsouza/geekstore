"use client";

import { mockProducts } from "@/mocks/productsData";
import { ProductCard } from "../ProductCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const products = mockProducts;

export function ProductSlider() {
  return (
    <div className="max-w-[1055px] mx-auto mt-8 px-2 sm:px-0 overflow-visible relative">
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        spaceBetween={15}

        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
        }}

        navigation={true}
        pagination={{ clickable: true }}
        loop={true}
        className=".my-product-swiper"
      >

        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center mt-14">
        <button
          className="rounded-[8px] border border-[#09235C] bg-[#F8F8F8] px-6 py-2 cursor-pointer hover:bg-secondary transition ease-in-out duration-300"
          style={{
            color: "#09235C",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "20px",
            letterSpacing: "-0.15px",
          }}
        >
          Ver todos os produtos
        </button>
      </div>
    </div>
  );
}