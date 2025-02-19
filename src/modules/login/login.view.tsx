import React from 'react';
import {StyleSheet, View} from 'react-native';
import Button from '@components/atoms/button/button.atom';
import Header from '@components/molecules/header/header.molecule';
import InputField from '@components/molecules/input-field/input-field.molecule';

export default function LoginView() {
  return (
    <View style={styles.container}>
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
          <Button variant="secondary" text="Create New Account" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
  },
  formContainer: {
    paddingHorizontal: 24,
    paddingVertical: 26,
    backgroundColor: 'white',
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
