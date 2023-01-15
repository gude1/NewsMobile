import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from '../hooks/hook';
import SwitchWithIcons from 'react-native-switch-with-icons';
import {setUser} from '../redux/slice/UserSlice';
import {useTheme} from '@react-navigation/native';

const ThemeSwitch = (): JSX.Element => {
  const {colors, dark} = useTheme();
  const dispatch = useAppDispatch();

  return (
    <SwitchWithIcons
      value={dark}
      icon={{
        true: require('../assets/images/moon.png'),
        false: require('../assets/images/sun.png'),
      }}
      onValueChange={val => {
        if (val == false) {
          dispatch(
            setUser({
              theme: 'light',
            }),
          );
        } else {
          dispatch(
            setUser({
              theme: 'dark',
            }),
          );
        }
      }}
    />
  );
};

export default ThemeSwitch;

const styles = StyleSheet.create({});
