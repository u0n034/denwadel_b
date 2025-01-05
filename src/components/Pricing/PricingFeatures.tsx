import React from 'react';
import { Check } from 'lucide-react';
import { features } from './data';

export const PricingFeatures = () => {
  return (
    <div className="grid gap-4">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center gap-3">
          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-yellow-100 flex items-center justify-center">
            <Check className="w-3 h-3 text-yellow-500" />
          </div>
          <span className="text-gray-600">{feature}</span>
        </div>
      ))}
    </div>
  );
};