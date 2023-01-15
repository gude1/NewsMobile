import {
  StyleSheet,
  View,
  FlatList,
  useWindowDimensions,
  ActivityIndicator,
  ListRenderItem,
  RefreshControl,
  Alert,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { RootStackParamList } from '../navigation/navigation';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Text } from '@rneui/themed';
import NewsItem from '../components/NewsItem';
import Container from '../components/Container';
import { NewsDetailState } from '../redux/slice/NewsDetailSlice';
import { useAppDispatch, useAppSelector } from '../hooks/hook';
import { useTheme } from '@react-navigation/native';
import { getNews } from '../redux/thunk/news';

type NewsListProps = NativeStackScreenProps<
  RootStackParamList,
  'NewsList'
> & {};

export const NewsList = ({ navigation, route }: NewsListProps): JSX.Element => {
  const { colors, dark } = useTheme();
  const { height } = useWindowDimensions();
  const dispatch = useAppDispatch();
  const newslist = useAppSelector(state => state.newslist.list);
  const fetching = useAppSelector(state => state.newslist.fetching);
  const [limit, setLimit] = useState(10);
  const [loadingmore, setLoadingMore] = useState(false);

  useEffect(() => {
    dispatch(getNews());
    return () => { };
  }, []);

  const renderItem: ListRenderItem<NewsDetailState> = ({ item, index }) => {
    return (
      <NewsItem
        id={item._id}
        title={item.title}
        topic={item.topic}
        image={{ uri: item.image }}
        date={item.date}
        onClick={() => navigation.navigate('NewsDetail', { id: item._id })}
      />
    );
  };

  const keyExtractor = (item: NewsDetailState, index: Number): string =>
    String(index);

  const renderListEmptyComponent = (): JSX.Element => {
    let component = null;
    if (fetching)
      component = <ActivityIndicator color={colors.primary} size={40} />;
    else
      component = (
        <Button
          title={'Fetch News'}
          onPress={() => {
            dispatch(getNews());
            // navigation.navigate('NewsDetail', {id: ''});
          }}
          loading={fetching}
          disabled={fetching}
          containerStyle={styles.actionBtnCtn}
          buttonStyle={[styles.actionBtn, { backgroundColor: colors.primary }]}
          titleStyle={[styles.actionBtnTitle, { color: dark ? '#000' : '#fff' }]}
        />
      );
    return (
      <View style={[styles.placeholderCtn, { height: height - 150 }]}>
        {component}
      </View>
    );
  };

  const renderListFooterComponent = (): JSX.Element | null => {
    if (!newslist || newslist.length <= 10 || newslist.length <= limit) {
      return null;
    }
    return (
      <Button
        title={'Load More'}
        onPress={() => {
          setLoadingMore(true);
          setTimeout(() => {
            setLimit(limit => limit + 10);
          }, 0);
          setLoadingMore(false);
        }}
        loading={loadingmore}
        disabled={loadingmore}
        containerStyle={styles.actionBtnCtn}
        buttonStyle={[styles.actionBtn, { backgroundColor: colors.primary }]}
        titleStyle={[styles.actionBtnTitle, { color: dark ? '#000' : '#fff' }]}
      />
    );
  };

  const renderRefreshControl = (): JSX.Element => {
    if (!newslist || newslist.length < 1) {
      return <></>;
    }

    return (
      <RefreshControl
        refreshing={fetching}
        onRefresh={() => {
          dispatch(getNews());
        }}
        colors={['#000']}
        tintColor={'#000'}
      />
    );
  };

  return (
    <Container style={styles.container}>
      <FlatList
        data={newslist.slice(0, limit)}
        refreshControl={renderRefreshControl()}
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
    // borderWidth: 3,
    // borderColor: 'green',
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
