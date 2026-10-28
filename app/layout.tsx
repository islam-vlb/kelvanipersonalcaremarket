import type { Metadata } from 'next';
import { Oswald, Inter } from 'next/font/google';
import './globals.css';
import { Providers } from '@/lib/store';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import { COMPANY } from '@/lib/company';

const display = Oswald({ subsets: ['latin'], weight: ['500', '600', '700'], variable: '--font-display' });
const body = Inter({ subsets: ['latin'], variable: '--font-body' });

export const metadata: Metadata = {
  metadataBase: new URL('https://kelvanipersonalcaremarket.com'),
  title: { default: `${COMPANY.domain} | Shaving & Men's Grooming`, template: `%s | ${COMPANY.domain}` },
  description: 'Safety razors, shaving brushes, soaps, creams, aftershave and grooming kits. Free shipping on every order in the contiguous USA.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
          <CartDrawer />
        </Providers>
      </body>
    </html>
  );
}
