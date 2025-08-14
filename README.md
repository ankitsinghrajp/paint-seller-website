import React, { useMemo, useState } from "react";
import Header from "@/components/layout/Header";
import CartPopover from "@/components/cart/CartPopover";
import { Input } from "@/components/ui/input";
import ProductCard from "@/components/product/ProductCard";
import { products } from "@/data/products";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Helmet } from "react-helmet-async";
import { Search, Filter, X, Grid3X3, List, Sparkles, Palette, Zap, Check, MessageCircle, ArrowRight, ArrowLeft, Send } from "lucide-react";

const PAGE_SIZE = 8;

const ProductsPage: React.FC = () => {
  const [query, setQuery] = useState("");
  const [brandFilters, setBrandFilters] = useState<string[]>([]);
  const [applicationFilters, setApplicationFilters] = useState<string[]>([]);
  const [colorFilters, setColorFilters] = useState<string[]>([]);
  const [page, setPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Requirements Form State
  const [requirementsForm, setRequirementsForm] = useState({
    brand: "",
    application: "",
    color: "",
    description: ""
  });

  // Step-by-step Selection State
  const [selectionStep, setSelectionStep] = useState(0);
  const [stepSelection, setStepSelection] = useState({
    brand: "",
    application: "",
    color: "",
    size: ""
  });

  const brands = ["Asian Paints", "Berger", "Dulux", "Nerolac"];
  const applications = ["Interior", "Exterior"];
  const colors = ["White", "Blue", "Red", "Green", "Orange", "Yellow", "Purple", "Pink"];
  const sizes = ["1L", "4L", "10L", "20L"];

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return products.filter((p) => {
      const matchQuery = !q || p.name.toLowerCase().includes(q) || p.features?.some((f) => f.toLowerCase().includes(q));
      const matchBrand = brandFilters.length === 0 || brandFilters.includes(p.brand);
      const matchApp = applicationFilters.length === 0 || applicationFilters.includes(p.application);
      
      // Add color matching - you'll need to add color property to your products data
      const matchColor = colorFilters.length === 0 || colorFilters.includes(p.color || "");
      
      // Apply step selection filters
      const matchStepBrand = !stepSelection.brand || p.brand === stepSelection.brand;
      const matchStepApp = !stepSelection.application || p.application === stepSelection.application;
      const matchStepColor = !stepSelection.color || (p.color && p.color === stepSelection.color);
      
      return matchQuery && matchBrand && matchApp && matchColor && matchStepBrand && matchStepApp && matchStepColor;
    });
  }, [query, brandFilters, applicationFilters, colorFilters, stepSelection]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pageItems = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  // Requirements Form Handlers
  const handleRequirementsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi! I need paint with these requirements:
Brand: ${requirementsForm.brand || 'Any'}
Application: ${requirementsForm.application || 'Any'}
Color: ${requirementsForm.color || 'Any'}
Description: ${requirementsForm.description || 'No specific requirements'}`;
    
    // Replace with your actual WhatsApp number
    const whatsappNumber = "1234567890"; // Update this with your WhatsApp number
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Step Selection Handlers
  const handleStepSelection = (type: keyof typeof stepSelection, value: string) => {
    setStepSelection(prev => ({ ...prev, [type]: value }));
    if (selectionStep < 3) {
      setSelectionStep(selectionStep + 1);
    }
  };

  const handleStepComplete = () => {
    const message = `Hi! I want to order paint:
Brand: ${stepSelection.brand}
Application: ${stepSelection.application}
Color: ${stepSelection.color}
Size: ${stepSelection.size}`;
    
    // Replace with your actual WhatsApp number
    const whatsappNumber = "1234567890"; // Update this with your WhatsApp number
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Reset and apply filters
    setColorFilters([stepSelection.color]);
    setBrandFilters([stepSelection.brand]);
    setApplicationFilters([stepSelection.application]);
    setPage(1);
  };

  const resetStepSelection = () => {
    setSelectionStep(0);
    setStepSelection({ brand: "", application: "", color: "", size: "" });
  };

  const handleBrandClick = (brand: string) => {
    setBrandFilters(prev => {
      const isSelected = prev.includes(brand);
      const newFilters = isSelected 
        ? prev.filter(b => b !== brand)
        : [...prev, brand];
      return newFilters;
    });
    setPage(1);
  };

  const handleApplicationClick = (application: string) => {
    setApplicationFilters(prev => {
      const isSelected = prev.includes(application);
      const newFilters = isSelected
        ? prev.filter(a => a !== application) 
        : [...prev, application];
      return newFilters;
    });
    setPage(1);
  };

  const handleColorClick = (color: string) => {
    setColorFilters(prev => {
      const isSelected = prev.includes(color);
      const newFilters = isSelected
        ? prev.filter(c => c !== color)
        : [...prev, color];
      return newFilters;
    });
    setPage(1);
  };

  const clearAllFilters = () => {
    setBrandFilters([]);
    setApplicationFilters([]);
    setColorFilters([]);
    setQuery("");
    setPage(1);
    resetStepSelection();
  };

  const hasActiveFilters = brandFilters.length > 0 || applicationFilters.length > 0 || colorFilters.length > 0 || query.length > 0 || stepSelection.brand || stepSelection.application || stepSelection.color;

  // Color helper function for better color display
  const getColorStyle = (color: string) => {
    const colorMap: { [key: string]: string } = {
      'White': '#ffffff',
      'Blue': '#3b82f6',
      'Red': '#ef4444',
      'Green': '#22c55e',
      'Orange': '#f97316',
      'Yellow': '#eab308',
      'Purple': '#a855f7',
      'Pink': '#ec4899'
    };
    return colorMap[color] || color.toLowerCase();
  };

  return (
    <div className="min-h-screen pt-20 flex flex-col bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 relative overflow-hidden">
      <Helmet>
        <title>All Paints – Filter by Brand & Application</title>
        <meta name="description" content="Browse interior and exterior paints from Asian Paints, Berger, Dulux, and Nerolac. Filter, search, and paginate easily." />
        <link rel="canonical" href="/products" />
      </Helmet>
      
      <Header />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-green-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-yellow-400/10 to-orange-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Sparkles className="absolute top-20 left-20 w-6 h-6 text-purple-400/30 animate-bounce" style={{ animationDelay: '0.5s' }} />
        <Palette className="absolute top-40 right-32 w-8 h-8 text-pink-400/30 animate-bounce" style={{ animationDelay: '1.5s' }} />
        <Zap className="absolute bottom-32 left-16 w-5 h-5 text-yellow-400/30 animate-bounce" style={{ animationDelay: '2.5s' }} />
      </div>

      <main className="container pt-20 mx-auto flex-1 py-8 px-6 relative z-10">
        
        {/* Header Section */}
        <div className="mb-12">
          <div className="text-center max-w-2xl mx-auto relative">
            <h1 className="text-6xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent mb-6">
              Premium Paint Collection
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              🎨 Transform your space with our stunning collection of premium paints
            </p>
          </div>
        </div>

        {/* Requirements Form Section */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
              💬 Tell Us Your Requirements
            </h2>
            <form onSubmit={handleRequirementsSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Brand Preference</label>
                  <select 
                    value={requirementsForm.brand}
                    onChange={(e) => setRequirementsForm(prev => ({ ...prev, brand: e.target.value }))}
                    className="w-full p-3 border-2 border-blue-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500"
                  >
                    <option value="">Any Brand</option>
                    {brands.map(brand => (
                      <option key={brand} value={brand}>{brand}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Application</label>
                  <select 
                    value={requirementsForm.application}
                    onChange={(e) => setRequirementsForm(prev => ({ ...prev, application: e.target.value }))}
                    className="w-full p-3 border-2 border-blue-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500"
                  >
                    <option value="">Any Application</option>
                    {applications.map(app => (
                      <option key={app} value={app}>{app}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Color</label>
                  <input 
                    type="text"
                    value={requirementsForm.color}
                    onChange={(e) => setRequirementsForm(prev => ({ ...prev, color: e.target.value }))}
                    placeholder="e.g., White, Blue, etc."
                    className="w-full p-3 border-2 border-blue-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Additional Requirements</label>
                <textarea 
                  value={requirementsForm.description}
                  onChange={(e) => setRequirementsForm(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Tell us more about your project..."
                  rows={3}
                  className="w-full p-3 border-2 border-blue-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500"
                />
              </div>
              <div className="text-center">
                <button 
                  type="submit"
                  className="px-8 py-4 bg-green-600 text-white rounded-2xl hover:bg-green-700 transition-all duration-300 inline-flex items-center gap-3 font-bold shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  Send to WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Step-by-Step Selection Section */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
              🎯 Quick Paint Selector
            </h2>
            
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-medium text-gray-700">Step {selectionStep + 1} of 4</span>
                <button 
                  onClick={resetStepSelection}
                  className="text-red-600 hover:text-red-700 text-sm font-medium"
                >
                  Reset
                </button>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-purple-600 to-pink-600 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${((selectionStep + 1) / 4) * 100}%` }}
                />
              </div>
            </div>

            {/* Step Content */}
            <div className="min-h-[200px]">
              {selectionStep === 0 && (
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Select Brand</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {brands.map(brand => (
                      <button
                        key={brand}
                        onClick={() => handleStepSelection('brand', brand)}
                        className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-purple-400"
                      >
                        <div className="text-4xl mb-2">🎨</div>
                        <div className="font-bold text-gray-900">{brand}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {selectionStep === 1 && (
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Select Application for {stepSelection.brand}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-md mx-auto">
                    {applications.map(app => (
                      <button
                        key={app}
                        onClick={() => handleStepSelection('application', app)}
                        className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-green-400"
                      >
                        <div className="text-5xl mb-3">{app === 'Interior' ? '🏠' : '🏢'}</div>
                        <div className="font-bold text-gray-900 text-lg">{app}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {selectionStep === 2 && (
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Select Color for {stepSelection.brand} {stepSelection.application}
                  </h3>
                  <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                    {colors.map(color => (
                      <button
                        key={color}
                        onClick={() => handleStepSelection('color', color)}
                        className="p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-orange-400"
                      >
                        <div 
                          className="w-12 h-12 rounded-full mx-auto mb-2 border-2 border-gray-300"
                          style={{ backgroundColor: getColorStyle(color) }}
                        />
                        <div className="font-bold text-gray-900 text-sm">{color}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {selectionStep === 3 && (
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Select Size
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    {sizes.map(size => (
                      <button
                        key={size}
                        onClick={() => handleStepSelection('size', size)}
                        className={`p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 ${
                          stepSelection.size === size ? 'border-purple-500 bg-purple-50' : 'hover:border-purple-400'
                        }`}
                      >
                        <div className="text-3xl mb-2">🪣</div>
                        <div className="font-bold text-gray-900">{size}</div>
                      </button>
                    ))}
                  </div>
                  
                  {stepSelection.size && (
                    <div className="bg-white rounded-2xl p-6 shadow-lg max-w-md mx-auto">
                      <h4 className="font-bold text-lg mb-4">Your Selection:</h4>
                      <div className="text-left space-y-2 mb-6">
                        <p><strong>Brand:</strong> {stepSelection.brand}</p>
                        <p><strong>Application:</strong> {stepSelection.application}</p>
                        <p><strong>Color:</strong> {stepSelection.color}</p>
                        <p><strong>Size:</strong> {stepSelection.size}</p>
                      </div>
                      <button 
                        onClick={handleStepComplete}
                        className="w-full px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all duration-300 inline-flex items-center justify-center gap-2 font-bold"
                      >
                        <Send className="w-4 h-4" />
                        Send to WhatsApp & Filter Products
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Navigation Buttons */}
            {selectionStep > 0 && selectionStep < 3 && (
              <div className="flex justify-center mt-6">
                <button
                  onClick={() => setSelectionStep(selectionStep - 1)}
                  className="px-6 py-3 bg-gray-600 text-white rounded-xl hover:bg-gray-700 transition-all duration-300 inline-flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Search and Filter Bar */}
      

        {/* Results Summary */}
        <div className="mb-8">
          <div className="flex items-center justify-between bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
            <p className="text-gray-700 text-md">
              <span className="font-semibold text-purple-600">{pageItems.length}</span> of{" "}
              <span className="font-bold text-pink-600">{filtered.length}</span> products
            </p>
            <div className="text-sm text-gray-600 bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full">
              📄 Page {page} of {totalPages}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
          {pageItems.length > 0 ? (
            pageItems.map((product, index) => (
              <div key={product.id} className="transform transition-all duration-500 hover:scale-105">
                <ProductCard 
                  product={{
                    id: product.id,
                    name: product.name,
                    brand: product.brand,
                    application: product.application,
                    pricePerL: product.pricePerL,
                    image: product.image,
                    features: product.features,
                  }} 
                />
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <div className="max-w-md mx-auto bg-white/80 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/50">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-12 h-12 text-purple-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🔍 No products found</h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your search or clearing filters.
                </p>
                <button
                  onClick={clearAllFilters}
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-xl font-bold"
                >
                  Clear all filters
                </button>
              </div>
            </div>
          )}
        </section>

        {/* Pagination */}
        {totalPages > 1 && (
          <section className="flex justify-center">
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-6">
              <Pagination>
                <PaginationContent className="gap-2">
                  <PaginationItem>
                    <PaginationPrevious 
                      href="#" 
                      onClick={(e) => { 
                        e.preventDefault(); 
                        if (page > 1) setPage(page - 1); 
                      }}
                      className={page === 1 ? 'opacity-50 cursor-not-allowed' : ''}
                    />
                  </PaginationItem>
                  
                  {Array.from({ length: Math.min(5, totalPages) }).map((_, i) => {
                    const pageNum = Math.max(1, Math.min(totalPages - 4, page - 2)) + i;
                    if (pageNum > totalPages) return null;
                    
                    return (
                      <PaginationItem key={pageNum}>
                        <PaginationLink 
                          href="#" 
                          isActive={page === pageNum} 
                          onClick={(e) => { 
                            e.preventDefault(); 
                            setPage(pageNum); 
                          }}
                          className="hover:bg-pink-200"
                        >
                          {pageNum}
                        </PaginationLink>
                      </PaginationItem>
                    );
                  })}
                  
                  <PaginationItem>
                    <PaginationNext 
                      href="#" 
                      onClick={(e) => { 
                        e.preventDefault(); 
                        if (page < totalPages) setPage(page + 1); 
                      }}
                      className={page === totalPages ? 'opacity-50 cursor-not-allowed' : ''}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </section>
        )}
      </main>
      
      <CartPopover />
    </div>
  );
};

export default ProductsPage;