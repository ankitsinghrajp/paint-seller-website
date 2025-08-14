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
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
               <Link
  to="/"
  className="flex items-center gap-3 group transition-transform duration-200 hover:scale-105"
>
  {/* Logo with hover glow */}
  <div className="relative flex-shrink-0">
    <img
      className="h-auto w-14 rounded-md shadow-lg shadow-black/30 sm:h-11 lg:h-12 drop-shadow-sm"
      src={logo}
      alt="Unboxxit Logo"
    />
    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
  </div>

  {/* Brand name and tagline */}
  <div className="flex flex-col leading-tight">
    <span className="text-lg font-bold tracking-wide text-white/90 group-hover:text-primary">
      Unboxxit
    </span>
    <span className="text-sm italic text-gray-400">
      Premium Paints
    </span>
  </div>
      </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Delivering vibrant colors and lasting protection since 1985. We offer premium paints, expert advice, and complete solutions for homes and businesses.
            </p>
            <div className="flex space-x-4 pt-2">
             <a href="https://www.facebook.com/people/Painter-Babu/100010432382679/" target='_blank'> <Facebook className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" /> </a>
             <a href="https://x.com/painterji" target='_blank'> <Twitter className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" /> </a>
             <a href="https://www.instagram.com/painterbabu1/#" target='_blank'> <Instagram className="w-5 h-5 text-gray-400 hover:text-pink-400 cursor-pointer transition-colors" /> </a>
              <a href="https://www.youtube.com/channel/UCJeZcvqwhMKiJ35lrJfVIYg" target='_blank'><Youtube className="w-5 h-5 text-gray-400 hover:text-red-400 cursor-pointer transition-colors" /> </a>
            </div>
          </div>

          {/* Product Categories */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-400">Our Products</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Interior Paints</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Exterior Paints</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Wood Stains & Finishes</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Primers & Sealers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Specialty Coatings</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Paint Accessories</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Color Consultation</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-400">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Refund Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Bulk Orders</a></li>
              
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-400">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>
Unit Nos.101-104, 1st Floor, </p>
                  <p>SKY ONE, Kalyani Nagar, Pune, Maharashtra 411001</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>+91 96 3000 9838</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <p className="text-gray-300">contact.painterbabu@gmail.com</p>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold text-blue-400 mb-2">Stay Updated</h4>
              <p className="text-gray-300 text-sm">Get the latest color trends and painting tips delivered to your inbox</p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
             
              <button onClick={handleSubmit} className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                WhatsApp Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2025 Painterbabu (a venture by Arway Global Services).
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Refund Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}