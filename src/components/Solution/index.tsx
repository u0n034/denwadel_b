import React from 'react';
import { SectionHeader } from '../common/SectionHeader';

export const Solution: React.FC = () => {
  return (
    <section className="py-16 bg-white relative -mt-32">
      <div className="container mx-auto px-4">
        <SectionHeader 
          englishTitle="SOLUTION"
          japaneseTitle="そのお悩み、デンワデルならすべて解決できます"
        />
        <div className="max-w-4xl mx-auto">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/7vJ4pW2Hmyc?rel=0"
              title="電話代行サービスの紹介"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};