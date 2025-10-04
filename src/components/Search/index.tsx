"use client";
import { SearchIcon } from "lucide-react";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Product } from '@/mocks/productsData';
import { getAllProducts } from "@/mocks/productsData";

const searchProducts = async (query: string): Promise<Product[]> => {
  if (!query) return [];

  const allProducts = await getAllProducts();
  const lowerQuery = query.toLowerCase();

  return allProducts.filter((product) =>
    product.name.toLowerCase().includes(lowerQuery)).slice(0, 5)
};

export function Search() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<Product[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (query.length > 2) {
      const fetchSuggestions = async () => {
        const results = await searchProducts(query);
        setSuggestions(results);
      };
      fetchSuggestions();
    } else {
      setSuggestions([]);
    }
  }, [query]);

  const handleSearch = () => {
    if (query.trim()) {
      setIsFocused(false);
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const handleSuggestionClick = (productName: string) => {
    setIsFocused(false);
    router.push(`/produtos/${productName.toLowerCase().replace(/\s/g, '-')}`);
  };

  const showDropdown = isFocused && (query.length > 0 || suggestions.length > 0);

  return (
    <div className="w-full md:max-w-[596px] relative" onBlur={() => setTimeout(() => setIsFocused(false), 150)}>

      <div className="flex">
        <input
          type="text"
          placeholder="Buscar jogos, consoles, produtos geek..."
          className="w-full pl-4 pr-12 py-2 rounded-l-md bg-[#F3F3F5] border-none focus:outline-none focus:ring-2 focus:ring-[#F5AB00] text-[#717182] text-sm md:text-base"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSearch();
            }
          }}
        />

        <button
          type="button"
          onClick={handleSearch}
          className="w-[50px] absolute right-0 top-0 bottom-0 bg-[#09235C] p-2 rounded-r-md flex items-center justify-center text-white 
                    hover:bg-[#F5AB00] transition duration-200 cursor-pointer"
        >
          <SearchIcon size={20} />
        </button>
      </div>

      {showDropdown && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-y-auto">
          {suggestions.length > 0 ? (
            suggestions.map((product) => (
              <div
                key={product.id}
                className="p-3 hover:bg-gray-100 cursor-pointer text-sm text-[#09235C] flex items-center gap-3"
                onMouseDown={() => handleSuggestionClick(product.name)}
              >
                <SearchIcon size={16} className="text-gray-400" />
                {product.name}
                <span className="ml-auto text-gray-500 text-xs">R$ {product.bestPrice.toFixed(2)}</span>
              </div>
            ))
          ) : (
            query.length > 2 && <div className="p-3 text-sm text-gray-500">Nenhum produto encontrado.</div>
          )}
          
          <div
            className="p-3 bg-gray-50 text-center text-sm text-primary hover:bg-gray-200 cursor-pointer border-t"
            onMouseDown={handleSearch}
          >
            Ver todos os resultados para "{query}"
          </div>
        </div>
      )}
    </div>
  );
}
