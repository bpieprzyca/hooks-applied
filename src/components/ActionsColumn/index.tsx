import React from 'react';

import {columnClass} from 'components/PageLayout/styles.css';

import {
  textareaClass,
  textareaWrapperClass,
  textareaSubmitButtonClass,
  leftColumnClass,
  bigButtonClass,
} from './styles.css';

import {useTextarea} from 'hooks/useTextarea';
import {useThemeButton} from 'hooks/useThemeButton';
import {useAdditiveButtons} from 'hooks/useAdditiveButtons';
import {AddedButton} from './components/AddedButton';

export const ActionsColumn = () => {
  const {
    textareaValue,
    onTextareaChange,
    onSubmitTextarea,
    isSubmitTextareaDisabled,
  } = useTextarea();

  const {
    onThemeButtonClick,
    themeButtonText,
  } = useThemeButton();

  const {
    addedButtons,
    addNewButton,
    addButtonText,
  } = useAdditiveButtons();

  return (
    <div className={`${leftColumnClass} ${columnClass}`}>
      <h1>ACTIONS</h1>
      <button className={bigButtonClass} onClick={onThemeButtonClick} >
        {themeButtonText}
      </button>
      <div className={textareaWrapperClass}>
        <textarea
          className={textareaClass}
          name='textarea'
          value={textareaValue}
          onChange={onTextareaChange}
          rows={12}
        />
        <button
          className={textareaSubmitButtonClass}
          disabled={isSubmitTextareaDisabled}
          onClick={onSubmitTextarea}
        >
          Send
        </button>
      </div>
      <button className={bigButtonClass} onClick={addNewButton}>
        {addButtonText}
      </button>
      {addedButtons.map(
          (buttonName) => (
            <AddedButton buttonName={buttonName} key={buttonName} />
          ))
      }
    </div>
  );
};
