import React from 'react';
import Typography from '@components/atoms/typography/typography.atom';
import {Image, StyleSheet, View} from 'react-native';
import Button from '@components/atoms/button/button.atom';
import authStore from '@stores/auth.store';

export default function RegisterSuccessView() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../../assets/meditation.png')}
      />
      <View style={styles.textContainer}>
        <Typography.Heading2>Yeay! Completed</Typography.Heading2>
        <Typography.Body14 style={styles.description}>
          Now you are able to order{'\n'}
          some foods as a self-reward
        </Typography.Body14>
      </View>
      <Button onPress={authStore.actions.login} text="Find Foods" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 80,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 32,
  },
  image: {
    width: 200,
    height: 289,
  },
  textContainer: {
    flexDirection: 'column',
    gap: 8,
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
  },
});
