'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { LAST_ORDER_KEY, Order } from '@/lib/store';
import { money } from '@/lib/products';
import { COMPANY } from '@/lib/company';

export default function ConfirmationPage() {
  const [order, setOrder] = useState<Order | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    try {
      const v = localStorage.getItem(LAST_ORDER_KEY);
      if (v) setOrder(JSON.parse(v));
    } catch { /* ignore */ }
    setLoaded(true);
  }, []);

  if (!loaded) return <section className="wrap section">Loading...</section>;
  if (!order) {
    return (
      <section className="wrap section text-center">
        <h1 className="h-display text-5xl">No recent order</h1>
        <Link href="/shop" className="btn mt-6">Browse products</Link>
      </section>
    );
  }
  return (
    <section className="wrap section max-w-3xl">
      <p className="eyebrow">Thank you</p>
      <h1 className="h-display text-5xl sm:text-6xl mt-3">Order confirmed</h1>
      <p className="mt-4 text-cream/85">A confirmation will be sent to {order.email}. Your order ships within 1-3 business days from our fulfillment address.</p>
      <div className="card p-6 mt-8 space-y-4">
        <div className="flex flex-wrap justify-between gap-2">
          <div><div className="label">Order number</div><div className="font-display text-2xl tracking-wider">{order.number}</div></div>
          <div><div className="label">Date</div><div>{new Date(order.placedAt).toLocaleDateString('en-US')}</div></div>
        </div>
        <div className="border-t border-char-600 pt-4 space-y-2">
          {order.lines.map((l) => (
            <div key={l.slug} className="flex justify-between text-sm"><span>{l.name} x {l.qty}</span><span>{money(l.price * l.qty)}</span></div>
          ))}
        </div>
        <div className="border-t border-char-600 pt-4 space-y-1 text-sm">
          <div className="flex justify-between"><span>Subtotal</span><span>{money(order.subtotal)}</span></div>
          <div className="flex justify-between"><span>Shipping</span><span>Free shipping ($0.00)</span></div>
          <div className="flex justify-between font-display text-xl tracking-wider pt-2"><span>Total</span><span>{money(order.total)}</span></div>
        </div>
        <div className="border-t border-char-600 pt-4 text-sm space-y-1">
          <div><span className="label inline">Ship to</span> {order.name}, {order.address}</div>
          <div>Your card was charged by <strong>{COMPANY.descriptor}</strong> for this one-time payment.</div>
          <div>Support: <a className="underline text-copper-light" href={COMPANY.phoneHref}>{COMPANY.phone}</a> &middot; <a className="underline text-copper-light" href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></div>
        </div>
      </div>
      <Link href="/shop" className="btn mt-8">Continue shopping</Link>
    </section>
  );
}
