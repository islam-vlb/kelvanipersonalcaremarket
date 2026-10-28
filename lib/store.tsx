'use client';
import { createContext, useCallback, useContext, useEffect, useMemo, useState, ReactNode } from 'react';
import { getProduct } from './products';

export type CartLine = { slug: string; qty: number };
export type Order = {
  number: string; placedAt: string;
  lines: { slug: string; name: string; price: number; qty: number }[];
  subtotal: number; total: number; email: string; phone: string; name: string; address: string;
};

type Ctx = {
  cart: CartLine[]; wishlist: string[]; drawerOpen: boolean;
  setDrawerOpen: (v: boolean) => void;
  addToCart: (slug: string, qty?: number) => void;
  setQty: (slug: string, qty: number) => void;
  removeFromCart: (slug: string) => void;
  clearCart: () => void;
  toggleWishlist: (slug: string) => void;
  count: number; subtotal: number; ready: boolean;
};

const StoreCtx = createContext<Ctx | null>(null);
const CART_KEY = 'kelvani_cart';
const WISH_KEY = 'kelvani_wishlist';
export const LAST_ORDER_KEY = 'kelvani_last_order';

function read<T>(key: string, fallback: T): T {
  try {
    const v = localStorage.getItem(key);
    return v ? (JSON.parse(v) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function Providers({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartLine[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setCart(read<CartLine[]>(CART_KEY, []));
    setWishlist(read<string[]>(WISH_KEY, []));
    setReady(true);
  }, []);
  useEffect(() => {
    if (ready) {
      try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch { /* ignore */ }
    }
  }, [cart, ready]);
  useEffect(() => {
    if (ready) {
      try { localStorage.setItem(WISH_KEY, JSON.stringify(wishlist)); } catch { /* ignore */ }
    }
  }, [wishlist, ready]);

  const addToCart = useCallback((slug: string, qty = 1) => {
    setCart((c) => {
      const f = c.find((l) => l.slug === slug);
      if (f) return c.map((l) => (l.slug === slug ? { ...l, qty: Math.min(10, l.qty + qty) } : l));
      return [...c, { slug, qty: Math.min(10, qty) }];
    });
    setDrawerOpen(true);
  }, []);
  const setQty = useCallback((slug: string, qty: number) => {
    setCart((c) => c.map((l) => (l.slug === slug ? { ...l, qty: Math.max(1, Math.min(10, qty)) } : l)));
  }, []);
  const removeFromCart = useCallback((slug: string) => setCart((c) => c.filter((l) => l.slug !== slug)), []);
  const clearCart = useCallback(() => setCart([]), []);
  const toggleWishlist = useCallback((slug: string) => {
    setWishlist((w) => (w.includes(slug) ? w.filter((s) => s !== slug) : [...w, slug]));
  }, []);

  const count = cart.reduce((n, l) => n + l.qty, 0);
  const subtotal = cart.reduce((n, l) => n + (getProduct(l.slug)?.price ?? 0) * l.qty, 0);

  const value = useMemo(
    () => ({ cart, wishlist, drawerOpen, setDrawerOpen, addToCart, setQty, removeFromCart, clearCart, toggleWishlist, count, subtotal, ready }),
    [cart, wishlist, drawerOpen, addToCart, setQty, removeFromCart, clearCart, toggleWishlist, count, subtotal, ready]
  );
  return <StoreCtx.Provider value={value}>{children}</StoreCtx.Provider>;
}

export function useStore() {
  const c = useContext(StoreCtx);
  if (!c) throw new Error('useStore must be used within Providers');
  return c;
}
