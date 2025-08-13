import React, { useMemo, useState } from "react";
import Header from "@/components/layout/Header";
import CartPopover from "@/components/cart/CartPopover";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
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
import { Search, Filter, X, Grid3X3, List, Sparkles, Palette, Zap } from "lucide-react";

const PAGE_SIZE = 8;

const ProductsPage: React.FC = () => {
  const [query, setQuery] = useState("");
  const [brandFilters, setBrandFilters] = useState<string[]>([]);
  const [applicationFilters, setApplicationFilters] = useState<string[]>([]);
  const [page, setPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const brands = ["Asian Paints", "Berger", "Dulux", "Nerolac"];
  const applications = ["Interior", "Exterior"];

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return products.filter((p) => {
      const matchQuery = !q || p.name.toLowerCase().includes(q) || p.features.some((f) => f.toLowerCase().includes(q));
      const matchBrand = brandFilters.length === 0 || brandFilters.includes(p.brand);
      const matchApp = applicationFilters.length === 0 || applicationFilters.includes(p.application);
      return matchQuery && matchBrand && matchApp;
    });
  }, [query, brandFilters, applicationFilters]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pageItems = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  // FIXED: More robust toggle handlers that handle all possible checkbox states
  const toggleBrandFilter = (brand: string) => {
    setBrandFilters(prev => {
      const isSelected = prev.includes(brand);
      if (isSelected) {
        return prev.filter(b => b !== brand);
      } else {
        return [...prev, brand];
      }
    });
    setPage(1);
  };

  const toggleApplicationFilter = (application: string) => {
    setApplicationFilters(prev => {
      const isSelected = prev.includes(application);
      if (isSelected) {
        return prev.filter(a => a !== application);
      } else {
        return [...prev, application];
      }
    });
    setPage(1);
  };

  const clearAllFilters = () => {
    setBrandFilters([]);
    setApplicationFilters([]);
    setQuery("");
    setPage(1);
  };

  const hasActiveFilters = brandFilters.length > 0 || applicationFilters.length > 0 || query.length > 0;

  return (
    <div className="min-h-screen  pt-20 flex flex-col bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 relative overflow-hidden">
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
        
        {/* Animated Header Section */}
        <div className="mb-12 opacity-0 animate-slideInDown">
          <div className="text-center max-w-2xl mx-auto relative">
            <div className="relative inline-block">
              <h1 className="text-6xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent mb-6">
                Premium Paint Collection
              </h1>
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-orange-500/20 blur-xl rounded-full animate-pulse" />
            </div>
            <p className="text-xl text-gray-700 leading-relaxed">
              🎨 Transform your space with our stunning collection of premium paints
            </p>
          </div>
        </div>

        {/* Enhanced Search and Filter Bar */}
        <div className="mb-8 opacity-0 animate-slideInUp animation-delay-200">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-8 relative overflow-hidden">
            
            {/* Animated Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-orange-500/5 animate-pulse" />
            
            {/* Top Bar */}
            <div className="flex flex-col lg:flex-row gap-6 items-stretch lg:items-center justify-between mb-8 relative z-10">
              
              {/* Enhanced Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-500 w-6 h-6" />
                <Input
                  placeholder="🔍 Search paints..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="pl-12 h-14 border-2 border-purple-200 rounded-2xl focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 bg-white/90 text-lg placeholder-gray-500"
                />
                {query && (
                  <button
                    onClick={() => setQuery("")}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-purple-600 transition-all duration-300 hover:scale-110"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>

              {/* Enhanced Controls */}
              <div className="flex items-center gap-4">
                
                {/* View Mode Toggle */}
                <div className="flex items-center bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-1.5 shadow-inner">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-3 rounded-xl transition-all duration-300 ${
                      viewMode === 'grid' 
                        ? 'bg-white shadow-lg text-purple-600 scale-105' 
                        : 'text-gray-600 hover:text-purple-600 hover:scale-105'
                    }`}
                  >
                    <Grid3X3 className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-3 rounded-xl transition-all duration-300 ${
                      viewMode === 'list' 
                        ? 'bg-white shadow-lg text-purple-600 scale-105' 
                        : 'text-gray-600 hover:text-purple-600 hover:scale-105'
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>

                {/* Filter Toggle */}
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className={`relative flex items-center gap-3 px-6 py-3 rounded-2xl font-bold transition-all duration-500 transform hover:scale-105 ${
                    showFilters || hasActiveFilters
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-xl' 
                      : 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 hover:from-purple-100 hover:to-pink-100'
                  }`}
                >
                  <Filter className="w-5 h-5" />
                  Filters
                  {hasActiveFilters && (
                    <span className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-400 to-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold animate-bounce">
                      {brandFilters.length + applicationFilters.length}
                    </span>
                  )}
                </button>

                {/* Clear Filters */}
                {hasActiveFilters && (
                  <button
                    onClick={clearAllFilters}
                    className="text-sm text-gray-600 hover:text-red-500 underline transition-all duration-300 hover:scale-105 font-medium"
                  >
                    ✨ Clear all
                  </button>
                )}
              </div>
            </div>

            {/* Enhanced Collapsible Filters */}
            <div className={`transition-all duration-500 ease-out overflow-hidden ${
              showFilters ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="border-t-2 border-gradient-to-r from-purple-200 to-pink-200 pt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  
                  {/* Brand Filters - COMPLETELY FIXED */}
                  <div className="space-y-4">
                    <h3 className="font-bold text-xl text-gray-900 flex items-center gap-3">
                      🏷️ Brands
                      {brandFilters.length > 0 && (
                        <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-white text-sm px-3 py-1 rounded-full font-bold animate-pulse">
                          {brandFilters.length}
                        </span>
                      )}
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {brands.map((brand, index) => (
                        <div 
                          key={brand}
                          className={`flex items-center gap-3 p-4 rounded-2xl border-2 border-purple-200 hover:border-purple-400 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                            brandFilters.includes(brand) ? 'bg-gradient-to-r from-purple-100 to-pink-100 border-purple-400' : 'bg-white/70'
                          }`}
                        >
                          <Checkbox 
                            checked={brandFilters.includes(brand)} 
                            onCheckedChange={() => toggleBrandFilter(brand)}
                            className="data-[state=checked]:bg-purple-500 data-[state=checked]:border-purple-500"
                          />
                          <span className="text-sm font-bold text-gray-800 pointer-events-none">{brand}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Application Filters - COMPLETELY FIXED */}
                  <div className="space-y-4">
                    <h3 className="font-bold text-xl text-gray-900 flex items-center gap-3">
                      🏠 Application
                      {applicationFilters.length > 0 && (
                        <span className="bg-gradient-to-r from-green-400 to-blue-500 text-white text-sm px-3 py-1 rounded-full font-bold animate-pulse">
                          {applicationFilters.length}
                        </span>
                      )}
                    </h3>
                    <div className="grid grid-cols-1 gap-3">
                      {applications.map((app, index) => (
                        <div 
                          key={app}
                          onClick={() => toggleApplicationFilter(app)}
                          className={`flex items-center gap-3 p-4 rounded-2xl border-2 border-green-200 hover:border-green-400 hover:bg-gradient-to-r hover:from-green-50 hover:to-blue-50 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                            applicationFilters.includes(app) ? 'bg-gradient-to-r from-green-100 to-blue-100 border-green-400' : 'bg-white/70'
                          }`}
                        >
                          <Checkbox 
                            checked={applicationFilters.includes(app)} 
                            onCheckedChange={() => toggleApplicationFilter(app)}
                            className="data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500"
                          />
                          <span className="text-sm font-bold text-gray-800 pointer-events-none">{app === 'Interior' ? '🏠 ' : '🏢 '}{app}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Results Summary */}
        <div className="mb-8 opacity-0 animate-fadeIn animation-delay-400">
          <div className="flex items-center justify-between bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
            <p className="text-gray-700 text-lg">
              ✨ Showing <span className="font-bold text-purple-600">{pageItems.length}</span> of{" "}
              <span className="font-bold text-pink-600">{filtered.length}</span> magical products
            </p>
            <div className="text-sm text-gray-600 bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full">
              📄 Page {page} of {totalPages}
            </div>
          </div>
        </div>

        {/* Enhanced Products Grid */}
        <section className={`mb-12 ${
          viewMode === 'grid' 
            ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8' 
            : 'space-y-6'
        }`}>
          {pageItems.length > 0 ? (
            pageItems.map((product, index) => (
              <div
                key={product.id}
                className="opacity-0 animate-slideInUp transform transition-all duration-500 hover:scale-105"
                style={{ animationDelay: `${600 + index * 100}ms` }}
              >
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
            <div className="col-span-full text-center py-20 opacity-0 animate-fadeIn animation-delay-600">
              <div className="max-w-md mx-auto bg-white/80 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/50">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                  <Search className="w-12 h-12 text-purple-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🔍 No magical paints found</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Don't worry! Try adjusting your search or clearing filters to discover more amazing products.
                </p>
                <button
                  onClick={clearAllFilters}
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-xl font-bold"
                >
                  ✨ Clear all filters
                </button>
              </div>
            </div>
          )}
        </section>

        {/* Enhanced Pagination */}
        {totalPages > 1 && (
          <section className="flex justify-center opacity-0 animate-slideInUp animation-delay-800">
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
                      className={`px-4 py-2 rounded-xl transition-all duration-300 hover:scale-110 ${
                        page === 1 
                          ? 'opacity-50 cursor-not-allowed bg-gray-100' 
                          : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 shadow-lg'
                      }`}
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
                          className={`px-4 py-2 rounded-xl transition-all duration-300 hover:scale-110 font-bold ${
                            page === pageNum
                              ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                              : 'bg-white/70 text-gray-700 hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100'
                          }`}
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
                      className={`px-4 py-2 rounded-xl transition-all duration-300 hover:scale-110 ${
                        page === totalPages 
                          ? 'opacity-50 cursor-not-allowed bg-gray-100' 
                          : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 shadow-lg'
                      }`}
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