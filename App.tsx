import React, { useState, useEffect, useMemo } from 'react';
import { Moon, Sun, Search, Menu, X, BookOpen, Code2, Telescope, Eraser } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SYNTAX_DATA } from './constants';
import { SyntaxCard } from './components/SyntaxCard';

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>(SYNTAX_DATA[0].id);

  // Initialize theme based on system preference
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }, []);

  // Apply theme class to document
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  // Filter logic
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

  const scrollToCategory = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset calculation for fixed header (approx 80px) + some breathing room
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setActiveCategory(id);
      setMobileMenuOpen(false);
    }
  };

  // Setup intersection observer to update active category on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.id);
          }
        });
      },
      { 
        // Adjust rootMargin to trigger when the section is near the middle/top of viewport
        rootMargin: '-20% 0px -70% 0px' 
      }
    );

    SYNTAX_DATA.forEach((cat) => {
      const el = document.getElementById(cat.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [filteredData]); // Re-run when data changes (filter applied)

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-synk-200 dark:selection:bg-synk-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <div 
              className="flex items-center gap-2.5 cursor-pointer group" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className="bg-synk-500 rounded-xl p-1.5 text-white shadow-lg shadow-synk-500/30 group-hover:scale-105 transition-transform duration-300">
                <Code2 size={22} strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg tracking-tight text-slate-900 dark:text-white leading-none">
                  Synk Syntax
                </span>
                <span className="text-[0.6rem] uppercase tracking-widest font-bold text-synk-600 dark:text-synk-400 mt-0.5">
                  Docs v2.0
                </span>
              </div>
            </div>

            {/* Desktop Navigation & Search */}
            <div className="hidden md:flex items-center gap-6">
              <div className="relative group">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-synk-500 transition-colors" size={16} />
                <input 
                  type="text"
                  placeholder="Search commands..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 pr-4 py-1.5 bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 focus:border-synk-500 dark:focus:border-synk-500 rounded-full text-sm outline-none transition-all w-64 text-slate-800 dark:text-slate-200 placeholder:text-slate-500"
                />
                {searchQuery && (
                   <button 
                     onClick={() => setSearchQuery('')}
                     className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                   >
                     <X size={14} />
                   </button>
                )}
              </div>
              
              <div className="h-6 w-px bg-slate-200 dark:bg-slate-800"></div>

              <button 
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 transition-colors"
                aria-label="Toggle Theme"
              >
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-4">
              <button 
                  onClick={toggleTheme}
                  className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400"
                >
                  {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                </button>
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-600 dark:text-slate-300"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Search Bar */}
        {!mobileMenuOpen && (
           <div className="md:hidden px-4 pb-4 border-t border-slate-100 dark:border-slate-800/50 pt-3">
             <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input 
                  type="text"
                  placeholder="Search commands..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-slate-100 dark:bg-slate-900 border border-transparent focus:border-synk-500 rounded-lg text-sm outline-none transition-all text-slate-800 dark:text-slate-200"
                />
              </div>
           </div>
        )}
      </header>

      {/* Main Content Area */}
      <div className="flex flex-1 max-w-7xl mx-auto w-full relative">
        
        {/* Sidebar Navigation (Desktop) */}
        <nav className="hidden md:block w-64 lg:w-72 sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto pr-4 py-8 custom-scrollbar">
          <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-6 px-3">
            Categories
          </h3>
          <ul className="space-y-0.5">
            {SYNTAX_DATA.map((category) => (
              <li key={category.id}>
                <button
                  onClick={() => scrollToCategory(category.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 flex items-center justify-between group ${
                    activeCategory === category.id 
                      ? 'bg-synk-50 dark:bg-synk-900/20 text-synk-700 dark:text-synk-300 font-semibold translate-x-1' 
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-slate-200'
                  }`}
                >
                  <span className="truncate">{category.title.split('. ')[1]}</span>
                  {activeCategory === category.id && (
                    <motion.div layoutId="activeDot" className="w-1.5 h-1.5 rounded-full bg-synk-500 shadow-sm shadow-synk-500" />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Content */}
        <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8 w-full min-w-0">
          <div className="space-y-16">
            {filteredData.length === 0 ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-32 text-center"
              >
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-synk-100 dark:bg-synk-900/30 blur-2xl rounded-full"></div>
                  <div className="relative bg-white dark:bg-slate-900 p-6 rounded-full shadow-xl border border-slate-100 dark:border-slate-800">
                    <Telescope size={48} className="text-synk-500" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">No results found</h3>
                <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto mb-8">
                  We couldn't find any syntax matching "<span className="text-slate-800 dark:text-slate-200 font-medium">{searchQuery}</span>". 
                </p>
                <button 
                  onClick={() => setSearchQuery('')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-medium hover:opacity-90 transition-opacity"
                >
                  <Eraser size={18} />
                  Clear Search
                </button>
              </motion.div>
            ) : (
              filteredData.map((category) => (
                <section key={category.id} id={category.id} className="scroll-mt-28">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-synk-100 dark:bg-synk-900/30 text-synk-600 dark:text-synk-400">
                      <BookOpen size={20} />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                      {category.title}
                    </h2>
                  </div>
                  
                  <div className="grid gap-5">
                    {category.items.map((item) => (
                      <SyntaxCard key={item.id} item={item} />
                    ))}
                  </div>
                </section>
              ))
            )}
          </div>
          
          <footer className="mt-24 pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-slate-500 dark:text-slate-400 text-sm pb-8">
            <p>&copy; {new Date().getFullYear()} Synk Syntax v2.0 Documentation. All rights reserved.</p>
          </footer>
        </main>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-sm md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-3/4 max-w-xs bg-white dark:bg-slate-950 shadow-2xl p-6 overflow-y-auto border-l border-slate-200 dark:border-slate-800"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-8">
                <span className="font-bold text-lg text-slate-900 dark:text-white">Contents</span>
                <button onClick={() => setMobileMenuOpen(false)} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-500 transition-colors">
                  <X size={20} />
                </button>
              </div>
              <ul className="space-y-2">
                {SYNTAX_DATA.map((category) => (
                  <li key={category.id}>
                    <button
                      onClick={() => scrollToCategory(category.id)}
                      className={`w-full text-left px-4 py-3 rounded-xl text-sm transition-all ${
                        activeCategory === category.id 
                          ? 'bg-synk-500 text-white shadow-lg shadow-synk-500/30 font-medium' 
                          : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900'
                      }`}
                    >
                      {category.title}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;