export interface TranslationItem {
  id: string;
  synk: string;
  arduino: string;
  note?: string;
}

export interface Category {
  id: string;
  title: string;
  items: TranslationItem[];
}

export interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}
