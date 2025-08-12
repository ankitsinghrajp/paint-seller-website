import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import logo from "../../assets/logo.png";

const Header: React.FC = () => {
  const { count, state, openCart } = useCart();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartBounce, setCartBounce] = useState(false);

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

  const navLinks = [
    { path: "/", label: "Home", exact: true },
    { path: "/products", label: "Products", exact: false }
  ];

  const isActiveLink = (path: string, exact: boolean) => {
    if (exact) {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className={`w-full fixed top-0 z-50 transition-all duration-500 ease-out ${
      isScrolled 
        ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border/50" 
        : "bg-background/80 backdrop-blur-sm border-b border-border/20"
    }`}>
      <nav className={`container mx-auto flex items-center px-4 transition-all duration-300 ${
        isScrolled ? "py-2" : "py-4"
      }`}>
        {/* Logo with hover animation */}
        <Link 
          to="/" 
          className="flex items-center gap-2 group transition-transform duration-300 hover:scale-105"
        >
          <div className="relative overflow-hidden rounded-lg">
            <img 
              className={`transition-all duration-300 ${
                isScrolled ? "h-10" : "h-12"
              } group-hover:brightness-110`} 
              src={logo} 
              alt="Logo" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative text-sm font-medium transition-all duration-300 hover:text-primary group px-3 py-2 ${
                isActiveLink(link.path, link.exact) 
                  ? "text-primary" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
              
              {/* Animated underline */}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                isActiveLink(link.path, link.exact) 
                  ? "w-full" 
                  : "w-0 group-hover:w-full"
              }`}></span>
              
              {/* Hover glow effect */}
              <span className="absolute inset-0 rounded-md bg-primary/10 scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></span>
            </Link>
          ))}
        </div>

        {/* Cart and Mobile Menu */}
        <div className="flex items-center gap-3 ml-auto">
          {/* Cart Button */}
          <div className="relative">
            <Button 
              variant="outline" 
              size="icon" 
              aria-label="Open cart" 
              onClick={openCart}
              className={`relative transition-all duration-300 hover:scale-110 hover:shadow-lg border-2 group ${
                cartBounce ? "animate-bounce" : ""
              } ${count > 0 ? "border-primary/50 bg-primary/5" : "hover:border-primary/50"}`}
            >
              <ShoppingCart className={`transition-all duration-300 group-hover:text-primary ${
                count > 0 ? "text-primary" : ""
              }`} />
              
              {/* Cart button glow effect */}
              <div className="absolute inset-0 rounded-md bg-primary/20 scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
            </Button>
            
            {/* Cart Count Badge */}
            {count > 0 && (
              <div className={`absolute -top-2 -right-2 flex items-center justify-center min-w-[20px] h-5 px-1.5 text-xs font-bold rounded-full bg-primary text-primary-foreground transition-all duration-300 ${
                cartBounce ? "animate-pulse scale-110" : "animate-in fade-in slide-in-from-top-1"
              } shadow-lg border-2 border-background`}>
                <span className="animate-in fade-in duration-200">{count}</span>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden transition-transform duration-300 hover:scale-110"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className="relative w-6 h-6">
              <Menu className={`absolute inset-0 transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
              }`} />
              <X className={`absolute inset-0 transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
              }`} />
            </div>
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
        isMobileMenuOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
      }`}>
        <div className="container mx-auto px-4 pb-4 border-t border-border/50">
          <div className="flex flex-col gap-2 pt-4">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`relative px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-primary/10 group ${
                  isActiveLink(link.path, link.exact) 
                    ? "text-primary bg-primary/5" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
                style={{ 
                  animationDelay: `${index * 50}ms`,
                  animation: isMobileMenuOpen ? 'slideInFromLeft 0.3s ease-out forwards' : 'none'
                }}
              >
                {link.label}
                
                {/* Active indicator */}
                {isActiveLink(link.path, link.exact) && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary rounded-r animate-in slide-in-from-left-2"></span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>

   
    </header>
  );
};

export default Header;