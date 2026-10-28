'use client';
import Link from 'next/link';
import { useStore } from '@/lib/store';
import { getProduct } from '@/lib/products';
import ProductCard from '@/components/ProductCard';

export default function WishlistPage() {
  const { wishlist, ready } = useStore();
  const items = wishlist.map((s) => getProduct(s)).filter((p) => !!p);
  return (
    <section className="wrap section">
      <p className="eyebrow">Saved for later</p>
      <h1 className="h-display text-5xl sm:text-6xl mt-3">Wishlist</h1>
      {ready && items.length === 0 ? (
        <div className="mt-10 card p-10 text-center">
          <p className="text-cream/80">Your wishlist is empty. Tap Wishlist on any product to save it here.</p>
          <Link href="/shop" className="btn mt-6">Browse products</Link>
        </div>
      ) : (
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((p) => p && <ProductCard key={p.slug} p={p} />)}
        </div>
      )}
    </section>
  );
}
