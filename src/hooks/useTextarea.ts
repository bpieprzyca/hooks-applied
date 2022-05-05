import {useState, useMemo} from 'react';
import {useActions} from './useActions';

export const useTextarea = () => {
  const [textareaValue, setTextValue] = useState('');
  const {addAction} = useActions();

  const onTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const {value} = event.target;
    setTextValue(value);
  };

  const onSubmitTextarea =() => {
    setTextValue('');
    addAction(`Message Sent: ${textareaValue}`);
  };

  const isSubmitTextareaDisabled = useMemo(
      () => !textareaValue,
      [textareaValue],
  );

  return {
    textareaValue,
    onTextareaChange,
    onSubmitTextarea,
    isSubmitTextareaDisabled,
  };
};
