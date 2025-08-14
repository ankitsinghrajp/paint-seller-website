import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Menu, X, Home, Package, Sparkles, Paintbrush } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import logo from "../../assets/unboxxit.jpg";

const Header: React.FC = () => {
  const { count, openCart } = useCart();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest('[data-mobile-menu]')) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  const navLinks = [
    { path: "/", label: "Home", exact: true, icon: Home },
    {path:"/paint-selector",label:"Paint Selector", exact:false, icon: Paintbrush},
    { path: "/products", label: "All Products", exact: false, icon: Package }
  ];

  const isActiveLink = (path: string, exact: boolean) => {
    if (exact) {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="w-full py-2 fixed top-0 z-50">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 opacity-95" />
        <div className="absolute inset-0 backdrop-blur-sm" />
        
        {/* Subtle decorative elements */}
        <div className="absolute top-0 left-1/4 w-20 h-20 bg-blue-200/20 rounded-full blur-xl opacity-60"></div>
        <div className="absolute top-0 right-1/3 w-16 h-16 bg-purple-200/20 rounded-full blur-lg opacity-70"></div>
        
        {/* Border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      </div>

      <nav className={`container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 transition-all duration-300 relative z-10 ${
        isScrolled ? "py-2 sm:py-2.5" : "py-3 sm:py-4"
      }`}>
        
        {/* Logo with subtle animation */}
        <Link
  to="/"
  className="flex items-center gap-3 group transition-transform duration-200 hover:scale-105"
>
  {/* Logo with hover glow */}
  <div className="relative flex-shrink-0">
    <img
      className="h-auto w-14 rounded-md shadow-lg shadow-black/30 sm:h-11 lg:h-12 drop-shadow-sm"
      src={logo}
      alt="Unboxxit Logo"
    />
    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
  </div>

  {/* Brand name and tagline */}
  <div className="flex flex-col leading-tight">
    <span className="text-lg font-bold tracking-wide text-gray-900 group-hover:text-primary">
      Unboxxit
    </span>
    <span className="text-sm italic text-gray-600">
      Premium Paints
    </span>
  </div>
        </Link>


        {/* Desktop Navigation - Enhanced Design */}
        <div className="hidden md:flex items-center gap-2 lg:gap-3">
          {navLinks.map((link, index) => {
            const Icon = link.icon;
            const isActive = isActiveLink(link.path, link.exact);
            
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative flex items-center gap-2 px-4 py-2.5 lg:px-6 lg:py-3 rounded-xl font-semibold transition-all duration-200 group overflow-hidden ${
                  isActive 
                    ? "text-white bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg shadow-blue-500/25 scale-105" 
                    : "text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-400 hover:to-indigo-400 hover:shadow-md hover:scale-105"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Background shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <Icon className={`w-4 h-4 lg:w-5 lg:h-5 transition-all duration-200 ${
                  isActive ? "text-white drop-shadow-sm" : "group-hover:scale-110"
                }`} />
                <span className="relative z-10 text-sm lg:text-base drop-shadow-sm">{link.label}</span>
                
              </Link>
            );
          })}
        </div>

        {/* Right Actions - Enhanced */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Cart Button - Enhanced Design */}
          <Button 
            onClick={openCart}
            className="relative p-2.5 sm:p-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-xl transition-all duration-200 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-110 group"
            aria-label={`Cart ${count > 0 ? `(${count} items)` : ''}`}
          >
            <ShoppingCart className="w-5 h-5 group-hover:rotate-12 transition-transform duration-200" />
            
            {/* Sparkle effect */}
            <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Sparkles className="w-3 h-3 text-yellow-300 animate-pulse" />
            </div>
            
            {/* Cart Count Badge */}
            {count > 0 && (
              <span className="absolute -top-2 -right-2 flex items-center justify-center min-w-[20px] h-5 px-1.5 text-xs font-bold rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white border-2 border-white shadow-lg animate-pulse">
                {count > 99 ? '99+' : count}
              </span>
            )}
          </Button>

          {/* Mobile Menu Button */}
          <div className="md:hidden" data-mobile-menu>
            <Button
              variant="ghost"
              className="p-2.5 text-gray-700 hover:bg-white/50 rounded-xl transition-all duration-200 hover:scale-110 border border-gray-200/50 backdrop-blur-sm"
              onClick={(e) => {
                e.stopPropagation();
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
              aria-label="Toggle navigation menu"
            >
              <div className="relative w-5 h-5">
                <Menu className={`absolute inset-0 transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-90 opacity-0 scale-75" : "rotate-0 opacity-100 scale-100"
                }`} />
                <X className={`absolute inset-0 transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-0 opacity-100 scale-100" : "-rotate-90 opacity-0 scale-75"
                }`} />
              </div>
            </Button>
          </div>
        </div>
      </nav>

      {/* Compact Mobile Menu - No Full Screen Overlay */}
      <div 
        className={`md:hidden relative transition-all duration-300 ease-out ${
          isMobileMenuOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
        data-mobile-menu
      >
        {/* Menu Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-blue-50/80 backdrop-blur-sm border-t border-gray-200/50"></div>
        
        <div className="container mx-auto px-4 py-3 relative z-10">
          <div className="flex flex-col gap-1">
            {navLinks.map((link, index) => {
              const Icon = link.icon;
              const isActive = isActiveLink(link.path, link.exact);
              
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-lg font-medium transition-all duration-200 ${
                    isActive 
                      ? "text-white bg-gradient-to-r from-blue-500 to-indigo-500 shadow-md transform scale-102" 
                      : "text-gray-700 hover:bg-white/70 hover:text-blue-600 active:scale-98"
                  }`}
                  style={{ 
                    animationDelay: `${index * 50}ms`,
                    transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                    animation: isMobileMenuOpen ? `slideIn 0.3s ease-out ${index * 50}ms forwards` : 'none'
                  }}
                >
                  <Icon className={`w-5 h-5 ${
                    isActive ? "text-white" : "text-gray-600"
                  }`} />
                  <span className="drop-shadow-sm">{link.label}</span>
                  
                  {/* Active indicator */}
                  {isActive && (
                    <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;