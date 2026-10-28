import Link from 'next/link';
import type { Metadata } from 'next';
import { COMPANY } from '@/lib/company';

export const metadata: Metadata = { title: 'About', description: 'About Kelvani Personal Care Market and the shaving tools we sell.' };

export default function AboutPage() {
  return (
    <>
      <section className="relative bg-char-950 diag-bottom pb-24">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/about.jpg" alt="Grooming tools on a workbench" className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="wrap relative py-24 sm:py-32">
          <p className="eyebrow">About us</p>
          <h1 className="h-display text-5xl sm:text-7xl mt-3 max-w-3xl">A shop for people who like a proper shave</h1>
        </div>
      </section>
      <section className="section">
        <div className="wrap grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-5 text-cream/85 leading-relaxed">
            <p>{COMPANY.domain} is an online store dedicated to shaving and men&apos;s grooming. We carry a deliberately small range: safety razors and refill packs, shaving brushes and stands, shave soaps and creams, aftershave and alum, and complete grooming kits for home and travel.</p>
            <p>Every product on our shelves is something we would use ourselves. We describe each item plainly, with real dimensions in inches and ounces, a list of what is in the box and notes on how to look after it, so there are no surprises when it arrives.</p>
            <p>Orders ship free to anywhere in the contiguous United States. We pack and ship from our fulfillment address in St. Petersburg, Florida, usually within 1-3 business days, and every order can be returned within 30 days of delivery.</p>
            <p>The store is operated by {COMPANY.legal}, doing business as {COMPANY.dba}. If you have a question about a product or an order, our team is available at {COMPANY.phone} or {COMPANY.email}.</p>
          </div>
          <aside className="card p-6 h-fit">
            <h2 className="h-display text-2xl text-copper-light">What we stand for</h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li><strong>Plain descriptions.</strong> Real sizes, real materials.</li>
              <li><strong>Durable tools.</strong> Metal, wood, ceramic and leather.</li>
              <li><strong>Free shipping.</strong> No minimums, no fees.</li>
              <li><strong>30-day returns.</strong> Simple and fair.</li>
            </ul>
            <Link href="/shop" className="btn mt-6 w-full">Shop now</Link>
          </aside>
        </div>
      </section>
    </>
  );
}
