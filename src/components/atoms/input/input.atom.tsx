import React, {useState} from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';

type Props = TextInputProps & {
  error?: string;
};

export default function Input({error, style, ...props}: Props) {
  // #region FOCUS STATE
  const [isFocused, setIsFocused] = useState(false);
  // #endregion

  return (
    <TextInput
      placeholderTextColor="#8D92A3"
      style={[
        styles.input,
        isFocused && styles.focusedInput,
        error && styles.errorInput,
        style,
      ]}
      {...props}
      autoCorrect={false}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    color: '#020202',
  },
  focusedInput: {
    borderColor: '#1ABC9C',
  },
  errorInput: {
    borderColor: '#D9435E',
  },
});
