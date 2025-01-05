import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useScrollTo } from '../../hooks/useScrollTo';

export const CTAButtons: React.FC = () => {
  const { handleClick } = useScrollTo();

  return (
    <div className="flex flex-col items-center gap-6">
      <button 
        onClick={() => handleClick('#contact')}
        className="bg-white text-gray-900 px-12 py-4 rounded-full hover:bg-gray-100 transition-colors text-lg font-bold w-64 shadow-lg"
      >
        無料で相談する
      </button>
      
      <button 
        onClick={() => handleClick('#contact')}
        className="text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
      >
        資料請求はこちら
        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
};