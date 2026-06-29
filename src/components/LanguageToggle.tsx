import React from 'react';
import { Language } from '../types';
import { Globe } from 'lucide-react';

interface LanguageToggleProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
}

export default function LanguageToggle({ currentLanguage, onLanguageChange }: LanguageToggleProps) {
  return (
    <div className="flex items-center gap-1 bg-white/85 dark:bg-zinc-900/85 backdrop-blur-sm border border-zinc-200/50 dark:border-zinc-800/50 p-1.5 rounded-full shadow-sm hover:shadow-md transition-all duration-300">
      <div className="flex items-center px-2.5 text-zinc-500 text-xs font-medium gap-1">
        <Globe size={13} className="text-leaf-600 animate-pulse" />
        <span className="sr-only">Language:</span>
      </div>
      <button
        id="btn-lang-en"
        onClick={() => onLanguageChange('en')}
        className={`px-3 py-1 cursor-pointer text-xs font-semibold rounded-full transition-all duration-200 ${
          currentLanguage === 'en'
            ? 'bg-leaf-600 text-white shadow-sm'
            : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100'
        }`}
      >
        EN
      </button>
      <button
        id="btn-lang-pt"
        onClick={() => onLanguageChange('pt')}
        className={`px-3 py-1 cursor-pointer text-xs font-semibold rounded-full transition-all duration-200 ${
          currentLanguage === 'pt'
            ? 'bg-leaf-600 text-white shadow-sm'
            : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100'
        }`}
      >
        PT-BR
      </button>
    </div>
  );
}
