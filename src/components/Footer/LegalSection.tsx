import React from 'react';
import { legalLinks } from './data';

export const LegalSection = () => {
  return (
    <div className="mt-20 pt-8 border-t border-blue-800 flex flex-col lg:flex-row justify-between items-center text-sm text-gray-400">
      <div className="flex flex-wrap justify-center gap-6 mb-4 lg:mb-0">
        {legalLinks.map((link) => (
          <a 
            key={link.title}
            href={link.href} 
            className="hover:text-white transition-colors"
          >
            {link.title}
          </a>
        ))}
      </div>
      <p>© 2024 Talencia Inc.</p>
    </div>
  );
};