
import PremiumPaintBrands from '@/components/layout/premiumPaintBrand';
import PremiumPaintBenefits from '@/components/layout/BenefitCard';
import PremiumContactSection from '@/components/layout/contact';
import PaintSellerFooter from '@/components/layout/footer';
import Header from '@/components/layout/Header';
import MobileOptimizedHero from '@/components/layout/herosection';
import QualityStandardsSection from '@/components/layout/qualityStandardSection';
import ProductCarousel from '@/components/layout/slider';

const Index = () => {


  return (
    <div className="min-h-screen bg-background">
    
    <Header/>
      {/* Hero Section */}

  
          <MobileOptimizedHero/>
         <ProductCarousel/>
      {/* Paint Brand Showcase */}
      <PremiumPaintBrands/>

      {/* Benefits Section */}
     <PremiumPaintBenefits/>

      {/* Quality Assurance Section */}
     <QualityStandardsSection/>



      {/* Footer */}
      <PaintSellerFooter/>
    </div>
  );
};

export default Index;