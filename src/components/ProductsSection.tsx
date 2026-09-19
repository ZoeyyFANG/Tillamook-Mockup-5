import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { CHEESE_PRODUCTS, CHEESE_CATEGORIES } from '../data/cheeseData';
import { Product } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface ProductsSectionProps {
  onOpenWhereToBuyWithProduct: (productName: string) => void;
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
}

export default function ProductsSection({
  onOpenWhereToBuyWithProduct,
  selectedFilter,
  onFilterChange,
}: ProductsSectionProps) {
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);
  const { t } = useLanguage();

  const filteredProducts = CHEESE_PRODUCTS.filter((product) => {
    if (selectedFilter === 'all') return true;
    return product.category === selectedFilter;
  });

  return (
    <section id="products-catalog" className="w-full bg-[#fdfcee] py-16 px-4 sm:px-6 lg:px-8 border-t border-neutral-200/60">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#001e60]/70 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#e8590c]" />
              <span>{t.products.estBadge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#001e60] tracking-tight uppercase">
              {t.products.title}
            </h2>
            <p className="mt-2 text-base text-neutral-700 max-w-xl font-medium">
              {t.products.description}
            </p>
          </div>

          <div className="flex items-center gap-3 self-start md:self-auto bg-white py-2 px-4 rounded-2xl border border-neutral-200 shadow-xs">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            <span className="text-xs font-black text-[#001e60]">
              {t.products.bCorpBadge}
            </span>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {CHEESE_CATEGORIES.map((cat) => {
            const isActive = selectedFilter === cat.id;
            const categoryLabel = cat.id === 'all' 
              ? t.products.categories.all 
              : cat.id in t.products.categories 
                ? t.products.categories[cat.id as keyof typeof t.products.categories] 
                : cat.name;

            return (
              <button
                key={cat.id}
                id={`filter-tab-${cat.id}`}
                onClick={() => onFilterChange(cat.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-black whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#001e60] text-white shadow-md'
                    : 'bg-white hover:bg-neutral-100 text-[#001e60] border border-neutral-200'
                }`}
              >
                <span>{categoryLabel}</span>
                <span
                  className={`text-[11px] px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-white/20 text-white' : 'bg-neutral-100 text-neutral-600'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                id={`product-card-${product.id}`}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-3xl p-6 border border-neutral-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Header Badge & Size */}
                  <div className="flex items-center justify-between mb-4">
                    {product.badge ? (
                      <span className="text-[11px] font-black uppercase tracking-wider bg-[#fcfae6] text-[#001e60] px-2.5 py-1 rounded-full border border-neutral-200/60">
                        {product.badge}
                      </span>
                    ) : (
                      <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">
                        {product.categoryLabel}
                      </span>
                    )}
                    <span className="text-xs font-bold text-neutral-500">{product.size}</span>
                  </div>

                  {/* Product Visual */}
                  <div
                    onClick={() => setActiveModalProduct(product)}
                    className="relative aspect-square w-full rounded-2xl bg-[#fcfae6]/70 flex items-center justify-center p-4 overflow-hidden cursor-pointer group-hover:bg-[#fcfae6] transition-colors mb-4"
                  >
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-[#001e60]/0 group-hover:bg-[#001e60]/5 transition-colors flex items-end justify-center pb-3 opacity-0 group-hover:opacity-100">
                      <span className="text-xs font-extrabold bg-white text-[#001e60] px-3 py-1 rounded-full shadow-xs">
                        {t.products.quickView}
                      </span>
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3
                    onClick={() => setActiveModalProduct(product)}
                    className="font-extrabold text-[18px] text-[#001e60] leading-snug hover:text-[#e8590c] transition-colors cursor-pointer"
                  >
                    {product.name}
                  </h3>
                  <p className="text-xs font-black text-[#e8590c] uppercase tracking-wider mt-1">
                    {product.tagline}
                  </p>
                  <p className="text-xs text-neutral-600 mt-2 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Flavor Profile Tags */}
                  <div className="flex flex-wrap gap-1 mt-3">
                    {product.flavorProfile.map((flavor, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-extrabold text-neutral-700 bg-neutral-100 px-2 py-0.5 rounded-md"
                      >
                        {flavor}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="pt-5 mt-4 border-t border-neutral-100 flex items-center gap-2">
                  <button
                    onClick={() => onOpenWhereToBuyWithProduct(product.name)}
                    className="flex-1 bg-[#001e60] hover:bg-[#00174c] text-white text-xs font-extrabold py-2.5 px-3 rounded-full transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <MapPin className="w-3.5 h-3.5 stroke-[2.5]" />
                    <span>{t.products.findInStore}</span>
                  </button>
                  <button
                    onClick={() => setActiveModalProduct(product)}
                    className="p-2.5 rounded-full hover:bg-neutral-100 text-[#001e60] transition-colors cursor-pointer"
                    aria-label={t.products.quickView}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Product Detail Modal */}
      {activeModalProduct && (
        <div
          id="product-detail-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#001e60]/70 backdrop-blur-xs animate-in fade-in"
          onClick={() => setActiveModalProduct(null)}
        >
          <div
            className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden text-[#001e60] p-6 sm:p-8 animate-in zoom-in-95"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-[#e8590c] bg-orange-50 px-2 py-0.5 rounded">
                  {activeModalProduct.categoryLabel}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#001e60] mt-1">
                  {activeModalProduct.name}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalProduct(null)}
                className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-[#001e60]"
              >
                ✕
              </button>
            </div>

            <div className="aspect-video w-full rounded-2xl bg-[#fcfae6] flex items-center justify-center p-6 mb-5 overflow-hidden">
              <img
                src={activeModalProduct.imageUrl}
                alt={activeModalProduct.name}
                className="w-full h-full object-contain mix-blend-multiply"
              />
            </div>

            <div className="space-y-3">
              <p className="text-sm font-medium text-neutral-700 leading-relaxed">
                {activeModalProduct.description}
              </p>

              <div className="grid grid-cols-2 gap-3 py-3 border-y border-neutral-100 text-xs">
                <div>
                  <span className="text-neutral-500 font-bold block uppercase tracking-wider text-[10px]">
                    {t.products.agingPeriod}
                  </span>
                  <span className="font-extrabold text-[#001e60] text-sm">
                    {activeModalProduct.agedDays
                      ? t.products.agedDaysText.replace('{days}', String(activeModalProduct.agedDays))
                      : t.products.freshCultured}
                  </span>
                </div>
                <div>
                  <span className="text-neutral-500 font-bold block uppercase tracking-wider text-[10px]">
                    {t.products.availableSizes}
                  </span>
                  <span className="font-extrabold text-[#001e60] text-sm">
                    {activeModalProduct.size}
                  </span>
                </div>
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  onClick={() => {
                    const name = activeModalProduct.name;
                    setActiveModalProduct(null);
                    onOpenWhereToBuyWithProduct(name);
                  }}
                  className="flex-1 bg-[#001e60] hover:bg-[#00174c] text-white font-extrabold py-3 rounded-full flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <MapPin className="w-4 h-4 stroke-[2.5]" />
                  <span>{t.products.findNearbyBtn}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
