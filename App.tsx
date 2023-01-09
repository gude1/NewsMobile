/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Provider} from 'react-redux';
import Navigation from './src/navigation/navigation';
import {store} from './src/redux/store/store';

const App = () => {
  const isDarkMode: boolean = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
