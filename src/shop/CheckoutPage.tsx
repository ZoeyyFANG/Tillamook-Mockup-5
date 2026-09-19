import { ChangeEvent, ReactNode, useEffect, useRef, useState } from 'react';
import { ChevronDown, Lock, MapPin, ShoppingBag, X } from 'lucide-react';
import TillamookLogo from '../components/TillamookLogo';
import { FREE_FROM, METHODS, PAY, POINTS, productById, vatOf, zl } from './data';
import { Order, useShop, payName } from './ShopContext';
import { note } from './Notes';
import { go } from './useRoute';

/* ---------- input masks ---------- */
const digits = (s: string) => s.replace(/\D/g, '');
const mZip = (s: string) => { const d = digits(s).slice(0, 5); return d.length > 2 ? d.slice(0, 2) + '-' + d.slice(2) : d; };
const mPhone = (s: string) => digits(s).slice(0, 9).replace(/(\d{3})(?=\d)/g, '$1 ');
const mBlik = (s: string) => { const d = digits(s).slice(0, 6); return d.length > 3 ? d.slice(0, 3) + ' ' + d.slice(3) : d; };
const mNip = (s: string) => { const d = digits(s).slice(0, 10); return [d.slice(0, 3), d.slice(3, 6), d.slice(6, 8), d.slice(8, 10)].filter(Boolean).join('-'); };
const mCard = (s: string) => digits(s).slice(0, 16).replace(/(\d{4})(?=\d)/g, '$1 ');
const mExp = (s: string) => { const d = digits(s).slice(0, 4); return d.length > 2 ? d.slice(0, 2) + '/' + d.slice(2) : d; };

type Vals = Record<string, string>;

const FIELD = 'peer w-full h-12 rounded-lg border bg-white px-3 pt-5 pb-0 text-[14.5px] text-[#1a1a1a] focus:outline-2 focus:outline-[#141e5c] focus:border-[#141e5c]';

function Field({ id, label, vals, set, err, mask, className = '', ...rest }: {
  id: string; label: string; vals: Vals; set: (id: string, v: string) => void; err?: string; mask?: (s: string) => string; className?: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'id'>) {
  return (
    <div className={`relative ${className}`}>
      <div className="relative">
        <input
          id={id} placeholder=" " value={vals[id] || ''} aria-invalid={!!err}
          onChange={(e: ChangeEvent<HTMLInputElement>) => set(id, mask ? mask(e.target.value) : e.target.value)}
          className={`${FIELD} ${err ? 'border-red-600 outline outline-1 outline-red-600' : 'border-[#d9d9d9]'}`}
          {...rest}
        />
        <label htmlFor={id} className="absolute left-3 top-1.5 text-[11px] text-[#707070] pointer-events-none transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-[14.5px] peer-focus:top-1.5 peer-focus:text-[11px]">{label}</label>
      </div>
      {err && <p className="text-[12.5px] text-red-600 mt-1">{err}</p>}
    </div>
  );
}

function Radio({ checked, onChange, title, sub, right, name, value, children }: {
  checked: boolean; onChange: () => void; title: string; sub?: string; right?: ReactNode; name: string; value: string; children?: ReactNode;
}) {
  return (
    <div className={`${checked ? 'bg-[#f0f3ff] outline outline-2 outline-[#141e5c] rounded-lg relative z-[1]' : ''}`}>
      <label className="flex items-start gap-3 p-4 cursor-pointer">
        <input type="radio" name={name} value={value} checked={checked} onChange={onChange} className="mt-1 accent-[#141e5c]" />
        <span className="flex-1 min-w-0">
          <span className="flex items-baseline justify-between gap-3"><b className="text-[14.5px] font-semibold">{title}</b>{right}</span>
          {sub && <span className="block text-[13px] text-[#707070] mt-0.5">{sub}</span>}
        </span>
      </label>
      {checked && children}
    </div>
  );
}

const Badge = ({ t }: { t: string }) => <span className="text-[10.5px] font-bold border border-[#d9d9d9] bg-white rounded px-1.5 py-0.5 text-[#444] whitespace-nowrap">{t}</span>;

/* ---------- modals ---------- */
function PickupModal({ onClose }: { onClose: () => void }) {
  const { ship, setPoint } = useShop();
  const list = POINTS[ship === 'orlen' ? 'orlen' : 'locker'];
  return (
    <div className="fixed inset-0 z-[80] bg-black/50 flex items-center justify-center p-4" onClick={onClose}>
      <div role="dialog" aria-label="Wybierz punkt odbioru" className="bg-white rounded-2xl w-full max-w-[620px] max-h-[90vh] overflow-auto p-5" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-xl font-bold">{ship === 'orlen' ? 'Wybierz punkt Orlen Paczka' : 'Wybierz Paczkomat® InPost'}</h3>
            <small className="text-[#707070]">Przykładowe punkty (makieta). W wersji produkcyjnej działa mapa i wyszukiwarka.</small>
          </div>
          <button onClick={onClose} aria-label="Zamknij" className="p-1 cursor-pointer"><X className="w-6 h-6" /></button>
        </div>
        <div className="h-36 rounded-xl bg-[#dfe9f2] relative overflow-hidden mb-3" aria-hidden="true">
          <svg viewBox="0 0 600 190" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
            <path d="M0 120L600 60M0 40L600 150M180 0L260 190M420 0L380 190" stroke="#fff" strokeWidth="9" fill="none" />
            <path d="M0 84L600 100" stroke="#f4d58a" strokeWidth="6" fill="none" />
            {list.map((_, i) => (<g key={i} transform={`translate(${[130, 290, 400, 490][i % 4]},${[110, 55, 120, 70][i % 4]})`}><path d="M0 0c-8-10-12-16-12-22a12 12 0 0124 0c0 6-4 12-12 22z" fill="#e8590c" stroke="#fff" strokeWidth="2" /><circle cx="0" cy="-22" r="4.5" fill="#fff" /></g>))}
          </svg>
        </div>
        <ul className="space-y-2">
          {list.map((p) => (
            <li key={p.code}>
              <button onClick={() => { setPoint(p); onClose(); }} className="w-full flex justify-between gap-3 items-center text-left rounded-xl border border-[#d9d9d9] hover:border-[#141e5c] p-3 cursor-pointer">
                <span><b className="block text-sm">{p.addr}</b><small className="text-[#707070]">{p.note}</small></span>
                <span className="text-xs font-bold bg-[#f0f3ff] rounded px-2 py-1">{p.code}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function WaitModal({ payId, onCancel }: { payId: string; onCancel: () => void }) {
  const copy: Record<string, [string, string]> = {
    blik: ['Potwierdź płatność w aplikacji banku', 'Wysłaliśmy powiadomienie BLIK do Twojej aplikacji bankowej. Zatwierdź płatność w ciągu 2 minut.'],
    p24: ['Przekierowanie do Przelewy24', 'Za chwilę wybierzesz swój bank i potwierdzisz przelew.'],
    card: ['Weryfikacja 3-D Secure', 'Potwierdź płatność w aplikacji banku lub kodem SMS.'],
    paypo: ['Przekierowanie do PayPo', 'Za chwilę potwierdzisz zakup w PayPo.'],
  };
  const [h, p] = copy[payId];
  return (
    <div className="fixed inset-0 z-[80] bg-black/50 flex items-center justify-center p-4">
      <div role="dialog" aria-label="Płatność" className="bg-white rounded-2xl w-full max-w-[420px] p-6 text-center">
        <div className="w-10 h-10 mx-auto mb-4 rounded-full border-4 border-[#e3e3e3] border-t-[#141e5c] animate-spin" aria-hidden="true" />
        <h3 className="text-lg font-bold">{h}</h3>
        <p className="text-[#444] leading-relaxed mt-2 mb-3">{p}</p>
        <p className="text-xs text-[#707070] mb-4">Makieta: płatność zostanie potwierdzona automatycznie za chwilę.</p>
        <button onClick={onCancel} className="rounded-lg border-2 border-[#141e5c] text-[#141e5c] font-semibold px-4 py-2 cursor-pointer">Anuluj</button>
      </div>
    </div>
  );
}

/* ---------- order summary (also used on the confirmation page) ---------- */
export function Summary({ items, sub, shipCost, total, editable = false }: { items: { id: string; qty: number }[]; sub: number; shipCost: number; total: number; editable?: boolean }) {
  const [msg, setMsg] = useState('');
  const [code, setCode] = useState('');
  return (
    <div className="max-w-[420px]">
      {items.map((l) => {
        const p = productById(l.id);
        return (
          <div key={l.id} className="flex items-center gap-3.5 mb-4">
            <div className="relative shrink-0"><img src={p.img} alt="" className="w-16 h-16 rounded-lg border border-[#e3e3e3] bg-white object-contain" /><i className="absolute -top-2 -right-2 not-italic w-5 h-5 rounded-full bg-[#1a1a1a]/85 text-white text-xs flex items-center justify-center">{l.qty}</i></div>
            <span className="flex-1 text-sm">{p.name}</span>
            <span className="text-sm">{zl(p.price * l.qty)}</span>
          </div>
        );
      })}
      {editable && (
        <>
          <div className="flex gap-2 my-5">
            <input aria-label="Kod rabatowy lub karta podarunkowa" value={code} onChange={(e) => setCode(e.target.value)} placeholder="Kod rabatowy lub karta podarunkowa" className="flex-1 min-w-0 h-12 rounded-lg border border-[#d9d9d9] bg-white px-3 text-sm" />
            <button type="button" onClick={() => setMsg(code.trim() ? 'Kod rabatowy jest nieprawidłowy lub wygasł.' : '')} className="h-12 px-4 rounded-lg bg-[#e6e6e6] text-[#707070] font-semibold text-sm cursor-pointer">Zastosuj</button>
          </div>
          {msg && <p className="text-[12.5px] text-red-600 -mt-3 mb-3">{msg}</p>}
        </>
      )}
      <div className="flex justify-between text-sm my-2"><span>Suma częściowa</span><span>{zl(sub)}</span></div>
      <div className="flex justify-between text-sm my-2"><span>Dostawa</span><span>{shipCost === 0 ? 'Darmowa' : zl(shipCost)}</span></div>
      <div {...note('Order summary', 'US: “USD $145.00” with tax added later. Poland: “PLN” total with the VAT contained in it and a statement that import costs are included, so the number on the pay button is the final amount.')}>
        <div className="flex justify-between items-baseline mt-4"><b className="text-lg">Razem</b><span><span className="text-xs text-[#707070] mr-2">PLN</span><em className="not-italic text-2xl font-bold">{zl(total)}</em></span></div>
        <p className="text-right text-xs text-[#707070] mt-1">W tym VAT (23%): {zl(vatOf(total))}<br />Cło i opłaty importowe wliczone w cenę</p>
      </div>
      <div className="mt-5 rounded-lg border border-[#e3e3e3] bg-white p-3 text-[13px] text-[#444] leading-relaxed"><b>Przewidywana dostawa: 5–8 dni roboczych</b><br />Numer przesyłki wyślemy e-mailem i SMS-em.</div>
    </div>
  );
}

export function CheckoutHeader({ back = true }: { back?: boolean }) {
  return (
    <div className="h-[72px] border-b border-[#dedede] bg-white flex items-center justify-between px-[clamp(16px,11vw,130px)]">
      <a href="#/shop" aria-label="Tillamook Shop"><TillamookLogo className="h-10 w-auto" variant="blue" /></a>
      <div className="flex items-center gap-4">
        <button className="text-sm border border-[#d9d9d9] rounded px-2.5 py-1 flex items-center gap-1" aria-label="Język: Polski">Polski <ChevronDown className="w-3 h-3" /></button>
        {back && <a href="#/cart" aria-label="Wróć do koszyka" className="text-[#141e5c]"><ShoppingBag className="w-6 h-6" /></a>}
      </div>
    </div>
  );
}

/* ---------- page ---------- */
export default function CheckoutPage() {
  const s = useShop();
  const [v, setV] = useState<Vals>({});
  const [errs, setErrs] = useState<Record<string, string>>({});
  const [news, setNews] = useState(false);
  const [invoice, setInvoice] = useState(false);
  const [billSame, setBillSame] = useState(true);
  const [terms, setTerms] = useState(false);
  const [picker, setPicker] = useState(false);
  const [waiting, setWaiting] = useState(false);
  const timer = useRef<number | undefined>(undefined);
  const set = (id: string, val: string) => { setV((o) => ({ ...o, [id]: val })); if (errs[id]) setErrs((e) => { const n = { ...e }; delete n[id]; return n; }); };
  const method = METHODS.find((m) => m.id === s.ship)!;
  const home = method.kind === 'home';

  useEffect(() => { if (s.cart.length === 0) go('cart'); }, [s.cart.length]);
  useEffect(() => () => window.clearTimeout(timer.current), []);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!/^\S+@\S+\.\S+$/.test((v.email || '').trim())) e.email = 'Wpisz poprawny adres e-mail';
    if (home) {
      if (!(v.street || '').trim()) e.street = 'Podaj ulicę i numer domu';
      if (!/^\d{2}-\d{3}$/.test(v.zip || '')) e.zip = 'Kod pocztowy w formacie 00-000';
      if (!(v.city || '').trim()) e.city = 'Podaj miejscowość';
    } else if (!s.point) e.point = 'Wybierz punkt odbioru';
    if (!(v.fname || '').trim()) e.fname = 'Wpisz imię';
    if (!(v.lname || '').trim()) e.lname = 'Wpisz nazwisko';
    if (digits(v.phone || '').length !== 9) e.phone = 'Podaj 9-cyfrowy numer telefonu komórkowego';
    if (invoice) {
      if (!(v.company || '').trim()) e.company = 'Podaj nazwę firmy';
      if (digits(v.nip || '').length !== 10) e.nip = 'NIP ma 10 cyfr (000-000-00-00)';
    }
    if (s.pay === 'blik' && digits(v.blik || '').length !== 6) e.blik = 'Kod BLIK ma 6 cyfr';
    if (s.pay === 'card') {
      if (digits(v.cnum || '').length < 15) e.cnum = 'Podaj numer karty';
      if (!/^\d{2}\/\d{2}$/.test(v.cexp || '')) e.cexp = 'Podaj datę ważności (MM/RR)';
      if (digits(v.ccvc || '').length < 3) e.ccvc = 'Podaj kod CVV';
      if (!(v.cname || '').trim()) e.cname = 'Podaj imię i nazwisko z karty';
    }
    if (!billSame) {
      if (!(v.bstreet || '').trim()) e.bstreet = 'Podaj ulicę i numer domu';
      if (!/^\d{2}-\d{3}$/.test(v.bzip || '')) e.bzip = 'Kod pocztowy w formacie 00-000';
      if (!(v.bcity || '').trim()) e.bcity = 'Podaj miejscowość';
    }
    if (!terms) e.terms = 'Zaakceptuj Regulamin, aby złożyć zamówienie';
    return e;
  };

  const submit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrs(e);
    const first = Object.keys(e)[0];
    if (first) {
      const target = document.getElementById(first) || document.getElementById('err-' + first);
      target?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    setWaiting(true);
    timer.current = window.setTimeout(() => {
      const o: Order = {
        num: 'TL-' + (48000 + Math.floor(Math.random() * 999)), email: (v.email || '').trim(),
        name: `${v.fname} ${v.lname}`.trim(), phone: '+48 ' + (v.phone || ''),
        ship: method.name, home,
        addr: home ? `${v.street}${v.apt ? '/' + v.apt : ''}, ${v.zip} ${v.city}` : s.point ? `${s.point.addr} (${s.point.code})` : '',
        pay: payName(s.pay), items: s.cart.map((l) => ({ ...l })), sub: s.subtotal, shipCost: s.shipCost, total: s.total,
      };
      s.setOrder(o); setWaiting(false); go('confirm');
    }, 2600);
  };

  const h2 = 'text-[19px] font-bold mt-8 mb-3';

  return (
    <div className="bg-white text-[#1a1a1a] min-h-screen">
      <CheckoutHeader />
      <div className="grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,.95fr)]">
        <form onSubmit={submit} noValidate className="px-[clamp(16px,11vw,130px)] py-8 lg:pr-10">
          <div className="max-w-[560px] lg:ml-auto">
            <div {...note('Express checkout', 'US: Shop Pay, Amazon Pay, Google Pay. Poland: Amazon Pay is not a mainstream method here, so BLIK takes its place next to Shop Pay and Google Pay. BLIK was used by 72% of Polish online shoppers in a 2025 survey.')}>
              <p className="text-center text-[13px] text-[#707070] mb-2">Szybka płatność</p>
              <div className="grid grid-cols-3 gap-2.5">
                <button type="button" aria-label="Shop Pay" className="h-11 rounded-lg bg-cover bg-center cursor-pointer" style={{ backgroundImage: 'url(/shop/shoppay.png)' }} />
                <button type="button" className="h-11 rounded-lg bg-[#111] text-white font-black text-sm cursor-pointer">BLIK</button>
                <button type="button" aria-label="Google Pay" className="h-11 rounded-lg bg-black bg-cover bg-center cursor-pointer" style={{ backgroundImage: 'url(/shop/gpay.png)' }} />
              </div>
              <div className="flex items-center gap-3 my-5 text-xs text-[#707070]"><span className="flex-1 h-px bg-[#dedede]" />LUB<span className="flex-1 h-px bg-[#dedede]" /></div>
            </div>

            <div {...note('Contact', 'Email plus a plain reason: in Poland the confirmation, tracking number and InPost pickup code all arrive by email or SMS, so both must be reachable. The newsletter box stays unticked by default (GDPR opt-in).')}>
              <div className="flex items-baseline justify-between"><h2 className="text-[19px] font-bold mb-3">Kontakt</h2><a href="#/checkout" onClick={(e) => e.preventDefault()} className="text-sm underline text-[#141e5c]">Zaloguj się</a></div>
              <Field id="email" label="E-mail" type="email" vals={v} set={set} err={errs.email} autoComplete="email" />
              <label className="flex items-center gap-2.5 mt-3 text-sm cursor-pointer"><input type="checkbox" checked={news} onChange={(e) => setNews(e.target.checked)} className="accent-[#141e5c]" />Wyślij mi e-maile z nowościami i ofertami</label>
            </div>

            <h2 className={h2}>Dostawa</h2>
            <div className="rounded-lg border border-[#d9d9d9] divide-y divide-[#d9d9d9] overflow-hidden" {...note('Delivery method comes first', 'US flow asks for an address, then shows methods. In Poland most shoppers pick a parcel locker (83% in a 2025 survey, 87% of them InPost), so the method is chosen first. Locker and pickup-point choices replace the street address; courier needs one. Prices are placeholders; free above 380 zł.')}>
              {METHODS.map((m) => (
                <Radio key={m.id} name="ship" value={m.id} checked={s.ship === m.id} onChange={() => s.setShip(m.id)} title={m.name} sub={m.sub}
                  right={<span className="text-sm font-semibold">{s.subtotal >= FREE_FROM ? 'Darmowa' : zl(m.price)}</span>} />
              ))}
            </div>

            {!home && (
              <div id="point" className={`mt-3 rounded-lg border p-4 flex items-center justify-between gap-3 ${errs.point ? 'border-red-600' : 'border-[#d9d9d9]'}`}>
                <div className="flex items-start gap-3 min-w-0">
                  <MapPin className="w-5 h-5 mt-0.5 shrink-0 text-[#e8590c]" />
                  <div className="min-w-0">
                    {s.point ? (<><b className="block text-sm">{s.point.addr}</b><span className="text-[13px] text-[#707070]">{s.point.code} · {s.point.note}</span></>) : (<><b className="block text-sm">Wybierz punkt odbioru</b><span className="text-[13px] text-[#707070]">Znajdź najbliższy {s.ship === 'orlen' ? 'punkt Orlen' : 'Paczkomat®'} na mapie.</span></>)}
                  </div>
                </div>
                <button type="button" onClick={() => setPicker(true)} className="shrink-0 rounded-lg bg-[#141e5c] text-white font-semibold text-sm px-4 py-2.5 cursor-pointer">{s.point ? 'Zmień' : 'Wybierz na mapie'}</button>
              </div>
            )}
            {errs.point && <p id="err-point" className="text-[12.5px] text-red-600 mt-1">{errs.point}</p>}

            <div className="mt-4 space-y-3" {...note('Polish address format', 'US: street, apartment, city, STATE, ZIP. Poland: no state field; street and house number in one line (ul. Marszałkowska 12); a separate flat number (nr lokalu); postal code as NN-NNN placed before the city. The postal code auto-formats as you type.')}>
              <div className="relative">
                <select id="country" aria-label="Kraj/region" defaultValue="PL" className="w-full h-12 rounded-lg border border-[#d9d9d9] bg-white px-3 pt-4 text-[14.5px] appearance-none">
                  <option value="PL">Polska</option>
                </select>
                <span className="absolute left-3 top-1.5 text-[11px] text-[#707070]">Kraj/region</span>
                <ChevronDown className="absolute right-3 top-4 w-4 h-4 pointer-events-none" />
              </div>
              <div className="grid sm:grid-cols-2 gap-3 items-start">
                <Field id="fname" label="Imię" vals={v} set={set} err={errs.fname} autoComplete="given-name" />
                <Field id="lname" label="Nazwisko" vals={v} set={set} err={errs.lname} autoComplete="family-name" />
              </div>
              {home && (
                <>
                  <Field id="street" label="Ulica i numer domu" vals={v} set={set} err={errs.street} autoComplete="address-line1" />
                  <Field id="apt" label="Nr lokalu (opcjonalnie)" vals={v} set={set} autoComplete="address-line2" />
                  <div className="grid grid-cols-[130px_1fr] gap-3 items-start">
                    <Field id="zip" label="Kod pocztowy (00-000)" vals={v} set={set} err={errs.zip} mask={mZip} inputMode="numeric" maxLength={6} autoComplete="postal-code" />
                    <Field id="city" label="Miasto" vals={v} set={set} err={errs.city} autoComplete="address-level2" />
                  </div>
                </>
              )}
              <div {...note('Phone number', 'US: optional phone. Poland: a mobile number is needed because couriers call and InPost sends the pickup code by SMS. +48 prefix, nine digits grouped 3-3-3 as Poles write them, and the reason is stated so shoppers do not skip it.')}>
                <div className="grid grid-cols-[96px_1fr] gap-2.5 items-start">
                  <div className="h-12 rounded-lg border border-[#d9d9d9] bg-white flex items-center justify-between px-3 text-[14.5px]">PL +48<ChevronDown className="w-3.5 h-3.5" /></div>
                  <Field id="phone" label="Telefon komórkowy (600 123 456)" type="tel" vals={v} set={set} err={errs.phone} mask={mPhone} inputMode="numeric" maxLength={11} autoComplete="tel-national" />
                </div>
                <p className="text-[13px] text-[#707070] mt-2">Na ten numer wyślemy kod odbioru paczki i powiadomienie od kuriera.</p>
              </div>
              <div {...note('Company invoice (NIP)', 'Not in the US flow. Polish buyers, especially companies and freelancers, often need a “faktura VAT” with a tax ID (NIP). Ticking the box reveals company name and a NIP field (format 000-000-00-00). Recommendation from local practice; confirm with finance.')}>
                <label className="flex items-center gap-2.5 text-sm cursor-pointer"><input type="checkbox" checked={invoice} onChange={(e) => setInvoice(e.target.checked)} className="accent-[#141e5c]" />Chcę otrzymać fakturę VAT na firmę</label>
                {invoice && (
                  <div className="grid sm:grid-cols-2 gap-3 mt-3 items-start">
                    <Field id="company" label="Nazwa firmy" vals={v} set={set} err={errs.company} autoComplete="organization" />
                    <Field id="nip" label="NIP (000-000-00-00)" vals={v} set={set} err={errs.nip} mask={mNip} inputMode="numeric" maxLength={13} />
                  </div>
                )}
              </div>
            </div>

            <h2 className={h2.replace('mt-8', 'mt-9') + ' mb-1'}>Płatność</h2>
            <p className="text-[13px] text-[#707070] mb-3">Wszystkie transakcje są bezpieczne i szyfrowane.</p>
            <div className="rounded-lg border border-[#d9d9d9] divide-y divide-[#d9d9d9] overflow-hidden" {...note('Local payment methods', 'US list: card first. Poland: BLIK first (six-digit code from the banking app, valid two minutes), then Przelewy24 bank transfer, then cards, plus pay-later. Availability of each method depends on your payment gateway.')}>
              {PAY.map((p) => (
                <Radio key={p.id} name="pay" value={p.id} checked={s.pay === p.id} onChange={() => s.setPay(p.id)} title={p.name} sub={p.sub || undefined}
                  right={<span className="flex flex-wrap gap-1 justify-end">{p.badges.map((b) => <Badge key={b} t={b} />)}</span>}>
                  <div className="px-4 pb-4 pl-11 space-y-3">
                    {p.id === 'blik' && (<><Field id="blik" label="Kod BLIK (6 cyfr)" vals={v} set={set} err={errs.blik} mask={mBlik} inputMode="numeric" maxLength={7} autoComplete="one-time-code" /><p className="text-[13px] text-[#444]">Wygeneruj kod w aplikacji swojego banku. Kod jest ważny 2 minuty, a płatność potwierdzisz w aplikacji.</p></>)}
                    {p.id === 'p24' && <p className="text-[13px] text-[#444]">Po kliknięciu „Zamawiam i płacę” wybierzesz swój bank i potwierdzisz przelew.</p>}
                    {p.id === 'card' && (
                      <>
                        <Field id="cnum" label="Numer karty" vals={v} set={set} err={errs.cnum} mask={mCard} inputMode="numeric" maxLength={19} autoComplete="cc-number" />
                        <div className="grid grid-cols-2 gap-3 items-start">
                          <Field id="cexp" label="Ważna do (MM/RR)" vals={v} set={set} err={errs.cexp} mask={mExp} inputMode="numeric" maxLength={5} autoComplete="cc-exp" />
                          <Field id="ccvc" label="Kod CVV" vals={v} set={set} err={errs.ccvc} mask={(x) => digits(x).slice(0, 4)} inputMode="numeric" maxLength={4} autoComplete="cc-csc" />
                        </div>
                        <Field id="cname" label="Imię i nazwisko na karcie" vals={v} set={set} err={errs.cname} autoComplete="cc-name" />
                      </>
                    )}
                    {p.id === 'paypo' && <p className="text-[13px] text-[#444]">Kupujesz teraz, płacisz za 30 dni bez kosztów. Zostaniesz przekierowany do PayPo.</p>}
                  </div>
                </Radio>
              ))}
            </div>

            <div className="mt-4" {...note('Billing address', 'US flow opens a second full address form under the card fields. Here “same as delivery” is ticked by default, which removes about five fields.')}>
              <label className="flex items-center gap-2.5 text-sm cursor-pointer"><input type="checkbox" checked={billSame} onChange={(e) => setBillSame(e.target.checked)} className="accent-[#141e5c]" />Użyj adresu dostawy jako adresu rozliczeniowego</label>
              {!billSame && (
                <div className="mt-3 space-y-3">
                  <Field id="bstreet" label="Ulica i numer domu" vals={v} set={set} err={errs.bstreet} />
                  <div className="grid grid-cols-[130px_1fr] gap-3 items-start">
                    <Field id="bzip" label="Kod pocztowy (00-000)" vals={v} set={set} err={errs.bzip} mask={mZip} inputMode="numeric" maxLength={6} />
                    <Field id="bcity" label="Miasto" vals={v} set={set} err={errs.bcity} />
                  </div>
                </div>
              )}
            </div>

            <div className="mt-5" id="terms" {...note('Terms and withdrawal right', 'Polish consumer law expects the shop terms (Regulamin) and privacy policy to be accepted and easy to find, and shoppers get a 14-day right of withdrawal for non-perishable goods. Perishable food is generally exempt, so cheese would need its own return copy. Have legal confirm.')}>
              <label className="flex items-start gap-2.5 text-sm cursor-pointer">
                <input type="checkbox" checked={terms} onChange={(e) => { setTerms(e.target.checked); if (e.target.checked) setErrs((o) => { const n = { ...o }; delete n.terms; return n; }); }} className="mt-1 accent-[#141e5c]" />
                <span>Akceptuję <a href="#/checkout" onClick={(e) => e.preventDefault()} className="underline">Regulamin sklepu</a> i <a href="#/checkout" onClick={(e) => e.preventDefault()} className="underline">Politykę prywatności</a>. Znam <a href="#/checkout" onClick={(e) => e.preventDefault()} className="underline">zasady odstąpienia od umowy</a> (14 dni).</span>
              </label>
              {errs.terms && <p id="err-terms" className="text-[12.5px] text-red-600 mt-1">{errs.terms}</p>}
            </div>

            <button type="submit" id="payBtn" className="mt-5 w-full h-14 rounded-lg bg-[#ffb81c] hover:bg-[#ffc94a] text-[#001e60] font-bold text-base flex items-center justify-center gap-2 cursor-pointer transition-colors" {...note('Pay button wording', 'Polish law requires the order button to state the payment obligation: “zamówienie z obowiązkiem zapłaty” or an unambiguous equivalent. “Zamawiam i płacę” is on the accepted list; “Pay now” would risk the contract not being concluded.')}>
              <Lock className="w-4 h-4" />Zamawiam i płacę · {zl(s.total)}
            </button>
            <p className="text-xs text-[#707070] mt-3 leading-relaxed">Klikając „Zamawiam i płacę”, składasz zamówienie z obowiązkiem zapłaty. Cena zawiera VAT oraz cło i opłaty importowe.</p>
            <div className="mt-8 pt-5 border-t border-[#dedede] flex flex-wrap gap-x-5 gap-y-2 text-[13px] text-[#141e5c]">
              {['Zasady zwrotów', 'Wysyłka', 'Polityka prywatności', 'Regulamin', 'Reklamacje', 'Kontakt'].map((l) => <a key={l} href="#/checkout" onClick={(e) => e.preventDefault()} className="underline">{l}</a>)}
            </div>
          </div>
        </form>
        <aside className="bg-[#fafafa] border-t lg:border-t-0 lg:border-l border-[#dedede] px-[clamp(16px,10vw,130px)] py-9 lg:pl-10" aria-label="Podsumowanie zamówienia">
          <Summary items={s.cart} sub={s.subtotal} shipCost={s.shipCost} total={s.total} editable />
        </aside>
      </div>
      {picker && <PickupModal onClose={() => setPicker(false)} />}
      {waiting && <WaitModal payId={s.pay} onCancel={() => { window.clearTimeout(timer.current); setWaiting(false); }} />}
    </div>
  );
}
