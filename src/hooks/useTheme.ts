import {lightTheme, darkTheme} from 'components/PageLayout/themes.css';
import {themes} from 'utils/constants';

import {ThemeContext} from 'contexts/theme';
import {useContext} from 'react';

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeContext');
  }

  const {theme, toggleTheme} = context;

  return ({
    theme,
    themeClass: theme === themes.light ? lightTheme : darkTheme,
    toggleTheme,
  });
};
