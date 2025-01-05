import React from 'react';
import { HeroContent } from './HeroContent';
import { HeroImage } from './HeroImage';

export const Hero: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24 min-h-[calc(100vh-80px)] flex items-center">
      <div className="flex flex-col lg:flex-row items-center gap-12 w-full">
        <HeroContent />
        <HeroImage />
      </div>
    </div>
  );
};