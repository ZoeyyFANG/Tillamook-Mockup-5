import { useState } from 'react';
import { X, MapPin, Search, Check, ExternalLink, Navigation } from 'lucide-react';
import { NEARBY_STORES } from '../data/cheeseData';
import { Store } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface WhereToBuyModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProductName?: string;
}

export default function WhereToBuyModal({ isOpen, onClose, selectedProductName }: WhereToBuyModalProps) {
  const [zipInput, setZipInput] = useState('97141');
  const [stores, setStores] = useState<Store[]>(NEARBY_STORES);
  const [, setHasSearched] = useState(false);
  const { t } = useLanguage();

  if (!isOpen) return null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSearched(true);
    // Simple filter simulation
    if (zipInput.trim()) {
      setStores(NEARBY_STORES);
    }
  };

  return (
    <div
      id="where-to-buy-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#001e60]/70 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="where-to-buy-modal-content"
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden text-[#001e60] p-6 sm:p-8 animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between pb-4 border-b border-neutral-100">
          <div>
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#001e60]/60 mb-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>{t.whereToBuy.tag}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#001e60] tracking-tight uppercase">
              {t.whereToBuy.title}
            </h2>
            {selectedProductName && (
              <p className="text-sm font-bold text-[#e8590c] mt-0.5">
                {t.whereToBuy.searchingFor}: {selectedProductName}
              </p>
            )}
          </div>

          <button
            id="close-where-to-buy-btn"
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 text-[#001e60] flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close store locator"
          >
            <X className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="mt-5 flex gap-2">
          <div className="relative flex-1">
            <MapPin className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              value={zipInput}
              onChange={(e) => setZipInput(e.target.value)}
              placeholder={t.whereToBuy.placeholder}
              className="w-full pl-11 pr-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-[15px] font-bold text-[#001e60] focus:outline-none focus:ring-2 focus:ring-[#001e60]"
            />
          </div>
          <button
            type="submit"
            className="bg-[#001e60] hover:bg-[#00174c] text-white px-6 py-3 rounded-xl font-black text-[15px] flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Search className="w-4 h-4 stroke-[2.5]" />
            <span>{t.whereToBuy.searchBtn}</span>
          </button>
        </form>

        {/* Quick Zip Suggestions */}
        <div className="flex items-center gap-2 mt-2.5 text-xs text-neutral-500">
          <span className="font-bold">{t.whereToBuy.popular}:</span>
          <button
            type="button"
            onClick={() => setZipInput('97141')}
            className="hover:text-[#001e60] underline cursor-pointer"
          >
            97141 (Tillamook Creamery)
          </button>
          •
          <button
            type="button"
            onClick={() => setZipInput('97201')}
            className="hover:text-[#001e60] underline cursor-pointer"
          >
            97201 (Portland)
          </button>
          •
          <button
            type="button"
            onClick={() => setZipInput('98101')}
            className="hover:text-[#001e60] underline cursor-pointer"
          >
            98101 (Seattle)
          </button>
        </div>

        {/* Store Results List */}
        <div className="mt-5 overflow-y-auto space-y-3 pr-1 flex-1">
          <div className="text-xs font-black uppercase tracking-wider text-neutral-500 pb-1">
            {stores.length} {t.whereToBuy.storesFound}
          </div>

          {stores.map((store) => (
            <div
              key={store.id}
              className="p-4 rounded-2xl border border-neutral-200 hover:border-[#001e60] transition-all hover:shadow-md bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-extrabold text-[17px] text-[#001e60]">{store.name}</h4>
                  <span className="text-xs font-black text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                    {store.distance}
                  </span>
                </div>
                <div className="text-xs text-neutral-600 font-medium">
                  {store.address}, {store.city}, {store.state} {store.zip}
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {store.inStockItems.map((item, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-bold bg-[#fcfae6] text-[#001e60] px-2 py-0.5 rounded-md flex items-center gap-1"
                    >
                      <Check className="w-2.5 h-2.5 text-emerald-600 stroke-[3]" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 sm:self-center">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(
                    `${store.name} ${store.address} ${store.city} ${store.state}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-extrabold bg-neutral-100 hover:bg-[#001e60] hover:text-white text-[#001e60] px-3.5 py-2 rounded-lg transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>{t.whereToBuy.directions}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Online Ordering Callout */}
        <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-600">
          <span>{t.whereToBuy.onlineShippingNote}</span>
          <a
            href="https://shop.tillamook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-extrabold text-[#001e60] hover:underline flex items-center gap-1 shrink-0 ml-2"
          >
            <span>{t.whereToBuy.shopOnline}</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
