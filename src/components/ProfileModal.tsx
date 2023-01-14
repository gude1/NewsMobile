import {StyleSheet, View, Alert} from 'react-native';
import React, {useState} from 'react';
import {Avatar, Button, Overlay, Text} from '@rneui/themed';
import {useTheme} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '../hooks/hook';
import LoadingModal from './LoadingModal';
import {setUser} from '../redux/slice/UserSlice';
import {signOutOfGoogleAcct} from '../utils/google';

const ProfileModal = () => {
  const {colors} = useTheme();
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
    Alert.alert('Alert Title', 'My Alert Msg', [
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
        overlayStyle={{padding: 0, margin: 0}}
        isVisible={showprofilemodal}
        statusBarTranslucent
        style={{backgroundColor: 'white'}}
        onBackdropPress={() => setShowProfileModal(false)}>
        <View style={styles.contentCtn}>
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
            color={colors.primary}
            onPress={() => {
              setShowProfileModal(false);
              showAlert();
            }}
            title={'Sign Out'}
            containerStyle={styles.actionBtnCtn}
            buttonStyle={styles.actionBtn}
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
    marginHorizontal: 10,
  },
  avatarCtn: {},
  contentCtn: {
    backgroundColor: 'white',
    borderRadius: 8,
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
