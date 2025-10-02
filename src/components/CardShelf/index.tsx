import { Star, ShoppingCart } from "lucide-react";
import Image from "next/image";

interface Product {
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

const products: Product[] = [
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
];

export function CardShelf() {
  return (
    <div className="max-w-[1055px] mx-auto mt-8 px-2 sm:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product: Product) => (
          <div
            key={product.id}
            className="border rounded-[10px] flex flex-col relative bg-white shadow-sm hover:shadow-md transition"
          >
            {/* Imagem */}
            <div className="relative w-full h-52 overflow-hidden rounded-t-[10px]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
              <span className="absolute top-2 left-2 bg-[#FB2C36] text-white text-xs px-2 py-[2px] rounded-[8px]">
                {product.discount}
              </span>
            </div>

            {/* Conteúdo */}
            <div className="flex flex-col p-4 gap-2 flex-1">
              <span className="bg-[#F5AB00] text-primary text-xs px-3 py-1 rounded-[8px] self-start">
                {product.highlight}
              </span>

              <h2 className="text-left text-[#101828] font-semibold text-lg line-clamp-2">
                {product.name}
              </h2>

              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    strokeWidth={1.333}
                    stroke="#F5AB00"
                    fill={
                      i < product.rating ? "#F5AB00" : "rgba(245, 171, 0, 0.50)"
                    }
                  />
                ))}
                <span className="text-sm text-gray-500 ml-2">
                  ({product.reviews})
                </span>
              </div>

              <div className="flex flex-row items-center gap-2">
                <span className="text-lg font-bold text-[#09235C]">
                  {product.bestPrice}
                </span>
                <span className="text-sm line-through text-[#6A7282]">
                  {product.sellerPrice}
                </span>
              </div>

              <div className="flex justify-center w-full mt-auto">
                <button className="flex items-center gap-2 bg-[#09235C] text-white px-6 py-2 rounded-md text-sm font-medium hover:filter hover:brightness-90 transition cursor-pointer">
                  <ShoppingCart size={16} />
                  Adicionar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-14">
        <button
          className="rounded-[8px] border border-[#09235C] bg-[#F8F8F8] px-6 py-2 cursor-pointer"
          style={{
            color: "#09235C",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "20px",
            letterSpacing: "-0.15px",
          }}
        >
          Ver todos os produtos
        </button>
      </div>
    </div>
  );
}
