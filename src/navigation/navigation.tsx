import {useColorScheme} from 'react-native';
import {NavigationContainer, useTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/auth/Login';
import Signup from '../screens/auth/Signup';
import {NewsDetail} from '../screens/NewsDetail';
import {NewsList} from '../screens/NewsList';
import {LightTheme, DarkTheme} from '../theme';
import {useAppSelector} from '../hooks/hook';
import ProfileModal from '../components/ProfileModal';

export type RootStackParamList = {
  LogIn: undefined;
  SignUp: undefined;
  NewsList: undefined;
  NewsDetail: {id: string};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AuthNavigator = (): JSX.Element => {
  const {colors, dark} = useTheme();
  return (
    <Stack.Navigator
      initialRouteName="SignUp"
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
        // headerShadowVisible: false,
        headerTitleStyle: {
          fontWeight: '700',
        },
        statusBarColor: colors.background,
        statusBarStyle: dark ? 'light' : 'dark',
        headerRight: () => <ProfileModal />,
      }}>
      <Stack.Screen
        name="NewsList"
        component={NewsList}
        options={{
          title: 'News',
        }}
      />
      <Stack.Screen name="NewsDetail" component={NewsDetail} />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  const user = useAppSelector(state => state.user);
  return (
    <NavigationContainer theme={LightTheme}>
      {user.loggedIn ? <RootNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default Navigation;
