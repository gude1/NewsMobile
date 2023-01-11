import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {RootStackParamList} from '../navigation/navigation';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import ScrollContainer from '../components/ScrollContainer';

type NewsDetailProps = NativeStackScreenProps<
  RootStackParamList,
  'NewsDetail'
> & {};

export const NewsDetail = ({
  navigation,
  route,
}: NewsDetailProps): JSX.Element => {
  const {id} = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: id,
    });

    return () => {};
  }, []);

  return (
    <ScrollContainer>
      <View style={styles.container}></View>
    </ScrollContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 2,
  },
});
