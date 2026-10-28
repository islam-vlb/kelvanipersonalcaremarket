import type { Metadata } from 'next';
import Link from 'next/link';
import { COMPANY } from '@/lib/company';
import { PRODUCTS, money } from '@/lib/products';
import LegalPage from '@/components/LegalPage';

export const metadata: Metadata = { title: 'Terms & Conditions' };

export default function TermsPage() {
  return (
    <LegalPage title="Terms & Conditions">
      <p>These Terms &amp; Conditions govern your use of {COMPANY.domain} and any purchase made through it. The store is operated by {COMPANY.legal}, {COMPANY.corpAddress} (DBA {COMPANY.dba}). By placing an order you agree to these terms.</p>
      <h2>Eligibility</h2>
      <p>You must be 18 or older to purchase. Orders are accepted from customers with a shipping address in the contiguous United States only.</p>
      <h2>Products and pricing</h2>
      <p>All prices are in U.S. dollars and are one-time prices. Shipping is free on every order. We describe products as accurately as we can; colors may vary slightly from photos. The complete price list is below.</p>
      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border border-char-600">
          <thead className="bg-char-800 text-copper-light font-display uppercase tracking-widest text-left">
            <tr><th className="p-3">Product</th><th className="p-3 text-right">Price</th></tr>
          </thead>
          <tbody>
            {PRODUCTS.map((p) => (
              <tr key={p.slug} className="border-t border-char-600">
                <td className="p-3">{p.name}</td>
                <td className="p-3 text-right">{money(p.price)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h2>Payment and billing</h2>
      <p>We accept Visa and Mastercard. Your card will be charged by {COMPANY.descriptor} for this one-time payment. There is no subscription, membership or recurring billing. By placing an order you confirm that you are authorized to use the card provided.</p>
      <h2>Order acceptance</h2>
      <p>An order is accepted when we send an order confirmation. We may decline or cancel an order, for example because of a pricing error, suspected fraud or an unavailable item, in which case any charge will be refunded.</p>
      <h2>Shipping and delivery</h2>
      <p>Orders ship within 1-3 business days and are delivered in 3-7 business days within the contiguous USA. See our <Link href="/shipping">Shipping Policy</Link>.</p>
      <h2>Returns and refunds</h2>
      <p>You may return eligible items within 30 days from the delivery date. See our <Link href="/refund">Refund Policy</Link>. Returns are sent to {COMPANY.fulfillmentAddress}.</p>
      <h2>Safe use of products</h2>
      <p>Razors and blades are sharp. Use them with care, keep them out of reach of children and dispose of used blades safely. Follow the usage and care notes on each product page. Products are for external cosmetic grooming use only.</p>
      <h2>Intellectual property</h2>
      <p>All content on this site, including text, images and design, belongs to {COMPANY.legal} or its licensors and may not be copied without permission.</p>
      <h2>Limitation of liability</h2>
      <p>To the fullest extent permitted by law, {COMPANY.legal} is not liable for indirect or consequential damages arising from use of the site or products. Our total liability for any claim is limited to the amount you paid for the order concerned.</p>
      <h2>Privacy</h2>
      <p>Your use of the site is also governed by our <Link href="/privacy">Privacy Policy</Link>. {COMPANY.thirdParty}</p>
      <h2>Governing law</h2>
      <p>These terms are governed by the laws of the State of California, without regard to conflict-of-law rules.</p>
      <h2>Contact</h2>
      <p>{COMPANY.legal} (DBA {COMPANY.dba}), {COMPANY.corpAddress}. Phone <a href={COMPANY.phoneHref}>{COMPANY.phone}</a>. Email <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.</p>
    </LegalPage>
  );
}
