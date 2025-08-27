import React, { useState } from 'react';
import {  Palette, Calculator, Sparkles, Zap, ArrowRight, Heart } from 'lucide-react';
import ContactHero from './heroContact';
import PremiumPaintBenefits from '../layout/BenefitCard';
import QualityStandardsSection from '../layout/qualityStandardSection';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    pincode: '',
    description: ''
  });
  

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const message = `*New Paint Service Enquiry* 🎨

👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
📱 *Mobile:* ${formData.mobile}
📍 *Pincode:* ${formData.pincode}
📝 *Description:* ${formData.description}

*Thank you for your enquiry! Our team will contact you soon.* ✨`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // WhatsApp number (replace with your business WhatsApp number)
    const whatsappNumber = "919630009838"; // Replace with actual number
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Optional: Reset form after submission
    setFormData({
      name: '',
      email: '',
      mobile: '',
      pincode: '',
      description: ''
    });
    
    console.log('Form submitted:', formData);
  };



  const calculators = [
    {
      title: "Paint Budget Calculator",
      description: "Get instant estimates for your painting project",
      gradient: "from-yellow-400 to-orange-500",
      icon: <Calculator className="w-8 h-8 text-white" />,
    },
    {
      title: "Waterproofing Calculator", 
      description: "Get an instant estimate for waterproofing needs",
      gradient: "from-blue-500 to-cyan-500",
      icon: <Calculator className="w-8 h-8 text-white" />,
    }
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-green-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-yellow-400/10 to-orange-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Sparkles className="absolute top-20 left-20 w-6 h-6 text-purple-400/30 animate-bounce" style={{ animationDelay: '0.5s' }} />
        <Palette className="absolute top-40 right-32 w-8 h-8 text-pink-400/30 animate-bounce" style={{ animationDelay: '1.5s' }} />
        <Zap className="absolute bottom-32 left-16 w-5 h-5 text-yellow-400/30 animate-bounce" style={{ animationDelay: '2.5s' }} />
        <Heart className="absolute top-60 left-1/4 w-6 h-6 text-red-400/30 animate-bounce" style={{ animationDelay: '3s' }} />
      </div>

      {/* Hero Section */}
      <ContactHero/>


      {/* Brand Showcase Section */}
       {/* Benefits Section */}
     <PremiumPaintBenefits/>

      
      {/* Quality Assurance Section */}
     <QualityStandardsSection/>

      {/* Contact Form Section */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl pb-2 font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6">
              🎯 Need help with your painting needs?
            </h2>
            <p className="text-xl text-gray-700">
              Fill the form below to book a free site evaluation by an Asian Paints Ezy painting service expert.
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/50">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-gray-700 font-bold text-lg flex items-center gap-2">
                    👤 Name*
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 rounded-2xl border-2 border-purple-200 bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-200 transition-all duration-300 text-lg hover:border-purple-300"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-gray-700 font-bold text-lg flex items-center gap-2">
                    📧 Email*
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 rounded-2xl border-2 border-purple-200 bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-200 transition-all duration-300 text-lg hover:border-purple-300"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-gray-700 font-bold text-lg flex items-center gap-2">
                    📱 Mobile*
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 rounded-2xl border-2 border-purple-200 bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-200 transition-all duration-300 text-lg hover:border-purple-300"
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-gray-700 font-bold text-lg flex items-center gap-2">
                    📍 Pincode*
                  </label>
                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 rounded-2xl border-2 border-purple-200 bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-200 transition-all duration-300 text-lg hover:border-purple-300"
                    placeholder="400055"
                    required
                  />
                </div>
              </div>

              {/* Description field taking full width */}
              <div className="space-y-2">
                <label className="text-gray-700 font-bold text-lg flex items-center gap-2">
                  📝 Description*
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-6 py-4 rounded-2xl border-2 border-purple-200 bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-200 transition-all duration-300 text-lg hover:border-purple-300 resize-none"
                  placeholder="Tell us about your painting requirements, room size, preferred colors, or any specific needs..."
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-xl py-4 px-8 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center gap-3 group hover:scale-105 transform"
              >
                <span>🚀 ENQUIRE NOW</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            </form>
          </div>
        </div>
      </div>

  
    </div>
  );
};

export default ContactPage;