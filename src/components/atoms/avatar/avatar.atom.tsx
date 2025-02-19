import React from 'react';
import {Image, StyleSheet} from 'react-native';

type Props = {
  src: string;
};

export default function Avatar({src}: Props) {
  return (
    <Image
      style={styles.avatar}
      source={{
        uri: src,
      }}
    />
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
});
