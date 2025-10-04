
import { ProductGrid } from "@/components/ProductGrid";
import { getAllProducts } from "@/mocks/productsData";
import { ProductsLayout } from "@/components/ProductsLayout";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default async function ProductsPage() {
  const products = await getAllProducts();

  return (
    <>
      <Header />
      <div className="max-w-[1055px] mx-auto py-10 px-4 md:px-0">
        <h1 className="text-3xl font-bold text-[#09235C] mb-8">Todos os Produtos</h1>
        <ProductsLayout>
          <ProductGrid products={products} />
        </ProductsLayout>
      </div>
      <Footer />
    </>
  );
}