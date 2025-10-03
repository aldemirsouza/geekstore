import { BenefitsBar } from "@/components/BenefitsBar";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MosaicBanners } from "@/components/MosaicBanners";
import { SEOBlock } from "@/components/SEOBlock";
import { Shelf } from "@/components/Shelf";
import { Slider } from "@/components/Slider";
import { homeBanners } from "@/mocks/sliderData";

export default function Home() {
  return (
    <>
      <Header />
      <Slider banners={homeBanners} />
      <BenefitsBar />
      <Shelf />
      <MosaicBanners />
      <SEOBlock />
      <Footer />
    </>
  );
}
