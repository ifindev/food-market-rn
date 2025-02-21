import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  AppProtectedRoute,
  ProtectedStackParamList,
} from '@typings/navigation.type';
import TabNavigator from './tabs.navigation';

const protectedRoutes: AppProtectedRoute[] = [];

const ProtectedStack = createNativeStackNavigator<ProtectedStackParamList>();

export default function ProtectedNavigator() {
  return (
    <ProtectedStack.Navigator screenOptions={{headerShown: false}}>
      <ProtectedStack.Screen name="MainApp" component={TabNavigator} />
      {protectedRoutes.map(route => (
        <ProtectedStack.Screen
          key={route.name}
          name={route.name}
          component={route.component}
          options={route.options}
        />
      ))}
    </ProtectedStack.Navigator>
  );
}
