import React, { useState, useEffect, useRef } from 'react';
import { Shield, Droplets, Palette, Clock, Leaf, Award, Sparkles, Star } from 'lucide-react';

const AnimatedIcon = ({ IconComponent, isVisible, delay = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`relative w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-pink-400 via-rose-400 to-pink-600 flex items-center justify-center group cursor-pointer transition-all duration-700 ${
        isVisible ? 'animate-bounce-in scale-100 opacity-100' : 'scale-0 opacity-0'
      } ${isHovered ? 'scale-125 rotate-6' : 'scale-100 hover:scale-110'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Outer glow effect */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-400 to-rose-600 transition-all duration-500 ${
        isHovered ? 'scale-150 opacity-30 blur-xl' : 'scale-100 opacity-0'
      }`}></div>
      
      {/* Inner shadow */}
      <div className="absolute inset-1 rounded-xl bg-gradient-to-t from-black/20 to-transparent"></div>
      
      {/* Icon */}
      <IconComponent className={`h-9 w-9 text-white relative z-10 transition-all duration-300 ${
        isHovered ? 'scale-110 rotate-12' : 'scale-100'
      }`} />
      
      {/* Sparkle effects */}
      <div className={`absolute -top-1 -right-1 transition-all duration-300 ${
        isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
      }`}>
        <Star className="h-4 w-4 text-pink-200 animate-pulse" />
      </div>
      
      <div className={`absolute -bottom-1 -left-1 transition-all duration-500 ${
        isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
      }`}>
        <Sparkles className="h-3 w-3 text-pink-200 animate-spin" />
      </div>
      
      {/* Floating particles */}
      <div className={`absolute inset-0 transition-opacity duration-500 ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="absolute top-2 left-2 w-1 h-1 bg-white/60 rounded-full animate-ping" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-4 right-3 w-1.5 h-1.5 bg-white/40 rounded-full animate-ping" style={{ animationDelay: '0.3s' }}></div>
        <div className="absolute bottom-3 left-4 w-1 h-1 bg-white/50 rounded-full animate-ping" style={{ animationDelay: '0.6s' }}></div>
      </div>
    </div>
  );
};

const BenefitCard = ({ benefit, index, isVisible }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`text-center group relative transition-all duration-700 ${
        isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-10'
      } ${isHovered ? 'transform -translate-y-2' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 200}ms` }}
    >
      {/* Background card effect */}
      <div className={`absolute inset-0 -m-4 rounded-3xl bg-gradient-to-br from-white/10 to-pink-100/20 backdrop-blur-sm border border-pink-200/30 transition-all duration-500 ${
        isHovered ? 'opacity-100 scale-105 shadow-xl' : 'opacity-0 scale-100'
      }`}></div>
      
      {/* Content */}
      <div className="relative z-10 p-4">
        <AnimatedIcon 
          IconComponent={benefit.icon} 
          isVisible={isVisible} 
          delay={index * 200} 
        />
        
        <h3 className={`text-2xl font-bold text-gray-800 mb-4 transition-all duration-300 ${
          isHovered ? 'text-pink-700 scale-105' : ''
        }`}>
          {benefit.title}
        </h3>
        
        <p className={`text-gray-600 leading-relaxed transition-all duration-300 ${
          isHovered ? 'text-gray-700 scale-[1.02]' : ''
        }`}>
          {benefit.description}
        </p>
        
        {/* Hover indicator */}
        <div className={`mt-4 h-1 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full transition-all duration-500 ${
          isHovered ? 'w-16 opacity-100' : 'w-0 opacity-0'
        } mx-auto`}></div>
      </div>
      
      {/* Floating background elements */}
      <div className={`absolute top-0 left-0 w-full h-full overflow-hidden rounded-3xl transition-opacity duration-500 ${
        isHovered ? 'opacity-20' : 'opacity-0'
      }`}>
        <div className="absolute top-4 left-4 w-2 h-2 bg-pink-400/30 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-8 right-6 w-1.5 h-1.5 bg-rose-400/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-6 left-8 w-1 h-1 bg-pink-300/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
    </div>
  );
};

const PremiumPaintBenefits = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      icon: Shield,
      title: "Long-Lasting Protection",
      description: "Our premium formulas provide superior protection against weather, UV rays, and daily wear, ensuring your surfaces look beautiful for years to come."
    },
    {
      icon: Droplets,
      title: "Superior Coverage",
      description: "Advanced pigment technology delivers exceptional coverage with fewer coats, saving you time and money while achieving perfect results."
    },
    {
      icon: Palette,
      title: "Endless Color Options",
      description: "Choose from thousands of premium colors or create custom shades with our professional color matching service for truly unique results."
    },
    {
      icon: Clock,
      title: "Quick Dry Formula",
      description: "Fast-drying technology means less waiting time between coats and quicker project completion without compromising quality."
    },
    {
      icon: Leaf,
      title: "Eco-Friendly",
      description: "Low-VOC and zero-emission formulas ensure healthier indoor air quality while being environmentally responsible."
    },
    {
      icon: Award,
      title: "Professional Grade",
      description: "Trusted by professional painters and contractors worldwide for consistent performance and exceptional finish quality."
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
    >
      {/* Animated background with different pink variations */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-white to-rose-100"></div>
      
      {/* Diagonal animated stripes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-full h-full">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-300/40 to-transparent transform rotate-12 animate-pulse" style={{ animationDuration: '4s' }}></div>
          <div className="absolute top-10 left-0 w-full h-px bg-gradient-to-r from-transparent via-rose-300/40 to-transparent transform rotate-12 animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }}></div>
          <div className="absolute top-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-200/40 to-transparent transform rotate-12 animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }}></div>
        </div>
      </div>
      
      {/* Animated geometric shapes */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-32 left-20 w-32 h-32 bg-gradient-to-br from-pink-300/30 to-rose-400/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
        <div className="absolute bottom-32 right-20 w-48 h-48 bg-gradient-to-br from-rose-300/30 to-pink-400/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-pink-400/30 to-rose-300/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
        <div className="absolute top-1/4 right-1/3 w-36 h-36 bg-gradient-to-br from-rose-200/30 to-pink-300/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '3s', animationDuration: '3.5s' }}></div>
      </div>
      
      {/* Scattered floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/6 w-3 h-3 bg-pink-400/50 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
        <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-rose-400/50 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '2.5s' }}></div>
        <div className="absolute top-1/3 right-1/6 w-2.5 h-2.5 bg-pink-300/50 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '4s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-rose-300/50 rounded-full animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3.5s' }}></div>
        <div className="absolute top-1/2 right-1/2 w-1.5 h-1.5 bg-pink-500/50 rounded-full animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '2.8s' }}></div>
      </div>
      
      {/* Mesh gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-pink-50/50 via-transparent to-rose-50/50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full mb-6 shadow-lg">
            <Award className="h-6 w-6 text-white mr-2" />
            <span className="text-white font-bold text-sm uppercase tracking-wide">Premium Quality</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Why Choose Our
            <span className="block bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              Premium Paints?
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the difference that quality makes with our 
            <span className="font-semibold text-pink-600"> carefully curated selection</span>
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => (
            <BenefitCard 
              key={index} 
              benefit={benefit} 
              index={index} 
              isVisible={isVisible}
            />
          ))}
        </div>
       
      </div>

    </section>
  );
};

export default PremiumPaintBenefits;