import React, {useState, useCallback} from 'react';

import './style.css';

import {LogColumn} from 'src/components/LogColumn/';
import {ActionsColumn} from 'src/components/ActionsColumn';

import {DEFAULT_THEME, themes} from 'src/utils/constants';
import {getActionNameWithDate} from 'src/utils/getActionNameWithDate';

export const App = () => {
  const [theme, setTheme] = useState(DEFAULT_THEME);
  const [actions, setActions] = useState([]);

  const addAction = useCallback(
      (actionName: string) => {
        setActions([getActionNameWithDate(actionName), ...actions]);
      },
      [actions.length],
  );

  const toggleTheme = useCallback(() => {
    const nextTheme = theme === themes.light ? themes.dark : themes.light;
    setTheme(nextTheme);
  }, [theme]);

  return (
    <div className={`wrapper theme-${theme}`}>
      <ActionsColumn
        theme={theme}
        toggleTheme={toggleTheme}
        addAction={addAction}
      />
      <LogColumn actions={actions} />
    </div>
  );
};
