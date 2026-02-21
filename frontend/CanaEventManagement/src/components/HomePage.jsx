import React from 'react';
import { 
  ArrowRight, Play, Star, Users, MapPin, 
  ChevronRight, Calendar, Zap, Heart, Trophy 
} from 'lucide-react';

const HomePage = () => {
  const highlights = [
    { title: "Weddings", count: "800+", icon: <Heart className="text-rose-500" /> },
    { title: "Corporate", count: "500+", icon: <Zap className="text-blue-500" /> },
    { title: "Concerts", count: "300+", icon: <Trophy className="text-amber-500" /> },
    { title: "Private", count: "400+", icon: <Star className="text-purple-500" /> },
  ];

  return (
    <div className="bg-white overflow-x-hidden">
      
      {/* --- HERO SECTION: The Master Impression --- */}
      <section className="relative min-h-[90vh] flex items-center bg-black text-white">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1600" 
            className="w-full h-full object-cover opacity-50" 
            alt="Main Event"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 px-4 py-2 rounded-full text-blue-400 text-sm font-bold tracking-widest uppercase">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </span>
              India's Premier Production House
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black leading-none uppercase italic">
              Dreams <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                Redefined.
              </span>
            </h1>
            
            <p className="text-gray-300 text-xl max-w-lg leading-relaxed">
              We don't just organize events; we engineer emotions. From barren lands to top-notch arenas, 
              experience the "Power of Production" that has dazzled over 1,000+ clients across India.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-blue-600 hover:bg-blue-500 px-10 py-5 rounded-full font-black flex items-center justify-center gap-3 transition-all text-lg group">
                START PLANNING <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 px-10 py-5 rounded-full font-black flex items-center justify-center gap-3 transition-all text-lg">
                WATCH REEL <Play size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- QUICK STATS TICKER --- */}
      <div className="bg-gray-50 py-10 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 group">
                <div className="p-4 bg-white rounded-2xl shadow-sm group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-2xl font-black text-gray-900 leading-none">{item.count}</h4>
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mt-1">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- ABOUT PREVIEW: The Philosophy --- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=400" className="rounded-3xl mt-12 shadow-xl" alt="Concert" />
              <img src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=400" className="rounded-3xl shadow-xl" alt="Wedding" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-8 rounded-[2rem] shadow-2xl">
              <p className="text-4xl font-black">10+</p>
              <p className="text-sm uppercase font-bold tracking-widest">Years of Excellence</p>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-blue-600 font-bold uppercase tracking-widest">About Dreambright</h4>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
              An Event Management & <br />Production Powerhouse.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed italic border-l-4 border-blue-600 pl-6">
              "We take pride in delivering top-class, innovative shows that dazzle. 
              Our holistic approach takes event planning to the next level."
            </p>
            <p className="text-gray-600 leading-relaxed">
              Dreambright India specializes in turning fragmented ideas into concrete reality. 
              With a youthful team of professionals and world-class technology, we set trends 
              that inspire beyond expectations.
            </p>
            <button className="flex items-center gap-2 font-black text-gray-900 group">
              LEARN MORE ABOUT US <ChevronRight size={20} className="text-blue-600 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* --- SERVICES PREVIEW: What We Do --- */}
      <section className="bg-gray-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter">Our Universe</h2>
              <p className="text-gray-400 mt-4 max-w-xl">
                From luxury marriages to high-voltage college fests and corporate summits, we handle 20+ types of events with surgical precision.
              </p>
            </div>
            <button className="border-2 border-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-black transition-all">
              EXPLORE ALL SERVICES
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Wedding Card */}
            <div className="group relative h-[450px] overflow-hidden rounded-[2.5rem] bg-gray-800">
              <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=600" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" alt="Wedding" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <h3 className="text-2xl font-bold mb-2">Grand Marriages</h3>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">Royal themes, international catering, and flawless hospitality.</p>
              </div>
            </div>

            {/* Corporate Card */}
            <div className="group relative h-[450px] overflow-hidden rounded-[2.5rem] bg-gray-800">
              <img src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=600" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" alt="Corporate" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <h3 className="text-2xl font-bold mb-2">Corporate Galas</h3>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">Award nights, annual meets, and sophisticated branding.</p>
              </div>
            </div>

            {/* College Fest Card */}
            <div className="group relative h-[450px] overflow-hidden rounded-[2.5rem] bg-gray-800">
              <img src="https://images.unsplash.com/photo-1459749411177-042180ce673c?auto=format&fit=crop&q=80&w=600" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" alt="College Fest" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <h3 className="text-2xl font-bold mb-2">College Fests</h3>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">Celebrity concerts, technical symposia, and massive crowds.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CALL TO ACTION: The Final Hook --- */}
      <section className="py-24 bg-blue-600 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 border-8 border-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 border-8 border-white rounded-full"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-black mb-8 italic uppercase tracking-tighter">
            Ready to Build Your Arena?
          </h2>
          <p className="text-xl mb-12 text-blue-100">
            From empty barren land to a top-notch event arena, let’s start planning 
            your unforgettable event today. Our founder is waiting to review your vision.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-black text-white px-12 py-5 rounded-full font-black text-lg hover:scale-105 transition-transform">
              SUBMIT ENQUIRY
            </button>
            <button className="bg-white text-blue-600 px-12 py-5 rounded-full font-black text-lg hover:scale-105 transition-transform">
              CONTACT FOUNDER
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;