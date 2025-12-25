import React, { useState } from 'react';
import { Copy, Check, Info } from 'lucide-react';
import { TranslationItem } from '../types';
import { motion } from 'framer-motion';

interface SyntaxCardProps {
  item: TranslationItem;
}

export const SyntaxCard: React.FC<SyntaxCardProps> = ({ item }) => {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, type: 'synk' | 'arduino') => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  // Helper to highlight variables in Synk code
  const highlightSynk = (text: string) => {
    const parts = text.split(/(<[^>]+>)/g);
    return parts.map((part, i) => {
      if (part.startsWith('<') && part.endsWith('>')) {
        return <span key={i} className="text-synk-600 dark:text-synk-400 font-bold px-0.5 rounded bg-synk-50 dark:bg-synk-900/30">{part}</span>;
      }
      return <span key={i}>{part}</span>;
    });
  };

  // Helper for Arduino C++ Syntax Highlighting
  const highlightArduino = (code: string) => {
    // Regex Patterns
    const keywords = /\b(void|int|long|unsigned|float|char|bool|const|if|else|while|for|return|switch|case|break|continue|#include)\b/g;
    const builtins = /\b(setup|loop|pinMode|digitalWrite|digitalRead|analogWrite|analogRead|delay|millis|Serial|print|println|begin|tone|noTone|map|abs|sqrt|random|LiquidCrystal_I2C|Servo|Ultrasonic|Motor|EEPROM|INPUT|OUTPUT|HIGH|LOW)\b/g;
    const strings = /("[^"]*")/g;
    const numbers = /\b(\d+)\b/g;
    const comments = /(\/\/.*)/g;

    // We split by tokens that match any of our groups, keeping the delimiters.
    // However, regex splitting is tricky with multiple groups.
    // A simpler approach for React is to split by a combined regex and check matches.
    
    // Combined regex (capturing groups for identification)
    const tokenRegex = /("[^"]*")|(\/\/.*)|(\b(?:void|int|long|unsigned|float|char|bool|const|if|else|while|for|return|switch|case|break|continue|#include)\b)|(\b(?:setup|loop|pinMode|digitalWrite|digitalRead|analogWrite|analogRead|delay|millis|Serial|print|println|begin|tone|noTone|map|abs|sqrt|random|LiquidCrystal_I2C|Servo|Ultrasonic|Motor|EEPROM|INPUT|OUTPUT|HIGH|LOW)\b)|(\b\d+\b)/g;

    const parts = code.split(tokenRegex).filter(part => part !== undefined && part !== "");

    return parts.map((part, index) => {
        if (part.startsWith('"')) return <span key={index} className="text-arduino-yellow dark:text-yellow-400">{part}</span>;
        if (part.startsWith('//')) return <span key={index} className="text-slate-400 italic">{part}</span>;
        if (part.match(/^(void|int|long|unsigned|float|char|bool|const|if|else|while|for|return|switch|case|break|continue|#include)$/)) 
            return <span key={index} className="text-purple-600 dark:text-purple-400 font-bold">{part}</span>;
        if (part.match(/^(setup|loop|pinMode|digitalWrite|digitalRead|analogWrite|analogRead|delay|millis|Serial|print|println|begin|tone|noTone|map|abs|sqrt|random|LiquidCrystal_I2C|Servo|Ultrasonic|Motor|EEPROM|INPUT|OUTPUT|HIGH|LOW)$/)) 
            return <span key={index} className="text-arduino-teal dark:text-cyan-400 font-medium">{part}</span>;
        if (part.match(/^\d+$/)) return <span key={index} className="text-blue-600 dark:text-blue-400">{part}</span>;
        
        return <span key={index} className="text-slate-700 dark:text-slate-300">{part}</span>;
    });
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.3 }}
      className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-synk-100/50 dark:hover:shadow-synk-900/10 transition-all duration-300"
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        
        {/* Synk Side */}
        <div className="p-5 flex flex-col justify-between relative bg-white dark:bg-slate-900 border-b md:border-b-0 md:border-r border-slate-100 dark:border-slate-800">
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-synk-100 text-synk-700 dark:bg-synk-900/40 dark:text-synk-300">
                  Synk
                </span>
                <button 
                  onClick={() => handleCopy(item.synk, 'synk')}
                  className="p-1.5 rounded-md text-slate-400 hover:text-synk-600 hover:bg-synk-50 dark:hover:bg-synk-900/30 transition-colors opacity-0 group-hover:opacity-100"
                  title="Copy Synk Code"
                >
                  {copied === 'synk' ? <Check size={14} /> : <Copy size={14} />}
                </button>
              </div>
              <code className="text-sm md:text-base font-mono text-slate-800 dark:text-slate-200 break-words leading-relaxed block">
                {highlightSynk(item.synk)}
              </code>
            </div>

            {item.note && (
              <div className="mt-4 flex items-start gap-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/50 p-2.5 rounded-lg border border-slate-100 dark:border-slate-800">
                <Info size={14} className="mt-0.5 flex-shrink-0 text-synk-500" />
                <span>{item.note}</span>
              </div>
            )}
        </div>

        {/* Arduino Side */}
        <div className="p-5 bg-slate-50 dark:bg-[#0b1120] relative">
          <div className="flex justify-between items-center mb-3">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-400">
              C++
            </span>
            <button 
              onClick={() => handleCopy(item.arduino, 'arduino')}
              className="p-1.5 rounded-md text-slate-400 hover:text-teal-600 hover:bg-teal-50 dark:hover:bg-teal-900/30 transition-colors opacity-0 group-hover:opacity-100"
              title="Copy Arduino Code"
            >
              {copied === 'arduino' ? <Check size={14} /> : <Copy size={14} />}
            </button>
          </div>
          <code className="text-sm md:text-base font-mono break-words leading-relaxed block">
            {highlightArduino(item.arduino)}
          </code>
        </div>
      </div>
    </motion.div>
  );
};