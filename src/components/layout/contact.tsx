import React, { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, ArrowRight, Shield, Check, Clock } from 'lucide-react';

const InputField = ({ label, placeholder, type = "text", isTextarea = false, value, onChange, required = false }) => {
  const [isFocused, setIsFocused] = useState(false);

  const InputComponent = isTextarea ? 'textarea' : 'input';

  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <InputComponent
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        required={required}
        className={`w-full px-4 py-3 border border-gray-300 rounded-lg transition-all duration-200 ${
          isFocused 
            ? 'border-blue-500 ring-2 ring-blue-100 outline-none' 
            : 'hover:border-gray-400 focus:border-blue-500 focus:outline-none'
        } ${isTextarea ? 'min-h-[120px] resize-none' : ''}`}
      />
    </div>
  );
};

const ContactItem = ({ icon: Icon, title, info, subtitle, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
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
      className={`flex items-start p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
    >
      <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4">
        <Icon className="h-6 w-6 text-blue-600" />
      </div>
      <div>
        <h4 className="font-semibold text-gray-900 mb-1">{title}</h4>
        <p className="text-gray-600 mb-1">{info}</p>
        {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
      </div>
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
          : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 hover:shadow-lg'
      } flex items-center justify-center`}
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
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
          <p className="text-gray-600">Your inquiry has been sent to WhatsApp. We'll respond shortly!</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-2xl shadow-lg p-8 transition-all duration-700 ${
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
      className="py-20 bg-gray-50"
      id='contact'
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Upgrade Your Walls <span className="text-blue-600">Today</span>
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
            <div className={`bg-blue-600 rounded-xl p-6 text-white transition-all duration-700 delay-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <div className="flex items-center mb-3">
                <Shield className="h-8 w-8 mr-3" />
                <h4 className="text-xl font-semibold">15-Year Warranty</h4>
              </div>
              <p className="text-blue-100">
                Premium protection on all paint applications with our satisfaction guarantee.
              </p>
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