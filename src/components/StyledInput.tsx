import {
  StyleSheet,
  Text,
  View,
  StyleProp,
  TextInputProps,
  ViewProps,
} from 'react-native';
import React from 'react';
import {Input, InputProps} from '@rneui/themed';
import {useTheme} from '@react-navigation/native';

// interface StyledInputProps extends InputProps {}

const StyledInput = ({
  placeholder = 'Please enter your name',
  label = 'Name',
  keyboardType = 'name-phone-pad',
  selectionColor = '#a5b4fc',
  cursorColor = '#a5b4fc',
  placeholderTextColor = '#6b7280',
  errorMessage = '',
  rightIcon = {},
  leftIcon = {},
  ref = null,
  multiline = false,
  maxLength = 30,
}: InputProps) => {
  const {colors, dark} = useTheme();
  return (
    <Input
      containerStyle={styles.container}
      inputContainerStyle={[
        styles.inputContainer,
        {borderColor: colors.border},
      ]}
      keyboardType={keyboardType}
      inputStyle={[styles.input, {color: dark ? '#fff' : '#000'}]}
      label={label}
      labelStyle={[styles.label, {color: colors.text}]}
      placeholder={placeholder}
      selectionColor={selectionColor}
      cursorColor={cursorColor}
      maxLength={maxLength}
      placeholderTextColor={placeholderTextColor}
      errorMessage={errorMessage}
      rightIcon={rightIcon}
      leftIcon={leftIcon}
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
