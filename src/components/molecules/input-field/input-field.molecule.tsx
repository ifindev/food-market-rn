import Input from '@components/atoms/input/input.atom';
import Typography from '@components/atoms/typography/typography.atom';
import React from 'react';
import {StyleSheet, TextInputProps, View} from 'react-native';

type Props = TextInputProps & {
  label: string;
  error?: string;
};

export default function InputField({label, error, ...inputProps}: Props) {
  return (
    <View style={styles.container}>
      <Typography.Body16 variant={error ? 'danger' : 'primary'}>
        {label}
      </Typography.Body16>
      <Input error={error} {...inputProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
  },
});
