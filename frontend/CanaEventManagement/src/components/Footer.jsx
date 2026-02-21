import React from 'react';
import { 
  Instagram, Facebook, Youtube, Twitter, Linkedin, 
  Mail, Phone, MapPin, Send, ArrowRight, ShieldCheck 
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const serviceLinks = [
    "Grand Marriages", "Corporate Galas", "College Fests", 
    "Live Concerts", "Product Launches", "Birthday Bashes", 
    "Fashion Shows", "Exhibitions"
  ];

  const companyLinks = [
    "About Us", "Meet The Founder", "Our Process", 
    "Event Gallery", "Inquiry Form", "Contact Us", 
    "Privacy Policy", "Terms of Service"
  ];

  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- Top Section: Newsletter & Branding --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-gray-800">
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-black italic tracking-tighter mb-6">
              DREAMBRIGHT <span className="text-blue-500">INDIA.</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-md">
              Illuminating your dreams with world-class innovation and precision. 
              The powerhouse of event production in South India.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Youtube, Twitter, Linkedin].map((Icon, idx) => (
                <a key={idx} href="#" className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-all duration-300">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 bg-gray-800/50 p-8 rounded-3xl border border-gray-700">
            <h3 className="text-xl font-bold mb-2">Subscribe to our Event Journal</h3>
            <p className="text-gray-400 text-sm mb-6">Get exclusive insights into our latest high-production sets and event trends.</p>
            <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 bg-gray-900 border border-gray-700 rounded-xl px-6 py-4 outline-none focus:ring-2 focus:ring-blue-600 transition-all"
              />
              <button className="bg-blue-600 hover:bg-blue-500 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all">
                SUBSCRIBE <Send size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* --- Middle Section: Quick Links Grid --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-12 py-16">
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-500 mb-8">Our Services</h4>
            <ul className="space-y-4">
              {serviceLinks.map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="text-gray-400 hover:text-white flex items-center gap-2 group transition-colors">
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-500 mb-8">Company</h4>
            <ul className="space-y-4">
              {companyLinks.map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="text-gray-400 hover:text-white flex items-center gap-2 group transition-colors">
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6 space-y-8">
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-500 mb-8">Official HQ</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="text-blue-500 shrink-0" size={24} />
                  <p className="text-gray-400 leading-relaxed">
                    Dreambright Arena, Plot 45, <br />
                    Industrial Tech Park, South India, <br />
                    PIN: 600001
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-blue-500 shrink-0" size={20} />
                  <p className="text-gray-400">+91 90000 12345</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="text-blue-500 shrink-0" size={20} />
                  <p className="text-gray-400">hello@dreambrightindia.com</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-2xl flex items-center gap-3">
                  <ShieldCheck className="text-emerald-500" size={24} />
                  <p className="text-xs text-gray-400">ISO 9001:2015 Certified Production House</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- Bottom Section: Copyright & Signature --- */}
        <div className="pt-10 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <p className="text-gray-500 text-sm">
            © {currentYear} Dreambright India. All Rights Reserved. <br className="md:hidden" />
            Designed with Innovation & Passion.
          </p>
          <div className="text-gray-500 text-xs font-black uppercase tracking-[0.5em] opacity-50">
            " THE POWER OF PRODUCTION "
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;