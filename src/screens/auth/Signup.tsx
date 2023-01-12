import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useRef} from 'react';
import {useTheme} from '@react-navigation/native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import FormContainer from '../../components/FormContainer';
import StyledInput from '../../components/StyledInput';
import ScrollContainer from '../../components/ScrollContainer';
import {RootStackParamList} from '../../navigation/navigation';
import {setUser} from '../../redux/slice/UserSlice';
import {useAppDispatch, useAppSelector} from '../../hooks/hook';
import {
  validateEmail,
  validateName,
  validatePhoneNumber,
} from '../../utils/validate';

type SignupProps = NativeStackScreenProps<RootStackParamList, 'SignUp'> & {};

type SignupInput = {
  value?: string;
  error?: string;
};

const Signup = ({navigation, route}: SignupProps): JSX.Element => {
  const {colors} = useTheme();
  const [step, setStep] = useState(1);
  const user = useAppSelector(state => state.user);
  const [nameInput, setNameInput] = useState<SignupInput>({
    value: user.fullname,
  });
  const [emailInput, setEmailInput] = useState<SignupInput>({
    value: user.email,
  });
  const [phoneInput, setPhoneInput] = useState<SignupInput>({
    value: user.phone,
  });
  const dispatch = useAppDispatch();

  function onSubmit() {
    let nameerr = validateName(nameInput.value || '');
    let emailerr = validateEmail(emailInput.value || '');
    let phoneerr = validatePhoneNumber(phoneInput.value || '');

    if (nameerr) {
      setNameInput({...nameInput, error: nameerr});
    }
    if (emailerr) {
      setEmailInput({...emailInput, error: emailerr});
    }
    if (phoneerr) {
      setPhoneInput({...emailInput, error: phoneerr});
    }

    if (nameerr || emailerr || phoneerr) {
      return;
    }
  }

  const renderView = () => {
    if (step == 1) {
      return (
        <FormContainer
          title="Create an account"
          description="Please fill the inputs with your details"
          onSubmitTitle="Sign Up"
          onSubmit={onSubmit}
          descText="Have an account?"
          descLink="Sign In"
          descLinkPress={() => {
            navigation.navigate('LogIn');
          }}>
          <StyledInput
            label="Full Name"
            placeholder="eg: John Doe"
            keyboardType="name-phone-pad"
            value={nameInput?.value}
            errorMessage={nameInput?.error}
            onChangeText={txt => {
              setNameInput(state => {
                return {...state, value: txt, error: ''};
              });
            }}
          />
          <StyledInput
            label="Phone Number"
            placeholder="eg: +234-333-333-333"
            keyboardType="phone-pad"
            value={phoneInput?.value}
            errorMessage={phoneInput?.error}
            onChangeText={txt => {
              setPhoneInput((state: SignupInput) => {
                return {...state, value: txt, error: ''};
              });
            }}
          />
          <StyledInput
            label="Email"
            placeholder="eg: johndoe@mail.com"
            keyboardType="email-address"
            value={emailInput?.value}
            errorMessage={emailInput?.error}
            onChangeText={txt => {
              setEmailInput(state => {
                return {...state, value: txt, error: ''};
              });
            }}
          />
        </FormContainer>
      );
    } else {
      return (
        <FormContainer
          title="Complete Your Registration"
          description={`Please sign to your google account with email: ${user.email}`}
          onSubmitTitle="Sign Up">
          <></>
        </FormContainer>
      );
    }
  };

  return (
    <ScrollContainer showLoader={false} style={styles.container}>
      {renderView()}
    </ScrollContainer>
  );
};

export default Signup;
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
