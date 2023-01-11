import {StyleSheet, View} from 'react-native';
import React from 'react';
import {RootStackParamList} from '../navigation/navigation';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Text} from '@rneui/themed';
import NewsItem from '../components/NewsItem';

type NewsListProps = NativeStackScreenProps<
  RootStackParamList,
  'NewsList'
> & {};

export const NewsList = ({navigation, route}: NewsListProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <NewsItem topic="Sports" date="11, Jan, 2023" />
      <NewsItem topic="Politics" date="11, Jan, 2023" />
      <NewsItem topic="Education" />
      <NewsItem topic="Finance" />
      <NewsItem topic="Engineering" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    paddingVertical: 15,
    flex: 1,
  },
});
