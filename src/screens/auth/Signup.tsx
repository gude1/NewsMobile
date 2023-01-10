import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useTheme} from '@react-navigation/native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import FormContainer from '../../components/FormContainer';
import StyledInput from '../../components/StyledInput';
import Container from '../../components/Container';
import {RootStackParamList} from '../../navigation/navigation';

type SignupProps = NativeStackScreenProps<RootStackParamList, 'SignUp'>;

const Signup = ({navigation, route}: SignupProps): JSX.Element => {
  const {colors} = useTheme();
  const [step, setStep] = useState(2);

  const renderView = () => {
    if (step == 1) {
      return (
        <FormContainer
          title="Create an account"
          description="Please fill the inputs with your details"
          onSubmitTitle="Sign Up">
          <StyledInput label="Full Name" placeholder="eg: John Doe" />
          <StyledInput
            label="Phone Number"
            placeholder="eg: +234-333-333-333"
            keyboardType="phone-pad"
          />
          <StyledInput
            label="Email"
            placeholder="eg: johndoe@mail.com"
            keyboardType="email-address"
          />
        </FormContainer>
      );
    } else {
      return (
        <FormContainer
          title="Complete Your Registration"
          description="Please sign up with your google account"
          onSubmitTitle="Sign Up">
          <></>
        </FormContainer>
      );
    }
  };

  return <Container style={styles.container}>{renderView()}</Container>;
};

export default Signup;
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
