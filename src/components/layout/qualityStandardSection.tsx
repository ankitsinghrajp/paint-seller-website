import React from 'react';
import { Check, Award } from 'lucide-react';
import qualityStandards from "../../assets/quality-standards.jpg"; // Assuming this import exists

const QualityStandardsSection = () => {
  return (
    <section id="quality" className="py-12 md:py-20 relative overflow-hidden">
      {/* Animated Pink Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-rose-50 via-white to-pink-100"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large flowing shapes */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-pink-200/20 to-rose-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }}></div>
        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-gradient-to-br from-rose-200/20 to-pink-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s', animationDelay: '2s' }}></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-pink-300/15 to-rose-200/15 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
        
        {/* Flowing wave patterns */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-16 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-pink-300/30 to-transparent animate-pulse" style={{ animationDuration: '8s' }}></div>
          <div className="absolute top-32 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-rose-300/30 to-transparent animate-pulse" style={{ animationDuration: '6s', animationDelay: '3s' }}></div>
          <div className="absolute bottom-16 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-pink-200/30 to-transparent animate-pulse" style={{ animationDuration: '7s', animationDelay: '1s' }}></div>
        </div>
        
        {/* Subtle floating particles */}
        <div className="absolute top-1/6 left-1/5 w-2 h-2 bg-pink-400/40 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
        <div className="absolute top-2/3 right-1/5 w-3 h-3 bg-rose-400/40 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '2.5s' }}></div>
        <div className="absolute top-1/2 left-2/3 w-1.5 h-1.5 bg-pink-300/40 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '4s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 bg-rose-300/40 rounded-full animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3.5s' }}></div>
        
        {/* Mesh gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-pink-50/30 via-transparent to-rose-50/30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-50/20 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
       
          <div className="order-2 lg:order-1">
            <h2 className="font-serif-heading text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 md:mb-6 leading-tight">
              Uncompromising Quality Standards
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed">
              Every paint we offer undergoes rigorous testing to ensure it meets our premium standards for durability, coverage, and finish.
            </p>
            
            <div className="space-y-4 md:space-y-6">
                  
              <div className="flex items-start group">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center mr-3 md:mr-4 mt-1 flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Check className="h-4 w-4 md:h-5 md:w-5 text-white" />
                </div>
                <div className="flex-1 group-hover:translate-x-1 transition-transform duration-300">
                  <h4 className="font-semibold text-gray-800 mb-1 md:mb-2 text-base md:text-lg group-hover:text-pink-700 transition-colors duration-300">
                    Advanced Technology Formulas
                  </h4>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    Cutting-edge paint chemistry for superior performance
                  </p>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center mr-3 md:mr-4 mt-1 flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Check className="h-4 w-4 md:h-5 md:w-5 text-white" />
                </div>
                <div className="flex-1 group-hover:translate-x-1 transition-transform duration-300">
                  <h4 className="font-semibold text-gray-800 mb-1 md:mb-2 text-base md:text-lg group-hover:text-pink-700 transition-colors duration-300">
                    Certified Application Partners
                  </h4>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    Professional painters trained in premium application techniques
                  </p>
                </div>
              </div>
            </div>
          </div>
         
          <div className="order-1 lg:order-2">
            <div className="relative group">
              <img 
                src={qualityStandards}
                alt="Premium paint quality demonstration"
                className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02]"
              />
              
              {/* Animated overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-pink-900/20 via-transparent to-rose-900/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Award badge with enhanced styling */}
              <div className="absolute -bottom-3 -right-3 md:-bottom-6 md:-right-6 w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <Award className="h-8 w-8 md:h-12 md:w-12 text-white" />
                
                {/* Floating sparkles around the badge */}
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-pink-200 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500" style={{ animationDelay: '0s' }}></div>
                <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-rose-200 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute -top-2 left-1/2 w-1 h-1 bg-pink-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500" style={{ animationDelay: '1s' }}></div>
              </div>
              
              {/* Shimmer effect on image hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityStandardsSection;