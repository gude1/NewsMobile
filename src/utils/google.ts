import {
  GoogleSignin,
  User,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import crashlytics from '@react-native-firebase/crashlytics';
import analytics from '@react-native-firebase/analytics';

export const configureGoogleSignIn = (): void => {
  try {
    crashlytics().log('configureGoogleSignIn');
    GoogleSignin.configure({
      webClientId:
        '41678902911-vadjijc2ldm0fpt2ltdu2r95v3003o9d.apps.googleusercontent.com',
    });
    console.log('Google signin configured!');
  } catch (err) {
    crashlytics().recordError(new Error(JSON.stringify(err)));
    console.error('Google signin config failed!', String(err));
  }
};

export const signInToGoogleAcct = async (
  succesCb?: (userinfo: User) => void,
  failCb?: (error: string) => void,
) => {
  try {
    crashlytics().log('signInToGoogleAcct');
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    const userInfo = await GoogleSignin.signIn();
    await Promise.all([
      analytics().setUserId(userInfo.user.id),
      analytics().setUserProperty('account_type', 'test_user'),
    ]);
    succesCb && succesCb(userInfo as User);
  } catch (error: any) {
    let errmsg: string = '';
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      errmsg += 'Sign in action cancelled';
    } else if (error.code === statusCodes.IN_PROGRESS) {
      errmsg += 'Sign in in progress';
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      errmsg += 'Play services not available or outdated';
    } else {
      errmsg += 'Something went wrong please try again';
      // some other error happened
    }
    crashlytics().recordError(new Error(JSON.stringify(error)));
    console.error('signInToGoogleAcct', String(error));
    failCb && failCb(errmsg);
  }
};

export const signOutOfGoogleAcct = async (
  succesCb?: () => void,
  failCb?: (err: string) => void,
) => {
  try {
    crashlytics().log('signOutOfGoogleAcct');
    await GoogleSignin.signOut();
    await analytics().resetAnalyticsData();
    succesCb && succesCb();
  } catch (error) {
    crashlytics().recordError(new Error(JSON.stringify(error)));
    console.error('signOutOfGoogleAcct', error);
    failCb && failCb(String(error));
  }
};

export const isSignedIn = async (cB?: (val: boolean) => void) => {
  crashlytics().log('isSignedIn');
  const isSignedIn = await GoogleSignin.isSignedIn();
  cB && cB(isSignedIn);
};
