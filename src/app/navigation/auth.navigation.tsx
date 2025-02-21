import React from 'react';
import loginRoute from '@modules/auth/login/login.route';
import registerAddressRoute from '@modules/auth/register-address/register-address.route';
import registerRoute from '@modules/auth/register/register.route';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppAuthRoute, AuthStackParamList} from '@typings/navigation.type';
import registerSuccessRoute from '@modules/auth/register-success/register-success.route';

const authRoutes: AppAuthRoute[] = [
  loginRoute,
  registerRoute,
  registerAddressRoute,
  registerSuccessRoute,
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
          options={route.options}
        />
      ))}
    </AuthStack.Navigator>
  );
}
