import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { PRODUCTS, getProduct, money, catName } from '@/lib/products';
import ProductActions from '@/components/ProductActions';
import ProductCard from '@/components/ProductCard';

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduct(slug);
  return p ? { title: p.name, description: p.short } : {};
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();
  const related = PRODUCTS.filter((x) => x.category === p.category && x.slug !== p.slug).slice(0, 4);
  return (
    <>
      <div className="wrap pt-8 text-sm text-cream/60">
        <Link href="/shop" className="hover:text-copper-light">Shop</Link> / <Link href={`/shop?category=${p.category}`} className="hover:text-copper-light">{catName(p.category)}</Link> / <span className="text-cream">{p.name}</span>
      </div>
      <section className="wrap py-10 grid lg:grid-cols-2 gap-10 lg:gap-14">
        <div className="border-b-8 border-copper bg-char-800">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={p.image} alt={p.name} className="w-full aspect-square object-cover" />
        </div>
        <div>
          <p className="eyebrow">{catName(p.category)}</p>
          <h1 className="h-display text-4xl sm:text-5xl mt-3">{p.name}</h1>
          <p className="font-display text-4xl tracking-wider text-copper-light mt-4">{money(p.price)}</p>
          <p className="mt-5 text-cream/85 leading-relaxed">{p.description}</p>
          <ul className="mt-5 text-sm space-y-1.5">
            <li className="flex gap-2"><span className="text-copper-light">&#9632;</span> Free shipping</li>
            <li className="flex gap-2"><span className="text-copper-light">&#9632;</span> 30-day returns</li>
          </ul>
          <ProductActions slug={p.slug} />
        </div>
      </section>
      <section className="wrap pb-16 grid md:grid-cols-3 gap-6">
        {[
          ['Key details', p.details],
          ['What’s included', p.included],
          ['Usage & care', p.care],
        ].map(([t, items]) => (
          <div key={t as string} className="card p-6">
            <h2 className="h-display text-2xl text-copper-light">{t as string}</h2>
            <ul className="mt-4 space-y-2 text-sm text-cream/85 list-disc pl-5">
              {(items as string[]).map((i) => <li key={i}>{i}</li>)}
            </ul>
          </div>
        ))}
      </section>
      {related.length > 0 && (
        <section className="wrap pb-20">
          <h2 className="h-display text-3xl mb-6">More from this category</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {related.map((r) => <ProductCard key={r.slug} p={r} />)}
          </div>
        </section>
      )}
    </>
  );
}
