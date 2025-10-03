export interface Banner {
  image: string;
  headline: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export const homeBanners: Banner[] = [
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
];