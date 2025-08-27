import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Palette } from 'lucide-react';

const PaintProductsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Sample paint product posters with Unsplash images
  const products = [
    {
      id: 1,
      name: "Premium Interior Paint Collection",
      image: "https://static.asianpaints.com/content/dam/asian_paints/products/spotlights/Apcolite-All-Protek-Web-Banner-Updated.webp"
    },
    {
      id: 2,
      name: "Exterior Weather Shield Series",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1200&h=800&fit=crop"
    },
    {
      id: 3,
      name: "Eco-Friendly Paint Range",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1200&h=800&fit=crop"
    },
    {
      id: 4,
      name: "Luxury Metallic Finish",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop"
    },
    {
      id: 5,
      name: "Quick-Dry Professional Paint",
      image: "https://images.unsplash.com/photo-1572285442169-0c0e5d8f4813?w=1200&h=800&fit=crop"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === products.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, products.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? products.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === products.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="w-full">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Palette className="w-8 h-8 text-pink-500" />
            <h2 className="text-4xl font-bold text-gray-900">Featured Products</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our premium paint collection designed to transform any space
          </p>
        </div>

        {/* Full Screen Carousel Container */}
        <div 
          className="relative bg-white  shadow-2xl overflow-hidden"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          
          {/* Main Image Display */}
          <div className="relative h-[400px] overflow-hidden">
            <img 
              src={products[currentIndex].image} 
              alt={products[currentIndex].name}
              className="w-full h-full object-cover transition-all duration-700 ease-in-out"
            />
            
            {/* Subtle overlay for navigation visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10"></div>
            
            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-700 p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-10 group"
            >
              <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
            </button>
            
            <button
              onClick={goToNext}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-700 p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-10 group"
            >
              <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* Bottom Navigation Dots */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex 
                      ? 'w-12 h-3 bg-white shadow-lg' 
                      : 'w-3 h-3 bg-white/60 hover:bg-white/80 hover:scale-125'
                  }`}
                />
              ))}
            </div>

            {/* Product Counter */}
            <div className="absolute top-6 right-6 bg-black/30 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium z-10">
              {currentIndex + 1} / {products.length}
            </div>

            {/* Auto-play indicator */}
            <div className="absolute top-6 left-6 z-10">
              <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                isAutoPlaying 
                  ? 'bg-green-400 shadow-lg animate-pulse' 
                  : 'bg-gray-400'
              }`} />
            </div>
          </div>
        </div>

        {/* Mobile Touch Navigation Hints */}
        <div className="md:hidden text-center mt-6">
          <p className="text-gray-500 text-sm">
            Swipe or use dots to navigate • Auto-playing: {isAutoPlaying ? 'On' : 'Off'}
          </p>
        </div>

        {/* Desktop Navigation Info */}
        <div className="hidden md:block text-center mt-8">
          <p className="text-gray-500">
            Hover to pause auto-play • Use arrow keys or click arrows to navigate
          </p>
        </div>
      </div>
    </section>
  );
};

export default PaintProductsCarousel;