import {useColorScheme, View} from 'react-native';
import {NavigationContainer, useTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/auth/Login';
import Signup from '../screens/auth/Signup';
import {NewsDetail} from '../screens/NewsDetail';
import {NewsList} from '../screens/NewsList';
import {LightTheme, DarkTheme} from '../theme';
import {useAppSelector} from '../hooks/hook';
import ProfileModal from '../components/ProfileModal';
import ThemeSwitch from '../components/ThemeSwitch';

export type RootStackParamList = {
  LogIn: undefined;
  SignUp: undefined;
  NewsList: undefined;
  NewsDetail: {id: string};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AuthNavigator = (): JSX.Element => {
  const {colors, dark} = useTheme();
  const user = useAppSelector(state => state.user);
  return (
    <Stack.Navigator
      initialRouteName={user.email ? 'LogIn' : 'SignUp'}
      screenOptions={{
        animation: 'slide_from_right',
        headerShadowVisible: false,
        headerTitleStyle: {
          fontWeight: '700',
        },
        headerRight: () => <ThemeSwitch />,
        statusBarColor: colors.background,
        statusBarStyle: dark ? 'light' : 'dark',
      }}>
      <Stack.Screen
        name="LogIn"
        component={Login}
        options={{
          title: 'Log In',
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
        headerTitleStyle: {
          fontWeight: '700',
        },
        statusBarColor: colors.background,
        statusBarStyle: dark ? 'light' : 'dark',
        headerRight: () => (
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <ThemeSwitch />
            <ProfileModal />
          </View>
        ),
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
  const colorScheme = useColorScheme();

  const returnTheme = () => {
    if (user.theme && user.theme.length > 0) {
      return user.theme == 'light' ? LightTheme : DarkTheme;
    } else {
      colorScheme == 'light' ? LightTheme : DarkTheme;
    }
  };

  return (
    <NavigationContainer theme={returnTheme()}>
      {user.loggedIn ? <RootNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default Navigation;
