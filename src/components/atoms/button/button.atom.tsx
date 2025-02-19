import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

type Variant = 'primary' | 'secondary' | 'danger';

type Props = TouchableOpacityProps & {
  variant?: Variant;
  text: string;
};

export default function Button({variant = 'primary', text, ...rest}: Props) {
  return (
    <TouchableOpacity
      {...rest}
      activeOpacity={0.6}
      style={[styles.base, styles[variant]]}>
      <Text style={[styles.text, textStyles[variant]]}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: 8,
    paddingVertical: 12,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  primary: {
    backgroundColor: '#FFC700',
  },
  secondary: {
    backgroundColor: '#8D92A3',
    borderWidth: 1,
    borderColor: '#8D92A3',
  },
  danger: {
    backgroundColor: '#D9435E',
  },
  text: {
    fontWeight: 500,
  },
});

const textStyles: Record<Variant, {color: string}> = {
  primary: {color: '#020202'},
  secondary: {color: 'white'},
  danger: {color: 'white'},
};
