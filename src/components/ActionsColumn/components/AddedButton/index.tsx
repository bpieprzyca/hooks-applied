import React from 'react';
import {useActions} from 'hooks/useActions';

type TAddedButtonProps = {
    buttonName: string,
}

export const AddedButton = ({buttonName}: TAddedButtonProps) => {
  const {addAction} = useActions();

  return (
    <button
      onClick={() => {
        addAction(`${buttonName} clicked`);
      }}
    >
      {buttonName}
    </button>
  );
};


