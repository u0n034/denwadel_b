import React from 'react';
import { ProcessStep } from './ProcessStep';
import { processSteps } from './data';

export const ProcessSteps = () => {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      {processSteps.map((step, index) => (
        <ProcessStep 
          key={index}
          {...step}
          isLast={index === processSteps.length - 1}
        />
      ))}
    </div>
  );
};