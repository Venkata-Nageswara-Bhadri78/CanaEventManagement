import React from 'react';
import { Instagram, Facebook, Youtube, Send, Award, Target, Eye, Users, Calendar, Heart } from 'lucide-react';

const AboutUs = () => {
  // Mock data for easy overriding later
  const stats = [
    { label: "Events Done", value: "2,000+", icon: <Calendar className="w-6 h-6" /> },
    { label: "Years Of Experience", value: "10", icon: <Award className="w-6 h-6" /> },
    { label: "Happy Clients", value: "1,000+", icon: <Users className="w-6 h-6" /> },
    { label: "Expert Professionals", value: "50+", icon: <Heart className="w-6 h-6" /> },
  ];

  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* --- Breadcrumb Header --- */}
      <div className="bg-gray-100 py-12 px-6 text-center">
        <h1 className="text-4xl font-bold uppercase tracking-widest mb-2">About Us</h1>
        <p className="text-gray-500">
          <span className="hover:text-blue-600 cursor-pointer">Home</span> / About Us
        </p>
        <div className="flex justify-center gap-6 mt-6">
          <Instagram className="w-5 h-5 cursor-pointer hover:text-pink-600 transition-colors" />
          <Facebook className="w-5 h-5 cursor-pointer hover:text-blue-700 transition-colors" />
          <Youtube className="w-5 h-5 cursor-pointer hover:text-red-600 transition-colors" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* --- Main Introduction Section --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h4 className="text-blue-600 font-semibold tracking-widest uppercase mb-2">About Gemini Events</h4>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
              An Event Management And <br /> Event Production Company
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Gemini Events is a premier Event Management and Event Production Company. 
                One of our key strengths is <strong>Innovation</strong>, which, coupled with attention 
                to creativeness and unique ideas in different dimensions, helps in creating a magical 
                experience for you. We have successfully orchestrated over 1000+ events across the region, 
                concentrating on every need and occasion, be it big or small.
              </p>
              <p>
                Our hospitality and services match international standards, allowing us to give 
                concreteness to even the most fragmented piece of an idea or concept. By giving 
                meticulous attention to the minute details provided by our clients, we offer the 
                most reliable and pragmatic solutions in the industry.
              </p>
              <p>
                We truly believe in excellence, which drives us to deliver top-class experiences at 
                your doorstep. Our team of highly experienced, world-class, and youthful professionals 
                can turn any vision into a scintillating outcome. We don't just follow trends; 
                we set them.
              </p>
            </div>
            <button className="mt-8 bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-blue-600 transition-all flex items-center gap-2">
              CONTACT US <Send size={18} />
            </button>
          </div>
          
          {/* Placeholder for a high-quality production image */}
          <div className="relative">
            <div className="w-full h-[500px] bg-gray-200 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800" 
                alt="Event Production" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-8 rounded-xl hidden md:block">
              <p className="text-4xl font-bold">10+</p>
              <p className="text-sm uppercase tracking-wider">Years of Magic</p>
            </div>
          </div>
        </div>

        {/* --- Stats Counter --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-y border-gray-100 mb-24">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="flex justify-center mb-4 text-blue-600 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold mb-1">{stat.value}</h3>
              <p className="text-gray-500 uppercase text-xs tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* --- Mission, Vision, Style Section --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* My Style */}
          <div className="bg-gray-50 p-10 rounded-3xl hover:shadow-xl transition-shadow border-b-4 border-blue-600">
            <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center text-white mb-6">
              <Star size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Style</h3>
            <p className="text-gray-600 italic">
              "Gemini: Illuminating Your Dreams with Expertise and Innovation. Our unwavering 
              commitment has established us as a reliable partner. We are dedicated to pushing 
              boundaries through advanced techniques and mastering craftsmanship."
            </p>
            <p className="mt-4 font-bold text-blue-600 uppercase text-sm">" THE POWER OF PRODUCTION "</p>
          </div>

          {/* Mission */}
          <div className="bg-gray-50 p-10 rounded-3xl hover:shadow-xl transition-shadow border-b-4 border-black">
            <div className="bg-black w-12 h-12 rounded-lg flex items-center justify-center text-white mb-6">
              <Target size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Mission</h3>
            <p className="text-gray-600">
              We believe in the transformative power of events. We are dedicated to creating 
              unforgettable experiences that exceed expectations. At our core is an unwavering 
              passion for every unique opportunity to build relationships.
            </p>
            <p className="mt-4 font-bold text-black uppercase text-sm">" THE POWER OF PRODUCTION "</p>
          </div>

          {/* Vision */}
          <div className="bg-gray-50 p-10 rounded-3xl hover:shadow-xl transition-shadow border-b-4 border-blue-600">
            <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center text-white mb-6">
              <Eye size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Vision</h3>
            <p className="text-gray-600">
              We take pride in delivering top-class, innovative shows that dazzle. We take 
              planning to the next level with a holistic approach, from venue collaborations 
              to timely deliverables that last a lifetime.
            </p>
            <p className="mt-4 font-bold text-blue-600 uppercase text-sm">" THE POWER OF PRODUCTION "</p>
          </div>
        </div>

        {/* --- Connect Section --- */}
        <div className="mt-24 bg-blue-900 rounded-3xl p-12 text-white text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Connect With Us</h2>
            <p className="max-w-2xl mx-auto text-blue-100 mb-10 text-lg">
              Turn your event dreams into reality. We are well-experienced in creating spaces 
              from scratch—from empty barren land to top-notch event arenas. 
              Let’s start planning your unforgettable event together.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <button className="bg-white text-blue-900 px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors">
                SEND A MESSAGE
              </button>
              <button className="border-2 border-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-blue-900 transition-all">
                FOLLOW ON INSTAGRAM
              </button>
            </div>
          </div>
          {/* Decorative background circle */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-800 rounded-full opacity-50"></div>
        </div>
      </div>
    </div>
  );
};

// Helper Icon for "Style" section
const Star = ({ size, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export default AboutUs;