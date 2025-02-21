import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './navigation/auth.navigation';
import {useSnapshot} from 'valtio';
import authStore from '@stores/auth.store';
import ProtectedNavigator from './navigation/protected.navigation';

function App(): React.JSX.Element {
  const {token} = useSnapshot(authStore.state);

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.safeAreaContainer}>
        {token ? <ProtectedNavigator /> : <AuthNavigator />}
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
