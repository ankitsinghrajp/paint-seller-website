import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Heart, Star } from "lucide-react";
import { Product } from "@/types/paint";

interface ProductCardProps {
  product: Product;
  onAddToCart: () => void;
}

export const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false);

  const getBrandColor = (brand: string) => {
    switch (brand) {
      case "Asian Paints": return { backgroundColor: "hsl(258 100% 67%)", color: "white" };
      case "Berger": return { backgroundColor: "hsl(195 100% 39%)", color: "white" };
      case "Dulux": return { backgroundColor: "hsl(142 69% 58%)", color: "white" };
      case "Nerolac": return { backgroundColor: "hsl(38 92% 50%)", color: "white" };
      default: return { backgroundColor: "hsl(222.2 47.4% 11.2%)", color: "white" };
    }
  };

  return (
    <Card 
      className="group overflow-hidden border-0"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(8px)",
        transition: "all 0.5s ease",
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.boxShadow = "0 20px 40px -10px rgba(0, 0, 0, 0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 10px 25px -5px rgba(0, 0, 0, 0.1)";
      }}
    >
      {/* Product Image */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-muted/20 to-muted/40">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain p-4"
          style={{
            transition: "transform 0.5s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        />
        
        {/* Like Button */}
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-3 right-3 p-2 rounded-full"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            backdropFilter: "blur(8px)",
            transition: "all 0.3s ease"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 1)";
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <Heart 
            className={`w-4 h-4 transition-colors ${
              isLiked ? 'fill-red-500 text-red-500' : 'text-muted-foreground'
            }`} 
          />
        </button>

        {/* Brand Badge */}
        <Badge 
          className="absolute top-3 left-3"
          style={getBrandColor(product.brand)}
        >
          {product.brand}
        </Badge>
      </div>

      {/* Product Info */}
      <div className="p-6 space-y-4">
        {/* Name and Application */}
        <div>
          <h3 className="font-bold text-lg text-foreground leading-tight mb-1">
            {product.name}
          </h3>
          <Badge variant="outline" className="text-xs">
            {product.application}
          </Badge>
        </div>

        {/* Features */}
        <div className="space-y-2">
          {product.features.slice(0, 2).map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              {feature}
            </div>
          ))}
          {product.features.length > 2 && (
            <p className="text-xs text-muted-foreground">
              +{product.features.length - 2} more features
            </p>
          )}
        </div>

        {/* Price */}
        <div className="pt-2 border-t border-border/50">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold text-foreground">
                ₹{product.pricePerL}
              </span>
              <span className="text-sm text-muted-foreground ml-1">
                /liter
              </span>
            </div>
            <div className="text-xs text-muted-foreground">
              Available: {product.sizes.join(", ")}
            </div>
          </div>
        </div>

        {/* Add to Cart Button */}
        <Button 
          onClick={onAddToCart}
          className="w-full transition-all duration-300 hover:scale-105"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </div>
    </Card>
  );
};