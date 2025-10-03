'use client'

import { useCart } from "@/hooks/useCart";

export function CartViewer() {
  const { cartItems } = useCart();

  return (
    <div className="mt-4">
      {cartItems.length === 0 ? (
        <p className="text-gray-500 italic">Seu carrinho está vazio. Adicione alguns produtos!</p>
      ) : (
        <ul className="space-y-3">
          {cartItems.map(item => (
            <li
              key={item.id}
              className="flex justify-between items-center p-3 border-b last:border-b-0 bg-gray-50 rounded-md"
            >
              <span className="text-sm font-bold text-[#101828]">
                {item.name}
              </span>
              <span className="text-sm font-bold text-gray-700 flex flex-col items-center">
               <strong> Qtd</strong> {item.quantity}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}