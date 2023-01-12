import {StyleSheet} from 'react-native';
import React from 'react';
import {Dialog} from '@rneui/themed';

type LoadingModalProps = {
  showdialog: boolean;
};

const LoadingModal = ({showdialog = false}: LoadingModalProps): JSX.Element => {
  return (
    <Dialog isVisible={showdialog} overlayStyle={styles.dialog}>
      <Dialog.Loading />
    </Dialog>
  );
};

export default LoadingModal;

const styles = StyleSheet.create({
  dialog: {
    width: 60,
    height: 60,
    paddingBottom: 10,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
});
