import React from 'react';
import loginRoute from '@modules/login/login.route';
import registerAddressRoute from '@modules/register-address/register-address.route';
import registerRoute from '@modules/register/register.route';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppAuthRoute, AuthStackParamList} from '@typings/navigation.type';

const authRoutes: AppAuthRoute[] = [
  loginRoute,
  registerRoute,
  registerAddressRoute,
];

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

export default function AuthNavigator() {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      {authRoutes.map(route => (
        <AuthStack.Screen
          key={route.name}
          name={route.name}
          component={route.component}
        />
      ))}
    </AuthStack.Navigator>
  );
}
