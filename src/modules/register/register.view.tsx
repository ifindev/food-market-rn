import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Button from '@components/atoms/button/button.atom';
import Header from '@components/molecules/header/header.molecule';
import InputField from '@components/molecules/input-field/input-field.molecule';
import ErrorCard from '@components/molecules/error-card/error-card.molecule';
import PhotoPicker from '@components/molecules/photo-picker/photo-picker.molecule';
import useRegisterViewModel from './register.view-model';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export default function RegisterView() {
  const {handlePressBack, handlePressContinue, error, setError} =
    useRegisterViewModel();

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={-150}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled">
          {error && <ErrorCard onClose={() => setError('')} message={error} />}
          <Header
            title="Sign Up"
            subtitle="Register and eat"
            onBack={handlePressBack}
          />
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
            <Button text="Continue" onPress={handlePressContinue} />
          </View>
        </KeyboardAwareScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FAFAFC',
  },
  scrollContainer: {
    flexGrow: 1,
    flexDirection: 'column',
    gap: 24,
  },
  formContainer: {
    height: '100%',
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
  },
  inputFieldsContainer: {
    flexDirection: 'column',
    gap: 16,
  },
});
