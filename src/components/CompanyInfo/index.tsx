import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { CompanyDetails } from './CompanyDetails';
import { CompanyMap } from './CompanyMap';

export const CompanyInfo = () => {
  return (
    <section id="company" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader 
          englishTitle="COMPANY"
          japaneseTitle="会社概要"
        />
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-white to-yellow-50/30 rounded-2xl shadow-sm overflow-hidden">
            <CompanyDetails />
            <CompanyMap />
          </div>
        </div>
      </div>
    </section>
  );
};