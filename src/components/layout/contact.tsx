import React, { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, ArrowRight, Shield, Check, Clock } from 'lucide-react';

const InputField = ({ label, placeholder, type = "text", isTextarea = false, value, onChange, required = false }) => {
  const [isFocused, setIsFocused] = useState(false);

  const InputComponent = isTextarea ? 'textarea' : 'input';

  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label} {required && <span className="text-pink-500">*</span>}
      </label>
      <InputComponent
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        required={required}
        className={`w-full px-4 py-3 border border-gray-300 rounded-lg transition-all duration-200 bg-white/70 backdrop-blur-sm ${
          isFocused 
            ? 'border-pink-500 ring-2 ring-pink-100 outline-none shadow-lg' 
            : 'hover:border-gray-400 focus:border-pink-500 focus:outline-none hover:shadow-md'
        } ${isTextarea ? 'min-h-[120px] resize-none' : ''}`}
      />
    </div>
  );
};

const ContactItem = ({ icon: Icon, title, info, subtitle, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const itemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div 
      ref={itemRef}
      className={`flex items-start p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-lg border border-pink-100/50 transition-all duration-300 group ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      } ${isHovered ? 'scale-[1.02] -translate-y-1' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-100 to-rose-200 rounded-lg flex items-center justify-center mr-4 transition-all duration-300 ${
        isHovered ? 'scale-110 rotate-6 shadow-lg' : ''
      }`}>
        <Icon className={`h-6 w-6 text-pink-600 transition-all duration-300 ${
          isHovered ? 'scale-110' : ''
        }`} />
      </div>
      <div className="flex-1">
        <h4 className={`font-semibold text-gray-900 mb-1 transition-colors duration-300 ${
          isHovered ? 'text-pink-700' : ''
        }`}>{title}</h4>
        <p className={`text-gray-600 mb-1 transition-colors duration-300 ${
          isHovered ? 'text-gray-700' : ''
        }`}>{info}</p>
        {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
      </div>
      
      {/* Hover glow effect */}
      <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-pink-500/5 to-rose-500/5 transition-opacity duration-300 ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`}></div>
    </div>
  );
};

const SubmitButton = ({ isSubmitting, onSubmit, disabled }) => {
  return (
    <button
      onClick={onSubmit}
      disabled={isSubmitting || disabled}
      className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-all duration-200 ${
        isSubmitting || disabled
          ? 'bg-gray-400 cursor-not-allowed' 
          : 'bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 hover:shadow-lg hover:scale-[1.02]'
      } flex items-center justify-center shadow-md`}
    >
      {isSubmitting ? (
        <>
          <Clock className="h-5 w-5 mr-2 animate-spin" />
          Sending to WhatsApp...
        </>
      ) : (
        <>
          Send to WhatsApp
          <ArrowRight className="ml-2 h-5 w-5" />
        </>
      )}
    </button>
  );
};

const ContactForm = ({ isVisible }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectDetails: ''
  });

  const whatsappNumber = "919630009838"; 

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const isFormValid = () => {
    return formData.name.trim() !== '' && 
           formData.phone.trim() !== '' && 
           formData.email.trim() !== '';
  };

  const formatWhatsAppMessage = () => {
    const message = `🎨 *New Paint Project Inquiry*

👤 *Name:* ${formData.name}
📱 *Phone:* ${formData.phone}
📧 *Email:* ${formData.email}

📝 *Project Details:*
${formData.projectDetails || 'No additional details provided'}

---
*Sent from Paint Website Contact Form*`;

    return encodeURIComponent(message);
  };

  const handleSubmit = () => {
    if (!isFormValid()) {
      alert('Please fill in all required fields (Name, Phone, Email)');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate brief loading for better UX
    setTimeout(() => {
      const message = formatWhatsAppMessage();
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
      
      // Open WhatsApp
      window.open(whatsappUrl, '_blank');
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 4 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          phone: '',
          email: '',
          projectDetails: ''
        });
      }, 4000);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-pink-100/50 p-8">
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-200 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
            <Check className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
          <p className="text-gray-600">Your inquiry has been sent to WhatsApp. We'll respond shortly!</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-pink-100/50 p-8 transition-all duration-700 ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
    }`}>
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Your Free Quote</h3>
      
      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputField 
            label="Name" 
            placeholder="Your full name" 
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            required={true}
          />
          <InputField 
            label="Phone" 
            placeholder="Your phone number" 
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            required={true}
          />
        </div>
        
        <InputField 
          label="Email" 
          placeholder="your@email.com" 
          type="email" 
          value={formData.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
          required={true}
        />
        
        <InputField 
          label="Project Details" 
          placeholder="Tell us about your painting project..."
          isTextarea={true}
          value={formData.projectDetails}
          onChange={(e) => handleInputChange('projectDetails', e.target.value)}
        />
        
        <SubmitButton 
          isSubmitting={isSubmitting} 
          onSubmit={handleSubmit}
          disabled={!isFormValid()}
        />
        
        <p className="text-sm text-gray-500 text-center">
          By clicking "Send to WhatsApp", your message will open in WhatsApp with all the details pre-filled.
        </p>
      </div>
    </div>
  );
};

const PremiumContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      info: "+91 98765 43210",
      subtitle: "Mon-Sat: 9AM-7PM"
    },
    {
      icon: Mail,
      title: "Email Us", 
      info: "info@example.com",
      subtitle: "24/7 Support"
    },
    {
      icon: MapPin,
      title: "Visit Our Showroom",
      info: "123 Paint Street, Design District",
      subtitle: "Mumbai, Maharashtra 400001"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
      id='contact'
    >
      {/* Animated Pink Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50  via-pink-100 to-white"></div>
      
      {/* Complex animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large organic shapes */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-pink-200/25 to-rose-300/25 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-br from-rose-200/25 to-pink-300/25 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-br from-pink-300/20 to-rose-200/20 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '7s', animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-gradient-to-br from-rose-300/20 to-pink-400/20 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '3s' }}></div>
        
        {/* Curved flowing lines */}
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="none">
            <path d="M0,100 Q200,50 400,100 T800,100" stroke="rgba(236,72,153,0.1)" strokeWidth="2" fill="none" className="animate-pulse" style={{ animationDuration: '4s' }} />
            <path d="M0,200 Q200,150 400,200 T800,200" stroke="rgba(251,113,133,0.1)" strokeWidth="2" fill="none" className="animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
            <path d="M0,300 Q200,250 400,300 T800,300" stroke="rgba(244,63,94,0.1)" strokeWidth="2" fill="none" className="animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }} />
          </svg>
        </div>
        
        {/* Scattered animated particles */}
        <div className="absolute top-1/5 left-1/6 w-3 h-3 bg-pink-400/40 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
        <div className="absolute top-2/5 right-1/5 w-2 h-2 bg-rose-400/40 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '2.5s' }}></div>
        <div className="absolute top-3/5 left-2/5 w-2.5 h-2.5 bg-pink-300/40 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '4s' }}></div>
        <div className="absolute bottom-1/5 right-1/6 w-2 h-2 bg-rose-300/40 rounded-full animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3.5s' }}></div>
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-pink-500/40 rounded-full animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '2.8s' }}></div>
        
        {/* Gradient mesh overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-pink-50/30 via-transparent to-rose-50/30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-50/20 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50/20 via-transparent to-pink-100/20"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Upgrade Your Walls <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">Today</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to transform your space with premium paints? Get expert consultation and a personalized quote.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <ContactForm isVisible={isVisible} />
          
          {/* Contact Information */}
          <div className="space-y-6">
            <div className={`transition-all duration-700 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
            </div>
            
            {contactInfo.map((item, index) => (
              <ContactItem 
                key={index}
                {...item}
                delay={500 + index * 200}
              />
            ))}
            
            {/* Warranty Card */}
            <div className={`bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl p-6 text-white transition-all duration-700 delay-1000 shadow-lg hover:shadow-xl hover:scale-[1.02] group ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <div className="flex items-center mb-3">
                <Shield className={`h-8 w-8 mr-3 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`} />
                <h4 className="text-xl font-semibold">15-Year Warranty</h4>
              </div>
              <p className="text-pink-100">
                Premium protection on all paint applications with our satisfaction guarantee.
              </p>
              
              {/* Floating sparkles on hover */}
              <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
                <div className="absolute top-2 right-2 w-1 h-1 bg-white/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500" style={{ animationDelay: '0s' }}></div>
                <div className="absolute bottom-3 left-4 w-1.5 h-1.5 bg-white/40 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute top-4 left-8 w-1 h-1 bg-white/50 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Note */}
        <div className={`text-center mt-16 transition-all duration-700 delay-1200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>

        </div>
      </div>
    </section>
  );
};

export default PremiumContactSection;