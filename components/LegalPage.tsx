import { ReactNode } from 'react';

export default function LegalPage({ title, updated = 'October 28, 2026', children }: { title: string; updated?: string; children: ReactNode }) {
  return (
    <>
      <section className="bg-char-950 border-b-4 border-copper">
        <div className="wrap py-14 sm:py-20">
          <p className="eyebrow">Policies</p>
          <h1 className="h-display text-5xl sm:text-6xl mt-3">{title}</h1>
          <p className="text-sm text-cream/60 mt-3">Last updated: {updated}</p>
        </div>
      </section>
      <section className="wrap section !pt-10 max-w-4xl prose-legal">{children}</section>
    </>
  );
}
