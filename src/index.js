import '~/config/ReactotronConfig';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import { store, persistor } from '~/store';
import Routes from '~/routes';

console.disableYellowBox = true;

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
  },
  dark: true,
};

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <PaperProvider theme={theme}>
        <Routes />
      </PaperProvider>
    </PersistGate>
  </Provider>
);

export default App;
