import { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown, Check, Sparkles, RotateCcw, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { SupportedLanguage } from '../i18n/types';

export default function GlobalNavbar() {
  const { language, setLanguage, t, languages, currentLanguageInfo } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredLang, setHoveredLang] = useState<SupportedLanguage | null>(null);
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
    <div
      id="global-navigation-bar"
      className="w-full bg-[#001438] text-white border-b border-white/10 relative z-50 text-xs font-['GT_Walsheim_Pro',_'GT_Walsheim',_sans-serif]"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 flex items-center justify-between">
        
        {/* Left: Global brand tag & Co-op status */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffb81c] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ffb81c]"></span>
            </span>
            <span className="font-black tracking-[0.16em] uppercase text-[#fcfae6] text-[11px] sm:text-xs flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-[#ffb81c]" />
              <span>{t.globalNav.brandGlobal}</span>
            </span>
          </div>

          <div className="hidden md:flex items-center text-white/60 text-[11px] font-medium pl-3 border-l border-white/20">
            <span>{t.globalNav.worldwide}</span>
          </div>

          {/* Active non-English indicator badge */}
          {!isEnglish && (
            <div className="hidden sm:inline-flex items-center gap-1.5 bg-[#ffb81c]/20 text-[#ffb81c] px-2.5 py-0.5 rounded-full border border-[#ffb81c]/40 text-[10px] font-black uppercase tracking-wider">
              <span>{t.globalNav.teamLanguage}: {currentLanguageInfo.name}</span>
            </div>
          )}
        </div>

        {/* Right: Quick "Back to English" button + Language Selector Dropdown */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Quick "Switch back to English" button if not currently English */}
          {!isEnglish && (
            <button
              id="global-back-to-english-btn"
              type="button"
              onClick={() => handleSelectLanguage('en')}
              className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white text-white hover:text-[#001e60] px-3 py-1 rounded-full text-[11px] font-extrabold transition-all duration-200 cursor-pointer border border-white/20 hover:border-white shadow-xs group"
              title="Click to dynamically switch back to English"
            >
              <RotateCcw className="w-3 h-3 text-[#ffb81c] group-hover:text-[#001e60] transition-transform group-hover:-rotate-90 duration-300" />
              <span>English</span>
            </button>
          )}

          {/* Primary Language Dropdown Trigger */}
          <div className="relative" ref={dropdownRef}>
            <button
              id="global-language-dropdown-toggle"
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-200 cursor-pointer text-[12px] font-bold border focus:outline-none ${
                isOpen
                  ? 'bg-white text-[#001e60] border-white shadow-md'
                  : 'bg-white/10 hover:bg-white/20 text-white border-white/20'
              }`}
              aria-expanded={isOpen}
              aria-haspopup="listbox"
              aria-label="Select website language"
            >
              <span className="text-sm leading-none" role="img" aria-label={currentLanguageInfo.name}>
                {currentLanguageInfo.flag}
              </span>
              <span className="font-extrabold tracking-tight">
                {currentLanguageInfo.name}
              </span>
              <span className="text-[10px] font-normal opacity-70 hidden sm:inline">
                ({currentLanguageInfo.englishName})
              </span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : ''
                } ${isOpen ? 'text-[#001e60]' : 'text-[#ffb81c]'}`}
              />
            </button>

            {/* Language Dropdown Menu */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  id="global-language-dropdown-menu"
                  initial={{ opacity: 0, y: 6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 4, scale: 0.98 }}
                  transition={{ duration: 0.18, ease: 'easeOut' }}
                  className="absolute right-0 mt-2 w-72 sm:w-80 bg-[#001a4a] text-white rounded-2xl shadow-2xl border border-white/20 overflow-hidden z-50 backdrop-blur-md"
                  role="listbox"
                >
                  {/* Dropdown Header */}
                  <div className="px-4 py-3 bg-[#001438] border-b border-white/10 flex items-center justify-between">
                    <div>
                      <div className="text-[11px] font-black uppercase tracking-wider text-[#ffb81c] flex items-center gap-1.5">
                        <Globe className="w-3 h-3" />
                        <span>{t.globalNav.selectLanguage}</span>
                      </div>
                      <p className="text-[10px] text-white/60 mt-0.5">
                        Choose your language to dynamically translate the page
                      </p>
                    </div>

                    {hoveredLang && (
                      <span className="text-[10px] bg-[#ffb81c] text-[#001e60] font-black px-2 py-0.5 rounded-full animate-in fade-in">
                        Hovering
                      </span>
                    )}
                  </div>

                  {/* Language Options List */}
                  <div className="p-2 space-y-1 max-h-[380px] overflow-y-auto">
                    {languages.map((item) => {
                      const isSelected = item.code === language;
                      const isItemHovered = hoveredLang === item.code;

                      return (
                        <div
                          key={item.code}
                          id={`language-option-${item.code}`}
                          role="option"
                          aria-selected={isSelected}
                          onClick={() => handleSelectLanguage(item.code)}
                          onMouseEnter={() => setHoveredLang(item.code)}
                          onMouseLeave={() => setHoveredLang(null)}
                          className={`group relative flex items-center justify-between px-3.5 py-2.5 rounded-xl cursor-pointer transition-all duration-200 select-none ${
                            isSelected
                              ? 'bg-[#fcfae6] text-[#001e60] font-black shadow-sm'
                              : 'text-white hover:bg-white/15 hover:text-[#fcfae6]'
                          }`}
                        >
                          {/* Rollover Left Accent Pill Bar (visible on hover) */}
                          <span
                            className={`absolute left-0 top-1.5 bottom-1.5 w-1 rounded-r-full transition-all duration-200 ${
                              isItemHovered && !isSelected
                                ? 'bg-[#ffb81c] scale-y-100 opacity-100'
                                : 'scale-y-0 opacity-0'
                            }`}
                          />

                          {/* Flag and Language Name */}
                          <div className="flex items-center gap-3 pl-1">
                            {/* Flag with Rollover Zoom & Bounce Effect */}
                            <span
                              className={`text-xl leading-none transition-transform duration-200 ${
                                isItemHovered ? 'scale-125 translate-x-0.5' : 'scale-100'
                              }`}
                              role="img"
                              aria-label={item.name}
                            >
                              {item.flag}
                            </span>

                            <div className="flex flex-col">
                              <span
                                className={`text-[13px] tracking-tight transition-transform duration-200 ${
                                  isItemHovered ? 'translate-x-1' : ''
                                } ${isSelected ? 'font-black text-[#001e60]' : 'font-bold'}`}
                              >
                                {item.name}
                              </span>
                              <span
                                className={`text-[10px] transition-opacity duration-200 ${
                                  isSelected ? 'text-[#001e60]/70' : 'text-white/60 group-hover:text-white/80'
                                }`}
                              >
                                {item.englishName} • {item.region}
                              </span>
                            </div>
                          </div>

                          {/* Right Status Indicator: Active checkmark or Rollover Preview Hint */}
                          <div className="flex items-center">
                            {isSelected ? (
                              <span className="flex items-center gap-1 text-[11px] font-black bg-[#001e60] text-white px-2 py-0.5 rounded-full">
                                <Check className="w-3 h-3 stroke-[3]" />
                                <span>{t.globalNav.activeLanguage}</span>
                              </span>
                            ) : (
                              /* Rollover effect visual badge when pointing */
                              <span
                                className={`text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md transition-all duration-200 flex items-center gap-1 ${
                                  isItemHovered
                                    ? 'opacity-100 translate-x-0 bg-[#ffb81c] text-[#001e60] shadow-xs'
                                    : 'opacity-0 translate-x-2'
                                }`}
                              >
                                <Sparkles className="w-2.5 h-2.5" />
                                <span>{item.code === 'en' ? 'Default' : 'Select'}</span>
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Dropdown Footer: Quick Note */}
                  <div className="px-4 py-2.5 bg-[#001230] border-t border-white/10 flex items-center justify-between text-[10px] text-white/60">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-emerald-400" />
                      <span>Instant Dynamic Translation</span>
                    </span>
                    {!isEnglish && (
                      <button
                        type="button"
                        onClick={() => handleSelectLanguage('en')}
                        className="text-[#ffb81c] hover:underline font-bold cursor-pointer"
                      >
                        Reset to English
                      </button>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
