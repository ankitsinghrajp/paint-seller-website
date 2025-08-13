import React, { useMemo, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/layout/Header";
import CartPopover from "@/components/cart/CartPopover";
import { products } from "@/data/products";
import ColorSwatch from "@/components/ui/ColorSwatch";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { Helmet } from "react-helmet-async";
import { Plus, Minus, ShoppingCart, Heart, Share2, Star, Zap, Shield, Truck } from "lucide-react";

const sizeOptions = ["1L", "4L", "10L", "20L"] as const;

type Size = typeof sizeOptions[number];

// Enhanced ColorSwatch component with animations
const AnimatedColorSwatch = ({ color, selected, onSelect, delay = 0 }) => (
  <div 
    className={`relative w-10 h-10 rounded-full cursor-pointer transition-all duration-500 hover:scale-110 hover:rotate-6 group animate-bounce-in`}
    style={{ 
      backgroundColor: color.hex,
      animationDelay: `${delay}ms`,
      boxShadow: selected 
        ? `0 0 0 2px white, 0 0 0 4px ${color.hex}, 0 4px 15px ${color.hex}40`
        : `0 2px 8px ${color.hex}30`
    }}
    onClick={() => onSelect(color)}
  >
    {selected && (
      <div className="absolute inset-0 rounded-full bg-white/20 animate-pulse" />
    )}
   
  </div>
);

const ProductDetailPage: React.FC = () => {
  const { id } = useParams();
  const product = useMemo(() => products.find((p) => p.id === id), [id]);
  const { addItem, openCart } = useCart();
  const [selectedColor, setSelectedColor] = useState(product?.colors[0]);
  const [size, setSize] = useState<Size>("1L");
  const [qty, setQty] = useState(1);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [addingToCart, setAddingToCart] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [showParticles, setShowParticles] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setImageLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  if (!product) return null;

  const handleAddToCart = async () => {
    if (!selectedColor) return;
    setAddingToCart(true);
    setShowParticles(true);
    
    // Simulate loading state for better UX
    setTimeout(() => {
      addItem({
        productId: product.id,
        name: product.name,
        brand: product.brand,
        application: product.application,
        pricePerL: product.pricePerL,
        size,
        quantity: qty,
        color: selectedColor,
        image: product.image,
      });
      openCart();
      setAddingToCart(false);
      setShowParticles(false);
    }, 2000);
  };

  const totalPrice = product.pricePerL * (size === "1L" ? 1 : size === "4L" ? 4 : size === "10L" ? 10 : 20) * qty;

  return (
    <div className="min-h-screen pt-28 flex flex-col bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 relative overflow-hidden">
      <Helmet>
        <title>{product.name} – {product.brand} {product.application} paint</title>
        <meta name="description" content={`Buy ${product.name} by ${product.brand}. Choose colour, size, and quantity. Quick WhatsApp checkout.`} />
        <link rel="canonical" href={`/product/${product.id}`} />
      </Helmet>
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-60 h-60 bg-gradient-to-br from-pink-300/30 to-purple-400/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-32 right-20 w-72 h-72 bg-gradient-to-br from-blue-300/30 to-teal-400/30 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-gradient-to-br from-yellow-300/30 to-orange-400/30 rounded-full blur-3xl animate-float-slow"></div>
      </div>

      {/* Particle Effect */}
      {showParticles && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full animate-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 100}ms`
              }}
            />
          ))}
        </div>
      )}

      {/* Header */}
      <Header />

      <main className="container mx-auto py-6 px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* Product Image Section */}
          <section className="space-y-4 animate-slide-in-left">
            <div className="relative group">
              <div 
                className="rounded-2xl p-8 bg-white/60 backdrop-blur-lg shadow-2xl border border-white/30 transition-all duration-700 hover:shadow-3xl hover:scale-102 overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${selectedColor?.hex}15, ${selectedColor?.hex}05, white)`
                }}
              >
                {/* Animated rings */}
                <div className="absolute inset-0 rounded-2xl">
                  <div 
                    className="absolute inset-3 rounded-xl border-2 opacity-20 animate-spin-slow"
                    style={{ borderColor: selectedColor?.hex }}
                  />
                  <div 
                    className="absolute inset-6 rounded-xl border border-dashed opacity-30 animate-reverse-spin"
                    style={{ borderColor: selectedColor?.hex }}
                  />
                </div>

                <div className="relative z-10 flex items-center justify-center min-h-[300px]">
                  <div 
                    className="relative transition-all duration-1000 ease-out"
                    style={{ 
                      transform: imageLoaded ? 'scale(1) rotate(0deg)' : 'scale(0.8) rotate(-10deg)',
                      filter: `drop-shadow(0 15px 30px ${selectedColor?.hex}40)`
                    }}
                  >
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className={`max-h-[280px] object-contain transition-all duration-1000 ${
                        imageLoaded ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                    
                    {/* Floating elements around the image */}
                    <div className="absolute -bottom-4 -left-4 w-4 h-4 bg-gradient-to-br from-blue-400 to-teal-500 rounded-full animate-float-delayed opacity-80"></div>
                    <div className="absolute top-1/2 -right-6 w-3 h-3 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-bounce opacity-80"></div>
                  </div>
                </div>

                {/* Color indicator */}
                {selectedColor && (
                  <div className="absolute top-4 right-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-xl shadow-lg transition-all duration-500 hover:scale-105">
                    <div 
                      className="w-4 h-4 rounded-full shadow-lg animate-pulse" 
                      style={{ backgroundColor: selectedColor.hex }} 
                    />
                    <span className="text-xs font-semibold text-gray-700">{selectedColor.name}</span>
                  </div>
                )}
              </div>

            </div>
               {/* Total price */}
             <div className="animate-fade-in-up  hidden md:block" style={{ animationDelay: '800ms' }}>
              <div className="rounded-2xl bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 p-6 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-500/20 to-gray-500/20 animate-pulse"></div>
                <div className="relative z-10">
                  <div className="text-sm opacity-80 mb-1 flex items-center gap-2">
                    <Truck className="w-4 h-4" />
                    Total Price 
                  </div>
                  <div className="text-3xl font-black tracking-tight">₹{totalPrice.toLocaleString()}</div>
                  <div className="text-sm opacity-70 mt-1">
                    ₹{product.pricePerL}/L • {size} • {qty} unit{qty > 1 ? 's' : ''}
                  </div>
                </div>
              </div>
            </div>

          </section>

          {/* Product Details Section */}
          <section className="space-y-5 animate-slide-in-right">
            
            {/* Header */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 animate-fade-in">
                <span className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-sm font-semibold border border-purple-200">
                  {product.brand}
                </span>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm text-gray-600 font-medium">{product.application}</span>
                </div>
              </div>
              
              <h1 className="text-3xl lg:text-4xl font-black text-gray-900 leading-tight tracking-tight animate-slide-in-up">
                <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                  {product.name}
                </span>
              </h1>
            </div>

            {/* Color Selection */}
            <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <div className="flex items-center gap-3">
                <h3 className="text-lg font-bold text-gray-900">Choose Color</h3>
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 animate-pulse"></div>
              </div>
              
              <div className="rounded-2xl bg-white backdrop-blur-md border border-white/50 p-5 shadow-xl">
                <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 gap-3">
                  {product.colors.slice(0, 20).map((color, index) => (
                    <AnimatedColorSwatch 
                      key={color.name}
                      color={color} 
                      selected={selectedColor?.name === color.name} 
                      onSelect={setSelectedColor}
                      delay={index * 100}
                    />
                  ))}
                </div>
                
                {selectedColor && (
                  <div className="text-center mt-4 p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl animate-fade-in">
                    <span className="text-md font-semibold text-gray-800">
                      Selected: <span>{selectedColor.name}</span>
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Size Selection */}
            <div className="flex md:flex-row flex-col justify-between">
            <div className="space-y-2 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <h3 className="text-md font-bold text-gray-900 flex items-center gap-2">
                <span>Size Options</span>
                <Shield className="w-4 h-4 text-green-500" />
              </h3>
              <div className="flex flex-wrap gap-3">
                {sizeOptions.map((s, index) => (
                  <button
                    key={s}
                    className={`px-4 py-2 rounded-xl font-semibold text-xs transition-all duration-500 hover:scale-105 hover:rotate-1 transform ${
                      s === size 
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-xl scale-105" 
                        : "bg-white/70 backdrop-blur-md border-2 border-gray-200 text-gray-700 hover:border-purple-400 hover:shadow-lg"
                    }`}
                    style={{ animationDelay: `${600 + index * 150}ms` }}
                    onClick={() => setSize(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selection */}
            <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
              <h3 className="text-md font-bold text-gray-900">Quantity</h3>
              <div className="flex items-center gap-4">
                <button 
                  className="w-8 h-8 rounded-md bg-gradient-to-r from-red-400 to-pink-500 text-white font-bold transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center shadow-lg hover:shadow-xl" 
                  onClick={() => setQty(Math.max(1, qty - 1))}
                >
                  <Minus size={12} />
                </button>
                <div className="w-10 h-10 flex items-center justify-center text-xs font-semibold text-gray-900 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl border-2 border-purple-200">
                  {qty}
                </div>
                <button 
                  className="w-8 h-8 rounded-md bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center shadow-lg hover:shadow-xl" 
                  onClick={() => setQty(qty + 1)}
                >
                  <Plus size={12} />
                </button>
              </div>
            </div>
            </div>

            {/* Price Display */}
            <div className="animate-fade-in-up block md:hidden" style={{ animationDelay: '800ms' }}>
              <div className="rounded-2xl bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 p-6 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-500/20 to-gray-500/20 animate-pulse"></div>
                <div className="relative z-10">
                  <div className="text-sm opacity-80 mb-1 flex items-center gap-2">
                    <Truck className="w-4 h-4" />
                    Total Price 
                  </div>
                  <div className="text-3xl font-black tracking-tight">₹{totalPrice.toLocaleString()}</div>
                  <div className="text-sm opacity-70 mt-1">
                    ₹{product.pricePerL}/L • {size} • {qty} unit{qty > 1 ? 's' : ''}
                  </div>
                </div>
              </div>
            </div>

            {/* Add to Cart Button */}
            <div className="animate-fade-in-up" style={{ animationDelay: '1000ms' }}>
              <Button 
                variant="hero" 
                onClick={handleAddToCart}
                disabled={addingToCart}
                className={`w-full h-14 text-lg font-black rounded-2xl transition-all duration-500 relative overflow-hidden ${
                  addingToCart 
                    ? "bg-gradient-to-r from-green-400 to-blue-500 scale-95" 
                    : "bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 hover:shadow-2xl active:scale-95"
                } text-white shadow-xl`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-shimmer"></div>
                <div className="relative z-10 flex items-center justify-center gap-3">
                  {addingToCart ? (
                    <>
                      <div className="w-5 h-5 border-3 border-current border-t-transparent rounded-full animate-spin" />
                      Added to Cart! 🎉
                    </>
                  ) : (
                    <>
                      <ShoppingCart size={20} />
                      Add to Cart
                    </>
                  )}
                </div>
              </Button>
            </div>

            {/* Features Section - Made collapsible on smaller screens */}
            <div className="space-y-4 animate-fade-in-up lg:hidden" style={{ animationDelay: '1200ms' }}>
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                Product Highlights
              </h3>
              <div className="rounded-2xl bg-white/70 backdrop-blur-md border border-white/50 p-5 shadow-xl">
                <ul className="space-y-2">
                  {product.features.slice(0, 3).map((feature, index) => (
                    <li 
                      key={feature}
                      className="flex items-start gap-3 text-gray-700 animate-slide-in-left text-sm"
                      style={{ animationDelay: `${1400 + index * 200}ms` }}
                    >
                      <div className="w-4 h-4 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      </div>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* Features Section for larger screens */}
        <div className="hidden lg:block mt-8 max-w-6xl mx-auto animate-fade-in-up" style={{ animationDelay: '1200ms' }}>
          <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2 mb-6">
            <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
            Product Highlights
          </h3>
          <div className="rounded-3xl bg-white/70 backdrop-blur-md border border-white/50 p-8 shadow-xl">
            <div className="grid grid-cols-2 gap-4">
              {product.features.map((feature, index) => (
                <div 
                  key={feature}
                  className="flex items-start gap-4 text-gray-700 animate-slide-in-left"
                  style={{ animationDelay: `${1400 + index * 200}ms` }}
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-lg font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <CartPopover />
    
    </div>
  );
};

export default ProductDetailPage;