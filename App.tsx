import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Code2, ChevronRight, Book, Terminal, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { DOCS_SECTIONS } from './data/docs';
import { DocContent } from './components/DocContent';
import { SyntaxExplorer } from './components/SyntaxExplorer';

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState<string>('getting-started');

  // Initialize theme
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }, []);

  // Apply theme
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

  const handleNavClick = (id: string) => {
    setActiveSectionId(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Grouping logic for sidebar
  const categories = ['Guide', 'Academy', 'IDE', 'Reference'];

  const getIconForCategory = (cat: string) => {
    switch(cat) {
      case 'Academy': return <GraduationCap size={16} />;
      case 'IDE': return <Terminal size={16} />;
      case 'Reference': return <Code2 size={16} />;
      default: return <Book size={16} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-synk-200 dark:selection:bg-synk-900 bg-gray-50 dark:bg-[#0f172a]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-[#0f172a]/90 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <div 
              className="flex items-center gap-3 cursor-pointer group" 
              onClick={() => handleNavClick('getting-started')}
            >
              <div className="bg-synk-500 rounded-xl p-1.5 text-white shadow-lg shadow-synk-500/30 group-hover:scale-105 transition-transform duration-300">
                <Code2 size={22} strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg tracking-tight text-slate-900 dark:text-white leading-none">
                  Synk
                </span>
                <span className="text-[0.6rem] uppercase tracking-widest font-bold text-synk-600 dark:text-synk-400 mt-0.5">
                  User Documentation
                </span>
              </div>
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-4">
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
               <button onClick={toggleTheme} className="p-2 text-slate-600 dark:text-slate-400">
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
      </header>

      <div className="flex flex-1 max-w-8xl mx-auto w-full relative">
        
        {/* Sidebar Navigation (Desktop) */}
        <nav className="hidden lg:block w-72 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto px-6 py-8 border-r border-slate-200 dark:border-slate-800/50">
          <div className="space-y-8">
            {categories.map((category) => {
              // Find items in this category
              // Special case: "Reference" is not in DOCS_SECTIONS, it's a manual entry for the Syntax Explorer
              const items = DOCS_SECTIONS.filter(d => d.category === category);
              const isReference = category === 'Reference';

              if (items.length === 0 && !isReference) return null;

              return (
                <div key={category}>
                  <h3 className="flex items-center gap-2 text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4">
                    {getIconForCategory(category)}
                    {category}
                  </h3>
                  <ul className="space-y-1">
                    {items.map((section) => (
                      <li key={section.id}>
                        <button
                          onClick={() => handleNavClick(section.id)}
                          className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 flex items-center justify-between group ${
                            activeSectionId === section.id 
                              ? 'bg-synk-50 dark:bg-synk-900/20 text-synk-700 dark:text-synk-300 font-semibold' 
                              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-slate-200'
                          }`}
                        >
                          {section.title}
                          {activeSectionId === section.id && (
                            <ChevronRight size={14} className="text-synk-500" />
                          )}
                        </button>
                      </li>
                    ))}
                    {/* Manual entry for Reference/Syntax Tool */}
                    {isReference && (
                       <li>
                       <button
                         onClick={() => handleNavClick('syntax-reference')}
                         className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 flex items-center justify-between group ${
                           activeSectionId === 'syntax-reference'
                             ? 'bg-synk-50 dark:bg-synk-900/20 text-synk-700 dark:text-synk-300 font-semibold' 
                             : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-slate-200'
                         }`}
                       >
                         Syntax Reference
                         {activeSectionId === 'syntax-reference' && (
                           <ChevronRight size={14} className="text-synk-500" />
                         )}
                       </button>
                     </li>
                    )}
                  </ul>
                </div>
              );
            })}
          </div>
        </nav>

        {/* Content Area */}
        <main className="flex-1 px-4 sm:px-6 lg:px-12 py-8 w-full min-w-0 bg-white dark:bg-[#0f172a] min-h-[calc(100vh-4rem)]">
          <AnimatePresence mode="wait">
            {activeSectionId === 'syntax-reference' ? (
              <motion.div
                key="syntax-explorer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <SyntaxExplorer />
              </motion.div>
            ) : (
              <div key="doc-content-wrapper">
                {(() => {
                  const section = DOCS_SECTIONS.find(s => s.id === activeSectionId);
                  if (section) {
                    return <DocContent section={section} />;
                  }
                  return null;
                })()}
              </div>
            )}
          </AnimatePresence>
          
          <footer className="mt-20 pt-8 border-t border-slate-100 dark:border-slate-800 text-center text-slate-400 dark:text-slate-500 text-sm pb-8">
            <p>&copy; {new Date().getFullYear()} Synk Platform. Built for the future of embedded learning.</p>
          </footer>
        </main>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute left-0 top-0 bottom-0 w-3/4 max-w-xs bg-white dark:bg-slate-950 shadow-2xl p-6 overflow-y-auto border-r border-slate-200 dark:border-slate-800"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-8">
                <span className="font-bold text-lg text-slate-900 dark:text-white">Documentation</span>
                <button onClick={() => setMobileMenuOpen(false)} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-500 transition-colors">
                  <X size={20} />
                </button>
              </div>
              
              <div className="space-y-6">
                {categories.map((category) => {
                  const items = DOCS_SECTIONS.filter(d => d.category === category);
                  const isReference = category === 'Reference';
                  if (items.length === 0 && !isReference) return null;

                  return (
                    <div key={category}>
                       <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">{category}</h4>
                       <ul className="space-y-2">
                        {items.map((section) => (
                           <li key={section.id}>
                           <button
                             onClick={() => handleNavClick(section.id)}
                             className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                               activeSectionId === section.id 
                                 ? 'bg-synk-500 text-white shadow-md' 
                                 : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900'
                             }`}
                           >
                             {section.title}
                           </button>
                         </li>
                        ))}
                         {isReference && (
                           <li>
                             <button
                               onClick={() => handleNavClick('syntax-reference')}
                               className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                                 activeSectionId === 'syntax-reference' 
                                   ? 'bg-synk-500 text-white shadow-md' 
                                   : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900'
                               }`}
                             >
                               Syntax Reference
                             </button>
                           </li>
                         )}
                       </ul>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
