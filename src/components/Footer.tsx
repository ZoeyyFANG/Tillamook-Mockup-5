import TillamookLogo from './TillamookLogo';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onOpenWhereToBuy: () => void;
  onOpenSignMeUp: () => void;
}

export default function Footer({ onOpenWhereToBuy, onOpenSignMeUp }: FooterProps) {
  const { t } = useLanguage();

  return (
    <footer className="w-full bg-[#001e60] text-white pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-t border-white/10 font-['GT_Walsheim_Pro',_'GT_Walsheim',_sans-serif]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="inline-block">
              <TillamookLogo className="h-10 w-auto" variant="white" />
            </a>
            <p className="text-sm text-white/70 max-w-sm font-medium leading-relaxed">
              {t.footer.brandDesc}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-xs font-black">
                B
              </div>
              <span className="text-xs font-bold text-white/70">
                {t.footer.bcorp}
              </span>
            </div>
          </div>

          {/* Products Col */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#fcfae6]">
              {t.footer.productsTitle}
            </h4>
            <ul className="space-y-2 text-sm text-white/80 font-bold">
              <li><a href="#products-catalog" className="hover:text-[#fcfae6] transition-colors">{t.footer.varieties}</a></li>
              <li><a href="#products-catalog" className="hover:text-[#fcfae6] transition-colors">{t.footer.farmstyleShreds}</a></li>
              <li><a href="#products-catalog" className="hover:text-[#fcfae6] transition-colors">{t.footer.naturalBlocks}</a></li>
              <li><a href="#products-catalog" className="hover:text-[#fcfae6] transition-colors">{t.footer.farmstyleSlices}</a></li>
              <li><a href="#products-catalog" className="hover:text-[#fcfae6] transition-colors">{t.footer.snackPortions}</a></li>
              <li><a href="#products-catalog" className="hover:text-[#fcfae6] transition-colors">{t.footer.makersReserve}</a></li>
            </ul>
          </div>

          {/* Company & Heritage Col */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#fcfae6]">
              {t.footer.ourStoryTitle}
            </h4>
            <ul className="space-y-2 text-sm text-white/80 font-bold">
              <li><a href="#heritage" className="hover:text-[#fcfae6] transition-colors">{t.footer.coopHeritage}</a></li>
              <li><a href="#heritage" className="hover:text-[#fcfae6] transition-colors">{t.footer.morningStarHistory}</a></li>
              <li><a href="#visit-creamery" className="hover:text-[#fcfae6] transition-colors">{t.footer.visitCreamery}</a></li>
              <li><a href="#recipes" className="hover:text-[#fcfae6] transition-colors">{t.footer.kitchenRecipes}</a></li>
              <li>
                <button onClick={onOpenWhereToBuy} className="hover:text-[#fcfae6] transition-colors text-left cursor-pointer">
                  {t.footer.storeLocator}
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter Col */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#fcfae6]">
              {t.footer.stayConnectedTitle}
            </h4>
            <p className="text-xs text-white/70 leading-relaxed font-medium">
              {t.footer.newsletterDesc}
            </p>
            <button
              onClick={onOpenSignMeUp}
              className="bg-[#fcfae6] hover:bg-white text-[#001e60] font-black text-xs px-4 py-2.5 rounded-full transition-colors w-full cursor-pointer"
            >
              {t.footer.signUpBtn}
            </button>
          </div>
        </div>

        {/* Legal and Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50 font-medium">
          <div>
            {t.footer.copyright}
          </div>
          <div className="text-[11px] text-center sm:text-right max-w-xl">
            {t.footer.fdaDisclaimer}
          </div>
        </div>
      </div>
    </footer>
  );
}
