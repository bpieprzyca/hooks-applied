import React from 'react';
import {LogColumn} from 'components/LogColumn/';
import {ActionsColumn} from 'components/ActionsColumn';

import {wrapperClass} from './styles.css';
import {useTheme} from 'hooks/useTheme';

export const PageLayout = () => {
  const {themeClass} = useTheme();

  return (
    <div className={`${wrapperClass} ${themeClass}`}>
      <ActionsColumn/>
      <LogColumn/>
    </div>
  );
};
