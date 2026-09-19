import { createContext, useContext, useMemo, useState, ReactNode, useCallback } from 'react';
import { METHODS, FREE_FROM, PAY, PayId, PickupPoint, ShipId, productById } from './data';

export interface CartLine { id: string; qty: number }
export interface Order {
  num: string; email: string; name: string; phone: string;
  ship: string; home: boolean; addr: string; pay: string;
  items: CartLine[]; sub: number; shipCost: number; total: number;
}

interface ShopState {
  cart: CartLine[];
  count: number;
  add: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  remove: (id: string) => void;
  subtotal: number;
  ship: ShipId; setShip: (s: ShipId) => void;
  point: PickupPoint | null; setPoint: (p: PickupPoint | null) => void;
  pay: PayId; setPay: (p: PayId) => void;
  shipCost: number; total: number;
  order: Order | null; setOrder: (o: Order | null) => void;
  reset: () => void;
  notesOn: boolean; toggleNotes: () => void;
  toast: string; showToast: (m: string) => void;
}

const Ctx = createContext<ShopState | null>(null);
const START: CartLine[] = [{ id: 'p3', qty: 1 }];

export function ShopProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartLine[]>(START);
  const [ship, setShipState] = useState<ShipId>('locker');
  const [point, setPoint] = useState<PickupPoint | null>(null);
  const [pay, setPay] = useState<PayId>('blik');
  const [order, setOrder] = useState<Order | null>(null);
  const [notesOn, setNotesOn] = useState(false);
  const [toast, setToast] = useState('');

  const showToast = useCallback((m: string) => {
    setToast(m);
    window.setTimeout(() => setToast(''), 3800);
  }, []);

  const value = useMemo<ShopState>(() => {
    const subtotal = cart.reduce((a, l) => a + productById(l.id).price * l.qty, 0);
    const method = METHODS.find((m) => m.id === ship)!;
    const shipCost = subtotal >= FREE_FROM ? 0 : method.price;
    return {
      cart,
      count: cart.reduce((a, l) => a + l.qty, 0),
      add: (id) => {
        setCart((c) => (c.some((l) => l.id === id) ? c.map((l) => (l.id === id ? { ...l, qty: Math.min(20, l.qty + 1) } : l)) : [...c, { id, qty: 1 }]));
        showToast('Dodano do koszyka: ' + productById(id).short);
      },
      setQty: (id, qty) => setCart((c) => c.map((l) => (l.id === id ? { ...l, qty: Math.max(1, Math.min(20, qty)) } : l))),
      remove: (id) => setCart((c) => c.filter((l) => l.id !== id)),
      subtotal, ship,
      setShip: (s) => { setShipState(s); setPoint(null); },
      point, setPoint, pay, setPay, shipCost, total: subtotal + shipCost,
      order, setOrder,
      reset: () => { setCart(START); setPoint(null); setOrder(null); },
      notesOn, toggleNotes: () => setNotesOn((v) => !v),
      toast, showToast,
    };
  }, [cart, ship, point, pay, order, notesOn, toast, showToast]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useShop() {
  const c = useContext(Ctx);
  if (!c) throw new Error('useShop must be used within ShopProvider');
  return c;
}
export const payName = (id: PayId) => PAY.find((p) => p.id === id)!.name;
