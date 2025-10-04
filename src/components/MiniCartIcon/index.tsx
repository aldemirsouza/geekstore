"use client";

import { ShoppingCart } from "lucide-react";
import { useCart } from "@/hooks/useCart";

export function MiniCartIcon() {
  const { cartCount, openSidebar } = useCart();
  const badgeClasses = `
    absolute -top-3 -right-3 sm:-right-4
    bg-[#F5AB00] text-primary text-[12px] font-medium
    rounded-full h-5 min-w-5 flex items-center justify-center
    transition-colors duration-300
  `;

  return (
    <button
      className="relative flex items-center gap-2 text-black hover:text-gray-600 transition-color cursor-pointer"
      onClick={openSidebar}
    >
      <ShoppingCart size={20} className="" />
      <span className="hidden sm:block">Carrinho</span>
      <span className={badgeClasses}>{cartCount}</span>
    </button>
  );
}