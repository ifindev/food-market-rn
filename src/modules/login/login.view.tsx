import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Button from '@components/atoms/button/button.atom';
import Header from '@components/molecules/header/header.molecule';
import InputField from '@components/molecules/input-field/input-field.molecule';
import useLoginViewModel from './login.view-model';

export default function LoginView() {
  const {handleClickRegister} = useLoginViewModel();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={0}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}>
          <Header title="Sign In" subtitle="Find your best meal ever" />
          <View style={styles.formContainer}>
            <View style={styles.inputFieldsContainer}>
              <InputField
                label="Email Address"
                placeholder="Type your email address"
                keyboardType="email-address"
              />
              <InputField
                secureTextEntry
                label="Password"
                placeholder="Type your password"
              />
            </View>
            <View style={styles.buttonsContainer}>
              <Button text="Sign In" />
              <Button
                variant="secondary"
                text="Create New Account"
                onPress={handleClickRegister}
              />
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFC',
  },
  scrollContainer: {
    flexGrow: 1,
    flexDirection: 'column',
    gap: 24,
  },
  formContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
  },
  inputFieldsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
  },
});
