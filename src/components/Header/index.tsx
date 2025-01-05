import React from 'react';
import { Navbar } from './Navbar';
import { Hero } from './Hero';

export const Header = () => {
  return (
    <header className="relative min-h-screen">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="./images/call-center-team.jpg"
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

      {/* Content */}
      <div className="relative z-20">
        <Navbar />
        <Hero />
      </div>
    </header>
  );
};