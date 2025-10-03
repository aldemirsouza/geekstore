'use client'

import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { Product } from "@/mocks/productsData";

interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  cartCount: number;
  totalQuantity: number;
  addToCart: (product: Product) => void;
  isSidebarOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);
const LOCAL_STORAGE_KEY = 'ecomm_cart';

const initializeCart = (): CartItem[] => {
  if (typeof window !== 'undefined') {
    const savedCart = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedCart) {
      return JSON.parse(savedCart) as CartItem[];
    }
  }
  return [];
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(initializeCart);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product: Product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);

      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {

        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartCount = cartItems.length;

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);


  return (
    <CartContext.Provider value={{ cartItems, cartCount, totalQuantity, addToCart, isSidebarOpen, openSidebar, closeSidebar }}>
      {children}
    </CartContext.Provider>
  );
};