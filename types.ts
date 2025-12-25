import React from 'react';

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

export interface DocSection {
  id: string;
  title: string;
  category: 'Guide' | 'Academy' | 'IDE' | 'Reference';
  content: React.ReactNode;
}
