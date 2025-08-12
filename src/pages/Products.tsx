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
import { Search, Filter, X, Grid3X3, List } from "lucide-react";

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

  const toggle = (arr: string[], value: string, setter: (v: string[]) => void) => {
    setter(arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value]);
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
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-white">
      <Helmet>
        <title>All Paints – Filter by Brand & Application</title>
        <meta name="description" content="Browse interior and exterior paints from Asian Paints, Berger, Dulux, and Nerolac. Filter, search, and paginate easily." />
        <link rel="canonical" href="/products" />
      </Helmet>
      
      <Header />
      
      <main className="container pt-20 mx-auto flex-1 py-8 px-6">
        
        {/* Header Section */}
        <div className="mb-8 opacity-0 animate-slideInDown">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Premium Paint Collection</h1>
            <p className="text-lg text-gray-600">
              Discover our extensive range of high-quality paints. Filter by brand and application to find your perfect match.
            </p>
          </div>
        </div>

        {/* Search and Filter Bar */}
        <div className="mb-8 opacity-0 animate-slideInUp animation-delay-200">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
            
            {/* Top Bar with Search and Filter Toggle */}
            <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between mb-6">
              
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search paints by name or features..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="pl-10 h-12 border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-300"
                />
                {query && (
                  <button
                    onClick={() => setQuery("")}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Controls */}
              <div className="flex items-center gap-3">
                
                {/* View Mode Toggle */}
                <div className="hidden sm:flex items-center bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-md transition-all duration-200 ${
                      viewMode === 'grid' 
                        ? 'bg-white shadow-sm text-gray-900' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <Grid3X3 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-md transition-all duration-200 ${
                      viewMode === 'list' 
                        ? 'bg-white shadow-sm text-gray-900' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>

                {/* Filter Toggle */}
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                    showFilters || hasActiveFilters
                      ? 'bg-gray-900 text-white shadow-lg' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Filter className="w-4 h-4" />
                  Filters
                  {hasActiveFilters && (
                    <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {brandFilters.length + applicationFilters.length}
                    </span>
                  )}
                </button>

                {/* Clear Filters */}
                {hasActiveFilters && (
                  <button
                    onClick={clearAllFilters}
                    className="text-sm text-gray-600 hover:text-gray-900 underline transition-colors opacity-0 animate-fadeIn"
                  >
                    Clear all
                  </button>
                )}
              </div>
            </div>

            {/* Collapsible Filters */}
            <div className={`transition-all duration-300 ease-out overflow-hidden ${
              showFilters ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="border-t border-gray-200 pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Brand Filters */}
                  <div className="space-y-3">
                    <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                      Brands
                      {brandFilters.length > 0 && (
                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                          {brandFilters.length}
                        </span>
                      )}
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {brands.map((brand, index) => (
                        <label 
                          key={brand} 
                          className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 cursor-pointer transition-all duration-200 opacity-0 animate-slideInLeft"
                          style={{ animationDelay: `${600 + index * 100}ms` }}
                        >
                          <Checkbox 
                            checked={brandFilters.includes(brand)} 
                            onCheckedChange={() => toggle(brandFilters, brand, setBrandFilters)} 
                          />
                          <span className="text-sm font-medium text-gray-700">{brand}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Application Filters */}
                  <div className="space-y-3">
                    <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                      Application
                      {applicationFilters.length > 0 && (
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                          {applicationFilters.length}
                        </span>
                      )}
                    </h3>
                    <div className="grid grid-cols-1 gap-3">
                      {applications.map((app, index) => (
                        <label 
                          key={app} 
                          className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 cursor-pointer transition-all duration-200 opacity-0 animate-slideInRight"
                          style={{ animationDelay: `${800 + index * 100}ms` }}
                        >
                          <Checkbox 
                            checked={applicationFilters.includes(app)} 
                            onCheckedChange={() => toggle(applicationFilters, app, setApplicationFilters)} 
                          />
                          <span className="text-sm font-medium text-gray-700">{app}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results Summary */}
        <div className="mb-6 opacity-0 animate-fadeIn animation-delay-400">
          <div className="flex items-center justify-between">
            <p className="text-gray-600">
              Showing <span className="font-semibold text-gray-900">{pageItems.length}</span> of{" "}
              <span className="font-semibold text-gray-900">{filtered.length}</span> products
            </p>
            <div className="text-sm text-gray-500">
              Page {page} of {totalPages}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <section className={`mb-12 ${
          viewMode === 'grid' 
            ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' 
            : 'space-y-4'
        }`}>
          {pageItems.length > 0 ? (
            pageItems.map((product, index) => (
              <div
                key={product.id}
                className="opacity-0 animate-slideInUp"
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
            <div className="col-span-full text-center py-16 opacity-0 animate-fadeIn animation-delay-600">
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your search terms or filters to find what you're looking for.
                </p>
                <button
                  onClick={clearAllFilters}
                  className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            </div>
          )}
        </section>

        {/* Pagination */}
        {totalPages > 1 && (
          <section className="flex justify-center opacity-0 animate-slideInUp animation-delay-800">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious 
                      href="#" 
                      onClick={(e) => { 
                        e.preventDefault(); 
                        if (page > 1) setPage(page - 1); 
                      }}
                      className={`transition-all duration-200 ${
                        page === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'
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
                          className="transition-all duration-200 hover:scale-105"
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
                      className={`transition-all duration-200 ${
                        page === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'
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