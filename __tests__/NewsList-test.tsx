/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {useNavigation, useRoute} from '@react-navigation/native';
import {NewsDetail} from '../src/screens/NewsDetail';

it('renders correctly', () => {
  renderer.create(
    <NewsDetail navigation={useNavigation()} route={useRoute()} />,
  );
});
