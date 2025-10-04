import { Suspense } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SearchContent } from "./SearchContent";

export default async function SearchPage() {
  return (
    <>
      <Header />
      <Suspense fallback={<p>Aguardando parâmetros de busca...</p>}>
        <SearchContent />
      </Suspense>
      <Footer />
    </>
  );
}