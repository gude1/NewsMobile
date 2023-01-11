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
      <NewsItem />
      <NewsItem />
      <NewsItem />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    flex: 1,
  },
});
