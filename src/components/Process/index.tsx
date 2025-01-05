import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { ProcessSteps } from './ProcessSteps';

export const Process = () => {
  return (
    <section id="process" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader 
          englishTitle="PROCESS"
          japaneseTitle="ご利用の流れ"
        />
        <ProcessSteps />
      </div>
    </section>
  );
};