import { SupportedLanguage } from './types';

export interface Translations {
  globalNav: {
    brandGlobal: string;
    worldwide: string;
    selectLanguage: string;
    hoverHint: string;
    switchTo: string;
    activeLanguage: string;
    backToEnglish: string;
    teamLanguage: string;
    quickSwitch: string;
  };
  nav: {
    products: string;
    about: string;
    recipes: string;
    visit: string;
    whereToBuy: string;
    onlineShop: string;
    searchAria: string;
    menuAria: string;
  };
  subnav: {
    label: string;
    categories: {
      cheese: string;
      iceCream: string;
      creamCheese: string;
      yogurt: string;
      sourCream: string;
      butter: string;
    };
  };
  hero: {
    headlineLine1: string;
    headlineLine2: string;
    headlineLine3: string;
    headlineLine4: string;
    signMeUpTab: string;
    boatAlt: string;
    productsAlt: string;
  };
  cheeseCallout: {
    category: string;
    quote: string;
    seeAllCheese: string;
  };
  products: {
    estBadge: string;
    title: string;
    description: string;
    bCorpBadge: string;
    categories: {
      all: string;
      shreds: string;
      blocks: string;
      slices: string;
      snacks: string;
      reserve: string;
    };
    findInStore: string;
    quickView: string;
    agingPeriod: string;
    availableSizes: string;
    agedDaysText: string;
    freshCultured: string;
    findNearbyBtn: string;
    items: Record<string, {
      name: string;
      categoryLabel: string;
      badge?: string;
      tagline: string;
      description: string;
      flavorProfile: string[];
    }>;
  };
  recipes: {
    headerTag: string;
    title: string;
    description: string;
    featuringCheese: string;
    viewRecipeBtn: string;
    ingredientsChecklist: string;
    instructions: string;
    closeRecipe: string;
    difficultyEasy: string;
    difficultyMedium: string;
    recipesList: Record<string, {
      title: string;
      cookTime: string;
      servings: string;
      description: string;
      cheeseUsed: string;
    }>;
  };
  brandStory: {
    legacyTag: string;
    title: string;
    p1: string;
    p2: string;
    yearsCoop: string;
    yearsCoopLabel: string;
    hormoneFree: string;
    hormoneFreeLabel: string;
    bcorpTitle: string;
    bcorpDesc: string;
    coopBadge: string;
    cleanBadge: string;
    awardBadge: string;
    creameryTag: string;
    creameryTitle: string;
    creameryDesc: string;
    planVisit: string;
    creameryHours: string;
  };
  footer: {
    brandDesc: string;
    bcorp: string;
    productsTitle: string;
    ourStoryTitle: string;
    stayConnectedTitle: string;
    newsletterDesc: string;
    signUpBtn: string;
    copyright: string;
    fdaDisclaimer: string;
    varieties: string;
    farmstyleShreds: string;
    naturalBlocks: string;
    farmstyleSlices: string;
    snackPortions: string;
    makersReserve: string;
    coopHeritage: string;
    morningStarHistory: string;
    visitCreamery: string;
    kitchenRecipes: string;
    storeLocator: string;
  };
  whereToBuy: {
    tag: string;
    title: string;
    searchingFor: string;
    placeholder: string;
    searchBtn: string;
    popular: string;
    storesFound: string;
    directions: string;
    onlineShippingNote: string;
    shopOnline: string;
  };
  signMeUp: {
    badge: string;
    title: string;
    description: string;
    firstName: string;
    firstNamePlaceholder: string;
    zip: string;
    email: string;
    favoriteCheese: string;
    submitBtn: string;
    disclaimer: string;
    welcomeTitle: string;
    welcomeDesc: string;
    couponTitle: string;
    couponAmount: string;
    couponSub: string;
    activeCode: string;
    exploreBtn: string;
  };
  searchModal: {
    placeholder: string;
    clear: string;
    popularLabel: string;
    dairyProductsTitle: string;
    recipesTitle: string;
    itemsCount: string;
    recipesCount: string;
    noProducts: string;
    noRecipes: string;
    uses: string;
  };
}

export const TRANSLATIONS: Record<SupportedLanguage, Translations> = {
  // 1. ENGLISH (Default)
  en: {
    globalNav: {
      brandGlobal: 'Tillamook Global',
      worldwide: 'Farmer-Owned Co-op Since 1909',
      selectLanguage: 'Select Language',
      hoverHint: 'Switch to',
      switchTo: 'Switch to',
      activeLanguage: 'Active',
      backToEnglish: 'Switch back to English',
      teamLanguage: 'Team Language',
      quickSwitch: 'Language',
    },
    nav: {
      products: 'Products',
      about: 'About',
      recipes: 'Recipes',
      visit: 'Visit',
      whereToBuy: 'Where To Buy',
      onlineShop: 'Online Shop',
      searchAria: 'Search',
      menuAria: 'Toggle navigation menu',
    },
    subnav: {
      label: 'Cheese',
      categories: {
        cheese: 'Cheese',
        iceCream: 'Ice Cream',
        creamCheese: 'Cream Cheese',
        yogurt: 'Yogurt',
        sourCream: 'Sour Cream',
        butter: 'Butter',
      },
    },
    hero: {
      headlineLine1: 'CHEESE',
      headlineLine2: 'FOR',
      headlineLine3: 'CHEESE',
      headlineLine4: 'LOVERS.',
      signMeUpTab: 'SIGN ME UP',
      boatAlt: 'Tillamook Morning Star Schooner',
      productsAlt: 'Tillamook Cheese Collection - Whole Milk Mozzarella, Medium Cheddar, Sharp White, and Cheddar Snacks',
    },
    cheeseCallout: {
      category: 'CHEESE',
      quote: 'Life’s too short for “just okay” cheese. Or even “pretty good” cheese. So carpe some quality, delicious Tillamook Cheese for the best flavor. You’ll thank yourself later.',
      seeAllCheese: 'SEE ALL CHEESE',
    },
    products: {
      estBadge: 'Real Oregon Dairy • Est. 1909',
      title: 'Our Cheese Lineup',
      description: 'Made from fresh milk produced by well-cared-for cows. No artificial growth hormones (rBST)*, naturally aged, and crafted with uncompromising standards.',
      bCorpBadge: 'Certified B Corp • Farmer-Owned Co-op',
      categories: {
        all: 'All Cheese',
        shreds: 'Farmstyle Shreds',
        blocks: 'Natural Cheddars',
        slices: 'Farmstyle Slices',
        snacks: 'Snack Portions',
        reserve: 'Vintage Reserve',
      },
      findInStore: 'Find In Store',
      quickView: 'Quick View',
      agingPeriod: 'Aging Period',
      availableSizes: 'Available Sizes',
      agedDaysText: 'Naturally Aged {days} Days',
      freshCultured: 'Fresh Cultured',
      findNearbyBtn: 'Find in Nearby Grocery Stores',
      items: {
        'mozzarella-farmstyle-shreds': {
          name: 'Whole Milk Mozzarella Farmstyle Shreds',
          categoryLabel: 'Farmstyle Shreds',
          badge: 'Farmstyle Cut',
          tagline: 'Meltier, stretchier, creamier.',
          description: 'Thick cut from whole milk blocks for superior melt and rich, authentic flavor. Never powdered with excess starch.',
          flavorProfile: ['Creamy', 'Mild', 'Buttery Stretch'],
        },
        'medium-cheddar-block': {
          name: 'Medium Cheddar Cheese Block',
          categoryLabel: 'Natural Cheddars',
          badge: 'Iconic Favorite',
          tagline: 'Aged over 60 days.',
          description: 'Our iconic Oregon cheddar, naturally aged for over 60 days. Award-winning creamy texture with classic cheddar bite.',
          flavorProfile: ['Classic Cheddar', 'Smooth', 'Golden Cream'],
        },
        'sharp-white-cheddar-block': {
          name: 'Sharp White Cheddar Cheese',
          categoryLabel: 'Natural Cheddars',
          badge: 'Award Winner',
          tagline: 'Naturally aged 9+ months.',
          description: 'Naturally aged for over 9 months. Crafted with simple ingredients and no added color for a clean, sharp, crumbly finish.',
          flavorProfile: ['Bold', 'Tangy', 'Complex Sharpness'],
        },
        'cheddar-snack-portions': {
          name: 'Sharp Cheddar Snack Portions',
          categoryLabel: 'Snack Portions',
          badge: 'Grab & Go',
          tagline: '5g Protein per stick.',
          description: 'Real naturally aged cheddar, individually wrapped for snacking on hikes, lunchboxes, and road trips.',
          flavorProfile: ['Sharp', 'Portable', 'Creamy Bite'],
        },
        'colby-jack-slices': {
          name: 'Colby Jack Thick-Cut Farmstyle Slices',
          categoryLabel: 'Farmstyle Slices',
          badge: 'Farmstyle Slices',
          tagline: 'Thick cut for burgers.',
          description: 'Thickly sliced Colby and Monterey Jack swirled together for burger and sandwich perfection.',
          flavorProfile: ['Mellow', 'Creamy', 'Marbled'],
        },
        'maker-reserve-2021': {
          name: "Maker's Reserve 2021 Extra Sharp Cheddar",
          categoryLabel: 'Vintage Reserve',
          badge: 'Vintage 3-Yr',
          tagline: 'Aged over 3 years.',
          description: 'Vintage release aged over 3 years. Studded with delicate calcium lactate crystals for an exquisite crunch and deep savory richness.',
          flavorProfile: ['Nutty', 'Crunchy Crystals', 'Intense Umami'],
        },
        'pepper-jack-block': {
          name: 'Monterey Jack with Jalapeño Peppers',
          categoryLabel: 'Natural Cheddars',
          tagline: 'Real jalapeño peppers.',
          description: 'Creamy Monterey Jack cheese studded with diced red and green jalapeño peppers for a zesty, balanced kick.',
          flavorProfile: ['Zesty', 'Mild Heat', 'Melty'],
        },
        'four-cheese-mexican-blend': {
          name: 'Farmstyle Mexican Blend Shreds',
          categoryLabel: 'Farmstyle Shreds',
          tagline: 'Four cheese fiesta.',
          description: 'Thick shreds of Monterey Jack, Medium Cheddar, Queso Quesadilla, and Asadero cheese for tacos and quesadillas.',
          flavorProfile: ['Gooey Melt', 'Rich', 'Savory'],
        },
      },
    },
    recipes: {
      headerTag: 'Farmstyle Kitchen Creations',
      title: 'Recipes For Cheese Lovers',
      description: 'From bubbling baked mac & cheese to molten grilled sandwiches, every dish tastes richer when you start with real, award-winning Tillamook cheese.',
      featuringCheese: 'Featuring Cheese:',
      viewRecipeBtn: 'View Recipe & Method',
      ingredientsChecklist: 'Ingredients Checklist',
      instructions: 'Step-By-Step Instructions',
      closeRecipe: 'Close Recipe',
      difficultyEasy: 'Easy',
      difficultyMedium: 'Medium',
      recipesList: {
        'tillamook-mac-and-cheese': {
          title: 'The Ultimate Tillamook Baked Mac & Cheese',
          cookTime: '45 mins',
          servings: '6-8 servings',
          description: 'Made with a velvety roux of melted Tillamook Sharp White and Medium Cheddar, crowned with crunchy golden breadcrumbs.',
          cheeseUsed: 'Sharp White Cheddar & Medium Cheddar',
        },
        'skillet-margherita-pizza': {
          title: 'Cast-Iron Whole Milk Mozzarella Pizza',
          cookTime: '25 mins',
          servings: '3-4 servings',
          description: 'Crispy skillet crust laden with San Marzano tomato sauce, fresh basil, and blanketed in thick-cut Tillamook Mozzarella.',
          cheeseUsed: 'Whole Milk Mozzarella Farmstyle Shreds',
        },
        'gourmet-apple-cheddar-grilled-cheese': {
          title: 'Sharp White Cheddar & Honeycrisp Apple Melt',
          cookTime: '15 mins',
          servings: '2 servings',
          description: 'Thick sourdough slathered in butter, stuffed with sweet Honeycrisp apple slices, fresh thyme, and melted sharp white cheddar.',
          cheeseUsed: 'Sharp White Cheddar Block',
        },
      },
    },
    brandStory: {
      legacyTag: 'The Morning Star Legacy',
      title: 'Real Dairy Done Right Since 1909.',
      p1: 'Back in 1855, coastal Oregon dairy farmers pooled their timber and savings to build the legendary three-masted schooner ship, the Morning Star, so they could transport fresh wheels of cheese to market across treacherous seas.',
      p2: 'Today, that same spirit drives our farmer-owned cooperative. We never take shortcuts, we use only high quality ingredients, and we age our natural cheddars on cedar boards until flavor reaches perfection.',
      yearsCoop: '115+',
      yearsCoopLabel: 'Years of Co-op Farming',
      hormoneFree: '100%',
      hormoneFreeLabel: 'rBST Hormone Free Milk*',
      bcorpTitle: 'Certified B Corporation®',
      bcorpDesc: 'We meet the highest verified standards of social and environmental performance, transparency, and accountability to balance profit and purpose.',
      coopBadge: 'Farmer-Owned Cooperative',
      cleanBadge: 'Clean Ingredients',
      awardBadge: 'World Cheese Contest Winner',
      creameryTag: 'Tillamook, Oregon Coast',
      creameryTitle: 'Visit The Tillamook Creamery',
      creameryDesc: 'Step inside our world-famous visitors center. Watch cheese being packaged on the factory floor, sample fresh curds, taste exclusive ice cream flavors, and dine on farm-fresh chowder.',
      planVisit: 'Plan Your Visit',
      creameryHours: 'Open Daily 10 AM - 6 PM • Free Admission',
    },
    footer: {
      brandDesc: 'Farmer-owned cooperative founded in Tillamook County, Oregon in 1909. Real honest dairy made without compromises.',
      bcorp: 'Certified B Corporation®',
      productsTitle: 'Products',
      ourStoryTitle: 'Our Story',
      stayConnectedTitle: 'Stay Connected',
      newsletterDesc: 'Join our email herd for recipe inspiration, coupons, and news from Oregon.',
      signUpBtn: 'Sign Up For $1 Off',
      copyright: '© Tillamook County Creamery Association. All rights reserved.',
      fdaDisclaimer: '*All farmers who supply milk for Tillamook pledge not to use artificial growth hormones. The FDA has stated that no significant difference has been shown between milk derived from rBST treated and non-rBST treated cows.',
      varieties: 'Cheese Varieties',
      farmstyleShreds: 'Farmstyle Shreds',
      naturalBlocks: 'Natural Cheddar Blocks',
      farmstyleSlices: 'Farmstyle Slices',
      snackPortions: 'Snack Portions',
      makersReserve: 'Maker’s Reserve',
      coopHeritage: 'Farmer-Owned Co-op',
      morningStarHistory: 'Morning Star History',
      visitCreamery: 'Visit the Creamery',
      kitchenRecipes: 'Kitchen Recipes',
      storeLocator: 'Store Locator',
    },
    whereToBuy: {
      tag: 'Store Locator',
      title: 'Find Tillamook Near You',
      searchingFor: 'Searching for:',
      placeholder: 'Enter ZIP code or city (e.g. 97141 or Tillamook, OR)',
      searchBtn: 'Search',
      popular: 'Popular:',
      storesFound: 'Stores Carrying Tillamook Cheese ({count} found)',
      directions: 'Directions',
      onlineShippingNote: "Can't find it locally? We ship cold cheese loaves directly to your doorstep.",
      shopOnline: 'Shop Online',
    },
    signMeUp: {
      badge: 'Tillamook Insiders',
      title: 'Sign Me Up For Cheese.',
      description: 'Join the Tillamook family to receive delicious seasonal recipes, dairy club news, and a $1.00 OFF coupon for your next grocery trip.',
      firstName: 'First Name',
      firstNamePlaceholder: 'E.g., Sarah',
      zip: 'ZIP Code',
      email: 'Email Address',
      favoriteCheese: 'Favorite Tillamook Cheese',
      submitBtn: 'Claim $1.00 Coupon & Sign Up',
      disclaimer: 'By signing up, you agree to receive recipes & deals from Tillamook. Unsubscribe anytime.',
      welcomeTitle: 'Welcome to the Herd!',
      welcomeDesc: 'We just sent a welcome email with your coupon.',
      couponTitle: 'Retailer Coupon',
      couponAmount: '$1.00 OFF',
      couponSub: 'Any one (1) Tillamook® Cheese product (8 oz or larger)',
      activeCode: 'Active Code',
      exploreBtn: 'Start Exploring Cheeses',
    },
    searchModal: {
      placeholder: 'Search Tillamook cheeses, recipes, shreds, blocks...',
      clear: 'Clear',
      popularLabel: 'Popular:',
      dairyProductsTitle: 'Cheeses & Dairy Products',
      recipesTitle: 'Cheese Recipes',
      itemsCount: 'items',
      recipesCount: 'recipes',
      noProducts: 'No matching cheese products found.',
      noRecipes: 'No matching recipes found.',
      uses: 'Uses:',
    },
  },

  // 2. POLISH (Polski)
  pl: {
    globalNav: {
      brandGlobal: 'Tillamook Globalny',
      worldwide: 'Spółdzielnia farmerska od 1909 roku',
      selectLanguage: 'Wybierz język',
      hoverHint: 'Przełącz na',
      switchTo: 'Przełącz na',
      activeLanguage: 'Aktywny',
      backToEnglish: 'Wróć do języka angielskiego (English)',
      teamLanguage: 'Język zespołu',
      quickSwitch: 'Język',
    },
    nav: {
      products: 'Produkty',
      about: 'O nas',
      recipes: 'Przepisy',
      visit: 'Odwiedź nas',
      whereToBuy: 'Gdzie kupić',
      onlineShop: 'Sklep online',
      searchAria: 'Szukaj',
      menuAria: 'Rozwiń menu nawigacji',
    },
    subnav: {
      label: 'Ser',
      categories: {
        cheese: 'Ser',
        iceCream: 'Lody',
        creamCheese: 'Serek śmietankowy',
        yogurt: 'Jogurt',
        sourCream: 'Śmietana',
        butter: 'Masło',
      },
    },
    hero: {
      headlineLine1: 'SER',
      headlineLine2: 'DLA',
      headlineLine3: 'MIŁOŚNIKÓW',
      headlineLine4: 'SERA.',
      signMeUpTab: 'ZAPISZ SIĘ',
      boatAlt: 'Szkuner Tillamook Morning Star',
      productsAlt: 'Kolekcja serów Tillamook - Mozzarella z pełnego mleka, Średni Cheddar, Ostry biały i Przekąski Cheddar',
    },
    cheeseCallout: {
      category: 'SER',
      quote: 'Życie jest zbyt krótkie na „przeciętny” ser. Albo nawet na ser „całkiem niezły”. Sięgnij po wyśmienity, pełen smaku ser Tillamook i poczuj prawdziwą różnicę. Twoje podniebienie Ci podziękuje.',
      seeAllCheese: 'ZOBACZ WSZYSTKIE SERY',
    },
    products: {
      estBadge: 'Prawdziwy nabiał z Oregonu • Od 1909',
      title: 'Nasza linia serów',
      description: 'Wytwarzany ze świeżego mleka od zadbanych krów. Bez sztucznych hormonów wzrostu (rBST)*, naturalnie dojrzewający i tworzony z bezkompromisową dbałością o jakość.',
      bCorpBadge: 'Certyfikat B Corp • Spółdzielnia rolnicza',
      categories: {
        all: 'Wszystkie sery',
        shreds: 'Ser tarty farmerski',
        blocks: 'Naturalne bloki Cheddar',
        slices: 'Plastry farmerskie',
        snacks: 'Porcje przekąskowe',
        reserve: 'Edycja Vintage Reserve',
      },
      findInStore: 'Znajdź w sklepie',
      quickView: 'Szybki podgląd',
      agingPeriod: 'Okres dojrzewania',
      availableSizes: 'Dostępne gramatury',
      agedDaysText: 'Dojrzewa naturalnie {days} dni',
      freshCultured: 'Świeży ser żywy',
      findNearbyBtn: 'Znajdź w najbliższych sklepach',
      items: {
        'mozzarella-farmstyle-shreds': {
          name: 'Tarta Mozzarella z Pełnego Mleka',
          categoryLabel: 'Tarty ser farmerski',
          badge: 'Grube cięcie farmerskie',
          tagline: 'Lepiej się topi, bardziej ciągnie i ma aksamitny smak.',
          description: 'Grubo cięta z bloków pełnego mleka dla doskonałego topnienia i głębokiego, autentycznego aromatu. Bez zbędnego posypywania skrobią.',
          flavorProfile: ['Kremowy', 'Łagodny', 'Maślana ciągliwość'],
        },
        'medium-cheddar-block': {
          name: 'Cheddar Średni w Bloku',
          categoryLabel: 'Naturalne Cheddary',
          badge: 'Kultowy faworyt',
          tagline: 'Dojrzewa ponad 60 dni.',
          description: 'Nasz kultowy cheddar z Oregonu, naturalnie dojrzewający przez ponad 60 dni. Wielokrotnie nagradzana kremowa konsystencja z klasycznym akcentem cheddara.',
          flavorProfile: ['Klasyczny Cheddar', 'Aksamitny', 'Złocista śmietanka'],
        },
        'sharp-white-cheddar-block': {
          name: 'Ostry Biały Cheddar',
          categoryLabel: 'Naturalne Cheddary',
          badge: 'Zdobywca nagród',
          tagline: 'Dojrzewa naturalnie 9+ miesięcy.',
          description: 'Naturalnie leżakowany przez ponad 9 miesięcy. Proste składniki i brak barwników zapewniają czysty, wyrazisty, delikatnie kruchy finisz.',
          flavorProfile: ['Wyrazisty', 'Pikantny', 'Złożona ostrość'],
        },
        'cheddar-snack-portions': {
          name: 'Cheddar Przekąskowy w Paluszkach',
          categoryLabel: 'Porcje przekąskowe',
          badge: 'Przekąska w drogę',
          tagline: '5g białka w każdej porcji.',
          description: 'Prawdziwy, naturalnie dojrzewający cheddar, pakowany pojedynczo – idealny na wędrówki, do lunchboxa i na wycieczki samochodowe.',
          flavorProfile: ['Wyrazisty', 'Wygodny', 'Kremowy kęs'],
        },
        'colby-jack-slices': {
          name: 'Grube Plastry Colby Jack',
          categoryLabel: 'Plastry farmerskie',
          badge: 'Plastry na burgery',
          tagline: 'Grube cięcie do burgerów.',
          description: 'Grubo krojone sery Colby i Monterey Jack wymieszane w marmurkowy wzór – stworzone do idealnych burgerów i tostów.',
          flavorProfile: ['Łagodny', 'Kremowy', 'Marmurkowy'],
        },
        'maker-reserve-2021': {
          name: "Maker's Reserve 2021 Ekstra Ostry",
          categoryLabel: 'Vintage Reserve',
          badge: 'Rocznik 3-letni',
          tagline: 'Dojrzewa ponad 3 lata.',
          description: 'Rocznik leżakowany ponad 3 lata. Oprószony delikatnymi kryształkami mleczanu wapnia, dającymi wspaniałą chrupkość i głęboki smak umami.',
          flavorProfile: ['Orzechowy', 'Chrupiące kryształki', 'Głębokie umami'],
        },
        'pepper-jack-block': {
          name: 'Monterey Jack z Papryczkami Jalapeño',
          categoryLabel: 'Naturalne Cheddary',
          tagline: 'Prawdziwe papryczki jalapeño.',
          description: 'Kremowy ser Monterey Jack z dodatkiem kawałków czerwonych i zielonych papryczek jalapeño dla pikantnego, zbalansowanego smaku.',
          flavorProfile: ['Pikantny', 'Przyjemna ostrość', 'Dobrze topliwy'],
        },
        'four-cheese-mexican-blend': {
          name: 'Meksykańska Mieszanka Czterech Serów',
          categoryLabel: 'Tarty ser farmerski',
          tagline: 'Fiesta czterech serów.',
          description: 'Grube wiórki sera Monterey Jack, Średniego Cheddara, Queso Quesadilla i Asadero – idealne do taco i quesadilli.',
          flavorProfile: ['Ciągliwy stop', 'Bogaty', 'Wytrawny'],
        },
      },
    },
    recipes: {
      headerTag: 'Kreacje z kuchni farmerskiej',
      title: 'Przepisy dla miłośników sera',
      description: 'Od zapiekanego, bulgoczącego mac & cheese po gorące tosty z płynnym serem – każde danie smakuje lepiej z prawdziwym serem Tillamook.',
      featuringCheese: 'Główny ser:',
      viewRecipeBtn: 'Zobacz przepis i sposób przygotowania',
      ingredientsChecklist: 'Lista składników',
      instructions: 'Instrukcja krok po kroku',
      closeRecipe: 'Zamknij przepis',
      difficultyEasy: 'Łatwy',
      difficultyMedium: 'Średni',
      recipesList: {
        'tillamook-mac-and-cheese': {
          title: 'Legendarny Zapiekany Mac & Cheese Tillamook',
          cookTime: '45 min',
          servings: '6-8 porcji',
          description: 'Aksamitny sos beszamelowy ze stopionym Ostrym Białym i Średnim Cheddarem, posypany chrupiącą złocistą bułką tartą.',
          cheeseUsed: 'Ostry Biały Cheddar & Średni Cheddar',
        },
        'skillet-margherita-pizza': {
          title: 'Pizza na Patelni Żeliwnej z Mozzarellą',
          cookTime: '25 min',
          servings: '3-4 porcje',
          description: 'Chrupiące ciasto z patelni z sosem pomidorowym San Marzano, świeżą bazylią i obfitą warstwą Mozzarelli Tillamook.',
          cheeseUsed: 'Tarta Mozzarella z Pełnego Mleka',
        },
        'gourmet-apple-cheddar-grilled-cheese': {
          title: 'Tost z Ostrym Cheddarem i Jabłkiem Honeycrisp',
          cookTime: '15 min',
          servings: '2 porcje',
          description: 'Gruby chleb na zakwasie posmarowany masłem, nadziewany słodkimi plasterkami jabłka, świeżym tymiankiem i roztopionym cheddarem.',
          cheeseUsed: 'Ostry Biały Cheddar w Bloku',
        },
      },
    },
    brandStory: {
      legacyTag: 'Dziedzictwo Szkunera Morning Star',
      title: 'Prawdziwy nabiał robiony z sercem od 1909 roku.',
      p1: 'W 1855 roku farmerzy z wybrzeża Oregonu połączyli swoje oszczędności i drewno, aby zbudować legendarny trójmasztowy szkuner Morning Star i transportować świeże kręgi sera przez wzburzone fale.',
      p2: 'Dziś ten sam pionierski duch napędza naszą spółdzielnię. Nigdy nie idziemy na skróty, wybieramy wyłącznie najwyższej jakości składniki i leżakujemy cheddary na deskach cedrowych.',
      yearsCoop: '115+',
      yearsCoopLabel: 'Lat spółdzielni rolniczej',
      hormoneFree: '100%',
      hormoneFreeLabel: 'Mleko bez hormonów rBST*',
      bcorpTitle: 'Certyfikowana B Corporation®',
      bcorpDesc: 'Spełniamy najwyższe zweryfikowane standardy odpowiedzialności społecznej, ekologicznej i przejrzystości, łącząc misję z najwyższą jakością.',
      coopBadge: 'Spółdzielnia rolnicza',
      cleanBadge: 'Czyste składniki',
      awardBadge: 'Laureat Światowych Konkursów Serowarskich',
      creameryTag: 'Tillamook, Wybrzeże Oregonu',
      creameryTitle: 'Odwiedź Serowarnię Tillamook',
      creameryDesc: 'Zajrzyj do naszego słynnego centrum dla zwiedzających. Zobacz pakowanie sera, skosztuj świeżego twarogu i spróbuj unikalnych smaków lodów.',
      planVisit: 'Zaplanuj wizytę',
      creameryHours: 'Otwarte codziennie 10:00 - 18:00 • Wstęp bezpłatny',
    },
    footer: {
      brandDesc: 'Spółdzielnia rolnicza założona w hrabstwie Tillamook w Oregonie w 1909 r. Uczciwy, prawdziwy nabiał bez żadnych kompromisów.',
      bcorp: 'Certyfikowana B Corporation®',
      productsTitle: 'Produkty',
      ourStoryTitle: 'Nasza historia',
      stayConnectedTitle: 'Bądź w kontakcie',
      newsletterDesc: 'Dołącz do naszego klubu i otrzymuj inspirujące przepisy, kupony oraz wiadomości z Oregonu.',
      signUpBtn: 'Zapisz się i odbierz kupon $1',
      copyright: '© Stowarzyszenie Serowarskie Hrabstwa Tillamook. Wszelkie prawa zastrzeżone.',
      fdaDisclaimer: '*Wszyscy nasi dostawcy mleka zobowiązują się do niestosowania sztucznych hormonów wzrostu. FDA potwierdza brak istotnej różnicy między mlekiem od krów leczonych i nieleczonych rBST.',
      varieties: 'Gatunki sera',
      farmstyleShreds: 'Ser tarty farmerski',
      naturalBlocks: 'Naturalne bloki Cheddara',
      farmstyleSlices: 'Plastry farmerskie',
      snackPortions: 'Porcje przekąskowe',
      makersReserve: 'Rezerwa Mistrzowska',
      coopHeritage: 'Spółdzielnia rolnicza',
      morningStarHistory: 'Historia szkunera Morning Star',
      visitCreamery: 'Odwiedź serowarnię',
      kitchenRecipes: 'Przepisy kulinarne',
      storeLocator: 'Lokalizator sklepów',
    },
    whereToBuy: {
      tag: 'Lokalizator sklepów',
      title: 'Znajdź Tillamook blisko Ciebie',
      searchingFor: 'Szukasz:',
      placeholder: 'Wpisz kod pocztowy lub miasto (np. 97141 lub Tillamook)',
      searchBtn: 'Szukaj',
      popular: 'Popularne:',
      storesFound: 'Sklepy z serem Tillamook (znaleziono {count})',
      directions: 'Trasa dojazdu',
      onlineShippingNote: 'Nie możesz znaleźć w okolicy? Wysyłamy schłodzony ser prosto pod Twoje drzwi.',
      shopOnline: 'Kup online',
    },
    signMeUp: {
      badge: 'Klub Przyjaciół Tillamook',
      title: 'Zapisz się po więcej sera.',
      description: 'Dołącz do rodziny Tillamook, aby otrzymywać pyszne przepisy sezonowe i kupon zniżkowy o wartości $1.00 na najbliższe zakupy.',
      firstName: 'Imię',
      firstNamePlaceholder: 'Np. Joanna',
      zip: 'Kod pocztowy',
      email: 'Adres e-mail',
      favoriteCheese: 'Ulubiony ser Tillamook',
      submitBtn: 'Odbierz kupon $1.00 i zapisz się',
      disclaimer: 'Rejestrując się, zgadzasz się otrzymywać przepisy i oferty. Możesz zrezygnować w każdej chwili.',
      welcomeTitle: 'Witaj w naszej farmerskiej rodzinie!',
      welcomeDesc: 'Właśnie wysłaliśmy wiadomość powitalną wraz z Twoim kuponem.',
      couponTitle: 'Kupon sklepowy',
      couponAmount: '$1.00 ZNIŻKI',
      couponSub: 'Na dowolny jeden (1) ser Tillamook® (220g lub większy)',
      activeCode: 'Aktywny kod',
      exploreBtn: 'Przeglądaj sery',
    },
    searchModal: {
      placeholder: 'Szukaj serów, przepisów, wiórków, bloków Tillamook...',
      clear: 'Wyczyść',
      popularLabel: 'Popularne:',
      dairyProductsTitle: 'Sery i produkty nabiałowe',
      recipesTitle: 'Przepisy z serem',
      itemsCount: 'produktów',
      recipesCount: 'przepisów',
      noProducts: 'Nie znaleziono pasujących produktów serowych.',
      noRecipes: 'Nie znaleziono pasujących przepisów.',
      uses: 'Zawiera ser:',
    },
  },

  // 3. CZECH (Čeština)
  cs: {
    globalNav: {
      brandGlobal: 'Tillamook Globální',
      worldwide: 'Farmářské družstvo založené v roce 1909',
      selectLanguage: 'Vyberte jazyk',
      hoverHint: 'Přepnout na',
      switchTo: 'Přepnout na',
      activeLanguage: 'Aktivní',
      backToEnglish: 'Přepnout zpět do angličtiny (English)',
      teamLanguage: 'Jazyk týmu',
      quickSwitch: 'Jazyk',
    },
    nav: {
      products: 'Produkty',
      about: 'O nás',
      recipes: 'Recepty',
      visit: 'Navštivte nás',
      whereToBuy: 'Kde koupit',
      onlineShop: 'Online obchod',
      searchAria: 'Hledat',
      menuAria: 'Otevřít navigační menu',
    },
    subnav: {
      label: 'Sýr',
      categories: {
        cheese: 'Sýr',
        iceCream: 'Zmrzlina',
        creamCheese: 'Smetanový sýr',
        yogurt: 'Jogurt',
        sourCream: 'Zakysaná smetana',
        butter: 'Máslo',
      },
    },
    hero: {
      headlineLine1: 'SÝR',
      headlineLine2: 'PRO',
      headlineLine3: 'MILOVNÍKY',
      headlineLine4: 'SÝRA.',
      signMeUpTab: 'PŘIHLÁSIT SE',
      boatAlt: 'Škuner Tillamook Morning Star',
      productsAlt: 'Kolekce sýrů Tillamook - Plnotučná mozzarella, Střední čedar, Ostrý bílý čedar a Sýrové svačinky',
    },
    cheeseCallout: {
      category: 'SÝR',
      quote: 'Život je příliš krátký na „obyčejný“ nebo „docela ujde“ sýr. Dopřejte si prémiový, lahodný sýr Tillamook s poctivou chutí. Vaše chuťové buňky vám poděkují.',
      seeAllCheese: 'ZOBRAZIT VŠECHNY SÝRY',
    },
    products: {
      estBadge: 'Pravé oregonské mléko • Od roku 1909',
      title: 'Naše nabídka sýrů',
      description: 'Vyrobeno z čerstvého mléka od spokojených krav. Žádné umělé růstové hormony (rBST)*, přírodní zrání a nekompromisní standardy kvality.',
      bCorpBadge: 'Certifikace B Corp • Farmářské družstvo',
      categories: {
        all: 'Všechny sýry',
        shreds: 'Farmářský strouhaný',
        blocks: 'Přírodní bloky čedaru',
        slices: 'Farmářské plátky',
        snacks: 'Svačinové porce',
        reserve: 'Výběrová rezerva Vintage',
      },
      findInStore: 'Najít v obchodě',
      quickView: 'Rychlý náhled',
      agingPeriod: 'Doba zrání',
      availableSizes: 'Dostupná balení',
      agedDaysText: 'Přírodně zrálo {days} dní',
      freshCultured: 'Čerstvě kultivovaný',
      findNearbyBtn: 'Vyhledat v okolních obchodech',
      items: {
        'mozzarella-farmstyle-shreds': {
          name: 'Plnotučná Mozzarella Farmářské nudličky',
          categoryLabel: 'Strouhaný sýr',
          badge: 'Hrubý farmářský řez',
          tagline: 'Lépe se taví, krásně se táhne a je krémovější.',
          description: 'Hrubě strouháno z bloků plnotučného mléka pro dokonalé roztavení a plnou chuť. Žádný nadbytečný škrob.',
          flavorProfile: ['Krémový', 'Jemný', 'Máslově táhlý'],
        },
        'medium-cheddar-block': {
          name: 'Střední Čedar v bloku',
          categoryLabel: 'Přírodní čedary',
          badge: 'Oblíbená klasika',
          tagline: 'Zrálo více než 60 dní.',
          description: 'Náš ikonický oregonský čedar zrající přirozeně přes 60 dní. Oceněná krémová textura s charakteristickým čedarovým řízem.',
          flavorProfile: ['Klasický čedar', 'Hladký', 'Zlatavě smetanový'],
        },
        'sharp-white-cheddar-block': {
          name: 'Ostrý bílý čedar',
          categoryLabel: 'Přírodní čedary',
          badge: 'Vítěz soutěží',
          tagline: 'Přírodně zrálo 9+ měsíců.',
          description: 'Přirozeně zraje déle než 9 měsíců. Čisté suroviny bez přidaných barviv pro čistý, výrazný a jemně drobivý závěr.',
          flavorProfile: ['Výrazný', 'Pikantní', 'Komplexní ostrost'],
        },
        'cheddar-snack-portions': {
          name: 'Čedarové svačinkové tyčinky',
          categoryLabel: 'Svačinové porce',
          badge: 'Svačinka na cesty',
          tagline: '5 g bílkovin v jedné tyčince.',
          description: 'Pravý přírodně vyzrálý čedar v praktickém balení – skvělý na výlety, do práce i na cesty autem.',
          flavorProfile: ['Výrazný', 'Praktický', 'Krémové zakousnutí'],
        },
        'colby-jack-slices': {
          name: 'Silné plátky Colby Jack',
          categoryLabel: 'Farmářské plátky',
          badge: 'Plátky na burger',
          tagline: 'Silný řez pro burgery.',
          description: 'Poctivě silné plátky směsi Colby a Monterey Jack pro nejlepší burgery a teplé sendviče.',
          flavorProfile: ['Jemný', 'Krémový', 'Mramorovaný'],
        },
        'maker-reserve-2021': {
          name: "Maker's Reserve 2021 Extra ostrý čedar",
          categoryLabel: 'Výběrová rezerva',
          badge: 'Ročník 3 roky',
          tagline: 'Zrálo déle než 3 roky.',
          description: 'Exkluzivní ročník zrající více než 3 roky. S jemnými krystalky laktátu vápenatého pro křupavý zážitek a bohatou umami chuť.',
          flavorProfile: ['Oříškový', 'Křupavé krystalky', 'Intenzivní umami'],
        },
        'pepper-jack-block': {
          name: 'Monterey Jack s papričkami Jalapeño',
          categoryLabel: 'Přírodní čedary',
          tagline: 'Pravé kousky jalapeño papriček.',
          description: 'Jemný sýr Monterey Jack doplněný červenými a zelenými kousky papriček jalapeño pro příjemně pikantní chuť.',
          flavorProfile: ['Pikantní', 'Jemně pálivý', 'Tavný'],
        },
        'four-cheese-mexican-blend': {
          name: 'Mexická směs čtyř sýrů',
          categoryLabel: 'Strouhaný sýr',
          tagline: 'Fiesta čtyř lahodných sýrů.',
          description: 'Silné nudličky sýrů Monterey Jack, Středního čedaru, Quesadilla a Asadero pro pravé mexické tacos a quesadilly.',
          flavorProfile: ['Krásně se táhne', 'Bohatý', 'Lahodný'],
        },
      },
    },
    recipes: {
      headerTag: 'Recepty z farmářské kuchyně',
      title: 'Recepty pro milovníky sýra',
      description: 'Od bublajícího pečeného mac & cheese po křupavé zapečené sendviče – vše chutná lépe s pravým sýrem Tillamook.',
      featuringCheese: 'Obsahuje sýr:',
      viewRecipeBtn: 'Zobrazit recept a postup',
      ingredientsChecklist: 'Seznam surovin',
      instructions: 'Podrobný postup',
      closeRecipe: 'Zavřít recept',
      difficultyEasy: 'Snadné',
      difficultyMedium: 'Střední',
      recipesList: {
        'tillamook-mac-and-cheese': {
          title: 'Pečené těstoviny Mac & Cheese Tillamook',
          cookTime: '45 min',
          servings: '6-8 porcí',
          description: 'Smetanová omáčka z rozpuštěného bílého a středního čedaru s křupavou zlatavou strouhankou.',
          cheeseUsed: 'Ostrý bílý čedar a Střední čedar',
        },
        'skillet-margherita-pizza': {
          title: 'Litinová pizza s mozzarellou z plnotučného mléka',
          cookTime: '25 min',
          servings: '3-4 porce',
          description: 'Křupavé těsto s rajčaty San Marzano, čerstvou bazalkou a štědrou porcí sýra Tillamook.',
          cheeseUsed: 'Plnotučná mozzarella strouhaná',
        },
        'gourmet-apple-cheddar-grilled-cheese': {
          title: 'Zapečený chléb s čedarem a jablkem Honeycrisp',
          cookTime: '15 min',
          servings: '2 porce',
          description: 'Silné plátky kváskového chleba s máslem, jablky, tymiánem a rozpuštěným bílým čedarem.',
          cheeseUsed: 'Ostrý bílý čedar v bloku',
        },
      },
    },
    brandStory: {
      legacyTag: 'Příběh lodi Morning Star',
      title: 'Poctivé mlékařství od roku 1909.',
      p1: 'V roce 1855 farmáři z pobřeží Oregonu spojili své dřevo a úspory a postavili legendární třístěžňový škuner Morning Star, aby mohli převážet čerstvý sýr přes nebezpečné moře.',
      p2: 'Dnes stejný duch vede naše družstvo. Nikdy nehledáme zkratky, používáme jen nejlepší suroviny a necháváme čedar zrát na cedrových prknech.',
      yearsCoop: '115+',
      yearsCoopLabel: 'Let farmářského družstva',
      hormoneFree: '100%',
      hormoneFreeLabel: 'Mléko bez hormonů rBST*',
      bcorpTitle: 'Certifikovaná B Corporation®',
      bcorpDesc: 'Splňujeme nejvyšší ověřené standardy sociální a ekologické odpovědnosti a transparentnosti.',
      coopBadge: 'Farmářské družstvo',
      cleanBadge: 'Čisté složení',
      awardBadge: 'Vítěz Světové sýrařské soutěže',
      creameryTag: 'Tillamook, Pobřeží Oregonu',
      creameryTitle: 'Navštivte sýrárnu Tillamook',
      creameryDesc: 'Zavítejte do našeho návštěvnického centra. Sledujte balení sýra, ochutnejte čerstvý tvaroh a výtečnou zmrzlinu.',
      planVisit: 'Naplánovat návštěvu',
      creameryHours: 'Otevřeno denně 10:00 - 18:00 • Vstup zdarma',
    },
    footer: {
      brandDesc: 'Farmářské družstvo založené v Tillamooku v Oregonu v roce 1909. Poctivý mléčný produkt bez kompromisů.',
      bcorp: 'Certifikovaná B Corporation®',
      productsTitle: 'Produkty',
      ourStoryTitle: 'Náš příběh',
      stayConnectedTitle: 'Zůstaňte ve spojení',
      newsletterDesc: 'Zaregistrujte se k odběru receptů, slevových kuponů a novinek z Oregonu.',
      signUpBtn: 'Získat slevu $1',
      copyright: '© Tillamook County Creamery Association. Všechna práva vyhrazena.',
      fdaDisclaimer: '*Všichni naši farmáři se zavázali nepoužívat umělé růstové hormony. Úřad FDA potvrdil, že nebyl zjištěn žádný významný rozdíl mezi mlékem s rBST a bez něj.',
      varieties: 'Druhy sýrů',
      farmstyleShreds: 'Farmářský strouhaný',
      naturalBlocks: 'Bloky čedaru',
      farmstyleSlices: 'Plátky sýra',
      snackPortions: 'Svačinové porce',
      makersReserve: 'Výběrová rezerva',
      coopHeritage: 'Farmářské družstvo',
      morningStarHistory: 'Historie Morning Star',
      visitCreamery: 'Návštěva sýrárny',
      kitchenRecipes: 'Kuchařské recepty',
      storeLocator: 'Vyhledávač obchodů',
    },
    whereToBuy: {
      tag: 'Kde koupit',
      title: 'Najděte Tillamook ve svém okolí',
      searchingFor: 'Hledáte:',
      placeholder: 'Zadejte PSČ nebo město (např. 97141 nebo Tillamook)',
      searchBtn: 'Hledat',
      popular: 'Časté:',
      storesFound: 'Obchody se sýry Tillamook ({count} nalezeno)',
      directions: 'Navigovat',
      onlineShippingNote: 'Nemáte obchod poblíž? Zasíláme chlazený sýr přímo k vám domů.',
      shopOnline: 'Koupit online',
    },
    signMeUp: {
      badge: 'Členové Tillamook',
      title: 'Přihlaste se k odběru sýrových novinek.',
      description: 'Staňte se součástí rodiny Tillamook a získejte skvělé sezónní recepty a kupon na slevu $1.00 při příštím nákupu.',
      firstName: 'Jméno',
      firstNamePlaceholder: 'Např. Jana',
      zip: 'PSČ',
      email: 'E-mailová adresa',
      favoriteCheese: 'Oblíbený sýr Tillamook',
      submitBtn: 'Získat kupon $1.00 a přihlásit se',
      disclaimer: 'Odesláním souhlasíte se zasíláním novinek a receptů. Odběr můžete kdykoliv zrušit.',
      welcomeTitle: 'Vítejte v naší rodině!',
      welcomeDesc: 'Na váš e-mail jsme zaslali uvítací zprávu se slevovým kuponem.',
      couponTitle: 'Obchodní kupon',
      couponAmount: 'SLEVA $1.00',
      couponSub: 'Na libovolný 1 produkt Tillamook® Cheese (od 220 g)',
      activeCode: 'Platný kód',
      exploreBtn: 'Objevovat sýry',
    },
    searchModal: {
      placeholder: 'Hledat sýry Tillamook, recepty, strouhané, bloky...',
      clear: 'Vymazat',
      popularLabel: 'Populární:',
      dairyProductsTitle: 'Sýry a mléčné výrobky',
      recipesTitle: 'Sýrové recepty',
      itemsCount: 'položek',
      recipesCount: 'receptů',
      noProducts: 'Nebyly nalezeny žádné odpovídající sýry.',
      noRecipes: 'Nebyly nalezeny žádné odpovídající recepty.',
      uses: 'Používá:',
    },
  },

  // 4. TURKISH (Türkçe)
  tr: {
    globalNav: {
      brandGlobal: 'Tillamook Küresel',
      worldwide: '1909’dan Beri Çiftçi Kooperatifi',
      selectLanguage: 'Dil Seçin',
      hoverHint: 'Şuna geç',
      switchTo: 'Şuna geç',
      activeLanguage: 'Aktif',
      backToEnglish: 'İngilizceye Geri Dön (English)',
      teamLanguage: 'Takım Dili',
      quickSwitch: 'Dil',
    },
    nav: {
      products: 'Ürünler',
      about: 'Hakkımızda',
      recipes: 'Tarifler',
      visit: 'Ziyaret Et',
      whereToBuy: 'Nereden Alınır',
      onlineShop: 'Online Mağaza',
      searchAria: 'Ara',
      menuAria: 'Gezinme menüsünü aç',
    },
    subnav: {
      label: 'Peynir',
      categories: {
        cheese: 'Peynir',
        iceCream: 'Dondurma',
        creamCheese: 'Krem Peynir',
        yogurt: 'Yoğurt',
        sourCream: 'Ekşi Krema',
        butter: 'Tereyağı',
      },
    },
    hero: {
      headlineLine1: 'PEYNİR',
      headlineLine2: 'SEVENLER',
      headlineLine3: 'İÇİN',
      headlineLine4: 'PEYNİR.',
      signMeUpTab: 'KAYIT OL',
      boatAlt: 'Tillamook Morning Star Yelkenlisi',
      productsAlt: 'Tillamook Peynir Koleksiyonu - Tam Yağlı Mozzarella, Orta Cheddar, Keskin Beyaz Cheddar ve Atıştırmalıklar',
    },
    cheeseCallout: {
      category: 'PEYNİR',
      quote: 'Hayat "idare eder" veya "fena değil" peynirler için çok kısa. Gerçek lezzeti hissetmek için kaliteli Tillamook Peyniri’nin tadını çıkarın. Kendinize teşekkür edeceksiniz.',
      seeAllCheese: 'TÜM PEYNİRLERİ GÖR',
    },
    products: {
      estBadge: 'Gerçek Oregon Sütü • Kuruluş 1909',
      title: 'Peynir Çeşitlerimiz',
      description: 'Özenle bakılan ineklerin taze sütünden üretilir. Yapay büyüme hormonu (rBST)* içermez, doğal olarak olgunlaştırılır ve yüksek standartlarla hazırlanır.',
      bCorpBadge: 'Sertifikalı B Corp • Çiftçi Kooperatifi',
      categories: {
        all: 'Tüm Peynirler',
        shreds: 'Çiftlik Usulü Rendelenmiş',
        blocks: 'Doğal Cheddar Blokları',
        slices: 'Çiftlik Usulü Dilimler',
        snacks: 'Atıştırmalık Porsiyonlar',
        reserve: 'Özel Rezerv Serisi',
      },
      findInStore: 'Mağazada Bul',
      quickView: 'Hızlı Bakış',
      agingPeriod: 'Olgunlaşma Süresi',
      availableSizes: 'Mevcut Boyutlar',
      agedDaysText: '{days} Gün Doğal Olarak Dinlendirilmiş',
      freshCultured: 'Taze Mayalanmış',
      findNearbyBtn: 'Yakındaki Marketlerde Bul',
      items: {
        'mozzarella-farmstyle-shreds': {
          name: 'Tam Yağlı Rendelenmiş Mozzarella',
          categoryLabel: 'Rendelenmiş Peynir',
          badge: 'Çiftlik Usulü Kalın Kesim',
          tagline: 'Daha iyi erir, daha iyi uzar, krema kıvamında.',
          description: 'Üstün erime ve zengin lezzet için tam yağlı süt bloklarından kalın kesilmiştir. Fazla nişasta tozu içermez.',
          flavorProfile: ['Kremamsı', 'Yumuşak', 'Tereyağımsı Uzayan'],
        },
        'medium-cheddar-block': {
          name: 'Orta Cheddar Blok Peynir',
          categoryLabel: 'Doğal Cheddar',
          badge: 'Klasik Favori',
          tagline: '60 günden fazla dinlendirilmiş.',
          description: '60 günden uzun süre doğal olarak dinlendirilen ikonik Oregon cheddarımız. Klasik cheddar aromasıyla ödüllü kremsi doku.',
          flavorProfile: ['Klasik Cheddar', 'Pürüzsüz', 'Altın Krema'],
        },
        'sharp-white-cheddar-block': {
          name: 'Keskin Beyaz Cheddar',
          categoryLabel: 'Doğal Cheddar',
          badge: 'Ödüllü Lezzet',
          tagline: '9 aydan fazla doğal dinlendirilmiş.',
          description: '9 aydan uzun süre dinlendirilir. Saf içerikler ve renklendirici eklenmeden hazırlanan temiz, keskin ve gevrek lezzet.',
          flavorProfile: ['Belirgin', 'Karakterli', 'Zengin Keskinlik'],
        },
        'cheddar-snack-portions': {
          name: 'Keskin Cheddar Atıştırmalık Çubuklar',
          categoryLabel: 'Atıştırmalık',
          badge: 'Hemen Al ve Çık',
          tagline: 'Her porsiyonda 5g protein.',
          description: 'Yürüyüşler, beslenme çantaları ve yolculuklar için tek tek paketlenmiş gerçek dinlendirilmiş cheddar peyniri.',
          flavorProfile: ['Keskin', 'Pratik', 'Lezzetli Isırık'],
        },
        'colby-jack-slices': {
          name: 'Colby Jack Kalın Dilimler',
          categoryLabel: 'Dilimli Peynir',
          badge: 'Burger Dilimleri',
          tagline: 'Burgerler için kalın kesim.',
          description: 'Burger ve tost mükemmelliği için bir arada harmanlanmış kalın dilimli Colby ve Monterey Jack peyniri.',
          flavorProfile: ['Hafif', 'Kremsi', 'Mermer Desenli'],
        },
        'maker-reserve-2021': {
          name: "Maker's Reserve 2021 Ekstra Keskin",
          categoryLabel: 'Özel Rezerv',
          badge: '3 Yıllık Rezerv',
          tagline: '3 yıldan uzun dinlendirilmiş.',
          description: '3 yılı aşkın süre dinlendirilen özel seri. Çıtır kalsiyum kristalleri ile yoğun ve derin bir lezzet patlaması sunar.',
          flavorProfile: ['Fındıksı', 'Çıtır Kristaller', 'Yoğun Umami'],
        },
        'pepper-jack-block': {
          name: 'Jalapeño Biberli Monterey Jack',
          categoryLabel: 'Doğal Cheddar',
          tagline: 'Gerçek jalapeño biberleri.',
          description: 'Kırmızı ve yeşil jalapeño biber parçalarıyla zenginleştirilmiş lezzetli ve dengeli acıya sahip peynir.',
          flavorProfile: ['Canlı', 'Hafif Acı', 'Mükemmel Eriyen'],
        },
        'four-cheese-mexican-blend': {
          name: 'Meksika Usulü 4 Peynir Karışımı',
          categoryLabel: 'Rendelenmiş Peynir',
          tagline: 'Dört peynirli ziyafet.',
          description: 'Monterey Jack, Cheddar, Queso ve Asadero peynirlerinin taco ve quesadillalar için hazırlanan lezzetli karışımı.',
          flavorProfile: ['Akışkan', 'Zengin', 'Doyurucu'],
        },
      },
    },
    recipes: {
      headerTag: 'Çiftlik Mutfağından Lezzetler',
      title: 'Peynir Severler İçin Tarifler',
      description: 'Fırında sıcacık mac & cheese’den erimiş peynirli tostlara kadar her tarif Tillamook ile daha lezzetli.',
      featuringCheese: 'Kullanılan Peynir:',
      viewRecipeBtn: 'Tarifi ve Hazırlanışı Gör',
      ingredientsChecklist: 'Malzeme Listesi',
      instructions: 'Adım Adım Hazırlanış',
      closeRecipe: 'Tarifi Kapat',
      difficultyEasy: 'Kolay',
      difficultyMedium: 'Orta',
      recipesList: {
        'tillamook-mac-and-cheese': {
          title: 'Fırında Nefis Tillamook Mac & Cheese',
          cookTime: '45 dk',
          servings: '6-8 kişilik',
          description: 'Beyaz ve orta cheddar peyniriyle hazırlanan ipeksi beşamel sos ve çıtır altın rengi ekmek kırıntıları.',
          cheeseUsed: 'Beyaz Cheddar & Orta Cheddar',
        },
        'skillet-margherita-pizza': {
          title: 'Tavada Mozzarellalı Çıtır Pizza',
          cookTime: '25 dk',
          servings: '3-4 kişilik',
          description: 'San Marzano domates sosu, taze fesleğen ve bolca tam yağlı Tillamook mozzarella ile hazırlanan tava pizzası.',
          cheeseUsed: 'Tam Yağlı Rendelenmiş Mozzarella',
        },
        'gourmet-apple-cheddar-grilled-cheese': {
          title: 'Elmalı ve Keskin Cheddarlı Sıcak Tost',
          cookTime: '15 dk',
          servings: '2 kişilik',
          description: 'Tereyağlı ekşi mayalı ekmek arasında elma dilimleri, taze kekik ve erimiş keskin beyaz cheddar.',
          cheeseUsed: 'Keskin Beyaz Cheddar Blok',
        },
      },
    },
    brandStory: {
      legacyTag: 'Morning Star Gemisinin Mirası',
      title: '1909’dan Beri Dürüst ve Gerçek Süt Ürünleri.',
      p1: '1855 yılında Oregonlu çiftçiler, taze peynir tekerleklerini dalgalı denizlerden pazara ulaştırmak için kerestelerini ve birikimlerini birleştirerek üç direkli efsanevi Morning Star yelkenlisini inşa ettiler.',
      p2: 'Bugün aynı kooperatif ruhuyla yolumuza devam ediyoruz. Asla kolaya kaçmıyor, en kaliteli malzemeleri kullanıyor ve peynirlerimizi sedir ağacı tahtalarda dinlendiriyoruz.',
      yearsCoop: '115+',
      yearsCoopLabel: 'Yıllık Çiftçi Kooperatifi',
      hormoneFree: '100%',
      hormoneFreeLabel: 'rBST Hormonsuz Süt*',
      bcorpTitle: 'Sertifikalı B Corporation®',
      bcorpDesc: 'Toplumsal ve çevresel performans, şeffaflık ve hesap verebilirlik alanlarında en yüksek standartları karşılıyoruz.',
      coopBadge: 'Çiftçi Kooperatifi',
      cleanBadge: 'Temiz İçerikler',
      awardBadge: 'Dünya Peynir Yarışması Kazananı',
      creameryTag: 'Tillamook, Oregon Sahili',
      creameryTitle: 'Tillamook Mandırasını Ziyaret Edin',
      creameryDesc: 'Dünyaca ünlü ziyaretçi merkezimize uğrayın. Peynirin paketlenişini izleyin, taze peynirleri ve eşsiz dondurmaları tadın.',
      planVisit: 'Ziyaretinizi Planlayın',
      creameryHours: 'Her gün 10:00 - 18:00 Açık • Giriş Ücretsizdir',
    },
    footer: {
      brandDesc: '1909 yılında Tillamook, Oregon’da kurulan çiftçi kooperatifi. Ödünsüz, dürüst ve gerçek süt lezzeti.',
      bcorp: 'Sertifikalı B Corporation®',
      productsTitle: 'Ürünler',
      ourStoryTitle: 'Hikayemiz',
      stayConnectedTitle: 'Bağlantıda Kalın',
      newsletterDesc: 'Tarifler, indirim kuponları ve Oregon’dan haberler için bültenimize katılın.',
      signUpBtn: '$1 İndirim İçin Kaydolun',
      copyright: '© Tillamook County Creamery Association. Tüm hakları saklıdır.',
      fdaDisclaimer: '*Tillamook için süt sağlayan tüm çiftçiler yapay büyüme hormonu kullanmamayı taahhüt eder. FDA, rBST uygulanmış ve uygulanmamış ineklerden elde edilen süt arasında önemli bir fark kanıtlanmadığını belirtmiştir.',
      varieties: 'Peynir Çeşitleri',
      farmstyleShreds: 'Rendelenmiş Peynir',
      naturalBlocks: 'Doğal Cheddar Blokları',
      farmstyleSlices: 'Peynir Dilimleri',
      snackPortions: 'Atıştırmalıklar',
      makersReserve: 'Özel Rezerv',
      coopHeritage: 'Çiftçi Kooperatifi',
      morningStarHistory: 'Morning Star Tarihi',
      visitCreamery: 'Mandırayı Ziyaret Edin',
      kitchenRecipes: 'Mutfak Tarifleri',
      storeLocator: 'Mağaza Bulucu',
    },
    whereToBuy: {
      tag: 'Mağaza Bulucu',
      title: 'Yakınınızdaki Tillamook’u Bulun',
      searchingFor: 'Aranan ürün:',
      placeholder: 'Posta kodu veya şehir girin (örn. 97141 veya Tillamook)',
      searchBtn: 'Ara',
      popular: 'Popüler:',
      storesFound: 'Tillamook Peyniri Bulunan Mağazalar ({count} adet)',
      directions: 'Yol Tarifi',
      onlineShippingNote: 'Yakınınızda bulamadınız mı? Soğuk zincirle kapınıza kadar teslim ediyoruz.',
      shopOnline: 'Online Satın Al',
    },
    signMeUp: {
      badge: 'Tillamook Kulübü',
      title: 'Peynir Sevgisine Katılın.',
      description: 'Tillamook ailesine katılarak nefis mevsimsel tarifler ve sonraki alışverişinizde geçerli $1.00 indirim kuponu kazanın.',
      firstName: 'Adınız',
      firstNamePlaceholder: 'Örn. Elif',
      zip: 'Posta Kodu',
      email: 'E-posta Adresi',
      favoriteCheese: 'Favori Tillamook Peyniriniz',
      submitBtn: '$1.00 Kuponu Al ve Kaydol',
      disclaimer: 'Kaydolarak Tillamook’tan tarifler ve duyurular almayı kabul edersiniz. Dilediğiniz zaman ayrılabilirsiniz.',
      welcomeTitle: 'Ailemize Hoş Geldiniz!',
      welcomeDesc: 'Kuponunuzu içeren karşılama e-postasını adresinize gönderdik.',
      couponTitle: 'Market Kuponu',
      couponAmount: '$1.00 İNDİRİM',
      couponSub: 'Herhangi bir (1) Tillamook® Peynir ürününde geçerlidir (220g veya üzeri)',
      activeCode: 'Aktif Kod',
      exploreBtn: 'Peynirleri İncele',
    },
    searchModal: {
      placeholder: 'Tillamook peynirleri, tarifler, rendelenmiş süzmeler...',
      clear: 'Temizle',
      popularLabel: 'Popüler:',
      dairyProductsTitle: 'Peynir ve Süt Ürünleri',
      recipesTitle: 'Peynirli Tarifler',
      itemsCount: 'ürün',
      recipesCount: 'tarif',
      noProducts: 'Eşleşen peynir ürünü bulunamadı.',
      noRecipes: 'Eşleşen tarif bulunamadı.',
      uses: 'İçerdiği peynir:',
    },
  },

  // 5. VIET (Tiếng Việt)
  vi: {
    globalNav: {
      brandGlobal: 'Tillamook Toàn Cầu',
      worldwide: 'Hợp tác xã nông dân từ năm 1909',
      selectLanguage: 'Chọn ngôn ngữ',
      hoverHint: 'Chuyển sang',
      switchTo: 'Chuyển sang',
      activeLanguage: 'Đang chọn',
      backToEnglish: 'Quay lại tiếng Anh (English)',
      teamLanguage: 'Ngôn ngữ của đội',
      quickSwitch: 'Ngôn ngữ',
    },
    nav: {
      products: 'Sản phẩm',
      about: 'Về chúng tôi',
      recipes: 'Công thức',
      visit: 'Tham quan',
      whereToBuy: 'Điểm bán hàng',
      onlineShop: 'Cửa hàng trực tuyến',
      searchAria: 'Tìm kiếm',
      menuAria: 'Mở danh mục điều hướng',
    },
    subnav: {
      label: 'Phô mai',
      categories: {
        cheese: 'Phô mai',
        iceCream: 'Kem',
        creamCheese: 'Phô mai kem',
        yogurt: 'Sữa chua',
        sourCream: 'Kem chua',
        butter: 'Bơ',
      },
    },
    hero: {
      headlineLine1: 'PHÔ MAI',
      headlineLine2: 'DÀNH CHO',
      headlineLine3: 'TÍN ĐỒ',
      headlineLine4: 'PHÔ MAI.',
      signMeUpTab: 'ĐĂNG KÝ',
      boatAlt: 'Thuyền buồm Tillamook Morning Star',
      productsAlt: 'Bộ sưu tập phô mai Tillamook - Mozzarella sữa tươi, Cheddar truyền thống, Cheddar trắng và Phô mai que',
    },
    cheeseCallout: {
      category: 'PHÔ MAI',
      quote: 'Cuộc đời quá ngắn để chọn phô mai "bình thường" hay "tàm tạm". Hãy thưởng thức phô mai hảo hạng Tillamook để trải nghiệm hương vị đích thực. Bạn sẽ thấy quyết định của mình thật tuyệt vời.',
      seeAllCheese: 'XEM TẤT CẢ PHÔ MAI',
    },
    products: {
      estBadge: 'Sữa tươi Oregon nguyên chất • Thành lập 1909',
      title: 'Danh mục phô mai',
      description: 'Làm từ sữa tươi của những cô bò được chăm sóc tận tình. Không chứa hormone tăng trưởng nhân tạo (rBST)*, ủ chín tự nhiên theo tiêu chuẩn khắt khe.',
      bCorpBadge: 'Chứng nhận B Corp • Hợp tác xã nông dân',
      categories: {
        all: 'Tất cả phô mai',
        shreds: 'Phô mai sợi nông trại',
        blocks: 'Phô mai Cheddar tảng',
        slices: 'Phô mai lát dày',
        snacks: 'Phô mai que ăn nhẹ',
        reserve: 'Dòng Vintage Reserve',
      },
      findInStore: 'Tìm nơi bán',
      quickView: 'Xem nhanh',
      agingPeriod: 'Thời gian ủ',
      availableSizes: 'Quy cách đóng gói',
      agedDaysText: 'Ủ tự nhiên {days} ngày',
      freshCultured: 'Lên men tươi',
      findNearbyBtn: 'Tìm cửa hàng gần bạn',
      items: {
        'mozzarella-farmstyle-shreds': {
          name: 'Mozzarella sợi sữa tươi nguyên kem',
          categoryLabel: 'Phô mai sợi',
          badge: 'Sợi dày nông trại',
          tagline: 'Dễ tan chảy hơn, kéo sợi dài hơn, béo ngậy hơn.',
          description: 'Cắt sợi dày từ tảng phô mai sữa tươi giúp phô mai tan chảy mượt mà và giữ trọn hương vị nguyên bản. Không phủ bột thừa.',
          flavorProfile: ['Béo ngậy', 'Thanh dịu', 'Kéo sợi mướt bơ'],
        },
        'medium-cheddar-block': {
          name: 'Phô mai Medium Cheddar tảng',
          categoryLabel: 'Cheddar tự nhiên',
          badge: 'Sản phẩm kinh điển',
          tagline: 'Ủ chín tự nhiên hơn 60 ngày.',
          description: 'Cheddar Oregon biểu tượng của chúng tôi, ủ tự nhiên hơn 60 ngày. Kết cấu kem mịn từng đạt nhiều giải thưởng quốc tế.',
          flavorProfile: ['Cheddar cổ điển', 'Mịn màng', 'Béo vàng óng'],
        },
        'sharp-white-cheddar-block': {
          name: 'Phô mai Sharp White Cheddar trắng',
          categoryLabel: 'Cheddar tự nhiên',
          badge: 'Đạt giải thưởng',
          tagline: 'Ủ chín tự nhiên trên 9 tháng.',
          description: 'Được ủ tự nhiên hơn 9 tháng. Thành phần đơn giản, không phẩm màu, mang đến hương vị sắc nét và hậu vị đậm đà.',
          flavorProfile: ['Đậm vị', 'Sắc sảo', 'Hậu vị tinh tế'],
        },
        'cheddar-snack-portions': {
          name: 'Phô mai Cheddar que ăn nhẹ',
          categoryLabel: 'Phô mai que',
          badge: 'Tiện lợi mang theo',
          tagline: '5g Protein mỗi que.',
          description: 'Phô mai cheddar thật ủ tự nhiên, đóng gói từng que tiện lợi cho các chuyến dã ngoại, hộp cơm trưa hay đi đường dài.',
          flavorProfile: ['Đậm đà', 'Tiện dụng', 'Cắn ngậy béo'],
        },
        'colby-jack-slices': {
          name: 'Phô mai lát dày Colby Jack',
          categoryLabel: 'Phô mai lát',
          badge: 'Lát bánh mì kẹp',
          tagline: 'Cắt lát dày chuyên cho burger.',
          description: 'Sự hòa quyện vân cẩm thạch giữa Colby và Monterey Jack cắt lát dày, tuyệt hảo cho burger và sandwich.',
          flavorProfile: ['Dịu ngọt', 'Béo thơm', 'Vân cẩm thạch'],
        },
        'maker-reserve-2021': {
          name: "Maker's Reserve 2021 Extra Sharp",
          categoryLabel: 'Dòng Vintage',
          badge: 'Ủ 3 năm',
          tagline: 'Ủ chín trên 3 năm.',
          description: 'Phiên bản giới hạn được ủ hơn 3 năm. Những tinh thể canxi lactate giòn tan tinh tế đem lại vị umami sâu lắng khó quên.',
          flavorProfile: ['Hương quả hạch', 'Tinh thể giòn', 'Umami đậm đà'],
        },
        'pepper-jack-block': {
          name: 'Monterey Jack với ớt Jalapeño',
          categoryLabel: 'Cheddar tự nhiên',
          tagline: 'Ớt jalapeño thật.',
          description: 'Phô mai Monterey Jack béo ngậy điểm xuyết những hạt ớt jalapeño đỏ và xanh, mang lại vị cay nhẹ cân bằng.',
          flavorProfile: ['Hăng cay nhẹ', 'Ấm nồng', 'Dễ tan chảy'],
        },
        'four-cheese-mexican-blend': {
          name: 'Phô mai sợi hỗn hợp 4 loại kiểu Mexico',
          categoryLabel: 'Phô mai sợi',
          tagline: 'Bữa tiệc 4 loại phô mai.',
          description: 'Sợi phô mai Monterey Jack, Medium Cheddar, Queso Quesadilla và Asadero lý tưởng cho món taco và quesadilla.',
          flavorProfile: ['Tan chảy dẻo', 'Đậm đà', 'Thơm nức'],
        },
      },
    },
    recipes: {
      headerTag: 'Sáng tạo từ bếp nông trại',
      title: 'Công thức dành cho tín đồ phô mai',
      description: 'Từ món mì nui đút lò mac & cheese xèo xèo đến bánh mì nướng phô mai tan chảy, mọi món ăn đều thăng hoa cùng Tillamook.',
      featuringCheese: 'Phô mai sử dụng:',
      viewRecipeBtn: 'Xem công thức & cách làm',
      ingredientsChecklist: 'Danh sách nguyên liệu',
      instructions: 'Hướng dẫn từng bước',
      closeRecipe: 'Đóng công thức',
      difficultyEasy: 'Dễ làm',
      difficultyMedium: 'Vừa phải',
      recipesList: {
        'tillamook-mac-and-cheese': {
          title: 'Mì nui phô mai đút lò Tillamook Mac & Cheese',
          cookTime: '45 phút',
          servings: '6-8 người',
          description: 'Sốt roux béo ngậy hòa quyện phô mai Cheddar trắng và Cheddar vàng, phủ lớp vụn bánh mì giòn tan óng ả.',
          cheeseUsed: 'Sharp White Cheddar & Medium Cheddar',
        },
        'skillet-margherita-pizza': {
          title: 'Pizza chảo gang ngập tràn Mozzarella',
          cookTime: '25 phút',
          servings: '3-4 người',
          description: 'Đế bánh chảo gang giòn rụm phủ sốt cà chua San Marzano, húng quế tươi và ngập tràn Mozzarella sợi dày Tillamook.',
          cheeseUsed: 'Mozzarella sợi sữa tươi nguyên kem',
        },
        'gourmet-apple-cheddar-grilled-cheese': {
          title: 'Bánh mì nướng kẹp táo giòn và Cheddar trắng',
          cookTime: '15 phút',
          servings: '2 người',
          description: 'Bánh mì men chua phết bơ kẹp những lát táo ngọt thanh, lá xạ hương thơm và phô mai cheddar trắng tan chảy béo ngậy.',
          cheeseUsed: 'Sharp White Cheddar tảng',
        },
      },
    },
    brandStory: {
      legacyTag: 'Di sản thuyền buồm Morning Star',
      title: 'Sữa thật làm chuẩn mực từ năm 1909.',
      p1: 'Năm 1855, những người nông dân ven bờ Oregon đã cùng nhau góp gỗ và tiền tiết kiệm để đóng con tàu ba buồm huyền thoại Morning Star, vận chuyển những cối phô mai tươi vượt biển lớn đến thị trường.',
      p2: 'Hôm nay, tinh thần hợp tác ấy vẫn tiếp tục dẫn lối. Chúng tôi không bao giờ đi đường tắt, luôn chọn nguyên liệu thuần khiết nhất và ủ chín phô mai trên những tấm gỗ tuyết tùng.',
      yearsCoop: '115+',
      yearsCoopLabel: 'Năm hợp tác xã nông dân',
      hormoneFree: '100%',
      hormoneFreeLabel: 'Sữa không hormone rBST*',
      bcorpTitle: 'Chứng nhận B Corporation®',
      bcorpDesc: 'Chúng tôi đáp ứng các tiêu chuẩn cao nhất đã được kiểm chứng về trách nhiệm xã hội, bảo vệ môi trường và tính minh bạch.',
      coopBadge: 'Hợp tác xã nông dân',
      cleanBadge: 'Nguyên liệu sạch',
      awardBadge: 'Đoạt giải thưởng phô mai thế giới',
      creameryTag: 'Tillamook, Bờ biển Oregon',
      creameryTitle: 'Ghé thăm nhà máy sữa Tillamook',
      creameryDesc: 'Bước vào trung tâm tham quan nổi tiếng thế giới. Tận mắt xem quy trình đóng gói phô mai, nếm thử phô mai tươi và thưởng thức kem độc quyền.',
      planVisit: 'Lên lịch chuyến đi',
      creameryHours: 'Mở cửa hàng ngày 10:00 - 18:00 • Vào cửa miễn phí',
    },
    footer: {
      brandDesc: 'Hợp tác xã nông dân thành lập tại hạt Tillamook, Oregon năm 1909. Sản phẩm sữa chân chính không thỏa hiệp.',
      bcorp: 'Chứng nhận B Corporation®',
      productsTitle: 'Sản phẩm',
      ourStoryTitle: 'Câu chuyện',
      stayConnectedTitle: 'Kết nối',
      newsletterDesc: 'Tham gia hội những người yêu phô mai để nhận công thức nấu ăn, phiếu giảm giá và tin tức từ Oregon.',
      signUpBtn: 'Đăng ký nhận phiếu giảm giá $1',
      copyright: '© Tillamook County Creamery Association. Mọi quyền được bảo lưu.',
      fdaDisclaimer: '*Tất cả các nông dân cung cấp sữa cho Tillamook cam kết không sử dụng hormone tăng trưởng nhân tạo. FDA xác nhận không có khác biệt đáng kể giữa sữa từ bò được và không được xử lý bằng rBST.',
      varieties: 'Các loại phô mai',
      farmstyleShreds: 'Phô mai sợi',
      naturalBlocks: 'Phô mai tảng',
      farmstyleSlices: 'Phô mai lát',
      snackPortions: 'Phô mai ăn nhẹ',
      makersReserve: 'Dòng tuyển chọn',
      coopHeritage: 'Hợp tác xã nông nghiệp',
      morningStarHistory: 'Lịch sử Morning Star',
      visitCreamery: 'Tham quan nhà máy',
      kitchenRecipes: 'Công thức món ngon',
      storeLocator: 'Hệ thống cửa hàng',
    },
    whereToBuy: {
      tag: 'Điểm bán hàng',
      title: 'Tìm Tillamook gần bạn',
      searchingFor: 'Đang tìm kiếm:',
      placeholder: 'Nhập mã bưu điện hoặc thành phố (ví dụ: 97141 hoặc Tillamook)',
      searchBtn: 'Tìm kiếm',
      popular: 'Phổ biến:',
      storesFound: 'Cửa hàng có bán phô mai Tillamook (tìm thấy {count})',
      directions: 'Chỉ đường',
      onlineShippingNote: 'Không tìm thấy gần bạn? Chúng tôi giao phô mai lạnh trực tiếp đến tận nhà.',
      shopOnline: 'Mua trực tuyến',
    },
    signMeUp: {
      badge: 'Thành viên Tillamook',
      title: 'Đăng ký để nhận tin về phô mai.',
      description: 'Gia nhập gia đình Tillamook để nhận công thức món ăn hấp dẫn cùng phiếu giảm giá $1.00 cho chuyến đi siêu thị tiếp theo.',
      firstName: 'Tên của bạn',
      firstNamePlaceholder: 'Ví dụ: Lan',
      zip: 'Mã bưu điện',
      email: 'Địa chỉ Email',
      favoriteCheese: 'Loại phô mai yêu thích',
      submitBtn: 'Nhận phiếu giảm $1.00 & Đăng ký',
      disclaimer: 'Bằng việc đăng ký, bạn đồng ý nhận thông tin từ Tillamook. Bạn có thể hủy đăng ký bất cứ lúc nào.',
      welcomeTitle: 'Chào mừng bạn đến với gia đình Tillamook!',
      welcomeDesc: 'Chúng tôi vừa gửi email chào mừng kèm phiếu ưu đãi đến bạn.',
      couponTitle: 'Phiếu mua hàng',
      couponAmount: 'GIẢM $1.00',
      couponSub: 'Áp dụng cho bất kỳ 1 sản phẩm phô mai Tillamook® nào (từ 220g trở lên)',
      activeCode: 'Mã đang hiệu lực',
      exploreBtn: 'Khám phá các loại phô mai',
    },
    searchModal: {
      placeholder: 'Tìm kiếm phô mai, công thức nấu ăn, dạng sợi, dạng tảng...',
      clear: 'Xóa',
      popularLabel: 'Gợi ý:',
      dairyProductsTitle: 'Phô mai & sản phẩm bơ sữa',
      recipesTitle: 'Công thức nấu ăn với phô mai',
      itemsCount: 'sản phẩm',
      recipesCount: 'công thức',
      noProducts: 'Không tìm thấy sản phẩm phô mai phù hợp.',
      noRecipes: 'Không tìm thấy công thức phù hợp.',
      uses: 'Nguyên liệu:',
    },
  },

  // 6. INDO (Bahasa Indonesia)
  id: {
    globalNav: {
      brandGlobal: 'Tillamook Global',
      worldwide: 'Koperasi Peternak Sejak 1909',
      selectLanguage: 'Pilih Bahasa',
      hoverHint: 'Beralih ke',
      switchTo: 'Beralih ke',
      activeLanguage: 'Aktif',
      backToEnglish: 'Kembali ke Bahasa Inggris (English)',
      teamLanguage: 'Bahasa Tim',
      quickSwitch: 'Bahasa',
    },
    nav: {
      products: 'Produk',
      about: 'Tentang Kami',
      recipes: 'Resep',
      visit: 'Kunjungi Kami',
      whereToBuy: 'Tempat Membeli',
      onlineShop: 'Toko Online',
      searchAria: 'Cari',
      menuAria: 'Buka menu navigasi',
    },
    subnav: {
      label: 'Keju',
      categories: {
        cheese: 'Keju',
        iceCream: 'Es Krim',
        creamCheese: 'Krim Keju',
        yogurt: 'Yogurt',
        sourCream: 'Krim Asam',
        butter: 'Mentega',
      },
    },
    hero: {
      headlineLine1: 'KEJU',
      headlineLine2: 'UNTUK',
      headlineLine3: 'PECINTA',
      headlineLine4: 'KEJU.',
      signMeUpTab: 'DAFTAR SEKARANG',
      boatAlt: 'Kapal Layar Tillamook Morning Star',
      productsAlt: 'Koleksi Keju Tillamook - Whole Milk Mozzarella, Medium Cheddar, Sharp White, dan Camilan Keju',
    },
    cheeseCallout: {
      category: 'KEJU',
      quote: 'Hidup terlalu singkat untuk keju yang "biasa saja" atau sekadar "lumayan". Nikmati keju Tillamook berkualitas istimewa untuk rasa terbaik. Anda akan bersyukur telah mencobanya.',
      seeAllCheese: 'LIHAT SEMUA KEJU',
    },
    products: {
      estBadge: 'Susu Asli Oregon • Berdiri 1909',
      title: 'Koleksi Keju Pilihan',
      description: 'Dibuat dari susu segar sapi yang dirawat penuh kasih. Bebas hormon pertumbuhan buatan (rBST)*, dimatangkan alami dengan standar ketat tanpa kompromi.',
      bCorpBadge: 'Tersertifikasi B Corp • Koperasi Peternak',
      categories: {
        all: 'Semua Keju',
        shreds: 'Parut Khas Peternakan',
        blocks: 'Blok Cheddar Alami',
        slices: 'Irisan Tebal Peternakan',
        snacks: 'Porsi Camilan',
        reserve: 'Koleksi Vintage Reserve',
      },
      findInStore: 'Cari di Toko',
      quickView: 'Lihat Cepat',
      agingPeriod: 'Periode Pematangan',
      availableSizes: 'Ukuran Tersedia',
      agedDaysText: 'Pematangan Alami {days} Hari',
      freshCultured: 'Kultur Fermentasi Segar',
      findNearbyBtn: 'Cari di Supermarket Terdekat',
      items: {
        'mozzarella-farmstyle-shreds': {
          name: 'Mozzarella Parut Susu Murni',
          categoryLabel: 'Keju Parut',
          badge: 'Potongan Tebal Peternakan',
          tagline: 'Lebih meleleh, lebih mulur, ekstra lembut.',
          description: 'Dipotong tebal dari balok susu murni untuk lelehan sempurna dan rasa kaya autentik. Tanpa taburan pati berlebih.',
          flavorProfile: ['Lembut', 'Gurih Ringan', 'Mulur Bermentega'],
        },
        'medium-cheddar-block': {
          name: 'Keju Blok Medium Cheddar',
          categoryLabel: 'Cheddar Alami',
          badge: 'Favorit Legendaris',
          tagline: 'Dimatangkan lebih dari 60 hari.',
          description: 'Cheddar ikonik Oregon kami, dimatangkan alami selama 60 hari lebih. Tekstur lembut pemenang penghargaan dengan rasa khas cheddar.',
          flavorProfile: ['Cheddar Klasik', 'Halus', 'Krim Keemasan'],
        },
        'sharp-white-cheddar-block': {
          name: 'Keju Sharp White Cheddar',
          categoryLabel: 'Cheddar Alami',
          badge: 'Pemenang Penghargaan',
          tagline: 'Dimatangkan alami 9+ bulan.',
          description: 'Dimatangkan alami lebih dari 9 bulan. Bahan sederhana tanpa pewarna buatan untuk rasa tajam, bersih, dan sedikit renyah.',
          flavorProfile: ['Tegas', 'Gurih Tajam', 'Rasa Kaya Kompleks'],
        },
        'cheddar-snack-portions': {
          name: 'Stik Camilan Sharp Cheddar',
          categoryLabel: 'Porsi Camilan',
          badge: 'Praktis Dibawa',
          tagline: '5g Protein per stik.',
          description: 'Keju cheddar alami asli dibungkus satuan untuk bekal hiking, kotak makan siang, dan perjalanan jauh.',
          flavorProfile: ['Tajam', 'Praktis', 'Gigitan Lembut'],
        },
        'colby-jack-slices': {
          name: 'Irisan Tebal Colby Jack',
          categoryLabel: 'Keju Irisan',
          badge: 'Irisan Burger',
          tagline: 'Potongan tebal untuk burger.',
          description: 'Irisan tebal perpaduan Colby dan Monterey Jack dengan motif marmer untuk burger dan roti panggang yang sempurna.',
          flavorProfile: ['Lembut', 'Gurih', 'Bermotif Marmer'],
        },
        'maker-reserve-2021': {
          name: "Maker's Reserve 2021 Extra Sharp",
          categoryLabel: 'Koleksi Vintage',
          badge: 'Edisi 3 Tahun',
          tagline: 'Dimatangkan lebih dari 3 tahun.',
          description: 'Koleksi istimewa dimatangkan lebih dari 3 tahun. Dihiasi kristal kalsium laktat halus untuk sensasi renyah dan gurih umami mendalam.',
          flavorProfile: ['Kacang Gurih', 'Kristal Renyah', 'Umami Pekat'],
        },
        'pepper-jack-block': {
          name: 'Monterey Jack dengan Cabai Jalapeño',
          categoryLabel: 'Cheddar Alami',
          tagline: 'Potongan cabai jalapeño asli.',
          description: 'Keju lembut Monterey Jack dengan taburan cabai jalapeño merah dan hijau untuk sensasi pedas gurih yang pas.',
          flavorProfile: ['Pedas Segar', 'Hangat Pas', 'Mudah Meleleh'],
        },
        'four-cheese-mexican-blend': {
          name: 'Parutan Campuran 4 Keju Meksiko',
          categoryLabel: 'Keju Parut',
          tagline: 'Pesta empat keju istimewa.',
          description: 'Parutan tebal Monterey Jack, Medium Cheddar, Queso Quesadilla, dan Asadero untuk taco dan quesadilla lezat.',
          flavorProfile: ['Lelehan Mulur', 'Kaya Rasa', 'Gurih Mantap'],
        },
      },
    },
    recipes: {
      headerTag: 'Kreasi Dapur Peternakan',
      title: 'Resep Untuk Pecinta Keju',
      description: 'Dari mac & cheese panggang hangat hingga roti bakar keju meleleh, setiap hidangan terasa lebih nikmat bersama keju Tillamook.',
      featuringCheese: 'Menggunakan Keju:',
      viewRecipeBtn: 'Lihat Resep & Cara Masak',
      ingredientsChecklist: 'Daftar Bahan',
      instructions: 'Langkah Demi Langkah',
      closeRecipe: 'Tutup Resep',
      difficultyEasy: 'Mudah',
      difficultyMedium: 'Sedang',
      recipesList: {
        'tillamook-mac-and-cheese': {
          title: 'Mac & Cheese Panggang Tillamook Terbaik',
          cookTime: '45 menit',
          servings: '6-8 porsi',
          description: 'Saus keju beludru dari lelehan cheddar putih tajam dan cheddar medium, ditaburi remah roti keemasan yang renyah.',
          cheeseUsed: 'Sharp White Cheddar & Medium Cheddar',
        },
        'skillet-margherita-pizza': {
          title: 'Pizza Wajan Besi dengan Mozzarella Susu Murni',
          cookTime: '25 menit',
          servings: '3-4 porsi',
          description: 'Kerak pizza renyah dengan saus tomat San Marzano, daun basil segar, dan selimut tebal keju Mozzarella Tillamook.',
          cheeseUsed: 'Mozzarella Parut Susu Murni',
        },
        'gourmet-apple-cheddar-grilled-cheese': {
          title: 'Roti Bakar Apel Honeycrisp & Keju Cheddar',
          cookTime: '15 menit',
          servings: '2 porsi',
          description: 'Roti sourdough mentega tebal dengan irisan apel manis renyah, thyme segar, dan keju cheddar putih meleleh.',
          cheeseUsed: 'Keju Sharp White Cheddar Blok',
        },
      },
    },
    brandStory: {
      legacyTag: 'Warisan Kapal Morning Star',
      title: 'Kelezatan Susu Murni Sejati Sejak 1909.',
      p1: 'Pada tahun 1855, para peternak pesisir Oregon mengumpulkan kayu dan tabungan untuk membangun kapal layar tiga tiang legendaris Morning Star guna mengantarkan roda keju segar melewati lautan ganas ke pasar.',
      p2: 'Hingga kini, semangat kebersamaan itu memandu koperasi peternak kami. Kami tak pernah mengambil jalan pintas, hanya menggunakan bahan berkualitas, dan mematangkan keju di atas papan kayu cedar.',
      yearsCoop: '115+',
      yearsCoopLabel: 'Tahun Koperasi Peternak',
      hormoneFree: '100%',
      hormoneFreeLabel: 'Susu Bebas Hormon rBST*',
      bcorpTitle: 'Tersertifikasi B Corporation®',
      bcorpDesc: 'Kami memenuhi standar tertinggi kinerja sosial dan lingkungan, transparansi, serta akuntabilitas yang terverifikasi.',
      coopBadge: 'Koperasi Peternak',
      cleanBadge: 'Bahan-Bahan Alami',
      awardBadge: 'Pemenang Kontes Keju Dunia',
      creameryTag: 'Tillamook, Pesisir Oregon',
      creameryTitle: 'Kunjungi Pabrik Keju Tillamook',
      creameryDesc: 'Masuki pusat pengunjung kami yang terkenal di dunia. Lihat proses pengemasan keju, cicipi dadih keju segar, nikmati es krim eksklusif, dan sup chowder lezat.',
      planVisit: 'Rencanakan Kunjungan',
      creameryHours: 'Buka Setiap Hari 10.00 - 18.00 • Masuk Gratis',
    },
    footer: {
      brandDesc: 'Koperasi peternak yang didirikan di Tillamook County, Oregon pada tahun 1909. Produk susu murni jujur tanpa kompromi.',
      bcorp: 'Tersertifikasi B Corporation®',
      productsTitle: 'Produk',
      ourStoryTitle: 'Kisah Kami',
      stayConnectedTitle: 'Tetap Terhubung',
      newsletterDesc: 'Bergabunglah untuk mendapatkan inspirasi resep, kupon diskon, dan kabar terbaru dari Oregon.',
      signUpBtn: 'Daftar & Dapatkan Diskon $1',
      copyright: '© Tillamook County Creamery Association. Seluruh hak cipta dilindungi undang-undang.',
      fdaDisclaimer: '*Semua peternak pemasok susu Tillamook berkomitmen tidak menggunakan hormon pertumbuhan buatan. FDA menyatakan tidak ada perbedaan signifikan antara susu sapi yang diberi perlakuan rBST dan non-rBST.',
      varieties: 'Variasi Keju',
      farmstyleShreds: 'Keju Parut',
      naturalBlocks: 'Blok Cheddar Alami',
      farmstyleSlices: 'Irisan Keju',
      snackPortions: 'Porsi Camilan',
      makersReserve: 'Koleksi Pilihan',
      coopHeritage: 'Koperasi Peternak',
      morningStarHistory: 'Sejarah Morning Star',
      visitCreamery: 'Kunjungi Pabrik Keju',
      kitchenRecipes: 'Resep Dapur',
      storeLocator: 'Pencari Lokasi Toko',
    },
    whereToBuy: {
      tag: 'Lokasi Toko',
      title: 'Temukan Tillamook di Dekat Anda',
      searchingFor: 'Mencari:',
      placeholder: 'Masukkan kode pos atau kota (misal: 97141 atau Tillamook)',
      searchBtn: 'Cari',
      popular: 'Populer:',
      storesFound: 'Toko yang Menyediakan Keju Tillamook ({count} ditemukan)',
      directions: 'Petunjuk Arah',
      onlineShippingNote: 'Tidak menemukan di dekat Anda? Kami mengirimkan paket keju dingin langsung ke pintu rumah Anda.',
      shopOnline: 'Belanja Online',
    },
    signMeUp: {
      badge: 'Sahabat Tillamook',
      title: 'Daftar Untuk Menikmati Keju.',
      description: 'Bergabunglah dengan keluarga besar Tillamook untuk mendapatkan resep musiman lezat dan kupon DISKON $1.00 pada belanjaan berikutnya.',
      firstName: 'Nama Depan',
      firstNamePlaceholder: 'Misal: Budi',
      zip: 'Kode Pos',
      email: 'Alamat Email',
      favoriteCheese: 'Keju Tillamook Favorit',
      submitBtn: 'Klaim Kupon $1.00 & Daftar',
      disclaimer: 'Dengan mendaftar, Anda menyetujui penerimaan resep & promosi dari Tillamook. Berhenti berlangganan kapan saja.',
      welcomeTitle: 'Selamat Datang di Keluarga Tillamook!',
      welcomeDesc: 'Kami telah mengirimkan email selamat datang beserta kupon diskon Anda.',
      couponTitle: 'Kupon Belanja',
      couponAmount: 'DISKON $1.00',
      couponSub: 'Untuk pembelian 1 produk keju Tillamook® apa saja (220g atau lebih besar)',
      activeCode: 'Kode Kupon Aktif',
      exploreBtn: 'Mulai Jelajahi Keju',
    },
    searchModal: {
      placeholder: 'Cari keju Tillamook, resep, keju parut, keju blok...',
      clear: 'Hapus',
      popularLabel: 'Populer:',
      dairyProductsTitle: 'Produk Keju & Susu',
      recipesTitle: 'Resep Olahan Keju',
      itemsCount: 'produk',
      recipesCount: 'resep',
      noProducts: 'Tidak ada produk keju yang sesuai.',
      noRecipes: 'Tidak ada resep yang sesuai.',
      uses: 'Bahan keju:',
    },
  },

  // 7. ROMAIN / ROMANIAN (Română)
  ro: {
    globalNav: {
      brandGlobal: 'Tillamook Global',
      worldwide: 'Cooperativă de fermieri din 1909',
      selectLanguage: 'Selectați limba',
      hoverHint: 'Comutați la',
      switchTo: 'Comutați la',
      activeLanguage: 'Activ',
      backToEnglish: 'Comutați înapoi la engleză (English)',
      teamLanguage: 'Limba echipei',
      quickSwitch: 'Limbă',
    },
    nav: {
      products: 'Produse',
      about: 'Despre noi',
      recipes: 'Rețete',
      visit: 'Vizitați-ne',
      whereToBuy: 'De unde cumpărați',
      onlineShop: 'Magazin online',
      searchAria: 'Căutare',
      menuAria: 'Deschideți meniul de navigare',
    },
    subnav: {
      label: 'Brânză',
      categories: {
        cheese: 'Brânză',
        iceCream: 'Înghețată',
        creamCheese: 'Cremă de brânză',
        yogurt: 'Iaurt',
        sourCream: 'Smântână',
        butter: 'Unt',
      },
    },
    hero: {
      headlineLine1: 'BRÂNZĂ',
      headlineLine2: 'PENTRU',
      headlineLine3: 'IUBITORII DE',
      headlineLine4: 'BRÂNZĂ.',
      signMeUpTab: 'ABONAȚI-VĂ',
      boatAlt: 'Goleta Tillamook Morning Star',
      productsAlt: 'Colecția de brânzeturi Tillamook - Mozzarella din lapte integral, Cheddar clasic, Cheddar alb și Gustări din brânză',
    },
    cheeseCallout: {
      category: 'BRÂNZĂ',
      quote: 'Viața este prea scurtă pentru brânză „mediocră” sau doar „acceptabilă”. Savurați brânza delicioasă și calitativă Tillamook pentru cel mai bogat gust. Vă veți mulțumi mai târziu.',
      seeAllCheese: 'VEZI TOATĂ BRÂNZA',
    },
    products: {
      estBadge: 'Lactate autentice din Oregon • Fondat în 1909',
      title: 'Gama noastră de brânzeturi',
      description: 'Fabricată din lapte proaspăt de la văcuțe îngrijite cu atenție. Fără hormoni artificiali de creștere (rBST)*, maturată natural și creată după standarde fără compromisuri.',
      bCorpBadge: 'Certificare B Corp • Cooperativă de fermieri',
      categories: {
        all: 'Toate brânzeturile',
        shreds: 'Brânză rasă tradițională',
        blocks: 'Blocuri de Cheddar natural',
        slices: 'Felii groase tradiționale',
        snacks: 'Porții de gustare',
        reserve: 'Rezerva Vintage',
      },
      findInStore: 'Găsiți în magazin',
      quickView: 'Vizualizare rapidă',
      agingPeriod: 'Perioadă de maturare',
      availableSizes: 'Gramaje disponibile',
      agedDaysText: 'Maturat natural {days} de zile',
      freshCultured: 'Cultură proaspătă',
      findNearbyBtn: 'Căutați în magazinele apropiate',
      items: {
        'mozzarella-farmstyle-shreds': {
          name: 'Mozzarella rasă din lapte integral',
          categoryLabel: 'Brânză rasă',
          badge: 'Tăiere tradițională groasă',
          tagline: 'Se topește mai bine, se întinde spectaculos, mai cremoasă.',
          description: 'Tăiată gros din blocuri de lapte integral pentru o topire perfectă și o aromă bogată autentică. Fără amidon în exces.',
          flavorProfile: ['Cremoasă', 'Delicată', 'Elasticitate untoasă'],
        },
        'medium-cheddar-block': {
          name: 'Bloc de Cheddar Mediu',
          categoryLabel: 'Cheddar natural',
          badge: 'Favorit emblematic',
          tagline: 'Maturat peste 60 de zile.',
          description: 'Cheddarul nostru legendar din Oregon, maturat natural peste 60 de zile. Textură cremoasă premiată cu gustul inconfundabil de cheddar.',
          flavorProfile: ['Cheddar clasic', 'Fin', 'Cremă aurie'],
        },
        'sharp-white-cheddar-block': {
          name: 'Cheddar alb maturat intens',
          categoryLabel: 'Cheddar natural',
          badge: 'Câștigător de premii',
          tagline: 'Maturat natural 9+ luni.',
          description: 'Maturat natural timp de peste 9 luni. Creat din ingrediente simple, fără coloranți, pentru un final curat, intens și ușor sfărâmicios.',
          flavorProfile: ['Intens', 'Aromat', 'Complexitate fină'],
        },
        'cheddar-snack-portions': {
          name: 'Batoane de Cheddar pentru gustare',
          categoryLabel: 'Porții gustare',
          badge: 'Gustare rapidă',
          tagline: '5g de proteine per baton.',
          description: 'Cheddar veritabil maturat natural, ambalat individual pentru drumeții, pachetul de prânz și călătorii cu mașina.',
          flavorProfile: ['Intens', 'Portabil', 'Mușcătură cremoasă'],
        },
        'colby-jack-slices': {
          name: 'Felii groase Colby Jack',
          categoryLabel: 'Felii tradiționale',
          badge: 'Felii pentru burgeri',
          tagline: 'Tăiate gros pentru burgeri.',
          description: 'Felii generoase de Colby și Monterey Jack marmorate împreună, pentru burgeri și sandvișuri desăvârșite.',
          flavorProfile: ['Fin', 'Cremos', 'Marmorat'],
        },
        'maker-reserve-2021': {
          name: "Maker's Reserve 2021 Extra Maturat",
          categoryLabel: 'Rezerva Vintage',
          badge: 'Ediție 3 ani',
          tagline: 'Maturat peste 3 ani.',
          description: 'Ediție de colecție maturată peste 3 ani. Îmbogățită cu cristale fine de lactat de calciu pentru o textură crocantă și savoare intensă umami.',
          flavorProfile: ['Gust de nucă', 'Cristale crocante', 'Umami intens'],
        },
        'pepper-jack-block': {
          name: 'Monterey Jack cu ardei Jalapeño',
          categoryLabel: 'Cheddar natural',
          tagline: 'Ardei jalapeño veritabili.',
          description: 'Brânză cremoasă Monterey Jack presărată cu bucățele de ardei jalapeño roșii și verzi pentru o notă iute echilibrată.',
          flavorProfile: ['Picant proaspăt', 'Iuțeală plăcută', 'Ușor fuzibil'],
        },
        'four-cheese-mexican-blend': {
          name: 'Amestec mexican din 4 brânzeturi',
          categoryLabel: 'Brânză rasă',
          tagline: 'Fiesta celor patru brânzeturi.',
          description: 'Fâșii groase de Monterey Jack, Cheddar Mediu, Queso Quesadilla și Asadero, ideale pentru tacos și quesadillas.',
          flavorProfile: ['Topire elastică', 'Bogat', 'Sărat savuros'],
        },
      },
    },
    recipes: {
      headerTag: 'Creații din bucătăria fermei',
      title: 'Rețete pentru iubitorii de brânză',
      description: 'De la mac & cheese gratinat și rumenit la sandvișuri calde cu brânză topită, fiecare preparat devine mai gustos cu Tillamook.',
      featuringCheese: 'Conține brânză:',
      viewRecipeBtn: 'Vezi rețeta și instrucțiunile',
      ingredientsChecklist: 'Lista de ingrediente',
      instructions: 'Instrucțiuni pas cu pas',
      closeRecipe: 'Închide rețeta',
      difficultyEasy: 'Ușor',
      difficultyMedium: 'Mediu',
      recipesList: {
        'tillamook-mac-and-cheese': {
          title: 'Supremul Mac & Cheese la cuptor Tillamook',
          cookTime: '45 min',
          servings: '6-8 porții',
          description: 'Sos catifelat din brânză cheddar albă și cheddar mediu topite, acoperit cu pesmet auriu și crocant.',
          cheeseUsed: 'Cheddar alb intens & Cheddar mediu',
        },
        'skillet-margherita-pizza': {
          title: 'Pizza la tigaie din fontă cu Mozzarella',
          cookTime: '25 min',
          servings: '3-4 porții',
          description: 'Blat crocant copt la tigaie cu sos de roșii San Marzano, busuioc proaspăt și un strat generos de Mozzarella Tillamook.',
          cheeseUsed: 'Mozzarella rasă din lapte integral',
        },
        'gourmet-apple-cheddar-grilled-cheese': {
          title: 'Sandviș cald cu mere crocante și Cheddar alb',
          cookTime: '15 min',
          servings: '2 porții',
          description: 'Pâine artizanală cu maia rumenită în unt, felii dulci de mere Honeycrisp, cimbru proaspăt și cheddar alb maturat topit.',
          cheeseUsed: 'Bloc de Cheddar alb maturat intens',
        },
      },
    },
    brandStory: {
      legacyTag: 'Moștenirea goletei Morning Star',
      title: 'Lactate adevărate produse cinstit din 1909.',
      p1: 'În 1855, fermierii de pe coasta Oregonului și-au unit economiile și lemnul pentru a construi legendara goletă cu trei catarge Morning Star, transportând roțile de brânză proaspătă peste ape primejdioase către piețe.',
      p2: 'Astăzi, același spirit ghidează cooperativa noastră de fermieri. Nu alegem scurtături, folosim doar ingrediente de calitate și maturăm brânzeturile pe scânduri de cedru.',
      yearsCoop: '115+',
      yearsCoopLabel: 'Ani de cooperativă agricolă',
      hormoneFree: '100%',
      hormoneFreeLabel: 'Lapte fără hormoni rBST*',
      bcorpTitle: 'Certificare B Corporation®',
      bcorpDesc: 'Îndeplinim cele mai înalte standarde verificate de performanță socială și ecologică, transparență și responsabilitate.',
      coopBadge: 'Cooperativă de fermieri',
      cleanBadge: 'Ingrediente curate',
      awardBadge: 'Câștigător la Concursul Mondial de Brânzeturi',
      creameryTag: 'Tillamook, Coasta Oregonului',
      creameryTitle: 'Vizitați Fabrica de Brânză Tillamook',
      creameryDesc: 'Pășiți în centrul nostru turistic renumit în întreaga lume. Priviți ambalarea brânzei, degustați caș proaspăt și înghețată delicioasă.',
      planVisit: 'Planificați vizita',
      creameryHours: 'Deschis zilnic 10:00 - 18:00 • Intrare liberă',
    },
    footer: {
      brandDesc: 'Cooperativă de fermieri fondată în comitatul Tillamook, Oregon în 1909. Lactate adevărate, oneste, create fără compromis.',
      bcorp: 'Certificare B Corporation®',
      productsTitle: 'Produse',
      ourStoryTitle: 'Povestea noastră',
      stayConnectedTitle: 'Rămâneți conectat',
      newsletterDesc: 'Alăturați-vă comunității noastre pentru rețete inspirate, cupoane de reducere și noutăți din Oregon.',
      signUpBtn: 'Abonați-vă pentru $1 reducere',
      copyright: '© Tillamook County Creamery Association. Toate drepturile rezervate.',
      fdaDisclaimer: '*Toți fermierii care furnizează lapte pentru Tillamook se angajează să nu utilizeze hormoni artificiali de creștere. FDA a confirmat că nu s-a identificat nicio diferență semnificativă între laptele provenit de la vaci tratate și netratate cu rBST.',
      varieties: 'Varietăți de brânză',
      farmstyleShreds: 'Brânză rasă',
      naturalBlocks: 'Blocuri de Cheddar natural',
      farmstyleSlices: 'Felii de brânză',
      snackPortions: 'Porții de gustare',
      makersReserve: 'Rezerva maestrului',
      coopHeritage: 'Cooperativă de fermieri',
      morningStarHistory: 'Istoria Morning Star',
      visitCreamery: 'Vizitați fabrica',
      kitchenRecipes: 'Rețete culinare',
      storeLocator: 'Localizator magazine',
    },
    whereToBuy: {
      tag: 'Localizator magazine',
      title: 'Găsiți Tillamook în apropiere',
      searchingFor: 'Căutați:',
      placeholder: 'Introduceți codul poștal sau orașul (ex. 97141 sau Tillamook)',
      searchBtn: 'Căutare',
      popular: 'Frecvente:',
      storesFound: 'Magazine care vând brânză Tillamook ({count} găsite)',
      directions: 'Indicații traseu',
      onlineShippingNote: 'Nu găsiți local? Expediem brânză rece direct la ușa dumneavoastră.',
      shopOnline: 'Cumpără online',
    },
    signMeUp: {
      badge: 'Clubul Tillamook',
      title: 'Înscrieți-vă pentru noutăți cu brânză.',
      description: 'Alăturați-vă familiei Tillamook pentru a primi rețete de sezon savuroase și un cupon de $1.00 REDUCERE la următoarele cumpărături.',
      firstName: 'Prenume',
      firstNamePlaceholder: 'Ex: Maria',
      zip: 'Cod poștal',
      email: 'Adresă de e-mail',
      favoriteCheese: 'Brânza Tillamook favorită',
      submitBtn: 'Revendică cuponul de $1.00 și înscrie-te',
      disclaimer: 'Prin înscriere, sunteți de acord să primiți rețete și oferte de la Tillamook. Vă puteți dezabona oricând.',
      welcomeTitle: 'Bun venit în marea noastră familie!',
      welcomeDesc: 'Tocmai am trimis un e-mail de bun venit cuponul dumneavoastră.',
      couponTitle: 'Cupon comercial',
      couponAmount: '$1.00 REDUCERE',
      couponSub: 'La oricare (1) produs Tillamook® Cheese (de minim 220g)',
      activeCode: 'Cod activ',
      exploreBtn: 'Descoperă brânzeturile',
    },
    searchModal: {
      placeholder: 'Căutați brânzeturi Tillamook, rețete, fâșii, blocuri...',
      clear: 'Șterge',
      popularLabel: 'Populare:',
      dairyProductsTitle: 'Brânzeturi & Lactate',
      recipesTitle: 'Rețete culinare cu brânză',
      itemsCount: 'produse',
      recipesCount: 'rețete',
      noProducts: 'Nu s-au găsit produse de brânză potrivite.',
      noRecipes: 'Nu s-au găsit rețete potrivite.',
      uses: 'Folosește brânza:',
    },
  },
};
