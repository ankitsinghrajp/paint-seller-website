import  { useState } from 'react';
import { Check,  Sparkles, Award, ChevronRight, Star, Palette, Crown, Diamond, Leaf, Heart, Zap } from 'lucide-react';
import { Button } from '../ui/button';
import royalLuxury from "../../assets/royalLuxuryEmulsion.png";
import apcolitePremium from "../../assets/AsianPaintsApcolitePremiumGlossEnamel-BRWhite-Photoroom.png"
import tractorEmulsion from "../../assets/interior-walls-tractor-emulsion-shyne-asian-paints-Photoroom.png"
import ultimaProtekShield from "../../assets/Ultima-Protek-advanced-Packshot-updated-Photoroom.png";
import oneElegance from "../../assets/pureOneElegance.png";
import calistaDesigner from "../../assets/cochin-colours-birla-opus-calista-ever-stay-interior-paint-1-917x1024-Photoroom.png";
import styleColor from "../../assets/style-color-smart.png";
import oneTrueLook from "../../assets/one-true-look.png";
import velvetTouchPlatinum from "../../assets/velvet-touch-platinum.png";
import superCover from "../../assets/dulux-paints-supercover-1-l-90-white-base-interior-emulsion--base-1-Photoroom.png";
import weathershield from "../../assets/dulux-weathershield-tile-paint-Photoroom.png";
import promiseEmulsion from "../../assets/Promise-acrylic-emulsion.png";
import silkGlamour from "../../assets/Big-Silk_Glamor_Soft_Sheen_0-Photoroom.png";
import EasyClean from "../../assets/easy-clean-fresh-Photoroom.png";
import weatherCoatLongLife from "../../assets/weathercoat-long-life.png";
import weatherCoatAntiDust from "../../assets/berger-weathercoat-anti-dust-Photoroom.png";
import kashmirHighSheen from "../../assets/Nerolac-Impressions-Kashmir-High-Sheen_Cheatshot_R1-Photoroom.png";
import impressionHd from "../../assets/impression-hd.png";
import excelEverlast from "../../assets/excel-everlast.png";
import excelTopGuard from "../../assets/excelTopGuard.png";
import { Link } from 'react-router-dom';

// Asian Paints - Royal/Premium Style with Gold Accents
const AsianPaintsCard = ({ product, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`relative bg-gradient-to-br from-orange-50 via-white to-red-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 overflow-hidden border-2 h-full flex flex-col ${
        isHovered 
          ? 'transform -translate-y-2 scale-105 border-orange-400 shadow-orange-200/50' 
          : 'border-orange-200/50 hover:border-orange-300/70'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
           style={{ 
        animationDelay: `${index * 150}ms`,
      }}

    >
      {/* Royal Crown Header */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500"></div>
      
      {/* Premium Product Image with consistent sizing */}
      <div className="relative w-full h-48 overflow-hidden flex-shrink-0">
        <div className="absolute inset-3 border border-yellow-300/30 rounded-2xl"></div>
        <img 
          src={product.imageUrl}
          alt={product.name}
          className={`w-full h-full cursor-pointer object-contain transition-all duration-700 p-4 ${
            isHovered ? 'scale-110 filter brightness-110' : 'scale-100'
          }`}
        />
        
        {/* Royal Crown and Sparkles */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none">
            <Crown className="absolute top-3 right-3 h-5 w-5 text-yellow-400 animate-bounce" />
            <Sparkles className="absolute bottom-3 left-3 h-4 w-4 text-orange-300 animate-pulse" />
          </div>
        )}
        
        {/* Premium Badge */}
        {product.popular && (
          <div className="absolute top-3 left-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs px-3 py-1.5 rounded-full font-bold flex items-center shadow-lg">
            <Crown className="h-3 w-3 mr-1 fill-current" />
            PREMIUM
          </div>
        )}
      </div>
      
      {/* Royal Content - flexible height */}
      <div className="p-6 bg-gradient-to-b from-transparent to-orange-50/50 flex-grow flex flex-col">
        <h4 className="font-bold text-gray-800 mb-3 text-lg leading-tight line-clamp-2">
          {product.name}
        </h4>
        
        <div className="mb-4 flex-shrink-0">
          <span className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg">
            {product.category}
          </span>
        </div>
        
        <p className="text-sm text-gray-700 mb-4 leading-relaxed italic font-medium line-clamp-3 flex-shrink-0">
          "{product.description}"
        </p>
        


      
      </div>
    </div>
  );
};

// Birla Opus - Architectural/Modern Style with Blue Tones
const BirlaOpusCard = ({ product, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-l-4 border-blue-500  flex flex-col ${
        isHovered 
          ? 'transform -translate-y-2 scale-105 shadow-blue-200/50' 
          : 'hover:border-blue-600'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
           style={{ 
        animationDelay: `${index * 150}ms`,
      }}
   
    >
      {/* Modern Geometric Header */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-blue-500 to-indigo-600 transform rotate-45 translate-x-8 -translate-y-8"></div>
      
      <div className="relative w-full h-48 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 flex-shrink-0">
        <img 
          src={product.imageUrl}
          alt={product.name}
          className={`w-full h-full cursor-pointer object-contain transition-all duration-500 p-4 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        
        {/* Modern Tech Elements */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-3 left-3 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="absolute top-6 left-3 w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute bottom-3 right-3 w-3 h-3 border border-blue-400 rounded-full animate-spin"></div>
          </div>
        )}
        
        {product.popular && (
          <div className="absolute top-3 left-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs px-3 py-1.5 rounded-lg font-bold flex items-center">
            <Star className="h-3 w-3 mr-1 fill-current" />
            ARCHITECTURAL
          </div>
        )}
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <h4 className="font-bold text-gray-800 mb-3 text-lg leading-tight border-b border-blue-100 pb-2 line-clamp-2">
          {product.name}
        </h4>
        
        <div className="mb-4 flex-shrink-0">
          <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1.5 rounded-md text-xs font-semibold uppercase tracking-wide">
            {product.category}
          </span>
        </div>
        
        <p className="text-sm text-gray-600 mb-4 leading-relaxed line-clamp-3 flex-shrink-0">
          {product.description}
        </p>
        


   
      </div>
    </div>
  );
};

// Dulux - Elegant/Sophisticated Style with Purple Tones
const DuluxCard = ({ product, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`relative bg-gradient-to-br from-purple-50 via-white to-pink-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-600 overflow-hidden flex flex-col ${
        isHovered 
          ? 'transform -translate-y-2 scale-105 ring-2 ring-purple-200/50' 
          : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
           style={{ 
        animationDelay: `${index * 150}ms`,
      }}
  
    >
      {/* Elegant Wave Header */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 opacity-10 rounded-t-3xl"
           style={{clipPath: 'ellipse(100% 100% at 50% 0%)'}}></div>
      
      <div className="relative w-full h-48 overflow-hidden flex-shrink-0">
        <img 
          src={product.imageUrl}
          alt={product.name}
          className={`w-full h-full cursor-pointer object-contain transition-all duration-600 p-4 ${
            isHovered ? 'scale-110 brightness-105 cursor-pointer' : 'scale-100'
          }`}
        />
        
        {/* Elegant Floating Elements */}
        {isHovered && (
          <div className="absolute cursor-pointer inset-0 pointer-events-none">
            <div className="absolute top-4 right-4 w-4 h-4 border border-purple-300 rounded-full opacity-70 animate-ping"></div>
            <div className="absolute bottom-4 left-4 w-3 h-3 bg-pink-300 rounded-full opacity-60 animate-bounce"></div>
          </div>
        )}
        
        {product.popular && (
          <div className="absolute top-3 left-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-3 py-1.5 rounded-full font-bold flex items-center shadow-lg">
            <Diamond className="h-3 w-3 mr-1 fill-current" />
            ELEGANT
          </div>
        )}
      </div>
      
      <div className="p-6 bg-gradient-to-t from-purple-50/30 to-transparent flex-grow flex flex-col">
        <h4 className="font-bold text-gray-800 mb-3 text-lg leading-tight text-center line-clamp-2">
          {product.name}
        </h4>
        
        <div className="mb-4 text-center flex-shrink-0">
          <span className="inline-block bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide border border-purple-200">
            {product.category}
          </span>
        </div>
        
        <p className="text-sm text-gray-600 mb-4 leading-relaxed text-center italic line-clamp-3 flex-shrink-0">
          "{product.description}"
        </p>
        
   


      </div>
    </div>
  );
};

// Berger - Natural/Eco-friendly Style with Green Tones
const BergerCard = ({ product, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-green-200  flex flex-col ${
        isHovered 
          ? 'transform -translate-y-2 scale-105 border-green-400 shadow-green-200/50' 
          : 'hover:border-green-300'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
           style={{ 
        animationDelay: `${index * 150}ms`,
      }}
    >
      {/* Natural/Organic Header */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500"></div>
      
      <div className="relative w-full h-48 overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50 flex-shrink-0">
        <img 
          src={product.imageUrl}
          alt={product.name}
          className={`w-full h-full cursor-pointer object-contain transition-all duration-500 p-4 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        
        {/* Natural Elements */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none">
            <Leaf className="absolute top-3 right-3 h-4 w-4 text-green-500 animate-pulse" />
            <Leaf className="absolute bottom-3 left-3 h-3 w-3 text-emerald-400 animate-pulse" style={{animationDelay: '1s'}} />
          </div>
        )}
        
        {product.popular && (
          <div className="absolute top-3 left-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs px-3 py-1.5 rounded-full font-bold flex items-center">
            <Leaf className="h-3 w-3 mr-1 fill-current" />
            ECO-FRIENDLY
          </div>
        )}
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <h4 className="font-bold text-gray-800 mb-3 text-lg leading-tight flex items-center line-clamp-2">
          <Heart className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
          {product.name}
        </h4>
        
        <div className="mb-4 flex-shrink-0">
          <span className="inline-block bg-green-100 text-green-700 px-3 py-1.5 rounded-full text-xs font-semibold">
            🏠 {product.category}
          </span>
        </div>
        
        <p className="text-sm text-gray-600 mb-4 leading-relaxed line-clamp-3 flex-shrink-0">
          {product.description}
        </p>

      </div>
    </div>
  );
};

// Nerolac - Bold/Vibrant Style with Red/Pink Tones
const NerolacCard = ({ product, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`relative bg-gradient-to-br from-red-50 via-white to-pink-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-600 overflow-hidden border-2  flex flex-col ${
        isHovered 
          ? 'transform -translate-y-2 scale-105 border-red-400 shadow-red-200/50' 
          : 'border-red-200 hover:border-red-300'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        animationDelay: `${index * 150}ms`,
      }}
    >
      {/* Bold Diagonal Stripe */}
      <div className="absolute top-0 right-0 w-full h-full">
        <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-b from-red-400 to-pink-500 transform skew-x-12 translate-x-6 opacity-20"></div>
      </div>
      
      <div className="relative w-full h-48 overflow-hidden flex-shrink-0">
        <img 
          src={product.imageUrl}
          alt={product.name}
          className={`w-full h-full cursor-pointer object-contain transition-all duration-600 p-4 ${
            isHovered ? 'scale-110 brightness-110' : 'scale-100'
          }`}
        />
        
        {/* Bold Dynamic Elements */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none">
            <Zap className="absolute top-3 left-3 h-5 w-5 text-red-500 animate-bounce" />
            <Star className="absolute bottom-3 right-3 h-4 w-4 text-pink-500 animate-spin" />
          </div>
        )}
        
        {product.popular && (
          <div className="absolute top-3 right-3 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs px-3 py-1.5 rounded-full font-bold flex items-center shadow-lg transform rotate-1">
            <Zap className="h-3 w-3 mr-1 fill-current" />
            VIBRANT
          </div>
        )}
      </div>
      
      <div className="p-6 relative z-10 flex-grow flex flex-col">
        <h4 className="font-bold text-gray-800 mb-3 text-lg leading-tight line-clamp-2">
          {product.name}
        </h4>
        
        <div className="mb-4 flex-shrink-0">
          <span className="inline-block bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg">
            {product.category}
          </span>
        </div>
        
        <p className="text-sm text-gray-600 mb-4 leading-relaxed font-medium line-clamp-3 flex-shrink-0">
          {product.description}
        </p>


      </div>
    </div>
  );
};

const BrandSection = ({ brand, index }) => {
  const [showAll, setShowAll] = useState(false);
  const displayedProducts = showAll ? brand.products : brand.products.slice(0, 4);
  
  const getCardComponent = (brandName) => {
    switch (brandName) {
      case "Asian Paints": return AsianPaintsCard;
      case "Birla Opus": return BirlaOpusCard;
      case "Dulux": return DuluxCard;
      case "Berger": return BergerCard;
      case "Nerolac": return NerolacCard;
      default: return AsianPaintsCard;
    }
  };

  const getBrandIcon = (brandName) => {
    switch (brandName) {
      case "Asian Paints": return Crown;
      case "Birla Opus": return Palette;
      case "Dulux": return Diamond;
      case "Berger": return Heart;
      case "Nerolac": return Zap;
      default: return Palette;
    }
  };

  const CardComponent = getCardComponent(brand.name);
  const BrandIcon = getBrandIcon(brand.name);
  
  return (
    <div 
      className="mb-20"
      style={{ 
        animationDelay: `${index * 300}ms`
      }}
    >
      {/* Brand Header */}
      <div className="flex items-center justify-center sm:justify-between mb-8 flex-wrap">
        <div className="flex items-center mb-4 sm:mb-0">
          <div className={`w-14 h-14 rounded-3xl mr-4 flex items-center justify-center ${brand.brandColor} hover:scale-110 transition-transform duration-300 shadow-xl`}>
            <BrandIcon className="h-6 w-6 text-white" />
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-1 hover:text-pink-600 transition-colors duration-300">
              {brand.name}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base italic">"{brand.tagline}"</p>
          </div>
        </div>
      </div>
      
      {/* Popular Products Label */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-orange-100 via-rose-100 to-pink-100 rounded-2xl border border-orange-200/50 hover:shadow-lg transition-shadow duration-300">
          <Sparkles className="h-5 w-5 text-orange-600 mr-2 animate-spin" style={{ animationDuration: '3s' }} />
          <span className="text-orange-700 font-bold text-sm sm:text-base uppercase tracking-wide">
            🔥 Most Popular Products from {brand.name}
          </span>
          <Sparkles className="h-5 w-5 text-orange-600 ml-2 animate-spin" style={{ animationDuration: '3s' }} />
        </div>
      </div>
      
      {/* Products Grid - Responsive with equal height cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
        {displayedProducts.map((product, productIndex) => (
          <CardComponent 
            key={productIndex} 
            product={product} 
            index={productIndex} 
          />
        ))}
      </div>
      
      {/* Show More Button */}
      {brand.products.length > 4 && (
        <div className="text-center">
          <Button
            onClick={() => setShowAll(!showAll)}
            variant="outline"
            className="border-2 border-pink-200 text-pink-600 hover:bg-pink-50 hover:border-pink-300 transition-all duration-300 px-6 py-3 rounded-full font-semibold text-base"
          >
            {showAll ? 'Show Less' : `View All ${brand.products.length} Products`}
            <ChevronRight className={`h-4 w-4 ml-2 transition-transform duration-300 ${showAll ? 'rotate-90' : ''}`} />
          </Button>
        </div>
      )}
    </div>
  );
};

const PremiumPaintBrands = () => {
  const paintBrands = [
    {
      name: "Asian Paints",
      tagline: "India's Most Trusted Paint Brand",
      brandColor: "bg-gradient-to-br from-orange-500 to-red-500",
      rating: 5,
      products: [
        {
          name: "Royale Luxury Emulsion",
          description: "Premium interior emulsion with silk finish and advanced stain resistance",
          imageUrl: royalLuxury,
          category: "Luxury Interior Emulsion",
          warranty: "12 Years",
          popular: true,
          features: ["Silk Finish", "Stain Resistant", "Anti-Bacterial", "Washable"]
        },
        {
          name: "Apcolite Premium Gloss",
          description: "Advanced exterior weather protection with superior durability",
          imageUrl: apcolitePremium,
          category: "Premium Exterior Coating",
          warranty: "15 Years",
          features: ["Weather Shield", "UV Protection", "Crack Resistance", "Fade Resistant"]
        },
        {
          name: "Tractor Emulsion Shyne",
          description: "Heavy-duty industrial coating solution for environments",
          imageUrl: tractorEmulsion,
          category: "Industrial Coating",
          warranty: "10 Years",
          features: ["Heavy Duty", "Chemical Resistant", "Long Lasting", "Industrial Grade"]
        },
        {
          name: "Ultima Protek Shield",
          description: "All-weather exterior protection with crack-bridging technology",
          imageUrl: ultimaProtekShield,
          category: "Weather Protection",
          warranty: "12 Years",
          popular: true,
          features: ["All Weather", "Crack Bridge", "Algae Resistant", "Flexible Film"]
        }
      ]
    },
    {
      name: "Birla Opus",
      tagline: "Premium Architectural Solutions",
      brandColor: "bg-gradient-to-br from-blue-600 to-indigo-600",
      rating: 4,
      products: [
        {
          name: "One Pure Elegance Shine",
          description: "Sophisticated velvet finish for modern luxury interiors",
          imageUrl: oneElegance,
          category: "Premium Interior Finish",
          warranty: "10 Years",
          popular: true,
          features: ["Velvet Finish", "Easy Clean", "Smooth Texture", "Rich Colors"]
        },
        {
          name: "Calista Ever Stay",
          description: "Designer paint collection with creative textural effects",
          imageUrl: calistaDesigner,
          category: "Designer Collection",
          warranty: "8 Years",
          features: ["Designer Colors", "Creative Effects", "Premium Quality", "Textural Finish"]
        },
        {
          name: "Style Color Smart",
          description: "Contemporary paint solutions for modern living spaces",
          imageUrl: styleColor,
          category: "Contemporary Emulsion",
          warranty: "7 Years",
          features: ["Modern Colors", "Smooth Application", "Durable Finish", "Easy Maintenance"]
        },
        {
          name: "One True Look",
          description: "Contemporary paint solutions for modern living spaces",
          imageUrl: oneTrueLook,
          category: "Contemporary Emulsion",
          warranty: "7 Years",
          features: ["Modern Colors", "Smooth Application", "Durable Finish", "Easy Maintenance"]
        }
      ]
    },
    {
      name: "Dulux",
      tagline: "Color Inspiration for Every Home",
      brandColor: "bg-gradient-to-br from-purple-600 to-pink-600",
      rating: 5,
      products: [
        {
          name: "Velvet Touch Platinum",
          description: "Luxurious matte finish with superior coverage and washability",
          imageUrl: velvetTouchPlatinum,
          category: "Luxury Matte Emulsion",
          warranty: "12 Years",
          popular: true,
          features: ["Velvet Finish", "Superior Coverage", "Washable", "Premium Quality"]
        },
        {
          name: "Super Cover",
          description: "One-coat coverage paint for quick room transformations",
          imageUrl: superCover,
          category: "Quick Cover Emulsion",
          warranty: "10 Years",
          features: ["One Coat Coverage", "Quick Dry", "High Hide", "Time Saving"]
        },
        {
          name: "Weathershield Max",
          description: "Maximum protection against harsh weather conditions",
          imageUrl: weathershield,
          category: "Flexible Exterior Coating",
          warranty: "15 Years",
          features: ["Maximum Protection", "Weather Resistant", "Long Lasting", "Flexible Film"]
        },
        {
          name: "Promise Acrylic Emulsion",
          description: "Reliable paint with health benefits for everyday homes",
          imageUrl: promiseEmulsion,
          category: "Health+ Interior",
          warranty: "8 Years",
          features: ["Anti-Bacterial", "Good Coverage", "Value for Money", "Health Benefits"]
        }
      ]
    },
    {
      name: "Berger",
      tagline: "Home is Where the Heart Is",
      brandColor: "bg-gradient-to-br from-green-600 to-teal-600",
      rating: 4,
      products: [
        {
          name: "Silk Glamour",
          description: "Elegant silk finish with advanced stain resistance technology",
          imageUrl: silkGlamour,
          category: "Luxury Interior Emulsion",
          warranty: "10 Years",
          popular: true,
          features: ["Velvety Smooth Finish", "Superior Stain Resistance", "Advanced Anti-Fungal", "Rich Color Depth"]
        },
        {
          name: "Easy Clean",
          description: "Washable paint designed for high-traffic areas and busy homes",
          imageUrl: EasyClean,
          category: "Washable Emulsion",
          warranty: "8 Years",
          features: ["Easy to Clean", "Washable Surface", "Durable Finish", "Kid-Friendly"]
        },
        {
          name: "Weathercoat Long Life",
          description: "Extended protection exterior paint with fade-resistant formula",
          imageUrl: weatherCoatLongLife,
          category: "Exterior Protection",
          warranty: "12 Years",
          features: ["Long Life Formula", "Weather Resistant", "Fade Resistant", "UV Protection"]
        },
        {
          name: "Weather Coat Anti Dust Pro",
          description: "Revolutionary self-cleaning exterior paint with anti-dust technology",
          imageUrl: weatherCoatAntiDust,
          category: "Anti-Dust Coating",
          warranty: "10 Years",
          popular: true,
          features: ["Anti-Dust Technology", "Self Cleaning", "Weather Protection", "Dirt Resistant"]
        }
      ]
    },
    {
      name: "Nerolac",
      tagline: "Impressions that Last Forever",
      brandColor: "bg-gradient-to-br from-red-600 to-pink-600",
      rating: 4,
      products: [
        {
          name: "Impression Kashmir High Sheen",
          description: "Premium high-sheen finish with Kashmiri elegance.",
          imageUrl: kashmirHighSheen,
          category: "Luxury Interior Finish",
          warranty: "10 Years",
          popular: true,
          features: ["Rich High-Sheen Appearance", "Excellent Washability", "Soft-Touch Smoothness", "Superior Stain Resistance"]
        },
        {
          name: "Impression HD",
          description: "Ultra high-definition color technology with vibrant color depth",
          imageUrl: impressionHd,
          category: "Ultra HD Emulsion",
          warranty: "8 Years",
          features: ["Ultra HD Colors", "Sharp Color Definition", "Vibrant Depth", "Color Lock Technology"]
        },
        {
          name: "Excel Everlast",
          description: "10-year performance guarantee with advanced durability formula",
          imageUrl: excelEverlast,
          category: "Long Lasting Emulsion",
          warranty: "10 Years",
          features: ["10 Year Guarantee", "Everlasting Durability", "Superior Quality", "Proven Performance"]
        },
        {
          name: "Excel Top Guard Max",
          description: "Premium protection system for exterior surfaces.",
          imageUrl: excelTopGuard,
          category: "Premium Exterior Emulsion",
          warranty: "12 Years",
          features: ["Heat & UV Resistant", "Waterproofing Technology", "Crack-Bridging Formula", "Anti-Algae Protection"]
        }
      ]
    }
  ];

  return (
    <>
      <section className="py-16 relative overflow-hidden min-h-screen">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-pink-50/30"></div>
        
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-gradient-to-br from-pink-200/20 to-rose-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
          <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-gradient-to-br from-blue-200/20 to-indigo-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-gradient-to-br from-purple-200/15 to-pink-200/15 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-gray-800 mb-4 leading-tight">
              🎨 Most Popular Products by
              <span className="bg-gradient-to-r from-pink-600 via-rose-500 to-orange-500 bg-clip-text text-transparent"> Top Brands</span>
            </h2>
            
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              🔥 Discover the <strong>most popular and trending</strong> paint products from India's leading brands. 
              These are the <strong>customer favorites</strong> that everyone is talking about!
              <br className="hidden sm:block"/>
              Each brand showcased with its unique style and personality.
            </p>
          </div>

          {/* Brand Sections */}
          <div className="space-y-16 pt-8">
            {paintBrands.map((brand, index) => (
              <BrandSection key={index} brand={brand} index={index} />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className='flex flex-col items-center mt-16 relative z-10 space-y-4 px-4'>   
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
            <button 
              className='flex-1 py-4 px-6 text-base flex items-center justify-center font-bold bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-full cursor-pointer'
              onClick={() => window.location.href = '/products'}
            >
              <span className="flex items-center space-x-2">
                <span>View All Products</span>
                <ChevronRight className='h-5 w-5'/>
              </span>
            </button>
            
            <button 
              className='flex-1 py-4 px-6 text-base flex items-center justify-center font-bold border-2 border-pink-200 text-pink-600 hover:bg-pink-50 hover:border-pink-300 transition-all duration-300 rounded-full shadow-lg hover:shadow-xl bg-white cursor-pointer'
              onClick={() => window.location.href = '/#contact'}
            >
              <span className="flex items-center space-x-2">
                <span>Get Expert Advice</span>
                <Award className='h-5 w-5'/>
              </span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default PremiumPaintBrands;