import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { Minus, Plus, ShoppingCart, Trash2, X } from "lucide-react";

const PHONE_NUMBER = "919630009838";

const CartPopover: React.FC = () => {
  const { state, closeCart, removeItem, updateQty, total } = useCart();

  const message = React.useMemo(() => {
    const lines = state.items.map((i) => {
      const liters = i.size === "1L" ? 1 : i.size === "4L" ? 4 : i.size === "10L" ? 10 : 20;
      const lineTotal = i.pricePerL * liters * i.quantity;
      return `• ${i.name} (${i.brand} / ${i.application})\n  Size: ${i.size}, Qty: ${i.quantity}\n  Color: ${i.color.name} (${i.color.hex})\n  Line Total: ₹${lineTotal.toFixed(0)}`;
    });
    lines.push(`\nTotal: ₹${total.toFixed(0)}`);
    return encodeURIComponent(`New Paint Order\n\n${lines.join("\n\n")}`);
  }, [state.items, total]);

  return (
    <Dialog open={state.isOpen} onOpenChange={(o) => (!o ? closeCart() : null)}>
      <DialogContent className="max-w-2xl sm:max-w-2xl w-[95vw] sm:w-full h-[80vh] sm:h-auto max-h-[80vh] sm:max-h-[85vh] rounded-xl p-0 overflow-hidden animate-enter flex flex-col">
        
        {/* Desktop Header */}
        <DialogHeader className="px-6 pt-6 flex-shrink-0 hidden sm:block">
          <DialogTitle className="text-xl">Your Cart</DialogTitle>
        </DialogHeader>

        {/* Mobile Header */}
        <div className="px-4 py-4 border-b flex items-center justify-between sm:hidden flex-shrink-0">
          <DialogTitle className="text-lg font-semibold">Your Cart</DialogTitle>
       
        </div>
        
        <div className="px-4 sm:px-6 pb-4 sm:pb-6 space-y-3 sm:space-y-4 flex-1 overflow-auto">
          {state.items.length === 0 ? (
            <div className="text-center text-muted-foreground py-16">
              <ShoppingCart className="mx-auto h-12 w-12 mb-4 opacity-50" />
              <p>Your cart is empty.</p>
            </div>
          ) : (
            state.items.map((i) => {
              const liters = i.size === "1L" ? 1 : i.size === "4L" ? 4 : i.size === "10L" ? 10 : 20;
              const lineTotal = i.pricePerL * liters * i.quantity;
              
              return (
                <div key={i.id}>
                  {/* Desktop Layout */}
                  <div className="hidden sm:flex items-center gap-4 p-4 rounded-lg bg-card shadow-elegant">
                    <div
                      className="size-16 rounded-md border flex items-center justify-center flex-shrink-0"
                      style={{ background: i.color.hex + "20" }}
                    >
                      <img src={i.image} alt={i.name} className="h-12 w-12 object-contain" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium">{i.name}</div>
                      <div className="text-xs text-muted-foreground">{i.brand} • {i.application}</div>
                      <div className="text-xs mt-1">{i.size} • <span style={{ color: i.color.hex }}>{i.color.name}</span></div>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <Button variant="outline" size="icon" onClick={() => updateQty(i.id, Math.max(1, i.quantity - 1))}>
                        <Minus className="size-4" />
                      </Button>
                      <div className="w-6 text-center">{i.quantity}</div>
                      <Button variant="outline" size="icon" onClick={() => updateQty(i.id, i.quantity + 1)}>
                        <Plus className="size-4" />
                      </Button>
                    </div>
                    <Button variant="ghost" size="icon" onClick={() => removeItem(i.id)} className="flex-shrink-0">
                      <Trash2 className="size-4" />
                    </Button>
                  </div>

                  {/* Mobile Layout */}
                  <div className="sm:hidden bg-white rounded-lg border p-4">
                    <div className="flex gap-3 mb-3">
                      <div
                        className="w-16 h-16 rounded-lg border flex items-center justify-center flex-shrink-0"
                        style={{ background: i.color.hex + "15" }}
                      >
                        <img src={i.image} alt={i.name} className="h-12 w-12 object-contain" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-base leading-tight">{i.name}</h3>
                        <p className="text-sm text-gray-600 mt-1">{i.brand}</p>
                        <p className="text-sm text-gray-500">{i.application}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-sm bg-gray-100 px-2 py-1 rounded-md font-medium">{i.size}</span>
                          <div className="flex items-center gap-1">
                            <div 
                              className="w-4 h-4 rounded-full border"
                              style={{ backgroundColor: i.color.hex }}
                            />
                            <span className="text-sm text-gray-600">{i.color.name}</span>
                          </div>
                        </div>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={() => removeItem(i.id)}
                        className="h-8 w-8 text-gray-400 hover:text-red-500 flex-shrink-0 self-start"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    <div className="flex items-center justify-between pt-3 border-t">
                      <div className="text-lg font-bold text-gray-900">₹{lineTotal.toFixed(0)}</div>
                      <div className="flex items-center gap-3">
                        <Button 
                          variant="outline" 
                          size="icon" 
                          onClick={() => updateQty(i.id, Math.max(1, i.quantity - 1))}
                          className="h-9 w-9 rounded-lg"
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="text-lg font-semibold min-w-[24px] text-center">{i.quantity}</span>
                        <Button 
                          variant="outline" 
                          size="icon" 
                          onClick={() => updateQty(i.id, i.quantity + 1)}
                          className="h-9 w-9 rounded-lg"
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
        
        {state.items.length > 0 && (
          <div className="px-4 sm:px-6 pb-4 sm:pb-6 border-t pt-4 bg-gray-50 sm:bg-muted/30 flex-shrink-0">
            {/* Desktop Footer */}
            <div className="hidden sm:flex items-center justify-between gap-3">
              <div className="text-lg font-semibold">Total: ₹{total.toFixed(0)}</div>
              <div className="flex gap-3">
                <Button variant="outline" onClick={closeCart}>
                  Continue Shopping
                </Button>
                <a
                  href={`https://wa.me/${PHONE_NUMBER}?text=${message}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="hero" className="min-w-40">
                    <ShoppingCart className="mr-2 size-4" /> Checkout via WhatsApp
                  </Button>
                </a>
              </div>
            </div>

            {/* Mobile Footer */}
            <div className="sm:hidden">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-medium text-gray-600">Total</span>
                <span className="text-2xl font-bold text-gray-900">₹{total.toFixed(0)}</span>
              </div>
              
              <div className="space-y-2">
                <a
                  href={`https://wa.me/${PHONE_NUMBER}?text=${message}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button className="w-full h-12 text-base bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold">
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Checkout via WhatsApp
                  </Button>
                </a>
                
                <Button 
                  variant="outline" 
                  onClick={closeCart}
                  className="w-full h-11 text-base rounded-xl font-medium"
                >
                  Continue Shopping
                </Button>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CartPopover;