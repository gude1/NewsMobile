import {StyleSheet, Alert} from 'react-native';
import React, {useState, useRef} from 'react';
import {useTheme} from '@react-navigation/native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import FormContainer from '../../components/FormContainer';
import StyledInput from '../../components/StyledInput';
import {User} from '@react-native-google-signin/google-signin';
import {RootStackParamList} from '../../navigation/navigation';
import {setUser} from '../../redux/slice/UserSlice';
import {useAppDispatch, useAppSelector} from '../../hooks/hook';
import {
  validateEmail,
  validateName,
  validatePhoneNumber,
} from '../../utils/validate';
import GoogleButton from '../../components/GoogleButton';
import {signInToGoogleAcct} from '../../utils/google';
import LoadingModal from '../../components/LoadingModal';
import ScrollContainer from '../../components/ScrollContainer';

type SignupProps = NativeStackScreenProps<RootStackParamList, 'SignUp'> & {};
type SignupInput = {
  value?: string;
  error?: string;
};

const Signup = ({navigation, route}: SignupProps): JSX.Element => {
  const {colors} = useTheme();
  const [showdialog, setShowDialog] = useState(false);
  const user = useAppSelector(state => state.user);
  const [nameInput, setNameInput] = useState<SignupInput>({
    value: '',
  });
  const [emailInput, setEmailInput] = useState<SignupInput>({
    value: '',
  });
  const [phoneInput, setPhoneInput] = useState<SignupInput>({
    value: '',
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
    dispatch(
      setUser({
        email: emailInput.value,
        fullname: nameInput.value,
        phone: phoneInput.value,
      }),
    );
  }

  async function onSubmit2() {
    const onSuccess = (userinfo: User) => {
      if (userinfo.user.email !== emailInput.value) {
        Alert.alert(
          `You signed in with another email, your email address has being updated from ${emailInput.value} to ${userinfo.user.email}`,
        );
      }
      dispatch(
        setUser({
          email: userinfo.user.email,
          image: String(userinfo.user.photo),
          loggedIn: true,
        }),
      );
      setShowDialog(false);
    };

    const onFailure = (errmsg: string) => {
      Alert.alert(errmsg);
      setShowDialog(false);
    };

    setShowDialog(true);
    signInToGoogleAcct(onSuccess, onFailure);
  }

  const renderView = () => {
    let valid = user.email && user.fullname && user.phone;
    if (!valid) {
      return (
        <FormContainer
          title="Create an account"
          description="Please fill the inputs with your details"
          onSubmitTitle="Continue"
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
          description={`Please sign in to your google account: ${user.email}`}
          onSubmitHide
          descText="Wrong Identity or email?"
          descLink="Start Over"
          descLinkPress={() => {
            dispatch(setUser({email: ''}));
          }}>
          <GoogleButton title={'Sign Up'} onPress={onSubmit2} />
        </FormContainer>
      );
    }
  };

  return (
    <>
      <ScrollContainer showLoader={false} style={styles.container}>
        {renderView()}
      </ScrollContainer>
      <LoadingModal showdialog={showdialog} />
    </>
  );
};

export default Signup;
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
