"use client";

import { Star, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { Product } from "@/mocks/productsData";
import { useCart } from "@/hooks/useCart";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product); 
    console.log(`Produto "${product.name}" adicionado ao carrinho!`);
  };

  return (
    <div
      key={product.id}
      className="border rounded-[10px] flex flex-col relative bg-white shadow-sm hover:shadow-md transition"
    >

      <div className="relative w-full h-52 overflow-hidden rounded-t-[10px]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
        <span className="absolute top-2 left-2 bg-[#FB2C36] text-white text-xs px-2 py-[2px] rounded-[8px]">
          {product.discount}
        </span>
      </div>

      <div className="flex flex-col p-4 gap-2 flex-1">
        <span className="bg-[#F5AB00] text-primary text-xs px-3 py-1 rounded-[8px] self-start">
          {product.highlight}
        </span>

        <h2 className="text-left text-[#101828] font-semibold text-lg line-clamp-2">
          {product.name}
        </h2>

        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={18}
              strokeWidth={1.333}
              stroke="#F5AB00"
              fill={
                i < product.rating ? "#F5AB00" : "rgba(245, 171, 0, 0.50)"
              }
            />
          ))}
          <span className="text-sm text-gray-500 ml-2">
            ({product.reviews})
          </span>
        </div>

        <div className="flex flex-row items-center gap-2">
          <span className="text-lg font-bold text-[#09235C]">
            {product.bestPrice}
          </span>
          <span className="text-sm line-through text-[#6A7282]">
            {product.sellerPrice}
          </span>
        </div>

        <div className="flex justify-center w-full mt-auto">
          <button
            onClick={handleAddToCart}
            className="flex items-center gap-2 bg-[#09235C] text-white px-6 py-2 rounded-md text-sm font-medium hover:filter hover:brightness-90 transition cursor-pointer">
            <ShoppingCart size={16} />
            Adicionar
          </button>
        </div>
      </div>
    </div>
  )
}