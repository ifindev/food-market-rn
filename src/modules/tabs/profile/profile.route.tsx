import React from 'react';
import {AppTabRoute} from '@typings/navigation.type';
import ProfileView from './profile.view';
import ProfileActive from '@components/atoms/icons/profile-active.icon';
import Profile from '@components/atoms/icons/profile.icon';

const profileRoute: AppTabRoute = {
  component: ProfileView,
  name: 'Profile',
  options: {
    tabBarIcon: ({focused}) => (focused ? <ProfileActive /> : <Profile />),
  },
};

export default profileRoute;
