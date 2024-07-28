import { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/outline';

const DarkModeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    // Načtení stavu z localStorage při prvním renderu
    const storedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(storedDarkMode);

    // Nastavení class podle načteného stavu
    if (storedDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', JSON.stringify(!darkMode));

    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-md dark:bg-gray-900 text-gray-900 dark:text-gray-200 hover:text-slate-600 hover:dark:text-slate-400"
    >
      {darkMode ? (
        <SunIcon className="w-6 h-6" />
      ) : (
        <MoonIcon className="w-6 h-6" />
      )}
    </button>
  );
};

export default DarkModeToggle;
