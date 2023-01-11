import {StyleSheet, ScrollView, View, useWindowDimensions} from 'react-native';
import React from 'react';

type ScrollContainerProps = {
  style?: object;
  children: JSX.Element;
};

const ScrollContainer = ({
  style,
  children,
}: ScrollContainerProps): JSX.Element => {
  const {height} = useWindowDimensions();
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps={'always'}>
      <View style={[styles.container, {minHeight: height}, style]}>
        {children}
      </View>
    </ScrollView>
  );
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
