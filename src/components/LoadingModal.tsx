import {StyleSheet, ActivityIndicator} from 'react-native';
import React from 'react';
import {Overlay} from '@rneui/base';
import {useTheme} from '@react-navigation/native';

type LoadingModalProps = {
  showdialog: boolean;
};

const LoadingModal = ({showdialog = false}: LoadingModalProps): JSX.Element => {
  const {colors} = useTheme();

  return (
    <Overlay
      isVisible={showdialog}
      animationType="fade"
      overlayStyle={[styles.dialog, {backgroundColor: colors.background}]}
      statusBarTranslucent>
      <ActivityIndicator color={colors.primary} size={35} />
    </Overlay>
  );
};

export default LoadingModal;

const styles = StyleSheet.create({
  dialog: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
});
