import Link from 'next/link';
import { CATEGORIES } from '@/lib/products';
import { COMPANY } from '@/lib/company';

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-char-950 diag-bottom pb-24 sm:pb-32">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/hero.jpg" alt="Safety razor and shaving brush on a dark stone counter" className="absolute inset-0 w-full h-full object-cover object-right opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-r from-char-950 via-char-950/80 to-transparent" />
        <div className="wrap relative py-24 sm:py-36 lg:py-44">
          <p className="eyebrow">Shaving &amp; men&apos;s grooming</p>
          <h1 className="h-display text-6xl sm:text-7xl lg:text-8xl mt-4 max-w-3xl">
            Shave <span className="text-copper-light">sharp.</span><br />Groom with <span className="text-copper-light">edge.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-cream/85">
            Safety razors, badger and synthetic brushes, soaps, creams and complete grooming kits. Honest tools for a proper shave, delivered free.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="/shop" className="btn">Shop the collection</Link>
            <Link href="/about" className="btn-ghost">Our story</Link>
          </div>
        </div>
      </section>

      {/* PROMISE STRIP */}
      <section className="-mt-10 relative z-10">
        <div className="wrap grid sm:grid-cols-3 gap-0 border border-copper bg-char-800">
          {[
            ['Free shipping', 'On every order, shipped within 1-3 business days.'],
            ['30-day returns', 'Return eligible items within 30 days of delivery.'],
            ['Visa & Mastercard', 'Secure one-time payment, billed once.'],
          ].map(([t, d], i) => (
            <div key={t} className={`p-6 ${i > 0 ? 'sm:border-l border-t sm:border-t-0 border-char-600' : ''}`}>
              <h3 className="h-display text-xl text-copper-light">{t}</h3>
              <p className="text-sm text-cream/75 mt-1">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="section">
        <div className="wrap">
          <p className="eyebrow">Browse by category</p>
          <h2 className="h-display text-4xl sm:text-5xl mt-3">Built for the daily ritual</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            {CATEGORIES.map((c) => (
              <Link key={c.slug} href={`/shop?category=${c.slug}`} className="card group block">
                <div className="overflow-hidden border-b-4 border-copper">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.image} alt={c.name} className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="h-display text-2xl">{c.name}</h3>
                  <p className="text-sm text-cream/70 mt-2">{c.blurb}</p>
                  <span className="inline-block mt-4 font-display uppercase tracking-widest text-sm text-copper-light">Shop now &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* RITUAL - cream block */}
      <section className="bg-cream text-char-900 diag-both py-28 sm:py-36">
        <div className="wrap grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-display uppercase tracking-[0.28em] text-copper-dark text-sm">The wet shave ritual</p>
            <h2 className="h-display text-4xl sm:text-6xl mt-3">Lather. Glide. Finish.</h2>
            <ol className="mt-8 space-y-6">
              {[
                ['01', 'Build the lather', 'Load a damp brush with soap or cream and whip it up in a bowl until thick and glossy.'],
                ['02', 'Glide the blade', 'Let the weight of a safety razor do the work. Light pressure, short strokes, fresh blade.'],
                ['03', 'Finish clean', 'Rinse with cool water and finish with an alum block or aftershave balm.'],
              ].map(([n, t, d]) => (
                <li key={n} className="flex gap-5">
                  <span className="font-display text-4xl text-copper leading-none">{n}</span>
                  <div><h3 className="font-display uppercase tracking-widest text-xl">{t}</h3><p className="mt-1 text-char-700">{d}</p></div>
                </li>
              ))}
            </ol>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/lather.jpg" alt="Rich shaving lather in a bowl with a brush" className="w-full aspect-[4/3] object-cover border-8 border-char-900" />
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="section">
        <div className="wrap grid lg:grid-cols-2 gap-12 items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/about.jpg" alt="Grooming tools laid out on a workbench" className="w-full aspect-[4/3] object-cover border-l-8 border-copper" />
          <div>
            <p className="eyebrow">About {COMPANY.brand}</p>
            <h2 className="h-display text-4xl sm:text-5xl mt-3">Tools that last longer than trends</h2>
            <p className="mt-5 text-cream/80 leading-relaxed">
              {COMPANY.domain} is a focused shop for traditional shaving and grooming. We choose durable razors, dependable brushes and straightforward soaps and creams, and we describe each one plainly so you know exactly what is in the box.
            </p>
            <Link href="/about" className="btn-ghost mt-7">Read more</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-char-800 diag-top pt-24 pb-20">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/shelf.jpg" alt="Grooming shelf with bottles, razor and brush" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="wrap relative text-center">
          <h2 className="h-display text-4xl sm:text-6xl">Ready to upgrade your routine?</h2>
          <p className="mt-4 text-cream/80 max-w-xl mx-auto">Sixteen carefully chosen products. Free shipping on every order. 30-day returns.</p>
          <Link href="/shop" className="btn mt-8">Browse all products</Link>
        </div>
      </section>
    </>
  );
}
