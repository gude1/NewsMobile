/**
 * @format
 */

import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import Login from '../src/screens/auth/Login';
import {useNavigation, useRoute} from '@react-navigation/native';

it('renders correctly', () => {
  renderer.create(<Login navigation={useNavigation()} route={useRoute()} />);
});
