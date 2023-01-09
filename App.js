import Navigation from './src/navigation';

import React, { useEffect, useState } from 'react';
import {Text} from 'react-native';
import {Provider as ReduxProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import { store } from './src/Redux/store';
import {persistStore} from 'redux-persist';

import SplashScreen from './src/screens/splash';

const persistor = persistStore(store);


const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadAssets();
  });

  const loadAssets = () => {
    setTimeout(() => {
      // setupHttpConfig(setIsLoading);
      setIsLoading(false)
    }, 5000);
  };

  const renderLoading = () => <SplashScreen />;

  renderApp = () => (
    <ReduxProvider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Navigation />
    </PersistGate>
  </ReduxProvider>
  );
  return isLoading ? renderLoading(): renderApp();
};

export default App;
