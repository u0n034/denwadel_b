import React from 'react';

export const HeroBackground: React.FC = () => {
  return (
    <>
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2070"
          alt="コールセンタースタッフ"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Yellow overlay with clip-path */}
      <div className="absolute inset-0 z-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundColor: '#FFB800',
            clipPath: 'polygon(0 0, 65% 0, 15% 100%, 0 100%)',
            opacity: '0.95'
          }}
        />
      </div>
    </>
  );
};