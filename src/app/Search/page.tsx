import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProductGrid } from "@/components/ProductGrid";
import { getAllProducts } from "@/mocks/productsData";
import { Product } from "@/mocks/productsData";

interface SearchPageProps {
  searchParams: {
    q?: string;
  };
}

const filterProducts = (products: Product[], query: string): Product[] => {
  if (!query) return products;
  const lowerQuery = query.toLowerCase();

  return products.filter(product =>
    product.name.toLowerCase().includes(lowerQuery)
  );
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const searchQuery = searchParams.q || '';
  const allProducts = await getAllProducts();
  const filteredProducts = filterProducts(allProducts, searchQuery);

  return (
    <>
      <Header />
      <div className="max-w-[1055px] mx-auto py-10">
        <h1 className="text-3xl font-bold text-[#09235C] mb-4">
          Resultados da Busca para: "<span className="text-primary">{searchQuery}</span>"
        </h1>
        <p className="text-gray-600 mb-8">{filteredProducts.length} produtos encontrados.</p>

        {filteredProducts.length > 0 ? (
          <ProductGrid products={filteredProducts} />
        ) : (
          <div className="text-center p-10 border rounded-lg bg-gray-50">
            <p className="text-xl text-gray-700">Não encontramos produtos que correspondam à sua busca.</p>
            <p className="text-gray-500 mt-2">Tente termos mais gerais ou verifique a ortografia.</p>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}