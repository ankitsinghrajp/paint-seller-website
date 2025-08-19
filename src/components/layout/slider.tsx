import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import asianPaints from "../../assets/asian-paints-poster.jpg";
import bergerPaints from "../../assets/berger-poster.jpg";
import nerolacPaints from "../../assets/nerolac-poster1.webp";
import birlaOpus from "../../assets/birlaopusposter.jpg";
import duluxPaints from "../../assets/dulux-poster.jpg";

const ProductCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [direction, setDirection] = useState(1);

  // Sample product images with high-quality paint brand visuals
  const images = [
     asianPaints,
     bergerPaints,
     nerolacPaints,
     birlaOpus,
     duluxPaints
  ];

  const brands = ["Asian Paints", "Berger Paints", "Nerolac", "Birla Opus", "Dulux"];
  const descriptions = [
    "Premium quality paints for modern homes",
    "Trusted colors that last a lifetime", 
    "Innovation in every drop of paint",
    "Luxury finishes for discerning tastes",
    "Professional grade paint solutions"
  ];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Auto-advance slides with progress tracking
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setDirection(1);
          setCurrentSlide((current) => (current + 1) % images.length);
          return 0;
        }
        return prev + 0.8;
      });
    }, 32); // Smoother progress (approximately 4 seconds total)

    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
    setProgress(0);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((current) => (current + 1) % images.length);
    setProgress(0);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((current) => (current - 1 + images.length) % images.length);
    setProgress(0);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
    if (isAutoPlaying) setProgress(0);
  };

  return (
    <section className='bg-gradient-to-br from-slate-50 via-white to-blue-50 w-full py-4 relative overflow-hidden'>
      {/* Enhanced Background decoration with animations */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/30 via-transparent to-purple-100/20"></div>
      <div className="absolute top-20 -right-20 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-tr from-pink-200/20 to-orange-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-blue-300/30 rounded-full animate-bounce`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      <div className={`relative max-w-7xl mx-auto  transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        
        {/* Desktop and Tablet Layout */}
        <div className="hidden sm:block">
          <div className="relative h-[400px] md:h-[500px] overflow-hidden shadow-2xl bg-white/90 backdrop-blur-sm border border-white/30 transform transition-all duration-500 hover:shadow-3xl hover:-translate-y-2">
            
        

            {/* Main carousel container */}
            <div className="relative w-full h-full overflow-hidden ">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ease-out ${
                    index === currentSlide 
                      ? 'opacity-100 scale-100 translate-x-0 z-10' 
                      : index < currentSlide 
                      ? `opacity-0 scale-95 ${direction > 0 ? '-translate-x-full' : 'translate-x-full'} z-0` 
                      : `opacity-0 scale-95 ${direction > 0 ? 'translate-x-full' : '-translate-x-full'} z-0`
                  }`}
                >
                  <div className="relative w-full h-full bg-gradient-to-br from-gray-100 to-gray-200">
                    <img
                      src={image}
                      alt={brands[index]}
                      className="w-full h-full object-contain object-center transition-all duration-1000 hover:scale-105"
                   
                    />
                    {/* Enhanced overlay with animated gradient */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-black/20 to-transparent opacity-60"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40"></div>
                

                    {/* Animated corner accent */}
                    <div className={`absolute top-8 right-8 w-16 h-16 border-4 border-white/60 rounded-full transition-all duration-1000 delay-500 ${
                      index === currentSlide ? 'opacity-100 scale-100 rotate-180' : 'opacity-0 scale-50 rotate-0'
                    }`}>
                      <div className="absolute inset-2 bg-white/20 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced control panel with more animations */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30">
              <div className="bg-gray-700/40 backdrop-blur-md rounded-2xl px-8 py-4 shadow-2xl border border-white/30 flex items-center space-x-6 transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
                
                {/* Play/Pause button */}
                <button
                  onClick={toggleAutoPlay}
                  className="p-3 rounded-xl bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 hover:from-pink-600 hover:via-rose-600 hover:to-purple-700 text-white  transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                >
                  {isAutoPlaying ? 
                    <Pause className="w-5 h-5 group-hover:scale-110 transition-transform" /> : 
                    <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  }
                </button>

                {/* Dot indicators with enhanced animations */}
                <div className="flex space-x-4">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className="group relative"
                    >
                      <div className={`w-4 h-4 rounded-full transition-all duration-500 relative overflow-hidden ${
                        index === currentSlide 
                          ? 'bg-gradient-to-r from-blue-500 to-purple-500 scale-125 shadow-lg' 
                          : 'bg-gray-300 hover:bg-gray-400 hover:scale-110'
                      }`}>
                        {/* Ripple effect for active dot */}
                        {index === currentSlide && (
                          <div className="absolute inset-0 bg-white/30 rounded-full animate-ping"></div>
                        )}
                      </div>
                      {/* Enhanced tooltip */}
                      <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none transform group-hover:scale-105">
                        <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap shadow-xl">
                          {brands[index]}
                          <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Enhanced progress bar with gradient animation */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-black/20 z-20">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-100 ease-linear relative overflow-hidden"
                style={{ width: `${(currentSlide * 100 + progress) / images.length}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Layout */}
        <div className="block sm:hidden">
          <div className="relative h-[270px] overflow-hidden shadow-xl bg-white/90 backdrop-blur-sm border border-white/30 transform transition-all duration-300 hover:shadow-2xl">
          
            
            {/* Image container */}
            <div className="relative w-full h-full overflow-hidden">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-out ${
                    index === currentSlide 
                      ? 'opacity-100 scale-100 translate-x-0' 
                      : index < currentSlide 
                      ? `opacity-0 scale-95 ${direction > 0 ? '-translate-x-full' : 'translate-x-full'}` 
                      : `opacity-0 scale-95 ${direction > 0 ? 'translate-x-full' : '-translate-x-full'}`
                  }`}
                >
                  <div className="relative w-full h-full bg-gradient-to-br from-gray-100 to-gray-200">
                    <img
                      src={image}
                      alt={brands[index]}
                      className="w-full h-full object-contain object-center"
                  
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced mobile controls */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30">
              <div className="bg-gray-700/30 backdrop-blur-md rounded-xl px-4 py-2 shadow-lg border border-white/30 flex items-center space-x-3 transition-all duration-300 hover:scale-105">
                <button
                  onClick={toggleAutoPlay}
                  className="p-2 rounded-lg  bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 hover:from-pink-600 hover:via-rose-600 hover:to-purple-700 text-white  transition-all duration-300 hover:scale-110"
                >
                  {isAutoPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                </button>
                
                <div className="flex space-x-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 relative ${
                        index === currentSlide 
                          ? 'bg-gradient-to-r from-blue-500 to-purple-500 scale-125' 
                          : 'bg-gray-300 hover:bg-gray-400 hover:scale-110'
                      }`}
                    >
                      {index === currentSlide && (
                        <div className="absolute inset-0 bg-white/30 rounded-full animate-ping"></div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile progress bar */}
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black/20 z-20">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-100 ease-linear relative overflow-hidden"
                style={{ width: `${(currentSlide * 100 + progress) / images.length}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;