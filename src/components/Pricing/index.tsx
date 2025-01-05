import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { PricingCard } from './PricingCard';
import { BackgroundDecoration } from './BackgroundDecoration';

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-yellow-50 via-yellow-50/50 to-white relative overflow-hidden">
      <BackgroundDecoration />
      
      <div className="container mx-auto px-4 relative">
        <SectionHeader 
          englishTitle="PRICING"
          japaneseTitle="料金プラン"
        />
        <PricingCard />
      </div>
    </section>
  );
};