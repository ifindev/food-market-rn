import React from 'react';
import homeRoute from '@modules/home/home.route';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  AppProtectedRoute,
  ProtectedStackParamList,
} from '@typings/navigation.type';

const protectedRoutes: AppProtectedRoute[] = [homeRoute];

const ProtectedStack = createNativeStackNavigator<ProtectedStackParamList>();

export default function ProtectedNavigator() {
  return (
    <ProtectedStack.Navigator screenOptions={{headerShown: false}}>
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
