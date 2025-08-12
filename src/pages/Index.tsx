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
     <section className="relative h-screen pt-40 flex items-center justify-center overflow-hidden bg-black">
  <div 
    className="absolute inset-0 opacity-60 bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: `url(${luxuryHomeHero})` }}
  />
  <div className="absolute inset-0 hero-overlay" />
  
  <div className="relative z-10 text-center text-luxury-white max-w-4xl mx-auto px-4">
    <h1 className="font-serif-heading  text-white text-5xl md:text-7xl font-bold mb-6 leading-tight">
      Transform Your Walls into <span className="text-gold">Works of Art</span>
    </h1>
    <p className="text-xl md:text-2xl mb-8 text-white max-w-2xl mx-auto">
      Premium Paints. Expert Advice. Unmatched Durability.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a href="/products">
      <Button className="btn-hero w-full text-lg px-10 py-6">
        Shop Now <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
      </a>
      <a href="#contact">
      <Button className="btn-secondary w-full text-lg px-10 py-6">
        Get a Free Quote
      </Button>
      </a>
    </div>
  </div>
</section>

      {/* Paint Brand Showcase */}
      <PremiumPaintBrands/>

      {/* Benefits Section */}
     <PremiumPaintBenefits/>

      {/* Quality Assurance Section */}
        <section id="quality" className="py-12 md:py-20 bg-luxury-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
           
                <div className="order-2 lg:order-1">
                    <h2 className="font-serif-heading text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-4 md:mb-6 leading-tight">
                        Uncompromising Quality Standards
                    </h2>
                    <p className="text-lg md:text-xl text-navy/70 mb-6 md:mb-8 leading-relaxed">
                        Every paint we offer undergoes rigorous testing to ensure it meets our premium standards for durability, coverage, and finish.
                    </p>
                    
                    <div className="space-y-4 md:space-y-6">
                          
                        <div className="flex items-start">
                            <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center mr-3 md:mr-4 mt-1 flex-shrink-0">
                                <i data-lucide="check" className="h-4 w-4 md:h-5 md:w-5 text-navy"></i>
                            </div>
                            <div className="flex-1">
                                <h4 className="font-semibold text-navy mb-1 md:mb-2 text-base md:text-lg">Advanced Technology Formulas</h4>
                                <p className="text-navy/70 text-sm md:text-base leading-relaxed">Cutting-edge paint chemistry for superior performance</p>
                            </div>
                        </div>
                        
                        <div className="flex items-start">
                            <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center mr-3 md:mr-4 mt-1 flex-shrink-0">
                                <i data-lucide="check" className="h-4 w-4 md:h-5 md:w-5 text-navy"></i>
                            </div>
                            <div className="flex-1">
                                <h4 className="font-semibold text-navy mb-1 md:mb-2 text-base md:text-lg">Certified Application Partners</h4>
                                <p className="text-navy/70 text-sm md:text-base leading-relaxed">Professional painters trained in premium application techniques</p>
                            </div>
                        </div>
                    </div>
                </div>
             
                <div className="order-1 lg:order-2">
                    <div className="relative">
                        <img 
                            src= {qualityStandards}
                            alt="Premium paint quality demonstration"
                            className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-2xl shadow-lg"
                        />
                        <div className="absolute -bottom-3 -right-3 md:-bottom-6 md:-right-6 w-16 h-16 md:w-24 md:h-24 bg-gold rounded-full flex items-center justify-center shadow-lg">
                            <i data-lucide="award" className="h-8 w-8 md:h-12 md:w-12 text-navy"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

      {/* Final CTA & Contact */}
   <PremiumContactSection/>

      {/* Footer */}
      <PaintSellerFooter/>
    </div>
  );
};

export default Index;