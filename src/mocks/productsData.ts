export interface Product {
  id: number;
  name: string;
  image: string;
  discount: string;
  highlight: string;
  rating: number;
  reviews: number;
  bestPrice: string;
  sellerPrice: string;
}

export const mockProducts: Product[] = [
  {
    id: 1,
    name: "TV de tubo para games retro",
    image: "/assets/image1.png",
    discount: "-30%",
    highlight: "Promoção N1",
    rating: 4,
    reviews: 892,
    bestPrice: "R$ 89.99",
    sellerPrice: "R$ 129.99",
  },
  {
    id: 2,
    name: "Zeldinha da massa para os nintendistas",
    image: "/assets/image2.png",
    discount: "-15%",
    highlight: "Promoção N1",
    rating: 4,
    reviews: 892,
    bestPrice: "R$ 89.99",
    sellerPrice: "R$ 129.99",
  },
  {
    id: 3,
    name: "Controller Wireless DualSense X2u7445547444",
    image: "/assets/image3.png",
    discount: "-20%",
    highlight: "Promoção N1",
    rating: 4,
    reviews: 892,
    bestPrice: "R$ 89.99",
    sellerPrice: "R$ 129.99",
  },
  {
    id: 4,
    name: "Gaming Mouse RGB Pro",
    image: "/assets/image4.png",
    discount: "-20%",
    highlight: "Promoção N1",
    rating: 4,
    reviews: 892,
    bestPrice: "R$ 89.99",
    sellerPrice: "R$ 129.99",
  },
  {
    id: 5,
    name: "Gaming Mouse RGB Pro 2",
    image: "/assets/image1.png",
    discount: "-20%",
    highlight: "Promoção N1",
    rating: 4,
    reviews: 892,
    bestPrice: "R$ 109.99",
    sellerPrice: "R$ 129.99",
  },
  {
    id: 6,
    name: "Controller Wireless DualSense X2u7445547444",
    image: "/assets/image3.png",
    discount: "-20%",
    highlight: "Promoção N1",
    rating: 5,
    reviews: 1092,
    bestPrice: "R$ 189.99",
    sellerPrice: "R$ 149.99",
  },
];