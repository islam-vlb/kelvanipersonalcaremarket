'use client';
import Link from 'next/link';
import { useStore } from '@/lib/store';
import { getProduct, money } from '@/lib/products';

export default function CartDrawer() {
  const { cart, drawerOpen, setDrawerOpen, setQty, removeFromCart, subtotal } = useStore();
  if (!drawerOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex justify-end" role="dialog" aria-label="Shopping cart">
      <button className="absolute inset-0 bg-black/70" onClick={() => setDrawerOpen(false)} aria-label="Close cart" />
      <aside className="relative w-full max-w-md bg-char-900 border-l-4 border-copper h-full flex flex-col">
        <div className="flex items-center justify-between p-5 border-b border-char-600">
          <h2 className="h-display text-2xl">Your Cart</h2>
          <button onClick={() => setDrawerOpen(false)} className="text-cream hover:text-copper-light text-3xl leading-none" aria-label="Close">&times;</button>
        </div>
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cart.length === 0 && <p className="text-cream/70">Your cart is empty.</p>}
          {cart.map((l) => {
            const p = getProduct(l.slug);
            if (!p) return null;
            return (
              <div key={l.slug} className="flex gap-4 border border-char-600 p-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.image} alt={p.name} className="w-20 h-20 object-cover" />
                <div className="flex-1">
                  <Link href={`/product/${p.slug}`} onClick={() => setDrawerOpen(false)} className="font-semibold text-sm hover:text-copper-light">{p.name}</Link>
                  <div className="text-copper-light font-display tracking-wider mt-1">{money(p.price)}</div>
                  <div className="flex items-center gap-3 mt-2">
                    <div className="flex items-center border border-char-600">
                      <button className="px-2.5 py-1" onClick={() => setQty(l.slug, l.qty - 1)} aria-label="Decrease">-</button>
                      <span className="px-2 text-sm">{l.qty}</span>
                      <button className="px-2.5 py-1" onClick={() => setQty(l.slug, l.qty + 1)} aria-label="Increase">+</button>
                    </div>
                    <button className="text-xs underline text-cream/70 hover:text-copper-light" onClick={() => removeFromCart(l.slug)}>Remove</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="p-5 border-t border-char-600 space-y-3">
          <div className="flex justify-between"><span>Subtotal</span><span className="font-display tracking-wider">{money(subtotal)}</span></div>
          <div className="flex justify-between text-sm text-cream/80"><span>Shipping</span><span>Free shipping ($0.00)</span></div>
          <Link href="/checkout" onClick={() => setDrawerOpen(false)} className={`btn w-full ${cart.length === 0 ? 'pointer-events-none opacity-40' : ''}`}>Checkout</Link>
          <Link href="/cart" onClick={() => setDrawerOpen(false)} className="btn-ghost w-full">View cart</Link>
        </div>
      </aside>
    </div>
  );
}
