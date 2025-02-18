import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export default function UserGreetings() {
  return (
    <View style={styles.userContainer}>
      <View style={styles.userGreetingContainer}>
        <Text style={styles.greeting}>Hello, Welcome 👋</Text>
        <Text style={styles.fullName}>Albert Stevano</Text>
      </View>
      <Image
        style={styles.avatar}
        source={{
          uri: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  userContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 50,
  },
  userGreetingContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },
  greeting: {
    color: '#787676',
    fontSize: 14,
  },
  fullName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
