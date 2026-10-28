'use client';
import Link from 'next/link';
import { Product, money, catName } from '@/lib/products';
import { useStore } from '@/lib/store';

export default function ProductCard({ p }: { p: Product }) {
  const { wishlist, toggleWishlist } = useStore();
  const wished = wishlist.includes(p.slug);
  return (
    <article className="card group flex flex-col">
      <Link href={`/product/${p.slug}`} className="block overflow-hidden border-b-4 border-copper">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={p.image} alt={p.name} className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500" />
      </Link>
      <div className="p-5 flex flex-col flex-1">
        <div className="eyebrow !text-xs">{catName(p.category)}</div>
        <h3 className="h-display text-xl mt-2"><Link href={`/product/${p.slug}`} className="hover:text-copper-light">{p.name}</Link></h3>
        <p className="text-sm text-cream/70 mt-2 flex-1">{p.short}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="font-display text-2xl tracking-wider text-copper-light">{money(p.price)}</span>
          <button
            onClick={() => toggleWishlist(p.slug)}
            className={`text-xs font-display uppercase tracking-widest border px-3 py-1.5 ${wished ? 'border-copper text-copper-light' : 'border-char-600 text-cream/70 hover:border-copper'}`}
            aria-pressed={wished}
          >
            {wished ? 'Saved' : 'Wishlist'}
          </button>
        </div>
        <Link href={`/product/${p.slug}`} className="btn-ghost mt-4 !py-2.5 text-sm">View details</Link>
      </div>
    </article>
  );
}
