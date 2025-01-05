import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { FeaturesList } from './FeaturesList';

export const Features: React.FC = () => {
  return (
    <section id="merit" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader 
          englishTitle="MERIT"
          japaneseTitle="デンワデルを利用する5つのメリット"
        />
        <FeaturesList />
      </div>
    </section>
  );
};