import React from 'react';
import { industries } from './data';

export const IndustriesList: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto mb-16">
      {industries.map((industry, index) => (
        <div
          key={index}
          className="border border-yellow-200 rounded-full px-6 py-2 text-center text-sm text-gray-700 bg-white hover:bg-yellow-50 transition-colors"
        >
          {industry}
        </div>
      ))}
    </div>
  );
};