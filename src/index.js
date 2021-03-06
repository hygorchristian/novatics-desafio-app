import '~/config/ReactotronConfig';
import '~/config/StatusBarConfig';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import AuthProvider from '~/components/AuthProvider';

import { store, persistor } from '~/store';
import Routes from '~/routes';
import colors from '~/assets/colors';

console.disableYellowBox = true;

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    accent: colors.secondary,
  },
  dark: true,
};

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <PaperProvider theme={theme}>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </PaperProvider>
    </PersistGate>
  </Provider>
);

export default App;
