/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect} from 'react';
import {StyleSheet, useColorScheme, ActivityIndicator} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Loader from './src/components/Loader';
import Navigation from './src/navigation/navigation';
import {persistor, store} from './src/redux/store/store';
import {configureGoogleSignIn} from './src/utils/google';

const App = () => {
  const isDarkMode: boolean = useColorScheme() === 'dark';

  useEffect(() => {
    configureGoogleSignIn();
    return () => {};
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator />} persistor={persistor} />
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
