import { useState, useEffect } from "react";
import { ArrowLeft, Sparkles, Palette, Zap, Check, Home, Building, ArrowRight } from "lucide-react";
import { BrandCard } from "./brandCard";
import ProductCard from "../product/ProductCard";
import { Brand, Application, ColorOption, FilterState } from "@/types/paint";
import { products, colorPalette } from "@/data/products";

type Step = 'brand' | 'application' | 'color' | 'products';

export const PaintSelectorComponent = () => {
  const [currentStep, setCurrentStep] = useState<Step>('brand');
  const [filters, setFilters] = useState<FilterState>({});
  const [filteredProducts, setFilteredProducts] = useState(products);

  const brands: Brand[] = ["Asian Paints", "Berger", "Dulux", "Nerolac"];
  const applications: Application[] = ["Interior", "Exterior"];

  useEffect(() => {
    let filtered = products;
    
    if (filters.brand) {
      filtered = filtered.filter(p => p.brand === filters.brand);
    }
    if (filters.application) {
      filtered = filtered.filter(p => p.application === filters.application);
    }
    
    setFilteredProducts(filtered);
  }, [filters]);

  const handleBrandSelect = (brand: Brand) => {
    setFilters({ ...filters, brand });
    setCurrentStep('application');
  };

  const handleApplicationSelect = (application: Application) => {
    setFilters({ ...filters, application });
    setCurrentStep('color');
  };

  const handleColorSelect = (color: ColorOption) => {
    setFilters({ ...filters, color });
    setCurrentStep('products');
  };

  const goBack = () => {
    switch (currentStep) {
      case 'application':
        setCurrentStep('brand');
        setFilters({ brand: filters.brand });
        break;
      case 'color':
        setCurrentStep('application');
        setFilters({ brand: filters.brand, application: filters.application });
        break;
      case 'products':
        setCurrentStep('color');
        break;
    }
  };

  const resetSelection = () => {
    setFilters({});
    setCurrentStep('brand');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 sm:-top-40 -right-20 sm:-right-40 w-40 sm:w-80 h-40 sm:h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-20 sm:-bottom-40 -left-20 sm:-left-40 w-40 sm:w-80 h-40 sm:h-80 bg-gradient-to-br from-blue-400/20 to-green-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 sm:w-96 h-48 sm:h-96 bg-gradient-to-br from-yellow-400/10 to-orange-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Floating Icons - Hidden on mobile for cleaner look */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
        <Sparkles className="absolute top-20 left-20 w-6 h-6 text-purple-400/30 animate-bounce" style={{ animationDelay: '0.5s' }} />
        <Palette className="absolute top-40 right-32 w-8 h-8 text-pink-400/30 animate-bounce" style={{ animationDelay: '1.5s' }} />
        <Zap className="absolute bottom-32 left-16 w-5 h-5 text-yellow-400/30 animate-bounce" style={{ animationDelay: '2.5s' }} />
      </div>

      <div className="relative z-10 space-y-6 sm:space-y-12">
        {/* Header */}
        
          <section className="relative h-96 mt-20 bg-gray-950 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-60 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1645237455598-e8f02d706a4e?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
        }}
      />

      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-orange-600 via-pink-600 to-orange-500 bg-clip-text text-transparent mb-6 leading-tight">
            INTELLIGENT PAINT SELECTOR
          </h1>
          <p className="text-xl md:text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
            Discover the perfect paint for your project with our intelligent selection wizard
          </p>
       
        </div>
      </div>
    </section>
          <div className="text-center space-y-4 sm:space-y-6">
          {/* Progress Indicators - Mobile optimized */}
          <div className="flex justify-center items-center gap-2 sm:gap-4 mt-6 sm:mt-8 px-2">
            {(['brand', 'application', 'color', 'products']).map((step, index) => {
              const isActive = currentStep === step;
              const isCompleted = ['brand', 'application', 'color', 'products'].indexOf(step) < ['brand', 'application', 'color', 'products'].indexOf(currentStep);
              
              return (
                <div key={step} className="flex items-center">
                  <div className={`w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                    isActive 
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white scale-110 sm:scale-125 shadow-2xl' 
                      : isCompleted
                        ? 'bg-green-500 text-white'
                        : 'bg-white/80 text-gray-400 border-2 border-gray-200'
                  }`}>
                    {isCompleted ? (
                      <Check className="w-3 h-3 sm:w-6 sm:h-6" />
                    ) : (
                      <span className="font-bold text-xs sm:text-base">{index + 1}</span>
                    )}
                  </div>
                  {index < 3 && (
                    <div className={`w-6 sm:w-16 h-1 mx-1 sm:mx-2 rounded-full transition-all duration-500 ${
                      isCompleted ? 'bg-green-500' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              );
            })}
          </div>

          {/* Step Labels - Mobile responsive */}
          <div className="grid grid-cols-4 gap-2 sm:flex sm:justify-center sm:gap-8 md:gap-16 mt-3 sm:mt-4 px-2">
            {[
              { key: 'brand', label: '🏷️ Brand' },
              { key: 'application', label: '🏠 App' },
              { key: 'color', label: '🎨 Color' },
              { key: 'products', label: '📦 Products' }
            ].map(({ key, label }) => (
              <span key={key} className={`text-xs sm:text-sm font-medium transition-colors duration-300 text-center ${
                currentStep === key ? 'text-purple-600' : 'text-gray-500'
              }`}>
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        {currentStep !== 'brand' && (
          <div className="flex justify-center items-center gap-4 px-4">
            <button 
              onClick={goBack}
              className="flex items-center gap-2 sm:gap-3 px-4 sm:px-8 py-3 sm:py-4 bg-white/80 backdrop-blur-xl rounded-xl sm:rounded-2xl shadow-2xl border border-white/50 hover:bg-white/90 transition-all duration-300 hover:scale-105"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
              <span className="font-bold text-purple-600 text-sm sm:text-base">Back</span>
            </button>
            <button 
              onClick={resetSelection}
              className="px-4 sm:px-8 py-3 sm:py-4 text-gray-600 hover:text-gray-800 underline font-medium transition-colors duration-300 text-sm sm:text-base"
            >
              🔄 Start Over
            </button>
          </div>
        )}

        {/* Current Selection Summary - Mobile responsive */}
        {Object.keys(filters).length > 0 && (
          <div className="flex justify-center px-2">
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl border border-white/50 p-4 sm:p-6 w-full max-w-2xl">
              <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3 items-center justify-center">
                <span className="text-base sm:text-lg font-bold text-gray-700 mb-2 sm:mb-0">Your Selection:</span>
                <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
                  {filters.brand && (
                    <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl sm:rounded-2xl font-medium text-sm sm:text-base">
                      🏷️ {filters.brand}
                    </span>
                  )}
                  {filters.application && (
                    <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl sm:rounded-2xl font-medium text-sm sm:text-base">
                      {filters.application === 'Interior' ? '🏠' : '🏢'} {filters.application}
                    </span>
                  )}
                  {filters.color && (
                    <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl sm:rounded-2xl font-medium flex items-center gap-2 text-sm sm:text-base">
                      <div 
                        className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 border-white"
                        style={{ backgroundColor: filters.color.hex }}
                      />
                      {filters.color.name}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step Content */}
        <div className="animate-fadeIn">
          {currentStep === 'brand' && (
            <div className="space-y-6 sm:space-y-8">
            
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 justify-items-center px-2 sm:px-0 md:px-5">
                {brands.map((brand) => (
                  <BrandCard
                    key={brand}
                    brand={brand}
                    onClick={handleBrandSelect}
                  />
                ))}
              </div>
            </div>
          )}

          {currentStep === 'application' && (
            <div className="space-y-6 sm:space-y-8">
              <div className="text-center px-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                  🏠 Select Application Type
                </h2>
                <p className="text-lg sm:text-xl text-gray-600">Where will you be painting?</p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto px-2">
                {applications.map((app) => (
                  <div
                    key={app}
                    className="group cursor-pointer transform transition-all duration-500 hover:scale-105"
                    onClick={() => handleApplicationSelect(app)}
                  >
                    <div className="bg-white/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500">
                      <div className="text-center space-y-4 sm:space-y-6">
                        <div className={`w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto rounded-full flex items-center justify-center text-4xl transition-all duration-300 group-hover:scale-110 ${
                          app === 'Interior' 
                            ? 'bg-gradient-to-br from-blue-400 to-blue-600 text-white' 
                            : 'bg-gradient-to-br from-green-400 to-green-600 text-white'
                        }`}>
                          {app === 'Interior' ? <Home className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" /> : <Building className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />}
                        </div>
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">{app}</h3>
                        <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                          {app === 'Interior' 
                            ? '🛋️ Perfect for living rooms, bedrooms, and indoor spaces with beautiful finishes'
                            : '🌦️ Durable protection for exteriors with weather-resistant technology'
                          }
                        </p>
                        <div className="pt-2 sm:pt-4">
                          <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500 mx-auto group-hover:translate-x-2 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {currentStep === 'color' && (
            <div className="space-y-6 sm:space-y-8">
              <div className="text-center px-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                  🎨 Pick Your Perfect Color
                </h2>
                <p className="text-lg sm:text-xl text-gray-600">Choose from our vibrant color palette</p>
              </div>
              
              <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 gap-3 sm:gap-4 lg:gap-6 max-w-6xl mx-auto px-2">
                {colorPalette.map((color) => (
                  <div
                    key={color.name}
                    className="group cursor-pointer transform transition-all duration-500 hover:scale-125"
                    onClick={() => handleColorSelect(color)}
                  >
                    <div className="relative">
                      <div
                        className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl shadow-2xl border-2 sm:border-4 border-white group-hover:shadow-3xl transition-all duration-300 group-hover:rotate-12"
                        style={{ backgroundColor: color.hex }}
                      />
                      <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                        <Check className="w-2 h-2 sm:w-3 sm:h-3 text-white" />
                      </div>
                    </div>
                    <p className="text-xs text-center mt-2 sm:mt-3 font-medium text-gray-700 group-hover:text-purple-600 transition-colors duration-300 truncate">
                      {color.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {currentStep === 'products' && (
            <div className="space-y-6 sm:space-y-8">
              <div className="text-center px-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                  ✨ Perfect Matches for You
                </h2>
                <p className="text-lg sm:text-xl text-gray-600">
                  <span className="font-bold text-purple-600">{filteredProducts.length}</span> amazing products found
                </p>
              </div>
              
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-2">
                  {filteredProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 sm:py-20 px-4">
                  <div className="max-w-sm sm:max-w-md mx-auto bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-8 sm:p-12 shadow-2xl border border-white/50">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Palette className="w-8 h-8 sm:w-12 sm:h-12 text-purple-500" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">😔 No products found</h3>
                    <p className="text-gray-600 mb-6 text-sm sm:text-base">
                      We couldn't find any products matching your selection.
                    </p>
                    <button
                      onClick={resetSelection}
                      className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl sm:rounded-2xl hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-xl font-bold text-sm sm:text-base"
                    >
                      🔄 Start Over
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};