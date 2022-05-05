import {useMemo, useState} from 'react';
import {useActions} from './useActions';

export const useAdditiveButtons = () => {
  const [addedButtons, setAddedButtons] = useState([]);
  const {addAction} = useActions();

  const addNewButton = () => {
    const buttonNumber = addedButtons.length + 1;
    const buttonName = `Button ${buttonNumber}`;

    addAction(`${buttonName} added`);

    setAddedButtons([...addedButtons, buttonName]);
  };

  const addButtonText = useMemo(
      () => `Add Button ${addedButtons.length + 1}`,
      [addedButtons.length],
  );

  return {
    addedButtons,
    addNewButton,
    addButtonText,
  };
};
