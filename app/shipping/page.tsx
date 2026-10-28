import type { Metadata } from 'next';
import Link from 'next/link';
import { COMPANY } from '@/lib/company';
import LegalPage from '@/components/LegalPage';

export const metadata: Metadata = { title: 'Shipping Policy' };

export default function ShippingPage() {
  return (
    <LegalPage title="Shipping Policy">
      <p>This Shipping Policy applies to all orders placed at {COMPANY.domain}, operated by {COMPANY.legal} (DBA {COMPANY.dba}).</p>
      <h2>Free shipping on every order</h2>
      <p>Shipping is always free. Every order ships for $0.00, with no minimum purchase required.</p>
      <h2>Processing time</h2>
      <p>Orders are processed and shipped within 1-3 business days from our fulfillment address: {COMPANY.fulfillmentAddress}. Business days are Monday through Friday, excluding U.S. federal holidays. Orders placed after business hours or on weekends begin processing the next business day.</p>
      <h2>Delivery time</h2>
      <p>Once shipped, delivery typically takes 3-7 business days within the United States. Transit times can vary with carrier conditions, weather and holidays.</p>
      <h2>Where we ship</h2>
      <p>We currently ship to addresses in the contiguous United States only. We do not ship to Alaska, Hawaii, U.S. territories, APO/FPO addresses or outside the USA.</p>
      <h2>Tracking</h2>
      <p>When your order ships, we email a tracking number to the address you provided at checkout. If you have not received it within 4 business days of ordering, please contact us.</p>
      <h2>Address accuracy</h2>
      <p>Please make sure your shipping address is complete and correct. If you notice a mistake, contact us right away at <a href={COMPANY.phoneHref}>{COMPANY.phone}</a> or <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>. We cannot redirect a package once it has been handed to the carrier.</p>
      <h2>Lost or damaged packages</h2>
      <p>If your package arrives damaged or appears lost in transit, contact us within 30 days of the expected delivery date and we will work with you on a replacement or refund under our <Link href="/refund">Refund Policy</Link>.</p>
      <h2>Contact</h2>
      <p>{COMPANY.legal}, {COMPANY.corpAddress}. Phone <a href={COMPANY.phoneHref}>{COMPANY.phone}</a>. Email <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.</p>
    </LegalPage>
  );
}
