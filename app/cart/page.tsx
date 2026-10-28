'use client';
import Link from 'next/link';
import { useStore } from '@/lib/store';
import { getProduct, money } from '@/lib/products';

export default function CartPage() {
  const { cart, setQty, removeFromCart, subtotal } = useStore();
  return (
    <section className="wrap section">
      <p className="eyebrow">Your order</p>
      <h1 className="h-display text-5xl sm:text-6xl mt-3">Cart</h1>
      {cart.length === 0 ? (
        <div className="mt-10 card p-10 text-center">
          <p className="text-cream/80">Your cart is empty.</p>
          <Link href="/shop" className="btn mt-6">Continue shopping</Link>
        </div>
      ) : (
        <div className="mt-10 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cart.map((l) => {
              const p = getProduct(l.slug);
              if (!p) return null;
              return (
                <div key={l.slug} className="card p-4 flex gap-5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.image} alt={p.name} className="w-28 h-28 object-cover" />
                  <div className="flex-1">
                    <Link href={`/product/${p.slug}`} className="h-display text-xl hover:text-copper-light">{p.name}</Link>
                    <div className="text-copper-light font-display tracking-wider mt-1">{money(p.price)}</div>
                    <div className="flex items-center gap-4 mt-3">
                      <div className="flex items-center border border-char-600">
                        <button className="px-3 py-1.5" onClick={() => setQty(l.slug, l.qty - 1)} aria-label="Decrease">-</button>
                        <span className="px-3">{l.qty}</span>
                        <button className="px-3 py-1.5" onClick={() => setQty(l.slug, l.qty + 1)} aria-label="Increase">+</button>
                      </div>
                      <button className="text-sm underline text-cream/70 hover:text-copper-light" onClick={() => removeFromCart(l.slug)}>Remove</button>
                    </div>
                  </div>
                  <div className="font-display text-xl tracking-wider hidden sm:block">{money(p.price * l.qty)}</div>
                </div>
              );
            })}
          </div>
          <aside className="card p-6 h-fit space-y-3">
            <h2 className="h-display text-2xl text-copper-light">Summary</h2>
            <div className="flex justify-between"><span>Subtotal</span><span>{money(subtotal)}</span></div>
            <div className="flex justify-between"><span>Shipping</span><span>Free shipping ($0.00)</span></div>
            <div className="flex justify-between border-t border-char-600 pt-3 font-display text-xl tracking-wider"><span>Total</span><span>{money(subtotal)}</span></div>
            <Link href="/checkout" className="btn w-full">Proceed to checkout</Link>
            <Link href="/shop" className="btn-ghost w-full">Continue shopping</Link>
          </aside>
        </div>
      )}
    </section>
  );
}
