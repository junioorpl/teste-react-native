import React from 'react';
import {Platform, StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';
import {Provider} from 'react-redux';

import {theme} from './baseStyles';
import store from './store';
import Navigation from './screens';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StatusBar
          backgroundColor={theme.colors.primary}
          barStyle={Platform.OS === 'ios' ? 'light-content' : 'default'}
        />
        <Navigation />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
