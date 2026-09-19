import { useState } from 'react';
import { Clock, Users, ChefHat, ArrowRight, X, Check } from 'lucide-react';
import { CHEESE_RECIPES } from '../data/cheeseData';
import { Recipe } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface RecipesSectionProps {
  onOpenRecipeModal?: (recipeId: string) => void;
}

export default function RecipesSection({}: RecipesSectionProps) {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [checkedIngredients, setCheckedIngredients] = useState<Record<string, boolean>>({});
  const { t } = useLanguage();

  const toggleIngredient = (ing: string) => {
    setCheckedIngredients((prev) => ({ ...prev, [ing]: !prev[ing] }));
  };

  return (
    <section id="recipes" className="w-full bg-[#fcfae6] py-16 px-4 sm:px-6 lg:px-8 border-t border-neutral-200/60">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-[#e8590c] mb-2 bg-orange-100/60 px-3 py-1 rounded-full">
            <ChefHat className="w-3.5 h-3.5" />
            <span>{t.recipes.headerTag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#001e60] tracking-tight uppercase">
            {t.recipes.title}
          </h2>
          <p className="mt-3 text-base text-neutral-700 font-medium">
            {t.recipes.description}
          </p>
        </div>

        {/* Recipe Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CHEESE_RECIPES.map((recipe) => (
            <div
              key={recipe.id}
              id={`recipe-card-${recipe.id}`}
              className="bg-white rounded-3xl overflow-hidden border border-neutral-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Recipe Hero Image */}
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={recipe.imageUrl}
                    alt={recipe.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#001e60]/90 backdrop-blur-xs text-white text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full">
                    {recipe.difficulty === 'Easy' ? t.recipes.difficultyEasy : t.recipes.difficultyMedium}
                  </div>
                </div>

                {/* Recipe Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs font-bold text-neutral-500 mb-2">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#001e60]" />
                      {recipe.cookTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-[#001e60]" />
                      {recipe.servings}
                    </span>
                  </div>

                  <h3 className="font-black text-xl text-[#001e60] leading-snug group-hover:text-[#e8590c] transition-colors">
                    {t.recipes.recipesList[recipe.id]?.title || recipe.title}
                  </h3>

                  <p className="text-xs text-neutral-600 mt-2 font-medium leading-relaxed line-clamp-2">
                    {t.recipes.recipesList[recipe.id]?.description || recipe.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-neutral-100 text-xs">
                    <span className="text-neutral-400 font-bold block mb-1">{t.recipes.featuringCheese}</span>
                    <span className="font-extrabold text-[#001e60] bg-[#fcfae6] px-2.5 py-1 rounded-md inline-block">
                      {t.recipes.recipesList[recipe.id]?.cheeseUsed || recipe.cheeseUsed}
                    </span>
                  </div>
                </div>
              </div>

              {/* View Full Recipe Button */}
              <div className="p-6 pt-0">
                <button
                  id={`view-recipe-btn-${recipe.id}`}
                  onClick={() => {
                    setSelectedRecipe(recipe);
                    setCheckedIngredients({});
                  }}
                  className="w-full bg-[#fcfae6] hover:bg-[#001e60] text-[#001e60] hover:text-white font-extrabold text-sm py-3 px-4 rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer group/btn"
                >
                  <span>{t.recipes.viewRecipeBtn}</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recipe Detail Modal */}
      {selectedRecipe && (
        <div
          id="recipe-detail-modal-backdrop"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#001e60]/75 backdrop-blur-xs animate-in fade-in"
          onClick={() => setSelectedRecipe(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden text-[#001e60] max-h-[90vh] flex flex-col animate-in zoom-in-95"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 pb-4 border-b border-neutral-100 flex justify-between items-start">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-[#e8590c] bg-orange-50 px-2 py-0.5 rounded">
                  {t.recipes.recipesList[selectedRecipe.id]?.cheeseUsed || selectedRecipe.cheeseUsed}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#001e60] mt-1 tracking-tight">
                  {t.recipes.recipesList[selectedRecipe.id]?.title || selectedRecipe.title}
                </h3>
                <div className="flex items-center gap-4 text-xs font-bold text-neutral-500 mt-2">
                  <span>⏱ {selectedRecipe.cookTime}</span>
                  <span>🍽 {selectedRecipe.servings}</span>
                  <span>{selectedRecipe.difficulty === 'Easy' ? t.recipes.difficultyEasy : t.recipes.difficultyMedium}</span>
                </div>
              </div>

              <button
                onClick={() => setSelectedRecipe(null)}
                className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-[#001e60] shrink-0 cursor-pointer"
              >
                <X className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              <div>
                <h4 className="font-extrabold text-base text-[#001e60] uppercase tracking-wider mb-2">
                  {t.recipes.ingredientsChecklist}
                </h4>
                <div className="space-y-1.5 bg-[#fcfae6]/50 p-4 rounded-2xl border border-neutral-200/50">
                  {selectedRecipe.ingredients.map((ing, idx) => {
                    const isChecked = checkedIngredients[ing];
                    return (
                      <label
                        key={idx}
                        className="flex items-center gap-2.5 text-sm font-medium text-neutral-800 cursor-pointer select-none hover:text-[#001e60]"
                        onClick={() => toggleIngredient(ing)}
                      >
                        <span
                          className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors ${
                            isChecked
                              ? 'bg-[#001e60] border-[#001e60] text-white'
                              : 'bg-white border-neutral-300'
                          }`}
                        >
                          {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </span>
                        <span className={isChecked ? 'line-through text-neutral-400' : ''}>
                          {ing}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>

              <div>
                <h4 className="font-extrabold text-base text-[#001e60] uppercase tracking-wider mb-3">
                  {t.recipes.instructions}
                </h4>
                <ol className="space-y-3">
                  {selectedRecipe.steps.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-neutral-700 leading-relaxed">
                      <span className="w-6 h-6 rounded-full bg-[#001e60] text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="p-4 border-t border-neutral-100 bg-neutral-50 flex justify-end">
              <button
                onClick={() => setSelectedRecipe(null)}
                className="bg-[#001e60] text-white font-extrabold text-sm px-6 py-2.5 rounded-full hover:bg-[#00174c] cursor-pointer"
              >
                {t.recipes.closeRecipe}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
