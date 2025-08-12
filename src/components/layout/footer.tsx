import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function PaintSellerFooter() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-blue-400">Painterbabu Paints</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted partner for premium quality paints since 1985. We provide complete painting solutions for homes and businesses with expert guidance and top-notch products.
            </p>
            <div className="flex space-x-4 pt-2">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-pink-400 cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 text-gray-400 hover:text-red-400 cursor-pointer transition-colors" />
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

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-400">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Professional Painting</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Color Matching</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Paint Calculator</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home Delivery</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Bulk Orders</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Paint Disposal</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Warranty Support</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-400">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>123 Paint Street</p>
                  <p>Industrial Area, City 560001</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>+91 98765 43210</p>
                  <p>+91 11 2345 6789</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <p className="text-gray-300">info@colorcraftpaints.com</p>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
                  <p>Sunday: 10:00 AM - 5:00 PM</p>
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
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-2 bg-slate-800 text-white border border-slate-700 rounded-lg focus:outline-none focus:border-blue-400 min-w-64"
              />
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Subscribe
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
              © 2024 ColorCraft Paints. All rights reserved. | Bringing colors to life since 1985
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}