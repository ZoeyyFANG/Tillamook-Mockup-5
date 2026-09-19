import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

interface SubnavProps {
  currentCategory: string;
  onCategoryChange: (category: string) => void;
}

interface DairyCategoryItem {
  id: string;
  key: 'cheese' | 'iceCream' | 'creamCheese' | 'yogurt' | 'sourCream' | 'butter';
  image: string;
  filterId: string;
}

const DAIRY_CATEGORIES: DairyCategoryItem[] = [
  {
    id: 'cheese',
    key: 'cheese',
    image: '/categories/cheese.png',
    filterId: 'all',
  },
  {
    id: 'ice-cream',
    key: 'iceCream',
    image: '/categories/ice-cream.png',
    filterId: 'ice-cream',
  },
  {
    id: 'cream-cheese',
    key: 'creamCheese',
    image: '/categories/cream-cheese.png',
    filterId: 'cream-cheese',
  },
  {
    id: 'yogurt',
    key: 'yogurt',
    image: '/categories/yogurt.png',
    filterId: 'yogurt',
  },
  {
    id: 'sour-cream',
    key: 'sourCream',
    image: '/categories/sour-cream.png',
    filterId: 'sour-cream',
  },
  {
    id: 'butter',
    key: 'butter',
    image: '/categories/butter.png',
    filterId: 'butter',
  },
];

export default function Subnav({ currentCategory, onCategoryChange }: SubnavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const activeCategoryItem =
    DAIRY_CATEGORIES.find((c) => c.id === currentCategory) || DAIRY_CATEGORIES[0];
  const activeCategoryName = t.subnav.categories[activeCategoryItem.key];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectCategory = (cat: DairyCategoryItem) => {
    onCategoryChange(cat.id);
    setIsOpen(false);
  };

  return (
    <div
      id="subnav-container"
      ref={containerRef}
      className="relative z-30 w-full bg-white border-b border-neutral-200/80 shadow-xs font-['GT_Walsheim_Pro',_'GT_Walsheim',_sans-serif]"
    >
      {/* 1. Main Centered Pill Bar ("Cheese ⌄") */}
      <div className="w-full py-3.5 flex justify-center">
        <button
          id="subnav-category-pill-btn"
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="group inline-flex items-center gap-2.5 px-4 py-1 rounded-full hover:bg-neutral-50 transition-colors focus:outline-none cursor-pointer select-none"
          aria-expanded={isOpen}
          aria-label={t.subnav.label}
        >
          <span className="text-[18px] sm:text-[19px] font-normal text-[#001e60] tracking-tight">
            {activeCategoryName}
          </span>

          {/* Circular Chevron Badge matching screenshot */}
          <span className="w-6 h-6 rounded-full bg-[#f6f4e6] flex items-center justify-center transition-transform duration-200 group-hover:bg-[#f0edd2]">
            <ChevronDown
              className={`w-3.5 h-3.5 text-[#001e60] stroke-[2.5] transition-transform duration-200 ${
                isOpen ? 'rotate-180' : ''
              }`}
            />
          </span>
        </button>
      </div>

      {/* 2. Expanded Horizontal Visual Tray matching attached screenshot */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="subnav-expanded-tray"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden bg-white border-t border-neutral-100"
          >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8 sm:pb-10">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 sm:gap-4 lg:gap-8 items-end justify-items-center">
                {DAIRY_CATEGORIES.map((category) => {
                  const catName = t.subnav.categories[category.key];
                  return (
                    <button
                      key={category.id}
                      id={`subnav-dairy-item-${category.id}`}
                      type="button"
                      onClick={() => handleSelectCategory(category)}
                      className="group flex flex-col items-center justify-end w-full cursor-pointer focus:outline-none transition-transform duration-200 hover:-translate-y-1"
                    >
                      {/* Category Packshot Image */}
                      <div className="h-20 sm:h-24 md:h-28 w-full flex items-center justify-center p-1">
                        <img
                          src={category.image}
                          alt={catName}
                          className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105 select-none"
                          loading="eager"
                        />
                      </div>

                      {/* Category Label: heavy/bold, uppercase, navy #001e60 matching screenshot without underline */}
                      <span
                        className="mt-3 text-xs sm:text-[14px] font-black tracking-[0.14em] sm:tracking-[0.18em] text-center uppercase text-[#001e60] group-hover:text-[#e8590c] transition-colors"
                        style={{
                          letterSpacing: '0.16em',
                          fontFamily: "'GT Walsheim Pro', 'GT Walsheim', -apple-system, sans-serif",
                        }}
                      >
                        {catName}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
