'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useStore } from '@/lib/store';
import { COMPANY } from '@/lib/company';

const NAV = [
  { href: '/shop', label: 'Shop' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/wishlist', label: 'Wishlist' },
];

export default function Header() {
  const { count, setDrawerOpen, wishlist } = useStore();
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-char-950/95 backdrop-blur border-b-4 border-copper">
      <div className="bg-copper text-char-950 text-center font-display uppercase tracking-[0.25em] text-xs py-1.5">
        Free shipping on every order &middot; 30-day returns
      </div>
      <div className="wrap flex items-center justify-between h-20">
        <Link href="/" className="flex flex-col leading-none" onClick={() => setOpen(false)}>
          <span className="font-display text-3xl tracking-[0.18em] uppercase text-cream">Kelvani</span>
          <span className="hidden sm:block text-[11px] tracking-[0.2em] text-copper-light mt-1">{COMPANY.domain}</span>
        </Link>
        <nav className="hidden md:flex items-center gap-9">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="font-display uppercase tracking-widest text-sm text-cream hover:text-copper-light">
              {n.label}
              {n.href === '/wishlist' && wishlist.length > 0 ? ` (${wishlist.length})` : ''}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button onClick={() => setDrawerOpen(true)} className="btn !py-2.5 !px-5 text-sm" aria-label="Open cart">
            Cart <span className="bg-char-950 text-copper-light px-2 py-0.5 text-xs">{count}</span>
          </button>
          <button className="md:hidden text-cream p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              {open ? <path d="M5 5l14 14M19 5L5 19" /> : <path d="M3 7h18M3 12h18M3 17h18" />}
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <nav className="md:hidden bg-char-900 border-t border-char-600">
          <div className="wrap py-4 flex flex-col">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="font-display uppercase tracking-widest py-3 border-b border-char-700">
                {n.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
