/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {useNavigation, useRoute} from '@react-navigation/native';
import Signup from '../src/screens/auth/Signup';

it('renders correctly', () => {
  renderer.create(<Signup navigation={useNavigation()} route={useRoute()} />);
});
