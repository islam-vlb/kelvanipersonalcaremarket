import type { Metadata } from 'next';
import { COMPANY } from '@/lib/company';
import ContactForm from './ContactForm';

export const metadata: Metadata = { title: 'Contact', description: 'Contact Kelvani Personal Care Market customer service.' };

export default function ContactPage() {
  return (
    <>
      <section className="bg-char-950 border-b-4 border-copper">
        <div className="wrap py-14 sm:py-20">
          <p className="eyebrow">We are here to help</p>
          <h1 className="h-display text-5xl sm:text-7xl mt-3">Contact</h1>
        </div>
      </section>
      <section className="wrap section grid lg:grid-cols-2 gap-10">
        <div className="card p-7 space-y-4 text-sm leading-relaxed h-fit min-w-0 break-words">
          <h2 className="h-display text-2xl text-copper-light">{COMPANY.domain}</h2>
          <div><div className="label">Company</div><p>{COMPANY.legal}</p><p>DBA: {COMPANY.dba}</p></div>
          <div><div className="label">Corporate address</div><p>{COMPANY.legal}</p><p>{COMPANY.corpAddress}</p></div>
          <div><div className="label">Customer service phone</div><a className="underline text-copper-light font-semibold" href={COMPANY.phoneHref}>{COMPANY.phone}</a></div>
          <div><div className="label">Customer service email</div><a className="underline text-copper-light font-semibold break-all" href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></div>
          <p className="text-cream/70">We respond to messages within 1-2 business days.</p>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
