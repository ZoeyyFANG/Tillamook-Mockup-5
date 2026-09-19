import { useState, useMemo } from 'react';
import { X, Search, ArrowRight, BookOpen, ShoppingBag } from 'lucide-react';
import { CHEESE_PRODUCTS, CHEESE_RECIPES } from '../data/cheeseData';
import { useLanguage } from '../context/LanguageContext';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (productId: string) => void;
  onSelectRecipe: (recipeId: string) => void;
}

export default function SearchModal({
  isOpen,
  onClose,
  onSelectProduct,
  onSelectRecipe,
}: SearchModalProps) {
  const [query, setQuery] = useState('');
  const { t } = useLanguage();

  const filteredProducts = useMemo(() => {
    if (!query.trim()) return CHEESE_PRODUCTS.slice(0, 4);
    const q = query.toLowerCase();
    return CHEESE_PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.categoryLabel.toLowerCase().includes(q) ||
        p.flavorProfile.some((f) => f.toLowerCase().includes(q))
    );
  }, [query]);

  const filteredRecipes = useMemo(() => {
    if (!query.trim()) return CHEESE_RECIPES;
    const q = query.toLowerCase();
    return CHEESE_RECIPES.filter(
      (r) =>
        r.title.toLowerCase().includes(q) ||
        r.cheeseUsed.toLowerCase().includes(q) ||
        r.ingredients.some((i) => i.toLowerCase().includes(q))
    );
  }, [query]);

  if (!isOpen) return null;

  return (
    <div
      id="search-modal-backdrop"
      className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-8 bg-[#001e60]/75 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="search-modal-content"
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-neutral-100 overflow-hidden text-[#001e60] mt-12 animate-in slide-in-from-top-4 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-5 sm:p-6 border-b border-neutral-100 flex items-center gap-3">
          <Search className="w-6 h-6 text-[#001e60] stroke-[2.5]" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.searchModal.placeholder}
            className="w-full text-lg sm:text-xl font-bold text-[#001e60] placeholder:text-neutral-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs font-bold text-neutral-400 hover:text-neutral-700 px-2 py-1"
            >
              {t.searchModal.clear}
            </button>
          )}
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-[#001e60] transition-colors"
          >
            <X className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

        {/* Quick Suggestion Pills */}
        <div className="px-6 py-2.5 bg-[#fcfae6] flex flex-wrap items-center gap-2 text-xs font-bold text-[#001e60]">
          <span className="text-neutral-500 uppercase tracking-wider text-[11px] font-black">{t.searchModal.popularLabel}:</span>
          {['Mozzarella Shreds', 'Sharp White Cheddar', 'Mac & Cheese', 'Aged 60 Days', 'Grilled Cheese'].map((term) => (
            <button
              key={term}
              onClick={() => setQuery(term)}
              className="bg-white/90 hover:bg-white px-2.5 py-1 rounded-full border border-neutral-200/60 transition-colors cursor-pointer"
            >
              {term}
            </button>
          ))}
        </div>

        {/* Search Results */}
        <div className="p-6 max-h-[60vh] overflow-y-auto space-y-6">
          {/* Products Results */}
          <div>
            <div className="flex items-center justify-between text-xs font-black uppercase tracking-wider text-neutral-500 mb-3">
              <span className="flex items-center gap-1.5">
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>{t.searchModal.dairyProductsTitle}</span>
              </span>
              <span>{filteredProducts.length} {t.searchModal.itemsCount}</span>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {filteredProducts.map((prod) => (
                  <button
                    key={prod.id}
                    onClick={() => {
                      onSelectProduct(prod.id);
                      onClose();
                    }}
                    className="p-3 text-left rounded-xl border border-neutral-100 hover:border-[#001e60] hover:bg-[#fcfae6]/40 transition-all flex items-start justify-between group cursor-pointer"
                  >
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-[#e8590c] bg-orange-50 px-1.5 py-0.5 rounded">
                        {prod.categoryLabel}
                      </span>
                      <h4 className="font-extrabold text-[15px] text-[#001e60] mt-1 group-hover:text-[#00174c]">
                        {prod.name}
                      </h4>
                      <p className="text-xs text-neutral-500 line-clamp-1 mt-0.5">{prod.tagline}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-[#001e60] group-hover:translate-x-1 transition-all shrink-0 mt-2" />
                  </button>
                ))}
              </div>
            ) : (
              <div className="text-sm text-neutral-500 py-2">{t.searchModal.noProducts}</div>
            )}
          </div>

          {/* Recipes Results */}
          <div>
            <div className="flex items-center justify-between text-xs font-black uppercase tracking-wider text-neutral-500 mb-3">
              <span className="flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                <span>{t.searchModal.recipesTitle}</span>
              </span>
              <span>{filteredRecipes.length} {t.searchModal.recipesCount}</span>
            </div>

            {filteredRecipes.length > 0 ? (
              <div className="space-y-2">
                {filteredRecipes.map((recipe) => (
                  <button
                    key={recipe.id}
                    onClick={() => {
                      onSelectRecipe(recipe.id);
                      onClose();
                    }}
                    className="w-full p-3 text-left rounded-xl border border-neutral-100 hover:border-[#001e60] hover:bg-[#fcfae6]/40 transition-all flex items-center justify-between group cursor-pointer"
                  >
                    <div>
                      <h4 className="font-extrabold text-[15px] text-[#001e60] group-hover:text-[#00174c]">
                        {recipe.title}
                      </h4>
                      <div className="text-xs text-neutral-500 mt-0.5">
                        Uses: <span className="font-bold text-[#001e60]">{recipe.cheeseUsed}</span> • {recipe.cookTime}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-[#001e60] group-hover:translate-x-1 transition-all shrink-0" />
                  </button>
                ))}
              </div>
            ) : (
              <div className="text-sm text-neutral-500 py-2">{t.searchModal.noRecipes}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
