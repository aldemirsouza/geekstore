'use client'

import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { Product } from "@/mocks/productsData";

export interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  cartCount: number;
  totalQuantity: number;
  cartTotal: number;
  addToCart: (product: Product) => void;
  isSidebarOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
  removeFromCart: (productId: number) => void;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void
  isInitialized: boolean;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);
const LOCAL_STORAGE_KEY = 'ecomm_cart';

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (!isInitialized) {
      const savedCart = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (savedCart) {
        setCartItems(JSON.parse(savedCart) as CartItem[]);
      }
      setIsInitialized(true);
    }
  }, [isInitialized]);

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cartItems));
    }
  }, [cartItems, isInitialized]);

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

  const removeFromCart = (productId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: number, amount: number) => {
    setCartItems(prevItems => {
      return prevItems.map(item => {
        if (item.id === productId) {
          const newQuantity = item.quantity + amount;

          if (newQuantity <= 0) {
            return null;
          }
          return { ...item, quantity: newQuantity };
        }
        return item;
      }).filter(item => item !== null) as CartItem[];
    });
  };

  const increaseQuantity = (productId: number) => updateQuantity(productId, 1);
  const decreaseQuantity = (productId: number) => updateQuantity(productId, -1);

  const cartTotal = cartItems.reduce((sum, item) =>
    sum + (item.bestPrice * item.quantity), 0);

  const value = {
    cartItems, cartCount, totalQuantity, addToCart, isSidebarOpen, cartTotal, openSidebar, closeSidebar, removeFromCart, increaseQuantity, decreaseQuantity, isInitialized
  };


  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};