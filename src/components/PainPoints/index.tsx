import React from 'react';
import { PainPointsList } from './PainPointsList';
import { PainPointImage } from './PainPointImage';
import { SectionHeader } from '../common/SectionHeader';

export const PainPoints: React.FC = () => {
  return (
    <>
      <section className="bg-gray-50 relative pt-20">
        <div className="container mx-auto px-4">
          <SectionHeader 
            englishTitle="PROBLEM"
            japaneseTitle="電話対応でこんなお困りありませんか？"
          />
          <div className="max-w-5xl mx-auto">
            <PainPointsList />
            <div className="mt-32">
              <PainPointImage />
            </div>
          </div>
        </div>
        {/* Center-pointed triangular divider */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-32 w-full"
          style={{
            background: 'linear-gradient(to left bottom, transparent 49.5%, white 50%), linear-gradient(to right bottom, transparent 49.5%, white 50%)',
          }}
        />
      </section>
      <div className="h-32 bg-white" /> {/* Spacer for the triangular overlap */}
    </>
  );
};