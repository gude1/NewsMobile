import {GoogleSignin} from '@react-native-google-signin/google-signin';

export const configureGoogleSignIn = (): void => {
  try {
    GoogleSignin.configure({
      webClientId:
        '41678902911-vadjijc2ldm0fpt2ltdu2r95v3003o9d.apps.googleusercontent.com',
    });
    console.log('Google signin configured!');
  } catch (err) {
    console.error('Google signin config failed!', String(err));
  }
};
