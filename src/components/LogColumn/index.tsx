import React from 'react';

import {columnClass} from 'components/PageLayout/styles.css';
import {useActions} from 'hooks/useActions';

import {
  rightColumnClass,
  actionTextClass,
} from './styles.css';

export const LogColumn = () => {
  const {actions} = useActions();

  return (
    <div className={`${rightColumnClass} ${columnClass}`}>
      <h1>LOG</h1>
      {
        actions.map((action, index) => (
          <span key={index} className={actionTextClass}>
            {action}
          </span>
        ))
      }
    </div>
  );
};
