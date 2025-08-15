import { useState } from 'react';
import { Star, Shield, Palette, Award, Phone, Mail, MapPin, ArrowRight, Check, Sparkles, Home, Droplets, Sun, TreePine, PaintBucket, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import luxuryHomeHero from '@/assets/hero-room.jpg';
import qualityStandards from "../assets/quality-standards.jpg";
import PremiumPaintBrands from '@/components/layout/premiumPaintBrand';
import PremiumPaintBenefits from '@/components/layout/BenefitCard';
import PremiumContactSection from '@/components/layout/contact';
import PaintSellerFooter from '@/components/layout/footer';
import Header from '@/components/layout/Header';
import MobileOptimizedHero from '@/components/layout/herosection';
import QualityStandardsSection from '@/components/layout/qualityStandardSection';

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const paintBrands = [
    {
      name: "Asian Paints",
      product: "Apex Ultima Protek Duralife",
      tagline: "WALLS of S.T.E.E.L",
      warranty: "15 Years",
      features: ["Advanced PUD Formula", "Weather Resistant", "Crack Bridging Technology"],
      color: "from-red-500 to-orange-500"
    },
    {
      name: "Berger Paints",
      product: "WeatherCoat All Guard",
      tagline: "Ultimate Protection",
      warranty: "12 Years",
      features: ["Anti-Carbonation", "Dirt Resistance", "Algae & Fungus Resistance"],
      color: "from-blue-600 to-indigo-600"
    },
    {
      name: "Dulux",
      product: "Weathershield Max",
      tagline: "Maximum Protection",
      warranty: "10 Years",
      features: ["Dirt Pick Up Resistance", "Colour Lock Technology", "Superior Finish"],
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Nerolac",
      product: "Excel Total",
      tagline: "Complete Protection",
      warranty: "8 Years",
      features: ["Anti-Bacterial", "Water Based", "Low VOC"],
      color: "from-purple-500 to-violet-500"
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Long-Lasting Protection",
      description: "Premium formulations that withstand time and weather"
    },
    {
      icon: Sun,
      title: "Weather Resistance",
      description: "Superior protection against harsh climate conditions"
    },
    {
      icon: Sparkles,
      title: "Premium Finishes",
      description: "Luxury textures and stunning visual appeal"
    },
    {
      icon: TreePine,
      title: "Eco-Friendly Formulas",
      description: "Sustainable paints safe for your family and environment"
    },
    {
      icon: Palette,
      title: "Wide Color Range",
      description: "Thousands of colors to match your vision perfectly"
    },
    {
      icon: Award,
      title: "Certified Quality",
      description: "Industry-leading standards and quality assurance"
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Sharma",
      location: "Mumbai",
      rating: 5,
      text: "The Asian Paints Apex Ultima transformed our home completely. After 3 years, it still looks brand new despite the monsoons.",
      project: "2-Story Villa Renovation"
    },
    {
      name: "Priya Mehta",
      location: "Delhi",
      rating: 5,
      text: "Exceptional service and premium quality paints. The Berger WeatherCoat has protected our exterior walls perfectly.",
      project: "Modern Apartment Complex"
    },
    {
      name: "Amit Gupta",
      location: "Bangalore",
      rating: 5,
      text: "Professional consultation and premium Dulux paints gave us the luxury finish we dreamed of. Highly recommended!",
      project: "Luxury Penthouse"
    }
  ];



  return (
    <div className="min-h-screen bg-background">
    
    <Header/>
      {/* Hero Section */}
  
          <MobileOptimizedHero/>
      {/* Paint Brand Showcase */}
      <PremiumPaintBrands/>

      {/* Benefits Section */}
     <PremiumPaintBenefits/>

      {/* Quality Assurance Section */}
     <QualityStandardsSection/>

      {/* Final CTA & Contact */}
   <PremiumContactSection/>

      {/* Footer */}
      <PaintSellerFooter/>
    </div>
  );
};

export default Index;