import React, { useState } from 'react';
import { Check, Shield, Sparkles, Award, ChevronRight } from 'lucide-react';
import bergerSilkImage from "../../assets/silk-glamour-matt.png";
import duraLifeImage from "../../assets/ultima-protek-duralife.png";
import powerFlexxImage from "../../assets/800-dulux-weathershield-powerflexx-brilliant-white-4-lt-16456778694485-Photoroom.png";
import kashmirHighSheenImage from "../../assets/Nerolac-Impressions-Kashmir-High-Sheen_Cheatshot_R1-Photoroom.png";
import { Button } from '../ui/button';

const PaintBrandCard = ({ brand, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`group relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden ${
        isHovered ? 'transform -translate-y-3 scale-[1.02]' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Premium border gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-0.5">
        <div className="w-full h-full bg-white/95 backdrop-blur-sm rounded-2xl"></div>
      </div>
      
      <div className="relative p-6 z-10">
        {/* Product Image */}
        <div className="relative w-full h-40 mb-4 rounded-xl overflow-hidden">
          <img 
            src={brand.imageUrl}
            alt={`${brand.name} paint products`}
            className={`w-full h-full object-contain bg-gradient-to-br ${brand.bgGradient} transition-all duration-700 ${
              isHovered ? 'scale-105 rotate-2 brightness-110' : 'scale-100 rotate-0 brightness-100'
            }`}
          />
          <div className={`absolute inset-0 bg-gradient-to-t from-pink-900/10 via-transparent to-white/5 transition-all duration-500 ${
            isHovered ? 'opacity-60 scale-105' : 'opacity-30 scale-100'
          }`}></div>
          
          {/* Floating sparkle effects with staggered animation */}
          <Sparkles className={`absolute top-2 right-2 h-4 w-4 text-white/90 transition-all duration-700 ${
            isHovered ? 'opacity-100 rotate-45 scale-125 translate-x-1 -translate-y-1' : 'opacity-60 rotate-0 scale-90'
          }`} />
          
          {/* Additional animated sparkles on hover */}
          <div className={`absolute inset-0 transition-opacity duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}>
            <Sparkles className="absolute top-4 left-4 h-3 w-3 text-white/70 animate-pulse" style={{ animationDelay: '0s' }} />
            <Sparkles className="absolute bottom-4 right-4 h-2 w-2 text-white/60 animate-pulse" style={{ animationDelay: '0.3s' }} />
            <Sparkles className="absolute top-1/2 left-6 h-2 w-2 text-white/50 animate-pulse" style={{ animationDelay: '0.6s' }} />
          </div>
          
          {/* Shimmer effect on hover */}
          <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-1000 ${
            isHovered ? 'translate-x-full opacity-100' : '-translate-x-full opacity-0'
          }`} style={{ transform: `translateX(${isHovered ? '100%' : '-100%'}) skew(-20deg)` }}></div>
        </div>
        
        {/* Brand Info */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold text-xl text-gray-800 group-hover:text-pink-700 transition-colors duration-300">
              {brand.name}
            </h3>
            <Award className={`h-5 w-5 text-pink-500 transition-all duration-300 ${
              isHovered ? 'rotate-12 scale-110' : ''
            }`} />
          </div>
          
          <h4 className="font-semibold text-rose-600 mb-2 text-sm uppercase tracking-wide">
            {brand.product}
          </h4>
          
          <p className="text-pink-600 font-semibold mb-4 text-sm italic">
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
          <div className={`flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-pink-50 to-rose-50 transition-all duration-300 ${
            isHovered ? 'from-pink-100 to-rose-100 transform scale-105' : ''
          }`}>
            <span className="text-sm font-semibold text-pink-700">
              Warranty: {brand.warranty}
            </span>
            <Shield className={`h-5 w-5 text-pink-500 transition-all duration-300 ${
              isHovered ? 'rotate-6 scale-110' : ''
            }`} />
          </div>
        </div>
        
        {/* Hover overlay effect */}
        <div className={`absolute inset-0 bg-gradient-to-br from-pink-500/5 to-rose-500/5 rounded-2xl transition-opacity duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}></div>
      </div>
    </div>
  );
};

const PremiumPaintBrands = () => {
   const paintBrands = [
    {
      name: "Berger Silk Glamour Matt",
      product: "Luxury Interior Emulsion",
      tagline: "Smooth elegance with a velvety finish",
      imageUrl: bergerSilkImage,
      bgGradient: "from-purple-100 to-blue-100",
      warranty: "10 Years",
      features: [
        "Velvety smooth matte finish",
        "Superior stain resistance",
        "Advanced anti-fungal protection",
        "Rich colour depth"
      ]
    },
    {
      name: "Apex Ultima Protek Duralife",
      product: "Premium Exterior Emulsion",
      tagline: "India's most trusted weatherproof shield",
      imageUrl: duraLifeImage,
      bgGradient: "from-gray-100 to-slate-100",
      warranty: "15 Years",
      features: [
        "Heat & UV resistant",
        "Waterproofing technology",
        "Crack-bridging formula",
        "Anti-algae & anti-fungal"
      ]
    },
    {
      name: "Weather Shield Power Flex",
      product: "Flexible Exterior Coating",
      tagline: "Maximum protection with lasting flexibility",
      imageUrl: powerFlexxImage,
      bgGradient: "from-yellow-100 to-orange-100",
      warranty: "12 Years",
      features: [
        "Flexible film for crack resistance",
        "Long-lasting colour retention",
        "UV & moisture protection",
        "Dirt-resistant coating"
      ]
    },
    {
      name: "Impression Kashmir High Sheen",
      product: "Luxury Interior Finish",
      tagline: "Kashmiri elegance for your walls",
      imageUrl: kashmirHighSheenImage,
      bgGradient: "from-green-100 to-teal-100",
      warranty: "8 Years",
      features: [
        "Rich high-sheen appearance",
        "Excellent washability",
        "Soft-touch smoothness",
        "Superior stain resistance"
      ]
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100"></div>
      
      {/* Animated floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large floating orbs */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-pink-200/30 to-rose-300/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-gradient-to-br from-rose-200/30 to-pink-300/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '3s', animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-br from-pink-300/20 to-rose-200/20 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }}></div>
        
        {/* Smaller animated dots */}
        <div className="absolute top-1/4 right-1/3 w-4 h-4 bg-pink-400/40 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '2s' }}></div>
        <div className="absolute top-2/3 left-1/3 w-3 h-3 bg-rose-400/40 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '2.5s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-pink-500/40 rounded-full animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3s' }}></div>
        <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-rose-300/40 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '2.2s' }}></div>
        
        {/* Subtle moving waves */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-300/30 to-transparent animate-pulse" style={{ animationDuration: '6s' }}></div>
          <div className="absolute top-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-rose-300/30 to-transparent animate-pulse" style={{ animationDuration: '4s', animationDelay: '2s' }}></div>
          <div className="absolute bottom-10 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-200/30 to-transparent animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with animation */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center p-2 bg-pink-100/80 backdrop-blur-sm rounded-full mb-6 border border-pink-200/50">
            <Sparkles className="h-6 w-6 text-pink-600 mr-2" />
            <span className="text-pink-700 font-semibold text-sm uppercase tracking-wide">Premium Quality</span>
          </div>
          
          <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl text-gray-800 mb-6 leading-tight">
            Premium Paint
            <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent"> Brands</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We partner with the world's leading paint manufacturers to bring you 
            <span className="font-semibold text-pink-600"> unmatched quality</span> and 
            <span className="font-semibold text-rose-600"> innovation</span>
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

      <div className='flex justify-center items-center mt-12 relative z-10'>
        <a href="/products">
        <Button className='btn-hero py-6 px-6 text-md flex justify-center items-center font-medium bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300'>
            View All Products <ChevronRight className='h-10 mt-1 w-10'/>
        </Button>
        </a>
      </div>
    </section>
  );
};

export default PremiumPaintBrands;