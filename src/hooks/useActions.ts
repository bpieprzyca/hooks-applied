import {useContext} from 'react';
import {ActionsContext} from 'contexts/actions';

export const useActions = () => {
  const context = useContext(ActionsContext);

  if (context === undefined) {
    throw new Error('useActions must be used within a ThemeContext');
  }

  const {actions, addAction} = context;

  return {actions, addAction};
};
