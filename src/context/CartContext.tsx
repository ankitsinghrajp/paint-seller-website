import React, { createContext, useContext, useEffect, useMemo, useReducer } from "react";

export type Brand = "Asian Paints" | "Berger" | "Dulux" | "Nerolac";
export type Application = "Interior" | "Exterior";
export type SizeOption = "1L" | "4L" | "10L" | "20L";

export interface ColorOption {
  name: string;
  hex: string; // e.g. #AABBCC
}

export interface CartItem {
  id: string; // unique line item id
  productId: string;
  name: string;
  brand: Brand;
  application: Application;
  pricePerL: number;
  size: SizeOption;
  quantity: number;
  color: ColorOption;
  image: string; // url
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

type Action =
  | { type: "ADD"; item: CartItem }
  | { type: "REMOVE"; id: string }
  | { type: "QTY"; id: string; quantity: number }
  | { type: "OPEN" }
  | { type: "CLOSE" }
  | { type: "LOAD"; items: CartItem[] };

const CartContext = createContext<{
  state: CartState;
  addItem: (item: Omit<CartItem, "id">) => void;
  removeItem: (id: string) => void;
  updateQty: (id: string, quantity: number) => void;
  openCart: () => void;
  closeCart: () => void;
  clear: () => void;
  total: number;
  count: number;
} | null>(null);

function reducer(state: CartState, action: Action): CartState {
  switch (action.type) {
    case "LOAD":
      return { ...state, items: action.items };
    case "ADD": {
      const items = [action.item, ...state.items];
      return { ...state, items, isOpen: true };
    }
    case "REMOVE": {
      const items = state.items.filter((i) => i.id !== action.id);
      return { ...state, items };
    }
    case "QTY": {
      const items = state.items.map((i) =>
        i.id === action.id ? { ...i, quantity: action.quantity } : i
      );
      return { ...state, items };
    }
    case "OPEN":
      return { ...state, isOpen: true };
    case "CLOSE":
      return { ...state, isOpen: false };
    default:
      return state;
  }
}

const initialState: CartState = { items: [], isOpen: false };

export const CartProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Load from localStorage
  useEffect(() => {
    const raw = localStorage.getItem("cart");
    if (raw) {
      try {
        const items = JSON.parse(raw) as CartItem[];
        dispatch({ type: "LOAD", items });
      } catch {}
    }
  }, []);

  // Persist
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.items));
  }, [state.items]);

  const addItem = (item: Omit<CartItem, "id">) => {
    const id = `${item.productId}-${item.size}-${item.color.hex}-${Date.now()}`;
    dispatch({ type: "ADD", item: { ...item, id } });
  };

  const removeItem = (id: string) => dispatch({ type: "REMOVE", id });
  const updateQty = (id: string, quantity: number) =>
    dispatch({ type: "QTY", id, quantity });
  const openCart = () => dispatch({ type: "OPEN" });
  const closeCart = () => dispatch({ type: "CLOSE" });
  const clear = () => {
    state.items.forEach((i) => dispatch({ type: "REMOVE", id: i.id }));
  };

  const total = useMemo(
    () =>
      state.items.reduce((sum, i) => {
        const liters = i.size === "1L" ? 1 : i.size === "4L" ? 4 : i.size === "10L" ? 10 : 20;
        return sum + i.pricePerL * liters * i.quantity;
      }, 0),
    [state.items]
  );

  const count = useMemo(
    () => state.items.reduce((sum, i) => sum + i.quantity, 0),
    [state.items]
  );

  const value = {
    state,
    addItem,
    removeItem,
    updateQty,
    openCart,
    closeCart,
    clear,
    total,
    count,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
