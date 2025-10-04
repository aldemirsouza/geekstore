'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { ProductGrid } from "@/components/ProductGrid";
import { getAllProducts, Product } from "@/mocks/productsData";

const filterProducts = (products: Product[], query: string): Product[] => {
  if (!query) return products;
  const lowerQuery = query.toLowerCase();

  return products.filter(product =>
    product.name.toLowerCase().includes(lowerQuery)
  );
};

export function SearchContent() {
  const searchParams = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const queryValue = searchParams.get('q');
  const searchQuery: string = queryValue ?? '';

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const allProducts = await getAllProducts();

        const filtered = filterProducts(allProducts, searchQuery);
        setProducts(filtered);
      } catch (error) {
        console.error("Erro ao buscar ou filtrar produtos:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [searchQuery]);


  if (loading) {
    return <div className="text-center p-10">Carregando resultados...</div>;
  }

  return (
    <div className="max-w-[1055px] mx-auto py-10 px-4 md:px-0">
      <h1 className="text-3xl font-bold text-[#09235C] mb-4">
        Resultados da Busca para: "<span className="text-primary">{searchQuery}</span>"
      </h1>
      <p className="text-gray-600 mb-8">{products.length} produtos encontrados.</p>

      {products.length > 0 ? (
        <ProductGrid products={products} />
      ) : (
        <div className="text-center p-10 border rounded-lg bg-gray-50">
          <p className="text-xl text-gray-700">Não encontramos produtos que correspondam à sua busca.</p>
          <p className="text-gray-500 mt-2">Tente termos mais gerais ou verifique a ortografia.</p>
        </div>
      )}
    </div>
  );
}