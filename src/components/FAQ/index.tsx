import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { FAQList } from './FAQList';

export const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeader 
          englishTitle="FAQ"
          japaneseTitle="よくあるご質問"
        />
        <FAQList />
      </div>
    </section>
  );
};