import React from 'react';
import {SafeAreaView, StyleSheet, useColorScheme, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './navigation/auth.navigation';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <SafeAreaView style={[backgroundStyle, styles.safeAreaContainer]}>
        <View style={styles.container}>
          <AuthNavigator />
        </View>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: '#FAFAFC',
  },
});

export default App;
