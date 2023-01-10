import {StyleSheet, Text, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import React from 'react';
import FormContainer from '../../components/FormContainer';
import {Input} from '@rneui/themed';

type LoginProps = {};

export const Login = ({}: LoginProps): JSX.Element => {
  const {colors} = useTheme();
  return (
    <View style={styles.container}>
      <FormContainer
        title="Log In"
        description="Please Sign In with your Google Account">
        <Input />
        <Input />
        <Input />
        <Input />
      </FormContainer>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // borderWidth: 2,
  },
});
