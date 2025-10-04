'use client'

import { useCart } from "@/hooks/useCart";
import { CartItemComponent } from "@/components/CartItemComponent";

export function CartViewer() {
  const { cartItems, isInitialized } = useCart();
  if (!isInitialized) {
    return <p className="text-gray-500 italic">Carregando itens...</p>;
  }

  return (
    <div className="mt-4">
      {cartItems.length === 0 ? (
        <p className="text-gray-500 italic">Seu carrinho está vazio. Adicione alguns produtos!</p>
      ) : (
        <ul className="space-y-3">
          {cartItems.map(item => (
            <CartItemComponent key={item.id} item={item} />
          ))}
        </ul>
      )}
    </div>
  );
}