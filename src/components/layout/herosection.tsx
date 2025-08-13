import React from 'react';
import { ArrowRight } from 'lucide-react';
import backgroundImage from "../../assets/hero-room.jpg"

const MobileOptimizedHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Better Mobile Handling */}
      <div className="absolute inset-0">
        {/* Desktop Background */}
        <div 
          className="hidden md:block absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url(${backgroundImage})`
          }}
        />
        
        {/* Mobile Background - Uses different positioning */}
        <div 
          className="md:hidden absolute inset-0 bg-cover bg-top"
          style={{ 
            backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url(${backgroundImage})`
          }}
        />
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-white mb-6 leading-tight">
            <span className="block text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold font-serif mb-2">
              Transform Your Walls
            </span>
            <span className="block text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold font-serif">
              into <span className="text-purple-400">Works of Art</span>
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-white text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
            Premium Paints. Expert Advice. Unmatched Durability.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md sm:max-w-none mx-auto">
            <a href="/products">
            <button className="w-full btn-hero sm:w-auto bg-yellow-400 hover:bg-yellow-500 text-white font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-lg">
              Shop Now 
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            </a>
            <a className= "hidden md:block" href="#contact">
            <button className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-black font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center">
              Get a Free Quote
            </button>
            </a>
          </div>
   
        </div>
      </div>
      

    </section>
  );
};

export default MobileOptimizedHero;