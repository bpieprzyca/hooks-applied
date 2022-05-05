import React from 'react';

import {ThemeContextProvider} from 'contexts/theme';
import {PageLayout} from 'components/PageLayout';
import {ActionsContextProvider} from 'contexts/actions';

export const App = () => (
  <ThemeContextProvider>
    <ActionsContextProvider>
      <PageLayout />
    </ActionsContextProvider>
  </ThemeContextProvider>
);

