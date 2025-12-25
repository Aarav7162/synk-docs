import React, { useState, useMemo } from 'react';
import { Search, X, BookOpen, Telescope, Eraser } from 'lucide-react';
import { motion } from 'framer-motion';
import { SYNTAX_DATA } from '../constants';
import { SyntaxCard } from './SyntaxCard';

export const SyntaxExplorer: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = useMemo(() => {
    if (!searchQuery.trim()) return SYNTAX_DATA;
    const lowerQuery = searchQuery.toLowerCase();
    
    return SYNTAX_DATA.map(category => ({
      ...category,
      items: category.items.filter(item => 
        item.synk.toLowerCase().includes(lowerQuery) || 
        item.arduino.toLowerCase().includes(lowerQuery)
      )
    })).filter(category => category.items.length > 0);
  }, [searchQuery]);

  return (
    <div className="space-y-8 max-w-4xl mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Syntax Reference</h1>
        <p className="text-slate-600 dark:text-slate-400 mb-6">
          Browse the complete dictionary of Synk commands and their Arduino C++ equivalents.
        </p>

        {/* Search Bar */}
        <div className="relative group max-w-xl">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-synk-500 transition-colors" size={18} />
          <input 
            type="text"
            placeholder="Search for command, pin, or logic..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-10 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:border-synk-500 focus:ring-1 focus:ring-synk-500 rounded-xl text-base outline-none transition-all shadow-sm text-slate-800 dark:text-slate-200"
          />
          {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
              >
                <X size={16} />
              </button>
          )}
        </div>
      </div>

      <div className="space-y-16">
        {filteredData.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-20 text-center bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800"
          >
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-synk-100 dark:bg-synk-900/30 blur-2xl rounded-full"></div>
              <div className="relative bg-white dark:bg-slate-800 p-6 rounded-full shadow-sm border border-slate-100 dark:border-slate-700">
                <Telescope size={40} className="text-synk-500" strokeWidth={1.5} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No results found</h3>
            <p className="text-slate-500 dark:text-slate-400 max-w-sm mx-auto mb-6 text-sm">
              We couldn't find any syntax matching "<span className="text-slate-800 dark:text-slate-200 font-medium">{searchQuery}</span>".
            </p>
            <button 
              onClick={() => setSearchQuery('')}
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-lg text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              <Eraser size={16} />
              Clear Search
            </button>
          </motion.div>
        ) : (
          filteredData.map((category) => (
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              key={category.id} 
              id={category.id} 
              className="scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-6 sticky top-20 bg-gray-50/95 dark:bg-[#0f172a]/95 backdrop-blur py-2 z-10">
                <div className="p-1.5 rounded-lg bg-synk-100 dark:bg-synk-900/30 text-synk-600 dark:text-synk-400">
                  <BookOpen size={18} />
                </div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                  {category.title}
                </h2>
              </div>
              
              <div className="grid gap-5">
                {category.items.map((item) => (
                  <SyntaxCard key={item.id} item={item} />
                ))}
              </div>
            </motion.section>
          ))
        )}
      </div>
    </div>
  );
};
