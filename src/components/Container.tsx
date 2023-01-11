import {StyleSheet, View, useWindowDimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import Loader from './Loader';

type ContainerProps = {
  style?: object;
  children: JSX.Element[] | JSX.Element;
  showLoader?: boolean;
};

const Container = ({
  style,
  children,
  showLoader = true,
}: ContainerProps): JSX.Element => {
  const {height} = useWindowDimensions();
  const [loaded, setLoaded] = useState(!showLoader);

  useEffect(() => {
    if (!loaded)
      setTimeout(() => {
        setLoaded(true);
      }, 500);

    return () => {};
  }, []);

  const renderView = () => {
    if (loaded) {
      return (
        <View style={[styles.container, {minHeight: height}, style]}>
          {children}
        </View>
      );
    } else {
      return (
        <View style={[styles.container, {minHeight: height}, style]}>
          <Loader />
        </View>
      );
    }
  };

  return renderView();
};

export default Container;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: '100%',
    maxWidth: 700,
    // borderWidth: 1,
  },
});
