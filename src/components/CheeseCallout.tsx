import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

interface CheeseCalloutProps {
  onSeeAllCheese: () => void;
}

export default function CheeseCallout({ onSeeAllCheese }: CheeseCalloutProps) {
  const { t } = useLanguage();

  return (
    <section
      id="cheese-callout-section"
      className="w-full bg-[#fcfae6] pt-2 pb-14 sm:pb-20 px-4 sm:px-6 lg:px-8 font-['GT_Walsheim_Pro',_'GT_Walsheim',_sans-serif]"
      style={{ backgroundColor: '#fcfae6' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Navy Rounded Card with Top Pointer Notch matching screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative bg-[#001e60] text-white rounded-2xl sm:rounded-3xl pt-14 pb-14 sm:pt-16 sm:pb-18 px-6 sm:px-12 md:px-16 text-center shadow-xl overflow-visible"
        >
          {/* Triangular Top Peak Notch pointing upward into #fcfae6 */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-8 h-3.5 flex items-center justify-center pointer-events-none">
            <svg
              width="32"
              height="14"
              viewBox="0 0 32 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-3.5 text-[#001e60]"
            >
              <path d="M0 14L16 0L32 14H0Z" fill="currentColor" />
            </svg>
          </div>

          <div className="max-w-4xl mx-auto flex flex-col items-center">
            {/* Category Label */}
            <span
              className="text-xs sm:text-[13px] font-black tracking-[0.24em] text-white/90 uppercase mb-4 sm:mb-6 block"
              style={{ letterSpacing: '0.24em' }}
            >
              {t.cheeseCallout.category}
            </span>

            {/* Quote Headline */}
            <h2
              className="text-white font-medium text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-[1.22] sm:leading-[1.25] tracking-tight mb-8 sm:mb-10 max-w-3xl"
              style={{
                fontFamily: "'GT Walsheim Pro', 'GT Walsheim', -apple-system, sans-serif",
              }}
            >
              {t.cheeseCallout.quote}
            </h2>

            {/* SEE ALL CHEESE Pill Button */}
            <button
              id="see-all-cheese-btn"
              type="button"
              onClick={onSeeAllCheese}
              className="inline-flex items-center justify-center bg-[#fcfae6] hover:bg-white text-[#001e60] text-xs sm:text-sm font-black tracking-[0.14em] uppercase px-8 sm:px-10 py-3.5 sm:py-4 rounded-full transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer hover:scale-105 active:scale-95 focus:outline-none"
              style={{ letterSpacing: '0.14em' }}
            >
              {t.cheeseCallout.seeAllCheese}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
