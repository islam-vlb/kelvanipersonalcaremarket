import Link from 'next/link';
import { COMPANY } from '@/lib/company';
import { CATEGORIES } from '@/lib/products';
import { PaymentMarks } from './PaymentMarks';

export default function Footer() {
  return (
    <footer className="bg-cream text-char-900 relative mt-10">
      <div className="h-3 bg-copper" />
      <div className="wrap py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="font-display text-3xl tracking-[0.18em] uppercase">Kelvani</div>
          <div className="text-sm font-semibold text-copper-dark mt-1">{COMPANY.domain}</div>
          <p className="mt-4 text-sm leading-relaxed">Traditional shaving and grooming essentials, shipped free to your door anywhere in the contiguous USA.</p>
        </div>
        <div>
          <h3 className="font-display uppercase tracking-widest text-lg mb-3">Shop</h3>
          <ul className="space-y-2 text-sm">
            <li><Link className="hover:text-copper-dark underline-offset-4 hover:underline" href="/shop">All products</Link></li>
            {CATEGORIES.map((c) => (
              <li key={c.slug}><Link className="hover:text-copper-dark underline-offset-4 hover:underline" href={`/shop?category=${c.slug}`}>{c.name}</Link></li>
            ))}
            <li><Link className="hover:text-copper-dark underline-offset-4 hover:underline" href="/wishlist">Wishlist</Link></li>
            <li><Link className="hover:text-copper-dark underline-offset-4 hover:underline" href="/cart">Cart</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-display uppercase tracking-widest text-lg mb-3">Policies</h3>
          <ul className="space-y-2 text-sm">
            {[
              ['/terms', 'Terms & Conditions'], ['/privacy', 'Privacy Policy'], ['/refund', 'Refund Policy'],
              ['/shipping', 'Shipping Policy'], ['/fulfillment-address', 'Fulfillment Address'], ['/about', 'About'], ['/contact', 'Contact'],
            ].map(([h, l]) => (
              <li key={h}><Link className="hover:text-copper-dark underline-offset-4 hover:underline" href={h}>{l}</Link></li>
            ))}
          </ul>
        </div>
        <div className="text-sm leading-relaxed">
          <h3 className="font-display uppercase tracking-widest text-lg mb-3">Contact</h3>
          <p className="font-semibold">{COMPANY.legal}</p>
          <p>DBA: {COMPANY.dba}</p>
          <p>{COMPANY.corpAddress}</p>
          <p className="mt-2">Phone: <a className="underline font-semibold" href={COMPANY.phoneHref}>{COMPANY.phone}</a></p>
          <p>Email: <a className="underline font-semibold" href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></p>
          <div className="mt-4"><PaymentMarks light /></div>
        </div>
      </div>
      <div className="bg-char-950 text-cream/80 text-xs">
        <div className="wrap py-5 flex flex-col md:flex-row gap-2 md:items-center md:justify-between">
          <p>&copy; 2026 {COMPANY.legal}. All rights reserved. {COMPANY.domain}</p>
          <p className="text-copper-light font-semibold">{COMPANY.thirdParty}</p>
        </div>
      </div>
    </footer>
  );
}
