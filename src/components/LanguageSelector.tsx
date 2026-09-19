import { useState, useRef, useEffect } from 'react';
import { Globe, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { SupportedLanguage } from '../i18n/types';

interface LanguageSelectorProps {
  className?: string;
  compact?: boolean;
}

export default function LanguageSelector({ className = '' }: LanguageSelectorProps) {
  const { language, setLanguage, languages, currentLanguageInfo } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdown on Escape key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSelectLanguage = (langCode: SupportedLanguage) => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  const isEnglish = language === 'en';

  return (
    <div className={`relative inline-flex items-center ${className}`} ref={dropdownRef}>
      {/* Simple Globe Icon Trigger Button */}
      <button
        id="navbar-language-dropdown-toggle"
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`p-1.5 rounded-full transition-colors duration-200 cursor-pointer flex items-center justify-center relative focus:outline-none ${
          isOpen
            ? 'bg-white/20 text-[#fcfae6]'
            : 'text-white hover:text-[#fcfae6] hover:bg-white/10'
        }`}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label="Select language"
        title={isEnglish ? 'Select language' : `Language: ${currentLanguageInfo.name}`}
      >
        <Globe className="w-5 h-5 stroke-[2]" />
        {!isEnglish && (
          <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#ffb81c] ring-2 ring-[#001e60]" />
        )}
      </button>

      {/* Clean, Minimal Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="navbar-language-dropdown-menu"
            initial={{ opacity: 0, y: 6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.97 }}
            transition={{ duration: 0.12, ease: 'easeOut' }}
            className="absolute right-0 top-full mt-2 w-48 bg-[#001438] text-white rounded-xl shadow-xl border border-white/15 p-1.5 z-50 backdrop-blur-md"
            role="listbox"
          >
            <div className="space-y-0.5">
              {languages.map((item) => {
                const isSelected = item.code === language;

                return (
                  <button
                    key={item.code}
                    id={`nav-lang-opt-${item.code}`}
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => handleSelectLanguage(item.code)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer text-left select-none ${
                      isSelected
                        ? 'bg-white/20 text-[#fcfae6] font-bold'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <span className="tracking-tight">{item.name}</span>
                    {isSelected && <Check className="w-3.5 h-3.5 text-[#ffb81c] stroke-[2.5]" />}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
