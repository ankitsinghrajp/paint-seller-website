import React, { useState, useEffect } from 'react';
import { ArrowRight, Palette, Brush, Award, Shield, Star } from 'lucide-react';
import image from "../../assets/image-for-hero.jpeg"
const ModernHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative  h-[800px] bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-pink-100/60 to-rose-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-10 w-96 h-96 bg-gradient-to-tr from-rose-100/50 to-pink-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-pink-50/40 to-rose-100/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Main Content Area */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto w-full">
            
            {/* Desktop Layout */}
            <div className="hidden lg:flex items-center justify-between">
              {/* Left Content */}
              <div className="flex-1 max-w-2xl">
                <div 
                  className={`transition-all duration-1000 ${
                    isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                  }`}
                >
             
                  
                  <h1 className="space-y-2 mb-8">
                    <span className="block text-6xl xl:text-7xl font-black leading-none text-gray-900">
                      Transform
                    </span>
                    <span className="block text-6xl xl:text-7xl font-black leading-none">
                      <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 bg-clip-text text-transparent">
                        Your Space
                      </span>
                    </span>
                    <span className="block text-4xl xl:text-5xl font-light text-gray-600 mt-4">
                      Into Something Beautiful
                    </span>
                  </h1>

                  <p className="text-gray-600 text-xl leading-relaxed mb-10 max-w-lg">
                    Professional painting services with premium quality paints. 
                    Experience the difference with Unboxxit.
                  </p>

                  <div className="flex gap-4">
                    <button className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-3 group">
                      <Palette className="w-5 h-5" />
                      Get Started
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    
                    <button className="bg-white/80 backdrop-blur-sm border-2 border-pink-200 text-gray-700 hover:bg-white hover:border-pink-300 font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3">
                      <Brush className="w-5 h-5 text-pink-500" />
                      View Gallery
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Visual Element */}
              <div className="flex-1 flex justify-center">
                <div 
                  className={`transition-all duration-1000 delay-300 ${
                    isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
                  }`}
                >
                  <div className="relative">
                    <div className="w-96 h-96 bg-gradient-to-br from-pink-200 to-rose-300 rounded-3xl shadow-2xl transform rotate-6 hover:rotate-3 transition-transform duration-500">
                      <div className="absolute inset-6 bg-white rounded-2xl shadow-inner flex items-center justify-center">
                       <img src={image} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tablet Layout */}
            <div className="hidden md:block lg:hidden text-center">
              <div 
                className={`transition-all duration-1000 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
           

                <h1 className="space-y-2 mb-6">
                  <span className="block text-5xl font-black leading-none text-gray-900">
                    Transform Your Space
                  </span>
                  <span className="block text-3xl font-light text-gray-600 mt-3">
                    Into Something Beautiful
                  </span>
                  <span className="block text-4xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent mt-4">
                    Unboxxit
                  </span>
                </h1>

                <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                  Professional painting services with premium quality paints
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
                  <button className="bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold px-8 py-4 rounded-xl hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3">
                    <Palette className="w-5 h-5" />
                    Get Started
                  </button>
                  <button className="bg-white/80 border-2 border-pink-200 text-gray-700 font-semibold px-8 py-4 rounded-xl hover:bg-white transition-all duration-300 flex items-center justify-center gap-3">
                    <Brush className="w-5 h-5 text-pink-500" />
                    View Gallery
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="block md:hidden text-center px-4">
              <div 
                className={`transition-all duration-1000 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
              

                <h1 className="space-y-2 mb-6">
                  <span className="block text-3xl sm:text-4xl font-black leading-tight text-gray-900">
                    Transform Your
                  </span>
                  <span className="block text-3xl sm:text-4xl font-black leading-tight bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                    Space
                  </span>
                  <span className="block text-2xl font-light text-gray-600 mt-3">
                    Into Something Beautiful
                  </span>
                </h1>
                 <span className='text-gray-600 font-light text-2xl mb-3'>With</span>
              
                <span className="block text-3xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent mb-6">
                  Unboxxit
                </span>

                <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-sm mx-auto">
                  Professional painting services with premium quality paints
                </p>

                <div className="space-y-3">
                  <a href="/products">
                  <button className="w-full mb-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3">
                    <Palette className="w-5 h-5" />
                    Explore Products
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  </a>
                  <a href="/paint-selector">
                  <button className="w-full bg-white/80 border-2 border-pink-200 text-gray-700 font-semibold px-8 py-4 rounded-xl hover:bg-white transition-all duration-300 flex items-center justify-center gap-3">
                    <Brush className="w-5 h-5 text-pink-500" />
                    Quick Paint Selector
                  </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

  
      </div>
    </section>
  );
};

export default ModernHero;