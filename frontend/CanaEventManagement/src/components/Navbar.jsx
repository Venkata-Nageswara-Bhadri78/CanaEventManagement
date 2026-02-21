import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// If you want smooth scrolling automatically, 'react-router-hash-link' is recommended,
// but here is the version using the standard React Router Link as requested.
import { Menu, X, Sparkles, Send } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitors scroll to toggle glassmorphism intensity
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Section names mapped to the IDs in your App.js
  const navLinks = [
    { name: 'Home', to: '/home' },
    { name: 'About Us', to: '/about' },
    { name: 'The Founder', to: '/founder' },
    { name: 'What We Do', to: '/services' },
    { name: 'Contact Us', to: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-50 top-6 px-4 md:px-10">
      {/* Floating Glassmorphism Container */}
      <div className={`mx-auto max-w-7xl transition-all duration-500 rounded-full border border-white/20 
        ${scrolled ? 'bg-white/70 backdrop-blur-lg shadow-2xl py-3' : 'bg-white/40 backdrop-blur-md py-5'}`}>
        
        <div className="flex items-center justify-between px-8">
          
          {/* Logo with Link to Top */}
          <Link 
            to="/home" 
            className="flex items-center gap-2 group cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            <div className="bg-blue-600 p-2 rounded-lg group-hover:rotate-12 transition-transform">
              <Sparkles className="text-white w-5 h-5" />
            </div>
            <span className="font-black text-xl tracking-tighter text-gray-900">
              DREAM<span className="text-blue-600">BRIGHT</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className="text-sm font-bold uppercase tracking-widest text-gray-700 hover:text-blue-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Call to Action Link */}
          <div className="hidden md:block">
            <Link 
              to="/enquiry"
              className="bg-black text-white px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-blue-600 transition-all flex items-center gap-2 shadow-lg"
            >
              Enquire Now <Send size={14} />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900 p-2 focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-4 right-4 bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-gray-100 animate-in fade-in zoom-in duration-300">
          <div className="flex flex-col gap-6 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className="text-lg font-black uppercase tracking-widest text-gray-900 hover:text-blue-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <hr className="border-gray-100" />
            <Link 
              to="/enquiry"
              onClick={() => setIsOpen(false)}
              className="bg-blue-600 text-white py-4 rounded-2xl font-black uppercase tracking-widest block"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;