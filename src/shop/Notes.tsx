import { useEffect, useLayoutEffect, useState } from 'react';
import { Info, X } from 'lucide-react';
import { useShop } from './ShopContext';

/** Spread onto any element to attach a "US vs. Poland" localization note. */
export const note = (title: string, text: string) => ({ 'data-note': text, 'data-note-title': title });

interface Item { title: string; text: string; x: number; y: number }

export default function NotesOverlay({ page }: { page: string }) {
  const { notesOn, toggleNotes } = useShop();
  const [items, setItems] = useState<Item[]>([]);
  const [pulse, setPulse] = useState<number | null>(null);

  useLayoutEffect(() => {
    if (!notesOn) { setItems([]); return; }
    let t: number;
    const measure = () => {
      const els = Array.from(document.querySelectorAll<HTMLElement>('[data-note]')).filter((e) => e.getClientRects().length > 0);
      setItems(els.map((e) => {
        const r = e.getBoundingClientRect();
        const edge = r.left < 24;
        return {
          title: e.dataset.noteTitle || '', text: e.dataset.note || '',
          x: window.scrollX + r.left + (edge ? 8 : -11), y: window.scrollY + r.top + (edge ? 8 : -11),
        };
      }));
    };
    const soon = () => { window.clearTimeout(t); t = window.setTimeout(measure, 60); };
    measure();
    const mo = new MutationObserver(soon);
    mo.observe(document.getElementById('root')!, { childList: true, subtree: true, attributes: true, attributeFilter: ['class', 'hidden'] });
    window.addEventListener('resize', soon);
    return () => { mo.disconnect(); window.removeEventListener('resize', soon); window.clearTimeout(t); };
  }, [notesOn, page]);

  useEffect(() => { if (pulse !== null) { const t = window.setTimeout(() => setPulse(null), 1400); return () => window.clearTimeout(t); } }, [pulse]);

  const jump = (i: number) => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-note]')).filter((e) => e.getClientRects().length > 0);
    els[i]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    setPulse(i);
  };

  const names: Record<string, string> = { shop: 'Shop page', cart: 'Cart page', checkout: 'Checkout page', confirm: 'Confirmation page' };

  return (
    <>
      {notesOn && (
        <div className="absolute left-0 top-0 w-0 h-0 z-[60] pointer-events-none" aria-hidden="true">
          {items.map((it, i) => (
            <span
              key={i}
              className={`absolute w-6 h-6 rounded-full bg-[#ffb81c] text-[#001e60] border-2 border-white text-xs font-black flex items-center justify-center shadow-lg ${pulse === i ? 'animate-ping' : ''}`}
              style={{ left: it.x, top: it.y }}
            >
              {i + 1}
            </span>
          ))}
        </div>
      )}
      {notesOn && (
        <aside className="fixed right-4 bottom-20 z-[70] w-[min(380px,calc(100vw-2rem))] max-h-[70vh] overflow-auto rounded-2xl bg-[#001e60] text-white shadow-2xl p-4" aria-label="Localization notes">
          <div className="flex items-start justify-between gap-2 mb-1">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#ffb81c]">{names[page] || 'Page'}: US vs. Poland</h4>
            <button onClick={toggleNotes} aria-label="Close notes" className="text-white/70 hover:text-white cursor-pointer"><X className="w-4 h-4" /></button>
          </div>
          <p className="text-xs text-white/60 mb-3">Numbered pins mark what changed for the Polish market and why. Click a note to jump to it.</p>
          <ol className="space-y-2">
            {items.map((it, i) => (
              <li key={i}>
                <button onClick={() => jump(i)} className="w-full text-left flex gap-3 rounded-xl bg-white/5 hover:bg-white/10 p-3 cursor-pointer">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-[#ffb81c] text-[#001e60] text-xs font-black flex items-center justify-center">{i + 1}</span>
                  <span className="text-[13px] leading-snug"><b className="block mb-0.5">{it.title}</b><span className="text-white/75">{it.text}</span></span>
                </button>
              </li>
            ))}
          </ol>
        </aside>
      )}
      <button
        onClick={toggleNotes}
        aria-pressed={notesOn}
        className="fixed right-4 bottom-4 z-[70] inline-flex items-center gap-2 rounded-full bg-[#ffb81c] hover:bg-[#ffc94a] text-[#001e60] font-black text-sm px-4 py-2.5 shadow-xl cursor-pointer"
      >
        <Info className="w-4 h-4" />
        {notesOn ? 'Hide notes' : 'Localization notes'}
      </button>
    </>
  );
}
