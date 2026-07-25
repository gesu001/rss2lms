'use client';

import { useTheme } from '@/app/context/ThemeContext';
import Link from 'next/link';

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="w-full bg-white dark:bg-slate-900 shadow-sm border-b border-gray-200 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center gap-3 py-3 sm:py-0 sm:h-16">
          <div className="min-w-0 flex-1">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white truncate">
              <Link
                href="/"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="Go to homepage"
              >
                RSS2LMS
              </Link>
            </h1>
          </div>
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn inline-flex items-center justify-center shrink-0 px-3 sm:px-4 py-2 rounded-lg text-sm font-medium transition-colors 
              bg-gray-100 dark:bg-slate-800 text-gray-900 dark:text-white 
              hover:bg-gray-200 dark:hover:bg-slate-700! dark:hover:text-white!
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-slate-900"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? 'Dark mode' : 'Light mode'}
          </button>
        </div>
      </div>
    </header>
  );
}
