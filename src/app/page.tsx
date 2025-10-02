import { BenefitsBar } from "@/components/BenefitsBar";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MosaicBanners } from "@/components/MosaicBanners";
import { SEOBlock } from "@/components/SEOBlock";
import { Shelf } from "@/components/Shelf";
import { Slider } from "@/components/Slider";

export default function Home() {
  return (
    <>
      <Header />
      <Slider
        banners={[
          {
            image: "/slider2.png",
            headline: "Promoção",
            title: "Descontos em Jogos",
            description: "Aproveite até 50% off em jogos selecionados por tempo limitado.",
            buttonText: "Ver ofertas",
            buttonLink: "/offers",
          },
          {
            image: "/slider1.png",
            headline: "Os Melhores Jogos de 2024",
            title: "Novos Lançamentos",
            description: "Descubra os títulos mais esperados do ano com até 30% de desconto",
            buttonText: "Comprar agora",
            buttonLink: "/products",
          },
          {
            image: "/slider3.png",
            headline: "Colecionáveis",
            title: "Novas Action Figures",
            description: "Garanta suas figuras exclusivas antes que acabem.",
            buttonText: "Ver coleção",
            buttonLink: "/collectibles",
          },
        ]}
      />

      <BenefitsBar />
      <Shelf />
      <MosaicBanners />
      <SEOBlock />
      <Footer/>
    </>
  );
}
