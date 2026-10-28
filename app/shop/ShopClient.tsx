'use client';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { CATEGORIES, PRODUCTS } from '@/lib/products';
import ProductCard from '@/components/ProductCard';

export default function ShopClient() {
  const params = useSearchParams();
  const active = params.get('category') ?? '';
  const cat = CATEGORIES.find((c) => c.slug === active);
  const list = cat ? PRODUCTS.filter((p) => p.category === cat.slug) : PRODUCTS;
  return (
    <>
      <section className="bg-char-950 border-b-4 border-copper">
        <div className="wrap py-14 sm:py-20">
          <p className="eyebrow">The collection</p>
          <h1 className="h-display text-5xl sm:text-7xl mt-3">{cat ? cat.name : 'All products'}</h1>
          <p className="mt-4 text-cream/75 max-w-2xl">{cat ? cat.blurb : 'Razors, brushes, soaps, creams, aftershave and grooming kits. Free shipping on every order.'}</p>
        </div>
      </section>
      <section className="section !pt-10">
        <div className="wrap">
          <div className="flex flex-wrap gap-3 mb-10">
            <Link href="/shop" className={active === '' ? 'btn !py-2 text-sm' : 'btn-ghost !py-2 text-sm'}>All</Link>
            {CATEGORIES.map((c) => (
              <Link key={c.slug} href={`/shop?category=${c.slug}`} className={active === c.slug ? 'btn !py-2 text-sm' : 'btn-ghost !py-2 text-sm'}>{c.name}</Link>
            ))}
          </div>
          <p className="text-sm text-cream/60 mb-6">{list.length} product{list.length === 1 ? '' : 's'}</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {list.map((p) => <ProductCard key={p.slug} p={p} />)}
          </div>
        </div>
      </section>
    </>
  );
}
