import React, {useState} from 'react';
import {DEFAULT_THEME, Theme, themes} from 'utils/constants';

type TThemeContextProps = {
    children: React.ReactNode,
}

type TThemeContextValue = {
    theme: Theme,
    toggleTheme: () => void,
}

const defaultValue: TThemeContextValue = {
  theme: DEFAULT_THEME,
  toggleTheme: () => {},
};

export const ThemeContext = React.createContext(defaultValue);

export const ThemeContextProvider = ({children}: TThemeContextProps) => {
  const [theme, setTheme] = useState(DEFAULT_THEME);

  const toggleTheme = () => {
    const nextTheme = theme === themes.light ? themes.dark : themes.light;
    setTheme(nextTheme);
  };

  const value = {
    theme,
    toggleTheme,
  };
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

