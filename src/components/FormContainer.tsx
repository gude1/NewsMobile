import {StyleSheet, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Button} from '@rneui/themed';
import {Text} from '@rneui/themed';

type FormContainerProps = {
  children: JSX.Element | JSX.Element[];
  style?: object;
  title?: string;
  description?: string;
  onSubmit?: () => void;
};

const FormContainer = ({
  children,
  style,
  title = 'Hello',
  description = 'Please Sign In with your Google Account',
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
        title="Sign In"
        onPress={onSubmit}
        titleStyle={[styles.actionBtnTitle, {color: dark ? '#000' : '#fff'}]}
        containerStyle={styles.actionBtnCtn}
        buttonStyle={[
          styles.actionBtn,
          {
            backgroundColor: colors.primary,
          },
        ]}
      />
    </View>
  );
};

export default FormContainer;

const styles = StyleSheet.create({
  form: {
    // borderWidth: 1,
    width: '90%',
    marginTop: 70,
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
});
