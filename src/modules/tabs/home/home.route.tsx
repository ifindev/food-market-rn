import React from 'react';
import {AppTabRoute} from '@typings/navigation.type';
import HomeView from './home.view';
import HomeActive from '@components/atoms/icons/home-active.icon';
import Home from '@components/atoms/icons/home.icon';

const homeRoute: AppTabRoute = {
  component: HomeView,
  name: 'Home',
  options: {
    tabBarIcon: ({focused}) => (focused ? <HomeActive /> : <Home />),
  },
};

export default homeRoute;
