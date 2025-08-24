import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle, Truck, Palette, Star, Send, Calculator, MessageCircle, HelpCircle, Users, Store, Sparkles, Zap, ArrowRight, Heart } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    pincode: ''
  });
  
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-8 h-8 text-white" />,
      title: "Head Office",
      content: "Asian Paints Limited, 6A & 6B,\nShantinagar, Santacruz (East),\nMumbai - 400 055, Maharashtra, India.",
      subtext: "Tel: 022 - 6218 1000 | Fax: 022 - 6218 1111",
      gradient: "from-purple-500 to-purple-600",
      emoji: "🏢"
    },
    {
      icon: <Phone className="w-8 h-8 text-white" />,
      title: "Asian Paints Helpline",
      content: "1800 - 209 - 5678",
      subtext: "*Toll Free Service, applicable in India only.",
      gradient: "from-blue-500 to-blue-600",
      emoji: "📞"
    },
    {
      icon: <Store className="w-8 h-8 text-white" />,
      title: "Come and Visit",
      content: "Look for a store near you",
      subtext: "Drop in to know more about products and services",
      gradient: "from-green-500 to-green-600",
      emoji: "🏪"
    }
  ];

  const emailContacts = [
    {
      title: "For Shares related queries, email to",
      email: "investor.relations@asianpaints.com",
      icon: <Users className="w-6 h-6 text-purple-600" />,
      emoji: "📈"
    },
    {
      title: "For Consumer queries/complaints, email to", 
      email: "customercare@asianpaints.com",
      icon: <MessageCircle className="w-6 h-6 text-blue-600" />,
      emoji: "💬"
    },
    {
      title: "For HR related queries, email to",
      email: "careers@asianpaints.com", 
      icon: <Users className="w-6 h-6 text-green-600" />,
      emoji: "👥"
    },
    {
      title: "For Media related queries, email to",
      email: "proffice@asianpaints.com",
      icon: <Mail className="w-6 h-6 text-orange-600" />,
      emoji: "📰"
    },
    {
      title: "For CSR related queries, email to",
      email: "csr@asianpaints.com",
      icon: <HelpCircle className="w-6 h-6 text-pink-600" />,
      emoji: "🤝"
    },
    {
      title: "For Dealer related queries, email to",
      email: "dealership@asianpaints.com",
      icon: <Store className="w-6 h-6 text-indigo-600" />,
      emoji: "🤝"
    }
  ];

  const whyChooseUs = [
    {
      icon: <CheckCircle className="w-8 h-8 text-white" />,
      title: "Trusted Brands",
      description: "We partner with India's most reliable paint manufacturers to ensure quality and durability.",
      gradient: "from-emerald-500 to-emerald-600",
      emoji: "✅"
    },
    {
      icon: <Palette className="w-8 h-8 text-white" />,
      title: "Wide Collection of Shades",
      description: "Over 2000+ color options available with custom color matching services for your perfect shade.",
      gradient: "from-pink-500 to-pink-600",
      emoji: "🎨"
    },
    {
      icon: <Star className="w-8 h-8 text-white" />,
      title: "Durable & Affordable",
      description: "Premium quality paints at competitive prices with long-lasting finish guarantees.",
      gradient: "from-yellow-500 to-orange-500",
      emoji: "⭐"
    },
    {
      icon: <Truck className="w-8 h-8 text-white" />,
      title: "Fast Delivery",
      description: "Same-day delivery within the city and express shipping across Maharashtra state.",
      gradient: "from-blue-500 to-blue-600",
      emoji: "🚚"
    }
  ];

  const calculators = [
    {
      title: "Paint Budget Calculator",
      description: "Get instant estimates for your painting project",
      gradient: "from-yellow-400 to-orange-500",
      icon: <Calculator className="w-8 h-8 text-white" />,
      emoji: "🧮"
    },
    {
      title: "Waterproofing Calculator", 
      description: "Get an instant estimate for waterproofing needs",
      gradient: "from-blue-500 to-cyan-500",
      icon: <Calculator className="w-8 h-8 text-white" />,
      emoji: "💧"
    }
  ];

  const faqs = [
    {
      question: "How can I raise a complaint/ grievance?",
      answer: "If you need help at any point or have any concerns, you can write to us at customercare@asianpaints.com OR call us at 1800-209-5678 OR connect with us on WhatsApp on +91-9152244522. Our registered dealers can also raise their complaints/ grievances through the 'My Awaaz' portal.",
      emoji: "❓"
    },
    {
      question: "How do I get paint recommendations for my home?",
      answer: "Connect with our experts for more information on paint selection at customercare@asianpaints.com or call our helpline 1800-209-5678.",
      emoji: "🏠"
    },
    {
      question: "Do you provide home painting services?",
      answer: "Yes, we offer professional home painting services through Asian Paints Ezy. Fill out our enquiry form to book a free site evaluation by our painting service experts.",
      emoji: "🎯"
    }
  ];

  const paintBrands = [
    { name: "Asian Paints", color: "from-red-500 to-red-600" },
    { name: "Birla Opus", color: "from-blue-500 to-blue-600" },
    { name: "Berger Paints", color: "from-green-500 to-green-600" },
    { name: "Nerolac", color: "from-purple-500 to-purple-600" },
    { name: "Dulux", color: "from-pink-500 to-pink-600" },
    { name: "Indigo Paints", color: "from-indigo-500 to-indigo-600" },
    { name: "Kansai Nerolac", color: "from-yellow-500 to-orange-500" },
    { name: "Jotun", color: "from-cyan-500 to-cyan-600" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-green-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-yellow-400/10 to-orange-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Sparkles className="absolute top-20 left-20 w-6 h-6 text-purple-400/30 animate-bounce" style={{ animationDelay: '0.5s' }} />
        <Palette className="absolute top-40 right-32 w-8 h-8 text-pink-400/30 animate-bounce" style={{ animationDelay: '1.5s' }} />
        <Zap className="absolute bottom-32 left-16 w-5 h-5 text-yellow-400/30 animate-bounce" style={{ animationDelay: '2.5s' }} />
        <Heart className="absolute top-60 left-1/4 w-6 h-6 text-red-400/30 animate-bounce" style={{ animationDelay: '3s' }} />
      </div>

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent mb-6 leading-tight">
            GET IN TOUCH
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            🎨 We'd love to hear from you and help bring your vision to life
          </p>
          <div className="flex justify-center">
            <div className="bg-white/80 backdrop-blur-xl rounded-full px-8 py-4 border border-white/50 shadow-2xl">
              <p className="text-purple-600 font-semibold">✨ Transforming spaces since 1995</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information Cards */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="group cursor-pointer transform transition-all duration-500 hover:scale-105"
            >
              <div className={`bg-gradient-to-br ${info.gradient} rounded-3xl p-8 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500 text-white`}>
                <div className="text-center space-y-6">
                  <div className="text-6xl animate-bounce" style={{ animationDelay: `${index * 0.2}s` }}>
                    {info.emoji}
                  </div>
                  <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl inline-block group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{info.title}</h3>
                  <p className="text-lg opacity-90 whitespace-pre-line">{info.content}</p>
                  <p className="text-sm opacity-75">{info.subtext}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            ✨ Why Choose Us?
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            With decades of experience and thousands of satisfied customers, we're your trusted paint partner.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUs.map((item, index) => (
            <div
              key={index}
              className="group cursor-pointer transform transition-all duration-500 hover:scale-105"
            >
              <div className={`bg-gradient-to-br ${item.gradient} rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 text-white text-center`}>
                <div className="text-5xl mb-4 animate-bounce" style={{ animationDelay: `${index * 0.3}s` }}>
                  {item.emoji}
                </div>
                <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl inline-block mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="opacity-90 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Brand Showcase Section */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            🏷️ Trusted Paint Brands
          </h2>
          <p className="text-xl text-gray-700">
            We stock premium paints from India's most trusted manufacturers
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {paintBrands.map((brand, index) => (
            <div
              key={index}
              className="group cursor-pointer transform transition-all duration-500 hover:scale-110"
            >
              <div className={`bg-gradient-to-br ${brand.color} rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 text-white`}>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                    <span className="text-white font-bold text-2xl">{brand.name.charAt(0)}</span>
                  </div>
                  <h3 className="font-semibold text-sm">
                    {brand.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6">
              🎯 Need help with your painting needs?
            </h2>
            <p className="text-xl text-gray-700">
              Fill the form below to book a free site evaluation by an Asian Paints Ezy painting service expert.
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/50">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-gray-700 font-bold text-lg flex items-center gap-2">
                    👤 Name*
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 rounded-2xl border-2 border-purple-200 bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-200 transition-all duration-300 text-lg hover:border-purple-300"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-gray-700 font-bold text-lg flex items-center gap-2">
                    📧 Email*
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 rounded-2xl border-2 border-purple-200 bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-200 transition-all duration-300 text-lg hover:border-purple-300"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-gray-700 font-bold text-lg flex items-center gap-2">
                    📱 Mobile*
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 rounded-2xl border-2 border-purple-200 bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-200 transition-all duration-300 text-lg hover:border-purple-300"
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-gray-700 font-bold text-lg flex items-center gap-2">
                    📍 Pincode*
                  </label>
                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 rounded-2xl border-2 border-purple-200 bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-200 transition-all duration-300 text-lg hover:border-purple-300"
                    placeholder="400055"
                    required
                  />
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-xl py-6 px-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center gap-3 group hover:scale-105 transform"
              >
                <span>🚀 ENQUIRE NOW</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Email Contacts Section */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-6">
            📬 Get in Touch by Department
          </h2>
          <p className="text-xl text-gray-700">
            Connect with the right team for your specific needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {emailContacts.map((contact, index) => (
            <div
              key={index}
              className="group cursor-pointer transform transition-all duration-500 hover:scale-105"
            >
              <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-white/50">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl animate-bounce" style={{ animationDelay: `${index * 0.2}s` }}>
                    {contact.emoji}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-600 mb-2">{contact.title}</p>
                    <p className="text-lg font-bold text-purple-600 hover:underline cursor-pointer transition-colors duration-300">
                      {contact.email}
                    </p>
                  </div>
                  <div className="p-2 bg-purple-100 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    {contact.icon}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Calculators Section */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-6">
            🛠️ Helpful Tools
          </h2>
          <p className="text-xl text-gray-700">
            Get instant estimates for your painting and waterproofing needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {calculators.map((calc, index) => (
            <div
              key={index}
              className="group cursor-pointer transform transition-all duration-500 hover:scale-105"
            >
              <div className={`bg-gradient-to-br ${calc.gradient} rounded-3xl p-12 text-white shadow-2xl hover:shadow-3xl transition-all duration-500`}>
                <div className="text-center space-y-6">
                  <div className="text-6xl animate-bounce" style={{ animationDelay: `${index * 0.5}s` }}>
                    {calc.emoji}
                  </div>
                  <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl inline-block group-hover:scale-110 transition-transform duration-300">
                    {calc.icon}
                  </div>
                  <h3 className="text-3xl font-bold">{calc.title}</h3>
                  <p className="text-white/90 text-lg">{calc.description}</p>
                  <button className="bg-white/20 hover:bg-white/30 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 flex items-center space-x-3 mx-auto group-hover:scale-110 transform">
                    <span>Calculate now</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Help Sections */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="group cursor-pointer transform transition-all duration-500 hover:scale-105">
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 text-center">
              <div className="text-6xl mb-6 animate-bounce">💬</div>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Need help to resolve your product complaint?</h3>
              <p className="text-gray-600 mb-6">Connect with our Self-Help Bot over WhatsApp</p>
              <button className="bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-4 px-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 mb-4 hover:scale-105 transform">
                🔗 CLICK HERE
              </button>
              <p className="text-sm text-gray-600">
                Alternately, Say "Hi" to <span className="font-bold text-green-600">9152244522</span>
              </p>
            </div>
          </div>

          <div className="group cursor-pointer transform transition-all duration-500 hover:scale-105">
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 text-center">
              <div className="text-6xl mb-6 animate-bounce" style={{ animationDelay: '0.5s' }}>🎨</div>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Palette className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Need help on paints selection</h3>
              <p className="text-gray-600 mb-6">Connect with our experts for more information on paint selection</p>
              <p className="text-lg font-bold text-blue-600 mb-4">📧 customercare@asianpaints.com</p>
              <p className="text-sm text-gray-600">
                Or call our helpline: <span className="font-bold text-blue-600">📞 1800-209-5678</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-6">
              ❓ FAQs
            </h2>
            <p className="text-xl text-gray-700">
              Frequently asked questions about our services and products
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-white/50 hover:shadow-3xl transition-all duration-300"
              >
                <button
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-purple-50 transition-colors duration-300"
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                >
                  <div className="flex items-center space-x-4">
                    <span className="text-2xl">{faq.emoji}</span>
                    <span className="text-lg font-bold text-gray-900 pr-4">{faq.question}</span>
                  </div>
                  <div
                    className={`transform transition-transform duration-300 ${activeFaq === index ? 'rotate-180' : ''}`}
                  >
                    <HelpCircle className="w-6 h-6 text-purple-600" />
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Customer Satisfaction */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-500">
            <div className="text-6xl mb-6 animate-bounce">⭐</div>
            <div className="flex items-center justify-center gap-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-yellow-400 fill-current animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
              ))}
            </div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent mb-4">
              98% Customer Satisfaction Rate
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              "Excellent service and premium quality paints. They helped us choose the perfect colors for our entire home renovation." 
              <br />
              <span className="font-bold text-purple-600">- Ankit Singh Chouhan, Bhopal</span>
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ContactPage;