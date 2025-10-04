import Link from "next/link";

export function Menu() {
  return (
    <nav className="hidden md:block container mx-auto pb-2 sm:px-4 max-w-[1055px]">
      <ul className="flex gap-[51px] items-center text-black">
        <li className="bg-[#F8F8F8] rounded-md px-4 py-2">
          <Link
            href="/login"
            className="flex items-center gap-2 hover:text-gray-600"
          >
            Jogos
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
              <path d="M3.57031 4.5L6.57031 7.5L9.57031 4.5" stroke="#364153" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </li>
        <li className="bg-[#F8F8F8] rounded-md px-4 py-2">
          <Link
            href="/contact"
            className="flex items-center gap-2 hover:text-gray-600"
          >
            Consoles
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
              <path d="M3.57031 4.5L6.57031 7.5L9.57031 4.5" stroke="#364153" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </li>

        <li>
          <Link
            href="/contact"
            className="flex items-center gap-2 hover:text-gray-600"
          >
            PC Gaming
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="flex items-center gap-2 hover:text-gray-600"
          >
            Colecionáveis
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="flex items-center gap-2 hover:text-gray-600"
          >
            Ofertas
          </Link>
        </li>
      </ul>
    </nav>
  );
}
