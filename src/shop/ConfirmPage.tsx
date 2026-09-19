import { Check } from 'lucide-react';
import { useEffect } from 'react';
import { useShop } from './ShopContext';
import { note } from './Notes';
import { go } from './useRoute';
import { CheckoutHeader, Summary } from './CheckoutPage';

export default function ConfirmPage() {
  const { order, reset } = useShop();
  useEffect(() => { if (!order) go('shop'); }, [order]);
  if (!order) return null;
  const o = order;
  const first = o.name.split(' ')[0];
  const steps: [string, string, boolean][] = [
    ['Zamówienie przyjęte', 'Właśnie teraz', true],
    ['Płatność potwierdzona', o.pay, true],
    ['Przekazanie do wysyłki', 'Zwykle w ciągu 1–2 dni roboczych', false],
    ['Dostawa', o.home ? 'Kurier DPD, 5–8 dni roboczych' : 'Odbiór w punkcie, 5–8 dni roboczych', false],
  ];
  return (
    <div className="bg-white text-[#1a1a1a] min-h-screen">
      <CheckoutHeader back={false} />
      <div className="grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,.95fr)]">
        <section className="px-[clamp(16px,11vw,130px)] py-10 lg:pr-10">
          <div className="max-w-[520px] lg:ml-auto">
            <div className="w-14 h-14 rounded-full bg-[#2e7d32] flex items-center justify-center mb-4"><Check className="w-7 h-7 text-white stroke-[3.4]" /></div>
            <h1 className="text-[28px] font-extrabold text-[#141e5c] leading-tight mb-1.5">Dziękujemy, {first}!</h1>
            <p className="text-[15px] text-[#444] leading-relaxed mb-6">Zamówienie <b>#{o.num}</b> zostało przyjęte. Potwierdzenie z fakturą VAT wysłaliśmy na adres <b>{o.email}</b>.</p>

            <ol className="mb-5" {...note('Order tracking steps', 'US confirmation pages mostly say “your order is confirmed”. Polish shoppers expect to see the next steps and who delivers, because InPost and DPD send SMS and app notifications and people watch for them. The timeline sets that expectation and states the delivery window again.')}>
              {steps.map(([t, sub, on], i) => (
                <li key={t} className="relative flex gap-3 pb-4 text-sm">
                  {i < steps.length - 1 && <span className="absolute left-[5px] top-[18px] bottom-0 w-0.5 bg-[#dedede]" />}
                  <span className={`relative z-[1] mt-1 w-3 h-3 rounded-full border-2 shrink-0 ${on ? 'bg-[#2e7d32] border-[#2e7d32]' : 'bg-white border-[#c9c9c9]'}`} />
                  <span><b>{t}</b><small className="block text-[12.5px] text-[#707070]">{sub}</small></span>
                </li>
              ))}
            </ol>

            <div className="rounded-xl border border-[#dedede] p-4 text-sm leading-relaxed mb-3.5" {...note('Delivery and contact recap', 'The pickup point or address, the phone number that will receive the InPost/DPD SMS, and the payment method are repeated so a wrong digit or point can be caught. The withdrawal-right and returns links follow the legal requirements for distance sales.')}>
              <h4 className="text-[13px] uppercase tracking-wide text-[#707070] font-bold mb-1">{o.home ? 'Adres dostawy' : 'Punkt odbioru'}</h4>
              {o.name}<br />{o.addr}<br />{o.ship}
              <h4 className="text-[13px] uppercase tracking-wide text-[#707070] font-bold mt-3 mb-1">Kontakt</h4>
              {o.phone} · {o.email}
              <h4 className="text-[13px] uppercase tracking-wide text-[#707070] font-bold mt-3 mb-1">Płatność</h4>
              {o.pay}
            </div>
            <div className="rounded-xl border border-[#dedede] p-4 text-sm mb-5"><b>Masz 14 dni na odstąpienie od umowy.</b> <a href="#/confirm" onClick={(e) => e.preventDefault()} className="underline text-[#141e5c]">Zasady zwrotów</a> · <a href="#/confirm" onClick={(e) => e.preventDefault()} className="underline text-[#141e5c]">Kontakt</a></div>
            <a href="#/shop" onClick={() => reset()} className="inline-block rounded-lg bg-[#141e5c] text-white font-semibold text-sm px-5 py-3">Kontynuuj zakupy</a>
            <p className="text-[12.5px] text-[#707070] mt-4">Makieta: zamówienie nie zostało złożone, a żadna płatność nie została przetworzona.</p>
          </div>
        </section>
        <aside className="bg-[#fafafa] border-t lg:border-t-0 lg:border-l border-[#dedede] px-[clamp(16px,10vw,130px)] py-9 lg:pl-10">
          <Summary items={o.items} sub={o.sub} shipCost={o.shipCost} total={o.total} />
        </aside>
      </div>
    </div>
  );
}
