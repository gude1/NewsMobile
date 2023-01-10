import {StyleSheet, ScrollView, View} from 'react-native';
import React from 'react';

type ContainerProps = {
  style?: object;
  children: JSX.Element;
};

const Container = ({style, children}: ContainerProps): JSX.Element => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps={'always'}>
      <View style={[styles.container, style]}>{children}</View>
    </ScrollView>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
