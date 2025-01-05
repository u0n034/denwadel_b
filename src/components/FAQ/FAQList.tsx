import React from 'react';
import { FAQItem } from './FAQItem';
import { faqItems } from './data';

export const FAQList = () => {
  return (
    <div className="max-w-2xl mx-auto space-y-4">
      {faqItems.map((item, index) => (
        <FAQItem key={index} {...item} />
      ))}
    </div>
  );
};