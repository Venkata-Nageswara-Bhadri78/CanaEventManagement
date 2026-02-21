import React from 'react';
import { Linkedin, Twitter, Mail, Quote, Award, Target, BookOpen, ExternalLink } from 'lucide-react';

const FounderProfile = () => {
  // Array for achievements/milestones to make the profile look "enlarged" and detailed
  const achievements = [
    { year: "2014", detail: "Founded Gemini Events with a vision to redefine production standards." },
    { year: "2018", detail: "Awarded 'Young Entrepreneur of the Year' in the Event Management category." },
    { year: "2021", detail: "Expanded operations to 15+ states across India, managing 500+ large-scale concerts." },
    { year: "2023", detail: "Pioneered Sustainable Event Production techniques now used across the industry." }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* --- Breadcrumb / Header --- */}
      <div className="py-12 px-6 border-b border-gray-100 text-center">
        <h1 className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-2">Leadership</h1>
        <h2 className="text-4xl font-extrabold text-gray-900">Meet Our Founder</h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* --- LEFT COLUMN: Image & Quick Info --- */}
          <div className="lg:col-span-5 sticky top-8">
            <div className="relative group">
              <div className="absolute -inset-4 bg-blue-100 rounded-2xl transform -rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" 
                alt="Founder" 
                className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/5]"
              />
            </div>
            
            <div className="mt-8 text-center lg:text-left">
              <h3 className="text-3xl font-bold text-gray-900">Alex J. Gemini</h3>
              <p className="text-blue-600 font-medium text-lg uppercase tracking-wide">Chief Visionary & Founder</p>
              
              <div className="flex justify-center lg:justify-start gap-4 mt-6">
                <a href="#" className="p-3 bg-gray-100 rounded-full hover:bg-blue-600 hover:text-white transition-all">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="p-3 bg-gray-100 rounded-full hover:bg-sky-500 hover:text-white transition-all">
                  <Twitter size={20} />
                </a>
                <a href="#" className="p-3 bg-gray-100 rounded-full hover:bg-red-500 hover:text-white transition-all">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: Detailed Biography --- */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Short Bio Intro */}
            <section>
              <Quote className="text-blue-200 w-12 h-12 mb-4" />
              <p className="text-2xl font-medium text-gray-800 leading-relaxed italic">
                "Events are not just gatherings; they are living, breathing moments of human connection that require 
                both technical precision and artistic soul."
              </p>
            </section>

            {/* Detailed Narrative */}
            <section className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <h4 className="text-xl font-bold text-gray-900 uppercase tracking-tight">The Journey</h4>
              <p>
                With over a decade of experience in the creative arts and technical production, Alex J. Gemini 
                established Gemini Events with the belief that "The Power of Production" could transform 
                ordinary spaces into extraordinary memories. Starting with small-scale college festivals, 
                Alex's eye for innovation quickly caught the attention of corporate giants and high-profile clients.
              </p>
              <p>
                Alex's philosophy centers on the "Zero-Failure Policy." Every lighting cue, every floral 
                arrangement, and every guest experience is personally vetted through a lens of perfectionism. 
                His leadership style is a unique blend of youthful energy and world-class hospitality standards, 
                fostering a culture where "Impossible" is just a starting point for brainstorming.
              </p>
              <p>
                Beyond business, Alex is a frequent speaker at national event tech summits and is 
                passionate about mentoring the next generation of event architects. He believes that the 
                future of the industry lies in the seamless integration of AI, sustainable materials, 
                and raw human emotion.
              </p>
            </section>

            {/* Core Values / Philosophy Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors">
                <Target className="text-blue-600 mb-3" />
                <h5 className="font-bold text-gray-900 mb-2">Strategic Precision</h5>
                <p className="text-sm">Meticulous planning that accounts for every variable from logistics to weather.</p>
              </div>
              <div className="p-6 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors">
                <BookOpen className="text-blue-600 mb-3" />
                <h5 className="font-bold text-gray-900 mb-2">Lifelong Learning</h5>
                <p className="text-sm">Constantly evolving with global trends to bring international standards to India.</p>
              </div>
            </div>

            {/* Professional Milestones Timeline */}
            <section className="pt-8 border-t border-gray-100">
              <h4 className="text-xl font-bold text-gray-900 uppercase tracking-tight mb-8">Professional Milestones</h4>
              <div className="space-y-8">
                {achievements.map((item, index) => (
                  <div key={index} className="flex gap-6 group">
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 rounded-full bg-blue-600 group-hover:scale-150 transition-transform"></div>
                      <div className="w-0.5 h-full bg-gray-100"></div>
                    </div>
                    <div className="pb-8">
                      <span className="text-sm font-bold text-blue-600">{item.year}</span>
                      <p className="text-gray-700 mt-1">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Call to Action */}
            <div className="bg-gray-900 text-white p-10 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="text-2xl font-bold mb-2">Work Directly With Alex</h4>
                <p className="text-gray-400">For exclusive weddings and corporate gala events.</p>
              </div>
              <button className="whitespace-nowrap bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full font-bold flex items-center gap-2 transition-all">
                BOOK A CONSULTATION <ExternalLink size={18} />
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderProfile;