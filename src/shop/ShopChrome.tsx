import { useState } from 'react';
import { useShop } from './ShopContext';
import { note } from './Notes';

export function ShopLegal() {
  const link = (l: string) => <li key={l}><a href="#/shop" className="hover:underline">{l}</a></li>;
  return (
    <section className="bg-[#fcfae6] border-t border-[#001e60]/10 text-[#001e60]" {...note('Legal footer', 'Added for Poland: seller identity, shop terms (Regulamin), privacy policy, right of withdrawal, complaints (reklamacje) and cookie settings must be easy to find. Seller details are a placeholder to be completed by legal.')}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-sm">
        <div><h5 className="font-black uppercase text-xs tracking-widest mb-2">Sprzedawca</h5><p className="text-[#001e60]/75 leading-relaxed">Tillamook Polska Sp. z o.o. (przykładowe dane), ul. Przykładowa 1, 00-001 Warszawa. NIP: 000-000-00-00.</p></div>
        <div><h5 className="font-black uppercase text-xs tracking-widest mb-2">Sklep</h5><ul className="space-y-1.5 font-bold">{['Gadżety', 'Odzież', 'Prezenty firmowe'].map(link)}</ul></div>
        <div><h5 className="font-black uppercase text-xs tracking-widest mb-2">Pomoc</h5><ul className="space-y-1.5 font-bold">{['Dostawa i płatności', 'Zwroty i reklamacje', 'Odstąpienie od umowy', 'Kontakt'].map(link)}</ul></div>
        <div><h5 className="font-black uppercase text-xs tracking-widest mb-2">Informacje prawne</h5><ul className="space-y-1.5 font-bold">{['Regulamin', 'Polityka prywatności', 'Ustawienia plików cookie'].map(link)}</ul></div>
      </div>
      <p className="max-w-7xl mx-auto px-4 sm:px-8 pb-6 text-xs text-[#001e60]/60">Makieta koncepcyjna wersji dla rynku polskiego. BLIK · Przelewy24 · Visa · Mastercard · InPost · DPD</p>
    </section>
  );
}

export function CookieBanner() {
  const [done, setDone] = useState(() => { try { return sessionStorage.getItem('tl-cookie') === '1'; } catch { return false; } });
  if (done) return null;
  const close = () => { try { sessionStorage.setItem('tl-cookie', '1'); } catch { /* ignore */ } setDone(true); };
  const b = 'rounded-full px-5 py-2.5 text-[13px] font-black cursor-pointer border-2 border-[#001e60]';
  return (
    <div role="dialog" aria-label="Zgoda na pliki cookie" className="fixed left-4 bottom-4 z-[65] w-[min(620px,calc(100vw-2rem))] rounded-2xl bg-white text-[#001e60] shadow-2xl p-5 pr-24 sm:pr-5" {...note('Cookie consent', 'Not on the US page. EU rules require opt-in for non-essential cookies, with a reject option as easy to reach as accept, so both buttons carry equal weight.')}>
      <h4 className="font-black mb-1">Szanujemy Twoją prywatność</h4>
      <p className="text-[13px] leading-relaxed mb-3 text-[#001e60]/80">Używamy plików cookie, aby sklep działał poprawnie, a za Twoją zgodą także do analityki i marketingu. Możesz zaakceptować wszystkie, odrzucić opcjonalne lub zmienić ustawienia.</p>
      <div className="flex flex-wrap gap-2">
        <button onClick={close} className={`${b} bg-[#001e60] text-white`}>Akceptuj wszystkie</button>
        <button onClick={close} className={`${b} bg-[#001e60] text-white`}>Odrzuć opcjonalne</button>
        <button onClick={close} className={`${b} bg-white`}>Ustawienia</button>
      </div>
    </div>
  );
}

export function Toast() {
  const { toast } = useShop();
  if (!toast) return null;
  return (
    <div role="status" className="fixed left-1/2 -translate-x-1/2 top-24 z-[65] rounded-full bg-[#001e60] text-white shadow-2xl px-5 py-3 text-sm font-bold flex items-center gap-4">
      {toast}<a href="#/cart" className="underline text-[#ffb81c]">Zobacz koszyk</a>
    </div>
  );
}
