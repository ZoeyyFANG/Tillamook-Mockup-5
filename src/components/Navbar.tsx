import { useState } from 'react';
import { Search, ArrowUpRight, Menu, X, Globe, Check } from 'lucide-react';
import TillamookLogo from './TillamookLogo';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  onOpenSearch: () => void;
  onOpenWhereToBuy: () => void;
  onSelectCategory?: (category: string) => void;
}

export default function Navbar({ onOpenSearch, onOpenWhereToBuy }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, language, setLanguage, languages } = useLanguage();

  return (
    <header className="sticky top-0 z-40 w-full bg-[#001e60] text-white shadow-md font-['GT_Walsheim_Pro',_'GT_Walsheim',_sans-serif]">
      {/* Centered container with desktop navigation closely hugging the center logo */}
      <div className="w-full px-4 sm:px-6 lg:px-8">
        
        {/* Mobile View: hamburger on left, logo center, language + search on right */}
        <div className="flex md:hidden items-center justify-between h-16 sm:h-20">
          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white hover:text-[#fcfae6] transition-colors focus:outline-none cursor-pointer"
            aria-label={t.nav.menuAria}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <a href="#" className="inline-flex items-center">
            <TillamookLogo className="h-8 sm:h-9 w-auto" variant="white" />
          </a>

          <div className="flex items-center gap-1.5">
            <LanguageSelector compact />
            <button
              onClick={onOpenSearch}
              className="p-2 text-white hover:text-[#fcfae6] transition-colors cursor-pointer"
              aria-label={t.nav.searchAria}
            >
              <Search className="w-5 h-5 stroke-[2]" />
            </button>
          </div>
        </div>

        {/* Desktop View: Centered brand logo with balanced left and right navigation */}
        <div className="hidden md:flex items-center justify-between h-20 relative w-full">
          
          {/* Left Navigation Items: Aligned toward center logo */}
          <div className="flex-1 flex items-center justify-end pr-6 lg:pr-10 xl:pr-12">
            <nav className="flex items-center gap-6 lg:gap-8 xl:gap-10 text-[15px] lg:text-[16px] xl:text-[17px] font-normal tracking-tight text-white">
              <a
                id="nav-products-link"
                href="#products-catalog"
                className="hover:text-[#fcfae6] transition-colors text-white font-normal"
              >
                {t.nav.products}
              </a>

              <a
                id="nav-about-link"
                href="#heritage"
                className="hover:text-[#fcfae6] transition-colors text-white font-normal"
              >
                {t.nav.about}
              </a>

              <a
                id="nav-recipes-link"
                href="#recipes"
                className="hover:text-[#fcfae6] transition-colors text-white font-normal"
              >
                {t.nav.recipes}
              </a>
            </nav>
          </div>

          {/* Center Brand Logo (strictly centered at 50%) */}
          <div className="flex items-center justify-center shrink-0 z-10 px-3 lg:px-5">
            <a
              id="nav-home-logo"
              href="#"
              className="inline-flex items-center group transition-transform duration-200 hover:scale-105"
              aria-label="Tillamook Home"
            >
              <TillamookLogo className="h-10 sm:h-12 w-auto" variant="white" />
            </a>
          </div>

          {/* Right Navigation Items: Starting from center logo with search and language selector aligned neatly on the right */}
          <div className="flex-1 flex items-center justify-start pl-6 lg:pl-10 xl:pl-12">
            <div className="flex items-center gap-5 lg:gap-7 xl:gap-9 text-[15px] lg:text-[16px] xl:text-[17px] font-normal tracking-tight text-white">
              <a
                id="nav-visit-link"
                href="#visit-creamery"
                className="hover:text-[#fcfae6] transition-colors text-white font-normal"
              >
                {t.nav.visit}
              </a>

              <button
                id="nav-where-to-buy-btn"
                onClick={onOpenWhereToBuy}
                className="hover:text-[#fcfae6] transition-colors cursor-pointer text-white font-normal"
              >
                {t.nav.whereToBuy}
              </button>

              <a
                id="nav-online-shop-link"
                href="https://shop.tillamook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-[#fcfae6] transition-colors text-white font-normal"
              >
                <span>{t.nav.onlineShop}</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2]" />
              </a>

              {/* Search Icon */}
              <button
                id="nav-search-btn"
                onClick={onOpenSearch}
                className="p-1.5 hover:text-[#fcfae6] transition-colors cursor-pointer text-white focus:outline-none flex items-center justify-center"
                aria-label={t.nav.searchAria}
              >
                <Search className="w-4.5 h-4.5 stroke-[2.2]" />
              </button>

              {/* Integrated Language Selector Dropdown inside the Navigation Bar */}
              <LanguageSelector className="ml-1 lg:ml-2" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="md:hidden bg-[#001e60] border-t border-white/10 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200"
        >
          <div className="flex flex-col space-y-3.5 text-base font-normal">
            <a
              href="#products-catalog"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-white hover:text-[#fcfae6]"
            >
              {t.nav.products}
            </a>
            <a
              href="#heritage"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-white hover:text-[#fcfae6]"
            >
              {t.nav.about}
            </a>
            <a
              href="#recipes"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-white hover:text-[#fcfae6]"
            >
              {t.nav.recipes}
            </a>
            <a
              href="#visit-creamery"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-white hover:text-[#fcfae6]"
            >
              {t.nav.visit}
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWhereToBuy();
              }}
              className="text-left py-1 text-white hover:text-[#fcfae6]"
            >
              {t.nav.whereToBuy}
            </button>
            <a
              href="https://shop.tillamook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 py-1 text-white hover:text-[#fcfae6]"
            >
              <span>{t.nav.onlineShop}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            {/* Mobile Language Selector */}
            <div className="pt-4 mt-2 border-t border-white/20">
              <div className="text-xs font-black uppercase tracking-wider text-[#ffb81c] mb-2 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5" />
                <span>{t.globalNav.selectLanguage}</span>
              </div>
              <div className="grid grid-cols-2 gap-2 pt-1">
                {languages.map((item) => (
                  <button
                    key={item.code}
                    onClick={() => {
                      setLanguage(item.code);
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center gap-2 p-2 rounded-xl text-left text-xs font-bold transition-colors ${
                      item.code === language
                        ? 'bg-[#fcfae6] text-[#001e60]'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    <span>{item.flag}</span>
                    <span className="truncate">{item.name}</span>
                    {item.code === language && <Check className="w-3 h-3 ml-auto" />}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
