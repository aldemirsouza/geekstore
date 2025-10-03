interface Banners {
  id: number;
  image: string;
  headline: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export const banners: Banners[] = [
  {
    id: 1,
    image: "/assets/banner-1.png",
    headline: "PS5 & Xbox Series X/S",
    title: "Console Generation",
    description: "Os consoles mais poderosos da nova geração",
    buttonText: "Ver Consoles",
    buttonLink: "/",
  },
  {
    id: 2,
    image: "/assets/banner-2.png",
    headline: "Nostalgia em Alta",
    title: "Retro Gaming",
    description: "Clássicos que marcaram época",
    buttonText: "Explorar",
    buttonLink: "/",
  },
  {
    id: 3,
    image: "/assets/banner-3.png",
    headline: "Performance Máxima",
    title: "Acessórios Gaming",
    description: "Headsets, mouses e teclados pro",
    buttonText: "Ver Acessórios",
    buttonLink: "/",
  },
];