import React from 'react';
import { useScrollTo } from '../../hooks/useScrollTo';

export const Hero: React.FC = () => {
  const { handleClick } = useScrollTo();

  return (
    <div className="relative h-[calc(100vh-88px)]">
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center h-full">
          <div className="w-full lg:w-1/2 text-white">
            <div className="hidden lg:block mb-4">
              <img 
                src="/images/noto-support-logo.png" 
                alt="能登半島地震復興支援" 
                className="w-48 h-48 object-contain"
              />
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="font-inter">電話代行</span>
              <br />
              <span className="font-inter">月2,980円で</span>
            </h1>
            <p className="text-lg mb-8 leading-relaxed">
              迅速・丁寧な電話対応は、顧客との信頼関係を築く第一歩。
              専門スタッフが応対することで、貴社のビジネスの価値が高まります。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => handleClick('#contact')}
                className="bg-white text-orange-500 px-8 py-4 rounded-md hover:bg-gray-100 transition-colors text-lg font-bold"
              >
                無料で相談
              </button>
              <button 
                onClick={() => handleClick('#contact')}
                className="border-2 border-white text-white px-8 py-4 rounded-md hover:bg-white/10 transition-colors text-lg"
              >
                資料ダウンロード
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};