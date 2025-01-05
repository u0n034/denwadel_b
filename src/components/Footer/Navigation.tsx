import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useScrollTo } from './hooks/useScrollTo';
import { menuItems } from './data';

export const Navigation = () => {
  const { handleClick } = useScrollTo();

  return (
    <nav className="lg:col-span-6 lg:col-start-7">
      <div className="grid grid-cols-1 gap-2">
        {menuItems.map((item) => (
          <button
            key={item.label}
            onClick={() => handleClick(item.href)}
            className="flex items-center justify-between py-2 pr-4 text-gray-300 hover:text-white transition-colors group text-left"
          >
            <span>{item.label}</span>
            <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </button>
        ))}
      </div>
    </nav>
  );
};