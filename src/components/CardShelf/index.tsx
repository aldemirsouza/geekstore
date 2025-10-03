import { ProductCard } from "@/components/ProductCard";

import { Product, mockProducts } from "@/mocks/productsData";

export function CardShelf() {
  return (
    <div className="max-w-[1055px] mx-auto mt-8 px-2 sm:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {mockProducts.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="flex justify-center mt-14">
        <button
          className="rounded-[8px] border border-[#09235C] bg-[#F8F8F8] px-6 py-2 cursor-pointer"
          style={{
            color: "#09235C",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "20px",
            letterSpacing: "-0.15px",
          }}
        >
          Ver todos os produtos
        </button>
      </div>
    </div>
  );
}
