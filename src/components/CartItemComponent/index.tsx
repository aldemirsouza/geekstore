'use client';

import { useCart } from "@/hooks/useCart";
import { CartItem } from "@/context/CartContext";
import { Trash2, Plus, Minus } from "lucide-react";

interface CartItemComponentProps {
  item: CartItem;
}

export function CartItemComponent({ item }: CartItemComponentProps) {
  const { removeFromCart, increaseQuantity, decreaseQuantity } = useCart();
  const handleRemove = () => removeFromCart(item.id);
  const handleIncrease = () => increaseQuantity(item.id);
  const handleDecrease = () => decreaseQuantity(item.id);
  const itemTotal = item.bestPrice * item.quantity;

  return (
    <li
      key={item.id}
      className="flex justify-between items-center p-3 border-b last:border-b-0 bg-gray-50 rounded-md gap-4"
    >
      <img
        src={item.image || item.image}
        alt={item.name}
        className="w-12 h-19 object-cover"
      />

      <div className="flex-grow">
        <span className="text-sm font-bold text-[#101828] block">
          {item.name}
        </span>
        <span className="mt-1 text-xs text-gray-500 block">Total: R$ {itemTotal.toFixed(2)}</span>
      </div>

      <div className="flex flex-col justify-end items-end gap-3">
        <button onClick={handleRemove} className="text-red-500 p-2 hover:text-red-700">
          <Trash2 size={18} />
        </button>

        <div className="flex  items-center border border-gray-300 rounded-md">
          <button onClick={handleDecrease} className="p-2 text-gray-600 hover:bg-gray-100"><Minus size={14} />
          </button>

          <span className="px-2 text-gray-600 text-sm font-medium">{item.quantity}</span>

          <button onClick={handleIncrease} className="p-2 text-gray-600 hover:bg-gray-100"><Plus size={14} />
          </button>
        </div>
      </div>
    </li>
  );
}