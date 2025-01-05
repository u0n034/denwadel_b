import React from 'react';
import { ServiceHeader } from './ServiceHeader';
import { OperatorSection } from './OperatorSection';
import { AutoForwardSection } from './AutoForwardSection';
import { OperatorConfirmationSection } from './OperatorConfirmationSection';
import { NotificationSection } from './NotificationSection';
import { EfficiencySection } from './EfficiencySection';
import { SectionDivider } from './SectionDivider';

export const ServiceDetails: React.FC = () => {
  return (
    <section id="service" className="py-24 bg-gradient-to-b from-white to-yellow-50/30">
      <div className="container mx-auto px-4">
        <ServiceHeader />
        <div className="max-w-5xl mx-auto space-y-4">
          <OperatorSection />
          <AutoForwardSection />
          <SectionDivider />
          <OperatorConfirmationSection />
          <SectionDivider />
          <NotificationSection />
          <SectionDivider />
          <EfficiencySection />
        </div>
      </div>
    </section>
  );
};