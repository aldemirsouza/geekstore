"use client";

import Link from "next/link";

export function TopBar() {
  return (
    <div className="bg-white overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-2 gap-2 md:gap-0  max-w-[1055px]">

        <div className="flex items-center gap-2 animate-slide-in ">
          <span className="text-sm font-normal text-gray-theme">
            Frete grátis acima de R$ 199
          </span>
          <div className="w-1 h-1 inline-block rounded-full bg-gray-theme"></div>
          <span className="text-sm font-normal text-gray-theme">
            12x sem juros
          </span>
        </div>

        <div className="flex items-center gap-4 mt-2 md:mt-0">
          <Link
            href="/account"
            className="text-sm font-normal text-gray-theme hover:text-gray-600"
          >
            Minha conta
          </Link>

          <Link
            href="https://wa.me/5581988999923"
            target="_blank"
            className="text-sm font-normal text-gray-theme hover:text-gray-600"
          >
            Atendimento
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in {
          animation: slideIn 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
