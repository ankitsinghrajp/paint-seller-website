import { ArrowRight } from "lucide-react";
import { Brand } from "@/types/paint";
import asianPaintLogo from "../../assets/asianPaintsLogo.png";
import bergerLogo from "../../assets/berger-logo.jpeg";
import duluxLogo from "../../assets/duluxlogowebp.webp";
import nerolacLogo from "../../assets/nerolacLogo.avif";

interface BrandCardProps {
  brand: Brand;
  onClick: (brand: Brand) => void;
}

const brandStyles = {
  "Asian Paints": {
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    subtitle: "premium emulsions",
    warranty: "15 YEARS",
    image: asianPaintLogo
  },
  "Berger": {
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    subtitle: "silk glamour series", 
    warranty: "12 YEARS",
    image: bergerLogo
  },
  "Dulux": {
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    subtitle: "weathershield technology",
    warranty: "10 YEARS",
    image: duluxLogo
  },
  "Nerolac": {
    gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    subtitle: "impression collection",
    warranty: "14 YEARS",
    image: nerolacLogo
  }
};

export const BrandCard = ({ brand, onClick }: BrandCardProps) => {
  const style = brandStyles[brand];

  return (
    <div className="perspective-1000 ">
      <div 
        className="relative h-[500px] w-[320px] rounded-3xl cursor-pointer overflow-hidden group transform-gpu transition-all duration-700 ease-out hover:scale-105 hover:-translate-y-4 hover:rotate-y-5"
        style={{
          background: style.gradient,
          boxShadow: "0 20px 40px -12px rgba(0,0,0,0.25)",
        }}
        onClick={() => onClick(brand)}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = "0 30px 60px -12px rgba(0,0,0,0.4)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = "0 20px 40px -12px rgba(0,0,0,0.25)";
        }}
      >
        {/* Animated Background Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-16 -right-16 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-white/5 rounded-full animate-bounce"></div>
          <div className="absolute top-1/3 left-1/4 w-20 h-20 border border-white/20 rounded-full animate-ping"></div>
        </div>

        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 400 600">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" className="animate-pulse"/>
          </svg>
        </div>

        {/* Brand Header */}
        <div className="absolute top-8 left-8 right-8 z-10">
          <div className="transform transition-all duration-500 group-hover:translate-y-[-4px]">
            <h1 className="text-white text-4xl font-bold mb-2 tracking-tight leading-tight">
              {brand === "Asian Paints" ? "Asian Paints" : brand}
            </h1>
            <p className="text-white/90 text-lg font-medium tracking-wide">
              {style.subtitle}
            </p>
          </div>
        </div>

        {/* Warranty Badge */}
        <div className="absolute top-1/2 left-8 transform -translate-y-1/2 z-10">
          <div className="group-hover:scale-110 transition-transform duration-300">
            <div className="flex items-center gap-3 mb-2">
              <div className="text-white/80 text-sm font-medium tracking-wider">
                UPTO
              </div>
              <div className="text-white text-3xl font-bold">
                {style.warranty.split(' ')[0]}
              </div>
              <div className="text-white/90 text-lg font-semibold">
                YEARS
              </div>
            </div>
            <div className="text-white/70 text-xs uppercase tracking-widest">
              WARRANTY*
            </div>
          </div>
        </div>

        {/* Paint Can Image */}
        <div className="absolute bottom-16 right-8 z-10 transform transition-all duration-700 group-hover:scale-110 group-hover:rotate-6">
          <div className="relative w-32 h-40">
            <img 
              src={style.image}
              alt="Paint Can"
              className="w-full h-full object-cover rounded-2xl shadow-2xl border-2 border-white/30"
              style={{
                filter: "contrast(1.1) saturate(1.2)",
              }}
            />
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-white/20 to-transparent"></div>
          </div>
        </div>

        {/* Explore Button */}
        <div className="absolute bottom-8 left-8 z-10">
          <button 
            className="flex items-center gap-3 px-8 py-4 rounded-full text-white font-semibold text-lg border-2 border-white/30 backdrop-blur-xl transition-all duration-300 group-hover:border-white/50 group-hover:bg-white/20 group-hover:scale-105 hover:shadow-lg"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.15)",
            }}
          >
            Explore
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Floating Light Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Shimmer Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
      </div>
    </div>
  );
};