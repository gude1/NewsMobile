import {useColorScheme} from 'react-native';
import {NavigationContainer, useTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/auth/Login';
import Signup from '../screens/auth/Signup';
import {NewsDetail} from '../screens/NewsDetail';
import {NewsList} from '../screens/NewsList';
import {LightTheme, DarkTheme} from '../theme';

export type RootStackParamList = {
  LogIn: undefined;
  SignUp: undefined;
  NewsList: undefined;
  NewsDetail: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AuthNavigator = (): JSX.Element => {
  const {colors, dark} = useTheme();
  return (
    <Stack.Navigator
      initialRouteName="LogIn"
      screenOptions={{
        animation: 'slide_from_right',
        headerShadowVisible: false,
        headerTitleStyle: {
          fontWeight: '700',
          // fontFamily: 'sans-serif-condensed',
        },
        statusBarColor: colors.background,
        statusBarStyle: dark ? 'light' : 'dark',
      }}>
      <Stack.Screen
        name="LogIn"
        component={Login}
        options={{
          title: 'Sign In',
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={Signup}
        options={{
          title: 'Sign Up',
        }}
      />
    </Stack.Navigator>
  );
};

const RootNavigator = (): JSX.Element => {
  const {colors, dark} = useTheme();

  return (
    <Stack.Navigator
      initialRouteName="NewsList"
      screenOptions={{
        animation: 'slide_from_right',
        headerShadowVisible: false,
        headerTitleStyle: {
          fontWeight: '700',
        },
        statusBarColor: colors.background,
        statusBarStyle: dark ? 'light' : 'dark',
      }}>
      <Stack.Screen name="NewsList" component={NewsList} />
      <Stack.Screen name="NewsDetail" component={NewsDetail} />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={LightTheme}>
      <AuthNavigator />
    </NavigationContainer>
  );
};

export default Navigation;