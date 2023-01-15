import {Alert, ScrollView, StyleSheet, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import React, {useState} from 'react';
import FormContainer from '../../components/FormContainer';
import StyledInput from '../../components/StyledInput';
import ScrollContainer from '../../components/ScrollContainer';
import {RootStackParamList} from '../../navigation/navigation';
import {User} from '@react-native-google-signin/google-signin';
import GoogleButton from '../../components/GoogleButton';
import {useAppSelector} from '../../hooks/hook';
import LoadingModal from '../../components/LoadingModal';
import {useDispatch} from 'react-redux';
import {setUser} from '../../redux/slice/UserSlice';
import {signInToGoogleAcct} from '../../utils/google';

type LoginProps = NativeStackScreenProps<RootStackParamList, 'LogIn'>;

const Login = ({navigation, route}: LoginProps): JSX.Element => {
  const {colors} = useTheme();
  const user = useAppSelector(state => state.user);
  const dispatch = useDispatch();
  const [showdialog, setShowDialog] = useState(false);

  async function handleLogin() {
    if (!user.email || user.email.length < 1) {
      Alert.alert('Please complete your signup first');
      return;
    }
    const onSuccess = (userinfo: User) => {
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

  return (
    <>
      <ScrollContainer style={styles.container}>
        <FormContainer
          onSubmitHide
          title={`Welcome Back`}
          description={
            user.email
              ? `Please sign in with your google account: ${user.email}`
              : 'Please complete your signup first'
          }
          descText="Don't have an account?"
          descLink="Sign Up"
          descLinkPress={() => {
            navigation.navigate('SignUp');
          }}>
          <GoogleButton title={'Sign In'} onPress={handleLogin} />
        </FormContainer>
      </ScrollContainer>
      <LoadingModal showdialog={showdialog} />
    </>
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
