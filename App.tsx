import React from 'react';

import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import NavigatorWrapper from './src/navigation/NavigatorWrapper';

const App = (): JSX.Element => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.dark}>
        <NavigatorWrapper />
      </ApplicationProvider>
    </>
  );
};

export default App;
