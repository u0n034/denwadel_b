import React from 'react';

interface StepNumberProps {
  number: string;
}

export const StepNumber: React.FC<StepNumberProps> = ({ number }) => {
  return (
    <div className="bg-yellow-500 text-white text-xl font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
      {number}
    </div>
  );
};