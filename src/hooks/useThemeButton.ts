import {useMemo} from 'react';
import {themes} from 'utils/constants';
import {useActions} from './useActions';
import {useTheme} from './useTheme';

export const useThemeButton = () => {
  const {toggleTheme, theme} = useTheme();
  const {addAction} = useActions();

  const onThemeButtonClick = () => {
    toggleTheme();
    addAction(`Theme was set to ${theme === themes.light ? 'Dark' : 'Light'}`);
  };

  const themeButtonText = useMemo(
      () => `Set ${theme === themes.light ? 'Dark' : 'Light'} Theme`,
      [theme],
  );

  return {
    onThemeButtonClick,
    themeButtonText,
  };
};
