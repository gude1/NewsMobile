import {StyleSheet, View, Alert} from 'react-native';
import React, {useState} from 'react';
import {Avatar, Button, Overlay, Text} from '@rneui/themed';
import {useTheme} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '../hooks/hook';
import LoadingModal from './LoadingModal';
import {setUser} from '../redux/slice/UserSlice';
import {signOutOfGoogleAcct} from '../utils/google';

const ProfileModal = () => {
  const {colors, dark} = useTheme();
  const [showprofilemodal, setShowProfileModal] = useState(false);
  const [showloadingmodal, setShowLoadingModal] = useState(false);
  const user = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();

  function handleLogout() {
    const onSuccess = () => {
      setShowLoadingModal(false);
      dispatch(
        setUser({
          loggedIn: false,
          image: '',
        }),
      );
    };

    const onFail = () => {
      setShowLoadingModal(false);
      Alert.alert('Sign out failed, please try again');
    };
    signOutOfGoogleAcct(onSuccess, onFail);
  }

  const showAlert = () => {
    Alert.alert('Log Out', '', [
      {
        text: 'Yes',
        onPress: () => handleLogout(),
      },
      {
        text: 'No',
        style: 'cancel',
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Avatar
        rounded
        source={user.image ? {uri: user.image} : undefined}
        onPress={() => setShowProfileModal(true)}
        size={32}
        containerStyle={[styles.avatarCtn, {backgroundColor: colors.border}]}
      />
      <Overlay
        animationType="slide"
        overlayStyle={[styles.overlay, {backgroundColor: colors.background}]}
        isVisible={showprofilemodal}
        statusBarTranslucent
        onBackdropPress={() => setShowProfileModal(false)}>
        <View style={[styles.contentCtn, {backgroundColor: colors.background}]}>
          <Avatar
            rounded
            source={user.image ? {uri: user.image} : undefined}
            size={60}
            containerStyle={[
              styles.avatarCtn,
              {backgroundColor: colors.border},
            ]}
          />
          <Text style={[styles.contentTxt, {color: colors.text}]}>
            {user.email}
          </Text>
          <Button
            onPress={() => {
              setShowProfileModal(false);
              showAlert();
            }}
            title={'Log Out'}
            containerStyle={styles.actionBtnCtn}
            titleStyle={[
              styles.actionBtnTitle,
              {color: dark ? '#000' : '#fff'},
            ]}
            buttonStyle={[styles.actionBtn, {backgroundColor: colors.primary}]}
          />
        </View>
      </Overlay>
      <LoadingModal showdialog={showloadingmodal} />
    </View>
  );
};

export default ProfileModal;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    // borderWidth: 1,
    alignItems: 'center',
    marginHorizontal: 20,
  },
  overlay: {
    padding: 0,
    borderRadius: 8,
    overflow: 'hidden',
    margin: 0,
  },
  avatarCtn: {},
  contentCtn: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    width: 220,
    height: 220,
  },
  contentTxt: {
    fontWeight: '700',
    marginTop: 10,
  },
  actionBtnCtn: {
    width: 120,
    alignSelf: 'center',
    marginVertical: 20,
  },
  actionBtn: {
    padding: 8,
    borderRadius: 5,
  },
  actionBtnTitle: {
    fontWeight: '700',
  },
});
