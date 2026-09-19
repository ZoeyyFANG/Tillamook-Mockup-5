import { useState } from 'react';
import { X, CheckCircle2, Ticket, ArrowRight } from 'lucide-react';
import WeatherVane from './WeatherVane';
import { useLanguage } from '../context/LanguageContext';

interface SignMeUpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SignMeUpModal({ isOpen, onClose }: SignMeUpModalProps) {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [favoriteCheese, setFavoriteCheese] = useState('Medium Cheddar');
  const [zip, setZip] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const { t } = useLanguage();

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <div
      id="sign-me-up-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#001e60]/70 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="sign-me-up-modal-content"
        className="relative w-full max-w-lg bg-[#fcfae6] rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden text-[#001e60] p-7 sm:p-9 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-sign-me-up-btn"
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-[#001e60] flex items-center justify-center transition-colors shadow-xs cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 stroke-[2.5]" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <WeatherVane className="w-12 h-auto" color="#001e60" />
              <span className="text-xs font-black uppercase tracking-widest bg-[#001e60] text-white px-3 py-1 rounded-full">
                {t.signMeUp.badge}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-[#001e60] leading-tight tracking-tight uppercase">
              {t.signMeUp.title}
            </h2>
            <p className="mt-2 text-[15px] text-[#001e60]/80 font-medium">
              {t.signMeUp.description}
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-[#001e60] mb-1">
                    {t.signMeUp.firstName}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={t.signMeUp.firstNamePlaceholder}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full bg-white border border-neutral-300 rounded-xl px-4 py-2.5 text-[15px] font-bold text-[#001e60] placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#001e60]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-[#001e60] mb-1">
                    {t.signMeUp.zip}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="97141"
                    maxLength={5}
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                    className="w-full bg-white border border-neutral-300 rounded-xl px-4 py-2.5 text-[15px] font-bold text-[#001e60] placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#001e60]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-[#001e60] mb-1">
                  {t.signMeUp.email}
                </label>
                <input
                  type="email"
                  required
                  placeholder="sarah@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white border border-neutral-300 rounded-xl px-4 py-2.5 text-[15px] font-bold text-[#001e60] placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#001e60]"
                />
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-[#001e60] mb-1">
                  {t.signMeUp.favoriteCheese}
                </label>
                <select
                  value={favoriteCheese}
                  onChange={(e) => setFavoriteCheese(e.target.value)}
                  className="w-full bg-white border border-neutral-300 rounded-xl px-4 py-2.5 text-[15px] font-bold text-[#001e60] focus:outline-none focus:ring-2 focus:ring-[#001e60]"
                >
                  <option>Medium Cheddar (Aged 60+ days)</option>
                  <option>Sharp White Cheddar (Aged 9+ months)</option>
                  <option>Whole Milk Mozzarella Farmstyle Shreds</option>
                  <option>Colby Jack Thick Slices</option>
                  <option>Maker’s Reserve Extra Sharp</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  id="submit-sign-me-up-btn"
                  type="submit"
                  className="w-full bg-[#001e60] hover:bg-[#00174c] text-white font-extrabold text-[16px] py-3.5 px-6 rounded-full transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{t.signMeUp.submitBtn}</span>
                  <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                </button>
              </div>

              <p className="text-[11px] text-center text-neutral-500 font-medium">
                {t.signMeUp.disclaimer}
              </p>
            </form>
          </div>
        ) : (
          <div className="py-6 text-center animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 bg-[#001e60] text-[#fcfae6] rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-9 h-9 stroke-[2.5]" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-[#001e60] uppercase tracking-tight">
              {t.signMeUp.welcomeTitle}, {firstName || 'Cheese Lover'}!
            </h3>
            <p className="mt-2 text-neutral-700 text-[15px]">
              {t.signMeUp.welcomeDesc} <strong className="text-[#001e60]">{email}</strong>.
            </p>

            {/* Printable Coupon Card */}
            <div className="mt-6 bg-white border-2 border-dashed border-[#001e60] rounded-2xl p-5 text-left shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                <div className="flex items-center gap-2">
                  <Ticket className="w-5 h-5 text-[#e8590c]" />
                  <span className="font-black text-sm uppercase text-[#001e60]">{t.signMeUp.couponTitle}</span>
                </div>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                  {t.signMeUp.activeCode}
                </span>
              </div>
              <div className="mt-3">
                <div className="text-2xl font-black text-[#001e60]">{t.signMeUp.couponAmount}</div>
                <div className="text-xs text-neutral-600 font-medium mt-0.5">
                  {t.signMeUp.couponSub}
                </div>
                <div className="mt-3 bg-neutral-100 p-2.5 rounded-lg text-center font-mono font-black tracking-widest text-[#001e60]">
                  CHEESE-LOVER-2026-97141
                </div>
              </div>
            </div>

            <div className="mt-6">
              <button
                type="button"
                onClick={onClose}
                className="bg-[#001e60] text-white font-extrabold text-[15px] px-8 py-3 rounded-full hover:bg-[#00174c] transition-colors cursor-pointer"
              >
                {t.signMeUp.exploreBtn}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
