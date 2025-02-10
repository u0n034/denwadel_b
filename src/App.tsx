import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
import { Thanks } from './components/Thanks';

const HomePage = () => {
  return (
    <>
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
    </>
  );
};

function App() {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/thanks-b" element={<Thanks />} />
      </Routes>
    </div>
  );
}

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;