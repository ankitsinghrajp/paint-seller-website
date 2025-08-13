import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { Minus, Plus, ShoppingCart, Trash2 } from "lucide-react";

const PHONE_NUMBER = "9630009838";

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
      <DialogContent className="max-w-2xl rounded-xl p-0 overflow-hidden animate-enter">
        <DialogHeader className="px-6 pt-6">
          <DialogTitle className="text-xl">Your Cart</DialogTitle>
        </DialogHeader>
        <div className="px-6 pb-6 space-y-4 max-h-[60vh] overflow-auto">
          {state.items.length === 0 ? (
            <div className="text-center text-muted-foreground py-16">Your cart is empty.</div>
          ) : (
            state.items.map((i) => (
              <div key={i.id} className="flex items-center gap-4 p-4 rounded-lg bg-card shadow-elegant">
                <div
                  className="size-16 rounded-md border flex items-center justify-center"
                  style={{ background: i.color.hex + "20" }}
                >
                  <img src={i.image} alt={i.name} className="h-12 w-12 object-contain" />
                </div>
                <div className="flex-1">
                  <div className="font-medium">{i.name}</div>
                  <div className="text-xs text-muted-foreground">{i.brand} • {i.application}</div>
                  <div className="text-xs mt-1">{i.size} • <span style={{ color: i.color.hex }}>{i.color.name}</span></div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon" onClick={() => updateQty(i.id, Math.max(1, i.quantity - 1))}>
                    <Minus className="size-4" />
                  </Button>
                  <div className="w-6 text-center">{i.quantity}</div>
                  <Button variant="outline" size="icon" onClick={() => updateQty(i.id, i.quantity + 1)}>
                    <Plus className="size-4" />
                  </Button>
                </div>
                <Button variant="ghost" size="icon" onClick={() => removeItem(i.id)}>
                  <Trash2 className="size-4" />
                </Button>
              </div>
            ))
          )}
        </div>
        <div className="px-6 pb-6 flex items-center justify-between border-t pt-4 bg-muted/30">
          <div className="text-lg font-semibold">Total: ₹{total.toFixed(0)}</div>
          <div className="flex gap-3">
            <Button variant="outline" onClick={closeCart}>Continue Shopping</Button>
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
      </DialogContent>
    </Dialog>
  );
};

export default CartPopover;
