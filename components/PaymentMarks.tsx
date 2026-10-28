export function PaymentMarks({ light = false }: { light?: boolean }) {
  const base = light ? 'border-char-900 text-char-900' : 'border-cream/60 text-cream';
  return (
    <div className="flex items-center gap-2" aria-label="Accepted payment: Visa and Mastercard">
      <span className={`border ${base} px-3 py-1 font-display italic tracking-widest text-sm`}>VISA</span>
      <span className={`border ${base} px-3 py-1 font-display tracking-wider text-sm flex items-center gap-1.5`}>
        <span className="inline-flex"><i className="w-3.5 h-3.5 rounded-full bg-red-600 block" /><i className="w-3.5 h-3.5 rounded-full bg-amber-500 block -ml-1.5 opacity-90" /></span>
        Mastercard
      </span>
    </div>
  );
}
