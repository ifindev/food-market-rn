import {FunctionComponent} from 'react';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';

// #region AUTH ROUTES STACK TYPES
export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  RegisterAddress: undefined;
  RegisterSuccess: undefined;
};
// #endregion

// #region PROTECTED ROUTES
export type ProtectedStackParamList = {
  MainApp: undefined;
  OrderFood: undefined;
  OrderDetail: undefined;
  OrderInProgress: undefined;
};
// #endregion
// #region GENERIC APPROUTE TYPE
export type AppRoute<T = {}, StackParamList = {}> = {
  name: keyof StackParamList;
  component: FunctionComponent<T>;
  options?: NativeStackNavigationOptions;
};

export type AppAuthRoute = AppRoute<{}, AuthStackParamList>;

export type AppProtectedRoute = AppRoute<{}, ProtectedStackParamList>;
// #endregion

// #region TAB ROUTES
export type TabStackParamList = {
  Home: undefined;
  Orders: undefined;
  Profile: undefined;
};
// #endregion

// #region TAB ROUTE
export type AppTabRoute = {
  name: keyof TabStackParamList;
  component: FunctionComponent;
  options?: BottomTabNavigationOptions;
};
// #endregion
