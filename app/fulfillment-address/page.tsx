import type { Metadata } from 'next';
import Link from 'next/link';
import { COMPANY } from '@/lib/company';
import LegalPage from '@/components/LegalPage';

export const metadata: Metadata = { title: 'Fulfillment Address' };

export default function FulfillmentPage() {
  return (
    <LegalPage title="Fulfillment Address">
      <p>All orders placed at {COMPANY.domain} are packed and shipped from, and returns are received at, the following address:</p>
      <div className="card p-6 my-6 text-lg">
        <p className="font-semibold">{COMPANY.legal}</p>
        <p>DBA: {COMPANY.dba}</p>
        <p>{COMPANY.fulfillmentAddress}</p>
      </div>
      <p>This is also the return address referenced in our <Link href="/refund">Refund Policy</Link>. Please do not send returns anywhere else, and contact us before sending an item back so we can provide a return authorization.</p>
      <h2>Corporate office</h2>
      <p>{COMPANY.legal}, {COMPANY.corpAddress}</p>
      <h2>Customer service</h2>
      <p>Phone: <a href={COMPANY.phoneHref}>{COMPANY.phone}</a><br />Email: <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></p>
    </LegalPage>
  );
}
