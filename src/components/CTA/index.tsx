import React from 'react';
import { useScrollTo } from '../common/hooks/useScrollTo';

export const CTA = () => {
  const { handleClick } = useScrollTo();

  return (
    <section className="py-24 bg-gradient-to-br from-yellow-500 to-yellow-600 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            今すぐ始めましょう
          </h2>
          <p className="text-lg md:text-xl mb-12 text-white/90">
            月額2,980円で、あなたのビジネスを効率的にサポートします
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => handleClick('#contact')}
              className="bg-white text-yellow-500 px-8 py-4 rounded-lg hover:bg-yellow-50 transition-colors text-lg font-bold shadow-lg hover:shadow-xl"
            >
              無料で相談する
            </button>
            <button 
              onClick={() => handleClick('#contact')}
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors text-lg"
            >
              資料ダウンロード
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};