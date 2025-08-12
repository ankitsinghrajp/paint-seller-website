import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/layout/Header";
import CartPopover from "@/components/cart/CartPopover";
import { products } from "@/data/products";
import ColorSwatch from "@/components/ui/ColorSwatch";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { Helmet } from "react-helmet-async";
import { Plus, Minus } from "lucide-react";

const sizeOptions = ["1L", "4L", "10L", "20L"] as const;

type Size = typeof sizeOptions[number];

const ProductDetailPage: React.FC = () => {
  const { id } = useParams();
  const product = useMemo(() => products.find((p) => p.id === id), [id]);
  const { addItem, openCart } = useCart();

  const [selectedColor, setSelectedColor] = useState(product?.colors[0]);
  const [size, setSize] = useState<Size>("1L");
  const [qty, setQty] = useState(1);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [addingToCart, setAddingToCart] = useState(false);

  if (!product) return null;

  const handleAdd = async () => {
    if (!selectedColor) return;
    setAddingToCart(true);
    
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
    }, 300);
  };

  const totalPrice = product.pricePerL * (size === "1L" ? 1 : size === "4L" ? 4 : size === "10L" ? 10 : 20) * qty;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-white">
      <Helmet>
        <title>{product.name} – {product.brand} {product.application} paint</title>
        <meta name="description" content={`Buy ${product.name} by ${product.brand}. Choose colour, size, and quantity. Quick WhatsApp checkout.`} />
        <link rel="canonical" href={`/product/${product.id}`} />
      </Helmet>
      
      <Header />
      
      <main className="container mx-auto flex-1 py-12 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          
          {/* Product Image Section */}
          <section className="space-y-6">
            <div 
              className="group relative rounded-3xl p-8 bg-white shadow-lg shadow-black/5 border border-gray-100 transition-all duration-500 hover:shadow-xl hover:shadow-black/10"
              style={{
                background: `linear-gradient(135deg, ${(selectedColor?.hex || "#ffffff")}08, ${(selectedColor?.hex || "#ffffff")}20)`
              }}
            >
              <div 
                className="rounded-2xl p-8 flex items-center justify-center min-h-[400px] transition-all duration-700 ease-out"
                style={{ 
                  backgroundColor: (selectedColor?.hex || "#ffffff") + "15",
                  transform: imageLoaded ? 'scale(1)' : 'scale(0.95)'
                }}
              >
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className={`max-h-[420px] object-contain transition-all duration-700 ease-out ${
                    imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                  onLoad={() => setImageLoaded(true)}
                />
              </div>
              
              {/* Floating color indicator */}
              {selectedColor && (
                <div className="absolute top-6 right-6 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg transition-all duration-300 group-hover:scale-105">
                  <div 
                    className="w-4 h-4 rounded-full shadow-sm" 
                    style={{ backgroundColor: selectedColor.hex }} 
                  />
                  <span className="text-sm font-medium text-gray-700">{selectedColor.name}</span>
                </div>
              )}
            </div>
          </section>

          {/* Product Details Section */}
          <section className="space-y-8">
            
            {/* Header */}
            <div className="space-y-4 opacity-0 animate-slideInRight">
              <div className="flex items-center gap-3">
                <span className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium transition-colors hover:bg-gray-200">
                  {product.brand}
                </span>
                <div className="w-1 h-1 rounded-full bg-gray-300" />
                <span className="text-sm text-gray-600">{product.application}</span>
              </div>
              
              <h1 className="text-4xl font-bold text-gray-900 leading-tight tracking-tight">
                {product.name}
              </h1>
            </div>

            {/* Color Selection */}
            <div className="space-y-4 opacity-0 animate-slideInRight animation-delay-100">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900">Select Colour</h3>
                
                <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
                  <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 gap-3">
                    {product.colors.slice(0, 20).map((c, index) => (
                      <div
                        key={c.name}
                        className="opacity-0 animate-fadeInUp"
                        style={{ animationDelay: `${200 + index * 50}ms` }}
                      >
                        <ColorSwatch 
                          color={c} 
                          selected={selectedColor?.name === c.name} 
                          onSelect={() => setSelectedColor(c)} 
                        />
                      </div>
                    ))}
                  </div>
                </div>
                
                {selectedColor && (
                  <div className="text-sm text-gray-600 mt-2 opacity-0 animate-slideInRight animation-delay-300">
                    Selected: {selectedColor.name}
                  </div>
                )}
              </div>
            </div>

            {/* Size Selection */}
            <div className="space-y-4 opacity-0 animate-slideInRight animation-delay-200">
              <h3 className="text-lg font-semibold text-gray-900">Size</h3>
              <div className="flex flex-wrap gap-3">
                {sizeOptions.map((s, index) => (
                  <button
                    key={s}
                    className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 opacity-0 animate-fadeInUp ${
                      s === size 
                        ? "bg-gray-900 text-white shadow-lg scale-105" 
                        : "bg-white border-2 border-gray-200 text-gray-700 hover:border-gray-900 hover:scale-105 hover:shadow-md"
                    }`}
                    style={{ animationDelay: `${800 + index * 100}ms` }}
                    onClick={() => setSize(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selection */}
            <div className="space-y-4 opacity-0 animate-slideInRight animation-delay-300">
              <h3 className="text-lg font-semibold text-gray-900">Quantity</h3>
              <div className="flex items-center gap-4">
                <button 
                  className="w-12 h-12 rounded-xl border-2 border-gray-200 bg-white text-gray-700 font-semibold transition-all duration-300 hover:border-gray-900 hover:scale-105 active:scale-95 flex items-center justify-center" 
                  onClick={() => setQty(Math.max(1, qty - 1))}
                >
                  <Minus size={16} />
                </button>
                <div className="w-16 h-12 flex items-center justify-center text-xl font-bold text-gray-900 bg-gray-50 rounded-xl">
                  {qty}
                </div>
                <button 
                  className="w-12 h-12 rounded-xl border-2 border-gray-200 bg-white text-gray-700 font-semibold transition-all duration-300 hover:border-gray-900 hover:scale-105 active:scale-95 flex items-center justify-center" 
                  onClick={() => setQty(qty + 1)}
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Price Display */}
            <div className="opacity-0 animate-slideInRight animation-delay-400">
              <div className="rounded-2xl bg-gradient-to-r from-gray-900 to-gray-800 p-6 text-white shadow-lg">
                <div className="text-sm opacity-80 mb-1">Total Price</div>
                <div className="text-3xl font-bold tracking-tight">₹{totalPrice.toLocaleString()}</div>
              </div>
            </div>

            {/* Add to Cart Button */}
            <div className="opacity-0 animate-slideInRight animation-delay-500">
              <Button 
                variant="hero" 
                onClick={handleAdd}
                disabled={addingToCart}
                className={`w-full h-14 text-lg font-semibold rounded-2xl transition-all duration-300 ${
                  addingToCart 
                    ? "scale-95" 
                    : "hover:scale-105 hover:shadow-lg active:scale-95"
                }`}
              >
                {addingToCart ? (
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    Adding to Cart...
                  </div>
                ) : (
                  "Add to Cart"
                )}
              </Button>
            </div>

            {/* Features Section */}
            <div className="space-y-4 opacity-0 animate-slideInRight animation-delay-600">
              <h3 className="text-xl font-semibold text-gray-900">Product Highlights</h3>
              <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li 
                      key={feature}
                      className="flex items-start gap-3 text-gray-700 opacity-0 animate-slideInLeft"
                      style={{ animationDelay: `${1200 + index * 100}ms` }}
                    >
                      <div className="w-2 h-2 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <CartPopover />
      
    </div>
  );
};

export default ProductDetailPage;