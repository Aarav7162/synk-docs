import React from 'react';
import { motion } from 'framer-motion';
import { DocSection } from '../types';

interface DocContentProps {
  section: DocSection;
}

export const DocContent: React.FC<DocContentProps> = ({ section }) => {
  return (
    <motion.div
      key={section.id}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="max-w-3xl mx-auto py-8"
    >
      <div className="mb-4">
        <span className="text-xs font-bold uppercase tracking-widest text-synk-600 dark:text-synk-400">
          {section.category}
        </span>
      </div>
      
      {/* Content Injection */}
      <div className="doc-content">
        {section.content}
      </div>
    </motion.div>
  );
};
