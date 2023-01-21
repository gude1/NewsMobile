/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {useNavigation, useRoute} from '@react-navigation/native';
import {NewsList} from '../src/screens/NewsList';

it('renders correctly', () => {
  renderer.create(<NewsList navigation={useNavigation()} route={useRoute()} />);
});
