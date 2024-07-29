import { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/outline';

const DarkModeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(storedDarkMode);

    if (storedDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode));

    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="relative w-14 h-7 bg-gray-300 dark:bg-gray-700 rounded-full p-1 flex items-center transition-colors duration-300 hover:bg-gray-400 dark:hover:bg-gray-600 group"
    >
      <span
        className={`absolute w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
          darkMode ? 'translate-x-7' : 'translate-x-0'
        }`}
      />
      <SunIcon
        className={`absolute left-1 w-5 h-5 text-gray-500 transition-opacity duration-300 ${
          darkMode ? 'opacity-0' : 'opacity-100'
        } group-hover:text-yellow-500`}
      />
      <MoonIcon
        className={`absolute right-1 w-5 h-5 text-gray-500 transition-opacity duration-300 ${
          darkMode ? 'opacity-100' : 'opacity-0'
        } group-hover:text-blue-500`}
      />
    </button>
  );
};

export default DarkModeToggle;
