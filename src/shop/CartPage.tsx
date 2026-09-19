import { Minus, Plus } from 'lucide-react';
import { FREE_FROM, METHODS, PRODUCTS, productById, vatOf, zl } from './data';
import { useShop } from './ShopContext';
import { note } from './Notes';
import { go } from './useRoute';
import { ShopStrip } from './ShopPage';

export default function CartPage() {
  const { cart, setQty, remove, subtotal, add } = useShop();
  const missing = Math.max(0, FREE_FROM - subtotal);
  const pct = Math.min(100, (subtotal / FREE_FROM) * 100);
  const cheapest = Math.min(...METHODS.map((m) => m.price));
  const shipCost = subtotal >= FREE_FROM ? 0 : cheapest;
  const suggestions = PRODUCTS.filter((p) => !cart.some((l) => l.id === p.id)).slice(0, 2);

  if (cart.length === 0) {
    return (
      <div className="max-w-xl mx-auto px-4 py-24 text-center text-[#001e60]">
        <h1 className="text-3xl font-black mb-3">Twój koszyk jest pusty</h1>
        <p className="mb-8 text-[#001e60]/70">Dodaj pluszową zawieszkę, a my zajmiemy się resztą: VAT i opłaty importowe są już w cenie.</p>
        <a href="#/shop" className="inline-block rounded-full bg-[#001e60] text-white font-black uppercase text-sm px-8 py-3.5">Przejdź do sklepu</a>
      </div>
    );
  }

  return (
    <>
      <ShopStrip />
      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-10 text-[#001e60]">
        <div className="text-center mb-8" {...note('Free-shipping progress', `US: a banner that only appears once the $100 threshold is met. Poland: a progress bar shows how far the basket is from the ${FREE_FROM} zł threshold, which nudges shoppers to add a second charm.`)}>
          <p className="font-black text-lg mb-3">{missing > 0 ? <>Do darmowej dostawy brakuje {zl(missing)}</> : 'Masz darmową dostawę!'}</p>
          <div className="h-2.5 max-w-md mx-auto rounded-full bg-[#001e60]/10 overflow-hidden" role="progressbar" aria-valuenow={Math.round(pct)} aria-valuemin={0} aria-valuemax={100}>
            <div className="h-full bg-[#001e60] rounded-full transition-all" style={{ width: pct + '%' }} />
          </div>
        </div>

        <p className="text-center text-xs text-[#001e60]/70 mb-8 flex flex-wrap justify-center gap-x-4 gap-y-1" {...note('Landed-price promise', 'US cart says “Taxes and shipping calculated at checkout”. In the EU, consumer prices must include VAT, and surprise import costs are the top reason cross-border baskets are abandoned, so this strip states the price is final, in PLN, with payment methods people recognise.')}>
          <span>Ceny w PLN</span><span>VAT i cło wliczone w cenę</span><span>BLIK · Przelewy24 · karty</span>
        </p>

        <div {...note('Quantity and price columns', 'Column headers and Remove translated (Produkt, Cena, Ilość, Razem, Usuń). Amounts use Polish formatting: space before zł, comma as decimal separator, space as thousands separator (1 097,10 zł).')}>
          <div className="hidden sm:grid grid-cols-[1fr_100px_130px_100px] gap-4 border-b border-[#001e60] pb-3 text-sm font-black">
            <span>Produkt</span><span className="text-right">Cena</span><span className="text-center">Ilość</span><span className="text-right">Razem</span>
          </div>
          {cart.map((l) => {
            const p = productById(l.id);
            return (
              <div key={l.id} className="grid grid-cols-[72px_1fr] sm:grid-cols-[1fr_100px_130px_100px] gap-x-4 gap-y-2 items-center py-5 border-b border-[#001e60]/15">
                <div className="flex items-center gap-4 sm:col-auto col-span-2">
                  <img src={p.img} alt="" className="w-16 h-16 rounded-xl bg-white object-contain" />
                  <div>
                    <p className="font-black leading-snug">{p.name}</p>
                    <p className="text-xs text-[#001e60]/60">cena zawiera VAT</p>
                  </div>
                </div>
                <span className="hidden sm:block text-right font-bold">{zl(p.price)}</span>
                <div className="flex flex-col items-start sm:items-center gap-1 col-span-2 sm:col-auto">
                  <div className="inline-flex items-center rounded-full border-2 border-[#001e60]">
                    <button aria-label="Zmniejsz ilość" onClick={() => setQty(l.id, l.qty - 1)} className="p-2 cursor-pointer"><Minus className="w-4 h-4" /></button>
                    <span className="w-8 text-center font-black" aria-live="polite">{l.qty}</span>
                    <button aria-label="Zwiększ ilość" onClick={() => setQty(l.id, l.qty + 1)} className="p-2 cursor-pointer"><Plus className="w-4 h-4" /></button>
                  </div>
                  <button onClick={() => remove(l.id)} className="text-xs underline cursor-pointer">Usuń</button>
                </div>
                <span className="text-right font-black col-span-2 sm:col-auto">{zl(p.price * l.qty)}</span>
              </div>
            );
          })}
        </div>

        {suggestions.length > 0 && missing > 0 && (
          <div className="mt-6 rounded-2xl bg-white p-4">
            <p className="text-sm font-black mb-3">Dodaj drugą zawieszkę, aby zbliżyć się do darmowej dostawy</p>
            <div className="flex flex-wrap gap-3">
              {suggestions.map((p) => (
                <button key={p.id} onClick={() => add(p.id)} className="flex items-center gap-3 rounded-xl border border-[#001e60]/20 hover:border-[#001e60] pr-4 text-left cursor-pointer">
                  <img src={p.img} alt="" className="w-14 h-14 object-contain" />
                  <span className="text-sm font-bold">{p.short}<br /><span className="font-normal">{zl(p.price)} · dodaj</span></span>
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="mt-8 grid md:grid-cols-2 gap-8 items-start">
          <div>
            <label htmlFor="gift-note" className="block text-sm font-black mb-2">Dodaj wiadomość do prezentu</label>
            <textarea id="gift-note" rows={4} className="w-full rounded-xl border border-[#001e60]/30 bg-white p-3 text-sm" />
          </div>
          <div>
            <div className="flex justify-between text-xl font-black border-y border-[#001e60] py-3"><span>Suma częściowa</span><span>{zl(subtotal)}</span></div>
            <div className="mt-3 space-y-1 text-sm text-right text-[#001e60]/75" {...note('VAT and delivery shown up front', 'US: tax and shipping are a mystery until checkout. Poland: the 23% VAT contained in the price is itemised, import duty is stated as included, and the cheapest delivery option is previewed so the total does not jump later. EU import rules currently add a €3 flat duty per item category on parcels of €150 or less; a customs broker must confirm how it is collected.')}>
              <p className="flex justify-between"><span>W tym VAT (23%)</span><span>{zl(vatOf(subtotal))}</span></p>
              <p className="flex justify-between"><span>Cło i opłaty importowe</span><span>wliczone</span></p>
              <p className="flex justify-between"><span>Dostawa (Paczkomat® InPost)</span><span>{shipCost === 0 ? 'darmowa' : 'od ' + zl(shipCost)}</span></p>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2" {...note('Express payment buttons', 'Amazon Pay swapped for BLIK; Shop Pay and Google Pay stay. Shop Pay and Google Pay artwork comes from the supplied screenshots; BLIK is a plain text placeholder until official brand assets are used.')}>
              <button onClick={() => go('checkout')} aria-label="Shop Pay" className="h-11 rounded-lg bg-cover bg-center cursor-pointer" style={{ backgroundImage: 'url(/shop/shoppay.png)' }} />
              <button onClick={() => go('checkout')} className="h-11 rounded-lg bg-[#111] text-white font-black text-sm cursor-pointer">BLIK</button>
              <button onClick={() => go('checkout')} aria-label="Google Pay" className="h-11 rounded-lg bg-black bg-cover bg-center cursor-pointer" style={{ backgroundImage: 'url(/shop/gpay.png)' }} />
            </div>
            <a
              href="#/checkout"
              className="mt-3 block text-center rounded-full bg-[#001e60] hover:bg-[#0a2c7e] text-white font-black uppercase tracking-wide py-4 transition-colors"
              {...note('Checkout button', 'Same button, translated. Under it, the delivery estimate replaces the US “no PO boxes” warning, which means little in Poland; parcel lockers are the local equivalent and are offered at checkout.')}
            >
              Przejdź do kasy
            </a>
            <p className="mt-3 text-center text-xs text-[#001e60]/70">Przewidywana dostawa: 5–8 dni roboczych.<br />Odbiór w Paczkomacie® InPost lub kurier do domu.</p>
          </div>
        </div>
        <p className="mt-8 text-center"><a href="#/shop" className="text-sm font-black underline">Kontynuuj zakupy</a></p>
      </div>
    </>
  );
}
