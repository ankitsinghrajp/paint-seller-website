import Header from "@/components/layout/Header";
import PaintSellerFooter from "@/components/layout/footer";
import { WhatsAppForm } from "@/components/selector/WhatsAppForm";
import { PaintSelectorComponent } from "@/components/selector/paintSelectorComponent";

const PaintSelector = () => {
  return (
    <div 
      className="min-h-screen"
      style={{
        background: "linear-gradient(135deg, hsl(0 0% 100%) 0%, hsl(0 0% 100%) 50%, hsl(210 40% 96.1%) 100%)"
      }}
    >
      <Header/>
      <div className="">
      
        {/* Paint Selector Section */}
        <section>
          <PaintSelectorComponent/>
        </section>
             {/* Quick Paint Enquiry */}
           {/* <section className="max-w-4xl mx-auto">
          <WhatsAppForm />
        </section> */}
      </div>
      <PaintSellerFooter/>
    </div>
  );
};

export default PaintSelector;