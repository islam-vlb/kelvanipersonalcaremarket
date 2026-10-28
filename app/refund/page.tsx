import type { Metadata } from 'next';
import Link from 'next/link';
import { COMPANY } from '@/lib/company';
import LegalPage from '@/components/LegalPage';

export const metadata: Metadata = { title: 'Refund Policy' };

export default function RefundPage() {
  return (
    <LegalPage title="Refund Policy">
      <p>We want you to be happy with your purchase from {COMPANY.domain}, operated by {COMPANY.legal} (DBA {COMPANY.dba}). If you are not, you may return eligible items within 30 days of the delivery date for a refund.</p>
      <h2>Eligibility</h2>
      <ul>
        <li>Requests must be made within 30 days from the delivery date.</li>
        <li>Items must be unused and in their original packaging, with all included parts.</li>
        <li>For hygiene reasons, opened razor blades and cartridges, used soaps, creams, balms and alum blocks, and used brushes cannot be returned unless they arrived defective or damaged.</li>
        <li>Proof of purchase (your order number) is required.</li>
      </ul>
      <h2>How to return an item</h2>
      <ol className="list-decimal pl-6 mb-4 space-y-1">
        <li>Contact us at <a href={COMPANY.phoneHref}>{COMPANY.phone}</a> or <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a> with your order number.</li>
        <li>We will send a return authorization and instructions.</li>
        <li>Pack the item securely and ship it to the return address below.</li>
      </ol>
      <h2>Return address</h2>
      <div className="card p-5 my-4">
        <p className="font-semibold">{COMPANY.legal}</p>
        <p>DBA: {COMPANY.dba}</p>
        <p>{COMPANY.fulfillmentAddress}</p>
      </div>
      <p>This is the same address shown on our <Link href="/fulfillment-address">Fulfillment Address</Link> page.</p>
      <h2>Refunds</h2>
      <p>After your return is received and inspected, we will notify you by email. Approved refunds are issued to the original Visa or Mastercard within 5-10 business days. Because shipping is free, there is no shipping charge to refund. Return shipping costs are the customer&apos;s responsibility unless the item arrived damaged or incorrect.</p>
      <h2>Damaged or incorrect items</h2>
      <p>If your order arrives damaged or you receive the wrong item, contact us within 30 days of delivery. We will arrange a replacement or refund and cover the return shipping.</p>
      <h2>Contact</h2>
      <p>{COMPANY.legal}, {COMPANY.corpAddress}. Phone <a href={COMPANY.phoneHref}>{COMPANY.phone}</a>. Email <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.</p>
    </LegalPage>
  );
}
