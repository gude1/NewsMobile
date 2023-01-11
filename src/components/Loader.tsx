import {StyleSheet, Text, View, ImageProps} from 'react-native';
import React from 'react';
import {Image} from '@rneui/themed';
import {useTheme} from '@react-navigation/native';

type LoaderProps = {
  source?: object;
};

const Loader = ({source}: LoaderProps): JSX.Element => {
  const {colors} = useTheme();
  return (
    <View style={styles.container}>
      <Image
        source={source || require('../assets/images/windowsloader.gif')}
        style={{width: 200, height: 200}}
        containerStyle={{backgroundColor: colors.background, margin: 20}}
        placeholderStyle={{backgroundColor: colors.background}}
      />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
