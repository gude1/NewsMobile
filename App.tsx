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
import {StyleSheet, useColorScheme} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import Navigation from './src/navigation/navigation';
import {store} from './src/redux/store/store';
import {configureGoogleSignIn} from './src/utils/google';

const App = () => {
  const isDarkMode: boolean = useColorScheme() === 'dark';

  useEffect(() => {
    configureGoogleSignIn();
    return () => {};
  }, []);

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
