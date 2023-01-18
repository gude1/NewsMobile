/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import crashlytics from '@react-native-firebase/crashlytics';
import React, {useEffect, useRef} from 'react';
import {
  StyleSheet,
  Alert,
  useColorScheme,
  ActivityIndicator,
} from 'react-native';
import codePush from 'react-native-code-push';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Navigation from './src/navigation/navigation';
import {persistor, store} from './src/redux/store/store';
import messaging from '@react-native-firebase/messaging';
import {configureGoogleSignIn} from './src/utils/google';
import {setupRemoteConfigDefaults} from './src/utils/remoteconfig';

let codePushOptions = {checkFrequency: codePush.CheckFrequency.ON_APP_RESUME};

const App = () => {
  const isDarkMode: boolean = useColorScheme() === 'dark';

  useEffect(() => {
    configureGoogleSignIn();
    crashlytics().log('App mounted');
    setupRemoteConfigDefaults();
    return () => {};
  }, []);

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
      console.log('New  message', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
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

export default codePush(codePushOptions, App);
