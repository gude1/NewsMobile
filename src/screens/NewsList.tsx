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
      <NewsItem
        topic="Sports"
        date="11, Jan, 2023"
        onClick={() => navigation.push('NewsDetail', {id: 'Sports'})}
      />
      <NewsItem
        topic="Politics"
        title="Tinubu is running for presidential election this year"
        date="11, Jan, 2023"
        onClick={() => navigation.push('NewsDetail', {id: 'Politics'})}
      />
      <NewsItem
        topic="Education"
        title="Pythagoras Thoerem"
        onClick={() => navigation.push('NewsDetail', {id: 'Education'})}
      />
      <NewsItem
        topic="Finance"
        title="Banking sector made $5 billion yesterday"
        onClick={() => navigation.push('NewsDetail', {id: 'Finance'})}
      />
      <NewsItem
        topic="Engineering"
        title="Robotics event at Abuja"
        onClick={() => navigation.push('NewsDetail', {id: 'Engineering'})}
      />
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
