/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Subnav from './components/Subnav';
import Hero from './components/Hero';
import CheeseCallout from './components/CheeseCallout';
import ProductsSection from './components/ProductsSection';
import RecipesSection from './components/RecipesSection';
import BrandStory from './components/BrandStory';
import Footer from './components/Footer';
import SignMeUpModal from './components/SignMeUpModal';
import WhereToBuyModal from './components/WhereToBuyModal';
import SearchModal from './components/SearchModal';
import { LanguageProvider } from './context/LanguageContext';

function TillamookAppContent() {
  const [currentCategory, setCurrentCategory] = useState('cheese');
  const [selectedProductFilter, setSelectedProductFilter] = useState('all');
  
  // Modals state
  const [isSignMeUpOpen, setIsSignMeUpOpen] = useState(false);
  const [isWhereToBuyOpen, setIsWhereToBuyOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedProductForStoreLocator, setSelectedProductForStoreLocator] = useState<string | undefined>();

  const handleOpenWhereToBuy = (productName?: string) => {
    setSelectedProductForStoreLocator(productName);
    setIsWhereToBuyOpen(true);
  };

  const handleScrollToProducts = () => {
    const el = document.getElementById('products-catalog');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectProductHighlight = (productId: string) => {
    handleScrollToProducts();
    // Highlight or filter
    const el = document.getElementById(`product-card-${productId}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      el.classList.add('ring-4', 'ring-[#001e60]');
      setTimeout(() => {
        el.classList.remove('ring-4', 'ring-[#001e60]');
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfae6] flex flex-col font-['GT_Walsheim_Pro',_'GT_Walsheim',_sans-serif] selection:bg-[#001e60] selection:text-white text-[#001e60]">
      {/* 1. Main Navigation Bar (#001e60) with Integrated Language Selector */}
      <Navbar
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenWhereToBuy={() => handleOpenWhereToBuy()}
        onSelectCategory={(cat) => {
          setSelectedProductFilter(cat);
          handleScrollToProducts();
        }}
      />

      {/* 2. Sub-Navigation Bar ("Cheese ⌄") */}
      <Subnav
        currentCategory={currentCategory}
        onCategoryChange={(cat) => {
          setCurrentCategory(cat);
          if (cat === 'cheese') {
            setSelectedProductFilter('all');
          } else {
            setSelectedProductFilter(cat);
          }
          handleScrollToProducts();
        }}
      />

      {/* 3. Hero Section (#fcfae6, Morning Star Weather Vane, "CHEESE FOR CHEESE LOVERS.", Product lineup photo, floating "SIGN ME UP" tab) */}
      <main className="flex-1">
        <Hero
          onOpenSignMeUp={() => setIsSignMeUpOpen(true)}
        />

        {/* Cheese Callout Banner (Matching screenshot: #001e60 card with top pointer notch, quote, and "SEE ALL CHEESE" pill) */}
        <CheeseCallout
          onSeeAllCheese={handleScrollToProducts}
        />

        {/* 4. Complete Cheese Products Catalog */}
        <ProductsSection
          selectedFilter={selectedProductFilter}
          onFilterChange={setSelectedProductFilter}
          onOpenWhereToBuyWithProduct={(productName) => handleOpenWhereToBuy(productName)}
        />

        {/* 5. Recipes for Cheese Lovers */}
        <RecipesSection />

        {/* 6. Brand Heritage, Certified B Corp & Creamery Visit */}
        <BrandStory />
      </main>

      {/* 7. Footer (#001e60) */}
      <Footer
        onOpenWhereToBuy={() => handleOpenWhereToBuy()}
        onOpenSignMeUp={() => setIsSignMeUpOpen(true)}
      />

      {/* Interactive Modals */}
      <SignMeUpModal
        isOpen={isSignMeUpOpen}
        onClose={() => setIsSignMeUpOpen(false)}
      />

      <WhereToBuyModal
        isOpen={isWhereToBuyOpen}
        onClose={() => {
          setIsWhereToBuyOpen(false);
          setSelectedProductForStoreLocator(undefined);
        }}
        selectedProductName={selectedProductForStoreLocator}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(productId) => {
          handleSelectProductHighlight(productId);
        }}
        onSelectRecipe={() => {
          const el = document.getElementById('recipes');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <TillamookAppContent />
    </LanguageProvider>
  );
}

