import { motion } from 'motion/react';
import { Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onOpenSignMeUp: () => void;
}

export default function Hero({ onOpenSignMeUp }: HeroProps) {
  const { t } = useLanguage();

  return (
    <section
      id="hero-section"
      className="relative w-full bg-[#fcfae6] overflow-hidden min-h-[500px] lg:min-h-[580px] flex items-center select-none"
      style={{ backgroundColor: '#fcfae6' }}
    >
      {/* Floating Vertical "SIGN ME UP" Tab on far-left edge matching screenshot */}
      <button
        id="hero-floating-sign-me-up-tab"
        onClick={onOpenSignMeUp}
        className="fixed left-0 top-1/2 -translate-y-1/2 z-40 bg-white hover:bg-neutral-50 text-[#001e60] shadow-[0_4px_16px_rgba(0,30,96,0.12)] border border-l-0 border-neutral-300/80 rounded-r-xl py-3 px-2 flex flex-col items-center gap-2 cursor-pointer transition-all hover:pl-3 group focus:outline-none"
        aria-label={t.hero.signMeUpTab}
      >
        <div
          className="text-[10px] sm:text-[11px] font-bold tracking-[0.22em] uppercase text-[#001e60] group-hover:text-[#00174c]"
          style={{
            writingMode: 'vertical-rl',
          }}
        >
          {t.hero.signMeUpTab}
        </div>
        <div className="w-6 h-6 rounded-md bg-[#fcfae6] group-hover:bg-[#f3eed0] flex items-center justify-center text-[#001e60] transition-colors">
          <Mail className="w-3.5 h-3.5 stroke-[2.5]" />
        </div>
      </button>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 py-8 lg:py-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Left Hero Column: Brand Logo Boat Icon with Vane Arrow & Centered Headline */}
          <motion.div
            className="lg:col-span-6 flex flex-col items-center justify-center text-center pt-2 lg:pt-0"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            {/* Morning Star Boat Icon with weather vane arrow underneath matching screenshot */}
            <div className="mb-4 sm:mb-5 transition-transform hover:scale-105 duration-300 flex flex-col items-center">
              <img
                id="hero-boat-icon"
                src="/tillamook-boat-icon.png"
                alt={t.hero.boatAlt}
                className="h-9 sm:h-11 lg:h-12 w-auto object-contain select-none"
              />
              <svg
                viewBox="0 0 100 8"
                fill="#001e60"
                className="w-14 sm:w-18 lg:w-20 h-auto mt-1"
                aria-hidden="true"
              >
                <rect x="12" y="3" width="76" height="2" rx="1" />
                <path d="M86 0.5 L97 4 L86 7.5 L88 4 Z" />
                <path d="M14 0.5 L6 4 L14 7.5 L11 4 Z" />
              </svg>
            </div>

            {/* Bold headline scaled up by 100px */}
            <h1
              id="hero-main-headline"
              className="text-[#001e60] font-black tracking-tight leading-[0.88] text-[38px] sm:text-[48px] md:text-[58px] lg:text-[68px] xl:text-[76px] 2xl:text-[84px] uppercase text-center mx-auto"
              style={{
                fontFamily: "'GT Walsheim Pro', 'GT Walsheim', -apple-system, sans-serif",
                letterSpacing: '-0.038em',
              }}
            >
              {[t.hero.headlineLine1, t.hero.headlineLine2, t.hero.headlineLine3, t.hero.headlineLine4].map((line, idx) => (
                <span key={idx} className="block">
                  {line}
                </span>
              ))}
            </h1>
          </motion.div>

          {/* Right Hero Column: Product Lineup Photo scaled 200px smaller */}
          <motion.div
            className="lg:col-span-6 flex justify-center items-center relative"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          >
            <div className="relative w-full max-w-[240px] sm:max-w-[320px] lg:max-w-[400px] xl:max-w-[460px] 2xl:max-w-[520px] flex justify-center">
              <img
                id="hero-products-image"
                src="/cheese_products_hero.png"
                alt={t.hero.productsAlt}
                className="w-full h-auto object-contain select-none drop-shadow-sm"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
