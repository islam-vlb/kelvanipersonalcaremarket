'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useStore, LAST_ORDER_KEY, Order } from '@/lib/store';
import { getProduct, money } from '@/lib/products';
import { COMPANY, US_STATES } from '@/lib/company';
import { PaymentMarks } from '@/components/PaymentMarks';

function validCard(num: string) {
  const n = num.replace(/\s/g, '');
  if (!/^\d{16}$/.test(n)) return false;
  const visa = n.startsWith('4');
  const mc = /^(5[1-5]|2(2[2-9][1-9]|2[3-9]\d|[3-6]\d\d|7[01]\d|720))/.test(n);
  return visa || mc;
}

export default function CheckoutPage() {
  const { cart, subtotal, clearCart } = useStore();
  const router = useRouter();
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  const lines = cart.map((l) => ({ l, p: getProduct(l.slug) })).filter((x) => x.p);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k: string) => String(f.get(k) ?? '').trim();
    if (!agree) return setError('Please accept the Terms & Conditions to continue.');
    if (!validCard(get('card'))) return setError('Please enter a valid 16-digit Visa or Mastercard number.');
    if (lines.length === 0) return setError('Your cart is empty.');
    setBusy(true);
    const order: Order = {
      number: `KPC-${Date.now().toString().slice(-8)}`,
      placedAt: new Date().toISOString(),
      lines: lines.map(({ l, p }) => ({ slug: l.slug, name: p!.name, price: p!.price, qty: l.qty })),
      subtotal, total: subtotal,
      email: get('email'), phone: get('phone'), name: `${get('first')} ${get('last')}`,
      address: `${get('address')}, ${get('city')}, ${get('state')} ${get('zip')}, United States`,
    };
    try { localStorage.setItem(LAST_ORDER_KEY, JSON.stringify(order)); } catch { /* ignore */ }
    clearCart();
    router.push('/order-confirmation');
  }

  if (lines.length === 0) {
    return (
      <section className="wrap section text-center">
        <h1 className="h-display text-5xl">Checkout</h1>
        <p className="mt-5 text-cream/80">Your cart is empty.</p>
        <Link href="/shop" className="btn mt-6">Browse products</Link>
      </section>
    );
  }

  return (
    <section className="wrap section">
      <p className="eyebrow">Secure checkout</p>
      <h1 className="h-display text-5xl sm:text-6xl mt-3">Checkout</h1>
      <form onSubmit={submit} className="mt-10 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <fieldset className="card p-6 grid sm:grid-cols-2 gap-4">
            <legend className="sr-only">Contact</legend>
            <h2 className="h-display text-2xl text-copper-light sm:col-span-2">Contact</h2>
            <div><label className="label" htmlFor="email">Email</label><input id="email" name="email" type="email" required className="field" autoComplete="email" /></div>
            <div><label className="label" htmlFor="phone">Phone</label><input id="phone" name="phone" type="tel" required className="field" autoComplete="tel" /></div>
          </fieldset>

          <fieldset className="card p-6 grid sm:grid-cols-2 gap-4">
            <legend className="sr-only">Shipping address</legend>
            <h2 className="h-display text-2xl text-copper-light sm:col-span-2">Shipping &amp; billing address</h2>
            <div><label className="label" htmlFor="first">First name</label><input id="first" name="first" required className="field" autoComplete="given-name" /></div>
            <div><label className="label" htmlFor="last">Last name</label><input id="last" name="last" required className="field" autoComplete="family-name" /></div>
            <div className="sm:col-span-2"><label className="label" htmlFor="address">Street address</label><input id="address" name="address" required className="field" autoComplete="street-address" /></div>
            <div><label className="label" htmlFor="city">City</label><input id="city" name="city" required className="field" autoComplete="address-level2" /></div>
            <div>
              <label className="label" htmlFor="state">State</label>
              <select id="state" name="state" required className="field" defaultValue="">
                <option value="" disabled>Select state</option>
                {US_STATES.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div><label className="label" htmlFor="zip">ZIP code</label><input id="zip" name="zip" required pattern="\d{5}(-\d{4})?" className="field" autoComplete="postal-code" /></div>
            <div>
              <label className="label" htmlFor="country">Country</label>
              <select id="country" name="country" className="field" value="United States" disabled onChange={() => {}}>
                <option>United States</option>
              </select>
              <p className="text-xs text-cream/60 mt-1">We ship to the contiguous USA only.</p>
            </div>
          </fieldset>

          <fieldset className="card p-6 grid sm:grid-cols-3 gap-4">
            <legend className="sr-only">Payment</legend>
            <div className="sm:col-span-3 flex items-center justify-between flex-wrap gap-3">
              <h2 className="h-display text-2xl text-copper-light">Payment</h2>
              <PaymentMarks size="checkout" />
            </div>
            <div className="sm:col-span-3"><label className="label" htmlFor="card">Card number (Visa or Mastercard)</label><input id="card" name="card" required inputMode="numeric" placeholder="1234 5678 9012 3456" className="field" autoComplete="cc-number" /></div>
            <div><label className="label" htmlFor="exp">Expiry (MM/YY)</label><input id="exp" name="exp" required pattern="(0[1-9]|1[0-2])\/\d{2}" placeholder="MM/YY" className="field" autoComplete="cc-exp" /></div>
            <div><label className="label" htmlFor="cvc">CVC</label><input id="cvc" name="cvc" required pattern="\d{3}" inputMode="numeric" className="field" autoComplete="cc-csc" /></div>
            <div><label className="label" htmlFor="cname">Name on card</label><input id="cname" name="cname" required className="field" autoComplete="cc-name" /></div>
          </fieldset>

          <div className="card p-6 space-y-4">
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} className="mt-1 w-5 h-5 accent-[#b87333]" />
              <span className="text-sm leading-relaxed">
                I have read and agree to the{' '}
                <Link href="/terms" target="_blank" className="font-bold underline text-copper-light">Terms &amp; Conditions</Link> and{' '}
                <Link href="/privacy" target="_blank" className="font-bold underline text-copper-light">Privacy Policy</Link>.
              </span>
            </label>
            <p className="text-sm text-cream/85">
              Your card will be charged by {COMPANY.descriptor} for this one-time payment. By placing this order I agree to the Terms &amp; Conditions.
            </p>
            <p className="text-sm font-semibold">You must be 18 or older to purchase.</p>
            <p className="text-sm text-cream/75">{COMPANY.thirdParty}</p>
            {error && <p role="alert" className="text-red-400 text-sm font-semibold">{error}</p>}
            <button type="submit" className="btn w-full sm:w-auto" disabled={!agree || busy}>Place order</button>
          </div>
        </div>

        <aside className="card p-6 h-fit space-y-4">
          <h2 className="h-display text-2xl text-copper-light">Order summary</h2>
          {lines.map(({ l, p }) => (
            <div key={l.slug} className="flex gap-3 text-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p!.image} alt={p!.name} className="w-14 h-14 object-cover" />
              <div className="flex-1"><div>{p!.name}</div><div className="text-cream/60">Qty {l.qty}</div></div>
              <div>{money(p!.price * l.qty)}</div>
            </div>
          ))}
          <div className="border-t border-char-600 pt-3 space-y-2 text-sm">
            <div className="flex justify-between"><span>Subtotal</span><span>{money(subtotal)}</span></div>
            <div className="flex justify-between"><span>Shipping</span><span>Free shipping ($0.00)</span></div>
            <div className="flex justify-between font-display text-xl tracking-wider pt-2"><span>Total</span><span>{money(subtotal)}</span></div>
          </div>
          <p className="text-xs text-cream/60">Sold by {COMPANY.legal} (DBA {COMPANY.dba}). Questions? {COMPANY.phone} or {COMPANY.email}.</p>
        </aside>
      </form>
    </section>
  );
}
