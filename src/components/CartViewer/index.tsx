'use client'

import { useCart } from "@/hooks/useCart";

export function CartViewer() {
  const { cartItems, totalQuantity } = useCart();

  return (
    <div className="mt-10 p-6 bg-white border border-gray-200 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4 text-[#09235C]">
        🛒 Carrinho de Compras (Itens: {totalQuantity})
      </h3>

      {/* 5a. Condição para carrinho vazio */}
      {cartItems.length === 0 ? (
        <p className="text-gray-500 italic">Seu carrinho está vazio. Adicione alguns produtos!</p>
      ) : (
        // 5b. Renderizar a lista de itens
        <ul className="space-y-3">
          {cartItems.map(item => (
            <li
              key={item.id}
              className="flex justify-between items-center p-3 border-b last:border-b-0 bg-gray-50 rounded-md"
            >
              <span className="text-sm font-medium text-[#101828]">
                {item.name}
              </span>
              <span className="text-md font-bold text-gray-700">
                Qtd: {item.quantity}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}