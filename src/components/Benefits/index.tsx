import React from 'react';
import { BenefitsList } from './BenefitsList';

export const Benefits = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-12">
          サービスの具体例（Example）
        </h2>
        <BenefitsList />
      </div>
    </section>
  );
};