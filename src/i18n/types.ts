export type SupportedLanguage = 'en' | 'pl' | 'cs' | 'tr' | 'vi' | 'id' | 'ro';

export interface LanguageInfo {
  code: SupportedLanguage;
  name: string; // Native name
  englishName: string; // English name
  flag: string; // Emoji flag
  region: string;
}

export const SUPPORTED_LANGUAGES: LanguageInfo[] = [
  {
    code: 'en',
    name: 'English',
    englishName: 'English (US)',
    flag: '🇺🇸',
    region: 'United States / Global',
  },
  {
    code: 'pl',
    name: 'Polski',
    englishName: 'Polish',
    flag: '🇵🇱',
    region: 'Polska',
  },
  {
    code: 'cs',
    name: 'Čeština',
    englishName: 'Czech',
    flag: '🇨🇿',
    region: 'Česká republika',
  },
  {
    code: 'tr',
    name: 'Türkçe',
    englishName: 'Turkish',
    flag: '🇹🇷',
    region: 'Türkiye',
  },
  {
    code: 'vi',
    name: 'Tiếng Việt',
    englishName: 'Vietnamese',
    flag: '🇻🇳',
    region: 'Việt Nam',
  },
  {
    code: 'id',
    name: 'Bahasa Indonesia',
    englishName: 'Indonesian',
    flag: '🇮🇩',
    region: 'Indonesia',
  },
  {
    code: 'ro',
    name: 'Română',
    englishName: 'Romanian',
    flag: '🇷🇴',
    region: 'România',
  },
];
