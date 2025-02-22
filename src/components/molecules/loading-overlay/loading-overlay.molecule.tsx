import Typography from '@components/atoms/typography/typography.atom';
import React from 'react';
import {View, ActivityIndicator, StyleSheet, Modal} from 'react-native';

type LoadingProps = {
  visible: boolean;
  message?: string;
};

export default function LoadingOverlay({
  visible,
  message = 'Loading...',
}: LoadingProps) {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#FFC700" />
          <Typography.Body14 style={styles.text}>{message}</Typography.Body14>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    maxWidth: 200,
    flexDirection: 'column',
    gap: 12,
  },
  text: {
    textAlign: 'center',
  },
});
