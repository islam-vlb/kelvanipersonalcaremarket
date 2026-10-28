'use client';
import { useState } from 'react';
import { COMPANY } from '@/lib/company';

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  if (sent) {
    return (
      <div className="card p-7">
        <h2 className="h-display text-2xl text-copper-light">Message received</h2>
        <p className="mt-3 text-cream/85">Thank you. Our team will reply by email within 1-2 business days. For urgent order questions call {COMPANY.phone}.</p>
      </div>
    );
  }
  return (
    <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="card p-7 space-y-4">
      <h2 className="h-display text-2xl text-copper-light">Send a message</h2>
      <div><label className="label" htmlFor="n">Name</label><input id="n" required className="field" /></div>
      <div><label className="label" htmlFor="e">Email</label><input id="e" type="email" required className="field" /></div>
      <div><label className="label" htmlFor="o">Order number (optional)</label><input id="o" className="field" /></div>
      <div><label className="label" htmlFor="m">Message</label><textarea id="m" required rows={5} className="field" /></div>
      <button className="btn" type="submit">Send message</button>
    </form>
  );
}
