"use client";

import React, { useState, ReactNode } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FooterMenuToggleProps {
  title: string;
  children: ReactNode;
}

export function FooterMenuToggle({ title, children }: FooterMenuToggleProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b border-white/10 md:border-none w-full md:w-auto"> 
      <button
        type="button"
        className="w-full flex justify-between items-center py-4 md:py-0 cursor-pointer text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-white text-[16px] font-bold leading-[24px] tracking-[-0.312px] md:mb-6">
          {title}
        </h3>
    
        <span className="md:hidden text-white">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </button>

      <div
        className={`
          md:block transition-all duration-300 ease-in-out
          ${isOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0 overflow-hidden'}
          md:max-h-none md:opacity-100 md:pb-0
        `}
      >
        {children}
      </div>
    </nav>
  );
}