import {useColorScheme} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from '../screens/auth/Login';
import {Signup} from '../screens/auth/Signup';
import {NewsDetail} from '../screens/NewsDetail';
import {NewsList} from '../screens/NewsList';

const Stack = createNativeStackNavigator();

const AuthNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShadowVisible: false,
        headerTitleStyle: {},
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
  return (
    <Stack.Navigator initialRouteName="NewsList">
      <Stack.Screen name="NewsList" component={NewsList} />
      <Stack.Screen name="NewsDetail" component={NewsDetail} />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={DefaultTheme}>
      <AuthNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
