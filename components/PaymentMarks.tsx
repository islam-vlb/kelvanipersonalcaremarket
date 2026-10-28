/* eslint-disable @next/next/no-img-element */
export function PaymentMarks({ light = false, size = 'footer' }: { light?: boolean; size?: 'footer' | 'checkout' }) {
  const h = size === 'checkout' ? 'h-8' : 'h-7';
  const chip = `${light ? 'border-char-900/30' : 'border-cream/60'} border bg-white px-2.5 ${h} flex items-center justify-center`;
  const img = size === 'checkout' ? 'h-[22px]' : 'h-[18px]';
  return (
    <div className="flex flex-wrap items-center gap-2" aria-label="Accepted payment: Visa and Mastercard">
      <span className={chip}>
        <img src="/images/payments/visa.png" alt="Visa" height={22} className={`${img} w-auto`} />
      </span>
      <span className={chip}>
        <img src="/images/payments/mastercard.png" alt="Mastercard" height={22} className={`${img} w-auto`} />      </span>
    </div>
  );
}
