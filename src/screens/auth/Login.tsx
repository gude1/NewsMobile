import {ScrollView, StyleSheet, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import React from 'react';
import FormContainer from '../../components/FormContainer';
import StyledInput from '../../components/StyledInput';

type LoginProps = {};

export const Login = ({}: LoginProps): JSX.Element => {
  const {colors} = useTheme();
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps={'always'}>
      <View style={styles.container}>
        <FormContainer
          title="Welcome"
          description="Please sign in with your google account">
          <StyledInput />
          <StyledInput />
          <StyledInput />
        </FormContainer>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // borderWidth: 2,
  },
});
