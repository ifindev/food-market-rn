import React from 'react';
import homeRoute from '@modules/tabs/home/home.route';
import ordersRoute from '@modules/tabs/orders/orders.route';
import profileRoute from '@modules/tabs/profile/profile.route';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AppTabRoute} from '@typings/navigation.type';

const Tab = createBottomTabNavigator();

const tabRoutes: AppTabRoute[] = [homeRoute, ordersRoute, profileRoute];

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          paddingTop: 20,
          height: 60,
        },
      }}>
      {tabRoutes.map(route => (
        <Tab.Screen
          key={route.name}
          name={route.name}
          component={route.component}
          options={route.options}
        />
      ))}
    </Tab.Navigator>
  );
}
