import React from 'react';

interface StepContentProps {
  title: string;
  description: string;
}

export const StepContent: React.FC<StepContentProps> = ({ title, description }) => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};