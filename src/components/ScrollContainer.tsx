import {StyleSheet, ScrollView, View} from 'react-native';
import React from 'react';

type ScrollContainerProps = {
  style?: object;
  children: JSX.Element;
};

const ScrollContainer = ({
  style,
  children,
}: ScrollContainerProps): JSX.Element => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps={'always'}>
      <View style={[styles.container, style]}>{children}</View>
    </ScrollView>
  );
};

export default ScrollContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
