import { ReactNode } from "react";

interface ProductsLayoutProps {
  children: ReactNode;
}

export function ProductsLayout({ children }: ProductsLayoutProps) {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      {/* <aside className="w-full md:w-64 flex-shrink-0 p-4 border rounded-lg bg-gray-50">
        <h2 className="font-semibold mb-4 text-[#09235C]">Filtros</h2>
        <p className="text-sm text-gray-600">Espaço para filtros</p>
      </aside> */}

      <main className="flex-grow">
        {children}
      </main>
    </div>
  );
}