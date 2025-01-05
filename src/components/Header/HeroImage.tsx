import React from 'react';

export const HeroImage: React.FC = () => {
  return (
    <div className="flex-1 relative">
      <div className="relative rounded-xl overflow-hidden shadow-xl">
        <img
          src="/images/call-center-team.jpg"
          alt="コールセンタースタッフ"
          className="w-full h-auto rounded-xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-200 rounded-full opacity-20 blur-xl"></div>
      <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-200 rounded-full opacity-20 blur-xl"></div>
    </div>
  );
};