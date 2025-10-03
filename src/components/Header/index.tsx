'use client'
import { useState } from "react";
import { Search } from "../Search";
import { TopBar } from "../TopBar";
import Link from "next/link";
import { User, ShoppingCart, Menu as MenuIcon, X } from 'lucide-react';
import { Menu } from "../Menu";
import { CartViewer } from "../CartViewer";

import { useCart } from "@/hooks/useCart";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalQuantity } = useCart();

  return (
    <header className="bg-white">
      <TopBar />

      <div className=" max-w-[1055px] container mx-auto px-4 md:px-0 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-t border-gray-200">

        <div className="flex justify-center md:justify-start items-center w-full md:w-auto relative">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="absolute left-0 md:hidden"
          >
            {isMenuOpen ? <X size={24} color="#000000" /> : <MenuIcon size={24} color="#000000" />}
          </button>

          <h1 className="text-[24px] font-extrabold text-primary">GeekStore</h1>

          <div className="absolute right-0 flex gap-4 md:hidden">
            <Link href="/login">
              <User size={24} color="#000000" />
            </Link>
            <Link href="/contact">
              <ShoppingCart size={24} color="#000000" />
            </Link>
          </div>
        </div>

        <div className="w-full md:max-w-[596px]">
          <Search />
        </div>

        <div className="hidden md:flex md:gap-4 md:justify-end md:w-auto">
          <Link href="/login" className="flex items-center gap-2 text-black hover:text-gray-600">
            <User size={20} /> Entrar
          </Link>
          <button className="flex items-center gap-2 text-black hover:text-gray-600 relative">
            <ShoppingCart size={20} /> Carrinho
            <span
              className="
              absolute 
              -top-3
              -right-4
              bg-[#F5AB00] 
              text-primary 
              text-[12px] 
              font-medium
              rounded-full 
              h-5 
              min-w-5 
              flex 
              items-center 
              justify-center"
            >
              {totalQuantity}
            </span>
          </button>
        </div>
      </div>

      <div className="hidden md:block w-full">
        <Menu />
      </div>

      <CartViewer />

      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4">
          <Menu />
        </div>
      )}
    </header>
  );
}
