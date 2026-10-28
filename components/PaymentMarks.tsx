/* eslint-disable @next/next/no-img-element */
export function PaymentMarks({ light = false, size = 'footer' }: { light?: boolean; size?: 'footer' | 'checkout' }) {
  const h = size === 'checkout' ? 'h-[26px]' : 'h-6';
  const chip = `${light ? 'border-char-900/30' : 'border-cream/60'} border bg-white px-1.5 ${h} inline-flex items-center justify-center`;
  const img = size === 'checkout' ? 'h-5' : 'h-4';
  return (
    <div className="flex flex-wrap items-center gap-1.5" aria-label="Accepted payment: Visa and Mastercard">
      <span className={chip}>
        <img src="/images/payments/visa.png" alt="Visa" className={`${img} w-auto max-w-none`} />
      </span>
      <span className={chip}>
        <img src="/images/payments/mastercard.png" alt="Mastercard" className={`${img} w-auto max-w-none`} />
      </span>
    </div>
  );
}
