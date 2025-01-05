import React from 'react';
import { ChevronDown } from 'lucide-react';
import { StepNumber } from './StepNumber';
import { StepContent } from './StepContent';

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  isLast?: boolean;
}

export const ProcessStep: React.FC<ProcessStepProps> = ({ 
  number, 
  title, 
  description, 
  isLast = false 
}) => {
  return (
    <div className="relative">
      <div className="bg-white rounded-lg p-8 shadow-md">
        <div className="flex items-start gap-6">
          <StepNumber number={number} />
          <StepContent title={title} description={description} />
        </div>
      </div>
      {!isLast && (
        <ChevronDown className="w-8 h-8 text-yellow-500 mx-auto my-4" />
      )}
    </div>
  );
};