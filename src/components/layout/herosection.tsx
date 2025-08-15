import React, { useState, useEffect } from 'react';
import { ArrowRight, Palette, Sparkles, Brush, Award, Shield, Leaf, Star } from 'lucide-react';

const ModernHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen pt-28 flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ec4899' fill-opacity='0.08' fill-rule='evenodd'%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      {/* Floating Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-pink-200/40 to-rose-300/40 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-20 right-0 w-80 h-80 bg-gradient-to-bl from-purple-200/30 to-pink-300/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute -bottom-20 left-1/3 w-72 h-72 bg-gradient-to-tr from-rose-200/40 to-pink-200/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-tl from-pink-300/30 to-purple-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '6s' }} />
      </div>

      {/* Geometric Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Cards */}
        <div className="absolute top-32 left-16 w-20 h-28 bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg rotate-12 animate-float border border-pink-200/50" />
        <div className="absolute bottom-40 right-20 w-24 h-32 bg-gradient-to-br from-white/60 to-pink-100/60 backdrop-blur-sm rounded-2xl shadow-lg -rotate-12 animate-float border border-pink-200/50" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-rose-200/40 backdrop-blur-sm rounded-full shadow-lg animate-bounce" style={{ animationDelay: '3s' }} />
        
        {/* Paint Splashes */}
        <div className="absolute top-40 right-1/3 w-6 h-6 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/3 left-1/5 w-4 h-4 bg-rose-400 rounded-full animate-ping" style={{ animationDelay: '4s' }} />
        <div className="absolute top-2/3 right-1/5 w-8 h-8 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '6s' }} />
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Brush className="absolute top-1/4 left-1/4 w-8 h-8 text-pink-300/60 animate-bounce" style={{ animationDelay: '0.5s' }} />
        <Palette className="absolute bottom-1/3 right-1/3 w-6 h-6 text-rose-300/60 animate-bounce" style={{ animationDelay: '1.5s' }} />
        <Sparkles className="absolute top-1/3 right-1/4 w-7 h-7 text-purple-300/60 animate-bounce" style={{ animationDelay: '2.5s' }} />
        <Star className="absolute bottom-1/4 left-1/3 w-5 h-5 text-pink-400/60 animate-bounce" style={{ animationDelay: '3.5s' }} />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto text-center">
        

          {/* Main Headlines */}
          <div className="space-y-8 mb-8">
            <h1 
              className={`font-bold transition-all duration-700 delay-200 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <span className="block text-6xl  md:text-6xl leading-none font-black tracking-tight text-gray-900 mb-4">
                Transform {' '}
                 <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 bg-clip-text text-transparent">
                  your
                </span>{' '}
              </span>
              <span className="block text-6xl md:text-6xl leading-none font-black tracking-tight">
             
                <span className="text-gray-800">Space</span>
              </span>
              <span className="block text-3xl sm:text-3xl md:text-4xl lg:text-5xl leading-none font-light tracking-wide mt-6 text-gray-600">
                Into Art
              </span>
            </h1>
            
            <div 
              className={`text-gray-700 text-xl sm:text-2xl md:text-3xl font-light max-w-4xl mx-auto leading-relaxed transition-all duration-700 delay-400 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <span className="block mb-2">
                Premium quality paints that bring your vision to life with{' '}
              </span>
              <span className="font-bold text-transparent bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-4xl sm:text-4xl md:text-5xl">
                Unboxxit
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div 
            className={`flex flex-col sm:flex-row gap-6 justify-center items-center max-w-xl mx-auto mb-20 transition-all duration-700 delay-600 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <a href="/products" className="w-full sm:w-auto group">
              <button className="w-full sm:w-auto bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 hover:from-pink-600 hover:via-rose-600 hover:to-purple-700 text-white font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-4 shadow-lg">
                Explore Products
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </a>
            
            <a href="/paint-selector" className="w-full sm:w-auto group">
              <button className="w-full sm:w-auto bg-white/80 backdrop-blur-xl border-2 border-pink-200 text-gray-800 hover:bg-white hover:border-pink-300 hover:shadow-xl font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-4 shadow-lg">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex items-center justify-center">
                  <Brush className="w-4 h-4 text-white" />
                </div>
                Quick Paint Selector
              </button>
            </a>
          </div>

        
        </div>
      </div>
    </section>
  );
};

export default ModernHero;