import React, { useState, useEffect } from 'react';
import { ArrowRight, Palette, Brush } from 'lucide-react';
import heroImage from "../../assets/image-for-hero.jpeg";

const background = "https://images.unsplash.com/photo-1720247520862-7e4b14176fa8?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
const ModernHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative h-[750px] md:h-[700px] pt-10 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Alternative subtle background elements for depth (now with darker overlay) */}
      <div className="absolute inset-0 z-[1]">
        <div className="absolute top-20 right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-white/5 to-white/10 rounded-full blur-3xl" />
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
                    <span className="block text-6xl xl:text-7xl font-black leading-none text-white drop-shadow-2xl">
                      Transform
                    </span>
                    <span className="block text-6xl xl:text-7xl font-black leading-none">
                      <span className="bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg">
                        Your Space
                      </span>
                    </span>
                    <span className="block text-4xl xl:text-5xl font-light text-white/90 mt-4 drop-shadow-lg">
                      Into Something Beautiful
                    </span>
                  </h1>

                  <p className="text-white/80 text-xl leading-relaxed mb-10 max-w-lg drop-shadow-md">
                    Professional painting services with premium quality paints. 
                    Experience the difference {" "} <b className='text-white'>with Unboxxit.</b>
                  </p>

                  <div className="flex gap-4">
                    <a href="/products">
                    <button className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-3 group">
                      <Palette className="w-5 h-5" />
                      Explore Products
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    </a>
                    <a href="/paint-selector">
                    <button className="bg-white/20 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/30 hover:border-white/50 font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3">
                      <Brush className="w-5 h-5 text-pink-300" />
                      Quick Paint Selector
                    </button>
                    </a>
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
                    <div className="w-96 h-96 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-3xl shadow-2xl transform rotate-6 hover:rotate-3 transition-transform duration-500">
                      <div className="absolute inset-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-inner flex items-center justify-center overflow-hidden">
                        <img src={heroImage} alt="Paint transformation" className="w-full h-full object-cover rounded-xl" />
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
                  <span className="block text-5xl font-black leading-none text-white drop-shadow-2xl">
                    Transform Your Space
                  </span>
                  <span className="block text-3xl font-light text-white/90 mt-3 drop-shadow-lg">
                    Into Something Beautiful
                  </span>
                  <span className="block text-4xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent mt-4 drop-shadow-lg">
                    Unboxxit
                  </span>
                </h1>

                <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-2xl mx-auto drop-shadow-md">
                  Professional painting services with premium quality paints
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
                  <a href="/products">
                  <button className="bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold px-8 py-4 rounded-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3">
                    <Palette className="w-5 h-5" />
                    Explore Products
                  </button>
                  </a>
                  <a href="/paint-selector">
                  <button className="bg-white/20 backdrop-blur-md border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/30 transition-all duration-300 flex items-center justify-center gap-3">
                    <Brush className="w-5 h-5 text-pink-300" />
                       Quick Paint Selector
                  </button>
                  </a>
                </div>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="block md:hidden">
              <div className="min-h-[700px] flex flex-col">
                {/* Mobile Content Section */}
                <div className="px-6">
                  <div 
                    className={`transition-all duration-1000 delay-300 ${
                      isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                  >
                    {/* Heading */}
                    <div className="text-center mb-8">
                      <h1 className="space-y-2 mb-4">
                        <span className="block text-5xl font-black leading-tight text-white drop-shadow-2xl">
                          Transform
                        </span>
                        <span className="block text-5xl font-black leading-tight bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg">
                          Your Space
                        </span>
                        <span className="block text-2xl font-light text-white/90 mt-3 drop-shadow-lg">
                          Into Something Beautiful
                        </span>
                      </h1>
                      
                      <div className="flex items-center justify-center gap-2 mb-6">
                        <div className="h-px w-12 bg-gradient-to-r from-transparent to-white/50"></div>
                        <span className="text-white/80 font-light text-lg drop-shadow-md">With</span>
                        <div className="h-px w-12 bg-gradient-to-l from-transparent to-white/50"></div>
                      </div>
                      
                      <span className="block text-3xl font-bold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent mb-6 drop-shadow-lg">
                        Unboxxit
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-white/80 text-lg leading-relaxed mb-8 text-center max-w-sm mx-auto drop-shadow-md">
                      Professional painting services with premium quality paints that bring your vision to life
                    </p>

                    {/* CTA Buttons */}
                    <div className="space-y-4 max-w-sm mx-auto">
                      <a href="/products">
                      <button className="w-full mb-4 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-3 group">
                        <Palette className="w-5 h-5" />
                        <span>Explore Products</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                      </a>
                      <a href="/paint-selector">
                      <button className="w-full bg-white/20 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/30 hover:border-white/50 hover:shadow-lg font-semibold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-3">
                        <Brush className="w-5 h-5 text-pink-300" />
                        <span>Quick Paint Selector</span>
                      </button>
                      </a>
                    </div>

                  </div>
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