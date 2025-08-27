import { Brush, Clock, HelpCircle, Home, Package, Paintbrush, Palette, ShoppingBag } from 'lucide-react';
import React, { useState } from 'react'


const Faqs = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  
 const faqs = [
  {
    question: "Which paint brands do you sell?",
    answer: "We sell top-quality paints from Asian Paints, Berger, Nerolac, Birla Opus, Indigo Paints, and more, ensuring options for every budget and finish preference.",
    icon: <ShoppingBag className="w-6 h-6 text-purple-500" /> // 🛍️ Brands
  },
  {
    question: "Do you provide both interior and exterior paints?",
    answer: "Yes, we stock paints suitable for interior walls, ceilings, and exterior surfaces, including washable emulsions, waterproof coatings, and weather-proof finishes.",
    icon: <Home className="w-6 h-6 text-green-500" /> // 🏠 Home/Exterior
  },
  {
    question: "Do you sell painting tools and accessories?",
    answer: "Yes, we provide a full range of brushes, rollers, putty, primers, masking tapes, and ladders so you get everything under one roof.",
    icon: <Package className="w-6 h-6 text-blue-500" /> // 📦 Tools
  },
  {
    question: "How can I choose the right paint finish for my walls?",
    answer: "We guide you based on your needs: Matte finish for elegance, Satin for subtle shine, Glossy for durability, and Textured for stylish decorative effects.",
    icon: <Brush className="w-6 h-6 text-red-500" /> // 🖌️ Finish
  },
  {
    question: "Do you provide painting services along with paint supply?",
    answer: "Yes, we connect you with professional painters for wall preparation, priming, and painting, ensuring a hassle-free experience.",
    icon: <Paintbrush className="w-6 h-6 text-yellow-500" /> // 🎨 Services
  }
];



  return (
    <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-6">
              ❓ FAQs
            </h2>
            <p className="text-xl text-gray-700">
              Frequently asked questions about our services and products
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-white/50 hover:shadow-3xl transition-all duration-300"
              >
                <button
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-purple-50 transition-colors duration-300"
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                >
                  <div className="flex items-center space-x-4">
                    <span className="text-2xl">{faq.icon}</span>
                    <span className="text-lg font-bold text-gray-900 pr-4">{faq.question}</span>
                  </div>
                  <div
                    className={`transform transition-transform duration-300 ${activeFaq === index ? 'rotate-180' : ''}`}
                  >
                    <HelpCircle className="w-6 h-6 text-purple-600" />
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  )
}

export default Faqs