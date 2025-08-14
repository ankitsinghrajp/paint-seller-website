import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { Minus, Plus, ShoppingCart, Trash2, X, Package } from "lucide-react";

const PHONE_NUMBER = "919630009838";

const CartPopover: React.FC = () => {
  const { state, closeCart, removeItem, updateQty } = useCart();

  const message = React.useMemo(() => {
    const lines = state.items.map((i) => {
      return `• ${i.name} (${i.brand} / ${i.application})\n  Size: ${i.size}, Qty: ${i.quantity}\n  Color: ${i.color.name} (${i.color.hex})`;
    });
    return encodeURIComponent(`New Paint Order\n\n${lines.join("\n\n")}`);
  }, [state.items]);

  return (
    <Dialog open={state.isOpen} onOpenChange={(o) => (!o ? closeCart() : null)}>
      <DialogContent className="max-w-2xl sm:max-w-2xl w-[95vw] sm:w-full h-[80vh] sm:h-auto max-h-[80vh] sm:max-h-[85vh] rounded-md md:rounded-2xl p-0 overflow-hidden animate-in fade-in-0 zoom-in-95 duration-300 flex flex-col border-0 shadow-2xl">
        
        {/* Header with gradient */}
        <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-6 flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90 backdrop-blur-sm"></div>
          <div className="relative flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-full">
                <ShoppingCart className="h-6 w-6" />
              </div>
              <div>
                <DialogTitle className="text-xl font-bold">Your Cart</DialogTitle>
                <p className="text-blue-100 text-sm">
                  {state.items.length} {state.items.length === 1 ? 'item' : 'items'} selected
                </p>
              </div>
            </div>
          
          </div>
        </div>
        
        {/* Cart Items */}
        <div className="flex-1 overflow-auto bg-gray-50 px-4 sm:px-6 py-4">
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
        
        {/* Footer */}
        {state.items.length > 0 && (
          <div className="bg-white border-t border-gray-200 px-4 sm:px-6 py-4 flex-shrink-0">
            {/* Desktop Footer */}
            <div className="hidden sm:flex items-center justify-between gap-4">
              <Button 
                variant="outline" 
                onClick={closeCart}
                className="px-6 py-2 rounded-xl font-medium border-2 hover:bg-gray-50 transition-colors"
              >
                Continue Shopping
              </Button>
              
              <a
                href={`https://wa.me/${PHONE_NUMBER}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-2 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Checkout via WhatsApp
                </Button>
              </a>
            </div>

            {/* Mobile Footer */}
            <div className="sm:hidden space-y-3">
              <a
                href={`https://wa.me/${PHONE_NUMBER}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button className="w-full h-12 text-base bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold shadow-lg active:scale-95 transition-all duration-200">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Checkout via WhatsApp
                </Button>
              </a>
              
              <Button 
                variant="outline" 
                onClick={closeCart}
                className="w-full h-11 text-base rounded-xl font-medium border-2 hover:bg-gray-50 transition-colors"
              >
                Continue Shopping
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CartPopover;