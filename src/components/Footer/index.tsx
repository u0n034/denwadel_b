import React from 'react';
import { Container } from '../common/Container';
import { CompanyInfo } from './CompanyInfo';
import { Navigation } from './Navigation';
import { LegalSection } from './LegalSection';

export const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <CompanyInfo />
          <Navigation />
        </div>
        <LegalSection />
      </Container>
    </footer>
  );
};