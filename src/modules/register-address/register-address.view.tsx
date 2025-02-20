import React from 'react';
import {StyleSheet, View} from 'react-native';
import Button from '@components/atoms/button/button.atom';
import Header from '@components/molecules/header/header.molecule';
import InputField from '@components/molecules/input-field/input-field.molecule';
import Dropdown from '@components/molecules/dropdown/dropdown.molecule';
import useRegisterAddressViewModel from './register-address.view-model';

export default function RegisterAddressView() {
  const {
    handlePressBack,
    handlePressSignUp,
    cities,
    selectedCity,
    setSelectedCity,
  } = useRegisterAddressViewModel();

  return (
    <View style={styles.container}>
      <Header
        title="Address"
        subtitle="Make sure it's valid"
        onBack={handlePressBack}
      />
      <View style={styles.formContainer}>
        <View style={styles.inputFieldsContainer}>
          <InputField
            label="Phone No."
            placeholder="Type your phone number"
            keyboardType="name-phone-pad"
          />
          <InputField label="Address" placeholder="Type your address" />
          <InputField label="House No." placeholder="Type your house number" />
          <Dropdown
            selected={selectedCity}
            onSelect={option => setSelectedCity(option)}
            options={cities}
            placeholder="Select your city"
            label="City"
          />
        </View>
        <Button text="Sign Up Now" onPress={handlePressSignUp} />
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
});
