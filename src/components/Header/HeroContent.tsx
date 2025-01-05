import React from 'react';

export const HeroContent: React.FC = () => {
  return (
    <div className="flex-1 text-center lg:text-left">
      <div className="mb-8">
        <h1 className="text-4xl lg:text-6xl font-bold mb-4">
          電話代行
          <div className="flex items-center justify-center lg:justify-start gap-2 mt-2">
            <span className="text-yellow-500 font-inter">2,980</span>
            <span className="text-3xl">円から</span>
          </div>
        </h1>
        <div className="ml-20 text-[15px] text-gray-600 leading-relaxed max-w-2xl">
          <p className="mb-4">
            迅速・丁寧な電話対応は、顧客との信頼関係を築く第一歩。
            <br />
            専門スタッフが応対することで、貴社のビジネスの価値が高まります。
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
        <button className="bg-yellow-500 text-white px-8 py-4 rounded-md hover:bg-yellow-600 transition-colors text-lg font-bold">
          2週間無料トライアル
        </button>
        <button className="border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-md hover:bg-gray-50 transition-colors text-lg">
          資料ダウンロード
        </button>
      </div>
    </div>
  );
};