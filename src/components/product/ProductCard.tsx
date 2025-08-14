import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export interface ProductCardProps {
  id: string;
  name: string;
  brand: string;
  application: string;
  pricePerL: number;
  image: string;
  features: string[];
  rating?: number;
  warranty?: string;
}

const ProductCard: React.FC<{ product: ProductCardProps }> = ({ product }) => {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
     
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400 animate-pulse" />
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400 opacity-50 animate-pulse" />
        );
      } else {
        stars.push(
          <Star key={i} className="w-3 h-3 text-gray-300" />
        );
      }
    }
    return stars;
  };

  const getFeatureIcon = (feature: string) => {
    if (feature.toLowerCase().includes('velvet')) return '🎨';
    if (feature.toLowerCase().includes('warranty')) return '🛡️';
    if (feature.toLowerCase().includes('voc') || feature.toLowerCase().includes('eco') || feature.toLowerCase().includes('odour')) return '🌿';
    if (feature.toLowerCase().includes('matt') || feature.toLowerCase().includes('smooth')) return '🎨';
    return '•';
  };

  return (
    <article className="relative rounded-2xl bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 shadow-xl border border-gradient-to-r from-purple-200 to-pink-200 p-6 space-y-5 
                     transform transition-all duration-500 ease-out
                     hover:scale-102 hover:shadow-2xl hover:rotate-1
                     hover:from-purple-100 hover:via-pink-100 hover:to-orange-100
                     group overflow-hidden
                     before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent 
                     before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700">
      
      {/* Animated background orbs */}
      <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full opacity-20 animate-bounce"></div>
      <div className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full opacity-30 animate-pulse"></div>
      
      <div className="relative z-10 flex items-center justify-between">
        <Badge className="bg-gradient-to-r from-violet-500 to-purple-600 text-white border-0 animate-pulse">{product.brand}</Badge>
        <div className="size-3 rounded-full bg-gradient-to-r from-emerald-400 to-green-500 animate-ping shadow-lg shadow-green-500/50" />
      </div>
           
      <h3 className="relative z-10 text-lg font-bold leading-snug min-h-12 bg-gradient-to-r from-gray-800 via-purple-800 to-pink-800 bg-clip-text text-transparent 
                   transition-all duration-300 group-hover:from-purple-600 group-hover:via-pink-600 group-hover:to-orange-600">
        {product.name}
      </h3>
           
      <div className="relative z-10 rounded-2xl p-5 bg-gradient-to-br from-white/80 to-gray-50/80 backdrop-blur-sm flex items-center justify-center
                    shadow-inner border border-white/50 transition-all duration-500
                    group-hover:shadow-lg group-hover:from-white/90 group-hover:to-purple-50/90">
        <img src={product.image} alt={product.name} 
             className="h-40 object-contain transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 filter group-hover:drop-shadow-lg" />
      </div>
           
      <div className="relative z-10 flex items-center justify-between">
       
        {product.rating && (
          <div className="flex items-center space-x-1 transform transition-all duration-300 group-hover:scale-110">
            <div className="flex items-center space-x-1 p-2 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full">
              {renderStars(product.rating)}
            </div>
            <span className="text-sm font-bold text-gray-800 ml-1 animate-bounce">
              {product.rating}
            </span>
          </div>
        )}
      </div>
           
      <ul className="relative z-10 text-sm space-y-2">
        {product.features.slice(0, 2).map((feature, idx) => (
          <li key={idx} className="flex items-center space-x-3 p-2 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 
                                 transform transition-all duration-300 hover:scale-105 hover:from-blue-100 hover:to-indigo-100
                                 border border-blue-200/50">
            <span className="text-lg animate-bounce" style={{animationDelay: `${idx * 200}ms`}}>
              {getFeatureIcon(feature)}
            </span>
            <span className="text-gray-700 font-medium">{feature}</span>
          </li>
        ))}
        {product.warranty && (
          <li className="flex items-center space-x-3 p-2 rounded-lg bg-gradient-to-r from-emerald-50 to-green-50
                         transform transition-all duration-300 hover:scale-105 hover:from-emerald-100 hover:to-green-100
                         border border-emerald-200/50">
            <span className="text-lg animate-spin">🛡️</span>
            <span className="text-gray-700 font-medium">{product.warranty}</span>
          </li>
        )}
      </ul>
           
      <Link to={`/product/${product.id}`} className="relative z-10 block">
        <Button className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 hover:from-purple-700 hover:via-pink-700 hover:to-red-600 
                         text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl
                         transform transition-all duration-300 hover:scale-105 hover:-translate-y-1
                         border-0 relative overflow-hidden
                         before:absolute before:inset-0 before:bg-white/20 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-500">
          <span className="relative z-10 flex items-center justify-center space-x-2">
            <span>View Details</span>
            <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
          </span>
        </Button>
      </Link>
    </article>
  );
};

export default ProductCard;