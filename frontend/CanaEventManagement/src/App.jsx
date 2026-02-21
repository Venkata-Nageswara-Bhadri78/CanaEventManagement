import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';

// ── Your Home page sections ──────────────────────────────────
import HeroSection     from './components/Herosection';
import AboutSection    from './components/AboutSection';
import StatsSection    from './components/StatsSection';
import WorkflowSection from './components/WorkflowSection';
import ClientsSection  from './components/ClientsSection';
import ContactSection  from './components/ContactSection';
import Footer          from './components/Footer';

// ── Your friend's pages ──────────────────────────────────────
import AboutUs         from './components/AboutUs';
import WhatWeDo        from './components/WhatWeDo';
import FounderProfile  from './components/FounderProfile';
import EnquiryPage     from './components/EnquiryPage';
import ContactPage     from './components/ContactPage';

// ── Full Home page ───────────────────────────────────────────
function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <WorkflowSection />
      <ClientsSection />
      <ContactSection />
      <Footer />
    </>
  );
}

// ── App with routing ─────────────────────────────────────────
export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/"          element={<HomePage />} />
        <Route path="/about"     element={<AboutUs />} />
        <Route path="/founder"   element={<FounderProfile />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/enquiry"   element={<EnquiryPage />} />
        <Route path="/contact"   element={<ContactPage />} />
      </Routes>
    </Router>
  );
}