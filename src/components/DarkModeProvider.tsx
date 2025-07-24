'use client';

import { useState, useEffect, createContext, useContext } from 'react';

const DarkModeContext = createContext({ isDarkMode: false, toggleDarkMode: () => {} });

export default function DarkModeProvider({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(savedMode ? JSON.parse(savedMode) : prefersDark);
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export const useDarkMode = () => useContext(DarkModeContext);