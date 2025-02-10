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
import { FloatingContactButton } from './components/ContactForm/FloatingContactButton';
import { ChatBot } from './components/ChatBot/ChatBot';
import { AdminChat } from './components/AdminChat';
import { Login } from './components/AdminAuth/Login';
import { PrivateRoute } from './components/AdminAuth/PrivateRoute';
import { AuthProvider } from './contexts/AuthContext';

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
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith('/admin');

  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/thanks" element={<Thanks />} />
        <Route path="/admin/login" element={<Login />} />
        <Route
          path="/admin/chat"
          element={
            <PrivateRoute>
              <AdminChat />
            </PrivateRoute>
          }
        />
      </Routes>
      {!isAdminPage && (
        <>
          <FloatingContactButton />
          <ChatBot />
        </>
      )}
    </div>
  );
}

const AppWrapper = () => {
  return (
    <Router>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Router>
  );
};

export default AppWrapper;