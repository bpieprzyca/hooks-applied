import React, {useState} from 'react';

import {getActionNameWithDate} from 'utils/getActionNameWithDate';

type TActionsContextProps = {
    children: React.ReactNode,
}

type TThemeContextValue = {
    actions: string[],
    addAction: (actionName: string) => void,
}

const defaultValue: TThemeContextValue = {
  actions: [],
  addAction: () => {},
};

export const ActionsContext = React.createContext(defaultValue);

export const ActionsContextProvider = ({children}: TActionsContextProps) => {
  const [actions, setActions] = useState([]);

  const addAction = (actionName: string) => {
    setActions([getActionNameWithDate(actionName), ...actions]);
  };

  const value = {
    actions,
    addAction,
  };
  return (
    <ActionsContext.Provider value={value}>
      {children}
    </ActionsContext.Provider>
  );
};
