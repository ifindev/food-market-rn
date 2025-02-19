import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Button from '@components/atoms/button/button.atom';
import Header from '@components/molecules/header/header.molecule';
import InputField from '@components/molecules/input-field/input-field.molecule';
import ErrorCard from '@components/molecules/error-card/error-card.molecule';
import PhotoPicker from '@components/molecules/photo-picker/photo-picker.molecule';

export default function RegisterView() {
  const [error, setError] = useState('');

  return (
    <View style={styles.container}>
      {error && <ErrorCard onClose={() => setError('')} message={error} />}
      <Header title="Sign Up" subtitle="Register and eat" onBack={() => {}} />
      <View style={styles.formContainer}>
        <PhotoPicker onImageSelected={() => {}} />
        <View style={styles.inputFieldsContainer}>
          <InputField label="Full Name" placeholder="Type your full name" />
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
        <Button
          text="Continue"
          onPress={() => setError('Email has already been registered.')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    position: 'relative',
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
});
