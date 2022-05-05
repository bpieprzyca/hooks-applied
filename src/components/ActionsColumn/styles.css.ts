import {style} from '@vanilla-extract/css';

import {variables} from 'components/PageLayout/themes.css';

export const textareaClass = style({
  resize: 'none',
  flexShrink: 0,
  width: 500,
  color: 'inherit',
  marginRight: 12,
  outline: 'none',
});

export const textareaWrapperClass = style({
  display: 'flex',
  alignItems: 'center',
  margin: '24px 0 48px',
});

export const textareaSubmitButtonClass = style({
  margin: 0,
});

export const leftColumnClass = style({
  width: '40%',
  backgroundColor: variables.leftPart.background,
  color: variables.leftPart.text,
});

export const bigButtonClass = style({
  padding: '24px 48px',
});
