/** Polish-market shop data. Prices, shipping costs and pickup points are illustrative placeholders. */

export const VAT_RATE = 23;
export const FREE_FROM = 380; // zł, roughly US$100

export interface ShopProduct {
  id: string;
  name: string;
  short: string;
  price: number; // gross, incl. 23% VAT, zł
  img: string;
}

export const PRODUCTS: ShopProduct[] = [
  { id: 'p1', name: 'Pluszowa zawieszka Tillamook Whole Milk Mozzarella', short: 'Whole Milk Mozzarella', price: 54.9, img: '/shop/plush1.jpg' },
  { id: 'p2', name: 'Pluszowa zawieszka Tillamook Colby Jack', short: 'Colby Jack', price: 54.9, img: '/shop/plush2.jpg' },
  { id: 'p3', name: 'Pluszowa zawieszka Tillamook Medium Cheddar', short: 'Medium Cheddar', price: 54.9, img: '/shop/plush3.jpg' },
  { id: 'p4', name: 'Pluszowa zawieszka Tillamook Sharp White Cheddar', short: 'Sharp White Cheddar', price: 54.9, img: '/shop/plush4.jpg' },
];

export const productById = (id: string) => PRODUCTS.find((p) => p.id === id)!;

export type ShipId = 'locker' | 'orlen' | 'courier';
export interface ShipMethod {
  id: ShipId;
  name: string;
  sub: string;
  price: number;
  kind: 'point' | 'home';
}

export const METHODS: ShipMethod[] = [
  { id: 'locker', name: 'Paczkomat® InPost 24/7', sub: 'Odbiór z automatu o każdej porze. Kod odbioru w SMS-ie i aplikacji InPost.', price: 24.9, kind: 'point' },
  { id: 'orlen', name: 'Punkt odbioru Orlen Paczka', sub: 'Odbiór na stacji Orlen lub w sklepie partnerskim.', price: 21.9, kind: 'point' },
  { id: 'courier', name: 'Kurier DPD do domu', sub: 'Kurier dzwoni przed doręczeniem.', price: 34.9, kind: 'home' },
];

export interface PickupPoint { code: string; addr: string; note: string }
export const POINTS: Record<'locker' | 'orlen', PickupPoint[]> = {
  locker: [
    { code: 'WAW44M', addr: 'ul. Marszałkowska 100, 00-026 Warszawa', note: 'Paczkomat, 24/7' },
    { code: 'WAW81N', addr: 'ul. Puławska 12, 02-566 Warszawa', note: 'Paczkomat, 24/7' },
    { code: 'KRA37M', addr: 'ul. Floriańska 5, 31-019 Kraków', note: 'Paczkomat, 24/7' },
    { code: 'GDA12B', addr: 'ul. Długa 20, 80-827 Gdańsk', note: 'Paczkomat, 24/7' },
  ],
  orlen: [
    { code: 'ORL-1204', addr: 'Stacja Orlen, ul. Grójecka 200, 02-390 Warszawa', note: 'Otwarte 6:00–22:00' },
    { code: 'ORL-3391', addr: 'Stacja Orlen, al. Solidarności 30, 00-140 Warszawa', note: 'Otwarte całą dobę' },
    { code: 'ORL-5210', addr: 'Stacja Orlen, ul. Wrocławska 15, 30-001 Kraków', note: 'Otwarte 6:00–23:00' },
  ],
};

export type PayId = 'blik' | 'p24' | 'card' | 'paypo';
export const PAY: { id: PayId; name: string; sub: string; badges: string[] }[] = [
  { id: 'blik', name: 'BLIK', sub: 'Kod 6 cyfr z aplikacji Twojego banku', badges: ['BLIK'] },
  { id: 'p24', name: 'Przelewy24', sub: 'Szybki przelew z Twojego banku', badges: ['PKO', 'mBank', 'ING', 'Santander'] },
  { id: 'card', name: 'Karta płatnicza', sub: '', badges: ['VISA', 'Mastercard'] },
  { id: 'paypo', name: 'PayPo', sub: 'Kup teraz, zapłać za 30 dni', badges: ['pay later'] },
];

const nf = new Intl.NumberFormat('pl-PL', { style: 'currency', currency: 'PLN' });
export const zl = (n: number) => nf.format(Math.round(n * 100) / 100);
export const vatOf = (gross: number) => (gross * VAT_RATE) / (100 + VAT_RATE);
