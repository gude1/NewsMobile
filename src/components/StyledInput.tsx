import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Input, InputProps} from '@rneui/themed';
import {useTheme} from '@react-navigation/native';

const StyledInput = (props: object): JSX.Element => {
  const {colors, dark} = useTheme();
  return (
    <Input
      containerStyle={styles.container}
      inputContainerStyle={[
        styles.inputContainer,
        {borderColor: colors.border},
      ]}
      keyboardType="name-phone-pad"
      inputStyle={[styles.input, {color: dark ? '#fff' : '#000'}]}
      label="Name"
      labelStyle={[styles.label, {color: colors.text}]}
      placeholder="Please enter your name"
      selectionColor={'#a5b4fc'}
      cursorColor="#a5b4fc"
      placeholderTextColor={'#6b7280'}
      //   errorMessage="Hmm"
      //   rightIcon={{type: 'font-awesome', name: 'comment', color: colors.text}}
      {...props}
    />
  );
};

export default StyledInput;

const styles = StyleSheet.create({
  container: {
    // borderWidth: 2,
    marginVertical: 5,
    paddingLeft: 0,
    borderColor: 'purple',
  },
  inputContainer: {
    borderWidth: 1,
    borderBottomWidth: 1,
    marginTop: 5,
    // borderColor: 'red',
    borderRadius: 10,
  },
  input: {
    // borderWidth: 1,
    fontSize: 14,
    marginLeft: 10,
    borderColor: 'blue',
  },
  label: {
    color: '#4b5563',
    fontWeight: '600',
  },
});
