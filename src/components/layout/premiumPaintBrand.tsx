import React, { useState } from 'react';
import { Check, Shield, Sparkles, Award } from 'lucide-react';

const AnimatedPaintBucket = ({ color, isHovered }) => (
  <div className="relative w-full h-32 flex items-center justify-center overflow-hidden">
    <div className={`absolute inset-0 bg-gradient-to-br ${color} rounded-xl transition-all duration-500 ${
      isHovered ? 'scale-110 rotate-3' : 'scale-100 rotate-0'
    }`}>
      <div className="absolute inset-0 bg-white/10 rounded-xl"></div>
      <div className={`absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl transition-opacity duration-300 ${
        isHovered ? 'opacity-30' : 'opacity-10'
      }`}></div>
    </div>
    
    {/* Animated paint bucket */}
    <div className={`relative z-10 transition-all duration-500 ${
      isHovered ? 'scale-125 -translate-y-2' : 'scale-100'
    }`}>
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="drop-shadow-lg">
        <path 
          d="M12 16h24v20c0 2.2-1.8 4-4 4H16c-2.2 0-4-1.8-4-4V16z" 
          fill="white" 
          className="opacity-90"
        />
        <path 
          d="M10 12h28c1.1 0 2 .9 2 2v2H8v-2c0-1.1.9-2 2-2z" 
          fill="white"
          className="opacity-95"
        />
        <path 
          d="M20 8h8v4h-8V8z" 
          fill="white"
          className="opacity-80"
        />
        <circle 
          cx="24" 
          cy="26" 
          r="3" 
          fill="currentColor" 
          className={`text-white/60 transition-all duration-700 ${
            isHovered ? 'animate-pulse' : ''
          }`}
        />
      </svg>
    </div>
    
    {/* Floating paint drops animation */}
    <div className={`absolute inset-0 transition-opacity duration-500 ${
      isHovered ? 'opacity-100' : 'opacity-0'
    }`}>
      <div className="absolute top-4 left-4 w-2 h-2 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
      <div className="absolute top-6 right-6 w-1.5 h-1.5 bg-white/30 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      <div className="absolute bottom-8 left-8 w-1 h-1 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
    </div>
    
    {/* Sparkle effects */}
    <Sparkles className={`absolute top-2 right-2 h-4 w-4 text-white/60 transition-all duration-500 ${
      isHovered ? 'opacity-100 rotate-12 scale-110' : 'opacity-0 rotate-0 scale-90'
    }`} />
  </div>
);

const PaintBrandCard = ({ brand, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden ${
        isHovered ? 'transform -translate-y-3 scale-[1.02]' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Premium border gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-gold-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-0.5">
        <div className="w-full h-full bg-white rounded-2xl"></div>
      </div>
      
      <div className="relative p-6 z-10">
        {/* Animated Paint Bucket */}
        <AnimatedPaintBucket color={brand.color} isHovered={isHovered} />
        
        {/* Brand Info */}
        <div className="mt-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold text-xl text-gray-800 group-hover:text-purple-700 transition-colors duration-300">
              {brand.name}
            </h3>
            <Award className={`h-5 w-5 text-gold-500 transition-all duration-300 ${
              isHovered ? 'rotate-12 scale-110' : ''
            }`} />
          </div>
          
          <h4 className="font-semibold text-purple-600 mb-2 text-sm uppercase tracking-wide">
            {brand.product}
          </h4>
          
          <p className="text-gold-600 font-semibold mb-4 text-sm italic">
            "{brand.tagline}"
          </p>
          
          {/* Features with staggered animation */}
          <div className="space-y-2 mb-4">
            {brand.features.map((feature, i) => (
              <div 
                key={i} 
                className={`flex items-center text-sm text-gray-600 transition-all duration-300 ${
                  isHovered ? 'translate-x-1 text-gray-700' : ''
                }`}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <Check className={`h-4 w-4 text-green-500 mr-3 flex-shrink-0 transition-all duration-300 ${
                  isHovered ? 'scale-110 text-green-600' : ''
                }`} />
                <span>{feature}</span>
              </div>
            ))}
          </div>
          
          {/* Warranty Badge */}
          <div className={`flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-purple-50 to-blue-50 transition-all duration-300 ${
            isHovered ? 'from-purple-100 to-blue-100 transform scale-105' : ''
          }`}>
            <span className="text-sm font-semibold text-purple-700">
              Warranty: {brand.warranty}
            </span>
            <Shield className={`h-5 w-5 text-gold-500 transition-all duration-300 ${
              isHovered ? 'rotate-6 scale-110' : ''
            }`} />
          </div>
        </div>
        
        {/* Hover overlay effect */}
        <div className={`absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-2xl transition-opacity duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}></div>
      </div>
    </div>
  );
};

const PremiumPaintBrands = () => {
  const paintBrands = [
    {
      name: "Royal Elite",
      product: "Premium Latex",
      tagline: "Where luxury meets durability",
      color: "from-purple-600 to-blue-600",
      warranty: "25 Years",
      features: [
        "Zero VOC formula",
        "Stain resistant finish",
        "One-coat coverage",
        "Fade resistant"
      ]
    },
    {
      name: "Platinum Pro",
      product: "Professional Grade",
      tagline: "Trusted by professionals",
      color: "from-gray-700 to-gray-900",
      warranty: "20 Years",
      features: [
        "Superior adhesion",
        "Quick dry formula",
        "Mold & mildew resistant",
        "Easy application"
      ]
    },
    {
      name: "Golden Touch",
      product: "Designer Series",
      tagline: "Artistry in every drop",
      color: "from-yellow-500 to-orange-600",
      warranty: "15 Years",
      features: [
        "Metallic finishes",
        "Texture options",
        "Color matching",
        "Premium pigments"
      ]
    },
    {
      name: "Emerald Shield",
      product: "Eco-Friendly",
      tagline: "Green technology, premium results",
      color: "from-green-500 to-teal-600",
      warranty: "30 Years",
      features: [
        "100% natural ingredients",
        "Carbon neutral",
        "Breathable formula",
        "Allergen-free"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with animation */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center p-2 bg-purple-100 rounded-full mb-6">
            <Sparkles className="h-6 w-6 text-purple-600 mr-2" />
            <span className="text-purple-700 font-semibold text-sm uppercase tracking-wide">Premium Quality</span>
          </div>
          
          <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl text-gray-800 mb-6 leading-tight">
            Premium Paint
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Brands</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We partner with the world's leading paint manufacturers to bring you 
            <span className="font-semibold text-purple-600"> unmatched quality</span> and 
            <span className="font-semibold text-blue-600"> innovation</span>
          </p>
        </div>

        {/* Cards Grid with staggered animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {paintBrands.map((brand, index) => (
            <div 
              key={index} 
              className="animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <PaintBrandCard brand={brand} index={index} />
            </div>
          ))}
        </div>

      </div>
 
    </section>
  );
};

export default PremiumPaintBrands;