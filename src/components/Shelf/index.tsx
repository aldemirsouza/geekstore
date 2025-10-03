import { CountdownShelf } from "../CountdownShelf";
import { ProductSlider } from "../ProductSlider";

export function Shelf() {
  return (
    <div className="container mx-auto px-4 md:px-0 max-w-[1055px]">
      <div className="bg-white mt-16 py-8 px-4 text-center rounded-[10px]">
        <h2 className="text-[#101828] text-[30px] font-bold leading-[36px]">
          Produtos em Destaque
        </h2>
        <p className="mt-4 text-[18px] font-normal leading-[28px] text-[#4A5565]">
          Os melhores jogos e acessórios selecionados especialmente para você
        </p>

        <CountdownShelf 
          targetDateString="2025-10-10 23:59:59"
          title="Black Friday | Ofertas Relâmpago"
          description="Aproveite os descontos imperdíveis antes que acabem!"
        />
        <ProductSlider />
      </div>
    </div>
  );
}
