import { Suspense } from 'react';
import type { Metadata } from 'next';
import ShopClient from './ShopClient';

export const metadata: Metadata = { title: 'Shop', description: 'Shop razors, brushes, soaps, creams, aftershave and grooming kits.' };

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="wrap section">Loading products...</div>}>
      <ShopClient />
    </Suspense>
  );
}
