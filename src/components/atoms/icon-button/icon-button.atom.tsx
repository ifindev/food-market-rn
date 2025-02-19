import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

type Props = TouchableOpacityProps & {
  icon: React.ReactNode;
};

export default function IconButton({icon, ...rest}: Props) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.6} {...rest}>
      {icon}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 24,
    height: 24,
  },
});
