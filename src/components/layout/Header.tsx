import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Menu, X, Sparkles, Palette, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import logo from "../../assets/logo.png";

const Header: React.FC = () => {
  const { count, state, openCart } = useCart();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartBounce, setCartBounce] = useState(false);
  const [currentGradient, setCurrentGradient] = useState(0);

  // Gradient backgrounds for dynamic color changes
  const gradients = [
    "from-purple-600 via-pink-500 to-blue-500",
    "from-blue-500 via-teal-400 to-green-400",
    "from-pink-500 via-red-400 to-orange-400",
    "from-indigo-500 via-purple-500 to-pink-400",
    "from-green-400 via-blue-400 to-purple-500"
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animate cart when count changes
  useEffect(() => {
    if (count > 0) {
      setCartBounce(true);
      const timer = setTimeout(() => setCartBounce(false), 600);
      return () => clearTimeout(timer);
    }
  }, [count]);

  // Cycle through gradients
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGradient((prev) => (prev + 1) % gradients.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { path: "/", label: "Home", exact: true, icon: Home },
    { path: "/products", label: "Products", exact: false, icon: Palette }
  ];

  const isActiveLink = (path: string, exact: boolean) => {
    if (exact) {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="w-full fixed top-0 z-50">
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className={`absolute inset-0 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-500 transition-all duration-1000 ease-in-out`}
          style={{ opacity: isScrolled ? 0.95 : 0.85 }}
        />
        <div className="absolute inset-0 backdrop-blur-md" />
        
        {/* Floating animated shapes */}
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float" />
        <div className="absolute top-0 right-1/3 w-24 h-24 bg-white/15 rounded-full blur-lg animate-float-delayed" />
        <div className="absolute -top-8 right-1/4 w-16 h-16 bg-white/20 rounded-full blur-md animate-float-slow" />
        
        {/* Shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-shimmer" />
      </div>

      <nav className={`container mx-auto flex items-center px-4 transition-all duration-500 relative z-10 ${
        isScrolled ? "py-2" : "py-4"
      }`}>
        {/* Logo with enhanced animations */}
        <Link 
          to="/" 
          className="flex items-center gap-3 group transition-all duration-500 hover:scale-110"
        >
          <div className="relative overflow-hidden p-1">
           <img className=" h-12"src={logo} alt="" />
          </div>
       
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2 flex-1 justify-center">
          {navLinks.map((link, index) => {
            const Icon = link.icon;
            const isActive = isActiveLink(link.path, link.exact);
            
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold transition-all duration-500 hover:scale-110 group overflow-hidden ${
                  isActive 
                    ? "text-gray-800 bg-white/25 shadow-lg border border-white/30 backdrop-blur-sm" 
                    : "text-gray-900 hover:text-white hover:bg-white/15"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Animated background */}
                <div className={`absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transition-all duration-500 ${
                  isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`} />
                
                {/* Icon with animation */}
                <Icon className={`w-5 h-5 transition-all duration-500 ${
                  isActive ? "text-yellow-700" : "group-hover:text-yellow-400"
                } ${isActive ? "" : "group-hover:rotate-12"}`} />
                
                {/* Label */}
                <span className="relative z-10 drop-shadow-sm">{link.label}</span>
                
                {/* Animated underline */}
                <span className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-yellow-300 to-pink-300 transition-all duration-500 ${
                  isActive 
                    ? "w-3/4 opacity-100" 
                    : "w-0 opacity-0 group-hover:w-1/2 group-hover:opacity-100"
                }`}></span>
                
                {/* Particle effects for active link */}
                {isActive && (
                  <>
                    <div className="absolute top-1 right-1 w-1 h-1 bg-yellow-300 rounded-full animate-ping" />
                    <div className="absolute bottom-1 left-1 w-1 h-1 bg-pink-300 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
                  </>
                )}
              </Link>
            );
          })}
        </div>

        {/* Cart and Mobile Menu */}
        <div className="flex items-center gap-3 ml-auto">
          {/* Cart Button with enhanced animations */}
          <div className="relative">
            <Button 
              variant="outline" 
              size="icon" 
              aria-label="Open cart" 
              onClick={openCart}
              className={`relative transition-all duration-500 hover:scale-125 hover:rotate-12 border-2 border-white/30 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 hover:border-white/50 group shadow-lg ${
                cartBounce ? "animate-bounce" : ""
              } ${count > 0 ? "border-yellow-300/50 bg-yellow-400/20 shadow-yellow-400/25" : ""}`}
            >
              <ShoppingCart className={`transition-all duration-500 group-hover:text-yellow-200 ${
                count > 0 ? "text-yellow-300" : "text-white"
              } ${cartBounce ? "animate-wiggle" : ""}`} />
              
              {/* Cart button glow effect */}
              <div className="absolute inset-0 rounded-md bg-gradient-to-r from-yellow-400/30 to-pink-400/30 scale-0 group-hover:scale-150 transition-transform duration-500 -z-10 blur-sm"></div>
              
              {/* Sparkle effect */}
              <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-2 h-2 bg-yellow-300 rounded-full animate-ping" />
              </div>
            </Button>
            
            {/* Enhanced Cart Count Badge */}
            {count > 0 && (
              <div className={`absolute -top-2 -right-2 flex items-center justify-center min-w-[22px] h-6 px-2 text-xs font-bold rounded-full transition-all duration-500 ${
                cartBounce ? "animate-pulse scale-125" : "animate-in fade-in slide-in-from-top-1"
              } shadow-lg border-2 border-white bg-gradient-to-r from-red-500 to-pink-500 text-white`}>
                <span className="animate-in fade-in duration-200 drop-shadow-sm">{count}</span>
                
                {/* Pulsing ring */}
                <div className="absolute inset-0 rounded-full bg-red-400 animate-ping opacity-50" />
              </div>
            )}
          </div>

          {/* Enhanced Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden transition-all duration-500 hover:scale-125 hover:rotate-12 text-white hover:bg-white/20 hover:text-yellow-200 backdrop-blur-sm bg-white/10 border border-white/30 shadow-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className="relative w-6 h-6">
              <Menu className={`absolute inset-0 transition-all duration-500 ${
                isMobileMenuOpen ? "rotate-90 opacity-0 scale-0" : "rotate-0 opacity-100 scale-100"
              }`} />
              <X className={`absolute inset-0 transition-all duration-500 ${
                isMobileMenuOpen ? "rotate-0 opacity-100 scale-100" : "-rotate-90 opacity-0 scale-0"
              }`} />
            </div>
          </Button>
        </div>
      </nav>

      {/* Enhanced Mobile Navigation Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ease-out relative ${
        isMobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
      }`}>
        {/* Mobile menu background */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-white/10 backdrop-blur-md border-t border-white/30" />
        
        <div className="container mx-auto px-4 pb-6 relative z-10">
          <div className="flex flex-col gap-3 pt-6">
            {navLinks.map((link, index) => {
              const Icon = link.icon;
              const isActive = isActiveLink(link.path, link.exact);
              
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`relative flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-500 hover:scale-105 group overflow-hidden backdrop-blur-sm border shadow-lg ${
                    isActive 
                      ? "text-white bg-white/25 border-white/30 shadow-white/10" 
                      : "text-white/90 hover:text-white bg-white/15 hover:bg-white/25 border-white/20 hover:border-white/40"
                  }`}
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    animation: isMobileMenuOpen ? 'slideInFromLeft 0.5s ease-out forwards' : 'none',
                    transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-50px)',
                    opacity: isMobileMenuOpen ? 1 : 0
                  }}
                >
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-pink-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Icon */}
                  <Icon className={`w-6 h-6 transition-all duration-500 ${
                    isActive ? "text-yellow-300 " : "group-hover:text-yellow-200 group-hover:rotate-12"
                  }`} />
                  
                  {/* Label */}
                  <span className="relative z-10 drop-shadow-sm text-lg">{link.label}</span>
                  
                  {/* Active indicator */}
                  {isActive && (
                    <div className="absolute left-2 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-yellow-300 to-pink-300 rounded-full animate-in slide-in-from-left-2">
                      <div className="absolute inset-0 bg-yellow-300 rounded-full animate-ping opacity-50" />
                    </div>
                  )}
                  
                  {/* Hover sparkle */}
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Sparkles className="w-4 h-4 text-yellow-300 animate-spin" />
                  </div>
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