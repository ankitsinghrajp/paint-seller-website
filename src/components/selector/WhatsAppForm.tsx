import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle } from "lucide-react";
import { Brand, Application } from "@/types/paint";
import { colorPalette } from "@/data/products";

interface WhatsAppFormProps {
  className?: string;
}

export const WhatsAppForm = ({ className }: WhatsAppFormProps) => {
  const [brand, setBrand] = useState<Brand | "">("");
  const [application, setApplication] = useState<Application | "">("");
  const [color, setColor] = useState("");
  const [description, setDescription] = useState("");

  const brands: Brand[] = ["Asian Paints", "Berger", "Dulux", "Nerolac"];
  const applications: Application[] = ["Interior", "Exterior"];

  const handleWhatsAppSend = () => {
    const message = `Paint Inquiry:
Brand: ${brand}
Application: ${application}
Color: ${color}
Description: ${description}`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/+919876543210?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <Card 
      className={`p-8 border-0 ${className}`}
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        backdropFilter: "blur(8px)",
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
      }}
    >
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-2">Quick Paint Inquiry</h2>
          <p className="text-muted-foreground">Get instant assistance via WhatsApp</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Brand</label>
            <Select value={brand} onValueChange={(value) => setBrand(value as Brand)}>
              <SelectTrigger className="bg-background/80">
                <SelectValue placeholder="Select brand" />
              </SelectTrigger>
              <SelectContent>
                {brands.map((brandOption) => (
                  <SelectItem key={brandOption} value={brandOption}>
                    {brandOption}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Application</label>
            <Select value={application} onValueChange={(value) => setApplication(value as Application)}>
              <SelectTrigger className="bg-background/80">
                <SelectValue placeholder="Select application" />
              </SelectTrigger>
              <SelectContent>
                {applications.map((app) => (
                  <SelectItem key={app} value={app}>
                    {app}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Preferred Color</label>
          <Select value={color} onValueChange={setColor}>
            <SelectTrigger className="bg-background/80">
              <SelectValue placeholder="Select color" />
            </SelectTrigger>
            <SelectContent>
              {colorPalette.map((colorOption) => (
                <SelectItem key={colorOption.name} value={colorOption.name}>
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-4 h-4 rounded-full border border-border"
                      style={{ backgroundColor: colorOption.hex }}
                    />
                    {colorOption.name}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Additional Requirements</label>
          <Textarea
            placeholder="Describe your requirements..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="bg-background/80 min-h-[100px]"
          />
        </div>

        <Button 
          onClick={handleWhatsAppSend}
          className="w-full bg-green-600 hover:bg-green-700 text-white transition-all duration-300 hover:scale-105"
          size="lg"
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          Send to WhatsApp
        </Button>
      </div>
    </Card>
  );
};