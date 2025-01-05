import React from 'react';
import { TestimonialCard } from './TestimonialCard';
import { testimonial } from './data';

export const TestimonialsList: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <TestimonialCard {...testimonial} />
    </div>
  );
};