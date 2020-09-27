import React, { createContext, useState, useEffect } from 'react';

interface StatesProps {
  toggleMenu: boolean;
  setToggleMenu: (value: boolean) => void;
  toggleThemeMenu: boolean;
  setToggleThemeMenu: (value: boolean) => void;
  theme: 'white' | 'dark';
  setTheme: (value: 'white' | 'dark') => void;
};

export const Context = createContext({} as StatesProps);

interface ProviderProps {
  children: React.ReactNode;
};

const Provider: React.FC<ProviderProps> = ({ children }) => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(true);
  const [toggleThemeMenu, setToggleThemeMenu] = useState<boolean>(false);
  const [theme, setTheme] = useState<'white' | 'dark'>('white');

  useEffect(() => {
    const currentTheme = window.localStorage.getItem('youtube-theme');

    if (currentTheme === 'white' || currentTheme === 'dark')
      setTheme(currentTheme);
  }, []);

  return (
    <Context.Provider
      value={{
        toggleMenu,
        setToggleMenu,
        toggleThemeMenu,
        setToggleThemeMenu,
        theme,
        setTheme,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;