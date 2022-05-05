import React, {useMemo, useState, useCallback} from 'react';

import {themes, Theme} from 'src/utils/constants';

type TActionsColumn = {
    theme: Theme;
    toggleTheme: () => void;
    addAction: (actionName: string) => void;
}

export const ActionsColumn = ({
  theme, toggleTheme, addAction,
}: TActionsColumn) => {
  const [textValue, setTextValue] = useState('');
  const [addedButtons, setAddedButtons] = useState([]);

  const themeButtonText = useMemo(
      () => `Set ${theme === themes.light ? 'Dark' : 'Light'} Theme`,
      [theme],
  );

  const onTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const {value} = event.target;
    setTextValue(value);
  };

  const onSendButtonClick = useCallback(() => {
    setTextValue('');
    addAction(`Message Sent: ${textValue}`);
  },
  [setTextValue, textValue, addAction],
  );

  const onThemeButtonClick = useCallback(() => {
    toggleTheme();
    addAction(`Theme was set to ${theme === themes.light ? 'Dark' : 'Light'}`);
  }, [theme, toggleTheme, addAction]);

  const addNewButton = useCallback(() => {
    const buttonNumber = addedButtons.length + 1;
    const buttonName = `Button ${buttonNumber}`;

    addAction(`${buttonName} added`);

    setAddedButtons([...addedButtons, buttonName]);
  }, [addedButtons.length, addAction]);

  const isSendButtonDisabled = useMemo(() => !textValue, [textValue]);

  const addButtonText = useMemo(
      () => `Add Button ${addedButtons.length + 1}`,
      [addedButtons.length],
  );

  return (
    <div className='left-column'>
      <button onClick={onThemeButtonClick} >
        {themeButtonText}
      </button>
      <textarea
        name='textarea'
        value={textValue}
        onChange={onTextChange}
        rows={6}
      />
      <button
        disabled={isSendButtonDisabled}
        onClick={onSendButtonClick}
      >
          Send
      </button>
      <button onClick={addNewButton} >
        {addButtonText}
      </button>
      {addedButtons.map(
          (buttonName) => (
            <button
              key={buttonName}
              onClick={() => {
                addAction(`${buttonName} clicked`);
              }}
            >
              {buttonName}
            </button>
          ))}
    </div>
  );
};
