import {StyleSheet, ScrollView, View, useWindowDimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import Loader from './Loader';

type ScrollContainerProps = {
  style?: object;
  children: JSX.Element;
  showLoader?: boolean;
};

const ScrollContainer = ({
  style,
  children,
  showLoader = true,
}: ScrollContainerProps): JSX.Element => {
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
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps={'always'}>
          <View style={[styles.container, {minHeight: height}, style]}>
            {children}
          </View>
        </ScrollView>
      );
    } else {
      return <Loader />;
    }
  };

  return renderView();
};

export default ScrollContainer;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    maxWidth: 700,
    // borderWidth: 2,
    // borderColor: 'green',
  },
});
