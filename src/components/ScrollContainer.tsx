import {StyleSheet, ScrollView, View, useWindowDimensions} from 'react-native';
import React from 'react';
import Container from './Container';

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

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps={'always'}>
      <Container style={style} showLoader={showLoader}>
        {children}
      </Container>
    </ScrollView>
  );
};

export default ScrollContainer;

const styles = StyleSheet.create({});
