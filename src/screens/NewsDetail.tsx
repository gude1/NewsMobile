import {StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {Text, Image} from '@rneui/themed';
import {useTheme} from '@react-navigation/native';
import {RootStackParamList} from '../navigation/navigation';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import ScrollContainer from '../components/ScrollContainer';
import Loader from '../components/Loader';
import {useAppSelector} from '../hooks/hook';

type NewsDetailProps = NativeStackScreenProps<
  RootStackParamList,
  'NewsDetail'
> & {};

export const NewsDetail = ({
  navigation,
  route,
}: NewsDetailProps): JSX.Element => {
  const {id} = route.params;
  const {colors} = useTheme();
  const newsitem = useAppSelector(state =>
    state.newslist.list.find(item => item._id == id),
  );

  useEffect(() => {
    navigation.setOptions({
      title: newsitem?.topic,
    });

    return () => {};
  }, []);

  return (
    <ScrollContainer>
      <View style={styles.container}>
        <Text style={[styles.title, {color: colors.text}]}>
          {newsitem?.title}
        </Text>
        <View style={styles.metaDataCtn}>
          <Text style={styles.author}>{newsitem?.author}</Text>
          <Text style={styles.date}>{newsitem?.date}</Text>
        </View>
        <Image
          containerStyle={[styles.image, {backgroundColor: colors.border}]}
          resizeMode="cover"
          source={{uri: newsitem?.image}}
        />
        <Text style={[styles.body, {color: colors.text}]}>
          {newsitem?.summary}
        </Text>
      </View>
    </ScrollContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 20,
    // borderWidth: 2,
    borderColor: 'red',
  },
  title: {
    fontWeight: '900',
    fontSize: 22,
  },
  metaDataCtn: {
    marginTop: 20,
    alignItems: 'center',
    flexDirection: 'row',
  },
  author: {
    textTransform: 'capitalize',
    color: '#6b7280',
    fontSize: 13,
    marginRight: 15,
  },
  date: {
    color: '#6b7280',
    fontSize: 12,
  },
  image: {
    width: '100%',
    maxWidth: 700,
    marginTop: 10,
    height: 300,
    borderRadius: 8,
    alignSelf: 'center',
  },
  body: {
    marginTop: 10,
    fontWeight: '600',
    textAlign: 'justify',
    fontSize: 16,
  },
});
