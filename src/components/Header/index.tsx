'use client'
import { useState } from "react";
import { Search } from "../Search";
import { TopBar } from "../TopBar";
import Link from "next/link";
import { User, ShoppingCart, Menu as MenuIcon, X } from 'lucide-react';
import { Menu } from "../Menu";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <TopBar />

      <div className="container mx-auto px-4 md:px-0 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-t border-gray-200">

        <div className="flex justify-center md:justify-start items-center w-full md:w-auto relative">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="absolute left-0 md:hidden"
          >
            {isMenuOpen ? <X size={24} color="#000000" /> : <MenuIcon size={24} color="#000000" />}
          </button>

          <div className="text-[24px] font-extrabold text-primary">GeekStore</div>

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
          <Link href="/contact" className="flex items-center gap-2 text-black hover:text-gray-600">
            <ShoppingCart size={20} /> Carrinho
          </Link>
        </div>
      </div>

      <div className="hidden md:block w-full">
        <Menu />
      </div>

      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4">
          <Menu />
        </div>
      )}
    </header>
  );
}
