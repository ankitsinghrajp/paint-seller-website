import React, { useState } from 'react';
import { Check, Shield, Sparkles, Award, ChevronRight, Star, Palette } from 'lucide-react';
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


const ProductCard = ({ product, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 card-animate ${
        isHovered 
          ? 'transform -translate-y-2 scale-105 border-pink-400 shadow-2xl ring-4 ring-pink-200/50' 
          : 'border-gray-100 hover:border-pink-300'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        animationDelay: `${index * 150}ms`
      }}
    >
      {/* Vertical Product Image - Larger */}
      <div className="relative w-full h-56 overflow-hidden rounded-t-2xl">
        <img 
          src={product.imageUrl}
          alt={product.name}
          className={`w-full h-full py-4 object-contain transition-all duration-700 ${
            isHovered ? 'scale-110 brightness-110' : 'scale-100'
          }`}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/10 transition-all duration-500 ${
          isHovered ? 'opacity-70' : 'opacity-50'
        }`}></div>
        
        {/* Animated sparkles on hover */}
        {isHovered && (
          <div className="absolute inset-0">
            <Sparkles className="absolute top-4 right-4 h-5 w-5 text-yellow-300 animate-pulse" />
            <Sparkles className="absolute bottom-4 left-4 h-4 w-4 text-yellow-200 animate-pulse" />
            <Sparkles className="absolute top-1/2 left-1/2 h-3 w-3 text-white animate-pulse" />
          </div>
        )}
        
        {/* Popular Badge */}
        {product.popular && (
          <div className={`absolute top-3 left-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs px-3 py-1.5 rounded-full font-bold flex items-center ${
            isHovered ? 'scale-110 animate-bounce' : ''
          }`}>
            <Star className="h-3 w-3 mr-1 fill-current" />
            POPULAR
          </div>
        )}
      </div>
      
      {/* Product Info - Larger spacing */}
      <div className="p-6">
        {/* Product Name */}
        <h4 className={`font-bold text-gray-800 mb-3 text-lg leading-tight transition-colors duration-300 ${
          isHovered ? 'text-pink-700' : ''
        }`}>
          {product.name}
        </h4>
        
        {/* Category Badge */}
        <div className="mb-4">
          <span className="inline-block bg-gradient-to-r from-pink-100 to-rose-100 text-pink-700 px-3 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wide border border-pink-200">
            {product.category}
          </span>
        </div>
        
        {/* Description */}
        <p className="text-sm text-gray-600 mb-4 leading-relaxed italic">
          "{product.description}"
        </p>
        
        {/* Key Features with checkmarks */}
        <div className="space-y-2 mb-6">
          {product.features.map((feature, i) => (
            <div key={i} className="flex items-center">
              <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
              <span className="text-sm text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
        
     
      </div>
    </div>
  );
};

const BrandSection = ({ brand, index }) => {
  const [showAll, setShowAll] = useState(false);
  const displayedProducts = showAll ? brand.products : brand.products.slice(0, 4);
  
  return (
    <div 
      className="mb-20 brand-animate"
      style={{ 
        animationDelay: `${index * 300}ms`
      }}
    >
      {/* Brand Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <div className={`w-14 h-14 rounded-2xl mr-5 flex items-center justify-center ${brand.brandColor} hover:scale-110 transition-transform duration-300 shadow-lg`}>
            <Palette className="h-7 w-7 text-white" />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-2 hover:text-pink-600 transition-colors duration-300">
              {brand.name}
            </h3>
            <p className="text-gray-600 text-base italic">"{brand.tagline}"</p>
          </div>
        </div>
        
        <div className="text-right">
          <div className="flex items-center mb-2">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-5 w-5 transition-all duration-300 hover:scale-125 ${
                  i < brand.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                }`}
              />
            ))}
            <span className="ml-2 text-sm font-medium text-gray-600">({brand.rating}.0)</span>
          </div>
          <p className="text-sm text-gray-500 font-medium">
            <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent font-bold">
              {brand.products.length} Products Available
            </span>
          </p>
        </div>
      </div>
      
      {/* Popular Products Label */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-orange-100 via-rose-100 to-pink-100 rounded-2xl border-2 border-orange-200/50 hover:shadow-lg transition-shadow duration-300">
          <Sparkles className="h-5 w-5 text-orange-600 mr-3 animate-spin" style={{ animationDuration: '3s' }} />
          <span className="text-orange-700 font-bold  text-base uppercase tracking-wide">
            🔥 Most Popular Products from {brand.name}
          </span>
          <Sparkles className="h-5 w-5 text-orange-600 ml-3 animate-spin" style={{ animationDuration: '3s' }} />
        </div>
      </div>
      
      {/* Products Grid - Responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
        {displayedProducts.map((product, productIndex) => (
          <ProductCard 
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
            className="border-2 border-pink-200 text-pink-600 hover:bg-pink-50 hover:border-pink-300 transition-all duration-300 px-6 py-3 rounded-full font-semibold"
          >
            {showAll ? 'Show Less' : `View All ${brand.products.length} Products`}
            <ChevronRight className={`h-5 w-5 ml-2 transition-transform duration-300 ${showAll ? 'rotate-90' : ''}`} />
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
          description: "Heavy-duty industrial coating solution for demanding environments",
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
          description: "Premium high-sheen finish with Kashmiri elegance and sophistication",
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
          description: "Premium protection system for exterior surfaces with guard technology",
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
 
      <section className="py-20 relative overflow-hidden min-h-screen">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-pink-50/30"></div>
        
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-pink-200/30 to-rose-300/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-indigo-300/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
         
            
            <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl text-gray-800 mb-6 leading-tight">
              🎨 Most Popular Products by
              <span className="bg-gradient-to-r from-pink-600 via-rose-500 to-orange-500 bg-clip-text text-transparent"> Top Brands</span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              🔥 Discover the <strong>most popular and trending</strong> paint products from India's leading brands. 
              These are the <strong>customer favorites</strong> that everyone is talking about!
              <br/>
             
            </p>
          </div>

          {/* Brand Sections */}
          <div className="space-y-24 pt-10">
            {paintBrands.map((brand, index) => (
              <BrandSection key={index} brand={brand} index={index} />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className='flex flex-col items-center mt-24 relative z-10 space-y-6'>   
          <div className="flex flex-col sm:flex-row gap-6">
            <a href="/products">
              <Button className='py-6 px-10 text-lg flex items-center font-bold bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-full'>
                View All Products 
                <ChevronRight className='h-6 w-6 ml-2'/>
              </Button>
            </a>
            
            <a href="/#contact">
              <Button variant="outline" className='py-6 px-10 text-lg flex items-center font-bold border-2 border-pink-200 text-pink-600 hover:bg-pink-50 hover:border-pink-300 transition-all duration-300 rounded-full shadow-lg hover:shadow-xl'>
                Get Expert Advice
                <Award className='h-6 w-6 ml-2'/>
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default PremiumPaintBrands;