import React from 'react';
import { 
  Heart, PartyPopper, GraduationCap, Briefcase, Music, Utensils, 
  Camera, Zap, Mic2, MapPin, Globe, Star, ShieldCheck, Clock, 
  CheckCircle2, Sparkles, Settings, Users, Lightbulb, TrendingUp 
} from 'lucide-react';

const WhatWeDo = () => {
  // 20 Diverse Event Types with deep descriptions
  const eventTypes = [
    { name: "Grand Marriages", desc: "Luxury wedding planning from royal palace themes to intimate destination vows.", icon: <Heart className="text-rose-500" /> },
    { name: "Milestone Birthdays", desc: "Themed celebrations for all ages, featuring bespoke decor and immersive entertainment.", icon: <PartyPopper className="text-amber-500" /> },
    { name: "College Fests", desc: "High-energy campus festivals including concerts, competitions, and technical symposiums.", icon: <GraduationCap className="text-blue-500" /> },
    { name: "Corporate Galas", desc: "Prestigious annual balls and awards nights that reflect your company's elite branding.", icon: <Briefcase className="text-slate-700" /> },
    { name: "Live Concerts", desc: "Massive scale production involving sound, lighting, and artist management for thousands.", icon: <Music className="text-purple-500" /> },
    { name: "Product Launches", desc: "Scintillating reveals designed to capture media attention and market buzz instantly.", icon: <Zap className="text-yellow-500" /> },
    { name: "Conferences & Summits", desc: "Meticulous logistics for B2B networking, featuring state-of-the-art AV and seating.", icon: <Mic2 className="text-cyan-600" /> },
    { name: "Exhibitions & Expos", desc: "Floor management and stall design for industry trade shows and public exhibitions.", icon: <Globe className="text-emerald-600" /> },
    { name: "Themed Parties", desc: "Retro, masquerade, or futuristic—we bring any fictional world to life with precision.", icon: <Star className="text-indigo-500" /> },
    { name: "Catering Showcases", desc: "Gourmet culinary experiences ranging from traditional feasts to modern fusion buffets.", icon: <Utensils className="text-orange-500" /> },
    { name: "Fashion Shows", desc: "Runway production, backstage management, and high-fashion lighting choreography.", icon: <Camera className="text-pink-500" /> },
    { name: "Award Ceremonies", desc: "Honoring excellence with red carpet entries and flawless stage coordination.", icon: <ShieldCheck className="text-red-500" /> },
    { name: "Workshops & Seminars", desc: "Productive environments for learning, equipped with interactive digital tools.", icon: <Settings className="text-gray-500" /> },
    { name: "Alumni Meets", desc: "Nostalgic gatherings for educational institutions with a focus on connection.", icon: <Users className="text-sky-500" /> },
    { name: "Roadshows", desc: "Mobile marketing events that take your brand message across multiple cities.", icon: <MapPin className="text-green-500" /> },
    { name: "Charity Fundraisers", desc: "Impactful events that maximize donations through storytelling and gala auctions.", icon: <Heart className="text-red-400" /> },
    { name: "Team Building Retreats", desc: "Experiential outdoor and indoor activities designed to boost employee morale.", icon: <TrendingUp className="text-lime-600" /> },
    { name: "Festival Celebrations", desc: "Culturally rich decorations and events for Diwali, Christmas, Holi, and more.", icon: <Sparkles className="text-yellow-400" /> },
    { name: "Press Conferences", desc: "Strategic setups for media interactions, ensuring your message is heard clearly.", icon: <Mic2 className="text-blue-400" /> },
    { name: "Private Dinners", desc: "Exclusive, ultra-private dining experiences for VIPs and high-net-worth individuals.", icon: <Utensils className="text-stone-600" /> },
  ];

  // The Process (How we do it)
  const processes = [
    { title: "Conceptualization", desc: "We begin by understanding your 'Why'. We draft initial mood boards, color palettes, and thematic directions that align with your vision.", step: "01" },
    { title: "Strategic Planning", desc: "Detailed blueprints including floor plans, 3D renders, and minute-by-minute run sheets are developed by our expert planners.", step: "02" },
    { title: "Budget Optimization", desc: "We provide pragmatic financial solutions, ensuring you get the 'WOW' factor without unnecessary overspending through our vendor network.", step: "03" },
    { title: "Production & Build", desc: "Our in-house production team builds the set from scratch, handling everything from structural safety to aesthetic finishing.", step: "04" },
    { title: "On-Site Execution", desc: "The 'Power of Production' in action. Our floor managers ensure every cue is met and every guest is treated with world-class hospitality.", step: "05" },
    { title: "Post-Event Analysis", desc: "We don't leave when the lights go out. We provide feedback reports, media assets, and debriefing to measure event success.", step: "06" },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- Section Header --- */}
        <div className="text-center mb-20">
          <h4 className="text-blue-600 font-bold uppercase tracking-widest mb-4">Our Expertise</h4>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
            Everything You Imagine, <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Perfectly Executed.</span>
          </h2>
          <p className="max-w-3xl mx-auto text-gray-500 text-lg">
            From the intimate whisper of a private dinner to the thunderous applause of a stadium concert, 
            Gemini Events provides a spectrum of services designed to dazzle, inspire, and deliver 
            flawless results every single time.
          </p>
        </div>

        {/* --- 20-Event Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {eventTypes.map((event, index) => (
            <div key={index} className="group p-8 border border-gray-100 rounded-2xl hover:bg-gray-50 hover:shadow-xl transition-all duration-300">
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {event.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600">{event.name}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {event.desc}
              </p>
            </div>
          ))}
        </div>

        {/* --- The Process / How We Work --- */}
        <div className="bg-gray-900 rounded-[3rem] p-12 md:p-20 text-white">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">The Power of Production</h2>
              <p className="text-gray-400 max-w-xl text-lg font-light">
                We believe that a successful event is 90% preparation and 10% magic. 
                Here is our systematic approach to turning your barren land into an arena.
              </p>
            </div>
            <button className="bg-blue-600 hover:bg-blue-500 px-10 py-4 rounded-full font-bold transition-all whitespace-nowrap">
              START YOUR PROJECT
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
            {processes.map((proc, index) => (
              <div key={index} className="relative pl-12">
                <span className="absolute left-0 top-0 text-5xl font-black text-blue-900/50 leading-none">
                  {proc.step}
                </span>
                <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <CheckCircle2 className="text-blue-500 w-5 h-5" /> {proc.title}
                </h4>
                <p className="text-gray-400 leading-relaxed font-light">
                  {proc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhatWeDo;