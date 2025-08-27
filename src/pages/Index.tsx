
import PremiumPaintBrands from '@/components/layout/premiumPaintBrand';
import PremiumPaintBenefits from '@/components/layout/BenefitCard';
import PaintSellerFooter from '@/components/layout/footer';
import Header from '@/components/layout/Header';
import MobileOptimizedHero from '@/components/layout/herosection';
import QualityStandardsSection from '@/components/layout/qualityStandardSection';
import ProductCarousel from '@/components/layout/slider';
import Faqs from '@/components/layout/faqs';
import BrandShowcase from '@/components/contact/brandShowCase';
import PaintProductsCarousel from '@/components/layout/heroCarousel';

const Index = () => {


  return (
    <div className="min-h-screen bg-background">
    
    <Header/>
      {/* Hero Section */}

  
          <MobileOptimizedHero/>
         
         {/* <ProductCarousel/> */}
      {/* Paint Brand Showcase */}
      <PremiumPaintBrands/>

      <QualityStandardsSection/>

     {/* Trusted Paint Brands */}
     <BrandShowcase/>

     {/* FAQ Section */}
     <Faqs/>


      {/* Footer */}
      <PaintSellerFooter/>
    </div>
  );
};

export default Index;