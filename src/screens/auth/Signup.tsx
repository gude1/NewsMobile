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
  const [step, setStep] = useState(0);

  const renderView = () => {};

  return (
    <Container style={styles.container}>
      <FormContainer
        title="Create an account"
        description="Please fill the inputs with your details">
        <StyledInput />
        <StyledInput />
        <StyledInput />
      </FormContainer>
    </Container>
  );
};

export default Signup;
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
