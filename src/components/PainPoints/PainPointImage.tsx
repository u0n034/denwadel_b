import React from 'react';

export const PainPointImage: React.FC = () => {
  return (
    <div className="mt-12 relative">
      {/* Cascading Rs */}
      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 flex items-baseline gap-1">
        <span className="text-7xl font-bold text-black font-inter">R</span>
        <span className="text-6xl font-bold text-black/80 font-inter">R</span>
        <span className="text-5xl font-bold text-black/70 font-inter">R</span>
        <span className="text-4xl font-bold text-black/60 font-inter">R</span>
        <span className="text-3xl font-bold text-black/50 font-inter">R</span>
        <span className="text-2xl font-bold text-black/40 font-inter">R</span>
        <span className="text-xl font-bold text-black/30 font-inter">R</span>
        <span className="text-lg font-bold text-black/20 font-inter">R</span>
        <span className="text-base font-bold text-black/10 font-inter">R</span>
      </div>

      {/* Main Image */}
      <img
        src="/images/stressed-businessman.png"
        alt="電話対応に困っているビジネスマン"
        className="mx-auto max-w-full h-auto"
      />
    </div>
  );
};