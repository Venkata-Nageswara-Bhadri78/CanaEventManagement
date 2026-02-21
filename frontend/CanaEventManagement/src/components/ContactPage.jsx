import React from 'react';
import { 
  Phone, Mail, MapPin, Instagram, Facebook, Twitter, Linkedin, 
  MessageCircle, Clock, Globe, ShieldCheck, Headset, ExternalLink, 
  Send, Zap 
} from 'lucide-react';

const ContactPage = () => {
  // Contact Categories for a high-production feel
  const departments = [
    {
      title: "General Inquiries",
      description: "For basic information regarding our event packages and availability.",
      phone: "+91 90000 11111",
      email: "hello@dreambright.in",
      icon: <Globe className="w-6 h-6 text-blue-600" />
    },
    {
      title: "VIP & Wedding Concierge",
      description: "Dedicated support for luxury weddings and high-profile private events.",
      phone: "+91 90000 22222",
      email: "luxury@dreambright.in",
      icon: <ShieldCheck className="w-6 h-6 text-rose-600" />
    },
    {
      title: "Technical & Production",
      description: "Contact our AV and Stage production team for technical specifications.",
      phone: "+91 90000 33333",
      email: "production@dreambright.in",
      icon: <Zap className="w-6 h-6 text-yellow-600" />
    },
    {
      title: "Careers & HR",
      description: "Join our team of youthful professionals and event architects.",
      phone: "+91 90000 44444",
      email: "careers@dreambright.in",
      icon: <Headset className="w-6 h-6 text-emerald-600" />
    }
  ];

  const socialLinks = [
    { name: "WhatsApp", icon: <MessageCircle />, color: "bg-green-500", handle: "+91 98765 43210", link: "#" },
    { name: "Instagram", icon: <Instagram />, color: "bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500", handle: "@dreambright_india", link: "#" },
    { name: "Facebook", icon: <Facebook />, color: "bg-blue-600", handle: "Dreambright India Events", link: "#" },
    { name: "LinkedIn", icon: <Linkedin />, color: "bg-blue-700", handle: "Dreambright India Official", link: "#" },
    { name: "X (Twitter)", icon: <Twitter />, color: "bg-black", handle: "@DreamBright_IN", link: "#" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* --- Hero Header --- */}
      <div className="bg-white border-b border-gray-100 pt-20 pb-12 px-6 text-center">
        <h4 className="text-blue-600 font-bold uppercase tracking-widest mb-4 text-sm">Get In Touch</h4>
        <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter mb-6 italic">CONTACT US</h1>
        <p className="max-w-2xl mx-auto text-gray-500 text-lg">
          We are available 24/7 for event emergencies and production consultations. 
          Connect with our specialized departments for a seamless experience.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* --- Left Column: Department Grid --- */}
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              Direct Channels <span className="h-px w-20 bg-gray-200"></span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {departments.map((dept, idx) => (
                <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="mb-4">{dept.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{dept.title}</h3>
                  <p className="text-gray-500 text-sm mb-6 leading-relaxed">{dept.description}</p>
                  <div className="space-y-3">
                    <a href={`tel:${dept.phone}`} className="flex items-center gap-3 text-gray-700 hover:text-blue-600 font-medium transition-colors">
                      <Phone size={16} /> {dept.phone}
                    </a>
                    <a href={`mailto:${dept.email}`} className="flex items-center gap-3 text-gray-700 hover:text-blue-600 font-medium transition-colors">
                      <Mail size={16} /> {dept.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* --- Global Presence / Office Info --- */}
            <div className="bg-blue-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden">
              <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-2">Our Headquarters</h3>
                  <p className="text-blue-200 mb-6 flex items-center justify-center md:justify-start gap-2">
                    <MapPin size={18} /> 123 Event Arena, South India, IND
                  </p>
                  <div className="flex items-center gap-4 text-sm font-bold bg-blue-800/50 p-4 rounded-xl inline-flex">
                    <Clock size={18} className="text-blue-300" />
                    <span>MON - SAT: 09:00 AM - 08:00 PM</span>
                  </div>
                </div>
                <button className="bg-white text-blue-900 px-8 py-4 rounded-full font-black hover:bg-blue-50 transition-all flex items-center gap-2">
                  GET DIRECTIONS <ExternalLink size={18} />
                </button>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20"></div>
            </div>
          </div>

          {/* --- Right Column: Social Ecosystem --- */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              Social Connect <span className="h-px w-20 bg-gray-200"></span>
            </h2>
            <div className="flex flex-col gap-4">
              {socialLinks.map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.link}
                  className="group flex items-center justify-between p-5 bg-white rounded-2xl border border-gray-100 hover:border-transparent hover:ring-2 hover:ring-offset-2 transition-all"
                  style={{'--tw-ring-color': social.color.includes('bg-') ? 'currentColor' : '#3b82f6'}}
                >
                  <div className="flex items-center gap-4">
                    <div className={`${social.color} p-3 rounded-xl text-white shadow-lg`}>
                      {social.icon}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-tighter">{social.name}</p>
                      <p className="font-bold text-gray-900">{social.handle}</p>
                    </div>
                  </div>
                  <Send size={16} className="text-gray-300 group-hover:text-blue-600 transition-colors" />
                </a>
              ))}
            </div>

            {/* Newsletter / Instant Chat CTA */}
            <div className="p-8 bg-gray-900 rounded-[2rem] text-white">
              <h3 className="text-xl font-bold mb-4 italic">Instant Support?</h3>
              <p className="text-gray-400 text-sm mb-6">
                Start a live chat with our project managers for immediate assistance regarding your event.
              </p>
              <button className="w-full py-4 bg-blue-600 rounded-xl font-bold hover:bg-blue-500 transition-colors flex items-center justify-center gap-2">
                <MessageCircle size={18} /> LIVE WHATSAPP CHAT
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* --- Footer Signature --- */}
      <div className="py-12 text-center text-gray-400 text-sm uppercase tracking-[0.3em]">
        " THE POWER OF PRODUCTION "
      </div>
    </div>
  );
};

export default ContactPage;