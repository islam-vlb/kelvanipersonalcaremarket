'use client';
import { useState } from 'react';
import { useStore } from '@/lib/store';

export default function ProductActions({ slug }: { slug: string }) {
  const { addToCart, wishlist, toggleWishlist } = useStore();
  const [qty, setQty] = useState(1);
  const wished = wishlist.includes(slug);
  return (
    <div className="mt-6 space-y-4">
      <div className="flex items-center gap-4">
        <span className="label !mb-0">Quantity</span>
        <div className="flex items-center border border-char-600">
          <button className="px-4 py-2.5 hover:text-copper-light" onClick={() => setQty(Math.max(1, qty - 1))} aria-label="Decrease quantity">-</button>
          <span className="px-4 min-w-[2.5rem] text-center" aria-live="polite">{qty}</span>
          <button className="px-4 py-2.5 hover:text-copper-light" onClick={() => setQty(Math.min(10, qty + 1))} aria-label="Increase quantity">+</button>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-3">
        <button className="btn flex-1" onClick={() => addToCart(slug, qty)}>Add to Cart</button>
        <button className="btn-ghost flex-1" onClick={() => toggleWishlist(slug)} aria-pressed={wished}>
          {wished ? 'Remove from Wishlist' : 'Add to Wishlist'}
        </button>
      </div>
    </div>
  );
}
