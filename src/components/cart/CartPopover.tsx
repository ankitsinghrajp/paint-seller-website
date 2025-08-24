import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { Minus, Plus, ShoppingCart, Trash2, X, Package, User, MapPin, Phone, Mail, ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";

const PHONE_NUMBER = "919630009838";

const CartPopover: React.FC = () => {
  const { state, closeCart, removeItem, updateQty } = useCart();
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    pincode: "",
    state: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!customerInfo.name.trim()) newErrors.name = "Name is required";
    if (!customerInfo.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(customerInfo.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }
    if (!customerInfo.address.trim()) newErrors.address = "Address is required";
    if (!customerInfo.city.trim()) newErrors.city = "City is required";
    if (!customerInfo.pincode.trim()) newErrors.pincode = "Pincode is required";
    else if (!/^\d{6}$/.test(customerInfo.pincode)) {
      newErrors.pincode = "Please enter a valid 6-digit pincode";
    }
    if (!customerInfo.state.trim()) newErrors.state = "State is required";
    if (customerInfo.email && !/\S+@\S+\.\S+/.test(customerInfo.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field, value) => {
    setCustomerInfo(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const handleCheckout = async () => {
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const orderDetails = state.items.map((i) => {
      return `• ${i.name} (${i.brand} / ${i.application})\n  Size: ${i.size}, Qty: ${i.quantity}\n  Color: ${i.color.name} (${i.color.hex})`;
    }).join("\n\n");
    
    const customerDetails = `Customer Details:\nName: ${customerInfo.name}\nPhone: ${customerInfo.phone}\n${customerInfo.email ? `Email: ${customerInfo.email}\n` : ""}Address: ${customerInfo.address}\nCity: ${customerInfo.city}\nState: ${customerInfo.state}\nPincode: ${customerInfo.pincode}`;
    
    const fullMessage = encodeURIComponent(`New Paint Order\n\n${customerDetails}\n\n--- Order Details ---\n${orderDetails}`);
    
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${fullMessage}`, '_blank');
    setIsSubmitting(false);
    closeCart();
  };

  const resetForm = () => {
    setShowCheckoutForm(false);
    setCustomerInfo({
      name: "",
      phone: "",
      email: "",
      address: "",
      city: "",
      pincode: "",
      state: ""
    });
    setErrors({});
  };

  const handleCloseCart = () => {
    resetForm();
    closeCart();
  };

  return (
    <Dialog open={state.isOpen} onOpenChange={(o) => (!o ? handleCloseCart() : null)}>
      <DialogContent className="max-w-2xl sm:max-w-2xl w-[95vw] sm:w-full h-[80vh] sm:h-auto max-h-[80vh] sm:max-h-[85vh] rounded-md md:rounded-2xl p-0 overflow-hidden animate-in fade-in-0 zoom-in-95 duration-300 flex flex-col border-0 shadow-2xl">
        
        {/* Header with gradient */}
        <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-6 flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90 backdrop-blur-sm"></div>
          <div className="relative flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-full transition-transform duration-300 hover:scale-110">
                {showCheckoutForm ? (
                  <User className="h-6 w-6" />
                ) : (
                  <ShoppingCart className="h-6 w-6" />
                )}
              </div>
              <div>
                <DialogTitle className="text-xl font-bold">
                  {showCheckoutForm ? "Checkout Details" : "Your Cart"}
                </DialogTitle>
                <p className="text-blue-100 text-sm">
                  {showCheckoutForm ? "Please fill in your information" : `${state.items.length} ${state.items.length === 1 ? 'item' : 'items'} selected`}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Content Area */}
        <div className="flex-1 overflow-auto bg-gray-50">
          {!showCheckoutForm ? (
            // Cart Items View
            <div className="px-4 sm:px-6 py-4">
              {state.items.length === 0 ? (
                <div className="text-center py-20 animate-in fade-in-50 duration-500">
                  <div className="bg-white rounded-full p-6 w-24 h-24 mx-auto mb-6 shadow-lg">
                    <Package className="h-12 w-12 text-gray-400 mx-auto" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Your cart is empty</h3>
                  <p className="text-gray-500">Add some beautiful paints to get started!</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {state.items.map((i, index) => (
                    <div 
                      key={i.id} 
                      className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden animate-in slide-in-from-right-3 fade-in-0"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {/* Desktop Layout */}
                      <div className="hidden sm:flex items-center gap-4 p-6">
                        <div className="relative group">
                          <div
                            className="w-20 h-20 rounded-xl border-2 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
                            style={{ 
                              background: `linear-gradient(135deg, ${i.color.hex}15, ${i.color.hex}30)`,
                              borderColor: i.color.hex + '30'
                            }}
                          >
                            <img src={i.image} alt={i.name} className="h-14 w-14 object-contain" />
                          </div>
                          <div 
                            className="absolute -top-1 -right-1 w-4 h-4 rounded-full border-2 border-white shadow-sm"
                            style={{ backgroundColor: i.color.hex }}
                          />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-lg text-gray-900 mb-1">{i.name}</h3>
                          <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                            <span className="bg-gray-100 px-2 py-1 rounded-md font-medium">{i.brand}</span>
                            <span>•</span>
                            <span>{i.application}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-medium text-gray-700">Size:</span>
                              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-sm font-semibold">{i.size}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-medium text-gray-700">Color:</span>
                              <div className="flex items-center gap-1">
                                <div 
                                  className="w-3 h-3 rounded-full border shadow-sm"
                                  style={{ backgroundColor: i.color.hex }}
                                />
                                <span className="text-sm font-medium" style={{ color: i.color.hex }}>
                                  {i.color.name}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3 flex-shrink-0">
                          <div className="flex items-center gap-1 bg-gray-50 rounded-xl p-1">
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              onClick={() => updateQty(i.id, Math.max(1, i.quantity - 1))}
                              className="h-8 w-8 rounded-lg hover:bg-red-100 hover:text-red-600 transition-colors"
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <div className="w-12 text-center font-bold text-lg text-gray-900">{i.quantity}</div>
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              onClick={() => updateQty(i.id, i.quantity + 1)}
                              className="h-8 w-8 rounded-lg hover:bg-green-100 hover:text-green-600 transition-colors"
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                          
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            onClick={() => removeItem(i.id)}
                            className="h-10 w-10 rounded-xl hover:bg-red-100 hover:text-red-600 transition-colors group"
                          >
                            <Trash2 className="h-4 w-4 group-hover:scale-110 transition-transform" />
                          </Button>
                        </div>
                      </div>

                      {/* Mobile Layout */}
                      <div className="sm:hidden p-4">
                        <div className="flex gap-4 mb-4">
                          <div className="relative">
                            <div
                              className="w-16 h-16 rounded-xl border-2 flex items-center justify-center flex-shrink-0"
                              style={{ 
                                background: `linear-gradient(135deg, ${i.color.hex}15, ${i.color.hex}30)`,
                                borderColor: i.color.hex + '30'
                              }}
                            >
                              <img src={i.image} alt={i.name} className="h-12 w-12 object-contain" />
                            </div>
                            <div 
                              className="absolute -top-1 -right-1 w-4 h-4 rounded-full border-2 border-white shadow-sm"
                              style={{ backgroundColor: i.color.hex }}
                            />
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-base leading-tight text-gray-900 mb-1">{i.name}</h3>
                            <p className="text-sm text-gray-600 mb-2">{i.brand} • {i.application}</p>
                            <div className="flex items-center gap-2">
                              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-xs font-semibold">
                                {i.size}
                              </span>
                              <div className="flex items-center gap-1">
                                <div 
                                  className="w-3 h-3 rounded-full border shadow-sm"
                                  style={{ backgroundColor: i.color.hex }}
                                />
                                <span className="text-xs font-medium" style={{ color: i.color.hex }}>
                                  {i.color.name}
                                </span>
                              </div>
                            </div>
                          </div>
                          
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            onClick={() => removeItem(i.id)}
                            className="h-8 w-8 text-gray-400 hover:text-red-500 hover:bg-red-50 flex-shrink-0 self-start rounded-lg transition-colors"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                        
                        <div className="flex items-center justify-center pt-3 border-t border-gray-100">
                          <div className="flex items-center gap-1 bg-gray-50 rounded-xl p-1">
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              onClick={() => updateQty(i.id, Math.max(1, i.quantity - 1))}
                              className="h-9 w-9 rounded-lg hover:bg-red-100 hover:text-red-600 transition-colors"
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <div className="w-12 text-center font-bold text-lg text-gray-900">{i.quantity}</div>
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              onClick={() => updateQty(i.id, i.quantity + 1)}
                              className="h-9 w-9 rounded-lg hover:bg-green-100 hover:text-green-600 transition-colors"
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            // Checkout Form View
            <div className="px-4 sm:px-6 py-6 animate-in slide-in-from-right-5 fade-in-0 duration-500 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
              <div className="max-w-lg mx-auto">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8 space-y-8 relative overflow-hidden">
         
                  
                  <div className="text-center mb-8 relative z-10">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">Customer Information</h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-4 animate-pulse"></div>
                  </div>

                  <div className="space-y-6 relative z-10">
                    {/* Name Field */}
                    <div className="space-y-3 animate-in slide-in-from-left-5 fade-in-0 duration-500 transform hover:scale-[1.02] transition-transform" style={{ animationDelay: '100ms' }}>
                      <label className="text-sm font-bold text-gray-800 flex items-center gap-2 group">
                        <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-1.5 rounded-lg group-hover:scale-110 transition-transform">
                          <User className="h-4 w-4 text-white" />
                        </div>
                        Full Name *
                      </label>
                      <div className="relative group">
                        <input
                          type="text"
                          value={customerInfo.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className={`w-full px-5 py-4 rounded-2xl border-2 transition-all duration-300 focus:outline-none focus:scale-[1.02] focus:shadow-lg backdrop-blur-sm ${
                            errors.name 
                              ? 'border-red-400 bg-red-50/80 focus:border-red-500 focus:ring-4 focus:ring-red-200' 
                              : customerInfo.name 
                                ? 'border-green-400 bg-green-50/80 focus:border-green-500 focus:ring-4 focus:ring-green-200' 
                                : 'border-blue-200 bg-blue-50/50 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-200'
                          }`}
                          placeholder="Enter your full name"
                        />
                        {customerInfo.name && !errors.name && (
                          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                            <CheckCircle className="h-5 w-5 text-green-500 animate-pulse" />
                          </div>
                        )}
                      </div>
                      {errors.name && (
                        <p className="text-red-600 text-sm flex items-center gap-2 animate-in slide-in-from-left-3 fade-in-0 duration-300">
                          <X className="h-4 w-4 bg-red-100 rounded-full p-0.5" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Phone Field */}
                    <div className="space-y-3 animate-in slide-in-from-left-5 fade-in-0 duration-500 transform hover:scale-[1.02] transition-transform" style={{ animationDelay: '200ms' }}>
                      <label className="text-sm font-bold text-gray-800 flex items-center gap-2 group">
                        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-1.5 rounded-lg group-hover:scale-110 transition-transform">
                          <Phone className="h-4 w-4 text-white" />
                        </div>
                        Phone Number *
                      </label>
                      <div className="relative group">
                        <input
                          type="tel"
                          value={customerInfo.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className={`w-full px-5 py-4 rounded-2xl border-2 transition-all duration-300 focus:outline-none focus:scale-[1.02] focus:shadow-lg backdrop-blur-sm ${
                            errors.phone 
                              ? 'border-red-400 bg-red-50/80 focus:border-red-500 focus:ring-4 focus:ring-red-200' 
                              : customerInfo.phone.length >= 10 
                                ? 'border-green-400 bg-green-50/80 focus:border-green-500 focus:ring-4 focus:ring-green-200' 
                                : 'border-emerald-200 bg-emerald-50/50 hover:border-emerald-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-200'
                          }`}
                          placeholder="Enter your 10-digit phone number"
                        />
                        {customerInfo.phone.length >= 10 && !errors.phone && (
                          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                            <CheckCircle className="h-5 w-5 text-green-500 animate-pulse" />
                          </div>
                        )}
                      </div>
                      {errors.phone && (
                        <p className="text-red-600 text-sm flex items-center gap-2 animate-in slide-in-from-left-3 fade-in-0 duration-300">
                          <X className="h-4 w-4 bg-red-100 rounded-full p-0.5" />
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div className="space-y-3 animate-in slide-in-from-left-5 fade-in-0 duration-500 transform hover:scale-[1.02] transition-transform" style={{ animationDelay: '300ms' }}>
                      <label className="text-sm font-bold text-gray-800 flex items-center gap-2 group">
                        <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-1.5 rounded-lg group-hover:scale-110 transition-transform">
                          <Mail className="h-4 w-4 text-white" />
                        </div>
                        Email Address (Optional)
                      </label>
                      <div className="relative group">
                        <input
                          type="email"
                          value={customerInfo.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className={`w-full px-5 py-4 rounded-2xl border-2 transition-all duration-300 focus:outline-none focus:scale-[1.02] focus:shadow-lg backdrop-blur-sm ${
                            errors.email 
                              ? 'border-red-400 bg-red-50/80 focus:border-red-500 focus:ring-4 focus:ring-red-200' 
                              : customerInfo.email && customerInfo.email.includes('@') 
                                ? 'border-green-400 bg-green-50/80 focus:border-green-500 focus:ring-4 focus:ring-green-200' 
                                : 'border-purple-200 bg-purple-50/50 hover:border-purple-300 focus:border-purple-500 focus:ring-4 focus:ring-purple-200'
                          }`}
                          placeholder="Enter your email address"
                        />
                        {customerInfo.email && customerInfo.email.includes('@') && !errors.email && (
                          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                            <CheckCircle className="h-5 w-5 text-green-500 animate-pulse" />
                          </div>
                        )}
                      </div>
                      {errors.email && (
                        <p className="text-red-600 text-sm flex items-center gap-2 animate-in slide-in-from-left-3 fade-in-0 duration-300">
                          <X className="h-4 w-4 bg-red-100 rounded-full p-0.5" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Address Field */}
                    <div className="space-y-3 animate-in slide-in-from-left-5 fade-in-0 duration-500 transform hover:scale-[1.02] transition-transform" style={{ animationDelay: '400ms' }}>
                      <label className="text-sm font-bold text-gray-800 flex items-center gap-2 group">
                        <div className="bg-gradient-to-r from-orange-500 to-red-600 p-1.5 rounded-lg group-hover:scale-110 transition-transform">
                          <MapPin className="h-4 w-4 text-white" />
                        </div>
                        Complete Address *
                      </label>
                      <div className="relative group">
                        <textarea
                          value={customerInfo.address}
                          onChange={(e) => handleInputChange('address', e.target.value)}
                          rows={3}
                          className={`w-full px-5 py-4 rounded-2xl border-2 transition-all duration-300 focus:outline-none focus:scale-[1.02] focus:shadow-lg resize-none backdrop-blur-sm ${
                            errors.address 
                              ? 'border-red-400 bg-red-50/80 focus:border-red-500 focus:ring-4 focus:ring-red-200' 
                              : customerInfo.address 
                                ? 'border-green-400 bg-green-50/80 focus:border-green-500 focus:ring-4 focus:ring-green-200' 
                                : 'border-orange-200 bg-orange-50/50 hover:border-orange-300 focus:border-orange-500 focus:ring-4 focus:ring-orange-200'
                          }`}
                          placeholder="Enter your complete address"
                        />
                        {customerInfo.address && !errors.address && (
                          <div className="absolute right-3 top-3">
                            <CheckCircle className="h-5 w-5 text-green-500 animate-pulse" />
                          </div>
                        )}
                      </div>
                      {errors.address && (
                        <p className="text-red-600 text-sm flex items-center gap-2 animate-in slide-in-from-left-3 fade-in-0 duration-300">
                          <X className="h-4 w-4 bg-red-100 rounded-full p-0.5" />
                          {errors.address}
                        </p>
                      )}
                    </div>

                    {/* City, State, Pincode Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 animate-in slide-in-from-bottom-5 fade-in-0 duration-500" style={{ animationDelay: '500ms' }}>
                      <div className="space-y-3 transform hover:scale-[1.02] transition-transform">
                        <label className="text-sm font-bold text-gray-800 flex items-center gap-2">
                          <div className="bg-gradient-to-r from-indigo-500 to-blue-600 p-1 rounded-md">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                          City *
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            value={customerInfo.city}
                            onChange={(e) => handleInputChange('city', e.target.value)}
                            className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:scale-[1.05] focus:shadow-md backdrop-blur-sm ${
                              errors.city 
                                ? 'border-red-400 bg-red-50/80 focus:border-red-500' 
                                : customerInfo.city 
                                  ? 'border-green-400 bg-green-50/80 focus:border-green-500' 
                                  : 'border-indigo-200 bg-indigo-50/50 hover:border-indigo-300 focus:border-indigo-500'
                            }`}
                            placeholder="City"
                          />
                          {customerInfo.city && !errors.city && (
                            <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                            </div>
                          )}
                        </div>
                        {errors.city && (
                          <p className="text-red-600 text-xs flex items-center gap-1 animate-pulse">
                            <X className="h-3 w-3" />{errors.city}
                          </p>
                        )}
                      </div>

                      <div className="space-y-3 transform hover:scale-[1.02] transition-transform">
                        <label className="text-sm font-bold text-gray-800 flex items-center gap-2">
                          <div className="bg-gradient-to-r from-teal-500 to-cyan-600 p-1 rounded-md">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                          State *
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            value={customerInfo.state}
                            onChange={(e) => handleInputChange('state', e.target.value)}
                            className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:scale-[1.05] focus:shadow-md backdrop-blur-sm ${
                              errors.state 
                                ? 'border-red-400 bg-red-50/80 focus:border-red-500' 
                                : customerInfo.state 
                                  ? 'border-green-400 bg-green-50/80 focus:border-green-500' 
                                  : 'border-teal-200 bg-teal-50/50 hover:border-teal-300 focus:border-teal-500'
                            }`}
                            placeholder="State"
                          />
                          {customerInfo.state && !errors.state && (
                            <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                            </div>
                          )}
                        </div>
                        {errors.state && (
                          <p className="text-red-600 text-xs flex items-center gap-1 animate-pulse">
                            <X className="h-3 w-3" />{errors.state}
                          </p>
                        )}
                      </div>

                      <div className="space-y-3 transform hover:scale-[1.02] transition-transform">
                        <label className="text-sm font-bold text-gray-800 flex items-center gap-2">
                          <div className="bg-gradient-to-r from-pink-500 to-rose-600 p-1 rounded-md">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                          Pincode *
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            value={customerInfo.pincode}
                            onChange={(e) => handleInputChange('pincode', e.target.value)}
                            className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:scale-[1.05] focus:shadow-md backdrop-blur-sm ${
                              errors.pincode 
                                ? 'border-red-400 bg-red-50/80 focus:border-red-500' 
                                : customerInfo.pincode.length === 6 
                                  ? 'border-green-400 bg-green-50/80 focus:border-green-500' 
                                  : 'border-pink-200 bg-pink-50/50 hover:border-pink-300 focus:border-pink-500'
                            }`}
                            placeholder="Pincode"
                          />
                          {customerInfo.pincode.length === 6 && !errors.pincode && (
                            <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                            </div>
                          )}
                        </div>
                        {errors.pincode && (
                          <p className="text-red-600 text-xs flex items-center gap-1 animate-pulse">
                            <X className="h-3 w-3" />{errors.pincode}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Footer */}
        {state.items.length > 0 && (
          <div className="bg-white border-t border-gray-200 px-4 sm:px-6 py-4 flex-shrink-0">
            {!showCheckoutForm ? (
              // Cart Footer
              <>
                {/* Desktop Footer */}
                <div className="hidden sm:flex items-center justify-between gap-4">
                  <Button 
                    variant="outline" 
                    onClick={handleCloseCart}
                    className="px-6 py-2 rounded-xl font-medium border-2 hover:bg-gray-50 transition-colors"
                  >
                    Continue Shopping
                  </Button>
                  
                  <Button 
                    onClick={() => setShowCheckoutForm(true)}
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-2 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Proceed to Checkout
                  </Button>
                </div>

                {/* Mobile Footer */}
                <div className="sm:hidden space-y-3">
                  <Button 
                    onClick={() => setShowCheckoutForm(true)}
                    className="w-full h-12 text-base bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold shadow-lg active:scale-95 transition-all duration-200"
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Proceed to Checkout
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    onClick={handleCloseCart}
                    className="w-full h-11 text-base rounded-xl font-medium border-2 hover:bg-gray-50 transition-colors"
                  >
                    Continue Shopping
                  </Button>
                </div>
              </>
            ) : (
              // Checkout Form Footer
              <>
                {/* Desktop Footer */}
                <div className="hidden sm:flex items-center justify-between gap-4">
                  <Button 
                    variant="outline" 
                    onClick={() => setShowCheckoutForm(false)}
                    className="px-6 py-2 rounded-xl font-medium border-2 hover:bg-gray-50 transition-colors flex items-center gap-2"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Cart
                  </Button>
                  
                  <Button 
                    onClick={handleCheckout}
                    disabled={isSubmitting}
                    className={`px-8 py-2 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${isSubmitting ? 'bg-blue-400' : 'bg-green-600 hover:bg-green-700'} text-white`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Processing...
                      </>
                    ) : (
                      <>
                        <CheckCircle className="mr-2 h-5 w-5" />
                        Checkout Via WhatsApp
                      </>
                    )}
                  </Button>
                </div>

                {/* Mobile Footer */}
                <div className="sm:hidden space-y-3">
                  <Button 
                    onClick={handleCheckout}
                    disabled={isSubmitting}
                    className={`w-full h-12 text-base rounded-xl font-semibold shadow-lg active:scale-95 transition-all duration-200 ${isSubmitting ? 'bg-blue-400' : 'bg-green-600 hover:bg-green-700'} text-white`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Processing...
                      </>
                    ) : (
                      <>
                        <CheckCircle className="mr-2 h-5 w-5" />
                        Checkout Via WhatsApp
                      </>
                    )}
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    onClick={() => setShowCheckoutForm(false)}
                    className="w-full h-11 text-base rounded-xl font-medium border-2 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Cart
                  </Button>
                </div>
              </>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CartPopover;