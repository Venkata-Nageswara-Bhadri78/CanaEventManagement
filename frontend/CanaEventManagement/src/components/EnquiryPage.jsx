import React, { useState } from 'react';
import { Instagram, Facebook, Youtube, Send, MapPin, Calendar, MessageSquare, Phone, User, Sparkles } from 'lucide-react';

const EnquiryPage = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    email: '',
    eventVenue: '',
    eventDate: '',
    message: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for backend API call will go here
    console.log("Form Data Submitted:", formData);
    alert("Thank you! Your enquiry has been sent to our founder. We will get back to you shortly.");
  };

  return (
    <div className="bg-white min-h-screen font-sans text-gray-900">
      {/* --- Breadcrumb Header --- */}
      <div className="bg-gray-50 py-16 px-6 text-center border-b border-gray-100">
        <h1 className="text-4xl font-black uppercase tracking-tighter mb-4 italic">ENQUIRY</h1>
        <p className="text-gray-500 font-medium">
          <span className="hover:text-blue-600 cursor-pointer transition-colors">Home</span> / Enquiry
        </p>
        <div className="flex justify-center gap-8 mt-8">
          <a href="#" className="flex items-center gap-2 text-sm font-bold hover:text-pink-600 transition-all">
            <Instagram size={18} /> INSTAGRAM
          </a>
          <a href="#" className="flex items-center gap-2 text-sm font-bold hover:text-blue-700 transition-all">
            <Facebook size={18} /> FACEBOOK
          </a>
          <a href="#" className="flex items-center gap-2 text-sm font-bold hover:text-red-600 transition-all">
            <Youtube size={18} /> YOUTUBE
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* --- Left Side: Branding & Info --- */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-5xl font-extrabold mb-6 leading-tight">
                Let’s Create <br />
                <span className="text-blue-600 italic">Something Iconic.</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Whether you are planning a massive stadium concert or an intimate luxury wedding, 
                our production team is ready to bring your vision to life. Fill out the details, 
                and our founder will review your requirements personally.
              </p>
            </div>

            <div className="p-8 bg-blue-900 rounded-3xl text-white relative overflow-hidden">
              <Sparkles className="absolute -right-4 -top-4 w-24 h-24 text-blue-800 opacity-50" />
              <h3 className="text-xl font-bold mb-2 relative z-10">“THE POWER OF PRODUCTION”</h3>
              <p className="text-blue-200 text-sm relative z-10">Follow us for behind-the-scenes content of our latest 2,000+ successful events.</p>
              <button className="mt-6 bg-white text-blue-900 px-6 py-2 rounded-full font-bold text-sm hover:bg-gray-100 transition-all">
                FOLLOW ON INSTAGRAM
              </button>
            </div>
          </div>

          {/* --- Right Side: Enquiry Form --- */}
          <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl shadow-blue-100 border border-gray-50">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              Get Enquiry <div className="h-1 w-12 bg-blue-600 rounded-full"></div>
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* First Name */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">First Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input 
                      type="text" name="firstName" value={formData.firstName} onChange={handleChange} required
                      placeholder="John"
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Last Name */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Last Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input 
                      type="text" name="lastName" value={formData.lastName} onChange={handleChange} required
                      placeholder="Doe"
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Mobile Number */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Mobile Number</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input 
                      type="tel" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} required
                      placeholder="+91 00000 00000"
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Email Address</label>
                  <div className="relative">
                    <Send className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input 
                      type="email" name="email" value={formData.email} onChange={handleChange} required
                      placeholder="john@example.com"
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Event Venue */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Event Venue</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input 
                      type="text" name="eventVenue" value={formData.eventVenue} onChange={handleChange} required
                      placeholder="City, State or Specific Hotel"
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Event Date */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Event Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input 
                      type="date" name="eventDate" value={formData.eventDate} onChange={handleChange} required
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Your Message / Requirements</label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 text-gray-400" size={18} />
                  <textarea 
                    name="message" value={formData.message} onChange={handleChange} required
                    rows="5"
                    placeholder="Tell us about your dream event..."
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all resize-none"
                  ></textarea>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-black text-white py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-blue-600 transition-all flex justify-center items-center gap-3 group"
              >
                SEND ENQUIRY NOW 
                <Send size={20} className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

/*
  =============================================================================
  BACKEND INTEGRATION NOTES (User Variables Mapping)
  =============================================================================
  The following variables are captured in the 'formData' state object and 
  ready for backend processing:

  1. formData.firstName    -> (String) User's given name
  2. formData.lastName     -> (String) User's family name
  3. formData.mobileNumber -> (String/Number) User's contact phone
  4. formData.email        -> (String) User's email for reply/confirmation
  5. formData.eventVenue   -> (String) Physical location for the event
  6. formData.eventDate    -> (Date String) Target date for the event
  7. formData.message      -> (String) Detailed requirements or special requests

  To connect to a backend (Node.js, Firebase, etc.):
  - Use an 'onSubmit' function to send these variables via an Axios or Fetch POST request.
  - Ensure the input fields are validated before sending.
  =============================================================================
*/

export default EnquiryPage;