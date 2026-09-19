import { useState } from 'react';
import { Heart, ChevronDown, Truck, ShieldCheck, RotateCcw } from 'lucide-react';
import { PRODUCTS, FREE_FROM, zl } from './data';
import { useShop } from './ShopContext';
import { note } from './Notes';

const SORTS = [
  { id: 'rel', label: 'Najtrafniejsze' },
  { id: 'az', label: 'Nazwa: A–Z' },
  { id: 'za', label: 'Nazwa: Z–A' },
];

export function ShopStrip() {
  return (
    <div
      className="bg-[#ffb81c] text-[#001e60] text-center text-[13px] font-black uppercase tracking-widest py-2 px-4"
      {...note('Free-shipping bar', `US: “FREE SHIPPING ON ALL ORDERS $100+”. Poland: the threshold is restated in zł (${FREE_FROM} zł, roughly $100) and names the destination, so the offer reads as made for Polish shoppers. The exact amount is a placeholder for the pricing team.`)}
    >
      Darmowa dostawa do Polski od {FREE_FROM} zł
    </div>
  );
}

export default function ShopPage() {
  const { add } = useShop();
  const [sort, setSort] = useState('rel');
  const [open, setOpen] = useState(false);
  const list = [...PRODUCTS].sort((a, b) => (sort === 'az' ? a.name.localeCompare(b.name, 'pl') : sort === 'za' ? b.name.localeCompare(a.name, 'pl') : 0));
  const current = SORTS.find((s) => s.id === sort)!;

  return (
    <>
      <ShopStrip />
      <section className="bg-[#fbe4b6] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid md:grid-cols-2 items-center gap-4 min-h-[260px]">
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-[#001e60]/70 mb-2">Tillamook Shop Polska</p>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-[#001e60] leading-none">GADŻETY</h1>
            <p className="mt-4 text-[#001e60]/80 max-w-md text-base">Pluszowe zawieszki inspirowane serami z Oregonu. Wysyłamy do Polski w cenie z VAT i opłatami importowymi.</p>
          </div>
          <img src="/shop/hero.jpg" alt="Pluszowe zawieszki Tillamook" className="w-full max-w-[460px] justify-self-center md:justify-self-end" />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
        <div className="flex justify-center mb-8">
          <div className="relative" {...note('Sort control', 'Same control as the US shop, translated (“Sortuj: najtrafniejsze”). Polish sorting uses the Polish collation, so names beginning with Ł or Ż sort correctly.')}>
            <button
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              className="inline-flex items-center gap-3 rounded-full border-2 border-[#001e60] px-6 py-3 font-black uppercase text-sm tracking-wide text-[#001e60] cursor-pointer"
            >
              Sortuj: {current.label.toLowerCase()}
              <span className="w-7 h-7 rounded-full bg-[#001e60] text-white flex items-center justify-center"><ChevronDown className="w-4 h-4" /></span>
            </button>
            {open && (
              <ul className="absolute left-1/2 -translate-x-1/2 mt-2 w-56 rounded-2xl bg-white shadow-xl border border-[#001e60]/10 p-1.5 z-20">
                {SORTS.map((s) => (
                  <li key={s.id}>
                    <button onClick={() => { setSort(s.id); setOpen(false); }} className={`w-full text-left px-3 py-2 rounded-xl text-sm font-bold cursor-pointer ${s.id === sort ? 'bg-[#fcfae6]' : 'hover:bg-[#fcfae6]'}`}>{s.label}</button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="grid gap-5 grid-cols-1 min-[460px]:grid-cols-2 lg:grid-cols-4">
          {list.map((p, i) => (
            <article key={p.id} className="relative bg-white rounded-3xl p-5 flex flex-col items-center text-center shadow-sm">
              <button aria-label="Dodaj do ulubionych" className="absolute right-4 top-4 text-[#001e60] cursor-pointer"><Heart className="w-6 h-6" /></button>
              <img src={p.img} alt={p.name} className="w-full max-w-[220px] aspect-square object-contain" />
              <h3 className="mt-3 text-[15px] font-black uppercase leading-tight text-[#001e60]" {...(i === 0 ? note('Product names', 'US titles are one long English string. Here the Polish descriptor (“Pluszowa zawieszka” = plush bag charm) leads and the cheese variety stays in English, because it is printed on the plush itself, so the name matches what arrives. Check ‘zawieszka’ vs ‘brelok’ with a native reviewer.') : {})}>{p.name}</h3>
              <p className="mt-2 text-lg font-bold text-[#001e60]" {...(i === 0 ? note('Price format', 'US: $14.00, sales tax added at checkout. Poland: 54,90 zł with decimal comma and the symbol after the amount, and the price already includes 23% VAT plus import costs. Prices are illustrative, not a live FX conversion.') : {})}>{zl(p.price)}</p>
              <p className="text-xs text-[#001e60]/60 mb-4">cena zawiera VAT</p>
              <button onClick={() => add(p.id)} data-add={p.id} className="mt-auto w-full rounded-full bg-[#001e60] hover:bg-[#0a2c7e] text-white font-black uppercase text-sm tracking-wide py-3 cursor-pointer transition-colors">Dodaj do koszyka</button>
            </article>
          ))}
        </div>

        <div className="mt-12 grid sm:grid-cols-3 gap-4 text-[#001e60]">
          {[[Truck, 'Dostawa do Paczkomatów® InPost, punktów Orlen i kurierem DPD'], [ShieldCheck, 'Płatności BLIK, Przelewy24 i kartą'], [RotateCcw, '14 dni na odstąpienie od umowy']].map(([Icon, txt], i) => {
            const I = Icon as typeof Truck;
            return <div key={i} className="flex items-center gap-3 rounded-2xl bg-white/70 px-4 py-3 text-sm font-bold"><I className="w-5 h-5 shrink-0" />{txt as string}</div>;
          })}
        </div>
      </section>
    </>
  );
}
