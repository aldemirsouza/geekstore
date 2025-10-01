import { SearchIcon } from "lucide-react";

export function Search() {
  return (
    <div className="w-full md:max-w-[596px] relative">
      <input
        type="text"
        placeholder="Buscar jogos, consoles, produtos geek..."
        className="w-full pl-4 pr-12 py-2 rounded-md bg-[#F3F3F5] border-none focus:outline-none focus:ring-2 focus:ring-primary text-[#717182] text-sm md:text-base"
      />
      <button
        type="button"
        className="w-[36px] h-[32px] absolute right-1 top-1/2 transform -translate-y-1/2 bg-primary p-2 rounded-md flex items-center justify-center text-white 
        hover:brightness-90 transition duration-200 cursor-pointer"
      >
        <SearchIcon size={20} />
      </button>
    </div>
  );
}
