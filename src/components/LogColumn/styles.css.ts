import {style} from '@vanilla-extract/css';

import {variables} from 'components/PageLayout/themes.css';

export const rightColumnClass = style({
  width: '60%',
  backgroundColor: variables.rightPart.background,
  color: variables.rightPart.text,
});

export const actionTextClass = style({
  marginBottom: 16,
});

