import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { PainPoints } from './components/PainPoints';
import { Solution } from './components/Solution';
import { Features } from './components/Features';
import { Partner } from './components/Partner';
import { Testimonials } from './components/Testimonials';
import { ServiceDetails } from './components/ServiceDetails';
import { Pricing } from './components/Pricing';
import { Process } from './components/Process';
import { CTA } from './components/CTA';
import { FAQ } from './components/FAQ';
import { ContactForm } from './components/ContactForm';
import { CompanyInfo } from './components/CompanyInfo';
import { Footer } from './components/Footer';

const LandingPageB = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <PainPoints />
      <Solution />
      <Features />
      <Partner />
      <Testimonials />
      <ServiceDetails />
      <Pricing />
      <Process />
      <CTA />
      <FAQ />
      <ContactForm />
      <CompanyInfo />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/b" replace />} />
        <Route path="/b/*" element={<LandingPageB />} />
        <Route path="/a" element={<div>Landing Page A（準備中）</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;