import React, { useState } from 'react';
import { Logo } from '../common/Logo';
import { navigationItems } from '../common/navigation';
import { useScrollTo } from '../../hooks/useScrollTo';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const { handleClick } = useScrollTo();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    handleClick(href);
    setIsMenuOpen(false);
  };

  return (
    <nav className="container mx-auto px-4 py-6 relative">
      <div className="flex items-center justify-between">
        <Logo className="text-white" />
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navigationItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleClick(item.href)}
              className="text-white/90 hover:text-white transition-colors text-sm"
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <button 
            onClick={() => handleClick('#contact')}
            className="text-white border border-white/20 px-4 py-2 rounded-md hover:bg-white/10 transition-colors text-sm"
          >
            お問い合わせ
          </button>
          <button 
            onClick={() => handleClick('#contact')}
            className="bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-yellow-600 transition-colors font-bold"
          >
            無料相談
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-lg p-4 lg:hidden z-50">
          <div className="flex flex-col gap-2">
            {navigationItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-gray-800 hover:text-yellow-500 py-2 text-left transition-colors"
              >
                {item.label}
              </button>
            ))}
            <hr className="my-2" />
            <button 
              onClick={() => handleNavClick('#contact')}
              className="text-yellow-500 font-bold py-2 hover:text-yellow-600 transition-colors"
            >
              無料相談
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};