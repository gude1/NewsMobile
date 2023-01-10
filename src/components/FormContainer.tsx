import {StyleSheet, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Text} from '@rneui/themed';

type FormContainerProps = {
  children: JSX.Element | JSX.Element[];
  style?: object;
  title?: string;
  description?: string;
};

const FormContainer = ({
  children,
  style,
  title = 'Hello',
  description = 'Please Sign In with your Google Account',
}: FormContainerProps): JSX.Element => {
  const {colors} = useTheme();

  return (
    <View style={[styles.form, style]}>
      <View style={styles.formDescCtn}>
        <Text h3 style={[styles.title, {color: colors.text}]}>
          {title}
        </Text>
        <Text style={[styles.description, {}]}>{description}</Text>
      </View>
      {children}
    </View>
  );
};

export default FormContainer;

const styles = StyleSheet.create({
  form: {
    // borderWidth: 1,
    width: '95%',
    marginTop: 100,
  },
  formDescCtn: {
    // borderWidth: 1,
    textAlign: 'center',
    alignItems: 'center',
    borderColor: 'red',
    minHeight: 30,
  },
  title: {},
  description: {
    marginTop: 10,
  },
});
