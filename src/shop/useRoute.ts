import { useEffect, useState } from 'react';

export type Route = 'home' | 'shop' | 'cart' | 'checkout' | 'confirm';
const ROUTES: Route[] = ['shop', 'cart', 'checkout', 'confirm'];

export function parseRoute(): Route {
  const h = window.location.hash.replace(/^#\/?/, '');
  return (ROUTES as string[]).includes(h) ? (h as Route) : 'home';
}

export function useRoute(): Route {
  const [r, setR] = useState<Route>(parseRoute);
  useEffect(() => {
    const on = () => setR(parseRoute());
    window.addEventListener('hashchange', on);
    return () => window.removeEventListener('hashchange', on);
  }, []);
  return r;
}

export const go = (r: Route) => { window.location.hash = r === 'home' ? '' : '#/' + r; };
