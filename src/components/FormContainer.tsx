import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Button} from '@rneui/themed';
import {Text} from '@rneui/themed';

type FormContainerProps = {
  children: JSX.Element | JSX.Element[];
  style?: object;
  title?: string;
  description?: string;
  onSubmitTitle?: string;
  onSubmitHide?: boolean;
  descText?: string;
  descLink?: string;
  descLinkPress?: () => void;
  onSubmit?: () => void;
};

const FormContainer = ({
  children,
  style,
  title = 'Hello',
  description = 'Please Sign In with your Google Account',
  onSubmitTitle,
  onSubmitHide = false,
  descLink,
  descText,
  descLinkPress,
  onSubmit,
}: FormContainerProps): JSX.Element => {
  const {colors, dark} = useTheme();

  return (
    <View style={[styles.form, style]}>
      <View style={styles.formDescCtn}>
        <Text h3 style={[styles.title, {color: colors.text}]}>
          {title}
        </Text>
        <Text style={[styles.description, {color: colors.text}]}>
          {description}
        </Text>
      </View>
      {children}
      <Button
        title={onSubmitTitle || 'Sign In'}
        onPress={onSubmit}
        titleStyle={[styles.actionBtnTitle, {color: dark ? '#000' : '#fff'}]}
        containerStyle={[
          styles.actionBtnCtn,
          onSubmitHide && {display: 'none'},
        ]}
        buttonStyle={[
          styles.actionBtn,
          {
            backgroundColor: colors.primary,
          },
        ]}
      />
      <View style={styles.linkDescCtn}>
        <Text style={[styles.descText, {color: colors.text}]}>{descText}</Text>
        <TouchableOpacity activeOpacity={0.8} onPress={descLinkPress}>
          <Text style={[styles.descLink]}>{descLink}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FormContainer;

const styles = StyleSheet.create({
  form: {
    // borderWidth: 1,
    width: '90%',
    marginTop: 30,
  },
  formDescCtn: {
    // borderWidth: 1,
    // alignItems: 'flex-start',
    borderColor: 'red',
    minHeight: 30,
    marginBottom: 40,
  },
  title: {},
  description: {
    marginTop: 10,
    fontWeight: '400',
  },
  actionBtn: {
    padding: 15,
    borderRadius: 8,
  },
  actionBtnTitle: {
    fontWeight: '700',
  },
  actionBtnCtn: {
    marginTop: 40,
    marginBottom: 20,
  },
  linkDescCtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  descText: {
    fontWeight: '700',
    marginRight: 5,
  },
  descLink: {
    color: '#2196F3',
    fontWeight: '700',
  },
});
