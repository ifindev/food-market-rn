import React from 'react';
import {SafeAreaView, StyleSheet, useColorScheme, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import UserGreetings from '../components/UserGreetings';
import Categories from '../components/Categories';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={{...backgroundStyle, ...styles.safeAreaContainer}}>
      <View style={styles.container}>
        <UserGreetings />
        <Categories />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    height: '100%',
    padding: 24,
  },
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

export default App;
