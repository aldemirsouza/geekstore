import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SearchContent } from "./SearchContent";

export default async function SearchPage() {
  return (
    <>
      <Header />
      <SearchContent />
      <Footer />
    </>
  );
}