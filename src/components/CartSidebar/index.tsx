"use client";

import { X } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { CartViewer } from "@/components/CartViewer";

export function CartSidebar() {
  const { cartCount } = useCart();
  const { isSidebarOpen, closeSidebar } = useCart();
  const itemText = cartCount === 1 ? 'item' : 'itens';

  return (
    <>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 transition-opacity duration-300"
          onClick={closeSidebar}
        />
      )}

      <div
        className={`
          fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 
          transform transition-transform duration-500 ease-in-out
          ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} 
        `}
      >
        <div className="p-4 flex flex-col h-full">
          <div className="flex justify-between items-center pb-4 border-b">
            <h3 className="text-sl font-bold text-[#09235C]">
              Minha sacola ( {cartCount} {itemText} )
            </h3>
            <button
              onClick={closeSidebar}
              className="p-2 rounded-full hover:bg-gray-100 transition"
              aria-label="Fechar Carrinho"
            >
              <X size={20} className="text-gray-600" />
            </button>
          </div>


          <div className="flex-1 overflow-y-auto pt-4">
            <CartViewer />
          </div>

          <div className="p-4 border-t mt-auto">
            <button className="w-full bg-[#F5AB00] text-[#09235C] font-semibold py-3 rounded-lg cursor-pointer hover:brightness-90 transition">
              Finalizar Compra
            </button>
          </div>
        </div>
      </div>
    </>
  );
}