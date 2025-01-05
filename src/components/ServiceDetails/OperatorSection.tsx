import React from 'react';

export const OperatorSection: React.FC = () => {
  return (
    <div className="relative max-w-4xl mx-auto h-[400px]">
      <div className="w-full h-full rounded-xl overflow-hidden shadow-lg relative">
        <img
          src="/images/operator-support.jpg"
          alt="プロフェッショナルなオペレーターによる電話対応"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/40" />
        <div className="absolute inset-0 flex items-center justify-center text-white text-center p-6">
          <div>
            <h3 className="text-2xl font-bold">
              貴社に代わりプロのオペレーターが
              <br />
              さまざまな電話に対応します
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};