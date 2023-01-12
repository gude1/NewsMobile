import {
  GoogleSignin,
  User,
  statusCodes,
} from '@react-native-google-signin/google-signin';

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

export const signInToGoogleAcct = async (
  succesCb?: (userinfo: User) => void,
  failCb?: (error: string) => void,
) => {
  try {
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    const userInfo = await GoogleSignin.signIn();
    succesCb && succesCb(userInfo as User);
  } catch (error: any) {
    let errmsg: string = '';
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
      errmsg += 'Sign in action cancelled';
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (e.g. sign in) is in progress already
      errmsg += 'Sign in in progress';
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
      errmsg += 'Play services not available or outdated';
    } else {
      errmsg += 'Something went wrong please try again';
      // some other error happened
    }
    console.error('signInToGoogleAcct', String(error));
    failCb && failCb(errmsg);
  }
};

export const signOutOfGoogleAcct = async (
  succesCb?: () => void,
  failCb?: (err: string) => void,
) => {
  try {
    await GoogleSignin.signOut();
    succesCb && succesCb();
  } catch (error) {
    console.error('signOutOfGoogleAcct', error);
    failCb && failCb(String(error));
  }
};

export const isSignedIn = async (cB?: (val: boolean) => void) => {
  const isSignedIn = await GoogleSignin.isSignedIn();
  cB && cB(isSignedIn);
};
