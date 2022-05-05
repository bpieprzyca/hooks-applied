
import {style, globalStyle} from '@vanilla-extract/css';

import {variables} from './themes.css';

export const columnClass = style({
  float: 'left',
  boxSizing: 'border-box',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: 24,
  overflow: 'auto',
  transition: 'all 300ms',
});

globalStyle('button', {
  'backgroundColor': variables.button.background,
  'color': variables.button.text,
  'border': 'none',
  'borderRadius': 4,
  'padding': 16,
  'marginBottom': 24,
  'cursor': 'pointer',
  'transition': 'all 300ms',
});

globalStyle('button:disabled', {
  opacity: 0.6,
  cursor: 'default',
});

globalStyle('h1', {
  marginBottom: 72,
});

export const wrapperClass = style({
  height: '100vh',
  width: '100%',
});
