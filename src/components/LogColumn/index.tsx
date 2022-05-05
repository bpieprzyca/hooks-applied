import React from 'react';

type TLogColumnProps = {
    actions: string[];
}

export const LogColumn = ({actions}: TLogColumnProps) => {
  return (
    <div className='right-column'>
      {
        actions.map((action, index) => (
          <span key={index} className='action-text'>
            {action}
          </span>
        ))
      }
    </div>
  );
};
