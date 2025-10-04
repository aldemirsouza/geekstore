export function SEOBlock() {
  return (
    <div className="max-w-[896px] mx-auto px-4 mt-10 mb-12">
      <h2 className="text-[#101828] text-center font-bold text-[30px] leading-[36px] tracking-[0.396px] mb-4">
        GeekStore - Sua Loja de Games e Produtos Geek
      </h2>

      <p className="text-[#4A5565] text-center text-[18px] leading-[28px] tracking-[-0.439px] mb-12">
        A maior variedade de jogos, consoles e acessórios com os melhores preços do Brasil
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-[#101828] font-bold text-[20px] leading-[28px] tracking-[-0.449px] mb-2">
            Os Melhores Jogos e Consoles
          </h3>
          <p className="text-[#4A5565] text-[16px] leading-[24px] tracking-[-0.312px]">
            Na GeekStore você encontra os lançamentos mais aguardados para PlayStation 5, Xbox Series X/S, Nintendo Switch e PC. Nossa seleção inclui desde os blockbusters AAA até indies exclusivos, sempre com garantia oficial e os melhores preços.<br />
            Oferecemos também uma ampla gama de consoles, desde os últimos lançamentos até clássicos retro para colecionadores. Todos os produtos são originais e acompanham garantia do fabricante.
          </p>
        </div>

        <div>
          <h3 className="text-[#101828] font-bold text-[20px] leading-[28px] tracking-[-0.449px] mb-2">
            Acessórios e Produtos Geek
          </h3>
          <p className="text-[#4A5565] text-[16px] leading-[24px] tracking-[-0.312px]">
            Complete seu setup gamer com nossos acessórios premium: headsets com som surround, controles wireless de última geração, teclados mecânicos, mouses gamers e muito mais. Tudo para elevar sua experiência de jogo ao próximo nível.<br />
            Para os verdadeiros geeks, temos uma seção especial com colecionáveis, action figures, estátuas, livros de arte e merchandise oficial dos seus games favoritos. Produtos únicos para fãs exigentes.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col items-center">
            <span className="text-[#09235C] text-[24px] font-bold leading-[32px] tracking-[0.07px] mb-1">
              5000+
            </span>
            <p className="text-[#4A5565] text-[16px] font-normal leading-[24px] tracking-[-0.312px] text-center">
              Produtos Disponíveis
            </p>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-[#09235C] text-[24px] font-bold leading-[32px] tracking-[0.07px] mb-1">
              50k+
            </span>
            <p className="text-[#4A5565] text-[16px] font-normal leading-[24px] tracking-[-0.312px] text-center">
              Clientes Satisfeitos
            </p>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-[#09235C] text-[24px] font-bold leading-[32px] tracking-[0.07px] mb-1">
              99%
            </span>
            <p className="text-[#4A5565] text-[16px] font-normal leading-[24px] tracking-[-0.312px] text-center">
              Avaliações Positivas
            </p>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-[#09235C] text-[24px] font-bold leading-[32px] tracking-[0.07px] mb-1">
              24h
            </span>
            <p className="text-[#4A5565] text-[16px] font-normal leading-[24px] tracking-[-0.312px] text-center">
              Entrega Expressa
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 bg-[#F9FAFB] rounded-[10px] p-8">
        <h3 className="text-[#101828] text-center text-[20px] font-bold leading-[28px] tracking-[-0.449px] mb-6">
          Por que escolher a GeekStore?
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="flex flex-col items-center text-center max-w-[84%] mx-auto">
            <span className="flex w-[48px] h-[48px] justify-center items-center rounded-full bg-[#09235C] text-white mb-3">
              1
            </span>
            <h4 className="text-[#101828] text-[16px] font-medium leading-[24px] tracking-[-0.312px] mb-2">
              Preços Competitivos
            </h4>
            <p className="text-[#4A5565] text-[14px] font-normal leading-[20px] tracking-[-0.15px]">
              Trabalhamos com margens reduzidas para oferecer sempre os melhores preços
            </p>
          </div>

          <div className="flex flex-col items-center text-center max-w-[84%] mx-auto">
            <span className="flex w-[48px] h-[48px] justify-center items-center rounded-full bg-[#09235C] text-white mb-3">
              2
            </span>
            <h4 className="text-[#101828] text-[16px] font-medium leading-[24px] tracking-[-0.312px] mb-2">
              Entrega Rápida
            </h4>
            <p className="text-[#4A5565] text-[14px] font-normal leading-[20px] tracking-[-0.15px]">
              Entrega expressa em todo Brasil com frete grátis acima de R$ 199
            </p>
          </div>

          <div className="flex flex-col items-center text-center max-w-[84%] mx-auto">
            <span className="flex w-[48px] h-[48px] justify-center items-center rounded-full bg-[#09235C] text-white mb-3">
              3
            </span>
            <h4 className="text-[#101828] text-[16px] font-medium leading-[24px] tracking-[-0.312px] mb-2">
              Suporte Especializado
            </h4>
            <p className="text-[#4A5565] text-[14px] font-normal leading-[20px] tracking-[-0.15px]">
              Nossa equipe é formada por gamers que entendem suas necessidades
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
