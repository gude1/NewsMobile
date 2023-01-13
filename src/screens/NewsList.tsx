import {
  StyleSheet,
  View,
  FlatList,
  FlatListProps,
  ActivityIndicator,
  ListRenderItem,
} from 'react-native';
import React, {useCallback} from 'react';
import {RootStackParamList} from '../navigation/navigation';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button, Text} from '@rneui/themed';
import NewsItem from '../components/NewsItem';
import Container from '../components/Container';
import {NewsListState} from '../redux/slice/NewsListSlice';
import {NewsDetailState} from '../redux/slice/NewsDetailSlice';
import {useAppSelector} from '../hooks/hook';
import {useTheme} from '@react-navigation/native';

type NewsListProps = NativeStackScreenProps<
  RootStackParamList,
  'NewsList'
> & {};

export const NewsList = ({navigation, route}: NewsListProps): JSX.Element => {
  const {colors, dark} = useTheme();
  const newslist = useAppSelector(state => state.newslist.list);
  const fetching = useAppSelector(state => state.newslist.fetching);

  const renderItem: ListRenderItem<NewsDetailState> = ({item, index}) => {
    return (
      <NewsItem
        title={item.title}
        topic={item.topic}
        date={item.date}
        onClick={() => navigation.navigate('NewsDetail', {id: item._id})}
      />
    );
  };

  const keyExtractor = (item: NewsDetailState, index: Number): string =>
    String(index);

  const renderListEmptyComponent = (): JSX.Element => {
    let component = null;
    if (fetching)
      component = (
        <ActivityIndicator color={'rgba(71, 100, 230, 1)'} size={40} />
      );
    else
      component = (
        <Button
          title={'Fetch News'}
          containerStyle={styles.actionBtnCtn}
          buttonStyle={[styles.actionBtn, {backgroundColor: colors.primary}]}
          titleStyle={[styles.actionBtnTitle, {color: dark ? '#000' : '#fff'}]}
        />
      );
    return <View style={styles.placeholderCtn}>{component}</View>;
  };

  const renderListFooterComponent = (): JSX.Element | null => {
    let component = null;
    if (newslist.length > 1) {
      component = (
        <Button
          title={'Load More'}
          containerStyle={styles.actionBtnCtn}
          buttonStyle={[styles.actionBtn, {backgroundColor: colors.primary}]}
          titleStyle={[styles.actionBtnTitle, {color: dark ? '#000' : '#fff'}]}
        />
      );
    }

    return component;
  };

  return (
    <Container style={styles.container}>
      <FlatList
        data={newslist}
        // data={[{}, {}, {}, {}, {}, {}]}
        initialNumToRender={5}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ListEmptyComponent={renderListEmptyComponent()}
        ListFooterComponent={renderListFooterComponent()}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    // borderWidth: 3,
    // borderColor: 'green',
  },
  placeholderCtn: {
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'green',
  },
  placeholderText: {},
  actionBtnCtn: {
    width: 150,
    alignSelf: 'center',
    marginVertical: 10,
  },
  actionBtn: {
    padding: 8,
    borderRadius: 5,
  },
  actionBtnTitle: {
    fontWeight: '700',
  },
});
