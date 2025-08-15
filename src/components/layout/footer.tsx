import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from "../../assets/unboxxit.jpg";

export default function PaintSellerFooter() {
    const handleSubmit = () => {
 
      const whatsappNumber = 919630009838;
      const message = "Hii Painterbabu I want to know more about your services";
      
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
      
      // Open WhatsApp
      window.open(whatsappUrl, '_blank');
      
      
      // Reset form after 4 seconds
     
  };
  return (
    <footer className="relative bg-gradient-to-br from-blue-700 via-slate-800 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-indigo-500/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-32 right-20 w-24 h-24 bg-purple-500/40 rounded-full blur-lg animate-bounce" style={{animationDuration: '3s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-blue-500/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-10 right-1/3 w-28 h-28 bg-indigo-400/30 rounded-full blur-xl animate-bounce" style={{animationDuration: '4s', animationDelay: '2s'}}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-indigo-400/60 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4 transform hover:scale-105 transition-transform duration-300">
               <Link
  to="/"
  className="flex items-center gap-3 group transition-transform duration-200 hover:scale-105"
>
  {/* Logo with hover glow */}
  <div className="relative flex-shrink-0">
    <img
      className="h-auto w-14 rounded-md shadow-lg shadow-black/30 sm:h-11 lg:h-12 drop-shadow-sm transition-shadow duration-300 group-hover:shadow-indigo-500/40"
      src={logo}
      alt="Unboxxit Logo"
    />
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
  </div>

  {/* Brand name and tagline */}
  <div className="flex flex-col leading-tight">
    <span className="text-lg font-bold tracking-wide text-white group-hover:text-indigo-400 transition-colors duration-300">
      Unboxxit
    </span>
    <span className="text-sm italic text-gray-300">
      Premium Paints
    </span>
  </div>
      </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Delivering vibrant colors and lasting protection since 1985. We offer premium paints, expert advice, and complete solutions for homes and businesses.
            </p>
            <div className="flex space-x-4 pt-2">
             <a href="https://www.facebook.com/people/Painter-Babu/100010432382679/" target='_blank' className="transform hover:scale-110 transition-transform duration-200"> <Facebook className="w-5 h-5 text-gray-400 hover:text-indigo-400 cursor-pointer transition-colors duration-300" /> </a>
             <a href="https://x.com/painterji" target='_blank' className="transform hover:scale-110 transition-transform duration-200"> <Twitter className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors duration-300" /> </a>
             <a href="https://www.instagram.com/painterbabu1/#" target='_blank' className="transform hover:scale-110 transition-transform duration-200"> <Instagram className="w-5 h-5 text-gray-400 hover:text-pink-400 cursor-pointer transition-colors duration-300" /> </a>
              <a href="https://www.youtube.com/channel/UCJeZcvqwhMKiJ35lrJfVIYg" target='_blank' className="transform hover:scale-110 transition-transform duration-200"><Youtube className="w-5 h-5 text-gray-400 hover:text-red-400 cursor-pointer transition-colors duration-300" /> </a>
            </div>
          </div>

          {/* Product Categories */}
          <div className="space-y-4 transform hover:translateY(-2) transition-transform duration-300">
            <h4 className="text-lg font-semibold text-white relative">
              Our Products
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-300"></div>
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors duration-200 hover:translate-x-1 transform inline-block">Interior Paints</a></li>
              <li><a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors duration-200 hover:translate-x-1 transform inline-block">Exterior Paints</a></li>
              <li><a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors duration-200 hover:translate-x-1 transform inline-block">Wood Stains & Finishes</a></li>
              <li><a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors duration-200 hover:translate-x-1 transform inline-block">Primers & Sealers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors duration-200 hover:translate-x-1 transform inline-block">Specialty Coatings</a></li>
              <li><a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors duration-200 hover:translate-x-1 transform inline-block">Paint Accessories</a></li>
              <li><a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors duration-200 hover:translate-x-1 transform inline-block">Color Consultation</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4 transform hover:translateY(-2) transition-transform duration-300">
            <h4 className="text-lg font-semibold text-white">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors duration-200 hover:translate-x-1 transform inline-block">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors duration-200 hover:translate-x-1 transform inline-block">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors duration-200 hover:translate-x-1 transform inline-block">Refund Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors duration-200 hover:translate-x-1 transform inline-block">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors duration-200 hover:translate-x-1 transform inline-block">Bulk Orders</a></li>
              
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 transform hover:translateY(-2) transition-transform duration-300">
            <h4 className="text-lg font-semibold text-white">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3 group">
                <MapPin className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0 group-hover:animate-bounce" />
                <div className="text-gray-300">
                  <p>
Unit Nos.101-104, 1st Floor, </p>
                  <p>SKY ONE, Kalyani Nagar, Pune, Maharashtra 411001</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <Phone className="w-4 h-4 text-indigo-400 flex-shrink-0 group-hover:animate-pulse" />
                <div className="text-gray-300">
                  <p>+91 96 3000 9838</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <Mail className="w-4 h-4 text-indigo-400 flex-shrink-0 group-hover:animate-bounce" />
                <p className="text-gray-300">contact.painterbabu@gmail.com</p>
              </div>
              
              <div className="flex items-start space-x-3 group">
                <Clock className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0 group-hover:animate-spin" style={{animationDuration: '2s'}} />
                <div className="text-gray-300">
                  <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="relative border-t border-slate-700/50 bg-gradient-to-r from-slate-800/80 to-indigo-900/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold text-indigo-400 mb-2">Stay Updated</h4>
              <p className="text-gray-300 text-sm">Get the latest color trends and painting tips delivered to your inbox</p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
             
              <button onClick={handleSubmit} className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 font-medium shadow-lg hover:shadow-indigo-500/30 transform hover:scale-105">
                WhatsApp Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-slate-700/50 bg-slate-950/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2025 Painterbabu (a venture by Arway Global Services).
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-200 hover:underline">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-200 hover:underline">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-200 hover:underline">Refund Policy</a>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
}