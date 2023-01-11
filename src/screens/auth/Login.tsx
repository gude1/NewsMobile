import {ScrollView, StyleSheet, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import React from 'react';
import FormContainer from '../../components/FormContainer';
import StyledInput from '../../components/StyledInput';
import ScrollContainer from '../../components/ScrollContainer';
import {RootStackParamList} from '../../navigation/navigation';

type LoginProps = NativeStackScreenProps<RootStackParamList, 'LogIn'>;

const Login = ({navigation, route}: LoginProps): JSX.Element => {
  const {colors} = useTheme();
  return (
    <ScrollContainer style={styles.container} showLoader={false}>
      <FormContainer
        onSubmit={() => {
          navigation.push('SignUp');
        }}
        title="Welcome"
        description="Please sign in with your google account">
        <StyledInput />
      </FormContainer>
    </ScrollContainer>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
