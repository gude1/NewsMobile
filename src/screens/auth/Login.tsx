import {ScrollView, StyleSheet, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {GoogleSigninButton} from '@react-native-google-signin/google-signin';
import React from 'react';
import FormContainer from '../../components/FormContainer';
import StyledInput from '../../components/StyledInput';
import ScrollContainer from '../../components/ScrollContainer';
import {RootStackParamList} from '../../navigation/navigation';
import GoogleButton from '../../components/GoogleButton';

type LoginProps = NativeStackScreenProps<RootStackParamList, 'LogIn'>;

const Login = ({navigation, route}: LoginProps): JSX.Element => {
  const {colors} = useTheme();

  return (
    <ScrollContainer style={styles.container} showLoader={false}>
      <FormContainer
        onSubmitHide
        title="Welcome"
        description="Please sign in with your google account">
        <GoogleButton
          title={'Sign In'}
          onPress={() => {
            navigation.push('SignUp');
          }}
        />
      </FormContainer>
    </ScrollContainer>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  googleBtn: {
    elevation: 0,
    width: '80%',
  },
});
