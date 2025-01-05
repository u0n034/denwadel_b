import React from 'react';

export const PricingHeader = () => {
  return (
    <div className="bg-yellow-500 text-white p-8 text-center">
      <h3 className="text-xl font-bold mb-2">基本料金プラン</h3>
      <p className="text-sm opacity-90">月額 / 税抜</p>
      <div className="mt-4">
        <span className="text-6xl font-bold text-white">2,980</span>
        <span className="text-2xl">円</span>
      </div>
      <p className="mt-4 text-sm bg-white/10 inline-block px-4 py-2 rounded-full">
        ～15件までは基本料金に含まれます
      </p>
    </div>
  );
};