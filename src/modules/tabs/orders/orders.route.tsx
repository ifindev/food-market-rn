import React from 'react';
import {AppTabRoute} from '@typings/navigation.type';
import OrdersView from './orders.view';
import OrderActive from '@components/atoms/icons/order-active.icon';
import Order from '@components/atoms/icons/order.icon';

const ordersRoute: AppTabRoute = {
  component: OrdersView,
  name: 'Orders',
  options: {
    tabBarIcon: ({focused}) => (focused ? <OrderActive /> : <Order />),
  },
};

export default ordersRoute;
