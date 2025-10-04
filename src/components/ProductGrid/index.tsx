"use client"; 

import { Product } from "@/mocks/productsData";
import { ProductCard } from "@/components/ProductCard";

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map(product => (
        <ProductCard key={product.id} product={product} /> 
      ))}
      
      {products.length === 0 && (
        <p className="col-span-full text-center text-gray-500">
          Nenhum produto encontrado.
        </p>
      )}
    </div>
  );
}