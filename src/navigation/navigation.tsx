import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from '../screens/auth/Login';
import {Signup} from '../screens/auth/Signup';
import {NewsDetail} from '../screens/NewsDetail';
import {NewsList} from '../screens/NewsList';

const Stack = createNativeStackNavigator();

const AuthNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="LogIn" component={Login} />
      <Stack.Screen name="SignUp" component={Signup} />
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
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
