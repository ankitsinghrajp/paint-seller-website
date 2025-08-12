import React, { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, ArrowRight, Shield, Check, Clock } from 'lucide-react';

const InputField = ({ label, placeholder, type = "text", isTextarea = false }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState('');

  const InputComponent = isTextarea ? 'textarea' : 'input';

  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <InputComponent
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
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

const SubmitButton = ({ isSubmitting, onSubmit }) => {
  return (
    <button
      onClick={onSubmit}
      disabled={isSubmitting}
      className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-all duration-200 ${
        isSubmitting 
          ? 'bg-gray-400 cursor-not-allowed' 
          : 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800 hover:shadow-lg'
      } flex items-center justify-center`}
    >
      {isSubmitting ? (
        <>
          <Clock className="h-5 w-5 mr-2 animate-spin" />
          Sending...
        </>
      ) : (
        <>
          Send Message
          <ArrowRight className="ml-2 h-5 w-5" />
        </>
      )}
    </button>
  );
};

const ContactForm = ({ isVisible }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 4000);
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Thank you!</h3>
          <p className="text-gray-600">We'll get back to you within 24 hours.</p>
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
          <InputField label="Name" placeholder="Your full name" />
          <InputField label="Phone" placeholder="Your phone number" />
        </div>
        
        <InputField label="Email" placeholder="your@email.com" type="email" />
        
        <InputField 
          label="Project Details" 
          placeholder="Tell us about your painting project..."
          isTextarea={true}
        />
        
        <SubmitButton isSubmitting={isSubmitting} onSubmit={handleSubmit} />
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