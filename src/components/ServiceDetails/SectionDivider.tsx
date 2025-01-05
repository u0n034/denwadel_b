import React from 'react';
import { ChevronDown } from 'lucide-react';

export const SectionDivider: React.FC = () => {
  return (
    <div className="flex justify-center my-8">
      <ChevronDown className="w-8 h-8 text-yellow-500" />
    </div>
  );
}