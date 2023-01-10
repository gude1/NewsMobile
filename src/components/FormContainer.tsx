import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type FormContainerProps = {
  children: JSX.Element;
  style?: object;
};

const FormContainer = ({children, style}: FormContainerProps): JSX.Element => {
  return <View style={[styles.form, style]}>{children}</View>;
};

export default FormContainer;

const styles = StyleSheet.create({
  form: {
    borderWidth: 1,
    width: '95%',
    marginTop: 80,
  },
});
