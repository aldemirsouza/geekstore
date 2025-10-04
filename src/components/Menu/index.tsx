import Link from "next/link";
import { X } from "lucide-react";

interface MenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export function Menu({ isMenuOpen, setIsMenuOpen }: MenuProps) {
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 md:hidden transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <nav
        className={`
          fixed top-0 left-0 w-64 h-full bg-white shadow-xl p-6 z-30 md:static md:w-auto md:h-auto md:bg-transparent md:p-0 md:shadow-none
          transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} 
          md:translate-x-0 
          md:block 
          container mx-auto pb-2 sm:px-4 max-w-[1055px]
        `}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className="flex justify-end w-full mb-6 text-gray-700 hover:text-gray-900 md:hidden"
          aria-label="Fechar menu"
        >
          <X size={24} />
        </button>

        <ul className="flex flex-col md:flex-row gap-4 md:gap-[51px] items-start md:items-center text-black sm:pb-[9px] sm:pt-6">

          <li className="w-full md:w-auto bg-[#F8F8F8] rounded-md px-4 py-2">
            <Link
              href="/jogos"
              className="flex justify-between items-center w-full gap-2 hover:text-gray-600  md:font-normal"
              onClick={handleLinkClick}
            >
              Jogos
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                <path d="M3.57031 4.5L6.57031 7.5L9.57031 4.5" stroke="#364153" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </li>

          <li className="w-full md:w-auto bg-[#F8F8F8] rounded-md px-4 py-2">
            <Link
              href="/consoles"
              className="flex justify-between items-center w-full gap-2 hover:text-gray-600 md:font-normal"
              onClick={handleLinkClick}
            >
              Consoles
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                <path d="M3.57031 4.5L6.57031 7.5L9.57031 4.5" stroke="#364153" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </li>

          <li className="w-full md:w-auto">
            <Link
              href="/pc-gaming"
              className="flex items-center gap-2 hover:text-gray-600"
              onClick={handleLinkClick}
            >
              PC Gaming
            </Link>
          </li>
          <li className="w-full md:w-auto">
            <Link
              href="/colecionaveis"
              className="flex items-center gap-2 hover:text-gray-600"
              onClick={handleLinkClick}
            >
              Colecionáveis
            </Link>
          </li>
          <li className="w-full md:w-auto">
            <Link
              href="/ofertas"
              className="flex items-center gap-2 hover:text-gray-600"
              onClick={handleLinkClick}
            >
              Ofertas
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
