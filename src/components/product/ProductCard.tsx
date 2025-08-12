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
          <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400 opacity-50" />
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
    <article className="rounded-xl bg-card shadow-elegant p-5 space-y-4 hover-scale">
      <div className="flex items-center justify-between">
        <Badge variant="secondary">{product.brand}</Badge>
        <div className="size-2 rounded-full bg-emerald-500" />
      </div>
      
      <h3 className="text-lg font-semibold leading-snug min-h-12">{product.name}</h3>
      
      <div className="rounded-xl p-4 bg-muted/40 flex items-center justify-center">
        <img src={product.image} alt={product.name} className="h-40 object-contain" />
      </div>
      
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xl font-bold">₹{product.pricePerL}</div>
          <div className="text-sm text-muted-foreground">per 1L</div>
        </div>
        {product.rating && (
          <div className="flex items-center space-x-1">
            <div className="flex items-center space-x-1">
              {renderStars(product.rating)}
            </div>
            <span className="text-sm font-medium text-gray-700 ml-1">
              {product.rating}
            </span>
          </div>
        )}
      </div>
      
      <ul className="text-sm text-muted-foreground space-y-1">
        {product.features.slice(0, 2).map((feature, idx) => (
          <li key={idx} className="flex items-center space-x-2">
            <span className="text-base">{getFeatureIcon(feature)}</span>
            <span>{feature}</span>
          </li>
        ))}
        {product.warranty && (
          <li className="flex items-center space-x-2">
            <span className="text-blue-500">🛡️</span>
            <span>{product.warranty}</span>
          </li>
        )}
      </ul>
      
      <Link to={`/product/${product.id}`}>
        <Button variant="hero" className="w-full">View Details →</Button>
      </Link>
    </article>
  );
};

export default ProductCard;