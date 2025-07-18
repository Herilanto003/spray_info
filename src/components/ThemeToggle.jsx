import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = ({ className = "" }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`relative p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 group overflow-hidden hover:shadow-md ${className}`}
      aria-label="Toggle theme"
    >
      <span className="absolute inset-0 bg-gradient-to-r from-yellow-200 to-orange-200 dark:from-blue-200 dark:to-purple-200 transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-lg"></span>
      <span className="relative z-10 block transition-transform duration-300 group-hover:rotate-180">
        {isDarkMode ? (
          <Sun className="h-5 w-5 text-gray-700 dark:text-gray-300 group-hover:text-orange-600" />
        ) : (
          <Moon className="h-5 w-5 text-gray-700 dark:text-gray-300 group-hover:text-blue-600" />
        )}
      </span>
    </button>
  );
};

export default ThemeToggle;