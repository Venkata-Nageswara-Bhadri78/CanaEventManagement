import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AboutUs from './components/AboutUs';
import FounderProfile from './components/FounderProfile';
import WhatWeDo from './components/WhatWeDo';
import EnquiryPage from './components/EnquiryPage';
import ContactPage from './components/ContactPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import ScrollToTop from './components/ScrollToTop';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        {/* Floating Navbar - Stays visible on all pages */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            {/* Default Route: Redirects to Home */}
            <Route path="/" element={<Navigate to="/home" />} />
            
            {/* Individual Component Routes */}
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/founder" element={<FounderProfile />} />
            <Route path="/services" element={<WhatWeDo />} />
            <Route path="/enquiry" element={<EnquiryPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* Fallback for 404 - Redirect to Home */}
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
        </main>

        {/* Footer - Stays at the bottom of all pages */}
        <Footer />
      </div>
    </>
  )
}

export default App
