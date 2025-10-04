// app/search/SearchContent.tsx
'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
// Importações que você precisa trazer do page.tsx:
import { ProductGrid } from "@/components/ProductGrid";
import { getAllProducts, Product } from "@/mocks/productsData";

// A função filterProducts deve ser trazida ou definida aqui
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

  // 1. Extração da Query (Lógica que estava no page.tsx)
  const queryValue = searchParams.get('q');
  const searchQuery: string = queryValue ?? '';

  // 2. Efeito para buscar e filtrar os dados (simulando Server Component)
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        // Busca TODOS os produtos (era 'await getAllProducts()' no Server Component)
        const allProducts = await getAllProducts();

        // Filtra os produtos
        const filtered = filterProducts(allProducts, searchQuery);
        setProducts(filtered);
      } catch (error) {
        console.error("Erro ao buscar ou filtrar produtos:", error);
        setProducts([]); // Define vazio em caso de erro
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [searchQuery]); // Re-executa sempre que a query mudar


  if (loading) {
    return <div className="text-center p-10">Carregando resultados...</div>;
  }

  // 3. Renderização dos Resultados (Todo o JSX da página)
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