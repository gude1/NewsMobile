import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, ButtonProps, Image} from '@rneui/themed';

type GoogleButtonProps = ButtonProps & {};

const GoogleButton = ({
  containerStyle,
  title = 'Sign Up',
  onPress,
}: GoogleButtonProps) => {
  return (
    <Button
      containerStyle={[styles.btnCtn, containerStyle]}
      buttonStyle={styles.btn}
      color={'#2196F3'}
      title={title}
      titleStyle={styles.title}
      onPress={onPress}
      icon={
        <Image
          source={require('../assets/images/google.png')}
          style={styles.logo}
          containerStyle={{backgroundColor: 'white'}}
          placeholderStyle={{backgroundColor: 'white'}}
        />
      }
      iconPosition={'left'}
    />
  );
};

export default GoogleButton;

const styles = StyleSheet.create({
  btnCtn: {
    borderRadius: 5,
  },
  btn: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  logo: {
    width: 25,
    height: 25,
    margin: 'auto',
  },
  title: {
    marginHorizontal: 10,
    fontWeight: 'bold',
  },
});
