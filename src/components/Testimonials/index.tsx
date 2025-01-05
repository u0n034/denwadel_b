import React from 'react';
import { IndustriesList } from './IndustriesList';
import { TestimonialsList } from './TestimonialsList';
import { SectionHeader } from '../common/SectionHeader';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader 
          englishTitle="USER'S VOICE"
          japaneseTitle="幅広い業種に対応可能です"
        />
        <IndustriesList />
        <TestimonialsList />
      </div>
    </section>
  );
};